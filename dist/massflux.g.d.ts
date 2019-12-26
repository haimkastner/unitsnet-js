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
     */
    constructor(value: number, fromUnit: MassFluxUnits);
    /**
     * The base value of MassFlux is KilogramPerSecondPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=massflux.g.d.ts.map