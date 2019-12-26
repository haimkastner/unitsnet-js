/** ElectricCurrentUnits enumeration */
export declare enum ElectricCurrentUnits {
    /** */
    Amperes = 0,
    /** */
    Picoamperes = 1,
    /** */
    Nanoamperes = 2,
    /** */
    Microamperes = 3,
    /** */
    Centiamperes = 4,
    /** */
    Kiloamperes = 5,
    /** */
    Megaamperes = 6
}
/** An electric current is a flow of electric charge. In electric circuits this charge is often carried by moving electrons in a wire. It can also be carried by ions in an electrolyte, or by both ions and electrons such as in a plasma. */
export declare class ElectricCurrent {
    private value;
    private amperesLazy;
    private picoamperesLazy;
    private nanoamperesLazy;
    private microamperesLazy;
    private centiamperesLazy;
    private kiloamperesLazy;
    private megaamperesLazy;
    /**
     * Create a new ElectricCurrent.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrent’ unit to create from.
     */
    constructor(value: number, fromUnit: ElectricCurrentUnits);
    /**
     * The base value of ElectricCurrent is Ampere.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Amperes(): number;
    /** */
    get Picoamperes(): number;
    /** */
    get Nanoamperes(): number;
    /** */
    get Microamperes(): number;
    /** */
    get Centiamperes(): number;
    /** */
    get Kiloamperes(): number;
    /** */
    get Megaamperes(): number;
    /**
     * Create a new ElectricCurrent instance from a Amperes
     *
     * @param value The unit as Amperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromAmperes(value: number): ElectricCurrent;
    /**
     * Create a new ElectricCurrent instance from a Picoamperes
     *
     * @param value The unit as Picoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromPicoamperes(value: number): ElectricCurrent;
    /**
     * Create a new ElectricCurrent instance from a Nanoamperes
     *
     * @param value The unit as Nanoamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromNanoamperes(value: number): ElectricCurrent;
    /**
     * Create a new ElectricCurrent instance from a Microamperes
     *
     * @param value The unit as Microamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromMicroamperes(value: number): ElectricCurrent;
    /**
     * Create a new ElectricCurrent instance from a Centiamperes
     *
     * @param value The unit as Centiamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromCentiamperes(value: number): ElectricCurrent;
    /**
     * Create a new ElectricCurrent instance from a Kiloamperes
     *
     * @param value The unit as Kiloamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromKiloamperes(value: number): ElectricCurrent;
    /**
     * Create a new ElectricCurrent instance from a Megaamperes
     *
     * @param value The unit as Megaamperes to create a new ElectricCurrent from.
     * @returns The new ElectricCurrent instance.
     */
    static FromMegaamperes(value: number): ElectricCurrent;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricCurrent to string.
     * Note! the default format for ElectricCurrent is Amperes.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrent.
     * @returns The string format of the ElectricCurrent.
     */
    toString(toUnit?: ElectricCurrentUnits): string;
}
//# sourceMappingURL=electriccurrent.g.d.ts.map