export declare enum AccelerationUnits {
    MetersPerSecondSquared = 0,
    InchesPerSecondSquared = 1,
    FeetPerSecondSquared = 2,
    KnotsPerSecond = 3,
    KnotsPerMinute = 4,
    KnotsPerHour = 5,
    StandardGravity = 6,
    NanometersPerSecondSquared = 7,
    MicrometersPerSecondSquared = 8,
    CentimetersPerSecondSquared = 9,
    DecimetersPerSecondSquared = 10,
    KilometersPerSecondSquared = 11
}
export declare class Acceleration {
    private value;
    private meterspersecondsquaredLazy;
    private inchespersecondsquaredLazy;
    private feetpersecondsquaredLazy;
    private knotspersecondLazy;
    private knotsperminuteLazy;
    private knotsperhourLazy;
    private standardgravityLazy;
    private nanometerspersecondsquaredLazy;
    private micrometerspersecondsquaredLazy;
    private centimeterspersecondsquaredLazy;
    private decimeterspersecondsquaredLazy;
    private kilometerspersecondsquaredLazy;
    constructor(value: number, fromUnit: AccelerationUnits);
    get MetersPerSecondSquared(): number;
    get InchesPerSecondSquared(): number;
    get FeetPerSecondSquared(): number;
    get KnotsPerSecond(): number;
    get KnotsPerMinute(): number;
    get KnotsPerHour(): number;
    get StandardGravity(): number;
    get NanometersPerSecondSquared(): number;
    get MicrometersPerSecondSquared(): number;
    get CentimetersPerSecondSquared(): number;
    get DecimetersPerSecondSquared(): number;
    get KilometersPerSecondSquared(): number;
    static FromMetersPerSecondSquared(value: number): Acceleration;
    static FromInchesPerSecondSquared(value: number): Acceleration;
    static FromFeetPerSecondSquared(value: number): Acceleration;
    static FromKnotsPerSecond(value: number): Acceleration;
    static FromKnotsPerMinute(value: number): Acceleration;
    static FromKnotsPerHour(value: number): Acceleration;
    static FromStandardGravity(value: number): Acceleration;
    static FromNanometersPerSecondSquared(value: number): Acceleration;
    static FromMicrometersPerSecondSquared(value: number): Acceleration;
    static FromCentimetersPerSecondSquared(value: number): Acceleration;
    static FromDecimetersPerSecondSquared(value: number): Acceleration;
    static FromKilometersPerSecondSquared(value: number): Acceleration;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: AccelerationUnits): string;
}
//# sourceMappingURL=acceleration.g.d.ts.map