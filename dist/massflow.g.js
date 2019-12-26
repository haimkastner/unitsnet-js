"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassFlowUnits;
(function (MassFlowUnits) {
    MassFlowUnits[MassFlowUnits["GramsPerSecond"] = 0] = "GramsPerSecond";
    MassFlowUnits[MassFlowUnits["GramsPerDay"] = 1] = "GramsPerDay";
    MassFlowUnits[MassFlowUnits["GramsPerHour"] = 2] = "GramsPerHour";
    MassFlowUnits[MassFlowUnits["KilogramsPerHour"] = 3] = "KilogramsPerHour";
    MassFlowUnits[MassFlowUnits["KilogramsPerMinute"] = 4] = "KilogramsPerMinute";
    MassFlowUnits[MassFlowUnits["TonnesPerHour"] = 5] = "TonnesPerHour";
    MassFlowUnits[MassFlowUnits["PoundsPerDay"] = 6] = "PoundsPerDay";
    MassFlowUnits[MassFlowUnits["PoundsPerHour"] = 7] = "PoundsPerHour";
    MassFlowUnits[MassFlowUnits["PoundsPerMinute"] = 8] = "PoundsPerMinute";
    MassFlowUnits[MassFlowUnits["PoundsPerSecond"] = 9] = "PoundsPerSecond";
    MassFlowUnits[MassFlowUnits["TonnesPerDay"] = 10] = "TonnesPerDay";
    MassFlowUnits[MassFlowUnits["ShortTonsPerHour"] = 11] = "ShortTonsPerHour";
    MassFlowUnits[MassFlowUnits["NanogramPerSecond"] = 12] = "NanogramPerSecond";
    MassFlowUnits[MassFlowUnits["MicrogramPerSecond"] = 13] = "MicrogramPerSecond";
    MassFlowUnits[MassFlowUnits["CentigramPerSecond"] = 14] = "CentigramPerSecond";
    MassFlowUnits[MassFlowUnits["DecigramPerSecond"] = 15] = "DecigramPerSecond";
    MassFlowUnits[MassFlowUnits["DecagramPerSecond"] = 16] = "DecagramPerSecond";
    MassFlowUnits[MassFlowUnits["HectogramPerSecond"] = 17] = "HectogramPerSecond";
    MassFlowUnits[MassFlowUnits["KilogramPerSecond"] = 18] = "KilogramPerSecond";
    MassFlowUnits[MassFlowUnits["NanogramPerDay"] = 19] = "NanogramPerDay";
    MassFlowUnits[MassFlowUnits["MicrogramPerDay"] = 20] = "MicrogramPerDay";
    MassFlowUnits[MassFlowUnits["CentigramPerDay"] = 21] = "CentigramPerDay";
    MassFlowUnits[MassFlowUnits["DecigramPerDay"] = 22] = "DecigramPerDay";
    MassFlowUnits[MassFlowUnits["DecagramPerDay"] = 23] = "DecagramPerDay";
    MassFlowUnits[MassFlowUnits["HectogramPerDay"] = 24] = "HectogramPerDay";
    MassFlowUnits[MassFlowUnits["KilogramPerDay"] = 25] = "KilogramPerDay";
    MassFlowUnits[MassFlowUnits["MegagramPerDay"] = 26] = "MegagramPerDay";
    MassFlowUnits[MassFlowUnits["MegapoundPerDay"] = 27] = "MegapoundPerDay";
    MassFlowUnits[MassFlowUnits["MegapoundPerHour"] = 28] = "MegapoundPerHour";
    MassFlowUnits[MassFlowUnits["MegapoundPerMinute"] = 29] = "MegapoundPerMinute";
    MassFlowUnits[MassFlowUnits["MegapoundPerSecond"] = 30] = "MegapoundPerSecond";
})(MassFlowUnits = exports.MassFlowUnits || (exports.MassFlowUnits = {}));
class MassFlow {
    constructor(value, fromUnit) {
        this.gramspersecondLazy = null;
        this.gramsperdayLazy = null;
        this.gramsperhourLazy = null;
        this.kilogramsperhourLazy = null;
        this.kilogramsperminuteLazy = null;
        this.tonnesperhourLazy = null;
        this.poundsperdayLazy = null;
        this.poundsperhourLazy = null;
        this.poundsperminuteLazy = null;
        this.poundspersecondLazy = null;
        this.tonnesperdayLazy = null;
        this.shorttonsperhourLazy = null;
        this.nanogrampersecondLazy = null;
        this.microgrampersecondLazy = null;
        this.centigrampersecondLazy = null;
        this.decigrampersecondLazy = null;
        this.decagrampersecondLazy = null;
        this.hectogrampersecondLazy = null;
        this.kilogrampersecondLazy = null;
        this.nanogramperdayLazy = null;
        this.microgramperdayLazy = null;
        this.centigramperdayLazy = null;
        this.decigramperdayLazy = null;
        this.decagramperdayLazy = null;
        this.hectogramperdayLazy = null;
        this.kilogramperdayLazy = null;
        this.megagramperdayLazy = null;
        this.megapoundperdayLazy = null;
        this.megapoundperhourLazy = null;
        this.megapoundperminuteLazy = null;
        this.megapoundpersecondLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerSecond() {
        if (this.gramspersecondLazy !== null) {
            return this.gramspersecondLazy;
        }
        return this.gramspersecondLazy = this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }
    get GramsPerDay() {
        if (this.gramsperdayLazy !== null) {
            return this.gramsperdayLazy;
        }
        return this.gramsperdayLazy = this.convertFromBase(MassFlowUnits.GramsPerDay);
    }
    get GramsPerHour() {
        if (this.gramsperhourLazy !== null) {
            return this.gramsperhourLazy;
        }
        return this.gramsperhourLazy = this.convertFromBase(MassFlowUnits.GramsPerHour);
    }
    get KilogramsPerHour() {
        if (this.kilogramsperhourLazy !== null) {
            return this.kilogramsperhourLazy;
        }
        return this.kilogramsperhourLazy = this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }
    get KilogramsPerMinute() {
        if (this.kilogramsperminuteLazy !== null) {
            return this.kilogramsperminuteLazy;
        }
        return this.kilogramsperminuteLazy = this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }
    get TonnesPerHour() {
        if (this.tonnesperhourLazy !== null) {
            return this.tonnesperhourLazy;
        }
        return this.tonnesperhourLazy = this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }
    get PoundsPerDay() {
        if (this.poundsperdayLazy !== null) {
            return this.poundsperdayLazy;
        }
        return this.poundsperdayLazy = this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }
    get PoundsPerHour() {
        if (this.poundsperhourLazy !== null) {
            return this.poundsperhourLazy;
        }
        return this.poundsperhourLazy = this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }
    get PoundsPerMinute() {
        if (this.poundsperminuteLazy !== null) {
            return this.poundsperminuteLazy;
        }
        return this.poundsperminuteLazy = this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }
    get PoundsPerSecond() {
        if (this.poundspersecondLazy !== null) {
            return this.poundspersecondLazy;
        }
        return this.poundspersecondLazy = this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }
    get TonnesPerDay() {
        if (this.tonnesperdayLazy !== null) {
            return this.tonnesperdayLazy;
        }
        return this.tonnesperdayLazy = this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }
    get ShortTonsPerHour() {
        if (this.shorttonsperhourLazy !== null) {
            return this.shorttonsperhourLazy;
        }
        return this.shorttonsperhourLazy = this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }
    get NanogramPerSecond() {
        if (this.nanogrampersecondLazy !== null) {
            return this.nanogrampersecondLazy;
        }
        return this.nanogrampersecondLazy = this.convertFromBase(MassFlowUnits.NanogramPerSecond);
    }
    get MicrogramPerSecond() {
        if (this.microgrampersecondLazy !== null) {
            return this.microgrampersecondLazy;
        }
        return this.microgrampersecondLazy = this.convertFromBase(MassFlowUnits.MicrogramPerSecond);
    }
    get CentigramPerSecond() {
        if (this.centigrampersecondLazy !== null) {
            return this.centigrampersecondLazy;
        }
        return this.centigrampersecondLazy = this.convertFromBase(MassFlowUnits.CentigramPerSecond);
    }
    get DecigramPerSecond() {
        if (this.decigrampersecondLazy !== null) {
            return this.decigrampersecondLazy;
        }
        return this.decigrampersecondLazy = this.convertFromBase(MassFlowUnits.DecigramPerSecond);
    }
    get DecagramPerSecond() {
        if (this.decagrampersecondLazy !== null) {
            return this.decagrampersecondLazy;
        }
        return this.decagrampersecondLazy = this.convertFromBase(MassFlowUnits.DecagramPerSecond);
    }
    get HectogramPerSecond() {
        if (this.hectogrampersecondLazy !== null) {
            return this.hectogrampersecondLazy;
        }
        return this.hectogrampersecondLazy = this.convertFromBase(MassFlowUnits.HectogramPerSecond);
    }
    get KilogramPerSecond() {
        if (this.kilogrampersecondLazy !== null) {
            return this.kilogrampersecondLazy;
        }
        return this.kilogrampersecondLazy = this.convertFromBase(MassFlowUnits.KilogramPerSecond);
    }
    get NanogramPerDay() {
        if (this.nanogramperdayLazy !== null) {
            return this.nanogramperdayLazy;
        }
        return this.nanogramperdayLazy = this.convertFromBase(MassFlowUnits.NanogramPerDay);
    }
    get MicrogramPerDay() {
        if (this.microgramperdayLazy !== null) {
            return this.microgramperdayLazy;
        }
        return this.microgramperdayLazy = this.convertFromBase(MassFlowUnits.MicrogramPerDay);
    }
    get CentigramPerDay() {
        if (this.centigramperdayLazy !== null) {
            return this.centigramperdayLazy;
        }
        return this.centigramperdayLazy = this.convertFromBase(MassFlowUnits.CentigramPerDay);
    }
    get DecigramPerDay() {
        if (this.decigramperdayLazy !== null) {
            return this.decigramperdayLazy;
        }
        return this.decigramperdayLazy = this.convertFromBase(MassFlowUnits.DecigramPerDay);
    }
    get DecagramPerDay() {
        if (this.decagramperdayLazy !== null) {
            return this.decagramperdayLazy;
        }
        return this.decagramperdayLazy = this.convertFromBase(MassFlowUnits.DecagramPerDay);
    }
    get HectogramPerDay() {
        if (this.hectogramperdayLazy !== null) {
            return this.hectogramperdayLazy;
        }
        return this.hectogramperdayLazy = this.convertFromBase(MassFlowUnits.HectogramPerDay);
    }
    get KilogramPerDay() {
        if (this.kilogramperdayLazy !== null) {
            return this.kilogramperdayLazy;
        }
        return this.kilogramperdayLazy = this.convertFromBase(MassFlowUnits.KilogramPerDay);
    }
    get MegagramPerDay() {
        if (this.megagramperdayLazy !== null) {
            return this.megagramperdayLazy;
        }
        return this.megagramperdayLazy = this.convertFromBase(MassFlowUnits.MegagramPerDay);
    }
    get MegapoundPerDay() {
        if (this.megapoundperdayLazy !== null) {
            return this.megapoundperdayLazy;
        }
        return this.megapoundperdayLazy = this.convertFromBase(MassFlowUnits.MegapoundPerDay);
    }
    get MegapoundPerHour() {
        if (this.megapoundperhourLazy !== null) {
            return this.megapoundperhourLazy;
        }
        return this.megapoundperhourLazy = this.convertFromBase(MassFlowUnits.MegapoundPerHour);
    }
    get MegapoundPerMinute() {
        if (this.megapoundperminuteLazy !== null) {
            return this.megapoundperminuteLazy;
        }
        return this.megapoundperminuteLazy = this.convertFromBase(MassFlowUnits.MegapoundPerMinute);
    }
    get MegapoundPerSecond() {
        if (this.megapoundpersecondLazy !== null) {
            return this.megapoundpersecondLazy;
        }
        return this.megapoundpersecondLazy = this.convertFromBase(MassFlowUnits.MegapoundPerSecond);
    }
    static FromGramsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.GramsPerSecond);
    }
    static FromGramsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.GramsPerDay);
    }
    static FromGramsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.GramsPerHour);
    }
    static FromKilogramsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.KilogramsPerHour);
    }
    static FromKilogramsPerMinute(value) {
        return new MassFlow(value, MassFlowUnits.KilogramsPerMinute);
    }
    static FromTonnesPerHour(value) {
        return new MassFlow(value, MassFlowUnits.TonnesPerHour);
    }
    static FromPoundsPerDay(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerDay);
    }
    static FromPoundsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerHour);
    }
    static FromPoundsPerMinute(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerMinute);
    }
    static FromPoundsPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.PoundsPerSecond);
    }
    static FromTonnesPerDay(value) {
        return new MassFlow(value, MassFlowUnits.TonnesPerDay);
    }
    static FromShortTonsPerHour(value) {
        return new MassFlow(value, MassFlowUnits.ShortTonsPerHour);
    }
    static FromNanogramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.NanogramPerSecond);
    }
    static FromMicrogramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.MicrogramPerSecond);
    }
    static FromCentigramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.CentigramPerSecond);
    }
    static FromDecigramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.DecigramPerSecond);
    }
    static FromDecagramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.DecagramPerSecond);
    }
    static FromHectogramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.HectogramPerSecond);
    }
    static FromKilogramPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.KilogramPerSecond);
    }
    static FromNanogramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.NanogramPerDay);
    }
    static FromMicrogramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.MicrogramPerDay);
    }
    static FromCentigramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.CentigramPerDay);
    }
    static FromDecigramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.DecigramPerDay);
    }
    static FromDecagramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.DecagramPerDay);
    }
    static FromHectogramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.HectogramPerDay);
    }
    static FromKilogramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.KilogramPerDay);
    }
    static FromMegagramPerDay(value) {
        return new MassFlow(value, MassFlowUnits.MegagramPerDay);
    }
    static FromMegapoundPerDay(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundPerDay);
    }
    static FromMegapoundPerHour(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundPerHour);
    }
    static FromMegapoundPerMinute(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundPerMinute);
    }
    static FromMegapoundPerSecond(value) {
        return new MassFlow(value, MassFlowUnits.MegapoundPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFlowUnits.GramsPerSecond:
                return this.value;
            case MassFlowUnits.GramsPerDay:
                return this.value * 86400;
            case MassFlowUnits.GramsPerHour:
                return this.value * 3600;
            case MassFlowUnits.KilogramsPerHour:
                return this.value * 3.6;
            case MassFlowUnits.KilogramsPerMinute:
                return this.value * 0.06;
            case MassFlowUnits.TonnesPerHour:
                return this.value * 3.6 / 1000;
            case MassFlowUnits.PoundsPerDay:
                return this.value * 190.47936;
            case MassFlowUnits.PoundsPerHour:
                return this.value * 7.93664;
            case MassFlowUnits.PoundsPerMinute:
                return this.value * 0.132277;
            case MassFlowUnits.PoundsPerSecond:
                return this.value / 453.59237;
            case MassFlowUnits.TonnesPerDay:
                return this.value * 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
                return this.value / 251.9957611;
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
                return (this.value * 86400) / 1e-9;
            case MassFlowUnits.MicrogramPerDay:
                return (this.value * 86400) / 0.000001;
            case MassFlowUnits.CentigramPerDay:
                return (this.value * 86400) / 0.01;
            case MassFlowUnits.DecigramPerDay:
                return (this.value * 86400) / 0.1;
            case MassFlowUnits.DecagramPerDay:
                return (this.value * 86400) / 10;
            case MassFlowUnits.HectogramPerDay:
                return (this.value * 86400) / 100;
            case MassFlowUnits.KilogramPerDay:
                return (this.value * 86400) / 1000;
            case MassFlowUnits.MegagramPerDay:
                return (this.value * 86400) / 1000000;
            case MassFlowUnits.MegapoundPerDay:
                return (this.value * 190.47936) / 1000000;
            case MassFlowUnits.MegapoundPerHour:
                return (this.value * 7.93664) / 1000000;
            case MassFlowUnits.MegapoundPerMinute:
                return (this.value * 0.132277) / 1000000;
            case MassFlowUnits.MegapoundPerSecond:
                return (this.value / 453.59237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassFlowUnits.GramsPerSecond:
                return value;
            case MassFlowUnits.GramsPerDay:
                return value / 86400;
            case MassFlowUnits.GramsPerHour:
                return value / 3600;
            case MassFlowUnits.KilogramsPerHour:
                return value / 3.6;
            case MassFlowUnits.KilogramsPerMinute:
                return value / 0.06;
            case MassFlowUnits.TonnesPerHour:
                return 1000 * value / 3.6;
            case MassFlowUnits.PoundsPerDay:
                return value / 190.47936;
            case MassFlowUnits.PoundsPerHour:
                return value / 7.93664;
            case MassFlowUnits.PoundsPerMinute:
                return value / 0.132277;
            case MassFlowUnits.PoundsPerSecond:
                return value * 453.59237;
            case MassFlowUnits.TonnesPerDay:
                return value / 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
                return value * 251.9957611;
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
                return (value / 86400) * 1e-9;
            case MassFlowUnits.MicrogramPerDay:
                return (value / 86400) * 0.000001;
            case MassFlowUnits.CentigramPerDay:
                return (value / 86400) * 0.01;
            case MassFlowUnits.DecigramPerDay:
                return (value / 86400) * 0.1;
            case MassFlowUnits.DecagramPerDay:
                return (value / 86400) * 10;
            case MassFlowUnits.HectogramPerDay:
                return (value / 86400) * 100;
            case MassFlowUnits.KilogramPerDay:
                return (value / 86400) * 1000;
            case MassFlowUnits.MegagramPerDay:
                return (value / 86400) * 1000000;
            case MassFlowUnits.MegapoundPerDay:
                return (value / 190.47936) * 1000000;
            case MassFlowUnits.MegapoundPerHour:
                return (value / 7.93664) * 1000000;
            case MassFlowUnits.MegapoundPerMinute:
                return (value / 0.132277) * 1000000;
            case MassFlowUnits.MegapoundPerSecond:
                return (value * 453.59237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassFlowUnits.GramsPerSecond) {
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
exports.MassFlow = MassFlow;
//# sourceMappingURL=massflow.g.js.map