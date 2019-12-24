"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactivePowerUnits;
(function (ReactivePowerUnits) {
    ReactivePowerUnits[ReactivePowerUnits["VoltamperesReactive"] = 0] = "VoltamperesReactive";
    ReactivePowerUnits[ReactivePowerUnits["Kilovoltamperesreactive"] = 1] = "Kilovoltamperesreactive";
    ReactivePowerUnits[ReactivePowerUnits["Megavoltamperesreactive"] = 2] = "Megavoltamperesreactive";
    ReactivePowerUnits[ReactivePowerUnits["Gigavoltamperesreactive"] = 3] = "Gigavoltamperesreactive";
})(ReactivePowerUnits = exports.ReactivePowerUnits || (exports.ReactivePowerUnits = {}));
class ReactivePower {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltamperesReactive() {
        return this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }
    get Kilovoltamperesreactive() {
        return this.convertFromBase(ReactivePowerUnits.Kilovoltamperesreactive);
    }
    get Megavoltamperesreactive() {
        return this.convertFromBase(ReactivePowerUnits.Megavoltamperesreactive);
    }
    get Gigavoltamperesreactive() {
        return this.convertFromBase(ReactivePowerUnits.Gigavoltamperesreactive);
    }
    static FromVoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }
    static FromKilovoltamperesreactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.Kilovoltamperesreactive);
    }
    static FromMegavoltamperesreactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.Megavoltamperesreactive);
    }
    static FromGigavoltamperesreactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.Gigavoltamperesreactive);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.Kilovoltamperesreactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.Megavoltamperesreactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.Gigavoltamperesreactive:
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
            case ReactivePowerUnits.Kilovoltamperesreactive:
                return (value) * 1000;
            case ReactivePowerUnits.Megavoltamperesreactive:
                return (value) * 1000000;
            case ReactivePowerUnits.Gigavoltamperesreactive:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ReactivePower = ReactivePower;
//# sourceMappingURL=reactivepower.g.js.map