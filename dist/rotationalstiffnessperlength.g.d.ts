export declare enum RotationalStiffnessPerLengthUnits {
    NewtonMetersPerRadianPerMeter = 0,
    Kilonewtonmetersperradianpermeter = 1,
    Meganewtonmetersperradianpermeter = 2
}
export declare class RotationalStiffnessPerLength {
    private value;
    private newtonmetersperradianpermeterLazy;
    private kilonewtonmetersperradianpermeterLazy;
    private meganewtonmetersperradianpermeterLazy;
    constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits);
    get NewtonMetersPerRadianPerMeter(): number;
    get Kilonewtonmetersperradianpermeter(): number;
    get Meganewtonmetersperradianpermeter(): number;
    static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    static FromKilonewtonmetersperradianpermeter(value: number): RotationalStiffnessPerLength;
    static FromMeganewtonmetersperradianpermeter(value: number): RotationalStiffnessPerLength;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=rotationalstiffnessperlength.g.d.ts.map