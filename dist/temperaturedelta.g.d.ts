/** TemperatureDeltaUnits enumeration */
export declare enum TemperatureDeltaUnits {
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
    DegreesRoemer = 7
}
/** Difference between two temperatures. The conversions are different than for Temperature. */
export declare class TemperatureDelta {
    private value;
    private kelvinsLazy;
    private degreescelsiusLazy;
    private degreesdelisleLazy;
    private degreesfahrenheitLazy;
    private degreesnewtonLazy;
    private degreesrankineLazy;
    private degreesreaumurLazy;
    private degreesroemerLazy;
    /**
     * Create a new TemperatureDelta.
     * @param value The value.
     * @param fromUnit The ‘TemperatureDelta’ unit to create from.
     * The default unit is Kelvins
     */
    constructor(value: number, fromUnit?: TemperatureDeltaUnits);
    /**
     * The base value of TemperatureDelta is Kelvins.
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
    /**
     * Create a new TemperatureDelta instance from a Kelvins
     *
     * @param value The unit as Kelvins to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromKelvins(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesCelsius
     *
     * @param value The unit as DegreesCelsius to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesCelsius(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesDelisle
     *
     * @param value The unit as DegreesDelisle to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesDelisle(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesFahrenheit
     *
     * @param value The unit as DegreesFahrenheit to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesFahrenheit(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesNewton
     *
     * @param value The unit as DegreesNewton to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesNewton(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesRankine
     *
     * @param value The unit as DegreesRankine to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesRankine(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesReaumur
     *
     * @param value The unit as DegreesReaumur to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesReaumur(value: number): TemperatureDelta;
    /**
     * Create a new TemperatureDelta instance from a DegreesRoemer
     *
     * @param value The unit as DegreesRoemer to create a new TemperatureDelta from.
     * @returns The new TemperatureDelta instance.
     */
    static FromDegreesRoemer(value: number): TemperatureDelta;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the TemperatureDelta to string.
     * Note! the default format for TemperatureDelta is Kelvins.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the TemperatureDelta.
     * @returns The string format of the TemperatureDelta.
     */
    toString(toUnit?: TemperatureDeltaUnits): string;
    /**
     * Check if the given TemperatureDelta are equals to the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns True if the given TemperatureDelta are equal to the current TemperatureDelta.
     */
    equals(temperatureDelta: TemperatureDelta): boolean;
    /**
     * Compare the given TemperatureDelta against the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns 0 if they are equal, -1 if the current TemperatureDelta is less then other, 1 if the current TemperatureDelta is greater then other.
     */
    compareTo(temperatureDelta: TemperatureDelta): number;
    /**
     * Add the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    add(temperatureDelta: TemperatureDelta): TemperatureDelta;
    /**
     * Subtract the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    subtract(temperatureDelta: TemperatureDelta): TemperatureDelta;
    /**
     * Multiply the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    multiply(temperatureDelta: TemperatureDelta): TemperatureDelta;
    /**
     * Divide the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    divide(temperatureDelta: TemperatureDelta): TemperatureDelta;
    /**
     * Modulo the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    modulo(temperatureDelta: TemperatureDelta): TemperatureDelta;
    /**
     * Pow the given TemperatureDelta with the current TemperatureDelta.
     * @param temperatureDelta The other TemperatureDelta.
     * @returns A new TemperatureDelta instance with the results.
     */
    pow(temperatureDelta: TemperatureDelta): TemperatureDelta;
}
//# sourceMappingURL=temperaturedelta.g.d.ts.map