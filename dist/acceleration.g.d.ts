/** AccelerationUnits enumeration */
export declare enum AccelerationUnits {
    /** */
    MetersPerSecondSquared = 0,
    /** */
    InchesPerSecondSquared = 1,
    /** */
    FeetPerSecondSquared = 2,
    /** */
    KnotsPerSecond = 3,
    /** */
    KnotsPerMinute = 4,
    /** */
    KnotsPerHour = 5,
    /** */
    StandardGravity = 6,
    /** */
    NanometersPerSecondSquared = 7,
    /** */
    MicrometersPerSecondSquared = 8,
    /** */
    CentimetersPerSecondSquared = 9,
    /** */
    DecimetersPerSecondSquared = 10,
    /** */
    KilometersPerSecondSquared = 11
}
/** Acceleration, in physics, is the rate at which the velocity of an object changes over time. An object's acceleration is the net result of any and all forces acting on the object, as described by Newton's Second Law. The SI unit for acceleration is the Meter per second squared (m/s²). Accelerations are vector quantities (they have magnitude and direction) and add according to the parallelogram law. As a vector, the calculated net force is equal to the product of the object's mass (a scalar quantity) and the acceleration. */
export declare class Acceleration {
    private value;
    private meterspersecondsquaredLazy;
    private inchespersecondsquaredLazy;
    private feetpersecondsquaredLazy;
    private knotspersecondLazy;
    private knotsperminuteLazy;
    private knotsperhourLazy;
    private standardgravityLazy;
    private nanometerspersecondsquaredLazy;
    private micrometerspersecondsquaredLazy;
    private centimeterspersecondsquaredLazy;
    private decimeterspersecondsquaredLazy;
    private kilometerspersecondsquaredLazy;
    /**
     * Create a new Acceleration.
     * @param value The value.
     * @param fromUnit The ‘Acceleration’ unit to create from.
     * The default unit is MetersPerSecondSquared
     */
    constructor(value: number, fromUnit?: AccelerationUnits);
    /**
     * The base value of Acceleration is MetersPerSecondSquared.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get MetersPerSecondSquared(): number;
    /** */
    get InchesPerSecondSquared(): number;
    /** */
    get FeetPerSecondSquared(): number;
    /** */
    get KnotsPerSecond(): number;
    /** */
    get KnotsPerMinute(): number;
    /** */
    get KnotsPerHour(): number;
    /** */
    get StandardGravity(): number;
    /** */
    get NanometersPerSecondSquared(): number;
    /** */
    get MicrometersPerSecondSquared(): number;
    /** */
    get CentimetersPerSecondSquared(): number;
    /** */
    get DecimetersPerSecondSquared(): number;
    /** */
    get KilometersPerSecondSquared(): number;
    /**
     * Create a new Acceleration instance from a MetersPerSecondSquared
     *
     * @param value The unit as MetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromMetersPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a InchesPerSecondSquared
     *
     * @param value The unit as InchesPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromInchesPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a FeetPerSecondSquared
     *
     * @param value The unit as FeetPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromFeetPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a KnotsPerSecond
     *
     * @param value The unit as KnotsPerSecond to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromKnotsPerSecond(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a KnotsPerMinute
     *
     * @param value The unit as KnotsPerMinute to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromKnotsPerMinute(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a KnotsPerHour
     *
     * @param value The unit as KnotsPerHour to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromKnotsPerHour(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a StandardGravity
     *
     * @param value The unit as StandardGravity to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromStandardGravity(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a NanometersPerSecondSquared
     *
     * @param value The unit as NanometersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromNanometersPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a MicrometersPerSecondSquared
     *
     * @param value The unit as MicrometersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromMicrometersPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a CentimetersPerSecondSquared
     *
     * @param value The unit as CentimetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromCentimetersPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a DecimetersPerSecondSquared
     *
     * @param value The unit as DecimetersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromDecimetersPerSecondSquared(value: number): Acceleration;
    /**
     * Create a new Acceleration instance from a KilometersPerSecondSquared
     *
     * @param value The unit as KilometersPerSecondSquared to create a new Acceleration from.
     * @returns The new Acceleration instance.
     */
    static FromKilometersPerSecondSquared(value: number): Acceleration;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Acceleration to string.
     * Note! the default format for Acceleration is MetersPerSecondSquared.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Acceleration.
     * @returns The string format of the Acceleration.
     */
    toString(toUnit?: AccelerationUnits): string;
    /**
     * Check if the given Acceleration are equals to the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns True if the given Acceleration are equal to the current Acceleration.
     */
    equals(acceleration: Acceleration): boolean;
    /**
     * Compare the given Acceleration against the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns 0 if they are equal, -1 if the current Acceleration is less then other, 1 if the current Acceleration is greater then other.
     */
    compareTo(acceleration: Acceleration): number;
    /**
     * Add the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    add(acceleration: Acceleration): Acceleration;
    /**
     * Subtract the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    subtract(acceleration: Acceleration): Acceleration;
    /**
     * Multiply the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    multiply(acceleration: Acceleration): Acceleration;
    /**
     * Divide the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    divide(acceleration: Acceleration): Acceleration;
    /**
     * Modulo the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    modulo(acceleration: Acceleration): Acceleration;
    /**
     * Pow the given Acceleration with the current Acceleration.
     * @param acceleration The other Acceleration.
     * @returns A new Acceleration instance with the results.
     */
    pow(acceleration: Acceleration): Acceleration;
}
//# sourceMappingURL=acceleration.g.d.ts.map