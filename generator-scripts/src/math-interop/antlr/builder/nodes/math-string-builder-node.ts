import { HighLevelTsc } from '../high-level-tsc';
import ts from 'typescript';

export interface MathStringBuilderNode {
	readonly isPrimitive: boolean;
	readonly id: string;
	execute(): ts.Statement[];
}

export abstract class BaseMathStringBuilderNode implements MathStringBuilderNode {
	public readonly id: string;

	public abstract readonly isPrimitive: boolean;

	protected constructor() {
		this.id = HighLevelTsc.getRandomVariableId();
	}

	public abstract execute(): ts.Statement[];
}