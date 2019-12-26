"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactivePowerUnits;
(function (ReactivePowerUnits) {
    ReactivePowerUnits[ReactivePowerUnits["VoltamperesReactive"] = 0] = "VoltamperesReactive";
    ReactivePowerUnits[ReactivePowerUnits["KilovoltampereReactive"] = 1] = "KilovoltampereReactive";
    ReactivePowerUnits[ReactivePowerUnits["MegavoltampereReactive"] = 2] = "MegavoltampereReactive";
    ReactivePowerUnits[ReactivePowerUnits["GigavoltampereReactive"] = 3] = "GigavoltampereReactive";
})(ReactivePowerUnits = exports.ReactivePowerUnits || (exports.ReactivePowerUnits = {}));
class ReactivePower {
    constructor(value, fromUnit) {
        this.voltamperesreactiveLazy = null;
        this.kilovoltamperereactiveLazy = null;
        this.megavoltamperereactiveLazy = null;
        this.gigavoltamperereactiveLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltamperesReactive() {
        if (this.voltamperesreactiveLazy !== null) {
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }
    get KilovoltampereReactive() {
        if (this.kilovoltamperereactiveLazy !== null) {
            return this.kilovoltamperereactiveLazy;
        }
        return this.kilovoltamperereactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltampereReactive);
    }
    get MegavoltampereReactive() {
        if (this.megavoltamperereactiveLazy !== null) {
            return this.megavoltamperereactiveLazy;
        }
        return this.megavoltamperereactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltampereReactive);
    }
    get GigavoltampereReactive() {
        if (this.gigavoltamperereactiveLazy !== null) {
            return this.gigavoltamperereactiveLazy;
        }
        return this.gigavoltamperereactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltampereReactive);
    }
    static FromVoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }
    static FromKilovoltampereReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltampereReactive);
    }
    static FromMegavoltampereReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltampereReactive);
    }
    static FromGigavoltampereReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltampereReactive);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.KilovoltampereReactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltampereReactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltampereReactive:
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
            case ReactivePowerUnits.KilovoltampereReactive:
                return (value) * 1000;
            case ReactivePowerUnits.MegavoltampereReactive:
                return (value) * 1000000;
            case ReactivePowerUnits.GigavoltampereReactive:
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
            case ReactivePowerUnits.KilovoltampereReactive:
                return this.KilovoltampereReactive + ` var`;
            case ReactivePowerUnits.MegavoltampereReactive:
                return this.MegavoltampereReactive + ` var`;
            case ReactivePowerUnits.GigavoltampereReactive:
                return this.GigavoltampereReactive + ` var`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ReactivePower = ReactivePower;
//# sourceMappingURL=reactivepower.g.js.map