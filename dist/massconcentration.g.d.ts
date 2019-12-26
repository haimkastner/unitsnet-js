export declare enum MassConcentrationUnits {
    GramsPerCubicMillimeter = 0,
    GramsPerCubicCentimeter = 1,
    GramsPerCubicMeter = 2,
    GramsPerMilliliter = 3,
    GramsPerDeciliter = 4,
    GramsPerLiter = 5,
    TonnesPerCubicMillimeter = 6,
    TonnesPerCubicCentimeter = 7,
    TonnesPerCubicMeter = 8,
    PoundsPerCubicInch = 9,
    PoundsPerCubicFoot = 10,
    SlugsPerCubicFoot = 11,
    PoundsPerUSGallon = 12,
    PoundsPerImperialGallon = 13,
    KilogramPerCubicMillimeter = 14,
    KilogramPerCubicCentimeter = 15,
    KilogramPerCubicMeter = 16,
    MicrogramPerCubicMeter = 17,
    PicogramPerMilliliter = 18,
    NanogramPerMilliliter = 19,
    MicrogramPerMilliliter = 20,
    CentigramPerMilliliter = 21,
    DecigramPerMilliliter = 22,
    PicogramPerDeciliter = 23,
    NanogramPerDeciliter = 24,
    MicrogramPerDeciliter = 25,
    CentigramPerDeciliter = 26,
    DecigramPerDeciliter = 27,
    PicogramPerLiter = 28,
    NanogramPerLiter = 29,
    MicrogramPerLiter = 30,
    CentigramPerLiter = 31,
    DecigramPerLiter = 32,
    KilogramPerLiter = 33,
    KilopoundPerCubicInch = 34,
    KilopoundPerCubicFoot = 35
}
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
    private kilogrampercubicmillimeterLazy;
    private kilogrampercubiccentimeterLazy;
    private kilogrampercubicmeterLazy;
    private microgrampercubicmeterLazy;
    private picogrampermilliliterLazy;
    private nanogrampermilliliterLazy;
    private microgrampermilliliterLazy;
    private centigrampermilliliterLazy;
    private decigrampermilliliterLazy;
    private picogramperdeciliterLazy;
    private nanogramperdeciliterLazy;
    private microgramperdeciliterLazy;
    private centigramperdeciliterLazy;
    private decigramperdeciliterLazy;
    private picogramperliterLazy;
    private nanogramperliterLazy;
    private microgramperliterLazy;
    private centigramperliterLazy;
    private decigramperliterLazy;
    private kilogramperliterLazy;
    private kilopoundpercubicinchLazy;
    private kilopoundpercubicfootLazy;
    constructor(value: number, fromUnit: MassConcentrationUnits);
    get GramsPerCubicMillimeter(): number;
    get GramsPerCubicCentimeter(): number;
    get GramsPerCubicMeter(): number;
    get GramsPerMilliliter(): number;
    get GramsPerDeciliter(): number;
    get GramsPerLiter(): number;
    get TonnesPerCubicMillimeter(): number;
    get TonnesPerCubicCentimeter(): number;
    get TonnesPerCubicMeter(): number;
    get PoundsPerCubicInch(): number;
    get PoundsPerCubicFoot(): number;
    get SlugsPerCubicFoot(): number;
    get PoundsPerUSGallon(): number;
    get PoundsPerImperialGallon(): number;
    get KilogramPerCubicMillimeter(): number;
    get KilogramPerCubicCentimeter(): number;
    get KilogramPerCubicMeter(): number;
    get MicrogramPerCubicMeter(): number;
    get PicogramPerMilliliter(): number;
    get NanogramPerMilliliter(): number;
    get MicrogramPerMilliliter(): number;
    get CentigramPerMilliliter(): number;
    get DecigramPerMilliliter(): number;
    get PicogramPerDeciliter(): number;
    get NanogramPerDeciliter(): number;
    get MicrogramPerDeciliter(): number;
    get CentigramPerDeciliter(): number;
    get DecigramPerDeciliter(): number;
    get PicogramPerLiter(): number;
    get NanogramPerLiter(): number;
    get MicrogramPerLiter(): number;
    get CentigramPerLiter(): number;
    get DecigramPerLiter(): number;
    get KilogramPerLiter(): number;
    get KilopoundPerCubicInch(): number;
    get KilopoundPerCubicFoot(): number;
    static FromGramsPerCubicMillimeter(value: number): MassConcentration;
    static FromGramsPerCubicCentimeter(value: number): MassConcentration;
    static FromGramsPerCubicMeter(value: number): MassConcentration;
    static FromGramsPerMilliliter(value: number): MassConcentration;
    static FromGramsPerDeciliter(value: number): MassConcentration;
    static FromGramsPerLiter(value: number): MassConcentration;
    static FromTonnesPerCubicMillimeter(value: number): MassConcentration;
    static FromTonnesPerCubicCentimeter(value: number): MassConcentration;
    static FromTonnesPerCubicMeter(value: number): MassConcentration;
    static FromPoundsPerCubicInch(value: number): MassConcentration;
    static FromPoundsPerCubicFoot(value: number): MassConcentration;
    static FromSlugsPerCubicFoot(value: number): MassConcentration;
    static FromPoundsPerUSGallon(value: number): MassConcentration;
    static FromPoundsPerImperialGallon(value: number): MassConcentration;
    static FromKilogramPerCubicMillimeter(value: number): MassConcentration;
    static FromKilogramPerCubicCentimeter(value: number): MassConcentration;
    static FromKilogramPerCubicMeter(value: number): MassConcentration;
    static FromMicrogramPerCubicMeter(value: number): MassConcentration;
    static FromPicogramPerMilliliter(value: number): MassConcentration;
    static FromNanogramPerMilliliter(value: number): MassConcentration;
    static FromMicrogramPerMilliliter(value: number): MassConcentration;
    static FromCentigramPerMilliliter(value: number): MassConcentration;
    static FromDecigramPerMilliliter(value: number): MassConcentration;
    static FromPicogramPerDeciliter(value: number): MassConcentration;
    static FromNanogramPerDeciliter(value: number): MassConcentration;
    static FromMicrogramPerDeciliter(value: number): MassConcentration;
    static FromCentigramPerDeciliter(value: number): MassConcentration;
    static FromDecigramPerDeciliter(value: number): MassConcentration;
    static FromPicogramPerLiter(value: number): MassConcentration;
    static FromNanogramPerLiter(value: number): MassConcentration;
    static FromMicrogramPerLiter(value: number): MassConcentration;
    static FromCentigramPerLiter(value: number): MassConcentration;
    static FromDecigramPerLiter(value: number): MassConcentration;
    static FromKilogramPerLiter(value: number): MassConcentration;
    static FromKilopoundPerCubicInch(value: number): MassConcentration;
    static FromKilopoundPerCubicFoot(value: number): MassConcentration;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassConcentrationUnits): string;
}
//# sourceMappingURL=massconcentration.g.d.ts.map