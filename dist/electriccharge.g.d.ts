/** ElectricChargeUnits enumeration */
export declare enum ElectricChargeUnits {
    /** */
    Coulombs = 0,
    /** */
    AmpereHours = 1,
    /** */
    KiloampereHours = 2,
    /** */
    MegaampereHours = 3
}
/** Electric charge is the physical property of matter that causes it to experience a force when placed in an electromagnetic field. */
export declare class ElectricCharge {
    private value;
    private coulombsLazy;
    private amperehoursLazy;
    private kiloamperehoursLazy;
    private megaamperehoursLazy;
    /**
     * Create a new ElectricCharge.
     * @param value The value.
     * @param fromUnit The ‘ElectricCharge’ unit to create from.
     * The default unit is Coulombs
     */
    constructor(value: number, fromUnit?: ElectricChargeUnits);
    /**
     * The base value of ElectricCharge is Coulombs.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Coulombs(): number;
    /** */
    get AmpereHours(): number;
    /** */
    get KiloampereHours(): number;
    /** */
    get MegaampereHours(): number;
    /**
     * Create a new ElectricCharge instance from a Coulombs
     *
     * @param value The unit as Coulombs to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    static FromCoulombs(value: number): ElectricCharge;
    /**
     * Create a new ElectricCharge instance from a AmpereHours
     *
     * @param value The unit as AmpereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    static FromAmpereHours(value: number): ElectricCharge;
    /**
     * Create a new ElectricCharge instance from a KiloampereHours
     *
     * @param value The unit as KiloampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    static FromKiloampereHours(value: number): ElectricCharge;
    /**
     * Create a new ElectricCharge instance from a MegaampereHours
     *
     * @param value The unit as MegaampereHours to create a new ElectricCharge from.
     * @returns The new ElectricCharge instance.
     */
    static FromMegaampereHours(value: number): ElectricCharge;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricCharge to string.
     * Note! the default format for ElectricCharge is Coulombs.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCharge.
     * @returns The string format of the ElectricCharge.
     */
    toString(toUnit?: ElectricChargeUnits): string;
    /**
     * Check if the given ElectricCharge are equals to the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns True if the given ElectricCharge are equal to the current ElectricCharge.
     */
    equals(electricCharge: ElectricCharge): boolean;
    /**
     * Compare the given ElectricCharge against the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns 0 if they are equal, -1 if the current ElectricCharge is less then other, 1 if the current ElectricCharge is greater then other.
     */
    compareTo(electricCharge: ElectricCharge): number;
    /**
     * Add the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    add(electricCharge: ElectricCharge): ElectricCharge;
    /**
     * Subtract the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    subtract(electricCharge: ElectricCharge): ElectricCharge;
    /**
     * Multiply the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    multiply(electricCharge: ElectricCharge): ElectricCharge;
    /**
     * Divide the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    divide(electricCharge: ElectricCharge): ElectricCharge;
    /**
     * Modulo the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    modulo(electricCharge: ElectricCharge): ElectricCharge;
    /**
     * Pow the given ElectricCharge with the current ElectricCharge.
     * @param electricCharge The other ElectricCharge.
     * @returns A new ElectricCharge instance with the results.
     */
    pow(electricCharge: ElectricCharge): ElectricCharge;
}
//# sourceMappingURL=electriccharge.g.d.ts.map