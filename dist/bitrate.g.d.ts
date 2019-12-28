/** BitRateUnits enumeration */
export declare enum BitRateUnits {
    /** */
    BitsPerSecond = 0,
    /** */
    BytesPerSecond = 1,
    /** */
    KilobitsPerSecond = 2,
    /** */
    MegabitsPerSecond = 3,
    /** */
    GigabitsPerSecond = 4,
    /** */
    TerabitsPerSecond = 5,
    /** */
    PetabitsPerSecond = 6,
    /** */
    ExabitsPerSecond = 7,
    /** */
    KilobytesPerSecond = 8,
    /** */
    MegabytesPerSecond = 9,
    /** */
    GigabytesPerSecond = 10,
    /** */
    TerabytesPerSecond = 11,
    /** */
    PetabytesPerSecond = 12,
    /** */
    ExabytesPerSecond = 13
}
/** In telecommunications and computing, bit rate is the number of bits that are conveyed or processed per unit of time. */
export declare class BitRate {
    private value;
    private bitspersecondLazy;
    private bytespersecondLazy;
    private kilobitspersecondLazy;
    private megabitspersecondLazy;
    private gigabitspersecondLazy;
    private terabitspersecondLazy;
    private petabitspersecondLazy;
    private exabitspersecondLazy;
    private kilobytespersecondLazy;
    private megabytespersecondLazy;
    private gigabytespersecondLazy;
    private terabytespersecondLazy;
    private petabytespersecondLazy;
    private exabytespersecondLazy;
    /**
     * Create a new BitRate.
     * @param value The value.
     * @param fromUnit The ‘BitRate’ unit to create from.
     * The default unit is BitsPerSecond
     */
    constructor(value: number, fromUnit?: BitRateUnits);
    /**
     * The base value of BitRate is BitsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get BitsPerSecond(): number;
    /** */
    get BytesPerSecond(): number;
    /** */
    get KilobitsPerSecond(): number;
    /** */
    get MegabitsPerSecond(): number;
    /** */
    get GigabitsPerSecond(): number;
    /** */
    get TerabitsPerSecond(): number;
    /** */
    get PetabitsPerSecond(): number;
    /** */
    get ExabitsPerSecond(): number;
    /** */
    get KilobytesPerSecond(): number;
    /** */
    get MegabytesPerSecond(): number;
    /** */
    get GigabytesPerSecond(): number;
    /** */
    get TerabytesPerSecond(): number;
    /** */
    get PetabytesPerSecond(): number;
    /** */
    get ExabytesPerSecond(): number;
    /**
     * Create a new BitRate instance from a BitsPerSecond
     *
     * @param value The unit as BitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromBitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a BytesPerSecond
     *
     * @param value The unit as BytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromBytesPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a KilobitsPerSecond
     *
     * @param value The unit as KilobitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromKilobitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a MegabitsPerSecond
     *
     * @param value The unit as MegabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromMegabitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a GigabitsPerSecond
     *
     * @param value The unit as GigabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromGigabitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a TerabitsPerSecond
     *
     * @param value The unit as TerabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromTerabitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a PetabitsPerSecond
     *
     * @param value The unit as PetabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromPetabitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a ExabitsPerSecond
     *
     * @param value The unit as ExabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromExabitsPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a KilobytesPerSecond
     *
     * @param value The unit as KilobytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromKilobytesPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a MegabytesPerSecond
     *
     * @param value The unit as MegabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromMegabytesPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a GigabytesPerSecond
     *
     * @param value The unit as GigabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromGigabytesPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a TerabytesPerSecond
     *
     * @param value The unit as TerabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromTerabytesPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a PetabytesPerSecond
     *
     * @param value The unit as PetabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromPetabytesPerSecond(value: number): BitRate;
    /**
     * Create a new BitRate instance from a ExabytesPerSecond
     *
     * @param value The unit as ExabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    static FromExabytesPerSecond(value: number): BitRate;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the BitRate to string.
     * Note! the default format for BitRate is BitsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the BitRate.
     * @returns The string format of the BitRate.
     */
    toString(toUnit?: BitRateUnits): string;
    /**
     * Check if the given BitRate are equals to the current BitRate.
     * @param bitRate The other BitRate.
     * @returns True if the given BitRate are equal to the current BitRate.
     */
    equals(bitRate: BitRate): boolean;
    /**
     * Compare the given BitRate against the current BitRate.
     * @param bitRate The other BitRate.
     * @returns 0 if they are equal, -1 if the current BitRate is less then other, 1 if the current BitRate is greater then other.
     */
    compareTo(bitRate: BitRate): number;
    /**
     * Add the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    add(bitRate: BitRate): BitRate;
    /**
     * Subtract the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    subtract(bitRate: BitRate): BitRate;
    /**
     * Multiply the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    multiply(bitRate: BitRate): BitRate;
    /**
     * Divide the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    divide(bitRate: BitRate): BitRate;
    /**
     * Modulo the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    modulo(bitRate: BitRate): BitRate;
    /**
     * Pow the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    pow(bitRate: BitRate): BitRate;
}
//# sourceMappingURL=bitrate.g.d.ts.map