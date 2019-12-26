"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificVolumeUnits;
(function (SpecificVolumeUnits) {
    SpecificVolumeUnits[SpecificVolumeUnits["CubicMetersPerKilogram"] = 0] = "CubicMetersPerKilogram";
    SpecificVolumeUnits[SpecificVolumeUnits["CubicFeetPerPound"] = 1] = "CubicFeetPerPound";
})(SpecificVolumeUnits = exports.SpecificVolumeUnits || (exports.SpecificVolumeUnits = {}));
class SpecificVolume {
    constructor(value, fromUnit) {
        this.cubicmetersperkilogramLazy = null;
        this.cubicfeetperpoundLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get CubicMetersPerKilogram() {
        if (this.cubicmetersperkilogramLazy !== null) {
            return this.cubicmetersperkilogramLazy;
        }
        return this.cubicmetersperkilogramLazy = this.convertFromBase(SpecificVolumeUnits.CubicMetersPerKilogram);
    }
    get CubicFeetPerPound() {
        if (this.cubicfeetperpoundLazy !== null) {
            return this.cubicfeetperpoundLazy;
        }
        return this.cubicfeetperpoundLazy = this.convertFromBase(SpecificVolumeUnits.CubicFeetPerPound);
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
                return this.value * 16.01846353;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificVolumeUnits.CubicMetersPerKilogram:
                return value;
            case SpecificVolumeUnits.CubicFeetPerPound:
                return value / 16.01846353;
            default:
                break;
        }
        return NaN;
    }
}
exports.SpecificVolume = SpecificVolume;
//# sourceMappingURL=specificvolume.g.js.map