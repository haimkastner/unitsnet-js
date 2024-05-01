import { MathStringBuilderNode, BaseMathStringBuilderNode} from './math-string-builder-node';
import { HighLevelTsc } from '../high-level-tsc';

import ts from 'typescript';

export class ExpressionNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = false;

	public constructor(private _child: MathStringBuilderNode) {
		super();
	}

	public execute(): ts.Statement[] {
		return HighLevelTsc.emitCode(ts.createBlock(this._child.execute())) as any;
	}
}
