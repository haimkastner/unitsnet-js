export declare enum MassFractionUnits {
    DecimalFractions = 0,
    GramsPerGram = 1,
    GramsPerKilogram = 2,
    Percent = 3,
    PartsPerThousand = 4,
    PartsPerMillion = 5,
    PartsPerBillion = 6,
    PartsPerTrillion = 7,
    NanogramPerGram = 8,
    MicrogramPerGram = 9,
    CentigramPerGram = 10,
    DecigramPerGram = 11,
    DecagramPerGram = 12,
    HectogramPerGram = 13,
    KilogramPerGram = 14,
    NanogramPerKilogram = 15,
    MicrogramPerKilogram = 16,
    CentigramPerKilogram = 17,
    DecigramPerKilogram = 18,
    DecagramPerKilogram = 19,
    HectogramPerKilogram = 20,
    KilogramPerKilogram = 21
}
export declare class MassFraction {
    private value;
    private decimalfractionsLazy;
    private gramspergramLazy;
    private gramsperkilogramLazy;
    private percentLazy;
    private partsperthousandLazy;
    private partspermillionLazy;
    private partsperbillionLazy;
    private partspertrillionLazy;
    private nanogrampergramLazy;
    private microgrampergramLazy;
    private centigrampergramLazy;
    private decigrampergramLazy;
    private decagrampergramLazy;
    private hectogrampergramLazy;
    private kilogrampergramLazy;
    private nanogramperkilogramLazy;
    private microgramperkilogramLazy;
    private centigramperkilogramLazy;
    private decigramperkilogramLazy;
    private decagramperkilogramLazy;
    private hectogramperkilogramLazy;
    private kilogramperkilogramLazy;
    constructor(value: number, fromUnit: MassFractionUnits);
    get DecimalFractions(): number;
    get GramsPerGram(): number;
    get GramsPerKilogram(): number;
    get Percent(): number;
    get PartsPerThousand(): number;
    get PartsPerMillion(): number;
    get PartsPerBillion(): number;
    get PartsPerTrillion(): number;
    get NanogramPerGram(): number;
    get MicrogramPerGram(): number;
    get CentigramPerGram(): number;
    get DecigramPerGram(): number;
    get DecagramPerGram(): number;
    get HectogramPerGram(): number;
    get KilogramPerGram(): number;
    get NanogramPerKilogram(): number;
    get MicrogramPerKilogram(): number;
    get CentigramPerKilogram(): number;
    get DecigramPerKilogram(): number;
    get DecagramPerKilogram(): number;
    get HectogramPerKilogram(): number;
    get KilogramPerKilogram(): number;
    static FromDecimalFractions(value: number): MassFraction;
    static FromGramsPerGram(value: number): MassFraction;
    static FromGramsPerKilogram(value: number): MassFraction;
    static FromPercent(value: number): MassFraction;
    static FromPartsPerThousand(value: number): MassFraction;
    static FromPartsPerMillion(value: number): MassFraction;
    static FromPartsPerBillion(value: number): MassFraction;
    static FromPartsPerTrillion(value: number): MassFraction;
    static FromNanogramPerGram(value: number): MassFraction;
    static FromMicrogramPerGram(value: number): MassFraction;
    static FromCentigramPerGram(value: number): MassFraction;
    static FromDecigramPerGram(value: number): MassFraction;
    static FromDecagramPerGram(value: number): MassFraction;
    static FromHectogramPerGram(value: number): MassFraction;
    static FromKilogramPerGram(value: number): MassFraction;
    static FromNanogramPerKilogram(value: number): MassFraction;
    static FromMicrogramPerKilogram(value: number): MassFraction;
    static FromCentigramPerKilogram(value: number): MassFraction;
    static FromDecigramPerKilogram(value: number): MassFraction;
    static FromDecagramPerKilogram(value: number): MassFraction;
    static FromHectogramPerKilogram(value: number): MassFraction;
    static FromKilogramPerKilogram(value: number): MassFraction;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassFractionUnits): string;
}
//# sourceMappingURL=massfraction.g.d.ts.map