export enum CoefficientOfThermalExpansionUnits {
    InverseKelvin,
    InverseDegreeCelsius,
    InverseDegreeFahrenheit
}

export class CoefficientOfThermalExpansion {
    private value: number;
    private inversekelvinLazy: number | null = null;
    private inversedegreecelsiusLazy: number | null = null;
    private inversedegreefahrenheitLazy: number | null = null;

    public constructor(value: number, fromUnit: CoefficientOfThermalExpansionUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get InverseKelvin(): number {
        if(this.inversekelvinLazy !== null){
            return this.inversekelvinLazy;
        }
        return this.inversekelvinLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseKelvin);
    }

    public get InverseDegreeCelsius(): number {
        if(this.inversedegreecelsiusLazy !== null){
            return this.inversedegreecelsiusLazy;
        }
        return this.inversedegreecelsiusLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }

    public get InverseDegreeFahrenheit(): number {
        if(this.inversedegreefahrenheitLazy !== null){
            return this.inversedegreefahrenheitLazy;
        }
        return this.inversedegreefahrenheitLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
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
                return this.value*9/5;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: CoefficientOfThermalExpansionUnits): number {
        switch (fromUnit) {
                
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return value*5/9;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: CoefficientOfThermalExpansionUnits = CoefficientOfThermalExpansionUnits.InverseKelvin): string {

        switch (toUnit) {
            
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return this.InverseKelvin + ` K⁻¹`;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return this.InverseDegreeCelsius + ` °C⁻¹`;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return this.InverseDegreeFahrenheit + ` °F⁻¹`;
        default:
            break;
        }
        return this.value.toString();
    }
}
