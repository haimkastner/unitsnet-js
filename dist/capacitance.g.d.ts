/** CapacitanceUnits enumeration */
export declare enum CapacitanceUnits {
    /** */
    Farads = 0,
    /** */
    Picofarads = 1,
    /** */
    Nanofarads = 2,
    /** */
    Microfarads = 3,
    /** */
    Kilofarads = 4,
    /** */
    Megafarads = 5
}
/** Capacitance is the ability of a body to store an electric charge. */
export declare class Capacitance {
    private value;
    private faradsLazy;
    private picofaradsLazy;
    private nanofaradsLazy;
    private microfaradsLazy;
    private kilofaradsLazy;
    private megafaradsLazy;
    /**
     * Create a new Capacitance.
     * @param value The value.
     * @param fromUnit The ‘Capacitance’ unit to create from.
     * The default unit is Farads
     */
    constructor(value: number, fromUnit?: CapacitanceUnits);
    /**
     * The base value of Capacitance is Farads.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Farads(): number;
    /** */
    get Picofarads(): number;
    /** */
    get Nanofarads(): number;
    /** */
    get Microfarads(): number;
    /** */
    get Kilofarads(): number;
    /** */
    get Megafarads(): number;
    /**
     * Create a new Capacitance instance from a Farads
     *
     * @param value The unit as Farads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromFarads(value: number): Capacitance;
    /**
     * Create a new Capacitance instance from a Picofarads
     *
     * @param value The unit as Picofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromPicofarads(value: number): Capacitance;
    /**
     * Create a new Capacitance instance from a Nanofarads
     *
     * @param value The unit as Nanofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromNanofarads(value: number): Capacitance;
    /**
     * Create a new Capacitance instance from a Microfarads
     *
     * @param value The unit as Microfarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromMicrofarads(value: number): Capacitance;
    /**
     * Create a new Capacitance instance from a Kilofarads
     *
     * @param value The unit as Kilofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromKilofarads(value: number): Capacitance;
    /**
     * Create a new Capacitance instance from a Megafarads
     *
     * @param value The unit as Megafarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromMegafarads(value: number): Capacitance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Capacitance to string.
     * Note! the default format for Capacitance is Farads.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Capacitance.
     * @returns The string format of the Capacitance.
     */
    toString(toUnit?: CapacitanceUnits): string;
    /**
     * Check if the given Capacitance are equals to the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns True if the given Capacitance are equal to the current Capacitance.
     */
    equals(capacitance: Capacitance): boolean;
    /**
     * Compare the given Capacitance against the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns 0 if they are equal, -1 if the current Capacitance is less then other, 1 if the current Capacitance is greater then other.
     */
    compareTo(capacitance: Capacitance): number;
    /**
     * Add the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    add(capacitance: Capacitance): Capacitance;
    /**
     * Subtract the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    subtract(capacitance: Capacitance): Capacitance;
    /**
     * Multiply the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    multiply(capacitance: Capacitance): Capacitance;
    /**
     * Divide the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    divide(capacitance: Capacitance): Capacitance;
    /**
     * Modulo the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    modulo(capacitance: Capacitance): Capacitance;
    /**
     * Pow the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    pow(capacitance: Capacitance): Capacitance;
}
//# sourceMappingURL=capacitance.g.d.ts.map