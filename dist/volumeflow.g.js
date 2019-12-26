"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VolumeFlowUnits;
(function (VolumeFlowUnits) {
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerSecond"] = 0] = "CubicMetersPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerMinute"] = 1] = "CubicMetersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerHour"] = 2] = "CubicMetersPerHour";
    VolumeFlowUnits[VolumeFlowUnits["CubicMetersPerDay"] = 3] = "CubicMetersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["CubicFeetPerSecond"] = 4] = "CubicFeetPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["CubicFeetPerMinute"] = 5] = "CubicFeetPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["CubicFeetPerHour"] = 6] = "CubicFeetPerHour";
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerSecond"] = 7] = "CubicYardsPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerMinute"] = 8] = "CubicYardsPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerHour"] = 9] = "CubicYardsPerHour";
    VolumeFlowUnits[VolumeFlowUnits["CubicYardsPerDay"] = 10] = "CubicYardsPerDay";
    VolumeFlowUnits[VolumeFlowUnits["MillionUsGallonsPerDay"] = 11] = "MillionUsGallonsPerDay";
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerDay"] = 12] = "UsGallonsPerDay";
    VolumeFlowUnits[VolumeFlowUnits["LitersPerSecond"] = 13] = "LitersPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["LitersPerMinute"] = 14] = "LitersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["LitersPerHour"] = 15] = "LitersPerHour";
    VolumeFlowUnits[VolumeFlowUnits["LitersPerDay"] = 16] = "LitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerSecond"] = 17] = "UsGallonsPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerMinute"] = 18] = "UsGallonsPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerDay"] = 19] = "UkGallonsPerDay";
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerHour"] = 20] = "UkGallonsPerHour";
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerMinute"] = 21] = "UkGallonsPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["UkGallonsPerSecond"] = 22] = "UkGallonsPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["KilousGallonsPerMinute"] = 23] = "KilousGallonsPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["UsGallonsPerHour"] = 24] = "UsGallonsPerHour";
    VolumeFlowUnits[VolumeFlowUnits["CubicDecimetersPerMinute"] = 25] = "CubicDecimetersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerDay"] = 26] = "OilBarrelsPerDay";
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerMinute"] = 27] = "OilBarrelsPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerHour"] = 28] = "OilBarrelsPerHour";
    VolumeFlowUnits[VolumeFlowUnits["OilBarrelsPerSecond"] = 29] = "OilBarrelsPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["CubicMillimetersPerSecond"] = 30] = "CubicMillimetersPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerSecond"] = 31] = "AcreFeetPerSecond";
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerMinute"] = 32] = "AcreFeetPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerHour"] = 33] = "AcreFeetPerHour";
    VolumeFlowUnits[VolumeFlowUnits["AcreFeetPerDay"] = 34] = "AcreFeetPerDay";
    VolumeFlowUnits[VolumeFlowUnits["NanolitersPerMinute"] = 35] = "NanolitersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["MicrolitersPerMinute"] = 36] = "MicrolitersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["CentilitersPerMinute"] = 37] = "CentilitersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["DecilitersPerMinute"] = 38] = "DecilitersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["KilolitersPerMinute"] = 39] = "KilolitersPerMinute";
    VolumeFlowUnits[VolumeFlowUnits["NanolitersPerDay"] = 40] = "NanolitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["MicrolitersPerDay"] = 41] = "MicrolitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["CentilitersPerDay"] = 42] = "CentilitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["DecilitersPerDay"] = 43] = "DecilitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["KilolitersPerDay"] = 44] = "KilolitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["MegalitersPerDay"] = 45] = "MegalitersPerDay";
    VolumeFlowUnits[VolumeFlowUnits["MegaukGallonsPerSecond"] = 46] = "MegaukGallonsPerSecond";
})(VolumeFlowUnits = exports.VolumeFlowUnits || (exports.VolumeFlowUnits = {}));
class VolumeFlow {
    constructor(value, fromUnit) {
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
        this.value = this.convertToBase(value, fromUnit);
    }
    get CubicMetersPerSecond() {
        if (this.cubicmeterspersecondLazy !== null) {
            return this.cubicmeterspersecondLazy;
        }
        return this.cubicmeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerSecond);
    }
    get CubicMetersPerMinute() {
        if (this.cubicmetersperminuteLazy !== null) {
            return this.cubicmetersperminuteLazy;
        }
        return this.cubicmetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerMinute);
    }
    get CubicMetersPerHour() {
        if (this.cubicmetersperhourLazy !== null) {
            return this.cubicmetersperhourLazy;
        }
        return this.cubicmetersperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerHour);
    }
    get CubicMetersPerDay() {
        if (this.cubicmetersperdayLazy !== null) {
            return this.cubicmetersperdayLazy;
        }
        return this.cubicmetersperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicMetersPerDay);
    }
    get CubicFeetPerSecond() {
        if (this.cubicfeetpersecondLazy !== null) {
            return this.cubicfeetpersecondLazy;
        }
        return this.cubicfeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerSecond);
    }
    get CubicFeetPerMinute() {
        if (this.cubicfeetperminuteLazy !== null) {
            return this.cubicfeetperminuteLazy;
        }
        return this.cubicfeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerMinute);
    }
    get CubicFeetPerHour() {
        if (this.cubicfeetperhourLazy !== null) {
            return this.cubicfeetperhourLazy;
        }
        return this.cubicfeetperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicFeetPerHour);
    }
    get CubicYardsPerSecond() {
        if (this.cubicyardspersecondLazy !== null) {
            return this.cubicyardspersecondLazy;
        }
        return this.cubicyardspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerSecond);
    }
    get CubicYardsPerMinute() {
        if (this.cubicyardsperminuteLazy !== null) {
            return this.cubicyardsperminuteLazy;
        }
        return this.cubicyardsperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerMinute);
    }
    get CubicYardsPerHour() {
        if (this.cubicyardsperhourLazy !== null) {
            return this.cubicyardsperhourLazy;
        }
        return this.cubicyardsperhourLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerHour);
    }
    get CubicYardsPerDay() {
        if (this.cubicyardsperdayLazy !== null) {
            return this.cubicyardsperdayLazy;
        }
        return this.cubicyardsperdayLazy = this.convertFromBase(VolumeFlowUnits.CubicYardsPerDay);
    }
    get MillionUsGallonsPerDay() {
        if (this.millionusgallonsperdayLazy !== null) {
            return this.millionusgallonsperdayLazy;
        }
        return this.millionusgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.MillionUsGallonsPerDay);
    }
    get UsGallonsPerDay() {
        if (this.usgallonsperdayLazy !== null) {
            return this.usgallonsperdayLazy;
        }
        return this.usgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerDay);
    }
    get LitersPerSecond() {
        if (this.literspersecondLazy !== null) {
            return this.literspersecondLazy;
        }
        return this.literspersecondLazy = this.convertFromBase(VolumeFlowUnits.LitersPerSecond);
    }
    get LitersPerMinute() {
        if (this.litersperminuteLazy !== null) {
            return this.litersperminuteLazy;
        }
        return this.litersperminuteLazy = this.convertFromBase(VolumeFlowUnits.LitersPerMinute);
    }
    get LitersPerHour() {
        if (this.litersperhourLazy !== null) {
            return this.litersperhourLazy;
        }
        return this.litersperhourLazy = this.convertFromBase(VolumeFlowUnits.LitersPerHour);
    }
    get LitersPerDay() {
        if (this.litersperdayLazy !== null) {
            return this.litersperdayLazy;
        }
        return this.litersperdayLazy = this.convertFromBase(VolumeFlowUnits.LitersPerDay);
    }
    get UsGallonsPerSecond() {
        if (this.usgallonspersecondLazy !== null) {
            return this.usgallonspersecondLazy;
        }
        return this.usgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerSecond);
    }
    get UsGallonsPerMinute() {
        if (this.usgallonsperminuteLazy !== null) {
            return this.usgallonsperminuteLazy;
        }
        return this.usgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerMinute);
    }
    get UkGallonsPerDay() {
        if (this.ukgallonsperdayLazy !== null) {
            return this.ukgallonsperdayLazy;
        }
        return this.ukgallonsperdayLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerDay);
    }
    get UkGallonsPerHour() {
        if (this.ukgallonsperhourLazy !== null) {
            return this.ukgallonsperhourLazy;
        }
        return this.ukgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerHour);
    }
    get UkGallonsPerMinute() {
        if (this.ukgallonsperminuteLazy !== null) {
            return this.ukgallonsperminuteLazy;
        }
        return this.ukgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerMinute);
    }
    get UkGallonsPerSecond() {
        if (this.ukgallonspersecondLazy !== null) {
            return this.ukgallonspersecondLazy;
        }
        return this.ukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.UkGallonsPerSecond);
    }
    get KilousGallonsPerMinute() {
        if (this.kilousgallonsperminuteLazy !== null) {
            return this.kilousgallonsperminuteLazy;
        }
        return this.kilousgallonsperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilousGallonsPerMinute);
    }
    get UsGallonsPerHour() {
        if (this.usgallonsperhourLazy !== null) {
            return this.usgallonsperhourLazy;
        }
        return this.usgallonsperhourLazy = this.convertFromBase(VolumeFlowUnits.UsGallonsPerHour);
    }
    get CubicDecimetersPerMinute() {
        if (this.cubicdecimetersperminuteLazy !== null) {
            return this.cubicdecimetersperminuteLazy;
        }
        return this.cubicdecimetersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CubicDecimetersPerMinute);
    }
    get OilBarrelsPerDay() {
        if (this.oilbarrelsperdayLazy !== null) {
            return this.oilbarrelsperdayLazy;
        }
        return this.oilbarrelsperdayLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerDay);
    }
    get OilBarrelsPerMinute() {
        if (this.oilbarrelsperminuteLazy !== null) {
            return this.oilbarrelsperminuteLazy;
        }
        return this.oilbarrelsperminuteLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerMinute);
    }
    get OilBarrelsPerHour() {
        if (this.oilbarrelsperhourLazy !== null) {
            return this.oilbarrelsperhourLazy;
        }
        return this.oilbarrelsperhourLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerHour);
    }
    get OilBarrelsPerSecond() {
        if (this.oilbarrelspersecondLazy !== null) {
            return this.oilbarrelspersecondLazy;
        }
        return this.oilbarrelspersecondLazy = this.convertFromBase(VolumeFlowUnits.OilBarrelsPerSecond);
    }
    get CubicMillimetersPerSecond() {
        if (this.cubicmillimeterspersecondLazy !== null) {
            return this.cubicmillimeterspersecondLazy;
        }
        return this.cubicmillimeterspersecondLazy = this.convertFromBase(VolumeFlowUnits.CubicMillimetersPerSecond);
    }
    get AcreFeetPerSecond() {
        if (this.acrefeetpersecondLazy !== null) {
            return this.acrefeetpersecondLazy;
        }
        return this.acrefeetpersecondLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerSecond);
    }
    get AcreFeetPerMinute() {
        if (this.acrefeetperminuteLazy !== null) {
            return this.acrefeetperminuteLazy;
        }
        return this.acrefeetperminuteLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerMinute);
    }
    get AcreFeetPerHour() {
        if (this.acrefeetperhourLazy !== null) {
            return this.acrefeetperhourLazy;
        }
        return this.acrefeetperhourLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerHour);
    }
    get AcreFeetPerDay() {
        if (this.acrefeetperdayLazy !== null) {
            return this.acrefeetperdayLazy;
        }
        return this.acrefeetperdayLazy = this.convertFromBase(VolumeFlowUnits.AcreFeetPerDay);
    }
    get NanolitersPerMinute() {
        if (this.nanolitersperminuteLazy !== null) {
            return this.nanolitersperminuteLazy;
        }
        return this.nanolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerMinute);
    }
    get MicrolitersPerMinute() {
        if (this.microlitersperminuteLazy !== null) {
            return this.microlitersperminuteLazy;
        }
        return this.microlitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerMinute);
    }
    get CentilitersPerMinute() {
        if (this.centilitersperminuteLazy !== null) {
            return this.centilitersperminuteLazy;
        }
        return this.centilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerMinute);
    }
    get DecilitersPerMinute() {
        if (this.decilitersperminuteLazy !== null) {
            return this.decilitersperminuteLazy;
        }
        return this.decilitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerMinute);
    }
    get KilolitersPerMinute() {
        if (this.kilolitersperminuteLazy !== null) {
            return this.kilolitersperminuteLazy;
        }
        return this.kilolitersperminuteLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerMinute);
    }
    get NanolitersPerDay() {
        if (this.nanolitersperdayLazy !== null) {
            return this.nanolitersperdayLazy;
        }
        return this.nanolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.NanolitersPerDay);
    }
    get MicrolitersPerDay() {
        if (this.microlitersperdayLazy !== null) {
            return this.microlitersperdayLazy;
        }
        return this.microlitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MicrolitersPerDay);
    }
    get CentilitersPerDay() {
        if (this.centilitersperdayLazy !== null) {
            return this.centilitersperdayLazy;
        }
        return this.centilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.CentilitersPerDay);
    }
    get DecilitersPerDay() {
        if (this.decilitersperdayLazy !== null) {
            return this.decilitersperdayLazy;
        }
        return this.decilitersperdayLazy = this.convertFromBase(VolumeFlowUnits.DecilitersPerDay);
    }
    get KilolitersPerDay() {
        if (this.kilolitersperdayLazy !== null) {
            return this.kilolitersperdayLazy;
        }
        return this.kilolitersperdayLazy = this.convertFromBase(VolumeFlowUnits.KilolitersPerDay);
    }
    get MegalitersPerDay() {
        if (this.megalitersperdayLazy !== null) {
            return this.megalitersperdayLazy;
        }
        return this.megalitersperdayLazy = this.convertFromBase(VolumeFlowUnits.MegalitersPerDay);
    }
    get MegaukGallonsPerSecond() {
        if (this.megaukgallonspersecondLazy !== null) {
            return this.megaukgallonspersecondLazy;
        }
        return this.megaukgallonspersecondLazy = this.convertFromBase(VolumeFlowUnits.MegaukGallonsPerSecond);
    }
    static FromCubicMetersPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerSecond);
    }
    static FromCubicMetersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerMinute);
    }
    static FromCubicMetersPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerHour);
    }
    static FromCubicMetersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMetersPerDay);
    }
    static FromCubicFeetPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerSecond);
    }
    static FromCubicFeetPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerMinute);
    }
    static FromCubicFeetPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicFeetPerHour);
    }
    static FromCubicYardsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerSecond);
    }
    static FromCubicYardsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerMinute);
    }
    static FromCubicYardsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerHour);
    }
    static FromCubicYardsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicYardsPerDay);
    }
    static FromMillionUsGallonsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MillionUsGallonsPerDay);
    }
    static FromUsGallonsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerDay);
    }
    static FromLitersPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerSecond);
    }
    static FromLitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerMinute);
    }
    static FromLitersPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerHour);
    }
    static FromLitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.LitersPerDay);
    }
    static FromUsGallonsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerSecond);
    }
    static FromUsGallonsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerMinute);
    }
    static FromUkGallonsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerDay);
    }
    static FromUkGallonsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerHour);
    }
    static FromUkGallonsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerMinute);
    }
    static FromUkGallonsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UkGallonsPerSecond);
    }
    static FromKilousGallonsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.KilousGallonsPerMinute);
    }
    static FromUsGallonsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.UsGallonsPerHour);
    }
    static FromCubicDecimetersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicDecimetersPerMinute);
    }
    static FromOilBarrelsPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerDay);
    }
    static FromOilBarrelsPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerMinute);
    }
    static FromOilBarrelsPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerHour);
    }
    static FromOilBarrelsPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.OilBarrelsPerSecond);
    }
    static FromCubicMillimetersPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CubicMillimetersPerSecond);
    }
    static FromAcreFeetPerSecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerSecond);
    }
    static FromAcreFeetPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerMinute);
    }
    static FromAcreFeetPerHour(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerHour);
    }
    static FromAcreFeetPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.AcreFeetPerDay);
    }
    static FromNanolitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerMinute);
    }
    static FromMicrolitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerMinute);
    }
    static FromCentilitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerMinute);
    }
    static FromDecilitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerMinute);
    }
    static FromKilolitersPerMinute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerMinute);
    }
    static FromNanolitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.NanolitersPerDay);
    }
    static FromMicrolitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MicrolitersPerDay);
    }
    static FromCentilitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.CentilitersPerDay);
    }
    static FromDecilitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.DecilitersPerDay);
    }
    static FromKilolitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.KilolitersPerDay);
    }
    static FromMegalitersPerDay(value) {
        return new VolumeFlow(value, VolumeFlowUnits.MegalitersPerDay);
    }
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
exports.VolumeFlow = VolumeFlow;
//# sourceMappingURL=volumeflow.g.js.map