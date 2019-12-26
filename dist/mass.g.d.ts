/** MassUnits enumeration */
export declare enum MassUnits {
    /** */
    Grams = 0,
    /** */
    Tonnes = 1,
    /** The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton. */
    ShortTons = 2,
    /** Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication. */
    LongTons = 3,
    /** The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces. */
    Pounds = 4,
    /** An ounce (abbreviated oz) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one-sixteenth of a pound or approximately 28 grams. The abbreviation 'oz' derives from the Italian word onza (now spelled oncia). */
    Ounces = 5,
    /** The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it. */
    Slugs = 6,
    /** The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight. */
    Stone = 7,
    /** The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental". */
    ShortHundredweight = 8,
    /** The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada. */
    LongHundredweight = 9,
    /** A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams. */
    Grains = 10,
    /** Solar mass is a ratio unit to the mass of the solar system star, the sun. */
    SolarMasses = 11,
    /** Earth mass is a ratio unit to the mass of planet Earth. */
    EarthMasses = 12,
    /** */
    Nanograms = 13,
    /** */
    Micrograms = 14,
    /** */
    Centigrams = 15,
    /** */
    Decigrams = 16,
    /** */
    Decagrams = 17,
    /** */
    Hectograms = 18,
    /** */
    Kilograms = 19,
    /** */
    Kilotonnes = 20,
    /** */
    Megatonnes = 21,
    /** */
    Kilopounds = 22,
    /** */
    Megapounds = 23
}
/** In physics, mass (from Greek μᾶζα "barley cake, lump [of dough]") is a property of a physical system or body, giving rise to the phenomena of the body's resistance to being accelerated by a force and the strength of its mutual gravitational attraction with other bodies. Instruments such as mass balances or scales use those phenomena to measure mass. The SI unit of mass is the kilogram (kg). */
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
    /**
     * Create a new Mass.
     * @param value The value.
     * @param fromUnit The ‘Mass’ unit to create from.
     */
    constructor(value: number, fromUnit: MassUnits);
    /**
     * The base value of Mass is Kilogram.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Grams(): number;
    /** */
    get Tonnes(): number;
    /** The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton. */
    get ShortTons(): number;
    /** Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication. */
    get LongTons(): number;
    /** The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces. */
    get Pounds(): number;
    /** An ounce (abbreviated oz) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one-sixteenth of a pound or approximately 28 grams. The abbreviation 'oz' derives from the Italian word onza (now spelled oncia). */
    get Ounces(): number;
    /** The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it. */
    get Slugs(): number;
    /** The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight. */
    get Stone(): number;
    /** The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental". */
    get ShortHundredweight(): number;
    /** The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada. */
    get LongHundredweight(): number;
    /** A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams. */
    get Grains(): number;
    /** Solar mass is a ratio unit to the mass of the solar system star, the sun. */
    get SolarMasses(): number;
    /** Earth mass is a ratio unit to the mass of planet Earth. */
    get EarthMasses(): number;
    /** */
    get Nanograms(): number;
    /** */
    get Micrograms(): number;
    /** */
    get Centigrams(): number;
    /** */
    get Decigrams(): number;
    /** */
    get Decagrams(): number;
    /** */
    get Hectograms(): number;
    /** */
    get Kilograms(): number;
    /** */
    get Kilotonnes(): number;
    /** */
    get Megatonnes(): number;
    /** */
    get Kilopounds(): number;
    /** */
    get Megapounds(): number;
    /**
     * Create a new Mass instance from a Grams
     *
     * @param value The unit as Grams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromGrams(value: number): Mass;
    /**
     * Create a new Mass instance from a Tonnes
     *
     * @param value The unit as Tonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromTonnes(value: number): Mass;
    /**
     * Create a new Mass instance from a ShortTons
     * The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton.
     * @param value The unit as ShortTons to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromShortTons(value: number): Mass;
    /**
     * Create a new Mass instance from a LongTons
     * Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication.
     * @param value The unit as LongTons to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromLongTons(value: number): Mass;
    /**
     * Create a new Mass instance from a Pounds
     * The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces.
     * @param value The unit as Pounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromPounds(value: number): Mass;
    /**
     * Create a new Mass instance from a Ounces
     * An ounce (abbreviated oz) is usually the international avoirdupois ounce as used in the United States customary and British imperial systems, which is equal to one-sixteenth of a pound or approximately 28 grams. The abbreviation 'oz' derives from the Italian word onza (now spelled oncia).
     * @param value The unit as Ounces to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromOunces(value: number): Mass;
    /**
     * Create a new Mass instance from a Slugs
     * The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it.
     * @param value The unit as Slugs to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromSlugs(value: number): Mass;
    /**
     * Create a new Mass instance from a Stone
     * The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight.
     * @param value The unit as Stone to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromStone(value: number): Mass;
    /**
     * Create a new Mass instance from a ShortHundredweight
     * The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental".
     * @param value The unit as ShortHundredweight to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromShortHundredweight(value: number): Mass;
    /**
     * Create a new Mass instance from a LongHundredweight
     * The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada.
     * @param value The unit as LongHundredweight to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromLongHundredweight(value: number): Mass;
    /**
     * Create a new Mass instance from a Grains
     * A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams.
     * @param value The unit as Grains to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromGrains(value: number): Mass;
    /**
     * Create a new Mass instance from a SolarMasses
     * Solar mass is a ratio unit to the mass of the solar system star, the sun.
     * @param value The unit as SolarMasses to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromSolarMasses(value: number): Mass;
    /**
     * Create a new Mass instance from a EarthMasses
     * Earth mass is a ratio unit to the mass of planet Earth.
     * @param value The unit as EarthMasses to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromEarthMasses(value: number): Mass;
    /**
     * Create a new Mass instance from a Nanograms
     *
     * @param value The unit as Nanograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromNanograms(value: number): Mass;
    /**
     * Create a new Mass instance from a Micrograms
     *
     * @param value The unit as Micrograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromMicrograms(value: number): Mass;
    /**
     * Create a new Mass instance from a Centigrams
     *
     * @param value The unit as Centigrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromCentigrams(value: number): Mass;
    /**
     * Create a new Mass instance from a Decigrams
     *
     * @param value The unit as Decigrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromDecigrams(value: number): Mass;
    /**
     * Create a new Mass instance from a Decagrams
     *
     * @param value The unit as Decagrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromDecagrams(value: number): Mass;
    /**
     * Create a new Mass instance from a Hectograms
     *
     * @param value The unit as Hectograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromHectograms(value: number): Mass;
    /**
     * Create a new Mass instance from a Kilograms
     *
     * @param value The unit as Kilograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromKilograms(value: number): Mass;
    /**
     * Create a new Mass instance from a Kilotonnes
     *
     * @param value The unit as Kilotonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromKilotonnes(value: number): Mass;
    /**
     * Create a new Mass instance from a Megatonnes
     *
     * @param value The unit as Megatonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromMegatonnes(value: number): Mass;
    /**
     * Create a new Mass instance from a Kilopounds
     *
     * @param value The unit as Kilopounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromKilopounds(value: number): Mass;
    /**
     * Create a new Mass instance from a Megapounds
     *
     * @param value The unit as Megapounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    static FromMegapounds(value: number): Mass;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Mass to string.
     * Note! the default format for Mass is Kilograms.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Mass.
     * @returns The string format of the Mass.
     */
    toString(toUnit?: MassUnits): string;
}
//# sourceMappingURL=mass.g.d.ts.map