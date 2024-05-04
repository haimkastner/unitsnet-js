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

	export function emitSelfInvokingFunction(funcExpression: ts.FunctionExpression, paramNames: string[]): ts.CallExpression {
		return ts.createCall(
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

	function createConstVariableStatement(name: string, initializer?: ts.Expression): ts.VariableStatement {
		const declaration = ts.createVariableDeclaration(name, undefined, initializer);
		const variableDeclarationList = ts.createVariableDeclarationList(
			[declaration],
			ts.NodeFlags.Const // Use NodeFlags.Const to create a const declaration
		);

		// Create the variable statement with const declaration
		return ts.createVariableStatement(undefined, variableDeclarationList);
	}

	export function createIfElse(
		condition: ts.Expression,
		ifStatements: ts.Statement[],
		elseStatements: ts.Statement[]
	): ts.IfStatement {
		return ts.createIf(
			condition,
			ts.createBlock([...ifStatements]),
			ts.createBlock([...elseStatements]),
		);
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

	export function createNumericLiteralExpressionStatement(value: string): ts.ExpressionStatement {
		return ts.createExpressionStatement(ts.createNumericLiteral(value));
	}

	export function createLiteralExpressionStatement(value: string): ts.ExpressionStatement {
		return ts.createExpressionStatement(ts.createLiteral(value));
	}

	export function getIdentifierFromNode(statement: ts.Node): ts.Identifier | undefined {
		if (ts.isIdentifier(statement)) {
			return statement;
		}

		if (ts.isExpressionStatement(statement)) {
			return getIdentifierFromNode(statement.expression);
		}

		if (ts.isVariableStatement(statement)) {
			// For variable declarations
			const declaration = statement.declarationList.declarations[0]; // Assuming single declaration
			return ts.isIdentifier(declaration.name) ? declaration.name : undefined;
		}

		if (ts.isFunctionDeclaration(statement)) {
			// For function declarations
			return statement.name;
		}

		if (ts.isImportDeclaration(statement)) {
			// For import/export declarations
			return statement.importClause && statement.importClause.name;
		}

		return undefined;
	}

	export function tryConvertToReturnStatement(statement: ts.Statement): ts.ReturnStatement | undefined {
		if (ts.isVariableStatement(statement)) {
			const declarationList = statement.declarationList;
			if (declarationList) {
				for (const declaration of declarationList.declarations) {
					if (ts.isVariableDeclaration(declaration) && declaration.initializer) {
						return ts.createReturn(declaration.initializer);
					}
				}
			}
		}

		if (ts.isVariableDeclaration(statement) && statement.initializer) {
			return ts.createReturn(statement.initializer);
		}

		if (ts.isExpressionStatement(statement)) {
			return ts.createReturn(statement.expression);
		}

		return undefined;
	}
}
