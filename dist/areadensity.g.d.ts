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
     * The default unit is KilogramsPerSquareMeter
     */
    constructor(value: number, fromUnit?: AreaDensityUnits);
    /**
     * The base value of AreaDensity is KilogramsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given AreaDensity are equals to the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns True if the given AreaDensity are equal to the current AreaDensity.
     */
    equals(areaDensity: AreaDensity): boolean;
    /**
     * Compare the given AreaDensity against the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns 0 if they are equal, -1 if the current AreaDensity is less then other, 1 if the current AreaDensity is greater then other.
     */
    compareTo(areaDensity: AreaDensity): number;
    /**
     * Add the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    add(areaDensity: AreaDensity): AreaDensity;
    /**
     * Subtract the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    subtract(areaDensity: AreaDensity): AreaDensity;
    /**
     * Multiply the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    multiply(areaDensity: AreaDensity): AreaDensity;
    /**
     * Divide the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    divide(areaDensity: AreaDensity): AreaDensity;
    /**
     * Modulo the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    modulo(areaDensity: AreaDensity): AreaDensity;
    /**
     * Pow the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    pow(areaDensity: AreaDensity): AreaDensity;
}
//# sourceMappingURL=areadensity.g.d.ts.map