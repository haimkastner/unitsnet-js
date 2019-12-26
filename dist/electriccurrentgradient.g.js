"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricCurrentGradientUnits enumeration */
var ElectricCurrentGradientUnits;
(function (ElectricCurrentGradientUnits) {
    /** */
    ElectricCurrentGradientUnits[ElectricCurrentGradientUnits["AmperesPerSecond"] = 0] = "AmperesPerSecond";
})(ElectricCurrentGradientUnits = exports.ElectricCurrentGradientUnits || (exports.ElectricCurrentGradientUnits = {}));
/** In electromagnetism, the current gradient describes how the current changes in time. */
class ElectricCurrentGradient {
    /**
     * Create a new ElectricCurrentGradient.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentGradient’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.amperespersecondLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricCurrentGradient is AmperePerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get AmperesPerSecond() {
        if (this.amperespersecondLazy !== null) {
            return this.amperespersecondLazy;
        }
        return this.amperespersecondLazy = this.convertFromBase(ElectricCurrentGradientUnits.AmperesPerSecond);
    }
    /**
     * Create a new ElectricCurrentGradient instance from a AmperesPerSecond
     *
     * @param value The unit as AmperesPerSecond to create a new ElectricCurrentGradient from.
     * @returns The new ElectricCurrentGradient instance.
     */
    static FromAmperesPerSecond(value) {
        return new ElectricCurrentGradient(value, ElectricCurrentGradientUnits.AmperesPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricCurrentGradient to string.
     * Note! the default format for ElectricCurrentGradient is AmperesPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrentGradient.
     * @returns The string format of the ElectricCurrentGradient.
     */
    toString(toUnit = ElectricCurrentGradientUnits.AmperesPerSecond) {
        switch (toUnit) {
            case ElectricCurrentGradientUnits.AmperesPerSecond:
                return this.AmperesPerSecond + ` A/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricCurrentGradient = ElectricCurrentGradient;
//# sourceMappingURL=electriccurrentgradient.g.js.map