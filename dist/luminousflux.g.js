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
     */
    constructor(value, fromUnit) {
        this.lumensLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of LuminousFlux is Lumen.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.LuminousFlux = LuminousFlux;
//# sourceMappingURL=luminousflux.g.js.map