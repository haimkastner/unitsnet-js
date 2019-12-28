/** DurationUnits enumeration */
export declare enum DurationUnits {
    /** */
    Years365 = 0,
    /** */
    Months30 = 1,
    /** */
    Weeks = 2,
    /** */
    Days = 3,
    /** */
    Hours = 4,
    /** */
    Minutes = 5,
    /** */
    Seconds = 6,
    /** */
    Nanoseconds = 7,
    /** */
    Microseconds = 8
}
/** Time is a dimension in which events can be ordered from the past through the present into the future, and also the measure of durations of events and the intervals between them. */
export declare class Duration {
    private value;
    private years365Lazy;
    private months30Lazy;
    private weeksLazy;
    private daysLazy;
    private hoursLazy;
    private minutesLazy;
    private secondsLazy;
    private nanosecondsLazy;
    private microsecondsLazy;
    /**
     * Create a new Duration.
     * @param value The value.
     * @param fromUnit The ‘Duration’ unit to create from.
     * The default unit is Seconds
     */
    constructor(value: number, fromUnit?: DurationUnits);
    /**
     * The base value of Duration is Seconds.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Years365(): number;
    /** */
    get Months30(): number;
    /** */
    get Weeks(): number;
    /** */
    get Days(): number;
    /** */
    get Hours(): number;
    /** */
    get Minutes(): number;
    /** */
    get Seconds(): number;
    /** */
    get Nanoseconds(): number;
    /** */
    get Microseconds(): number;
    /**
     * Create a new Duration instance from a Years365
     *
     * @param value The unit as Years365 to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromYears365(value: number): Duration;
    /**
     * Create a new Duration instance from a Months30
     *
     * @param value The unit as Months30 to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromMonths30(value: number): Duration;
    /**
     * Create a new Duration instance from a Weeks
     *
     * @param value The unit as Weeks to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromWeeks(value: number): Duration;
    /**
     * Create a new Duration instance from a Days
     *
     * @param value The unit as Days to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromDays(value: number): Duration;
    /**
     * Create a new Duration instance from a Hours
     *
     * @param value The unit as Hours to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromHours(value: number): Duration;
    /**
     * Create a new Duration instance from a Minutes
     *
     * @param value The unit as Minutes to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromMinutes(value: number): Duration;
    /**
     * Create a new Duration instance from a Seconds
     *
     * @param value The unit as Seconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromSeconds(value: number): Duration;
    /**
     * Create a new Duration instance from a Nanoseconds
     *
     * @param value The unit as Nanoseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromNanoseconds(value: number): Duration;
    /**
     * Create a new Duration instance from a Microseconds
     *
     * @param value The unit as Microseconds to create a new Duration from.
     * @returns The new Duration instance.
     */
    static FromMicroseconds(value: number): Duration;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Duration to string.
     * Note! the default format for Duration is Seconds.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Duration.
     * @returns The string format of the Duration.
     */
    toString(toUnit?: DurationUnits): string;
    /**
     * Check if the given Duration are equals to the current Duration.
     * @param duration The other Duration.
     * @returns True if the given Duration are equal to the current Duration.
     */
    equals(duration: Duration): boolean;
    /**
     * Compare the given Duration against the current Duration.
     * @param duration The other Duration.
     * @returns 0 if they are equal, -1 if the current Duration is less then other, 1 if the current Duration is greater then other.
     */
    compareTo(duration: Duration): number;
    /**
     * Add the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    add(duration: Duration): Duration;
    /**
     * Subtract the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    subtract(duration: Duration): Duration;
    /**
     * Multiply the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    multiply(duration: Duration): Duration;
    /**
     * Divide the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    divide(duration: Duration): Duration;
    /**
     * Modulo the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    modulo(duration: Duration): Duration;
    /**
     * Pow the given Duration with the current Duration.
     * @param duration The other Duration.
     * @returns A new Duration instance with the results.
     */
    pow(duration: Duration): Duration;
}
//# sourceMappingURL=duration.g.d.ts.map