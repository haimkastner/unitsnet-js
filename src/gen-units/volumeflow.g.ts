import { BaseUnit } from "../base-unit";

/** VolumeFlowUnits enumeration */
export enum VolumeFlowUnits {
    /** */
    CubicMetersPerSecond = "CubicMeterPerSecond",
    /** */
    CubicMetersPerMinute = "CubicMeterPerMinute",
    /** */
    CubicMetersPerHour = "CubicMeterPerHour",
    /** */
    CubicMetersPerDay = "CubicMeterPerDay",
    /** */
    CubicFeetPerSecond = "CubicFootPerSecond",
    /** */
    CubicFeetPerMinute = "CubicFootPerMinute",
    /** */
    CubicFeetPerHour = "CubicFootPerHour",
    /** */
    CubicYardsPerSecond = "CubicYardPerSecond",
    /** */
    CubicYardsPerMinute = "CubicYardPerMinute",
    /** */
    CubicYardsPerHour = "CubicYardPerHour",
    /** */
    CubicYardsPerDay = "CubicYardPerDay",
    /** */
    MillionUsGallonsPerDay = "MillionUsGallonPerDay",
    /** */
    UsGallonsPerDay = "UsGallonPerDay",
    /** */
    LitersPerSecond = "LiterPerSecond",
    /** */
    LitersPerMinute = "LiterPerMinute",
    /** */
    LitersPerHour = "LiterPerHour",
    /** */
    LitersPerDay = "LiterPerDay",
    /** */
    UsGallonsPerSecond = "UsGallonPerSecond",
    /** */
    UsGallonsPerMinute = "UsGallonPerMinute",
    /** */
    UkGallonsPerDay = "UkGallonPerDay",
    /** */
    UkGallonsPerHour = "UkGallonPerHour",
    /** */
    UkGallonsPerMinute = "UkGallonPerMinute",
    /** */
    UkGallonsPerSecond = "UkGallonPerSecond",
    /** */
    KilousGallonsPerMinute = "KilousGallonPerMinute",
    /** */
    UsGallonsPerHour = "UsGallonPerHour",
    /** */
    CubicDecimetersPerMinute = "CubicDecimeterPerMinute",
    /** */
    OilBarrelsPerDay = "OilBarrelPerDay",
    /** */
    OilBarrelsPerMinute = "OilBarrelPerMinute",
    /** */
    OilBarrelsPerHour = "OilBarrelPerHour",
    /** */
    OilBarrelsPerSecond = "OilBarrelPerSecond",
    /** */
    CubicMillimetersPerSecond = "CubicMillimeterPerSecond",
    /** */
    AcreFeetPerSecond = "AcreFootPerSecond",
    /** */
    AcreFeetPerMinute = "AcreFootPerMinute",
    /** */
    AcreFeetPerHour = "AcreFootPerHour",
    /** */
    AcreFeetPerDay = "AcreFootPerDay",
    /** */
    CubicCentimetersPerMinute = "CubicCentimeterPerMinute",
    /** */
    MegausGallonsPerDay = "MegausGallonPerDay",
    /** */
    NanolitersPerSecond = "NanoliterPerSecond",
    /** */
    MicrolitersPerSecond = "MicroliterPerSecond",
    /** */
    MillilitersPerSecond = "MilliliterPerSecond",
    /** */
    CentilitersPerSecond = "CentiliterPerSecond",
    /** */
    DecilitersPerSecond = "DeciliterPerSecond",
    /** */
    DecalitersPerSecond = "DecaliterPerSecond",
    /** */
    HectolitersPerSecond = "HectoliterPerSecond",
    /** */
    KilolitersPerSecond = "KiloliterPerSecond",
    /** */
    MegalitersPerSecond = "MegaliterPerSecond",
    /** */
    NanolitersPerMinute = "NanoliterPerMinute",
    /** */
    MicrolitersPerMinute = "MicroliterPerMinute",
    /** */
    MillilitersPerMinute = "MilliliterPerMinute",
    /** */
    CentilitersPerMinute = "CentiliterPerMinute",
    /** */
    DecilitersPerMinute = "DeciliterPerMinute",
    /** */
    DecalitersPerMinute = "DecaliterPerMinute",
    /** */
    HectolitersPerMinute = "HectoliterPerMinute",
    /** */
    KilolitersPerMinute = "KiloliterPerMinute",
    /** */
    MegalitersPerMinute = "MegaliterPerMinute",
    /** */
    NanolitersPerHour = "NanoliterPerHour",
    /** */
    MicrolitersPerHour = "MicroliterPerHour",
    /** */
    MillilitersPerHour = "MilliliterPerHour",
    /** */
    CentilitersPerHour = "CentiliterPerHour",
    /** */
    DecilitersPerHour = "DeciliterPerHour",
    /** */
    DecalitersPerHour = "DecaliterPerHour",
    /** */
    HectolitersPerHour = "HectoliterPerHour",
    /** */
    KilolitersPerHour = "KiloliterPerHour",
    /** */
    MegalitersPerHour = "MegaliterPerHour",
    /** */
    NanolitersPerDay = "NanoliterPerDay",
    /** */
    MicrolitersPerDay = "MicroliterPerDay",
    /** */
    MillilitersPerDay = "MilliliterPerDay",
    /** */
    CentilitersPerDay = "CentiliterPerDay",
    /** */
    DecilitersPerDay = "DeciliterPerDay",
    /** */
    DecalitersPerDay = "DecaliterPerDay",
    /** */
    HectolitersPerDay = "HectoliterPerDay",
    /** */
    KilolitersPerDay = "KiloliterPerDay",
    /** */
    MegalitersPerDay = "MegaliterPerDay",
    /** */
    MegaukGallonsPerDay = "MegaukGallonPerDay",
    /** */
    MegaukGallonsPerSecond = "MegaukGallonPerSecond"
}

