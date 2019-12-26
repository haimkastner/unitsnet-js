"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricAdmittanceUnits enumeration */
var ElectricAdmittanceUnits;
(function (ElectricAdmittanceUnits) {
    /** */
    ElectricAdmittanceUnits[ElectricAdmittanceUnits["Siemens"] = 0] = "Siemens";
    /** */
    ElectricAdmittanceUnits[ElectricAdmittanceUnits["Nanosiemens"] = 1] = "Nanosiemens";
    /** */
    ElectricAdmittanceUnits[ElectricAdmittanceUnits["Microsiemens"] = 2] = "Microsiemens";
})(ElectricAdmittanceUnits = exports.ElectricAdmittanceUnits || (exports.ElectricAdmittanceUnits = {}));
/** Electric admittance is a measure of how easily a circuit or device will allow a current to flow. It is defined as the inverse of impedance. The SI unit of admittance is the siemens (symbol S). */
class ElectricAdmittance {
    /**
     * Create a new ElectricAdmittance.
     * @param value The value.
     * @param fromUnit The ‘ElectricAdmittance’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.siemensLazy = null;
        this.nanosiemensLazy = null;
        this.microsiemensLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricAdmittance is Siemens.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Siemens() {
        if (this.siemensLazy !== null) {
            return this.siemensLazy;
        }
        return this.siemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Siemens);
    }
    /** */
    get Nanosiemens() {
        if (this.nanosiemensLazy !== null) {
            return this.nanosiemensLazy;
        }
        return this.nanosiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Nanosiemens);
    }
    /** */
    get Microsiemens() {
        if (this.microsiemensLazy !== null) {
            return this.microsiemensLazy;
        }
        return this.microsiemensLazy = this.convertFromBase(ElectricAdmittanceUnits.Microsiemens);
    }
    /**
     * Create a new ElectricAdmittance instance from a Siemens
     *
     * @param value The unit as Siemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    static FromSiemens(value) {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Siemens);
    }
    /**
     * Create a new ElectricAdmittance instance from a Nanosiemens
     *
     * @param value The unit as Nanosiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    static FromNanosiemens(value) {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Nanosiemens);
    }
    /**
     * Create a new ElectricAdmittance instance from a Microsiemens
     *
     * @param value The unit as Microsiemens to create a new ElectricAdmittance from.
     * @returns The new ElectricAdmittance instance.
     */
    static FromMicrosiemens(value) {
        return new ElectricAdmittance(value, ElectricAdmittanceUnits.Microsiemens);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens:
                return this.value;
            case ElectricAdmittanceUnits.Nanosiemens:
                return (this.value) / 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricAdmittanceUnits.Siemens:
                return value;
            case ElectricAdmittanceUnits.Nanosiemens:
                return (value) * 1e-9;
            case ElectricAdmittanceUnits.Microsiemens:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricAdmittance to string.
     * Note! the default format for ElectricAdmittance is Siemens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricAdmittance.
     * @returns The string format of the ElectricAdmittance.
     */
    toString(toUnit = ElectricAdmittanceUnits.Siemens) {
        switch (toUnit) {
            case ElectricAdmittanceUnits.Siemens:
                return this.Siemens + ` S`;
            case ElectricAdmittanceUnits.Nanosiemens:
                return this.Nanosiemens + ` S`;
            case ElectricAdmittanceUnits.Microsiemens:
                return this.Microsiemens + ` S`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricAdmittance = ElectricAdmittance;
//# sourceMappingURL=electricadmittance.g.js.map