"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** AmplitudeRatioUnits enumeration */
var AmplitudeRatioUnits;
(function (AmplitudeRatioUnits) {
    /** */
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelVolts"] = 0] = "DecibelVolts";
    /** */
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelMicrovolts"] = 1] = "DecibelMicrovolts";
    /** */
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelMillivolts"] = 2] = "DecibelMillivolts";
    /** */
    AmplitudeRatioUnits[AmplitudeRatioUnits["DecibelsUnloaded"] = 3] = "DecibelsUnloaded";
})(AmplitudeRatioUnits = exports.AmplitudeRatioUnits || (exports.AmplitudeRatioUnits = {}));
/** The strength of a signal expressed in decibels (dB) relative to one volt RMS. */
class AmplitudeRatio {
    /**
     * Create a new AmplitudeRatio.
     * @param value The value.
     * @param fromUnit The ‘AmplitudeRatio’ unit to create from.
     * The default unit is DecibelVolts
     */
    constructor(value, fromUnit = AmplitudeRatioUnits.DecibelVolts) {
        this.decibelvoltsLazy = null;
        this.decibelmicrovoltsLazy = null;
        this.decibelmillivoltsLazy = null;
        this.decibelsunloadedLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of AmplitudeRatio is DecibelVolts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get DecibelVolts() {
        if (this.decibelvoltsLazy !== null) {
            return this.decibelvoltsLazy;
        }
        return this.decibelvoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelVolts);
    }
    /** */
    get DecibelMicrovolts() {
        if (this.decibelmicrovoltsLazy !== null) {
            return this.decibelmicrovoltsLazy;
        }
        return this.decibelmicrovoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMicrovolts);
    }
    /** */
    get DecibelMillivolts() {
        if (this.decibelmillivoltsLazy !== null) {
            return this.decibelmillivoltsLazy;
        }
        return this.decibelmillivoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMillivolts);
    }
    /** */
    get DecibelsUnloaded() {
        if (this.decibelsunloadedLazy !== null) {
            return this.decibelsunloadedLazy;
        }
        return this.decibelsunloadedLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelsUnloaded);
    }
    /**
     * Create a new AmplitudeRatio instance from a DecibelVolts
     *
     * @param value The unit as DecibelVolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelVolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelVolts);
    }
    /**
     * Create a new AmplitudeRatio instance from a DecibelMicrovolts
     *
     * @param value The unit as DecibelMicrovolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelMicrovolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMicrovolts);
    }
    /**
     * Create a new AmplitudeRatio instance from a DecibelMillivolts
     *
     * @param value The unit as DecibelMillivolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelMillivolts(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMillivolts);
    }
    /**
     * Create a new AmplitudeRatio instance from a DecibelsUnloaded
     *
     * @param value The unit as DecibelsUnloaded to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelsUnloaded(value) {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelsUnloaded);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.value + 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.value + 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.value + 2.218487499;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return value - 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return value - 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return value - 2.218487499;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the AmplitudeRatio to string.
     * Note! the default format for AmplitudeRatio is DecibelVolts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AmplitudeRatio.
     * @returns The string format of the AmplitudeRatio.
     */
    toString(toUnit = AmplitudeRatioUnits.DecibelVolts) {
        switch (toUnit) {
            case AmplitudeRatioUnits.DecibelVolts:
                return this.DecibelVolts + ` dBV`;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.DecibelMicrovolts + ` dBµV`;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.DecibelMillivolts + ` dBmV`;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.DecibelsUnloaded + ` dBu`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given AmplitudeRatio are equals to the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns True if the given AmplitudeRatio are equal to the current AmplitudeRatio.
     */
    equals(amplitudeRatio) {
        return this.value === amplitudeRatio.BaseValue;
    }
    /**
     * Compare the given AmplitudeRatio against the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns 0 if they are equal, -1 if the current AmplitudeRatio is less then other, 1 if the current AmplitudeRatio is greater then other.
     */
    compareTo(amplitudeRatio) {
        if (this.value > amplitudeRatio.BaseValue)
            return 1;
        if (this.value < amplitudeRatio.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    add(amplitudeRatio) {
        return new AmplitudeRatio(this.value + amplitudeRatio.BaseValue);
    }
    /**
     * Subtract the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    subtract(amplitudeRatio) {
        return new AmplitudeRatio(this.value - amplitudeRatio.BaseValue);
    }
    /**
     * Multiply the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    multiply(amplitudeRatio) {
        return new AmplitudeRatio(this.value * amplitudeRatio.BaseValue);
    }
    /**
     * Divide the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    divide(amplitudeRatio) {
        return new AmplitudeRatio(this.value / amplitudeRatio.BaseValue);
    }
    /**
     * Modulo the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    modulo(amplitudeRatio) {
        return new AmplitudeRatio(this.value % amplitudeRatio.BaseValue);
    }
    /**
     * Pow the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    pow(amplitudeRatio) {
        return new AmplitudeRatio(this.value ** amplitudeRatio.BaseValue);
    }
}
exports.AmplitudeRatio = AmplitudeRatio;
//# sourceMappingURL=amplituderatio.g.js.map