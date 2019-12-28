/** ElectricConductanceUnits enumeration */
export declare enum ElectricConductanceUnits {
    /** */
    Siemens = 0,
    /** */
    Microsiemens = 1
}
/** The electrical conductance of an electrical conductor is a measure of the easeness to pass an electric current through that conductor. */
export declare class ElectricConductance {
    private value;
    private siemensLazy;
    private microsiemensLazy;
    /**
     * Create a new ElectricConductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductance’ unit to create from.
     * The default unit is Siemens
     */
    constructor(value: number, fromUnit?: ElectricConductanceUnits);
    /**
     * The base value of ElectricConductance is Siemens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Siemens(): number;
    /** */
    get Microsiemens(): number;
    /**
     * Create a new ElectricConductance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    static FromSiemens(value: number): ElectricConductance;
    /**
     * Create a new ElectricConductance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricConductance from.
     * @returns The new ElectricConductance instance.
     */
    static FromMicrosiemens(value: number): ElectricConductance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricConductance to string.
     * Note! the default format for ElectricConductance is Siemens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricConductance.
     * @returns The string format of the ElectricConductance.
     */
    toString(toUnit?: ElectricConductanceUnits): string;
    /**
     * Check if the given ElectricConductance are equals to the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns True if the given ElectricConductance are equal to the current ElectricConductance.
     */
    equals(electricConductance: ElectricConductance): boolean;
    /**
     * Compare the given ElectricConductance against the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns 0 if they are equal, -1 if the current ElectricConductance is less then other, 1 if the current ElectricConductance is greater then other.
     */
    compareTo(electricConductance: ElectricConductance): number;
    /**
     * Add the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    add(electricConductance: ElectricConductance): ElectricConductance;
    /**
     * Subtract the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    subtract(electricConductance: ElectricConductance): ElectricConductance;
    /**
     * Multiply the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    multiply(electricConductance: ElectricConductance): ElectricConductance;
    /**
     * Divide the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    divide(electricConductance: ElectricConductance): ElectricConductance;
    /**
     * Modulo the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    modulo(electricConductance: ElectricConductance): ElectricConductance;
    /**
     * Pow the given ElectricConductance with the current ElectricConductance.
     * @param electricConductance The other ElectricConductance.
     * @returns A new ElectricConductance instance with the results.
     */
    pow(electricConductance: ElectricConductance): ElectricConductance;
}
//# sourceMappingURL=electricconductance.g.d.ts.map