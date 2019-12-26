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
    Kilogramspercubicmillimeter = 15,
    Kilogramspercubiccentimeter = 16,
    Kilogramspercubicmeter = 17,
    Microgramspercubicmeter = 18,
    Kilopoundspercubicinch = 19,
    Kilopoundspercubicfoot = 20,
    Picogramsperliter = 21,
    Nanogramsperliter = 22,
    Microgramsperliter = 23,
    Centigramsperliter = 24,
    Decigramsperliter = 25,
    Picogramsperdeciliter = 26,
    Nanogramsperdeciliter = 27,
    Microgramsperdeciliter = 28,
    Centigramsperdeciliter = 29,
    Decigramsperdeciliter = 30,
    Picogramspermilliliter = 31,
    Nanogramspermilliliter = 32,
    Microgramspermilliliter = 33,
    Centigramspermilliliter = 34,
    Decigramspermilliliter = 35
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
    get Kilogramspercubicmillimeter(): number;
    get Kilogramspercubiccentimeter(): number;
    get Kilogramspercubicmeter(): number;
    get Microgramspercubicmeter(): number;
    get Kilopoundspercubicinch(): number;
    get Kilopoundspercubicfoot(): number;
    get Picogramsperliter(): number;
    get Nanogramsperliter(): number;
    get Microgramsperliter(): number;
    get Centigramsperliter(): number;
    get Decigramsperliter(): number;
    get Picogramsperdeciliter(): number;
    get Nanogramsperdeciliter(): number;
    get Microgramsperdeciliter(): number;
    get Centigramsperdeciliter(): number;
    get Decigramsperdeciliter(): number;
    get Picogramspermilliliter(): number;
    get Nanogramspermilliliter(): number;
    get Microgramspermilliliter(): number;
    get Centigramspermilliliter(): number;
    get Decigramspermilliliter(): number;
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
    static FromKilogramspercubicmillimeter(value: number): Density;
    static FromKilogramspercubiccentimeter(value: number): Density;
    static FromKilogramspercubicmeter(value: number): Density;
    static FromMicrogramspercubicmeter(value: number): Density;
    static FromKilopoundspercubicinch(value: number): Density;
    static FromKilopoundspercubicfoot(value: number): Density;
    static FromPicogramsperliter(value: number): Density;
    static FromNanogramsperliter(value: number): Density;
    static FromMicrogramsperliter(value: number): Density;
    static FromCentigramsperliter(value: number): Density;
    static FromDecigramsperliter(value: number): Density;
    static FromPicogramsperdeciliter(value: number): Density;
    static FromNanogramsperdeciliter(value: number): Density;
    static FromMicrogramsperdeciliter(value: number): Density;
    static FromCentigramsperdeciliter(value: number): Density;
    static FromDecigramsperdeciliter(value: number): Density;
    static FromPicogramspermilliliter(value: number): Density;
    static FromNanogramspermilliliter(value: number): Density;
    static FromMicrogramspermilliliter(value: number): Density;
    static FromCentigramspermilliliter(value: number): Density;
    static FromDecigramspermilliliter(value: number): Density;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=density.g.d.ts.map