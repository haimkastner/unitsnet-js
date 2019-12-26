export declare enum MassMomentOfInertiaUnits {
    GramSquareMeters = 0,
    GramSquareDecimeters = 1,
    GramSquareCentimeters = 2,
    GramSquareMillimeters = 3,
    TonneSquareMeters = 4,
    TonneSquareDecimeters = 5,
    TonneSquareCentimeters = 6,
    TonneSquareMilimeters = 7,
    PoundSquareFeet = 8,
    PoundSquareInches = 9,
    SlugSquareFeet = 10,
    SlugSquareInches = 11,
    KilogramSquareMeters = 12,
    KilogramSquareDecimeters = 13,
    KilogramSquareCentimeters = 14,
    KilogramSquareMillimeters = 15,
    KilotonneSquareMeters = 16,
    MegatonneSquareMeters = 17,
    KilotonneSquareDecimeters = 18,
    MegatonneSquareDecimeters = 19,
    KilotonneSquareCentimeters = 20,
    MegatonneSquareCentimeters = 21,
    KilotonneSquareMilimeters = 22,
    MegatonneSquareMilimeters = 23
}
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
    constructor(value: number, fromUnit: MassMomentOfInertiaUnits);
    get GramSquareMeters(): number;
    get GramSquareDecimeters(): number;
    get GramSquareCentimeters(): number;
    get GramSquareMillimeters(): number;
    get TonneSquareMeters(): number;
    get TonneSquareDecimeters(): number;
    get TonneSquareCentimeters(): number;
    get TonneSquareMilimeters(): number;
    get PoundSquareFeet(): number;
    get PoundSquareInches(): number;
    get SlugSquareFeet(): number;
    get SlugSquareInches(): number;
    get KilogramSquareMeters(): number;
    get KilogramSquareDecimeters(): number;
    get KilogramSquareCentimeters(): number;
    get KilogramSquareMillimeters(): number;
    get KilotonneSquareMeters(): number;
    get MegatonneSquareMeters(): number;
    get KilotonneSquareDecimeters(): number;
    get MegatonneSquareDecimeters(): number;
    get KilotonneSquareCentimeters(): number;
    get MegatonneSquareCentimeters(): number;
    get KilotonneSquareMilimeters(): number;
    get MegatonneSquareMilimeters(): number;
    static FromGramSquareMeters(value: number): MassMomentOfInertia;
    static FromGramSquareDecimeters(value: number): MassMomentOfInertia;
    static FromGramSquareCentimeters(value: number): MassMomentOfInertia;
    static FromGramSquareMillimeters(value: number): MassMomentOfInertia;
    static FromTonneSquareMeters(value: number): MassMomentOfInertia;
    static FromTonneSquareDecimeters(value: number): MassMomentOfInertia;
    static FromTonneSquareCentimeters(value: number): MassMomentOfInertia;
    static FromTonneSquareMilimeters(value: number): MassMomentOfInertia;
    static FromPoundSquareFeet(value: number): MassMomentOfInertia;
    static FromPoundSquareInches(value: number): MassMomentOfInertia;
    static FromSlugSquareFeet(value: number): MassMomentOfInertia;
    static FromSlugSquareInches(value: number): MassMomentOfInertia;
    static FromKilogramSquareMeters(value: number): MassMomentOfInertia;
    static FromKilogramSquareDecimeters(value: number): MassMomentOfInertia;
    static FromKilogramSquareCentimeters(value: number): MassMomentOfInertia;
    static FromKilogramSquareMillimeters(value: number): MassMomentOfInertia;
    static FromKilotonneSquareMeters(value: number): MassMomentOfInertia;
    static FromMegatonneSquareMeters(value: number): MassMomentOfInertia;
    static FromKilotonneSquareDecimeters(value: number): MassMomentOfInertia;
    static FromMegatonneSquareDecimeters(value: number): MassMomentOfInertia;
    static FromKilotonneSquareCentimeters(value: number): MassMomentOfInertia;
    static FromMegatonneSquareCentimeters(value: number): MassMomentOfInertia;
    static FromKilotonneSquareMilimeters(value: number): MassMomentOfInertia;
    static FromMegatonneSquareMilimeters(value: number): MassMomentOfInertia;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassMomentOfInertiaUnits): string;
}
//# sourceMappingURL=massmomentofinertia.g.d.ts.map