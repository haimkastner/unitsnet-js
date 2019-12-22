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
    MassFlowUnits[MassFlowUnits["Hectogramspersecond"] = 16] = "Hectogramspersecond";
    MassFlowUnits[MassFlowUnits["Kilogramspersecond"] = 17] = "Kilogramspersecond";
    MassFlowUnits[MassFlowUnits["Nanogramsperday"] = 18] = "Nanogramsperday";
    MassFlowUnits[MassFlowUnits["Microgramsperday"] = 19] = "Microgramsperday";
    MassFlowUnits[MassFlowUnits["Centigramsperday"] = 20] = "Centigramsperday";
    MassFlowUnits[MassFlowUnits["Decigramsperday"] = 21] = "Decigramsperday";
    MassFlowUnits[MassFlowUnits["Hectogramsperday"] = 22] = "Hectogramsperday";
    MassFlowUnits[MassFlowUnits["Kilogramsperday"] = 23] = "Kilogramsperday";
    MassFlowUnits[MassFlowUnits["Megagramsperday"] = 24] = "Megagramsperday";
    MassFlowUnits[MassFlowUnits["Megapoundsperday"] = 25] = "Megapoundsperday";
    MassFlowUnits[MassFlowUnits["Megapoundsperhour"] = 26] = "Megapoundsperhour";
    MassFlowUnits[MassFlowUnits["Megapoundsperminute"] = 27] = "Megapoundsperminute";
    MassFlowUnits[MassFlowUnits["Megapoundspersecond"] = 28] = "Megapoundspersecond";
})(MassFlowUnits = exports.MassFlowUnits || (exports.MassFlowUnits = {}));
class MassFlow {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerSecond() {
        return this.convertFromBase(MassFlowUnits.GramsPerSecond);
    }
    get GramsPerDay() {
        return this.convertFromBase(MassFlowUnits.GramsPerDay);
    }
    get GramsPerHour() {
        return this.convertFromBase(MassFlowUnits.GramsPerHour);
    }
    get KilogramsPerHour() {
        return this.convertFromBase(MassFlowUnits.KilogramsPerHour);
    }
    get KilogramsPerMinute() {
        return this.convertFromBase(MassFlowUnits.KilogramsPerMinute);
    }
    get TonnesPerHour() {
        return this.convertFromBase(MassFlowUnits.TonnesPerHour);
    }
    get PoundsPerDay() {
        return this.convertFromBase(MassFlowUnits.PoundsPerDay);
    }
    get PoundsPerHour() {
        return this.convertFromBase(MassFlowUnits.PoundsPerHour);
    }
    get PoundsPerMinute() {
        return this.convertFromBase(MassFlowUnits.PoundsPerMinute);
    }
    get PoundsPerSecond() {
        return this.convertFromBase(MassFlowUnits.PoundsPerSecond);
    }
    get TonnesPerDay() {
        return this.convertFromBase(MassFlowUnits.TonnesPerDay);
    }
    get ShortTonsPerHour() {
        return this.convertFromBase(MassFlowUnits.ShortTonsPerHour);
    }
    get Nanogramspersecond() {
        return this.convertFromBase(MassFlowUnits.Nanogramspersecond);
    }
    get Microgramspersecond() {
        return this.convertFromBase(MassFlowUnits.Microgramspersecond);
    }
    get Centigramspersecond() {
        return this.convertFromBase(MassFlowUnits.Centigramspersecond);
    }
    get Decigramspersecond() {
        return this.convertFromBase(MassFlowUnits.Decigramspersecond);
    }
    get Hectogramspersecond() {
        return this.convertFromBase(MassFlowUnits.Hectogramspersecond);
    }
    get Kilogramspersecond() {
        return this.convertFromBase(MassFlowUnits.Kilogramspersecond);
    }
    get Nanogramsperday() {
        return this.convertFromBase(MassFlowUnits.Nanogramsperday);
    }
    get Microgramsperday() {
        return this.convertFromBase(MassFlowUnits.Microgramsperday);
    }
    get Centigramsperday() {
        return this.convertFromBase(MassFlowUnits.Centigramsperday);
    }
    get Decigramsperday() {
        return this.convertFromBase(MassFlowUnits.Decigramsperday);
    }
    get Hectogramsperday() {
        return this.convertFromBase(MassFlowUnits.Hectogramsperday);
    }
    get Kilogramsperday() {
        return this.convertFromBase(MassFlowUnits.Kilogramsperday);
    }
    get Megagramsperday() {
        return this.convertFromBase(MassFlowUnits.Megagramsperday);
    }
    get Megapoundsperday() {
        return this.convertFromBase(MassFlowUnits.Megapoundsperday);
    }
    get Megapoundsperhour() {
        return this.convertFromBase(MassFlowUnits.Megapoundsperhour);
    }
    get Megapoundsperminute() {
        return this.convertFromBase(MassFlowUnits.Megapoundsperminute);
    }
    get Megapoundspersecond() {
        return this.convertFromBase(MassFlowUnits.Megapoundspersecond);
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
                return this.value / 86400;
            case MassFlowUnits.GramsPerHour:
                return this.value / 3600;
            case MassFlowUnits.KilogramsPerHour:
                return this.value / 3.6;
            case MassFlowUnits.KilogramsPerMinute:
                return this.value / 0.06;
            case MassFlowUnits.TonnesPerHour:
                return 1000 * this.value / 3.6;
            case MassFlowUnits.PoundsPerDay:
                return this.value / 190.47936;
            case MassFlowUnits.PoundsPerHour:
                return this.value / 7.93664;
            case MassFlowUnits.PoundsPerMinute:
                return this.value / 0.132277;
            case MassFlowUnits.PoundsPerSecond:
                return this.value * 453.59237;
            case MassFlowUnits.TonnesPerDay:
                return this.value / 0.0864000;
            case MassFlowUnits.ShortTonsPerHour:
                return this.value * 251.9957611;
            case MassFlowUnits.Nanogramspersecond:
                return (this.value) * 1e-9;
            case MassFlowUnits.Microgramspersecond:
                return (this.value) * 0.000001;
            case MassFlowUnits.Centigramspersecond:
                return (this.value) * 0.01;
            case MassFlowUnits.Decigramspersecond:
                return (this.value) * 0.1;
            case MassFlowUnits.Hectogramspersecond:
                return (this.value) * 100;
            case MassFlowUnits.Kilogramspersecond:
                return (this.value) * 1000;
            case MassFlowUnits.Nanogramsperday:
                return (this.value * 86400) * 1e-9;
            case MassFlowUnits.Microgramsperday:
                return (this.value * 86400) * 0.000001;
            case MassFlowUnits.Centigramsperday:
                return (this.value * 86400) * 0.01;
            case MassFlowUnits.Decigramsperday:
                return (this.value * 86400) * 0.1;
            case MassFlowUnits.Hectogramsperday:
                return (this.value * 86400) * 100;
            case MassFlowUnits.Kilogramsperday:
                return (this.value * 86400) * 1000;
            case MassFlowUnits.Megagramsperday:
                return (this.value * 86400) * 1000000;
            case MassFlowUnits.Megapoundsperday:
                return (this.value * 190.47936) * 1000000;
            case MassFlowUnits.Megapoundsperhour:
                return (this.value * 7.93664) * 1000000;
            case MassFlowUnits.Megapoundsperminute:
                return (this.value * 0.132277) * 1000000;
            case MassFlowUnits.Megapoundspersecond:
                return (this.value / 453.59237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
            case MassFlowUnits.Hectogramspersecond:
                return (this.value) / 100;
            case MassFlowUnits.Kilogramspersecond:
                return (this.value) / 1000;
            case MassFlowUnits.Nanogramsperday:
                return (this.value / 86400) / 1e-9;
            case MassFlowUnits.Microgramsperday:
                return (this.value / 86400) / 0.000001;
            case MassFlowUnits.Centigramsperday:
                return (this.value / 86400) / 0.01;
            case MassFlowUnits.Decigramsperday:
                return (this.value / 86400) / 0.1;
            case MassFlowUnits.Hectogramsperday:
                return (this.value / 86400) / 100;
            case MassFlowUnits.Kilogramsperday:
                return (this.value / 86400) / 1000;
            case MassFlowUnits.Megagramsperday:
                return (this.value / 86400) / 1000000;
            case MassFlowUnits.Megapoundsperday:
                return (this.value / 190.47936) / 1000000;
            case MassFlowUnits.Megapoundsperhour:
                return (this.value / 7.93664) / 1000000;
            case MassFlowUnits.Megapoundsperminute:
                return (this.value / 0.132277) / 1000000;
            case MassFlowUnits.Megapoundspersecond:
                return (this.value * 453.59237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassFlow = MassFlow;
//# sourceMappingURL=massflow.g.js.map