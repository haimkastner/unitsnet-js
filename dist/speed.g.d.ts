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
    NanometerPerSecond = 17,
    MicrometerPerSecond = 18,
    CentimeterPerSecond = 19,
    DecimeterPerSecond = 20,
    KilometerPerSecond = 21,
    NanometerPerMinute = 22,
    MicrometerPerMinute = 23,
    CentimeterPerMinute = 24,
    DecimeterPerMinute = 25,
    KilometerPerMinute = 26,
    CentimeterPerHour = 27,
    KilometerPerHour = 28
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
    private nanometerpersecondLazy;
    private micrometerpersecondLazy;
    private centimeterpersecondLazy;
    private decimeterpersecondLazy;
    private kilometerpersecondLazy;
    private nanometerperminuteLazy;
    private micrometerperminuteLazy;
    private centimeterperminuteLazy;
    private decimeterperminuteLazy;
    private kilometerperminuteLazy;
    private centimeterperhourLazy;
    private kilometerperhourLazy;
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
    get NanometerPerSecond(): number;
    get MicrometerPerSecond(): number;
    get CentimeterPerSecond(): number;
    get DecimeterPerSecond(): number;
    get KilometerPerSecond(): number;
    get NanometerPerMinute(): number;
    get MicrometerPerMinute(): number;
    get CentimeterPerMinute(): number;
    get DecimeterPerMinute(): number;
    get KilometerPerMinute(): number;
    get CentimeterPerHour(): number;
    get KilometerPerHour(): number;
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
    static FromNanometerPerSecond(value: number): Speed;
    static FromMicrometerPerSecond(value: number): Speed;
    static FromCentimeterPerSecond(value: number): Speed;
    static FromDecimeterPerSecond(value: number): Speed;
    static FromKilometerPerSecond(value: number): Speed;
    static FromNanometerPerMinute(value: number): Speed;
    static FromMicrometerPerMinute(value: number): Speed;
    static FromCentimeterPerMinute(value: number): Speed;
    static FromDecimeterPerMinute(value: number): Speed;
    static FromKilometerPerMinute(value: number): Speed;
    static FromCentimeterPerHour(value: number): Speed;
    static FromKilometerPerHour(value: number): Speed;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: SpeedUnits): string;
}
//# sourceMappingURL=speed.g.d.ts.map