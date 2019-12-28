"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** RatioUnits enumeration */
var RatioUnits;
(function (RatioUnits) {
    /** */
    RatioUnits[RatioUnits["DecimalFractions"] = 0] = "DecimalFractions";
    /** */
    RatioUnits[RatioUnits["Percent"] = 1] = "Percent";
    /** */
    RatioUnits[RatioUnits["PartsPerThousand"] = 2] = "PartsPerThousand";
    /** */
    RatioUnits[RatioUnits["PartsPerMillion"] = 3] = "PartsPerMillion";
    /** */
    RatioUnits[RatioUnits["PartsPerBillion"] = 4] = "PartsPerBillion";
    /** */
    RatioUnits[RatioUnits["PartsPerTrillion"] = 5] = "PartsPerTrillion";
})(RatioUnits = exports.RatioUnits || (exports.RatioUnits = {}));
/** In mathematics, a ratio is a relationship between two numbers of the same kind (e.g., objects, persons, students, spoonfuls, units of whatever identical dimension), usually expressed as "a to b" or a:b, sometimes expressed arithmetically as a dimensionless quotient of the two that explicitly indicates how many times the first number contains the second (not necessarily an integer). */
class Ratio {
    /**
     * Create a new Ratio.
     * @param value The value.
     * @param fromUnit The ‘Ratio’ unit to create from.
     * The default unit is DecimalFractions
     */
    constructor(value, fromUnit = RatioUnits.DecimalFractions) {
        this.decimalfractionsLazy = null;
        this.percentLazy = null;
        this.partsperthousandLazy = null;
        this.partspermillionLazy = null;
        this.partsperbillionLazy = null;
        this.partspertrillionLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Ratio is DecimalFractions.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get DecimalFractions() {
        if (this.decimalfractionsLazy !== null) {
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(RatioUnits.DecimalFractions);
    }
    /** */
    get Percent() {
        if (this.percentLazy !== null) {
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(RatioUnits.Percent);
    }
    /** */
    get PartsPerThousand() {
        if (this.partsperthousandLazy !== null) {
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(RatioUnits.PartsPerThousand);
    }
    /** */
    get PartsPerMillion() {
        if (this.partspermillionLazy !== null) {
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(RatioUnits.PartsPerMillion);
    }
    /** */
    get PartsPerBillion() {
        if (this.partsperbillionLazy !== null) {
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(RatioUnits.PartsPerBillion);
    }
    /** */
    get PartsPerTrillion() {
        if (this.partspertrillionLazy !== null) {
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(RatioUnits.PartsPerTrillion);
    }
    /**
     * Create a new Ratio instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromDecimalFractions(value) {
        return new Ratio(value, RatioUnits.DecimalFractions);
    }
    /**
     * Create a new Ratio instance from a Percent
     *
     * @param value The unit as Percent to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPercent(value) {
        return new Ratio(value, RatioUnits.Percent);
    }
    /**
     * Create a new Ratio instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerThousand(value) {
        return new Ratio(value, RatioUnits.PartsPerThousand);
    }
    /**
     * Create a new Ratio instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerMillion(value) {
        return new Ratio(value, RatioUnits.PartsPerMillion);
    }
    /**
     * Create a new Ratio instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerBillion(value) {
        return new Ratio(value, RatioUnits.PartsPerBillion);
    }
    /**
     * Create a new Ratio instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerTrillion(value) {
        return new Ratio(value, RatioUnits.PartsPerTrillion);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RatioUnits.DecimalFractions:
                return this.value;
            case RatioUnits.Percent:
                return this.value * 1e2;
            case RatioUnits.PartsPerThousand:
                return this.value * 1e3;
            case RatioUnits.PartsPerMillion:
                return this.value * 1e6;
            case RatioUnits.PartsPerBillion:
                return this.value * 1e9;
            case RatioUnits.PartsPerTrillion:
                return this.value * 1e12;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RatioUnits.DecimalFractions:
                return value;
            case RatioUnits.Percent:
                return value / 1e2;
            case RatioUnits.PartsPerThousand:
                return value / 1e3;
            case RatioUnits.PartsPerMillion:
                return value / 1e6;
            case RatioUnits.PartsPerBillion:
                return value / 1e9;
            case RatioUnits.PartsPerTrillion:
                return value / 1e12;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Ratio to string.
     * Note! the default format for Ratio is DecimalFractions.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Ratio.
     * @returns The string format of the Ratio.
     */
    toString(toUnit = RatioUnits.DecimalFractions) {
        switch (toUnit) {
            case RatioUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case RatioUnits.Percent:
                return this.Percent + ` %`;
            case RatioUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case RatioUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case RatioUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case RatioUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Ratio are equals to the current Ratio.
     * @param ratio The other Ratio.
     * @returns True if the given Ratio are equal to the current Ratio.
     */
    equals(ratio) {
        return this.value === ratio.BaseValue;
    }
    /**
     * Compare the given Ratio against the current Ratio.
     * @param ratio The other Ratio.
     * @returns 0 if they are equal, -1 if the current Ratio is less then other, 1 if the current Ratio is greater then other.
     */
    compareTo(ratio) {
        if (this.value > ratio.BaseValue)
            return 1;
        if (this.value < ratio.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    add(ratio) {
        return new Ratio(this.value + ratio.BaseValue);
    }
    /**
     * Subtract the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    subtract(ratio) {
        return new Ratio(this.value - ratio.BaseValue);
    }
    /**
     * Multiply the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    multiply(ratio) {
        return new Ratio(this.value * ratio.BaseValue);
    }
    /**
     * Divide the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    divide(ratio) {
        return new Ratio(this.value / ratio.BaseValue);
    }
    /**
     * Modulo the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    modulo(ratio) {
        return new Ratio(this.value % ratio.BaseValue);
    }
    /**
     * Pow the given Ratio with the current Ratio.
     * @param ratio The other Ratio.
     * @returns A new Ratio instance with the results.
     */
    pow(ratio) {
        return new Ratio(this.value ** ratio.BaseValue);
    }
}
exports.Ratio = Ratio;
//# sourceMappingURL=ratio.g.js.map