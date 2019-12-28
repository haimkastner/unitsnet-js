/** MassConcentrationUnits enumeration */
export declare enum MassConcentrationUnits {
    /** */
    GramsPerCubicMillimeter = 0,
    /** */
    GramsPerCubicCentimeter = 1,
    /** */
    GramsPerCubicMeter = 2,
    /** */
    GramsPerMilliliter = 3,
    /** */
    GramsPerDeciliter = 4,
    /** */
    GramsPerLiter = 5,
    /** */
    TonnesPerCubicMillimeter = 6,
    /** */
    TonnesPerCubicCentimeter = 7,
    /** */
    TonnesPerCubicMeter = 8,
    /** */
    PoundsPerCubicInch = 9,
    /** */
    PoundsPerCubicFoot = 10,
    /** */
    SlugsPerCubicFoot = 11,
    /** */
    PoundsPerUSGallon = 12,
    /** */
    PoundsPerImperialGallon = 13,
    /** */
    KilogramsPerCubicMillimeter = 14,
    /** */
    KilogramsPerCubicCentimeter = 15,
    /** */
    KilogramsPerCubicMeter = 16,
    /** */
    MicrogramsPerCubicMeter = 17,
    /** */
    PicogramsPerMilliliter = 18,
    /** */
    NanogramsPerMilliliter = 19,
    /** */
    MicrogramsPerMilliliter = 20,
    /** */
    CentigramsPerMilliliter = 21,
    /** */
    DecigramsPerMilliliter = 22,
    /** */
    PicogramsPerDeciliter = 23,
    /** */
    NanogramsPerDeciliter = 24,
    /** */
    MicrogramsPerDeciliter = 25,
    /** */
    CentigramsPerDeciliter = 26,
    /** */
    DecigramsPerDeciliter = 27,
    /** */
    PicogramsPerLiter = 28,
    /** */
    NanogramsPerLiter = 29,
    /** */
    MicrogramsPerLiter = 30,
    /** */
    CentigramsPerLiter = 31,
    /** */
    DecigramsPerLiter = 32,
    /** */
    KilogramsPerLiter = 33,
    /** */
    KilopoundsPerCubicInch = 34,
    /** */
    KilopoundsPerCubicFoot = 35
}
/** In chemistry, the mass concentration ρi (or γi) is defined as the mass of a constituent mi divided by the volume of the mixture V */
export declare class MassConcentration {
    private value;
    private gramspercubicmillimeterLazy;
    private gramspercubiccentimeterLazy;
    private gramspercubicmeterLazy;
    private gramspermilliliterLazy;
    private gramsperdeciliterLazy;
    private gramsperliterLazy;
    private tonnespercubicmillimeterLazy;
    private tonnespercubiccentimeterLazy;
    private tonnespercubicmeterLazy;
    private poundspercubicinchLazy;
    private poundspercubicfootLazy;
    private slugspercubicfootLazy;
    private poundsperusgallonLazy;
    private poundsperimperialgallonLazy;
    private kilogramspercubicmillimeterLazy;
    private kilogramspercubiccentimeterLazy;
    private kilogramspercubicmeterLazy;
    private microgramspercubicmeterLazy;
    private picogramspermilliliterLazy;
    private nanogramspermilliliterLazy;
    private microgramspermilliliterLazy;
    private centigramspermilliliterLazy;
    private decigramspermilliliterLazy;
    private picogramsperdeciliterLazy;
    private nanogramsperdeciliterLazy;
    private microgramsperdeciliterLazy;
    private centigramsperdeciliterLazy;
    private decigramsperdeciliterLazy;
    private picogramsperliterLazy;
    private nanogramsperliterLazy;
    private microgramsperliterLazy;
    private centigramsperliterLazy;
    private decigramsperliterLazy;
    private kilogramsperliterLazy;
    private kilopoundspercubicinchLazy;
    private kilopoundspercubicfootLazy;
    /**
     * Create a new MassConcentration.
     * @param value The value.
     * @param fromUnit The ‘MassConcentration’ unit to create from.
     * The default unit is KilogramsPerCubicMeter
     */
    constructor(value: number, fromUnit?: MassConcentrationUnits);
    /**
     * The base value of MassConcentration is KilogramsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerCubicMillimeter(): number;
    /** */
    get GramsPerCubicCentimeter(): number;
    /** */
    get GramsPerCubicMeter(): number;
    /** */
    get GramsPerMilliliter(): number;
    /** */
    get GramsPerDeciliter(): number;
    /** */
    get GramsPerLiter(): number;
    /** */
    get TonnesPerCubicMillimeter(): number;
    /** */
    get TonnesPerCubicCentimeter(): number;
    /** */
    get TonnesPerCubicMeter(): number;
    /** */
    get PoundsPerCubicInch(): number;
    /** */
    get PoundsPerCubicFoot(): number;
    /** */
    get SlugsPerCubicFoot(): number;
    /** */
    get PoundsPerUSGallon(): number;
    /** */
    get PoundsPerImperialGallon(): number;
    /** */
    get KilogramsPerCubicMillimeter(): number;
    /** */
    get KilogramsPerCubicCentimeter(): number;
    /** */
    get KilogramsPerCubicMeter(): number;
    /** */
    get MicrogramsPerCubicMeter(): number;
    /** */
    get PicogramsPerMilliliter(): number;
    /** */
    get NanogramsPerMilliliter(): number;
    /** */
    get MicrogramsPerMilliliter(): number;
    /** */
    get CentigramsPerMilliliter(): number;
    /** */
    get DecigramsPerMilliliter(): number;
    /** */
    get PicogramsPerDeciliter(): number;
    /** */
    get NanogramsPerDeciliter(): number;
    /** */
    get MicrogramsPerDeciliter(): number;
    /** */
    get CentigramsPerDeciliter(): number;
    /** */
    get DecigramsPerDeciliter(): number;
    /** */
    get PicogramsPerLiter(): number;
    /** */
    get NanogramsPerLiter(): number;
    /** */
    get MicrogramsPerLiter(): number;
    /** */
    get CentigramsPerLiter(): number;
    /** */
    get DecigramsPerLiter(): number;
    /** */
    get KilogramsPerLiter(): number;
    /** */
    get KilopoundsPerCubicInch(): number;
    /** */
    get KilopoundsPerCubicFoot(): number;
    /**
     * Create a new MassConcentration instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerCubicMillimeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerCubicCentimeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerCubicMeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerMilliliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a GramsPerDeciliter
     *
     * @param value The unit as GramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerDeciliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromTonnesPerCubicMillimeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromTonnesPerCubicCentimeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromTonnesPerCubicMeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerCubicInch(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerCubicFoot(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromSlugsPerCubicFoot(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerUSGallon(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerImperialGallon(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerCubicMillimeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerCubicCentimeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerCubicMeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerCubicMeter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPicogramsPerMilliliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromNanogramsPerMilliliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerMilliliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromCentigramsPerMilliliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromDecigramsPerMilliliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PicogramsPerDeciliter
     *
     * @param value The unit as PicogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPicogramsPerDeciliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a NanogramsPerDeciliter
     *
     * @param value The unit as NanogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromNanogramsPerDeciliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a MicrogramsPerDeciliter
     *
     * @param value The unit as MicrogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerDeciliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a CentigramsPerDeciliter
     *
     * @param value The unit as CentigramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromCentigramsPerDeciliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a DecigramsPerDeciliter
     *
     * @param value The unit as DecigramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromDecigramsPerDeciliter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPicogramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromNanogramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromCentigramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromDecigramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerLiter(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilopoundsPerCubicInch(value: number): MassConcentration;
    /**
     * Create a new MassConcentration instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilopoundsPerCubicFoot(value: number): MassConcentration;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MassConcentration to string.
     * Note! the default format for MassConcentration is KilogramsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassConcentration.
     * @returns The string format of the MassConcentration.
     */
    toString(toUnit?: MassConcentrationUnits): string;
    /**
     * Check if the given MassConcentration are equals to the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns True if the given MassConcentration are equal to the current MassConcentration.
     */
    equals(massConcentration: MassConcentration): boolean;
    /**
     * Compare the given MassConcentration against the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns 0 if they are equal, -1 if the current MassConcentration is less then other, 1 if the current MassConcentration is greater then other.
     */
    compareTo(massConcentration: MassConcentration): number;
    /**
     * Add the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    add(massConcentration: MassConcentration): MassConcentration;
    /**
     * Subtract the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    subtract(massConcentration: MassConcentration): MassConcentration;
    /**
     * Multiply the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    multiply(massConcentration: MassConcentration): MassConcentration;
    /**
     * Divide the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    divide(massConcentration: MassConcentration): MassConcentration;
    /**
     * Modulo the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    modulo(massConcentration: MassConcentration): MassConcentration;
    /**
     * Pow the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    pow(massConcentration: MassConcentration): MassConcentration;
}
//# sourceMappingURL=massconcentration.g.d.ts.map