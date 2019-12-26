/** PowerRatioUnits enumeration */
export declare enum PowerRatioUnits {
    /** */
    DecibelWatts = 0,
    /** */
    DecibelMilliwatts = 1
}
/** The strength of a signal expressed in decibels (dB) relative to one watt. */
export declare class PowerRatio {
    private value;
    private decibelwattsLazy;
    private decibelmilliwattsLazy;
    /**
     * Create a new PowerRatio.
     * @param value The value.
     * @param fromUnit The ‘PowerRatio’ unit to create from.
     */
    constructor(value: number, fromUnit: PowerRatioUnits);
    /**
     * The base value of PowerRatio is DecibelWatt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DecibelWatts(): number;
    /** */
    get DecibelMilliwatts(): number;
    /**
     * Create a new PowerRatio instance from a DecibelWatts
     *
     * @param value The unit as DecibelWatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    static FromDecibelWatts(value: number): PowerRatio;
    /**
     * Create a new PowerRatio instance from a DecibelMilliwatts
     *
     * @param value The unit as DecibelMilliwatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    static FromDecibelMilliwatts(value: number): PowerRatio;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the PowerRatio to string.
     * Note! the default format for PowerRatio is DecibelWatts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PowerRatio.
     * @returns The string format of the PowerRatio.
     */
    toString(toUnit?: PowerRatioUnits): string;
}
//# sourceMappingURL=powerratio.g.d.ts.map