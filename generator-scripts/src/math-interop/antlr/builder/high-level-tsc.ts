import ts from 'typescript';
import { MathStringBuilderNode } from './nodes/math-string-builder-node';

/**
 * Represents unary operator types
 *
 * @export
 * @enum {string}
 */
export enum UnaryOperatorType {
    Sqrt = 'sqrt',
}

/**
 * Represents binary operator types
 *
 * @export
 * @enum {string}
 */
export enum BinaryOperatorType {
    Add = 'add',
    Sub = 'sub',
    Mul = 'mul',
    Div = 'div',
    Mod = 'mod',
    Pow = 'pow',
}
/**
 * Represents an operator type, either unary or binary
 */
type OperatorType = UnaryOperatorType | BinaryOperatorType;

type PreparedVariables = { preRequisiteCode: ts.Statement[], callExpressions: ts.Expression[] };

/**
 * Provides higher-level abstractions over the TypeScript Compiler to build code from math equations
 */
export namespace HighLevelTsc {

    /**
     * Prepares the AST sections needed to use the given nodes in subsequent operations
     *
     * @description Nodes must be resolved before they can be used in code.
     * For simple variable/constant nodes, this just means escaping/creating an identifier.
     * For complex operations, like nested math functions, the node must be run through some pre-processing.
     *
     * This function resolves the nodes and determines what pre-requisite code must run
     * before the a reference to the result can be used.
     *
     * It also creates a usable identifier for each variable which can be used to reference it
     *
     * @param {MathStringBuilderNode[]} values The nodes from which to construct the code to be used
     * @return {PreparedVariables} An object containing an array of pre-requisite statements
     * that must be run before the the contents of the node can be used and an array of call expressions which can be passed to any function
     * and reference the values obtained by running the pre-requisite code
     */
    function prepareVariables(values: MathStringBuilderNode[]): PreparedVariables {
        const preRequisiteCode: ts.Statement[] = [];
        const callExpressions: ts.Expression[] = [];

        for (const value of values) {
            const resolved = value.execute();
            if (value.isPrimitive) {
                const exprState = (resolved[0]) as ts.ExpressionStatement;
                callExpressions.push(exprState.expression);
            } else {
                preRequisiteCode.push(...resolved);
                callExpressions.push(ts.createIdentifier(value.id));
            }
        }

        return { preRequisiteCode, callExpressions };
    }

    /**
     * Builds an unary operator internal function call
     *
     * @description BaseUnit derived classes have internal math method abstractions like 'internalSqrt'.
     * This method builds code that takes the given value and runs it through one of the internal methods, depending on the choice of 'operator'
     *
     * @param resultConstantId The name of the variable the results should be returned in
     * @param operator The unary operator type
     * @param value The MathStringBuilderNode instance representing the operand
     * @returns {ts.Statement[]} An array of TypeScript Statements representing the built unary operator function call
     */
    export function buildUnaryOperator(
        resultConstantId: string,
        operator: UnaryOperatorType,
        value: MathStringBuilderNode
    ): ts.Statement[] {
        return buildOperator(resultConstantId, [value], operator);
    }

    /**
     * Builds a binary operator internal function call
     *
     * @description BaseUnit derived classes have internal math method abstractions like 'internalSqrt'.
     * This method builds code that takes the given value and runs it through one of the internal methods, depending on the choice of 'operator'
     *
     * @param resultConstantId The name of the variable the results should be returned in
     * @param operator The binary operator type
     * @param valueA The MathStringBuilderNode instance representing the first operand
     * @param valueB The MathStringBuilderNode instance representing the second operand
     * @returns {ts.Statement[]} An array of TypeScript Statements representing the built binary operator function call
     */
    export function buildBinaryOperator(
        resultConstantId: string,
        operator: BinaryOperatorType,
        valueA: MathStringBuilderNode,
        valueB: MathStringBuilderNode
    ): ts.Statement[] {
        return buildOperator(resultConstantId, [valueA, valueB], operator);
    }

    /**
     * Builds an internal mathematics function call
     *
     * @description BaseUnit derived classes have internal math method abstractions like 'internalSqrt'.
     * This method builds code that takes the given value and runs it through one of the internal methods, depending on the choice of 'operator'
     *
     * @param {string} resultConstantId The name of the variable the results should be returned in
     * @param {MathStringBuilderNode[]} values The values to provide to the operator implementation function
     * @param {OperatorType} operator The operator to run the resolved values through
     * @return {ts.Statement[]} An array of TypeScript Statements representing the built operator function call
     */
    function buildOperator(
        resultConstantId: string,
        values: MathStringBuilderNode[],
        operator: OperatorType
    ): ts.Statement[] {
        const { preRequisiteCode, callExpressions } = prepareVariables(values);
        const call = getInternalMathOperationCall(operator, callExpressions);
        const resultVariable = createConstVariableStatement(resultConstantId, call);

        return [
            ...preRequisiteCode,
            resultVariable,
        ];
    }

