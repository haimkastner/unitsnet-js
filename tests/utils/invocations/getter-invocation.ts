import { BaseUnit } from '../../../src/base-unit';

export enum BaseUnitNonPublicGetterNames {
	GetBaseUnit = 'getBaseUnit',
}

interface NonPublicGetterToReturnTypeMap {
	[BaseUnitNonPublicGetterNames.GetBaseUnit]: string;
}


export function queryNonPublicGetter<TGetter extends BaseUnitNonPublicGetterNames>(
	instance: BaseUnit,
	getterName: TGetter,
): NonPublicGetterToReturnTypeMap[TGetter] {
	return (instance as any)[getterName];
}