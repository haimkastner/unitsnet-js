/** VolumeFlowUnits enumeration */
export enum VolumeFlowUnits {
    /** */
    CubicMetersPerSecond,
    /** */
    CubicMetersPerMinute,
    /** */
    CubicMetersPerHour,
    /** */
    CubicMetersPerDay,
    /** */
    CubicFeetPerSecond,
    /** */
    CubicFeetPerMinute,
    /** */
    CubicFeetPerHour,
    /** */
    CubicYardsPerSecond,
    /** */
    CubicYardsPerMinute,
    /** */
    CubicYardsPerHour,
    /** */
    CubicYardsPerDay,
    /** */
    MillionUsGallonsPerDay,
    /** */
    UsGallonsPerDay,
    /** */
    LitersPerSecond,
    /** */
    LitersPerMinute,
    /** */
    LitersPerHour,
    /** */
    LitersPerDay,
    /** */
    UsGallonsPerSecond,
    /** */
    UsGallonsPerMinute,
    /** */
    UkGallonsPerDay,
    /** */
    UkGallonsPerHour,
    /** */
    UkGallonsPerMinute,
    /** */
    UkGallonsPerSecond,
    /** */
    KilousGallonsPerMinute,
    /** */
    UsGallonsPerHour,
    /** */
    CubicDecimetersPerMinute,
    /** */
    OilBarrelsPerDay,
    /** */
    OilBarrelsPerMinute,
    /** */
    OilBarrelsPerHour,
    /** */
    OilBarrelsPerSecond,
    /** */
    CubicMillimetersPerSecond,
    /** */
    AcreFeetPerSecond,
    /** */
    AcreFeetPerMinute,
    /** */
    AcreFeetPerHour,
    /** */
    AcreFeetPerDay,
    /** */
    CubicCentimetersPerMinute,
    /** */
    NanolitersPerSecond,
    /** */
    MicrolitersPerSecond,
    /** */
    MillilitersPerSecond,
    /** */
    CentilitersPerSecond,
    /** */
    DecilitersPerSecond,
    /** */
    KilolitersPerSecond,
    /** */
    MegalitersPerSecond,
    /** */
    NanolitersPerMinute,
    /** */
    MicrolitersPerMinute,
    /** */
    MillilitersPerMinute,
    /** */
    CentilitersPerMinute,
    /** */
    DecilitersPerMinute,
    /** */
    KilolitersPerMinute,
    /** */
    MegalitersPerMinute,
    /** */
    NanolitersPerHour,
    /** */
    MicrolitersPerHour,
    /** */
    MillilitersPerHour,
    /** */
    CentilitersPerHour,
    /** */
    DecilitersPerHour,
    /** */
    KilolitersPerHour,
    /** */
    MegalitersPerHour,
    /** */
    NanolitersPerDay,
    /** */
    MicrolitersPerDay,
    /** */
    MillilitersPerDay,
    /** */
    CentilitersPerDay,
    /** */
    DecilitersPerDay,
    /** */
    KilolitersPerDay,
    /** */
    MegalitersPerDay,
    /** */
    MegaukGallonsPerSecond
}

