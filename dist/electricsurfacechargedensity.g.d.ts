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
     */
    constructor(value: number, fromUnit: ElectricSurfaceChargeDensityUnits);
    /**
     * The base value of ElectricSurfaceChargeDensity is CoulombPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=electricsurfacechargedensity.g.d.ts.map