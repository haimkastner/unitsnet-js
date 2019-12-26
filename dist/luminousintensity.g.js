"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuminousIntensityUnits;
(function (LuminousIntensityUnits) {
    LuminousIntensityUnits[LuminousIntensityUnits["Candela"] = 0] = "Candela";
})(LuminousIntensityUnits = exports.LuminousIntensityUnits || (exports.LuminousIntensityUnits = {}));
class LuminousIntensity {
    constructor(value, fromUnit) {
        this.candelaLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Candela() {
        if (this.candelaLazy !== null) {
            return this.candelaLazy;
        }
        return this.candelaLazy = this.convertFromBase(LuminousIntensityUnits.Candela);
    }
    static FromCandela(value) {
        return new LuminousIntensity(value, LuminousIntensityUnits.Candela);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminousIntensityUnits.Candela:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminousIntensityUnits.Candela:
                return value;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = LuminousIntensityUnits.Candela) {
        switch (toUnit) {
            case LuminousIntensityUnits.Candela:
                return this.Candela + ` cd`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.LuminousIntensity = LuminousIntensity;
//# sourceMappingURL=luminousintensity.g.js.map