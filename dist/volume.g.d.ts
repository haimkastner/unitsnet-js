/** VolumeUnits enumeration */
export declare enum VolumeUnits {
    /** */
    Liters = 0,
    /** */
    CubicMeters = 1,
    /** */
    CubicKilometers = 2,
    /** */
    CubicHectometers = 3,
    /** */
    CubicDecimeters = 4,
    /** */
    CubicCentimeters = 5,
    /** */
    CubicMillimeters = 6,
    /** */
    CubicMicrometers = 7,
    /** */
    CubicMiles = 8,
    /** */
    CubicYards = 9,
    /** */
    CubicFeet = 10,
    /** */
    CubicInches = 11,
    /** */
    ImperialGallons = 12,
    /** */
    ImperialOunces = 13,
    /** */
    UsGallons = 14,
    /** */
    UsOunces = 15,
    /** */
    UsTablespoons = 16,
    /** */
    AuTablespoons = 17,
    /** */
    UkTablespoons = 18,
    /** */
    MetricTeaspoons = 19,
    /** */
    UsTeaspoons = 20,
    /** */
    MetricCups = 21,
    /** */
    UsCustomaryCups = 22,
    /** */
    UsLegalCups = 23,
    /** */
    OilBarrels = 24,
    /** */
    UsBeerBarrels = 25,
    /** */
    ImperialBeerBarrels = 26,
    /** */
    UsQuarts = 27,
    /** */
    UsPints = 28,
    /** */
    AcreFeet = 29,
    /** */
    ImperialPints = 30,
    /** */
    Microliters = 31,
    /** */
    Centiliters = 32,
    /** */
    Deciliters = 33,
    /** */
    Hectoliters = 34,
    /** */
    Kiloliters = 35,
    /** */
    Megaliters = 36,
    /** */
    HectocubicMeters = 37,
    /** */
    KilocubicMeters = 38,
    /** */
    HectocubicFeet = 39,
    /** */
    KilocubicFeet = 40,
    /** */
    MegacubicFeet = 41,
    /** */
    KiloimperialGallons = 42,
    /** */
    MegaimperialGallons = 43,
    /** */
    KilousGallons = 44,
    /** */
    MegausGallons = 45
}
/** Volume is the quantity of three-dimensional space enclosed by some closed boundary, for example, the space that a substance (solid, liquid, gas, or plasma) or shape occupies or contains.[1] Volume is often quantified numerically using the SI derived unit, the cubic metre. The volume of a container is generally understood to be the capacity of the container, i. e. the amount of fluid (gas or liquid) that the container could hold, rather than the amount of space the container itself displaces. */
export declare class Volume {
    private value;
    private litersLazy;
    private cubicmetersLazy;
    private cubickilometersLazy;
    private cubichectometersLazy;
    private cubicdecimetersLazy;
    private cubiccentimetersLazy;
    private cubicmillimetersLazy;
    private cubicmicrometersLazy;
    private cubicmilesLazy;
    private cubicyardsLazy;
    private cubicfeetLazy;
    private cubicinchesLazy;
    private imperialgallonsLazy;
    private imperialouncesLazy;
    private usgallonsLazy;
    private usouncesLazy;
    private ustablespoonsLazy;
    private autablespoonsLazy;
    private uktablespoonsLazy;
    private metricteaspoonsLazy;
    private usteaspoonsLazy;
    private metriccupsLazy;
    private uscustomarycupsLazy;
    private uslegalcupsLazy;
    private oilbarrelsLazy;
    private usbeerbarrelsLazy;
    private imperialbeerbarrelsLazy;
    private usquartsLazy;
    private uspintsLazy;
    private acrefeetLazy;
    private imperialpintsLazy;
    private microlitersLazy;
    private centilitersLazy;
    private decilitersLazy;
    private hectolitersLazy;
    private kilolitersLazy;
    private megalitersLazy;
    private hectocubicmetersLazy;
    private kilocubicmetersLazy;
    private hectocubicfeetLazy;
    private kilocubicfeetLazy;
    private megacubicfeetLazy;
    private kiloimperialgallonsLazy;
    private megaimperialgallonsLazy;
    private kilousgallonsLazy;
    private megausgallonsLazy;
    /**
     * Create a new Volume.
     * @param value The value.
     * @param fromUnit The ‘Volume’ unit to create from.
     * The default unit is CubicMeters
     */
    constructor(value: number, fromUnit?: VolumeUnits);
    /**
     * The base value of Volume is CubicMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Liters(): number;
    /** */
    get CubicMeters(): number;
    /** */
    get CubicKilometers(): number;
    /** */
    get CubicHectometers(): number;
    /** */
    get CubicDecimeters(): number;
    /** */
    get CubicCentimeters(): number;
    /** */
    get CubicMillimeters(): number;
    /** */
    get CubicMicrometers(): number;
    /** */
    get CubicMiles(): number;
    /** */
    get CubicYards(): number;
    /** */
    get CubicFeet(): number;
    /** */
    get CubicInches(): number;
    /** */
    get ImperialGallons(): number;
    /** */
    get ImperialOunces(): number;
    /** */
    get UsGallons(): number;
    /** */
    get UsOunces(): number;
    /** */
    get UsTablespoons(): number;
    /** */
    get AuTablespoons(): number;
    /** */
    get UkTablespoons(): number;
    /** */
    get MetricTeaspoons(): number;
    /** */
    get UsTeaspoons(): number;
    /** */
    get MetricCups(): number;
    /** */
    get UsCustomaryCups(): number;
    /** */
    get UsLegalCups(): number;
    /** */
    get OilBarrels(): number;
    /** */
    get UsBeerBarrels(): number;
    /** */
    get ImperialBeerBarrels(): number;
    /** */
    get UsQuarts(): number;
    /** */
    get UsPints(): number;
    /** */
    get AcreFeet(): number;
    /** */
    get ImperialPints(): number;
    /** */
    get Microliters(): number;
    /** */
    get Centiliters(): number;
    /** */
    get Deciliters(): number;
    /** */
    get Hectoliters(): number;
    /** */
    get Kiloliters(): number;
    /** */
    get Megaliters(): number;
    /** */
    get HectocubicMeters(): number;
    /** */
    get KilocubicMeters(): number;
    /** */
    get HectocubicFeet(): number;
    /** */
    get KilocubicFeet(): number;
    /** */
    get MegacubicFeet(): number;
    /** */
    get KiloimperialGallons(): number;
    /** */
    get MegaimperialGallons(): number;
    /** */
    get KilousGallons(): number;
    /** */
    get MegausGallons(): number;
    /**
     * Create a new Volume instance from a Liters
     *
     * @param value The unit as Liters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromLiters(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicMeters
     *
     * @param value The unit as CubicMeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicMeters(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicKilometers
     *
     * @param value The unit as CubicKilometers to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicKilometers(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicHectometers
     *
     * @param value The unit as CubicHectometers to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicHectometers(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicDecimeters
     *
     * @param value The unit as CubicDecimeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicDecimeters(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicCentimeters
     *
     * @param value The unit as CubicCentimeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicCentimeters(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicMillimeters
     *
     * @param value The unit as CubicMillimeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicMillimeters(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicMicrometers
     *
     * @param value The unit as CubicMicrometers to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicMicrometers(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicMiles
     *
     * @param value The unit as CubicMiles to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicMiles(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicYards
     *
     * @param value The unit as CubicYards to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicYards(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicFeet
     *
     * @param value The unit as CubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicFeet(value: number): Volume;
    /**
     * Create a new Volume instance from a CubicInches
     *
     * @param value The unit as CubicInches to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCubicInches(value: number): Volume;
    /**
     * Create a new Volume instance from a ImperialGallons
     *
     * @param value The unit as ImperialGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromImperialGallons(value: number): Volume;
    /**
     * Create a new Volume instance from a ImperialOunces
     *
     * @param value The unit as ImperialOunces to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromImperialOunces(value: number): Volume;
    /**
     * Create a new Volume instance from a UsGallons
     *
     * @param value The unit as UsGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsGallons(value: number): Volume;
    /**
     * Create a new Volume instance from a UsOunces
     *
     * @param value The unit as UsOunces to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsOunces(value: number): Volume;
    /**
     * Create a new Volume instance from a UsTablespoons
     *
     * @param value The unit as UsTablespoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsTablespoons(value: number): Volume;
    /**
     * Create a new Volume instance from a AuTablespoons
     *
     * @param value The unit as AuTablespoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromAuTablespoons(value: number): Volume;
    /**
     * Create a new Volume instance from a UkTablespoons
     *
     * @param value The unit as UkTablespoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUkTablespoons(value: number): Volume;
    /**
     * Create a new Volume instance from a MetricTeaspoons
     *
     * @param value The unit as MetricTeaspoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMetricTeaspoons(value: number): Volume;
    /**
     * Create a new Volume instance from a UsTeaspoons
     *
     * @param value The unit as UsTeaspoons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsTeaspoons(value: number): Volume;
    /**
     * Create a new Volume instance from a MetricCups
     *
     * @param value The unit as MetricCups to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMetricCups(value: number): Volume;
    /**
     * Create a new Volume instance from a UsCustomaryCups
     *
     * @param value The unit as UsCustomaryCups to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsCustomaryCups(value: number): Volume;
    /**
     * Create a new Volume instance from a UsLegalCups
     *
     * @param value The unit as UsLegalCups to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsLegalCups(value: number): Volume;
    /**
     * Create a new Volume instance from a OilBarrels
     *
     * @param value The unit as OilBarrels to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromOilBarrels(value: number): Volume;
    /**
     * Create a new Volume instance from a UsBeerBarrels
     *
     * @param value The unit as UsBeerBarrels to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsBeerBarrels(value: number): Volume;
    /**
     * Create a new Volume instance from a ImperialBeerBarrels
     *
     * @param value The unit as ImperialBeerBarrels to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromImperialBeerBarrels(value: number): Volume;
    /**
     * Create a new Volume instance from a UsQuarts
     *
     * @param value The unit as UsQuarts to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsQuarts(value: number): Volume;
    /**
     * Create a new Volume instance from a UsPints
     *
     * @param value The unit as UsPints to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromUsPints(value: number): Volume;
    /**
     * Create a new Volume instance from a AcreFeet
     *
     * @param value The unit as AcreFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromAcreFeet(value: number): Volume;
    /**
     * Create a new Volume instance from a ImperialPints
     *
     * @param value The unit as ImperialPints to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromImperialPints(value: number): Volume;
    /**
     * Create a new Volume instance from a Microliters
     *
     * @param value The unit as Microliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMicroliters(value: number): Volume;
    /**
     * Create a new Volume instance from a Centiliters
     *
     * @param value The unit as Centiliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromCentiliters(value: number): Volume;
    /**
     * Create a new Volume instance from a Deciliters
     *
     * @param value The unit as Deciliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromDeciliters(value: number): Volume;
    /**
     * Create a new Volume instance from a Hectoliters
     *
     * @param value The unit as Hectoliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromHectoliters(value: number): Volume;
    /**
     * Create a new Volume instance from a Kiloliters
     *
     * @param value The unit as Kiloliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromKiloliters(value: number): Volume;
    /**
     * Create a new Volume instance from a Megaliters
     *
     * @param value The unit as Megaliters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMegaliters(value: number): Volume;
    /**
     * Create a new Volume instance from a HectocubicMeters
     *
     * @param value The unit as HectocubicMeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromHectocubicMeters(value: number): Volume;
    /**
     * Create a new Volume instance from a KilocubicMeters
     *
     * @param value The unit as KilocubicMeters to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromKilocubicMeters(value: number): Volume;
    /**
     * Create a new Volume instance from a HectocubicFeet
     *
     * @param value The unit as HectocubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromHectocubicFeet(value: number): Volume;
    /**
     * Create a new Volume instance from a KilocubicFeet
     *
     * @param value The unit as KilocubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromKilocubicFeet(value: number): Volume;
    /**
     * Create a new Volume instance from a MegacubicFeet
     *
     * @param value The unit as MegacubicFeet to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMegacubicFeet(value: number): Volume;
    /**
     * Create a new Volume instance from a KiloimperialGallons
     *
     * @param value The unit as KiloimperialGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromKiloimperialGallons(value: number): Volume;
    /**
     * Create a new Volume instance from a MegaimperialGallons
     *
     * @param value The unit as MegaimperialGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMegaimperialGallons(value: number): Volume;
    /**
     * Create a new Volume instance from a KilousGallons
     *
     * @param value The unit as KilousGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromKilousGallons(value: number): Volume;
    /**
     * Create a new Volume instance from a MegausGallons
     *
     * @param value The unit as MegausGallons to create a new Volume from.
     * @returns The new Volume instance.
     */
    static FromMegausGallons(value: number): Volume;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Volume to string.
     * Note! the default format for Volume is CubicMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Volume.
     * @returns The string format of the Volume.
     */
    toString(toUnit?: VolumeUnits): string;
    /**
     * Check if the given Volume are equals to the current Volume.
     * @param volume The other Volume.
     * @returns True if the given Volume are equal to the current Volume.
     */
    equals(volume: Volume): boolean;
    /**
     * Compare the given Volume against the current Volume.
     * @param volume The other Volume.
     * @returns 0 if they are equal, -1 if the current Volume is less then other, 1 if the current Volume is greater then other.
     */
    compareTo(volume: Volume): number;
    /**
     * Add the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    add(volume: Volume): Volume;
    /**
     * Subtract the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    subtract(volume: Volume): Volume;
    /**
     * Multiply the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    multiply(volume: Volume): Volume;
    /**
     * Divide the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    divide(volume: Volume): Volume;
    /**
     * Modulo the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    modulo(volume: Volume): Volume;
    /**
     * Pow the given Volume with the current Volume.
     * @param volume The other Volume.
     * @returns A new Volume instance with the results.
     */
    pow(volume: Volume): Volume;
}
//# sourceMappingURL=volume.g.d.ts.map