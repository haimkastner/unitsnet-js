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
     * The default unit is VoltsPerMeter
     */
    constructor(value, fromUnit = ElectricFieldUnits.VoltsPerMeter) {
        this.voltspermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricField is VoltsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given ElectricField are equals to the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns True if the given ElectricField are equal to the current ElectricField.
     */
    equals(electricField) {
        return this.value === electricField.BaseValue;
    }
    /**
     * Compare the given ElectricField against the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns 0 if they are equal, -1 if the current ElectricField is less then other, 1 if the current ElectricField is greater then other.
     */
    compareTo(electricField) {
        if (this.value > electricField.BaseValue)
            return 1;
        if (this.value < electricField.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    add(electricField) {
        return new ElectricField(this.value + electricField.BaseValue);
    }
    /**
     * Subtract the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    subtract(electricField) {
        return new ElectricField(this.value - electricField.BaseValue);
    }
    /**
     * Multiply the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    multiply(electricField) {
        return new ElectricField(this.value * electricField.BaseValue);
    }
    /**
     * Divide the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    divide(electricField) {
        return new ElectricField(this.value / electricField.BaseValue);
    }
    /**
     * Modulo the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    modulo(electricField) {
        return new ElectricField(this.value % electricField.BaseValue);
    }
    /**
     * Pow the given ElectricField with the current ElectricField.
     * @param electricField The other ElectricField.
     * @returns A new ElectricField instance with the results.
     */
    pow(electricField) {
        return new ElectricField(this.value ** electricField.BaseValue);
    }
}
exports.ElectricField = ElectricField;
//# sourceMappingURL=electricfield.g.js.map