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
     */
    constructor(value: number, fromUnit: ElectricPotentialDcUnits);
    /**
     * The base value of ElectricPotentialDc is VoltDc.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=electricpotentialdc.g.d.ts.map