/** RatioChangeRateUnits enumeration */
export declare enum RatioChangeRateUnits {
    /** */
    PercentsPerSecond = 0,
    /** */
    DecimalFractionsPerSecond = 1
}
/** The change in ratio per unit of time. */
export declare class RatioChangeRate {
    private value;
    private percentspersecondLazy;
    private decimalfractionspersecondLazy;
    /**
     * Create a new RatioChangeRate.
     * @param value The value.
     * @param fromUnit The ‘RatioChangeRate’ unit to create from.
     */
    constructor(value: number, fromUnit: RatioChangeRateUnits);
    /**
     * The base value of RatioChangeRate is DecimalFractionPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get PercentsPerSecond(): number;
    /** */
    get DecimalFractionsPerSecond(): number;
    /**
     * Create a new RatioChangeRate instance from a PercentsPerSecond
     *
     * @param value The unit as PercentsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    static FromPercentsPerSecond(value: number): RatioChangeRate;
    /**
     * Create a new RatioChangeRate instance from a DecimalFractionsPerSecond
     *
     * @param value The unit as DecimalFractionsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    static FromDecimalFractionsPerSecond(value: number): RatioChangeRate;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the RatioChangeRate to string.
     * Note! the default format for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RatioChangeRate.
     * @returns The string format of the RatioChangeRate.
     */
    toString(toUnit?: RatioChangeRateUnits): string;
}
//# sourceMappingURL=ratiochangerate.g.d.ts.map