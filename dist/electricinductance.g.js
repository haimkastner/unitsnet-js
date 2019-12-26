"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricInductanceUnits enumeration */
var ElectricInductanceUnits;
(function (ElectricInductanceUnits) {
    /** */
    ElectricInductanceUnits[ElectricInductanceUnits["Henries"] = 0] = "Henries";
    /** */
    ElectricInductanceUnits[ElectricInductanceUnits["Nanohenries"] = 1] = "Nanohenries";
    /** */
    ElectricInductanceUnits[ElectricInductanceUnits["Microhenries"] = 2] = "Microhenries";
})(ElectricInductanceUnits = exports.ElectricInductanceUnits || (exports.ElectricInductanceUnits = {}));
/** Inductance is a property of an electrical conductor which opposes a change in current. */
class ElectricInductance {
    /**
     * Create a new ElectricInductance.
     * @param value The value.
     * @param fromUnit The ‘ElectricInductance’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.henriesLazy = null;
        this.nanohenriesLazy = null;
        this.microhenriesLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricInductance is Henry.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Henries() {
        if (this.henriesLazy !== null) {
            return this.henriesLazy;
        }
        return this.henriesLazy = this.convertFromBase(ElectricInductanceUnits.Henries);
    }
    /** */
    get Nanohenries() {
        if (this.nanohenriesLazy !== null) {
            return this.nanohenriesLazy;
        }
        return this.nanohenriesLazy = this.convertFromBase(ElectricInductanceUnits.Nanohenries);
    }
    /** */
    get Microhenries() {
        if (this.microhenriesLazy !== null) {
            return this.microhenriesLazy;
        }
        return this.microhenriesLazy = this.convertFromBase(ElectricInductanceUnits.Microhenries);
    }
    /**
     * Create a new ElectricInductance instance from a Henries
     *
     * @param value The unit as Henries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    static FromHenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Henries);
    }
    /**
     * Create a new ElectricInductance instance from a Nanohenries
     *
     * @param value The unit as Nanohenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    static FromNanohenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Nanohenries);
    }
    /**
     * Create a new ElectricInductance instance from a Microhenries
     *
     * @param value The unit as Microhenries to create a new ElectricInductance from.
     * @returns The new ElectricInductance instance.
     */
    static FromMicrohenries(value) {
        return new ElectricInductance(value, ElectricInductanceUnits.Microhenries);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricInductanceUnits.Henries:
                return this.value;
            case ElectricInductanceUnits.Nanohenries:
                return (this.value) / 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricInductanceUnits.Henries:
                return value;
            case ElectricInductanceUnits.Nanohenries:
                return (value) * 1e-9;
            case ElectricInductanceUnits.Microhenries:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricInductance to string.
     * Note! the default format for ElectricInductance is Henries.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricInductance.
     * @returns The string format of the ElectricInductance.
     */
    toString(toUnit = ElectricInductanceUnits.Henries) {
        switch (toUnit) {
            case ElectricInductanceUnits.Henries:
                return this.Henries + ` H`;
            case ElectricInductanceUnits.Nanohenries:
                return this.Nanohenries + ` H`;
            case ElectricInductanceUnits.Microhenries:
                return this.Microhenries + ` H`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricInductance = ElectricInductance;
//# sourceMappingURL=electricinductance.g.js.map