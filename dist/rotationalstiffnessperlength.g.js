"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** RotationalStiffnessPerLengthUnits enumeration */
var RotationalStiffnessPerLengthUnits;
(function (RotationalStiffnessPerLengthUnits) {
    /** */
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["NewtonMetersPerRadianPerMeter"] = 0] = "NewtonMetersPerRadianPerMeter";
    /** */
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["KilonewtonMetersPerRadianPerMeter"] = 1] = "KilonewtonMetersPerRadianPerMeter";
    /** */
    RotationalStiffnessPerLengthUnits[RotationalStiffnessPerLengthUnits["MeganewtonMetersPerRadianPerMeter"] = 2] = "MeganewtonMetersPerRadianPerMeter";
})(RotationalStiffnessPerLengthUnits = exports.RotationalStiffnessPerLengthUnits || (exports.RotationalStiffnessPerLengthUnits = {}));
/** https://en.wikipedia.org/wiki/Stiffness#Rotational_stiffness */
class RotationalStiffnessPerLength {
    /**
     * Create a new RotationalStiffnessPerLength.
     * @param value The value.
     * @param fromUnit The ‘RotationalStiffnessPerLength’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.newtonmetersperradianpermeterLazy = null;
        this.kilonewtonmetersperradianpermeterLazy = null;
        this.meganewtonmetersperradianpermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of RotationalStiffnessPerLength is NewtonMeterPerRadianPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonMetersPerRadianPerMeter() {
        if (this.newtonmetersperradianpermeterLazy !== null) {
            return this.newtonmetersperradianpermeterLazy;
        }
        return this.newtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    /** */
    get KilonewtonMetersPerRadianPerMeter() {
        if (this.kilonewtonmetersperradianpermeterLazy !== null) {
            return this.kilonewtonmetersperradianpermeterLazy;
        }
        return this.kilonewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }
    /** */
    get MeganewtonMetersPerRadianPerMeter() {
        if (this.meganewtonmetersperradianpermeterLazy !== null) {
            return this.meganewtonmetersperradianpermeterLazy;
        }
        return this.meganewtonmetersperradianpermeterLazy = this.convertFromBase(RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter);
    }
    /**
     * Create a new RotationalStiffnessPerLength instance from a NewtonMetersPerRadianPerMeter
     *
     * @param value The unit as NewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    static FromNewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter);
    }
    /**
     * Create a new RotationalStiffnessPerLength instance from a KilonewtonMetersPerRadianPerMeter
     *
     * @param value The unit as KilonewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
    static FromKilonewtonMetersPerRadianPerMeter(value) {
        return new RotationalStiffnessPerLength(value, RotationalStiffnessPerLengthUnits.KilonewtonMetersPerRadianPerMeter);
    }
    /**
     * Create a new RotationalStiffnessPerLength instance from a MeganewtonMetersPerRadianPerMeter
     *
     * @param value The unit as MeganewtonMetersPerRadianPerMeter to create a new RotationalStiffnessPerLength from.
     * @returns The new RotationalStiffnessPerLength instance.
     */
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
    /**
     * Format the RotationalStiffnessPerLength to string.
     * Note! the default format for RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalStiffnessPerLength.
     * @returns The string format of the RotationalStiffnessPerLength.
     */
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