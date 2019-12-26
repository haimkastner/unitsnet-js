export enum VolumeFlowUnits {
    CubicMetersPerSecond,
    CubicMetersPerMinute,
    CubicMetersPerHour,
    CubicMetersPerDay,
    CubicFeetPerSecond,
    CubicFeetPerMinute,
    CubicFeetPerHour,
    CubicYardsPerSecond,
    CubicYardsPerMinute,
    CubicYardsPerHour,
    CubicYardsPerDay,
    MillionUsGallonsPerDay,
    UsGallonsPerDay,
    LitersPerSecond,
    LitersPerMinute,
    LitersPerHour,
    LitersPerDay,
    UsGallonsPerSecond,
    UsGallonsPerMinute,
    UkGallonsPerDay,
    UkGallonsPerHour,
    UkGallonsPerMinute,
    UkGallonsPerSecond,
    KilousGallonsPerMinute,
    UsGallonsPerHour,
    CubicDecimetersPerMinute,
    OilBarrelsPerDay,
    OilBarrelsPerMinute,
    OilBarrelsPerHour,
    OilBarrelsPerSecond,
    CubicMillimetersPerSecond,
    AcreFeetPerSecond,
    AcreFeetPerMinute,
    AcreFeetPerHour,
    AcreFeetPerDay,
    NanolitersPerMinute,
    MicrolitersPerMinute,
    CentilitersPerMinute,
    DecilitersPerMinute,
    KilolitersPerMinute,
    NanolitersPerDay,
    MicrolitersPerDay,
    CentilitersPerDay,
    DecilitersPerDay,
    KilolitersPerDay,
    MegalitersPerDay,
    MegaukGallonsPerSecond
}

