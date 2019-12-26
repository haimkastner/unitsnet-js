/** ElectricResistanceUnits enumeration */
export declare enum ElectricResistanceUnits {
    /** */
    Ohms = 0,
    /** */
    Kiloohms = 1,
    /** */
    Megaohms = 2,
    /** */
    Gigaohms = 3
}
/** The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor. */
export declare class ElectricResistance {
    private value;
    private ohmsLazy;
    private kiloohmsLazy;
    private megaohmsLazy;
    private gigaohmsLazy;
    /**
     * Create a new ElectricResistance.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistance’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricResistanceUnits);
    /**
     * The base value of ElectricResistance is Ohm.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Ohms(): number;
    /** */
    get Kiloohms(): number;
    /** */
    get Megaohms(): number;
    /** */
    get Gigaohms(): number;
    /**
     * Create a new ElectricResistance instance from a Ohms
     *
     * @param value The unit as Ohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromOhms(value: number): ElectricResistance;
    /**
     * Create a new ElectricResistance instance from a Kiloohms
     *
     * @param value The unit as Kiloohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromKiloohms(value: number): ElectricResistance;
    /**
     * Create a new ElectricResistance instance from a Megaohms
     *
     * @param value The unit as Megaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromMegaohms(value: number): ElectricResistance;
    /**
     * Create a new ElectricResistance instance from a Gigaohms
     *
     * @param value The unit as Gigaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromGigaohms(value: number): ElectricResistance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricResistance to string.
     * Note! the default format for ElectricResistance is Ohms.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricResistance.
     * @returns The string format of the ElectricResistance.
     */
    toString(toUnit?: ElectricResistanceUnits): string;
}
//# sourceMappingURL=electricresistance.g.d.ts.map