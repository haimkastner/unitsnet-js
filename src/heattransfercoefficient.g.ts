export enum HeatTransferCoefficientUnits {
    WattsPerSquareMeterKelvin,
    WattsPerSquareMeterCelsius,
    BtusPerSquareFootDegreeFahrenheit
}

export class HeatTransferCoefficient {
    private value: number;
    private wattspersquaremeterkelvinLazy: number | null = null;
    private wattspersquaremetercelsiusLazy: number | null = null;
    private btuspersquarefootdegreefahrenheitLazy: number | null = null;

    public constructor(value: number, fromUnit: HeatTransferCoefficientUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerSquareMeterKelvin(): number {
        if(this.wattspersquaremeterkelvinLazy !== null){
            return this.wattspersquaremeterkelvinLazy;
        }
        return this.wattspersquaremeterkelvinLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }

    public get WattsPerSquareMeterCelsius(): number {
        if(this.wattspersquaremetercelsiusLazy !== null){
            return this.wattspersquaremetercelsiusLazy;
        }
        return this.wattspersquaremetercelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }

    public get BtusPerSquareFootDegreeFahrenheit(): number {
        if(this.btuspersquarefootdegreefahrenheitLazy !== null){
            return this.btuspersquarefootdegreefahrenheitLazy;
        }
        return this.btuspersquarefootdegreefahrenheitLazy = this.convertFromBase(HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit);
    }

    public static FromWattsPerSquareMeterKelvin(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }

    public static FromWattsPerSquareMeterCelsius(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }

    public static FromBtusPerSquareFootDegreeFahrenheit(value: number): HeatTransferCoefficient {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit);
    }

    private convertFromBase(toUnit: HeatTransferCoefficientUnits): number {
        switch (toUnit) {
                
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return this.value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return this.value;
            case HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit:
                return this.value / 5.6782633411134878;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: HeatTransferCoefficientUnits): number {
        switch (fromUnit) {
                
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return value;
            case HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit:
                return value * 5.6782633411134878;
            default:
                break;
        }
        return NaN;
    }
}
