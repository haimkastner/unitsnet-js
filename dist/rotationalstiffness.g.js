"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalStiffnessUnits;
(function (RotationalStiffnessUnits) {
    RotationalStiffnessUnits[RotationalStiffnessUnits["NewtonMetersPerRadian"] = 0] = "NewtonMetersPerRadian";
    RotationalStiffnessUnits[RotationalStiffnessUnits["Kilonewtonmetersperradian"] = 1] = "Kilonewtonmetersperradian";
    RotationalStiffnessUnits[RotationalStiffnessUnits["Meganewtonmetersperradian"] = 2] = "Meganewtonmetersperradian";
})(RotationalStiffnessUnits = exports.RotationalStiffnessUnits || (exports.RotationalStiffnessUnits = {}));
class RotationalStiffness {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMetersPerRadian() {
        return this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    get Kilonewtonmetersperradian() {
        return this.convertFromBase(RotationalStiffnessUnits.Kilonewtonmetersperradian);
    }
    get Meganewtonmetersperradian() {
        return this.convertFromBase(RotationalStiffnessUnits.Meganewtonmetersperradian);
    }
    static FromNewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    static FromKilonewtonmetersperradian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.Kilonewtonmetersperradian);
    }
    static FromMeganewtonmetersperradian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.Meganewtonmetersperradian);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.Kilonewtonmetersperradian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.Meganewtonmetersperradian:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return value;
            case RotationalStiffnessUnits.Kilonewtonmetersperradian:
                return (value) * 1000;
            case RotationalStiffnessUnits.Meganewtonmetersperradian:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.RotationalStiffness = RotationalStiffness;
//# sourceMappingURL=rotationalstiffness.g.js.map