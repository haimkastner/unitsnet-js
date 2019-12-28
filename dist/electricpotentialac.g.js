"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricPotentialAcUnits enumeration */
var ElectricPotentialAcUnits;
(function (ElectricPotentialAcUnits) {
    /** */
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["VoltsAc"] = 0] = "VoltsAc";
    /** */
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["MicrovoltsAc"] = 1] = "MicrovoltsAc";
    /** */
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["KilovoltsAc"] = 2] = "KilovoltsAc";
    /** */
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["MegavoltsAc"] = 3] = "MegavoltsAc";
})(ElectricPotentialAcUnits = exports.ElectricPotentialAcUnits || (exports.ElectricPotentialAcUnits = {}));
/** The Electric Potential of a system known to use Alternating Current. */
class ElectricPotentialAc {
    /**
     * Create a new ElectricPotentialAc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialAc’ unit to create from.
     * The default unit is VoltsAc
     */
    constructor(value, fromUnit = ElectricPotentialAcUnits.VoltsAc) {
        this.voltsacLazy = null;
        this.microvoltsacLazy = null;
        this.kilovoltsacLazy = null;
        this.megavoltsacLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricPotentialAc is VoltsAc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get VoltsAc() {
        if (this.voltsacLazy !== null) {
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }
    /** */
    get MicrovoltsAc() {
        if (this.microvoltsacLazy !== null) {
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltsAc);
    }
    /** */
    get KilovoltsAc() {
        if (this.kilovoltsacLazy !== null) {
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltsAc);
    }
    /** */
    get MegavoltsAc() {
        if (this.megavoltsacLazy !== null) {
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltsAc);
    }
    /**
     * Create a new ElectricPotentialAc instance from a VoltsAc
     *
     * @param value The unit as VoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromVoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }
    /**
     * Create a new ElectricPotentialAc instance from a MicrovoltsAc
     *
     * @param value The unit as MicrovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromMicrovoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltsAc);
    }
    /**
     * Create a new ElectricPotentialAc instance from a KilovoltsAc
     *
     * @param value The unit as KilovoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromKilovoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltsAc);
    }
    /**
     * Create a new ElectricPotentialAc instance from a MegavoltsAc
     *
     * @param value The unit as MegavoltsAc to create a new ElectricPotentialAc from.
     * @returns The new ElectricPotentialAc instance.
     */
    static FromMegavoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltsAc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricPotentialAc to string.
     * Note! the default format for ElectricPotentialAc is VoltsAc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialAc.
     * @returns The string format of the ElectricPotentialAc.
     */
    toString(toUnit = ElectricPotentialAcUnits.VoltsAc) {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return this.VoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return this.MicrovoltsAc + ` `;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return this.KilovoltsAc + ` `;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return this.MegavoltsAc + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ElectricPotentialAc are equals to the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns True if the given ElectricPotentialAc are equal to the current ElectricPotentialAc.
     */
    equals(electricPotentialAc) {
        return this.value === electricPotentialAc.BaseValue;
    }
    /**
     * Compare the given ElectricPotentialAc against the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialAc is less then other, 1 if the current ElectricPotentialAc is greater then other.
     */
    compareTo(electricPotentialAc) {
        if (this.value > electricPotentialAc.BaseValue)
            return 1;
        if (this.value < electricPotentialAc.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    add(electricPotentialAc) {
        return new ElectricPotentialAc(this.value + electricPotentialAc.BaseValue);
    }
    /**
     * Subtract the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    subtract(electricPotentialAc) {
        return new ElectricPotentialAc(this.value - electricPotentialAc.BaseValue);
    }
    /**
     * Multiply the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    multiply(electricPotentialAc) {
        return new ElectricPotentialAc(this.value * electricPotentialAc.BaseValue);
    }
    /**
     * Divide the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    divide(electricPotentialAc) {
        return new ElectricPotentialAc(this.value / electricPotentialAc.BaseValue);
    }
    /**
     * Modulo the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    modulo(electricPotentialAc) {
        return new ElectricPotentialAc(this.value % electricPotentialAc.BaseValue);
    }
    /**
     * Pow the given ElectricPotentialAc with the current ElectricPotentialAc.
     * @param electricPotentialAc The other ElectricPotentialAc.
     * @returns A new ElectricPotentialAc instance with the results.
     */
    pow(electricPotentialAc) {
        return new ElectricPotentialAc(this.value ** electricPotentialAc.BaseValue);
    }
}
exports.ElectricPotentialAc = ElectricPotentialAc;
//# sourceMappingURL=electricpotentialac.g.js.map