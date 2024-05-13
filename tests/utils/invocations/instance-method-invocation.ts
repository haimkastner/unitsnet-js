import { BaseUnit } from '../../../src/base-unit';

export enum BaseUnitNonPublicMethodNames {
	InternalSqrt = 'internalSqrt',
}

interface NonPublicGetterToReturnTypeMap {
	[BaseUnitNonPublicMethodNames.InternalSqrt]: number;
}


interface NonPublicGetterToParameterMap {
	[BaseUnitNonPublicMethodNames.InternalSqrt]: [number];
}


/**
 * Invokes a non-public method on the given BaseUnit instance
 *
 * @export
 * @template TMethodName The method name to invoke
 * @param {BaseUnit} instance The instance to invoke the method on
 * @param {TMethodName} methodName The method name to invoke
 * @param {NonPublicGetterToParameterMap[TMethodName]} parameters The parameters to pass to the method
 * @return {NonPublicGetterToReturnTypeMap[TMethodName]} The value returned by the method
 */
export function invokeNonPublicMethod<TMethodName extends BaseUnitNonPublicMethodNames>(
	instance: BaseUnit,
	methodName: TMethodName,
	parameters: NonPublicGetterToParameterMap[TMethodName]
): NonPublicGetterToReturnTypeMap[TMethodName] {
	return (instance as any)[methodName](...parameters);
}