export class VolumeFlow {
    private value: number;
    private cubicmeterspersecondLazy: number | null = null;
    private cubicmetersperminuteLazy: number | null = null;
    private cubicmetersperhourLazy: number | null = null;
    private cubicmetersperdayLazy: number | null = null;
    private cubicfeetpersecondLazy: number | null = null;
    private cubicfeetperminuteLazy: number | null = null;
    private cubicfeetperhourLazy: number | null = null;
    private cubicyardspersecondLazy: number | null = null;
    private cubicyardsperminuteLazy: number | null = null;
    private cubicyardsperhourLazy: number | null = null;
    private cubicyardsperdayLazy: number | null = null;
    private millionusgallonsperdayLazy: number | null = null;
    private usgallonsperdayLazy: number | null = null;
    private literspersecondLazy: number | null = null;
    private litersperminuteLazy: number | null = null;
    private litersperhourLazy: number | null = null;
    private litersperdayLazy: number | null = null;
    private usgallonspersecondLazy: number | null = null;
    private usgallonsperminuteLazy: number | null = null;
    private ukgallonsperdayLazy: number | null = null;
    private ukgallonsperhourLazy: number | null = null;
    private ukgallonsperminuteLazy: number | null = null;
    private ukgallonspersecondLazy: number | null = null;
    private kilousgallonsperminuteLazy: number | null = null;
    private usgallonsperhourLazy: number | null = null;
    private cubicdecimetersperminuteLazy: number | null = null;
    private oilbarrelsperdayLazy: number | null = null;
    private oilbarrelsperminuteLazy: number | null = null;
    private oilbarrelsperhourLazy: number | null = null;
    private oilbarrelspersecondLazy: number | null = null;
    private cubicmillimeterspersecondLazy: number | null = null;
    private acrefeetpersecondLazy: number | null = null;
    private acrefeetperminuteLazy: number | null = null;
    private acrefeetperhourLazy: number | null = null;
    private acrefeetperdayLazy: number | null = null;
    private nanolitersperminuteLazy: number | null = null;
    private microlitersperminuteLazy: number | null = null;
    private centilitersperminuteLazy: number | null = null;
    private decilitersperminuteLazy: number | null = null;
    private kilolitersperminuteLazy: number | null = null;
    private nanolitersperdayLazy: number | null = null;
    private microlitersperdayLazy: number | null = null;
    private centilitersperdayLazy: number | null = null;
    private decilitersperdayLazy: number | null = null;
    private kilolitersperdayLazy: number | null = null;
    private megalitersperdayLazy: number | null = null;
    private megaukgallonspersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: VolumeFlowUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get CubicMetersPerSecond(): number {
        if(this.cubicmeterspersecondLazy !== null){
            return this.cubicmeterspersecondLazy;
        }
        return this.cubicmeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerSecond);
    }

    public get CubicMetersPerMinute(): number {
        if(this.cubicmetersperminuteLazy !== null){
            return this.cubicmetersperminuteLazy;
        }
        return this.cubicmetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerMinute);
    }

    public get CubicMetersPerHour(): number {
        if(this.cubicmetersperhourLazy !== null){
            return this.cubicmetersperhourLazy;
        }
        return this.cubicmetersperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerHour);
    }

    public get CubicMetersPerDay(): number {
        if(this.cubicmetersperdayLazy !== null){
            return this.cubicmetersperdayLazy;
        }
        return this.cubicmetersperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerDay);
    }

    public get CubicFeetPerSecond(): number {
        if(this.cubicfeetpersecondLazy !== null){
            return this.cubicfeetpersecondLazy;
        }
        return this.cubicfeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerSecond);
    }

    public get CubicFeetPerMinute(): number {
        if(this.cubicfeetperminuteLazy !== null){
            return this.cubicfeetperminuteLazy;
        }
        return this.cubicfeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerMinute);
    }

    public get CubicFeetPerHour(): number {
        if(this.cubicfeetperhourLazy !== null){
            return this.cubicfeetperhourLazy;
        }
        return this.cubicfeetperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerHour);
    }

    public get CubicYardsPerSecond(): number {
        if(this.cubicyardspersecondLazy !== null){
            return this.cubicyardspersecondLazy;
        }
        return this.cubicyardspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerSecond);
    }

    public get CubicYardsPerMinute(): number {
        if(this.cubicyardsperminuteLazy !== null){
            return this.cubicyardsperminuteLazy;
        }
        return this.cubicyardsperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerMinute);
    }

    public get CubicYardsPerHour(): number {
        if(this.cubicyardsperhourLazy !== null){
            return this.cubicyardsperhourLazy;
        }
        return this.cubicyardsperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerHour);
    }

    public get CubicYardsPerDay(): number {
        if(this.cubicyardsperdayLazy !== null){
            return this.cubicyardsperdayLazy;
        }
        return this.cubicyardsperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerDay);
    }

    public get MillionUsGallonsPerDay(): number {
        if(this.millionusgallonsperdayLazy !== null){
            return this.millionusgallonsperdayLazy;
        }
        return this.millionusgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.MillionUsGallonsPerDay);
    }

    public get UsGallonsPerDay(): number {
        if(this.usgallonsperdayLazy !== null){
            return this.usgallonsperdayLazy;
        }
        return this.usgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerDay);
    }

    public get LitersPerSecond(): number {
        if(this.literspersecondLazy !== null){
            return this.literspersecondLazy;
        }
        return this.literspersecondLazy = this.convertFromBase(VolumeFlowUnits.LitersPerSecond);
    }

    public get LitersPerMinute(): number {
        if(this.litersperminuteLazy !== null){
            return this.litersperminuteLazy;
        }
        return this.litersperminuteLazy = this.convertFromBase(VolumeFlowUnits.LitersPerMinute);
    }

    public get LitersPerHour(): number {
        if(this.litersperhourLazy !== null){
            return this.litersperhourLazy;
        }
        return this.litersperhourLazy = this.convertFromBase(VolumeFlowUnits.LitersPerHour);
    }

    public get LitersPerDay(): number {
        if(this.litersperdayLazy !== null){
            return this.litersperdayLazy;
        }
        return this.litersperdayLazy = this.convertFromBase(VolumeFlowUnits.LitersPerDay);
    }

    public get UsGallonsPerSecond(): number {
        if(this.usgallonspersecondLazy !== null){
            return this.usgallonspersecondLazy;
        }
        return this.usgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerSecond);
    }

    public get UsGallonsPerMinute(): number {
        if(this.usgallonsperminuteLazy !== null){
            return this.usgallonsperminuteLazy;
        }
        return this.usgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerMinute);
    }

    public get UkGallonsPerDay(): number {
        if(this.ukgallonsperdayLazy !== null){
            return this.ukgallonsperdayLazy;
        }
        return this.ukgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerDay);
    }

    public get UkGallonsPerHour(): number {
        if(this.ukgallonsperhourLazy !== null){
            return this.ukgallonsperhourLazy;
        }
        return this.ukgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerHour);
    }

    public get UkGallonsPerMinute(): number {
        if(this.ukgallonsperminuteLazy !== null){
            return this.ukgallonsperminuteLazy;
        }
        return this.ukgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerMinute);
    }

    public get UkGallonsPerSecond(): number {
        if(this.ukgallonspersecondLazy !== null){
            return this.ukgallonspersecondLazy;
        }
        return this.ukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerSecond);
    }

    public get KilousGallonsPerMinute(): number {
        if(this.kilousgallonsperminuteLazy !== null){
            return this.kilousgallonsperminuteLazy;
        }
        return this.kilousgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilousGallonsPerMinute);
    }

    public get UsGallonsPerHour(): number {
        if(this.usgallonsperhourLazy !== null){
            return this.usgallonsperhourLazy;
        }
        return this.usgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerHour);
    }

    public get CubicDecimetersPerMinute(): number {
        if(this.cubicdecimetersperminuteLazy !== null){
            return this.cubicdecimetersperminuteLazy;
        }
        return this.cubicdecimetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicDecimetersPerMinute);
    }

    public get OilBarrelsPerDay(): number {
        if(this.oilbarrelsperdayLazy !== null){
            return this.oilbarrelsperdayLazy;
        }
        return this.oilbarrelsperdayLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerDay);
    }

    public get OilBarrelsPerMinute(): number {
        if(this.oilbarrelsperminuteLazy !== null){
            return this.oilbarrelsperminuteLazy;
        }
        return this.oilbarrelsperminuteLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerMinute);
    }

    public get OilBarrelsPerHour(): number {
        if(this.oilbarrelsperhourLazy !== null){
            return this.oilbarrelsperhourLazy;
        }
        return this.oilbarrelsperhourLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerHour);
    }

    public get OilBarrelsPerSecond(): number {
        if(this.oilbarrelspersecondLazy !== null){
            return this.oilbarrelspersecondLazy;
        }
        return this.oilbarrelspersecondLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerSecond);
    }

    public get CubicMillimetersPerSecond(): number {
        if(this.cubicmillimeterspersecondLazy !== null){
            return this.cubicmillimeterspersecondLazy;
        }
        return this.cubicmillimeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMillimetersPerSecond);
    }

    public get AcreFeetPerSecond(): number {
        if(this.acrefeetpersecondLazy !== null){
            return this.acrefeetpersecondLazy;
        }
        return this.acrefeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerSecond);
    }

    public get AcreFeetPerMinute(): number {
        if(this.acrefeetperminuteLazy !== null){
            return this.acrefeetperminuteLazy;
        }
        return this.acrefeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerMinute);
    }

    public get AcreFeetPerHour(): number {
        if(this.acrefeetperhourLazy !== null){
            return this.acrefeetperhourLazy;
        }
        return this.acrefeetperhourLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerHour);
    }

    public get AcreFeetPerDay(): number {
        if(this.acrefeetperdayLazy !== null){
            return this.acrefeetperdayLazy;
        }
        return this.acrefeetperdayLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerDay);
    }

    public get NanolitersPerMinute(): number {
        if(this.nanolitersperminuteLazy !== null){
            return this.nanolitersperminuteLazy;
        }
        return this.nanolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerMinute);
    }

    public get MicrolitersPerMinute(): number {
        if(this.microlitersperminuteLazy !== null){
            return this.microlitersperminuteLazy;
        }
        return this.microlitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerMinute);
    }

    public get CentilitersPerMinute(): number {
        if(this.centilitersperminuteLazy !== null){
            return this.centilitersperminuteLazy;
        }
        return this.centilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerMinute);
    }

    public get DecilitersPerMinute(): number {
        if(this.decilitersperminuteLazy !== null){
            return this.decilitersperminuteLazy;
        }
        return this.decilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerMinute);
    }

    public get KilolitersPerMinute(): number {
        if(this.kilolitersperminuteLazy !== null){
            return this.kilolitersperminuteLazy;
        }
        return this.kilolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerMinute);
    }

    public get NanolitersPerDay(): number {
        if(this.nanolitersperdayLazy !== null){
            return this.nanolitersperdayLazy;
        }
        return this.nanolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerDay);
    }

    public get MicrolitersPerDay(): number {
        if(this.microlitersperdayLazy !== null){
            return this.microlitersperdayLazy;
        }
        return this.microlitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerDay);
    }

    public get CentilitersPerDay(): number {
        if(this.centilitersperdayLazy !== null){
            return this.centilitersperdayLazy;
        }
        return this.centilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerDay);
    }

    public get DecilitersPerDay(): number {
        if(this.decilitersperdayLazy !== null){
            return this.decilitersperdayLazy;
        }
        return this.decilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerDay);
    }

    public get KilolitersPerDay(): number {
        if(this.kilolitersperdayLazy !== null){
            return this.kilolitersperdayLazy;
        }
        return this.kilolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerDay);
    }

    public get MegalitersPerDay(): number {
        if(this.megalitersperdayLazy !== null){
            return this.megalitersperdayLazy;
        }
        return this.megalitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerDay);
    }

    public get MegaukGallonsPerSecond(): number {
        if(this.megaukgallonspersecondLazy !== null){
            return this.megaukgallonspersecondLazy;
        }
        return this.megaukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.MegaukGallonsPerSecond);
    }

    public static FromCubicMetersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerSecond);
    }

    public static FromCubicMetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerMinute);
    }

    public static FromCubicMetersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerHour);
    }

    public static FromCubicMetersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerDay);
    }

    public static FromCubicFeetPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerSecond);
    }

    public static FromCubicFeetPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerMinute);
    }

    public static FromCubicFeetPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerHour);
    }

    public static FromCubicYardsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerSecond);
    }

    public static FromCubicYardsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerMinute);
    }

    public static FromCubicYardsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerHour);
    }

    public static FromCubicYardsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerDay);
    }

    public static FromMillionUsGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillionUsGallonsPerDay);
    }

    public static FromUsGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerDay);
    }

    public static FromLitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerSecond);
    }

    public static FromLitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerMinute);
    }

    public static FromLitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerHour);
    }

    public static FromLitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerDay);
    }

    public static FromUsGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerSecond);
    }

    public static FromUsGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerMinute);
    }

    public static FromUkGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerDay);
    }

    public static FromUkGallonsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerHour);
    }

    public static FromUkGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerMinute);
    }

    public static FromUkGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerSecond);
    }

    public static FromKilousGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilousGallonsPerMinute);
    }

    public static FromUsGallonsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerHour);
    }

    public static FromCubicDecimetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicDecimetersPerMinute);
    }

    public static FromOilBarrelsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerDay);
    }

    public static FromOilBarrelsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerMinute);
    }

    public static FromOilBarrelsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerHour);
    }

    public static FromOilBarrelsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerSecond);
    }

    public static FromCubicMillimetersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMillimetersPerSecond);
    }

    public static FromAcreFeetPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerSecond);
    }

    public static FromAcreFeetPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerMinute);
    }

    public static FromAcreFeetPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerHour);
    }

    public static FromAcreFeetPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerDay);
    }

    public static FromNanolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerMinute);
    }

    public static FromMicrolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerMinute);
    }

    public static FromCentilitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerMinute);
    }

    public static FromDecilitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerMinute);
    }

    public static FromKilolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerMinute);
    }

    public static FromNanolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerDay);
    }

    public static FromMicrolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerDay);
    }

    public static FromCentilitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerDay);
    }

    public static FromDecilitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerDay);
    }

    public static FromKilolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerDay);
    }

    public static FromMegalitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerDay);
    }

    public static FromMegaukGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegaukGallonsPerSecond);
    }

    private convertFromBase(toUnit: VolumeFlowUnits): number {
        switch (toUnit) {
                
            case VolumeFlowUnits.CubicMetersPerSecond:
                return this.value;
            case VolumeFlowUnits.CubicMetersPerMinute:
                return this.value*60;
            case VolumeFlowUnits.CubicMetersPerHour:
                return this.value*3600;
            case VolumeFlowUnits.CubicMetersPerDay:
                return this.value*86400;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return this.value*35.314666721;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return this.value*2118.88000326;
            case VolumeFlowUnits.CubicFeetPerHour:
                return this.value/7.8657907199999087346816086183876e-6;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return this.value/0.764554857984;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return this.value/0.0127425809664;
            case VolumeFlowUnits.CubicYardsPerHour:
                return this.value/2.1237634944E-4;
            case VolumeFlowUnits.CubicYardsPerDay:
                return this.value*113007;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return this.value*22.824465227;
            case VolumeFlowUnits.UsGallonsPerDay:
                return this.value*22824465.227;
            case VolumeFlowUnits.LitersPerSecond:
                return this.value*1000;
            case VolumeFlowUnits.LitersPerMinute:
                return this.value*60000.00000;
            case VolumeFlowUnits.LitersPerHour:
                return this.value*3600000.000;
            case VolumeFlowUnits.LitersPerDay:
                return this.value*86400000;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return this.value*264.1720523581484;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return this.value*15850.323141489;
            case VolumeFlowUnits.UkGallonsPerDay:
                return this.value*19005304;
            case VolumeFlowUnits.UkGallonsPerHour:
                return this.value*791887.667;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return this.value*13198.2;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return this.value*219.969;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return this.value*15.850323141489;
            case VolumeFlowUnits.UsGallonsPerHour:
                return this.value*951019.38848933424;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return this.value*60000.00000;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return this.value/1.8401307283333333333333333333333e-6;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return this.value/2.64978825e-3;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return this.value/4.41631375e-5;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return this.value*6.28981;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return this.value/1e-9;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return this.value*0.000810713194;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return this.value*0.0486427916;
            case VolumeFlowUnits.AcreFeetPerHour:
                return this.value*2.91857;
            case VolumeFlowUnits.AcreFeetPerDay:
                return this.value*70.0457;
            case VolumeFlowUnits.NanolitersPerMinute:
                return (this.value*60000.00000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return (this.value*60000.00000) / 0.000001;
            case VolumeFlowUnits.CentilitersPerMinute:
                return (this.value*60000.00000) / 0.01;
            case VolumeFlowUnits.DecilitersPerMinute:
                return (this.value*60000.00000) / 0.1;
            case VolumeFlowUnits.KilolitersPerMinute:
                return (this.value*60000.00000) / 1000;
            case VolumeFlowUnits.NanolitersPerDay:
                return (this.value*86400000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerDay:
                return (this.value*86400000) / 0.000001;
            case VolumeFlowUnits.CentilitersPerDay:
                return (this.value*86400000) / 0.01;
            case VolumeFlowUnits.DecilitersPerDay:
                return (this.value*86400000) / 0.1;
            case VolumeFlowUnits.KilolitersPerDay:
                return (this.value*86400000) / 1000;
            case VolumeFlowUnits.MegalitersPerDay:
                return (this.value*86400000) / 1000000;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return (this.value*219.969) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: VolumeFlowUnits): number {
        switch (fromUnit) {
                
            case VolumeFlowUnits.CubicMetersPerSecond:
                return value;
            case VolumeFlowUnits.CubicMetersPerMinute:
                return value/60;
            case VolumeFlowUnits.CubicMetersPerHour:
                return value/3600;
            case VolumeFlowUnits.CubicMetersPerDay:
                return value/86400;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return value/35.314666721;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return value/2118.88000326;
            case VolumeFlowUnits.CubicFeetPerHour:
                return value*7.8657907199999087346816086183876e-6;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return value*0.764554857984;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return value*0.0127425809664;
            case VolumeFlowUnits.CubicYardsPerHour:
                return value*2.1237634944E-4;
            case VolumeFlowUnits.CubicYardsPerDay:
                return value/113007;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return value/22.824465227;
            case VolumeFlowUnits.UsGallonsPerDay:
                return value/22824465.227;
            case VolumeFlowUnits.LitersPerSecond:
                return value/1000;
            case VolumeFlowUnits.LitersPerMinute:
                return value/60000.00000;
            case VolumeFlowUnits.LitersPerHour:
                return value/3600000.000;
            case VolumeFlowUnits.LitersPerDay:
                return value/86400000;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return value/264.1720523581484;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return value/15850.323141489;
            case VolumeFlowUnits.UkGallonsPerDay:
                return value/19005304;
            case VolumeFlowUnits.UkGallonsPerHour:
                return value/791887.667;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return value/13198.2;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return value/219.969;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return value/15.850323141489;
            case VolumeFlowUnits.UsGallonsPerHour:
                return value/951019.38848933424;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return value/60000.00000;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return value*1.8401307283333333333333333333333e-6;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return value*2.64978825e-3;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return value*4.41631375e-5;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return value/6.28981;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return value*1e-9;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return value/0.000810713194;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return value/0.0486427916;
            case VolumeFlowUnits.AcreFeetPerHour:
                return value/2.91857;
            case VolumeFlowUnits.AcreFeetPerDay:
                return value/70.0457;
            case VolumeFlowUnits.NanolitersPerMinute:
                return (value/60000.00000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return (value/60000.00000) * 0.000001;
            case VolumeFlowUnits.CentilitersPerMinute:
                return (value/60000.00000) * 0.01;
            case VolumeFlowUnits.DecilitersPerMinute:
                return (value/60000.00000) * 0.1;
            case VolumeFlowUnits.KilolitersPerMinute:
                return (value/60000.00000) * 1000;
            case VolumeFlowUnits.NanolitersPerDay:
                return (value/86400000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerDay:
                return (value/86400000) * 0.000001;
            case VolumeFlowUnits.CentilitersPerDay:
                return (value/86400000) * 0.01;
            case VolumeFlowUnits.DecilitersPerDay:
                return (value/86400000) * 0.1;
            case VolumeFlowUnits.KilolitersPerDay:
                return (value/86400000) * 1000;
            case VolumeFlowUnits.MegalitersPerDay:
                return (value/86400000) * 1000000;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return (value/219.969) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: VolumeFlowUnits = VolumeFlowUnits.CubicMetersPerSecond): string {

        switch (toUnit) {
            
            case VolumeFlowUnits.CubicMetersPerSecond:
                return this.CubicMetersPerSecond + ` m³/s`;
            case VolumeFlowUnits.CubicMetersPerMinute:
                return this.CubicMetersPerMinute + ` m³/min`;
            case VolumeFlowUnits.CubicMetersPerHour:
                return this.CubicMetersPerHour + ` m³/h`;
            case VolumeFlowUnits.CubicMetersPerDay:
                return this.CubicMetersPerDay + ` m³/d`;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return this.CubicFeetPerSecond + ` ft³/s`;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return this.CubicFeetPerMinute + ` ft³/min`;
            case VolumeFlowUnits.CubicFeetPerHour:
                return this.CubicFeetPerHour + ` ft³/h`;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return this.CubicYardsPerSecond + ` yd³/s`;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return this.CubicYardsPerMinute + ` yd³/min`;
            case VolumeFlowUnits.CubicYardsPerHour:
                return this.CubicYardsPerHour + ` yd³/h`;
            case VolumeFlowUnits.CubicYardsPerDay:
                return this.CubicYardsPerDay + ` cy/day`;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return this.MillionUsGallonsPerDay + ` MGD`;
            case VolumeFlowUnits.UsGallonsPerDay:
                return this.UsGallonsPerDay + ` gpd`;
            case VolumeFlowUnits.LitersPerSecond:
                return this.LitersPerSecond + ` L/s`;
            case VolumeFlowUnits.LitersPerMinute:
                return this.LitersPerMinute + ` L/min`;
            case VolumeFlowUnits.LitersPerHour:
                return this.LitersPerHour + ` L/h`;
            case VolumeFlowUnits.LitersPerDay:
                return this.LitersPerDay + ` l/day`;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return this.UsGallonsPerSecond + ` gal (U.S.)/s`;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return this.UsGallonsPerMinute + ` gal (U.S.)/min`;
            case VolumeFlowUnits.UkGallonsPerDay:
                return this.UkGallonsPerDay + ` gal (U. K.)/d`;
            case VolumeFlowUnits.UkGallonsPerHour:
                return this.UkGallonsPerHour + ` gal (imp.)/h`;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return this.UkGallonsPerMinute + ` gal (imp.)/min`;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return this.UkGallonsPerSecond + ` gal (imp.)/s`;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return this.KilousGallonsPerMinute + ` kgal (U.S.)/min`;
            case VolumeFlowUnits.UsGallonsPerHour:
                return this.UsGallonsPerHour + ` gal (U.S.)/h`;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return this.CubicDecimetersPerMinute + ` dm³/min`;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return this.OilBarrelsPerDay + ` bbl/d`;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return this.OilBarrelsPerMinute + ` bbl/min`;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return this.OilBarrelsPerHour + ` bbl/hr`;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return this.OilBarrelsPerSecond + ` bbl/s`;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return this.CubicMillimetersPerSecond + ` mm³/s`;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return this.AcreFeetPerSecond + ` af/s`;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return this.AcreFeetPerMinute + ` af/m`;
            case VolumeFlowUnits.AcreFeetPerHour:
                return this.AcreFeetPerHour + ` af/h`;
            case VolumeFlowUnits.AcreFeetPerDay:
                return this.AcreFeetPerDay + ` af/d`;
            case VolumeFlowUnits.NanolitersPerMinute:
                return this.NanolitersPerMinute + ` L/min`;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return this.MicrolitersPerMinute + ` L/min`;
            case VolumeFlowUnits.CentilitersPerMinute:
                return this.CentilitersPerMinute + ` L/min`;
            case VolumeFlowUnits.DecilitersPerMinute:
                return this.DecilitersPerMinute + ` L/min`;
            case VolumeFlowUnits.KilolitersPerMinute:
                return this.KilolitersPerMinute + ` L/min`;
            case VolumeFlowUnits.NanolitersPerDay:
                return this.NanolitersPerDay + ` l/day`;
            case VolumeFlowUnits.MicrolitersPerDay:
                return this.MicrolitersPerDay + ` l/day`;
            case VolumeFlowUnits.CentilitersPerDay:
                return this.CentilitersPerDay + ` l/day`;
            case VolumeFlowUnits.DecilitersPerDay:
                return this.DecilitersPerDay + ` l/day`;
            case VolumeFlowUnits.KilolitersPerDay:
                return this.KilolitersPerDay + ` l/day`;
            case VolumeFlowUnits.MegalitersPerDay:
                return this.MegalitersPerDay + ` l/day`;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return this.MegaukGallonsPerSecond + ` gal (imp.)/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
