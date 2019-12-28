"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** SolidAngleUnits enumeration */
var SolidAngleUnits;
(function (SolidAngleUnits) {
    /** */
    SolidAngleUnits[SolidAngleUnits["Steradians"] = 0] = "Steradians";
})(SolidAngleUnits = exports.SolidAngleUnits || (exports.SolidAngleUnits = {}));
/** In geometry, a solid angle is the two-dimensional angle in three-dimensional space that an object subtends at a point. */
class SolidAngle {
    /**
     * Create a new SolidAngle.
     * @param value The value.
     * @param fromUnit The ‘SolidAngle’ unit to create from.
     * The default unit is Steradians
     */
    constructor(value, fromUnit = SolidAngleUnits.Steradians) {
        this.steradiansLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of SolidAngle is Steradians.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Steradians() {
        if (this.steradiansLazy !== null) {
            return this.steradiansLazy;
        }
        return this.steradiansLazy = this.convertFromBase(SolidAngleUnits.Steradians);
    }
    /**
     * Create a new SolidAngle instance from a Steradians
     *
     * @param value The unit as Steradians to create a new SolidAngle from.
     * @returns The new SolidAngle instance.
     */
    static FromSteradians(value) {
        return new SolidAngle(value, SolidAngleUnits.Steradians);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SolidAngleUnits.Steradians:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SolidAngleUnits.Steradians:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the SolidAngle to string.
     * Note! the default format for SolidAngle is Steradians.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SolidAngle.
     * @returns The string format of the SolidAngle.
     */
    toString(toUnit = SolidAngleUnits.Steradians) {
        switch (toUnit) {
            case SolidAngleUnits.Steradians:
                return this.Steradians + ` sr`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given SolidAngle are equals to the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns True if the given SolidAngle are equal to the current SolidAngle.
     */
    equals(solidAngle) {
        return this.value === solidAngle.BaseValue;
    }
    /**
     * Compare the given SolidAngle against the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns 0 if they are equal, -1 if the current SolidAngle is less then other, 1 if the current SolidAngle is greater then other.
     */
    compareTo(solidAngle) {
        if (this.value > solidAngle.BaseValue)
            return 1;
        if (this.value < solidAngle.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    add(solidAngle) {
        return new SolidAngle(this.value + solidAngle.BaseValue);
    }
    /**
     * Subtract the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    subtract(solidAngle) {
        return new SolidAngle(this.value - solidAngle.BaseValue);
    }
    /**
     * Multiply the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    multiply(solidAngle) {
        return new SolidAngle(this.value * solidAngle.BaseValue);
    }
    /**
     * Divide the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    divide(solidAngle) {
        return new SolidAngle(this.value / solidAngle.BaseValue);
    }
    /**
     * Modulo the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    modulo(solidAngle) {
        return new SolidAngle(this.value % solidAngle.BaseValue);
    }
    /**
     * Pow the given SolidAngle with the current SolidAngle.
     * @param solidAngle The other SolidAngle.
     * @returns A new SolidAngle instance with the results.
     */
    pow(solidAngle) {
        return new SolidAngle(this.value ** solidAngle.BaseValue);
    }
}
exports.SolidAngle = SolidAngle;
//# sourceMappingURL=solidangle.g.js.map