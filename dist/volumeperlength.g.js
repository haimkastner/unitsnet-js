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
        this.cubicmeterspermeterLazy = null;
        this.literspermeterLazy = null;
        this.oilbarrelsperfootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get CubicMetersPerMeter() {
        if (this.cubicmeterspermeterLazy !== null) {
            return this.cubicmeterspermeterLazy;
        }
        return this.cubicmeterspermeterLazy = this.convertFromBase(VolumePerLengthUnits.CubicMetersPerMeter);
    }
    get LitersPerMeter() {
        if (this.literspermeterLazy !== null) {
            return this.literspermeterLazy;
        }
        return this.literspermeterLazy = this.convertFromBase(VolumePerLengthUnits.LitersPerMeter);
    }
    get OilBarrelsPerFoot() {
        if (this.oilbarrelsperfootLazy !== null) {
            return this.oilbarrelsperfootLazy;
        }
        return this.oilbarrelsperfootLazy = this.convertFromBase(VolumePerLengthUnits.OilBarrelsPerFoot);
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
                return this.value * 1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.value * 1.91713408;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return value;
            case VolumePerLengthUnits.LitersPerMeter:
                return value / 1000;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return value / 1.91713408;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = VolumePerLengthUnits.CubicMetersPerMeter) {
        switch (toUnit) {
            case VolumePerLengthUnits.CubicMetersPerMeter:
                return this.CubicMetersPerMeter + ` m³/m`;
            case VolumePerLengthUnits.LitersPerMeter:
                return this.LitersPerMeter + ` l/m`;
            case VolumePerLengthUnits.OilBarrelsPerFoot:
                return this.OilBarrelsPerFoot + ` bbl/ft`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.VolumePerLength = VolumePerLength;
//# sourceMappingURL=volumeperlength.g.js.map