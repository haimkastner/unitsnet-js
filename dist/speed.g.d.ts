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
    Nanometerspersecond = 17,
    Micrometerspersecond = 18,
    Centimeterspersecond = 19,
    Decimeterspersecond = 20,
    Kilometerspersecond = 21,
    Nanometersperminutes = 22,
    Micrometersperminutes = 23,
    Centimetersperminutes = 24,
    Decimetersperminutes = 25,
    Kilometersperminutes = 26,
    Centimetersperhour = 27,
    Kilometersperhour = 28
}
export declare class Speed {
    private value;
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
    get Nanometerspersecond(): number;
    get Micrometerspersecond(): number;
    get Centimeterspersecond(): number;
    get Decimeterspersecond(): number;
    get Kilometerspersecond(): number;
    get Nanometersperminutes(): number;
    get Micrometersperminutes(): number;
    get Centimetersperminutes(): number;
    get Decimetersperminutes(): number;
    get Kilometersperminutes(): number;
    get Centimetersperhour(): number;
    get Kilometersperhour(): number;
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
    static FromNanometerspersecond(value: number): Speed;
    static FromMicrometerspersecond(value: number): Speed;
    static FromCentimeterspersecond(value: number): Speed;
    static FromDecimeterspersecond(value: number): Speed;
    static FromKilometerspersecond(value: number): Speed;
    static FromNanometersperminutes(value: number): Speed;
    static FromMicrometersperminutes(value: number): Speed;
    static FromCentimetersperminutes(value: number): Speed;
    static FromDecimetersperminutes(value: number): Speed;
    static FromKilometersperminutes(value: number): Speed;
    static FromCentimetersperhour(value: number): Speed;
    static FromKilometersperhour(value: number): Speed;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=speed.g.d.ts.map