/** In physics and engineering, in particular fluid dynamics and hydrometry, the volumetric flow rate, (also known as volume flow rate, rate of fluid flow or volume velocity) is the volume of fluid which passes through a given surface per unit time. The SI unit is m³/s (cubic meters per second). In US Customary Units and British Imperial Units, volumetric flow rate is often expressed as ft³/s (cubic feet per second). It is usually represented by the symbol Q. */
export class VolumeFlow extends BaseUnit {
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
    private megausgallonsperdayLazy: number | null = null;
    private nanoliterspersecondLazy: number | null = null;
    private microliterspersecondLazy: number | null = null;
    private milliliterspersecondLazy: number | null = null;
    private centiliterspersecondLazy: number | null = null;
    private deciliterspersecondLazy: number | null = null;
    private decaliterspersecondLazy: number | null = null;
    private hectoliterspersecondLazy: number | null = null;
    private kiloliterspersecondLazy: number | null = null;
    private megaliterspersecondLazy: number | null = null;
    private nanolitersperminuteLazy: number | null = null;
    private microlitersperminuteLazy: number | null = null;
    private millilitersperminuteLazy: number | null = null;
    private centilitersperminuteLazy: number | null = null;
    private decilitersperminuteLazy: number | null = null;
    private decalitersperminuteLazy: number | null = null;
    private hectolitersperminuteLazy: number | null = null;
    private kilolitersperminuteLazy: number | null = null;
    private megalitersperminuteLazy: number | null = null;
    private nanolitersperhourLazy: number | null = null;
    private microlitersperhourLazy: number | null = null;
    private millilitersperhourLazy: number | null = null;
    private centilitersperhourLazy: number | null = null;
    private decilitersperhourLazy: number | null = null;
    private decalitersperhourLazy: number | null = null;
    private hectolitersperhourLazy: number | null = null;
    private kilolitersperhourLazy: number | null = null;
    private megalitersperhourLazy: number | null = null;
    private nanolitersperdayLazy: number | null = null;
    private microlitersperdayLazy: number | null = null;
    private millilitersperdayLazy: number | null = null;
    private centilitersperdayLazy: number | null = null;
    private decilitersperdayLazy: number | null = null;
    private decalitersperdayLazy: number | null = null;
    private hectolitersperdayLazy: number | null = null;
    private kilolitersperdayLazy: number | null = null;
    private megalitersperdayLazy: number | null = null;
    private megaukgallonsperdayLazy: number | null = null;
    private megaukgallonspersecondLazy: number | null = null;

