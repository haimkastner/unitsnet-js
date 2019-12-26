"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PowerRatioUnits enumeration */
var PowerRatioUnits;
(function (PowerRatioUnits) {
    /** */
    PowerRatioUnits[PowerRatioUnits["DecibelWatts"] = 0] = "DecibelWatts";
    /** */
    PowerRatioUnits[PowerRatioUnits["DecibelMilliwatts"] = 1] = "DecibelMilliwatts";
})(PowerRatioUnits = exports.PowerRatioUnits || (exports.PowerRatioUnits = {}));
/** The strength of a signal expressed in decibels (dB) relative to one watt. */
class PowerRatio {
    /**
     * Create a new PowerRatio.
     * @param value The value.
     * @param fromUnit The ‘PowerRatio’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.decibelwattsLazy = null;
        this.decibelmilliwattsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of PowerRatio is DecibelWatt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get DecibelWatts() {
        if (this.decibelwattsLazy !== null) {
            return this.decibelwattsLazy;
        }
        return this.decibelwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelWatts);
    }
    /** */
    get DecibelMilliwatts() {
        if (this.decibelmilliwattsLazy !== null) {
            return this.decibelmilliwattsLazy;
        }
        return this.decibelmilliwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelMilliwatts);
    }
    /**
     * Create a new PowerRatio instance from a DecibelWatts
     *
     * @param value The unit as DecibelWatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    static FromDecibelWatts(value) {
        return new PowerRatio(value, PowerRatioUnits.DecibelWatts);
    }
    /**
     * Create a new PowerRatio instance from a DecibelMilliwatts
     *
     * @param value The unit as DecibelMilliwatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    static FromDecibelMilliwatts(value) {
        return new PowerRatio(value, PowerRatioUnits.DecibelMilliwatts);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PowerRatioUnits.DecibelWatts:
                return this.value;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.value + 30;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PowerRatioUnits.DecibelWatts:
                return value;
            case PowerRatioUnits.DecibelMilliwatts:
                return value - 30;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the PowerRatio to string.
     * Note! the default format for PowerRatio is DecibelWatts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PowerRatio.
     * @returns The string format of the PowerRatio.
     */
    toString(toUnit = PowerRatioUnits.DecibelWatts) {
        switch (toUnit) {
            case PowerRatioUnits.DecibelWatts:
                return this.DecibelWatts + ` dBW`;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.DecibelMilliwatts + ` dBmW`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.PowerRatio = PowerRatio;
//# sourceMappingURL=powerratio.g.js.map