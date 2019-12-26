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
        this.newtonsperminuteLazy = null;
        this.newtonspersecondLazy = null;
        this.decanewtonsperminuteLazy = null;
        this.kilonewtonsperminuteLazy = null;
        this.nanonewtonspersecondLazy = null;
        this.micronewtonspersecondLazy = null;
        this.centinewtonspersecondLazy = null;
        this.decinewtonspersecondLazy = null;
        this.decanewtonspersecondLazy = null;
        this.kilonewtonspersecondLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonsPerMinute() {
        if (this.newtonsperminuteLazy !== null) {
            return this.newtonsperminuteLazy;
        }
        return this.newtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }
    get NewtonsPerSecond() {
        if (this.newtonspersecondLazy !== null) {
            return this.newtonspersecondLazy;
        }
        return this.newtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }
    get Decanewtonsperminute() {
        if (this.decanewtonsperminuteLazy !== null) {
            return this.decanewtonsperminuteLazy;
        }
        return this.decanewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.Decanewtonsperminute);
    }
    get Kilonewtonsperminute() {
        if (this.kilonewtonsperminuteLazy !== null) {
            return this.kilonewtonsperminuteLazy;
        }
        return this.kilonewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.Kilonewtonsperminute);
    }
    get Nanonewtonspersecond() {
        if (this.nanonewtonspersecondLazy !== null) {
            return this.nanonewtonspersecondLazy;
        }
        return this.nanonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Nanonewtonspersecond);
    }
    get Micronewtonspersecond() {
        if (this.micronewtonspersecondLazy !== null) {
            return this.micronewtonspersecondLazy;
        }
        return this.micronewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Micronewtonspersecond);
    }
    get Centinewtonspersecond() {
        if (this.centinewtonspersecondLazy !== null) {
            return this.centinewtonspersecondLazy;
        }
        return this.centinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Centinewtonspersecond);
    }
    get Decinewtonspersecond() {
        if (this.decinewtonspersecondLazy !== null) {
            return this.decinewtonspersecondLazy;
        }
        return this.decinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Decinewtonspersecond);
    }
    get Decanewtonspersecond() {
        if (this.decanewtonspersecondLazy !== null) {
            return this.decanewtonspersecondLazy;
        }
        return this.decanewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Decanewtonspersecond);
    }
    get Kilonewtonspersecond() {
        if (this.kilonewtonspersecondLazy !== null) {
            return this.kilonewtonspersecondLazy;
        }
        return this.kilonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.Kilonewtonspersecond);
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
                return (this.value * 60) / 10;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (this.value * 60) / 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.Decanewtonspersecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (this.value) / 1000;
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
                return (value / 60) * 10;
            case ForceChangeRateUnits.Kilonewtonsperminute:
                return (value / 60) * 1000;
            case ForceChangeRateUnits.Nanonewtonspersecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.Micronewtonspersecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.Centinewtonspersecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.Decinewtonspersecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.Decanewtonspersecond:
                return (value) * 10;
            case ForceChangeRateUnits.Kilonewtonspersecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ForceChangeRate = ForceChangeRate;
//# sourceMappingURL=forcechangerate.g.js.map