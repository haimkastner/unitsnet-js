"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MagneticFieldUnits enumeration */
var MagneticFieldUnits;
(function (MagneticFieldUnits) {
    /** */
    MagneticFieldUnits[MagneticFieldUnits["Teslas"] = 0] = "Teslas";
    /** */
    MagneticFieldUnits[MagneticFieldUnits["Nanoteslas"] = 1] = "Nanoteslas";
    /** */
    MagneticFieldUnits[MagneticFieldUnits["Microteslas"] = 2] = "Microteslas";
})(MagneticFieldUnits = exports.MagneticFieldUnits || (exports.MagneticFieldUnits = {}));
/** A magnetic field is a force field that is created by moving electric charges (electric currents) and magnetic dipoles, and exerts a force on other nearby moving charges and magnetic dipoles. */
class MagneticField {
    /**
     * Create a new MagneticField.
     * @param value The value.
     * @param fromUnit The ‘MagneticField’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.teslasLazy = null;
        this.nanoteslasLazy = null;
        this.microteslasLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MagneticField is Tesla.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Teslas() {
        if (this.teslasLazy !== null) {
            return this.teslasLazy;
        }
        return this.teslasLazy = this.convertFromBase(MagneticFieldUnits.Teslas);
    }
    /** */
    get Nanoteslas() {
        if (this.nanoteslasLazy !== null) {
            return this.nanoteslasLazy;
        }
        return this.nanoteslasLazy = this.convertFromBase(MagneticFieldUnits.Nanoteslas);
    }
    /** */
    get Microteslas() {
        if (this.microteslasLazy !== null) {
            return this.microteslasLazy;
        }
        return this.microteslasLazy = this.convertFromBase(MagneticFieldUnits.Microteslas);
    }
    /**
     * Create a new MagneticField instance from a Teslas
     *
     * @param value The unit as Teslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    static FromTeslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Teslas);
    }
    /**
     * Create a new MagneticField instance from a Nanoteslas
     *
     * @param value The unit as Nanoteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    static FromNanoteslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Nanoteslas);
    }
    /**
     * Create a new MagneticField instance from a Microteslas
     *
     * @param value The unit as Microteslas to create a new MagneticField from.
     * @returns The new MagneticField instance.
     */
    static FromMicroteslas(value) {
        return new MagneticField(value, MagneticFieldUnits.Microteslas);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagneticFieldUnits.Teslas:
                return this.value;
            case MagneticFieldUnits.Nanoteslas:
                return (this.value) / 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MagneticFieldUnits.Teslas:
                return value;
            case MagneticFieldUnits.Nanoteslas:
                return (value) * 1e-9;
            case MagneticFieldUnits.Microteslas:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MagneticField to string.
     * Note! the default format for MagneticField is Teslas.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MagneticField.
     * @returns The string format of the MagneticField.
     */
    toString(toUnit = MagneticFieldUnits.Teslas) {
        switch (toUnit) {
            case MagneticFieldUnits.Teslas:
                return this.Teslas + ` T`;
            case MagneticFieldUnits.Nanoteslas:
                return this.Nanoteslas + ` T`;
            case MagneticFieldUnits.Microteslas:
                return this.Microteslas + ` T`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MagneticField = MagneticField;
//# sourceMappingURL=magneticfield.g.js.map