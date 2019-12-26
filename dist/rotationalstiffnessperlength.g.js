"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalStiffnessPerLengthUnits;
(function (RotationalStiffnessPerLengthUnits) {
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["NewtonMetersPerRadianPerMeter"] = 0] = "NewtonMetersPerRadianPerMeter";
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["KilonewtonMetersPerRadianPerMeter"] = 1] = "KilonewtonMetersPerRadianPerMeter";
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["MeganewtonMetersPerRadianPerMeter"] = 2] = "MeganewtonMetersPerRadianPerMeter";
})(RotationalStiffnessPerLengthUnits = exports.RotationalStiffnessPerLengthUnits || (exports.RotationalStiffnessPerLengthUnits = {}));
class RotationalStiffnessPerLength {
    constructor(value, fromUnit) {
        this.newtonmetersperradianpermeterLazy = null;
        this.kilonewtonmetersperradianpermeterLazy = null;
        this.meganewtonmetersperradianpermeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMetersPerRadianPerMeter() {
        if (this.newtonmetersperradianpermeterLazy !== null) {
            return this.newtonmetersperradianpermeterLazy;
        }
        return this.newtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    get KilonewtonMetersPerRadianPerMeter() {
        if (this.kilonewtonmetersperradianpermeterLazy !== null) {
            return this.kilonewtonmetersperradianpermeterLazy;
        }
        return this.kilonewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }
    get MeganewtonMetersPerRadianPerMeter() {
        if (this.meganewtonmetersperradianpermeterLazy !== null) {
            return this.meganewtonmetersperradianpermeterLazy;
        }
        return this.meganewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }
    static FromNewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    static FromKilonewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }
    static FromMeganewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.value;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return value;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter) {
        switch (toUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.NewtonMetersPerRadianPerMeter + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter:
                return this.KilonewtonMetersPerRadianPerMeter + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return this.MeganewtonMetersPerRadianPerMeter + ` N·m/rad/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalStiffnessPerLength = RotationalStiffnessPerLength;
//# sourceMappingURL=rotationalstiffnessperlength.g.js.map