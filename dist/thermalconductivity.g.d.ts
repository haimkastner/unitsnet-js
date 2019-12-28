/** ThermalConductivityUnits enumeration */
export declare enum ThermalConductivityUnits {
    /** */
    WattsPerMeterKelvin = 0,
    /** */
    BtusPerHourFootFahrenheit = 1
}
/** Thermal conductivity is the property of a material to conduct heat. */
export declare class ThermalConductivity {
    private value;
    private wattspermeterkelvinLazy;
    private btusperhourfootfahrenheitLazy;
    /**
     * Create a new ThermalConductivity.
     * @param value The value.
     * @param fromUnit The ‘ThermalConductivity’ unit to create from.
     * The default unit is WattsPerMeterKelvin
     */
    constructor(value: number, fromUnit?: ThermalConductivityUnits);
    /**
     * The base value of ThermalConductivity is WattsPerMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get WattsPerMeterKelvin(): number;
    /** */
    get BtusPerHourFootFahrenheit(): number;
    /**
     * Create a new ThermalConductivity instance from a WattsPerMeterKelvin
     *
     * @param value The unit as WattsPerMeterKelvin to create a new ThermalConductivity from.
     * @returns The new ThermalConductivity instance.
     */
    static FromWattsPerMeterKelvin(value: number): ThermalConductivity;
    /**
     * Create a new ThermalConductivity instance from a BtusPerHourFootFahrenheit
     *
     * @param value The unit as BtusPerHourFootFahrenheit to create a new ThermalConductivity from.
     * @returns The new ThermalConductivity instance.
     */
    static FromBtusPerHourFootFahrenheit(value: number): ThermalConductivity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ThermalConductivity to string.
     * Note! the default format for ThermalConductivity is WattsPerMeterKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ThermalConductivity.
     * @returns The string format of the ThermalConductivity.
     */
    toString(toUnit?: ThermalConductivityUnits): string;
    /**
     * Check if the given ThermalConductivity are equals to the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns True if the given ThermalConductivity are equal to the current ThermalConductivity.
     */
    equals(thermalConductivity: ThermalConductivity): boolean;
    /**
     * Compare the given ThermalConductivity against the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns 0 if they are equal, -1 if the current ThermalConductivity is less then other, 1 if the current ThermalConductivity is greater then other.
     */
    compareTo(thermalConductivity: ThermalConductivity): number;
    /**
     * Add the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    add(thermalConductivity: ThermalConductivity): ThermalConductivity;
    /**
     * Subtract the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    subtract(thermalConductivity: ThermalConductivity): ThermalConductivity;
    /**
     * Multiply the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    multiply(thermalConductivity: ThermalConductivity): ThermalConductivity;
    /**
     * Divide the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    divide(thermalConductivity: ThermalConductivity): ThermalConductivity;
    /**
     * Modulo the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    modulo(thermalConductivity: ThermalConductivity): ThermalConductivity;
    /**
     * Pow the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    pow(thermalConductivity: ThermalConductivity): ThermalConductivity;
}
//# sourceMappingURL=thermalconductivity.g.d.ts.map