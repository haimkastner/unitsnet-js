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
     * The default unit is NewtonMetersPerRadianPerMeter
     */
    constructor(value: number, fromUnit?: RotationalStiffnessPerLengthUnits);
    /**
     * The base value of RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given RotationalStiffnessPerLength are equals to the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns True if the given RotationalStiffnessPerLength are equal to the current RotationalStiffnessPerLength.
     */
    equals(rotationalStiffnessPerLength: RotationalStiffnessPerLength): boolean;
    /**
     * Compare the given RotationalStiffnessPerLength against the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns 0 if they are equal, -1 if the current RotationalStiffnessPerLength is less then other, 1 if the current RotationalStiffnessPerLength is greater then other.
     */
    compareTo(rotationalStiffnessPerLength: RotationalStiffnessPerLength): number;
    /**
     * Add the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    add(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength;
    /**
     * Subtract the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    subtract(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength;
    /**
     * Multiply the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    multiply(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength;
    /**
     * Divide the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    divide(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength;
    /**
     * Modulo the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    modulo(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength;
    /**
     * Pow the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    pow(rotationalStiffnessPerLength: RotationalStiffnessPerLength): RotationalStiffnessPerLength;
}
//# sourceMappingURL=rotationalstiffnessperlength.g.d.ts.map