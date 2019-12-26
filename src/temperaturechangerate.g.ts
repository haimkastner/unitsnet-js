export enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond,
    DegreesCelsiusPerMinute,
    NanodegreeCelsiusPerSecond,
    MicrodegreeCelsiusPerSecond,
    CentidegreeCelsiusPerSecond,
    DecidegreeCelsiusPerSecond,
    DecadegreeCelsiusPerSecond,
    HectodegreeCelsiusPerSecond,
    KilodegreeCelsiusPerSecond
}

export class TemperatureChangeRate {
    private value: number;
    private degreescelsiuspersecondLazy: number | null = null;
    private degreescelsiusperminuteLazy: number | null = null;
    private nanodegreecelsiuspersecondLazy: number | null = null;
    private microdegreecelsiuspersecondLazy: number | null = null;
    private centidegreecelsiuspersecondLazy: number | null = null;
    private decidegreecelsiuspersecondLazy: number | null = null;
    private decadegreecelsiuspersecondLazy: number | null = null;
    private hectodegreecelsiuspersecondLazy: number | null = null;
    private kilodegreecelsiuspersecondLazy: number | null = null;

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

    public get NanodegreeCelsiusPerSecond(): number {
        if(this.nanodegreecelsiuspersecondLazy !== null){
            return this.nanodegreecelsiuspersecondLazy;
        }
        return this.nanodegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond);
    }

    public get MicrodegreeCelsiusPerSecond(): number {
        if(this.microdegreecelsiuspersecondLazy !== null){
            return this.microdegreecelsiuspersecondLazy;
        }
        return this.microdegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond);
    }

    public get CentidegreeCelsiusPerSecond(): number {
        if(this.centidegreecelsiuspersecondLazy !== null){
            return this.centidegreecelsiuspersecondLazy;
        }
        return this.centidegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond);
    }

    public get DecidegreeCelsiusPerSecond(): number {
        if(this.decidegreecelsiuspersecondLazy !== null){
            return this.decidegreecelsiuspersecondLazy;
        }
        return this.decidegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond);
    }

    public get DecadegreeCelsiusPerSecond(): number {
        if(this.decadegreecelsiuspersecondLazy !== null){
            return this.decadegreecelsiuspersecondLazy;
        }
        return this.decadegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond);
    }

    public get HectodegreeCelsiusPerSecond(): number {
        if(this.hectodegreecelsiuspersecondLazy !== null){
            return this.hectodegreecelsiuspersecondLazy;
        }
        return this.hectodegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond);
    }

    public get KilodegreeCelsiusPerSecond(): number {
        if(this.kilodegreecelsiuspersecondLazy !== null){
            return this.kilodegreecelsiuspersecondLazy;
        }
        return this.kilodegreecelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond);
    }

    public static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    public static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    public static FromNanodegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond);
    }

    public static FromMicrodegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond);
    }

    public static FromCentidegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond);
    }

    public static FromDecidegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond);
    }

    public static FromDecadegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond);
    }

    public static FromHectodegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond);
    }

    public static FromKilodegreeCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond);
    }

    private convertFromBase(toUnit: TemperatureChangeRateUnits): number {
        switch (toUnit) {
                
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.value*60;
            case TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond:
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond:
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
            case TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond:
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond:
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
            case TemperatureChangeRateUnits.NanodegreeCelsiusPerSecond:
                return this.NanodegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.MicrodegreeCelsiusPerSecond:
                return this.MicrodegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.CentidegreeCelsiusPerSecond:
                return this.CentidegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecidegreeCelsiusPerSecond:
                return this.DecidegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DecadegreeCelsiusPerSecond:
                return this.DecadegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.HectodegreeCelsiusPerSecond:
                return this.HectodegreeCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.KilodegreeCelsiusPerSecond:
                return this.KilodegreeCelsiusPerSecond + ` °C/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
