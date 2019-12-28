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
     * The default unit is NewtonMetersPerRadianPerMeter
     */
    constructor(value, fromUnit = RotationalStiffnessPerLengthUnits.NewtonMetersPerRadianPerMeter) {
        this.newtonmetersperradianpermeterLazy = null;
        this.kilonewtonmetersperradianpermeterLazy = null;
        this.meganewtonmetersperradianpermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of RotationalStiffnessPerLength is NewtonMetersPerRadianPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
                return this.KilonewtonMetersPerRadianPerMeter + ` `;
            case RotationalStiffnessPerLengthUnits.MeganewtonMetersPerRadianPerMeter:
                return this.MeganewtonMetersPerRadianPerMeter + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given RotationalStiffnessPerLength are equals to the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns True if the given RotationalStiffnessPerLength are equal to the current RotationalStiffnessPerLength.
     */
    equals(rotationalStiffnessPerLength) {
        return this.value === rotationalStiffnessPerLength.BaseValue;
    }
    /**
     * Compare the given RotationalStiffnessPerLength against the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns 0 if they are equal, -1 if the current RotationalStiffnessPerLength is less then other, 1 if the current RotationalStiffnessPerLength is greater then other.
     */
    compareTo(rotationalStiffnessPerLength) {
        if (this.value > rotationalStiffnessPerLength.BaseValue)
            return 1;
        if (this.value < rotationalStiffnessPerLength.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    add(rotationalStiffnessPerLength) {
        return new RotationalStiffnessPerLength(this.value + rotationalStiffnessPerLength.BaseValue);
    }
    /**
     * Subtract the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    subtract(rotationalStiffnessPerLength) {
        return new RotationalStiffnessPerLength(this.value - rotationalStiffnessPerLength.BaseValue);
    }
    /**
     * Multiply the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    multiply(rotationalStiffnessPerLength) {
        return new RotationalStiffnessPerLength(this.value * rotationalStiffnessPerLength.BaseValue);
    }
    /**
     * Divide the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    divide(rotationalStiffnessPerLength) {
        return new RotationalStiffnessPerLength(this.value / rotationalStiffnessPerLength.BaseValue);
    }
    /**
     * Modulo the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    modulo(rotationalStiffnessPerLength) {
        return new RotationalStiffnessPerLength(this.value % rotationalStiffnessPerLength.BaseValue);
    }
    /**
     * Pow the given RotationalStiffnessPerLength with the current RotationalStiffnessPerLength.
     * @param rotationalStiffnessPerLength The other RotationalStiffnessPerLength.
     * @returns A new RotationalStiffnessPerLength instance with the results.
     */
    pow(rotationalStiffnessPerLength) {
        return new RotationalStiffnessPerLength(this.value ** rotationalStiffnessPerLength.BaseValue);
    }
}
exports.RotationalStiffnessPerLength = RotationalStiffnessPerLength;
//# sourceMappingURL=rotationalstiffnessperlength.g.js.map