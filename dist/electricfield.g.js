"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricFieldUnits enumeration */
var ElectricFieldUnits;
(function (ElectricFieldUnits) {
    /** */
    ElectricFieldUnits[ElectricFieldUnits["VoltsPerMeter"] = 0] = "VoltsPerMeter";
})(ElectricFieldUnits = exports.ElectricFieldUnits || (exports.ElectricFieldUnits = {}));
/** An electric field is a force field that surrounds electric charges that attracts or repels other electric charges. */
class ElectricField {
    /**
     * Create a new ElectricField.
     * @param value The value.
     * @param fromUnit The ‘ElectricField’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.voltspermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricField is VoltPerMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get VoltsPerMeter() {
        if (this.voltspermeterLazy !== null) {
            return this.voltspermeterLazy;
        }
        return this.voltspermeterLazy = this.convertFromBase(ElectricFieldUnits.VoltsPerMeter);
    }
    /**
     * Create a new ElectricField instance from a VoltsPerMeter
     *
     * @param value The unit as VoltsPerMeter to create a new ElectricField from.
     * @returns The new ElectricField instance.
     */
    static FromVoltsPerMeter(value) {
        return new ElectricField(value, ElectricFieldUnits.VoltsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricFieldUnits.VoltsPerMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricFieldUnits.VoltsPerMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricField to string.
     * Note! the default format for ElectricField is VoltsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricField.
     * @returns The string format of the ElectricField.
     */
    toString(toUnit = ElectricFieldUnits.VoltsPerMeter) {
        switch (toUnit) {
            case ElectricFieldUnits.VoltsPerMeter:
                return this.VoltsPerMeter + ` V/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricField = ElectricField;
//# sourceMappingURL=electricfield.g.js.map