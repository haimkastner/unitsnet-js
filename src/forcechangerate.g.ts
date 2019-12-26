export enum ForceChangeRateUnits {
    NewtonsPerMinute,
    NewtonsPerSecond,
    DecanewtonPerMinute,
    KilonewtonPerMinute,
    NanonewtonPerSecond,
    MicronewtonPerSecond,
    CentinewtonPerSecond,
    DecinewtonPerSecond,
    DecanewtonPerSecond,
    KilonewtonPerSecond
}

export class ForceChangeRate {
    private value: number;
    private newtonsperminuteLazy: number | null = null;
    private newtonspersecondLazy: number | null = null;
    private decanewtonperminuteLazy: number | null = null;
    private kilonewtonperminuteLazy: number | null = null;
    private nanonewtonpersecondLazy: number | null = null;
    private micronewtonpersecondLazy: number | null = null;
    private centinewtonpersecondLazy: number | null = null;
    private decinewtonpersecondLazy: number | null = null;
    private decanewtonpersecondLazy: number | null = null;
    private kilonewtonpersecondLazy: number | null = null;

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

    public get DecanewtonPerMinute(): number {
        if(this.decanewtonperminuteLazy !== null){
            return this.decanewtonperminuteLazy;
        }
        return this.decanewtonperminuteLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonPerMinute);
    }

    public get KilonewtonPerMinute(): number {
        if(this.kilonewtonperminuteLazy !== null){
            return this.kilonewtonperminuteLazy;
        }
        return this.kilonewtonperminuteLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonPerMinute);
    }

    public get NanonewtonPerSecond(): number {
        if(this.nanonewtonpersecondLazy !== null){
            return this.nanonewtonpersecondLazy;
        }
        return this.nanonewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.NanonewtonPerSecond);
    }

    public get MicronewtonPerSecond(): number {
        if(this.micronewtonpersecondLazy !== null){
            return this.micronewtonpersecondLazy;
        }
        return this.micronewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.MicronewtonPerSecond);
    }

    public get CentinewtonPerSecond(): number {
        if(this.centinewtonpersecondLazy !== null){
            return this.centinewtonpersecondLazy;
        }
        return this.centinewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.CentinewtonPerSecond);
    }

    public get DecinewtonPerSecond(): number {
        if(this.decinewtonpersecondLazy !== null){
            return this.decinewtonpersecondLazy;
        }
        return this.decinewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecinewtonPerSecond);
    }

    public get DecanewtonPerSecond(): number {
        if(this.decanewtonpersecondLazy !== null){
            return this.decanewtonpersecondLazy;
        }
        return this.decanewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonPerSecond);
    }

    public get KilonewtonPerSecond(): number {
        if(this.kilonewtonpersecondLazy !== null){
            return this.kilonewtonpersecondLazy;
        }
        return this.kilonewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonPerSecond);
    }

    public static FromNewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }

    public static FromNewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }

    public static FromDecanewtonPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonPerMinute);
    }

    public static FromKilonewtonPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonPerMinute);
    }

    public static FromNanonewtonPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NanonewtonPerSecond);
    }

    public static FromMicronewtonPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.MicronewtonPerSecond);
    }

    public static FromCentinewtonPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.CentinewtonPerSecond);
    }

    public static FromDecinewtonPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecinewtonPerSecond);
    }

    public static FromDecanewtonPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonPerSecond);
    }

    public static FromKilonewtonPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonPerSecond);
    }

    private convertFromBase(toUnit: ForceChangeRateUnits): number {
        switch (toUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value*60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.DecanewtonPerMinute:
                return (this.value*60) / 10;
            case ForceChangeRateUnits.KilonewtonPerMinute:
                return (this.value*60) / 1000;
            case ForceChangeRateUnits.NanonewtonPerSecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.MicronewtonPerSecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.CentinewtonPerSecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.DecinewtonPerSecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.DecanewtonPerSecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.KilonewtonPerSecond:
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
            case ForceChangeRateUnits.DecanewtonPerMinute:
                return (value/60) * 10;
            case ForceChangeRateUnits.KilonewtonPerMinute:
                return (value/60) * 1000;
            case ForceChangeRateUnits.NanonewtonPerSecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.MicronewtonPerSecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.CentinewtonPerSecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.DecinewtonPerSecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.DecanewtonPerSecond:
                return (value) * 10;
            case ForceChangeRateUnits.KilonewtonPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond): string {

        switch (toUnit) {
            
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.NewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.NewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonPerMinute:
                return this.DecanewtonPerMinute + ` N/min`;
            case ForceChangeRateUnits.KilonewtonPerMinute:
                return this.KilonewtonPerMinute + ` N/min`;
            case ForceChangeRateUnits.NanonewtonPerSecond:
                return this.NanonewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.MicronewtonPerSecond:
                return this.MicronewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.CentinewtonPerSecond:
                return this.CentinewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecinewtonPerSecond:
                return this.DecinewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonPerSecond:
                return this.DecanewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.KilonewtonPerSecond:
                return this.KilonewtonPerSecond + ` N/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
