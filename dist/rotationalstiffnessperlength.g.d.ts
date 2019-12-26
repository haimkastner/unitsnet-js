export declare enum RotationalStiffnessPerLengthUnits {
    NewtonMetersPerRadianPerMeter = 0,
    KilonewtonMetersPerRadianPerMeter = 1,
    MeganewtonMetersPerRadianPerMeter = 2
}
export declare class RotationalStiffnessPerLength {
    private value;
    private newtonmetersperradianpermeterLazy;
    private kilonewtonmetersperradianpermeterLazy;
    private meganewtonmetersperradianpermeterLazy;
    constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits);
    get NewtonMetersPerRadianPerMeter(): number;
    get KilonewtonMetersPerRadianPerMeter(): number;
    get MeganewtonMetersPerRadianPerMeter(): number;
    static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    static FromKilonewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    static FromMeganewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RotationalStiffnessPerLengthUnits): string;
}
//# sourceMappingURL=rotationalstiffnessperlength.g.d.ts.map