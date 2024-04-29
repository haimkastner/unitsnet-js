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
	export function buildMathOperatorCode(
		operator: MathOperatorType,
		values: MathStringBuilderNode[],
	): string {

		const identifiers: ts.Identifier[] = [];
		const valueStatements: ts.VariableStatement[] = [];

		for (let i = 0; i < values.length; i++) {
			const identifierName = `value${i}`;
			identifiers.push(ts.createIdentifier(identifierName));
			valueStatements.push(createVariableStatementForMathNode(identifierName, values[i]));
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


	export function buildBinaryOperatorCode(
		valueA: MathStringBuilderNode,
		valueB: MathStringBuilderNode,
		operator: BinaryOperatorType,
	): string {

		const valueAStatement = createVariableStatementForMathNode('valueA', valueA);
		const valueBStatement = createVariableStatementForMathNode('valueB', valueB);

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
			ts.createSourceFile('dummy.ts', '', ts.ScriptTarget.ES2020)
		);
	}

	function createVariableStatementForMathNode(
		variableName: string,
		node: MathStringBuilderNode
	): ts.VariableStatement {
		const resolvedNodeInit: ts.Identifier | ts.CallExpression = node.invokeRequired
			? ts.createCall(
				ts.createParen(ts.createIdentifier(node.execute())),
				undefined,
				[
					ts.createIdentifier('x'),
					ts.createIdentifier('operatorOverrides')
				]
			)
			: ts.createIdentifier(node.execute())

		// Generate TypeScript AST nodes for const declaration
		const declaration = ts.createVariableDeclaration(variableName, undefined, resolvedNodeInit);
		const variableDeclarationList = ts.createVariableDeclarationList(
			[declaration],
			ts.NodeFlags.Const // Use NodeFlags.Const to create a const declaration
		);

		// Create the variable statement with const declaration
		return ts.createVariableStatement(undefined, variableDeclarationList);
	}

	function createBinaryOperatorIfFlow(valueAVarName: string, valueBVarName: string, operator: BinaryOperatorType): ts.IfStatement {
		let operatorToken: ts.SyntaxKind;
		switch (operator) {
			case BinaryOperatorType.Add:
				operatorToken = ts.SyntaxKind.PlusToken;
				break;
			case BinaryOperatorType.Sub:
				operatorToken = ts.SyntaxKind.MinusToken;
				break;
			case BinaryOperatorType.Mul:
				operatorToken = ts.SyntaxKind.AsteriskToken;
				break;
			case BinaryOperatorType.Div:
				operatorToken = ts.SyntaxKind.SlashToken;
				break;
			case BinaryOperatorType.Mod:
				operatorToken = ts.SyntaxKind.PercentToken;
				break;
			default:
				throw new Error(`Operator kind '${operator}' is not supported as a binary operator`);
		}

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
}