/** In physics and engineering, in particular fluid dynamics and hydrometry, the volumetric flow rate, (also known as volume flow rate, rate of fluid flow or volume velocity) is the volume of fluid which passes through a given surface per unit time. The SI unit is m³/s (cubic meters per second). In US Customary Units and British Imperial Units, volumetric flow rate is often expressed as ft³/s (cubic feet per second). It is usually represented by the symbol Q. */
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
    private cubiccentimetersperminuteLazy: number | null = null;
    private nanoliterspersecondLazy: number | null = null;
    private microliterspersecondLazy: number | null = null;
    private milliliterspersecondLazy: number | null = null;
    private centiliterspersecondLazy: number | null = null;
    private deciliterspersecondLazy: number | null = null;
    private kiloliterspersecondLazy: number | null = null;
    private megaliterspersecondLazy: number | null = null;
    private nanolitersperminuteLazy: number | null = null;
    private microlitersperminuteLazy: number | null = null;
    private millilitersperminuteLazy: number | null = null;
    private centilitersperminuteLazy: number | null = null;
    private decilitersperminuteLazy: number | null = null;
    private kilolitersperminuteLazy: number | null = null;
    private megalitersperminuteLazy: number | null = null;
    private nanolitersperhourLazy: number | null = null;
    private microlitersperhourLazy: number | null = null;
    private millilitersperhourLazy: number | null = null;
    private centilitersperhourLazy: number | null = null;
    private decilitersperhourLazy: number | null = null;
    private kilolitersperhourLazy: number | null = null;
    private megalitersperhourLazy: number | null = null;
    private nanolitersperdayLazy: number | null = null;
    private microlitersperdayLazy: number | null = null;
    private millilitersperdayLazy: number | null = null;
    private centilitersperdayLazy: number | null = null;
    private decilitersperdayLazy: number | null = null;
    private kilolitersperdayLazy: number | null = null;
    private megalitersperdayLazy: number | null = null;
    private megaukgallonspersecondLazy: number | null = null;

    /**
     * Create a new VolumeFlow.
     * @param value The value.
     * @param fromUnit The ‘VolumeFlow’ unit to create from.
     * The default unit is CubicMetersPerSecond
     */
    public constructor(value: number, fromUnit: VolumeFlowUnits = VolumeFlowUnits.CubicMetersPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of VolumeFlow is CubicMetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get CubicMetersPerSecond(): number {
        if(this.cubicmeterspersecondLazy !== null){
            return this.cubicmeterspersecondLazy;
        }
        return this.cubicmeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerSecond);
    }

    /** */
    public get CubicMetersPerMinute(): number {
        if(this.cubicmetersperminuteLazy !== null){
            return this.cubicmetersperminuteLazy;
        }
        return this.cubicmetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerMinute);
    }

    /** */
    public get CubicMetersPerHour(): number {
        if(this.cubicmetersperhourLazy !== null){
            return this.cubicmetersperhourLazy;
        }
        return this.cubicmetersperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerHour);
    }

    /** */
    public get CubicMetersPerDay(): number {
        if(this.cubicmetersperdayLazy !== null){
            return this.cubicmetersperdayLazy;
        }
        return this.cubicmetersperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerDay);
    }

    /** */
    public get CubicFeetPerSecond(): number {
        if(this.cubicfeetpersecondLazy !== null){
            return this.cubicfeetpersecondLazy;
        }
        return this.cubicfeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerSecond);
    }

    /** */
    public get CubicFeetPerMinute(): number {
        if(this.cubicfeetperminuteLazy !== null){
            return this.cubicfeetperminuteLazy;
        }
        return this.cubicfeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerMinute);
    }

    /** */
    public get CubicFeetPerHour(): number {
        if(this.cubicfeetperhourLazy !== null){
            return this.cubicfeetperhourLazy;
        }
        return this.cubicfeetperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerHour);
    }

    /** */
    public get CubicYardsPerSecond(): number {
        if(this.cubicyardspersecondLazy !== null){
            return this.cubicyardspersecondLazy;
        }
        return this.cubicyardspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerSecond);
    }

    /** */
    public get CubicYardsPerMinute(): number {
        if(this.cubicyardsperminuteLazy !== null){
            return this.cubicyardsperminuteLazy;
        }
        return this.cubicyardsperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerMinute);
    }

    /** */
    public get CubicYardsPerHour(): number {
        if(this.cubicyardsperhourLazy !== null){
            return this.cubicyardsperhourLazy;
        }
        return this.cubicyardsperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerHour);
    }

    /** */
    public get CubicYardsPerDay(): number {
        if(this.cubicyardsperdayLazy !== null){
            return this.cubicyardsperdayLazy;
        }
        return this.cubicyardsperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerDay);
    }

    /** */
    public get MillionUsGallonsPerDay(): number {
        if(this.millionusgallonsperdayLazy !== null){
            return this.millionusgallonsperdayLazy;
        }
        return this.millionusgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.MillionUsGallonsPerDay);
    }

    /** */
    public get UsGallonsPerDay(): number {
        if(this.usgallonsperdayLazy !== null){
            return this.usgallonsperdayLazy;
        }
        return this.usgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerDay);
    }

    /** */
    public get LitersPerSecond(): number {
        if(this.literspersecondLazy !== null){
            return this.literspersecondLazy;
        }
        return this.literspersecondLazy = this.convertFromBase(VolumeFlowUnits.LitersPerSecond);
    }

    /** */
    public get LitersPerMinute(): number {
        if(this.litersperminuteLazy !== null){
            return this.litersperminuteLazy;
        }
        return this.litersperminuteLazy = this.convertFromBase(VolumeFlowUnits.LitersPerMinute);
    }

    /** */
    public get LitersPerHour(): number {
        if(this.litersperhourLazy !== null){
            return this.litersperhourLazy;
        }
        return this.litersperhourLazy = this.convertFromBase(VolumeFlowUnits.LitersPerHour);
    }

    /** */
    public get LitersPerDay(): number {
        if(this.litersperdayLazy !== null){
            return this.litersperdayLazy;
        }
        return this.litersperdayLazy = this.convertFromBase(VolumeFlowUnits.LitersPerDay);
    }

    /** */
    public get UsGallonsPerSecond(): number {
        if(this.usgallonspersecondLazy !== null){
            return this.usgallonspersecondLazy;
        }
        return this.usgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerSecond);
    }

    /** */
    public get UsGallonsPerMinute(): number {
        if(this.usgallonsperminuteLazy !== null){
            return this.usgallonsperminuteLazy;
        }
        return this.usgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerMinute);
    }

    /** */
    public get UkGallonsPerDay(): number {
        if(this.ukgallonsperdayLazy !== null){
            return this.ukgallonsperdayLazy;
        }
        return this.ukgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerDay);
    }

    /** */
    public get UkGallonsPerHour(): number {
        if(this.ukgallonsperhourLazy !== null){
            return this.ukgallonsperhourLazy;
        }
        return this.ukgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerHour);
    }

    /** */
    public get UkGallonsPerMinute(): number {
        if(this.ukgallonsperminuteLazy !== null){
            return this.ukgallonsperminuteLazy;
        }
        return this.ukgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerMinute);
    }

    /** */
    public get UkGallonsPerSecond(): number {
        if(this.ukgallonspersecondLazy !== null){
            return this.ukgallonspersecondLazy;
        }
        return this.ukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerSecond);
    }

    /** */
    public get KilousGallonsPerMinute(): number {
        if(this.kilousgallonsperminuteLazy !== null){
            return this.kilousgallonsperminuteLazy;
        }
        return this.kilousgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilousGallonsPerMinute);
    }

    /** */
    public get UsGallonsPerHour(): number {
        if(this.usgallonsperhourLazy !== null){
            return this.usgallonsperhourLazy;
        }
        return this.usgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerHour);
    }

    /** */
    public get CubicDecimetersPerMinute(): number {
        if(this.cubicdecimetersperminuteLazy !== null){
            return this.cubicdecimetersperminuteLazy;
        }
        return this.cubicdecimetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicDecimetersPerMinute);
    }

    /** */
    public get OilBarrelsPerDay(): number {
        if(this.oilbarrelsperdayLazy !== null){
            return this.oilbarrelsperdayLazy;
        }
        return this.oilbarrelsperdayLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerDay);
    }

    /** */
    public get OilBarrelsPerMinute(): number {
        if(this.oilbarrelsperminuteLazy !== null){
            return this.oilbarrelsperminuteLazy;
        }
        return this.oilbarrelsperminuteLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerMinute);
    }

    /** */
    public get OilBarrelsPerHour(): number {
        if(this.oilbarrelsperhourLazy !== null){
            return this.oilbarrelsperhourLazy;
        }
        return this.oilbarrelsperhourLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerHour);
    }

    /** */
    public get OilBarrelsPerSecond(): number {
        if(this.oilbarrelspersecondLazy !== null){
            return this.oilbarrelspersecondLazy;
        }
        return this.oilbarrelspersecondLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerSecond);
    }

    /** */
    public get CubicMillimetersPerSecond(): number {
        if(this.cubicmillimeterspersecondLazy !== null){
            return this.cubicmillimeterspersecondLazy;
        }
        return this.cubicmillimeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMillimetersPerSecond);
    }

    /** */
    public get AcreFeetPerSecond(): number {
        if(this.acrefeetpersecondLazy !== null){
            return this.acrefeetpersecondLazy;
        }
        return this.acrefeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerSecond);
    }

    /** */
    public get AcreFeetPerMinute(): number {
        if(this.acrefeetperminuteLazy !== null){
            return this.acrefeetperminuteLazy;
        }
        return this.acrefeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerMinute);
    }

    /** */
    public get AcreFeetPerHour(): number {
        if(this.acrefeetperhourLazy !== null){
            return this.acrefeetperhourLazy;
        }
        return this.acrefeetperhourLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerHour);
    }

    /** */
    public get AcreFeetPerDay(): number {
        if(this.acrefeetperdayLazy !== null){
            return this.acrefeetperdayLazy;
        }
        return this.acrefeetperdayLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerDay);
    }

    /** */
    public get CubicCentimetersPerMinute(): number {
        if(this.cubiccentimetersperminuteLazy !== null){
            return this.cubiccentimetersperminuteLazy;
        }
        return this.cubiccentimetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicCentimetersPerMinute);
    }

    /** */
    public get NanolitersPerSecond(): number {
        if(this.nanoliterspersecondLazy !== null){
            return this.nanoliterspersecondLazy;
        }
        return this.nanoliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerSecond);
    }

    /** */
    public get MicrolitersPerSecond(): number {
        if(this.microliterspersecondLazy !== null){
            return this.microliterspersecondLazy;
        }
        return this.microliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerSecond);
    }

    /** */
    public get MillilitersPerSecond(): number {
        if(this.milliliterspersecondLazy !== null){
            return this.milliliterspersecondLazy;
        }
        return this.milliliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.MillilitersPerSecond);
    }

    /** */
    public get CentilitersPerSecond(): number {
        if(this.centiliterspersecondLazy !== null){
            return this.centiliterspersecondLazy;
        }
        return this.centiliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerSecond);
    }

    /** */
    public get DecilitersPerSecond(): number {
        if(this.deciliterspersecondLazy !== null){
            return this.deciliterspersecondLazy;
        }
        return this.deciliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerSecond);
    }

    /** */
    public get KilolitersPerSecond(): number {
        if(this.kiloliterspersecondLazy !== null){
            return this.kiloliterspersecondLazy;
        }
        return this.kiloliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerSecond);
    }

    /** */
    public get MegalitersPerSecond(): number {
        if(this.megaliterspersecondLazy !== null){
            return this.megaliterspersecondLazy;
        }
        return this.megaliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerSecond);
    }

    /** */
    public get NanolitersPerMinute(): number {
        if(this.nanolitersperminuteLazy !== null){
            return this.nanolitersperminuteLazy;
        }
        return this.nanolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerMinute);
    }

    /** */
    public get MicrolitersPerMinute(): number {
        if(this.microlitersperminuteLazy !== null){
            return this.microlitersperminuteLazy;
        }
        return this.microlitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerMinute);
    }

    /** */
    public get MillilitersPerMinute(): number {
        if(this.millilitersperminuteLazy !== null){
            return this.millilitersperminuteLazy;
        }
        return this.millilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.MillilitersPerMinute);
    }

    /** */
    public get CentilitersPerMinute(): number {
        if(this.centilitersperminuteLazy !== null){
            return this.centilitersperminuteLazy;
        }
        return this.centilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerMinute);
    }

    /** */
    public get DecilitersPerMinute(): number {
        if(this.decilitersperminuteLazy !== null){
            return this.decilitersperminuteLazy;
        }
        return this.decilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerMinute);
    }

    /** */
    public get KilolitersPerMinute(): number {
        if(this.kilolitersperminuteLazy !== null){
            return this.kilolitersperminuteLazy;
        }
        return this.kilolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerMinute);
    }

    /** */
    public get MegalitersPerMinute(): number {
        if(this.megalitersperminuteLazy !== null){
            return this.megalitersperminuteLazy;
        }
        return this.megalitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerMinute);
    }

    /** */
    public get NanolitersPerHour(): number {
        if(this.nanolitersperhourLazy !== null){
            return this.nanolitersperhourLazy;
        }
        return this.nanolitersperhourLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerHour);
    }

    /** */
    public get MicrolitersPerHour(): number {
        if(this.microlitersperhourLazy !== null){
            return this.microlitersperhourLazy;
        }
        return this.microlitersperhourLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerHour);
    }

    /** */
    public get MillilitersPerHour(): number {
        if(this.millilitersperhourLazy !== null){
            return this.millilitersperhourLazy;
        }
        return this.millilitersperhourLazy = this.convertFromBase(VolumeFlowUnits.MillilitersPerHour);
    }

    /** */
    public get CentilitersPerHour(): number {
        if(this.centilitersperhourLazy !== null){
            return this.centilitersperhourLazy;
        }
        return this.centilitersperhourLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerHour);
    }

    /** */
    public get DecilitersPerHour(): number {
        if(this.decilitersperhourLazy !== null){
            return this.decilitersperhourLazy;
        }
        return this.decilitersperhourLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerHour);
    }

    /** */
    public get KilolitersPerHour(): number {
        if(this.kilolitersperhourLazy !== null){
            return this.kilolitersperhourLazy;
        }
        return this.kilolitersperhourLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerHour);
    }

    /** */
    public get MegalitersPerHour(): number {
        if(this.megalitersperhourLazy !== null){
            return this.megalitersperhourLazy;
        }
        return this.megalitersperhourLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerHour);
    }

    /** */
    public get NanolitersPerDay(): number {
        if(this.nanolitersperdayLazy !== null){
            return this.nanolitersperdayLazy;
        }
        return this.nanolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerDay);
    }

    /** */
    public get MicrolitersPerDay(): number {
        if(this.microlitersperdayLazy !== null){
            return this.microlitersperdayLazy;
        }
        return this.microlitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerDay);
    }

    /** */
    public get MillilitersPerDay(): number {
        if(this.millilitersperdayLazy !== null){
            return this.millilitersperdayLazy;
        }
        return this.millilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MillilitersPerDay);
    }

    /** */
    public get CentilitersPerDay(): number {
        if(this.centilitersperdayLazy !== null){
            return this.centilitersperdayLazy;
        }
        return this.centilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerDay);
    }

    /** */
    public get DecilitersPerDay(): number {
        if(this.decilitersperdayLazy !== null){
            return this.decilitersperdayLazy;
        }
        return this.decilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerDay);
    }

    /** */
    public get KilolitersPerDay(): number {
        if(this.kilolitersperdayLazy !== null){
            return this.kilolitersperdayLazy;
        }
        return this.kilolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerDay);
    }

    /** */
    public get MegalitersPerDay(): number {
        if(this.megalitersperdayLazy !== null){
            return this.megalitersperdayLazy;
        }
        return this.megalitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerDay);
    }

    /** */
    public get MegaukGallonsPerSecond(): number {
        if(this.megaukgallonspersecondLazy !== null){
            return this.megaukgallonspersecondLazy;
        }
        return this.megaukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.MegaukGallonsPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a CubicMetersPerSecond
     *
     * @param value The unit as CubicMetersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicMetersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a CubicMetersPerMinute
     *
     * @param value The unit as CubicMetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicMetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a CubicMetersPerHour
     *
     * @param value The unit as CubicMetersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicMetersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a CubicMetersPerDay
     *
     * @param value The unit as CubicMetersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicMetersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a CubicFeetPerSecond
     *
     * @param value The unit as CubicFeetPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicFeetPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a CubicFeetPerMinute
     *
     * @param value The unit as CubicFeetPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicFeetPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a CubicFeetPerHour
     *
     * @param value The unit as CubicFeetPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicFeetPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a CubicYardsPerSecond
     *
     * @param value The unit as CubicYardsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicYardsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a CubicYardsPerMinute
     *
     * @param value The unit as CubicYardsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicYardsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a CubicYardsPerHour
     *
     * @param value The unit as CubicYardsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicYardsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a CubicYardsPerDay
     *
     * @param value The unit as CubicYardsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicYardsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a MillionUsGallonsPerDay
     *
     * @param value The unit as MillionUsGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMillionUsGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillionUsGallonsPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a UsGallonsPerDay
     *
     * @param value The unit as UsGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUsGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a LitersPerSecond
     *
     * @param value The unit as LitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromLitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a LitersPerMinute
     *
     * @param value The unit as LitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromLitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a LitersPerHour
     *
     * @param value The unit as LitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromLitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a LitersPerDay
     *
     * @param value The unit as LitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromLitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a UsGallonsPerSecond
     *
     * @param value The unit as UsGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUsGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a UsGallonsPerMinute
     *
     * @param value The unit as UsGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUsGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a UkGallonsPerDay
     *
     * @param value The unit as UkGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUkGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a UkGallonsPerHour
     *
     * @param value The unit as UkGallonsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUkGallonsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a UkGallonsPerMinute
     *
     * @param value The unit as UkGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUkGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a UkGallonsPerSecond
     *
     * @param value The unit as UkGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUkGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a KilousGallonsPerMinute
     *
     * @param value The unit as KilousGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromKilousGallonsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilousGallonsPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a UsGallonsPerHour
     *
     * @param value The unit as UsGallonsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromUsGallonsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a CubicDecimetersPerMinute
     *
     * @param value The unit as CubicDecimetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicDecimetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicDecimetersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerDay
     *
     * @param value The unit as OilBarrelsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromOilBarrelsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerMinute
     *
     * @param value The unit as OilBarrelsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromOilBarrelsPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerHour
     *
     * @param value The unit as OilBarrelsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromOilBarrelsPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerSecond
     *
     * @param value The unit as OilBarrelsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromOilBarrelsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a CubicMillimetersPerSecond
     *
     * @param value The unit as CubicMillimetersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicMillimetersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMillimetersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a AcreFeetPerSecond
     *
     * @param value The unit as AcreFeetPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromAcreFeetPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a AcreFeetPerMinute
     *
     * @param value The unit as AcreFeetPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromAcreFeetPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a AcreFeetPerHour
     *
     * @param value The unit as AcreFeetPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromAcreFeetPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a AcreFeetPerDay
     *
     * @param value The unit as AcreFeetPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromAcreFeetPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a CubicCentimetersPerMinute
     *
     * @param value The unit as CubicCentimetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCubicCentimetersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CubicCentimetersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a NanolitersPerSecond
     *
     * @param value The unit as NanolitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromNanolitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a MicrolitersPerSecond
     *
     * @param value The unit as MicrolitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMicrolitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a MillilitersPerSecond
     *
     * @param value The unit as MillilitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMillilitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillilitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a CentilitersPerSecond
     *
     * @param value The unit as CentilitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCentilitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a DecilitersPerSecond
     *
     * @param value The unit as DecilitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecilitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a KilolitersPerSecond
     *
     * @param value The unit as KilolitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromKilolitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a MegalitersPerSecond
     *
     * @param value The unit as MegalitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegalitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a NanolitersPerMinute
     *
     * @param value The unit as NanolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromNanolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a MicrolitersPerMinute
     *
     * @param value The unit as MicrolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMicrolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a MillilitersPerMinute
     *
     * @param value The unit as MillilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMillilitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillilitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a CentilitersPerMinute
     *
     * @param value The unit as CentilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCentilitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a DecilitersPerMinute
     *
     * @param value The unit as DecilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecilitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a KilolitersPerMinute
     *
     * @param value The unit as KilolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromKilolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a MegalitersPerMinute
     *
     * @param value The unit as MegalitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegalitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a NanolitersPerHour
     *
     * @param value The unit as NanolitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromNanolitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a MicrolitersPerHour
     *
     * @param value The unit as MicrolitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMicrolitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a MillilitersPerHour
     *
     * @param value The unit as MillilitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMillilitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillilitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a CentilitersPerHour
     *
     * @param value The unit as CentilitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCentilitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a DecilitersPerHour
     *
     * @param value The unit as DecilitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecilitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a KilolitersPerHour
     *
     * @param value The unit as KilolitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromKilolitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a MegalitersPerHour
     *
     * @param value The unit as MegalitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegalitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a NanolitersPerDay
     *
     * @param value The unit as NanolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromNanolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a MicrolitersPerDay
     *
     * @param value The unit as MicrolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMicrolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a MillilitersPerDay
     *
     * @param value The unit as MillilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMillilitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MillilitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a CentilitersPerDay
     *
     * @param value The unit as CentilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromCentilitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a DecilitersPerDay
     *
     * @param value The unit as DecilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecilitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a KilolitersPerDay
     *
     * @param value The unit as KilolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromKilolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a MegalitersPerDay
     *
     * @param value The unit as MegalitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegalitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a MegaukGallonsPerSecond
     *
     * @param value The unit as MegaukGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegaukGallonsPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegaukGallonsPerSecond);
    }

    private convertFromBase(toUnit: VolumeFlowUnits): number {
        switch (toUnit) {
                
            case VolumeFlowUnits.CubicMetersPerSecond:
                return this.value;
            case VolumeFlowUnits.CubicMetersPerMinute:
                return this.value * 60;
            case VolumeFlowUnits.CubicMetersPerHour:
                return this.value * 3600;
            case VolumeFlowUnits.CubicMetersPerDay:
                return this.value * 86400;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return this.value * 35.314666721;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return this.value * 2118.88000326;
            case VolumeFlowUnits.CubicFeetPerHour:
                return this.value / 7.8657907199999087346816086183876e-6;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return this.value / 0.764554857984;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return this.value / 0.0127425809664;
            case VolumeFlowUnits.CubicYardsPerHour:
                return this.value / 2.1237634944E-4;
            case VolumeFlowUnits.CubicYardsPerDay:
                return this.value * 113007;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return this.value * 22.824465227;
            case VolumeFlowUnits.UsGallonsPerDay:
                return this.value * 22824465.227;
            case VolumeFlowUnits.LitersPerSecond:
                return this.value * 1000;
            case VolumeFlowUnits.LitersPerMinute:
                return this.value * 60000.00000;
            case VolumeFlowUnits.LitersPerHour:
                return this.value * 3600000.000;
            case VolumeFlowUnits.LitersPerDay:
                return this.value * 86400000;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return this.value * 264.1720523581484;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return this.value * 15850.323141489;
            case VolumeFlowUnits.UkGallonsPerDay:
                return this.value * 19005304;
            case VolumeFlowUnits.UkGallonsPerHour:
                return this.value * 791887.667;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return this.value * 13198.2;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return this.value * 219.969;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return this.value * 15.850323141489;
            case VolumeFlowUnits.UsGallonsPerHour:
                return this.value * 951019.38848933424;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return this.value * 60000.00000;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return this.value / 1.8401307283333333333333333333333e-6;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return this.value / 2.64978825e-3;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return this.value / 4.41631375e-5;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return this.value * 6.28981;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return this.value / 1e-9;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return this.value * 0.000810713194;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return this.value * 0.0486427916;
            case VolumeFlowUnits.AcreFeetPerHour:
                return this.value * 2.91857;
            case VolumeFlowUnits.AcreFeetPerDay:
                return this.value * 70.0457;
            case VolumeFlowUnits.CubicCentimetersPerMinute:
                return this.value / 1.6666666666667e-8;
            case VolumeFlowUnits.NanolitersPerSecond:
                return (this.value * 1000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerSecond:
                return (this.value * 1000) / 0.000001;
            case VolumeFlowUnits.MillilitersPerSecond:
                return (this.value * 1000) / 0.001;
            case VolumeFlowUnits.CentilitersPerSecond:
                return (this.value * 1000) / 0.01;
            case VolumeFlowUnits.DecilitersPerSecond:
                return (this.value * 1000) / 0.1;
            case VolumeFlowUnits.KilolitersPerSecond:
                return (this.value * 1000) / 1000;
            case VolumeFlowUnits.MegalitersPerSecond:
                return (this.value * 1000) / 1000000;
            case VolumeFlowUnits.NanolitersPerMinute:
                return (this.value * 60000.00000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return (this.value * 60000.00000) / 0.000001;
            case VolumeFlowUnits.MillilitersPerMinute:
                return (this.value * 60000.00000) / 0.001;
            case VolumeFlowUnits.CentilitersPerMinute:
                return (this.value * 60000.00000) / 0.01;
            case VolumeFlowUnits.DecilitersPerMinute:
                return (this.value * 60000.00000) / 0.1;
            case VolumeFlowUnits.KilolitersPerMinute:
                return (this.value * 60000.00000) / 1000;
            case VolumeFlowUnits.MegalitersPerMinute:
                return (this.value * 60000.00000) / 1000000;
            case VolumeFlowUnits.NanolitersPerHour:
                return (this.value * 3600000.000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerHour:
                return (this.value * 3600000.000) / 0.000001;
            case VolumeFlowUnits.MillilitersPerHour:
                return (this.value * 3600000.000) / 0.001;
            case VolumeFlowUnits.CentilitersPerHour:
                return (this.value * 3600000.000) / 0.01;
            case VolumeFlowUnits.DecilitersPerHour:
                return (this.value * 3600000.000) / 0.1;
            case VolumeFlowUnits.KilolitersPerHour:
                return (this.value * 3600000.000) / 1000;
            case VolumeFlowUnits.MegalitersPerHour:
                return (this.value * 3600000.000) / 1000000;
            case VolumeFlowUnits.NanolitersPerDay:
                return (this.value * 86400000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerDay:
                return (this.value * 86400000) / 0.000001;
            case VolumeFlowUnits.MillilitersPerDay:
                return (this.value * 86400000) / 0.001;
            case VolumeFlowUnits.CentilitersPerDay:
                return (this.value * 86400000) / 0.01;
            case VolumeFlowUnits.DecilitersPerDay:
                return (this.value * 86400000) / 0.1;
            case VolumeFlowUnits.KilolitersPerDay:
                return (this.value * 86400000) / 1000;
            case VolumeFlowUnits.MegalitersPerDay:
                return (this.value * 86400000) / 1000000;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return (this.value * 219.969) / 1000000;
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
                return value / 60;
            case VolumeFlowUnits.CubicMetersPerHour:
                return value / 3600;
            case VolumeFlowUnits.CubicMetersPerDay:
                return value / 86400;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return value / 35.314666721;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return value / 2118.88000326;
            case VolumeFlowUnits.CubicFeetPerHour:
                return value * 7.8657907199999087346816086183876e-6;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return value * 0.764554857984;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return value * 0.0127425809664;
            case VolumeFlowUnits.CubicYardsPerHour:
                return value * 2.1237634944E-4;
            case VolumeFlowUnits.CubicYardsPerDay:
                return value / 113007;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return value / 22.824465227;
            case VolumeFlowUnits.UsGallonsPerDay:
                return value / 22824465.227;
            case VolumeFlowUnits.LitersPerSecond:
                return value / 1000;
            case VolumeFlowUnits.LitersPerMinute:
                return value / 60000.00000;
            case VolumeFlowUnits.LitersPerHour:
                return value / 3600000.000;
            case VolumeFlowUnits.LitersPerDay:
                return value / 86400000;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return value / 264.1720523581484;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return value / 15850.323141489;
            case VolumeFlowUnits.UkGallonsPerDay:
                return value / 19005304;
            case VolumeFlowUnits.UkGallonsPerHour:
                return value / 791887.667;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return value / 13198.2;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return value / 219.969;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return value / 15.850323141489;
            case VolumeFlowUnits.UsGallonsPerHour:
                return value / 951019.38848933424;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return value / 60000.00000;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return value * 1.8401307283333333333333333333333e-6;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return value * 2.64978825e-3;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return value * 4.41631375e-5;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return value / 6.28981;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return value * 1e-9;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return value / 0.000810713194;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return value / 0.0486427916;
            case VolumeFlowUnits.AcreFeetPerHour:
                return value / 2.91857;
            case VolumeFlowUnits.AcreFeetPerDay:
                return value / 70.0457;
            case VolumeFlowUnits.CubicCentimetersPerMinute:
                return value * 1.6666666666667e-8;
            case VolumeFlowUnits.NanolitersPerSecond:
                return (value / 1000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerSecond:
                return (value / 1000) * 0.000001;
            case VolumeFlowUnits.MillilitersPerSecond:
                return (value / 1000) * 0.001;
            case VolumeFlowUnits.CentilitersPerSecond:
                return (value / 1000) * 0.01;
            case VolumeFlowUnits.DecilitersPerSecond:
                return (value / 1000) * 0.1;
            case VolumeFlowUnits.KilolitersPerSecond:
                return (value / 1000) * 1000;
            case VolumeFlowUnits.MegalitersPerSecond:
                return (value / 1000) * 1000000;
            case VolumeFlowUnits.NanolitersPerMinute:
                return (value / 60000.00000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return (value / 60000.00000) * 0.000001;
            case VolumeFlowUnits.MillilitersPerMinute:
                return (value / 60000.00000) * 0.001;
            case VolumeFlowUnits.CentilitersPerMinute:
                return (value / 60000.00000) * 0.01;
            case VolumeFlowUnits.DecilitersPerMinute:
                return (value / 60000.00000) * 0.1;
            case VolumeFlowUnits.KilolitersPerMinute:
                return (value / 60000.00000) * 1000;
            case VolumeFlowUnits.MegalitersPerMinute:
                return (value / 60000.00000) * 1000000;
            case VolumeFlowUnits.NanolitersPerHour:
                return (value / 3600000.000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerHour:
                return (value / 3600000.000) * 0.000001;
            case VolumeFlowUnits.MillilitersPerHour:
                return (value / 3600000.000) * 0.001;
            case VolumeFlowUnits.CentilitersPerHour:
                return (value / 3600000.000) * 0.01;
            case VolumeFlowUnits.DecilitersPerHour:
                return (value / 3600000.000) * 0.1;
            case VolumeFlowUnits.KilolitersPerHour:
                return (value / 3600000.000) * 1000;
            case VolumeFlowUnits.MegalitersPerHour:
                return (value / 3600000.000) * 1000000;
            case VolumeFlowUnits.NanolitersPerDay:
                return (value / 86400000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerDay:
                return (value / 86400000) * 0.000001;
            case VolumeFlowUnits.MillilitersPerDay:
                return (value / 86400000) * 0.001;
            case VolumeFlowUnits.CentilitersPerDay:
                return (value / 86400000) * 0.01;
            case VolumeFlowUnits.DecilitersPerDay:
                return (value / 86400000) * 0.1;
            case VolumeFlowUnits.KilolitersPerDay:
                return (value / 86400000) * 1000;
            case VolumeFlowUnits.MegalitersPerDay:
                return (value / 86400000) * 1000000;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return (value / 219.969) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the VolumeFlow to string.
     * Note! the default format for VolumeFlow is CubicMetersPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the VolumeFlow.
     * @returns The string format of the VolumeFlow.
     */
    public toString(unit: VolumeFlowUnits = VolumeFlowUnits.CubicMetersPerSecond): string {

        switch (unit) {
            
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
            case VolumeFlowUnits.CubicCentimetersPerMinute:
                return this.CubicCentimetersPerMinute + ` cm³/min`;
            case VolumeFlowUnits.NanolitersPerSecond:
                return this.NanolitersPerSecond + ` `;
            case VolumeFlowUnits.MicrolitersPerSecond:
                return this.MicrolitersPerSecond + ` `;
            case VolumeFlowUnits.MillilitersPerSecond:
                return this.MillilitersPerSecond + ` `;
            case VolumeFlowUnits.CentilitersPerSecond:
                return this.CentilitersPerSecond + ` `;
            case VolumeFlowUnits.DecilitersPerSecond:
                return this.DecilitersPerSecond + ` `;
            case VolumeFlowUnits.KilolitersPerSecond:
                return this.KilolitersPerSecond + ` `;
            case VolumeFlowUnits.MegalitersPerSecond:
                return this.MegalitersPerSecond + ` `;
            case VolumeFlowUnits.NanolitersPerMinute:
                return this.NanolitersPerMinute + ` `;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return this.MicrolitersPerMinute + ` `;
            case VolumeFlowUnits.MillilitersPerMinute:
                return this.MillilitersPerMinute + ` `;
            case VolumeFlowUnits.CentilitersPerMinute:
                return this.CentilitersPerMinute + ` `;
            case VolumeFlowUnits.DecilitersPerMinute:
                return this.DecilitersPerMinute + ` `;
            case VolumeFlowUnits.KilolitersPerMinute:
                return this.KilolitersPerMinute + ` `;
            case VolumeFlowUnits.MegalitersPerMinute:
                return this.MegalitersPerMinute + ` `;
            case VolumeFlowUnits.NanolitersPerHour:
                return this.NanolitersPerHour + ` `;
            case VolumeFlowUnits.MicrolitersPerHour:
                return this.MicrolitersPerHour + ` `;
            case VolumeFlowUnits.MillilitersPerHour:
                return this.MillilitersPerHour + ` `;
            case VolumeFlowUnits.CentilitersPerHour:
                return this.CentilitersPerHour + ` `;
            case VolumeFlowUnits.DecilitersPerHour:
                return this.DecilitersPerHour + ` `;
            case VolumeFlowUnits.KilolitersPerHour:
                return this.KilolitersPerHour + ` `;
            case VolumeFlowUnits.MegalitersPerHour:
                return this.MegalitersPerHour + ` `;
            case VolumeFlowUnits.NanolitersPerDay:
                return this.NanolitersPerDay + ` `;
            case VolumeFlowUnits.MicrolitersPerDay:
                return this.MicrolitersPerDay + ` `;
            case VolumeFlowUnits.MillilitersPerDay:
                return this.MillilitersPerDay + ` `;
            case VolumeFlowUnits.CentilitersPerDay:
                return this.CentilitersPerDay + ` `;
            case VolumeFlowUnits.DecilitersPerDay:
                return this.DecilitersPerDay + ` `;
            case VolumeFlowUnits.KilolitersPerDay:
                return this.KilolitersPerDay + ` `;
            case VolumeFlowUnits.MegalitersPerDay:
                return this.MegalitersPerDay + ` `;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return this.MegaukGallonsPerSecond + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get VolumeFlow unit abbreviation.
     * Note! the default abbreviation for VolumeFlow is CubicMetersPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the VolumeFlow.
     * @returns The abbreviation string of VolumeFlow.
     */
    public getUnitAbbreviation(unitAbbreviation: VolumeFlowUnits = VolumeFlowUnits.CubicMetersPerSecond): string {

        switch (unitAbbreviation) {
            
            case VolumeFlowUnits.CubicMetersPerSecond:
                return `m³/s`;
            case VolumeFlowUnits.CubicMetersPerMinute:
                return `m³/min`;
            case VolumeFlowUnits.CubicMetersPerHour:
                return `m³/h`;
            case VolumeFlowUnits.CubicMetersPerDay:
                return `m³/d`;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return `ft³/s`;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return `ft³/min`;
            case VolumeFlowUnits.CubicFeetPerHour:
                return `ft³/h`;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return `yd³/s`;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return `yd³/min`;
            case VolumeFlowUnits.CubicYardsPerHour:
                return `yd³/h`;
            case VolumeFlowUnits.CubicYardsPerDay:
                return `cy/day`;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return `MGD`;
            case VolumeFlowUnits.UsGallonsPerDay:
                return `gpd`;
            case VolumeFlowUnits.LitersPerSecond:
                return `L/s`;
            case VolumeFlowUnits.LitersPerMinute:
                return `L/min`;
            case VolumeFlowUnits.LitersPerHour:
                return `L/h`;
            case VolumeFlowUnits.LitersPerDay:
                return `l/day`;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return `gal (U.S.)/s`;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return `gal (U.S.)/min`;
            case VolumeFlowUnits.UkGallonsPerDay:
                return `gal (U. K.)/d`;
            case VolumeFlowUnits.UkGallonsPerHour:
                return `gal (imp.)/h`;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return `gal (imp.)/min`;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return `gal (imp.)/s`;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return `kgal (U.S.)/min`;
            case VolumeFlowUnits.UsGallonsPerHour:
                return `gal (U.S.)/h`;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return `dm³/min`;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return `bbl/d`;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return `bbl/min`;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return `bbl/hr`;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return `bbl/s`;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return `mm³/s`;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return `af/s`;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return `af/m`;
            case VolumeFlowUnits.AcreFeetPerHour:
                return `af/h`;
            case VolumeFlowUnits.AcreFeetPerDay:
                return `af/d`;
            case VolumeFlowUnits.CubicCentimetersPerMinute:
                return `cm³/min`;
            case VolumeFlowUnits.NanolitersPerSecond:
                return ``;
            case VolumeFlowUnits.MicrolitersPerSecond:
                return ``;
            case VolumeFlowUnits.MillilitersPerSecond:
                return ``;
            case VolumeFlowUnits.CentilitersPerSecond:
                return ``;
            case VolumeFlowUnits.DecilitersPerSecond:
                return ``;
            case VolumeFlowUnits.KilolitersPerSecond:
                return ``;
            case VolumeFlowUnits.MegalitersPerSecond:
                return ``;
            case VolumeFlowUnits.NanolitersPerMinute:
                return ``;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return ``;
            case VolumeFlowUnits.MillilitersPerMinute:
                return ``;
            case VolumeFlowUnits.CentilitersPerMinute:
                return ``;
            case VolumeFlowUnits.DecilitersPerMinute:
                return ``;
            case VolumeFlowUnits.KilolitersPerMinute:
                return ``;
            case VolumeFlowUnits.MegalitersPerMinute:
                return ``;
            case VolumeFlowUnits.NanolitersPerHour:
                return ``;
            case VolumeFlowUnits.MicrolitersPerHour:
                return ``;
            case VolumeFlowUnits.MillilitersPerHour:
                return ``;
            case VolumeFlowUnits.CentilitersPerHour:
                return ``;
            case VolumeFlowUnits.DecilitersPerHour:
                return ``;
            case VolumeFlowUnits.KilolitersPerHour:
                return ``;
            case VolumeFlowUnits.MegalitersPerHour:
                return ``;
            case VolumeFlowUnits.NanolitersPerDay:
                return ``;
            case VolumeFlowUnits.MicrolitersPerDay:
                return ``;
            case VolumeFlowUnits.MillilitersPerDay:
                return ``;
            case VolumeFlowUnits.CentilitersPerDay:
                return ``;
            case VolumeFlowUnits.DecilitersPerDay:
                return ``;
            case VolumeFlowUnits.KilolitersPerDay:
                return ``;
            case VolumeFlowUnits.MegalitersPerDay:
                return ``;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return ``;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given VolumeFlow are equals to the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns True if the given VolumeFlow are equal to the current VolumeFlow.
     */
    public equals(volumeFlow: VolumeFlow): boolean {
        return this.value === volumeFlow.BaseValue;
    }

    /**
     * Compare the given VolumeFlow against the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns 0 if they are equal, -1 if the current VolumeFlow is less then other, 1 if the current VolumeFlow is greater then other.
     */
    public compareTo(volumeFlow: VolumeFlow): number {

        if (this.value > volumeFlow.BaseValue)
            return 1;
        if (this.value < volumeFlow.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public add(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(this.value + volumeFlow.BaseValue)
    }

    /**
     * Subtract the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public subtract(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(this.value - volumeFlow.BaseValue)
    }

    /**
     * Multiply the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public multiply(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(this.value * volumeFlow.BaseValue)
    }

    /**
     * Divide the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public divide(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(this.value / volumeFlow.BaseValue)
    }

    /**
     * Modulo the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public modulo(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(this.value % volumeFlow.BaseValue)
    }

    /**
     * Pow the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public pow(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(this.value ** volumeFlow.BaseValue)
    }
}
