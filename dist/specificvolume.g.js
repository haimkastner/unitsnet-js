"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificVolumeUnits;
(function (SpecificVolumeUnits) {
    SpecificVolumeUnits[SpecificVolumeUnits["CubicMetersPerKilogram"] = 0] = "CubicMetersPerKilogram";
    SpecificVolumeUnits[SpecificVolumeUnits["CubicFeetPerPound"] = 1] = "CubicFeetPerPound";
})(SpecificVolumeUnits = exports.SpecificVolumeUnits || (exports.SpecificVolumeUnits = {}));
class SpecificVolume {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get CubicMetersPerKilogram() {
        return this.convertFromBase(SpecificVolumeUnits.CubicMetersPerKilogram);
    }
    get CubicFeetPerPound() {
        return this.convertFromBase(SpecificVolumeUnits.CubicFeetPerPound);
    }
    static FromCubicMetersPerKilogram(value) {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicMetersPerKilogram);
    }
    static FromCubicFeetPerPound(value) {
        return new SpecificVolume(value, SpecificVolumeUnits.CubicFeetPerPound);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.value / 16.01846353;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return this.value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return this.value * 16.01846353;
            default:
                break;
        }
        return NaN;
    }
}
exports.SpecificVolume = SpecificVolume;
//# sourceMappingURL=specificvolume.g.js.map