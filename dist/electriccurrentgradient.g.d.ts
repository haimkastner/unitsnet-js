/** ElectricCurrentGradientUnits enumeration */
export declare enum ElectricCurrentGradientUnits {
    /** */
    AmperesPerSecond = 0
}
/** In electromagnetism, the current gradient describes how the current changes in time. */
export declare class ElectricCurrentGradient {
    private value;
    private amperespersecondLazy;
    /**
     * Create a new ElectricCurrentGradient.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentGradient’ unit to create from.
     * The default unit is AmperesPerSecond
     */
    constructor(value: number, fromUnit?: ElectricCurrentGradientUnits);
    /**
     * The base value of ElectricCurrentGradient is AmperesPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get AmperesPerSecond(): number;
    /**
     * Create a new ElectricCurrentGradient instance from a AmperesPerSecond
     *
     * @param value The unit as AmperesPerSecond to create a new ElectricCurrentGradient from.
     * @returns The new ElectricCurrentGradient instance.
     */
    static FromAmperesPerSecond(value: number): ElectricCurrentGradient;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricCurrentGradient to string.
     * Note! the default format for ElectricCurrentGradient is AmperesPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrentGradient.
     * @returns The string format of the ElectricCurrentGradient.
     */
    toString(toUnit?: ElectricCurrentGradientUnits): string;
    /**
     * Check if the given ElectricCurrentGradient are equals to the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns True if the given ElectricCurrentGradient are equal to the current ElectricCurrentGradient.
     */
    equals(electricCurrentGradient: ElectricCurrentGradient): boolean;
    /**
     * Compare the given ElectricCurrentGradient against the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns 0 if they are equal, -1 if the current ElectricCurrentGradient is less then other, 1 if the current ElectricCurrentGradient is greater then other.
     */
    compareTo(electricCurrentGradient: ElectricCurrentGradient): number;
    /**
     * Add the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    add(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient;
    /**
     * Subtract the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    subtract(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient;
    /**
     * Multiply the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    multiply(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient;
    /**
     * Divide the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    divide(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient;
    /**
     * Modulo the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    modulo(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient;
    /**
     * Pow the given ElectricCurrentGradient with the current ElectricCurrentGradient.
     * @param electricCurrentGradient The other ElectricCurrentGradient.
     * @returns A new ElectricCurrentGradient instance with the results.
     */
    pow(electricCurrentGradient: ElectricCurrentGradient): ElectricCurrentGradient;
}
//# sourceMappingURL=electriccurrentgradient.g.d.ts.map