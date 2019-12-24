export enum TemperatureUnits {
    Kelvins,
    DegreesCelsius,
    DegreesDelisle,
    DegreesFahrenheit,
    DegreesNewton,
    DegreesRankine,
    DegreesReaumur,
    DegreesRoemer,
    SolarTemperatures
}

export class Temperature {
    private value: number;

    public constructor(value: number, fromUnit: TemperatureUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Kelvins(): number {
        return this.convertFromBase(TemperatureUnits.Kelvins);
    }

    public get DegreesCelsius(): number {
        return this.convertFromBase(TemperatureUnits.DegreesCelsius);
    }

    public get DegreesDelisle(): number {
        return this.convertFromBase(TemperatureUnits.DegreesDelisle);
    }

    public get DegreesFahrenheit(): number {
        return this.convertFromBase(TemperatureUnits.DegreesFahrenheit);
    }

    public get DegreesNewton(): number {
        return this.convertFromBase(TemperatureUnits.DegreesNewton);
    }

    public get DegreesRankine(): number {
        return this.convertFromBase(TemperatureUnits.DegreesRankine);
    }

    public get DegreesReaumur(): number {
        return this.convertFromBase(TemperatureUnits.DegreesReaumur);
    }

    public get DegreesRoemer(): number {
        return this.convertFromBase(TemperatureUnits.DegreesRoemer);
    }

    public get SolarTemperatures(): number {
        return this.convertFromBase(TemperatureUnits.SolarTemperatures);
    }

    public static FromKelvins(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.Kelvins);
    }

    public static FromDegreesCelsius(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesCelsius);
    }

    public static FromDegreesDelisle(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesDelisle);
    }

    public static FromDegreesFahrenheit(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesFahrenheit);
    }

    public static FromDegreesNewton(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesNewton);
    }

    public static FromDegreesRankine(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesRankine);
    }

    public static FromDegreesReaumur(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesReaumur);
    }

    public static FromDegreesRoemer(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.DegreesRoemer);
    }

    public static FromSolarTemperatures(value: number): Temperature {
        return new Temperature(value, TemperatureUnits.SolarTemperatures);
    }

    private convertFromBase(toUnit: TemperatureUnits): number {

                switch (toUnit) {
                    
                case TemperatureUnits.Kelvins:
                    return this.value;
                
                case TemperatureUnits.DegreesCelsius:
                    return this.value - 273.15;
                
                case TemperatureUnits.DegreesDelisle:
                    return (this.value - 373.15)*-3/2;
                
                case TemperatureUnits.DegreesFahrenheit:
                    return (this.value - 459.67*5/9)*9/5;
                
                case TemperatureUnits.DegreesNewton:
                    return (this.value - 273.15)*33/100;
                
                case TemperatureUnits.DegreesRankine:
                    return this.value*9/5;
                
                case TemperatureUnits.DegreesReaumur:
                    return (this.value - 273.15)*4/5;
                
                case TemperatureUnits.DegreesRoemer:
                    return (this.value - (273.15 - 7.5*40/21))*21/40;
                
                case TemperatureUnits.SolarTemperatures:
                    return this.value / 5778;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: TemperatureUnits): number {

                switch (fromUnit) {
                    
                case TemperatureUnits.Kelvins:
                    return value;
                
                case TemperatureUnits.DegreesCelsius:
                    return value + 273.15;
                
                case TemperatureUnits.DegreesDelisle:
                    return value*-2/3 + 373.15;
                
                case TemperatureUnits.DegreesFahrenheit:
                    return value*5/9 + 459.67*5/9;
                
                case TemperatureUnits.DegreesNewton:
                    return value*100/33 + 273.15;
                
                case TemperatureUnits.DegreesRankine:
                    return value*5/9;
                
                case TemperatureUnits.DegreesReaumur:
                    return value*5/4 + 273.15;
                
                case TemperatureUnits.DegreesRoemer:
                    return value*40/21 + 273.15 - 7.5*40/21;
                
                case TemperatureUnits.SolarTemperatures:
                    return value * 5778;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
