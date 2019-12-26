/** SpecificEntropyUnits enumeration */
export declare enum SpecificEntropyUnits {
    /** */
    JoulesPerKilogramKelvin = 0,
    /** */
    JoulesPerKilogramDegreeCelsius = 1,
    /** */
    CaloriesPerGramKelvin = 2,
    /** */
    BtusPerPoundFahrenheit = 3,
    /** */
    KilojoulesPerKilogramKelvin = 4,
    /** */
    MegajoulesPerKilogramKelvin = 5,
    /** */
    KilojoulesPerKilogramDegreeCelsius = 6,
    /** */
    MegajoulesPerKilogramDegreeCelsius = 7,
    /** */
    KilocaloriesPerGramKelvin = 8
}
/** Specific entropy is an amount of energy required to raise temperature of a substance by 1 Kelvin per unit mass. */
export declare class SpecificEntropy {
    private value;
    private joulesperkilogramkelvinLazy;
    private joulesperkilogramdegreecelsiusLazy;
    private caloriespergramkelvinLazy;
    private btusperpoundfahrenheitLazy;
    private kilojoulesperkilogramkelvinLazy;
    private megajoulesperkilogramkelvinLazy;
    private kilojoulesperkilogramdegreecelsiusLazy;
    private megajoulesperkilogramdegreecelsiusLazy;
    private kilocaloriespergramkelvinLazy;
    /**
     * Create a new SpecificEntropy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEntropy’ unit to create from.
     */
    constructor(value: number, fromUnit: SpecificEntropyUnits);
    /**
     * The base value of SpecificEntropy is JoulePerKilogramKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get JoulesPerKilogramKelvin(): number;
    /** */
    get JoulesPerKilogramDegreeCelsius(): number;
    /** */
    get CaloriesPerGramKelvin(): number;
    /** */
    get BtusPerPoundFahrenheit(): number;
    /** */
    get KilojoulesPerKilogramKelvin(): number;
    /** */
    get MegajoulesPerKilogramKelvin(): number;
    /** */
    get KilojoulesPerKilogramDegreeCelsius(): number;
    /** */
    get MegajoulesPerKilogramDegreeCelsius(): number;
    /** */
    get KilocaloriesPerGramKelvin(): number;
    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramKelvin
     *
     * @param value The unit as JoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromJoulesPerKilogramKelvin(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as JoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromJoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a CaloriesPerGramKelvin
     *
     * @param value The unit as CaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromCaloriesPerGramKelvin(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a BtusPerPoundFahrenheit
     *
     * @param value The unit as BtusPerPoundFahrenheit to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromBtusPerPoundFahrenheit(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramKelvin
     *
     * @param value The unit as KilojoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromKilojoulesPerKilogramKelvin(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramKelvin
     *
     * @param value The unit as MegajoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromMegajoulesPerKilogramKelvin(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as KilojoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromKilojoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as MegajoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromMegajoulesPerKilogramDegreeCelsius(value: number): SpecificEntropy;
    /**
     * Create a new SpecificEntropy instance from a KilocaloriesPerGramKelvin
     *
     * @param value The unit as KilocaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromKilocaloriesPerGramKelvin(value: number): SpecificEntropy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the SpecificEntropy to string.
     * Note! the default format for SpecificEntropy is JoulesPerKilogramKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificEntropy.
     * @returns The string format of the SpecificEntropy.
     */
    toString(toUnit?: SpecificEntropyUnits): string;
}
//# sourceMappingURL=specificentropy.g.d.ts.map