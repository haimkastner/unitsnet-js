/** DensityUnits enumeration */
export declare enum DensityUnits {
    /** */
    GramsPerCubicMillimeter = 0,
    /** */
    GramsPerCubicCentimeter = 1,
    /** */
    GramsPerCubicMeter = 2,
    /** */
    PoundsPerCubicInch = 3,
    /** */
    PoundsPerCubicFoot = 4,
    /** */
    TonnesPerCubicMillimeter = 5,
    /** */
    TonnesPerCubicCentimeter = 6,
    /** */
    TonnesPerCubicMeter = 7,
    /** */
    SlugsPerCubicFoot = 8,
    /** */
    GramsPerLiter = 9,
    /** */
    GramsPerDeciLiter = 10,
    /** */
    GramsPerMilliliter = 11,
    /** */
    PoundsPerUSGallon = 12,
    /** */
    PoundsPerImperialGallon = 13,
    /** */
    KilogramsPerLiter = 14,
    /** */
    KilogramsPerCubicMillimeter = 15,
    /** */
    KilogramsPerCubicCentimeter = 16,
    /** */
    KilogramsPerCubicMeter = 17,
    /** */
    MicrogramsPerCubicMeter = 18,
    /** */
    KilopoundsPerCubicInch = 19,
    /** */
    KilopoundsPerCubicFoot = 20,
    /** */
    PicogramsPerLiter = 21,
    /** */
    NanogramsPerLiter = 22,
    /** */
    MicrogramsPerLiter = 23,
    /** */
    CentigramsPerLiter = 24,
    /** */
    DecigramsPerLiter = 25,
    /** */
    PicogramsPerDeciLiter = 26,
    /** */
    NanogramsPerDeciLiter = 27,
    /** */
    MicrogramsPerDeciLiter = 28,
    /** */
    CentigramsPerDeciLiter = 29,
    /** */
    DecigramsPerDeciLiter = 30,
    /** */
    PicogramsPerMilliliter = 31,
    /** */
    NanogramsPerMilliliter = 32,
    /** */
    MicrogramsPerMilliliter = 33,
    /** */
    CentigramsPerMilliliter = 34,
    /** */
    DecigramsPerMilliliter = 35
}
/** The density, or more precisely, the volumetric mass density, of a substance is its mass per unit volume. */
export declare class Density {
    private value;
    private gramspercubicmillimeterLazy;
    private gramspercubiccentimeterLazy;
    private gramspercubicmeterLazy;
    private poundspercubicinchLazy;
    private poundspercubicfootLazy;
    private tonnespercubicmillimeterLazy;
    private tonnespercubiccentimeterLazy;
    private tonnespercubicmeterLazy;
    private slugspercubicfootLazy;
    private gramsperliterLazy;
    private gramsperdeciliterLazy;
    private gramspermilliliterLazy;
    private poundsperusgallonLazy;
    private poundsperimperialgallonLazy;
    private kilogramsperliterLazy;
    private kilogramspercubicmillimeterLazy;
    private kilogramspercubiccentimeterLazy;
    private kilogramspercubicmeterLazy;
    private microgramspercubicmeterLazy;
    private kilopoundspercubicinchLazy;
    private kilopoundspercubicfootLazy;
    private picogramsperliterLazy;
    private nanogramsperliterLazy;
    private microgramsperliterLazy;
    private centigramsperliterLazy;
    private decigramsperliterLazy;
    private picogramsperdeciliterLazy;
    private nanogramsperdeciliterLazy;
    private microgramsperdeciliterLazy;
    private centigramsperdeciliterLazy;
    private decigramsperdeciliterLazy;
    private picogramspermilliliterLazy;
    private nanogramspermilliliterLazy;
    private microgramspermilliliterLazy;
    private centigramspermilliliterLazy;
    private decigramspermilliliterLazy;
    /**
     * Create a new Density.
     * @param value The value.
     * @param fromUnit The ‘Density’ unit to create from.
     */
    constructor(value: number, fromUnit: DensityUnits);
    /**
     * The base value of Density is KilogramPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerCubicMillimeter(): number;
    /** */
    get GramsPerCubicCentimeter(): number;
    /** */
    get GramsPerCubicMeter(): number;
    /** */
    get PoundsPerCubicInch(): number;
    /** */
    get PoundsPerCubicFoot(): number;
    /** */
    get TonnesPerCubicMillimeter(): number;
    /** */
    get TonnesPerCubicCentimeter(): number;
    /** */
    get TonnesPerCubicMeter(): number;
    /** */
    get SlugsPerCubicFoot(): number;
    /** */
    get GramsPerLiter(): number;
    /** */
    get GramsPerDeciLiter(): number;
    /** */
    get GramsPerMilliliter(): number;
    /** */
    get PoundsPerUSGallon(): number;
    /** */
    get PoundsPerImperialGallon(): number;
    /** */
    get KilogramsPerLiter(): number;
    /** */
    get KilogramsPerCubicMillimeter(): number;
    /** */
    get KilogramsPerCubicCentimeter(): number;
    /** */
    get KilogramsPerCubicMeter(): number;
    /** */
    get MicrogramsPerCubicMeter(): number;
    /** */
    get KilopoundsPerCubicInch(): number;
    /** */
    get KilopoundsPerCubicFoot(): number;
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
    get PicogramsPerDeciLiter(): number;
    /** */
    get NanogramsPerDeciLiter(): number;
    /** */
    get MicrogramsPerDeciLiter(): number;
    /** */
    get CentigramsPerDeciLiter(): number;
    /** */
    get DecigramsPerDeciLiter(): number;
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
    /**
     * Create a new Density instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerCubicMillimeter(value: number): Density;
    /**
     * Create a new Density instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerCubicCentimeter(value: number): Density;
    /**
     * Create a new Density instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerCubicMeter(value: number): Density;
    /**
     * Create a new Density instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerCubicInch(value: number): Density;
    /**
     * Create a new Density instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerCubicFoot(value: number): Density;
    /**
     * Create a new Density instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromTonnesPerCubicMillimeter(value: number): Density;
    /**
     * Create a new Density instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromTonnesPerCubicCentimeter(value: number): Density;
    /**
     * Create a new Density instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromTonnesPerCubicMeter(value: number): Density;
    /**
     * Create a new Density instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    static FromSlugsPerCubicFoot(value: number): Density;
    /**
     * Create a new Density instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a GramsPerDeciLiter
     *
     * @param value The unit as GramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerDeciLiter(value: number): Density;
    /**
     * Create a new Density instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerMilliliter(value: number): Density;
    /**
     * Create a new Density instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerUSGallon(value: number): Density;
    /**
     * Create a new Density instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerImperialGallon(value: number): Density;
    /**
     * Create a new Density instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerCubicMillimeter(value: number): Density;
    /**
     * Create a new Density instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerCubicCentimeter(value: number): Density;
    /**
     * Create a new Density instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerCubicMeter(value: number): Density;
    /**
     * Create a new Density instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerCubicMeter(value: number): Density;
    /**
     * Create a new Density instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilopoundsPerCubicInch(value: number): Density;
    /**
     * Create a new Density instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilopoundsPerCubicFoot(value: number): Density;
    /**
     * Create a new Density instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPicogramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromNanogramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromCentigramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromDecigramsPerLiter(value: number): Density;
    /**
     * Create a new Density instance from a PicogramsPerDeciLiter
     *
     * @param value The unit as PicogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPicogramsPerDeciLiter(value: number): Density;
    /**
     * Create a new Density instance from a NanogramsPerDeciLiter
     *
     * @param value The unit as NanogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromNanogramsPerDeciLiter(value: number): Density;
    /**
     * Create a new Density instance from a MicrogramsPerDeciLiter
     *
     * @param value The unit as MicrogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerDeciLiter(value: number): Density;
    /**
     * Create a new Density instance from a CentigramsPerDeciLiter
     *
     * @param value The unit as CentigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromCentigramsPerDeciLiter(value: number): Density;
    /**
     * Create a new Density instance from a DecigramsPerDeciLiter
     *
     * @param value The unit as DecigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromDecigramsPerDeciLiter(value: number): Density;
    /**
     * Create a new Density instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPicogramsPerMilliliter(value: number): Density;
    /**
     * Create a new Density instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromNanogramsPerMilliliter(value: number): Density;
    /**
     * Create a new Density instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerMilliliter(value: number): Density;
    /**
     * Create a new Density instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromCentigramsPerMilliliter(value: number): Density;
    /**
     * Create a new Density instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromDecigramsPerMilliliter(value: number): Density;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Density to string.
     * Note! the default format for Density is KilogramsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Density.
     * @returns The string format of the Density.
     */
    toString(toUnit?: DensityUnits): string;
}
//# sourceMappingURL=density.g.d.ts.map