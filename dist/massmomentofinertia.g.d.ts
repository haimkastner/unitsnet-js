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
    Kilogramsquaremeters = 12,
    Kilogramsquaredecimeters = 13,
    Kilogramsquarecentimeters = 14,
    Kilogramsquaremillimeters = 15,
    Kilotonnesquaremeters = 16,
    Megatonnesquaremeters = 17,
    Kilotonnesquaredecimeters = 18,
    Megatonnesquaredecimeters = 19,
    Kilotonnesquarecentimeters = 20,
    Megatonnesquarecentimeters = 21,
    Kilotonnesquaremilimeters = 22,
    Megatonnesquaremilimeters = 23
}
export declare class MassMomentOfInertia {
    private value;
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
    get Kilogramsquaremeters(): number;
    get Kilogramsquaredecimeters(): number;
    get Kilogramsquarecentimeters(): number;
    get Kilogramsquaremillimeters(): number;
    get Kilotonnesquaremeters(): number;
    get Megatonnesquaremeters(): number;
    get Kilotonnesquaredecimeters(): number;
    get Megatonnesquaredecimeters(): number;
    get Kilotonnesquarecentimeters(): number;
    get Megatonnesquarecentimeters(): number;
    get Kilotonnesquaremilimeters(): number;
    get Megatonnesquaremilimeters(): number;
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
    static FromKilogramsquaremeters(value: number): MassMomentOfInertia;
    static FromKilogramsquaredecimeters(value: number): MassMomentOfInertia;
    static FromKilogramsquarecentimeters(value: number): MassMomentOfInertia;
    static FromKilogramsquaremillimeters(value: number): MassMomentOfInertia;
    static FromKilotonnesquaremeters(value: number): MassMomentOfInertia;
    static FromMegatonnesquaremeters(value: number): MassMomentOfInertia;
    static FromKilotonnesquaredecimeters(value: number): MassMomentOfInertia;
    static FromMegatonnesquaredecimeters(value: number): MassMomentOfInertia;
    static FromKilotonnesquarecentimeters(value: number): MassMomentOfInertia;
    static FromMegatonnesquarecentimeters(value: number): MassMomentOfInertia;
    static FromKilotonnesquaremilimeters(value: number): MassMomentOfInertia;
    static FromMegatonnesquaremilimeters(value: number): MassMomentOfInertia;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=massmomentofinertia.g.d.ts.map