export enum TemperatureDeltaUnits {
    Kelvins,
    DegreesCelsius,
    DegreesDelisle,
    DegreesFahrenheit,
    DegreesNewton,
    DegreesRankine,
    DegreesReaumur,
    DegreesRoemer
}

export class TemperatureDelta {
    private value: number;
    private kelvinsLazy: number | null = null;
    private degreescelsiusLazy: number | null = null;
    private degreesdelisleLazy: number | null = null;
    private degreesfahrenheitLazy: number | null = null;
    private degreesnewtonLazy: number | null = null;
    private degreesrankineLazy: number | null = null;
    private degreesreaumurLazy: number | null = null;
    private degreesroemerLazy: number | null = null;

    public constructor(value: number, fromUnit: TemperatureDeltaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Kelvins(): number {
        if(this.kelvinsLazy !== null){
            return this.kelvinsLazy;
        }
        return this.kelvinsLazy = this.convertFromBase(TemperatureDeltaUnits.Kelvins);
    }

    public get DegreesCelsius(): number {
        if(this.degreescelsiusLazy !== null){
            return this.degreescelsiusLazy;
        }
        return this.degreescelsiusLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesCelsius);
    }

    public get DegreesDelisle(): number {
        if(this.degreesdelisleLazy !== null){
            return this.degreesdelisleLazy;
        }
        return this.degreesdelisleLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesDelisle);
    }

    public get DegreesFahrenheit(): number {
        if(this.degreesfahrenheitLazy !== null){
            return this.degreesfahrenheitLazy;
        }
        return this.degreesfahrenheitLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesFahrenheit);
    }

    public get DegreesNewton(): number {
        if(this.degreesnewtonLazy !== null){
            return this.degreesnewtonLazy;
        }
        return this.degreesnewtonLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesNewton);
    }

    public get DegreesRankine(): number {
        if(this.degreesrankineLazy !== null){
            return this.degreesrankineLazy;
        }
        return this.degreesrankineLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesRankine);
    }

    public get DegreesReaumur(): number {
        if(this.degreesreaumurLazy !== null){
            return this.degreesreaumurLazy;
        }
        return this.degreesreaumurLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesReaumur);
    }

    public get DegreesRoemer(): number {
        if(this.degreesroemerLazy !== null){
            return this.degreesroemerLazy;
        }
        return this.degreesroemerLazy = this.convertFromBase(TemperatureDeltaUnits.DegreesRoemer);
    }

    public static FromKelvins(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.Kelvins);
    }

    public static FromDegreesCelsius(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesCelsius);
    }

    public static FromDegreesDelisle(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesDelisle);
    }

    public static FromDegreesFahrenheit(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesFahrenheit);
    }

    public static FromDegreesNewton(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesNewton);
    }

    public static FromDegreesRankine(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRankine);
    }

    public static FromDegreesReaumur(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesReaumur);
    }

    public static FromDegreesRoemer(value: number): TemperatureDelta {
        return new TemperatureDelta(value, TemperatureDeltaUnits.DegreesRoemer);
    }

    private convertFromBase(toUnit: TemperatureDeltaUnits): number {
        switch (toUnit) {
                
            case TemperatureDeltaUnits.Kelvins:
                return this.value;
            case TemperatureDeltaUnits.DegreesCelsius:
                return this.value;
            case TemperatureDeltaUnits.DegreesDelisle:
                return this.value*-3/2;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return this.value*9/5;
            case TemperatureDeltaUnits.DegreesNewton:
                return this.value*33/100;
            case TemperatureDeltaUnits.DegreesRankine:
                return this.value*9/5;
            case TemperatureDeltaUnits.DegreesReaumur:
                return this.value*4/5;
            case TemperatureDeltaUnits.DegreesRoemer:
                return this.value*21/40;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TemperatureDeltaUnits): number {
        switch (fromUnit) {
                
            case TemperatureDeltaUnits.Kelvins:
                return value;
            case TemperatureDeltaUnits.DegreesCelsius:
                return value;
            case TemperatureDeltaUnits.DegreesDelisle:
                return value*-2/3;
            case TemperatureDeltaUnits.DegreesFahrenheit:
                return value*5/9;
            case TemperatureDeltaUnits.DegreesNewton:
                return value*100/33;
            case TemperatureDeltaUnits.DegreesRankine:
                return value*5/9;
            case TemperatureDeltaUnits.DegreesReaumur:
                return value*5/4;
            case TemperatureDeltaUnits.DegreesRoemer:
                return value*40/21;
            default:
                break;
        }
        return NaN;
    }
}
