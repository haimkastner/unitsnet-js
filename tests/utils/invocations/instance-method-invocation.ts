import { BaseUnit } from '../../../src/base-unit';

export enum BaseUnitNonPublicMethodNames {
	InternalSqrt = 'internalSqrt',
	InternalEquals = 'internalEquals',
	InternalCompareTo = 'internalCompareTo',
}

interface NonPublicMethodToReturnTypeMap {
	[BaseUnitNonPublicMethodNames.InternalSqrt]: number;
	[BaseUnitNonPublicMethodNames.InternalEquals]: boolean;
	[BaseUnitNonPublicMethodNames.InternalCompareTo]: number;
}


interface NonPublicMethodToParameterMap {
	[BaseUnitNonPublicMethodNames.InternalSqrt]: [number];
	[BaseUnitNonPublicMethodNames.InternalEquals]: [number, number],
	[BaseUnitNonPublicMethodNames.InternalCompareTo]: [number, number],
}


/**
 * Invokes a non-public method on the given BaseUnit instance
 *
 * @export
 * @template TMethodName The method name to invoke
 * @param {BaseUnit} instance The instance to invoke the method on
 * @param {TMethodName} methodName The method name to invoke
 * @param {NonPublicMethodToParameterMap[TMethodName]} parameters The parameters to pass to the method
 * @return {NonPublicMethodToReturnTypeMap[TMethodName]} The value returned by the method
 */
export function invokeNonPublicMethod<TMethodName extends BaseUnitNonPublicMethodNames>(
	instance: BaseUnit,
	methodName: TMethodName,
	parameters: NonPublicMethodToParameterMap[TMethodName]
): NonPublicMethodToReturnTypeMap[TMethodName] {
	return (instance as any)[methodName](...parameters);
}