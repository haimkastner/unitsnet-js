import { BaseMathStringBuilderNode } from './math-string-builder-node';
import ts from 'typescript';

export class VariableNode extends BaseMathStringBuilderNode {
	public readonly isPrimitive: boolean = true;

	public constructor(private _value: string) {
		super();
	}

	public execute(): ts.Statement[] {
		return [ts.createExpressionStatement(ts.createIdentifier(this._value.replace(/[\{\}]/igm, '')))];
	}
}
