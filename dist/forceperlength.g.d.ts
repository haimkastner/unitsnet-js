/** ForcePerLengthUnits enumeration */
export declare enum ForcePerLengthUnits {
    /** */
    NewtonsPerMeter = 0,
    /** */
    KilogramsForcePerMeter = 1,
    /** */
    PoundsForcePerFoot = 2,
    /** */
    PoundsForcePerInch = 3,
    /** */
    PoundsForcePerYard = 4,
    /** */
    NanonewtonsPerMeter = 5,
    /** */
    MicronewtonsPerMeter = 6,
    /** */
    CentinewtonsPerMeter = 7,
    /** */
    DecinewtonsPerMeter = 8,
    /** */
    KilonewtonsPerMeter = 9,
    /** */
    MeganewtonsPerMeter = 10
}
/** The magnitude of force per unit length. */
export declare class ForcePerLength {
    private value;
    private newtonspermeterLazy;
    private kilogramsforcepermeterLazy;
    private poundsforceperfootLazy;
    private poundsforceperinchLazy;
    private poundsforceperyardLazy;
    private nanonewtonspermeterLazy;
    private micronewtonspermeterLazy;
    private centinewtonspermeterLazy;
    private decinewtonspermeterLazy;
    private kilonewtonspermeterLazy;
    private meganewtonspermeterLazy;
    /**
     * Create a new ForcePerLength.
     * @param value The value.
     * @param fromUnit The ‘ForcePerLength’ unit to create from.
     */
    constructor(value: number, fromUnit: ForcePerLengthUnits);
    /**
     * The base value of ForcePerLength is NewtonPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonsPerMeter(): number;
    /** */
    get KilogramsForcePerMeter(): number;
    /** */
    get PoundsForcePerFoot(): number;
    /** */
    get PoundsForcePerInch(): number;
    /** */
    get PoundsForcePerYard(): number;
    /** */
    get NanonewtonsPerMeter(): number;
    /** */
    get MicronewtonsPerMeter(): number;
    /** */
    get CentinewtonsPerMeter(): number;
    /** */
    get DecinewtonsPerMeter(): number;
    /** */
    get KilonewtonsPerMeter(): number;
    /** */
    get MeganewtonsPerMeter(): number;
    /**
     * Create a new ForcePerLength instance from a NewtonsPerMeter
     *
     * @param value The unit as NewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromNewtonsPerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a KilogramsForcePerMeter
     *
     * @param value The unit as KilogramsForcePerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromKilogramsForcePerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a PoundsForcePerFoot
     *
     * @param value The unit as PoundsForcePerFoot to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromPoundsForcePerFoot(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a PoundsForcePerInch
     *
     * @param value The unit as PoundsForcePerInch to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromPoundsForcePerInch(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a PoundsForcePerYard
     *
     * @param value The unit as PoundsForcePerYard to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromPoundsForcePerYard(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a NanonewtonsPerMeter
     *
     * @param value The unit as NanonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromNanonewtonsPerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a MicronewtonsPerMeter
     *
     * @param value The unit as MicronewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromMicronewtonsPerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a CentinewtonsPerMeter
     *
     * @param value The unit as CentinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromCentinewtonsPerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a DecinewtonsPerMeter
     *
     * @param value The unit as DecinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromDecinewtonsPerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a KilonewtonsPerMeter
     *
     * @param value The unit as KilonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromKilonewtonsPerMeter(value: number): ForcePerLength;
    /**
     * Create a new ForcePerLength instance from a MeganewtonsPerMeter
     *
     * @param value The unit as MeganewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromMeganewtonsPerMeter(value: number): ForcePerLength;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ForcePerLength to string.
     * Note! the default format for ForcePerLength is NewtonsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForcePerLength.
     * @returns The string format of the ForcePerLength.
     */
    toString(toUnit?: ForcePerLengthUnits): string;
}
//# sourceMappingURL=forceperlength.g.d.ts.map