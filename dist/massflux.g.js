"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MassFluxUnits enumeration */
var MassFluxUnits;
(function (MassFluxUnits) {
    /** */
    MassFluxUnits[MassFluxUnits["GramsPerSecondPerSquareMeter"] = 0] = "GramsPerSecondPerSquareMeter";
    /** */
    MassFluxUnits[MassFluxUnits["KilogramsPerSecondPerSquareMeter"] = 1] = "KilogramsPerSecondPerSquareMeter";
})(MassFluxUnits = exports.MassFluxUnits || (exports.MassFluxUnits = {}));
/** Mass flux is the mass flow rate per unit area. */
class MassFlux {
    /**
     * Create a new MassFlux.
     * @param value The value.
     * @param fromUnit The ‘MassFlux’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.gramspersecondpersquaremeterLazy = null;
        this.kilogramspersecondpersquaremeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MassFlux is KilogramPerSecondPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerSecondPerSquareMeter() {
        if (this.gramspersecondpersquaremeterLazy !== null) {
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    /** */
    get KilogramsPerSecondPerSquareMeter() {
        if (this.kilogramspersecondpersquaremeterLazy !== null) {
            return this.kilogramspersecondpersquaremeterLazy;
        }
        return this.kilogramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }
    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareMeter
     *
     * @param value The unit as GramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    static FromGramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareMeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    static FromKilogramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value * 1e3;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return (this.value * 1e3) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return value / 1e3;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return (value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MassFlux to string.
     * Note! the default format for MassFlux is KilogramsPerSecondPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFlux.
     * @returns The string format of the MassFlux.
     */
    toString(toUnit = MassFluxUnits.KilogramsPerSecondPerSquareMeter) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return this.KilogramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassFlux = MassFlux;
//# sourceMappingURL=massflux.g.js.map