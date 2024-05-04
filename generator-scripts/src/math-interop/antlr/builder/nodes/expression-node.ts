import { MathStringBuilderNode, BaseMathStringBuilderNode} from './math-string-builder-node';

import ts from 'typescript';

export class ExpressionNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(private readonly _child: MathStringBuilderNode) {
		super();
	}

	public execute(): ts.Statement[] {
		return this._child.execute();
	}
}
