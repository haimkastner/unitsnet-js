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
    VolumeFlowUnits[VolumeFlowUnits["Nanolitersperminute"] = 35] = "Nanolitersperminute";
    VolumeFlowUnits[VolumeFlowUnits["Microlitersperminute"] = 36] = "Microlitersperminute";
    VolumeFlowUnits[VolumeFlowUnits["Centilitersperminute"] = 37] = "Centilitersperminute";
    VolumeFlowUnits[VolumeFlowUnits["Decilitersperminute"] = 38] = "Decilitersperminute";
    VolumeFlowUnits[VolumeFlowUnits["Kilolitersperminute"] = 39] = "Kilolitersperminute";
    VolumeFlowUnits[VolumeFlowUnits["Nanolitersperday"] = 40] = "Nanolitersperday";
    VolumeFlowUnits[VolumeFlowUnits["Microlitersperday"] = 41] = "Microlitersperday";
    VolumeFlowUnits[VolumeFlowUnits["Centilitersperday"] = 42] = "Centilitersperday";
    VolumeFlowUnits[VolumeFlowUnits["Decilitersperday"] = 43] = "Decilitersperday";
    VolumeFlowUnits[VolumeFlowUnits["Kilolitersperday"] = 44] = "Kilolitersperday";
    VolumeFlowUnits[VolumeFlowUnits["Megalitersperday"] = 45] = "Megalitersperday";
    VolumeFlowUnits[VolumeFlowUnits["Megaukgallonspersecond"] = 46] = "Megaukgallonspersecond";
})(VolumeFlowUnits = exports.VolumeFlowUnits || (exports.VolumeFlowUnits = {}));
class VolumeFlow {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get CubicMetersPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerSecond);
    }
    get CubicMetersPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerMinute);
    }
    get CubicMetersPerHour() {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerHour);
    }
    get CubicMetersPerDay() {
        return this.convertFromBase(VolumeFlowUnits.CubicMetersPerDay);
    }
    get CubicFeetPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.CubicFeetPerSecond);
    }
    get CubicFeetPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.CubicFeetPerMinute);
    }
    get CubicFeetPerHour() {
        return this.convertFromBase(VolumeFlowUnits.CubicFeetPerHour);
    }
    get CubicYardsPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerSecond);
    }
    get CubicYardsPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerMinute);
    }
    get CubicYardsPerHour() {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerHour);
    }
    get CubicYardsPerDay() {
        return this.convertFromBase(VolumeFlowUnits.CubicYardsPerDay);
    }
    get MillionUsGallonsPerDay() {
        return this.convertFromBase(VolumeFlowUnits.MillionUsGallonsPerDay);
    }
    get UsGallonsPerDay() {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerDay);
    }
    get LitersPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.LitersPerSecond);
    }
    get LitersPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.LitersPerMinute);
    }
    get LitersPerHour() {
        return this.convertFromBase(VolumeFlowUnits.LitersPerHour);
    }
    get LitersPerDay() {
        return this.convertFromBase(VolumeFlowUnits.LitersPerDay);
    }
    get UsGallonsPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerSecond);
    }
    get UsGallonsPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerMinute);
    }
    get UkGallonsPerDay() {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerDay);
    }
    get UkGallonsPerHour() {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerHour);
    }
    get UkGallonsPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerMinute);
    }
    get UkGallonsPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.UkGallonsPerSecond);
    }
    get KilousGallonsPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.KilousGallonsPerMinute);
    }
    get UsGallonsPerHour() {
        return this.convertFromBase(VolumeFlowUnits.UsGallonsPerHour);
    }
    get CubicDecimetersPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.CubicDecimetersPerMinute);
    }
    get OilBarrelsPerDay() {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerDay);
    }
    get OilBarrelsPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerMinute);
    }
    get OilBarrelsPerHour() {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerHour);
    }
    get OilBarrelsPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.OilBarrelsPerSecond);
    }
    get CubicMillimetersPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.CubicMillimetersPerSecond);
    }
    get AcreFeetPerSecond() {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerSecond);
    }
    get AcreFeetPerMinute() {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerMinute);
    }
    get AcreFeetPerHour() {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerHour);
    }
    get AcreFeetPerDay() {
        return this.convertFromBase(VolumeFlowUnits.AcreFeetPerDay);
    }
    get Nanolitersperminute() {
        return this.convertFromBase(VolumeFlowUnits.Nanolitersperminute);
    }
    get Microlitersperminute() {
        return this.convertFromBase(VolumeFlowUnits.Microlitersperminute);
    }
    get Centilitersperminute() {
        return this.convertFromBase(VolumeFlowUnits.Centilitersperminute);
    }
    get Decilitersperminute() {
        return this.convertFromBase(VolumeFlowUnits.Decilitersperminute);
    }
    get Kilolitersperminute() {
        return this.convertFromBase(VolumeFlowUnits.Kilolitersperminute);
    }
    get Nanolitersperday() {
        return this.convertFromBase(VolumeFlowUnits.Nanolitersperday);
    }
    get Microlitersperday() {
        return this.convertFromBase(VolumeFlowUnits.Microlitersperday);
    }
    get Centilitersperday() {
        return this.convertFromBase(VolumeFlowUnits.Centilitersperday);
    }
    get Decilitersperday() {
        return this.convertFromBase(VolumeFlowUnits.Decilitersperday);
    }
    get Kilolitersperday() {
        return this.convertFromBase(VolumeFlowUnits.Kilolitersperday);
    }
    get Megalitersperday() {
        return this.convertFromBase(VolumeFlowUnits.Megalitersperday);
    }
    get Megaukgallonspersecond() {
        return this.convertFromBase(VolumeFlowUnits.Megaukgallonspersecond);
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
    static FromNanolitersperminute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Nanolitersperminute);
    }
    static FromMicrolitersperminute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Microlitersperminute);
    }
    static FromCentilitersperminute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Centilitersperminute);
    }
    static FromDecilitersperminute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Decilitersperminute);
    }
    static FromKilolitersperminute(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Kilolitersperminute);
    }
    static FromNanolitersperday(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Nanolitersperday);
    }
    static FromMicrolitersperday(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Microlitersperday);
    }
    static FromCentilitersperday(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Centilitersperday);
    }
    static FromDecilitersperday(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Decilitersperday);
    }
    static FromKilolitersperday(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Kilolitersperday);
    }
    static FromMegalitersperday(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Megalitersperday);
    }
    static FromMegaukgallonspersecond(value) {
        return new VolumeFlow(value, VolumeFlowUnits.Megaukgallonspersecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VolumeFlowUnits.CubicMetersPerSecond:
                return this.value;
            case VolumeFlowUnits.CubicMetersPerMinute:
                return this.value / 60;
            case VolumeFlowUnits.CubicMetersPerHour:
                return this.value / 3600;
            case VolumeFlowUnits.CubicMetersPerDay:
                return this.value / 86400;
            case VolumeFlowUnits.CubicFeetPerSecond:
                return this.value / 35.314666721;
            case VolumeFlowUnits.CubicFeetPerMinute:
                return this.value / 2118.88000326;
            case VolumeFlowUnits.CubicFeetPerHour:
                return this.value * 7.8657907199999087346816086183876e-6;
            case VolumeFlowUnits.CubicYardsPerSecond:
                return this.value * 0.764554857984;
            case VolumeFlowUnits.CubicYardsPerMinute:
                return this.value * 0.0127425809664;
            case VolumeFlowUnits.CubicYardsPerHour:
                return this.value * 2.1237634944E-4;
            case VolumeFlowUnits.CubicYardsPerDay:
                return this.value / 113007;
            case VolumeFlowUnits.MillionUsGallonsPerDay:
                return this.value / 22.824465227;
            case VolumeFlowUnits.UsGallonsPerDay:
                return this.value / 22824465.227;
            case VolumeFlowUnits.LitersPerSecond:
                return this.value / 1000;
            case VolumeFlowUnits.LitersPerMinute:
                return this.value / 60000.00000;
            case VolumeFlowUnits.LitersPerHour:
                return this.value / 3600000.000;
            case VolumeFlowUnits.LitersPerDay:
                return this.value / 86400000;
            case VolumeFlowUnits.UsGallonsPerSecond:
                return this.value / 264.1720523581484;
            case VolumeFlowUnits.UsGallonsPerMinute:
                return this.value / 15850.323141489;
            case VolumeFlowUnits.UkGallonsPerDay:
                return this.value / 19005304;
            case VolumeFlowUnits.UkGallonsPerHour:
                return this.value / 791887.667;
            case VolumeFlowUnits.UkGallonsPerMinute:
                return this.value / 13198.2;
            case VolumeFlowUnits.UkGallonsPerSecond:
                return this.value / 219.969;
            case VolumeFlowUnits.KilousGallonsPerMinute:
                return this.value / 15.850323141489;
            case VolumeFlowUnits.UsGallonsPerHour:
                return this.value / 951019.38848933424;
            case VolumeFlowUnits.CubicDecimetersPerMinute:
                return this.value / 60000.00000;
            case VolumeFlowUnits.OilBarrelsPerDay:
                return this.value * 1.8401307283333333333333333333333e-6;
            case VolumeFlowUnits.OilBarrelsPerMinute:
                return this.value * 2.64978825e-3;
            case VolumeFlowUnits.OilBarrelsPerHour:
                return this.value * 4.41631375e-5;
            case VolumeFlowUnits.OilBarrelsPerSecond:
                return this.value / 6.28981;
            case VolumeFlowUnits.CubicMillimetersPerSecond:
                return this.value * 1e-9;
            case VolumeFlowUnits.AcreFeetPerSecond:
                return this.value / 0.000810713194;
            case VolumeFlowUnits.AcreFeetPerMinute:
                return this.value / 0.0486427916;
            case VolumeFlowUnits.AcreFeetPerHour:
                return this.value / 2.91857;
            case VolumeFlowUnits.AcreFeetPerDay:
                return this.value / 70.0457;
            case VolumeFlowUnits.Nanolitersperminute:
                return (this.value * 60000.00000) * 1e-9;
            case VolumeFlowUnits.Microlitersperminute:
                return (this.value * 60000.00000) * 0.000001;
            case VolumeFlowUnits.Centilitersperminute:
                return (this.value * 60000.00000) * 0.01;
            case VolumeFlowUnits.Decilitersperminute:
                return (this.value * 60000.00000) * 0.1;
            case VolumeFlowUnits.Kilolitersperminute:
                return (this.value * 60000.00000) * 1000;
            case VolumeFlowUnits.Nanolitersperday:
                return (this.value * 86400000) * 1e-9;
            case VolumeFlowUnits.Microlitersperday:
                return (this.value * 86400000) * 0.000001;
            case VolumeFlowUnits.Centilitersperday:
                return (this.value * 86400000) * 0.01;
            case VolumeFlowUnits.Decilitersperday:
                return (this.value * 86400000) * 0.1;
            case VolumeFlowUnits.Kilolitersperday:
                return (this.value * 86400000) * 1000;
            case VolumeFlowUnits.Megalitersperday:
                return (this.value * 86400000) * 1000000;
            case VolumeFlowUnits.Megaukgallonspersecond:
                return (this.value * 219.969) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
            case VolumeFlowUnits.Nanolitersperminute:
                return (this.value / 60000.00000) / 1e-9;
            case VolumeFlowUnits.Microlitersperminute:
                return (this.value / 60000.00000) / 0.000001;
            case VolumeFlowUnits.Centilitersperminute:
                return (this.value / 60000.00000) / 0.01;
            case VolumeFlowUnits.Decilitersperminute:
                return (this.value / 60000.00000) / 0.1;
            case VolumeFlowUnits.Kilolitersperminute:
                return (this.value / 60000.00000) / 1000;
            case VolumeFlowUnits.Nanolitersperday:
                return (this.value / 86400000) / 1e-9;
            case VolumeFlowUnits.Microlitersperday:
                return (this.value / 86400000) / 0.000001;
            case VolumeFlowUnits.Centilitersperday:
                return (this.value / 86400000) / 0.01;
            case VolumeFlowUnits.Decilitersperday:
                return (this.value / 86400000) / 0.1;
            case VolumeFlowUnits.Kilolitersperday:
                return (this.value / 86400000) / 1000;
            case VolumeFlowUnits.Megalitersperday:
                return (this.value / 86400000) / 1000000;
            case VolumeFlowUnits.Megaukgallonspersecond:
                return (this.value / 219.969) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.VolumeFlow = VolumeFlow;
//# sourceMappingURL=volumeflow.g.js.map