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
     */
    constructor(value, fromUnit) {
        this.kilogramspersquaremeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of AreaDensity is KilogramPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.AreaDensity = AreaDensity;
//# sourceMappingURL=areadensity.g.js.map