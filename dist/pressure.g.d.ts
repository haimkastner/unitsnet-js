export declare enum PressureUnits {
    Pascals = 0,
    Atmospheres = 1,
    Bars = 2,
    KilogramsForcePerSquareMeter = 3,
    KilogramsForcePerSquareCentimeter = 4,
    KilogramsForcePerSquareMillimeter = 5,
    NewtonsPerSquareMeter = 6,
    NewtonsPerSquareCentimeter = 7,
    NewtonsPerSquareMillimeter = 8,
    TechnicalAtmospheres = 9,
    Torrs = 10,
    PoundsForcePerSquareInch = 11,
    PoundsForcePerSquareFoot = 12,
    TonnesForcePerSquareMillimeter = 13,
    TonnesForcePerSquareMeter = 14,
    MetersOfHead = 15,
    TonnesForcePerSquareCentimeter = 16,
    FeetOfHead = 17,
    MillimetersOfMercury = 18,
    InchesOfMercury = 19,
    DynesPerSquareCentimeter = 20,
    PoundsPerInchSecondSquared = 21,
    InchesOfWaterColumn = 22,
    Micropascal = 23,
    Decapascal = 24,
    Hectopascal = 25,
    Kilopascal = 26,
    Megapascal = 27,
    Gigapascal = 28,
    Microbar = 29,
    Centibar = 30,
    Decibar = 31,
    Kilobar = 32,
    Megabar = 33,
    KilonewtonPerSquareMeter = 34,
    MeganewtonPerSquareMeter = 35,
    KilonewtonPerSquareCentimeter = 36,
    KilonewtonPerSquareMillimeter = 37,
    KilopoundForcePerSquareInch = 38,
    KilopoundForcePerSquareFoot = 39
}
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
    private micropascalLazy;
    private decapascalLazy;
    private hectopascalLazy;
    private kilopascalLazy;
    private megapascalLazy;
    private gigapascalLazy;
    private microbarLazy;
    private centibarLazy;
    private decibarLazy;
    private kilobarLazy;
    private megabarLazy;
    private kilonewtonpersquaremeterLazy;
    private meganewtonpersquaremeterLazy;
    private kilonewtonpersquarecentimeterLazy;
    private kilonewtonpersquaremillimeterLazy;
    private kilopoundforcepersquareinchLazy;
    private kilopoundforcepersquarefootLazy;
    constructor(value: number, fromUnit: PressureUnits);
    get Pascals(): number;
    get Atmospheres(): number;
    get Bars(): number;
    get KilogramsForcePerSquareMeter(): number;
    get KilogramsForcePerSquareCentimeter(): number;
    get KilogramsForcePerSquareMillimeter(): number;
    get NewtonsPerSquareMeter(): number;
    get NewtonsPerSquareCentimeter(): number;
    get NewtonsPerSquareMillimeter(): number;
    get TechnicalAtmospheres(): number;
    get Torrs(): number;
    get PoundsForcePerSquareInch(): number;
    get PoundsForcePerSquareFoot(): number;
    get TonnesForcePerSquareMillimeter(): number;
    get TonnesForcePerSquareMeter(): number;
    get MetersOfHead(): number;
    get TonnesForcePerSquareCentimeter(): number;
    get FeetOfHead(): number;
    get MillimetersOfMercury(): number;
    get InchesOfMercury(): number;
    get DynesPerSquareCentimeter(): number;
    get PoundsPerInchSecondSquared(): number;
    get InchesOfWaterColumn(): number;
    get Micropascal(): number;
    get Decapascal(): number;
    get Hectopascal(): number;
    get Kilopascal(): number;
    get Megapascal(): number;
    get Gigapascal(): number;
    get Microbar(): number;
    get Centibar(): number;
    get Decibar(): number;
    get Kilobar(): number;
    get Megabar(): number;
    get KilonewtonPerSquareMeter(): number;
    get MeganewtonPerSquareMeter(): number;
    get KilonewtonPerSquareCentimeter(): number;
    get KilonewtonPerSquareMillimeter(): number;
    get KilopoundForcePerSquareInch(): number;
    get KilopoundForcePerSquareFoot(): number;
    static FromPascals(value: number): Pressure;
    static FromAtmospheres(value: number): Pressure;
    static FromBars(value: number): Pressure;
    static FromKilogramsForcePerSquareMeter(value: number): Pressure;
    static FromKilogramsForcePerSquareCentimeter(value: number): Pressure;
    static FromKilogramsForcePerSquareMillimeter(value: number): Pressure;
    static FromNewtonsPerSquareMeter(value: number): Pressure;
    static FromNewtonsPerSquareCentimeter(value: number): Pressure;
    static FromNewtonsPerSquareMillimeter(value: number): Pressure;
    static FromTechnicalAtmospheres(value: number): Pressure;
    static FromTorrs(value: number): Pressure;
    static FromPoundsForcePerSquareInch(value: number): Pressure;
    static FromPoundsForcePerSquareFoot(value: number): Pressure;
    static FromTonnesForcePerSquareMillimeter(value: number): Pressure;
    static FromTonnesForcePerSquareMeter(value: number): Pressure;
    static FromMetersOfHead(value: number): Pressure;
    static FromTonnesForcePerSquareCentimeter(value: number): Pressure;
    static FromFeetOfHead(value: number): Pressure;
    static FromMillimetersOfMercury(value: number): Pressure;
    static FromInchesOfMercury(value: number): Pressure;
    static FromDynesPerSquareCentimeter(value: number): Pressure;
    static FromPoundsPerInchSecondSquared(value: number): Pressure;
    static FromInchesOfWaterColumn(value: number): Pressure;
    static FromMicropascal(value: number): Pressure;
    static FromDecapascal(value: number): Pressure;
    static FromHectopascal(value: number): Pressure;
    static FromKilopascal(value: number): Pressure;
    static FromMegapascal(value: number): Pressure;
    static FromGigapascal(value: number): Pressure;
    static FromMicrobar(value: number): Pressure;
    static FromCentibar(value: number): Pressure;
    static FromDecibar(value: number): Pressure;
    static FromKilobar(value: number): Pressure;
    static FromMegabar(value: number): Pressure;
    static FromKilonewtonPerSquareMeter(value: number): Pressure;
    static FromMeganewtonPerSquareMeter(value: number): Pressure;
    static FromKilonewtonPerSquareCentimeter(value: number): Pressure;
    static FromKilonewtonPerSquareMillimeter(value: number): Pressure;
    static FromKilopoundForcePerSquareInch(value: number): Pressure;
    static FromKilopoundForcePerSquareFoot(value: number): Pressure;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PressureUnits): string;
}
//# sourceMappingURL=pressure.g.d.ts.map