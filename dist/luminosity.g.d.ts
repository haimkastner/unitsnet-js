/** LuminosityUnits enumeration */
export declare enum LuminosityUnits {
    /** */
    Watts = 0,
    /** */
    SolarLuminosities = 1,
    /** */
    Femtowatts = 2,
    /** */
    Picowatts = 3,
    /** */
    Nanowatts = 4,
    /** */
    Microwatts = 5,
    /** */
    Deciwatts = 6,
    /** */
    Decawatts = 7,
    /** */
    Kilowatts = 8,
    /** */
    Megawatts = 9,
    /** */
    Gigawatts = 10,
    /** */
    Terawatts = 11,
    /** */
    Petawatts = 12
}
/** Luminosity is an absolute measure of radiated electromagnetic power (light), the radiant power emitted by a light-emitting object. */
export declare class Luminosity {
    private value;
    private wattsLazy;
    private solarluminositiesLazy;
    private femtowattsLazy;
    private picowattsLazy;
    private nanowattsLazy;
    private microwattsLazy;
    private deciwattsLazy;
    private decawattsLazy;
    private kilowattsLazy;
    private megawattsLazy;
    private gigawattsLazy;
    private terawattsLazy;
    private petawattsLazy;
    /**
     * Create a new Luminosity.
     * @param value The value.
     * @param fromUnit The ‘Luminosity’ unit to create from.
     */
    constructor(value: number, fromUnit: LuminosityUnits);
    /**
     * The base value of Luminosity is Watt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Watts(): number;
    /** */
    get SolarLuminosities(): number;
    /** */
    get Femtowatts(): number;
    /** */
    get Picowatts(): number;
    /** */
    get Nanowatts(): number;
    /** */
    get Microwatts(): number;
    /** */
    get Deciwatts(): number;
    /** */
    get Decawatts(): number;
    /** */
    get Kilowatts(): number;
    /** */
    get Megawatts(): number;
    /** */
    get Gigawatts(): number;
    /** */
    get Terawatts(): number;
    /** */
    get Petawatts(): number;
    /**
     * Create a new Luminosity instance from a Watts
     *
     * @param value The unit as Watts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromWatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a SolarLuminosities
     *
     * @param value The unit as SolarLuminosities to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromSolarLuminosities(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromFemtowatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromPicowatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromNanowatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromMicrowatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromDeciwatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromDecawatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromKilowatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromMegawatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromGigawatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromTerawatts(value: number): Luminosity;
    /**
     * Create a new Luminosity instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromPetawatts(value: number): Luminosity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Luminosity to string.
     * Note! the default format for Luminosity is Watts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Luminosity.
     * @returns The string format of the Luminosity.
     */
    toString(toUnit?: LuminosityUnits): string;
}
//# sourceMappingURL=luminosity.g.d.ts.map