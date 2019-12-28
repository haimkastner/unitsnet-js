/** MolarityUnits enumeration */
export declare enum MolarityUnits {
    /** */
    MolesPerCubicMeter = 0,
    /** */
    MolesPerLiter = 1,
    /** */
    PicomolesPerLiter = 2,
    /** */
    NanomolesPerLiter = 3,
    /** */
    MicromolesPerLiter = 4,
    /** */
    CentimolesPerLiter = 5,
    /** */
    DecimolesPerLiter = 6
}
/** Molar concentration, also called molarity, amount concentration or substance concentration, is a measure of the concentration of a solute in a solution, or of any chemical species, in terms of amount of substance in a given volume. */
export declare class Molarity {
    private value;
    private molespercubicmeterLazy;
    private molesperliterLazy;
    private picomolesperliterLazy;
    private nanomolesperliterLazy;
    private micromolesperliterLazy;
    private centimolesperliterLazy;
    private decimolesperliterLazy;
    /**
     * Create a new Molarity.
     * @param value The value.
     * @param fromUnit The ‘Molarity’ unit to create from.
     * The default unit is MolesPerCubicMeter
     */
    constructor(value: number, fromUnit?: MolarityUnits);
    /**
     * The base value of Molarity is MolesPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get MolesPerCubicMeter(): number;
    /** */
    get MolesPerLiter(): number;
    /** */
    get PicomolesPerLiter(): number;
    /** */
    get NanomolesPerLiter(): number;
    /** */
    get MicromolesPerLiter(): number;
    /** */
    get CentimolesPerLiter(): number;
    /** */
    get DecimolesPerLiter(): number;
    /**
     * Create a new Molarity instance from a MolesPerCubicMeter
     *
     * @param value The unit as MolesPerCubicMeter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromMolesPerCubicMeter(value: number): Molarity;
    /**
     * Create a new Molarity instance from a MolesPerLiter
     *
     * @param value The unit as MolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromMolesPerLiter(value: number): Molarity;
    /**
     * Create a new Molarity instance from a PicomolesPerLiter
     *
     * @param value The unit as PicomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromPicomolesPerLiter(value: number): Molarity;
    /**
     * Create a new Molarity instance from a NanomolesPerLiter
     *
     * @param value The unit as NanomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromNanomolesPerLiter(value: number): Molarity;
    /**
     * Create a new Molarity instance from a MicromolesPerLiter
     *
     * @param value The unit as MicromolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromMicromolesPerLiter(value: number): Molarity;
    /**
     * Create a new Molarity instance from a CentimolesPerLiter
     *
     * @param value The unit as CentimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromCentimolesPerLiter(value: number): Molarity;
    /**
     * Create a new Molarity instance from a DecimolesPerLiter
     *
     * @param value The unit as DecimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromDecimolesPerLiter(value: number): Molarity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Molarity to string.
     * Note! the default format for Molarity is MolesPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Molarity.
     * @returns The string format of the Molarity.
     */
    toString(toUnit?: MolarityUnits): string;
    /**
     * Check if the given Molarity are equals to the current Molarity.
     * @param molarity The other Molarity.
     * @returns True if the given Molarity are equal to the current Molarity.
     */
    equals(molarity: Molarity): boolean;
    /**
     * Compare the given Molarity against the current Molarity.
     * @param molarity The other Molarity.
     * @returns 0 if they are equal, -1 if the current Molarity is less then other, 1 if the current Molarity is greater then other.
     */
    compareTo(molarity: Molarity): number;
    /**
     * Add the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    add(molarity: Molarity): Molarity;
    /**
     * Subtract the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    subtract(molarity: Molarity): Molarity;
    /**
     * Multiply the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    multiply(molarity: Molarity): Molarity;
    /**
     * Divide the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    divide(molarity: Molarity): Molarity;
    /**
     * Modulo the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    modulo(molarity: Molarity): Molarity;
    /**
     * Pow the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    pow(molarity: Molarity): Molarity;
}
//# sourceMappingURL=molarity.g.d.ts.map