export declare enum RotationalStiffnessPerLengthUnits {
    NewtonMetersPerRadianPerMeter = 0,
    KilonewtonMeterPerRadianPerMeter = 1,
    MeganewtonMeterPerRadianPerMeter = 2
}
export declare class RotationalStiffnessPerLength {
    private value;
    private newtonmetersperradianpermeterLazy;
    private kilonewtonmeterperradianpermeterLazy;
    private meganewtonmeterperradianpermeterLazy;
    constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits);
    get NewtonMetersPerRadianPerMeter(): number;
    get KilonewtonMeterPerRadianPerMeter(): number;
    get MeganewtonMeterPerRadianPerMeter(): number;
    static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    static FromKilonewtonMeterPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    static FromMeganewtonMeterPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: RotationalStiffnessPerLengthUnits): string;
}
//# sourceMappingURL=rotationalstiffnessperlength.g.d.ts.map