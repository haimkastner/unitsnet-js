export declare enum CoefficientOfThermalExpansionUnits {
    InverseKelvin = 0,
    InverseDegreeCelsius = 1,
    InverseDegreeFahrenheit = 2
}
export declare class CoefficientOfThermalExpansion {
    private value;
    constructor(value: number, fromUnit: CoefficientOfThermalExpansionUnits);
    get InverseKelvin(): number;
    get InverseDegreeCelsius(): number;
    get InverseDegreeFahrenheit(): number;
    static FromInverseKelvin(value: number): CoefficientOfThermalExpansion;
    static FromInverseDegreeCelsius(value: number): CoefficientOfThermalExpansion;
    static FromInverseDegreeFahrenheit(value: number): CoefficientOfThermalExpansion;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=coefficientofthermalexpansion.g.d.ts.map