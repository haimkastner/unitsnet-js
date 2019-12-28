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
     * The default unit is DecimalFractionsPerSecond
     */
    constructor(value: number, fromUnit?: RatioChangeRateUnits);
    /**
     * The base value of RatioChangeRate is DecimalFractionsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given RatioChangeRate are equals to the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns True if the given RatioChangeRate are equal to the current RatioChangeRate.
     */
    equals(ratioChangeRate: RatioChangeRate): boolean;
    /**
     * Compare the given RatioChangeRate against the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns 0 if they are equal, -1 if the current RatioChangeRate is less then other, 1 if the current RatioChangeRate is greater then other.
     */
    compareTo(ratioChangeRate: RatioChangeRate): number;
    /**
     * Add the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    add(ratioChangeRate: RatioChangeRate): RatioChangeRate;
    /**
     * Subtract the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    subtract(ratioChangeRate: RatioChangeRate): RatioChangeRate;
    /**
     * Multiply the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    multiply(ratioChangeRate: RatioChangeRate): RatioChangeRate;
    /**
     * Divide the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    divide(ratioChangeRate: RatioChangeRate): RatioChangeRate;
    /**
     * Modulo the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    modulo(ratioChangeRate: RatioChangeRate): RatioChangeRate;
    /**
     * Pow the given RatioChangeRate with the current RatioChangeRate.
     * @param ratioChangeRate The other RatioChangeRate.
     * @returns A new RatioChangeRate instance with the results.
     */
    pow(ratioChangeRate: RatioChangeRate): RatioChangeRate;
}
//# sourceMappingURL=ratiochangerate.g.d.ts.map