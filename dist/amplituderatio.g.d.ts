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
     * The default unit is DecibelVolts
     */
    constructor(value: number, fromUnit?: AmplitudeRatioUnits);
    /**
     * The base value of AmplitudeRatio is DecibelVolts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given AmplitudeRatio are equals to the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns True if the given AmplitudeRatio are equal to the current AmplitudeRatio.
     */
    equals(amplitudeRatio: AmplitudeRatio): boolean;
    /**
     * Compare the given AmplitudeRatio against the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns 0 if they are equal, -1 if the current AmplitudeRatio is less then other, 1 if the current AmplitudeRatio is greater then other.
     */
    compareTo(amplitudeRatio: AmplitudeRatio): number;
    /**
     * Add the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    add(amplitudeRatio: AmplitudeRatio): AmplitudeRatio;
    /**
     * Subtract the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    subtract(amplitudeRatio: AmplitudeRatio): AmplitudeRatio;
    /**
     * Multiply the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    multiply(amplitudeRatio: AmplitudeRatio): AmplitudeRatio;
    /**
     * Divide the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    divide(amplitudeRatio: AmplitudeRatio): AmplitudeRatio;
    /**
     * Modulo the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    modulo(amplitudeRatio: AmplitudeRatio): AmplitudeRatio;
    /**
     * Pow the given AmplitudeRatio with the current AmplitudeRatio.
     * @param amplitudeRatio The other AmplitudeRatio.
     * @returns A new AmplitudeRatio instance with the results.
     */
    pow(amplitudeRatio: AmplitudeRatio): AmplitudeRatio;
}
//# sourceMappingURL=amplituderatio.g.d.ts.map