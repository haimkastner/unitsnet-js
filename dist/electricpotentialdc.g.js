"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricPotentialDcUnits enumeration */
var ElectricPotentialDcUnits;
(function (ElectricPotentialDcUnits) {
    /** */
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["VoltsDc"] = 0] = "VoltsDc";
    /** */
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["MicrovoltsDc"] = 1] = "MicrovoltsDc";
    /** */
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["KilovoltsDc"] = 2] = "KilovoltsDc";
    /** */
    ElectricPotentialDcUnits[ElectricPotentialDcUnits["MegavoltsDc"] = 3] = "MegavoltsDc";
})(ElectricPotentialDcUnits = exports.ElectricPotentialDcUnits || (exports.ElectricPotentialDcUnits = {}));
/** The Electric Potential of a system known to use Direct Current. */
class ElectricPotentialDc {
    /**
     * Create a new ElectricPotentialDc.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotentialDc’ unit to create from.
     * The default unit is VoltsDc
     */
    constructor(value, fromUnit = ElectricPotentialDcUnits.VoltsDc) {
        this.voltsdcLazy = null;
        this.microvoltsdcLazy = null;
        this.kilovoltsdcLazy = null;
        this.megavoltsdcLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricPotentialDc is VoltsDc.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get VoltsDc() {
        if (this.voltsdcLazy !== null) {
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }
    /** */
    get MicrovoltsDc() {
        if (this.microvoltsdcLazy !== null) {
            return this.microvoltsdcLazy;
        }
        return this.microvoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltsDc);
    }
    /** */
    get KilovoltsDc() {
        if (this.kilovoltsdcLazy !== null) {
            return this.kilovoltsdcLazy;
        }
        return this.kilovoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltsDc);
    }
    /** */
    get MegavoltsDc() {
        if (this.megavoltsdcLazy !== null) {
            return this.megavoltsdcLazy;
        }
        return this.megavoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltsDc);
    }
    /**
     * Create a new ElectricPotentialDc instance from a VoltsDc
     *
     * @param value The unit as VoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromVoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }
    /**
     * Create a new ElectricPotentialDc instance from a MicrovoltsDc
     *
     * @param value The unit as MicrovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromMicrovoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltsDc);
    }
    /**
     * Create a new ElectricPotentialDc instance from a KilovoltsDc
     *
     * @param value The unit as KilovoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromKilovoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltsDc);
    }
    /**
     * Create a new ElectricPotentialDc instance from a MegavoltsDc
     *
     * @param value The unit as MegavoltsDc to create a new ElectricPotentialDc from.
     * @returns The new ElectricPotentialDc instance.
     */
    static FromMegavoltsDc(value) {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltsDc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (value) * 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricPotentialDc to string.
     * Note! the default format for ElectricPotentialDc is VoltsDc.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotentialDc.
     * @returns The string format of the ElectricPotentialDc.
     */
    toString(toUnit = ElectricPotentialDcUnits.VoltsDc) {
        switch (toUnit) {
            case ElectricPotentialDcUnits.VoltsDc:
                return this.VoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return this.MicrovoltsDc + ` `;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return this.KilovoltsDc + ` `;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return this.MegavoltsDc + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ElectricPotentialDc are equals to the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns True if the given ElectricPotentialDc are equal to the current ElectricPotentialDc.
     */
    equals(electricPotentialDc) {
        return this.value === electricPotentialDc.BaseValue;
    }
    /**
     * Compare the given ElectricPotentialDc against the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns 0 if they are equal, -1 if the current ElectricPotentialDc is less then other, 1 if the current ElectricPotentialDc is greater then other.
     */
    compareTo(electricPotentialDc) {
        if (this.value > electricPotentialDc.BaseValue)
            return 1;
        if (this.value < electricPotentialDc.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    add(electricPotentialDc) {
        return new ElectricPotentialDc(this.value + electricPotentialDc.BaseValue);
    }
    /**
     * Subtract the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    subtract(electricPotentialDc) {
        return new ElectricPotentialDc(this.value - electricPotentialDc.BaseValue);
    }
    /**
     * Multiply the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    multiply(electricPotentialDc) {
        return new ElectricPotentialDc(this.value * electricPotentialDc.BaseValue);
    }
    /**
     * Divide the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    divide(electricPotentialDc) {
        return new ElectricPotentialDc(this.value / electricPotentialDc.BaseValue);
    }
    /**
     * Modulo the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    modulo(electricPotentialDc) {
        return new ElectricPotentialDc(this.value % electricPotentialDc.BaseValue);
    }
    /**
     * Pow the given ElectricPotentialDc with the current ElectricPotentialDc.
     * @param electricPotentialDc The other ElectricPotentialDc.
     * @returns A new ElectricPotentialDc instance with the results.
     */
    pow(electricPotentialDc) {
        return new ElectricPotentialDc(this.value ** electricPotentialDc.BaseValue);
    }
}
exports.ElectricPotentialDc = ElectricPotentialDc;
//# sourceMappingURL=electricpotentialdc.g.js.map