/** ElectricResistivityUnits enumeration */
export declare enum ElectricResistivityUnits {
    /** */
    OhmMeters = 0,
    /** */
    OhmsCentimeter = 1,
    /** */
    PicoohmMeters = 2,
    /** */
    NanoohmMeters = 3,
    /** */
    MicroohmMeters = 4,
    /** */
    KiloohmMeters = 5,
    /** */
    MegaohmMeters = 6,
    /** */
    PicoohmsCentimeter = 7,
    /** */
    NanoohmsCentimeter = 8,
    /** */
    MicroohmsCentimeter = 9,
    /** */
    KiloohmsCentimeter = 10,
    /** */
    MegaohmsCentimeter = 11
}
/** Electrical resistivity (also known as resistivity, specific electrical resistance, or volume resistivity) is a fundamental property that quantifies how strongly a given material opposes the flow of electric current. */
export declare class ElectricResistivity {
    private value;
    private ohmmetersLazy;
    private ohmscentimeterLazy;
    private picoohmmetersLazy;
    private nanoohmmetersLazy;
    private microohmmetersLazy;
    private kiloohmmetersLazy;
    private megaohmmetersLazy;
    private picoohmscentimeterLazy;
    private nanoohmscentimeterLazy;
    private microohmscentimeterLazy;
    private kiloohmscentimeterLazy;
    private megaohmscentimeterLazy;
    /**
     * Create a new ElectricResistivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistivity’ unit to create from.
     * The default unit is OhmMeters
     */
    constructor(value: number, fromUnit?: ElectricResistivityUnits);
    /**
     * The base value of ElectricResistivity is OhmMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get OhmMeters(): number;
    /** */
    get OhmsCentimeter(): number;
    /** */
    get PicoohmMeters(): number;
    /** */
    get NanoohmMeters(): number;
    /** */
    get MicroohmMeters(): number;
    /** */
    get KiloohmMeters(): number;
    /** */
    get MegaohmMeters(): number;
    /** */
    get PicoohmsCentimeter(): number;
    /** */
    get NanoohmsCentimeter(): number;
    /** */
    get MicroohmsCentimeter(): number;
    /** */
    get KiloohmsCentimeter(): number;
    /** */
    get MegaohmsCentimeter(): number;
    /**
     * Create a new ElectricResistivity instance from a OhmMeters
     *
     * @param value The unit as OhmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromOhmMeters(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a OhmsCentimeter
     *
     * @param value The unit as OhmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromOhmsCentimeter(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a PicoohmMeters
     *
     * @param value The unit as PicoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromPicoohmMeters(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a NanoohmMeters
     *
     * @param value The unit as NanoohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromNanoohmMeters(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a MicroohmMeters
     *
     * @param value The unit as MicroohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMicroohmMeters(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a KiloohmMeters
     *
     * @param value The unit as KiloohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromKiloohmMeters(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a MegaohmMeters
     *
     * @param value The unit as MegaohmMeters to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMegaohmMeters(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a PicoohmsCentimeter
     *
     * @param value The unit as PicoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromPicoohmsCentimeter(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a NanoohmsCentimeter
     *
     * @param value The unit as NanoohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromNanoohmsCentimeter(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a MicroohmsCentimeter
     *
     * @param value The unit as MicroohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMicroohmsCentimeter(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a KiloohmsCentimeter
     *
     * @param value The unit as KiloohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromKiloohmsCentimeter(value: number): ElectricResistivity;
    /**
     * Create a new ElectricResistivity instance from a MegaohmsCentimeter
     *
     * @param value The unit as MegaohmsCentimeter to create a new ElectricResistivity from.
     * @returns The new ElectricResistivity instance.
     */
    static FromMegaohmsCentimeter(value: number): ElectricResistivity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricResistivity to string.
     * Note! the default format for ElectricResistivity is OhmMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricResistivity.
     * @returns The string format of the ElectricResistivity.
     */
    toString(toUnit?: ElectricResistivityUnits): string;
    /**
     * Check if the given ElectricResistivity are equals to the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns True if the given ElectricResistivity are equal to the current ElectricResistivity.
     */
    equals(electricResistivity: ElectricResistivity): boolean;
    /**
     * Compare the given ElectricResistivity against the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns 0 if they are equal, -1 if the current ElectricResistivity is less then other, 1 if the current ElectricResistivity is greater then other.
     */
    compareTo(electricResistivity: ElectricResistivity): number;
    /**
     * Add the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    add(electricResistivity: ElectricResistivity): ElectricResistivity;
    /**
     * Subtract the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    subtract(electricResistivity: ElectricResistivity): ElectricResistivity;
    /**
     * Multiply the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    multiply(electricResistivity: ElectricResistivity): ElectricResistivity;
    /**
     * Divide the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    divide(electricResistivity: ElectricResistivity): ElectricResistivity;
    /**
     * Modulo the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    modulo(electricResistivity: ElectricResistivity): ElectricResistivity;
    /**
     * Pow the given ElectricResistivity with the current ElectricResistivity.
     * @param electricResistivity The other ElectricResistivity.
     * @returns A new ElectricResistivity instance with the results.
     */
    pow(electricResistivity: ElectricResistivity): ElectricResistivity;
}
//# sourceMappingURL=electricresistivity.g.d.ts.map