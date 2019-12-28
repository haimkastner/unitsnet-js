"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LuminousFluxUnits enumeration */
var LuminousFluxUnits;
(function (LuminousFluxUnits) {
    /** */
    LuminousFluxUnits[LuminousFluxUnits["Lumens"] = 0] = "Lumens";
})(LuminousFluxUnits = exports.LuminousFluxUnits || (exports.LuminousFluxUnits = {}));
/** In photometry, luminous flux or luminous power is the measure of the perceived power of light. */
class LuminousFlux {
    /**
     * Create a new LuminousFlux.
     * @param value The value.
     * @param fromUnit The ‘LuminousFlux’ unit to create from.
     * The default unit is Lumens
     */
    constructor(value, fromUnit = LuminousFluxUnits.Lumens) {
        this.lumensLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of LuminousFlux is Lumens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Lumens() {
        if (this.lumensLazy !== null) {
            return this.lumensLazy;
        }
        return this.lumensLazy = this.convertFromBase(LuminousFluxUnits.Lumens);
    }
    /**
     * Create a new LuminousFlux instance from a Lumens
     *
     * @param value The unit as Lumens to create a new LuminousFlux from.
     * @returns The new LuminousFlux instance.
     */
    static FromLumens(value) {
        return new LuminousFlux(value, LuminousFluxUnits.Lumens);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminousFluxUnits.Lumens:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminousFluxUnits.Lumens:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the LuminousFlux to string.
     * Note! the default format for LuminousFlux is Lumens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LuminousFlux.
     * @returns The string format of the LuminousFlux.
     */
    toString(toUnit = LuminousFluxUnits.Lumens) {
        switch (toUnit) {
            case LuminousFluxUnits.Lumens:
                return this.Lumens + ` lm`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given LuminousFlux are equals to the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns True if the given LuminousFlux are equal to the current LuminousFlux.
     */
    equals(luminousFlux) {
        return this.value === luminousFlux.BaseValue;
    }
    /**
     * Compare the given LuminousFlux against the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns 0 if they are equal, -1 if the current LuminousFlux is less then other, 1 if the current LuminousFlux is greater then other.
     */
    compareTo(luminousFlux) {
        if (this.value > luminousFlux.BaseValue)
            return 1;
        if (this.value < luminousFlux.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    add(luminousFlux) {
        return new LuminousFlux(this.value + luminousFlux.BaseValue);
    }
    /**
     * Subtract the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    subtract(luminousFlux) {
        return new LuminousFlux(this.value - luminousFlux.BaseValue);
    }
    /**
     * Multiply the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    multiply(luminousFlux) {
        return new LuminousFlux(this.value * luminousFlux.BaseValue);
    }
    /**
     * Divide the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    divide(luminousFlux) {
        return new LuminousFlux(this.value / luminousFlux.BaseValue);
    }
    /**
     * Modulo the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    modulo(luminousFlux) {
        return new LuminousFlux(this.value % luminousFlux.BaseValue);
    }
    /**
     * Pow the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    pow(luminousFlux) {
        return new LuminousFlux(this.value ** luminousFlux.BaseValue);
    }
}
exports.LuminousFlux = LuminousFlux;
//# sourceMappingURL=luminousflux.g.js.map