/** ElectricCurrentDensityUnits enumeration */
export declare enum ElectricCurrentDensityUnits {
    /** */
    AmperesPerSquareMeter = 0,
    /** */
    AmperesPerSquareInch = 1,
    /** */
    AmperesPerSquareFoot = 2
}
/** In electromagnetism, current density is the electric current per unit area of cross section. */
export declare class ElectricCurrentDensity {
    private value;
    private amperespersquaremeterLazy;
    private amperespersquareinchLazy;
    private amperespersquarefootLazy;
    /**
     * Create a new ElectricCurrentDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentDensity’ unit to create from.
     * The default unit is AmperesPerSquareMeter
     */
    constructor(value: number, fromUnit?: ElectricCurrentDensityUnits);
    /**
     * The base value of ElectricCurrentDensity is AmperesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get AmperesPerSquareMeter(): number;
    /** */
    get AmperesPerSquareInch(): number;
    /** */
    get AmperesPerSquareFoot(): number;
    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareMeter
     *
     * @param value The unit as AmperesPerSquareMeter to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    static FromAmperesPerSquareMeter(value: number): ElectricCurrentDensity;
    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareInch
     *
     * @param value The unit as AmperesPerSquareInch to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    static FromAmperesPerSquareInch(value: number): ElectricCurrentDensity;
    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareFoot
     *
     * @param value The unit as AmperesPerSquareFoot to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    static FromAmperesPerSquareFoot(value: number): ElectricCurrentDensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricCurrentDensity to string.
     * Note! the default format for ElectricCurrentDensity is AmperesPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrentDensity.
     * @returns The string format of the ElectricCurrentDensity.
     */
    toString(toUnit?: ElectricCurrentDensityUnits): string;
    /**
     * Check if the given ElectricCurrentDensity are equals to the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns True if the given ElectricCurrentDensity are equal to the current ElectricCurrentDensity.
     */
    equals(electricCurrentDensity: ElectricCurrentDensity): boolean;
    /**
     * Compare the given ElectricCurrentDensity against the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns 0 if they are equal, -1 if the current ElectricCurrentDensity is less then other, 1 if the current ElectricCurrentDensity is greater then other.
     */
    compareTo(electricCurrentDensity: ElectricCurrentDensity): number;
    /**
     * Add the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    add(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity;
    /**
     * Subtract the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    subtract(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity;
    /**
     * Multiply the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    multiply(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity;
    /**
     * Divide the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    divide(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity;
    /**
     * Modulo the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    modulo(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity;
    /**
     * Pow the given ElectricCurrentDensity with the current ElectricCurrentDensity.
     * @param electricCurrentDensity The other ElectricCurrentDensity.
     * @returns A new ElectricCurrentDensity instance with the results.
     */
    pow(electricCurrentDensity: ElectricCurrentDensity): ElectricCurrentDensity;
}
//# sourceMappingURL=electriccurrentdensity.g.d.ts.map