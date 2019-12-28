/** ElectricSurfaceChargeDensityUnits enumeration */
export declare enum ElectricSurfaceChargeDensityUnits {
    /** */
    CoulombsPerSquareMeter = 0,
    /** */
    CoulombsPerSquareCentimeter = 1,
    /** */
    CoulombsPerSquareInch = 2
}
/** In electromagnetism, surface charge density is a measure of the amount of electric charge per surface area. */
export declare class ElectricSurfaceChargeDensity {
    private value;
    private coulombspersquaremeterLazy;
    private coulombspersquarecentimeterLazy;
    private coulombspersquareinchLazy;
    /**
     * Create a new ElectricSurfaceChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricSurfaceChargeDensity’ unit to create from.
     * The default unit is CoulombsPerSquareMeter
     */
    constructor(value: number, fromUnit?: ElectricSurfaceChargeDensityUnits);
    /**
     * The base value of ElectricSurfaceChargeDensity is CoulombsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get CoulombsPerSquareMeter(): number;
    /** */
    get CoulombsPerSquareCentimeter(): number;
    /** */
    get CoulombsPerSquareInch(): number;
    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareMeter
     *
     * @param value The unit as CoulombsPerSquareMeter to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    static FromCoulombsPerSquareMeter(value: number): ElectricSurfaceChargeDensity;
    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareCentimeter
     *
     * @param value The unit as CoulombsPerSquareCentimeter to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    static FromCoulombsPerSquareCentimeter(value: number): ElectricSurfaceChargeDensity;
    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareInch
     *
     * @param value The unit as CoulombsPerSquareInch to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    static FromCoulombsPerSquareInch(value: number): ElectricSurfaceChargeDensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricSurfaceChargeDensity to string.
     * Note! the default format for ElectricSurfaceChargeDensity is CoulombsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricSurfaceChargeDensity.
     * @returns The string format of the ElectricSurfaceChargeDensity.
     */
    toString(toUnit?: ElectricSurfaceChargeDensityUnits): string;
    /**
     * Check if the given ElectricSurfaceChargeDensity are equals to the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns True if the given ElectricSurfaceChargeDensity are equal to the current ElectricSurfaceChargeDensity.
     */
    equals(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): boolean;
    /**
     * Compare the given ElectricSurfaceChargeDensity against the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns 0 if they are equal, -1 if the current ElectricSurfaceChargeDensity is less then other, 1 if the current ElectricSurfaceChargeDensity is greater then other.
     */
    compareTo(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): number;
    /**
     * Add the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    add(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity;
    /**
     * Subtract the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    subtract(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity;
    /**
     * Multiply the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    multiply(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity;
    /**
     * Divide the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    divide(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity;
    /**
     * Modulo the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    modulo(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity;
    /**
     * Pow the given ElectricSurfaceChargeDensity with the current ElectricSurfaceChargeDensity.
     * @param electricSurfaceChargeDensity The other ElectricSurfaceChargeDensity.
     * @returns A new ElectricSurfaceChargeDensity instance with the results.
     */
    pow(electricSurfaceChargeDensity: ElectricSurfaceChargeDensity): ElectricSurfaceChargeDensity;
}
//# sourceMappingURL=electricsurfacechargedensity.g.d.ts.map