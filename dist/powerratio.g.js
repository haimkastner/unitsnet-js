"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PowerRatioUnits;
(function (PowerRatioUnits) {
    PowerRatioUnits[PowerRatioUnits["DecibelWatts"] = 0] = "DecibelWatts";
    PowerRatioUnits[PowerRatioUnits["DecibelMilliwatts"] = 1] = "DecibelMilliwatts";
})(PowerRatioUnits = exports.PowerRatioUnits || (exports.PowerRatioUnits = {}));
class PowerRatio {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecibelWatts() {
        return this.convertFromBase(PowerRatioUnits.DecibelWatts);
    }
    get DecibelMilliwatts() {
        return this.convertFromBase(PowerRatioUnits.DecibelMilliwatts);
    }
    static FromDecibelWatts(value) {
        return new PowerRatio(value, PowerRatioUnits.DecibelWatts);
    }
    static FromDecibelMilliwatts(value) {
        return new PowerRatio(value, PowerRatioUnits.DecibelMilliwatts);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PowerRatioUnits.DecibelWatts:
                return this.value;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.value + 30;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PowerRatioUnits.DecibelWatts:
                return value;
            case PowerRatioUnits.DecibelMilliwatts:
                return value - 30;
            default:
                break;
        }
        return NaN;
    }
}
exports.PowerRatio = PowerRatio;
//# sourceMappingURL=powerratio.g.js.map