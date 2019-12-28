/** TemperatureUnits enumeration */
export declare enum TemperatureUnits {
    /** */
    Kelvins = 0,
    /** */
    DegreesCelsius = 1,
    /** */
    DegreesDelisle = 2,
    /** */
    DegreesFahrenheit = 3,
    /** */
    DegreesNewton = 4,
    /** */
    DegreesRankine = 5,
    /** */
    DegreesReaumur = 6,
    /** */
    DegreesRoemer = 7,
    /** */
    SolarTemperatures = 8
}
/** A temperature is a numerical measure of hot or cold. Its measurement is by detection of heat radiation or particle velocity or kinetic energy, or by the bulk behavior of a thermometric material. It may be calibrated in any of various temperature scales, Celsius, Fahrenheit, Kelvin, etc. The fundamental physical definition of temperature is provided by thermodynamics. */
export declare class Temperature {
    private value;
    private kelvinsLazy;
    private degreescelsiusLazy;
    private degreesdelisleLazy;
    private degreesfahrenheitLazy;
    private degreesnewtonLazy;
    private degreesrankineLazy;
    private degreesreaumurLazy;
    private degreesroemerLazy;
    private solartemperaturesLazy;
    /**
     * Create a new Temperature.
     * @param value The value.
     * @param fromUnit The ‘Temperature’ unit to create from.
     * The default unit is Kelvins
     */
    constructor(value: number, fromUnit?: TemperatureUnits);
    /**
     * The base value of Temperature is Kelvins.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Kelvins(): number;
    /** */
    get DegreesCelsius(): number;
    /** */
    get DegreesDelisle(): number;
    /** */
    get DegreesFahrenheit(): number;
    /** */
    get DegreesNewton(): number;
    /** */
    get DegreesRankine(): number;
    /** */
    get DegreesReaumur(): number;
    /** */
    get DegreesRoemer(): number;
    /** */
    get SolarTemperatures(): number;
    /**
     * Create a new Temperature instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromKelvins(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesCelsius(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesDelisle(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesFahrenheit(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesNewton(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesRankine(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesReaumur(value: number): Temperature;
    /**
     * Create a new Temperature instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromDegreesRoemer(value: number): Temperature;
    /**
     * Create a new Temperature instance from a SolarTemperatures
     *
     * @param value The unit as SolarTemperatures to create a new Temperature from.
     * @returns The new Temperature instance.
     */
    static FromSolarTemperatures(value: number): Temperature;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Temperature to string.
     * Note! the default format for Temperature is Kelvins.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Temperature.
     * @returns The string format of the Temperature.
     */
    toString(toUnit?: TemperatureUnits): string;
    /**
     * Check if the given Temperature are equals to the current Temperature.
     * @param temperature The other Temperature.
     * @returns True if the given Temperature are equal to the current Temperature.
     */
    equals(temperature: Temperature): boolean;
    /**
     * Compare the given Temperature against the current Temperature.
     * @param temperature The other Temperature.
     * @returns 0 if they are equal, -1 if the current Temperature is less then other, 1 if the current Temperature is greater then other.
     */
    compareTo(temperature: Temperature): number;
    /**
     * Add the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    add(temperature: Temperature): Temperature;
    /**
     * Subtract the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    subtract(temperature: Temperature): Temperature;
    /**
     * Multiply the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    multiply(temperature: Temperature): Temperature;
    /**
     * Divide the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    divide(temperature: Temperature): Temperature;
    /**
     * Modulo the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    modulo(temperature: Temperature): Temperature;
    /**
     * Pow the given Temperature with the current Temperature.
     * @param temperature The other Temperature.
     * @returns A new Temperature instance with the results.
     */
    pow(temperature: Temperature): Temperature;
}
//# sourceMappingURL=temperature.g.d.ts.map