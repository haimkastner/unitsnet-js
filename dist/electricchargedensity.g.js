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
     */
    constructor(value, fromUnit) {
        this.coulombspercubicmeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricChargeDensity is CoulombPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.ElectricChargeDensity = ElectricChargeDensity;
//# sourceMappingURL=electricchargedensity.g.js.map