/** ApparentPowerUnits enumeration */
export declare enum ApparentPowerUnits {
    /** */
    Voltamperes = 0,
    /** */
    Kilovoltamperes = 1,
    /** */
    Megavoltamperes = 2,
    /** */
    Gigavoltamperes = 3
}
/** Power engineers measure apparent power as the magnitude of the vector sum of active and reactive power. Apparent power is the product of the root-mean-square of voltage and current. */
export declare class ApparentPower {
    private value;
    private voltamperesLazy;
    private kilovoltamperesLazy;
    private megavoltamperesLazy;
    private gigavoltamperesLazy;
    /**
     * Create a new ApparentPower.
     * @param value The value.
     * @param fromUnit The ‘ApparentPower’ unit to create from.
     */
    constructor(value: number, fromUnit: ApparentPowerUnits);
    /**
     * The base value of ApparentPower is Voltampere.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Voltamperes(): number;
    /** */
    get Kilovoltamperes(): number;
    /** */
    get Megavoltamperes(): number;
    /** */
    get Gigavoltamperes(): number;
    /**
     * Create a new ApparentPower instance from a Voltamperes
     *
     * @param value The unit as Voltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromVoltamperes(value: number): ApparentPower;
    /**
     * Create a new ApparentPower instance from a Kilovoltamperes
     *
     * @param value The unit as Kilovoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromKilovoltamperes(value: number): ApparentPower;
    /**
     * Create a new ApparentPower instance from a Megavoltamperes
     *
     * @param value The unit as Megavoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromMegavoltamperes(value: number): ApparentPower;
    /**
     * Create a new ApparentPower instance from a Gigavoltamperes
     *
     * @param value The unit as Gigavoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromGigavoltamperes(value: number): ApparentPower;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ApparentPower to string.
     * Note! the default format for ApparentPower is Voltamperes.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ApparentPower.
     * @returns The string format of the ApparentPower.
     */
    toString(toUnit?: ApparentPowerUnits): string;
}
//# sourceMappingURL=apparentpower.g.d.ts.map