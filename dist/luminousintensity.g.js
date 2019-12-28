"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LuminousIntensityUnits enumeration */
var LuminousIntensityUnits;
(function (LuminousIntensityUnits) {
    /** */
    LuminousIntensityUnits[LuminousIntensityUnits["Candela"] = 0] = "Candela";
})(LuminousIntensityUnits = exports.LuminousIntensityUnits || (exports.LuminousIntensityUnits = {}));
/** In photometry, luminous intensity is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye. */
class LuminousIntensity {
    /**
     * Create a new LuminousIntensity.
     * @param value The value.
     * @param fromUnit The ‘LuminousIntensity’ unit to create from.
     * The default unit is Candela
     */
    constructor(value, fromUnit = LuminousIntensityUnits.Candela) {
        this.candelaLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Candela() {
        if (this.candelaLazy !== null) {
            return this.candelaLazy;
        }
        return this.candelaLazy = this.convertFromBase(LuminousIntensityUnits.Candela);
    }
    /**
     * Create a new LuminousIntensity instance from a Candela
     *
     * @param value The unit as Candela to create a new LuminousIntensity from.
     * @returns The new LuminousIntensity instance.
     */
    static FromCandela(value) {
        return new LuminousIntensity(value, LuminousIntensityUnits.Candela);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminousIntensityUnits.Candela:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminousIntensityUnits.Candela:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the LuminousIntensity to string.
     * Note! the default format for LuminousIntensity is Candela.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LuminousIntensity.
     * @returns The string format of the LuminousIntensity.
     */
    toString(toUnit = LuminousIntensityUnits.Candela) {
        switch (toUnit) {
            case LuminousIntensityUnits.Candela:
                return this.Candela + ` cd`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given LuminousIntensity are equals to the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns True if the given LuminousIntensity are equal to the current LuminousIntensity.
     */
    equals(luminousIntensity) {
        return this.value === luminousIntensity.BaseValue;
    }
    /**
     * Compare the given LuminousIntensity against the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns 0 if they are equal, -1 if the current LuminousIntensity is less then other, 1 if the current LuminousIntensity is greater then other.
     */
    compareTo(luminousIntensity) {
        if (this.value > luminousIntensity.BaseValue)
            return 1;
        if (this.value < luminousIntensity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    add(luminousIntensity) {
        return new LuminousIntensity(this.value + luminousIntensity.BaseValue);
    }
    /**
     * Subtract the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    subtract(luminousIntensity) {
        return new LuminousIntensity(this.value - luminousIntensity.BaseValue);
    }
    /**
     * Multiply the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    multiply(luminousIntensity) {
        return new LuminousIntensity(this.value * luminousIntensity.BaseValue);
    }
    /**
     * Divide the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    divide(luminousIntensity) {
        return new LuminousIntensity(this.value / luminousIntensity.BaseValue);
    }
    /**
     * Modulo the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    modulo(luminousIntensity) {
        return new LuminousIntensity(this.value % luminousIntensity.BaseValue);
    }
    /**
     * Pow the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    pow(luminousIntensity) {
        return new LuminousIntensity(this.value ** luminousIntensity.BaseValue);
    }
}
exports.LuminousIntensity = LuminousIntensity;
//# sourceMappingURL=luminousintensity.g.js.map