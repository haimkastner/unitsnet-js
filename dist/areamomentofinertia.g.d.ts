/** AreaMomentOfInertiaUnits enumeration */
export declare enum AreaMomentOfInertiaUnits {
    /** */
    MetersToTheFourth = 0,
    /** */
    DecimetersToTheFourth = 1,
    /** */
    CentimetersToTheFourth = 2,
    /** */
    MillimetersToTheFourth = 3,
    /** */
    FeetToTheFourth = 4,
    /** */
    InchesToTheFourth = 5
}
/** A geometric property of an area that reflects how its points are distributed with regard to an axis. */
export declare class AreaMomentOfInertia {
    private value;
    private meterstothefourthLazy;
    private decimeterstothefourthLazy;
    private centimeterstothefourthLazy;
    private millimeterstothefourthLazy;
    private feettothefourthLazy;
    private inchestothefourthLazy;
    /**
     * Create a new AreaMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘AreaMomentOfInertia’ unit to create from.
     * The default unit is MetersToTheFourth
     */
    constructor(value: number, fromUnit?: AreaMomentOfInertiaUnits);
    /**
     * The base value of AreaMomentOfInertia is MetersToTheFourth.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get MetersToTheFourth(): number;
    /** */
    get DecimetersToTheFourth(): number;
    /** */
    get CentimetersToTheFourth(): number;
    /** */
    get MillimetersToTheFourth(): number;
    /** */
    get FeetToTheFourth(): number;
    /** */
    get InchesToTheFourth(): number;
    /**
     * Create a new AreaMomentOfInertia instance from a MetersToTheFourth
     *
     * @param value The unit as MetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromMetersToTheFourth(value: number): AreaMomentOfInertia;
    /**
     * Create a new AreaMomentOfInertia instance from a DecimetersToTheFourth
     *
     * @param value The unit as DecimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromDecimetersToTheFourth(value: number): AreaMomentOfInertia;
    /**
     * Create a new AreaMomentOfInertia instance from a CentimetersToTheFourth
     *
     * @param value The unit as CentimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromCentimetersToTheFourth(value: number): AreaMomentOfInertia;
    /**
     * Create a new AreaMomentOfInertia instance from a MillimetersToTheFourth
     *
     * @param value The unit as MillimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromMillimetersToTheFourth(value: number): AreaMomentOfInertia;
    /**
     * Create a new AreaMomentOfInertia instance from a FeetToTheFourth
     *
     * @param value The unit as FeetToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromFeetToTheFourth(value: number): AreaMomentOfInertia;
    /**
     * Create a new AreaMomentOfInertia instance from a InchesToTheFourth
     *
     * @param value The unit as InchesToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromInchesToTheFourth(value: number): AreaMomentOfInertia;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the AreaMomentOfInertia to string.
     * Note! the default format for AreaMomentOfInertia is MetersToTheFourth.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AreaMomentOfInertia.
     * @returns The string format of the AreaMomentOfInertia.
     */
    toString(toUnit?: AreaMomentOfInertiaUnits): string;
    /**
     * Check if the given AreaMomentOfInertia are equals to the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns True if the given AreaMomentOfInertia are equal to the current AreaMomentOfInertia.
     */
    equals(areaMomentOfInertia: AreaMomentOfInertia): boolean;
    /**
     * Compare the given AreaMomentOfInertia against the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current AreaMomentOfInertia is less then other, 1 if the current AreaMomentOfInertia is greater then other.
     */
    compareTo(areaMomentOfInertia: AreaMomentOfInertia): number;
    /**
     * Add the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    add(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia;
    /**
     * Subtract the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    subtract(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia;
    /**
     * Multiply the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    multiply(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia;
    /**
     * Divide the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    divide(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia;
    /**
     * Modulo the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    modulo(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia;
    /**
     * Pow the given AreaMomentOfInertia with the current AreaMomentOfInertia.
     * @param areaMomentOfInertia The other AreaMomentOfInertia.
     * @returns A new AreaMomentOfInertia instance with the results.
     */
    pow(areaMomentOfInertia: AreaMomentOfInertia): AreaMomentOfInertia;
}
//# sourceMappingURL=areamomentofinertia.g.d.ts.map