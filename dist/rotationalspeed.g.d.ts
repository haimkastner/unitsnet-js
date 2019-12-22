export declare enum RotationalSpeedUnits {
    RadiansPerSecond = 0,
    DegreesPerSecond = 1,
    DegreesPerMinute = 2,
    RevolutionsPerSecond = 3,
    RevolutionsPerMinute = 4,
    Nanoradianspersecond = 5,
    Microradianspersecond = 6,
    Centiradianspersecond = 7,
    Deciradianspersecond = 8,
    Nanodegreespersecond = 9,
    Microdegreespersecond = 10
}
export declare class RotationalSpeed {
    private value;
    constructor(value: number, fromUnit: RotationalSpeedUnits);
    get RadiansPerSecond(): number;
    get DegreesPerSecond(): number;
    get DegreesPerMinute(): number;
    get RevolutionsPerSecond(): number;
    get RevolutionsPerMinute(): number;
    get Nanoradianspersecond(): number;
    get Microradianspersecond(): number;
    get Centiradianspersecond(): number;
    get Deciradianspersecond(): number;
    get Nanodegreespersecond(): number;
    get Microdegreespersecond(): number;
    static FromRadiansPerSecond(value: number): RotationalSpeed;
    static FromDegreesPerSecond(value: number): RotationalSpeed;
    static FromDegreesPerMinute(value: number): RotationalSpeed;
    static FromRevolutionsPerSecond(value: number): RotationalSpeed;
    static FromRevolutionsPerMinute(value: number): RotationalSpeed;
    static FromNanoradianspersecond(value: number): RotationalSpeed;
    static FromMicroradianspersecond(value: number): RotationalSpeed;
    static FromCentiradianspersecond(value: number): RotationalSpeed;
    static FromDeciradianspersecond(value: number): RotationalSpeed;
    static FromNanodegreespersecond(value: number): RotationalSpeed;
    static FromMicrodegreespersecond(value: number): RotationalSpeed;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=rotationalspeed.g.d.ts.map