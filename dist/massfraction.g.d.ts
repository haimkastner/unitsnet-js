export declare enum MassFractionUnits {
    DecimalFractions = 0,
    GramsPerGram = 1,
    GramsPerKilogram = 2,
    Percent = 3,
    PartsPerThousand = 4,
    PartsPerMillion = 5,
    PartsPerBillion = 6,
    PartsPerTrillion = 7,
    NanogramsPerGram = 8,
    MicrogramsPerGram = 9,
    CentigramsPerGram = 10,
    DecigramsPerGram = 11,
    DecagramsPerGram = 12,
    HectogramsPerGram = 13,
    KilogramsPerGram = 14,
    NanogramsPerKilogram = 15,
    MicrogramsPerKilogram = 16,
    CentigramsPerKilogram = 17,
    DecigramsPerKilogram = 18,
    DecagramsPerKilogram = 19,
    HectogramsPerKilogram = 20,
    KilogramsPerKilogram = 21
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
    get NanogramsPerGram(): number;
    get MicrogramsPerGram(): number;
    get CentigramsPerGram(): number;
    get DecigramsPerGram(): number;
    get DecagramsPerGram(): number;
    get HectogramsPerGram(): number;
    get KilogramsPerGram(): number;
    get NanogramsPerKilogram(): number;
    get MicrogramsPerKilogram(): number;
    get CentigramsPerKilogram(): number;
    get DecigramsPerKilogram(): number;
    get DecagramsPerKilogram(): number;
    get HectogramsPerKilogram(): number;
    get KilogramsPerKilogram(): number;
    static FromDecimalFractions(value: number): MassFraction;
    static FromGramsPerGram(value: number): MassFraction;
    static FromGramsPerKilogram(value: number): MassFraction;
    static FromPercent(value: number): MassFraction;
    static FromPartsPerThousand(value: number): MassFraction;
    static FromPartsPerMillion(value: number): MassFraction;
    static FromPartsPerBillion(value: number): MassFraction;
    static FromPartsPerTrillion(value: number): MassFraction;
    static FromNanogramsPerGram(value: number): MassFraction;
    static FromMicrogramsPerGram(value: number): MassFraction;
    static FromCentigramsPerGram(value: number): MassFraction;
    static FromDecigramsPerGram(value: number): MassFraction;
    static FromDecagramsPerGram(value: number): MassFraction;
    static FromHectogramsPerGram(value: number): MassFraction;
    static FromKilogramsPerGram(value: number): MassFraction;
    static FromNanogramsPerKilogram(value: number): MassFraction;
    static FromMicrogramsPerKilogram(value: number): MassFraction;
    static FromCentigramsPerKilogram(value: number): MassFraction;
    static FromDecigramsPerKilogram(value: number): MassFraction;
    static FromDecagramsPerKilogram(value: number): MassFraction;
    static FromHectogramsPerKilogram(value: number): MassFraction;
    static FromKilogramsPerKilogram(value: number): MassFraction;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassFractionUnits): string;
}
//# sourceMappingURL=massfraction.g.d.ts.map