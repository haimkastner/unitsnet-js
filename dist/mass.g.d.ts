export declare enum MassUnits {
    Grams = 0,
    Tonnes = 1,
    ShortTons = 2,
    LongTons = 3,
    Pounds = 4,
    Ounces = 5,
    Slugs = 6,
    Stone = 7,
    ShortHundredweight = 8,
    LongHundredweight = 9,
    Grains = 10,
    SolarMasses = 11,
    EarthMasses = 12,
    Nanogram = 13,
    Microgram = 14,
    Centigram = 15,
    Decigram = 16,
    Decagram = 17,
    Hectogram = 18,
    Kilogram = 19,
    Kilotonne = 20,
    Megatonne = 21,
    Kilopound = 22,
    Megapound = 23
}
export declare class Mass {
    private value;
    private gramsLazy;
    private tonnesLazy;
    private shorttonsLazy;
    private longtonsLazy;
    private poundsLazy;
    private ouncesLazy;
    private slugsLazy;
    private stoneLazy;
    private shorthundredweightLazy;
    private longhundredweightLazy;
    private grainsLazy;
    private solarmassesLazy;
    private earthmassesLazy;
    private nanogramLazy;
    private microgramLazy;
    private centigramLazy;
    private decigramLazy;
    private decagramLazy;
    private hectogramLazy;
    private kilogramLazy;
    private kilotonneLazy;
    private megatonneLazy;
    private kilopoundLazy;
    private megapoundLazy;
    constructor(value: number, fromUnit: MassUnits);
    get Grams(): number;
    get Tonnes(): number;
    get ShortTons(): number;
    get LongTons(): number;
    get Pounds(): number;
    get Ounces(): number;
    get Slugs(): number;
    get Stone(): number;
    get ShortHundredweight(): number;
    get LongHundredweight(): number;
    get Grains(): number;
    get SolarMasses(): number;
    get EarthMasses(): number;
    get Nanogram(): number;
    get Microgram(): number;
    get Centigram(): number;
    get Decigram(): number;
    get Decagram(): number;
    get Hectogram(): number;
    get Kilogram(): number;
    get Kilotonne(): number;
    get Megatonne(): number;
    get Kilopound(): number;
    get Megapound(): number;
    static FromGrams(value: number): Mass;
    static FromTonnes(value: number): Mass;
    static FromShortTons(value: number): Mass;
    static FromLongTons(value: number): Mass;
    static FromPounds(value: number): Mass;
    static FromOunces(value: number): Mass;
    static FromSlugs(value: number): Mass;
    static FromStone(value: number): Mass;
    static FromShortHundredweight(value: number): Mass;
    static FromLongHundredweight(value: number): Mass;
    static FromGrains(value: number): Mass;
    static FromSolarMasses(value: number): Mass;
    static FromEarthMasses(value: number): Mass;
    static FromNanogram(value: number): Mass;
    static FromMicrogram(value: number): Mass;
    static FromCentigram(value: number): Mass;
    static FromDecigram(value: number): Mass;
    static FromDecagram(value: number): Mass;
    static FromHectogram(value: number): Mass;
    static FromKilogram(value: number): Mass;
    static FromKilotonne(value: number): Mass;
    static FromMegatonne(value: number): Mass;
    static FromKilopound(value: number): Mass;
    static FromMegapound(value: number): Mass;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassUnits): string;
}
//# sourceMappingURL=mass.g.d.ts.map