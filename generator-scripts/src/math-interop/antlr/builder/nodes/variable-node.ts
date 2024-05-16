import { TwoByteIdGenerator } from '../../../../id-generator';
import { IdentifierRemapping } from '../tree/arithmetic-grammar-listener';
import { BaseMathStringBuilderNode } from './math-string-builder-node';
import ts from 'typescript';

/**
 * A node representing a formula variable such as `{x}`
 *
 * @export
 * @class VariableNode
 * @extends {BaseMathStringBuilderNode}
 */
export class VariableNode extends BaseMathStringBuilderNode {
    public readonly isPrimitive: boolean = true;

    public constructor(
        idGenerator: TwoByteIdGenerator,
        private readonly _value: string,
        private readonly _remapping?: IdentifierRemapping
    ) {
        super(idGenerator);
    }

    public execute(): ts.Statement[] {
        const variableName = this._value.replace(/[\{\}]/igm, '');
        const identifier = ts.createIdentifier(this._remapping?.[variableName] ?? variableName);
        return [ts.createExpressionStatement(identifier)];
    }
}
