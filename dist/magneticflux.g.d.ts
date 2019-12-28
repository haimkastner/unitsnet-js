/** MagneticFluxUnits enumeration */
export declare enum MagneticFluxUnits {
    /** */
    Webers = 0
}
/** In physics, specifically electromagnetism, the magnetic flux through a surface is the surface integral of the normal component of the magnetic field B passing through that surface. */
export declare class MagneticFlux {
    private value;
    private webersLazy;
    /**
     * Create a new MagneticFlux.
     * @param value The value.
     * @param fromUnit The ‘MagneticFlux’ unit to create from.
     * The default unit is Webers
     */
    constructor(value: number, fromUnit?: MagneticFluxUnits);
    /**
     * The base value of MagneticFlux is Webers.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Webers(): number;
    /**
     * Create a new MagneticFlux instance from a Webers
     *
     * @param value The unit as Webers to create a new MagneticFlux from.
     * @returns The new MagneticFlux instance.
     */
    static FromWebers(value: number): MagneticFlux;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MagneticFlux to string.
     * Note! the default format for MagneticFlux is Webers.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MagneticFlux.
     * @returns The string format of the MagneticFlux.
     */
    toString(toUnit?: MagneticFluxUnits): string;
    /**
     * Check if the given MagneticFlux are equals to the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns True if the given MagneticFlux are equal to the current MagneticFlux.
     */
    equals(magneticFlux: MagneticFlux): boolean;
    /**
     * Compare the given MagneticFlux against the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns 0 if they are equal, -1 if the current MagneticFlux is less then other, 1 if the current MagneticFlux is greater then other.
     */
    compareTo(magneticFlux: MagneticFlux): number;
    /**
     * Add the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    add(magneticFlux: MagneticFlux): MagneticFlux;
    /**
     * Subtract the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    subtract(magneticFlux: MagneticFlux): MagneticFlux;
    /**
     * Multiply the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    multiply(magneticFlux: MagneticFlux): MagneticFlux;
    /**
     * Divide the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    divide(magneticFlux: MagneticFlux): MagneticFlux;
    /**
     * Modulo the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    modulo(magneticFlux: MagneticFlux): MagneticFlux;
    /**
     * Pow the given MagneticFlux with the current MagneticFlux.
     * @param magneticFlux The other MagneticFlux.
     * @returns A new MagneticFlux instance with the results.
     */
    pow(magneticFlux: MagneticFlux): MagneticFlux;
}
//# sourceMappingURL=magneticflux.g.d.ts.map