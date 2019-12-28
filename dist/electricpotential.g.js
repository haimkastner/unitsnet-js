"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricPotentialUnits enumeration */
var ElectricPotentialUnits;
(function (ElectricPotentialUnits) {
    /** */
    ElectricPotentialUnits[ElectricPotentialUnits["Volts"] = 0] = "Volts";
    /** */
    ElectricPotentialUnits[ElectricPotentialUnits["Microvolts"] = 1] = "Microvolts";
    /** */
    ElectricPotentialUnits[ElectricPotentialUnits["Kilovolts"] = 2] = "Kilovolts";
    /** */
    ElectricPotentialUnits[ElectricPotentialUnits["Megavolts"] = 3] = "Megavolts";
})(ElectricPotentialUnits = exports.ElectricPotentialUnits || (exports.ElectricPotentialUnits = {}));
/** In classical electromagnetism, the electric potential (a scalar quantity denoted by Φ, ΦE or V and also called the electric field potential or the electrostatic potential) at a point is the amount of electric potential energy that a unitary point charge would have when located at that point. */
class ElectricPotential {
    /**
     * Create a new ElectricPotential.
     * @param value The value.
     * @param fromUnit The ‘ElectricPotential’ unit to create from.
     * The default unit is Volts
     */
    constructor(value, fromUnit = ElectricPotentialUnits.Volts) {
        this.voltsLazy = null;
        this.microvoltsLazy = null;
        this.kilovoltsLazy = null;
        this.megavoltsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricPotential is Volts.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Volts() {
        if (this.voltsLazy !== null) {
            return this.voltsLazy;
        }
        return this.voltsLazy = this.convertFromBase(ElectricPotentialUnits.Volts);
    }
    /** */
    get Microvolts() {
        if (this.microvoltsLazy !== null) {
            return this.microvoltsLazy;
        }
        return this.microvoltsLazy = this.convertFromBase(ElectricPotentialUnits.Microvolts);
    }
    /** */
    get Kilovolts() {
        if (this.kilovoltsLazy !== null) {
            return this.kilovoltsLazy;
        }
        return this.kilovoltsLazy = this.convertFromBase(ElectricPotentialUnits.Kilovolts);
    }
    /** */
    get Megavolts() {
        if (this.megavoltsLazy !== null) {
            return this.megavoltsLazy;
        }
        return this.megavoltsLazy = this.convertFromBase(ElectricPotentialUnits.Megavolts);
    }
    /**
     * Create a new ElectricPotential instance from a Volts
     *
     * @param value The unit as Volts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromVolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Volts);
    }
    /**
     * Create a new ElectricPotential instance from a Microvolts
     *
     * @param value The unit as Microvolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromMicrovolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Microvolts);
    }
    /**
     * Create a new ElectricPotential instance from a Kilovolts
     *
     * @param value The unit as Kilovolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromKilovolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Kilovolts);
    }
    /**
     * Create a new ElectricPotential instance from a Megavolts
     *
     * @param value The unit as Megavolts to create a new ElectricPotential from.
     * @returns The new ElectricPotential instance.
     */
    static FromMegavolts(value) {
        return new ElectricPotential(value, ElectricPotentialUnits.Megavolts);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialUnits.Volts:
                return this.value;
            case ElectricPotentialUnits.Microvolts:
                return (this.value) / 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (this.value) / 1000;
            case ElectricPotentialUnits.Megavolts:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialUnits.Volts:
                return value;
            case ElectricPotentialUnits.Microvolts:
                return (value) * 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (value) * 1000;
            case ElectricPotentialUnits.Megavolts:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricPotential to string.
     * Note! the default format for ElectricPotential is Volts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricPotential.
     * @returns The string format of the ElectricPotential.
     */
    toString(toUnit = ElectricPotentialUnits.Volts) {
        switch (toUnit) {
            case ElectricPotentialUnits.Volts:
                return this.Volts + ` V`;
            case ElectricPotentialUnits.Microvolts:
                return this.Microvolts + ` `;
            case ElectricPotentialUnits.Kilovolts:
                return this.Kilovolts + ` `;
            case ElectricPotentialUnits.Megavolts:
                return this.Megavolts + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ElectricPotential are equals to the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns True if the given ElectricPotential are equal to the current ElectricPotential.
     */
    equals(electricPotential) {
        return this.value === electricPotential.BaseValue;
    }
    /**
     * Compare the given ElectricPotential against the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns 0 if they are equal, -1 if the current ElectricPotential is less then other, 1 if the current ElectricPotential is greater then other.
     */
    compareTo(electricPotential) {
        if (this.value > electricPotential.BaseValue)
            return 1;
        if (this.value < electricPotential.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    add(electricPotential) {
        return new ElectricPotential(this.value + electricPotential.BaseValue);
    }
    /**
     * Subtract the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    subtract(electricPotential) {
        return new ElectricPotential(this.value - electricPotential.BaseValue);
    }
    /**
     * Multiply the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    multiply(electricPotential) {
        return new ElectricPotential(this.value * electricPotential.BaseValue);
    }
    /**
     * Divide the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    divide(electricPotential) {
        return new ElectricPotential(this.value / electricPotential.BaseValue);
    }
    /**
     * Modulo the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    modulo(electricPotential) {
        return new ElectricPotential(this.value % electricPotential.BaseValue);
    }
    /**
     * Pow the given ElectricPotential with the current ElectricPotential.
     * @param electricPotential The other ElectricPotential.
     * @returns A new ElectricPotential instance with the results.
     */
    pow(electricPotential) {
        return new ElectricPotential(this.value ** electricPotential.BaseValue);
    }
}
exports.ElectricPotential = ElectricPotential;
//# sourceMappingURL=electricpotential.g.js.map