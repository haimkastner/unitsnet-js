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


export function invokeNonPublicMethod<TMethodName extends BaseUnitNonPublicMethodNames>(
	instance: BaseUnit,
	methodName: TMethodName,
	parameters: NonPublicGetterToParameterMap[TMethodName]
): NonPublicGetterToReturnTypeMap[TMethodName] {
	return (instance as any)[methodName](...parameters);
}