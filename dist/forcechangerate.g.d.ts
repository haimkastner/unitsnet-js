/** ForceChangeRateUnits enumeration */
export declare enum ForceChangeRateUnits {
    /** */
    NewtonsPerMinute = 0,
    /** */
    NewtonsPerSecond = 1,
    /** */
    DecanewtonsPerMinute = 2,
    /** */
    KilonewtonsPerMinute = 3,
    /** */
    NanonewtonsPerSecond = 4,
    /** */
    MicronewtonsPerSecond = 5,
    /** */
    CentinewtonsPerSecond = 6,
    /** */
    DecinewtonsPerSecond = 7,
    /** */
    DecanewtonsPerSecond = 8,
    /** */
    KilonewtonsPerSecond = 9
}
/** Force change rate is the ratio of the force change to the time during which the change occurred (value of force changes per unit time). */
export declare class ForceChangeRate {
    private value;
    private newtonsperminuteLazy;
    private newtonspersecondLazy;
    private decanewtonsperminuteLazy;
    private kilonewtonsperminuteLazy;
    private nanonewtonspersecondLazy;
    private micronewtonspersecondLazy;
    private centinewtonspersecondLazy;
    private decinewtonspersecondLazy;
    private decanewtonspersecondLazy;
    private kilonewtonspersecondLazy;
    /**
     * Create a new ForceChangeRate.
     * @param value The value.
     * @param fromUnit The ‘ForceChangeRate’ unit to create from.
     * The default unit is NewtonsPerSecond
     */
    constructor(value: number, fromUnit?: ForceChangeRateUnits);
    /**
     * The base value of ForceChangeRate is NewtonsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonsPerMinute(): number;
    /** */
    get NewtonsPerSecond(): number;
    /** */
    get DecanewtonsPerMinute(): number;
    /** */
    get KilonewtonsPerMinute(): number;
    /** */
    get NanonewtonsPerSecond(): number;
    /** */
    get MicronewtonsPerSecond(): number;
    /** */
    get CentinewtonsPerSecond(): number;
    /** */
    get DecinewtonsPerSecond(): number;
    /** */
    get DecanewtonsPerSecond(): number;
    /** */
    get KilonewtonsPerSecond(): number;
    /**
     * Create a new ForceChangeRate instance from a NewtonsPerMinute
     *
     * @param value The unit as NewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromNewtonsPerMinute(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a NewtonsPerSecond
     *
     * @param value The unit as NewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromNewtonsPerSecond(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerMinute
     *
     * @param value The unit as DecanewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromDecanewtonsPerMinute(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerMinute
     *
     * @param value The unit as KilonewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromKilonewtonsPerMinute(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a NanonewtonsPerSecond
     *
     * @param value The unit as NanonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromNanonewtonsPerSecond(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a MicronewtonsPerSecond
     *
     * @param value The unit as MicronewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromMicronewtonsPerSecond(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a CentinewtonsPerSecond
     *
     * @param value The unit as CentinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromCentinewtonsPerSecond(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a DecinewtonsPerSecond
     *
     * @param value The unit as DecinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromDecinewtonsPerSecond(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerSecond
     *
     * @param value The unit as DecanewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromDecanewtonsPerSecond(value: number): ForceChangeRate;
    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerSecond
     *
     * @param value The unit as KilonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromKilonewtonsPerSecond(value: number): ForceChangeRate;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ForceChangeRate to string.
     * Note! the default format for ForceChangeRate is NewtonsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForceChangeRate.
     * @returns The string format of the ForceChangeRate.
     */
    toString(toUnit?: ForceChangeRateUnits): string;
    /**
     * Check if the given ForceChangeRate are equals to the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns True if the given ForceChangeRate are equal to the current ForceChangeRate.
     */
    equals(forceChangeRate: ForceChangeRate): boolean;
    /**
     * Compare the given ForceChangeRate against the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns 0 if they are equal, -1 if the current ForceChangeRate is less then other, 1 if the current ForceChangeRate is greater then other.
     */
    compareTo(forceChangeRate: ForceChangeRate): number;
    /**
     * Add the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    add(forceChangeRate: ForceChangeRate): ForceChangeRate;
    /**
     * Subtract the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    subtract(forceChangeRate: ForceChangeRate): ForceChangeRate;
    /**
     * Multiply the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    multiply(forceChangeRate: ForceChangeRate): ForceChangeRate;
    /**
     * Divide the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    divide(forceChangeRate: ForceChangeRate): ForceChangeRate;
    /**
     * Modulo the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    modulo(forceChangeRate: ForceChangeRate): ForceChangeRate;
    /**
     * Pow the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    pow(forceChangeRate: ForceChangeRate): ForceChangeRate;
}
//# sourceMappingURL=forcechangerate.g.d.ts.map