    /**
     * Create a new VolumeFlow.
     * @param value The value.
     * @param fromUnit The ‘VolumeFlow’ unit to create from.
     * The default unit is CubicMetersPerSecond
     */
    public constructor(value: number, fromUnit: VolumeFlowUnits = VolumeFlowUnits.CubicMetersPerSecond) {

        super();
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
    public get MegausGallonsPerDay(): number {
        if(this.megausgallonsperdayLazy !== null){
            return this.megausgallonsperdayLazy;
        }
        return this.megausgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.MegausGallonsPerDay);
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
    public get DecalitersPerSecond(): number {
        if(this.decaliterspersecondLazy !== null){
            return this.decaliterspersecondLazy;
        }
        return this.decaliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.DecalitersPerSecond);
    }

    /** */
    public get HectolitersPerSecond(): number {
        if(this.hectoliterspersecondLazy !== null){
            return this.hectoliterspersecondLazy;
        }
        return this.hectoliterspersecondLazy = this.convertFromBase(VolumeFlowUnits.HectolitersPerSecond);
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
    public get DecalitersPerMinute(): number {
        if(this.decalitersperminuteLazy !== null){
            return this.decalitersperminuteLazy;
        }
        return this.decalitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.DecalitersPerMinute);
    }

    /** */
    public get HectolitersPerMinute(): number {
        if(this.hectolitersperminuteLazy !== null){
            return this.hectolitersperminuteLazy;
        }
        return this.hectolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.HectolitersPerMinute);
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
    public get DecalitersPerHour(): number {
        if(this.decalitersperhourLazy !== null){
            return this.decalitersperhourLazy;
        }
        return this.decalitersperhourLazy = this.convertFromBase(VolumeFlowUnits.DecalitersPerHour);
    }

