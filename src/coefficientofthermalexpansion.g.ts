export enum CoefficientOfThermalExpansionUnits {
    InverseKelvin,
    InverseDegreeCelsius,
    InverseDegreeFahrenheit
}

export class CoefficientOfThermalExpansion {
    private value: number;

    public constructor(value: number, fromUnit: CoefficientOfThermalExpansionUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get InverseKelvin(): number {
        return this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseKelvin);
    }

    public get InverseDegreeCelsius(): number {
        return this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }

    public get InverseDegreeFahrenheit(): number {
        return this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }

    public static FromInverseKelvin(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseKelvin);
    }

    public static FromInverseDegreeCelsius(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }

    public static FromInverseDegreeFahrenheit(value: number): CoefficientOfThermalExpansion {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }

    private convertFromBase(toUnit: CoefficientOfThermalExpansionUnits): number {

            switch (toUnit) {
                
                case CoefficientOfThermalExpansionUnits.InverseKelvin:
                    return this.value;
                
                case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                    return this.value;
                
                case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                    return this.value*5/9;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: CoefficientOfThermalExpansionUnits): number {

                switch (fromUnit) {
                    
                case CoefficientOfThermalExpansionUnits.InverseKelvin:
                    return this.value;
                
                case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                    return this.value;
                
                case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                    return this.value*9/5;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
