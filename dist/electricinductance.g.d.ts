/** ElectricInductanceUnits enumeration */
export declare enum ElectricInductanceUnits {
    /** */
    Henries = 0,
    /** */
    Nanohenries = 1,
    /** */
    Microhenries = 2
}
/** Inductance is a property of an electrical conductor which opposes a change in current. */
export declare class ElectricInductance {
    private value;
    private henriesLazy;
    private nanohenriesLazy;
    private microhenriesLazy;
    /**
     * Create a new ElectricInductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricInductance’ unit to create from.
     * The default unit is Henries
     */
    constructor(value: number, fromUnit?: ElectricInductanceUnits);
    /**
     * The base value of ElectricInductance is Henries.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Henries(): number;
    /** */
    get Nanohenries(): number;
    /** */
    get Microhenries(): number;
    /**
     * Create a new ElectricInductance instance from a Henries
     *
     * @param value The unit as Henries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    static FromHenries(value: number): ElectricInductance;
    /**
     * Create a new ElectricInductance instance from a Nanohenries
     *
     * @param value The unit as Nanohenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    static FromNanohenries(value: number): ElectricInductance;
    /**
     * Create a new ElectricInductance instance from a Microhenries
     *
     * @param value The unit as Microhenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    static FromMicrohenries(value: number): ElectricInductance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricInductance to string.
     * Note! the default format for ElectricInductance is Henries.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricInductance.
     * @returns The string format of the ElectricInductance.
     */
    toString(toUnit?: ElectricInductanceUnits): string;
    /**
     * Check if the given ElectricInductance are equals to the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns True if the given ElectricInductance are equal to the current ElectricInductance.
     */
    equals(electricInductance: ElectricInductance): boolean;
    /**
     * Compare the given ElectricInductance against the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns 0 if they are equal, -1 if the current ElectricInductance is less then other, 1 if the current ElectricInductance is greater then other.
     */
    compareTo(electricInductance: ElectricInductance): number;
    /**
     * Add the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    add(electricInductance: ElectricInductance): ElectricInductance;
    /**
     * Subtract the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    subtract(electricInductance: ElectricInductance): ElectricInductance;
    /**
     * Multiply the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    multiply(electricInductance: ElectricInductance): ElectricInductance;
    /**
     * Divide the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    divide(electricInductance: ElectricInductance): ElectricInductance;
    /**
     * Modulo the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    modulo(electricInductance: ElectricInductance): ElectricInductance;
    /**
     * Pow the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    pow(electricInductance: ElectricInductance): ElectricInductance;
}
//# sourceMappingURL=electricinductance.g.d.ts.map