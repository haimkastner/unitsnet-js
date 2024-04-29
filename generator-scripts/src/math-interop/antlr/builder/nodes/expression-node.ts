import { MathStringBuilderNode } from './math-string-builder-node';
import ts from 'typescript';
import { HighLevelTsc } from '../high-level-tsc';

export class ExpressionNode implements MathStringBuilderNode {
	public readonly invokeRequired: boolean = true;

	public constructor(private _child: MathStringBuilderNode) { }

	public execute(): string {
		const resolvedChild = this._child.invokeRequired
			? ts.createCall(
				ts.createParen(ts.createIdentifier(this._child.execute())),
				undefined,
				[
					ts.createIdentifier('x'),
					ts.createIdentifier('operatorOverrides')
				]
			)
			: ts.createIdentifier(this._child.execute());

		return HighLevelTsc.emitCode(resolvedChild);
	}
}
