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
    NanoliterPerMinute,
    MicroliterPerMinute,
    CentiliterPerMinute,
    DeciliterPerMinute,
    KiloliterPerMinute,
    NanoliterPerDay,
    MicroliterPerDay,
    CentiliterPerDay,
    DeciliterPerDay,
    KiloliterPerDay,
    MegaliterPerDay,
    MegaukGallonPerSecond
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
    private nanoliterperminuteLazy: number | null = null;
    private microliterperminuteLazy: number | null = null;
    private centiliterperminuteLazy: number | null = null;
    private deciliterperminuteLazy: number | null = null;
    private kiloliterperminuteLazy: number | null = null;
    private nanoliterperdayLazy: number | null = null;
    private microliterperdayLazy: number | null = null;
    private centiliterperdayLazy: number | null = null;
    private deciliterperdayLazy: number | null = null;
    private kiloliterperdayLazy: number | null = null;
    private megaliterperdayLazy: number | null = null;
    private megaukgallonpersecondLazy: number | null = null;

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

    public get NanoliterPerMinute(): number {
        if(this.nanoliterperminuteLazy !== null){
            return this.nanoliterperminuteLazy;
        }
        return this.nanoliterperminuteLazy = this.convertFromBase(VolumeFlowUnits.NanoliterPerMinute);
    }

    public get MicroliterPerMinute(): number {
        if(this.microliterperminuteLazy !== null){
            return this.microliterperminuteLazy;
        }
        return this.microliterperminuteLazy = this.convertFromBase(VolumeFlowUnits.MicroliterPerMinute);
    }

    public get CentiliterPerMinute(): number {
        if(this.centiliterperminuteLazy !== null){
            return this.centiliterperminuteLazy;
        }
        return this.centiliterperminuteLazy = this.convertFromBase(VolumeFlowUnits.CentiliterPerMinute);
    }

    public get DeciliterPerMinute(): number {
        if(this.deciliterperminuteLazy !== null){
            return this.deciliterperminuteLazy;
        }
        return this.deciliterperminuteLazy = this.convertFromBase(VolumeFlowUnits.DeciliterPerMinute);
    }

    public get KiloliterPerMinute(): number {
        if(this.kiloliterperminuteLazy !== null){
            return this.kiloliterperminuteLazy;
        }
        return this.kiloliterperminuteLazy = this.convertFromBase(VolumeFlowUnits.KiloliterPerMinute);
    }

    public get NanoliterPerDay(): number {
        if(this.nanoliterperdayLazy !== null){
            return this.nanoliterperdayLazy;
        }
        return this.nanoliterperdayLazy = this.convertFromBase(VolumeFlowUnits.NanoliterPerDay);
    }

    public get MicroliterPerDay(): number {
        if(this.microliterperdayLazy !== null){
            return this.microliterperdayLazy;
        }
        return this.microliterperdayLazy = this.convertFromBase(VolumeFlowUnits.MicroliterPerDay);
    }

    public get CentiliterPerDay(): number {
        if(this.centiliterperdayLazy !== null){
            return this.centiliterperdayLazy;
        }
        return this.centiliterperdayLazy = this.convertFromBase(VolumeFlowUnits.CentiliterPerDay);
    }

    public get DeciliterPerDay(): number {
        if(this.deciliterperdayLazy !== null){
            return this.deciliterperdayLazy;
        }
        return this.deciliterperdayLazy = this.convertFromBase(VolumeFlowUnits.DeciliterPerDay);
    }

    public get KiloliterPerDay(): number {
        if(this.kiloliterperdayLazy !== null){
            return this.kiloliterperdayLazy;
        }
        return this.kiloliterperdayLazy = this.convertFromBase(VolumeFlowUnits.KiloliterPerDay);
    }

    public get MegaliterPerDay(): number {
        if(this.megaliterperdayLazy !== null){
            return this.megaliterperdayLazy;
        }
        return this.megaliterperdayLazy = this.convertFromBase(VolumeFlowUnits.MegaliterPerDay);
    }

    public get MegaukGallonPerSecond(): number {
        if(this.megaukgallonpersecondLazy !== null){
            return this.megaukgallonpersecondLazy;
        }
        return this.megaukgallonpersecondLazy = this.convertFromBase(VolumeFlowUnits.MegaukGallonPerSecond);
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

    public static FromNanoliterPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanoliterPerMinute);
    }

    public static FromMicroliterPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicroliterPerMinute);
    }

    public static FromCentiliterPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentiliterPerMinute);
    }

    public static FromDeciliterPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DeciliterPerMinute);
    }

    public static FromKiloliterPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KiloliterPerMinute);
    }

    public static FromNanoliterPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanoliterPerDay);
    }

    public static FromMicroliterPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicroliterPerDay);
    }

    public static FromCentiliterPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentiliterPerDay);
    }

    public static FromDeciliterPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DeciliterPerDay);
    }

    public static FromKiloliterPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KiloliterPerDay);
    }

    public static FromMegaliterPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegaliterPerDay);
    }

    public static FromMegaukGallonPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegaukGallonPerSecond);
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
            case VolumeFlowUnits.NanoliterPerMinute:
                return (this.value*60000.00000) / 1e-9;
            case VolumeFlowUnits.MicroliterPerMinute:
                return (this.value*60000.00000) / 0.000001;
            case VolumeFlowUnits.CentiliterPerMinute:
                return (this.value*60000.00000) / 0.01;
            case VolumeFlowUnits.DeciliterPerMinute:
                return (this.value*60000.00000) / 0.1;
            case VolumeFlowUnits.KiloliterPerMinute:
                return (this.value*60000.00000) / 1000;
            case VolumeFlowUnits.NanoliterPerDay:
                return (this.value*86400000) / 1e-9;
            case VolumeFlowUnits.MicroliterPerDay:
                return (this.value*86400000) / 0.000001;
            case VolumeFlowUnits.CentiliterPerDay:
                return (this.value*86400000) / 0.01;
            case VolumeFlowUnits.DeciliterPerDay:
                return (this.value*86400000) / 0.1;
            case VolumeFlowUnits.KiloliterPerDay:
                return (this.value*86400000) / 1000;
            case VolumeFlowUnits.MegaliterPerDay:
                return (this.value*86400000) / 1000000;
            case VolumeFlowUnits.MegaukGallonPerSecond:
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
            case VolumeFlowUnits.NanoliterPerMinute:
                return (value/60000.00000) * 1e-9;
            case VolumeFlowUnits.MicroliterPerMinute:
                return (value/60000.00000) * 0.000001;
            case VolumeFlowUnits.CentiliterPerMinute:
                return (value/60000.00000) * 0.01;
            case VolumeFlowUnits.DeciliterPerMinute:
                return (value/60000.00000) * 0.1;
            case VolumeFlowUnits.KiloliterPerMinute:
                return (value/60000.00000) * 1000;
            case VolumeFlowUnits.NanoliterPerDay:
                return (value/86400000) * 1e-9;
            case VolumeFlowUnits.MicroliterPerDay:
                return (value/86400000) * 0.000001;
            case VolumeFlowUnits.CentiliterPerDay:
                return (value/86400000) * 0.01;
            case VolumeFlowUnits.DeciliterPerDay:
                return (value/86400000) * 0.1;
            case VolumeFlowUnits.KiloliterPerDay:
                return (value/86400000) * 1000;
            case VolumeFlowUnits.MegaliterPerDay:
                return (value/86400000) * 1000000;
            case VolumeFlowUnits.MegaukGallonPerSecond:
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
            case VolumeFlowUnits.NanoliterPerMinute:
                return this.NanoliterPerMinute + ` L/min`;
            case VolumeFlowUnits.MicroliterPerMinute:
                return this.MicroliterPerMinute + ` L/min`;
            case VolumeFlowUnits.CentiliterPerMinute:
                return this.CentiliterPerMinute + ` L/min`;
            case VolumeFlowUnits.DeciliterPerMinute:
                return this.DeciliterPerMinute + ` L/min`;
            case VolumeFlowUnits.KiloliterPerMinute:
                return this.KiloliterPerMinute + ` L/min`;
            case VolumeFlowUnits.NanoliterPerDay:
                return this.NanoliterPerDay + ` l/day`;
            case VolumeFlowUnits.MicroliterPerDay:
                return this.MicroliterPerDay + ` l/day`;
            case VolumeFlowUnits.CentiliterPerDay:
                return this.CentiliterPerDay + ` l/day`;
            case VolumeFlowUnits.DeciliterPerDay:
                return this.DeciliterPerDay + ` l/day`;
            case VolumeFlowUnits.KiloliterPerDay:
                return this.KiloliterPerDay + ` l/day`;
            case VolumeFlowUnits.MegaliterPerDay:
                return this.MegaliterPerDay + ` l/day`;
            case VolumeFlowUnits.MegaukGallonPerSecond:
                return this.MegaukGallonPerSecond + ` gal (imp.)/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
