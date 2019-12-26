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
    NanogramPerSecond,
    MicrogramPerSecond,
    CentigramPerSecond,
    DecigramPerSecond,
    DecagramPerSecond,
    HectogramPerSecond,
    KilogramPerSecond,
    NanogramPerDay,
    MicrogramPerDay,
    CentigramPerDay,
    DecigramPerDay,
    DecagramPerDay,
    HectogramPerDay,
    KilogramPerDay,
    MegagramPerDay,
    MegapoundPerDay,
    MegapoundPerHour,
    MegapoundPerMinute,
    MegapoundPerSecond
}

export class MassFlow {
    private value: number;
    private gramspersecondLazy: number | null = null;
    private gramsperdayLazy: number | null = null;
    private gramsperhourLazy: number | null = null;
    private kilogramsperhourLazy: number | null = null;
    private kilogramsperminuteLazy: number | null = null;
    private tonnesperhourLazy: number | null = null;
    private poundsperdayLazy: number | null = null;
    private poundsperhourLazy: number | null = null;
    private poundsperminuteLazy: number | null = null;
    private poundspersecondLazy: number | null = null;
    private tonnesperdayLazy: number | null = null;
    private shorttonsperhourLazy: number | null = null;
    private nanogrampersecondLazy: number | null = null;
    private microgrampersecondLazy: number | null = null;
    private centigrampersecondLazy: number | null = null;
    private decigrampersecondLazy: number | null = null;
    private decagrampersecondLazy: number | null = null;
    private hectogrampersecondLazy: number | null = null;
    private kilogrampersecondLazy: number | null = null;
    private nanogramperdayLazy: number | null = null;
    private microgramperdayLazy: number | null = null;
    private centigramperdayLazy: number | null = null;
    private decigramperdayLazy: number | null = null;
    private decagramperdayLazy: number | null = null;
    private hectogramperdayLazy: number | null = null;
    private kilogramperdayLazy: number | null = null;
    private megagramperdayLazy: number | null = null;
    private megapoundperdayLazy: number | null = null;
    private megapoundperhourLazy: number | null = null;
    private megapoundperminuteLazy: number | null = null;
    private megapoundpersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: MassFlowUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerSecond(): number {
        if(this.gramspersecondLazy !== null){
            return this.gramspersecondLazy;
        }
        return this.gramspersecondLazy = this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }

    public get GramsPerDay(): number {
        if(this.gramsperdayLazy !== null){
            return this.gramsperdayLazy;
        }
        return this.gramsperdayLazy = this.convertFromBase(MassFlowUnits.GramsPerDay);
    }

    public get GramsPerHour(): number {
        if(this.gramsperhourLazy !== null){
            return this.gramsperhourLazy;
        }
        return this.gramsperhourLazy = this.convertFromBase(MassFlowUnits.GramsPerHour);
    }

    public get KilogramsPerHour(): number {
        if(this.kilogramsperhourLazy !== null){
            return this.kilogramsperhourLazy;
        }
        return this.kilogramsperhourLazy = this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }

    public get KilogramsPerMinute(): number {
        if(this.kilogramsperminuteLazy !== null){
            return this.kilogramsperminuteLazy;
        }
        return this.kilogramsperminuteLazy = this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }

    public get TonnesPerHour(): number {
        if(this.tonnesperhourLazy !== null){
            return this.tonnesperhourLazy;
        }
        return this.tonnesperhourLazy = this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }

    public get PoundsPerDay(): number {
        if(this.poundsperdayLazy !== null){
            return this.poundsperdayLazy;
        }
        return this.poundsperdayLazy = this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }

    public get PoundsPerHour(): number {
        if(this.poundsperhourLazy !== null){
            return this.poundsperhourLazy;
        }
        return this.poundsperhourLazy = this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }

    public get PoundsPerMinute(): number {
        if(this.poundsperminuteLazy !== null){
            return this.poundsperminuteLazy;
        }
        return this.poundsperminuteLazy = this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }

    public get PoundsPerSecond(): number {
        if(this.poundspersecondLazy !== null){
            return this.poundspersecondLazy;
        }
        return this.poundspersecondLazy = this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }

    public get TonnesPerDay(): number {
        if(this.tonnesperdayLazy !== null){
            return this.tonnesperdayLazy;
        }
        return this.tonnesperdayLazy = this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }

