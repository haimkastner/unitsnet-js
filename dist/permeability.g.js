"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** PermeabilityUnits enumeration */
var PermeabilityUnits;
(function (PermeabilityUnits) {
    /** */
    PermeabilityUnits[PermeabilityUnits["HenriesPerMeter"] = 0] = "HenriesPerMeter";
})(PermeabilityUnits = exports.PermeabilityUnits || (exports.PermeabilityUnits = {}));
/** In electromagnetism, permeability is the measure of the ability of a material to support the formation of a magnetic field within itself. */
class Permeability {
    /**
     * Create a new Permeability.
     * @param value The value.
     * @param fromUnit The ‘Permeability’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.henriespermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Permeability is HenryPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get HenriesPerMeter() {
        if (this.henriespermeterLazy !== null) {
            return this.henriespermeterLazy;
        }
        return this.henriespermeterLazy = this.convertFromBase(PermeabilityUnits.HenriesPerMeter);
    }
    /**
     * Create a new Permeability instance from a HenriesPerMeter
     *
     * @param value The unit as HenriesPerMeter to create a new Permeability from.
     * @returns The new Permeability instance.
     */
    static FromHenriesPerMeter(value) {
        return new Permeability(value, PermeabilityUnits.HenriesPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PermeabilityUnits.HenriesPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PermeabilityUnits.HenriesPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Permeability to string.
     * Note! the default format for Permeability is HenriesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Permeability.
     * @returns The string format of the Permeability.
     */
    toString(toUnit = PermeabilityUnits.HenriesPerMeter) {
        switch (toUnit) {
            case PermeabilityUnits.HenriesPerMeter:
                return this.HenriesPerMeter + ` H/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Permeability = Permeability;
//# sourceMappingURL=permeability.g.js.map