"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MolarityUnits enumeration */
var MolarityUnits;
(function (MolarityUnits) {
    /** */
    MolarityUnits[MolarityUnits["MolesPerCubicMeter"] = 0] = "MolesPerCubicMeter";
    /** */
    MolarityUnits[MolarityUnits["MolesPerLiter"] = 1] = "MolesPerLiter";
    /** */
    MolarityUnits[MolarityUnits["PicomolesPerLiter"] = 2] = "PicomolesPerLiter";
    /** */
    MolarityUnits[MolarityUnits["NanomolesPerLiter"] = 3] = "NanomolesPerLiter";
    /** */
    MolarityUnits[MolarityUnits["MicromolesPerLiter"] = 4] = "MicromolesPerLiter";
    /** */
    MolarityUnits[MolarityUnits["CentimolesPerLiter"] = 5] = "CentimolesPerLiter";
    /** */
    MolarityUnits[MolarityUnits["DecimolesPerLiter"] = 6] = "DecimolesPerLiter";
})(MolarityUnits = exports.MolarityUnits || (exports.MolarityUnits = {}));
/** Molar concentration, also called molarity, amount concentration or substance concentration, is a measure of the concentration of a solute in a solution, or of any chemical species, in terms of amount of substance in a given volume. */
class Molarity {
    /**
     * Create a new Molarity.
     * @param value The value.
     * @param fromUnit The ‘Molarity’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.molespercubicmeterLazy = null;
        this.molesperliterLazy = null;
        this.picomolesperliterLazy = null;
        this.nanomolesperliterLazy = null;
        this.micromolesperliterLazy = null;
        this.centimolesperliterLazy = null;
        this.decimolesperliterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Molarity is MolesPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get MolesPerCubicMeter() {
        if (this.molespercubicmeterLazy !== null) {
            return this.molespercubicmeterLazy;
        }
        return this.molespercubicmeterLazy = this.convertFromBase(MolarityUnits.MolesPerCubicMeter);
    }
    /** */
    get MolesPerLiter() {
        if (this.molesperliterLazy !== null) {
            return this.molesperliterLazy;
        }
        return this.molesperliterLazy = this.convertFromBase(MolarityUnits.MolesPerLiter);
    }
    /** */
    get PicomolesPerLiter() {
        if (this.picomolesperliterLazy !== null) {
            return this.picomolesperliterLazy;
        }
        return this.picomolesperliterLazy = this.convertFromBase(MolarityUnits.PicomolesPerLiter);
    }
    /** */
    get NanomolesPerLiter() {
        if (this.nanomolesperliterLazy !== null) {
            return this.nanomolesperliterLazy;
        }
        return this.nanomolesperliterLazy = this.convertFromBase(MolarityUnits.NanomolesPerLiter);
    }
    /** */
    get MicromolesPerLiter() {
        if (this.micromolesperliterLazy !== null) {
            return this.micromolesperliterLazy;
        }
        return this.micromolesperliterLazy = this.convertFromBase(MolarityUnits.MicromolesPerLiter);
    }
    /** */
    get CentimolesPerLiter() {
        if (this.centimolesperliterLazy !== null) {
            return this.centimolesperliterLazy;
        }
        return this.centimolesperliterLazy = this.convertFromBase(MolarityUnits.CentimolesPerLiter);
    }
    /** */
    get DecimolesPerLiter() {
        if (this.decimolesperliterLazy !== null) {
            return this.decimolesperliterLazy;
        }
        return this.decimolesperliterLazy = this.convertFromBase(MolarityUnits.DecimolesPerLiter);
    }
    /**
     * Create a new Molarity instance from a MolesPerCubicMeter
     *
     * @param value The unit as MolesPerCubicMeter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromMolesPerCubicMeter(value) {
        return new Molarity(value, MolarityUnits.MolesPerCubicMeter);
    }
    /**
     * Create a new Molarity instance from a MolesPerLiter
     *
     * @param value The unit as MolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromMolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.MolesPerLiter);
    }
    /**
     * Create a new Molarity instance from a PicomolesPerLiter
     *
     * @param value The unit as PicomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromPicomolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.PicomolesPerLiter);
    }
    /**
     * Create a new Molarity instance from a NanomolesPerLiter
     *
     * @param value The unit as NanomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromNanomolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.NanomolesPerLiter);
    }
    /**
     * Create a new Molarity instance from a MicromolesPerLiter
     *
     * @param value The unit as MicromolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromMicromolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.MicromolesPerLiter);
    }
    /**
     * Create a new Molarity instance from a CentimolesPerLiter
     *
     * @param value The unit as CentimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromCentimolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.CentimolesPerLiter);
    }
    /**
     * Create a new Molarity instance from a DecimolesPerLiter
     *
     * @param value The unit as DecimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    static FromDecimolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.DecimolesPerLiter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarityUnits.MolesPerCubicMeter:
                return this.value;
            case MolarityUnits.MolesPerLiter:
                return this.value * 1e-3;
            case MolarityUnits.PicomolesPerLiter:
                return (this.value * 1e-3) / 1e-12;
            case MolarityUnits.NanomolesPerLiter:
                return (this.value * 1e-3) / 1e-9;
            case MolarityUnits.MicromolesPerLiter:
                return (this.value * 1e-3) / 0.000001;
            case MolarityUnits.CentimolesPerLiter:
                return (this.value * 1e-3) / 0.01;
            case MolarityUnits.DecimolesPerLiter:
                return (this.value * 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarityUnits.MolesPerCubicMeter:
                return value;
            case MolarityUnits.MolesPerLiter:
                return value / 1e-3;
            case MolarityUnits.PicomolesPerLiter:
                return (value / 1e-3) * 1e-12;
            case MolarityUnits.NanomolesPerLiter:
                return (value / 1e-3) * 1e-9;
            case MolarityUnits.MicromolesPerLiter:
                return (value / 1e-3) * 0.000001;
            case MolarityUnits.CentimolesPerLiter:
                return (value / 1e-3) * 0.01;
            case MolarityUnits.DecimolesPerLiter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Molarity to string.
     * Note! the default format for Molarity is MolesPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Molarity.
     * @returns The string format of the Molarity.
     */
    toString(toUnit = MolarityUnits.MolesPerCubicMeter) {
        switch (toUnit) {
            case MolarityUnits.MolesPerCubicMeter:
                return this.MolesPerCubicMeter + ` mol/m³`;
            case MolarityUnits.MolesPerLiter:
                return this.MolesPerLiter + ` mol/L`;
            case MolarityUnits.PicomolesPerLiter:
                return this.PicomolesPerLiter + ` mol/L`;
            case MolarityUnits.NanomolesPerLiter:
                return this.NanomolesPerLiter + ` mol/L`;
            case MolarityUnits.MicromolesPerLiter:
                return this.MicromolesPerLiter + ` mol/L`;
            case MolarityUnits.CentimolesPerLiter:
                return this.CentimolesPerLiter + ` mol/L`;
            case MolarityUnits.DecimolesPerLiter:
                return this.DecimolesPerLiter + ` mol/L`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Molarity = Molarity;
//# sourceMappingURL=molarity.g.js.map