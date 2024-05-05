import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import { HighLevelTsc, BinaryOperatorType } from '../../high-level-tsc';
import ts from 'typescript';
import { IdGenerator } from '../../../../../id-generator';

export class MultiplicationNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(
		idGenerator: IdGenerator,
		private readonly _valueA: MathStringBuilderNode,
		private readonly _valueB: MathStringBuilderNode
	) {
		super(idGenerator)
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.buildBinaryOperator(this.id, this._valueA, this._valueB, BinaryOperatorType.Mul);
	}
}
