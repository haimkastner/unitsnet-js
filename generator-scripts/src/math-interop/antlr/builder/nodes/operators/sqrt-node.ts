import { HighLevelTsc, MathOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode } from '../math-string-builder-node';

export class SqrtNode implements MathStringBuilderNode {
	public readonly invokeRequired: boolean = true;

	public constructor(private _value: MathStringBuilderNode) { }

	public execute(): string {
		return HighLevelTsc.buildMathOperatorCode(MathOperatorType.Sqrt, [this._value]);
	}
}
