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
    Kilogramspercubicmillimeter = 14,
    Kilogramspercubiccentimeter = 15,
    Kilogramspercubicmeter = 16,
    Microgramspercubicmeter = 17,
    Picogramspermilliliter = 18,
    Nanogramspermilliliter = 19,
    Microgramspermilliliter = 20,
    Centigramspermilliliter = 21,
    Decigramspermilliliter = 22,
    Picogramsperdeciliter = 23,
    Nanogramsperdeciliter = 24,
    Microgramsperdeciliter = 25,
    Centigramsperdeciliter = 26,
    Decigramsperdeciliter = 27,
    Picogramsperliter = 28,
    Nanogramsperliter = 29,
    Microgramsperliter = 30,
    Centigramsperliter = 31,
    Decigramsperliter = 32,
    Kilogramsperliter = 33,
    Kilopoundspercubicinch = 34,
    Kilopoundspercubicfoot = 35
}
export declare class MassConcentration {
    private value;
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
    get Kilogramspercubicmillimeter(): number;
    get Kilogramspercubiccentimeter(): number;
    get Kilogramspercubicmeter(): number;
    get Microgramspercubicmeter(): number;
    get Picogramspermilliliter(): number;
    get Nanogramspermilliliter(): number;
    get Microgramspermilliliter(): number;
    get Centigramspermilliliter(): number;
    get Decigramspermilliliter(): number;
    get Picogramsperdeciliter(): number;
    get Nanogramsperdeciliter(): number;
    get Microgramsperdeciliter(): number;
    get Centigramsperdeciliter(): number;
    get Decigramsperdeciliter(): number;
    get Picogramsperliter(): number;
    get Nanogramsperliter(): number;
    get Microgramsperliter(): number;
    get Centigramsperliter(): number;
    get Decigramsperliter(): number;
    get Kilogramsperliter(): number;
    get Kilopoundspercubicinch(): number;
    get Kilopoundspercubicfoot(): number;
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
    static FromKilogramspercubicmillimeter(value: number): MassConcentration;
    static FromKilogramspercubiccentimeter(value: number): MassConcentration;
    static FromKilogramspercubicmeter(value: number): MassConcentration;
    static FromMicrogramspercubicmeter(value: number): MassConcentration;
    static FromPicogramspermilliliter(value: number): MassConcentration;
    static FromNanogramspermilliliter(value: number): MassConcentration;
    static FromMicrogramspermilliliter(value: number): MassConcentration;
    static FromCentigramspermilliliter(value: number): MassConcentration;
    static FromDecigramspermilliliter(value: number): MassConcentration;
    static FromPicogramsperdeciliter(value: number): MassConcentration;
    static FromNanogramsperdeciliter(value: number): MassConcentration;
    static FromMicrogramsperdeciliter(value: number): MassConcentration;
    static FromCentigramsperdeciliter(value: number): MassConcentration;
    static FromDecigramsperdeciliter(value: number): MassConcentration;
    static FromPicogramsperliter(value: number): MassConcentration;
    static FromNanogramsperliter(value: number): MassConcentration;
    static FromMicrogramsperliter(value: number): MassConcentration;
    static FromCentigramsperliter(value: number): MassConcentration;
    static FromDecigramsperliter(value: number): MassConcentration;
    static FromKilogramsperliter(value: number): MassConcentration;
    static FromKilopoundspercubicinch(value: number): MassConcentration;
    static FromKilopoundspercubicfoot(value: number): MassConcentration;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=massconcentration.g.d.ts.map