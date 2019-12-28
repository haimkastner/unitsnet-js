/** SpecificEnergyUnits enumeration */
export declare enum SpecificEnergyUnits {
    /** */
    JoulesPerKilogram = 0,
    /** */
    CaloriesPerGram = 1,
    /** */
    WattHoursPerKilogram = 2,
    /** */
    BtuPerPound = 3,
    /** */
    KilojoulesPerKilogram = 4,
    /** */
    MegajoulesPerKilogram = 5,
    /** */
    KilocaloriesPerGram = 6,
    /** */
    KilowattHoursPerKilogram = 7,
    /** */
    MegawattHoursPerKilogram = 8
}
/** The SpecificEnergy */
export declare class SpecificEnergy {
    private value;
    private joulesperkilogramLazy;
    private caloriespergramLazy;
    private watthoursperkilogramLazy;
    private btuperpoundLazy;
    private kilojoulesperkilogramLazy;
    private megajoulesperkilogramLazy;
    private kilocaloriespergramLazy;
    private kilowatthoursperkilogramLazy;
    private megawatthoursperkilogramLazy;
    /**
     * Create a new SpecificEnergy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEnergy’ unit to create from.
     * The default unit is JoulesPerKilogram
     */
    constructor(value: number, fromUnit?: SpecificEnergyUnits);
    /**
     * The base value of SpecificEnergy is JoulesPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get JoulesPerKilogram(): number;
    /** */
    get CaloriesPerGram(): number;
    /** */
    get WattHoursPerKilogram(): number;
    /** */
    get BtuPerPound(): number;
    /** */
    get KilojoulesPerKilogram(): number;
    /** */
    get MegajoulesPerKilogram(): number;
    /** */
    get KilocaloriesPerGram(): number;
    /** */
    get KilowattHoursPerKilogram(): number;
    /** */
    get MegawattHoursPerKilogram(): number;
    /**
     * Create a new SpecificEnergy instance from a JoulesPerKilogram
     *
     * @param value The unit as JoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromJoulesPerKilogram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a CaloriesPerGram
     *
     * @param value The unit as CaloriesPerGram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromCaloriesPerGram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a WattHoursPerKilogram
     *
     * @param value The unit as WattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromWattHoursPerKilogram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a BtuPerPound
     *
     * @param value The unit as BtuPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromBtuPerPound(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a KilojoulesPerKilogram
     *
     * @param value The unit as KilojoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromKilojoulesPerKilogram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a MegajoulesPerKilogram
     *
     * @param value The unit as MegajoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromMegajoulesPerKilogram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a KilocaloriesPerGram
     *
     * @param value The unit as KilocaloriesPerGram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromKilocaloriesPerGram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a KilowattHoursPerKilogram
     *
     * @param value The unit as KilowattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromKilowattHoursPerKilogram(value: number): SpecificEnergy;
    /**
     * Create a new SpecificEnergy instance from a MegawattHoursPerKilogram
     *
     * @param value The unit as MegawattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromMegawattHoursPerKilogram(value: number): SpecificEnergy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the SpecificEnergy to string.
     * Note! the default format for SpecificEnergy is JoulesPerKilogram.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificEnergy.
     * @returns The string format of the SpecificEnergy.
     */
    toString(toUnit?: SpecificEnergyUnits): string;
    /**
     * Check if the given SpecificEnergy are equals to the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns True if the given SpecificEnergy are equal to the current SpecificEnergy.
     */
    equals(specificEnergy: SpecificEnergy): boolean;
    /**
     * Compare the given SpecificEnergy against the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns 0 if they are equal, -1 if the current SpecificEnergy is less then other, 1 if the current SpecificEnergy is greater then other.
     */
    compareTo(specificEnergy: SpecificEnergy): number;
    /**
     * Add the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    add(specificEnergy: SpecificEnergy): SpecificEnergy;
    /**
     * Subtract the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    subtract(specificEnergy: SpecificEnergy): SpecificEnergy;
    /**
     * Multiply the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    multiply(specificEnergy: SpecificEnergy): SpecificEnergy;
    /**
     * Divide the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    divide(specificEnergy: SpecificEnergy): SpecificEnergy;
    /**
     * Modulo the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    modulo(specificEnergy: SpecificEnergy): SpecificEnergy;
    /**
     * Pow the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    pow(specificEnergy: SpecificEnergy): SpecificEnergy;
}
//# sourceMappingURL=specificenergy.g.d.ts.map