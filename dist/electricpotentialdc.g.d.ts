/** ElectricPotentialDcUnits enumeration */
export declare enum ElectricPotentialDcUnits {
    /** */
    VoltsDc = 0,
    /** */
    MicrovoltsDc = 1,
    /** */
    KilovoltsDc = 2,
    /** */
    MegavoltsDc = 3
}
/** The Electric Potential of a system known to use Direct Current. */
export declare class ElectricPotentialDc {
    private value;
    private voltsdcLazy;
    private microvoltsdcLazy;
    private kilovoltsdcLazy;
    private megavoltsdcLazy;
    /**
     * Create a new ElectricPotentialDc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialDc’ unit to create from.
     * The default unit is VoltsDc
     */
    constructor(value: number, fromUnit?: ElectricPotentialDcUnits);
    /**
     * The base value of ElectricPotentialDc is VoltsDc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltsDc(): number;
    /** */
    get MicrovoltsDc(): number;
    /** */
    get KilovoltsDc(): number;
    /** */
    get MegavoltsDc(): number;
    /**
     * Create a new ElectricPotentialDc instance from a VoltsDc
     *
     * @param value The unit as VoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromVoltsDc(value: number): ElectricPotentialDc;
    /**
     * Create a new ElectricPotentialDc instance from a MicrovoltsDc
     *
     * @param value The unit as MicrovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromMicrovoltsDc(value: number): ElectricPotentialDc;
    /**
     * Create a new ElectricPotentialDc instance from a KilovoltsDc
     *
     * @param value The unit as KilovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromKilovoltsDc(value: number): ElectricPotentialDc;
    /**
     * Create a new ElectricPotentialDc instance from a MegavoltsDc
     *
     * @param value The unit as MegavoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromMegavoltsDc(value: number): ElectricPotentialDc;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricPotentialDc to string.
     * Note! the default format for ElectricPotentialDc is VoltsDc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialDc.
     * @returns The string format of the ElectricPotentialDc.
     */
    toString(toUnit?: ElectricPotentialDcUnits): string;
    /**
     * Check if the given ElectricPotentialDc are equals to the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns True if the given ElectricPotentialDc are equal to the current ElectricPotentialDc.
     */
    equals(electricPotentialDc: ElectricPotentialDc): boolean;
    /**
     * Compare the given ElectricPotentialDc against the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialDc is less then other, 1 if the current ElectricPotentialDc is greater then other.
     */
    compareTo(electricPotentialDc: ElectricPotentialDc): number;
    /**
     * Add the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    add(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc;
    /**
     * Subtract the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    subtract(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc;
    /**
     * Multiply the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    multiply(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc;
    /**
     * Divide the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    divide(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc;
    /**
     * Modulo the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    modulo(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc;
    /**
     * Pow the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    pow(electricPotentialDc: ElectricPotentialDc): ElectricPotentialDc;
}
//# sourceMappingURL=electricpotentialdc.g.d.ts.map