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
     * The default unit is DecibelWatts
     */
    constructor(value: number, fromUnit?: PowerRatioUnits);
    /**
     * The base value of PowerRatio is DecibelWatts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given PowerRatio are equals to the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns True if the given PowerRatio are equal to the current PowerRatio.
     */
    equals(powerRatio: PowerRatio): boolean;
    /**
     * Compare the given PowerRatio against the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns 0 if they are equal, -1 if the current PowerRatio is less then other, 1 if the current PowerRatio is greater then other.
     */
    compareTo(powerRatio: PowerRatio): number;
    /**
     * Add the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    add(powerRatio: PowerRatio): PowerRatio;
    /**
     * Subtract the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    subtract(powerRatio: PowerRatio): PowerRatio;
    /**
     * Multiply the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    multiply(powerRatio: PowerRatio): PowerRatio;
    /**
     * Divide the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    divide(powerRatio: PowerRatio): PowerRatio;
    /**
     * Modulo the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    modulo(powerRatio: PowerRatio): PowerRatio;
    /**
     * Pow the given PowerRatio with the current PowerRatio.
     * @param powerRatio The other PowerRatio.
     * @returns A new PowerRatio instance with the results.
     */
    pow(powerRatio: PowerRatio): PowerRatio;
}
//# sourceMappingURL=powerratio.g.d.ts.map