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
     * The default unit is CoulombsPerCubicMeter
     */
    constructor(value: number, fromUnit?: ElectricChargeDensityUnits);
    /**
     * The base value of ElectricChargeDensity is CoulombsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given ElectricChargeDensity are equals to the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns True if the given ElectricChargeDensity are equal to the current ElectricChargeDensity.
     */
    equals(electricChargeDensity: ElectricChargeDensity): boolean;
    /**
     * Compare the given ElectricChargeDensity against the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns 0 if they are equal, -1 if the current ElectricChargeDensity is less then other, 1 if the current ElectricChargeDensity is greater then other.
     */
    compareTo(electricChargeDensity: ElectricChargeDensity): number;
    /**
     * Add the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    add(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity;
    /**
     * Subtract the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    subtract(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity;
    /**
     * Multiply the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    multiply(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity;
    /**
     * Divide the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    divide(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity;
    /**
     * Modulo the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    modulo(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity;
    /**
     * Pow the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    pow(electricChargeDensity: ElectricChargeDensity): ElectricChargeDensity;
}
//# sourceMappingURL=electricchargedensity.g.d.ts.map