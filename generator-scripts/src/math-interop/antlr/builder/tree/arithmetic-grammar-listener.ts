import { ParserRuleContext } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { arithmeticListener as ArithmeticListener } from '../../grammatical/arithmeticListener';
import {
	ExpressionContext,
	AtomContext,
	ScientificContext,
	VariableContext,
	OpAddContext,
	OpDivContext,
	OpMulContext,
	OpPowContext,
	OpSubContext,
	EquationStringContext,
	OpSqrtContext,
	OpModContext,
} from '../../grammatical/arithmeticParser';
import { ConstantNode } from '../nodes/constant-node';
import { ExpressionNode } from '../nodes/expression-node';
import { MathStringBuilderNode } from '../nodes/math-string-builder-node';
import { AdditionNode } from '../nodes/operators/addition-node';
import { DivisionNode } from '../nodes/operators/division-node';
import { MultiplicationNode } from '../nodes/operators/multiplication-node';
import { PowerNode } from '../nodes/operators/power-node';
import { SqrtNode } from '../nodes/operators/sqrt-node';
import { SubtractionNode } from '../nodes/operators/subtraction-node';
import { VariableNode } from '../nodes/variable-node';
import { ModulusNode } from '../nodes/operators/modulus-node';
import { IdGenerator } from '../../../../id-generator';

export type IdentifierRemapping = { [identifier: string]: string };

export class ArithmeticGrammarListener implements ArithmeticListener, ParseTreeListener {
	private _ast: MathStringBuilderNode | undefined;

	private readonly _unconsumedNodes: MathStringBuilderNode[] = [];

	public constructor(
		private readonly _idGenerator: IdGenerator,
		private readonly _remapping?: IdentifierRemapping,
		public debug: boolean = false
	) { }

	public getAst(): MathStringBuilderNode | undefined {
		return this._ast;
	}

	public exitEquationString(ctx: EquationStringContext): void {
		this._ast = new ExpressionNode(this._idGenerator, this._unconsumedNodes.pop()!);
	}

	/**
	 * Exit a parse tree produced by `arithmeticParser.expression`.
	 * @param ctx the parse tree
	 */
	public exitExpression(ctx: ExpressionContext): void {
		this.logMessage(`Exit Expression - ${ctx.text}`);
	}

	/**
	 * Exit a parse tree produced by `arithmeticParser.atom`.
	 * @param ctx the parse tree
	 */
	public exitAtom(ctx: AtomContext): void {
		this.logMessage(`Exit Atom - ${ctx.text}`);
	}

	/**
	 * Exit a parse tree produced by `arithmeticParser.scientific`.
	 * @param ctx the parse tree
	 */
	public exitScientific(ctx: ScientificContext): void {
		this.logMessage(`Exit Scientific - ${ctx.text}`);
		this._unconsumedNodes.push(new ConstantNode(this._idGenerator, ctx.text))
	}

	/**
	 * Exit a parse tree produced by `arithmeticParser.variable`.
	 * @param ctx the parse tree
	 */
	public exitVariable(ctx: VariableContext): void {
		this.logMessage(`Exit Variable - ${ctx.text}`);
		this._unconsumedNodes.push(new VariableNode(this._idGenerator, ctx.text, this._remapping))
	}


	public exitOpAdd(ctx: OpAddContext): void {
		this.logMessage(`Exit Add - ${ctx.text}`);
		const valueB = this._unconsumedNodes.pop()!;
		const valueA = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new AdditionNode(this._idGenerator, valueA, valueB));
	}

	public exitOpSub(ctx: OpSubContext): void {
		this.logMessage(`Exit Sub - ${ctx.text}`);
		const valueB = this._unconsumedNodes.pop()!;
		const valueA = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new SubtractionNode(this._idGenerator, valueA, valueB));
	}

	public exitOpDiv(ctx: OpDivContext): void {
		this.logMessage(`Exit Div - ${ctx.text}`);
		const valueB = this._unconsumedNodes.pop()!;
		const valueA = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new DivisionNode(this._idGenerator, valueA, valueB))
	}

	public exitOpMod(ctx: OpModContext): void {
		this.logMessage(`Exit Mod - ${ctx.text}`);
		const valueB = this._unconsumedNodes.pop()!;
		const valueA = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new ModulusNode(this._idGenerator, valueA, valueB))
	}

	public exitOpMul(ctx: OpMulContext): void {
		this.logMessage(`Exit Mul - ${ctx.text}`);
		const valueB = this._unconsumedNodes.pop()!;
		const valueA = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new MultiplicationNode(this._idGenerator, valueA, valueB))
	}

	public exitOpPow(ctx: OpPowContext): void {
		this.logMessage(`Exit Pow - ${ctx.text}`);
		const valueB = this._unconsumedNodes.pop()!;
		const valueA = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new PowerNode(this._idGenerator, valueA, valueB))
	}

	public exitOpSqrt(ctx: OpSqrtContext): void {
		this.logMessage(`Exit Sqrt - ${ctx.text}`);
		const value = this._unconsumedNodes.pop()!;
		this._unconsumedNodes.push(new SqrtNode(this._idGenerator, value))
	}

	public visitTerminal(node: TerminalNode): void {

	}

	public visitErrorNode(node: ErrorNode): void {

	}

	public enterEveryRule(ctx: ParserRuleContext): void {

	}

	public exitEveryRule(ctx: ParserRuleContext): void {

	}

	private logMessage(message: string): void {
		if (this.debug) {
			console.log(message);
		}
	}
}
