/** MassFractionUnits enumeration */
export declare enum MassFractionUnits {
    /** */
    DecimalFractions = 0,
    /** */
    GramsPerGram = 1,
    /** */
    GramsPerKilogram = 2,
    /** */
    Percent = 3,
    /** */
    PartsPerThousand = 4,
    /** */
    PartsPerMillion = 5,
    /** */
    PartsPerBillion = 6,
    /** */
    PartsPerTrillion = 7,
    /** */
    NanogramsPerGram = 8,
    /** */
    MicrogramsPerGram = 9,
    /** */
    CentigramsPerGram = 10,
    /** */
    DecigramsPerGram = 11,
    /** */
    DecagramsPerGram = 12,
    /** */
    HectogramsPerGram = 13,
    /** */
    KilogramsPerGram = 14,
    /** */
    NanogramsPerKilogram = 15,
    /** */
    MicrogramsPerKilogram = 16,
    /** */
    CentigramsPerKilogram = 17,
    /** */
    DecigramsPerKilogram = 18,
    /** */
    DecagramsPerKilogram = 19,
    /** */
    HectogramsPerKilogram = 20,
    /** */
    KilogramsPerKilogram = 21
}
/** The mass fraction is defined as the mass of a constituent divided by the total mass of the mixture. */
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
    /**
     * Create a new MassFraction.
     * @param value The value.
     * @param fromUnit The ‘MassFraction’ unit to create from.
     * The default unit is DecimalFractions
     */
    constructor(value: number, fromUnit?: MassFractionUnits);
    /**
     * The base value of MassFraction is DecimalFractions.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DecimalFractions(): number;
    /** */
    get GramsPerGram(): number;
    /** */
    get GramsPerKilogram(): number;
    /** */
    get Percent(): number;
    /** */
    get PartsPerThousand(): number;
    /** */
    get PartsPerMillion(): number;
    /** */
    get PartsPerBillion(): number;
    /** */
    get PartsPerTrillion(): number;
    /** */
    get NanogramsPerGram(): number;
    /** */
    get MicrogramsPerGram(): number;
    /** */
    get CentigramsPerGram(): number;
    /** */
    get DecigramsPerGram(): number;
    /** */
    get DecagramsPerGram(): number;
    /** */
    get HectogramsPerGram(): number;
    /** */
    get KilogramsPerGram(): number;
    /** */
    get NanogramsPerKilogram(): number;
    /** */
    get MicrogramsPerKilogram(): number;
    /** */
    get CentigramsPerKilogram(): number;
    /** */
    get DecigramsPerKilogram(): number;
    /** */
    get DecagramsPerKilogram(): number;
    /** */
    get HectogramsPerKilogram(): number;
    /** */
    get KilogramsPerKilogram(): number;
    /**
     * Create a new MassFraction instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromDecimalFractions(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a GramsPerGram
     *
     * @param value The unit as GramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromGramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a GramsPerKilogram
     *
     * @param value The unit as GramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromGramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a Percent
     *
     * @param value The unit as Percent to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromPercent(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromPartsPerThousand(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromPartsPerMillion(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromPartsPerBillion(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromPartsPerTrillion(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a NanogramsPerGram
     *
     * @param value The unit as NanogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromNanogramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a MicrogramsPerGram
     *
     * @param value The unit as MicrogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromMicrogramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a CentigramsPerGram
     *
     * @param value The unit as CentigramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromCentigramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a DecigramsPerGram
     *
     * @param value The unit as DecigramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromDecigramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a DecagramsPerGram
     *
     * @param value The unit as DecagramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromDecagramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a HectogramsPerGram
     *
     * @param value The unit as HectogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromHectogramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a KilogramsPerGram
     *
     * @param value The unit as KilogramsPerGram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromKilogramsPerGram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a NanogramsPerKilogram
     *
     * @param value The unit as NanogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromNanogramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a MicrogramsPerKilogram
     *
     * @param value The unit as MicrogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromMicrogramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a CentigramsPerKilogram
     *
     * @param value The unit as CentigramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromCentigramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a DecigramsPerKilogram
     *
     * @param value The unit as DecigramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromDecigramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a DecagramsPerKilogram
     *
     * @param value The unit as DecagramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromDecagramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a HectogramsPerKilogram
     *
     * @param value The unit as HectogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromHectogramsPerKilogram(value: number): MassFraction;
    /**
     * Create a new MassFraction instance from a KilogramsPerKilogram
     *
     * @param value The unit as KilogramsPerKilogram to create a new MassFraction from.
     * @returns The new MassFraction instance.
     */
    static FromKilogramsPerKilogram(value: number): MassFraction;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MassFraction to string.
     * Note! the default format for MassFraction is DecimalFractions.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFraction.
     * @returns The string format of the MassFraction.
     */
    toString(toUnit?: MassFractionUnits): string;
    /**
     * Check if the given MassFraction are equals to the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns True if the given MassFraction are equal to the current MassFraction.
     */
    equals(massFraction: MassFraction): boolean;
    /**
     * Compare the given MassFraction against the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns 0 if they are equal, -1 if the current MassFraction is less then other, 1 if the current MassFraction is greater then other.
     */
    compareTo(massFraction: MassFraction): number;
    /**
     * Add the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    add(massFraction: MassFraction): MassFraction;
    /**
     * Subtract the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    subtract(massFraction: MassFraction): MassFraction;
    /**
     * Multiply the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    multiply(massFraction: MassFraction): MassFraction;
    /**
     * Divide the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    divide(massFraction: MassFraction): MassFraction;
    /**
     * Modulo the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    modulo(massFraction: MassFraction): MassFraction;
    /**
     * Pow the given MassFraction with the current MassFraction.
     * @param massFraction The other MassFraction.
     * @returns A new MassFraction instance with the results.
     */
    pow(massFraction: MassFraction): MassFraction;
}
//# sourceMappingURL=massfraction.g.d.ts.map