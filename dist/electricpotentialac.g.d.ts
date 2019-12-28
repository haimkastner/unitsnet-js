/** ElectricPotentialAcUnits enumeration */
export declare enum ElectricPotentialAcUnits {
    /** */
    VoltsAc = 0,
    /** */
    MicrovoltsAc = 1,
    /** */
    KilovoltsAc = 2,
    /** */
    MegavoltsAc = 3
}
/** The Electric Potential of a system known to use Alternating Current. */
export declare class ElectricPotentialAc {
    private value;
    private voltsacLazy;
    private microvoltsacLazy;
    private kilovoltsacLazy;
    private megavoltsacLazy;
    /**
     * Create a new ElectricPotentialAc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialAc’ unit to create from.
     * The default unit is VoltsAc
     */
    constructor(value: number, fromUnit?: ElectricPotentialAcUnits);
    /**
     * The base value of ElectricPotentialAc is VoltsAc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltsAc(): number;
    /** */
    get MicrovoltsAc(): number;
    /** */
    get KilovoltsAc(): number;
    /** */
    get MegavoltsAc(): number;
    /**
     * Create a new ElectricPotentialAc instance from a VoltsAc
     *
     * @param value The unit as VoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromVoltsAc(value: number): ElectricPotentialAc;
    /**
     * Create a new ElectricPotentialAc instance from a MicrovoltsAc
     *
     * @param value The unit as MicrovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromMicrovoltsAc(value: number): ElectricPotentialAc;
    /**
     * Create a new ElectricPotentialAc instance from a KilovoltsAc
     *
     * @param value The unit as KilovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromKilovoltsAc(value: number): ElectricPotentialAc;
    /**
     * Create a new ElectricPotentialAc instance from a MegavoltsAc
     *
     * @param value The unit as MegavoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromMegavoltsAc(value: number): ElectricPotentialAc;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ElectricPotentialAc to string.
     * Note! the default format for ElectricPotentialAc is VoltsAc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialAc.
     * @returns The string format of the ElectricPotentialAc.
     */
    toString(toUnit?: ElectricPotentialAcUnits): string;
    /**
     * Check if the given ElectricPotentialAc are equals to the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns True if the given ElectricPotentialAc are equal to the current ElectricPotentialAc.
     */
    equals(electricPotentialAc: ElectricPotentialAc): boolean;
    /**
     * Compare the given ElectricPotentialAc against the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialAc is less then other, 1 if the current ElectricPotentialAc is greater then other.
     */
    compareTo(electricPotentialAc: ElectricPotentialAc): number;
    /**
     * Add the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    add(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc;
    /**
     * Subtract the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    subtract(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc;
    /**
     * Multiply the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    multiply(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc;
    /**
     * Divide the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    divide(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc;
    /**
     * Modulo the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    modulo(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc;
    /**
     * Pow the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    pow(electricPotentialAc: ElectricPotentialAc): ElectricPotentialAc;
}
//# sourceMappingURL=electricpotentialac.g.d.ts.map