export enum ThermalResistanceUnits {
    SquareMeterKelvinsPerKilowatt,
    SquareMeterDegreesCelsiusPerWatt,
    SquareCentimeterKelvinsPerWatt,
    SquareCentimeterHourDegreesCelsiusPerKilocalorie,
    HourSquareFeetDegreesFahrenheitPerBtu
}

export class ThermalResistance {
    private value: number;
    private squaremeterkelvinsperkilowattLazy: number | null = null;
    private squaremeterdegreescelsiusperwattLazy: number | null = null;
    private squarecentimeterkelvinsperwattLazy: number | null = null;
    private squarecentimeterhourdegreescelsiusperkilocalorieLazy: number | null = null;
    private hoursquarefeetdegreesfahrenheitperbtuLazy: number | null = null;

    public constructor(value: number, fromUnit: ThermalResistanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get SquareMeterKelvinsPerKilowatt(): number {
        if(this.squaremeterkelvinsperkilowattLazy !== null){
            return this.squaremeterkelvinsperkilowattLazy;
        }
        return this.squaremeterkelvinsperkilowattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }

    public get SquareMeterDegreesCelsiusPerWatt(): number {
        if(this.squaremeterdegreescelsiusperwattLazy !== null){
            return this.squaremeterdegreescelsiusperwattLazy;
        }
        return this.squaremeterdegreescelsiusperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }

    public get SquareCentimeterKelvinsPerWatt(): number {
        if(this.squarecentimeterkelvinsperwattLazy !== null){
            return this.squarecentimeterkelvinsperwattLazy;
        }
        return this.squarecentimeterkelvinsperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }

    public get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number {
        if(this.squarecentimeterhourdegreescelsiusperkilocalorieLazy !== null){
            return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy;
        }
        return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }

    public get HourSquareFeetDegreesFahrenheitPerBtu(): number {
        if(this.hoursquarefeetdegreesfahrenheitperbtuLazy !== null){
            return this.hoursquarefeetdegreesfahrenheitperbtuLazy;
        }
        return this.hoursquarefeetdegreesfahrenheitperbtuLazy = this.convertFromBase(ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
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

    public toString(toUnit: ThermalResistanceUnits = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt): string {

        switch (toUnit) {
            
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return this.SquareMeterKelvinsPerKilowatt + ` m²K/kW`;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return this.SquareMeterDegreesCelsiusPerWatt + ` m²°C/W`;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return this.SquareCentimeterKelvinsPerWatt + ` cm²K/W`;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return this.SquareCentimeterHourDegreesCelsiusPerKilocalorie + ` cm²Hr°C/kcal`;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return this.HourSquareFeetDegreesFahrenheitPerBtu + ` Hrft²°F/Btu`;
        default:
            break;
        }
        return this.value.toString();
    }
}
