"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PressureChangeRateUnits enumeration */
var PressureChangeRateUnits;
(function (PressureChangeRateUnits) {
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerSecond"] = 0] = "PascalsPerSecond";
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerMinute"] = 1] = "PascalsPerMinute";
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["AtmospheresPerSecond"] = 2] = "AtmospheresPerSecond";
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["KilopascalsPerSecond"] = 3] = "KilopascalsPerSecond";
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["MegapascalsPerSecond"] = 4] = "MegapascalsPerSecond";
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["KilopascalsPerMinute"] = 5] = "KilopascalsPerMinute";
    /** */
    PressureChangeRateUnits[PressureChangeRateUnits["MegapascalsPerMinute"] = 6] = "MegapascalsPerMinute";
})(PressureChangeRateUnits = exports.PressureChangeRateUnits || (exports.PressureChangeRateUnits = {}));
/** Pressure change rate is the ratio of the pressure change to the time during which the change occurred (value of pressure changes per unit time). */
class PressureChangeRate {
    /**
     * Create a new PressureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘PressureChangeRate’ unit to create from.
     * The default unit is PascalsPerSecond
     */
    constructor(value, fromUnit = PressureChangeRateUnits.PascalsPerSecond) {
        this.pascalspersecondLazy = null;
        this.pascalsperminuteLazy = null;
        this.atmospherespersecondLazy = null;
        this.kilopascalspersecondLazy = null;
        this.megapascalspersecondLazy = null;
        this.kilopascalsperminuteLazy = null;
        this.megapascalsperminuteLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of PressureChangeRate is PascalsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get PascalsPerSecond() {
        if (this.pascalspersecondLazy !== null) {
            return this.pascalspersecondLazy;
        }
        return this.pascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerSecond);
    }
    /** */
    get PascalsPerMinute() {
        if (this.pascalsperminuteLazy !== null) {
            return this.pascalsperminuteLazy;
        }
        return this.pascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerMinute);
    }
    /** */
    get AtmospheresPerSecond() {
        if (this.atmospherespersecondLazy !== null) {
            return this.atmospherespersecondLazy;
        }
        return this.atmospherespersecondLazy = this.convertFromBase(PressureChangeRateUnits.AtmospheresPerSecond);
    }
    /** */
    get KilopascalsPerSecond() {
        if (this.kilopascalspersecondLazy !== null) {
            return this.kilopascalspersecondLazy;
        }
        return this.kilopascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerSecond);
    }
    /** */
    get MegapascalsPerSecond() {
        if (this.megapascalspersecondLazy !== null) {
            return this.megapascalspersecondLazy;
        }
        return this.megapascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerSecond);
    }
    /** */
    get KilopascalsPerMinute() {
        if (this.kilopascalsperminuteLazy !== null) {
            return this.kilopascalsperminuteLazy;
        }
        return this.kilopascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerMinute);
    }
    /** */
    get MegapascalsPerMinute() {
        if (this.megapascalsperminuteLazy !== null) {
            return this.megapascalsperminuteLazy;
        }
        return this.megapascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerMinute);
    }
    /**
     * Create a new PressureChangeRate instance from a PascalsPerSecond
     *
     * @param value The unit as PascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromPascalsPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerSecond);
    }
    /**
     * Create a new PressureChangeRate instance from a PascalsPerMinute
     *
     * @param value The unit as PascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromPascalsPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerMinute);
    }
    /**
     * Create a new PressureChangeRate instance from a AtmospheresPerSecond
     *
     * @param value The unit as AtmospheresPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromAtmospheresPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.AtmospheresPerSecond);
    }
    /**
     * Create a new PressureChangeRate instance from a KilopascalsPerSecond
     *
     * @param value The unit as KilopascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromKilopascalsPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerSecond);
    }
    /**
     * Create a new PressureChangeRate instance from a MegapascalsPerSecond
     *
     * @param value The unit as MegapascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromMegapascalsPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerSecond);
    }
    /**
     * Create a new PressureChangeRate instance from a KilopascalsPerMinute
     *
     * @param value The unit as KilopascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromKilopascalsPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerMinute);
    }
    /**
     * Create a new PressureChangeRate instance from a MegapascalsPerMinute
     *
     * @param value The unit as MegapascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromMegapascalsPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerMinute);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value * 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325 * 1e5);
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (this.value * 60) / 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return (this.value * 60) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return value / 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return value * 1.01325 * 1e5;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (value) * 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (value / 60) * 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return (value / 60) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the PressureChangeRate to string.
     * Note! the default format for PressureChangeRate is PascalsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PressureChangeRate.
     * @returns The string format of the PressureChangeRate.
     */
    toString(toUnit = PressureChangeRateUnits.PascalsPerSecond) {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.PascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.PascalsPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.AtmospheresPerSecond + ` atm/s`;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return this.KilopascalsPerSecond + ` `;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return this.MegapascalsPerSecond + ` `;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return this.KilopascalsPerMinute + ` `;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return this.MegapascalsPerMinute + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given PressureChangeRate are equals to the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns True if the given PressureChangeRate are equal to the current PressureChangeRate.
     */
    equals(pressureChangeRate) {
        return this.value === pressureChangeRate.BaseValue;
    }
    /**
     * Compare the given PressureChangeRate against the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns 0 if they are equal, -1 if the current PressureChangeRate is less then other, 1 if the current PressureChangeRate is greater then other.
     */
    compareTo(pressureChangeRate) {
        if (this.value > pressureChangeRate.BaseValue)
            return 1;
        if (this.value < pressureChangeRate.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    add(pressureChangeRate) {
        return new PressureChangeRate(this.value + pressureChangeRate.BaseValue);
    }
    /**
     * Subtract the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    subtract(pressureChangeRate) {
        return new PressureChangeRate(this.value - pressureChangeRate.BaseValue);
    }
    /**
     * Multiply the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    multiply(pressureChangeRate) {
        return new PressureChangeRate(this.value * pressureChangeRate.BaseValue);
    }
    /**
     * Divide the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    divide(pressureChangeRate) {
        return new PressureChangeRate(this.value / pressureChangeRate.BaseValue);
    }
    /**
     * Modulo the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    modulo(pressureChangeRate) {
        return new PressureChangeRate(this.value % pressureChangeRate.BaseValue);
    }
    /**
     * Pow the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    pow(pressureChangeRate) {
        return new PressureChangeRate(this.value ** pressureChangeRate.BaseValue);
    }
}
exports.PressureChangeRate = PressureChangeRate;
//# sourceMappingURL=pressurechangerate.g.js.map