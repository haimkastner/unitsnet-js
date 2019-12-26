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
    KilogramSquareMeter = 12,
    KilogramSquareDecimeter = 13,
    KilogramSquareCentimeter = 14,
    KilogramSquareMillimeter = 15,
    KilotonneSquareMeter = 16,
    MegatonneSquareMeter = 17,
    KilotonneSquareDecimeter = 18,
    MegatonneSquareDecimeter = 19,
    KilotonneSquareCentimeter = 20,
    MegatonneSquareCentimeter = 21,
    KilotonneSquareMilimeter = 22,
    MegatonneSquareMilimeter = 23
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
    private kilogramsquaremeterLazy;
    private kilogramsquaredecimeterLazy;
    private kilogramsquarecentimeterLazy;
    private kilogramsquaremillimeterLazy;
    private kilotonnesquaremeterLazy;
    private megatonnesquaremeterLazy;
    private kilotonnesquaredecimeterLazy;
    private megatonnesquaredecimeterLazy;
    private kilotonnesquarecentimeterLazy;
    private megatonnesquarecentimeterLazy;
    private kilotonnesquaremilimeterLazy;
    private megatonnesquaremilimeterLazy;
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
    get KilogramSquareMeter(): number;
    get KilogramSquareDecimeter(): number;
    get KilogramSquareCentimeter(): number;
    get KilogramSquareMillimeter(): number;
    get KilotonneSquareMeter(): number;
    get MegatonneSquareMeter(): number;
    get KilotonneSquareDecimeter(): number;
    get MegatonneSquareDecimeter(): number;
    get KilotonneSquareCentimeter(): number;
    get MegatonneSquareCentimeter(): number;
    get KilotonneSquareMilimeter(): number;
    get MegatonneSquareMilimeter(): number;
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
    static FromKilogramSquareMeter(value: number): MassMomentOfInertia;
    static FromKilogramSquareDecimeter(value: number): MassMomentOfInertia;
    static FromKilogramSquareCentimeter(value: number): MassMomentOfInertia;
    static FromKilogramSquareMillimeter(value: number): MassMomentOfInertia;
    static FromKilotonneSquareMeter(value: number): MassMomentOfInertia;
    static FromMegatonneSquareMeter(value: number): MassMomentOfInertia;
    static FromKilotonneSquareDecimeter(value: number): MassMomentOfInertia;
    static FromMegatonneSquareDecimeter(value: number): MassMomentOfInertia;
    static FromKilotonneSquareCentimeter(value: number): MassMomentOfInertia;
    static FromMegatonneSquareCentimeter(value: number): MassMomentOfInertia;
    static FromKilotonneSquareMilimeter(value: number): MassMomentOfInertia;
    static FromMegatonneSquareMilimeter(value: number): MassMomentOfInertia;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassMomentOfInertiaUnits): string;
}
//# sourceMappingURL=massmomentofinertia.g.d.ts.map