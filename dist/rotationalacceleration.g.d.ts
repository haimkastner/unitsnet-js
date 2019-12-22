export declare enum RotationalAccelerationUnits {
    RadiansPerSecondSquared = 0,
    DegreesPerSecondSquared = 1,
    RevolutionsPerMinutePerSecond = 2,
    RevolutionsPerSecondSquared = 3
}
export declare class RotationalAcceleration {
    private value;
    constructor(value: number, fromUnit: RotationalAccelerationUnits);
    get RadiansPerSecondSquared(): number;
    get DegreesPerSecondSquared(): number;
    get RevolutionsPerMinutePerSecond(): number;
    get RevolutionsPerSecondSquared(): number;
    static FromRadiansPerSecondSquared(value: number): RotationalAcceleration;
    static FromDegreesPerSecondSquared(value: number): RotationalAcceleration;
    static FromRevolutionsPerMinutePerSecond(value: number): RotationalAcceleration;
    static FromRevolutionsPerSecondSquared(value: number): RotationalAcceleration;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=rotationalacceleration.g.d.ts.map