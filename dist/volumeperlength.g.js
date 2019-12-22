"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VolumePerLengthUnits;
(function (VolumePerLengthUnits) {
    VolumePerLengthUnits[VolumePerLengthUnits["CubicMetersPerMeter"] = 0] = "CubicMetersPerMeter";
    VolumePerLengthUnits[VolumePerLengthUnits["LitersPerMeter"] = 1] = "LitersPerMeter";
    VolumePerLengthUnits[VolumePerLengthUnits["OilBarrelsPerFoot"] = 2] = "OilBarrelsPerFoot";
})(VolumePerLengthUnits = exports.VolumePerLengthUnits || (exports.VolumePerLengthUnits = {}));
class VolumePerLength {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get CubicMetersPerMeter() {
        return this.convertFromBase(VolumePerLengthUnits.CubicMetersPerMeter);
    }
    get LitersPerMeter() {
        return this.convertFromBase(VolumePerLengthUnits.LitersPerMeter);
    }
    get OilBarrelsPerFoot() {
        return this.convertFromBase(VolumePerLengthUnits.OilBarrelsPerFoot);
    }
    static FromCubicMetersPerMeter(value) {
        return new VolumePerLength(value, VolumePerLengthUnits.CubicMetersPerMeter);
    }
    static FromLitersPerMeter(value) {
        return new VolumePerLength(value, VolumePerLengthUnits.LitersPerMeter);
    }
    static FromOilBarrelsPerFoot(value) {
        return new VolumePerLength(value, VolumePerLengthUnits.OilBarrelsPerFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.value;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.value / 1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.value / 1.91713408;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.value;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.value * 1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.value * 1.91713408;
            default:
                break;
        }
        return NaN;
    }
}
exports.VolumePerLength = VolumePerLength;
//# sourceMappingURL=volumeperlength.g.js.map