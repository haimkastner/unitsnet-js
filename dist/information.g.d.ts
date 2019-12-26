/** InformationUnits enumeration */
export declare enum InformationUnits {
    /** */
    Bytes = 0,
    /** */
    Bits = 1,
    /** */
    Kilobytes = 2,
    /** */
    Megabytes = 3,
    /** */
    Gigabytes = 4,
    /** */
    Terabytes = 5,
    /** */
    Petabytes = 6,
    /** */
    Exabytes = 7,
    /** */
    Kilobits = 8,
    /** */
    Megabits = 9,
    /** */
    Gigabits = 10,
    /** */
    Terabits = 11,
    /** */
    Petabits = 12,
    /** */
    Exabits = 13
}
/** In computing and telecommunications, a unit of information is the capacity of some standard data storage system or communication channel, used to measure the capacities of other systems and channels. In information theory, units of information are also used to measure the information contents or entropy of random variables. */
export declare class Information {
    private value;
    private bytesLazy;
    private bitsLazy;
    private kilobytesLazy;
    private megabytesLazy;
    private gigabytesLazy;
    private terabytesLazy;
    private petabytesLazy;
    private exabytesLazy;
    private kilobitsLazy;
    private megabitsLazy;
    private gigabitsLazy;
    private terabitsLazy;
    private petabitsLazy;
    private exabitsLazy;
    /**
     * Create a new Information.
     * @param value The value.
     * @param fromUnit The ‘Information’ unit to create from.
     */
    constructor(value: number, fromUnit: InformationUnits);
    /**
     * The base value of Information is Bit.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Bytes(): number;
    /** */
    get Bits(): number;
    /** */
    get Kilobytes(): number;
    /** */
    get Megabytes(): number;
    /** */
    get Gigabytes(): number;
    /** */
    get Terabytes(): number;
    /** */
    get Petabytes(): number;
    /** */
    get Exabytes(): number;
    /** */
    get Kilobits(): number;
    /** */
    get Megabits(): number;
    /** */
    get Gigabits(): number;
    /** */
    get Terabits(): number;
    /** */
    get Petabits(): number;
    /** */
    get Exabits(): number;
    /**
     * Create a new Information instance from a Bytes
     *
     * @param value The unit as Bytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromBytes(value: number): Information;
    /**
     * Create a new Information instance from a Bits
     *
     * @param value The unit as Bits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromBits(value: number): Information;
    /**
     * Create a new Information instance from a Kilobytes
     *
     * @param value The unit as Kilobytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromKilobytes(value: number): Information;
    /**
     * Create a new Information instance from a Megabytes
     *
     * @param value The unit as Megabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromMegabytes(value: number): Information;
    /**
     * Create a new Information instance from a Gigabytes
     *
     * @param value The unit as Gigabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromGigabytes(value: number): Information;
    /**
     * Create a new Information instance from a Terabytes
     *
     * @param value The unit as Terabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromTerabytes(value: number): Information;
    /**
     * Create a new Information instance from a Petabytes
     *
     * @param value The unit as Petabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromPetabytes(value: number): Information;
    /**
     * Create a new Information instance from a Exabytes
     *
     * @param value The unit as Exabytes to create a new Information from.
     * @returns The new Information instance.
     */
    static FromExabytes(value: number): Information;
    /**
     * Create a new Information instance from a Kilobits
     *
     * @param value The unit as Kilobits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromKilobits(value: number): Information;
    /**
     * Create a new Information instance from a Megabits
     *
     * @param value The unit as Megabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromMegabits(value: number): Information;
    /**
     * Create a new Information instance from a Gigabits
     *
     * @param value The unit as Gigabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromGigabits(value: number): Information;
    /**
     * Create a new Information instance from a Terabits
     *
     * @param value The unit as Terabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromTerabits(value: number): Information;
    /**
     * Create a new Information instance from a Petabits
     *
     * @param value The unit as Petabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromPetabits(value: number): Information;
    /**
     * Create a new Information instance from a Exabits
     *
     * @param value The unit as Exabits to create a new Information from.
     * @returns The new Information instance.
     */
    static FromExabits(value: number): Information;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Information to string.
     * Note! the default format for Information is Bits.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Information.
     * @returns The string format of the Information.
     */
    toString(toUnit?: InformationUnits): string;
}
//# sourceMappingURL=information.g.d.ts.map