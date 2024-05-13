import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Duration */
export interface DurationDto {
    /** The value of the Duration */
    value: number;
    /**  The specific unit that the Duration value is representing */
    unit: DurationUnits;
}

/** DurationUnits enumeration */
export enum DurationUnits {
    /** */
    Years365 = "Year365",
    /** */
    Months30 = "Month30",
    /** */
    Weeks = "Week",
    /** */
    Days = "Day",
    /** */
    Hours = "Hour",
    /** */
    Minutes = "Minute",
    /** */
    Seconds = "Second",
    /** */
    JulianYears = "JulianYear",
    /** */
    Nanoseconds = "Nanosecond",
    /** */
    Microseconds = "Microsecond",
    /** */
    Milliseconds = "Millisecond"
}

/** Time is a dimension in which events can be ordered from the past through the present into the future, and also the measure of durations of events and the intervals between them. */
export class Duration extends BaseUnit {
    protected value: number;
    private years365Lazy: number | null = null;
    private months30Lazy: number | null = null;
    private weeksLazy: number | null = null;
    private daysLazy: number | null = null;
    private hoursLazy: number | null = null;
    private minutesLazy: number | null = null;
    private secondsLazy: number | null = null;
    private julianyearsLazy: number | null = null;
    private nanosecondsLazy: number | null = null;
    private microsecondsLazy: number | null = null;
    private millisecondsLazy: number | null = null;

