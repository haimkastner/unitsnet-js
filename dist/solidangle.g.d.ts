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
     */
    constructor(value: number, fromUnit: SolidAngleUnits);
    /**
     * The base value of SolidAngle is Steradian.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=solidangle.g.d.ts.map