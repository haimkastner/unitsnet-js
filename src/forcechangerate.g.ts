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

    public constructor(value: number, fromUnit: ForceChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get NewtonsPerMinute(): number {
        return this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }

    public get NewtonsPerSecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }

    public get Decanewtonsperminute(): number {
        return this.convertFromBase(ForceChangeRateUnits.Decanewtonsperminute);
    }

    public get Kilonewtonsperminute(): number {
        return this.convertFromBase(ForceChangeRateUnits.Kilonewtonsperminute);
    }

    public get Nanonewtonspersecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.Nanonewtonspersecond);
    }

    public get Micronewtonspersecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.Micronewtonspersecond);
    }

    public get Centinewtonspersecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.Centinewtonspersecond);
    }

    public get Decinewtonspersecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.Decinewtonspersecond);
    }

    public get Decanewtonspersecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.Decanewtonspersecond);
    }

    public get Kilonewtonspersecond(): number {
        return this.convertFromBase(ForceChangeRateUnits.Kilonewtonspersecond);
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
