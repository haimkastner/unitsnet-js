"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** IlluminanceUnits enumeration */
var IlluminanceUnits;
(function (IlluminanceUnits) {
    /** */
    IlluminanceUnits[IlluminanceUnits["Lux"] = 0] = "Lux";
    /** */
    IlluminanceUnits[IlluminanceUnits["Kilolux"] = 1] = "Kilolux";
    /** */
    IlluminanceUnits[IlluminanceUnits["Megalux"] = 2] = "Megalux";
})(IlluminanceUnits = exports.IlluminanceUnits || (exports.IlluminanceUnits = {}));
/** In photometry, illuminance is the total luminous flux incident on a surface, per unit area. */
class Illuminance {
    /**
     * Create a new Illuminance.
     * @param value The value.
     * @param fromUnit The ‘Illuminance’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.luxLazy = null;
        this.kiloluxLazy = null;
        this.megaluxLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Illuminance is Lux.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Lux() {
        if (this.luxLazy !== null) {
            return this.luxLazy;
        }
        return this.luxLazy = this.convertFromBase(IlluminanceUnits.Lux);
    }
    /** */
    get Kilolux() {
        if (this.kiloluxLazy !== null) {
            return this.kiloluxLazy;
        }
        return this.kiloluxLazy = this.convertFromBase(IlluminanceUnits.Kilolux);
    }
    /** */
    get Megalux() {
        if (this.megaluxLazy !== null) {
            return this.megaluxLazy;
        }
        return this.megaluxLazy = this.convertFromBase(IlluminanceUnits.Megalux);
    }
    /**
     * Create a new Illuminance instance from a Lux
     *
     * @param value The unit as Lux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    static FromLux(value) {
        return new Illuminance(value, IlluminanceUnits.Lux);
    }
    /**
     * Create a new Illuminance instance from a Kilolux
     *
     * @param value The unit as Kilolux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    static FromKilolux(value) {
        return new Illuminance(value, IlluminanceUnits.Kilolux);
    }
    /**
     * Create a new Illuminance instance from a Megalux
     *
     * @param value The unit as Megalux to create a new Illuminance from.
     * @returns The new Illuminance instance.
     */
    static FromMegalux(value) {
        return new Illuminance(value, IlluminanceUnits.Megalux);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IlluminanceUnits.Lux:
                return this.value;
            case IlluminanceUnits.Kilolux:
                return (this.value) / 1000;
            case IlluminanceUnits.Megalux:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case IlluminanceUnits.Lux:
                return value;
            case IlluminanceUnits.Kilolux:
                return (value) * 1000;
            case IlluminanceUnits.Megalux:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Illuminance to string.
     * Note! the default format for Illuminance is Lux.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Illuminance.
     * @returns The string format of the Illuminance.
     */
    toString(toUnit = IlluminanceUnits.Lux) {
        switch (toUnit) {
            case IlluminanceUnits.Lux:
                return this.Lux + ` lx`;
            case IlluminanceUnits.Kilolux:
                return this.Kilolux + ` lx`;
            case IlluminanceUnits.Megalux:
                return this.Megalux + ` lx`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Illuminance = Illuminance;
//# sourceMappingURL=illuminance.g.js.map