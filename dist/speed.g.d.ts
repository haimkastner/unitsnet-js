export declare enum SpeedUnits {
    MetersPerSecond = 0,
    MetersPerMinutes = 1,
    MetersPerHour = 2,
    FeetPerSecond = 3,
    FeetPerMinute = 4,
    FeetPerHour = 5,
    UsSurveyFeetPerSecond = 6,
    UsSurveyFeetPerMinute = 7,
    UsSurveyFeetPerHour = 8,
    InchesPerSecond = 9,
    InchesPerMinute = 10,
    InchesPerHour = 11,
    YardsPerSecond = 12,
    YardsPerMinute = 13,
    YardsPerHour = 14,
    Knots = 15,
    MilesPerHour = 16,
    NanometersPerSecond = 17,
    MicrometersPerSecond = 18,
    CentimetersPerSecond = 19,
    DecimetersPerSecond = 20,
    KilometersPerSecond = 21,
    NanometersPerMinutes = 22,
    MicrometersPerMinutes = 23,
    CentimetersPerMinutes = 24,
    DecimetersPerMinutes = 25,
    KilometersPerMinutes = 26,
    CentimetersPerHour = 27,
    KilometersPerHour = 28
}
export declare class Speed {
    private value;
    private meterspersecondLazy;
    private metersperminutesLazy;
    private metersperhourLazy;
    private feetpersecondLazy;
    private feetperminuteLazy;
    private feetperhourLazy;
    private ussurveyfeetpersecondLazy;
    private ussurveyfeetperminuteLazy;
    private ussurveyfeetperhourLazy;
    private inchespersecondLazy;
    private inchesperminuteLazy;
    private inchesperhourLazy;
    private yardspersecondLazy;
    private yardsperminuteLazy;
    private yardsperhourLazy;
    private knotsLazy;
    private milesperhourLazy;
    private nanometerspersecondLazy;
    private micrometerspersecondLazy;
    private centimeterspersecondLazy;
    private decimeterspersecondLazy;
    private kilometerspersecondLazy;
    private nanometersperminutesLazy;
    private micrometersperminutesLazy;
    private centimetersperminutesLazy;
    private decimetersperminutesLazy;
    private kilometersperminutesLazy;
    private centimetersperhourLazy;
    private kilometersperhourLazy;
    constructor(value: number, fromUnit: SpeedUnits);
    get MetersPerSecond(): number;
    get MetersPerMinutes(): number;
    get MetersPerHour(): number;
    get FeetPerSecond(): number;
    get FeetPerMinute(): number;
    get FeetPerHour(): number;
    get UsSurveyFeetPerSecond(): number;
    get UsSurveyFeetPerMinute(): number;
    get UsSurveyFeetPerHour(): number;
    get InchesPerSecond(): number;
    get InchesPerMinute(): number;
    get InchesPerHour(): number;
    get YardsPerSecond(): number;
    get YardsPerMinute(): number;
    get YardsPerHour(): number;
    get Knots(): number;
    get MilesPerHour(): number;
    get NanometersPerSecond(): number;
    get MicrometersPerSecond(): number;
    get CentimetersPerSecond(): number;
    get DecimetersPerSecond(): number;
    get KilometersPerSecond(): number;
    get NanometersPerMinutes(): number;
    get MicrometersPerMinutes(): number;
    get CentimetersPerMinutes(): number;
    get DecimetersPerMinutes(): number;
    get KilometersPerMinutes(): number;
    get CentimetersPerHour(): number;
    get KilometersPerHour(): number;
    static FromMetersPerSecond(value: number): Speed;
    static FromMetersPerMinutes(value: number): Speed;
    static FromMetersPerHour(value: number): Speed;
    static FromFeetPerSecond(value: number): Speed;
    static FromFeetPerMinute(value: number): Speed;
    static FromFeetPerHour(value: number): Speed;
    static FromUsSurveyFeetPerSecond(value: number): Speed;
    static FromUsSurveyFeetPerMinute(value: number): Speed;
    static FromUsSurveyFeetPerHour(value: number): Speed;
    static FromInchesPerSecond(value: number): Speed;
    static FromInchesPerMinute(value: number): Speed;
    static FromInchesPerHour(value: number): Speed;
    static FromYardsPerSecond(value: number): Speed;
    static FromYardsPerMinute(value: number): Speed;
    static FromYardsPerHour(value: number): Speed;
    static FromKnots(value: number): Speed;
    static FromMilesPerHour(value: number): Speed;
    static FromNanometersPerSecond(value: number): Speed;
    static FromMicrometersPerSecond(value: number): Speed;
    static FromCentimetersPerSecond(value: number): Speed;
    static FromDecimetersPerSecond(value: number): Speed;
    static FromKilometersPerSecond(value: number): Speed;
    static FromNanometersPerMinutes(value: number): Speed;
    static FromMicrometersPerMinutes(value: number): Speed;
    static FromCentimetersPerMinutes(value: number): Speed;
    static FromDecimetersPerMinutes(value: number): Speed;
    static FromKilometersPerMinutes(value: number): Speed;
    static FromCentimetersPerHour(value: number): Speed;
    static FromKilometersPerHour(value: number): Speed;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpeedUnits): string;
}
//# sourceMappingURL=speed.g.d.ts.map