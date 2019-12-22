export declare enum AccelerationUnits {
    MetersPerSecondSquared = 0,
    InchesPerSecondSquared = 1,
    FeetPerSecondSquared = 2,
    KnotsPerSecond = 3,
    KnotsPerMinute = 4,
    KnotsPerHour = 5,
    StandardGravity = 6,
    Nanometerspersecondsquared = 7,
    Micrometerspersecondsquared = 8,
    Centimeterspersecondsquared = 9,
    Decimeterspersecondsquared = 10,
    Kilometerspersecondsquared = 11
}
export declare class Acceleration {
    private value;
    constructor(value: number, fromUnit: AccelerationUnits);
    get MetersPerSecondSquared(): number;
    get InchesPerSecondSquared(): number;
    get FeetPerSecondSquared(): number;
    get KnotsPerSecond(): number;
    get KnotsPerMinute(): number;
    get KnotsPerHour(): number;
    get StandardGravity(): number;
    get Nanometerspersecondsquared(): number;
    get Micrometerspersecondsquared(): number;
    get Centimeterspersecondsquared(): number;
    get Decimeterspersecondsquared(): number;
    get Kilometerspersecondsquared(): number;
    static FromMetersPerSecondSquared(value: number): Acceleration;
    static FromInchesPerSecondSquared(value: number): Acceleration;
    static FromFeetPerSecondSquared(value: number): Acceleration;
    static FromKnotsPerSecond(value: number): Acceleration;
    static FromKnotsPerMinute(value: number): Acceleration;
    static FromKnotsPerHour(value: number): Acceleration;
    static FromStandardGravity(value: number): Acceleration;
    static FromNanometerspersecondsquared(value: number): Acceleration;
    static FromMicrometerspersecondsquared(value: number): Acceleration;
    static FromCentimeterspersecondsquared(value: number): Acceleration;
    static FromDecimeterspersecondsquared(value: number): Acceleration;
    static FromKilometerspersecondsquared(value: number): Acceleration;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=acceleration.g.d.ts.map