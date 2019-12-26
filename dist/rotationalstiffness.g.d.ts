export declare enum RotationalStiffnessUnits {
    NewtonMetersPerRadian = 0,
    KilonewtonMetersPerRadian = 1,
    MeganewtonMetersPerRadian = 2
}
export declare class RotationalStiffness {
    private value;
    private newtonmetersperradianLazy;
    private kilonewtonmetersperradianLazy;
    private meganewtonmetersperradianLazy;
    constructor(value: number, fromUnit: RotationalStiffnessUnits);
    get NewtonMetersPerRadian(): number;
    get KilonewtonMetersPerRadian(): number;
    get MeganewtonMetersPerRadian(): number;
    static FromNewtonMetersPerRadian(value: number): RotationalStiffness;
    static FromKilonewtonMetersPerRadian(value: number): RotationalStiffness;
    static FromMeganewtonMetersPerRadian(value: number): RotationalStiffness;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RotationalStiffnessUnits): string;
}
//# sourceMappingURL=rotationalstiffness.g.d.ts.map