"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** VolumeFlowUnits enumeration */
var VolumeFlowUnits;
(function (VolumeFlowUnits) {
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerSecond"] = 0] = "CubicMetersPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerMinute"] = 1] = "CubicMetersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerHour"] = 2] = "CubicMetersPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerDay"] = 3] = "CubicMetersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicFeetPerSecond"] = 4] = "CubicFeetPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicFeetPerMinute"] = 5] = "CubicFeetPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicFeetPerHour"] = 6] = "CubicFeetPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerSecond"] = 7] = "CubicYardsPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerMinute"] = 8] = "CubicYardsPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerHour"] = 9] = "CubicYardsPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerDay"] = 10] = "CubicYardsPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["MillionUsGallonsPerDay"] = 11] = "MillionUsGallonsPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerDay"] = 12] = "UsGallonsPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["LitersPerSecond"] = 13] = "LitersPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["LitersPerMinute"] = 14] = "LitersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["LitersPerHour"] = 15] = "LitersPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["LitersPerDay"] = 16] = "LitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerSecond"] = 17] = "UsGallonsPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerMinute"] = 18] = "UsGallonsPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerDay"] = 19] = "UkGallonsPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerHour"] = 20] = "UkGallonsPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerMinute"] = 21] = "UkGallonsPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerSecond"] = 22] = "UkGallonsPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["KilousGallonsPerMinute"] = 23] = "KilousGallonsPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerHour"] = 24] = "UsGallonsPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicDecimetersPerMinute"] = 25] = "CubicDecimetersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerDay"] = 26] = "OilBarrelsPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerMinute"] = 27] = "OilBarrelsPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerHour"] = 28] = "OilBarrelsPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerSecond"] = 29] = "OilBarrelsPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CubicMillimetersPerSecond"] = 30] = "CubicMillimetersPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerSecond"] = 31] = "AcreFeetPerSecond";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerMinute"] = 32] = "AcreFeetPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerHour"] = 33] = "AcreFeetPerHour";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerDay"] = 34] = "AcreFeetPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["NanolitersPerMinute"] = 35] = "NanolitersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["MicrolitersPerMinute"] = 36] = "MicrolitersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CentilitersPerMinute"] = 37] = "CentilitersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["DecilitersPerMinute"] = 38] = "DecilitersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["KilolitersPerMinute"] = 39] = "KilolitersPerMinute";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["NanolitersPerDay"] = 40] = "NanolitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["MicrolitersPerDay"] = 41] = "MicrolitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["CentilitersPerDay"] = 42] = "CentilitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["DecilitersPerDay"] = 43] = "DecilitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["KilolitersPerDay"] = 44] = "KilolitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["MegalitersPerDay"] = 45] = "MegalitersPerDay";
    /** */
    VolumeFlowUnits[VolumeFlowUnits["MegaukGallonsPerSecond"] = 46] = "MegaukGallonsPerSecond";
})(VolumeFlowUnits = exports.VolumeFlowUnits || (exports.VolumeFlowUnits = {}));
/** In physics and engineering, in particular fluid dynamics and hydrometry, the volumetric flow rate, (also known as volume flow rate, rate of fluid flow or volume velocity) is the volume of fluid which passes through a given surface per unit time. The SI unit is m³/s (cubic meters per second). In US Customary Units and British Imperial Units, volumetric flow rate is often expressed as ft³/s (cubic feet per second). It is usually represented by the symbol Q. */
class VolumeFlow {
    /**
     * Create a new VolumeFlow.
     * @param value The value.
     * @param fromUnit The ‘VolumeFlow’ unit to create from.
     * The default unit is CubicMetersPerSecond
     */
    constructor(value, fromUnit = VolumeFlowUnits.CubicMetersPerSecond) {
        this.cubicmeterspersecondLazy = null;
        this.cubicmetersperminuteLazy = null;
        this.cubicmetersperhourLazy = null;
        this.cubicmetersperdayLazy = null;
        this.cubicfeetpersecondLazy = null;
        this.cubicfeetperminuteLazy = null;
        this.cubicfeetperhourLazy = null;
        this.cubicyardspersecondLazy = null;
        this.cubicyardsperminuteLazy = null;
        this.cubicyardsperhourLazy = null;
        this.cubicyardsperdayLazy = null;
        this.millionusgallonsperdayLazy = null;
        this.usgallonsperdayLazy = null;
        this.literspersecondLazy = null;
        this.litersperminuteLazy = null;
        this.litersperhourLazy = null;
        this.litersperdayLazy = null;
        this.usgallonspersecondLazy = null;
        this.usgallonsperminuteLazy = null;
        this.ukgallonsperdayLazy = null;
        this.ukgallonsperhourLazy = null;
        this.ukgallonsperminuteLazy = null;
        this.ukgallonspersecondLazy = null;
        this.kilousgallonsperminuteLazy = null;
        this.usgallonsperhourLazy = null;
        this.cubicdecimetersperminuteLazy = null;
        this.oilbarrelsperdayLazy = null;
        this.oilbarrelsperminuteLazy = null;
        this.oilbarrelsperhourLazy = null;
        this.oilbarrelspersecondLazy = null;
        this.cubicmillimeterspersecondLazy = null;
        this.acrefeetpersecondLazy = null;
        this.acrefeetperminuteLazy = null;
        this.acrefeetperhourLazy = null;
        this.acrefeetperdayLazy = null;
        this.nanolitersperminuteLazy = null;
        this.microlitersperminuteLazy = null;
        this.centilitersperminuteLazy = null;
        this.decilitersperminuteLazy = null;
        this.kilolitersperminuteLazy = null;
        this.nanolitersperdayLazy = null;
        this.microlitersperdayLazy = null;
        this.centilitersperdayLazy = null;
        this.decilitersperdayLazy = null;
        this.kilolitersperdayLazy = null;
        this.megalitersperdayLazy = null;
        this.megaukgallonspersecondLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of VolumeFlow is CubicMetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get CubicMetersPerSecond() {
        if (this.cubicmeterspersecondLazy !== null) {
            return this.cubicmeterspersecondLazy;
        }
        return this.cubicmeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerSecond);
    }
    /** */
    get CubicMetersPerMinute() {
        if (this.cubicmetersperminuteLazy !== null) {
            return this.cubicmetersperminuteLazy;
        }
        return this.cubicmetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerMinute);
    }
    /** */
    get CubicMetersPerHour() {
        if (this.cubicmetersperhourLazy !== null) {
            return this.cubicmetersperhourLazy;
        }
        return this.cubicmetersperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerHour);
    }
    /** */
    get CubicMetersPerDay() {
        if (this.cubicmetersperdayLazy !== null) {
            return this.cubicmetersperdayLazy;
        }
        return this.cubicmetersperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerDay);
    }
    /** */
    get CubicFeetPerSecond() {
        if (this.cubicfeetpersecondLazy !== null) {
            return this.cubicfeetpersecondLazy;
        }
        return this.cubicfeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerSecond);
    }
    /** */
    get CubicFeetPerMinute() {
        if (this.cubicfeetperminuteLazy !== null) {
            return this.cubicfeetperminuteLazy;
        }
        return this.cubicfeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerMinute);
    }
    /** */
    get CubicFeetPerHour() {
        if (this.cubicfeetperhourLazy !== null) {
            return this.cubicfeetperhourLazy;
        }
        return this.cubicfeetperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerHour);
    }
    /** */
    get CubicYardsPerSecond() {
        if (this.cubicyardspersecondLazy !== null) {
            return this.cubicyardspersecondLazy;
        }
        return this.cubicyardspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerSecond);
    }
    /** */
    get CubicYardsPerMinute() {
        if (this.cubicyardsperminuteLazy !== null) {
            return this.cubicyardsperminuteLazy;
        }
        return this.cubicyardsperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerMinute);
    }
    /** */
    get CubicYardsPerHour() {
        if (this.cubicyardsperhourLazy !== null) {
            return this.cubicyardsperhourLazy;
        }
        return this.cubicyardsperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerHour);
    }
    /** */
    get CubicYardsPerDay() {
        if (this.cubicyardsperdayLazy !== null) {
            return this.cubicyardsperdayLazy;
        }
        return this.cubicyardsperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerDay);
    }
    /** */
    get MillionUsGallonsPerDay() {
        if (this.millionusgallonsperdayLazy !== null) {
            return this.millionusgallonsperdayLazy;
        }
        return this.millionusgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.MillionUsGallonsPerDay);
    }
    /** */
    get UsGallonsPerDay() {
        if (this.usgallonsperdayLazy !== null) {
            return this.usgallonsperdayLazy;
        }
        return this.usgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerDay);
    }
    /** */
    get LitersPerSecond() {
        if (this.literspersecondLazy !== null) {
            return this.literspersecondLazy;
        }
        return this.literspersecondLazy = this.convertFromBase(VolumeFlowUnits.LitersPerSecond);
    }
    /** */
    get LitersPerMinute() {
        if (this.litersperminuteLazy !== null) {
            return this.litersperminuteLazy;
        }
        return this.litersperminuteLazy = this.convertFromBase(VolumeFlowUnits.LitersPerMinute);
    }
    /** */
    get LitersPerHour() {
        if (this.litersperhourLazy !== null) {
            return this.litersperhourLazy;
        }
        return this.litersperhourLazy = this.convertFromBase(VolumeFlowUnits.LitersPerHour);
    }
    /** */
    get LitersPerDay() {
        if (this.litersperdayLazy !== null) {
            return this.litersperdayLazy;
        }
        return this.litersperdayLazy = this.convertFromBase(VolumeFlowUnits.LitersPerDay);
    }
    /** */
    get UsGallonsPerSecond() {
        if (this.usgallonspersecondLazy !== null) {
            return this.usgallonspersecondLazy;
        }
        return this.usgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerSecond);
    }
    /** */
    get UsGallonsPerMinute() {
        if (this.usgallonsperminuteLazy !== null) {
            return this.usgallonsperminuteLazy;
        }
        return this.usgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerMinute);
    }
    /** */
    get UkGallonsPerDay() {
        if (this.ukgallonsperdayLazy !== null) {
            return this.ukgallonsperdayLazy;
        }
        return this.ukgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerDay);
    }
    /** */
    get UkGallonsPerHour() {
        if (this.ukgallonsperhourLazy !== null) {
            return this.ukgallonsperhourLazy;
        }
        return this.ukgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerHour);
    }
    /** */
    get UkGallonsPerMinute() {
        if (this.ukgallonsperminuteLazy !== null) {
            return this.ukgallonsperminuteLazy;
        }
        return this.ukgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerMinute);
    }
    /** */
    get UkGallonsPerSecond() {
        if (this.ukgallonspersecondLazy !== null) {
            return this.ukgallonspersecondLazy;
        }
        return this.ukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerSecond);
    }
    /** */
    get KilousGallonsPerMinute() {
        if (this.kilousgallonsperminuteLazy !== null) {
            return this.kilousgallonsperminuteLazy;
        }
        return this.kilousgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilousGallonsPerMinute);
    }
    /** */
    get UsGallonsPerHour() {
        if (this.usgallonsperhourLazy !== null) {
            return this.usgallonsperhourLazy;
        }
        return this.usgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerHour);
    }
    /** */
    get CubicDecimetersPerMinute() {
        if (this.cubicdecimetersperminuteLazy !== null) {
            return this.cubicdecimetersperminuteLazy;
        }
        return this.cubicdecimetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicDecimetersPerMinute);
    }
    /** */
    get OilBarrelsPerDay() {
        if (this.oilbarrelsperdayLazy !== null) {
            return this.oilbarrelsperdayLazy;
        }
        return this.oilbarrelsperdayLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerDay);
    }
    /** */
    get OilBarrelsPerMinute() {
        if (this.oilbarrelsperminuteLazy !== null) {
            return this.oilbarrelsperminuteLazy;
        }
        return this.oilbarrelsperminuteLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerMinute);
    }
    /** */
    get OilBarrelsPerHour() {
        if (this.oilbarrelsperhourLazy !== null) {
            return this.oilbarrelsperhourLazy;
        }
        return this.oilbarrelsperhourLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerHour);
    }
    /** */
    get OilBarrelsPerSecond() {
        if (this.oilbarrelspersecondLazy !== null) {
            return this.oilbarrelspersecondLazy;
        }
        return this.oilbarrelspersecondLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerSecond);
    }
    /** */
    get CubicMillimetersPerSecond() {
        if (this.cubicmillimeterspersecondLazy !== null) {
            return this.cubicmillimeterspersecondLazy;
        }
        return this.cubicmillimeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMillimetersPerSecond);
    }
    /** */
    get AcreFeetPerSecond() {
        if (this.acrefeetpersecondLazy !== null) {
            return this.acrefeetpersecondLazy;
        }
        return this.acrefeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerSecond);
    }
    /** */
    get AcreFeetPerMinute() {
        if (this.acrefeetperminuteLazy !== null) {
            return this.acrefeetperminuteLazy;
        }
        return this.acrefeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerMinute);
    }
    /** */
    get AcreFeetPerHour() {
        if (this.acrefeetperhourLazy !== null) {
            return this.acrefeetperhourLazy;
        }
        return this.acrefeetperhourLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerHour);
    }
    /** */
    get AcreFeetPerDay() {
        if (this.acrefeetperdayLazy !== null) {
            return this.acrefeetperdayLazy;
        }
        return this.acrefeetperdayLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerDay);
    }
    /** */
    get NanolitersPerMinute() {
        if (this.nanolitersperminuteLazy !== null) {
            return this.nanolitersperminuteLazy;
        }
        return this.nanolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerMinute);
    }
    /** */
    get MicrolitersPerMinute() {
        if (this.microlitersperminuteLazy !== null) {
            return this.microlitersperminuteLazy;
        }
        return this.microlitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerMinute);
    }
    /** */
    get CentilitersPerMinute() {
        if (this.centilitersperminuteLazy !== null) {
            return this.centilitersperminuteLazy;
        }
        return this.centilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerMinute);
    }
    /** */
    get DecilitersPerMinute() {
        if (this.decilitersperminuteLazy !== null) {
            return this.decilitersperminuteLazy;
        }
        return this.decilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerMinute);
    }
    /** */
    get KilolitersPerMinute() {
        if (this.kilolitersperminuteLazy !== null) {
            return this.kilolitersperminuteLazy;
        }
        return this.kilolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerMinute);
    }
    /** */
    get NanolitersPerDay() {
        if (this.nanolitersperdayLazy !== null) {
            return this.nanolitersperdayLazy;
        }
        return this.nanolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerDay);
    }
    /** */
    get MicrolitersPerDay() {
        if (this.microlitersperdayLazy !== null) {
            return this.microlitersperdayLazy;
        }
        return this.microlitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerDay);
    }
    /** */
    get CentilitersPerDay() {
        if (this.centilitersperdayLazy !== null) {
            return this.centilitersperdayLazy;
        }
        return this.centilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerDay);
    }
    /** */
    get DecilitersPerDay() {
        if (this.decilitersperdayLazy !== null) {
            return this.decilitersperdayLazy;
        }
        return this.decilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerDay);
    }
    /** */
    get KilolitersPerDay() {
        if (this.kilolitersperdayLazy !== null) {
            return this.kilolitersperdayLazy;
        }
        return this.kilolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerDay);
    }
    /** */
    get MegalitersPerDay() {
        if (this.megalitersperdayLazy !== null) {
            return this.megalitersperdayLazy;
        }
        return this.megalitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerDay);
    }
    /** */
    get MegaukGallonsPerSecond() {
        if (this.megaukgallonspersecondLazy !== null) {
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
    static FromCubicMetersPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerMinute
     *
     * @param value The unit as CubicMetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerHour
     *
     * @param value The unit as CubicMetersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a CubicMetersPerDay
     *
     * @param value The unit as CubicMetersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMetersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a CubicFeetPerSecond
     *
     * @param value The unit as CubicFeetPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicFeetPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a CubicFeetPerMinute
     *
     * @param value The unit as CubicFeetPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicFeetPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a CubicFeetPerHour
     *
     * @param value The unit as CubicFeetPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicFeetPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerSecond
     *
     * @param value The unit as CubicYardsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerMinute
     *
     * @param value The unit as CubicYardsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerHour
     *
     * @param value The unit as CubicYardsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a CubicYardsPerDay
     *
     * @param value The unit as CubicYardsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicYardsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a MillionUsGallonsPerDay
     *
     * @param value The unit as MillionUsGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMillionUsGallonsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MillionUsGallonsPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerDay
     *
     * @param value The unit as UsGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a LitersPerSecond
     *
     * @param value The unit as LitersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a LitersPerMinute
     *
     * @param value The unit as LitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a LitersPerHour
     *
     * @param value The unit as LitersPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a LitersPerDay
     *
     * @param value The unit as LitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromLitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerSecond
     *
     * @param value The unit as UsGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerMinute
     *
     * @param value The unit as UsGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerDay
     *
     * @param value The unit as UkGallonsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerHour
     *
     * @param value The unit as UkGallonsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerMinute
     *
     * @param value The unit as UkGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a UkGallonsPerSecond
     *
     * @param value The unit as UkGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUkGallonsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a KilousGallonsPerMinute
     *
     * @param value The unit as KilousGallonsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromKilousGallonsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.KilousGallonsPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a UsGallonsPerHour
     *
     * @param value The unit as UsGallonsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromUsGallonsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a CubicDecimetersPerMinute
     *
     * @param value The unit as CubicDecimetersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicDecimetersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicDecimetersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerDay
     *
     * @param value The unit as OilBarrelsPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerMinute
     *
     * @param value The unit as OilBarrelsPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerHour
     *
     * @param value The unit as OilBarrelsPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a OilBarrelsPerSecond
     *
     * @param value The unit as OilBarrelsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromOilBarrelsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a CubicMillimetersPerSecond
     *
     * @param value The unit as CubicMillimetersPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCubicMillimetersPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMillimetersPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerSecond
     *
     * @param value The unit as AcreFeetPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerSecond);
    }
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerMinute
     *
     * @param value The unit as AcreFeetPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerHour
     *
     * @param value The unit as AcreFeetPerHour to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerHour);
    }
    /**
     * Create a new VolumeFlow instance from a AcreFeetPerDay
     *
     * @param value The unit as AcreFeetPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromAcreFeetPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a NanolitersPerMinute
     *
     * @param value The unit as NanolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromNanolitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a MicrolitersPerMinute
     *
     * @param value The unit as MicrolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMicrolitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a CentilitersPerMinute
     *
     * @param value The unit as CentilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCentilitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a DecilitersPerMinute
     *
     * @param value The unit as DecilitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromDecilitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a KilolitersPerMinute
     *
     * @param value The unit as KilolitersPerMinute to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromKilolitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerMinute);
    }
    /**
     * Create a new VolumeFlow instance from a NanolitersPerDay
     *
     * @param value The unit as NanolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromNanolitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a MicrolitersPerDay
     *
     * @param value The unit as MicrolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMicrolitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a CentilitersPerDay
     *
     * @param value The unit as CentilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromCentilitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a DecilitersPerDay
     *
     * @param value The unit as DecilitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromDecilitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a KilolitersPerDay
     *
     * @param value The unit as KilolitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromKilolitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a MegalitersPerDay
     *
     * @param value The unit as MegalitersPerDay to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMegalitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerDay);
    }
    /**
     * Create a new VolumeFlow instance from a MegaukGallonsPerSecond
     *
     * @param value The unit as MegaukGallonsPerSecond to create a new VolumeFlow from.
     * @returns The new VolumeFlow instance.
     */
    static FromMegaukGallonsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MegaukGallonsPerSecond);
    }
    convertFromBase(toUnit) {
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
            case VolumeFlowUnits.NanolitersPerMinute:
                return (this.value * 60000.00000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return (this.value * 60000.00000) / 0.000001;
            case VolumeFlowUnits.CentilitersPerMinute:
                return (this.value * 60000.00000) / 0.01;
            case VolumeFlowUnits.DecilitersPerMinute:
                return (this.value * 60000.00000) / 0.1;
            case VolumeFlowUnits.KilolitersPerMinute:
                return (this.value * 60000.00000) / 1000;
            case VolumeFlowUnits.NanolitersPerDay:
                return (this.value * 86400000) / 1e-9;
            case VolumeFlowUnits.MicrolitersPerDay:
                return (this.value * 86400000) / 0.000001;
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
    convertToBase(value, fromUnit) {
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
            case VolumeFlowUnits.NanolitersPerMinute:
                return (value / 60000.00000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return (value / 60000.00000) * 0.000001;
            case VolumeFlowUnits.CentilitersPerMinute:
                return (value / 60000.00000) * 0.01;
            case VolumeFlowUnits.DecilitersPerMinute:
                return (value / 60000.00000) * 0.1;
            case VolumeFlowUnits.KilolitersPerMinute:
                return (value / 60000.00000) * 1000;
            case VolumeFlowUnits.NanolitersPerDay:
                return (value / 86400000) * 1e-9;
            case VolumeFlowUnits.MicrolitersPerDay:
                return (value / 86400000) * 0.000001;
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
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the VolumeFlow.
     * @returns The string format of the VolumeFlow.
     */
    toString(toUnit = VolumeFlowUnits.CubicMetersPerSecond) {
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
                return this.NanolitersPerMinute + ` `;
            case VolumeFlowUnits.MicrolitersPerMinute:
                return this.MicrolitersPerMinute + ` `;
            case VolumeFlowUnits.CentilitersPerMinute:
                return this.CentilitersPerMinute + ` `;
            case VolumeFlowUnits.DecilitersPerMinute:
                return this.DecilitersPerMinute + ` `;
            case VolumeFlowUnits.KilolitersPerMinute:
                return this.KilolitersPerMinute + ` `;
            case VolumeFlowUnits.NanolitersPerDay:
                return this.NanolitersPerDay + ` `;
            case VolumeFlowUnits.MicrolitersPerDay:
                return this.MicrolitersPerDay + ` `;
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
     * Check if the given VolumeFlow are equals to the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns True if the given VolumeFlow are equal to the current VolumeFlow.
     */
    equals(volumeFlow) {
        return this.value === volumeFlow.BaseValue;
    }
    /**
     * Compare the given VolumeFlow against the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns 0 if they are equal, -1 if the current VolumeFlow is less then other, 1 if the current VolumeFlow is greater then other.
     */
    compareTo(volumeFlow) {
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
    add(volumeFlow) {
        return new VolumeFlow(this.value + volumeFlow.BaseValue);
    }
    /**
     * Subtract the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    subtract(volumeFlow) {
        return new VolumeFlow(this.value - volumeFlow.BaseValue);
    }
    /**
     * Multiply the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    multiply(volumeFlow) {
        return new VolumeFlow(this.value * volumeFlow.BaseValue);
    }
    /**
     * Divide the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    divide(volumeFlow) {
        return new VolumeFlow(this.value / volumeFlow.BaseValue);
    }
    /**
     * Modulo the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    modulo(volumeFlow) {
        return new VolumeFlow(this.value % volumeFlow.BaseValue);
    }
    /**
     * Pow the given VolumeFlow with the current VolumeFlow.
     * @param volumeFlow The other VolumeFlow.
     * @returns A new VolumeFlow instance with the results.
     */
    pow(volumeFlow) {
        return new VolumeFlow(this.value ** volumeFlow.BaseValue);
    }
}
exports.VolumeFlow = VolumeFlow;
//# sourceMappingURL=volumeflow.g.js.map