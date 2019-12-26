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
     */
    constructor(value: number, fromUnit: ForceChangeRateUnits);
    /**
     * The base value of ForceChangeRate is NewtonPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=forcechangerate.g.d.ts.map