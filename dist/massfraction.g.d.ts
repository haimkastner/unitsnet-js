export declare enum MassFractionUnits {
    DecimalFractions = 0,
    GramsPerGram = 1,
    GramsPerKilogram = 2,
    Percent = 3,
    PartsPerThousand = 4,
    PartsPerMillion = 5,
    PartsPerBillion = 6,
    PartsPerTrillion = 7,
    Nanogramspergram = 8,
    Microgramspergram = 9,
    Centigramspergram = 10,
    Decigramspergram = 11,
    Hectogramspergram = 12,
    Kilogramspergram = 13,
    Nanogramsperkilogram = 14,
    Microgramsperkilogram = 15,
    Centigramsperkilogram = 16,
    Decigramsperkilogram = 17,
    Hectogramsperkilogram = 18,
    Kilogramsperkilogram = 19
}
export declare class MassFraction {
    private value;
    constructor(value: number, fromUnit: MassFractionUnits);
    get DecimalFractions(): number;
    get GramsPerGram(): number;
    get GramsPerKilogram(): number;
    get Percent(): number;
    get PartsPerThousand(): number;
    get PartsPerMillion(): number;
    get PartsPerBillion(): number;
    get PartsPerTrillion(): number;
    get Nanogramspergram(): number;
    get Microgramspergram(): number;
    get Centigramspergram(): number;
    get Decigramspergram(): number;
    get Hectogramspergram(): number;
    get Kilogramspergram(): number;
    get Nanogramsperkilogram(): number;
    get Microgramsperkilogram(): number;
    get Centigramsperkilogram(): number;
    get Decigramsperkilogram(): number;
    get Hectogramsperkilogram(): number;
    get Kilogramsperkilogram(): number;
    static FromDecimalFractions(value: number): MassFraction;
    static FromGramsPerGram(value: number): MassFraction;
    static FromGramsPerKilogram(value: number): MassFraction;
    static FromPercent(value: number): MassFraction;
    static FromPartsPerThousand(value: number): MassFraction;
    static FromPartsPerMillion(value: number): MassFraction;
    static FromPartsPerBillion(value: number): MassFraction;
    static FromPartsPerTrillion(value: number): MassFraction;
    static FromNanogramspergram(value: number): MassFraction;
    static FromMicrogramspergram(value: number): MassFraction;
    static FromCentigramspergram(value: number): MassFraction;
    static FromDecigramspergram(value: number): MassFraction;
    static FromHectogramspergram(value: number): MassFraction;
    static FromKilogramspergram(value: number): MassFraction;
    static FromNanogramsperkilogram(value: number): MassFraction;
    static FromMicrogramsperkilogram(value: number): MassFraction;
    static FromCentigramsperkilogram(value: number): MassFraction;
    static FromDecigramsperkilogram(value: number): MassFraction;
    static FromHectogramsperkilogram(value: number): MassFraction;
    static FromKilogramsperkilogram(value: number): MassFraction;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=massfraction.g.d.ts.map