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
    private kelvinsLazy: number | null = null;
    private degreescelsiusLazy: number | null = null;
    private degreesdelisleLazy: number | null = null;
    private degreesfahrenheitLazy: number | null = null;
    private degreesnewtonLazy: number | null = null;
    private degreesrankineLazy: number | null = null;
    private degreesreaumurLazy: number | null = null;
    private degreesroemerLazy: number | null = null;
    private solartemperaturesLazy: number | null = null;

    public constructor(value: number, fromUnit: TemperatureUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Kelvins(): number {
        if(this.kelvinsLazy !== null){
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureUnits.Kelvins);
    }

    public get DegreesCelsius(): number {
        if(this.degreescelsiusLazy !== null){
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureUnits.DegreesCelsius);
    }

    public get DegreesDelisle(): number {
        if(this.degreesdelisleLazy !== null){
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureUnits.DegreesDelisle);
    }

    public get DegreesFahrenheit(): number {
        if(this.degreesfahrenheitLazy !== null){
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureUnits.DegreesFahrenheit);
    }

    public get DegreesNewton(): number {
        if(this.degreesnewtonLazy !== null){
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureUnits.DegreesNewton);
    }

    public get DegreesRankine(): number {
        if(this.degreesrankineLazy !== null){
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureUnits.DegreesRankine);
    }

    public get DegreesReaumur(): number {
        if(this.degreesreaumurLazy !== null){
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureUnits.DegreesReaumur);
    }

    public get DegreesRoemer(): number {
        if(this.degreesroemerLazy !== null){
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureUnits.DegreesRoemer);
    }

    public get SolarTemperatures(): number {
        if(this.solartemperaturesLazy !== null){
            return this.solartemperaturesLazy;
        }
        return this.solartemperaturesLazy = this.convertFromBase(TemperatureUnits.SolarTemperatures);
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
