export declare enum RotationalStiffnessUnits {
    NewtonMetersPerRadian = 0,
    Kilonewtonmetersperradian = 1,
    Meganewtonmetersperradian = 2
}
export declare class RotationalStiffness {
    private value;
    constructor(value: number, fromUnit: RotationalStiffnessUnits);
    get NewtonMetersPerRadian(): number;
    get Kilonewtonmetersperradian(): number;
    get Meganewtonmetersperradian(): number;
    static FromNewtonMetersPerRadian(value: number): RotationalStiffness;
    static FromKilonewtonmetersperradian(value: number): RotationalStiffness;
    static FromMeganewtonmetersperradian(value: number): RotationalStiffness;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=rotationalstiffness.g.d.ts.map