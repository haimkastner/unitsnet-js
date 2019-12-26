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
     */
    constructor(value: number, fromUnit: PermittivityUnits);
    /**
     * The base value of Permittivity is FaradPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=permittivity.g.d.ts.map