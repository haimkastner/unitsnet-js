/** PressureChangeRateUnits enumeration */
export declare enum PressureChangeRateUnits {
    /** */
    PascalsPerSecond = 0,
    /** */
    PascalsPerMinute = 1,
    /** */
    AtmospheresPerSecond = 2,
    /** */
    KilopascalsPerSecond = 3,
    /** */
    MegapascalsPerSecond = 4,
    /** */
    KilopascalsPerMinute = 5,
    /** */
    MegapascalsPerMinute = 6
}
/** Pressure change rate is the ratio of the pressure change to the time during which the change occurred (value of pressure changes per unit time). */
export declare class PressureChangeRate {
    private value;
    private pascalspersecondLazy;
    private pascalsperminuteLazy;
    private atmospherespersecondLazy;
    private kilopascalspersecondLazy;
    private megapascalspersecondLazy;
    private kilopascalsperminuteLazy;
    private megapascalsperminuteLazy;
    /**
     * Create a new PressureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘PressureChangeRate’ unit to create from.
     * The default unit is PascalsPerSecond
     */
    constructor(value: number, fromUnit?: PressureChangeRateUnits);
    /**
     * The base value of PressureChangeRate is PascalsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get PascalsPerSecond(): number;
    /** */
    get PascalsPerMinute(): number;
    /** */
    get AtmospheresPerSecond(): number;
    /** */
    get KilopascalsPerSecond(): number;
    /** */
    get MegapascalsPerSecond(): number;
    /** */
    get KilopascalsPerMinute(): number;
    /** */
    get MegapascalsPerMinute(): number;
    /**
     * Create a new PressureChangeRate instance from a PascalsPerSecond
     *
     * @param value The unit as PascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromPascalsPerSecond(value: number): PressureChangeRate;
    /**
     * Create a new PressureChangeRate instance from a PascalsPerMinute
     *
     * @param value The unit as PascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromPascalsPerMinute(value: number): PressureChangeRate;
    /**
     * Create a new PressureChangeRate instance from a AtmospheresPerSecond
     *
     * @param value The unit as AtmospheresPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromAtmospheresPerSecond(value: number): PressureChangeRate;
    /**
     * Create a new PressureChangeRate instance from a KilopascalsPerSecond
     *
     * @param value The unit as KilopascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromKilopascalsPerSecond(value: number): PressureChangeRate;
    /**
     * Create a new PressureChangeRate instance from a MegapascalsPerSecond
     *
     * @param value The unit as MegapascalsPerSecond to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromMegapascalsPerSecond(value: number): PressureChangeRate;
    /**
     * Create a new PressureChangeRate instance from a KilopascalsPerMinute
     *
     * @param value The unit as KilopascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromKilopascalsPerMinute(value: number): PressureChangeRate;
    /**
     * Create a new PressureChangeRate instance from a MegapascalsPerMinute
     *
     * @param value The unit as MegapascalsPerMinute to create a new PressureChangeRate from.
     * @returns The new PressureChangeRate instance.
     */
    static FromMegapascalsPerMinute(value: number): PressureChangeRate;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the PressureChangeRate to string.
     * Note! the default format for PressureChangeRate is PascalsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PressureChangeRate.
     * @returns The string format of the PressureChangeRate.
     */
    toString(toUnit?: PressureChangeRateUnits): string;
    /**
     * Check if the given PressureChangeRate are equals to the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns True if the given PressureChangeRate are equal to the current PressureChangeRate.
     */
    equals(pressureChangeRate: PressureChangeRate): boolean;
    /**
     * Compare the given PressureChangeRate against the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns 0 if they are equal, -1 if the current PressureChangeRate is less then other, 1 if the current PressureChangeRate is greater then other.
     */
    compareTo(pressureChangeRate: PressureChangeRate): number;
    /**
     * Add the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    add(pressureChangeRate: PressureChangeRate): PressureChangeRate;
    /**
     * Subtract the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    subtract(pressureChangeRate: PressureChangeRate): PressureChangeRate;
    /**
     * Multiply the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    multiply(pressureChangeRate: PressureChangeRate): PressureChangeRate;
    /**
     * Divide the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    divide(pressureChangeRate: PressureChangeRate): PressureChangeRate;
    /**
     * Modulo the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    modulo(pressureChangeRate: PressureChangeRate): PressureChangeRate;
    /**
     * Pow the given PressureChangeRate with the current PressureChangeRate.
     * @param pressureChangeRate The other PressureChangeRate.
     * @returns A new PressureChangeRate instance with the results.
     */
    pow(pressureChangeRate: PressureChangeRate): PressureChangeRate;
}
//# sourceMappingURL=pressurechangerate.g.d.ts.map