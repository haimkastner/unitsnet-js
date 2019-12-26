/** RotationalStiffnessPerLengthUnits enumeration */
export declare enum RotationalStiffnessPerLengthUnits {
    /** */
    NewtonMetersPerRadianPerMeter = 0,
    /** */
    KilonewtonMetersPerRadianPerMeter = 1,
    /** */
    MeganewtonMetersPerRadianPerMeter = 2
}
/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
export declare class RotationalStiffnessPerLength {
    private value;
    private newtonmetersperradianpermeterLazy;
    private kilonewtonmetersperradianpermeterLazy;
    private meganewtonmetersperradianpermeterLazy;
    /**
     * Create a new RotationalStiffnessPerLength.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffnessPerLength’ unit to create from.
     */
    constructor(value: number, fromUnit: RotationalStiffnessPerLengthUnits);
    /**
     * The base value of RotationalStiffnessPerLength is NewtonMeterPerRadianPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonMetersPerRadianPerMeter(): number;
    /** */
    get KilonewtonMetersPerRadianPerMeter(): number;
    /** */
    get MeganewtonMetersPerRadianPerMeter(): number;
    /**
     * Create a new RotationalStiffnessPerLength instance from a NewtonMetersPerRadianPerMeter
     *
     * @param value The unit as NewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    static FromNewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    /**
     * Create a new RotationalStiffnessPerLength instance from a KilonewtonMetersPerRadianPerMeter
     *
     * @param value The unit as KilonewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    static FromKilonewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    /**
     * Create a new RotationalStiffnessPerLength instance from a MeganewtonMetersPerRadianPerMeter
     *
     * @param value The unit as MeganewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    static FromMeganewtonMetersPerRadianPerMeter(value: number): RotationalStiffnessPerLength;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the RotationalStiffnessPerLength to string.
     * Note! the default format for RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalStiffnessPerLength.
     * @returns The string format of the RotationalStiffnessPerLength.
     */
    toString(toUnit?: RotationalStiffnessPerLengthUnits): string;
}
//# sourceMappingURL=rotationalstiffnessperlength.g.d.ts.map