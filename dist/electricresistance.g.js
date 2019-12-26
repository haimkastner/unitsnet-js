"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricResistanceUnits enumeration */
var ElectricResistanceUnits;
(function (ElectricResistanceUnits) {
    /** */
    ElectricResistanceUnits[ElectricResistanceUnits["Ohms"] = 0] = "Ohms";
    /** */
    ElectricResistanceUnits[ElectricResistanceUnits["Kiloohms"] = 1] = "Kiloohms";
    /** */
    ElectricResistanceUnits[ElectricResistanceUnits["Megaohms"] = 2] = "Megaohms";
    /** */
    ElectricResistanceUnits[ElectricResistanceUnits["Gigaohms"] = 3] = "Gigaohms";
})(ElectricResistanceUnits = exports.ElectricResistanceUnits || (exports.ElectricResistanceUnits = {}));
/** The electrical resistance of an electrical conductor is the opposition to the passage of an electric current through that conductor. */
class ElectricResistance {
    /**
     * Create a new ElectricResistance.
     * @param value The value.
     * @param fromUnit The ‘ElectricResistance’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.ohmsLazy = null;
        this.kiloohmsLazy = null;
        this.megaohmsLazy = null;
        this.gigaohmsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricResistance is Ohm.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Ohms() {
        if (this.ohmsLazy !== null) {
            return this.ohmsLazy;
        }
        return this.ohmsLazy = this.convertFromBase(ElectricResistanceUnits.Ohms);
    }
    /** */
    get Kiloohms() {
        if (this.kiloohmsLazy !== null) {
            return this.kiloohmsLazy;
        }
        return this.kiloohmsLazy = this.convertFromBase(ElectricResistanceUnits.Kiloohms);
    }
    /** */
    get Megaohms() {
        if (this.megaohmsLazy !== null) {
            return this.megaohmsLazy;
        }
        return this.megaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Megaohms);
    }
    /** */
    get Gigaohms() {
        if (this.gigaohmsLazy !== null) {
            return this.gigaohmsLazy;
        }
        return this.gigaohmsLazy = this.convertFromBase(ElectricResistanceUnits.Gigaohms);
    }
    /**
     * Create a new ElectricResistance instance from a Ohms
     *
     * @param value The unit as Ohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromOhms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Ohms);
    }
    /**
     * Create a new ElectricResistance instance from a Kiloohms
     *
     * @param value The unit as Kiloohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromKiloohms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Kiloohms);
    }
    /**
     * Create a new ElectricResistance instance from a Megaohms
     *
     * @param value The unit as Megaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromMegaohms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Megaohms);
    }
    /**
     * Create a new ElectricResistance instance from a Gigaohms
     *
     * @param value The unit as Gigaohms to create a new ElectricResistance from.
     * @returns The new ElectricResistance instance.
     */
    static FromGigaohms(value) {
        return new ElectricResistance(value, ElectricResistanceUnits.Gigaohms);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricResistanceUnits.Ohms:
                return this.value;
            case ElectricResistanceUnits.Kiloohms:
                return (this.value) / 1000;
            case ElectricResistanceUnits.Megaohms:
                return (this.value) / 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricResistanceUnits.Ohms:
                return value;
            case ElectricResistanceUnits.Kiloohms:
                return (value) * 1000;
            case ElectricResistanceUnits.Megaohms:
                return (value) * 1000000;
            case ElectricResistanceUnits.Gigaohms:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricResistance to string.
     * Note! the default format for ElectricResistance is Ohms.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricResistance.
     * @returns The string format of the ElectricResistance.
     */
    toString(toUnit = ElectricResistanceUnits.Ohms) {
        switch (toUnit) {
            case ElectricResistanceUnits.Ohms:
                return this.Ohms + ` Ω`;
            case ElectricResistanceUnits.Kiloohms:
                return this.Kiloohms + ` Ω`;
            case ElectricResistanceUnits.Megaohms:
                return this.Megaohms + ` Ω`;
            case ElectricResistanceUnits.Gigaohms:
                return this.Gigaohms + ` Ω`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricResistance = ElectricResistance;
//# sourceMappingURL=electricresistance.g.js.map