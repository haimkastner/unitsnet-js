"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LapseRateUnits enumeration */
var LapseRateUnits;
(function (LapseRateUnits) {
    /** */
    LapseRateUnits[LapseRateUnits["DegreesCelciusPerKilometer"] = 0] = "DegreesCelciusPerKilometer";
})(LapseRateUnits = exports.LapseRateUnits || (exports.LapseRateUnits = {}));
/** Lapse rate is the rate at which Earth's atmospheric temperature decreases with an increase in altitude, or increases with the decrease in altitude. */
class LapseRate {
    /**
     * Create a new LapseRate.
     * @param value The value.
     * @param fromUnit The ‘LapseRate’ unit to create from.
     * The default unit is DegreesCelciusPerKilometer
     */
    constructor(value, fromUnit = LapseRateUnits.DegreesCelciusPerKilometer) {
        this.degreescelciusperkilometerLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of LapseRate is DegreesCelciusPerKilometer.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get DegreesCelciusPerKilometer() {
        if (this.degreescelciusperkilometerLazy !== null) {
            return this.degreescelciusperkilometerLazy;
        }
        return this.degreescelciusperkilometerLazy = this.convertFromBase(LapseRateUnits.DegreesCelciusPerKilometer);
    }
    /**
     * Create a new LapseRate instance from a DegreesCelciusPerKilometer
     *
     * @param value The unit as DegreesCelciusPerKilometer to create a new LapseRate from.
     * @returns The new LapseRate instance.
     */
    static FromDegreesCelciusPerKilometer(value) {
        return new LapseRate(value, LapseRateUnits.DegreesCelciusPerKilometer);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the LapseRate to string.
     * Note! the default format for LapseRate is DegreesCelciusPerKilometer.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LapseRate.
     * @returns The string format of the LapseRate.
     */
    toString(toUnit = LapseRateUnits.DegreesCelciusPerKilometer) {
        switch (toUnit) {
            case LapseRateUnits.DegreesCelciusPerKilometer:
                return this.DegreesCelciusPerKilometer + ` ∆°C/km`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given LapseRate are equals to the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns True if the given LapseRate are equal to the current LapseRate.
     */
    equals(lapseRate) {
        return this.value === lapseRate.BaseValue;
    }
    /**
     * Compare the given LapseRate against the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns 0 if they are equal, -1 if the current LapseRate is less then other, 1 if the current LapseRate is greater then other.
     */
    compareTo(lapseRate) {
        if (this.value > lapseRate.BaseValue)
            return 1;
        if (this.value < lapseRate.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    add(lapseRate) {
        return new LapseRate(this.value + lapseRate.BaseValue);
    }
    /**
     * Subtract the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    subtract(lapseRate) {
        return new LapseRate(this.value - lapseRate.BaseValue);
    }
    /**
     * Multiply the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    multiply(lapseRate) {
        return new LapseRate(this.value * lapseRate.BaseValue);
    }
    /**
     * Divide the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    divide(lapseRate) {
        return new LapseRate(this.value / lapseRate.BaseValue);
    }
    /**
     * Modulo the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    modulo(lapseRate) {
        return new LapseRate(this.value % lapseRate.BaseValue);
    }
    /**
     * Pow the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    pow(lapseRate) {
        return new LapseRate(this.value ** lapseRate.BaseValue);
    }
}
exports.LapseRate = LapseRate;
//# sourceMappingURL=lapserate.g.js.map