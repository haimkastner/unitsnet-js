import { IdGenerator } from '../../../../../id-generator';
import { HighLevelTsc, MathOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

export class PowerNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(
		idGenerator: IdGenerator,
		private readonly _valueA: MathStringBuilderNode,
		private readonly _valueB: MathStringBuilderNode
	) {
		super(idGenerator)
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.buildMathCall(this.id, MathOperatorType.Pow, [this._valueA, this._valueB]);
	}
}
