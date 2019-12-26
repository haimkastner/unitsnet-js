/** DynamicViscosityUnits enumeration */
export declare enum DynamicViscosityUnits {
    /** */
    NewtonSecondsPerMeterSquared = 0,
    /** */
    PascalSeconds = 1,
    /** */
    Poise = 2,
    /** */
    Reyns = 3,
    /** */
    PoundsForceSecondPerSquareInch = 4,
    /** */
    PoundsForceSecondPerSquareFoot = 5,
    /** */
    MicropascalSeconds = 6,
    /** */
    Centipoise = 7
}
/** The dynamic (shear) viscosity of a fluid expresses its resistance to shearing flows, where adjacent layers move parallel to each other with different speeds */
export declare class DynamicViscosity {
    private value;
    private newtonsecondspermetersquaredLazy;
    private pascalsecondsLazy;
    private poiseLazy;
    private reynsLazy;
    private poundsforcesecondpersquareinchLazy;
    private poundsforcesecondpersquarefootLazy;
    private micropascalsecondsLazy;
    private centipoiseLazy;
    /**
     * Create a new DynamicViscosity.
     * @param value The value.
     * @param fromUnit The ‘DynamicViscosity’ unit to create from.
     */
    constructor(value: number, fromUnit: DynamicViscosityUnits);
    /**
     * The base value of DynamicViscosity is NewtonSecondPerMeterSquared.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonSecondsPerMeterSquared(): number;
    /** */
    get PascalSeconds(): number;
    /** */
    get Poise(): number;
    /** */
    get Reyns(): number;
    /** */
    get PoundsForceSecondPerSquareInch(): number;
    /** */
    get PoundsForceSecondPerSquareFoot(): number;
    /** */
    get MicropascalSeconds(): number;
    /** */
    get Centipoise(): number;
    /**
     * Create a new DynamicViscosity instance from a NewtonSecondsPerMeterSquared
     *
     * @param value The unit as NewtonSecondsPerMeterSquared to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromNewtonSecondsPerMeterSquared(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a PascalSeconds
     *
     * @param value The unit as PascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPascalSeconds(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a Poise
     *
     * @param value The unit as Poise to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPoise(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a Reyns
     *
     * @param value The unit as Reyns to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromReyns(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a PoundsForceSecondPerSquareInch
     *
     * @param value The unit as PoundsForceSecondPerSquareInch to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPoundsForceSecondPerSquareInch(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a PoundsForceSecondPerSquareFoot
     *
     * @param value The unit as PoundsForceSecondPerSquareFoot to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPoundsForceSecondPerSquareFoot(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a MicropascalSeconds
     *
     * @param value The unit as MicropascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromMicropascalSeconds(value: number): DynamicViscosity;
    /**
     * Create a new DynamicViscosity instance from a Centipoise
     *
     * @param value The unit as Centipoise to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromCentipoise(value: number): DynamicViscosity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the DynamicViscosity to string.
     * Note! the default format for DynamicViscosity is NewtonSecondsPerMeterSquared.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the DynamicViscosity.
     * @returns The string format of the DynamicViscosity.
     */
    toString(toUnit?: DynamicViscosityUnits): string;
}
//# sourceMappingURL=dynamicviscosity.g.d.ts.map