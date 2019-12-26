/** TemperatureChangeRateUnits enumeration */
export declare enum TemperatureChangeRateUnits {
    /** */
    DegreesCelsiusPerSecond = 0,
    /** */
    DegreesCelsiusPerMinute = 1,
    /** */
    NanodegreesCelsiusPerSecond = 2,
    /** */
    MicrodegreesCelsiusPerSecond = 3,
    /** */
    CentidegreesCelsiusPerSecond = 4,
    /** */
    DecidegreesCelsiusPerSecond = 5,
    /** */
    DecadegreesCelsiusPerSecond = 6,
    /** */
    HectodegreesCelsiusPerSecond = 7,
    /** */
    KilodegreesCelsiusPerSecond = 8
}
/** Temperature change rate is the ratio of the temperature change to the time during which the change occurred (value of temperature changes per unit time). */
export declare class TemperatureChangeRate {
    private value;
    private degreescelsiuspersecondLazy;
    private degreescelsiusperminuteLazy;
    private nanodegreescelsiuspersecondLazy;
    private microdegreescelsiuspersecondLazy;
    private centidegreescelsiuspersecondLazy;
    private decidegreescelsiuspersecondLazy;
    private decadegreescelsiuspersecondLazy;
    private hectodegreescelsiuspersecondLazy;
    private kilodegreescelsiuspersecondLazy;
    /**
     * Create a new TemperatureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘TemperatureChangeRate’ unit to create from.
     */
    constructor(value: number, fromUnit: TemperatureChangeRateUnits);
    /**
     * The base value of TemperatureChangeRate is DegreeCelsiusPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DegreesCelsiusPerSecond(): number;
    /** */
    get DegreesCelsiusPerMinute(): number;
    /** */
    get NanodegreesCelsiusPerSecond(): number;
    /** */
    get MicrodegreesCelsiusPerSecond(): number;
    /** */
    get CentidegreesCelsiusPerSecond(): number;
    /** */
    get DecidegreesCelsiusPerSecond(): number;
    /** */
    get DecadegreesCelsiusPerSecond(): number;
    /** */
    get HectodegreesCelsiusPerSecond(): number;
    /** */
    get KilodegreesCelsiusPerSecond(): number;
    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerSecond
     *
     * @param value The unit as DegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerMinute
     *
     * @param value The unit as DegreesCelsiusPerMinute to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a NanodegreesCelsiusPerSecond
     *
     * @param value The unit as NanodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromNanodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a MicrodegreesCelsiusPerSecond
     *
     * @param value The unit as MicrodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromMicrodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a CentidegreesCelsiusPerSecond
     *
     * @param value The unit as CentidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromCentidegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a DecidegreesCelsiusPerSecond
     *
     * @param value The unit as DecidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromDecidegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a DecadegreesCelsiusPerSecond
     *
     * @param value The unit as DecadegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromDecadegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a HectodegreesCelsiusPerSecond
     *
     * @param value The unit as HectodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromHectodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    /**
     * Create a new TemperatureChangeRate instance from a KilodegreesCelsiusPerSecond
     *
     * @param value The unit as KilodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    static FromKilodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the TemperatureChangeRate to string.
     * Note! the default format for TemperatureChangeRate is DegreesCelsiusPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the TemperatureChangeRate.
     * @returns The string format of the TemperatureChangeRate.
     */
    toString(toUnit?: TemperatureChangeRateUnits): string;
}
//# sourceMappingURL=temperaturechangerate.g.d.ts.map