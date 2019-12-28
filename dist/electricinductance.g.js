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
     * The default unit is Henries
     */
    constructor(value, fromUnit = ElectricInductanceUnits.Henries) {
        this.henriesLazy = null;
        this.nanohenriesLazy = null;
        this.microhenriesLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricInductance is Henries.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
                return this.Nanohenries + ` `;
            case ElectricInductanceUnits.Microhenries:
                return this.Microhenries + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ElectricInductance are equals to the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns True if the given ElectricInductance are equal to the current ElectricInductance.
     */
    equals(electricInductance) {
        return this.value === electricInductance.BaseValue;
    }
    /**
     * Compare the given ElectricInductance against the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns 0 if they are equal, -1 if the current ElectricInductance is less then other, 1 if the current ElectricInductance is greater then other.
     */
    compareTo(electricInductance) {
        if (this.value > electricInductance.BaseValue)
            return 1;
        if (this.value < electricInductance.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    add(electricInductance) {
        return new ElectricInductance(this.value + electricInductance.BaseValue);
    }
    /**
     * Subtract the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    subtract(electricInductance) {
        return new ElectricInductance(this.value - electricInductance.BaseValue);
    }
    /**
     * Multiply the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    multiply(electricInductance) {
        return new ElectricInductance(this.value * electricInductance.BaseValue);
    }
    /**
     * Divide the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    divide(electricInductance) {
        return new ElectricInductance(this.value / electricInductance.BaseValue);
    }
    /**
     * Modulo the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    modulo(electricInductance) {
        return new ElectricInductance(this.value % electricInductance.BaseValue);
    }
    /**
     * Pow the given ElectricInductance with the current ElectricInductance.
     * @param electricInductance The other ElectricInductance.
     * @returns A new ElectricInductance instance with the results.
     */
    pow(electricInductance) {
        return new ElectricInductance(this.value ** electricInductance.BaseValue);
    }
}
exports.ElectricInductance = ElectricInductance;
//# sourceMappingURL=electricinductance.g.js.map