import { HighLevelTsc, MathOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode } from '../math-string-builder-node';

export class PowerNode implements MathStringBuilderNode {
	public readonly invokeRequired: boolean = true;

	public constructor(private _valueA: MathStringBuilderNode, private _valueB: MathStringBuilderNode) { }

	public execute(): string {
		return HighLevelTsc.buildMathOperatorCode(MathOperatorType.Pow, [this._valueA, this._valueB]);
	}
}
