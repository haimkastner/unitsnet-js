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
    KilogramsPerCubicMillimeter = 14,
    KilogramsPerCubicCentimeter = 15,
    KilogramsPerCubicMeter = 16,
    MicrogramsPerCubicMeter = 17,
    PicogramsPerMilliliter = 18,
    NanogramsPerMilliliter = 19,
    MicrogramsPerMilliliter = 20,
    CentigramsPerMilliliter = 21,
    DecigramsPerMilliliter = 22,
    PicogramsPerDeciliter = 23,
    NanogramsPerDeciliter = 24,
    MicrogramsPerDeciliter = 25,
    CentigramsPerDeciliter = 26,
    DecigramsPerDeciliter = 27,
    PicogramsPerLiter = 28,
    NanogramsPerLiter = 29,
    MicrogramsPerLiter = 30,
    CentigramsPerLiter = 31,
    DecigramsPerLiter = 32,
    KilogramsPerLiter = 33,
    KilopoundsPerCubicInch = 34,
    KilopoundsPerCubicFoot = 35
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
    get KilogramsPerCubicMillimeter(): number;
    get KilogramsPerCubicCentimeter(): number;
    get KilogramsPerCubicMeter(): number;
    get MicrogramsPerCubicMeter(): number;
    get PicogramsPerMilliliter(): number;
    get NanogramsPerMilliliter(): number;
    get MicrogramsPerMilliliter(): number;
    get CentigramsPerMilliliter(): number;
    get DecigramsPerMilliliter(): number;
    get PicogramsPerDeciliter(): number;
    get NanogramsPerDeciliter(): number;
    get MicrogramsPerDeciliter(): number;
    get CentigramsPerDeciliter(): number;
    get DecigramsPerDeciliter(): number;
    get PicogramsPerLiter(): number;
    get NanogramsPerLiter(): number;
    get MicrogramsPerLiter(): number;
    get CentigramsPerLiter(): number;
    get DecigramsPerLiter(): number;
    get KilogramsPerLiter(): number;
    get KilopoundsPerCubicInch(): number;
    get KilopoundsPerCubicFoot(): number;
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
    static FromKilogramsPerCubicMillimeter(value: number): MassConcentration;
    static FromKilogramsPerCubicCentimeter(value: number): MassConcentration;
    static FromKilogramsPerCubicMeter(value: number): MassConcentration;
    static FromMicrogramsPerCubicMeter(value: number): MassConcentration;
    static FromPicogramsPerMilliliter(value: number): MassConcentration;
    static FromNanogramsPerMilliliter(value: number): MassConcentration;
    static FromMicrogramsPerMilliliter(value: number): MassConcentration;
    static FromCentigramsPerMilliliter(value: number): MassConcentration;
    static FromDecigramsPerMilliliter(value: number): MassConcentration;
    static FromPicogramsPerDeciliter(value: number): MassConcentration;
    static FromNanogramsPerDeciliter(value: number): MassConcentration;
    static FromMicrogramsPerDeciliter(value: number): MassConcentration;
    static FromCentigramsPerDeciliter(value: number): MassConcentration;
    static FromDecigramsPerDeciliter(value: number): MassConcentration;
    static FromPicogramsPerLiter(value: number): MassConcentration;
    static FromNanogramsPerLiter(value: number): MassConcentration;
    static FromMicrogramsPerLiter(value: number): MassConcentration;
    static FromCentigramsPerLiter(value: number): MassConcentration;
    static FromDecigramsPerLiter(value: number): MassConcentration;
    static FromKilogramsPerLiter(value: number): MassConcentration;
    static FromKilopoundsPerCubicInch(value: number): MassConcentration;
    static FromKilopoundsPerCubicFoot(value: number): MassConcentration;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassConcentrationUnits): string;
}
//# sourceMappingURL=massconcentration.g.d.ts.map