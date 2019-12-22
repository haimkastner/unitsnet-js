export declare enum ThermalConductivityUnits {
    WattsPerMeterKelvin = 0,
    BtusPerHourFootFahrenheit = 1
}
export declare class ThermalConductivity {
    private value;
    constructor(value: number, fromUnit: ThermalConductivityUnits);
    get WattsPerMeterKelvin(): number;
    get BtusPerHourFootFahrenheit(): number;
    static FromWattsPerMeterKelvin(value: number): ThermalConductivity;
    static FromBtusPerHourFootFahrenheit(value: number): ThermalConductivity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=thermalconductivity.g.d.ts.map