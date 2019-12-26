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
        this.decimalfractionsLazy = null;
        this.percentLazy = null;
        this.partsperthousandLazy = null;
        this.partspermillionLazy = null;
        this.partsperbillionLazy = null;
        this.partspertrillionLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecimalFractions() {
        if (this.decimalfractionsLazy !== null) {
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(RatioUnits.DecimalFractions);
    }
    get Percent() {
        if (this.percentLazy !== null) {
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(RatioUnits.Percent);
    }
    get PartsPerThousand() {
        if (this.partsperthousandLazy !== null) {
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(RatioUnits.PartsPerThousand);
    }
    get PartsPerMillion() {
        if (this.partspermillionLazy !== null) {
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(RatioUnits.PartsPerMillion);
    }
    get PartsPerBillion() {
        if (this.partsperbillionLazy !== null) {
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(RatioUnits.PartsPerBillion);
    }
    get PartsPerTrillion() {
        if (this.partspertrillionLazy !== null) {
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(RatioUnits.PartsPerTrillion);
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
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RatioUnits.DecimalFractions:
                return value;
            case RatioUnits.Percent:
                return value / 1e2;
            case RatioUnits.PartsPerThousand:
                return value / 1e3;
            case RatioUnits.PartsPerMillion:
                return value / 1e6;
            case RatioUnits.PartsPerBillion:
                return value / 1e9;
            case RatioUnits.PartsPerTrillion:
                return value / 1e12;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = RatioUnits.DecimalFractions) {
        switch (toUnit) {
            case RatioUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case RatioUnits.Percent:
                return this.Percent + ` %`;
            case RatioUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case RatioUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case RatioUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case RatioUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Ratio = Ratio;
//# sourceMappingURL=ratio.g.js.map