    /**
     * Emits a self-invoking function
     *
     * @description A self invoking function is any function that declares and immediately runs.
     * For example,
     * ```
     * function () { console.log(''); }
     * ```
     * will be transformed into
     * ```
     * (function () { console.log(''); })();
     * ```
     * @param funcExpression The function expression to wrap in a self-invoking wrapper
     * @param paramNames An array of parameter names to invoke the function with
     * @returns {ts.CallExpression} A TypeScript call expression representing the emitted self-invoking function
     */
    export function emitSelfInvokingFunction(funcExpression: ts.FunctionExpression, paramNames: string[]): ts.CallExpression {
        return ts.createCall(
            ts.createParen(funcExpression), // Wrap function expression in parentheses
            undefined, // No type arguments
            paramNames?.map((paramName) => ts.createIdentifier(paramName)) ?? []
        );
    }

    /**
     * Emits a TypeScript code string from a given node
     *
     * @param node The TypeScript node to emit
     * @param target The target TypeScript ES version
     * @returns {string} A TypeScript code string
     */
    export function emitCode(node: ts.Node, target: ts.ScriptTarget = ts.ScriptTarget.ES2020): string {
        return ts.createPrinter().printNode(
            ts.EmitHint.Unspecified,
            node,
            ts.createSourceFile('dummy.ts', '', target)
        );
    }

    /**
     * Creates a 'const' variable with the given name and value
     *
     * @param {string} name The name of the constant to create
     * @param {ts.Expression} [initializer] The constant's value
     * @return {ts.VariableStatement} A variable statement for the new constant
     */
    function createConstVariableStatement(name: string, initializer?: ts.Expression): ts.VariableStatement {
        const declaration = ts.createVariableDeclaration(name, undefined, initializer);
        const variableDeclarationList = ts.createVariableDeclarationList(
            [declaration],
            ts.NodeFlags.Const // Use NodeFlags.Const to create a const declaration
        );

        // Create the variable statement with const declaration
        return ts.createVariableStatement(undefined, variableDeclarationList);
    }


    /**
     * Creates an 'if-else' statement
     *
     * @export
     * @param {ts.Expression} condition The condition expression
     * @param {ts.Statement[]} ifStatements The statements in the 'if' block
     * @param {ts.Statement[]} elseStatements The statements in the 'else' block
     * @return {ts.IfStatement} A TypeScript if-else statement
     */
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

    /**
     * Gets the BaseUnit internal implementing function name for the given operator
     *
     * @param operator The operator type
     * @returns {string} The internal implementing function name of the operator
     * @throws An error if the operator type is unknown
     */
    function getInternalOperatorImplName(operator: OperatorType): string {
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
            case BinaryOperatorType.Pow:
                return 'internalPow';
            case UnaryOperatorType.Sqrt:
                return 'internalSqrt';
            default:
                throw new Error(`Operator kind '${operator}' is unknown and not supported`);
        }
    }

    /**
     * Creates a call to the internal implementation for the given operator with the given argument expressions
     *
     * @param {OperatorType} operator The operator to be used
     * @param {ts.Expression[]} args The argument expressions to pass to the operator implementation
     * @return {ts.Expression} A TypeScript Expression that representing the internal implementation call
     */
    function getInternalMathOperationCall(operator: OperatorType, args: ts.Expression[]): ts.Expression {
        const methodName = getInternalOperatorImplName(operator);
        const implAccess = ts.createPropertyAccess(ts.createSuper(), methodName);
        return ts.createCall(implAccess, undefined, args);
    }

    /**
     * Creates a numeric literal expression statement
     *
     * @param value The value of the numeric literal
     * @returns {ts.ExpressionStatement} A TypeScript Expression Statement representing a numeric literal
     */
    export function createNumericLiteralExpressionStatement(value: string): ts.ExpressionStatement {
        return ts.createExpressionStatement(ts.createNumericLiteral(value));
    }

    /**
     * Creates a literal expression statement
     *
     * @param value The value of the literal
     * @returns {ts.ExpressionStatement} A TypeScript Expression Statement representing a literal
     */
    export function createLiteralExpressionStatement(value: string): ts.ExpressionStatement {
        return ts.createExpressionStatement(ts.createLiteral(value));
    }

    /**
     * Gets a TypeScript Identifier from a TypeScript node
     *
     * @param statement The TypeScript node to try and get the identifier from
     * @returns {ts.Identifier | undefined} The identifier found in the node or undefined, if none was found
     */
    export function getIdentifierFromNode(statement: ts.Node): ts.Identifier | undefined {
        if (ts.isIdentifier(statement)) {
            return statement;
        }

        if (ts.isExpressionStatement(statement)) {
            return getIdentifierFromNode(statement.expression);
        }

        if (ts.isVariableStatement(statement)) {
            // Variable declarations
            const declaration = statement.declarationList.declarations[0]; // Assuming single declaration
            return ts.isIdentifier(declaration.name) ? declaration.name : undefined;
        }

        if (ts.isFunctionDeclaration(statement)) {
            // Function declarations
            return statement.name;
        }

        if (ts.isImportDeclaration(statement)) {
            // Import/export declarations
            return statement.importClause && statement.importClause.name;
        }

        return undefined;
    }

    /**
     * Attempts to convert a TypeScript Statement into a return statement
     *
     * @description To save in un-compiled code size, some statements can be optimized.
     * For example,
     * ```
     * const v3 = super.internalPow(2, 3);
     * return v3;
     * ```
     * could be re-written as
     * ```
     * return super.internalPow(2, 3);
     * ```
     * 
     * This function attempts to do the same to the given statement
     * 
     * @param statement The TypeScript statement to convert
     * @returns {ts.ReturnStatement | undefined} A TypeScript return statement if conversion is possible, otherwise undefined
     */
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
