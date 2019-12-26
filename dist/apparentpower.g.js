"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApparentPowerUnits;
(function (ApparentPowerUnits) {
    ApparentPowerUnits[ApparentPowerUnits["Voltamperes"] = 0] = "Voltamperes";
    ApparentPowerUnits[ApparentPowerUnits["Kilovoltampere"] = 1] = "Kilovoltampere";
    ApparentPowerUnits[ApparentPowerUnits["Megavoltampere"] = 2] = "Megavoltampere";
    ApparentPowerUnits[ApparentPowerUnits["Gigavoltampere"] = 3] = "Gigavoltampere";
})(ApparentPowerUnits = exports.ApparentPowerUnits || (exports.ApparentPowerUnits = {}));
class ApparentPower {
    constructor(value, fromUnit) {
        this.voltamperesLazy = null;
        this.kilovoltampereLazy = null;
        this.megavoltampereLazy = null;
        this.gigavoltampereLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Voltamperes() {
        if (this.voltamperesLazy !== null) {
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }
    get Kilovoltampere() {
        if (this.kilovoltampereLazy !== null) {
            return this.kilovoltampereLazy;
        }
        return this.kilovoltampereLazy = this.convertFromBase(ApparentPowerUnits.Kilovoltampere);
    }
    get Megavoltampere() {
        if (this.megavoltampereLazy !== null) {
            return this.megavoltampereLazy;
        }
        return this.megavoltampereLazy = this.convertFromBase(ApparentPowerUnits.Megavoltampere);
    }
    get Gigavoltampere() {
        if (this.gigavoltampereLazy !== null) {
            return this.gigavoltampereLazy;
        }
        return this.gigavoltampereLazy = this.convertFromBase(ApparentPowerUnits.Gigavoltampere);
    }
    static FromVoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Voltamperes);
    }
    static FromKilovoltampere(value) {
        return new ApparentPower(value, ApparentPowerUnits.Kilovoltampere);
    }
    static FromMegavoltampere(value) {
        return new ApparentPower(value, ApparentPowerUnits.Megavoltampere);
    }
    static FromGigavoltampere(value) {
        return new ApparentPower(value, ApparentPowerUnits.Gigavoltampere);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Kilovoltampere:
                return (this.value) / 1000;
            case ApparentPowerUnits.Megavoltampere:
                return (this.value) / 1000000;
            case ApparentPowerUnits.Gigavoltampere:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ApparentPowerUnits.Voltamperes:
                return value;
            case ApparentPowerUnits.Kilovoltampere:
                return (value) * 1000;
            case ApparentPowerUnits.Megavoltampere:
                return (value) * 1000000;
            case ApparentPowerUnits.Gigavoltampere:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ApparentPowerUnits.Voltamperes) {
        switch (toUnit) {
            case ApparentPowerUnits.Voltamperes:
                return this.Voltamperes + ` VA`;
            case ApparentPowerUnits.Kilovoltampere:
                return this.Kilovoltampere + ` VA`;
            case ApparentPowerUnits.Megavoltampere:
                return this.Megavoltampere + ` VA`;
            case ApparentPowerUnits.Gigavoltampere:
                return this.Gigavoltampere + ` VA`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ApparentPower = ApparentPower;
//# sourceMappingURL=apparentpower.g.js.map