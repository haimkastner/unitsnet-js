export declare enum AccelerationUnits {
    MetersPerSecondSquared = 0,
    InchesPerSecondSquared = 1,
    FeetPerSecondSquared = 2,
    KnotsPerSecond = 3,
    KnotsPerMinute = 4,
    KnotsPerHour = 5,
    StandardGravity = 6,
    NanometerPerSecondSquared = 7,
    MicrometerPerSecondSquared = 8,
    CentimeterPerSecondSquared = 9,
    DecimeterPerSecondSquared = 10,
    KilometerPerSecondSquared = 11
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
    private nanometerpersecondsquaredLazy;
    private micrometerpersecondsquaredLazy;
    private centimeterpersecondsquaredLazy;
    private decimeterpersecondsquaredLazy;
    private kilometerpersecondsquaredLazy;
    constructor(value: number, fromUnit: AccelerationUnits);
    get MetersPerSecondSquared(): number;
    get InchesPerSecondSquared(): number;
    get FeetPerSecondSquared(): number;
    get KnotsPerSecond(): number;
    get KnotsPerMinute(): number;
    get KnotsPerHour(): number;
    get StandardGravity(): number;
    get NanometerPerSecondSquared(): number;
    get MicrometerPerSecondSquared(): number;
    get CentimeterPerSecondSquared(): number;
    get DecimeterPerSecondSquared(): number;
    get KilometerPerSecondSquared(): number;
    static FromMetersPerSecondSquared(value: number): Acceleration;
    static FromInchesPerSecondSquared(value: number): Acceleration;
    static FromFeetPerSecondSquared(value: number): Acceleration;
    static FromKnotsPerSecond(value: number): Acceleration;
    static FromKnotsPerMinute(value: number): Acceleration;
    static FromKnotsPerHour(value: number): Acceleration;
    static FromStandardGravity(value: number): Acceleration;
    static FromNanometerPerSecondSquared(value: number): Acceleration;
    static FromMicrometerPerSecondSquared(value: number): Acceleration;
    static FromCentimeterPerSecondSquared(value: number): Acceleration;
    static FromDecimeterPerSecondSquared(value: number): Acceleration;
    static FromKilometerPerSecondSquared(value: number): Acceleration;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: AccelerationUnits): string;
}
//# sourceMappingURL=acceleration.g.d.ts.map