import { BaseUnit } from '../../../src/base-unit';

export enum BaseUnitNonPublicGetterNames {
	BaseUnit = 'baseUnit',
}

interface NonPublicGetterToReturnTypeMap {
	[BaseUnitNonPublicGetterNames.BaseUnit]: string;
}


/**
 * Read a value from an instance's instance non-public getter
 *
 * @export
 * @template TGetterName The name of the getter to read 
 * @param {BaseUnit} instance The BaseUnit instance to read the getter of
 * @param {TGetterName} getterName The name of the getter to read
 * @return {NonPublicGetterToReturnTypeMap[TGetter]} The value returned by the getter
 */
export function queryNonPublicGetter<TGetterName extends BaseUnitNonPublicGetterNames>(
	instance: BaseUnit,
	getterName: TGetterName,
): NonPublicGetterToReturnTypeMap[TGetterName] {
	return (instance as any)[getterName];
}