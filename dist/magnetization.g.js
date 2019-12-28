"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MagnetizationUnits enumeration */
var MagnetizationUnits;
(function (MagnetizationUnits) {
    /** */
    MagnetizationUnits[MagnetizationUnits["AmperesPerMeter"] = 0] = "AmperesPerMeter";
})(MagnetizationUnits = exports.MagnetizationUnits || (exports.MagnetizationUnits = {}));
/** In classical electromagnetism, magnetization is the vector field that expresses the density of permanent or induced magnetic dipole moments in a magnetic material. */
class Magnetization {
    /**
     * Create a new Magnetization.
     * @param value The value.
     * @param fromUnit The ‘Magnetization’ unit to create from.
     * The default unit is AmperesPerMeter
     */
    constructor(value, fromUnit = MagnetizationUnits.AmperesPerMeter) {
        this.amperespermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Magnetization is AmperesPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get AmperesPerMeter() {
        if (this.amperespermeterLazy !== null) {
            return this.amperespermeterLazy;
        }
        return this.amperespermeterLazy = this.convertFromBase(MagnetizationUnits.AmperesPerMeter);
    }
    /**
     * Create a new Magnetization instance from a AmperesPerMeter
     *
     * @param value The unit as AmperesPerMeter to create a new Magnetization from.
     * @returns The new Magnetization instance.
     */
    static FromAmperesPerMeter(value) {
        return new Magnetization(value, MagnetizationUnits.AmperesPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagnetizationUnits.AmperesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MagnetizationUnits.AmperesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Magnetization to string.
     * Note! the default format for Magnetization is AmperesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Magnetization.
     * @returns The string format of the Magnetization.
     */
    toString(toUnit = MagnetizationUnits.AmperesPerMeter) {
        switch (toUnit) {
            case MagnetizationUnits.AmperesPerMeter:
                return this.AmperesPerMeter + ` A/m`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Magnetization are equals to the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns True if the given Magnetization are equal to the current Magnetization.
     */
    equals(magnetization) {
        return this.value === magnetization.BaseValue;
    }
    /**
     * Compare the given Magnetization against the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns 0 if they are equal, -1 if the current Magnetization is less then other, 1 if the current Magnetization is greater then other.
     */
    compareTo(magnetization) {
        if (this.value > magnetization.BaseValue)
            return 1;
        if (this.value < magnetization.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    add(magnetization) {
        return new Magnetization(this.value + magnetization.BaseValue);
    }
    /**
     * Subtract the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    subtract(magnetization) {
        return new Magnetization(this.value - magnetization.BaseValue);
    }
    /**
     * Multiply the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    multiply(magnetization) {
        return new Magnetization(this.value * magnetization.BaseValue);
    }
    /**
     * Divide the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    divide(magnetization) {
        return new Magnetization(this.value / magnetization.BaseValue);
    }
    /**
     * Modulo the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    modulo(magnetization) {
        return new Magnetization(this.value % magnetization.BaseValue);
    }
    /**
     * Pow the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    pow(magnetization) {
        return new Magnetization(this.value ** magnetization.BaseValue);
    }
}
exports.Magnetization = Magnetization;
//# sourceMappingURL=magnetization.g.js.map