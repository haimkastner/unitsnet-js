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
     */
    constructor(value: number, fromUnit: ThermalConductivityUnits);
    /**
     * The base value of ThermalConductivity is WattPerMeterKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=thermalconductivity.g.d.ts.map