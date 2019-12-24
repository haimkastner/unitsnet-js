export enum FuelEfficiencyUnits {
    LitersPer100Kilometers,
    MilesPerUsGallon,
    MilesPerUkGallon,
    KilometersPerLiters
}

export class FuelEfficiency {
    private value: number;

    public constructor(value: number, fromUnit: FuelEfficiencyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get LitersPer100Kilometers(): number {
        return this.convertFromBase(FuelEfficiencyUnits.LitersPer100Kilometers);
    }

    public get MilesPerUsGallon(): number {
        return this.convertFromBase(FuelEfficiencyUnits.MilesPerUsGallon);
    }

    public get MilesPerUkGallon(): number {
        return this.convertFromBase(FuelEfficiencyUnits.MilesPerUkGallon);
    }

    public get KilometersPerLiters(): number {
        return this.convertFromBase(FuelEfficiencyUnits.KilometersPerLiters);
    }

    public static FromLitersPer100Kilometers(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.LitersPer100Kilometers);
    }

    public static FromMilesPerUsGallon(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUsGallon);
    }

    public static FromMilesPerUkGallon(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUkGallon);
    }

    public static FromKilometersPerLiters(value: number): FuelEfficiency {
        return new FuelEfficiency(value, FuelEfficiencyUnits.KilometersPerLiters);
    }

    private convertFromBase(toUnit: FuelEfficiencyUnits): number {

            switch (toUnit) {
                
                case FuelEfficiencyUnits.LitersPer100Kilometers:
                    return this.value;
                
                case FuelEfficiencyUnits.MilesPerUsGallon:
                    return (100*3.785411784)/(1.609344*this.value);
                
                case FuelEfficiencyUnits.MilesPerUkGallon:
                    return (100*4.54609188)/(1.609344*this.value);
                
                case FuelEfficiencyUnits.KilometersPerLiters:
                    return 100/this.value;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: FuelEfficiencyUnits): number {

                switch (fromUnit) {
                    
                case FuelEfficiencyUnits.LitersPer100Kilometers:
                    return value;
                
                case FuelEfficiencyUnits.MilesPerUsGallon:
                    return (100*3.785411784)/(1.609344*value);
                
                case FuelEfficiencyUnits.MilesPerUkGallon:
                    return (100*4.54609188)/(1.609344*value);
                
                case FuelEfficiencyUnits.KilometersPerLiters:
                    return 100/value;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
