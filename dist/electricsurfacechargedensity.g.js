"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricSurfaceChargeDensityUnits enumeration */
var ElectricSurfaceChargeDensityUnits;
(function (ElectricSurfaceChargeDensityUnits) {
    /** */
    ElectricSurfaceChargeDensityUnits[ElectricSurfaceChargeDensityUnits["CoulombsPerSquareMeter"] = 0] = "CoulombsPerSquareMeter";
    /** */
    ElectricSurfaceChargeDensityUnits[ElectricSurfaceChargeDensityUnits["CoulombsPerSquareCentimeter"] = 1] = "CoulombsPerSquareCentimeter";
    /** */
    ElectricSurfaceChargeDensityUnits[ElectricSurfaceChargeDensityUnits["CoulombsPerSquareInch"] = 2] = "CoulombsPerSquareInch";
})(ElectricSurfaceChargeDensityUnits = exports.ElectricSurfaceChargeDensityUnits || (exports.ElectricSurfaceChargeDensityUnits = {}));
/** In electromagnetism, surface charge density is a measure of the amount of electric charge per surface area. */
class ElectricSurfaceChargeDensity {
    /**
     * Create a new ElectricSurfaceChargeDensity.
     * @param value The value.
     * @param fromUnit The ‘ElectricSurfaceChargeDensity’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.coulombspersquaremeterLazy = null;
        this.coulombspersquarecentimeterLazy = null;
        this.coulombspersquareinchLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricSurfaceChargeDensity is CoulombPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get CoulombsPerSquareMeter() {
        if (this.coulombspersquaremeterLazy !== null) {
            return this.coulombspersquaremeterLazy;
        }
        return this.coulombspersquaremeterLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }
    /** */
    get CoulombsPerSquareCentimeter() {
        if (this.coulombspersquarecentimeterLazy !== null) {
            return this.coulombspersquarecentimeterLazy;
        }
        return this.coulombspersquarecentimeterLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }
    /** */
    get CoulombsPerSquareInch() {
        if (this.coulombspersquareinchLazy !== null) {
            return this.coulombspersquareinchLazy;
        }
        return this.coulombspersquareinchLazy = this.convertFromBase(ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }
    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareMeter
     *
     * @param value The unit as CoulombsPerSquareMeter to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    static FromCoulombsPerSquareMeter(value) {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter);
    }
    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareCentimeter
     *
     * @param value The unit as CoulombsPerSquareCentimeter to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    static FromCoulombsPerSquareCentimeter(value) {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter);
    }
    /**
     * Create a new ElectricSurfaceChargeDensity instance from a CoulombsPerSquareInch
     *
     * @param value The unit as CoulombsPerSquareInch to create a new ElectricSurfaceChargeDensity from.
     * @returns The new ElectricSurfaceChargeDensity instance.
     */
    static FromCoulombsPerSquareInch(value) {
        return new ElectricSurfaceChargeDensity(value, ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return this.value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return this.value / 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.value / 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return value;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return value * 1.0e4;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return value * 1.5500031000062000e3;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricSurfaceChargeDensity to string.
     * Note! the default format for ElectricSurfaceChargeDensity is CoulombsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricSurfaceChargeDensity.
     * @returns The string format of the ElectricSurfaceChargeDensity.
     */
    toString(toUnit = ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter) {
        switch (toUnit) {
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareMeter:
                return this.CoulombsPerSquareMeter + ` C/m²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareCentimeter:
                return this.CoulombsPerSquareCentimeter + ` C/cm²`;
            case ElectricSurfaceChargeDensityUnits.CoulombsPerSquareInch:
                return this.CoulombsPerSquareInch + ` C/in²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricSurfaceChargeDensity = ElectricSurfaceChargeDensity;
//# sourceMappingURL=electricsurfacechargedensity.g.js.map