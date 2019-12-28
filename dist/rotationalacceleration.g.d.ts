/** RotationalAccelerationUnits enumeration */
export declare enum RotationalAccelerationUnits {
    /** */
    RadiansPerSecondSquared = 0,
    /** */
    DegreesPerSecondSquared = 1,
    /** */
    RevolutionsPerMinutePerSecond = 2,
    /** */
    RevolutionsPerSecondSquared = 3
}
/** Angular acceleration is the rate of change of rotational speed. */
export declare class RotationalAcceleration {
    private value;
    private radianspersecondsquaredLazy;
    private degreespersecondsquaredLazy;
    private revolutionsperminutepersecondLazy;
    private revolutionspersecondsquaredLazy;
    /**
     * Create a new RotationalAcceleration.
     * @param value The value.
     * @param fromUnit The ‘RotationalAcceleration’ unit to create from.
     * The default unit is RadiansPerSecondSquared
     */
    constructor(value: number, fromUnit?: RotationalAccelerationUnits);
    /**
     * The base value of RotationalAcceleration is RadiansPerSecondSquared.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get RadiansPerSecondSquared(): number;
    /** */
    get DegreesPerSecondSquared(): number;
    /** */
    get RevolutionsPerMinutePerSecond(): number;
    /** */
    get RevolutionsPerSecondSquared(): number;
    /**
     * Create a new RotationalAcceleration instance from a RadiansPerSecondSquared
     *
     * @param value The unit as RadiansPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromRadiansPerSecondSquared(value: number): RotationalAcceleration;
    /**
     * Create a new RotationalAcceleration instance from a DegreesPerSecondSquared
     *
     * @param value The unit as DegreesPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromDegreesPerSecondSquared(value: number): RotationalAcceleration;
    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerMinutePerSecond
     *
     * @param value The unit as RevolutionsPerMinutePerSecond to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromRevolutionsPerMinutePerSecond(value: number): RotationalAcceleration;
    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerSecondSquared
     *
     * @param value The unit as RevolutionsPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromRevolutionsPerSecondSquared(value: number): RotationalAcceleration;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the RotationalAcceleration to string.
     * Note! the default format for RotationalAcceleration is RadiansPerSecondSquared.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalAcceleration.
     * @returns The string format of the RotationalAcceleration.
     */
    toString(toUnit?: RotationalAccelerationUnits): string;
    /**
     * Check if the given RotationalAcceleration are equals to the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns True if the given RotationalAcceleration are equal to the current RotationalAcceleration.
     */
    equals(rotationalAcceleration: RotationalAcceleration): boolean;
    /**
     * Compare the given RotationalAcceleration against the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns 0 if they are equal, -1 if the current RotationalAcceleration is less then other, 1 if the current RotationalAcceleration is greater then other.
     */
    compareTo(rotationalAcceleration: RotationalAcceleration): number;
    /**
     * Add the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    add(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration;
    /**
     * Subtract the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    subtract(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration;
    /**
     * Multiply the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    multiply(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration;
    /**
     * Divide the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    divide(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration;
    /**
     * Modulo the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    modulo(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration;
    /**
     * Pow the given RotationalAcceleration with the current RotationalAcceleration.
     * @param rotationalAcceleration The other RotationalAcceleration.
     * @returns A new RotationalAcceleration instance with the results.
     */
    pow(rotationalAcceleration: RotationalAcceleration): RotationalAcceleration;
}
//# sourceMappingURL=rotationalacceleration.g.d.ts.map