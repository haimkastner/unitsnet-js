"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuminousIntensityUnits;
(function (LuminousIntensityUnits) {
    LuminousIntensityUnits[LuminousIntensityUnits["Candela"] = 0] = "Candela";
})(LuminousIntensityUnits = exports.LuminousIntensityUnits || (exports.LuminousIntensityUnits = {}));
class LuminousIntensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Candela() {
        return this.convertFromBase(LuminousIntensityUnits.Candela);
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
}
exports.LuminousIntensity = LuminousIntensity;
//# sourceMappingURL=luminousintensity.g.js.map