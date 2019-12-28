"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** AreaDensityUnits enumeration */
var AreaDensityUnits;
(function (AreaDensityUnits) {
    /** */
    AreaDensityUnits[AreaDensityUnits["KilogramsPerSquareMeter"] = 0] = "KilogramsPerSquareMeter";
})(AreaDensityUnits = exports.AreaDensityUnits || (exports.AreaDensityUnits = {}));
/** The area density of a two-dimensional object is calculated as the mass per unit area. */
class AreaDensity {
    /**
     * Create a new AreaDensity.
     * @param value The value.
     * @param fromUnit The ‘AreaDensity’ unit to create from.
     * The default unit is KilogramsPerSquareMeter
     */
    constructor(value, fromUnit = AreaDensityUnits.KilogramsPerSquareMeter) {
        this.kilogramspersquaremeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of AreaDensity is KilogramsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get KilogramsPerSquareMeter() {
        if (this.kilogramspersquaremeterLazy !== null) {
            return this.kilogramspersquaremeterLazy;
        }
        return this.kilogramspersquaremeterLazy = this.convertFromBase(AreaDensityUnits.KilogramsPerSquareMeter);
    }
    /**
     * Create a new AreaDensity instance from a KilogramsPerSquareMeter
     *
     * @param value The unit as KilogramsPerSquareMeter to create a new AreaDensity from.
     * @returns The new AreaDensity instance.
     */
    static FromKilogramsPerSquareMeter(value) {
        return new AreaDensity(value, AreaDensityUnits.KilogramsPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the AreaDensity to string.
     * Note! the default format for AreaDensity is KilogramsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AreaDensity.
     * @returns The string format of the AreaDensity.
     */
    toString(toUnit = AreaDensityUnits.KilogramsPerSquareMeter) {
        switch (toUnit) {
            case AreaDensityUnits.KilogramsPerSquareMeter:
                return this.KilogramsPerSquareMeter + ` kg/m²`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given AreaDensity are equals to the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns True if the given AreaDensity are equal to the current AreaDensity.
     */
    equals(areaDensity) {
        return this.value === areaDensity.BaseValue;
    }
    /**
     * Compare the given AreaDensity against the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns 0 if they are equal, -1 if the current AreaDensity is less then other, 1 if the current AreaDensity is greater then other.
     */
    compareTo(areaDensity) {
        if (this.value > areaDensity.BaseValue)
            return 1;
        if (this.value < areaDensity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    add(areaDensity) {
        return new AreaDensity(this.value + areaDensity.BaseValue);
    }
    /**
     * Subtract the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    subtract(areaDensity) {
        return new AreaDensity(this.value - areaDensity.BaseValue);
    }
    /**
     * Multiply the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    multiply(areaDensity) {
        return new AreaDensity(this.value * areaDensity.BaseValue);
    }
    /**
     * Divide the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    divide(areaDensity) {
        return new AreaDensity(this.value / areaDensity.BaseValue);
    }
    /**
     * Modulo the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    modulo(areaDensity) {
        return new AreaDensity(this.value % areaDensity.BaseValue);
    }
    /**
     * Pow the given AreaDensity with the current AreaDensity.
     * @param areaDensity The other AreaDensity.
     * @returns A new AreaDensity instance with the results.
     */
    pow(areaDensity) {
        return new AreaDensity(this.value ** areaDensity.BaseValue);
    }
}
exports.AreaDensity = AreaDensity;
//# sourceMappingURL=areadensity.g.js.map