    /**
     * Create a new Duration.
     * @param value The value.
     * @param fromUnit The ‘Duration’ unit to create from.
     * The default unit is Seconds
     */
    public constructor(value: number, fromUnit: DurationUnits = DurationUnits.Seconds) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Duration is Seconds.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): DurationUnits.Seconds {
        return DurationUnits.Seconds
    }

    /** */
    public get Years365(): number {
        if(this.years365Lazy !== null){
            return this.years365Lazy;
        }
        return this.years365Lazy = this.convertFromBase(DurationUnits.Years365);
    }

    /** */
    public get Months30(): number {
        if(this.months30Lazy !== null){
            return this.months30Lazy;
        }
        return this.months30Lazy = this.convertFromBase(DurationUnits.Months30);
    }

    /** */
    public get Weeks(): number {
        if(this.weeksLazy !== null){
            return this.weeksLazy;
        }
        return this.weeksLazy = this.convertFromBase(DurationUnits.Weeks);
    }

    /** */
    public get Days(): number {
        if(this.daysLazy !== null){
            return this.daysLazy;
        }
        return this.daysLazy = this.convertFromBase(DurationUnits.Days);
    }

    /** */
    public get Hours(): number {
        if(this.hoursLazy !== null){
            return this.hoursLazy;
        }
        return this.hoursLazy = this.convertFromBase(DurationUnits.Hours);
    }

    /** */
    public get Minutes(): number {
        if(this.minutesLazy !== null){
            return this.minutesLazy;
        }
        return this.minutesLazy = this.convertFromBase(DurationUnits.Minutes);
    }

    /** */
    public get Seconds(): number {
        if(this.secondsLazy !== null){
            return this.secondsLazy;
        }
        return this.secondsLazy = this.convertFromBase(DurationUnits.Seconds);
    }

    /** */
    public get JulianYears(): number {
        if(this.julianyearsLazy !== null){
            return this.julianyearsLazy;
        }
        return this.julianyearsLazy = this.convertFromBase(DurationUnits.JulianYears);
    }

    /** */
    public get Nanoseconds(): number {
        if(this.nanosecondsLazy !== null){
            return this.nanosecondsLazy;
        }
        return this.nanosecondsLazy = this.convertFromBase(DurationUnits.Nanoseconds);
    }

    /** */
    public get Microseconds(): number {
        if(this.microsecondsLazy !== null){
            return this.microsecondsLazy;
        }
        return this.microsecondsLazy = this.convertFromBase(DurationUnits.Microseconds);
    }

    /** */
    public get Milliseconds(): number {
        if(this.millisecondsLazy !== null){
            return this.millisecondsLazy;
        }
        return this.millisecondsLazy = this.convertFromBase(DurationUnits.Milliseconds);
    }

    /**
     * Create a new Duration instance from a Years365
     *
     * @param value The unit as Years365 to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromYears365(value: number): Duration {
        return new Duration(value, DurationUnits.Years365);
    }

    /**
     * Create a new Duration instance from a Months30
     *
     * @param value The unit as Months30 to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromMonths30(value: number): Duration {
        return new Duration(value, DurationUnits.Months30);
    }

    /**
     * Create a new Duration instance from a Weeks
     *
     * @param value The unit as Weeks to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromWeeks(value: number): Duration {
        return new Duration(value, DurationUnits.Weeks);
    }

    /**
     * Create a new Duration instance from a Days
     *
     * @param value The unit as Days to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromDays(value: number): Duration {
        return new Duration(value, DurationUnits.Days);
    }

    /**
     * Create a new Duration instance from a Hours
     *
     * @param value The unit as Hours to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromHours(value: number): Duration {
        return new Duration(value, DurationUnits.Hours);
    }

    /**
     * Create a new Duration instance from a Minutes
     *
     * @param value The unit as Minutes to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromMinutes(value: number): Duration {
        return new Duration(value, DurationUnits.Minutes);
    }

    /**
     * Create a new Duration instance from a Seconds
     *
     * @param value The unit as Seconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromSeconds(value: number): Duration {
        return new Duration(value, DurationUnits.Seconds);
    }

    /**
     * Create a new Duration instance from a JulianYears
     *
     * @param value The unit as JulianYears to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromJulianYears(value: number): Duration {
        return new Duration(value, DurationUnits.JulianYears);
    }

    /**
     * Create a new Duration instance from a Nanoseconds
     *
     * @param value The unit as Nanoseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromNanoseconds(value: number): Duration {
        return new Duration(value, DurationUnits.Nanoseconds);
    }

    /**
     * Create a new Duration instance from a Microseconds
     *
     * @param value The unit as Microseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromMicroseconds(value: number): Duration {
        return new Duration(value, DurationUnits.Microseconds);
    }

    /**
     * Create a new Duration instance from a Milliseconds
     *
     * @param value The unit as Milliseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    public static FromMilliseconds(value: number): Duration {
        return new Duration(value, DurationUnits.Milliseconds);
    }

    /**
     * Gets the base unit enumeration associated with Duration
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof DurationUnits {
        return DurationUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): DurationUnits.Seconds {
        return DurationUnits.Seconds;
    }

    /**
     * Create API DTO represent a Duration unit.
     * @param holdInUnit The specific Duration unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: DurationUnits = DurationUnits.Seconds): DurationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Duration unit from an API DTO representation.
     * @param dtoDuration The Duration API DTO representation
     */
    public static FromDto(dtoDuration: DurationDto): Duration {
        return new Duration(dtoDuration.value, dtoDuration.unit);
    }

    /**
     * Convert Duration to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: DurationUnits): number {
        switch (toUnit) {
            case DurationUnits.Years365: return this.Years365;
            case DurationUnits.Months30: return this.Months30;
            case DurationUnits.Weeks: return this.Weeks;
            case DurationUnits.Days: return this.Days;
            case DurationUnits.Hours: return this.Hours;
            case DurationUnits.Minutes: return this.Minutes;
            case DurationUnits.Seconds: return this.Seconds;
            case DurationUnits.JulianYears: return this.JulianYears;
            case DurationUnits.Nanoseconds: return this.Nanoseconds;
            case DurationUnits.Microseconds: return this.Microseconds;
            case DurationUnits.Milliseconds: return this.Milliseconds;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: DurationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case DurationUnits.Years365: {
                    const v4 = super.internalMultiply(365, 24);
                    const v6 = super.internalMultiply(v4, 3600);
                    return super.internalDivide(this.value, v6);
                }
                case DurationUnits.Months30: {
                    const v4 = super.internalMultiply(30, 24);
                    const v6 = super.internalMultiply(v4, 3600);
                    return super.internalDivide(this.value, v6);
                }
                case DurationUnits.Weeks: {
                    const v4 = super.internalMultiply(7, 24);
                    const v6 = super.internalMultiply(v4, 3600);
                    return super.internalDivide(this.value, v6);
                }
                case DurationUnits.Days: {
                    const v4 = super.internalMultiply(24, 3600);
                    return super.internalDivide(this.value, v4);
                }
                case DurationUnits.Hours: return super.internalDivide(this.value, 3600);
                case DurationUnits.Minutes: return super.internalDivide(this.value, 60);
                case DurationUnits.Seconds: return this.value;
                case DurationUnits.JulianYears: {
                    const v4 = super.internalMultiply(365.25, 24);
                    const v6 = super.internalMultiply(v4, 3600);
                    return super.internalDivide(this.value, v6);
                }
                case DurationUnits.Nanoseconds: return super.internalDivide(this.value, 1e-9);
                case DurationUnits.Microseconds: return super.internalDivide(this.value, 0.000001);
                case DurationUnits.Milliseconds: return super.internalDivide(this.value, 0.001);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case DurationUnits.Years365: return this.value / (365 * 24 * 3600);
            case DurationUnits.Months30: return this.value / (30 * 24 * 3600);
            case DurationUnits.Weeks: return this.value / (7 * 24 * 3600);
            case DurationUnits.Days: return this.value / (24 * 3600);
            case DurationUnits.Hours: return this.value / 3600;
            case DurationUnits.Minutes: return this.value / 60;
            case DurationUnits.Seconds: return this.value;
            case DurationUnits.JulianYears: return this.value / (365.25 * 24 * 3600);
            case DurationUnits.Nanoseconds: return (this.value) / 1e-9;
            case DurationUnits.Microseconds: return (this.value) / 0.000001;
            case DurationUnits.Milliseconds: return (this.value) / 0.001;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: DurationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case DurationUnits.Years365: {
                    const v3 = super.internalMultiply(value, 365);
                    const v5 = super.internalMultiply(v3, 24);
                    return super.internalMultiply(v5, 3600);
                }
                case DurationUnits.Months30: {
                    const v3 = super.internalMultiply(value, 30);
                    const v5 = super.internalMultiply(v3, 24);
                    return super.internalMultiply(v5, 3600);
                }
                case DurationUnits.Weeks: {
                    const v3 = super.internalMultiply(value, 7);
                    const v5 = super.internalMultiply(v3, 24);
                    return super.internalMultiply(v5, 3600);
                }
                case DurationUnits.Days: {
                    const v3 = super.internalMultiply(value, 24);
                    return super.internalMultiply(v3, 3600);
                }
                case DurationUnits.Hours: return super.internalMultiply(value, 3600);
                case DurationUnits.Minutes: return super.internalMultiply(value, 60);
                case DurationUnits.Seconds: return value;
                case DurationUnits.JulianYears: {
                    const v3 = super.internalMultiply(value, 365.25);
                    const v5 = super.internalMultiply(v3, 24);
                    return super.internalMultiply(v5, 3600);
                }
                case DurationUnits.Nanoseconds: return super.internalMultiply(value, 1e-9);
                case DurationUnits.Microseconds: return super.internalMultiply(value, 0.000001);
                case DurationUnits.Milliseconds: return super.internalMultiply(value, 0.001);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case DurationUnits.Years365: return value * 365 * 24 * 3600;
            case DurationUnits.Months30: return value * 30 * 24 * 3600;
            case DurationUnits.Weeks: return value * 7 * 24 * 3600;
            case DurationUnits.Days: return value * 24 * 3600;
            case DurationUnits.Hours: return value * 3600;
            case DurationUnits.Minutes: return value * 60;
            case DurationUnits.Seconds: return value;
            case DurationUnits.JulianYears: return value * 365.25 * 24 * 3600;
            case DurationUnits.Nanoseconds: return (value) * 1e-9;
            case DurationUnits.Microseconds: return (value) * 0.000001;
            case DurationUnits.Milliseconds: return (value) * 0.001;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Duration to string.
     * Note! the default format for Duration is Seconds.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Duration.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Duration.
     */
    public toString(unit: DurationUnits = DurationUnits.Seconds, fractionalDigits?: number): string {

        switch (unit) {
            
            case DurationUnits.Years365:
                return super.truncateFractionDigits(this.Years365, fractionalDigits) + ` yr`;
            case DurationUnits.Months30:
                return super.truncateFractionDigits(this.Months30, fractionalDigits) + ` mo`;
            case DurationUnits.Weeks:
                return super.truncateFractionDigits(this.Weeks, fractionalDigits) + ` wk`;
            case DurationUnits.Days:
                return super.truncateFractionDigits(this.Days, fractionalDigits) + ` d`;
            case DurationUnits.Hours:
                return super.truncateFractionDigits(this.Hours, fractionalDigits) + ` h`;
            case DurationUnits.Minutes:
                return super.truncateFractionDigits(this.Minutes, fractionalDigits) + ` m`;
            case DurationUnits.Seconds:
                return super.truncateFractionDigits(this.Seconds, fractionalDigits) + ` s`;
            case DurationUnits.JulianYears:
                return super.truncateFractionDigits(this.JulianYears, fractionalDigits) + ` jyr`;
            case DurationUnits.Nanoseconds:
                return super.truncateFractionDigits(this.Nanoseconds, fractionalDigits) + ` ns`;
            case DurationUnits.Microseconds:
                return super.truncateFractionDigits(this.Microseconds, fractionalDigits) + ` μs`;
            case DurationUnits.Milliseconds:
                return super.truncateFractionDigits(this.Milliseconds, fractionalDigits) + ` ms`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Duration unit abbreviation.
     * Note! the default abbreviation for Duration is Seconds.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Duration.
     * @returns The abbreviation string of Duration.
     */
    public getUnitAbbreviation(unitAbbreviation: DurationUnits = DurationUnits.Seconds): string {

        switch (unitAbbreviation) {
            
            case DurationUnits.Years365:
                return `yr`;
            case DurationUnits.Months30:
                return `mo`;
            case DurationUnits.Weeks:
                return `wk`;
            case DurationUnits.Days:
                return `d`;
            case DurationUnits.Hours:
                return `h`;
            case DurationUnits.Minutes:
                return `m`;
            case DurationUnits.Seconds:
                return `s`;
            case DurationUnits.JulianYears:
                return `jyr`;
            case DurationUnits.Nanoseconds:
                return `ns`;
            case DurationUnits.Microseconds:
                return `μs`;
            case DurationUnits.Milliseconds:
                return `ms`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Duration are equals to the current Duration.
     * @param duration The other Duration.
     * @returns True if the given Duration are equal to the current Duration.
     */
    public equals(duration: Duration): boolean {
        return super.internalEquals(this.value, duration.BaseValue);
    }

    /**
     * Compare the given Duration against the current Duration.
     * @param duration The other Duration.
     * @returns 0 if they are equal, -1 if the current Duration is less then other, 1 if the current Duration is greater then other.
     */
    public compareTo(duration: Duration): number {
        return super.internalCompareTo(this.value, duration.BaseValue);
    }

    /**
     * Add the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    public add(duration: Duration): Duration {
        return new Duration(super.internalAdd(this.value, duration.BaseValue))
    }

    /**
     * Subtract the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    public subtract(duration: Duration): Duration {
        return new Duration(super.internalSubtract(this.value, duration.BaseValue))
    }

    /**
     * Multiply the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    public multiply(duration: Duration): Duration {
        return new Duration(super.internalMultiply(this.value, duration.BaseValue))
    }

    /**
     * Divide the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    public divide(duration: Duration): Duration {
        return new Duration(super.internalDivide(this.value, duration.BaseValue))
    }

    /**
     * Modulo the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    public modulo(duration: Duration): Duration {
        return new Duration(super.internalModulo(this.value, duration.BaseValue))
    }

    /**
     * Pow the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    public pow(duration: Duration): Duration {
        return new Duration(super.internalPow(this.value, duration.BaseValue))
    }
}
