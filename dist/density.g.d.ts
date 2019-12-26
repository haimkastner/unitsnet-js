export declare enum DensityUnits {
    GramsPerCubicMillimeter = 0,
    GramsPerCubicCentimeter = 1,
    GramsPerCubicMeter = 2,
    PoundsPerCubicInch = 3,
    PoundsPerCubicFoot = 4,
    TonnesPerCubicMillimeter = 5,
    TonnesPerCubicCentimeter = 6,
    TonnesPerCubicMeter = 7,
    SlugsPerCubicFoot = 8,
    GramsPerLiter = 9,
    GramsPerDeciLiter = 10,
    GramsPerMilliliter = 11,
    PoundsPerUSGallon = 12,
    PoundsPerImperialGallon = 13,
    KilogramsPerLiter = 14,
    KilogramsPerCubicMillimeter = 15,
    KilogramsPerCubicCentimeter = 16,
    KilogramsPerCubicMeter = 17,
    MicrogramsPerCubicMeter = 18,
    KilopoundsPerCubicInch = 19,
    KilopoundsPerCubicFoot = 20,
    PicogramsPerLiter = 21,
    NanogramsPerLiter = 22,
    MicrogramsPerLiter = 23,
    CentigramsPerLiter = 24,
    DecigramsPerLiter = 25,
    PicogramsPerDeciLiter = 26,
    NanogramsPerDeciLiter = 27,
    MicrogramsPerDeciLiter = 28,
    CentigramsPerDeciLiter = 29,
    DecigramsPerDeciLiter = 30,
    PicogramsPerMilliliter = 31,
    NanogramsPerMilliliter = 32,
    MicrogramsPerMilliliter = 33,
    CentigramsPerMilliliter = 34,
    DecigramsPerMilliliter = 35
}
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
    constructor(value: number, fromUnit: DensityUnits);
    get GramsPerCubicMillimeter(): number;
    get GramsPerCubicCentimeter(): number;
    get GramsPerCubicMeter(): number;
    get PoundsPerCubicInch(): number;
    get PoundsPerCubicFoot(): number;
    get TonnesPerCubicMillimeter(): number;
    get TonnesPerCubicCentimeter(): number;
    get TonnesPerCubicMeter(): number;
    get SlugsPerCubicFoot(): number;
    get GramsPerLiter(): number;
    get GramsPerDeciLiter(): number;
    get GramsPerMilliliter(): number;
    get PoundsPerUSGallon(): number;
    get PoundsPerImperialGallon(): number;
    get KilogramsPerLiter(): number;
    get KilogramsPerCubicMillimeter(): number;
    get KilogramsPerCubicCentimeter(): number;
    get KilogramsPerCubicMeter(): number;
    get MicrogramsPerCubicMeter(): number;
    get KilopoundsPerCubicInch(): number;
    get KilopoundsPerCubicFoot(): number;
    get PicogramsPerLiter(): number;
    get NanogramsPerLiter(): number;
    get MicrogramsPerLiter(): number;
    get CentigramsPerLiter(): number;
    get DecigramsPerLiter(): number;
    get PicogramsPerDeciLiter(): number;
    get NanogramsPerDeciLiter(): number;
    get MicrogramsPerDeciLiter(): number;
    get CentigramsPerDeciLiter(): number;
    get DecigramsPerDeciLiter(): number;
    get PicogramsPerMilliliter(): number;
    get NanogramsPerMilliliter(): number;
    get MicrogramsPerMilliliter(): number;
    get CentigramsPerMilliliter(): number;
    get DecigramsPerMilliliter(): number;
    static FromGramsPerCubicMillimeter(value: number): Density;
    static FromGramsPerCubicCentimeter(value: number): Density;
    static FromGramsPerCubicMeter(value: number): Density;
    static FromPoundsPerCubicInch(value: number): Density;
    static FromPoundsPerCubicFoot(value: number): Density;
    static FromTonnesPerCubicMillimeter(value: number): Density;
    static FromTonnesPerCubicCentimeter(value: number): Density;
    static FromTonnesPerCubicMeter(value: number): Density;
    static FromSlugsPerCubicFoot(value: number): Density;
    static FromGramsPerLiter(value: number): Density;
    static FromGramsPerDeciLiter(value: number): Density;
    static FromGramsPerMilliliter(value: number): Density;
    static FromPoundsPerUSGallon(value: number): Density;
    static FromPoundsPerImperialGallon(value: number): Density;
    static FromKilogramsPerLiter(value: number): Density;
    static FromKilogramsPerCubicMillimeter(value: number): Density;
    static FromKilogramsPerCubicCentimeter(value: number): Density;
    static FromKilogramsPerCubicMeter(value: number): Density;
    static FromMicrogramsPerCubicMeter(value: number): Density;
    static FromKilopoundsPerCubicInch(value: number): Density;
    static FromKilopoundsPerCubicFoot(value: number): Density;
    static FromPicogramsPerLiter(value: number): Density;
    static FromNanogramsPerLiter(value: number): Density;
    static FromMicrogramsPerLiter(value: number): Density;
    static FromCentigramsPerLiter(value: number): Density;
    static FromDecigramsPerLiter(value: number): Density;
    static FromPicogramsPerDeciLiter(value: number): Density;
    static FromNanogramsPerDeciLiter(value: number): Density;
    static FromMicrogramsPerDeciLiter(value: number): Density;
    static FromCentigramsPerDeciLiter(value: number): Density;
    static FromDecigramsPerDeciLiter(value: number): Density;
    static FromPicogramsPerMilliliter(value: number): Density;
    static FromNanogramsPerMilliliter(value: number): Density;
    static FromMicrogramsPerMilliliter(value: number): Density;
    static FromCentigramsPerMilliliter(value: number): Density;
    static FromDecigramsPerMilliliter(value: number): Density;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: DensityUnits): string;
}
//# sourceMappingURL=density.g.d.ts.map