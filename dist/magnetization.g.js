"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagnetizationUnits;
(function (MagnetizationUnits) {
    MagnetizationUnits[MagnetizationUnits["AmperesPerMeter"] = 0] = "AmperesPerMeter";
})(MagnetizationUnits = exports.MagnetizationUnits || (exports.MagnetizationUnits = {}));
class Magnetization {
    constructor(value, fromUnit) {
        this.amperespermeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get AmperesPerMeter() {
        if (this.amperespermeterLazy !== null) {
            return this.amperespermeterLazy;
        }
        return this.amperespermeterLazy = this.convertFromBase(MagnetizationUnits.AmperesPerMeter);
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
    toString(toUnit = MagnetizationUnits.AmperesPerMeter) {
        switch (toUnit) {
            case MagnetizationUnits.AmperesPerMeter:
                return this.AmperesPerMeter + ` A/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Magnetization = Magnetization;
//# sourceMappingURL=magnetization.g.js.map