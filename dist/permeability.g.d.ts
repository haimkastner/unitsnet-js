/** PermeabilityUnits enumeration */
export declare enum PermeabilityUnits {
    /** */
    HenriesPerMeter = 0
}
/** In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself. */
export declare class Permeability {
    private value;
    private henriespermeterLazy;
    /**
     * Create a new Permeability.
     * @param value The value.
     * @param fromUnit The ‘Permeability’ unit to create from.
     * The default unit is HenriesPerMeter
     */
    constructor(value: number, fromUnit?: PermeabilityUnits);
    /**
     * The base value of Permeability is HenriesPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get HenriesPerMeter(): number;
    /**
     * Create a new Permeability instance from a HenriesPerMeter
     *
     * @param value The unit as HenriesPerMeter to create a new Permeability from.
     * @returns The new Permeability instance.
     */
    static FromHenriesPerMeter(value: number): Permeability;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Permeability to string.
     * Note! the default format for Permeability is HenriesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permeability.
     * @returns The string format of the Permeability.
     */
    toString(toUnit?: PermeabilityUnits): string;
    /**
     * Check if the given Permeability are equals to the current Permeability.
     * @param permeability The other Permeability.
     * @returns True if the given Permeability are equal to the current Permeability.
     */
    equals(permeability: Permeability): boolean;
    /**
     * Compare the given Permeability against the current Permeability.
     * @param permeability The other Permeability.
     * @returns 0 if they are equal, -1 if the current Permeability is less then other, 1 if the current Permeability is greater then other.
     */
    compareTo(permeability: Permeability): number;
    /**
     * Add the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    add(permeability: Permeability): Permeability;
    /**
     * Subtract the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    subtract(permeability: Permeability): Permeability;
    /**
     * Multiply the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    multiply(permeability: Permeability): Permeability;
    /**
     * Divide the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    divide(permeability: Permeability): Permeability;
    /**
     * Modulo the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    modulo(permeability: Permeability): Permeability;
    /**
     * Pow the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    pow(permeability: Permeability): Permeability;
}
//# sourceMappingURL=permeability.g.d.ts.map