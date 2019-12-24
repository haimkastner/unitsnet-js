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

    public constructor(value: number, fromUnit: TemperatureDeltaUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Kelvins(): number {
        return this.convertFromBase(TemperatureDeltaUnits.Kelvins);
    }

    public get DegreesCelsius(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesCelsius);
    }

    public get DegreesDelisle(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesDelisle);
    }

    public get DegreesFahrenheit(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesFahrenheit);
    }

    public get DegreesNewton(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesNewton);
    }

    public get DegreesRankine(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesRankine);
    }

    public get DegreesReaumur(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesReaumur);
    }

    public get DegreesRoemer(): number {
        return this.convertFromBase(TemperatureDeltaUnits.DegreesRoemer);
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
