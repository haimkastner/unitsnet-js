"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ApparentPowerUnits;
(function (ApparentPowerUnits) {
    ApparentPowerUnits[ApparentPowerUnits["Voltamperes"] = 0] = "Voltamperes";
    ApparentPowerUnits[ApparentPowerUnits["Kilovoltamperes"] = 1] = "Kilovoltamperes";
    ApparentPowerUnits[ApparentPowerUnits["Megavoltamperes"] = 2] = "Megavoltamperes";
    ApparentPowerUnits[ApparentPowerUnits["Gigavoltamperes"] = 3] = "Gigavoltamperes";
})(ApparentPowerUnits = exports.ApparentPowerUnits || (exports.ApparentPowerUnits = {}));
class ApparentPower {
    constructor(value, fromUnit) {
        this.voltamperesLazy = null;
        this.kilovoltamperesLazy = null;
        this.megavoltamperesLazy = null;
        this.gigavoltamperesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Voltamperes() {
        if (this.voltamperesLazy !== null) {
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }
    get Kilovoltamperes() {
        if (this.kilovoltamperesLazy !== null) {
            return this.kilovoltamperesLazy;
        }
        return this.kilovoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Kilovoltamperes);
    }
    get Megavoltamperes() {
        if (this.megavoltamperesLazy !== null) {
            return this.megavoltamperesLazy;
        }
        return this.megavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Megavoltamperes);
    }
    get Gigavoltamperes() {
        if (this.gigavoltamperesLazy !== null) {
            return this.gigavoltamperesLazy;
        }
        return this.gigavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Gigavoltamperes);
    }
    static FromVoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Voltamperes);
    }
    static FromKilovoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Kilovoltamperes);
    }
    static FromMegavoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Megavoltamperes);
    }
    static FromGigavoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Gigavoltamperes);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (this.value) / 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (this.value) / 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
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
            case ApparentPowerUnits.Kilovoltamperes:
                return (value) * 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (value) * 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
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
            case ApparentPowerUnits.Kilovoltamperes:
                return this.Kilovoltamperes + ` VA`;
            case ApparentPowerUnits.Megavoltamperes:
                return this.Megavoltamperes + ` VA`;
            case ApparentPowerUnits.Gigavoltamperes:
                return this.Gigavoltamperes + ` VA`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ApparentPower = ApparentPower;
//# sourceMappingURL=apparentpower.g.js.map