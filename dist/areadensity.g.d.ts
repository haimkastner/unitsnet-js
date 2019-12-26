/** AreaDensityUnits enumeration */
export declare enum AreaDensityUnits {
    /** */
    KilogramsPerSquareMeter = 0
}
/** The area density of a two-dimensional object is calculated as the mass per unit area. */
export declare class AreaDensity {
    private value;
    private kilogramspersquaremeterLazy;
    /**
     * Create a new AreaDensity.
     * @param value The value.
     * @param fromUnit The ‘AreaDensity’ unit to create from.
     */
    constructor(value: number, fromUnit: AreaDensityUnits);
    /**
     * The base value of AreaDensity is KilogramPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get KilogramsPerSquareMeter(): number;
    /**
     * Create a new AreaDensity instance from a KilogramsPerSquareMeter
     *
     * @param value The unit as KilogramsPerSquareMeter to create a new AreaDensity from.
     * @returns The new AreaDensity instance.
     */
    static FromKilogramsPerSquareMeter(value: number): AreaDensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the AreaDensity to string.
     * Note! the default format for AreaDensity is KilogramsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AreaDensity.
     * @returns The string format of the AreaDensity.
     */
    toString(toUnit?: AreaDensityUnits): string;
}
//# sourceMappingURL=areadensity.g.d.ts.map