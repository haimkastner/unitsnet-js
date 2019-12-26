/** ElectricPotentialAcUnits enumeration */
export declare enum ElectricPotentialAcUnits {
    /** */
    VoltsAc = 0,
    /** */
    MicrovoltsAc = 1,
    /** */
    KilovoltsAc = 2,
    /** */
    MegavoltsAc = 3
}
/** The Electric Potential of a system known to use Alternating Current. */
export declare class ElectricPotentialAc {
    private value;
    private voltsacLazy;
    private microvoltsacLazy;
    private kilovoltsacLazy;
    private megavoltsacLazy;
    /**
     * Create a new ElectricPotentialAc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialAc’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricPotentialAcUnits);
    /**
     * The base value of ElectricPotentialAc is VoltAc.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltsAc(): number;
    /** */
    get MicrovoltsAc(): number;
    /** */
    get KilovoltsAc(): number;
    /** */
    get MegavoltsAc(): number;
    /**
     * Create a new ElectricPotentialAc instance from a VoltsAc
     *
     * @param value The unit as VoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromVoltsAc(value: number): ElectricPotentialAc;
    /**
     * Create a new ElectricPotentialAc instance from a MicrovoltsAc
     *
     * @param value The unit as MicrovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromMicrovoltsAc(value: number): ElectricPotentialAc;
    /**
     * Create a new ElectricPotentialAc instance from a KilovoltsAc
     *
     * @param value The unit as KilovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromKilovoltsAc(value: number): ElectricPotentialAc;
    /**
     * Create a new ElectricPotentialAc instance from a MegavoltsAc
     *
     * @param value The unit as MegavoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromMegavoltsAc(value: number): ElectricPotentialAc;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricPotentialAc to string.
     * Note! the default format for ElectricPotentialAc is VoltsAc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialAc.
     * @returns The string format of the ElectricPotentialAc.
     */
    toString(toUnit?: ElectricPotentialAcUnits): string;
}
//# sourceMappingURL=electricpotentialac.g.d.ts.map