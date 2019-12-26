"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApparentEnergyUnits;
(function (ApparentEnergyUnits) {
    ApparentEnergyUnits[ApparentEnergyUnits["VoltampereHours"] = 0] = "VoltampereHours";
    ApparentEnergyUnits[ApparentEnergyUnits["KilovoltampereHour"] = 1] = "KilovoltampereHour";
    ApparentEnergyUnits[ApparentEnergyUnits["MegavoltampereHour"] = 2] = "MegavoltampereHour";
})(ApparentEnergyUnits = exports.ApparentEnergyUnits || (exports.ApparentEnergyUnits = {}));
class ApparentEnergy {
    constructor(value, fromUnit) {
        this.voltamperehoursLazy = null;
        this.kilovoltamperehourLazy = null;
        this.megavoltamperehourLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltampereHours() {
        if (this.voltamperehoursLazy !== null) {
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }
    get KilovoltampereHour() {
        if (this.kilovoltamperehourLazy !== null) {
            return this.kilovoltamperehourLazy;
        }
        return this.kilovoltamperehourLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHour);
    }
    get MegavoltampereHour() {
        if (this.megavoltamperehourLazy !== null) {
            return this.megavoltamperehourLazy;
        }
        return this.megavoltamperehourLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHour);
    }
    static FromVoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }
    static FromKilovoltampereHour(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHour);
    }
    static FromMegavoltampereHour(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.KilovoltampereHour:
                return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHour:
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
            case ApparentEnergyUnits.KilovoltampereHour:
                return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHour:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ApparentEnergyUnits.VoltampereHours) {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return this.VoltampereHours + ` VAh`;
            case ApparentEnergyUnits.KilovoltampereHour:
                return this.KilovoltampereHour + ` VAh`;
            case ApparentEnergyUnits.MegavoltampereHour:
                return this.MegavoltampereHour + ` VAh`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ApparentEnergy = ApparentEnergy;
//# sourceMappingURL=apparentenergy.g.js.map