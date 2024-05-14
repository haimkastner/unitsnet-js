import { TwoByteIdGenerator } from '../../../../id-generator';
import ts from 'typescript';

export interface MathStringBuilderNode {
    readonly isPrimitive: boolean;
    readonly id: string;
    execute(): ts.Statement[];
}

export abstract class BaseMathStringBuilderNode implements MathStringBuilderNode {
    public readonly id: string;

    public abstract readonly isPrimitive: boolean;

    protected constructor(idGenerator: TwoByteIdGenerator) {
        this.id = idGenerator.getNext();
    }

    public abstract execute(): ts.Statement[];
}
