/** KinematicViscosityUnits enumeration */
export declare enum KinematicViscosityUnits {
    /** */
    SquareMetersPerSecond = 0,
    /** */
    Stokes = 1,
    /** */
    Nanostokes = 2,
    /** */
    Microstokes = 3,
    /** */
    Centistokes = 4,
    /** */
    Decistokes = 5,
    /** */
    Kilostokes = 6
}
/** The viscosity of a fluid is a measure of its resistance to gradual deformation by shear stress or tensile stress. */
export declare class KinematicViscosity {
    private value;
    private squaremeterspersecondLazy;
    private stokesLazy;
    private nanostokesLazy;
    private microstokesLazy;
    private centistokesLazy;
    private decistokesLazy;
    private kilostokesLazy;
    /**
     * Create a new KinematicViscosity.
     * @param value The value.
     * @param fromUnit The ‘KinematicViscosity’ unit to create from.
     */
    constructor(value: number, fromUnit: KinematicViscosityUnits);
    /**
     * The base value of KinematicViscosity is SquareMeterPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get SquareMetersPerSecond(): number;
    /** */
    get Stokes(): number;
    /** */
    get Nanostokes(): number;
    /** */
    get Microstokes(): number;
    /** */
    get Centistokes(): number;
    /** */
    get Decistokes(): number;
    /** */
    get Kilostokes(): number;
    /**
     * Create a new KinematicViscosity instance from a SquareMetersPerSecond
     *
     * @param value The unit as SquareMetersPerSecond to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromSquareMetersPerSecond(value: number): KinematicViscosity;
    /**
     * Create a new KinematicViscosity instance from a Stokes
     *
     * @param value The unit as Stokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromStokes(value: number): KinematicViscosity;
    /**
     * Create a new KinematicViscosity instance from a Nanostokes
     *
     * @param value The unit as Nanostokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromNanostokes(value: number): KinematicViscosity;
    /**
     * Create a new KinematicViscosity instance from a Microstokes
     *
     * @param value The unit as Microstokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromMicrostokes(value: number): KinematicViscosity;
    /**
     * Create a new KinematicViscosity instance from a Centistokes
     *
     * @param value The unit as Centistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromCentistokes(value: number): KinematicViscosity;
    /**
     * Create a new KinematicViscosity instance from a Decistokes
     *
     * @param value The unit as Decistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromDecistokes(value: number): KinematicViscosity;
    /**
     * Create a new KinematicViscosity instance from a Kilostokes
     *
     * @param value The unit as Kilostokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromKilostokes(value: number): KinematicViscosity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the KinematicViscosity to string.
     * Note! the default format for KinematicViscosity is SquareMetersPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the KinematicViscosity.
     * @returns The string format of the KinematicViscosity.
     */
    toString(toUnit?: KinematicViscosityUnits): string;
}
//# sourceMappingURL=kinematicviscosity.g.d.ts.map