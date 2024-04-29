import { MathStringBuilderNode } from './math-string-builder-node';

export class VariableNode implements MathStringBuilderNode {
	public readonly invokeRequired: boolean = false;

	public constructor(private _value: string) {}

	public execute(): string {
		return `${this._value.replace(/[\{\}]/igm, '')}`;
	}
}
