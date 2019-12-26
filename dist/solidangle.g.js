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
     */
    constructor(value, fromUnit) {
        this.steradiansLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of SolidAngle is Steradian.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.SolidAngle = SolidAngle;
//# sourceMappingURL=solidangle.g.js.map