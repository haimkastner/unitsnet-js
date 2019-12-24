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
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMetersPerRadianPerMeter() {
        return this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    get Kilonewtonmetersperradianpermeter() {
        return this.convertFromBase(RotationalStiffnessPerLengthUnits.Kilonewtonmetersperradianpermeter);
    }
    get Meganewtonmetersperradianpermeter() {
        return this.convertFromBase(RotationalStiffnessPerLengthUnits.Meganewtonmetersperradianpermeter);
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