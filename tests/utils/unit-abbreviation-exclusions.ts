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

/**
 * Gets a boolean indicating whether the given unit/enum combination should yield an empty
 * string when calling `getUnitAbbreviation` on the unit
 *
 * @export
 * @param {BaseUnit} unitInstance The unit instance in question
 * @param {string} unitEnumValue The enum value being used to invoke getUnitAbbreviation
 * @return {boolean} True if the unit/enum combination should return an empty string, false otherwise
 */
export function isEmptyAbbreviationValidInContext(unitInstance: BaseUnit, unitEnumValue: string): boolean {
    const isAnIgnorableClass = EMPTY_ABBREVIATION_LIST.find(((ignore) => unitInstance instanceof ignore.classType));
    const isAnIgnorableEnumValue = EMPTY_ABBREVIATION_LIST.find((ignore) => ignore.enumValue === unitEnumValue);
    return !!isAnIgnorableClass && !!isAnIgnorableEnumValue;
}
