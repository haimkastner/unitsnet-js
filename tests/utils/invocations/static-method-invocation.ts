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


/**
 * Invokes a static method on an amorphous BaseUnit class
 *
 * @export
 * @template TMethodName The method name to invoke
 * @param {BaseUnitClass} unitClass The BaseUnit-derived class to invoke the static method of
 * @param {TMethodName} methodName The method name to invoke
 * @param {StaticMethodToParametersMap[TMethodName]} parameters The parameters to pass to the method
 * @return {StaticMethodToReturnTypeMap[TMethodName]} The value returned by the method
 */
export function invokeStaticMethod<TMethodName extends BaseUnitStaticMethodNames>(
    unitClass: BaseUnitClass,
    methodName: TMethodName,
    parameters: StaticMethodToParametersMap[TMethodName]
): StaticMethodToReturnTypeMap[TMethodName] {
    return (unitClass as any)[methodName](parameters);
}
