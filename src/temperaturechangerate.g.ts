export enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond,
    DegreesCelsiusPerMinute,
    Nanodegreescelsiuspersecond,
    Microdegreescelsiuspersecond,
    Centidegreescelsiuspersecond,
    Decidegreescelsiuspersecond,
    Decadegreescelsiuspersecond,
    Hectodegreescelsiuspersecond,
    Kilodegreescelsiuspersecond
}

export class TemperatureChangeRate {
    private value: number;
    private degreescelsiuspersecondLazy: number | null = null;
    private degreescelsiusperminuteLazy: number | null = null;
    private nanodegreescelsiuspersecondLazy: number | null = null;
    private microdegreescelsiuspersecondLazy: number | null = null;
    private centidegreescelsiuspersecondLazy: number | null = null;
    private decidegreescelsiuspersecondLazy: number | null = null;
    private decadegreescelsiuspersecondLazy: number | null = null;
    private hectodegreescelsiuspersecondLazy: number | null = null;
    private kilodegreescelsiuspersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: TemperatureChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DegreesCelsiusPerSecond(): number {
        if(this.degreescelsiuspersecondLazy !== null){
            return this.degreescelsiuspersecondLazy;
        }
        return this.degreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    public get DegreesCelsiusPerMinute(): number {
        if(this.degreescelsiusperminuteLazy !== null){
            return this.degreescelsiusperminuteLazy;
        }
        return this.degreescelsiusperminuteLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    public get Nanodegreescelsiuspersecond(): number {
        if(this.nanodegreescelsiuspersecondLazy !== null){
            return this.nanodegreescelsiuspersecondLazy;
        }
        return this.nanodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Nanodegreescelsiuspersecond);
    }

    public get Microdegreescelsiuspersecond(): number {
        if(this.microdegreescelsiuspersecondLazy !== null){
            return this.microdegreescelsiuspersecondLazy;
        }
        return this.microdegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Microdegreescelsiuspersecond);
    }

    public get Centidegreescelsiuspersecond(): number {
        if(this.centidegreescelsiuspersecondLazy !== null){
            return this.centidegreescelsiuspersecondLazy;
        }
        return this.centidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Centidegreescelsiuspersecond);
    }

    public get Decidegreescelsiuspersecond(): number {
        if(this.decidegreescelsiuspersecondLazy !== null){
            return this.decidegreescelsiuspersecondLazy;
        }
        return this.decidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Decidegreescelsiuspersecond);
    }

    public get Decadegreescelsiuspersecond(): number {
        if(this.decadegreescelsiuspersecondLazy !== null){
            return this.decadegreescelsiuspersecondLazy;
        }
        return this.decadegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Decadegreescelsiuspersecond);
    }

    public get Hectodegreescelsiuspersecond(): number {
        if(this.hectodegreescelsiuspersecondLazy !== null){
            return this.hectodegreescelsiuspersecondLazy;
        }
        return this.hectodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Hectodegreescelsiuspersecond);
    }

    public get Kilodegreescelsiuspersecond(): number {
        if(this.kilodegreescelsiuspersecondLazy !== null){
            return this.kilodegreescelsiuspersecondLazy;
        }
        return this.kilodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.Kilodegreescelsiuspersecond);
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

    public static FromDecadegreescelsiuspersecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.Decadegreescelsiuspersecond);
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
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.Microdegreescelsiuspersecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.Centidegreescelsiuspersecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.Decidegreescelsiuspersecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.Decadegreescelsiuspersecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.Hectodegreescelsiuspersecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.Kilodegreescelsiuspersecond:
                return (this.value) / 1000;
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
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.Microdegreescelsiuspersecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.Centidegreescelsiuspersecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.Decidegreescelsiuspersecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.Decadegreescelsiuspersecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.Hectodegreescelsiuspersecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.Kilodegreescelsiuspersecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
