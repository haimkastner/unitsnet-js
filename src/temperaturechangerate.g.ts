export enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond,
    DegreesCelsiusPerMinute,
    Nanodegreescelsiuspersecond,
    Microdegreescelsiuspersecond,
    Centidegreescelsiuspersecond,
    Decidegreescelsiuspersecond,
    Hectodegreescelsiuspersecond,
    Kilodegreescelsiuspersecond
}

export class TemperatureChangeRate {
    private value: number;

    public constructor(value: number, fromUnit: TemperatureChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DegreesCelsiusPerSecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    public get DegreesCelsiusPerMinute(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    public get Nanodegreescelsiuspersecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.Nanodegreescelsiuspersecond);
    }

    public get Microdegreescelsiuspersecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.Microdegreescelsiuspersecond);
    }

    public get Centidegreescelsiuspersecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.Centidegreescelsiuspersecond);
    }

    public get Decidegreescelsiuspersecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.Decidegreescelsiuspersecond);
    }

    public get Hectodegreescelsiuspersecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.Hectodegreescelsiuspersecond);
    }

    public get Kilodegreescelsiuspersecond(): number {
        return this.convertFromBase(TemperatureChangeRateUnits.Kilodegreescelsiuspersecond);
    }

    public static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    public static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    public static FromNanodegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Nanodegreescelsiuspersecond);
    }

    public static FromMicrodegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Microdegreescelsiuspersecond);
    }

    public static FromCentidegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Centidegreescelsiuspersecond);
    }

    public static FromDecidegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Decidegreescelsiuspersecond);
    }

    public static FromHectodegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Hectodegreescelsiuspersecond);
    }

    public static FromKilodegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Kilodegreescelsiuspersecond);
    }

    private convertFromBase(toUnit: TemperatureChangeRateUnits): number {

            switch (toUnit) {
                
                case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                    return this.value;
                
                case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                    return this.value*60;
                
                case TemperatureChangeRateUnits.Nanodegreescelsiuspersecond:
                    return (this.value) * 1e-9;
                
                case TemperatureChangeRateUnits.Microdegreescelsiuspersecond:
                    return (this.value) * 0.000001;
                
                case TemperatureChangeRateUnits.Centidegreescelsiuspersecond:
                    return (this.value) * 0.01;
                
                case TemperatureChangeRateUnits.Decidegreescelsiuspersecond:
                    return (this.value) * 0.1;
                
                case TemperatureChangeRateUnits.Hectodegreescelsiuspersecond:
                    return (this.value) * 100;
                
                case TemperatureChangeRateUnits.Kilodegreescelsiuspersecond:
                    return (this.value) * 1000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: TemperatureChangeRateUnits): number {

                switch (fromUnit) {
                    
                case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                    return value;
                
                case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                    return value/60;
                
                case TemperatureChangeRateUnits.Nanodegreescelsiuspersecond:
                    return (value) / 1e-9;
                
                case TemperatureChangeRateUnits.Microdegreescelsiuspersecond:
                    return (value) / 0.000001;
                
                case TemperatureChangeRateUnits.Centidegreescelsiuspersecond:
                    return (value) / 0.01;
                
                case TemperatureChangeRateUnits.Decidegreescelsiuspersecond:
                    return (value) / 0.1;
                
                case TemperatureChangeRateUnits.Hectodegreescelsiuspersecond:
                    return (value) / 100;
                
                case TemperatureChangeRateUnits.Kilodegreescelsiuspersecond:
                    return (value) / 1000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
