import { TwoByteIdGenerator } from '../../../../id-generator';
import { MathStringBuilderNode, BaseMathStringBuilderNode } from './math-string-builder-node';

import ts from 'typescript';

export class ExpressionNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(idGenerator: TwoByteIdGenerator, private readonly _child: MathStringBuilderNode) {
		super(idGenerator);
	}

	public execute(): ts.Statement[] {
		return this._child.execute();
	}
}
