"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalStiffnessPerLengthUnits;
(function (RotationalStiffnessPerLengthUnits) {
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["NewtonMetersPerRadianPerMeter"] = 0] = "NewtonMetersPerRadianPerMeter";
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["KilonewtonMeterPerRadianPerMeter"] = 1] = "KilonewtonMeterPerRadianPerMeter";
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["MeganewtonMeterPerRadianPerMeter"] = 2] = "MeganewtonMeterPerRadianPerMeter";
})(RotationalStiffnessPerLengthUnits = exports.RotationalStiffnessPerLengthUnits || (exports.RotationalStiffnessPerLengthUnits = {}));
class RotationalStiffnessPerLength {
    constructor(value, fromUnit) {
        this.newtonmetersperradianpermeterLazy = null;
        this.kilonewtonmeterperradianpermeterLazy = null;
        this.meganewtonmeterperradianpermeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMetersPerRadianPerMeter() {
        if (this.newtonmetersperradianpermeterLazy !== null) {
            return this.newtonmetersperradianpermeterLazy;
        }
        return this.newtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    get KilonewtonMeterPerRadianPerMeter() {
        if (this.kilonewtonmeterperradianpermeterLazy !== null) {
            return this.kilonewtonmeterperradianpermeterLazy;
        }
        return this.kilonewtonmeterperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter);
    }
    get MeganewtonMeterPerRadianPerMeter() {
        if (this.meganewtonmeterperradianpermeterLazy !== null) {
            return this.meganewtonmeterperradianpermeterLazy;
        }
        return this.meganewtonmeterperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter);
    }
    static FromNewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    static FromKilonewtonMeterPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter);
    }
    static FromMeganewtonMeterPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.value;
            case RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter:
                return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter:
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
            case RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter:
                return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter:
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
            case RotationalStiffnessPerLengthUnits.KilonewtonMeterPerRadianPerMeter:
                return this.KilonewtonMeterPerRadianPerMeter + ` N·m/rad/m`;
            case RotationalStiffnessPerLengthUnits.MeganewtonMeterPerRadianPerMeter:
                return this.MeganewtonMeterPerRadianPerMeter + ` N·m/rad/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalStiffnessPerLength = RotationalStiffnessPerLength;
//# sourceMappingURL=rotationalstiffnessperlength.g.js.map