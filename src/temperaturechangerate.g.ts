export enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond,
    DegreesCelsiusPerMinute,
    NanodegreesCelsiusPerSecond,
    MicrodegreesCelsiusPerSecond,
    CentidegreesCelsiusPerSecond,
    DecidegreesCelsiusPerSecond,
    DecadegreesCelsiusPerSecond,
    HectodegreesCelsiusPerSecond,
    KilodegreesCelsiusPerSecond
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

    public get NanodegreesCelsiusPerSecond(): number {
        if(this.nanodegreescelsiuspersecondLazy !== null){
            return this.nanodegreescelsiuspersecondLazy;
        }
        return this.nanodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }

    public get MicrodegreesCelsiusPerSecond(): number {
        if(this.microdegreescelsiuspersecondLazy !== null){
            return this.microdegreescelsiuspersecondLazy;
        }
        return this.microdegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }

    public get CentidegreesCelsiusPerSecond(): number {
        if(this.centidegreescelsiuspersecondLazy !== null){
            return this.centidegreescelsiuspersecondLazy;
        }
        return this.centidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }

    public get DecidegreesCelsiusPerSecond(): number {
        if(this.decidegreescelsiuspersecondLazy !== null){
            return this.decidegreescelsiuspersecondLazy;
        }
        return this.decidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }

    public get DecadegreesCelsiusPerSecond(): number {
        if(this.decadegreescelsiuspersecondLazy !== null){
            return this.decadegreescelsiuspersecondLazy;
        }
        return this.decadegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }

    public get HectodegreesCelsiusPerSecond(): number {
        if(this.hectodegreescelsiuspersecondLazy !== null){
            return this.hectodegreescelsiuspersecondLazy;
        }
        return this.hectodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }

    public get KilodegreesCelsiusPerSecond(): number {
        if(this.kilodegreescelsiuspersecondLazy !== null){
            return this.kilodegreescelsiuspersecondLazy;
        }
        return this.kilodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }

    public static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    public static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    public static FromNanodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }

    public static FromMicrodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }

    public static FromCentidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }

    public static FromDecidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }

    public static FromDecadegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }

    public static FromHectodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }

    public static FromKilodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }

    private convertFromBase(toUnit: TemperatureChangeRateUnits): number {
        switch (toUnit) {
                
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.value*60;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
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
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond): string {

        switch (toUnit) {
            
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.DegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.DegreesCelsiusPerMinute + ` °C/min`;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return this.NanodegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return this.MicrodegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return this.CentidegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return this.DecidegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return this.DecadegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return this.HectodegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return this.KilodegreesCelsiusPerSecond + ` °C/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
