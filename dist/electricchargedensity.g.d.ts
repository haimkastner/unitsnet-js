/** ElectricChargeDensityUnits enumeration */
export declare enum ElectricChargeDensityUnits {
    /** */
    CoulombsPerCubicMeter = 0
}
/** In electromagnetism, charge density is a measure of the amount of electric charge per volume. */
export declare class ElectricChargeDensity {
    private value;
    private coulombspercubicmeterLazy;
    /**
     * Create a new ElectricChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricChargeDensity’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricChargeDensityUnits);
    /**
     * The base value of ElectricChargeDensity is CoulombPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get CoulombsPerCubicMeter(): number;
    /**
     * Create a new ElectricChargeDensity instance from a CoulombsPerCubicMeter
     *
     * @param value The unit as CoulombsPerCubicMeter to create a new ElectricChargeDensity from.
     * @returns The new ElectricChargeDensity instance.
     */
    static FromCoulombsPerCubicMeter(value: number): ElectricChargeDensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricChargeDensity to string.
     * Note! the default format for ElectricChargeDensity is CoulombsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricChargeDensity.
     * @returns The string format of the ElectricChargeDensity.
     */
    toString(toUnit?: ElectricChargeDensityUnits): string;
}
//# sourceMappingURL=electricchargedensity.g.d.ts.map