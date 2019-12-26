"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApparentEnergyUnits;
(function (ApparentEnergyUnits) {
    ApparentEnergyUnits[ApparentEnergyUnits["VoltampereHours"] = 0] = "VoltampereHours";
    ApparentEnergyUnits[ApparentEnergyUnits["KilovoltampereHours"] = 1] = "KilovoltampereHours";
    ApparentEnergyUnits[ApparentEnergyUnits["MegavoltampereHours"] = 2] = "MegavoltampereHours";
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
    get KilovoltampereHours() {
        if (this.kilovoltamperehoursLazy !== null) {
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHours);
    }
    get MegavoltampereHours() {
        if (this.megavoltamperehoursLazy !== null) {
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHours);
    }
    static FromVoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }
    static FromKilovoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHours);
    }
    static FromMegavoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
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
            case ApparentEnergyUnits.KilovoltampereHours:
                return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
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
            case ApparentEnergyUnits.KilovoltampereHours:
                return this.KilovoltampereHours + ` VAh`;
            case ApparentEnergyUnits.MegavoltampereHours:
                return this.MegavoltampereHours + ` VAh`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ApparentEnergy = ApparentEnergy;
//# sourceMappingURL=apparentenergy.g.js.map