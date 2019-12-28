/** TorqueUnits enumeration */
export declare enum TorqueUnits {
    /** */
    NewtonMillimeters = 0,
    /** */
    NewtonCentimeters = 1,
    /** */
    NewtonMeters = 2,
    /** */
    PoundForceInches = 3,
    /** */
    PoundForceFeet = 4,
    /** */
    KilogramForceMillimeters = 5,
    /** */
    KilogramForceCentimeters = 6,
    /** */
    KilogramForceMeters = 7,
    /** */
    TonneForceMillimeters = 8,
    /** */
    TonneForceCentimeters = 9,
    /** */
    TonneForceMeters = 10,
    /** */
    KilonewtonMillimeters = 11,
    /** */
    MeganewtonMillimeters = 12,
    /** */
    KilonewtonCentimeters = 13,
    /** */
    MeganewtonCentimeters = 14,
    /** */
    KilonewtonMeters = 15,
    /** */
    MeganewtonMeters = 16,
    /** */
    KilopoundForceInches = 17,
    /** */
    MegapoundForceInches = 18,
    /** */
    KilopoundForceFeet = 19,
    /** */
    MegapoundForceFeet = 20
}
/** Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis,[1] fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance and force, which tends to produce rotation. Loosely speaking, torque is a measure of the turning force on an object such as a bolt or a flywheel. For example, pushing or pulling the handle of a wrench connected to a nut or bolt produces a torque (turning force) that loosens or tightens the nut or bolt. */
export declare class Torque {
    private value;
    private newtonmillimetersLazy;
    private newtoncentimetersLazy;
    private newtonmetersLazy;
    private poundforceinchesLazy;
    private poundforcefeetLazy;
    private kilogramforcemillimetersLazy;
    private kilogramforcecentimetersLazy;
    private kilogramforcemetersLazy;
    private tonneforcemillimetersLazy;
    private tonneforcecentimetersLazy;
    private tonneforcemetersLazy;
    private kilonewtonmillimetersLazy;
    private meganewtonmillimetersLazy;
    private kilonewtoncentimetersLazy;
    private meganewtoncentimetersLazy;
    private kilonewtonmetersLazy;
    private meganewtonmetersLazy;
    private kilopoundforceinchesLazy;
    private megapoundforceinchesLazy;
    private kilopoundforcefeetLazy;
    private megapoundforcefeetLazy;
    /**
     * Create a new Torque.
     * @param value The value.
     * @param fromUnit The ‘Torque’ unit to create from.
     * The default unit is NewtonMeters
     */
    constructor(value: number, fromUnit?: TorqueUnits);
    /**
     * The base value of Torque is NewtonMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get NewtonMillimeters(): number;
    /** */
    get NewtonCentimeters(): number;
    /** */
    get NewtonMeters(): number;
    /** */
    get PoundForceInches(): number;
    /** */
    get PoundForceFeet(): number;
    /** */
    get KilogramForceMillimeters(): number;
    /** */
    get KilogramForceCentimeters(): number;
    /** */
    get KilogramForceMeters(): number;
    /** */
    get TonneForceMillimeters(): number;
    /** */
    get TonneForceCentimeters(): number;
    /** */
    get TonneForceMeters(): number;
    /** */
    get KilonewtonMillimeters(): number;
    /** */
    get MeganewtonMillimeters(): number;
    /** */
    get KilonewtonCentimeters(): number;
    /** */
    get MeganewtonCentimeters(): number;
    /** */
    get KilonewtonMeters(): number;
    /** */
    get MeganewtonMeters(): number;
    /** */
    get KilopoundForceInches(): number;
    /** */
    get MegapoundForceInches(): number;
    /** */
    get KilopoundForceFeet(): number;
    /** */
    get MegapoundForceFeet(): number;
    /**
     * Create a new Torque instance from a NewtonMillimeters
     *
     * @param value The unit as NewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromNewtonMillimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a NewtonCentimeters
     *
     * @param value The unit as NewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromNewtonCentimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a NewtonMeters
     *
     * @param value The unit as NewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromNewtonMeters(value: number): Torque;
    /**
     * Create a new Torque instance from a PoundForceInches
     *
     * @param value The unit as PoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromPoundForceInches(value: number): Torque;
    /**
     * Create a new Torque instance from a PoundForceFeet
     *
     * @param value The unit as PoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromPoundForceFeet(value: number): Torque;
    /**
     * Create a new Torque instance from a KilogramForceMillimeters
     *
     * @param value The unit as KilogramForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilogramForceMillimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a KilogramForceCentimeters
     *
     * @param value The unit as KilogramForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilogramForceCentimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a KilogramForceMeters
     *
     * @param value The unit as KilogramForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilogramForceMeters(value: number): Torque;
    /**
     * Create a new Torque instance from a TonneForceMillimeters
     *
     * @param value The unit as TonneForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromTonneForceMillimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a TonneForceCentimeters
     *
     * @param value The unit as TonneForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromTonneForceCentimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a TonneForceMeters
     *
     * @param value The unit as TonneForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromTonneForceMeters(value: number): Torque;
    /**
     * Create a new Torque instance from a KilonewtonMillimeters
     *
     * @param value The unit as KilonewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilonewtonMillimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a MeganewtonMillimeters
     *
     * @param value The unit as MeganewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMeganewtonMillimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a KilonewtonCentimeters
     *
     * @param value The unit as KilonewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilonewtonCentimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a MeganewtonCentimeters
     *
     * @param value The unit as MeganewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMeganewtonCentimeters(value: number): Torque;
    /**
     * Create a new Torque instance from a KilonewtonMeters
     *
     * @param value The unit as KilonewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilonewtonMeters(value: number): Torque;
    /**
     * Create a new Torque instance from a MeganewtonMeters
     *
     * @param value The unit as MeganewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMeganewtonMeters(value: number): Torque;
    /**
     * Create a new Torque instance from a KilopoundForceInches
     *
     * @param value The unit as KilopoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilopoundForceInches(value: number): Torque;
    /**
     * Create a new Torque instance from a MegapoundForceInches
     *
     * @param value The unit as MegapoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMegapoundForceInches(value: number): Torque;
    /**
     * Create a new Torque instance from a KilopoundForceFeet
     *
     * @param value The unit as KilopoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilopoundForceFeet(value: number): Torque;
    /**
     * Create a new Torque instance from a MegapoundForceFeet
     *
     * @param value The unit as MegapoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMegapoundForceFeet(value: number): Torque;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Torque to string.
     * Note! the default format for Torque is NewtonMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Torque.
     * @returns The string format of the Torque.
     */
    toString(toUnit?: TorqueUnits): string;
    /**
     * Check if the given Torque are equals to the current Torque.
     * @param torque The other Torque.
     * @returns True if the given Torque are equal to the current Torque.
     */
    equals(torque: Torque): boolean;
    /**
     * Compare the given Torque against the current Torque.
     * @param torque The other Torque.
     * @returns 0 if they are equal, -1 if the current Torque is less then other, 1 if the current Torque is greater then other.
     */
    compareTo(torque: Torque): number;
    /**
     * Add the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    add(torque: Torque): Torque;
    /**
     * Subtract the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    subtract(torque: Torque): Torque;
    /**
     * Multiply the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    multiply(torque: Torque): Torque;
    /**
     * Divide the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    divide(torque: Torque): Torque;
    /**
     * Modulo the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    modulo(torque: Torque): Torque;
    /**
     * Pow the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    pow(torque: Torque): Torque;
}
//# sourceMappingURL=torque.g.d.ts.map