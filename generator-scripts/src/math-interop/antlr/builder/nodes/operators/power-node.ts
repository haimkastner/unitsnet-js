import { HighLevelTsc, MathOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

export class PowerNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(private _valueA: MathStringBuilderNode, private _valueB: MathStringBuilderNode) {
		super()
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.buildMathCall(this.id, MathOperatorType.Pow, [this._valueA, this._valueB]);
	}
}
