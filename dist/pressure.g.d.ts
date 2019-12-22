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
    Micropascals = 23,
    Hectopascals = 24,
    Kilopascals = 25,
    Megapascals = 26,
    Gigapascals = 27,
    Microbars = 28,
    Centibars = 29,
    Decibars = 30,
    Kilobars = 31,
    Megabars = 32,
    Kilonewtonspersquaremeter = 33,
    Meganewtonspersquaremeter = 34,
    Kilonewtonspersquarecentimeter = 35,
    Kilonewtonspersquaremillimeter = 36,
    Kilopoundsforcepersquareinch = 37,
    Kilopoundsforcepersquarefoot = 38
}
export declare class Pressure {
    private value;
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
    get Micropascals(): number;
    get Hectopascals(): number;
    get Kilopascals(): number;
    get Megapascals(): number;
    get Gigapascals(): number;
    get Microbars(): number;
    get Centibars(): number;
    get Decibars(): number;
    get Kilobars(): number;
    get Megabars(): number;
    get Kilonewtonspersquaremeter(): number;
    get Meganewtonspersquaremeter(): number;
    get Kilonewtonspersquarecentimeter(): number;
    get Kilonewtonspersquaremillimeter(): number;
    get Kilopoundsforcepersquareinch(): number;
    get Kilopoundsforcepersquarefoot(): number;
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
    static FromMicropascals(value: number): Pressure;
    static FromHectopascals(value: number): Pressure;
    static FromKilopascals(value: number): Pressure;
    static FromMegapascals(value: number): Pressure;
    static FromGigapascals(value: number): Pressure;
    static FromMicrobars(value: number): Pressure;
    static FromCentibars(value: number): Pressure;
    static FromDecibars(value: number): Pressure;
    static FromKilobars(value: number): Pressure;
    static FromMegabars(value: number): Pressure;
    static FromKilonewtonspersquaremeter(value: number): Pressure;
    static FromMeganewtonspersquaremeter(value: number): Pressure;
    static FromKilonewtonspersquarecentimeter(value: number): Pressure;
    static FromKilonewtonspersquaremillimeter(value: number): Pressure;
    static FromKilopoundsforcepersquareinch(value: number): Pressure;
    static FromKilopoundsforcepersquarefoot(value: number): Pressure;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=pressure.g.d.ts.map