"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PermittivityUnits enumeration */
var PermittivityUnits;
(function (PermittivityUnits) {
    /** */
    PermittivityUnits[PermittivityUnits["FaradsPerMeter"] = 0] = "FaradsPerMeter";
})(PermittivityUnits = exports.PermittivityUnits || (exports.PermittivityUnits = {}));
/** In electromagnetism, permittivity is the measure of resistance that is encountered when forming an electric field in a particular medium. */
class Permittivity {
    /**
     * Create a new Permittivity.
     * @param value The value.
     * @param fromUnit The ‘Permittivity’ unit to create from.
     * The default unit is FaradsPerMeter
     */
    constructor(value, fromUnit = PermittivityUnits.FaradsPerMeter) {
        this.faradspermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Permittivity is FaradsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get FaradsPerMeter() {
        if (this.faradspermeterLazy !== null) {
            return this.faradspermeterLazy;
        }
        return this.faradspermeterLazy = this.convertFromBase(PermittivityUnits.FaradsPerMeter);
    }
    /**
     * Create a new Permittivity instance from a FaradsPerMeter
     *
     * @param value The unit as FaradsPerMeter to create a new Permittivity from.
     * @returns The new Permittivity instance.
     */
    static FromFaradsPerMeter(value) {
        return new Permittivity(value, PermittivityUnits.FaradsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PermittivityUnits.FaradsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PermittivityUnits.FaradsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Permittivity to string.
     * Note! the default format for Permittivity is FaradsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permittivity.
     * @returns The string format of the Permittivity.
     */
    toString(toUnit = PermittivityUnits.FaradsPerMeter) {
        switch (toUnit) {
            case PermittivityUnits.FaradsPerMeter:
                return this.FaradsPerMeter + ` F/m`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Permittivity are equals to the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns True if the given Permittivity are equal to the current Permittivity.
     */
    equals(permittivity) {
        return this.value === permittivity.BaseValue;
    }
    /**
     * Compare the given Permittivity against the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns 0 if they are equal, -1 if the current Permittivity is less then other, 1 if the current Permittivity is greater then other.
     */
    compareTo(permittivity) {
        if (this.value > permittivity.BaseValue)
            return 1;
        if (this.value < permittivity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    add(permittivity) {
        return new Permittivity(this.value + permittivity.BaseValue);
    }
    /**
     * Subtract the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    subtract(permittivity) {
        return new Permittivity(this.value - permittivity.BaseValue);
    }
    /**
     * Multiply the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    multiply(permittivity) {
        return new Permittivity(this.value * permittivity.BaseValue);
    }
    /**
     * Divide the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    divide(permittivity) {
        return new Permittivity(this.value / permittivity.BaseValue);
    }
    /**
     * Modulo the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    modulo(permittivity) {
        return new Permittivity(this.value % permittivity.BaseValue);
    }
    /**
     * Pow the given Permittivity with the current Permittivity.
     * @param permittivity The other Permittivity.
     * @returns A new Permittivity instance with the results.
     */
    pow(permittivity) {
        return new Permittivity(this.value ** permittivity.BaseValue);
    }
}
exports.Permittivity = Permittivity;
//# sourceMappingURL=permittivity.g.js.map