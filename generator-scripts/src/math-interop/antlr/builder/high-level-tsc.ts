import ts from 'typescript';
import { OperatorOverrides } from '../../operators-overrides';
import { MathStringBuilderNode } from './nodes/math-string-builder-node';

export enum MathOperatorType {
	Sqrt = 'sqrt',
	Pow = 'pow',
}

export enum BinaryOperatorType {
	Add = 'add',
	Sub = 'sub',
	Mul = 'mul',
	Div = 'div',
	Mod = 'mod',
}

type OverridableOperator = keyof OperatorOverrides;

export namespace HighLevelTsc {
	/**
	 * Copied directly from nanoid at https://github.com/ai/nanoid/blob/main/non-secure/index.js
	 * to avoid ES import issues
	 *
	 * @export
	 * @return {*}  {string}
	 */
	export function getRandomVariableId(): string {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let id = ''
		// A compact alternative for `for (var i = 0; i < step; i++)`.
		let i = 8;
		while (i--) {
			// `| 0` is more compact and faster than `Math.floor()`.
			id += alphabet[(Math.random() * alphabet.length) | 0]
		}
		return id
	}

	export function buildMathCall(
		resultConstantId: string,
		operator: MathOperatorType,
		values: MathStringBuilderNode[],
	): ts.Statement[] {
		const preRequisiteCode: ts.Statement[] = [];
		const parameterExpressions: ts.Expression[] = [];

		for (const value of values) {
			const resolved = value.execute();
			if (value.isPrimitive) {
				const exprState = (resolved[0]) as ts.ExpressionStatement;
				parameterExpressions.push(exprState.expression);
			} else {
				preRequisiteCode.push(...resolved);
				parameterExpressions.push(ts.createIdentifier(value.id));
			}
		}

		const call = createMathMethodCall(operator, parameterExpressions);

		const resultVariable = createConstVariableStatement(resultConstantId, call);

		return [
			...preRequisiteCode,
			resultVariable,
		];
	}

	export function buildMathOperatorCode(
		operator: MathOperatorType,
		values: MathStringBuilderNode[],
	): string {

		const identifiers: ts.Identifier[] = [];
		const valueStatements: ts.VariableStatement[] = [];

		for (let i = 0; i < values.length; i++) {
			const identifierName = `value${i}`;
			identifiers.push(ts.createIdentifier(identifierName));
			const { statement } = createVariableStatementForMathNode(identifierName, values[i]);
			valueStatements.push(statement);
		}

		const mathIdentifier = ts.createIdentifier('Math');
		const funcIdentifier = ts.createIdentifier(operator);

		const mathPropAccess = ts.createPropertyAccess(mathIdentifier, funcIdentifier);

		const mathCall = ts.createCall(
			mathPropAccess,
			undefined,
			identifiers
		);

		const ifElseCode = createOperatorOverridesIfReturnFlow(operator, identifiers, mathCall);

		const funcExpression = createStandardFunction(
			ts.createBlock([
				...valueStatements,
				ifElseCode
			]),
			[
				{ name: 'x', type: 'number' },
				{ name: 'operatorOverrides', type: 'OperatorOverrides' }
			]
		);

		return emitCode(funcExpression);
	}

	function createMathMethodCall(operator: MathOperatorType, paramIdentifiers: ts.Identifier[] | ts.Expression[]): ts.CallExpression {
		const mathIdentifier = ts.createIdentifier('Math');
		const funcIdentifier = ts.createIdentifier(operator);

		const mathPropAccess = ts.createPropertyAccess(mathIdentifier, funcIdentifier);

		return ts.createCall(
			mathPropAccess,
			undefined,
			paramIdentifiers
		);
	}

