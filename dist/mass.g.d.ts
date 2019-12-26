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
    Nanograms = 13,
    Micrograms = 14,
    Centigrams = 15,
    Decigrams = 16,
    Decagrams = 17,
    Hectograms = 18,
    Kilograms = 19,
    Kilotonnes = 20,
    Megatonnes = 21,
    Kilopounds = 22,
    Megapounds = 23
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
    private nanogramsLazy;
    private microgramsLazy;
    private centigramsLazy;
    private decigramsLazy;
    private decagramsLazy;
    private hectogramsLazy;
    private kilogramsLazy;
    private kilotonnesLazy;
    private megatonnesLazy;
    private kilopoundsLazy;
    private megapoundsLazy;
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
    get Nanograms(): number;
    get Micrograms(): number;
    get Centigrams(): number;
    get Decigrams(): number;
    get Decagrams(): number;
    get Hectograms(): number;
    get Kilograms(): number;
    get Kilotonnes(): number;
    get Megatonnes(): number;
    get Kilopounds(): number;
    get Megapounds(): number;
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
    static FromNanograms(value: number): Mass;
    static FromMicrograms(value: number): Mass;
    static FromCentigrams(value: number): Mass;
    static FromDecigrams(value: number): Mass;
    static FromDecagrams(value: number): Mass;
    static FromHectograms(value: number): Mass;
    static FromKilograms(value: number): Mass;
    static FromKilotonnes(value: number): Mass;
    static FromMegatonnes(value: number): Mass;
    static FromKilopounds(value: number): Mass;
    static FromMegapounds(value: number): Mass;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: MassUnits): string;
}
//# sourceMappingURL=mass.g.d.ts.map