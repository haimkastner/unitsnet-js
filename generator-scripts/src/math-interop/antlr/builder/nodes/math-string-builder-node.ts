import { TwoByteIdGenerator } from '../../../../id-generator';
import ts from 'typescript';

/**
 * A node representing a part of a mathematical formula's abstract syntax tree
 *
 * @export
 * @interface MathStringBuilderNode
 */
export interface MathStringBuilderNode {
    /**
     * A boolean indicating whether the node encapsulates a primitive (numeral/constant/variable)
     *
     * @type {boolean}
     * @memberof MathStringBuilderNode
     */
    readonly isPrimitive: boolean;

    /**
     * A 2-byte ID, usable as a TypeScript variable name
     *
     * @type {string}
     * @memberof MathStringBuilderNode
     */
    readonly id: string;

    /**
     * Executes the node to build a TypeScript code representation
     *
     * @return {ts.Statement[]} An array of statements representing the node and all its pre-requisites
     * @description Node pre-requisites are operations that must be carried out before attempting to use the node itself.
     * For example, given formula '{x} / 5^2', the division node ('/') must first recursively resolve '5^2', which and only then the actual division.
     *
     * The result of execution the division operation, emitted as code would be some like:
     * ```typescript
     * const v1 = super.internalPow(5, 2); // A pre-requisite statement
     * const v2 = super.internalDivide(this.value, v1); // {x} gets mapped to `value` or `this.value` depending on context
     * ```
     * @memberof MathStringBuilderNode
     */
    execute(): ts.Statement[];
}

/**
 * A node representing a part of a mathematical formula's abstract syntax tree
 *
 * @export
 * @abstract
 * @class BaseMathStringBuilderNode
 * @implements {MathStringBuilderNode}
 */
export abstract class BaseMathStringBuilderNode implements MathStringBuilderNode {
    public readonly id: string;

    public abstract readonly isPrimitive: boolean;

    protected constructor(idGenerator: TwoByteIdGenerator) {
        this.id = idGenerator.getNext();
    }

    public abstract execute(): ts.Statement[];
}
