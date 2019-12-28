/** PermittivityUnits enumeration */
export declare enum PermittivityUnits {
    /** */
    FaradsPerMeter = 0
}
/** In electromagnetism, permittivity is the measure of resistance that is encountered when forming an electric field in a particular medium. */
export declare class Permittivity {
    private value;
    private faradspermeterLazy;
    /**
     * Create a new Permittivity.
     * @param value The value.
     * @param fromUnit The ‘Permittivity’ unit to create from.
     * The default unit is FaradsPerMeter
     */
    constructor(value: number, fromUnit?: PermittivityUnits);
    /**
     * The base value of Permittivity is FaradsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get FaradsPerMeter(): number;
    /**
     * Create a new Permittivity instance from a FaradsPerMeter
     *
     * @param value The unit as FaradsPerMeter to create a new Permittivity from.
     * @returns The new Permittivity instance.
     */
    static FromFaradsPerMeter(value: number): Permittivity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Permittivity to string.
     * Note! the default format for Permittivity is FaradsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permittivity.
     * @returns The string format of the Permittivity.
     */
    toString(toUnit?: PermittivityUnits): string;
    /**
     * Check if the given Permittivity are equals to the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns True if the given Permittivity are equal to the current Permittivity.
     */
    equals(permittivity: Permittivity): boolean;
    /**
     * Compare the given Permittivity against the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns 0 if they are equal, -1 if the current Permittivity is less then other, 1 if the current Permittivity is greater then other.
     */
    compareTo(permittivity: Permittivity): number;
    /**
     * Add the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    add(permittivity: Permittivity): Permittivity;
    /**
     * Subtract the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    subtract(permittivity: Permittivity): Permittivity;
    /**
     * Multiply the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    multiply(permittivity: Permittivity): Permittivity;
    /**
     * Divide the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    divide(permittivity: Permittivity): Permittivity;
    /**
     * Modulo the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    modulo(permittivity: Permittivity): Permittivity;
    /**
     * Pow the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    pow(permittivity: Permittivity): Permittivity;
}
//# sourceMappingURL=permittivity.g.d.ts.map