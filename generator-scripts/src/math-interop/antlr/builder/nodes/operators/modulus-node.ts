import { HighLevelTsc, BinaryOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

export class ModulusNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(private readonly _valueA: MathStringBuilderNode, private readonly _valueB: MathStringBuilderNode) {
		super()
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.buildBinaryOperator(this.id, this._valueA, this._valueB, BinaryOperatorType.Mod);
	}
}
