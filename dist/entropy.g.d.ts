/** EntropyUnits enumeration */
export declare enum EntropyUnits {
    /** */
    JoulesPerKelvin = 0,
    /** */
    CaloriesPerKelvin = 1,
    /** */
    JoulesPerDegreeCelsius = 2,
    /** */
    KilojoulesPerKelvin = 3,
    /** */
    MegajoulesPerKelvin = 4,
    /** */
    KilocaloriesPerKelvin = 5,
    /** */
    KilojoulesPerDegreeCelsius = 6
}
/** Entropy is an important concept in the branch of science known as thermodynamics. The idea of "irreversibility" is central to the understanding of entropy.  It is often said that entropy is an expression of the disorder, or randomness of a system, or of our lack of information about it. Entropy is an extensive property. It has the dimension of energy divided by temperature, which has a unit of joules per kelvin (J/K) in the International System of Units */
export declare class Entropy {
    private value;
    private joulesperkelvinLazy;
    private caloriesperkelvinLazy;
    private joulesperdegreecelsiusLazy;
    private kilojoulesperkelvinLazy;
    private megajoulesperkelvinLazy;
    private kilocaloriesperkelvinLazy;
    private kilojoulesperdegreecelsiusLazy;
    /**
     * Create a new Entropy.
     * @param value The value.
     * @param fromUnit The ‘Entropy’ unit to create from.
     * The default unit is JoulesPerKelvin
     */
    constructor(value: number, fromUnit?: EntropyUnits);
    /**
     * The base value of Entropy is JoulesPerKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get JoulesPerKelvin(): number;
    /** */
    get CaloriesPerKelvin(): number;
    /** */
    get JoulesPerDegreeCelsius(): number;
    /** */
    get KilojoulesPerKelvin(): number;
    /** */
    get MegajoulesPerKelvin(): number;
    /** */
    get KilocaloriesPerKelvin(): number;
    /** */
    get KilojoulesPerDegreeCelsius(): number;
    /**
     * Create a new Entropy instance from a JoulesPerKelvin
     *
     * @param value The unit as JoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromJoulesPerKelvin(value: number): Entropy;
    /**
     * Create a new Entropy instance from a CaloriesPerKelvin
     *
     * @param value The unit as CaloriesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromCaloriesPerKelvin(value: number): Entropy;
    /**
     * Create a new Entropy instance from a JoulesPerDegreeCelsius
     *
     * @param value The unit as JoulesPerDegreeCelsius to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromJoulesPerDegreeCelsius(value: number): Entropy;
    /**
     * Create a new Entropy instance from a KilojoulesPerKelvin
     *
     * @param value The unit as KilojoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromKilojoulesPerKelvin(value: number): Entropy;
    /**
     * Create a new Entropy instance from a MegajoulesPerKelvin
     *
     * @param value The unit as MegajoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromMegajoulesPerKelvin(value: number): Entropy;
    /**
     * Create a new Entropy instance from a KilocaloriesPerKelvin
     *
     * @param value The unit as KilocaloriesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromKilocaloriesPerKelvin(value: number): Entropy;
    /**
     * Create a new Entropy instance from a KilojoulesPerDegreeCelsius
     *
     * @param value The unit as KilojoulesPerDegreeCelsius to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromKilojoulesPerDegreeCelsius(value: number): Entropy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Entropy to string.
     * Note! the default format for Entropy is JoulesPerKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Entropy.
     * @returns The string format of the Entropy.
     */
    toString(toUnit?: EntropyUnits): string;
    /**
     * Check if the given Entropy are equals to the current Entropy.
     * @param entropy The other Entropy.
     * @returns True if the given Entropy are equal to the current Entropy.
     */
    equals(entropy: Entropy): boolean;
    /**
     * Compare the given Entropy against the current Entropy.
     * @param entropy The other Entropy.
     * @returns 0 if they are equal, -1 if the current Entropy is less then other, 1 if the current Entropy is greater then other.
     */
    compareTo(entropy: Entropy): number;
    /**
     * Add the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    add(entropy: Entropy): Entropy;
    /**
     * Subtract the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    subtract(entropy: Entropy): Entropy;
    /**
     * Multiply the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    multiply(entropy: Entropy): Entropy;
    /**
     * Divide the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    divide(entropy: Entropy): Entropy;
    /**
     * Modulo the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    modulo(entropy: Entropy): Entropy;
    /**
     * Pow the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    pow(entropy: Entropy): Entropy;
}
//# sourceMappingURL=entropy.g.d.ts.map