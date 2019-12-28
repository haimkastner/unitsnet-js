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
     * The default unit is Ohms
     */
    constructor(value: number, fromUnit?: ElectricResistanceUnits);
    /**
     * The base value of ElectricResistance is Ohms.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given ElectricResistance are equals to the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns True if the given ElectricResistance are equal to the current ElectricResistance.
     */
    equals(electricResistance: ElectricResistance): boolean;
    /**
     * Compare the given ElectricResistance against the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns 0 if they are equal, -1 if the current ElectricResistance is less then other, 1 if the current ElectricResistance is greater then other.
     */
    compareTo(electricResistance: ElectricResistance): number;
    /**
     * Add the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    add(electricResistance: ElectricResistance): ElectricResistance;
    /**
     * Subtract the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    subtract(electricResistance: ElectricResistance): ElectricResistance;
    /**
     * Multiply the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    multiply(electricResistance: ElectricResistance): ElectricResistance;
    /**
     * Divide the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    divide(electricResistance: ElectricResistance): ElectricResistance;
    /**
     * Modulo the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    modulo(electricResistance: ElectricResistance): ElectricResistance;
    /**
     * Pow the given ElectricResistance with the current ElectricResistance.
     * @param electricResistance The other ElectricResistance.
     * @returns A new ElectricResistance instance with the results.
     */
    pow(electricResistance: ElectricResistance): ElectricResistance;
}
//# sourceMappingURL=electricresistance.g.d.ts.map