"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricChargeDensityUnits enumeration */
var ElectricChargeDensityUnits;
(function (ElectricChargeDensityUnits) {
    /** */
    ElectricChargeDensityUnits[ElectricChargeDensityUnits["CoulombsPerCubicMeter"] = 0] = "CoulombsPerCubicMeter";
})(ElectricChargeDensityUnits = exports.ElectricChargeDensityUnits || (exports.ElectricChargeDensityUnits = {}));
/** In electromagnetism, charge density is a measure of the amount of electric charge per volume. */
class ElectricChargeDensity {
    /**
     * Create a new ElectricChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricChargeDensity’ unit to create from.
     * The default unit is CoulombsPerCubicMeter
     */
    constructor(value, fromUnit = ElectricChargeDensityUnits.CoulombsPerCubicMeter) {
        this.coulombspercubicmeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricChargeDensity is CoulombsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get CoulombsPerCubicMeter() {
        if (this.coulombspercubicmeterLazy !== null) {
            return this.coulombspercubicmeterLazy;
        }
        return this.coulombspercubicmeterLazy = this.convertFromBase(ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }
    /**
     * Create a new ElectricChargeDensity instance from a CoulombsPerCubicMeter
     *
     * @param value The unit as CoulombsPerCubicMeter to create a new ElectricChargeDensity from.
     * @returns The new ElectricChargeDensity instance.
     */
    static FromCoulombsPerCubicMeter(value) {
        return new ElectricChargeDensity(value, ElectricChargeDensityUnits.CoulombsPerCubicMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricChargeDensity to string.
     * Note! the default format for ElectricChargeDensity is CoulombsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricChargeDensity.
     * @returns The string format of the ElectricChargeDensity.
     */
    toString(toUnit = ElectricChargeDensityUnits.CoulombsPerCubicMeter) {
        switch (toUnit) {
            case ElectricChargeDensityUnits.CoulombsPerCubicMeter:
                return this.CoulombsPerCubicMeter + ` C/m³`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ElectricChargeDensity are equals to the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns True if the given ElectricChargeDensity are equal to the current ElectricChargeDensity.
     */
    equals(electricChargeDensity) {
        return this.value === electricChargeDensity.BaseValue;
    }
    /**
     * Compare the given ElectricChargeDensity against the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns 0 if they are equal, -1 if the current ElectricChargeDensity is less then other, 1 if the current ElectricChargeDensity is greater then other.
     */
    compareTo(electricChargeDensity) {
        if (this.value > electricChargeDensity.BaseValue)
            return 1;
        if (this.value < electricChargeDensity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    add(electricChargeDensity) {
        return new ElectricChargeDensity(this.value + electricChargeDensity.BaseValue);
    }
    /**
     * Subtract the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    subtract(electricChargeDensity) {
        return new ElectricChargeDensity(this.value - electricChargeDensity.BaseValue);
    }
    /**
     * Multiply the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    multiply(electricChargeDensity) {
        return new ElectricChargeDensity(this.value * electricChargeDensity.BaseValue);
    }
    /**
     * Divide the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    divide(electricChargeDensity) {
        return new ElectricChargeDensity(this.value / electricChargeDensity.BaseValue);
    }
    /**
     * Modulo the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    modulo(electricChargeDensity) {
        return new ElectricChargeDensity(this.value % electricChargeDensity.BaseValue);
    }
    /**
     * Pow the given ElectricChargeDensity with the current ElectricChargeDensity.
     * @param electricChargeDensity The other ElectricChargeDensity.
     * @returns A new ElectricChargeDensity instance with the results.
     */
    pow(electricChargeDensity) {
        return new ElectricChargeDensity(this.value ** electricChargeDensity.BaseValue);
    }
}
exports.ElectricChargeDensity = ElectricChargeDensity;
//# sourceMappingURL=electricchargedensity.g.js.map