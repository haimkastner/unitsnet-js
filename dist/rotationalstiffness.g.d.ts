/** RotationalStiffnessUnits enumeration */
export declare enum RotationalStiffnessUnits {
    /** */
    NewtonMetersPerRadian = 0,
    /** */
    KilonewtonMetersPerRadian = 1,
    /** */
    MeganewtonMetersPerRadian = 2
}
/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
export declare class RotationalStiffness {
    private value;
    private newtonmetersperradianLazy;
    private kilonewtonmetersperradianLazy;
    private meganewtonmetersperradianLazy;
    /**
     * Create a new RotationalStiffness.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffness’ unit to create from.
     * The default unit is NewtonMetersPerRadian
     */
    constructor(value: number, fromUnit?: RotationalStiffnessUnits);
    /**
     * The base value of RotationalStiffness is NewtonMetersPerRadian.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonMetersPerRadian(): number;
    /** */
    get KilonewtonMetersPerRadian(): number;
    /** */
    get MeganewtonMetersPerRadian(): number;
    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerRadian
     *
     * @param value The unit as NewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    static FromNewtonMetersPerRadian(value: number): RotationalStiffness;
    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerRadian
     *
     * @param value The unit as KilonewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    static FromKilonewtonMetersPerRadian(value: number): RotationalStiffness;
    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerRadian
     *
     * @param value The unit as MeganewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    static FromMeganewtonMetersPerRadian(value: number): RotationalStiffness;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the RotationalStiffness to string.
     * Note! the default format for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalStiffness.
     * @returns The string format of the RotationalStiffness.
     */
    toString(toUnit?: RotationalStiffnessUnits): string;
    /**
     * Check if the given RotationalStiffness are equals to the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns True if the given RotationalStiffness are equal to the current RotationalStiffness.
     */
    equals(rotationalStiffness: RotationalStiffness): boolean;
    /**
     * Compare the given RotationalStiffness against the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns 0 if they are equal, -1 if the current RotationalStiffness is less then other, 1 if the current RotationalStiffness is greater then other.
     */
    compareTo(rotationalStiffness: RotationalStiffness): number;
    /**
     * Add the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    add(rotationalStiffness: RotationalStiffness): RotationalStiffness;
    /**
     * Subtract the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    subtract(rotationalStiffness: RotationalStiffness): RotationalStiffness;
    /**
     * Multiply the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    multiply(rotationalStiffness: RotationalStiffness): RotationalStiffness;
    /**
     * Divide the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    divide(rotationalStiffness: RotationalStiffness): RotationalStiffness;
    /**
     * Modulo the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    modulo(rotationalStiffness: RotationalStiffness): RotationalStiffness;
    /**
     * Pow the given RotationalStiffness with the current RotationalStiffness.
     * @param rotationalStiffness The other RotationalStiffness.
     * @returns A new RotationalStiffness instance with the results.
     */
    pow(rotationalStiffness: RotationalStiffness): RotationalStiffness;
}
//# sourceMappingURL=rotationalstiffness.g.d.ts.map