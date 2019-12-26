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
     */
    constructor(value: number, fromUnit: ElectricCurrentGradientUnits);
    /**
     * The base value of ElectricCurrentGradient is AmperePerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=electriccurrentgradient.g.d.ts.map