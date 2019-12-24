"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagnetizationUnits;
(function (MagnetizationUnits) {
    MagnetizationUnits[MagnetizationUnits["AmperesPerMeter"] = 0] = "AmperesPerMeter";
})(MagnetizationUnits = exports.MagnetizationUnits || (exports.MagnetizationUnits = {}));
class Magnetization {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get AmperesPerMeter() {
        return this.convertFromBase(MagnetizationUnits.AmperesPerMeter);
    }
    static FromAmperesPerMeter(value) {
        return new Magnetization(value, MagnetizationUnits.AmperesPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagnetizationUnits.AmperesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MagnetizationUnits.AmperesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
}
exports.Magnetization = Magnetization;
//# sourceMappingURL=magnetization.g.js.map