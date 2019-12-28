/** RotationalSpeedUnits enumeration */
export declare enum RotationalSpeedUnits {
    /** */
    RadiansPerSecond = 0,
    /** */
    DegreesPerSecond = 1,
    /** */
    DegreesPerMinute = 2,
    /** */
    RevolutionsPerSecond = 3,
    /** */
    RevolutionsPerMinute = 4,
    /** */
    NanoradiansPerSecond = 5,
    /** */
    MicroradiansPerSecond = 6,
    /** */
    CentiradiansPerSecond = 7,
    /** */
    DeciradiansPerSecond = 8,
    /** */
    NanodegreesPerSecond = 9,
    /** */
    MicrodegreesPerSecond = 10
}
/** Rotational speed (sometimes called speed of revolution) is the number of complete rotations, revolutions, cycles, or turns per time unit. Rotational speed is a cyclic frequency, measured in radians per second or in hertz in the SI System by scientists, or in revolutions per minute (rpm or min-1) or revolutions per second in everyday life. The symbol for rotational speed is ω (the Greek lowercase letter "omega"). */
export declare class RotationalSpeed {
    private value;
    private radianspersecondLazy;
    private degreespersecondLazy;
    private degreesperminuteLazy;
    private revolutionspersecondLazy;
    private revolutionsperminuteLazy;
    private nanoradianspersecondLazy;
    private microradianspersecondLazy;
    private centiradianspersecondLazy;
    private deciradianspersecondLazy;
    private nanodegreespersecondLazy;
    private microdegreespersecondLazy;
    /**
     * Create a new RotationalSpeed.
     * @param value The value.
     * @param fromUnit The ‘RotationalSpeed’ unit to create from.
     * The default unit is RadiansPerSecond
     */
    constructor(value: number, fromUnit?: RotationalSpeedUnits);
    /**
     * The base value of RotationalSpeed is RadiansPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get RadiansPerSecond(): number;
    /** */
    get DegreesPerSecond(): number;
    /** */
    get DegreesPerMinute(): number;
    /** */
    get RevolutionsPerSecond(): number;
    /** */
    get RevolutionsPerMinute(): number;
    /** */
    get NanoradiansPerSecond(): number;
    /** */
    get MicroradiansPerSecond(): number;
    /** */
    get CentiradiansPerSecond(): number;
    /** */
    get DeciradiansPerSecond(): number;
    /** */
    get NanodegreesPerSecond(): number;
    /** */
    get MicrodegreesPerSecond(): number;
    /**
     * Create a new RotationalSpeed instance from a RadiansPerSecond
     *
     * @param value The unit as RadiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromRadiansPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a DegreesPerSecond
     *
     * @param value The unit as DegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromDegreesPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a DegreesPerMinute
     *
     * @param value The unit as DegreesPerMinute to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromDegreesPerMinute(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a RevolutionsPerSecond
     *
     * @param value The unit as RevolutionsPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromRevolutionsPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a RevolutionsPerMinute
     *
     * @param value The unit as RevolutionsPerMinute to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromRevolutionsPerMinute(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a NanoradiansPerSecond
     *
     * @param value The unit as NanoradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromNanoradiansPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a MicroradiansPerSecond
     *
     * @param value The unit as MicroradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromMicroradiansPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a CentiradiansPerSecond
     *
     * @param value The unit as CentiradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromCentiradiansPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a DeciradiansPerSecond
     *
     * @param value The unit as DeciradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromDeciradiansPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a NanodegreesPerSecond
     *
     * @param value The unit as NanodegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromNanodegreesPerSecond(value: number): RotationalSpeed;
    /**
     * Create a new RotationalSpeed instance from a MicrodegreesPerSecond
     *
     * @param value The unit as MicrodegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromMicrodegreesPerSecond(value: number): RotationalSpeed;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the RotationalSpeed to string.
     * Note! the default format for RotationalSpeed is RadiansPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalSpeed.
     * @returns The string format of the RotationalSpeed.
     */
    toString(toUnit?: RotationalSpeedUnits): string;
    /**
     * Check if the given RotationalSpeed are equals to the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns True if the given RotationalSpeed are equal to the current RotationalSpeed.
     */
    equals(rotationalSpeed: RotationalSpeed): boolean;
    /**
     * Compare the given RotationalSpeed against the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns 0 if they are equal, -1 if the current RotationalSpeed is less then other, 1 if the current RotationalSpeed is greater then other.
     */
    compareTo(rotationalSpeed: RotationalSpeed): number;
    /**
     * Add the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    add(rotationalSpeed: RotationalSpeed): RotationalSpeed;
    /**
     * Subtract the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    subtract(rotationalSpeed: RotationalSpeed): RotationalSpeed;
    /**
     * Multiply the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    multiply(rotationalSpeed: RotationalSpeed): RotationalSpeed;
    /**
     * Divide the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    divide(rotationalSpeed: RotationalSpeed): RotationalSpeed;
    /**
     * Modulo the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    modulo(rotationalSpeed: RotationalSpeed): RotationalSpeed;
    /**
     * Pow the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    pow(rotationalSpeed: RotationalSpeed): RotationalSpeed;
}
//# sourceMappingURL=rotationalspeed.g.d.ts.map