    /** */
    public get HectolitersPerHour(): number {
        if(this.hectolitersperhourLazy !== null){
            return this.hectolitersperhourLazy;
        }
        return this.hectolitersperhourLazy = this.convertFromBase(VolumeFlowUnits.HectolitersPerHour);
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
    public get DecalitersPerDay(): number {
        if(this.decalitersperdayLazy !== null){
            return this.decalitersperdayLazy;
        }
        return this.decalitersperdayLazy = this.convertFromBase(VolumeFlowUnits.DecalitersPerDay);
    }

    /** */
    public get HectolitersPerDay(): number {
        if(this.hectolitersperdayLazy !== null){
            return this.hectolitersperdayLazy;
        }
        return this.hectolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.HectolitersPerDay);
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
    public get MegaukGallonsPerDay(): number {
        if(this.megaukgallonsperdayLazy !== null){
            return this.megaukgallonsperdayLazy;
        }
        return this.megaukgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.MegaukGallonsPerDay);
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
     * Create a new VolumeFlow instance from a MegausGallonsPerDay
     *
     * @param value The unit as MegausGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegausGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegausGallonsPerDay);
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
     * Create a new VolumeFlow instance from a DecalitersPerSecond
     *
     * @param value The unit as DecalitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecalitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecalitersPerSecond);
    }

    /**
     * Create a new VolumeFlow instance from a HectolitersPerSecond
     *
     * @param value The unit as HectolitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromHectolitersPerSecond(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.HectolitersPerSecond);
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
     * Create a new VolumeFlow instance from a DecalitersPerMinute
     *
     * @param value The unit as DecalitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecalitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecalitersPerMinute);
    }

    /**
     * Create a new VolumeFlow instance from a HectolitersPerMinute
     *
     * @param value The unit as HectolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromHectolitersPerMinute(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.HectolitersPerMinute);
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
     * Create a new VolumeFlow instance from a DecalitersPerHour
     *
     * @param value The unit as DecalitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecalitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecalitersPerHour);
    }

    /**
     * Create a new VolumeFlow instance from a HectolitersPerHour
     *
     * @param value The unit as HectolitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromHectolitersPerHour(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.HectolitersPerHour);
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
     * Create a new VolumeFlow instance from a DecalitersPerDay
     *
     * @param value The unit as DecalitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromDecalitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.DecalitersPerDay);
    }

    /**
     * Create a new VolumeFlow instance from a HectolitersPerDay
     *
     * @param value The unit as HectolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromHectolitersPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.HectolitersPerDay);
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
     * Create a new VolumeFlow instance from a MegaukGallonsPerDay
     *
     * @param value The unit as MegaukGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    public static FromMegaukGallonsPerDay(value: number): VolumeFlow {
        return new VolumeFlow(value, VolumeFlowUnits.MegaukGallonsPerDay);
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

    /**
     * Convert VolumeFlow to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: VolumeFlowUnits): number {
        switch (toUnit) {
            case VolumeFlowUnits.CubicMetersPerSecond: return this.CubicMetersPerSecond;
            case VolumeFlowUnits.CubicMetersPerMinute: return this.CubicMetersPerMinute;
            case VolumeFlowUnits.CubicMetersPerHour: return this.CubicMetersPerHour;
            case VolumeFlowUnits.CubicMetersPerDay: return this.CubicMetersPerDay;
            case VolumeFlowUnits.CubicFeetPerSecond: return this.CubicFeetPerSecond;
            case VolumeFlowUnits.CubicFeetPerMinute: return this.CubicFeetPerMinute;
            case VolumeFlowUnits.CubicFeetPerHour: return this.CubicFeetPerHour;
            case VolumeFlowUnits.CubicYardsPerSecond: return this.CubicYardsPerSecond;
            case VolumeFlowUnits.CubicYardsPerMinute: return this.CubicYardsPerMinute;
            case VolumeFlowUnits.CubicYardsPerHour: return this.CubicYardsPerHour;
            case VolumeFlowUnits.CubicYardsPerDay: return this.CubicYardsPerDay;
            case VolumeFlowUnits.MillionUsGallonsPerDay: return this.MillionUsGallonsPerDay;
            case VolumeFlowUnits.UsGallonsPerDay: return this.UsGallonsPerDay;
            case VolumeFlowUnits.LitersPerSecond: return this.LitersPerSecond;
            case VolumeFlowUnits.LitersPerMinute: return this.LitersPerMinute;
            case VolumeFlowUnits.LitersPerHour: return this.LitersPerHour;
            case VolumeFlowUnits.LitersPerDay: return this.LitersPerDay;
            case VolumeFlowUnits.UsGallonsPerSecond: return this.UsGallonsPerSecond;
            case VolumeFlowUnits.UsGallonsPerMinute: return this.UsGallonsPerMinute;
            case VolumeFlowUnits.UkGallonsPerDay: return this.UkGallonsPerDay;
            case VolumeFlowUnits.UkGallonsPerHour: return this.UkGallonsPerHour;
            case VolumeFlowUnits.UkGallonsPerMinute: return this.UkGallonsPerMinute;
            case VolumeFlowUnits.UkGallonsPerSecond: return this.UkGallonsPerSecond;
            case VolumeFlowUnits.KilousGallonsPerMinute: return this.KilousGallonsPerMinute;
            case VolumeFlowUnits.UsGallonsPerHour: return this.UsGallonsPerHour;
            case VolumeFlowUnits.CubicDecimetersPerMinute: return this.CubicDecimetersPerMinute;
            case VolumeFlowUnits.OilBarrelsPerDay: return this.OilBarrelsPerDay;
            case VolumeFlowUnits.OilBarrelsPerMinute: return this.OilBarrelsPerMinute;
            case VolumeFlowUnits.OilBarrelsPerHour: return this.OilBarrelsPerHour;
            case VolumeFlowUnits.OilBarrelsPerSecond: return this.OilBarrelsPerSecond;
            case VolumeFlowUnits.CubicMillimetersPerSecond: return this.CubicMillimetersPerSecond;
            case VolumeFlowUnits.AcreFeetPerSecond: return this.AcreFeetPerSecond;
            case VolumeFlowUnits.AcreFeetPerMinute: return this.AcreFeetPerMinute;
            case VolumeFlowUnits.AcreFeetPerHour: return this.AcreFeetPerHour;
            case VolumeFlowUnits.AcreFeetPerDay: return this.AcreFeetPerDay;
            case VolumeFlowUnits.CubicCentimetersPerMinute: return this.CubicCentimetersPerMinute;
            case VolumeFlowUnits.MegausGallonsPerDay: return this.MegausGallonsPerDay;
            case VolumeFlowUnits.NanolitersPerSecond: return this.NanolitersPerSecond;
            case VolumeFlowUnits.MicrolitersPerSecond: return this.MicrolitersPerSecond;
            case VolumeFlowUnits.MillilitersPerSecond: return this.MillilitersPerSecond;
            case VolumeFlowUnits.CentilitersPerSecond: return this.CentilitersPerSecond;
            case VolumeFlowUnits.DecilitersPerSecond: return this.DecilitersPerSecond;
            case VolumeFlowUnits.DecalitersPerSecond: return this.DecalitersPerSecond;
            case VolumeFlowUnits.HectolitersPerSecond: return this.HectolitersPerSecond;
            case VolumeFlowUnits.KilolitersPerSecond: return this.KilolitersPerSecond;
            case VolumeFlowUnits.MegalitersPerSecond: return this.MegalitersPerSecond;
            case VolumeFlowUnits.NanolitersPerMinute: return this.NanolitersPerMinute;
            case VolumeFlowUnits.MicrolitersPerMinute: return this.MicrolitersPerMinute;
            case VolumeFlowUnits.MillilitersPerMinute: return this.MillilitersPerMinute;
            case VolumeFlowUnits.CentilitersPerMinute: return this.CentilitersPerMinute;
            case VolumeFlowUnits.DecilitersPerMinute: return this.DecilitersPerMinute;
            case VolumeFlowUnits.DecalitersPerMinute: return this.DecalitersPerMinute;
            case VolumeFlowUnits.HectolitersPerMinute: return this.HectolitersPerMinute;
            case VolumeFlowUnits.KilolitersPerMinute: return this.KilolitersPerMinute;
            case VolumeFlowUnits.MegalitersPerMinute: return this.MegalitersPerMinute;
            case VolumeFlowUnits.NanolitersPerHour: return this.NanolitersPerHour;
            case VolumeFlowUnits.MicrolitersPerHour: return this.MicrolitersPerHour;
            case VolumeFlowUnits.MillilitersPerHour: return this.MillilitersPerHour;
            case VolumeFlowUnits.CentilitersPerHour: return this.CentilitersPerHour;
            case VolumeFlowUnits.DecilitersPerHour: return this.DecilitersPerHour;
            case VolumeFlowUnits.DecalitersPerHour: return this.DecalitersPerHour;
            case VolumeFlowUnits.HectolitersPerHour: return this.HectolitersPerHour;
            case VolumeFlowUnits.KilolitersPerHour: return this.KilolitersPerHour;
            case VolumeFlowUnits.MegalitersPerHour: return this.MegalitersPerHour;
            case VolumeFlowUnits.NanolitersPerDay: return this.NanolitersPerDay;
            case VolumeFlowUnits.MicrolitersPerDay: return this.MicrolitersPerDay;
            case VolumeFlowUnits.MillilitersPerDay: return this.MillilitersPerDay;
            case VolumeFlowUnits.CentilitersPerDay: return this.CentilitersPerDay;
            case VolumeFlowUnits.DecilitersPerDay: return this.DecilitersPerDay;
            case VolumeFlowUnits.DecalitersPerDay: return this.DecalitersPerDay;
            case VolumeFlowUnits.HectolitersPerDay: return this.HectolitersPerDay;
            case VolumeFlowUnits.KilolitersPerDay: return this.KilolitersPerDay;
            case VolumeFlowUnits.MegalitersPerDay: return this.MegalitersPerDay;
            case VolumeFlowUnits.MegaukGallonsPerDay: return this.MegaukGallonsPerDay;
            case VolumeFlowUnits.MegaukGallonsPerSecond: return this.MegaukGallonsPerSecond;

            default:
                break;
        }
        return NaN;
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
            case VolumeFlowUnits.MegausGallonsPerDay:
                return (this.value * 22824465.227) / 1000000;
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
            case VolumeFlowUnits.DecalitersPerSecond:
                return (this.value * 1000) / 10;
            case VolumeFlowUnits.HectolitersPerSecond:
                return (this.value * 1000) / 100;
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
            case VolumeFlowUnits.DecalitersPerMinute:
                return (this.value * 60000.00000) / 10;
            case VolumeFlowUnits.HectolitersPerMinute:
                return (this.value * 60000.00000) / 100;
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
            case VolumeFlowUnits.DecalitersPerHour:
                return (this.value * 3600000.000) / 10;
            case VolumeFlowUnits.HectolitersPerHour:
                return (this.value * 3600000.000) / 100;
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
            case VolumeFlowUnits.DecalitersPerDay:
                return (this.value * 86400000) / 10;
            case VolumeFlowUnits.HectolitersPerDay:
                return (this.value * 86400000) / 100;
            case VolumeFlowUnits.KilolitersPerDay:
                return (this.value * 86400000) / 1000;
            case VolumeFlowUnits.MegalitersPerDay:
                return (this.value * 86400000) / 1000000;
            case VolumeFlowUnits.MegaukGallonsPerDay:
                return (this.value * 19005304) / 1000000;
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
            case VolumeFlowUnits.MegausGallonsPerDay:
                return (value / 22824465.227) * 1000000;
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
            case VolumeFlowUnits.DecalitersPerSecond:
                return (value / 1000) * 10;
            case VolumeFlowUnits.HectolitersPerSecond:
                return (value / 1000) * 100;
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
            case VolumeFlowUnits.DecalitersPerMinute:
                return (value / 60000.00000) * 10;
            case VolumeFlowUnits.HectolitersPerMinute:
                return (value / 60000.00000) * 100;
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
            case VolumeFlowUnits.DecalitersPerHour:
                return (value / 3600000.000) * 10;
            case VolumeFlowUnits.HectolitersPerHour:
                return (value / 3600000.000) * 100;
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
            case VolumeFlowUnits.DecalitersPerDay:
                return (value / 86400000) * 10;
            case VolumeFlowUnits.HectolitersPerDay:
                return (value / 86400000) * 100;
            case VolumeFlowUnits.KilolitersPerDay:
                return (value / 86400000) * 1000;
            case VolumeFlowUnits.MegalitersPerDay:
                return (value / 86400000) * 1000000;
            case VolumeFlowUnits.MegaukGallonsPerDay:
                return (value / 19005304) * 1000000;
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
            case VolumeFlowUnits.MegausGallonsPerDay:
                return this.MegausGallonsPerDay + ` Mgpd`;
            case VolumeFlowUnits.NanolitersPerSecond:
                return this.NanolitersPerSecond + ` nL/s`;
            case VolumeFlowUnits.MicrolitersPerSecond:
                return this.MicrolitersPerSecond + ` μL/s`;
            case VolumeFlowUnits.MillilitersPerSecond:
                return this.MillilitersPerSecond + ` mL/s`;
            case VolumeFlowUnits.CentilitersPerSecond:
                return this.CentilitersPerSecond + ` cL/s`;
            case VolumeFlowUnits.DecilitersPerSecond:
                return this.DecilitersPerSecond + ` dL/s`;
            case VolumeFlowUnits.DecalitersPerSecond:
                return this.DecalitersPerSecond + ` daL/s`;
            case VolumeFlowUnits.HectolitersPerSecond:
                return this.HectolitersPerSecond + ` hL/s`;
            case VolumeFlowUnits.KilolitersPerSecond:
                return this.KilolitersPerSecond + ` kL/s`;
            case VolumeFlowUnits.MegalitersPerSecond:
                return this.MegalitersPerSecond + ` ML/s`;
            case VolumeFlowUnits.NanolitersPerMinute:
                return this.NanolitersPerMinute + ` nL/min`;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return this.MicrolitersPerMinute + ` μL/min`;
            case VolumeFlowUnits.MillilitersPerMinute:
                return this.MillilitersPerMinute + ` mL/min`;
            case VolumeFlowUnits.CentilitersPerMinute:
                return this.CentilitersPerMinute + ` cL/min`;
            case VolumeFlowUnits.DecilitersPerMinute:
                return this.DecilitersPerMinute + ` dL/min`;
            case VolumeFlowUnits.DecalitersPerMinute:
                return this.DecalitersPerMinute + ` daL/min`;
            case VolumeFlowUnits.HectolitersPerMinute:
                return this.HectolitersPerMinute + ` hL/min`;
            case VolumeFlowUnits.KilolitersPerMinute:
                return this.KilolitersPerMinute + ` kL/min`;
            case VolumeFlowUnits.MegalitersPerMinute:
                return this.MegalitersPerMinute + ` ML/min`;
            case VolumeFlowUnits.NanolitersPerHour:
                return this.NanolitersPerHour + ` nL/h`;
            case VolumeFlowUnits.MicrolitersPerHour:
                return this.MicrolitersPerHour + ` μL/h`;
            case VolumeFlowUnits.MillilitersPerHour:
                return this.MillilitersPerHour + ` mL/h`;
            case VolumeFlowUnits.CentilitersPerHour:
                return this.CentilitersPerHour + ` cL/h`;
            case VolumeFlowUnits.DecilitersPerHour:
                return this.DecilitersPerHour + ` dL/h`;
            case VolumeFlowUnits.DecalitersPerHour:
                return this.DecalitersPerHour + ` daL/h`;
            case VolumeFlowUnits.HectolitersPerHour:
                return this.HectolitersPerHour + ` hL/h`;
            case VolumeFlowUnits.KilolitersPerHour:
                return this.KilolitersPerHour + ` kL/h`;
            case VolumeFlowUnits.MegalitersPerHour:
                return this.MegalitersPerHour + ` ML/h`;
            case VolumeFlowUnits.NanolitersPerDay:
                return this.NanolitersPerDay + ` nl/day`;
            case VolumeFlowUnits.MicrolitersPerDay:
                return this.MicrolitersPerDay + ` μl/day`;
            case VolumeFlowUnits.MillilitersPerDay:
                return this.MillilitersPerDay + ` ml/day`;
            case VolumeFlowUnits.CentilitersPerDay:
                return this.CentilitersPerDay + ` cl/day`;
            case VolumeFlowUnits.DecilitersPerDay:
                return this.DecilitersPerDay + ` dl/day`;
            case VolumeFlowUnits.DecalitersPerDay:
                return this.DecalitersPerDay + ` dal/day`;
            case VolumeFlowUnits.HectolitersPerDay:
                return this.HectolitersPerDay + ` hl/day`;
            case VolumeFlowUnits.KilolitersPerDay:
                return this.KilolitersPerDay + ` kl/day`;
            case VolumeFlowUnits.MegalitersPerDay:
                return this.MegalitersPerDay + ` Ml/day`;
            case VolumeFlowUnits.MegaukGallonsPerDay:
                return this.MegaukGallonsPerDay + ` Mgal (U. K.)/d`;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return this.MegaukGallonsPerSecond + ` Mgal (imp.)/s`;
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
            case VolumeFlowUnits.MegausGallonsPerDay:
                return `Mgpd`;
            case VolumeFlowUnits.NanolitersPerSecond:
                return `nL/s`;
            case VolumeFlowUnits.MicrolitersPerSecond:
                return `μL/s`;
            case VolumeFlowUnits.MillilitersPerSecond:
                return `mL/s`;
            case VolumeFlowUnits.CentilitersPerSecond:
                return `cL/s`;
            case VolumeFlowUnits.DecilitersPerSecond:
                return `dL/s`;
            case VolumeFlowUnits.DecalitersPerSecond:
                return `daL/s`;
            case VolumeFlowUnits.HectolitersPerSecond:
                return `hL/s`;
            case VolumeFlowUnits.KilolitersPerSecond:
                return `kL/s`;
            case VolumeFlowUnits.MegalitersPerSecond:
                return `ML/s`;
            case VolumeFlowUnits.NanolitersPerMinute:
                return `nL/min`;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return `μL/min`;
            case VolumeFlowUnits.MillilitersPerMinute:
                return `mL/min`;
            case VolumeFlowUnits.CentilitersPerMinute:
                return `cL/min`;
            case VolumeFlowUnits.DecilitersPerMinute:
                return `dL/min`;
            case VolumeFlowUnits.DecalitersPerMinute:
                return `daL/min`;
            case VolumeFlowUnits.HectolitersPerMinute:
                return `hL/min`;
            case VolumeFlowUnits.KilolitersPerMinute:
                return `kL/min`;
            case VolumeFlowUnits.MegalitersPerMinute:
                return `ML/min`;
            case VolumeFlowUnits.NanolitersPerHour:
                return `nL/h`;
            case VolumeFlowUnits.MicrolitersPerHour:
                return `μL/h`;
            case VolumeFlowUnits.MillilitersPerHour:
                return `mL/h`;
            case VolumeFlowUnits.CentilitersPerHour:
                return `cL/h`;
            case VolumeFlowUnits.DecilitersPerHour:
                return `dL/h`;
            case VolumeFlowUnits.DecalitersPerHour:
                return `daL/h`;
            case VolumeFlowUnits.HectolitersPerHour:
                return `hL/h`;
            case VolumeFlowUnits.KilolitersPerHour:
                return `kL/h`;
            case VolumeFlowUnits.MegalitersPerHour:
                return `ML/h`;
            case VolumeFlowUnits.NanolitersPerDay:
                return `nl/day`;
            case VolumeFlowUnits.MicrolitersPerDay:
                return `μl/day`;
            case VolumeFlowUnits.MillilitersPerDay:
                return `ml/day`;
            case VolumeFlowUnits.CentilitersPerDay:
                return `cl/day`;
            case VolumeFlowUnits.DecilitersPerDay:
                return `dl/day`;
            case VolumeFlowUnits.DecalitersPerDay:
                return `dal/day`;
            case VolumeFlowUnits.HectolitersPerDay:
                return `hl/day`;
            case VolumeFlowUnits.KilolitersPerDay:
                return `kl/day`;
            case VolumeFlowUnits.MegalitersPerDay:
                return `Ml/day`;
            case VolumeFlowUnits.MegaukGallonsPerDay:
                return `Mgal (U. K.)/d`;
            case VolumeFlowUnits.MegaukGallonsPerSecond:
                return `Mgal (imp.)/s`;
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
        return super.internalEquals(this.value, volumeFlow.BaseValue);
    }

    /**
     * Compare the given VolumeFlow against the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns 0 if they are equal, -1 if the current VolumeFlow is less then other, 1 if the current VolumeFlow is greater then other.
     */
    public compareTo(volumeFlow: VolumeFlow): number {
        return super.internalCompareTo(this.value, volumeFlow.BaseValue);
    }

    /**
     * Add the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public add(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(super.internalAdd(this.value, volumeFlow.BaseValue))
    }

    /**
     * Subtract the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public subtract(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(super.internalSubtract(this.value, volumeFlow.BaseValue))
    }

    /**
     * Multiply the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public multiply(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(super.internalMultiply(this.value, volumeFlow.BaseValue))
    }

    /**
     * Divide the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public divide(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(super.internalDivide(this.value, volumeFlow.BaseValue))
    }

    /**
     * Modulo the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public modulo(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(super.internalModulo(this.value, volumeFlow.BaseValue))
    }

    /**
     * Pow the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    public pow(volumeFlow: VolumeFlow): VolumeFlow {
        return new VolumeFlow(super.internalPow(this.value, volumeFlow.BaseValue))
    }
}
