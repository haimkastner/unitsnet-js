/** FrequencyUnits enumeration */
export declare enum FrequencyUnits {
    /** */
    Hertz = 0,
    /** */
    RadiansPerSecond = 1,
    /** */
    CyclesPerMinute = 2,
    /** */
    CyclesPerHour = 3,
    /** */
    BeatsPerMinute = 4,
    /** */
    Kilohertz = 5,
    /** */
    Megahertz = 6,
    /** */
    Gigahertz = 7,
    /** */
    Terahertz = 8
}
/** The number of occurrences of a repeating event per unit time. */
export declare class Frequency {
    private value;
    private hertzLazy;
    private radianspersecondLazy;
    private cyclesperminuteLazy;
    private cyclesperhourLazy;
    private beatsperminuteLazy;
    private kilohertzLazy;
    private megahertzLazy;
    private gigahertzLazy;
    private terahertzLazy;
    /**
     * Create a new Frequency.
     * @param value The value.
     * @param fromUnit The ‘Frequency’ unit to create from.
     */
    constructor(value: number, fromUnit: FrequencyUnits);
    /**
     * The base value of Frequency is Hertz.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Hertz(): number;
    /** */
    get RadiansPerSecond(): number;
    /** */
    get CyclesPerMinute(): number;
    /** */
    get CyclesPerHour(): number;
    /** */
    get BeatsPerMinute(): number;
    /** */
    get Kilohertz(): number;
    /** */
    get Megahertz(): number;
    /** */
    get Gigahertz(): number;
    /** */
    get Terahertz(): number;
    /**
     * Create a new Frequency instance from a Hertz
     *
     * @param value The unit as Hertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromHertz(value: number): Frequency;
    /**
     * Create a new Frequency instance from a RadiansPerSecond
     *
     * @param value The unit as RadiansPerSecond to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromRadiansPerSecond(value: number): Frequency;
    /**
     * Create a new Frequency instance from a CyclesPerMinute
     *
     * @param value The unit as CyclesPerMinute to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromCyclesPerMinute(value: number): Frequency;
    /**
     * Create a new Frequency instance from a CyclesPerHour
     *
     * @param value The unit as CyclesPerHour to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromCyclesPerHour(value: number): Frequency;
    /**
     * Create a new Frequency instance from a BeatsPerMinute
     *
     * @param value The unit as BeatsPerMinute to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromBeatsPerMinute(value: number): Frequency;
    /**
     * Create a new Frequency instance from a Kilohertz
     *
     * @param value The unit as Kilohertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromKilohertz(value: number): Frequency;
    /**
     * Create a new Frequency instance from a Megahertz
     *
     * @param value The unit as Megahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromMegahertz(value: number): Frequency;
    /**
     * Create a new Frequency instance from a Gigahertz
     *
     * @param value The unit as Gigahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromGigahertz(value: number): Frequency;
    /**
     * Create a new Frequency instance from a Terahertz
     *
     * @param value The unit as Terahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    static FromTerahertz(value: number): Frequency;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Frequency to string.
     * Note! the default format for Frequency is Hertz.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Frequency.
     * @returns The string format of the Frequency.
     */
    toString(toUnit?: FrequencyUnits): string;
}
//# sourceMappingURL=frequency.g.d.ts.map