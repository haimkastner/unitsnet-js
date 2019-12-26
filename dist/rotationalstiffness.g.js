"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalStiffnessUnits;
(function (RotationalStiffnessUnits) {
    RotationalStiffnessUnits[RotationalStiffnessUnits["NewtonMetersPerRadian"] = 0] = "NewtonMetersPerRadian";
    RotationalStiffnessUnits[RotationalStiffnessUnits["KilonewtonMeterPerRadian"] = 1] = "KilonewtonMeterPerRadian";
    RotationalStiffnessUnits[RotationalStiffnessUnits["MeganewtonMeterPerRadian"] = 2] = "MeganewtonMeterPerRadian";
})(RotationalStiffnessUnits = exports.RotationalStiffnessUnits || (exports.RotationalStiffnessUnits = {}));
class RotationalStiffness {
    constructor(value, fromUnit) {
        this.newtonmetersperradianLazy = null;
        this.kilonewtonmeterperradianLazy = null;
        this.meganewtonmeterperradianLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMetersPerRadian() {
        if (this.newtonmetersperradianLazy !== null) {
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    get KilonewtonMeterPerRadian() {
        if (this.kilonewtonmeterperradianLazy !== null) {
            return this.kilonewtonmeterperradianLazy;
        }
        return this.kilonewtonmeterperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMeterPerRadian);
    }
    get MeganewtonMeterPerRadian() {
        if (this.meganewtonmeterperradianLazy !== null) {
            return this.meganewtonmeterperradianLazy;
        }
        return this.meganewtonmeterperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMeterPerRadian);
    }
    static FromNewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    static FromKilonewtonMeterPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMeterPerRadian);
    }
    static FromMeganewtonMeterPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.MeganewtonMeterPerRadian);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalStiffnessUnits.NewtonMetersPerRadian:
                return this.value;
            case RotationalStiffnessUnits.KilonewtonMeterPerRadian:
                return (this.value) / 1000;
            case RotationalStiffnessUnits.MeganewtonMeterPerRadian:
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
            case RotationalStiffnessUnits.KilonewtonMeterPerRadian:
                return (value) * 1000;
            case RotationalStiffnessUnits.MeganewtonMeterPerRadian:
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
            case RotationalStiffnessUnits.KilonewtonMeterPerRadian:
                return this.KilonewtonMeterPerRadian + ` N·m/rad`;
            case RotationalStiffnessUnits.MeganewtonMeterPerRadian:
                return this.MeganewtonMeterPerRadian + ` N·m/rad`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalStiffness = RotationalStiffness;
//# sourceMappingURL=rotationalstiffness.g.js.map