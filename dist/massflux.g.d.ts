/** MassFluxUnits enumeration */
export declare enum MassFluxUnits {
    /** */
    GramsPerSecondPerSquareMeter = 0,
    /** */
    KilogramsPerSecondPerSquareMeter = 1
}
/** Mass flux is the mass flow rate per unit area. */
export declare class MassFlux {
    private value;
    private gramspersecondpersquaremeterLazy;
    private kilogramspersecondpersquaremeterLazy;
    /**
     * Create a new MassFlux.
     * @param value The value.
     * @param fromUnit The ‘MassFlux’ unit to create from.
     * The default unit is KilogramsPerSecondPerSquareMeter
     */
    constructor(value: number, fromUnit?: MassFluxUnits);
    /**
     * The base value of MassFlux is KilogramsPerSecondPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerSecondPerSquareMeter(): number;
    /** */
    get KilogramsPerSecondPerSquareMeter(): number;
    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareMeter
     *
     * @param value The unit as GramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    static FromGramsPerSecondPerSquareMeter(value: number): MassFlux;
    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareMeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    static FromKilogramsPerSecondPerSquareMeter(value: number): MassFlux;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MassFlux to string.
     * Note! the default format for MassFlux is KilogramsPerSecondPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFlux.
     * @returns The string format of the MassFlux.
     */
    toString(toUnit?: MassFluxUnits): string;
    /**
     * Check if the given MassFlux are equals to the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns True if the given MassFlux are equal to the current MassFlux.
     */
    equals(massFlux: MassFlux): boolean;
    /**
     * Compare the given MassFlux against the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns 0 if they are equal, -1 if the current MassFlux is less then other, 1 if the current MassFlux is greater then other.
     */
    compareTo(massFlux: MassFlux): number;
    /**
     * Add the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    add(massFlux: MassFlux): MassFlux;
    /**
     * Subtract the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    subtract(massFlux: MassFlux): MassFlux;
    /**
     * Multiply the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    multiply(massFlux: MassFlux): MassFlux;
    /**
     * Divide the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    divide(massFlux: MassFlux): MassFlux;
    /**
     * Modulo the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    modulo(massFlux: MassFlux): MassFlux;
    /**
     * Pow the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    pow(massFlux: MassFlux): MassFlux;
}
//# sourceMappingURL=massflux.g.d.ts.map