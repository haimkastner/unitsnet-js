export enum ThermalConductivityUnits {
    WattsPerMeterKelvin,
    BtusPerHourFootFahrenheit
}

export class ThermalConductivity {
    private value: number;

    public constructor(value: number, fromUnit: ThermalConductivityUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get WattsPerMeterKelvin(): number {
        return this.convertFromBase(ThermalConductivityUnits.WattsPerMeterKelvin);
    }

    public get BtusPerHourFootFahrenheit(): number {
        return this.convertFromBase(ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }

    public static FromWattsPerMeterKelvin(value: number): ThermalConductivity {
        return new ThermalConductivity(value, ThermalConductivityUnits.WattsPerMeterKelvin);
    }

    public static FromBtusPerHourFootFahrenheit(value: number): ThermalConductivity {
        return new ThermalConductivity(value, ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }

    private convertFromBase(toUnit: ThermalConductivityUnits): number {

            switch (toUnit) {
                
                case ThermalConductivityUnits.WattsPerMeterKelvin:
                    return this.value;
                
                case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                    return this.value/1.73073467;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ThermalConductivityUnits): number {

                switch (fromUnit) {
                    
                case ThermalConductivityUnits.WattsPerMeterKelvin:
                    return value;
                
                case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                    return value*1.73073467;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
