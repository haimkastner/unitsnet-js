/** SolidAngleUnits enumeration */
export declare enum SolidAngleUnits {
    /** */
    Steradians = 0
}
/** In geometry, a solid angle is the two-dimensional angle in three-dimensional space that an object subtends at a point. */
export declare class SolidAngle {
    private value;
    private steradiansLazy;
    /**
     * Create a new SolidAngle.
     * @param value The value.
     * @param fromUnit The ‘SolidAngle’ unit to create from.
     * The default unit is Steradians
     */
    constructor(value: number, fromUnit?: SolidAngleUnits);
    /**
     * The base value of SolidAngle is Steradians.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Steradians(): number;
    /**
     * Create a new SolidAngle instance from a Steradians
     *
     * @param value The unit as Steradians to create a new SolidAngle from.
     * @returns The new SolidAngle instance.
     */
    static FromSteradians(value: number): SolidAngle;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the SolidAngle to string.
     * Note! the default format for SolidAngle is Steradians.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SolidAngle.
     * @returns The string format of the SolidAngle.
     */
    toString(toUnit?: SolidAngleUnits): string;
    /**
     * Check if the given SolidAngle are equals to the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns True if the given SolidAngle are equal to the current SolidAngle.
     */
    equals(solidAngle: SolidAngle): boolean;
    /**
     * Compare the given SolidAngle against the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns 0 if they are equal, -1 if the current SolidAngle is less then other, 1 if the current SolidAngle is greater then other.
     */
    compareTo(solidAngle: SolidAngle): number;
    /**
     * Add the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    add(solidAngle: SolidAngle): SolidAngle;
    /**
     * Subtract the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    subtract(solidAngle: SolidAngle): SolidAngle;
    /**
     * Multiply the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    multiply(solidAngle: SolidAngle): SolidAngle;
    /**
     * Divide the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    divide(solidAngle: SolidAngle): SolidAngle;
    /**
     * Modulo the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    modulo(solidAngle: SolidAngle): SolidAngle;
    /**
     * Pow the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    pow(solidAngle: SolidAngle): SolidAngle;
}
//# sourceMappingURL=solidangle.g.d.ts.map