	export function buildBinaryOperator(
		resultConstantId: string,
		valueA: MathStringBuilderNode,
		valueB: MathStringBuilderNode,
		operator: BinaryOperatorType
	): ts.Statement[] {
		const resolvedValueA = valueA.execute();
		const resolvedValueB = valueB.execute();

		const preRequisiteCode: ts.Statement[] = [];
		const callExpressions: ts.Expression[] = [];
	
		if (valueA.isPrimitive) {
			const exprState = (resolvedValueA[0]) as ts.ExpressionStatement;
			callExpressions.push(exprState.expression);
		} else {
			preRequisiteCode.push(...resolvedValueA);
			callExpressions.push(ts.createIdentifier(valueA.id));
		}

		if (valueB.isPrimitive) {
			const exprState = (resolvedValueB[0]) as ts.ExpressionStatement;
			callExpressions.push(exprState.expression);
		} else {
			preRequisiteCode.push(...resolvedValueB);
			callExpressions.push(ts.createIdentifier(valueB.id));
		}

		const call = getBinaryOperationCall(operator, callExpressions);

		const resultVariable = createConstVariableStatement(resultConstantId, call);

		return [
			...preRequisiteCode,
			resultVariable,
		];
	}


	export function buildBinaryOperatorCode(
		valueA: MathStringBuilderNode,
		valueB: MathStringBuilderNode,
		operator: BinaryOperatorType,
	): string {

		const { statement: valueAStatement } = createVariableStatementForMathNode('valueA', valueA);
		const { statement: valueBStatement } = createVariableStatementForMathNode('valueB', valueB);

		const ifStatement = createBinaryOperatorIfFlow('valueA', 'valueB', operator);

		const funcExpression = createStandardFunction(
			ts.createBlock([
				valueAStatement,
				valueBStatement,
				ifStatement
			]),
			[
				{ name: 'x', type: 'number' },
				{ name: 'operatorOverrides', type: 'OperatorOverrides' }
			]
		);

		return emitCode(funcExpression);
	}

	export function createStandardFunction(
		content: ts.Block,
		parameters: { name: string, type: string }[],
		name?: string
	): ts.FunctionExpression {
		const params = parameters?.map((paramInfo) => {
			return ts.createParameter(
				undefined,
				undefined,
				undefined,
				paramInfo.name,
				undefined,
				ts.createTypeReferenceNode(paramInfo.type, undefined),
				undefined
			);
		}) ?? [];

		return ts.createFunctionExpression(
			undefined,
			undefined,
			name,
			undefined,
			params,
			undefined,
			content
		);
	}

	export function emitSelfInvokingFunction(funcExpression: ts.FunctionExpression, paramNames: string[]) {
		ts.createCall(
			ts.createParen(funcExpression), // Wrap function expression in parentheses
			undefined, // No type arguments
			paramNames?.map((paramName) => ts.createIdentifier(paramName)) ?? []
		);
	}

	export function emitCode(node: ts.Node, target: ts.ScriptTarget = ts.ScriptTarget.ES2020): string {
		return ts.createPrinter().printNode(
			ts.EmitHint.Unspecified,
			node,
			ts.createSourceFile('dummy.ts', '', target)
		);
	}

	function createVariableStatementForMathNode(
		variableName: string,
		node: MathStringBuilderNode
	): { statement: ts.VariableStatement, identifier: ts.Identifier } {
		const identifier = ts.createIdentifier('BROKEN');

		const resolvedNodeInit: ts.Identifier | ts.CallExpression = node.isPrimitive
			? ts.createCall(
				ts.createParen(identifier),
				undefined,
				[
					ts.createIdentifier('x'),
					ts.createIdentifier('operatorOverrides')
				]
			)
			: identifier

		// Generate TypeScript AST nodes for const declaration
		const declaration = ts.createVariableDeclaration(variableName, undefined, resolvedNodeInit);
		const variableDeclarationList = ts.createVariableDeclarationList(
			[declaration],
			ts.NodeFlags.Const // Use NodeFlags.Const to create a const declaration
		);

		// Create the variable statement with const declaration
		return { identifier, statement: ts.createVariableStatement(undefined, variableDeclarationList) };
	}

