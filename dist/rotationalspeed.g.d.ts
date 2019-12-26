export declare enum RotationalSpeedUnits {
    RadiansPerSecond = 0,
    DegreesPerSecond = 1,
    DegreesPerMinute = 2,
    RevolutionsPerSecond = 3,
    RevolutionsPerMinute = 4,
    NanoradianPerSecond = 5,
    MicroradianPerSecond = 6,
    CentiradianPerSecond = 7,
    DeciradianPerSecond = 8,
    NanodegreePerSecond = 9,
    MicrodegreePerSecond = 10
}
export declare class RotationalSpeed {
    private value;
    private radianspersecondLazy;
    private degreespersecondLazy;
    private degreesperminuteLazy;
    private revolutionspersecondLazy;
    private revolutionsperminuteLazy;
    private nanoradianpersecondLazy;
    private microradianpersecondLazy;
    private centiradianpersecondLazy;
    private deciradianpersecondLazy;
    private nanodegreepersecondLazy;
    private microdegreepersecondLazy;
    constructor(value: number, fromUnit: RotationalSpeedUnits);
    get RadiansPerSecond(): number;
    get DegreesPerSecond(): number;
    get DegreesPerMinute(): number;
    get RevolutionsPerSecond(): number;
    get RevolutionsPerMinute(): number;
    get NanoradianPerSecond(): number;
    get MicroradianPerSecond(): number;
    get CentiradianPerSecond(): number;
    get DeciradianPerSecond(): number;
    get NanodegreePerSecond(): number;
    get MicrodegreePerSecond(): number;
    static FromRadiansPerSecond(value: number): RotationalSpeed;
    static FromDegreesPerSecond(value: number): RotationalSpeed;
    static FromDegreesPerMinute(value: number): RotationalSpeed;
    static FromRevolutionsPerSecond(value: number): RotationalSpeed;
    static FromRevolutionsPerMinute(value: number): RotationalSpeed;
    static FromNanoradianPerSecond(value: number): RotationalSpeed;
    static FromMicroradianPerSecond(value: number): RotationalSpeed;
    static FromCentiradianPerSecond(value: number): RotationalSpeed;
    static FromDeciradianPerSecond(value: number): RotationalSpeed;
    static FromNanodegreePerSecond(value: number): RotationalSpeed;
    static FromMicrodegreePerSecond(value: number): RotationalSpeed;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RotationalSpeedUnits): string;
}
//# sourceMappingURL=rotationalspeed.g.d.ts.map