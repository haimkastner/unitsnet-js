/** LengthUnits enumeration */
export declare enum LengthUnits {
    /** */
    Meters = 0,
    /** */
    Miles = 1,
    /** */
    Yards = 2,
    /** */
    Feet = 3,
    /** */
    UsSurveyFeet = 4,
    /** */
    Inches = 5,
    /** */
    Mils = 6,
    /** */
    NauticalMiles = 7,
    /** */
    Fathoms = 8,
    /** */
    Shackles = 9,
    /** */
    Microinches = 10,
    /** */
    PrinterPoints = 11,
    /** */
    DtpPoints = 12,
    /** */
    PrinterPicas = 13,
    /** */
    DtpPicas = 14,
    /** */
    Twips = 15,
    /** */
    Hands = 16,
    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    AstronomicalUnits = 17,
    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    Parsecs = 18,
    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    LightYears = 19,
    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    SolarRadiuses = 20,
    /** */
    Nanometers = 21,
    /** */
    Micrometers = 22,
    /** */
    Centimeters = 23,
    /** */
    Decimeters = 24,
    /** */
    Hectometers = 25,
    /** */
    Kilometers = 26,
    /** */
    Kiloparsecs = 27,
    /** */
    Megaparsecs = 28,
    /** */
    KilolightYears = 29,
    /** */
    MegalightYears = 30
}
/** Many different units of length have been used around the world. The main units in modern use are U.S. customary units in the United States and the Metric system elsewhere. British Imperial units are still used for some purposes in the United Kingdom and some other countries. The metric system is sub-divided into SI and non-SI units. */
export declare class Length {
    private value;
    private metersLazy;
    private milesLazy;
    private yardsLazy;
    private feetLazy;
    private ussurveyfeetLazy;
    private inchesLazy;
    private milsLazy;
    private nauticalmilesLazy;
    private fathomsLazy;
    private shacklesLazy;
    private microinchesLazy;
    private printerpointsLazy;
    private dtppointsLazy;
    private printerpicasLazy;
    private dtppicasLazy;
    private twipsLazy;
    private handsLazy;
    private astronomicalunitsLazy;
    private parsecsLazy;
    private lightyearsLazy;
    private solarradiusesLazy;
    private nanometersLazy;
    private micrometersLazy;
    private centimetersLazy;
    private decimetersLazy;
    private hectometersLazy;
    private kilometersLazy;
    private kiloparsecsLazy;
    private megaparsecsLazy;
    private kilolightyearsLazy;
    private megalightyearsLazy;
    /**
     * Create a new Length.
     * @param value The value.
     * @param fromUnit The ‘Length’ unit to create from.
     * The default unit is Meters
     */
    constructor(value: number, fromUnit?: LengthUnits);
    /**
     * The base value of Length is Meters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Meters(): number;
    /** */
    get Miles(): number;
    /** */
    get Yards(): number;
    /** */
    get Feet(): number;
    /** */
    get UsSurveyFeet(): number;
    /** */
    get Inches(): number;
    /** */
    get Mils(): number;
    /** */
    get NauticalMiles(): number;
    /** */
    get Fathoms(): number;
    /** */
    get Shackles(): number;
    /** */
    get Microinches(): number;
    /** */
    get PrinterPoints(): number;
    /** */
    get DtpPoints(): number;
    /** */
    get PrinterPicas(): number;
    /** */
    get DtpPicas(): number;
    /** */
    get Twips(): number;
    /** */
    get Hands(): number;
    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    get AstronomicalUnits(): number;
    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    get Parsecs(): number;
    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    get LightYears(): number;
    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    get SolarRadiuses(): number;
    /** */
    get Nanometers(): number;
    /** */
    get Micrometers(): number;
    /** */
    get Centimeters(): number;
    /** */
    get Decimeters(): number;
    /** */
    get Hectometers(): number;
    /** */
    get Kilometers(): number;
    /** */
    get Kiloparsecs(): number;
    /** */
    get Megaparsecs(): number;
    /** */
    get KilolightYears(): number;
    /** */
    get MegalightYears(): number;
    /**
     * Create a new Length instance from a Meters
     *
     * @param value The unit as Meters to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMeters(value: number): Length;
    /**
     * Create a new Length instance from a Miles
     *
     * @param value The unit as Miles to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMiles(value: number): Length;
    /**
     * Create a new Length instance from a Yards
     *
     * @param value The unit as Yards to create a new Length from.
     * @returns The new Length instance.
     */
    static FromYards(value: number): Length;
    /**
     * Create a new Length instance from a Feet
     *
     * @param value The unit as Feet to create a new Length from.
     * @returns The new Length instance.
     */
    static FromFeet(value: number): Length;
    /**
     * Create a new Length instance from a UsSurveyFeet
     *
     * @param value The unit as UsSurveyFeet to create a new Length from.
     * @returns The new Length instance.
     */
    static FromUsSurveyFeet(value: number): Length;
    /**
     * Create a new Length instance from a Inches
     *
     * @param value The unit as Inches to create a new Length from.
     * @returns The new Length instance.
     */
    static FromInches(value: number): Length;
    /**
     * Create a new Length instance from a Mils
     *
     * @param value The unit as Mils to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMils(value: number): Length;
    /**
     * Create a new Length instance from a NauticalMiles
     *
     * @param value The unit as NauticalMiles to create a new Length from.
     * @returns The new Length instance.
     */
    static FromNauticalMiles(value: number): Length;
    /**
     * Create a new Length instance from a Fathoms
     *
     * @param value The unit as Fathoms to create a new Length from.
     * @returns The new Length instance.
     */
    static FromFathoms(value: number): Length;
    /**
     * Create a new Length instance from a Shackles
     *
     * @param value The unit as Shackles to create a new Length from.
     * @returns The new Length instance.
     */
    static FromShackles(value: number): Length;
    /**
     * Create a new Length instance from a Microinches
     *
     * @param value The unit as Microinches to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMicroinches(value: number): Length;
    /**
     * Create a new Length instance from a PrinterPoints
     *
     * @param value The unit as PrinterPoints to create a new Length from.
     * @returns The new Length instance.
     */
    static FromPrinterPoints(value: number): Length;
    /**
     * Create a new Length instance from a DtpPoints
     *
     * @param value The unit as DtpPoints to create a new Length from.
     * @returns The new Length instance.
     */
    static FromDtpPoints(value: number): Length;
    /**
     * Create a new Length instance from a PrinterPicas
     *
     * @param value The unit as PrinterPicas to create a new Length from.
     * @returns The new Length instance.
     */
    static FromPrinterPicas(value: number): Length;
    /**
     * Create a new Length instance from a DtpPicas
     *
     * @param value The unit as DtpPicas to create a new Length from.
     * @returns The new Length instance.
     */
    static FromDtpPicas(value: number): Length;
    /**
     * Create a new Length instance from a Twips
     *
     * @param value The unit as Twips to create a new Length from.
     * @returns The new Length instance.
     */
    static FromTwips(value: number): Length;
    /**
     * Create a new Length instance from a Hands
     *
     * @param value The unit as Hands to create a new Length from.
     * @returns The new Length instance.
     */
    static FromHands(value: number): Length;
    /**
     * Create a new Length instance from a AstronomicalUnits
     * One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth.
     * @param value The unit as AstronomicalUnits to create a new Length from.
     * @returns The new Length instance.
     */
    static FromAstronomicalUnits(value: number): Length;
    /**
     * Create a new Length instance from a Parsecs
     * A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond.
     * @param value The unit as Parsecs to create a new Length from.
     * @returns The new Length instance.
     */
    static FromParsecs(value: number): Length;
    /**
     * Create a new Length instance from a LightYears
     * A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days.
     * @param value The unit as LightYears to create a new Length from.
     * @returns The new Length instance.
     */
    static FromLightYears(value: number): Length;
    /**
     * Create a new Length instance from a SolarRadiuses
     * Solar radius is a ratio unit to the radius of the solar system star, the sun.
     * @param value The unit as SolarRadiuses to create a new Length from.
     * @returns The new Length instance.
     */
    static FromSolarRadiuses(value: number): Length;
    /**
     * Create a new Length instance from a Nanometers
     *
     * @param value The unit as Nanometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromNanometers(value: number): Length;
    /**
     * Create a new Length instance from a Micrometers
     *
     * @param value The unit as Micrometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMicrometers(value: number): Length;
    /**
     * Create a new Length instance from a Centimeters
     *
     * @param value The unit as Centimeters to create a new Length from.
     * @returns The new Length instance.
     */
    static FromCentimeters(value: number): Length;
    /**
     * Create a new Length instance from a Decimeters
     *
     * @param value The unit as Decimeters to create a new Length from.
     * @returns The new Length instance.
     */
    static FromDecimeters(value: number): Length;
    /**
     * Create a new Length instance from a Hectometers
     *
     * @param value The unit as Hectometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromHectometers(value: number): Length;
    /**
     * Create a new Length instance from a Kilometers
     *
     * @param value The unit as Kilometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromKilometers(value: number): Length;
    /**
     * Create a new Length instance from a Kiloparsecs
     *
     * @param value The unit as Kiloparsecs to create a new Length from.
     * @returns The new Length instance.
     */
    static FromKiloparsecs(value: number): Length;
    /**
     * Create a new Length instance from a Megaparsecs
     *
     * @param value The unit as Megaparsecs to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMegaparsecs(value: number): Length;
    /**
     * Create a new Length instance from a KilolightYears
     *
     * @param value The unit as KilolightYears to create a new Length from.
     * @returns The new Length instance.
     */
    static FromKilolightYears(value: number): Length;
    /**
     * Create a new Length instance from a MegalightYears
     *
     * @param value The unit as MegalightYears to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMegalightYears(value: number): Length;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Length to string.
     * Note! the default format for Length is Meters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Length.
     * @returns The string format of the Length.
     */
    toString(toUnit?: LengthUnits): string;
    /**
     * Check if the given Length are equals to the current Length.
     * @param length The other Length.
     * @returns True if the given Length are equal to the current Length.
     */
    equals(length: Length): boolean;
    /**
     * Compare the given Length against the current Length.
     * @param length The other Length.
     * @returns 0 if they are equal, -1 if the current Length is less then other, 1 if the current Length is greater then other.
     */
    compareTo(length: Length): number;
    /**
     * Add the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    add(length: Length): Length;
    /**
     * Subtract the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    subtract(length: Length): Length;
    /**
     * Multiply the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    multiply(length: Length): Length;
    /**
     * Divide the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    divide(length: Length): Length;
    /**
     * Modulo the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    modulo(length: Length): Length;
    /**
     * Pow the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    pow(length: Length): Length;
}
//# sourceMappingURL=length.g.d.ts.map