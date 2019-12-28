/** LapseRateUnits enumeration */
export declare enum LapseRateUnits {
    /** */
    DegreesCelciusPerKilometer = 0
}
/** Lapse rate is the rate at which Earth's atmospheric temperature decreases with an increase in altitude, or increases with the decrease in altitude. */
export declare class LapseRate {
    private value;
    private degreescelciusperkilometerLazy;
    /**
     * Create a new LapseRate.
     * @param value The value.
     * @param fromUnit The ‘LapseRate’ unit to create from.
     * The default unit is DegreesCelciusPerKilometer
     */
    constructor(value: number, fromUnit?: LapseRateUnits);
    /**
     * The base value of LapseRate is DegreesCelciusPerKilometer.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get DegreesCelciusPerKilometer(): number;
    /**
     * Create a new LapseRate instance from a DegreesCelciusPerKilometer
     *
     * @param value The unit as DegreesCelciusPerKilometer to create a new LapseRate from.
     * @returns The new LapseRate instance.
     */
    static FromDegreesCelciusPerKilometer(value: number): LapseRate;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the LapseRate to string.
     * Note! the default format for LapseRate is DegreesCelciusPerKilometer.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LapseRate.
     * @returns The string format of the LapseRate.
     */
    toString(toUnit?: LapseRateUnits): string;
    /**
     * Check if the given LapseRate are equals to the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns True if the given LapseRate are equal to the current LapseRate.
     */
    equals(lapseRate: LapseRate): boolean;
    /**
     * Compare the given LapseRate against the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns 0 if they are equal, -1 if the current LapseRate is less then other, 1 if the current LapseRate is greater then other.
     */
    compareTo(lapseRate: LapseRate): number;
    /**
     * Add the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    add(lapseRate: LapseRate): LapseRate;
    /**
     * Subtract the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    subtract(lapseRate: LapseRate): LapseRate;
    /**
     * Multiply the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    multiply(lapseRate: LapseRate): LapseRate;
    /**
     * Divide the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    divide(lapseRate: LapseRate): LapseRate;
    /**
     * Modulo the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    modulo(lapseRate: LapseRate): LapseRate;
    /**
     * Pow the given LapseRate with the current LapseRate.
     * @param lapseRate The other LapseRate.
     * @returns A new LapseRate instance with the results.
     */
    pow(lapseRate: LapseRate): LapseRate;
}
//# sourceMappingURL=lapserate.g.d.ts.map