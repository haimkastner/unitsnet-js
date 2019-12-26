export declare enum RotationalStiffnessUnits {
    NewtonMetersPerRadian = 0,
    KilonewtonMeterPerRadian = 1,
    MeganewtonMeterPerRadian = 2
}
export declare class RotationalStiffness {
    private value;
    private newtonmetersperradianLazy;
    private kilonewtonmeterperradianLazy;
    private meganewtonmeterperradianLazy;
    constructor(value: number, fromUnit: RotationalStiffnessUnits);
    get NewtonMetersPerRadian(): number;
    get KilonewtonMeterPerRadian(): number;
    get MeganewtonMeterPerRadian(): number;
    static FromNewtonMetersPerRadian(value: number): RotationalStiffness;
    static FromKilonewtonMeterPerRadian(value: number): RotationalStiffness;
    static FromMeganewtonMeterPerRadian(value: number): RotationalStiffness;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RotationalStiffnessUnits): string;
}
//# sourceMappingURL=rotationalstiffness.g.d.ts.map