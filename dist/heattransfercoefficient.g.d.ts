export declare enum HeatTransferCoefficientUnits {
    WattsPerSquareMeterKelvin = 0,
    WattsPerSquareMeterCelsius = 1,
    BtusPerSquareFootDegreeFahrenheit = 2
}
export declare class HeatTransferCoefficient {
    private value;
    constructor(value: number, fromUnit: HeatTransferCoefficientUnits);
    get WattsPerSquareMeterKelvin(): number;
    get WattsPerSquareMeterCelsius(): number;
    get BtusPerSquareFootDegreeFahrenheit(): number;
    static FromWattsPerSquareMeterKelvin(value: number): HeatTransferCoefficient;
    static FromWattsPerSquareMeterCelsius(value: number): HeatTransferCoefficient;
    static FromBtusPerSquareFootDegreeFahrenheit(value: number): HeatTransferCoefficient;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=heattransfercoefficient.g.d.ts.map