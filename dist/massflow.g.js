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
    MassFlowUnits[MassFlowUnits["Nanogramspersecond"] = 12] = "Nanogramspersecond";
    MassFlowUnits[MassFlowUnits["Microgramspersecond"] = 13] = "Microgramspersecond";
    MassFlowUnits[MassFlowUnits["Centigramspersecond"] = 14] = "Centigramspersecond";
    MassFlowUnits[MassFlowUnits["Decigramspersecond"] = 15] = "Decigramspersecond";
    MassFlowUnits[MassFlowUnits["Decagramspersecond"] = 16] = "Decagramspersecond";
    MassFlowUnits[MassFlowUnits["Hectogramspersecond"] = 17] = "Hectogramspersecond";
    MassFlowUnits[MassFlowUnits["Kilogramspersecond"] = 18] = "Kilogramspersecond";
    MassFlowUnits[MassFlowUnits["Nanogramsperday"] = 19] = "Nanogramsperday";
    MassFlowUnits[MassFlowUnits["Microgramsperday"] = 20] = "Microgramsperday";
    MassFlowUnits[MassFlowUnits["Centigramsperday"] = 21] = "Centigramsperday";
    MassFlowUnits[MassFlowUnits["Decigramsperday"] = 22] = "Decigramsperday";
    MassFlowUnits[MassFlowUnits["Decagramsperday"] = 23] = "Decagramsperday";
    MassFlowUnits[MassFlowUnits["Hectogramsperday"] = 24] = "Hectogramsperday";
    MassFlowUnits[MassFlowUnits["Kilogramsperday"] = 25] = "Kilogramsperday";
    MassFlowUnits[MassFlowUnits["Megagramsperday"] = 26] = "Megagramsperday";
    MassFlowUnits[MassFlowUnits["Megapoundsperday"] = 27] = "Megapoundsperday";
    MassFlowUnits[MassFlowUnits["Megapoundsperhour"] = 28] = "Megapoundsperhour";
    MassFlowUnits[MassFlowUnits["Megapoundsperminute"] = 29] = "Megapoundsperminute";
    MassFlowUnits[MassFlowUnits["Megapoundspersecond"] = 30] = "Megapoundspersecond";
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
        this.nanogramspersecondLazy = null;
        this.microgramspersecondLazy = null;
        this.centigramspersecondLazy = null;
        this.decigramspersecondLazy = null;
        this.decagramspersecondLazy = null;
        this.hectogramspersecondLazy = null;
        this.kilogramspersecondLazy = null;
        this.nanogramsperdayLazy = null;
        this.microgramsperdayLazy = null;
        this.centigramsperdayLazy = null;
        this.decigramsperdayLazy = null;
        this.decagramsperdayLazy = null;
        this.hectogramsperdayLazy = null;
        this.kilogramsperdayLazy = null;
        this.megagramsperdayLazy = null;
        this.megapoundsperdayLazy = null;
        this.megapoundsperhourLazy = null;
        this.megapoundsperminuteLazy = null;
        this.megapoundspersecondLazy = null;
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
    get Nanogramspersecond() {
        if (this.nanogramspersecondLazy !== null) {
            return this.nanogramspersecondLazy;
        }
        return this.nanogramspersecondLazy = this.convertFromBase(MassFlowUnits.Nanogramspersecond);
    }
    get Microgramspersecond() {
        if (this.microgramspersecondLazy !== null) {
            return this.microgramspersecondLazy;
        }
        return this.microgramspersecondLazy = this.convertFromBase(MassFlowUnits.Microgramspersecond);
    }
    get Centigramspersecond() {
        if (this.centigramspersecondLazy !== null) {
            return this.centigramspersecondLazy;
        }
        return this.centigramspersecondLazy = this.convertFromBase(MassFlowUnits.Centigramspersecond);
    }
    get Decigramspersecond() {
        if (this.decigramspersecondLazy !== null) {
            return this.decigramspersecondLazy;
        }
        return this.decigramspersecondLazy = this.convertFromBase(MassFlowUnits.Decigramspersecond);
    }
    get Decagramspersecond() {
        if (this.decagramspersecondLazy !== null) {
            return this.decagramspersecondLazy;
        }
        return this.decagramspersecondLazy = this.convertFromBase(MassFlowUnits.Decagramspersecond);
    }
    get Hectogramspersecond() {
        if (this.hectogramspersecondLazy !== null) {
            return this.hectogramspersecondLazy;
        }
        return this.hectogramspersecondLazy = this.convertFromBase(MassFlowUnits.Hectogramspersecond);
    }
    get Kilogramspersecond() {
        if (this.kilogramspersecondLazy !== null) {
            return this.kilogramspersecondLazy;
        }
        return this.kilogramspersecondLazy = this.convertFromBase(MassFlowUnits.Kilogramspersecond);
    }
    get Nanogramsperday() {
        if (this.nanogramsperdayLazy !== null) {
            return this.nanogramsperdayLazy;
        }
        return this.nanogramsperdayLazy = this.convertFromBase(MassFlowUnits.Nanogramsperday);
    }
    get Microgramsperday() {
        if (this.microgramsperdayLazy !== null) {
            return this.microgramsperdayLazy;
        }
        return this.microgramsperdayLazy = this.convertFromBase(MassFlowUnits.Microgramsperday);
    }
    get Centigramsperday() {
        if (this.centigramsperdayLazy !== null) {
            return this.centigramsperdayLazy;
        }
        return this.centigramsperdayLazy = this.convertFromBase(MassFlowUnits.Centigramsperday);
    }
    get Decigramsperday() {
        if (this.decigramsperdayLazy !== null) {
            return this.decigramsperdayLazy;
        }
        return this.decigramsperdayLazy = this.convertFromBase(MassFlowUnits.Decigramsperday);
    }
    get Decagramsperday() {
        if (this.decagramsperdayLazy !== null) {
            return this.decagramsperdayLazy;
        }
        return this.decagramsperdayLazy = this.convertFromBase(MassFlowUnits.Decagramsperday);
    }
    get Hectogramsperday() {
        if (this.hectogramsperdayLazy !== null) {
            return this.hectogramsperdayLazy;
        }
        return this.hectogramsperdayLazy = this.convertFromBase(MassFlowUnits.Hectogramsperday);
    }
    get Kilogramsperday() {
        if (this.kilogramsperdayLazy !== null) {
            return this.kilogramsperdayLazy;
        }
        return this.kilogramsperdayLazy = this.convertFromBase(MassFlowUnits.Kilogramsperday);
    }
    get Megagramsperday() {
        if (this.megagramsperdayLazy !== null) {
            return this.megagramsperdayLazy;
        }
        return this.megagramsperdayLazy = this.convertFromBase(MassFlowUnits.Megagramsperday);
    }
    get Megapoundsperday() {
        if (this.megapoundsperdayLazy !== null) {
            return this.megapoundsperdayLazy;
        }
        return this.megapoundsperdayLazy = this.convertFromBase(MassFlowUnits.Megapoundsperday);
    }
    get Megapoundsperhour() {
        if (this.megapoundsperhourLazy !== null) {
            return this.megapoundsperhourLazy;
        }
        return this.megapoundsperhourLazy = this.convertFromBase(MassFlowUnits.Megapoundsperhour);
    }
    get Megapoundsperminute() {
        if (this.megapoundsperminuteLazy !== null) {
            return this.megapoundsperminuteLazy;
        }
        return this.megapoundsperminuteLazy = this.convertFromBase(MassFlowUnits.Megapoundsperminute);
    }
    get Megapoundspersecond() {
        if (this.megapoundspersecondLazy !== null) {
            return this.megapoundspersecondLazy;
        }
        return this.megapoundspersecondLazy = this.convertFromBase(MassFlowUnits.Megapoundspersecond);
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
    static FromNanogramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Nanogramspersecond);
    }
    static FromMicrogramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Microgramspersecond);
    }
    static FromCentigramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Centigramspersecond);
    }
    static FromDecigramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Decigramspersecond);
    }
    static FromDecagramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Decagramspersecond);
    }
    static FromHectogramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Hectogramspersecond);
    }
    static FromKilogramspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Kilogramspersecond);
    }
    static FromNanogramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Nanogramsperday);
    }
    static FromMicrogramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Microgramsperday);
    }
    static FromCentigramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Centigramsperday);
    }
    static FromDecigramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Decigramsperday);
    }
    static FromDecagramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Decagramsperday);
    }
    static FromHectogramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Hectogramsperday);
    }
    static FromKilogramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Kilogramsperday);
    }
    static FromMegagramsperday(value) {
        return new MassFlow(value, MassFlowUnits.Megagramsperday);
    }
    static FromMegapoundsperday(value) {
        return new MassFlow(value, MassFlowUnits.Megapoundsperday);
    }
    static FromMegapoundsperhour(value) {
        return new MassFlow(value, MassFlowUnits.Megapoundsperhour);
    }
    static FromMegapoundsperminute(value) {
        return new MassFlow(value, MassFlowUnits.Megapoundsperminute);
    }
    static FromMegapoundspersecond(value) {
        return new MassFlow(value, MassFlowUnits.Megapoundspersecond);
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
                return (this.value * 86400) / 1e-9;
            case MassFlowUnits.Microgramsperday:
                return (this.value * 86400) / 0.000001;
            case MassFlowUnits.Centigramsperday:
                return (this.value * 86400) / 0.01;
            case MassFlowUnits.Decigramsperday:
                return (this.value * 86400) / 0.1;
            case MassFlowUnits.Decagramsperday:
                return (this.value * 86400) / 10;
            case MassFlowUnits.Hectogramsperday:
                return (this.value * 86400) / 100;
            case MassFlowUnits.Kilogramsperday:
                return (this.value * 86400) / 1000;
            case MassFlowUnits.Megagramsperday:
                return (this.value * 86400) / 1000000;
            case MassFlowUnits.Megapoundsperday:
                return (this.value * 190.47936) / 1000000;
            case MassFlowUnits.Megapoundsperhour:
                return (this.value * 7.93664) / 1000000;
            case MassFlowUnits.Megapoundsperminute:
                return (this.value * 0.132277) / 1000000;
            case MassFlowUnits.Megapoundspersecond:
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
                return (value / 86400) * 1e-9;
            case MassFlowUnits.Microgramsperday:
                return (value / 86400) * 0.000001;
            case MassFlowUnits.Centigramsperday:
                return (value / 86400) * 0.01;
            case MassFlowUnits.Decigramsperday:
                return (value / 86400) * 0.1;
            case MassFlowUnits.Decagramsperday:
                return (value / 86400) * 10;
            case MassFlowUnits.Hectogramsperday:
                return (value / 86400) * 100;
            case MassFlowUnits.Kilogramsperday:
                return (value / 86400) * 1000;
            case MassFlowUnits.Megagramsperday:
                return (value / 86400) * 1000000;
            case MassFlowUnits.Megapoundsperday:
                return (value / 190.47936) * 1000000;
            case MassFlowUnits.Megapoundsperhour:
                return (value / 7.93664) * 1000000;
            case MassFlowUnits.Megapoundsperminute:
                return (value / 0.132277) * 1000000;
            case MassFlowUnits.Megapoundspersecond:
                return (value * 453.59237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassFlow = MassFlow;
//# sourceMappingURL=massflow.g.js.map