    public get ShortTonsPerHour(): number {
        if(this.shorttonsperhourLazy !== null){
            return this.shorttonsperhourLazy;
        }
        return this.shorttonsperhourLazy = this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }

    public get NanogramPerSecond(): number {
        if(this.nanogrampersecondLazy !== null){
            return this.nanogrampersecondLazy;
        }
        return this.nanogrampersecondLazy = this.convertFromBase(MassFlowUnits.NanogramPerSecond);
    }

    public get MicrogramPerSecond(): number {
        if(this.microgrampersecondLazy !== null){
            return this.microgrampersecondLazy;
        }
        return this.microgrampersecondLazy = this.convertFromBase(MassFlowUnits.MicrogramPerSecond);
    }

    public get CentigramPerSecond(): number {
        if(this.centigrampersecondLazy !== null){
            return this.centigrampersecondLazy;
        }
        return this.centigrampersecondLazy = this.convertFromBase(MassFlowUnits.CentigramPerSecond);
    }

    public get DecigramPerSecond(): number {
        if(this.decigrampersecondLazy !== null){
            return this.decigrampersecondLazy;
        }
        return this.decigrampersecondLazy = this.convertFromBase(MassFlowUnits.DecigramPerSecond);
    }

    public get DecagramPerSecond(): number {
        if(this.decagrampersecondLazy !== null){
            return this.decagrampersecondLazy;
        }
        return this.decagrampersecondLazy = this.convertFromBase(MassFlowUnits.DecagramPerSecond);
    }

    public get HectogramPerSecond(): number {
        if(this.hectogrampersecondLazy !== null){
            return this.hectogrampersecondLazy;
        }
        return this.hectogrampersecondLazy = this.convertFromBase(MassFlowUnits.HectogramPerSecond);
    }

    public get KilogramPerSecond(): number {
        if(this.kilogrampersecondLazy !== null){
            return this.kilogrampersecondLazy;
        }
        return this.kilogrampersecondLazy = this.convertFromBase(MassFlowUnits.KilogramPerSecond);
    }

    public get NanogramPerDay(): number {
        if(this.nanogramperdayLazy !== null){
            return this.nanogramperdayLazy;
        }
        return this.nanogramperdayLazy = this.convertFromBase(MassFlowUnits.NanogramPerDay);
    }

    public get MicrogramPerDay(): number {
        if(this.microgramperdayLazy !== null){
            return this.microgramperdayLazy;
        }
        return this.microgramperdayLazy = this.convertFromBase(MassFlowUnits.MicrogramPerDay);
    }

    public get CentigramPerDay(): number {
        if(this.centigramperdayLazy !== null){
            return this.centigramperdayLazy;
        }
        return this.centigramperdayLazy = this.convertFromBase(MassFlowUnits.CentigramPerDay);
    }

    public get DecigramPerDay(): number {
        if(this.decigramperdayLazy !== null){
            return this.decigramperdayLazy;
        }
        return this.decigramperdayLazy = this.convertFromBase(MassFlowUnits.DecigramPerDay);
    }

    public get DecagramPerDay(): number {
        if(this.decagramperdayLazy !== null){
            return this.decagramperdayLazy;
        }
        return this.decagramperdayLazy = this.convertFromBase(MassFlowUnits.DecagramPerDay);
    }

    public get HectogramPerDay(): number {
        if(this.hectogramperdayLazy !== null){
            return this.hectogramperdayLazy;
        }
        return this.hectogramperdayLazy = this.convertFromBase(MassFlowUnits.HectogramPerDay);
    }

    public get KilogramPerDay(): number {
        if(this.kilogramperdayLazy !== null){
            return this.kilogramperdayLazy;
        }
        return this.kilogramperdayLazy = this.convertFromBase(MassFlowUnits.KilogramPerDay);
    }

    public get MegagramPerDay(): number {
        if(this.megagramperdayLazy !== null){
            return this.megagramperdayLazy;
        }
        return this.megagramperdayLazy = this.convertFromBase(MassFlowUnits.MegagramPerDay);
    }

    public get MegapoundPerDay(): number {
        if(this.megapoundperdayLazy !== null){
            return this.megapoundperdayLazy;
        }
        return this.megapoundperdayLazy = this.convertFromBase(MassFlowUnits.MegapoundPerDay);
    }

    public get MegapoundPerHour(): number {
        if(this.megapoundperhourLazy !== null){
            return this.megapoundperhourLazy;
        }
        return this.megapoundperhourLazy = this.convertFromBase(MassFlowUnits.MegapoundPerHour);
    }