	function createConstVariableStatement(name: string, initializer?: ts.Expression): ts.VariableStatement {
		const declaration = ts.createVariableDeclaration(name, undefined, initializer);
		const variableDeclarationList = ts.createVariableDeclarationList(
			[declaration],
			ts.NodeFlags.Const // Use NodeFlags.Const to create a const declaration
		);

		// Create the variable statement with const declaration
		return ts.createVariableStatement(undefined, variableDeclarationList);
	}

	function createBinaryOperatorIfFlow(valueAVarName: string, valueBVarName: string, operator: BinaryOperatorType): ts.IfStatement {
		let operatorToken: ts.BinaryOperator = getTokenForBinaryArithmeticOperator(operator);
		return ts.createIf(
			ts.createPropertyAccess(ts.createIdentifier('operatorOverrides'), operator),
			ts.createBlock([
				ts.createReturn(
					ts.createCall(
						ts.createPropertyAccess(ts.createIdentifier('operatorOverrides'), operator),
						undefined,
						[ts.createIdentifier(valueAVarName), ts.createIdentifier(valueBVarName)]
					)
				)
			]),
			ts.createBlock([
				ts.createReturn(
					ts.createBinary(
						ts.createIdentifier(valueAVarName),
						operatorToken,
						ts.createIdentifier(valueBVarName)
					)
				)
			])
		);
	}

	function createOperatorOverridesIfReturnFlow(
		operatorName: OverridableOperator,
		variables: (string | ts.Identifier)[],
		elseContent: ts.Expression
	) {
		const identifiers: ts.Identifier[] = [];
		for (const variable of variables) {
			identifiers.push(typeof variable === 'string' ? ts.createIdentifier(variable) : variable);
		}

		return ts.createIf(
			ts.createPropertyAccess(ts.createIdentifier('operatorOverrides'), operatorName),
			ts.createBlock([
				ts.createReturn(
					ts.createCall(
						ts.createPropertyAccess(ts.createIdentifier('operatorOverrides'), operatorName),
						undefined,
						identifiers
					)
				)
			]),
			ts.createBlock([ts.createReturn(elseContent)])
		);
	}

	function getTokenForBinaryArithmeticOperator(operator: BinaryOperatorType): ts.BinaryOperator {
		switch (operator) {
			case BinaryOperatorType.Add:
				return ts.SyntaxKind.PlusToken;
			case BinaryOperatorType.Sub:
				return ts.SyntaxKind.MinusToken;
			case BinaryOperatorType.Mul:
				return ts.SyntaxKind.AsteriskToken;
			case BinaryOperatorType.Div:
				return ts.SyntaxKind.SlashToken;
			case BinaryOperatorType.Mod:
				return ts.SyntaxKind.PercentToken;
			default:
				throw new Error(`Operator kind '${operator}' is not supported as a binary operator`);
		}
	}

	function getInternalBinaryOperatorImplName(operator: BinaryOperatorType): string {
		switch (operator) {
			case BinaryOperatorType.Add:
				return 'internalAdd';
			case BinaryOperatorType.Sub:
				return 'internalSubtract';
			case BinaryOperatorType.Mul:
				return 'internalMultiply';
			case BinaryOperatorType.Div:
				return 'internalDivide';
			case BinaryOperatorType.Mod:
				return 'internalModulo';
			default:
				throw new Error(`Operator kind '${operator}' is unknown and not supported`);
		}
	}

	function getBinaryOperationCall(operator: BinaryOperatorType, args: ts.Expression[]): ts.Expression {
		const methodName = getInternalBinaryOperatorImplName(operator);

		const implAccess = ts.createPropertyAccess(ts.createSuper(), methodName);

		return ts.createCall(implAccess, undefined, args);
	}

	export function createNumericLiteralExpressionStatement(value: string): ts.Statement {
		return ts.createExpressionStatement(ts.createNumericLiteral(value));
	}
}
