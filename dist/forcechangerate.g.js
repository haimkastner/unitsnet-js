"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForceChangeRateUnits;
(function (ForceChangeRateUnits) {
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerMinute"] = 0] = "NewtonsPerMinute";
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerSecond"] = 1] = "NewtonsPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Kilonewtonsperminute"] = 2] = "Kilonewtonsperminute";
    ForceChangeRateUnits[ForceChangeRateUnits["Nanonewtonspersecond"] = 3] = "Nanonewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Micronewtonspersecond"] = 4] = "Micronewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Centinewtonspersecond"] = 5] = "Centinewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Decinewtonspersecond"] = 6] = "Decinewtonspersecond";
    ForceChangeRateUnits[ForceChangeRateUnits["Kilonewtonspersecond"] = 7] = "Kilonewtonspersecond";
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
    get Kilonewtonspersecond() {
        return this.convertFromBase(ForceChangeRateUnits.Kilonewtonspersecond);
    }
    static FromNewtonsPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }
    static FromNewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
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
    static FromKilonewtonspersecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.Kilonewtonspersecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value / 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (this.value * 60) * 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (this.value) * 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (this.value) * 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (this.value) * 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (this.value) * 0.1;
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
                return this.value * 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (this.value / 60) / 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ForceChangeRate = ForceChangeRate;
//# sourceMappingURL=forcechangerate.g.js.map