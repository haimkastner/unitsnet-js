/** ForceUnits enumeration */
export declare enum ForceUnits {
    /** */
    Dyne = 0,
    /** */
    KilogramsForce = 1,
    /** */
    TonnesForce = 2,
    /** */
    Newtons = 3,
    /** */
    KiloPonds = 4,
    /** */
    Poundals = 5,
    /** */
    PoundsForce = 6,
    /** */
    OunceForce = 7,
    /** */
    Micronewtons = 8,
    /** */
    Decanewtons = 9,
    /** */
    Kilonewtons = 10,
    /** */
    Meganewtons = 11
}
/** In physics, a force is any influence that causes an object to undergo a certain change, either concerning its movement, direction, or geometrical construction. In other words, a force can cause an object with mass to change its velocity (which includes to begin moving from a state of rest), i.e., to accelerate, or a flexible object to deform, or both. Force can also be described by intuitive concepts such as a push or a pull. A force has both magnitude and direction, making it a vector quantity. It is measured in the SI unit of newtons and represented by the symbol F. */
export declare class Force {
    private value;
    private dyneLazy;
    private kilogramsforceLazy;
    private tonnesforceLazy;
    private newtonsLazy;
    private kilopondsLazy;
    private poundalsLazy;
    private poundsforceLazy;
    private ounceforceLazy;
    private micronewtonsLazy;
    private decanewtonsLazy;
    private kilonewtonsLazy;
    private meganewtonsLazy;
    /**
     * Create a new Force.
     * @param value The value.
     * @param fromUnit The ‘Force’ unit to create from.
     * The default unit is Newtons
     */
    constructor(value: number, fromUnit?: ForceUnits);
    /**
     * The base value of Force is Newtons.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Dyne(): number;
    /** */
    get KilogramsForce(): number;
    /** */
    get TonnesForce(): number;
    /** */
    get Newtons(): number;
    /** */
    get KiloPonds(): number;
    /** */
    get Poundals(): number;
    /** */
    get PoundsForce(): number;
    /** */
    get OunceForce(): number;
    /** */
    get Micronewtons(): number;
    /** */
    get Decanewtons(): number;
    /** */
    get Kilonewtons(): number;
    /** */
    get Meganewtons(): number;
    /**
     * Create a new Force instance from a Dyne
     *
     * @param value The unit as Dyne to create a new Force from.
     * @returns The new Force instance.
     */
    static FromDyne(value: number): Force;
    /**
     * Create a new Force instance from a KilogramsForce
     *
     * @param value The unit as KilogramsForce to create a new Force from.
     * @returns The new Force instance.
     */
    static FromKilogramsForce(value: number): Force;
    /**
     * Create a new Force instance from a TonnesForce
     *
     * @param value The unit as TonnesForce to create a new Force from.
     * @returns The new Force instance.
     */
    static FromTonnesForce(value: number): Force;
    /**
     * Create a new Force instance from a Newtons
     *
     * @param value The unit as Newtons to create a new Force from.
     * @returns The new Force instance.
     */
    static FromNewtons(value: number): Force;
    /**
     * Create a new Force instance from a KiloPonds
     *
     * @param value The unit as KiloPonds to create a new Force from.
     * @returns The new Force instance.
     */
    static FromKiloPonds(value: number): Force;
    /**
     * Create a new Force instance from a Poundals
     *
     * @param value The unit as Poundals to create a new Force from.
     * @returns The new Force instance.
     */
    static FromPoundals(value: number): Force;
    /**
     * Create a new Force instance from a PoundsForce
     *
     * @param value The unit as PoundsForce to create a new Force from.
     * @returns The new Force instance.
     */
    static FromPoundsForce(value: number): Force;
    /**
     * Create a new Force instance from a OunceForce
     *
     * @param value The unit as OunceForce to create a new Force from.
     * @returns The new Force instance.
     */
    static FromOunceForce(value: number): Force;
    /**
     * Create a new Force instance from a Micronewtons
     *
     * @param value The unit as Micronewtons to create a new Force from.
     * @returns The new Force instance.
     */
    static FromMicronewtons(value: number): Force;
    /**
     * Create a new Force instance from a Decanewtons
     *
     * @param value The unit as Decanewtons to create a new Force from.
     * @returns The new Force instance.
     */
    static FromDecanewtons(value: number): Force;
    /**
     * Create a new Force instance from a Kilonewtons
     *
     * @param value The unit as Kilonewtons to create a new Force from.
     * @returns The new Force instance.
     */
    static FromKilonewtons(value: number): Force;
    /**
     * Create a new Force instance from a Meganewtons
     *
     * @param value The unit as Meganewtons to create a new Force from.
     * @returns The new Force instance.
     */
    static FromMeganewtons(value: number): Force;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Force to string.
     * Note! the default format for Force is Newtons.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Force.
     * @returns The string format of the Force.
     */
    toString(toUnit?: ForceUnits): string;
    /**
     * Check if the given Force are equals to the current Force.
     * @param force The other Force.
     * @returns True if the given Force are equal to the current Force.
     */
    equals(force: Force): boolean;
    /**
     * Compare the given Force against the current Force.
     * @param force The other Force.
     * @returns 0 if they are equal, -1 if the current Force is less then other, 1 if the current Force is greater then other.
     */
    compareTo(force: Force): number;
    /**
     * Add the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    add(force: Force): Force;
    /**
     * Subtract the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    subtract(force: Force): Force;
    /**
     * Multiply the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    multiply(force: Force): Force;
    /**
     * Divide the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    divide(force: Force): Force;
    /**
     * Modulo the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    modulo(force: Force): Force;
    /**
     * Pow the given Force with the current Force.
     * @param force The other Force.
     * @returns A new Force instance with the results.
     */
    pow(force: Force): Force;
}
//# sourceMappingURL=force.g.d.ts.map