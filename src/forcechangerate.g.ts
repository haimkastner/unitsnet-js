export enum ForceChangeRateUnits {
    NewtonsPerMinute,
    NewtonsPerSecond,
    Decanewtonsperminute,
    Kilonewtonsperminute,
    Nanonewtonspersecond,
    Micronewtonspersecond,
    Centinewtonspersecond,
    Decinewtonspersecond,
    Decanewtonspersecond,
    Kilonewtonspersecond
}

export class ForceChangeRate {
    private value: number;
    private newtonsperminuteLazy: number | null = null;
    private newtonspersecondLazy: number | null = null;
    private decanewtonsperminuteLazy: number | null = null;
    private kilonewtonsperminuteLazy: number | null = null;
    private nanonewtonspersecondLazy: number | null = null;
    private micronewtonspersecondLazy: number | null = null;
    private centinewtonspersecondLazy: number | null = null;
    private decinewtonspersecondLazy: number | null = null;
    private decanewtonspersecondLazy: number | null = null;
    private kilonewtonspersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: ForceChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonsPerMinute(): number {
        if(this.newtonsperminuteLazy !== null){
            return this.newtonsperminuteLazy;
        }
        return this.newtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }

    public get NewtonsPerSecond(): number {
        if(this.newtonspersecondLazy !== null){
            return this.newtonspersecondLazy;
        }
        return this.newtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }

    public get Decanewtonsperminute(): number {
        if(this.decanewtonsperminuteLazy !== null){
            return this.decanewtonsperminuteLazy;
        }
        return this.decanewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.Decanewtonsperminute);
    }

    public get Kilonewtonsperminute(): number {
        if(this.kilonewtonsperminuteLazy !== null){
            return this.kilonewtonsperminuteLazy;
        }
        return this.kilonewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.Kilonewtonsperminute);
    }

    public get Nanonewtonspersecond(): number {
        if(this.nanonewtonspersecondLazy !== null){
            return this.nanonewtonspersecondLazy;
        }
        return this.nanonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Nanonewtonspersecond);
    }

    public get Micronewtonspersecond(): number {
        if(this.micronewtonspersecondLazy !== null){
            return this.micronewtonspersecondLazy;
        }
        return this.micronewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Micronewtonspersecond);
    }

    public get Centinewtonspersecond(): number {
        if(this.centinewtonspersecondLazy !== null){
            return this.centinewtonspersecondLazy;
        }
        return this.centinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Centinewtonspersecond);
    }

    public get Decinewtonspersecond(): number {
        if(this.decinewtonspersecondLazy !== null){
            return this.decinewtonspersecondLazy;
        }
        return this.decinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Decinewtonspersecond);
    }

    public get Decanewtonspersecond(): number {
        if(this.decanewtonspersecondLazy !== null){
            return this.decanewtonspersecondLazy;
        }
        return this.decanewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Decanewtonspersecond);
    }

    public get Kilonewtonspersecond(): number {
        if(this.kilonewtonspersecondLazy !== null){
            return this.kilonewtonspersecondLazy;
        }
        return this.kilonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Kilonewtonspersecond);
    }

    public static FromNewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }

    public static FromNewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }

    public static FromDecanewtonsperminute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Decanewtonsperminute);
    }

    public static FromKilonewtonsperminute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Kilonewtonsperminute);
    }

    public static FromNanonewtonspersecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Nanonewtonspersecond);
    }

    public static FromMicronewtonspersecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Micronewtonspersecond);
    }

    public static FromCentinewtonspersecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Centinewtonspersecond);
    }

    public static FromDecinewtonspersecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Decinewtonspersecond);
    }

    public static FromDecanewtonspersecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Decanewtonspersecond);
    }

    public static FromKilonewtonspersecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.Kilonewtonspersecond);
    }

    private convertFromBase(toUnit: ForceChangeRateUnits): number {
        switch (toUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value*60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.Decanewtonsperminute:
                return (this.value*60) / 10;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (this.value*60) / 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.Decanewtonspersecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForceChangeRateUnits): number {
        switch (fromUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return value/60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return value;
            case ForceChangeRateUnits.Decanewtonsperminute:
                return (value/60) * 10;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (value/60) * 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.Decanewtonspersecond:
                return (value) * 10;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
