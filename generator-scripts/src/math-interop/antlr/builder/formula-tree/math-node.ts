import { OperatorOverrides } from '../../../operators-overrides';

export interface MathNode {
	execute(operatorOverrides?: OperatorOverrides): number;
}
