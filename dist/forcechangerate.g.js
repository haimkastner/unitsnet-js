"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForceChangeRateUnits;
(function (ForceChangeRateUnits) {
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerMinute"] = 0] = "NewtonsPerMinute";
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerSecond"] = 1] = "NewtonsPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Decanewtonsperminute"] = 2] = "Decanewtonsperminute";
    ForceChangeRateUnits[ForceChangeRateUnits["Kilonewtonsperminute"] = 3] = "Kilonewtonsperminute";
    ForceChangeRateUnits[ForceChangeRateUnits["Nanonewtonspersecond"] = 4] = "Nanonewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Micronewtonspersecond"] = 5] = "Micronewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Centinewtonspersecond"] = 6] = "Centinewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Decinewtonspersecond"] = 7] = "Decinewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Decanewtonspersecond"] = 8] = "Decanewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Kilonewtonspersecond"] = 9] = "Kilonewtonspersecond";
})(ForceChangeRateUnits = exports.ForceChangeRateUnits || (exports.ForceChangeRateUnits = {}));
class ForceChangeRate {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonsPerMinute() {
        return this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }
    get NewtonsPerSecond() {
        return this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }
    get Decanewtonsperminute() {
        return this.convertFromBase(ForceChangeRateUnits.Decanewtonsperminute);
    }
    get Kilonewtonsperminute() {
        return this.convertFromBase(ForceChangeRateUnits.Kilonewtonsperminute);
    }
    get Nanonewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Nanonewtonspersecond);
    }
    get Micronewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Micronewtonspersecond);
    }
    get Centinewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Centinewtonspersecond);
    }
    get Decinewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Decinewtonspersecond);
    }
    get Decanewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Decanewtonspersecond);
    }
    get Kilonewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Kilonewtonspersecond);
    }
    static FromNewtonsPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }
    static FromNewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }
    static FromDecanewtonsperminute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Decanewtonsperminute);
    }
    static FromKilonewtonsperminute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Kilonewtonsperminute);
    }
    static FromNanonewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Nanonewtonspersecond);
    }
    static FromMicronewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Micronewtonspersecond);
    }
    static FromCentinewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Centinewtonspersecond);
    }
    static FromDecinewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Decinewtonspersecond);
    }
    static FromDecanewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Decanewtonspersecond);
    }
    static FromKilonewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Kilonewtonspersecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value * 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.Decanewtonsperminute:
                return (this.value / 60) * 10;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (this.value / 60) * 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (this.value) * 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (this.value) * 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (this.value) * 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (this.value) * 0.1;
            case ForceChangeRateUnits.Decanewtonspersecond:
                return (this.value) * 10;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (this.value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return value / 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return value;
            case ForceChangeRateUnits.Decanewtonsperminute:
                return (value * 60) / 10;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (value * 60) / 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (value) / 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (value) / 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (value) / 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (value) / 0.1;
            case ForceChangeRateUnits.Decanewtonspersecond:
                return (value) / 10;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (value) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ForceChangeRate = ForceChangeRate;
//# sourceMappingURL=forcechangerate.g.js.map