/** FuelEfficiencyUnits enumeration */
export declare enum FuelEfficiencyUnits {
    /** */
    LitersPer100Kilometers = 0,
    /** */
    MilesPerUsGallon = 1,
    /** */
    MilesPerUkGallon = 2,
    /** */
    KilometersPerLiters = 3
}
/** Fuel efficiency is a form of thermal efficiency, meaning the ratio from effort to result of a process that converts chemical potential energy contained in a carrier (fuel) into kinetic energy or work. Fuel economy is stated as "fuel consumption" in liters per 100 kilometers (L/100 km). In countries using non-metric system, fuel economy is expressed in miles per gallon (mpg) (imperial galon or US galon). */
export declare class FuelEfficiency {
    private value;
    private litersper100kilometersLazy;
    private milesperusgallonLazy;
    private milesperukgallonLazy;
    private kilometersperlitersLazy;
    /**
     * Create a new FuelEfficiency.
     * @param value The value.
     * @param fromUnit The ‘FuelEfficiency’ unit to create from.
     * The default unit is LitersPer100Kilometers
     */
    constructor(value: number, fromUnit?: FuelEfficiencyUnits);
    /**
     * The base value of FuelEfficiency is LitersPer100Kilometers.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get LitersPer100Kilometers(): number;
    /** */
    get MilesPerUsGallon(): number;
    /** */
    get MilesPerUkGallon(): number;
    /** */
    get KilometersPerLiters(): number;
    /**
     * Create a new FuelEfficiency instance from a LitersPer100Kilometers
     *
     * @param value The unit as LitersPer100Kilometers to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromLitersPer100Kilometers(value: number): FuelEfficiency;
    /**
     * Create a new FuelEfficiency instance from a MilesPerUsGallon
     *
     * @param value The unit as MilesPerUsGallon to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromMilesPerUsGallon(value: number): FuelEfficiency;
    /**
     * Create a new FuelEfficiency instance from a MilesPerUkGallon
     *
     * @param value The unit as MilesPerUkGallon to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromMilesPerUkGallon(value: number): FuelEfficiency;
    /**
     * Create a new FuelEfficiency instance from a KilometersPerLiters
     *
     * @param value The unit as KilometersPerLiters to create a new FuelEfficiency from.
     * @returns The new FuelEfficiency instance.
     */
    static FromKilometersPerLiters(value: number): FuelEfficiency;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the FuelEfficiency to string.
     * Note! the default format for FuelEfficiency is LitersPer100Kilometers.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the FuelEfficiency.
     * @returns The string format of the FuelEfficiency.
     */
    toString(toUnit?: FuelEfficiencyUnits): string;
    /**
     * Check if the given FuelEfficiency are equals to the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns True if the given FuelEfficiency are equal to the current FuelEfficiency.
     */
    equals(fuelEfficiency: FuelEfficiency): boolean;
    /**
     * Compare the given FuelEfficiency against the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns 0 if they are equal, -1 if the current FuelEfficiency is less then other, 1 if the current FuelEfficiency is greater then other.
     */
    compareTo(fuelEfficiency: FuelEfficiency): number;
    /**
     * Add the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    add(fuelEfficiency: FuelEfficiency): FuelEfficiency;
    /**
     * Subtract the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    subtract(fuelEfficiency: FuelEfficiency): FuelEfficiency;
    /**
     * Multiply the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    multiply(fuelEfficiency: FuelEfficiency): FuelEfficiency;
    /**
     * Divide the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    divide(fuelEfficiency: FuelEfficiency): FuelEfficiency;
    /**
     * Modulo the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    modulo(fuelEfficiency: FuelEfficiency): FuelEfficiency;
    /**
     * Pow the given FuelEfficiency with the current FuelEfficiency.
     * @param fuelEfficiency The other FuelEfficiency.
     * @returns A new FuelEfficiency instance with the results.
     */
    pow(fuelEfficiency: FuelEfficiency): FuelEfficiency;
}
//# sourceMappingURL=fuelefficiency.g.d.ts.map