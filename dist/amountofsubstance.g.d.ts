/** AmountOfSubstanceUnits enumeration */
export declare enum AmountOfSubstanceUnits {
    /** */
    Moles = 0,
    /** */
    PoundMoles = 1,
    /** */
    Nanomoles = 2,
    /** */
    Micromoles = 3,
    /** */
    Centimoles = 4,
    /** */
    Decimoles = 5,
    /** */
    Kilomoles = 6,
    /** */
    Megamoles = 7,
    /** */
    NanopoundMoles = 8,
    /** */
    MicropoundMoles = 9,
    /** */
    CentipoundMoles = 10,
    /** */
    DecipoundMoles = 11,
    /** */
    KilopoundMoles = 12
}
/** Mole is the amount of substance containing Avagadro's Number (6.02 x 10 ^ 23) of real particles such as molecules,atoms, ions or radicals. */
export declare class AmountOfSubstance {
    private value;
    private molesLazy;
    private poundmolesLazy;
    private nanomolesLazy;
    private micromolesLazy;
    private centimolesLazy;
    private decimolesLazy;
    private kilomolesLazy;
    private megamolesLazy;
    private nanopoundmolesLazy;
    private micropoundmolesLazy;
    private centipoundmolesLazy;
    private decipoundmolesLazy;
    private kilopoundmolesLazy;
    /**
     * Create a new AmountOfSubstance.
     * @param value The value.
     * @param fromUnit The ‘AmountOfSubstance’ unit to create from.
     * The default unit is Moles
     */
    constructor(value: number, fromUnit?: AmountOfSubstanceUnits);
    /**
     * The base value of AmountOfSubstance is Moles.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Moles(): number;
    /** */
    get PoundMoles(): number;
    /** */
    get Nanomoles(): number;
    /** */
    get Micromoles(): number;
    /** */
    get Centimoles(): number;
    /** */
    get Decimoles(): number;
    /** */
    get Kilomoles(): number;
    /** */
    get Megamoles(): number;
    /** */
    get NanopoundMoles(): number;
    /** */
    get MicropoundMoles(): number;
    /** */
    get CentipoundMoles(): number;
    /** */
    get DecipoundMoles(): number;
    /** */
    get KilopoundMoles(): number;
    /**
     * Create a new AmountOfSubstance instance from a Moles
     *
     * @param value The unit as Moles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromMoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a PoundMoles
     *
     * @param value The unit as PoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromPoundMoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a Nanomoles
     *
     * @param value The unit as Nanomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromNanomoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a Micromoles
     *
     * @param value The unit as Micromoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromMicromoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a Centimoles
     *
     * @param value The unit as Centimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromCentimoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a Decimoles
     *
     * @param value The unit as Decimoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromDecimoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a Kilomoles
     *
     * @param value The unit as Kilomoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromKilomoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a Megamoles
     *
     * @param value The unit as Megamoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromMegamoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a NanopoundMoles
     *
     * @param value The unit as NanopoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromNanopoundMoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a MicropoundMoles
     *
     * @param value The unit as MicropoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromMicropoundMoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a CentipoundMoles
     *
     * @param value The unit as CentipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromCentipoundMoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a DecipoundMoles
     *
     * @param value The unit as DecipoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromDecipoundMoles(value: number): AmountOfSubstance;
    /**
     * Create a new AmountOfSubstance instance from a KilopoundMoles
     *
     * @param value The unit as KilopoundMoles to create a new AmountOfSubstance from.
     * @returns The new AmountOfSubstance instance.
     */
    static FromKilopoundMoles(value: number): AmountOfSubstance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the AmountOfSubstance to string.
     * Note! the default format for AmountOfSubstance is Moles.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AmountOfSubstance.
     * @returns The string format of the AmountOfSubstance.
     */
    toString(toUnit?: AmountOfSubstanceUnits): string;
    /**
     * Check if the given AmountOfSubstance are equals to the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns True if the given AmountOfSubstance are equal to the current AmountOfSubstance.
     */
    equals(amountOfSubstance: AmountOfSubstance): boolean;
    /**
     * Compare the given AmountOfSubstance against the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns 0 if they are equal, -1 if the current AmountOfSubstance is less then other, 1 if the current AmountOfSubstance is greater then other.
     */
    compareTo(amountOfSubstance: AmountOfSubstance): number;
    /**
     * Add the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    add(amountOfSubstance: AmountOfSubstance): AmountOfSubstance;
    /**
     * Subtract the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    subtract(amountOfSubstance: AmountOfSubstance): AmountOfSubstance;
    /**
     * Multiply the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    multiply(amountOfSubstance: AmountOfSubstance): AmountOfSubstance;
    /**
     * Divide the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    divide(amountOfSubstance: AmountOfSubstance): AmountOfSubstance;
    /**
     * Modulo the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    modulo(amountOfSubstance: AmountOfSubstance): AmountOfSubstance;
    /**
     * Pow the given AmountOfSubstance with the current AmountOfSubstance.
     * @param amountOfSubstance The other AmountOfSubstance.
     * @returns A new AmountOfSubstance instance with the results.
     */
    pow(amountOfSubstance: AmountOfSubstance): AmountOfSubstance;
}
//# sourceMappingURL=amountofsubstance.g.d.ts.map