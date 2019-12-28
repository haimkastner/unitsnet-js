"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** FrequencyUnits enumeration */
var FrequencyUnits;
(function (FrequencyUnits) {
    /** */
    FrequencyUnits[FrequencyUnits["Hertz"] = 0] = "Hertz";
    /** */
    FrequencyUnits[FrequencyUnits["RadiansPerSecond"] = 1] = "RadiansPerSecond";
    /** */
    FrequencyUnits[FrequencyUnits["CyclesPerMinute"] = 2] = "CyclesPerMinute";
    /** */
    FrequencyUnits[FrequencyUnits["CyclesPerHour"] = 3] = "CyclesPerHour";
    /** */
    FrequencyUnits[FrequencyUnits["BeatsPerMinute"] = 4] = "BeatsPerMinute";
    /** */
    FrequencyUnits[FrequencyUnits["Kilohertz"] = 5] = "Kilohertz";
    /** */
    FrequencyUnits[FrequencyUnits["Megahertz"] = 6] = "Megahertz";
    /** */
    FrequencyUnits[FrequencyUnits["Gigahertz"] = 7] = "Gigahertz";
    /** */
    FrequencyUnits[FrequencyUnits["Terahertz"] = 8] = "Terahertz";
})(FrequencyUnits = exports.FrequencyUnits || (exports.FrequencyUnits = {}));
/** The number of occurrences of a repeating event per unit time. */
class Frequency {
    /**
     * Create a new Frequency.
     * @param value The value.
     * @param fromUnit The ‘Frequency’ unit to create from.
     * The default unit is Hertz
     */
    constructor(value, fromUnit = FrequencyUnits.Hertz) {
        this.hertzLazy = null;
        this.radianspersecondLazy = null;
        this.cyclesperminuteLazy = null;
        this.cyclesperhourLazy = null;
        this.beatsperminuteLazy = null;
        this.kilohertzLazy = null;
        this.megahertzLazy = null;
        this.gigahertzLazy = null;
        this.terahertzLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Frequency is Hertz.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Hertz() {
        if (this.hertzLazy !== null) {
            return this.hertzLazy;
        }
        return this.hertzLazy = this.convertFromBase(FrequencyUnits.Hertz);
    }
    /** */
    get RadiansPerSecond() {
        if (this.radianspersecondLazy !== null) {
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(FrequencyUnits.RadiansPerSecond);
    }
    /** */
    get CyclesPerMinute() {
        if (this.cyclesperminuteLazy !== null) {
            return this.cyclesperminuteLazy;
        }
        return this.cyclesperminuteLazy = this.convertFromBase(FrequencyUnits.CyclesPerMinute);
    }
    /** */
    get CyclesPerHour() {
        if (this.cyclesperhourLazy !== null) {
            return this.cyclesperhourLazy;
        }
        return this.cyclesperhourLazy = this.convertFromBase(FrequencyUnits.CyclesPerHour);
    }
    /** */
    get BeatsPerMinute() {
        if (this.beatsperminuteLazy !== null) {
            return this.beatsperminuteLazy;
        }
        return this.beatsperminuteLazy = this.convertFromBase(FrequencyUnits.BeatsPerMinute);
    }
    /** */
    get Kilohertz() {
        if (this.kilohertzLazy !== null) {
            return this.kilohertzLazy;
        }
        return this.kilohertzLazy = this.convertFromBase(FrequencyUnits.Kilohertz);
    }
    /** */
    get Megahertz() {
        if (this.megahertzLazy !== null) {
            return this.megahertzLazy;
        }
        return this.megahertzLazy = this.convertFromBase(FrequencyUnits.Megahertz);
    }
    /** */
    get Gigahertz() {
        if (this.gigahertzLazy !== null) {
            return this.gigahertzLazy;
        }
        return this.gigahertzLazy = this.convertFromBase(FrequencyUnits.Gigahertz);
    }
    /** */
    get Terahertz() {
        if (this.terahertzLazy !== null) {
            return this.terahertzLazy;
        }
        return this.terahertzLazy = this.convertFromBase(FrequencyUnits.Terahertz);
    }
    /**
     * Create a new Frequency instance from a Hertz
     *
     * @param value The unit as Hertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromHertz(value) {
        return new Frequency(value, FrequencyUnits.Hertz);
    }
    /**
     * Create a new Frequency instance from a RadiansPerSecond
     *
     * @param value The unit as RadiansPerSecond to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromRadiansPerSecond(value) {
        return new Frequency(value, FrequencyUnits.RadiansPerSecond);
    }
    /**
     * Create a new Frequency instance from a CyclesPerMinute
     *
     * @param value The unit as CyclesPerMinute to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromCyclesPerMinute(value) {
        return new Frequency(value, FrequencyUnits.CyclesPerMinute);
    }
    /**
     * Create a new Frequency instance from a CyclesPerHour
     *
     * @param value The unit as CyclesPerHour to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromCyclesPerHour(value) {
        return new Frequency(value, FrequencyUnits.CyclesPerHour);
    }
    /**
     * Create a new Frequency instance from a BeatsPerMinute
     *
     * @param value The unit as BeatsPerMinute to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromBeatsPerMinute(value) {
        return new Frequency(value, FrequencyUnits.BeatsPerMinute);
    }
    /**
     * Create a new Frequency instance from a Kilohertz
     *
     * @param value The unit as Kilohertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromKilohertz(value) {
        return new Frequency(value, FrequencyUnits.Kilohertz);
    }
    /**
     * Create a new Frequency instance from a Megahertz
     *
     * @param value The unit as Megahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromMegahertz(value) {
        return new Frequency(value, FrequencyUnits.Megahertz);
    }
    /**
     * Create a new Frequency instance from a Gigahertz
     *
     * @param value The unit as Gigahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromGigahertz(value) {
        return new Frequency(value, FrequencyUnits.Gigahertz);
    }
    /**
     * Create a new Frequency instance from a Terahertz
     *
     * @param value The unit as Terahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromTerahertz(value) {
        return new Frequency(value, FrequencyUnits.Terahertz);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case FrequencyUnits.Hertz:
                return this.value;
            case FrequencyUnits.RadiansPerSecond:
                return this.value * 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return this.value * 60;
            case FrequencyUnits.CyclesPerHour:
                return this.value * 3600;
            case FrequencyUnits.BeatsPerMinute:
                return this.value * 60;
            case FrequencyUnits.Kilohertz:
                return (this.value) / 1000;
            case FrequencyUnits.Megahertz:
                return (this.value) / 1000000;
            case FrequencyUnits.Gigahertz:
                return (this.value) / 1000000000;
            case FrequencyUnits.Terahertz:
                return (this.value) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case FrequencyUnits.Hertz:
                return value;
            case FrequencyUnits.RadiansPerSecond:
                return value / 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return value / 60;
            case FrequencyUnits.CyclesPerHour:
                return value / 3600;
            case FrequencyUnits.BeatsPerMinute:
                return value / 60;
            case FrequencyUnits.Kilohertz:
                return (value) * 1000;
            case FrequencyUnits.Megahertz:
                return (value) * 1000000;
            case FrequencyUnits.Gigahertz:
                return (value) * 1000000000;
            case FrequencyUnits.Terahertz:
                return (value) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Frequency to string.
     * Note! the default format for Frequency is Hertz.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Frequency.
     * @returns The string format of the Frequency.
     */
    toString(toUnit = FrequencyUnits.Hertz) {
        switch (toUnit) {
            case FrequencyUnits.Hertz:
                return this.Hertz + ` Hz`;
            case FrequencyUnits.RadiansPerSecond:
                return this.RadiansPerSecond + ` rad/s`;
            case FrequencyUnits.CyclesPerMinute:
                return this.CyclesPerMinute + ` cpm`;
            case FrequencyUnits.CyclesPerHour:
                return this.CyclesPerHour + ` cph`;
            case FrequencyUnits.BeatsPerMinute:
                return this.BeatsPerMinute + ` bpm`;
            case FrequencyUnits.Kilohertz:
                return this.Kilohertz + ` `;
            case FrequencyUnits.Megahertz:
                return this.Megahertz + ` `;
            case FrequencyUnits.Gigahertz:
                return this.Gigahertz + ` `;
            case FrequencyUnits.Terahertz:
                return this.Terahertz + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Frequency are equals to the current Frequency.
     * @param frequency The other Frequency.
     * @returns True if the given Frequency are equal to the current Frequency.
     */
    equals(frequency) {
        return this.value === frequency.BaseValue;
    }
    /**
     * Compare the given Frequency against the current Frequency.
     * @param frequency The other Frequency.
     * @returns 0 if they are equal, -1 if the current Frequency is less then other, 1 if the current Frequency is greater then other.
     */
    compareTo(frequency) {
        if (this.value > frequency.BaseValue)
            return 1;
        if (this.value < frequency.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    add(frequency) {
        return new Frequency(this.value + frequency.BaseValue);
    }
    /**
     * Subtract the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    subtract(frequency) {
        return new Frequency(this.value - frequency.BaseValue);
    }
    /**
     * Multiply the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    multiply(frequency) {
        return new Frequency(this.value * frequency.BaseValue);
    }
    /**
     * Divide the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    divide(frequency) {
        return new Frequency(this.value / frequency.BaseValue);
    }
    /**
     * Modulo the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    modulo(frequency) {
        return new Frequency(this.value % frequency.BaseValue);
    }
    /**
     * Pow the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    pow(frequency) {
        return new Frequency(this.value ** frequency.BaseValue);
    }
}
exports.Frequency = Frequency;
//# sourceMappingURL=frequency.g.js.map