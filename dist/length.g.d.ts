export declare enum LengthUnits {
    Meters = 0,
    Miles = 1,
    Yards = 2,
    Feet = 3,
    UsSurveyFeet = 4,
    Inches = 5,
    Mils = 6,
    NauticalMiles = 7,
    Fathoms = 8,
    Shackles = 9,
    Microinches = 10,
    PrinterPoints = 11,
    DtpPoints = 12,
    PrinterPicas = 13,
    DtpPicas = 14,
    Twips = 15,
    Hands = 16,
    AstronomicalUnits = 17,
    Parsecs = 18,
    LightYears = 19,
    SolarRadiuses = 20,
    Nanometers = 21,
    Micrometers = 22,
    Centimeters = 23,
    Decimeters = 24,
    Hectometers = 25,
    Kilometers = 26,
    Kiloparsecs = 27,
    Megaparsecs = 28,
    KilolightYears = 29,
    MegalightYears = 30
}
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
    constructor(value: number, fromUnit: LengthUnits);
    get Meters(): number;
    get Miles(): number;
    get Yards(): number;
    get Feet(): number;
    get UsSurveyFeet(): number;
    get Inches(): number;
    get Mils(): number;
    get NauticalMiles(): number;
    get Fathoms(): number;
    get Shackles(): number;
    get Microinches(): number;
    get PrinterPoints(): number;
    get DtpPoints(): number;
    get PrinterPicas(): number;
    get DtpPicas(): number;
    get Twips(): number;
    get Hands(): number;
    get AstronomicalUnits(): number;
    get Parsecs(): number;
    get LightYears(): number;
    get SolarRadiuses(): number;
    get Nanometers(): number;
    get Micrometers(): number;
    get Centimeters(): number;
    get Decimeters(): number;
    get Hectometers(): number;
    get Kilometers(): number;
    get Kiloparsecs(): number;
    get Megaparsecs(): number;
    get KilolightYears(): number;
    get MegalightYears(): number;
    static FromMeters(value: number): Length;
    static FromMiles(value: number): Length;
    static FromYards(value: number): Length;
    static FromFeet(value: number): Length;
    static FromUsSurveyFeet(value: number): Length;
    static FromInches(value: number): Length;
    static FromMils(value: number): Length;
    static FromNauticalMiles(value: number): Length;
    static FromFathoms(value: number): Length;
    static FromShackles(value: number): Length;
    static FromMicroinches(value: number): Length;
    static FromPrinterPoints(value: number): Length;
    static FromDtpPoints(value: number): Length;
    static FromPrinterPicas(value: number): Length;
    static FromDtpPicas(value: number): Length;
    static FromTwips(value: number): Length;
    static FromHands(value: number): Length;
    static FromAstronomicalUnits(value: number): Length;
    static FromParsecs(value: number): Length;
    static FromLightYears(value: number): Length;
    static FromSolarRadiuses(value: number): Length;
    static FromNanometers(value: number): Length;
    static FromMicrometers(value: number): Length;
    static FromCentimeters(value: number): Length;
    static FromDecimeters(value: number): Length;
    static FromHectometers(value: number): Length;
    static FromKilometers(value: number): Length;
    static FromKiloparsecs(value: number): Length;
    static FromMegaparsecs(value: number): Length;
    static FromKilolightYears(value: number): Length;
    static FromMegalightYears(value: number): Length;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: LengthUnits): string;
}
//# sourceMappingURL=length.g.d.ts.map