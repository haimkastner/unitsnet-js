export declare enum RotationalSpeedUnits {
    RadiansPerSecond = 0,
    DegreesPerSecond = 1,
    DegreesPerMinute = 2,
    RevolutionsPerSecond = 3,
    RevolutionsPerMinute = 4,
    NanoradiansPerSecond = 5,
    MicroradiansPerSecond = 6,
    CentiradiansPerSecond = 7,
    DeciradiansPerSecond = 8,
    NanodegreesPerSecond = 9,
    MicrodegreesPerSecond = 10
}
export declare class RotationalSpeed {
    private value;
    private radianspersecondLazy;
    private degreespersecondLazy;
    private degreesperminuteLazy;
    private revolutionspersecondLazy;
    private revolutionsperminuteLazy;
    private nanoradianspersecondLazy;
    private microradianspersecondLazy;
    private centiradianspersecondLazy;
    private deciradianspersecondLazy;
    private nanodegreespersecondLazy;
    private microdegreespersecondLazy;
    constructor(value: number, fromUnit: RotationalSpeedUnits);
    get RadiansPerSecond(): number;
    get DegreesPerSecond(): number;
    get DegreesPerMinute(): number;
    get RevolutionsPerSecond(): number;
    get RevolutionsPerMinute(): number;
    get NanoradiansPerSecond(): number;
    get MicroradiansPerSecond(): number;
    get CentiradiansPerSecond(): number;
    get DeciradiansPerSecond(): number;
    get NanodegreesPerSecond(): number;
    get MicrodegreesPerSecond(): number;
    static FromRadiansPerSecond(value: number): RotationalSpeed;
    static FromDegreesPerSecond(value: number): RotationalSpeed;
    static FromDegreesPerMinute(value: number): RotationalSpeed;
    static FromRevolutionsPerSecond(value: number): RotationalSpeed;
    static FromRevolutionsPerMinute(value: number): RotationalSpeed;
    static FromNanoradiansPerSecond(value: number): RotationalSpeed;
    static FromMicroradiansPerSecond(value: number): RotationalSpeed;
    static FromCentiradiansPerSecond(value: number): RotationalSpeed;
    static FromDeciradiansPerSecond(value: number): RotationalSpeed;
    static FromNanodegreesPerSecond(value: number): RotationalSpeed;
    static FromMicrodegreesPerSecond(value: number): RotationalSpeed;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RotationalSpeedUnits): string;
}
//# sourceMappingURL=rotationalspeed.g.d.ts.map