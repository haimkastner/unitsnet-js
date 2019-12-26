export declare enum VolumeUnits {
    Liters = 0,
    CubicMeters = 1,
    CubicKilometers = 2,
    CubicHectometers = 3,
    CubicDecimeters = 4,
    CubicCentimeters = 5,
    CubicMillimeters = 6,
    CubicMicrometers = 7,
    CubicMiles = 8,
    CubicYards = 9,
    CubicFeet = 10,
    CubicInches = 11,
    ImperialGallons = 12,
    ImperialOunces = 13,
    UsGallons = 14,
    UsOunces = 15,
    UsTablespoons = 16,
    AuTablespoons = 17,
    UkTablespoons = 18,
    MetricTeaspoons = 19,
    UsTeaspoons = 20,
    MetricCups = 21,
    UsCustomaryCups = 22,
    UsLegalCups = 23,
    OilBarrels = 24,
    UsBeerBarrels = 25,
    ImperialBeerBarrels = 26,
    UsQuarts = 27,
    UsPints = 28,
    AcreFeet = 29,
    ImperialPints = 30,
    Microliter = 31,
    Centiliter = 32,
    Deciliter = 33,
    Hectoliter = 34,
    Kiloliter = 35,
    Megaliter = 36,
    HectocubicMeter = 37,
    KilocubicMeter = 38,
    HectocubicFoot = 39,
    KilocubicFoot = 40,
    MegacubicFoot = 41,
    KiloimperialGallon = 42,
    MegaimperialGallon = 43,
    KilousGallon = 44,
    MegausGallon = 45
}
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
    private microliterLazy;
    private centiliterLazy;
    private deciliterLazy;
    private hectoliterLazy;
    private kiloliterLazy;
    private megaliterLazy;
    private hectocubicmeterLazy;
    private kilocubicmeterLazy;
    private hectocubicfootLazy;
    private kilocubicfootLazy;
    private megacubicfootLazy;
    private kiloimperialgallonLazy;
    private megaimperialgallonLazy;
    private kilousgallonLazy;
    private megausgallonLazy;
    constructor(value: number, fromUnit: VolumeUnits);
    get Liters(): number;
    get CubicMeters(): number;
    get CubicKilometers(): number;
    get CubicHectometers(): number;
    get CubicDecimeters(): number;
    get CubicCentimeters(): number;
    get CubicMillimeters(): number;
    get CubicMicrometers(): number;
    get CubicMiles(): number;
    get CubicYards(): number;
    get CubicFeet(): number;
    get CubicInches(): number;
    get ImperialGallons(): number;
    get ImperialOunces(): number;
    get UsGallons(): number;
    get UsOunces(): number;
    get UsTablespoons(): number;
    get AuTablespoons(): number;
    get UkTablespoons(): number;
    get MetricTeaspoons(): number;
    get UsTeaspoons(): number;
    get MetricCups(): number;
    get UsCustomaryCups(): number;
    get UsLegalCups(): number;
    get OilBarrels(): number;
    get UsBeerBarrels(): number;
    get ImperialBeerBarrels(): number;
    get UsQuarts(): number;
    get UsPints(): number;
    get AcreFeet(): number;
    get ImperialPints(): number;
    get Microliter(): number;
    get Centiliter(): number;
    get Deciliter(): number;
    get Hectoliter(): number;
    get Kiloliter(): number;
    get Megaliter(): number;
    get HectocubicMeter(): number;
    get KilocubicMeter(): number;
    get HectocubicFoot(): number;
    get KilocubicFoot(): number;
    get MegacubicFoot(): number;
    get KiloimperialGallon(): number;
    get MegaimperialGallon(): number;
    get KilousGallon(): number;
    get MegausGallon(): number;
    static FromLiters(value: number): Volume;
    static FromCubicMeters(value: number): Volume;
    static FromCubicKilometers(value: number): Volume;
    static FromCubicHectometers(value: number): Volume;
    static FromCubicDecimeters(value: number): Volume;
    static FromCubicCentimeters(value: number): Volume;
    static FromCubicMillimeters(value: number): Volume;
    static FromCubicMicrometers(value: number): Volume;
    static FromCubicMiles(value: number): Volume;
    static FromCubicYards(value: number): Volume;
    static FromCubicFeet(value: number): Volume;
    static FromCubicInches(value: number): Volume;
    static FromImperialGallons(value: number): Volume;
    static FromImperialOunces(value: number): Volume;
    static FromUsGallons(value: number): Volume;
    static FromUsOunces(value: number): Volume;
    static FromUsTablespoons(value: number): Volume;
    static FromAuTablespoons(value: number): Volume;
    static FromUkTablespoons(value: number): Volume;
    static FromMetricTeaspoons(value: number): Volume;
    static FromUsTeaspoons(value: number): Volume;
    static FromMetricCups(value: number): Volume;
    static FromUsCustomaryCups(value: number): Volume;
    static FromUsLegalCups(value: number): Volume;
    static FromOilBarrels(value: number): Volume;
    static FromUsBeerBarrels(value: number): Volume;
    static FromImperialBeerBarrels(value: number): Volume;
    static FromUsQuarts(value: number): Volume;
    static FromUsPints(value: number): Volume;
    static FromAcreFeet(value: number): Volume;
    static FromImperialPints(value: number): Volume;
    static FromMicroliter(value: number): Volume;
    static FromCentiliter(value: number): Volume;
    static FromDeciliter(value: number): Volume;
    static FromHectoliter(value: number): Volume;
    static FromKiloliter(value: number): Volume;
    static FromMegaliter(value: number): Volume;
    static FromHectocubicMeter(value: number): Volume;
    static FromKilocubicMeter(value: number): Volume;
    static FromHectocubicFoot(value: number): Volume;
    static FromKilocubicFoot(value: number): Volume;
    static FromMegacubicFoot(value: number): Volume;
    static FromKiloimperialGallon(value: number): Volume;
    static FromMegaimperialGallon(value: number): Volume;
    static FromKilousGallon(value: number): Volume;
    static FromMegausGallon(value: number): Volume;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: VolumeUnits): string;
}
//# sourceMappingURL=volume.g.d.ts.map