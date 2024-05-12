import {
	MassFraction,
	MassFractionUnits,
	Ratio,
	RatioUnits,
	Scalar,
	ScalarUnits,
	VolumeConcentration,
	VolumeConcentrationUnits
} from '../../src';
import { BaseUnit } from '../../src/base-unit';

// A map of unit-type/enum pairs that have an empty abbreviation.
// Need to ignore those for the length check. A bit hacky but should be solid enough
// as tests will just break if this changes.
export const EMPTY_ABBREVIATION_LIST = [
	{
		classType: MassFraction,
		enumValue: MassFractionUnits.DecimalFractions
	},
	{
		classType: Ratio,
		enumValue: RatioUnits.DecimalFractions
	},
	{
		classType: Scalar,
		enumValue: ScalarUnits.Amount
	},
	{
		classType: VolumeConcentration,
		enumValue: VolumeConcentrationUnits.DecimalFractions
	},
];

export function isEmptyAbbreviationValidInContext(unitInstance: BaseUnit, unitEnumValue: string): boolean {
	const isAnIgnorableClass = EMPTY_ABBREVIATION_LIST.find(((ignore) => unitInstance instanceof ignore.classType));
	const isAnIgnorableEnumValue = EMPTY_ABBREVIATION_LIST.find((ignore) => ignore.enumValue === unitEnumValue);
	return !!isAnIgnorableClass && !!isAnIgnorableEnumValue;
}