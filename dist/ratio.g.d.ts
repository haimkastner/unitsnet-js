/** RatioUnits enumeration */
export declare enum RatioUnits {
    /** */
    DecimalFractions = 0,
    /** */
    Percent = 1,
    /** */
    PartsPerThousand = 2,
    /** */
    PartsPerMillion = 3,
    /** */
    PartsPerBillion = 4,
    /** */
    PartsPerTrillion = 5
}
/** In mathematics, a ratio is a relationship between two numbers of the same kind (e.g., objects, persons, students, spoonfuls, units of whatever identical dimension), usually expressed as "a to b" or a:b, sometimes expressed arithmetically as a dimensionless quotient of the two that explicitly indicates how many times the first number contains the second (not necessarily an integer). */
export declare class Ratio {
    private value;
    private decimalfractionsLazy;
    private percentLazy;
    private partsperthousandLazy;
    private partspermillionLazy;
    private partsperbillionLazy;
    private partspertrillionLazy;
    /**
     * Create a new Ratio.
     * @param value The value.
     * @param fromUnit The ‘Ratio’ unit to create from.
     */
    constructor(value: number, fromUnit: RatioUnits);
    /**
     * The base value of Ratio is DecimalFraction.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DecimalFractions(): number;
    /** */
    get Percent(): number;
    /** */
    get PartsPerThousand(): number;
    /** */
    get PartsPerMillion(): number;
    /** */
    get PartsPerBillion(): number;
    /** */
    get PartsPerTrillion(): number;
    /**
     * Create a new Ratio instance from a DecimalFractions
     *
     * @param value The unit as DecimalFractions to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromDecimalFractions(value: number): Ratio;
    /**
     * Create a new Ratio instance from a Percent
     *
     * @param value The unit as Percent to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPercent(value: number): Ratio;
    /**
     * Create a new Ratio instance from a PartsPerThousand
     *
     * @param value The unit as PartsPerThousand to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerThousand(value: number): Ratio;
    /**
     * Create a new Ratio instance from a PartsPerMillion
     *
     * @param value The unit as PartsPerMillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerMillion(value: number): Ratio;
    /**
     * Create a new Ratio instance from a PartsPerBillion
     *
     * @param value The unit as PartsPerBillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerBillion(value: number): Ratio;
    /**
     * Create a new Ratio instance from a PartsPerTrillion
     *
     * @param value The unit as PartsPerTrillion to create a new Ratio from.
     * @returns The new Ratio instance.
     */
    static FromPartsPerTrillion(value: number): Ratio;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Ratio to string.
     * Note! the default format for Ratio is DecimalFractions.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Ratio.
     * @returns The string format of the Ratio.
     */
    toString(toUnit?: RatioUnits): string;
}
//# sourceMappingURL=ratio.g.d.ts.map