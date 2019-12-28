"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MolarEnergyUnits enumeration */
var MolarEnergyUnits;
(function (MolarEnergyUnits) {
    /** */
    MolarEnergyUnits[MolarEnergyUnits["JoulesPerMole"] = 0] = "JoulesPerMole";
    /** */
    MolarEnergyUnits[MolarEnergyUnits["KilojoulesPerMole"] = 1] = "KilojoulesPerMole";
    /** */
    MolarEnergyUnits[MolarEnergyUnits["MegajoulesPerMole"] = 2] = "MegajoulesPerMole";
})(MolarEnergyUnits = exports.MolarEnergyUnits || (exports.MolarEnergyUnits = {}));
/** Molar energy is the amount of energy stored in 1 mole of a substance. */
class MolarEnergy {
    /**
     * Create a new MolarEnergy.
     * @param value The value.
     * @param fromUnit The ‘MolarEnergy’ unit to create from.
     * The default unit is JoulesPerMole
     */
    constructor(value, fromUnit = MolarEnergyUnits.JoulesPerMole) {
        this.joulespermoleLazy = null;
        this.kilojoulespermoleLazy = null;
        this.megajoulespermoleLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MolarEnergy is JoulesPerMole.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get JoulesPerMole() {
        if (this.joulespermoleLazy !== null) {
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }
    /** */
    get KilojoulesPerMole() {
        if (this.kilojoulespermoleLazy !== null) {
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulesPerMole);
    }
    /** */
    get MegajoulesPerMole() {
        if (this.megajoulespermoleLazy !== null) {
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulesPerMole);
    }
    /**
     * Create a new MolarEnergy instance from a JoulesPerMole
     *
     * @param value The unit as JoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    static FromJoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }
    /**
     * Create a new MolarEnergy instance from a KilojoulesPerMole
     *
     * @param value The unit as KilojoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    static FromKilojoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulesPerMole);
    }
    /**
     * Create a new MolarEnergy instance from a MegajoulesPerMole
     *
     * @param value The unit as MegajoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    static FromMegajoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.MegajoulesPerMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.KilojoulesPerMole:
                return (this.value) / 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return value;
            case MolarEnergyUnits.KilojoulesPerMole:
                return (value) * 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MolarEnergy to string.
     * Note! the default format for MolarEnergy is JoulesPerMole.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarEnergy.
     * @returns The string format of the MolarEnergy.
     */
    toString(toUnit = MolarEnergyUnits.JoulesPerMole) {
        switch (toUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.JoulesPerMole + ` J/mol`;
            case MolarEnergyUnits.KilojoulesPerMole:
                return this.KilojoulesPerMole + ` `;
            case MolarEnergyUnits.MegajoulesPerMole:
                return this.MegajoulesPerMole + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given MolarEnergy are equals to the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns True if the given MolarEnergy are equal to the current MolarEnergy.
     */
    equals(molarEnergy) {
        return this.value === molarEnergy.BaseValue;
    }
    /**
     * Compare the given MolarEnergy against the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns 0 if they are equal, -1 if the current MolarEnergy is less then other, 1 if the current MolarEnergy is greater then other.
     */
    compareTo(molarEnergy) {
        if (this.value > molarEnergy.BaseValue)
            return 1;
        if (this.value < molarEnergy.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    add(molarEnergy) {
        return new MolarEnergy(this.value + molarEnergy.BaseValue);
    }
    /**
     * Subtract the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    subtract(molarEnergy) {
        return new MolarEnergy(this.value - molarEnergy.BaseValue);
    }
    /**
     * Multiply the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    multiply(molarEnergy) {
        return new MolarEnergy(this.value * molarEnergy.BaseValue);
    }
    /**
     * Divide the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    divide(molarEnergy) {
        return new MolarEnergy(this.value / molarEnergy.BaseValue);
    }
    /**
     * Modulo the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    modulo(molarEnergy) {
        return new MolarEnergy(this.value % molarEnergy.BaseValue);
    }
    /**
     * Pow the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    pow(molarEnergy) {
        return new MolarEnergy(this.value ** molarEnergy.BaseValue);
    }
}
exports.MolarEnergy = MolarEnergy;
//# sourceMappingURL=molarenergy.g.js.map