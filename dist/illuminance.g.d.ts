/** IlluminanceUnits enumeration */
export declare enum IlluminanceUnits {
    /** */
    Lux = 0,
    /** */
    Kilolux = 1,
    /** */
    Megalux = 2
}
/** In photometry, illuminance is the total luminous flux incident on a surface, per unit area. */
export declare class Illuminance {
    private value;
    private luxLazy;
    private kiloluxLazy;
    private megaluxLazy;
    /**
     * Create a new Illuminance.
     * @param value The value.
     * @param fromUnit The ‘Illuminance’ unit to create from.
     * The default unit is Lux
     */
    constructor(value: number, fromUnit?: IlluminanceUnits);
    /**
     * The base value of Illuminance is Lux.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Lux(): number;
    /** */
    get Kilolux(): number;
    /** */
    get Megalux(): number;
    /**
     * Create a new Illuminance instance from a Lux
     *
     * @param value The unit as Lux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    static FromLux(value: number): Illuminance;
    /**
     * Create a new Illuminance instance from a Kilolux
     *
     * @param value The unit as Kilolux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    static FromKilolux(value: number): Illuminance;
    /**
     * Create a new Illuminance instance from a Megalux
     *
     * @param value The unit as Megalux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    static FromMegalux(value: number): Illuminance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Illuminance to string.
     * Note! the default format for Illuminance is Lux.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Illuminance.
     * @returns The string format of the Illuminance.
     */
    toString(toUnit?: IlluminanceUnits): string;
    /**
     * Check if the given Illuminance are equals to the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns True if the given Illuminance are equal to the current Illuminance.
     */
    equals(illuminance: Illuminance): boolean;
    /**
     * Compare the given Illuminance against the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns 0 if they are equal, -1 if the current Illuminance is less then other, 1 if the current Illuminance is greater then other.
     */
    compareTo(illuminance: Illuminance): number;
    /**
     * Add the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    add(illuminance: Illuminance): Illuminance;
    /**
     * Subtract the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    subtract(illuminance: Illuminance): Illuminance;
    /**
     * Multiply the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    multiply(illuminance: Illuminance): Illuminance;
    /**
     * Divide the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    divide(illuminance: Illuminance): Illuminance;
    /**
     * Modulo the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    modulo(illuminance: Illuminance): Illuminance;
    /**
     * Pow the given Illuminance with the current Illuminance.
     * @param illuminance The other Illuminance.
     * @returns A new Illuminance instance with the results.
     */
    pow(illuminance: Illuminance): Illuminance;
}
//# sourceMappingURL=illuminance.g.d.ts.map