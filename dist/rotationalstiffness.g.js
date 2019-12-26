"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalStiffnessUnits;
(function (RotationalStiffnessUnits) {
    RotationalStiffnessUnits[RotationalStiffnessUnits["NewtonMetersPerRadian"] = 0] = "NewtonMetersPerRadian";
    RotationalStiffnessUnits[RotationalStiffnessUnits["KilonewtonMetersPerRadian"] = 1] = "KilonewtonMetersPerRadian";
    RotationalStiffnessUnits[RotationalStiffnessUnits["MeganewtonMetersPerRadian"] = 2] = "MeganewtonMetersPerRadian";
})(RotationalStiffnessUnits = exports.RotationalStiffnessUnits || (exports.RotationalStiffnessUnits = {}));
class RotationalStiffness {
    constructor(value, fromUnit) {
        this.newtonmetersperradianLazy = null;
        this.kilonewtonmetersperradianLazy = null;
        this.meganewtonmetersperradianLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMetersPerRadian() {
        if (this.newtonmetersperradianLazy !== null) {
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    get KilonewtonMetersPerRadian() {
        if (this.kilonewtonmetersperradianLazy !== null) {
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }
    get MeganewtonMetersPerRadian() {
        if (this.meganewtonmetersperradianLazy !== null) {
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }
    static FromNewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    static FromKilonewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }
    static FromMeganewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
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
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = RotationalStiffnessUnits.NewtonMetersPerRadian) {
        switch (toUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.NewtonMetersPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.KilonewtonMetersPerRadian:
                return this.KilonewtonMetersPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.MeganewtonMetersPerRadian:
                return this.MeganewtonMetersPerRadian + ` N·m/rad`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalStiffness = RotationalStiffness;
//# sourceMappingURL=rotationalstiffness.g.js.map