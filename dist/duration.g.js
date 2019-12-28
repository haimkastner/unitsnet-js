"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** DurationUnits enumeration */
var DurationUnits;
(function (DurationUnits) {
    /** */
    DurationUnits[DurationUnits["Years365"] = 0] = "Years365";
    /** */
    DurationUnits[DurationUnits["Months30"] = 1] = "Months30";
    /** */
    DurationUnits[DurationUnits["Weeks"] = 2] = "Weeks";
    /** */
    DurationUnits[DurationUnits["Days"] = 3] = "Days";
    /** */
    DurationUnits[DurationUnits["Hours"] = 4] = "Hours";
    /** */
    DurationUnits[DurationUnits["Minutes"] = 5] = "Minutes";
    /** */
    DurationUnits[DurationUnits["Seconds"] = 6] = "Seconds";
    /** */
    DurationUnits[DurationUnits["Nanoseconds"] = 7] = "Nanoseconds";
    /** */
    DurationUnits[DurationUnits["Microseconds"] = 8] = "Microseconds";
})(DurationUnits = exports.DurationUnits || (exports.DurationUnits = {}));
/** Time is a dimension in which events can be ordered from the past through the present into the future, and also the measure of durations of events and the intervals between them. */
class Duration {
    /**
     * Create a new Duration.
     * @param value The value.
     * @param fromUnit The ‘Duration’ unit to create from.
     * The default unit is Seconds
     */
    constructor(value, fromUnit = DurationUnits.Seconds) {
        this.years365Lazy = null;
        this.months30Lazy = null;
        this.weeksLazy = null;
        this.daysLazy = null;
        this.hoursLazy = null;
        this.minutesLazy = null;
        this.secondsLazy = null;
        this.nanosecondsLazy = null;
        this.microsecondsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Duration is Seconds.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Years365() {
        if (this.years365Lazy !== null) {
            return this.years365Lazy;
        }
        return this.years365Lazy = this.convertFromBase(DurationUnits.Years365);
    }
    /** */
    get Months30() {
        if (this.months30Lazy !== null) {
            return this.months30Lazy;
        }
        return this.months30Lazy = this.convertFromBase(DurationUnits.Months30);
    }
    /** */
    get Weeks() {
        if (this.weeksLazy !== null) {
            return this.weeksLazy;
        }
        return this.weeksLazy = this.convertFromBase(DurationUnits.Weeks);
    }
    /** */
    get Days() {
        if (this.daysLazy !== null) {
            return this.daysLazy;
        }
        return this.daysLazy = this.convertFromBase(DurationUnits.Days);
    }
    /** */
    get Hours() {
        if (this.hoursLazy !== null) {
            return this.hoursLazy;
        }
        return this.hoursLazy = this.convertFromBase(DurationUnits.Hours);
    }
    /** */
    get Minutes() {
        if (this.minutesLazy !== null) {
            return this.minutesLazy;
        }
        return this.minutesLazy = this.convertFromBase(DurationUnits.Minutes);
    }
    /** */
    get Seconds() {
        if (this.secondsLazy !== null) {
            return this.secondsLazy;
        }
        return this.secondsLazy = this.convertFromBase(DurationUnits.Seconds);
    }
    /** */
    get Nanoseconds() {
        if (this.nanosecondsLazy !== null) {
            return this.nanosecondsLazy;
        }
        return this.nanosecondsLazy = this.convertFromBase(DurationUnits.Nanoseconds);
    }
    /** */
    get Microseconds() {
        if (this.microsecondsLazy !== null) {
            return this.microsecondsLazy;
        }
        return this.microsecondsLazy = this.convertFromBase(DurationUnits.Microseconds);
    }
    /**
     * Create a new Duration instance from a Years365
     *
     * @param value The unit as Years365 to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromYears365(value) {
        return new Duration(value, DurationUnits.Years365);
    }
    /**
     * Create a new Duration instance from a Months30
     *
     * @param value The unit as Months30 to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromMonths30(value) {
        return new Duration(value, DurationUnits.Months30);
    }
    /**
     * Create a new Duration instance from a Weeks
     *
     * @param value The unit as Weeks to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromWeeks(value) {
        return new Duration(value, DurationUnits.Weeks);
    }
    /**
     * Create a new Duration instance from a Days
     *
     * @param value The unit as Days to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromDays(value) {
        return new Duration(value, DurationUnits.Days);
    }
    /**
     * Create a new Duration instance from a Hours
     *
     * @param value The unit as Hours to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromHours(value) {
        return new Duration(value, DurationUnits.Hours);
    }
    /**
     * Create a new Duration instance from a Minutes
     *
     * @param value The unit as Minutes to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromMinutes(value) {
        return new Duration(value, DurationUnits.Minutes);
    }
    /**
     * Create a new Duration instance from a Seconds
     *
     * @param value The unit as Seconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromSeconds(value) {
        return new Duration(value, DurationUnits.Seconds);
    }
    /**
     * Create a new Duration instance from a Nanoseconds
     *
     * @param value The unit as Nanoseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromNanoseconds(value) {
        return new Duration(value, DurationUnits.Nanoseconds);
    }
    /**
     * Create a new Duration instance from a Microseconds
     *
     * @param value The unit as Microseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromMicroseconds(value) {
        return new Duration(value, DurationUnits.Microseconds);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case DurationUnits.Years365:
                return this.value / (365 * 24 * 3600);
            case DurationUnits.Months30:
                return this.value / (30 * 24 * 3600);
            case DurationUnits.Weeks:
                return this.value / (7 * 24 * 3600);
            case DurationUnits.Days:
                return this.value / (24 * 3600);
            case DurationUnits.Hours:
                return this.value / 3600;
            case DurationUnits.Minutes:
                return this.value / 60;
            case DurationUnits.Seconds:
                return this.value;
            case DurationUnits.Nanoseconds:
                return (this.value) / 1e-9;
            case DurationUnits.Microseconds:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case DurationUnits.Years365:
                return value * 365 * 24 * 3600;
            case DurationUnits.Months30:
                return value * 30 * 24 * 3600;
            case DurationUnits.Weeks:
                return value * 7 * 24 * 3600;
            case DurationUnits.Days:
                return value * 24 * 3600;
            case DurationUnits.Hours:
                return value * 3600;
            case DurationUnits.Minutes:
                return value * 60;
            case DurationUnits.Seconds:
                return value;
            case DurationUnits.Nanoseconds:
                return (value) * 1e-9;
            case DurationUnits.Microseconds:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Duration to string.
     * Note! the default format for Duration is Seconds.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Duration.
     * @returns The string format of the Duration.
     */
    toString(toUnit = DurationUnits.Seconds) {
        switch (toUnit) {
            case DurationUnits.Years365:
                return this.Years365 + ` yr`;
            case DurationUnits.Months30:
                return this.Months30 + ` mo`;
            case DurationUnits.Weeks:
                return this.Weeks + ` wk`;
            case DurationUnits.Days:
                return this.Days + ` d`;
            case DurationUnits.Hours:
                return this.Hours + ` h`;
            case DurationUnits.Minutes:
                return this.Minutes + ` m`;
            case DurationUnits.Seconds:
                return this.Seconds + ` s`;
            case DurationUnits.Nanoseconds:
                return this.Nanoseconds + ` `;
            case DurationUnits.Microseconds:
                return this.Microseconds + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Duration are equals to the current Duration.
     * @param duration The other Duration.
     * @returns True if the given Duration are equal to the current Duration.
     */
    equals(duration) {
        return this.value === duration.BaseValue;
    }
    /**
     * Compare the given Duration against the current Duration.
     * @param duration The other Duration.
     * @returns 0 if they are equal, -1 if the current Duration is less then other, 1 if the current Duration is greater then other.
     */
    compareTo(duration) {
        if (this.value > duration.BaseValue)
            return 1;
        if (this.value < duration.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    add(duration) {
        return new Duration(this.value + duration.BaseValue);
    }
    /**
     * Subtract the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    subtract(duration) {
        return new Duration(this.value - duration.BaseValue);
    }
    /**
     * Multiply the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    multiply(duration) {
        return new Duration(this.value * duration.BaseValue);
    }
    /**
     * Divide the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    divide(duration) {
        return new Duration(this.value / duration.BaseValue);
    }
    /**
     * Modulo the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    modulo(duration) {
        return new Duration(this.value % duration.BaseValue);
    }
    /**
     * Pow the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    pow(duration) {
        return new Duration(this.value ** duration.BaseValue);
    }
}
exports.Duration = Duration;
//# sourceMappingURL=duration.g.js.map