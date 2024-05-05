import { IdGenerator } from '../../../../../id-generator';
import { HighLevelTsc, MathOperatorType } from '../../high-level-tsc';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from '../math-string-builder-node';
import ts from 'typescript';

export class SqrtNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(idGenerator: IdGenerator, private readonly _value: MathStringBuilderNode) {
		super(idGenerator);
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.buildMathCall(this.id, MathOperatorType.Sqrt, [this._value]) as any;
	}
}
