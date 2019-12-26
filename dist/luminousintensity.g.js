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
     */
    constructor(value, fromUnit) {
        this.candelaLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.LuminousIntensity = LuminousIntensity;
//# sourceMappingURL=luminousintensity.g.js.map