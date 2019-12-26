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
     */
    constructor(value: number, fromUnit: ElectricCurrentDensityUnits);
    /**
     * The base value of ElectricCurrentDensity is AmperePerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=electriccurrentdensity.g.d.ts.map