"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ElectricConductivityUnits enumeration */
var ElectricConductivityUnits;
(function (ElectricConductivityUnits) {
    /** */
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerMeter"] = 0] = "SiemensPerMeter";
    /** */
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerInch"] = 1] = "SiemensPerInch";
    /** */
    ElectricConductivityUnits[ElectricConductivityUnits["SiemensPerFoot"] = 2] = "SiemensPerFoot";
})(ElectricConductivityUnits = exports.ElectricConductivityUnits || (exports.ElectricConductivityUnits = {}));
/** Electrical conductivity or specific conductance is the reciprocal of electrical resistivity, and measures a material's ability to conduct an electric current. */
class ElectricConductivity {
    /**
     * Create a new ElectricConductivity.
     * @param value The value.
     * @param fromUnit The ‘ElectricConductivity’ unit to create from.
     * The default unit is SiemensPerMeter
     */
    constructor(value, fromUnit = ElectricConductivityUnits.SiemensPerMeter) {
        this.siemenspermeterLazy = null;
        this.siemensperinchLazy = null;
        this.siemensperfootLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ElectricConductivity is SiemensPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get SiemensPerMeter() {
        if (this.siemenspermeterLazy !== null) {
            return this.siemenspermeterLazy;
        }
        return this.siemenspermeterLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerMeter);
    }
    /** */
    get SiemensPerInch() {
        if (this.siemensperinchLazy !== null) {
            return this.siemensperinchLazy;
        }
        return this.siemensperinchLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerInch);
    }
    /** */
    get SiemensPerFoot() {
        if (this.siemensperfootLazy !== null) {
            return this.siemensperfootLazy;
        }
        return this.siemensperfootLazy = this.convertFromBase(ElectricConductivityUnits.SiemensPerFoot);
    }
    /**
     * Create a new ElectricConductivity instance from a SiemensPerMeter
     *
     * @param value The unit as SiemensPerMeter to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    static FromSiemensPerMeter(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerMeter);
    }
    /**
     * Create a new ElectricConductivity instance from a SiemensPerInch
     *
     * @param value The unit as SiemensPerInch to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    static FromSiemensPerInch(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerInch);
    }
    /**
     * Create a new ElectricConductivity instance from a SiemensPerFoot
     *
     * @param value The unit as SiemensPerFoot to create a new ElectricConductivity from.
     * @returns The new ElectricConductivity instance.
     */
    static FromSiemensPerFoot(value) {
        return new ElectricConductivity(value, ElectricConductivityUnits.SiemensPerFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.value;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.value / 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.value / 3.2808398950131234;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return value;
            case ElectricConductivityUnits.SiemensPerInch:
                return value * 3.937007874015748e1;
            case ElectricConductivityUnits.SiemensPerFoot:
                return value * 3.2808398950131234;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ElectricConductivity to string.
     * Note! the default format for ElectricConductivity is SiemensPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ElectricConductivity.
     * @returns The string format of the ElectricConductivity.
     */
    toString(toUnit = ElectricConductivityUnits.SiemensPerMeter) {
        switch (toUnit) {
            case ElectricConductivityUnits.SiemensPerMeter:
                return this.SiemensPerMeter + ` S/m`;
            case ElectricConductivityUnits.SiemensPerInch:
                return this.SiemensPerInch + ` S/in`;
            case ElectricConductivityUnits.SiemensPerFoot:
                return this.SiemensPerFoot + ` S/ft`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ElectricConductivity are equals to the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns True if the given ElectricConductivity are equal to the current ElectricConductivity.
     */
    equals(electricConductivity) {
        return this.value === electricConductivity.BaseValue;
    }
    /**
     * Compare the given ElectricConductivity against the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns 0 if they are equal, -1 if the current ElectricConductivity is less then other, 1 if the current ElectricConductivity is greater then other.
     */
    compareTo(electricConductivity) {
        if (this.value > electricConductivity.BaseValue)
            return 1;
        if (this.value < electricConductivity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    add(electricConductivity) {
        return new ElectricConductivity(this.value + electricConductivity.BaseValue);
    }
    /**
     * Subtract the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    subtract(electricConductivity) {
        return new ElectricConductivity(this.value - electricConductivity.BaseValue);
    }
    /**
     * Multiply the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    multiply(electricConductivity) {
        return new ElectricConductivity(this.value * electricConductivity.BaseValue);
    }
    /**
     * Divide the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    divide(electricConductivity) {
        return new ElectricConductivity(this.value / electricConductivity.BaseValue);
    }
    /**
     * Modulo the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    modulo(electricConductivity) {
        return new ElectricConductivity(this.value % electricConductivity.BaseValue);
    }
    /**
     * Pow the given ElectricConductivity with the current ElectricConductivity.
     * @param electricConductivity The other ElectricConductivity.
     * @returns A new ElectricConductivity instance with the results.
     */
    pow(electricConductivity) {
        return new ElectricConductivity(this.value ** electricConductivity.BaseValue);
    }
}
exports.ElectricConductivity = ElectricConductivity;
//# sourceMappingURL=electricconductivity.g.js.map