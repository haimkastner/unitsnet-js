/** SpecificWeightUnits enumeration */
export declare enum SpecificWeightUnits {
    /** */
    NewtonsPerCubicMillimeter = 0,
    /** */
    NewtonsPerCubicCentimeter = 1,
    /** */
    NewtonsPerCubicMeter = 2,
    /** */
    KilogramsForcePerCubicMillimeter = 3,
    /** */
    KilogramsForcePerCubicCentimeter = 4,
    /** */
    KilogramsForcePerCubicMeter = 5,
    /** */
    PoundsForcePerCubicInch = 6,
    /** */
    PoundsForcePerCubicFoot = 7,
    /** */
    TonnesForcePerCubicMillimeter = 8,
    /** */
    TonnesForcePerCubicCentimeter = 9,
    /** */
    TonnesForcePerCubicMeter = 10,
    /** */
    KilonewtonsPerCubicMillimeter = 11,
    /** */
    KilonewtonsPerCubicCentimeter = 12,
    /** */
    KilonewtonsPerCubicMeter = 13,
    /** */
    MeganewtonsPerCubicMeter = 14,
    /** */
    KilopoundsForcePerCubicInch = 15,
    /** */
    KilopoundsForcePerCubicFoot = 16
}
/** The SpecificWeight, or more precisely, the volumetric weight density, of a substance is its weight per unit volume. */
export declare class SpecificWeight {
    private value;
    private newtonspercubicmillimeterLazy;
    private newtonspercubiccentimeterLazy;
    private newtonspercubicmeterLazy;
    private kilogramsforcepercubicmillimeterLazy;
    private kilogramsforcepercubiccentimeterLazy;
    private kilogramsforcepercubicmeterLazy;
    private poundsforcepercubicinchLazy;
    private poundsforcepercubicfootLazy;
    private tonnesforcepercubicmillimeterLazy;
    private tonnesforcepercubiccentimeterLazy;
    private tonnesforcepercubicmeterLazy;
    private kilonewtonspercubicmillimeterLazy;
    private kilonewtonspercubiccentimeterLazy;
    private kilonewtonspercubicmeterLazy;
    private meganewtonspercubicmeterLazy;
    private kilopoundsforcepercubicinchLazy;
    private kilopoundsforcepercubicfootLazy;
    /**
     * Create a new SpecificWeight.
     * @param value The value.
     * @param fromUnit The ‘SpecificWeight’ unit to create from.
     * The default unit is NewtonsPerCubicMeter
     */
    constructor(value: number, fromUnit?: SpecificWeightUnits);
    /**
     * The base value of SpecificWeight is NewtonsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonsPerCubicMillimeter(): number;
    /** */
    get NewtonsPerCubicCentimeter(): number;
    /** */
    get NewtonsPerCubicMeter(): number;
    /** */
    get KilogramsForcePerCubicMillimeter(): number;
    /** */
    get KilogramsForcePerCubicCentimeter(): number;
    /** */
    get KilogramsForcePerCubicMeter(): number;
    /** */
    get PoundsForcePerCubicInch(): number;
    /** */
    get PoundsForcePerCubicFoot(): number;
    /** */
    get TonnesForcePerCubicMillimeter(): number;
    /** */
    get TonnesForcePerCubicCentimeter(): number;
    /** */
    get TonnesForcePerCubicMeter(): number;
    /** */
    get KilonewtonsPerCubicMillimeter(): number;
    /** */
    get KilonewtonsPerCubicCentimeter(): number;
    /** */
    get KilonewtonsPerCubicMeter(): number;
    /** */
    get MeganewtonsPerCubicMeter(): number;
    /** */
    get KilopoundsForcePerCubicInch(): number;
    /** */
    get KilopoundsForcePerCubicFoot(): number;
    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMillimeter
     *
     * @param value The unit as NewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromNewtonsPerCubicMillimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicCentimeter
     *
     * @param value The unit as NewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromNewtonsPerCubicCentimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMeter
     *
     * @param value The unit as NewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromNewtonsPerCubicMeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMillimeter
     *
     * @param value The unit as KilogramsForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilogramsForcePerCubicMillimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicCentimeter
     *
     * @param value The unit as KilogramsForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilogramsForcePerCubicCentimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMeter
     *
     * @param value The unit as KilogramsForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilogramsForcePerCubicMeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicInch
     *
     * @param value The unit as PoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromPoundsForcePerCubicInch(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicFoot
     *
     * @param value The unit as PoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromPoundsForcePerCubicFoot(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMillimeter
     *
     * @param value The unit as TonnesForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromTonnesForcePerCubicMillimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicCentimeter
     *
     * @param value The unit as TonnesForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromTonnesForcePerCubicCentimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMeter
     *
     * @param value The unit as TonnesForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromTonnesForcePerCubicMeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMillimeter
     *
     * @param value The unit as KilonewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilonewtonsPerCubicMillimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicCentimeter
     *
     * @param value The unit as KilonewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilonewtonsPerCubicCentimeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMeter
     *
     * @param value The unit as KilonewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilonewtonsPerCubicMeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a MeganewtonsPerCubicMeter
     *
     * @param value The unit as MeganewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromMeganewtonsPerCubicMeter(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicInch
     *
     * @param value The unit as KilopoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilopoundsForcePerCubicInch(value: number): SpecificWeight;
    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicFoot
     *
     * @param value The unit as KilopoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilopoundsForcePerCubicFoot(value: number): SpecificWeight;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the SpecificWeight to string.
     * Note! the default format for SpecificWeight is NewtonsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificWeight.
     * @returns The string format of the SpecificWeight.
     */
    toString(toUnit?: SpecificWeightUnits): string;
    /**
     * Check if the given SpecificWeight are equals to the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns True if the given SpecificWeight are equal to the current SpecificWeight.
     */
    equals(specificWeight: SpecificWeight): boolean;
    /**
     * Compare the given SpecificWeight against the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns 0 if they are equal, -1 if the current SpecificWeight is less then other, 1 if the current SpecificWeight is greater then other.
     */
    compareTo(specificWeight: SpecificWeight): number;
    /**
     * Add the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    add(specificWeight: SpecificWeight): SpecificWeight;
    /**
     * Subtract the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    subtract(specificWeight: SpecificWeight): SpecificWeight;
    /**
     * Multiply the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    multiply(specificWeight: SpecificWeight): SpecificWeight;
    /**
     * Divide the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    divide(specificWeight: SpecificWeight): SpecificWeight;
    /**
     * Modulo the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    modulo(specificWeight: SpecificWeight): SpecificWeight;
    /**
     * Pow the given SpecificWeight with the current SpecificWeight.
     * @param specificWeight The other SpecificWeight.
     * @returns A new SpecificWeight instance with the results.
     */
    pow(specificWeight: SpecificWeight): SpecificWeight;
}
//# sourceMappingURL=specificweight.g.d.ts.map