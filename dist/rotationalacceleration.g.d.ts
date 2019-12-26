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
     */
    constructor(value: number, fromUnit: RotationalAccelerationUnits);
    /**
     * The base value of RotationalAcceleration is RadianPerSecondSquared.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=rotationalacceleration.g.d.ts.map