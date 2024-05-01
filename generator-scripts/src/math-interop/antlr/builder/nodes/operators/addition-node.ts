import { HighLevelTsc, BinaryOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

export class AdditionNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(private _valueA: MathStringBuilderNode, private _valueB: MathStringBuilderNode) {
		super()
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.buildBinaryOperator(this.id, this._valueA, this._valueB, BinaryOperatorType.Add);
	}
}
