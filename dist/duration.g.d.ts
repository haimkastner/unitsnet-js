export declare enum DurationUnits {
    Years365 = 0,
    Months30 = 1,
    Weeks = 2,
    Days = 3,
    Hours = 4,
    Minutes = 5,
    Seconds = 6,
    Nanoseconds = 7,
    Microseconds = 8
}
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
    constructor(value: number, fromUnit: DurationUnits);
    get Years365(): number;
    get Months30(): number;
    get Weeks(): number;
    get Days(): number;
    get Hours(): number;
    get Minutes(): number;
    get Seconds(): number;
    get Nanoseconds(): number;
    get Microseconds(): number;
    static FromYears365(value: number): Duration;
    static FromMonths30(value: number): Duration;
    static FromWeeks(value: number): Duration;
    static FromDays(value: number): Duration;
    static FromHours(value: number): Duration;
    static FromMinutes(value: number): Duration;
    static FromSeconds(value: number): Duration;
    static FromNanoseconds(value: number): Duration;
    static FromMicroseconds(value: number): Duration;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: DurationUnits): string;
}
//# sourceMappingURL=duration.g.d.ts.map