"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RatioUnits;
(function (RatioUnits) {
    RatioUnits[RatioUnits["DecimalFractions"] = 0] = "DecimalFractions";
    RatioUnits[RatioUnits["Percent"] = 1] = "Percent";
    RatioUnits[RatioUnits["PartsPerThousand"] = 2] = "PartsPerThousand";
    RatioUnits[RatioUnits["PartsPerMillion"] = 3] = "PartsPerMillion";
    RatioUnits[RatioUnits["PartsPerBillion"] = 4] = "PartsPerBillion";
    RatioUnits[RatioUnits["PartsPerTrillion"] = 5] = "PartsPerTrillion";
})(RatioUnits = exports.RatioUnits || (exports.RatioUnits = {}));
class Ratio {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecimalFractions() {
        return this.convertFromBase(RatioUnits.DecimalFractions);
    }
    get Percent() {
        return this.convertFromBase(RatioUnits.Percent);
    }
    get PartsPerThousand() {
        return this.convertFromBase(RatioUnits.PartsPerThousand);
    }
    get PartsPerMillion() {
        return this.convertFromBase(RatioUnits.PartsPerMillion);
    }
    get PartsPerBillion() {
        return this.convertFromBase(RatioUnits.PartsPerBillion);
    }
    get PartsPerTrillion() {
        return this.convertFromBase(RatioUnits.PartsPerTrillion);
    }
    static FromDecimalFractions(value) {
        return new Ratio(value, RatioUnits.DecimalFractions);
    }
    static FromPercent(value) {
        return new Ratio(value, RatioUnits.Percent);
    }
    static FromPartsPerThousand(value) {
        return new Ratio(value, RatioUnits.PartsPerThousand);
    }
    static FromPartsPerMillion(value) {
        return new Ratio(value, RatioUnits.PartsPerMillion);
    }
    static FromPartsPerBillion(value) {
        return new Ratio(value, RatioUnits.PartsPerBillion);
    }
    static FromPartsPerTrillion(value) {
        return new Ratio(value, RatioUnits.PartsPerTrillion);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RatioUnits.DecimalFractions:
                return this.value;
            case RatioUnits.Percent:
                return this.value / 1e2;
            case RatioUnits.PartsPerThousand:
                return this.value / 1e3;
            case RatioUnits.PartsPerMillion:
                return this.value / 1e6;
            case RatioUnits.PartsPerBillion:
                return this.value / 1e9;
            case RatioUnits.PartsPerTrillion:
                return this.value / 1e12;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RatioUnits.DecimalFractions:
                return this.value;
            case RatioUnits.Percent:
                return this.value * 1e2;
            case RatioUnits.PartsPerThousand:
                return this.value * 1e3;
            case RatioUnits.PartsPerMillion:
                return this.value * 1e6;
            case RatioUnits.PartsPerBillion:
                return this.value * 1e9;
            case RatioUnits.PartsPerTrillion:
                return this.value * 1e12;
            default:
                break;
        }
        return NaN;
    }
}
exports.Ratio = Ratio;
//# sourceMappingURL=ratio.g.js.map