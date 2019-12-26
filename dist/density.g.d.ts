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
    KilogramPerCubicMillimeter = 15,
    KilogramPerCubicCentimeter = 16,
    KilogramPerCubicMeter = 17,
    MicrogramPerCubicMeter = 18,
    KilopoundPerCubicInch = 19,
    KilopoundPerCubicFoot = 20,
    PicogramPerLiter = 21,
    NanogramPerLiter = 22,
    MicrogramPerLiter = 23,
    CentigramPerLiter = 24,
    DecigramPerLiter = 25,
    PicogramPerDeciliter = 26,
    NanogramPerDeciliter = 27,
    MicrogramPerDeciliter = 28,
    CentigramPerDeciliter = 29,
    DecigramPerDeciliter = 30,
    PicogramPerMilliliter = 31,
    NanogramPerMilliliter = 32,
    MicrogramPerMilliliter = 33,
    CentigramPerMilliliter = 34,
    DecigramPerMilliliter = 35
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
    private kilogrampercubicmillimeterLazy;
    private kilogrampercubiccentimeterLazy;
    private kilogrampercubicmeterLazy;
    private microgrampercubicmeterLazy;
    private kilopoundpercubicinchLazy;
    private kilopoundpercubicfootLazy;
    private picogramperliterLazy;
    private nanogramperliterLazy;
    private microgramperliterLazy;
    private centigramperliterLazy;
    private decigramperliterLazy;
    private picogramperdeciliterLazy;
    private nanogramperdeciliterLazy;
    private microgramperdeciliterLazy;
    private centigramperdeciliterLazy;
    private decigramperdeciliterLazy;
    private picogrampermilliliterLazy;
    private nanogrampermilliliterLazy;
    private microgrampermilliliterLazy;
    private centigrampermilliliterLazy;
    private decigrampermilliliterLazy;
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
    get KilogramPerCubicMillimeter(): number;
    get KilogramPerCubicCentimeter(): number;
    get KilogramPerCubicMeter(): number;
    get MicrogramPerCubicMeter(): number;
    get KilopoundPerCubicInch(): number;
    get KilopoundPerCubicFoot(): number;
    get PicogramPerLiter(): number;
    get NanogramPerLiter(): number;
    get MicrogramPerLiter(): number;
    get CentigramPerLiter(): number;
    get DecigramPerLiter(): number;
    get PicogramPerDeciliter(): number;
    get NanogramPerDeciliter(): number;
    get MicrogramPerDeciliter(): number;
    get CentigramPerDeciliter(): number;
    get DecigramPerDeciliter(): number;
    get PicogramPerMilliliter(): number;
    get NanogramPerMilliliter(): number;
    get MicrogramPerMilliliter(): number;
    get CentigramPerMilliliter(): number;
    get DecigramPerMilliliter(): number;
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
    static FromKilogramPerCubicMillimeter(value: number): Density;
    static FromKilogramPerCubicCentimeter(value: number): Density;
    static FromKilogramPerCubicMeter(value: number): Density;
    static FromMicrogramPerCubicMeter(value: number): Density;
    static FromKilopoundPerCubicInch(value: number): Density;
    static FromKilopoundPerCubicFoot(value: number): Density;
    static FromPicogramPerLiter(value: number): Density;
    static FromNanogramPerLiter(value: number): Density;
    static FromMicrogramPerLiter(value: number): Density;
    static FromCentigramPerLiter(value: number): Density;
    static FromDecigramPerLiter(value: number): Density;
    static FromPicogramPerDeciliter(value: number): Density;
    static FromNanogramPerDeciliter(value: number): Density;
    static FromMicrogramPerDeciliter(value: number): Density;
    static FromCentigramPerDeciliter(value: number): Density;
    static FromDecigramPerDeciliter(value: number): Density;
    static FromPicogramPerMilliliter(value: number): Density;
    static FromNanogramPerMilliliter(value: number): Density;
    static FromMicrogramPerMilliliter(value: number): Density;
    static FromCentigramPerMilliliter(value: number): Density;
    static FromDecigramPerMilliliter(value: number): Density;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: DensityUnits): string;
}
//# sourceMappingURL=density.g.d.ts.map