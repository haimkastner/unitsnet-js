/** PressureUnits enumeration */
export declare enum PressureUnits {
    /** */
    Pascals = 0,
    /** */
    Atmospheres = 1,
    /** */
    Bars = 2,
    /** */
    KilogramsForcePerSquareMeter = 3,
    /** */
    KilogramsForcePerSquareCentimeter = 4,
    /** */
    KilogramsForcePerSquareMillimeter = 5,
    /** */
    NewtonsPerSquareMeter = 6,
    /** */
    NewtonsPerSquareCentimeter = 7,
    /** */
    NewtonsPerSquareMillimeter = 8,
    /** */
    TechnicalAtmospheres = 9,
    /** */
    Torrs = 10,
    /** */
    PoundsForcePerSquareInch = 11,
    /** */
    PoundsForcePerSquareFoot = 12,
    /** */
    TonnesForcePerSquareMillimeter = 13,
    /** */
    TonnesForcePerSquareMeter = 14,
    /** */
    MetersOfHead = 15,
    /** */
    TonnesForcePerSquareCentimeter = 16,
    /** */
    FeetOfHead = 17,
    /** */
    MillimetersOfMercury = 18,
    /** */
    InchesOfMercury = 19,
    /** */
    DynesPerSquareCentimeter = 20,
    /** */
    PoundsPerInchSecondSquared = 21,
    /** */
    InchesOfWaterColumn = 22,
    /** */
    Micropascals = 23,
    /** */
    Decapascals = 24,
    /** */
    Hectopascals = 25,
    /** */
    Kilopascals = 26,
    /** */
    Megapascals = 27,
    /** */
    Gigapascals = 28,
    /** */
    Microbars = 29,
    /** */
    Centibars = 30,
    /** */
    Decibars = 31,
    /** */
    Kilobars = 32,
    /** */
    Megabars = 33,
    /** */
    KilonewtonsPerSquareMeter = 34,
    /** */
    MeganewtonsPerSquareMeter = 35,
    /** */
    KilonewtonsPerSquareCentimeter = 36,
    /** */
    KilonewtonsPerSquareMillimeter = 37,
    /** */
    KilopoundsForcePerSquareInch = 38,
    /** */
    KilopoundsForcePerSquareFoot = 39
}
/** Pressure (symbol: P or p) is the ratio of force to the area over which that force is distributed. Pressure is force per unit area applied in a direction perpendicular to the surface of an object. Gauge pressure (also spelled gage pressure)[a] is the pressure relative to the local atmospheric or ambient pressure. Pressure is measured in any unit of force divided by any unit of area. The SI unit of pressure is the newton per square metre, which is called the pascal (Pa) after the seventeenth-century philosopher and scientist Blaise Pascal. A pressure of 1 Pa is small; it approximately equals the pressure exerted by a dollar bill resting flat on a table. Everyday pressures are often stated in kilopascals (1 kPa = 1000 Pa). */
export declare class Pressure {
    private value;
    private pascalsLazy;
    private atmospheresLazy;
    private barsLazy;
    private kilogramsforcepersquaremeterLazy;
    private kilogramsforcepersquarecentimeterLazy;
    private kilogramsforcepersquaremillimeterLazy;
    private newtonspersquaremeterLazy;
    private newtonspersquarecentimeterLazy;
    private newtonspersquaremillimeterLazy;
    private technicalatmospheresLazy;
    private torrsLazy;
    private poundsforcepersquareinchLazy;
    private poundsforcepersquarefootLazy;
    private tonnesforcepersquaremillimeterLazy;
    private tonnesforcepersquaremeterLazy;
    private metersofheadLazy;
    private tonnesforcepersquarecentimeterLazy;
    private feetofheadLazy;
    private millimetersofmercuryLazy;
    private inchesofmercuryLazy;
    private dynespersquarecentimeterLazy;
    private poundsperinchsecondsquaredLazy;
    private inchesofwatercolumnLazy;
    private micropascalsLazy;
    private decapascalsLazy;
    private hectopascalsLazy;
    private kilopascalsLazy;
    private megapascalsLazy;
    private gigapascalsLazy;
    private microbarsLazy;
    private centibarsLazy;
    private decibarsLazy;
    private kilobarsLazy;
    private megabarsLazy;
    private kilonewtonspersquaremeterLazy;
    private meganewtonspersquaremeterLazy;
    private kilonewtonspersquarecentimeterLazy;
    private kilonewtonspersquaremillimeterLazy;
    private kilopoundsforcepersquareinchLazy;
    private kilopoundsforcepersquarefootLazy;
    /**
     * Create a new Pressure.
     * @param value The value.
     * @param fromUnit The ‘Pressure’ unit to create from.
     * The default unit is Pascals
     */
    constructor(value: number, fromUnit?: PressureUnits);
    /**
     * The base value of Pressure is Pascals.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Pascals(): number;
    /** */
    get Atmospheres(): number;
    /** */
    get Bars(): number;
    /** */
    get KilogramsForcePerSquareMeter(): number;
    /** */
    get KilogramsForcePerSquareCentimeter(): number;
    /** */
    get KilogramsForcePerSquareMillimeter(): number;
    /** */
    get NewtonsPerSquareMeter(): number;
    /** */
    get NewtonsPerSquareCentimeter(): number;
    /** */
    get NewtonsPerSquareMillimeter(): number;
    /** */
    get TechnicalAtmospheres(): number;
    /** */
    get Torrs(): number;
    /** */
    get PoundsForcePerSquareInch(): number;
    /** */
    get PoundsForcePerSquareFoot(): number;
    /** */
    get TonnesForcePerSquareMillimeter(): number;
    /** */
    get TonnesForcePerSquareMeter(): number;
    /** */
    get MetersOfHead(): number;
    /** */
    get TonnesForcePerSquareCentimeter(): number;
    /** */
    get FeetOfHead(): number;
    /** */
    get MillimetersOfMercury(): number;
    /** */
    get InchesOfMercury(): number;
    /** */
    get DynesPerSquareCentimeter(): number;
    /** */
    get PoundsPerInchSecondSquared(): number;
    /** */
    get InchesOfWaterColumn(): number;
    /** */
    get Micropascals(): number;
    /** */
    get Decapascals(): number;
    /** */
    get Hectopascals(): number;
    /** */
    get Kilopascals(): number;
    /** */
    get Megapascals(): number;
    /** */
    get Gigapascals(): number;
    /** */
    get Microbars(): number;
    /** */
    get Centibars(): number;
    /** */
    get Decibars(): number;
    /** */
    get Kilobars(): number;
    /** */
    get Megabars(): number;
    /** */
    get KilonewtonsPerSquareMeter(): number;
    /** */
    get MeganewtonsPerSquareMeter(): number;
    /** */
    get KilonewtonsPerSquareCentimeter(): number;
    /** */
    get KilonewtonsPerSquareMillimeter(): number;
    /** */
    get KilopoundsForcePerSquareInch(): number;
    /** */
    get KilopoundsForcePerSquareFoot(): number;
    /**
     * Create a new Pressure instance from a Pascals
     *
     * @param value The unit as Pascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromPascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Atmospheres
     *
     * @param value The unit as Atmospheres to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromAtmospheres(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Bars
     *
     * @param value The unit as Bars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromBars(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilogramsForcePerSquareMeter
     *
     * @param value The unit as KilogramsForcePerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilogramsForcePerSquareMeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilogramsForcePerSquareCentimeter
     *
     * @param value The unit as KilogramsForcePerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilogramsForcePerSquareCentimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilogramsForcePerSquareMillimeter
     *
     * @param value The unit as KilogramsForcePerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilogramsForcePerSquareMillimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a NewtonsPerSquareMeter
     *
     * @param value The unit as NewtonsPerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromNewtonsPerSquareMeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a NewtonsPerSquareCentimeter
     *
     * @param value The unit as NewtonsPerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromNewtonsPerSquareCentimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a NewtonsPerSquareMillimeter
     *
     * @param value The unit as NewtonsPerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromNewtonsPerSquareMillimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a TechnicalAtmospheres
     *
     * @param value The unit as TechnicalAtmospheres to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromTechnicalAtmospheres(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Torrs
     *
     * @param value The unit as Torrs to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromTorrs(value: number): Pressure;
    /**
     * Create a new Pressure instance from a PoundsForcePerSquareInch
     *
     * @param value The unit as PoundsForcePerSquareInch to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromPoundsForcePerSquareInch(value: number): Pressure;
    /**
     * Create a new Pressure instance from a PoundsForcePerSquareFoot
     *
     * @param value The unit as PoundsForcePerSquareFoot to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromPoundsForcePerSquareFoot(value: number): Pressure;
    /**
     * Create a new Pressure instance from a TonnesForcePerSquareMillimeter
     *
     * @param value The unit as TonnesForcePerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromTonnesForcePerSquareMillimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a TonnesForcePerSquareMeter
     *
     * @param value The unit as TonnesForcePerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromTonnesForcePerSquareMeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a MetersOfHead
     *
     * @param value The unit as MetersOfHead to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMetersOfHead(value: number): Pressure;
    /**
     * Create a new Pressure instance from a TonnesForcePerSquareCentimeter
     *
     * @param value The unit as TonnesForcePerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromTonnesForcePerSquareCentimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a FeetOfHead
     *
     * @param value The unit as FeetOfHead to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromFeetOfHead(value: number): Pressure;
    /**
     * Create a new Pressure instance from a MillimetersOfMercury
     *
     * @param value The unit as MillimetersOfMercury to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMillimetersOfMercury(value: number): Pressure;
    /**
     * Create a new Pressure instance from a InchesOfMercury
     *
     * @param value The unit as InchesOfMercury to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromInchesOfMercury(value: number): Pressure;
    /**
     * Create a new Pressure instance from a DynesPerSquareCentimeter
     *
     * @param value The unit as DynesPerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromDynesPerSquareCentimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a PoundsPerInchSecondSquared
     *
     * @param value The unit as PoundsPerInchSecondSquared to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromPoundsPerInchSecondSquared(value: number): Pressure;
    /**
     * Create a new Pressure instance from a InchesOfWaterColumn
     *
     * @param value The unit as InchesOfWaterColumn to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromInchesOfWaterColumn(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Micropascals
     *
     * @param value The unit as Micropascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMicropascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Decapascals
     *
     * @param value The unit as Decapascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromDecapascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Hectopascals
     *
     * @param value The unit as Hectopascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromHectopascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Kilopascals
     *
     * @param value The unit as Kilopascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilopascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Megapascals
     *
     * @param value The unit as Megapascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMegapascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Gigapascals
     *
     * @param value The unit as Gigapascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromGigapascals(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Microbars
     *
     * @param value The unit as Microbars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMicrobars(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Centibars
     *
     * @param value The unit as Centibars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromCentibars(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Decibars
     *
     * @param value The unit as Decibars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromDecibars(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Kilobars
     *
     * @param value The unit as Kilobars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilobars(value: number): Pressure;
    /**
     * Create a new Pressure instance from a Megabars
     *
     * @param value The unit as Megabars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMegabars(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilonewtonsPerSquareMeter
     *
     * @param value The unit as KilonewtonsPerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilonewtonsPerSquareMeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a MeganewtonsPerSquareMeter
     *
     * @param value The unit as MeganewtonsPerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromMeganewtonsPerSquareMeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilonewtonsPerSquareCentimeter
     *
     * @param value The unit as KilonewtonsPerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilonewtonsPerSquareCentimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilonewtonsPerSquareMillimeter
     *
     * @param value The unit as KilonewtonsPerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilonewtonsPerSquareMillimeter(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilopoundsForcePerSquareInch
     *
     * @param value The unit as KilopoundsForcePerSquareInch to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilopoundsForcePerSquareInch(value: number): Pressure;
    /**
     * Create a new Pressure instance from a KilopoundsForcePerSquareFoot
     *
     * @param value The unit as KilopoundsForcePerSquareFoot to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    static FromKilopoundsForcePerSquareFoot(value: number): Pressure;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Pressure to string.
     * Note! the default format for Pressure is Pascals.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Pressure.
     * @returns The string format of the Pressure.
     */
    toString(toUnit?: PressureUnits): string;
    /**
     * Check if the given Pressure are equals to the current Pressure.
     * @param pressure The other Pressure.
     * @returns True if the given Pressure are equal to the current Pressure.
     */
    equals(pressure: Pressure): boolean;
    /**
     * Compare the given Pressure against the current Pressure.
     * @param pressure The other Pressure.
     * @returns 0 if they are equal, -1 if the current Pressure is less then other, 1 if the current Pressure is greater then other.
     */
    compareTo(pressure: Pressure): number;
    /**
     * Add the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    add(pressure: Pressure): Pressure;
    /**
     * Subtract the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    subtract(pressure: Pressure): Pressure;
    /**
     * Multiply the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    multiply(pressure: Pressure): Pressure;
    /**
     * Divide the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    divide(pressure: Pressure): Pressure;
    /**
     * Modulo the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    modulo(pressure: Pressure): Pressure;
    /**
     * Pow the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    pow(pressure: Pressure): Pressure;
}
//# sourceMappingURL=pressure.g.d.ts.map