    public get MegapoundPerMinute(): number {
        if(this.megapoundperminuteLazy !== null){
            return this.megapoundperminuteLazy;
        }
        return this.megapoundperminuteLazy = this.convertFromBase(MassFlowUnits.MegapoundPerMinute);
    }

    public get MegapoundPerSecond(): number {
        if(this.megapoundpersecondLazy !== null){
            return this.megapoundpersecondLazy;
        }
        return this.megapoundpersecondLazy = this.convertFromBase(MassFlowUnits.MegapoundPerSecond);
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

    public static FromNanogramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.NanogramPerSecond);
    }

    public static FromMicrogramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MicrogramPerSecond);
    }

    public static FromCentigramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.CentigramPerSecond);
    }

    public static FromDecigramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecigramPerSecond);
    }

    public static FromDecagramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecagramPerSecond);
    }

    public static FromHectogramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.HectogramPerSecond);
    }

    public static FromKilogramPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramPerSecond);
    }

    public static FromNanogramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.NanogramPerDay);
    }

    public static FromMicrogramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MicrogramPerDay);
    }

    public static FromCentigramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.CentigramPerDay);
    }

    public static FromDecigramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecigramPerDay);
    }

    public static FromDecagramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.DecagramPerDay);
    }

    public static FromHectogramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.HectogramPerDay);
    }

    public static FromKilogramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.KilogramPerDay);
    }

    public static FromMegagramPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegagramPerDay);
    }

    public static FromMegapoundPerDay(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundPerDay);
    }

    public static FromMegapoundPerHour(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundPerHour);
    }

    public static FromMegapoundPerMinute(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundPerMinute);
    }

    public static FromMegapoundPerSecond(value: number): MassFlow {
        return new MassFlow(value, MassFlowUnits.MegapoundPerSecond);
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
            case MassFlowUnits.NanogramPerSecond:
                return (this.value) / 1e-9;
            case MassFlowUnits.MicrogramPerSecond:
                return (this.value) / 0.000001;
            case MassFlowUnits.CentigramPerSecond:
                return (this.value) / 0.01;
            case MassFlowUnits.DecigramPerSecond:
                return (this.value) / 0.1;
            case MassFlowUnits.DecagramPerSecond:
                return (this.value) / 10;
            case MassFlowUnits.HectogramPerSecond:
                return (this.value) / 100;
            case MassFlowUnits.KilogramPerSecond:
                return (this.value) / 1000;
            case MassFlowUnits.NanogramPerDay:
                return (this.value*86400) / 1e-9;
            case MassFlowUnits.MicrogramPerDay:
                return (this.value*86400) / 0.000001;
            case MassFlowUnits.CentigramPerDay:
                return (this.value*86400) / 0.01;
            case MassFlowUnits.DecigramPerDay:
                return (this.value*86400) / 0.1;
            case MassFlowUnits.DecagramPerDay:
                return (this.value*86400) / 10;
            case MassFlowUnits.HectogramPerDay:
                return (this.value*86400) / 100;
            case MassFlowUnits.KilogramPerDay:
                return (this.value*86400) / 1000;
            case MassFlowUnits.MegagramPerDay:
                return (this.value*86400) / 1000000;
            case MassFlowUnits.MegapoundPerDay:
                return (this.value*190.47936) / 1000000;
            case MassFlowUnits.MegapoundPerHour:
                return (this.value*7.93664) / 1000000;
            case MassFlowUnits.MegapoundPerMinute:
                return (this.value*0.132277) / 1000000;
            case MassFlowUnits.MegapoundPerSecond:
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
            case MassFlowUnits.NanogramPerSecond:
                return (value) * 1e-9;
            case MassFlowUnits.MicrogramPerSecond:
                return (value) * 0.000001;
            case MassFlowUnits.CentigramPerSecond:
                return (value) * 0.01;
            case MassFlowUnits.DecigramPerSecond:
                return (value) * 0.1;
            case MassFlowUnits.DecagramPerSecond:
                return (value) * 10;
            case MassFlowUnits.HectogramPerSecond:
                return (value) * 100;
            case MassFlowUnits.KilogramPerSecond:
                return (value) * 1000;
            case MassFlowUnits.NanogramPerDay:
                return (value/86400) * 1e-9;
            case MassFlowUnits.MicrogramPerDay:
                return (value/86400) * 0.000001;
            case MassFlowUnits.CentigramPerDay:
                return (value/86400) * 0.01;
            case MassFlowUnits.DecigramPerDay:
                return (value/86400) * 0.1;
            case MassFlowUnits.DecagramPerDay:
                return (value/86400) * 10;
            case MassFlowUnits.HectogramPerDay:
                return (value/86400) * 100;
            case MassFlowUnits.KilogramPerDay:
                return (value/86400) * 1000;
            case MassFlowUnits.MegagramPerDay:
                return (value/86400) * 1000000;
            case MassFlowUnits.MegapoundPerDay:
                return (value/190.47936) * 1000000;
            case MassFlowUnits.MegapoundPerHour:
                return (value/7.93664) * 1000000;
            case MassFlowUnits.MegapoundPerMinute:
                return (value/0.132277) * 1000000;
            case MassFlowUnits.MegapoundPerSecond:
                return (value * 453.59237) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: MassFlowUnits = MassFlowUnits.GramsPerSecond): string {

        switch (toUnit) {
            
            case MassFlowUnits.GramsPerSecond:
                return this.GramsPerSecond + ` g/s`;
            case MassFlowUnits.GramsPerDay:
                return this.GramsPerDay + ` g/d`;
            case MassFlowUnits.GramsPerHour:
                return this.GramsPerHour + ` g/h`;
            case MassFlowUnits.KilogramsPerHour:
                return this.KilogramsPerHour + ` kg/h`;
            case MassFlowUnits.KilogramsPerMinute:
                return this.KilogramsPerMinute + ` kg/min`;
            case MassFlowUnits.TonnesPerHour:
                return this.TonnesPerHour + ` t/h`;
            case MassFlowUnits.PoundsPerDay:
                return this.PoundsPerDay + ` lb/d`;
            case MassFlowUnits.PoundsPerHour:
                return this.PoundsPerHour + ` lb/h`;
            case MassFlowUnits.PoundsPerMinute:
                return this.PoundsPerMinute + ` lb/min`;
            case MassFlowUnits.PoundsPerSecond:
                return this.PoundsPerSecond + ` lb/s`;
            case MassFlowUnits.TonnesPerDay:
                return this.TonnesPerDay + ` t/d`;
            case MassFlowUnits.ShortTonsPerHour:
                return this.ShortTonsPerHour + ` short tn/h`;
            case MassFlowUnits.NanogramPerSecond:
                return this.NanogramPerSecond + ` g/s`;
            case MassFlowUnits.MicrogramPerSecond:
                return this.MicrogramPerSecond + ` g/s`;
            case MassFlowUnits.CentigramPerSecond:
                return this.CentigramPerSecond + ` g/s`;
            case MassFlowUnits.DecigramPerSecond:
                return this.DecigramPerSecond + ` g/s`;
            case MassFlowUnits.DecagramPerSecond:
                return this.DecagramPerSecond + ` g/s`;
            case MassFlowUnits.HectogramPerSecond:
                return this.HectogramPerSecond + ` g/s`;
            case MassFlowUnits.KilogramPerSecond:
                return this.KilogramPerSecond + ` g/s`;
            case MassFlowUnits.NanogramPerDay:
                return this.NanogramPerDay + ` g/d`;
            case MassFlowUnits.MicrogramPerDay:
                return this.MicrogramPerDay + ` g/d`;
            case MassFlowUnits.CentigramPerDay:
                return this.CentigramPerDay + ` g/d`;
            case MassFlowUnits.DecigramPerDay:
                return this.DecigramPerDay + ` g/d`;
            case MassFlowUnits.DecagramPerDay:
                return this.DecagramPerDay + ` g/d`;
            case MassFlowUnits.HectogramPerDay:
                return this.HectogramPerDay + ` g/d`;
            case MassFlowUnits.KilogramPerDay:
                return this.KilogramPerDay + ` g/d`;
            case MassFlowUnits.MegagramPerDay:
                return this.MegagramPerDay + ` g/d`;
            case MassFlowUnits.MegapoundPerDay:
                return this.MegapoundPerDay + ` lb/d`;
            case MassFlowUnits.MegapoundPerHour:
                return this.MegapoundPerHour + ` lb/h`;
            case MassFlowUnits.MegapoundPerMinute:
                return this.MegapoundPerMinute + ` lb/min`;
            case MassFlowUnits.MegapoundPerSecond:
                return this.MegapoundPerSecond + ` lb/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
