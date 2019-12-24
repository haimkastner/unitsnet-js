export enum MassFlowUnits {
    GramsPerSecond,
    GramsPerDay,
    GramsPerHour,
    KilogramsPerHour,
    KilogramsPerMinute,
    TonnesPerHour,
    PoundsPerDay,
    PoundsPerHour,
    PoundsPerMinute,
    PoundsPerSecond,
    TonnesPerDay,
    ShortTonsPerHour,
    Nanogramspersecond,
    Microgramspersecond,
    Centigramspersecond,
    Decigramspersecond,
    Decagramspersecond,
    Hectogramspersecond,
    Kilogramspersecond,
    Nanogramsperday,
    Microgramsperday,
    Centigramsperday,
    Decigramsperday,
    Decagramsperday,
    Hectogramsperday,
    Kilogramsperday,
    Megagramsperday,
    Megapoundsperday,
    Megapoundsperhour,
    Megapoundsperminute,
    Megapoundspersecond
}

export class MassFlow {
    private value: number;

    public constructor(value: number, fromUnit: MassFlowUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerSecond(): number {
        return this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }

    public get GramsPerDay(): number {
        return this.convertFromBase(MassFlowUnits.GramsPerDay);
    }

    public get GramsPerHour(): number {
        return this.convertFromBase(MassFlowUnits.GramsPerHour);
    }

    public get KilogramsPerHour(): number {
        return this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }

    public get KilogramsPerMinute(): number {
        return this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }

    public get TonnesPerHour(): number {
        return this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }

    public get PoundsPerDay(): number {
        return this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }

    public get PoundsPerHour(): number {
        return this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }

    public get PoundsPerMinute(): number {
        return this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }

    public get PoundsPerSecond(): number {
        return this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }

    public get TonnesPerDay(): number {
        return this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }

    public get ShortTonsPerHour(): number {
        return this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }

    public get Nanogramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Nanogramspersecond);
    }

    public get Microgramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Microgramspersecond);
    }

    public get Centigramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Centigramspersecond);
    }

    public get Decigramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Decigramspersecond);
    }

    public get Decagramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Decagramspersecond);
    }

    public get Hectogramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Hectogramspersecond);
    }

    public get Kilogramspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Kilogramspersecond);
    }

    public get Nanogramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Nanogramsperday);
    }

    public get Microgramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Microgramsperday);
    }

    public get Centigramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Centigramsperday);
    }

    public get Decigramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Decigramsperday);
    }

    public get Decagramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Decagramsperday);
    }

    public get Hectogramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Hectogramsperday);
    }

    public get Kilogramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Kilogramsperday);
    }

    public get Megagramsperday(): number {
        return this.convertFromBase(MassFlowUnits.Megagramsperday);
    }

    public get Megapoundsperday(): number {
        return this.convertFromBase(MassFlowUnits.Megapoundsperday);
    }

    public get Megapoundsperhour(): number {
        return this.convertFromBase(MassFlowUnits.Megapoundsperhour);
    }

    public get Megapoundsperminute(): number {
        return this.convertFromBase(MassFlowUnits.Megapoundsperminute);
    }

    public get Megapoundspersecond(): number {
        return this.convertFromBase(MassFlowUnits.Megapoundspersecond);
    }

    public static FromGramsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerSecond);
    }

    public static FromGramsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerDay);
    }

    public static FromGramsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.GramsPerHour);
    }

    public static FromKilogramsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerHour);
    }

    public static FromKilogramsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramsPerMinute);
    }

    public static FromTonnesPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.TonnesPerHour);
    }

    public static FromPoundsPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerDay);
    }

    public static FromPoundsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerHour);
    }

    public static FromPoundsPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerMinute);
    }

    public static FromPoundsPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.PoundsPerSecond);
    }

    public static FromTonnesPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.TonnesPerDay);
    }

    public static FromShortTonsPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.ShortTonsPerHour);
    }

    public static FromNanogramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Nanogramspersecond);
    }

    public static FromMicrogramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Microgramspersecond);
    }

    public static FromCentigramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Centigramspersecond);
    }

    public static FromDecigramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Decigramspersecond);
    }

    public static FromDecagramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Decagramspersecond);
    }

    public static FromHectogramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Hectogramspersecond);
    }

    public static FromKilogramspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Kilogramspersecond);
    }

    public static FromNanogramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Nanogramsperday);
    }

    public static FromMicrogramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Microgramsperday);
    }

    public static FromCentigramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Centigramsperday);
    }

    public static FromDecigramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Decigramsperday);
    }

    public static FromDecagramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Decagramsperday);
    }

    public static FromHectogramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Hectogramsperday);
    }

    public static FromKilogramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Kilogramsperday);
    }

    public static FromMegagramsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Megagramsperday);
    }

    public static FromMegapoundsperday(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Megapoundsperday);
    }

    public static FromMegapoundsperhour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Megapoundsperhour);
    }

    public static FromMegapoundsperminute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Megapoundsperminute);
    }

    public static FromMegapoundspersecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.Megapoundspersecond);
    }

    private convertFromBase(toUnit: MassFlowUnits): number {

                switch (toUnit) {
                    
                case MassFlowUnits.GramsPerSecond:
                    return this.value;
                
                case MassFlowUnits.GramsPerDay:
                    return this.value*86400;
                
                case MassFlowUnits.GramsPerHour:
                    return this.value*3600;
                
                case MassFlowUnits.KilogramsPerHour:
                    return this.value*3.6;
                
                case MassFlowUnits.KilogramsPerMinute:
                    return this.value*0.06;
                
                case MassFlowUnits.TonnesPerHour:
                    return this.value*3.6/1000;
                
                case MassFlowUnits.PoundsPerDay:
                    return this.value*190.47936;
                
                case MassFlowUnits.PoundsPerHour:
                    return this.value*7.93664;
                
                case MassFlowUnits.PoundsPerMinute:
                    return this.value*0.132277;
                
                case MassFlowUnits.PoundsPerSecond:
                    return this.value / 453.59237;
                
                case MassFlowUnits.TonnesPerDay:
                    return this.value*0.0864000;
                
                case MassFlowUnits.ShortTonsPerHour:
                    return this.value/251.9957611;
                
                case MassFlowUnits.Nanogramspersecond:
                    return (this.value) / 1e-9;
                
                case MassFlowUnits.Microgramspersecond:
                    return (this.value) / 0.000001;
                
                case MassFlowUnits.Centigramspersecond:
                    return (this.value) / 0.01;
                
                case MassFlowUnits.Decigramspersecond:
                    return (this.value) / 0.1;
                
                case MassFlowUnits.Decagramspersecond:
                    return (this.value) / 10;
                
                case MassFlowUnits.Hectogramspersecond:
                    return (this.value) / 100;
                
                case MassFlowUnits.Kilogramspersecond:
                    return (this.value) / 1000;
                
                case MassFlowUnits.Nanogramsperday:
                    return (this.value*86400) / 1e-9;
                
                case MassFlowUnits.Microgramsperday:
                    return (this.value*86400) / 0.000001;
                
                case MassFlowUnits.Centigramsperday:
                    return (this.value*86400) / 0.01;
                
                case MassFlowUnits.Decigramsperday:
                    return (this.value*86400) / 0.1;
                
                case MassFlowUnits.Decagramsperday:
                    return (this.value*86400) / 10;
                
                case MassFlowUnits.Hectogramsperday:
                    return (this.value*86400) / 100;
                
                case MassFlowUnits.Kilogramsperday:
                    return (this.value*86400) / 1000;
                
                case MassFlowUnits.Megagramsperday:
                    return (this.value*86400) / 1000000;
                
                case MassFlowUnits.Megapoundsperday:
                    return (this.value*190.47936) / 1000000;
                
                case MassFlowUnits.Megapoundsperhour:
                    return (this.value*7.93664) / 1000000;
                
                case MassFlowUnits.Megapoundsperminute:
                    return (this.value*0.132277) / 1000000;
                
                case MassFlowUnits.Megapoundspersecond:
                    return (this.value / 453.59237) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: MassFlowUnits): number {

                switch (fromUnit) {
                    
                case MassFlowUnits.GramsPerSecond:
                    return value;
                
                case MassFlowUnits.GramsPerDay:
                    return value/86400;
                
                case MassFlowUnits.GramsPerHour:
                    return value/3600;
                
                case MassFlowUnits.KilogramsPerHour:
                    return value/3.6;
                
                case MassFlowUnits.KilogramsPerMinute:
                    return value/0.06;
                
                case MassFlowUnits.TonnesPerHour:
                    return 1000*value/3.6;
                
                case MassFlowUnits.PoundsPerDay:
                    return value/190.47936;
                
                case MassFlowUnits.PoundsPerHour:
                    return value/7.93664;
                
                case MassFlowUnits.PoundsPerMinute:
                    return value/0.132277;
                
                case MassFlowUnits.PoundsPerSecond:
                    return value * 453.59237;
                
                case MassFlowUnits.TonnesPerDay:
                    return value/0.0864000;
                
                case MassFlowUnits.ShortTonsPerHour:
                    return value*251.9957611;
                
                case MassFlowUnits.Nanogramspersecond:
                    return (value) * 1e-9;
                
                case MassFlowUnits.Microgramspersecond:
                    return (value) * 0.000001;
                
                case MassFlowUnits.Centigramspersecond:
                    return (value) * 0.01;
                
                case MassFlowUnits.Decigramspersecond:
                    return (value) * 0.1;
                
                case MassFlowUnits.Decagramspersecond:
                    return (value) * 10;
                
                case MassFlowUnits.Hectogramspersecond:
                    return (value) * 100;
                
                case MassFlowUnits.Kilogramspersecond:
                    return (value) * 1000;
                
                case MassFlowUnits.Nanogramsperday:
                    return (value/86400) * 1e-9;
                
                case MassFlowUnits.Microgramsperday:
                    return (value/86400) * 0.000001;
                
                case MassFlowUnits.Centigramsperday:
                    return (value/86400) * 0.01;
                
                case MassFlowUnits.Decigramsperday:
                    return (value/86400) * 0.1;
                
                case MassFlowUnits.Decagramsperday:
                    return (value/86400) * 10;
                
                case MassFlowUnits.Hectogramsperday:
                    return (value/86400) * 100;
                
                case MassFlowUnits.Kilogramsperday:
                    return (value/86400) * 1000;
                
                case MassFlowUnits.Megagramsperday:
                    return (value/86400) * 1000000;
                
                case MassFlowUnits.Megapoundsperday:
                    return (value/190.47936) * 1000000;
                
                case MassFlowUnits.Megapoundsperhour:
                    return (value/7.93664) * 1000000;
                
                case MassFlowUnits.Megapoundsperminute:
                    return (value/0.132277) * 1000000;
                
                case MassFlowUnits.Megapoundspersecond:
                    return (value * 453.59237) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
