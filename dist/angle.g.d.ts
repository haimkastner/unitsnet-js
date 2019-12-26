/** AngleUnits enumeration */
export declare enum AngleUnits {
    /** */
    Radians = 0,
    /** */
    Degrees = 1,
    /** */
    Arcminutes = 2,
    /** */
    Arcseconds = 3,
    /** */
    Gradians = 4,
    /** */
    Revolutions = 5,
    /** */
    Nanoradians = 6,
    /** */
    Microradians = 7,
    /** */
    Centiradians = 8,
    /** */
    Deciradians = 9,
    /** */
    Nanodegrees = 10,
    /** */
    Microdegrees = 11
}
/** In geometry, an angle is the figure formed by two rays, called the sides of the angle, sharing a common endpoint, called the vertex of the angle. */
export declare class Angle {
    private value;
    private radiansLazy;
    private degreesLazy;
    private arcminutesLazy;
    private arcsecondsLazy;
    private gradiansLazy;
    private revolutionsLazy;
    private nanoradiansLazy;
    private microradiansLazy;
    private centiradiansLazy;
    private deciradiansLazy;
    private nanodegreesLazy;
    private microdegreesLazy;
    /**
     * Create a new Angle.
     * @param value The value.
     * @param fromUnit The ‘Angle’ unit to create from.
     */
    constructor(value: number, fromUnit: AngleUnits);
    /**
     * The base value of Angle is Degree.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Radians(): number;
    /** */
    get Degrees(): number;
    /** */
    get Arcminutes(): number;
    /** */
    get Arcseconds(): number;
    /** */
    get Gradians(): number;
    /** */
    get Revolutions(): number;
    /** */
    get Nanoradians(): number;
    /** */
    get Microradians(): number;
    /** */
    get Centiradians(): number;
    /** */
    get Deciradians(): number;
    /** */
    get Nanodegrees(): number;
    /** */
    get Microdegrees(): number;
    /**
     * Create a new Angle instance from a Radians
     *
     * @param value The unit as Radians to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromRadians(value: number): Angle;
    /**
     * Create a new Angle instance from a Degrees
     *
     * @param value The unit as Degrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromDegrees(value: number): Angle;
    /**
     * Create a new Angle instance from a Arcminutes
     *
     * @param value The unit as Arcminutes to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromArcminutes(value: number): Angle;
    /**
     * Create a new Angle instance from a Arcseconds
     *
     * @param value The unit as Arcseconds to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromArcseconds(value: number): Angle;
    /**
     * Create a new Angle instance from a Gradians
     *
     * @param value The unit as Gradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromGradians(value: number): Angle;
    /**
     * Create a new Angle instance from a Revolutions
     *
     * @param value The unit as Revolutions to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromRevolutions(value: number): Angle;
    /**
     * Create a new Angle instance from a Nanoradians
     *
     * @param value The unit as Nanoradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromNanoradians(value: number): Angle;
    /**
     * Create a new Angle instance from a Microradians
     *
     * @param value The unit as Microradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromMicroradians(value: number): Angle;
    /**
     * Create a new Angle instance from a Centiradians
     *
     * @param value The unit as Centiradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromCentiradians(value: number): Angle;
    /**
     * Create a new Angle instance from a Deciradians
     *
     * @param value The unit as Deciradians to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromDeciradians(value: number): Angle;
    /**
     * Create a new Angle instance from a Nanodegrees
     *
     * @param value The unit as Nanodegrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromNanodegrees(value: number): Angle;
    /**
     * Create a new Angle instance from a Microdegrees
     *
     * @param value The unit as Microdegrees to create a new Angle from.
     * @returns The new Angle instance.
     */
    static FromMicrodegrees(value: number): Angle;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Angle to string.
     * Note! the default format for Angle is Degrees.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Angle.
     * @returns The string format of the Angle.
     */
    toString(toUnit?: AngleUnits): string;
}
//# sourceMappingURL=angle.g.d.ts.map