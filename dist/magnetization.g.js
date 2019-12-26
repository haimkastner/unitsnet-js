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
     */
    constructor(value, fromUnit) {
        this.amperespermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Magnetization is AmperePerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.Magnetization = Magnetization;
//# sourceMappingURL=magnetization.g.js.map