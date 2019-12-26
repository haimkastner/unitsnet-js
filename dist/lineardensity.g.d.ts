/** LinearDensityUnits enumeration */
export declare enum LinearDensityUnits {
    /** */
    GramsPerMeter = 0,
    /** */
    PoundsPerFoot = 1,
    /** */
    KilogramsPerMeter = 2
}
/** The Linear Density, or more precisely, the linear mass density, of a substance is its mass per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension. */
export declare class LinearDensity {
    private value;
    private gramspermeterLazy;
    private poundsperfootLazy;
    private kilogramspermeterLazy;
    /**
     * Create a new LinearDensity.
     * @param value The value.
     * @param fromUnit The ‘LinearDensity’ unit to create from.
     */
    constructor(value: number, fromUnit: LinearDensityUnits);
    /**
     * The base value of LinearDensity is KilogramPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerMeter(): number;
    /** */
    get PoundsPerFoot(): number;
    /** */
    get KilogramsPerMeter(): number;
    /**
     * Create a new LinearDensity instance from a GramsPerMeter
     *
     * @param value The unit as GramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    static FromGramsPerMeter(value: number): LinearDensity;
    /**
     * Create a new LinearDensity instance from a PoundsPerFoot
     *
     * @param value The unit as PoundsPerFoot to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    static FromPoundsPerFoot(value: number): LinearDensity;
    /**
     * Create a new LinearDensity instance from a KilogramsPerMeter
     *
     * @param value The unit as KilogramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    static FromKilogramsPerMeter(value: number): LinearDensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the LinearDensity to string.
     * Note! the default format for LinearDensity is KilogramsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LinearDensity.
     * @returns The string format of the LinearDensity.
     */
    toString(toUnit?: LinearDensityUnits): string;
}
//# sourceMappingURL=lineardensity.g.d.ts.map