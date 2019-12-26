"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** RotationalStiffnessUnits enumeration */
var RotationalStiffnessUnits;
(function (RotationalStiffnessUnits) {
    /** */
    RotationalStiffnessUnits[RotationalStiffnessUnits["NewtonMetersPerRadian"] = 0] = "NewtonMetersPerRadian";
    /** */
    RotationalStiffnessUnits[RotationalStiffnessUnits["KilonewtonMetersPerRadian"] = 1] = "KilonewtonMetersPerRadian";
    /** */
    RotationalStiffnessUnits[RotationalStiffnessUnits["MeganewtonMetersPerRadian"] = 2] = "MeganewtonMetersPerRadian";
})(RotationalStiffnessUnits = exports.RotationalStiffnessUnits || (exports.RotationalStiffnessUnits = {}));
/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
class RotationalStiffness {
    /**
     * Create a new RotationalStiffness.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffness’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.newtonmetersperradianLazy = null;
        this.kilonewtonmetersperradianLazy = null;
        this.meganewtonmetersperradianLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of RotationalStiffness is NewtonMeterPerRadian.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonMetersPerRadian() {
        if (this.newtonmetersperradianLazy !== null) {
            return this.newtonmetersperradianLazy;
        }
        return this.newtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    /** */
    get KilonewtonMetersPerRadian() {
        if (this.kilonewtonmetersperradianLazy !== null) {
            return this.kilonewtonmetersperradianLazy;
        }
        return this.kilonewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }
    /** */
    get MeganewtonMetersPerRadian() {
        if (this.meganewtonmetersperradianLazy !== null) {
            return this.meganewtonmetersperradianLazy;
        }
        return this.meganewtonmetersperradianLazy = this.convertFromBase(RotationalStiffnessUnits.MeganewtonMetersPerRadian);
    }
    /**
     * Create a new RotationalStiffness instance from a NewtonMetersPerRadian
     *
     * @param value The unit as NewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    static FromNewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.NewtonMetersPerRadian);
    }
    /**
     * Create a new RotationalStiffness instance from a KilonewtonMetersPerRadian
     *
     * @param value The unit as KilonewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
    static FromKilonewtonMetersPerRadian(value) {
        return new RotationalStiffness(value, RotationalStiffnessUnits.KilonewtonMetersPerRadian);
    }
    /**
     * Create a new RotationalStiffness instance from a MeganewtonMetersPerRadian
     *
     * @param value The unit as MeganewtonMetersPerRadian to create a new RotationalStiffness from.
     * @returns The new RotationalStiffness instance.
     */
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
    /**
     * Format the RotationalStiffness to string.
     * Note! the default format for RotationalStiffness is NewtonMetersPerRadian.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalStiffness.
     * @returns The string format of the RotationalStiffness.
     */
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