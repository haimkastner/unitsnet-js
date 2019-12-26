/** DurationUnits enumeration */
export enum DurationUnits {
    /** */
    Years365,
    /** */
    Months30,
    /** */
    Weeks,
    /** */
    Days,
    /** */
    Hours,
    /** */
    Minutes,
    /** */
    Seconds,
    /** */
    Nanoseconds,
    /** */
    Microseconds
}

/** Time is a dimension in which events can be ordered from the past through the present into the future, and also the measure of durations of events and the intervals between them. */
export class Duration {
    private value: number;
    private years365Lazy: number | null = null;
    private months30Lazy: number | null = null;
    private weeksLazy: number | null = null;
    private daysLazy: number | null = null;
    private hoursLazy: number | null = null;
    private minutesLazy: number | null = null;
    private secondsLazy: number | null = null;
    private nanosecondsLazy: number | null = null;
    private microsecondsLazy: number | null = null;

    /**
     * Create a new Duration.
     * @param value The value.
     * @param fromUnit The ‘Duration’ unit to create from.
     */
    public constructor(value: number, fromUnit: DurationUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Duration is Second.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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

    private convertFromBase(toUnit: DurationUnits): number {
        switch (toUnit) {
                
            case DurationUnits.Years365:
                return this.value/(365*24*3600);
            case DurationUnits.Months30:
                return this.value/(30*24*3600);
            case DurationUnits.Weeks:
                return this.value/(7*24*3600);
            case DurationUnits.Days:
                return this.value/(24*3600);
            case DurationUnits.Hours:
                return this.value/3600;
            case DurationUnits.Minutes:
                return this.value/60;
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

    private convertToBase(value: number, fromUnit: DurationUnits): number {
        switch (fromUnit) {
                
            case DurationUnits.Years365:
                return value*365*24*3600;
            case DurationUnits.Months30:
                return value*30*24*3600;
            case DurationUnits.Weeks:
                return value*7*24*3600;
            case DurationUnits.Days:
                return value*24*3600;
            case DurationUnits.Hours:
                return value*3600;
            case DurationUnits.Minutes:
                return value*60;
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
    public toString(toUnit: DurationUnits = DurationUnits.Seconds): string {

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
                return this.Nanoseconds + ` s`;
            case DurationUnits.Microseconds:
                return this.Microseconds + ` s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
