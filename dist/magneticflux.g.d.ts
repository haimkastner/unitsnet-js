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
     */
    constructor(value: number, fromUnit: MagneticFluxUnits);
    /**
     * The base value of MagneticFlux is Weber.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=magneticflux.g.d.ts.map