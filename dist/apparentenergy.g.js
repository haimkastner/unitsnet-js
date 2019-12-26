"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApparentEnergyUnits;
(function (ApparentEnergyUnits) {
    ApparentEnergyUnits[ApparentEnergyUnits["VoltampereHours"] = 0] = "VoltampereHours";
    ApparentEnergyUnits[ApparentEnergyUnits["Kilovoltamperehours"] = 1] = "Kilovoltamperehours";
    ApparentEnergyUnits[ApparentEnergyUnits["Megavoltamperehours"] = 2] = "Megavoltamperehours";
})(ApparentEnergyUnits = exports.ApparentEnergyUnits || (exports.ApparentEnergyUnits = {}));
class ApparentEnergy {
    constructor(value, fromUnit) {
        this.voltamperehoursLazy = null;
        this.kilovoltamperehoursLazy = null;
        this.megavoltamperehoursLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltampereHours() {
        if (this.voltamperehoursLazy !== null) {
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }
    get Kilovoltamperehours() {
        if (this.kilovoltamperehoursLazy !== null) {
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.Kilovoltamperehours);
    }
    get Megavoltamperehours() {
        if (this.megavoltamperehoursLazy !== null) {
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.Megavoltamperehours);
    }
    static FromVoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }
    static FromKilovoltamperehours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.Kilovoltamperehours);
    }
    static FromMegavoltamperehours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.Megavoltamperehours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.Kilovoltamperehours:
                return (this.value) / 1000;
            case ApparentEnergyUnits.Megavoltamperehours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return value;
            case ApparentEnergyUnits.Kilovoltamperehours:
                return (value) * 1000;
            case ApparentEnergyUnits.Megavoltamperehours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ApparentEnergy = ApparentEnergy;
//# sourceMappingURL=apparentenergy.g.js.map