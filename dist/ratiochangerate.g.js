"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RatioChangeRateUnits;
(function (RatioChangeRateUnits) {
    RatioChangeRateUnits[RatioChangeRateUnits["PercentsPerSecond"] = 0] = "PercentsPerSecond";
    RatioChangeRateUnits[RatioChangeRateUnits["DecimalFractionsPerSecond"] = 1] = "DecimalFractionsPerSecond";
})(RatioChangeRateUnits = exports.RatioChangeRateUnits || (exports.RatioChangeRateUnits = {}));
class RatioChangeRate {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get PercentsPerSecond() {
        return this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }
    get DecimalFractionsPerSecond() {
        return this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
    }
    static FromPercentsPerSecond(value) {
        return new RatioChangeRate(value, RatioChangeRateUnits.PercentsPerSecond);
    }
    static FromDecimalFractionsPerSecond(value) {
        return new RatioChangeRate(value, RatioChangeRateUnits.DecimalFractionsPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.value / 1e2;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RatioChangeRateUnits.PercentsPerSecond:
                return value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return value * 1e2;
            default:
                break;
        }
        return NaN;
    }
}
exports.RatioChangeRate = RatioChangeRate;
//# sourceMappingURL=ratiochangerate.g.js.map