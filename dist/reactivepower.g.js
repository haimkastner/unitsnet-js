"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactivePowerUnits;
(function (ReactivePowerUnits) {
    ReactivePowerUnits[ReactivePowerUnits["VoltamperesReactive"] = 0] = "VoltamperesReactive";
    ReactivePowerUnits[ReactivePowerUnits["KilovoltamperesReactive"] = 1] = "KilovoltamperesReactive";
    ReactivePowerUnits[ReactivePowerUnits["MegavoltamperesReactive"] = 2] = "MegavoltamperesReactive";
    ReactivePowerUnits[ReactivePowerUnits["GigavoltamperesReactive"] = 3] = "GigavoltamperesReactive";
})(ReactivePowerUnits = exports.ReactivePowerUnits || (exports.ReactivePowerUnits = {}));
class ReactivePower {
    constructor(value, fromUnit) {
        this.voltamperesreactiveLazy = null;
        this.kilovoltamperesreactiveLazy = null;
        this.megavoltamperesreactiveLazy = null;
        this.gigavoltamperesreactiveLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltamperesReactive() {
        if (this.voltamperesreactiveLazy !== null) {
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }
    get KilovoltamperesReactive() {
        if (this.kilovoltamperesreactiveLazy !== null) {
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltamperesReactive);
    }
    get MegavoltamperesReactive() {
        if (this.megavoltamperesreactiveLazy !== null) {
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltamperesReactive);
    }
    get GigavoltamperesReactive() {
        if (this.gigavoltamperesreactiveLazy !== null) {
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltamperesReactive);
    }
    static FromVoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }
    static FromKilovoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltamperesReactive);
    }
    static FromMegavoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltamperesReactive);
    }
    static FromGigavoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltamperesReactive);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (value) * 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (value) * 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ReactivePowerUnits.VoltamperesReactive) {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return this.VoltamperesReactive + ` var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return this.KilovoltamperesReactive + ` var`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return this.MegavoltamperesReactive + ` var`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return this.GigavoltamperesReactive + ` var`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ReactivePower = ReactivePower;
//# sourceMappingURL=reactivepower.g.js.map