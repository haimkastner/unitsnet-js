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
     * The default unit is HenriesPerMeter
     */
    constructor(value, fromUnit = PermeabilityUnits.HenriesPerMeter) {
        this.henriespermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Permeability is HenriesPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given Permeability are equals to the current Permeability.
     * @param permeability The other Permeability.
     * @returns True if the given Permeability are equal to the current Permeability.
     */
    equals(permeability) {
        return this.value === permeability.BaseValue;
    }
    /**
     * Compare the given Permeability against the current Permeability.
     * @param permeability The other Permeability.
     * @returns 0 if they are equal, -1 if the current Permeability is less then other, 1 if the current Permeability is greater then other.
     */
    compareTo(permeability) {
        if (this.value > permeability.BaseValue)
            return 1;
        if (this.value < permeability.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    add(permeability) {
        return new Permeability(this.value + permeability.BaseValue);
    }
    /**
     * Subtract the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    subtract(permeability) {
        return new Permeability(this.value - permeability.BaseValue);
    }
    /**
     * Multiply the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    multiply(permeability) {
        return new Permeability(this.value * permeability.BaseValue);
    }
    /**
     * Divide the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    divide(permeability) {
        return new Permeability(this.value / permeability.BaseValue);
    }
    /**
     * Modulo the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    modulo(permeability) {
        return new Permeability(this.value % permeability.BaseValue);
    }
    /**
     * Pow the given Permeability with the current Permeability.
     * @param permeability The other Permeability.
     * @returns A new Permeability instance with the results.
     */
    pow(permeability) {
        return new Permeability(this.value ** permeability.BaseValue);
    }
}
exports.Permeability = Permeability;
//# sourceMappingURL=permeability.g.js.map