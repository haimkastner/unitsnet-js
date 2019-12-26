"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalStiffnessPerLengthUnits;
(function (RotationalStiffnessPerLengthUnits) {
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["NewtonMetersPerRadianPerMeter"] = 0] = "NewtonMetersPerRadianPerMeter";
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["Kilonewtonmetersperradianpermeter"] = 1] = "Kilonewtonmetersperradianpermeter";
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["Meganewtonmetersperradianpermeter"] = 2] = "Meganewtonmetersperradianpermeter";
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
    get Kilonewtonmetersperradianpermeter() {
        if (this.kilonewtonmetersperradianpermeterLazy !== null) {
            return this.kilonewtonmetersperradianpermeterLazy;
        }
        return this.kilonewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter);
    }
    get Meganewtonmetersperradianpermeter() {
        if (this.meganewtonmetersperradianpermeterLazy !== null) {
            return this.meganewtonmetersperradianpermeterLazy;
        }
        return this.meganewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter);
    }
    static FromNewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    static FromKilonewtonmetersperradianpermeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter);
    }
    static FromMeganewtonmetersperradianpermeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter:
                return this.value;
            case RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter:
                return (this.value) / 1000;
            case RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter:
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
            case RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter:
                return (value) * 1000;
            case RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.RotationalStiffnessPerLength = RotationalStiffnessPerLength;
//# sourceMappingURL=rotationalstiffnessperlength.g.js.map