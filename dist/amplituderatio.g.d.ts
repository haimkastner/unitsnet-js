/** AmplitudeRatioUnits enumeration */
export declare enum AmplitudeRatioUnits {
    /** */
    DecibelVolts = 0,
    /** */
    DecibelMicrovolts = 1,
    /** */
    DecibelMillivolts = 2,
    /** */
    DecibelsUnloaded = 3
}
/** The strength of a signal expressed in decibels (dB) relative to one volt RMS. */
export declare class AmplitudeRatio {
    private value;
    private decibelvoltsLazy;
    private decibelmicrovoltsLazy;
    private decibelmillivoltsLazy;
    private decibelsunloadedLazy;
    /**
     * Create a new AmplitudeRatio.
     * @param value The value.
     * @param fromUnit The ‘AmplitudeRatio’ unit to create from.
     */
    constructor(value: number, fromUnit: AmplitudeRatioUnits);
    /**
     * The base value of AmplitudeRatio is DecibelVolt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DecibelVolts(): number;
    /** */
    get DecibelMicrovolts(): number;
    /** */
    get DecibelMillivolts(): number;
    /** */
    get DecibelsUnloaded(): number;
    /**
     * Create a new AmplitudeRatio instance from a DecibelVolts
     *
     * @param value The unit as DecibelVolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelVolts(value: number): AmplitudeRatio;
    /**
     * Create a new AmplitudeRatio instance from a DecibelMicrovolts
     *
     * @param value The unit as DecibelMicrovolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelMicrovolts(value: number): AmplitudeRatio;
    /**
     * Create a new AmplitudeRatio instance from a DecibelMillivolts
     *
     * @param value The unit as DecibelMillivolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelMillivolts(value: number): AmplitudeRatio;
    /**
     * Create a new AmplitudeRatio instance from a DecibelsUnloaded
     *
     * @param value The unit as DecibelsUnloaded to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    static FromDecibelsUnloaded(value: number): AmplitudeRatio;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the AmplitudeRatio to string.
     * Note! the default format for AmplitudeRatio is DecibelVolts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AmplitudeRatio.
     * @returns The string format of the AmplitudeRatio.
     */
    toString(toUnit?: AmplitudeRatioUnits): string;
}
//# sourceMappingURL=amplituderatio.g.d.ts.map