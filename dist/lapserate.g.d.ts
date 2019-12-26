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
     */
    constructor(value: number, fromUnit: LapseRateUnits);
    /**
     * The base value of LapseRate is DegreeCelsiusPerKilometer.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=lapserate.g.d.ts.map