"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricCurrentGradientUnits;
(function (ElectricCurrentGradientUnits) {
    ElectricCurrentGradientUnits[ElectricCurrentGradientUnits["AmperesPerSecond"] = 0] = "AmperesPerSecond";
})(ElectricCurrentGradientUnits = exports.ElectricCurrentGradientUnits || (exports.ElectricCurrentGradientUnits = {}));
class ElectricCurrentGradient {
    constructor(value, fromUnit) {
        this.amperespersecondLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get AmperesPerSecond() {
        if (this.amperespersecondLazy !== null) {
            return this.amperespersecondLazy;
        }
        return this.amperespersecondLazy = this.convertFromBase(ElectricCurrentGradientUnits.AmperesPerSecond);
    }
    static FromAmperesPerSecond(value) {
        return new ElectricCurrentGradient(value, ElectricCurrentGradientUnits.AmperesPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return value;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricCurrentGradient = ElectricCurrentGradient;
//# sourceMappingURL=electriccurrentgradient.g.js.map