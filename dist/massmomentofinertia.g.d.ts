/** MassMomentOfInertiaUnits enumeration */
export declare enum MassMomentOfInertiaUnits {
    /** */
    GramSquareMeters = 0,
    /** */
    GramSquareDecimeters = 1,
    /** */
    GramSquareCentimeters = 2,
    /** */
    GramSquareMillimeters = 3,
    /** */
    TonneSquareMeters = 4,
    /** */
    TonneSquareDecimeters = 5,
    /** */
    TonneSquareCentimeters = 6,
    /** */
    TonneSquareMilimeters = 7,
    /** */
    PoundSquareFeet = 8,
    /** */
    PoundSquareInches = 9,
    /** */
    SlugSquareFeet = 10,
    /** */
    SlugSquareInches = 11,
    /** */
    KilogramSquareMeters = 12,
    /** */
    KilogramSquareDecimeters = 13,
    /** */
    KilogramSquareCentimeters = 14,
    /** */
    KilogramSquareMillimeters = 15,
    /** */
    KilotonneSquareMeters = 16,
    /** */
    MegatonneSquareMeters = 17,
    /** */
    KilotonneSquareDecimeters = 18,
    /** */
    MegatonneSquareDecimeters = 19,
    /** */
    KilotonneSquareCentimeters = 20,
    /** */
    MegatonneSquareCentimeters = 21,
    /** */
    KilotonneSquareMilimeters = 22,
    /** */
    MegatonneSquareMilimeters = 23
}
/** A property of body reflects how its mass is distributed with regard to an axis. */
export declare class MassMomentOfInertia {
    private value;
    private gramsquaremetersLazy;
    private gramsquaredecimetersLazy;
    private gramsquarecentimetersLazy;
    private gramsquaremillimetersLazy;
    private tonnesquaremetersLazy;
    private tonnesquaredecimetersLazy;
    private tonnesquarecentimetersLazy;
    private tonnesquaremilimetersLazy;
    private poundsquarefeetLazy;
    private poundsquareinchesLazy;
    private slugsquarefeetLazy;
    private slugsquareinchesLazy;
    private kilogramsquaremetersLazy;
    private kilogramsquaredecimetersLazy;
    private kilogramsquarecentimetersLazy;
    private kilogramsquaremillimetersLazy;
    private kilotonnesquaremetersLazy;
    private megatonnesquaremetersLazy;
    private kilotonnesquaredecimetersLazy;
    private megatonnesquaredecimetersLazy;
    private kilotonnesquarecentimetersLazy;
    private megatonnesquarecentimetersLazy;
    private kilotonnesquaremilimetersLazy;
    private megatonnesquaremilimetersLazy;
    /**
     * Create a new MassMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘MassMomentOfInertia’ unit to create from.
     * The default unit is KilogramSquareMeters
     */
    constructor(value: number, fromUnit?: MassMomentOfInertiaUnits);
    /**
     * The base value of MassMomentOfInertia is KilogramSquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramSquareMeters(): number;
    /** */
    get GramSquareDecimeters(): number;
    /** */
    get GramSquareCentimeters(): number;
    /** */
    get GramSquareMillimeters(): number;
    /** */
    get TonneSquareMeters(): number;
    /** */
    get TonneSquareDecimeters(): number;
    /** */
    get TonneSquareCentimeters(): number;
    /** */
    get TonneSquareMilimeters(): number;
    /** */
    get PoundSquareFeet(): number;
    /** */
    get PoundSquareInches(): number;
    /** */
    get SlugSquareFeet(): number;
    /** */
    get SlugSquareInches(): number;
    /** */
    get KilogramSquareMeters(): number;
    /** */
    get KilogramSquareDecimeters(): number;
    /** */
    get KilogramSquareCentimeters(): number;
    /** */
    get KilogramSquareMillimeters(): number;
    /** */
    get KilotonneSquareMeters(): number;
    /** */
    get MegatonneSquareMeters(): number;
    /** */
    get KilotonneSquareDecimeters(): number;
    /** */
    get MegatonneSquareDecimeters(): number;
    /** */
    get KilotonneSquareCentimeters(): number;
    /** */
    get MegatonneSquareCentimeters(): number;
    /** */
    get KilotonneSquareMilimeters(): number;
    /** */
    get MegatonneSquareMilimeters(): number;
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMeters
     *
     * @param value The unit as GramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareMeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareDecimeters
     *
     * @param value The unit as GramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareDecimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareCentimeters
     *
     * @param value The unit as GramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareCentimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMillimeters
     *
     * @param value The unit as GramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareMillimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMeters
     *
     * @param value The unit as TonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareMeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareDecimeters
     *
     * @param value The unit as TonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareDecimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareCentimeters
     *
     * @param value The unit as TonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareCentimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMilimeters
     *
     * @param value The unit as TonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareMilimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareFeet
     *
     * @param value The unit as PoundSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromPoundSquareFeet(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareInches
     *
     * @param value The unit as PoundSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromPoundSquareInches(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareFeet
     *
     * @param value The unit as SlugSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromSlugSquareFeet(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareInches
     *
     * @param value The unit as SlugSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromSlugSquareInches(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMeters
     *
     * @param value The unit as KilogramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareMeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareDecimeters
     *
     * @param value The unit as KilogramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareDecimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareCentimeters
     *
     * @param value The unit as KilogramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareCentimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMillimeters
     *
     * @param value The unit as KilogramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareMillimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMeters
     *
     * @param value The unit as KilotonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareMeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMeters
     *
     * @param value The unit as MegatonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareMeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareDecimeters
     *
     * @param value The unit as KilotonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareDecimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareDecimeters
     *
     * @param value The unit as MegatonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareDecimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareCentimeters
     *
     * @param value The unit as KilotonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareCentimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareCentimeters
     *
     * @param value The unit as MegatonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareCentimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMilimeters
     *
     * @param value The unit as KilotonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareMilimeters(value: number): MassMomentOfInertia;
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMilimeters
     *
     * @param value The unit as MegatonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareMilimeters(value: number): MassMomentOfInertia;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MassMomentOfInertia to string.
     * Note! the default format for MassMomentOfInertia is KilogramSquareMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassMomentOfInertia.
     * @returns The string format of the MassMomentOfInertia.
     */
    toString(toUnit?: MassMomentOfInertiaUnits): string;
    /**
     * Check if the given MassMomentOfInertia are equals to the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns True if the given MassMomentOfInertia are equal to the current MassMomentOfInertia.
     */
    equals(massMomentOfInertia: MassMomentOfInertia): boolean;
    /**
     * Compare the given MassMomentOfInertia against the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current MassMomentOfInertia is less then other, 1 if the current MassMomentOfInertia is greater then other.
     */
    compareTo(massMomentOfInertia: MassMomentOfInertia): number;
    /**
     * Add the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    add(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia;
    /**
     * Subtract the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    subtract(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia;
    /**
     * Multiply the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    multiply(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia;
    /**
     * Divide the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    divide(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia;
    /**
     * Modulo the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    modulo(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia;
    /**
     * Pow the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    pow(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia;
}
//# sourceMappingURL=massmomentofinertia.g.d.ts.map