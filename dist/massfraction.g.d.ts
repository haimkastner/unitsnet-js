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
    Decagramspergram = 12,
    Hectogramspergram = 13,
    Kilogramspergram = 14,
    Nanogramsperkilogram = 15,
    Microgramsperkilogram = 16,
    Centigramsperkilogram = 17,
    Decigramsperkilogram = 18,
    Decagramsperkilogram = 19,
    Hectogramsperkilogram = 20,
    Kilogramsperkilogram = 21
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
    private nanogramspergramLazy;
    private microgramspergramLazy;
    private centigramspergramLazy;
    private decigramspergramLazy;
    private decagramspergramLazy;
    private hectogramspergramLazy;
    private kilogramspergramLazy;
    private nanogramsperkilogramLazy;
    private microgramsperkilogramLazy;
    private centigramsperkilogramLazy;
    private decigramsperkilogramLazy;
    private decagramsperkilogramLazy;
    private hectogramsperkilogramLazy;
    private kilogramsperkilogramLazy;
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
    get Decagramspergram(): number;
    get Hectogramspergram(): number;
    get Kilogramspergram(): number;
    get Nanogramsperkilogram(): number;
    get Microgramsperkilogram(): number;
    get Centigramsperkilogram(): number;
    get Decigramsperkilogram(): number;
    get Decagramsperkilogram(): number;
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
    static FromDecagramspergram(value: number): MassFraction;
    static FromHectogramspergram(value: number): MassFraction;
    static FromKilogramspergram(value: number): MassFraction;
    static FromNanogramsperkilogram(value: number): MassFraction;
    static FromMicrogramsperkilogram(value: number): MassFraction;
    static FromCentigramsperkilogram(value: number): MassFraction;
    static FromDecigramsperkilogram(value: number): MassFraction;
    static FromDecagramsperkilogram(value: number): MassFraction;
    static FromHectogramsperkilogram(value: number): MassFraction;
    static FromKilogramsperkilogram(value: number): MassFraction;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=massfraction.g.d.ts.map