import { BaseUnit } from '../../../src/base-unit';
import { BaseUnitClass } from '../common';

export enum BaseUnitStaticMethodNames {
	GetBaseUnit = 'getBaseUnit',
	GetUnitEnum = 'getUnitEnum',
	FromDto = 'FromDto',
}

interface StaticMethodToReturnTypeMap {
	[BaseUnitStaticMethodNames.GetBaseUnit]: string;
	[BaseUnitStaticMethodNames.GetUnitEnum]: { [Key: string]: string };
	[BaseUnitStaticMethodNames.FromDto]: BaseUnit;
}

interface StaticMethodToParametersMap {
	[BaseUnitStaticMethodNames.GetBaseUnit]: undefined;
	[BaseUnitStaticMethodNames.GetUnitEnum]: undefined;
	[BaseUnitStaticMethodNames.FromDto]: { value: number, unit: string };
}


export function invokeStaticMethod<TMethodName extends BaseUnitStaticMethodNames>(
	unitsEnum: BaseUnitClass,
	method: TMethodName,
	parameters: StaticMethodToParametersMap[TMethodName]
): StaticMethodToReturnTypeMap[TMethodName] {
	return (unitsEnum as any)[method](parameters);
}
