"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricCurrentDensityUnits enumeration */
var ElectricCurrentDensityUnits;
(function (ElectricCurrentDensityUnits) {
    /** */
    ElectricCurrentDensityUnits[ElectricCurrentDensityUnits["AmperesPerSquareMeter"] = 0] = "AmperesPerSquareMeter";
    /** */
    ElectricCurrentDensityUnits[ElectricCurrentDensityUnits["AmperesPerSquareInch"] = 1] = "AmperesPerSquareInch";
    /** */
    ElectricCurrentDensityUnits[ElectricCurrentDensityUnits["AmperesPerSquareFoot"] = 2] = "AmperesPerSquareFoot";
})(ElectricCurrentDensityUnits = exports.ElectricCurrentDensityUnits || (exports.ElectricCurrentDensityUnits = {}));
/** In electromagnetism, current density is the electric current per unit area of cross section. */
class ElectricCurrentDensity {
    /**
     * Create a new ElectricCurrentDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricCurrentDensity’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.amperespersquaremeterLazy = null;
        this.amperespersquareinchLazy = null;
        this.amperespersquarefootLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricCurrentDensity is AmperePerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get AmperesPerSquareMeter() {
        if (this.amperespersquaremeterLazy !== null) {
            return this.amperespersquaremeterLazy;
        }
        return this.amperespersquaremeterLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }
    /** */
    get AmperesPerSquareInch() {
        if (this.amperespersquareinchLazy !== null) {
            return this.amperespersquareinchLazy;
        }
        return this.amperespersquareinchLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }
    /** */
    get AmperesPerSquareFoot() {
        if (this.amperespersquarefootLazy !== null) {
            return this.amperespersquarefootLazy;
        }
        return this.amperespersquarefootLazy = this.convertFromBase(ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }
    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareMeter
     *
     * @param value The unit as AmperesPerSquareMeter to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    static FromAmperesPerSquareMeter(value) {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareMeter);
    }
    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareInch
     *
     * @param value The unit as AmperesPerSquareInch to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    static FromAmperesPerSquareInch(value) {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareInch);
    }
    /**
     * Create a new ElectricCurrentDensity instance from a AmperesPerSquareFoot
     *
     * @param value The unit as AmperesPerSquareFoot to create a new ElectricCurrentDensity from.
     * @returns The new ElectricCurrentDensity instance.
     */
    static FromAmperesPerSquareFoot(value) {
        return new ElectricCurrentDensity(value, ElectricCurrentDensityUnits.AmperesPerSquareFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.value / 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.value / 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return value;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return value * 1.5500031000062000e3;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return value * 1.0763910416709722e1;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricCurrentDensity to string.
     * Note! the default format for ElectricCurrentDensity is AmperesPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricCurrentDensity.
     * @returns The string format of the ElectricCurrentDensity.
     */
    toString(toUnit = ElectricCurrentDensityUnits.AmperesPerSquareMeter) {
        switch (toUnit) {
            case ElectricCurrentDensityUnits.AmperesPerSquareMeter:
                return this.AmperesPerSquareMeter + ` A/m²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareInch:
                return this.AmperesPerSquareInch + ` A/in²`;
            case ElectricCurrentDensityUnits.AmperesPerSquareFoot:
                return this.AmperesPerSquareFoot + ` A/ft²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricCurrentDensity = ElectricCurrentDensity;
//# sourceMappingURL=electriccurrentdensity.g.js.map