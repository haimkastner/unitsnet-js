"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MolarEntropyUnits enumeration */
var MolarEntropyUnits;
(function (MolarEntropyUnits) {
    /** */
    MolarEntropyUnits[MolarEntropyUnits["JoulesPerMoleKelvin"] = 0] = "JoulesPerMoleKelvin";
    /** */
    MolarEntropyUnits[MolarEntropyUnits["KilojoulesPerMoleKelvin"] = 1] = "KilojoulesPerMoleKelvin";
    /** */
    MolarEntropyUnits[MolarEntropyUnits["MegajoulesPerMoleKelvin"] = 2] = "MegajoulesPerMoleKelvin";
})(MolarEntropyUnits = exports.MolarEntropyUnits || (exports.MolarEntropyUnits = {}));
/** Molar entropy is amount of energy required to increase temperature of 1 mole substance by 1 Kelvin. */
class MolarEntropy {
    /**
     * Create a new MolarEntropy.
     * @param value The value.
     * @param fromUnit The ‘MolarEntropy’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.joulespermolekelvinLazy = null;
        this.kilojoulespermolekelvinLazy = null;
        this.megajoulespermolekelvinLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MolarEntropy is JoulePerMoleKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get JoulesPerMoleKelvin() {
        if (this.joulespermolekelvinLazy !== null) {
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    /** */
    get KilojoulesPerMoleKelvin() {
        if (this.kilojoulespermolekelvinLazy !== null) {
            return this.kilojoulespermolekelvinLazy;
        }
        return this.kilojoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }
    /** */
    get MegajoulesPerMoleKelvin() {
        if (this.megajoulespermolekelvinLazy !== null) {
            return this.megajoulespermolekelvinLazy;
        }
        return this.megajoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }
    /**
     * Create a new MolarEntropy instance from a JoulesPerMoleKelvin
     *
     * @param value The unit as JoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    static FromJoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    /**
     * Create a new MolarEntropy instance from a KilojoulesPerMoleKelvin
     *
     * @param value The unit as KilojoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    static FromKilojoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }
    /**
     * Create a new MolarEntropy instance from a MegajoulesPerMoleKelvin
     *
     * @param value The unit as MegajoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    static FromMegajoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (value) * 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MolarEntropy to string.
     * Note! the default format for MolarEntropy is JoulesPerMoleKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarEntropy.
     * @returns The string format of the MolarEntropy.
     */
    toString(toUnit = MolarEntropyUnits.JoulesPerMoleKelvin) {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.JoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return this.KilojoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return this.MegajoulesPerMoleKelvin + ` J/(mol*K)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarEntropy = MolarEntropy;
//# sourceMappingURL=molarentropy.g.js.map