"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForceChangeRateUnits;
(function (ForceChangeRateUnits) {
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerMinute"] = 0] = "NewtonsPerMinute";
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerSecond"] = 1] = "NewtonsPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["DecanewtonPerMinute"] = 2] = "DecanewtonPerMinute";
    ForceChangeRateUnits[ForceChangeRateUnits["KilonewtonPerMinute"] = 3] = "KilonewtonPerMinute";
    ForceChangeRateUnits[ForceChangeRateUnits["NanonewtonPerSecond"] = 4] = "NanonewtonPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["MicronewtonPerSecond"] = 5] = "MicronewtonPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["CentinewtonPerSecond"] = 6] = "CentinewtonPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["DecinewtonPerSecond"] = 7] = "DecinewtonPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["DecanewtonPerSecond"] = 8] = "DecanewtonPerSecond";
    ForceChangeRateUnits[ForceChangeRateUnits["KilonewtonPerSecond"] = 9] = "KilonewtonPerSecond";
})(ForceChangeRateUnits = exports.ForceChangeRateUnits || (exports.ForceChangeRateUnits = {}));
class ForceChangeRate {
    constructor(value, fromUnit) {
        this.newtonsperminuteLazy = null;
        this.newtonspersecondLazy = null;
        this.decanewtonperminuteLazy = null;
        this.kilonewtonperminuteLazy = null;
        this.nanonewtonpersecondLazy = null;
        this.micronewtonpersecondLazy = null;
        this.centinewtonpersecondLazy = null;
        this.decinewtonpersecondLazy = null;
        this.decanewtonpersecondLazy = null;
        this.kilonewtonpersecondLazy = null;
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
    get DecanewtonPerMinute() {
        if (this.decanewtonperminuteLazy !== null) {
            return this.decanewtonperminuteLazy;
        }
        return this.decanewtonperminuteLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonPerMinute);
    }
    get KilonewtonPerMinute() {
        if (this.kilonewtonperminuteLazy !== null) {
            return this.kilonewtonperminuteLazy;
        }
        return this.kilonewtonperminuteLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonPerMinute);
    }
    get NanonewtonPerSecond() {
        if (this.nanonewtonpersecondLazy !== null) {
            return this.nanonewtonpersecondLazy;
        }
        return this.nanonewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.NanonewtonPerSecond);
    }
    get MicronewtonPerSecond() {
        if (this.micronewtonpersecondLazy !== null) {
            return this.micronewtonpersecondLazy;
        }
        return this.micronewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.MicronewtonPerSecond);
    }
    get CentinewtonPerSecond() {
        if (this.centinewtonpersecondLazy !== null) {
            return this.centinewtonpersecondLazy;
        }
        return this.centinewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.CentinewtonPerSecond);
    }
    get DecinewtonPerSecond() {
        if (this.decinewtonpersecondLazy !== null) {
            return this.decinewtonpersecondLazy;
        }
        return this.decinewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecinewtonPerSecond);
    }
    get DecanewtonPerSecond() {
        if (this.decanewtonpersecondLazy !== null) {
            return this.decanewtonpersecondLazy;
        }
        return this.decanewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonPerSecond);
    }
    get KilonewtonPerSecond() {
        if (this.kilonewtonpersecondLazy !== null) {
            return this.kilonewtonpersecondLazy;
        }
        return this.kilonewtonpersecondLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonPerSecond);
    }
    static FromNewtonsPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }
    static FromNewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }
    static FromDecanewtonPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonPerMinute);
    }
    static FromKilonewtonPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonPerMinute);
    }
    static FromNanonewtonPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NanonewtonPerSecond);
    }
    static FromMicronewtonPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.MicronewtonPerSecond);
    }
    static FromCentinewtonPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.CentinewtonPerSecond);
    }
    static FromDecinewtonPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecinewtonPerSecond);
    }
    static FromDecanewtonPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonPerSecond);
    }
    static FromKilonewtonPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value * 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.DecanewtonPerMinute:
                return (this.value * 60) / 10;
            case ForceChangeRateUnits.KilonewtonPerMinute:
                return (this.value * 60) / 1000;
            case ForceChangeRateUnits.NanonewtonPerSecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.MicronewtonPerSecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.CentinewtonPerSecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.DecinewtonPerSecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.DecanewtonPerSecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.KilonewtonPerSecond:
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
            case ForceChangeRateUnits.DecanewtonPerMinute:
                return (value / 60) * 10;
            case ForceChangeRateUnits.KilonewtonPerMinute:
                return (value / 60) * 1000;
            case ForceChangeRateUnits.NanonewtonPerSecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.MicronewtonPerSecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.CentinewtonPerSecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.DecinewtonPerSecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.DecanewtonPerSecond:
                return (value) * 10;
            case ForceChangeRateUnits.KilonewtonPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ForceChangeRateUnits.NewtonsPerSecond) {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.NewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.NewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonPerMinute:
                return this.DecanewtonPerMinute + ` N/min`;
            case ForceChangeRateUnits.KilonewtonPerMinute:
                return this.KilonewtonPerMinute + ` N/min`;
            case ForceChangeRateUnits.NanonewtonPerSecond:
                return this.NanonewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.MicronewtonPerSecond:
                return this.MicronewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.CentinewtonPerSecond:
                return this.CentinewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecinewtonPerSecond:
                return this.DecinewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonPerSecond:
                return this.DecanewtonPerSecond + ` N/s`;
            case ForceChangeRateUnits.KilonewtonPerSecond:
                return this.KilonewtonPerSecond + ` N/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ForceChangeRate = ForceChangeRate;
//# sourceMappingURL=forcechangerate.g.js.map