export enum ThermalResistanceUnits {
    SquareMeterKelvinsPerKilowatt,
    SquareMeterDegreesCelsiusPerWatt,
    SquareCentimeterKelvinsPerWatt,
    SquareCentimeterHourDegreesCelsiusPerKilocalorie,
    HourSquareFeetDegreesFahrenheitPerBtu
}

export class ThermalResistance {
    private value: number;

    public constructor(value: number, fromUnit: ThermalResistanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SquareMeterKelvinsPerKilowatt(): number {
        return this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    public get SquareMeterDegreesCelsiusPerWatt(): number {
        return this.convertFromBase(ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    public get SquareCentimeterKelvinsPerWatt(): number {
        return this.convertFromBase(ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    public get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number {
        return this.convertFromBase(ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    public get HourSquareFeetDegreesFahrenheitPerBtu(): number {
        return this.convertFromBase(ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    public static FromSquareMeterKelvinsPerKilowatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    public static FromSquareMeterDegreesCelsiusPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    public static FromSquareCentimeterKelvinsPerWatt(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    public static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    public static FromHourSquareFeetDegreesFahrenheitPerBtu(value: number): ThermalResistance {
        return new ThermalResistance(value, ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }

    private convertFromBase(toUnit: ThermalResistanceUnits): number {

                switch (toUnit) {
                    
                case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                    return this.value;
                
                case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                    return this.value/1000.088056074108;
                
                case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                    return this.value/0.0999964777570357;
                
                case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                    return this.value/0.0859779507590433;
                
                case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                    return this.value/176.1121482159839;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ThermalResistanceUnits): number {

                switch (fromUnit) {
                    
                case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                    return value;
                
                case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                    return value*1000.088056074108;
                
                case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                    return value*0.0999964777570357;
                
                case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                    return value*0.0859779507590433;
                
                case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                    return value*176.1121482159839;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
