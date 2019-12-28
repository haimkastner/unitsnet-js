"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** SpecificEnergyUnits enumeration */
var SpecificEnergyUnits;
(function (SpecificEnergyUnits) {
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["JoulesPerKilogram"] = 0] = "JoulesPerKilogram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["CaloriesPerGram"] = 1] = "CaloriesPerGram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["WattHoursPerKilogram"] = 2] = "WattHoursPerKilogram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["BtuPerPound"] = 3] = "BtuPerPound";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["KilojoulesPerKilogram"] = 4] = "KilojoulesPerKilogram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["MegajoulesPerKilogram"] = 5] = "MegajoulesPerKilogram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["KilocaloriesPerGram"] = 6] = "KilocaloriesPerGram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["KilowattHoursPerKilogram"] = 7] = "KilowattHoursPerKilogram";
    /** */
    SpecificEnergyUnits[SpecificEnergyUnits["MegawattHoursPerKilogram"] = 8] = "MegawattHoursPerKilogram";
})(SpecificEnergyUnits = exports.SpecificEnergyUnits || (exports.SpecificEnergyUnits = {}));
/** The SpecificEnergy */
class SpecificEnergy {
    /**
     * Create a new SpecificEnergy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEnergy’ unit to create from.
     * The default unit is JoulesPerKilogram
     */
    constructor(value, fromUnit = SpecificEnergyUnits.JoulesPerKilogram) {
        this.joulesperkilogramLazy = null;
        this.caloriespergramLazy = null;
        this.watthoursperkilogramLazy = null;
        this.btuperpoundLazy = null;
        this.kilojoulesperkilogramLazy = null;
        this.megajoulesperkilogramLazy = null;
        this.kilocaloriespergramLazy = null;
        this.kilowatthoursperkilogramLazy = null;
        this.megawatthoursperkilogramLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of SpecificEnergy is JoulesPerKilogram.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get JoulesPerKilogram() {
        if (this.joulesperkilogramLazy !== null) {
            return this.joulesperkilogramLazy;
        }
        return this.joulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
    }
    /** */
    get CaloriesPerGram() {
        if (this.caloriespergramLazy !== null) {
            return this.caloriespergramLazy;
        }
        return this.caloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.CaloriesPerGram);
    }
    /** */
    get WattHoursPerKilogram() {
        if (this.watthoursperkilogramLazy !== null) {
            return this.watthoursperkilogramLazy;
        }
        return this.watthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.WattHoursPerKilogram);
    }
    /** */
    get BtuPerPound() {
        if (this.btuperpoundLazy !== null) {
            return this.btuperpoundLazy;
        }
        return this.btuperpoundLazy = this.convertFromBase(SpecificEnergyUnits.BtuPerPound);
    }
    /** */
    get KilojoulesPerKilogram() {
        if (this.kilojoulesperkilogramLazy !== null) {
            return this.kilojoulesperkilogramLazy;
        }
        return this.kilojoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilojoulesPerKilogram);
    }
    /** */
    get MegajoulesPerKilogram() {
        if (this.megajoulesperkilogramLazy !== null) {
            return this.megajoulesperkilogramLazy;
        }
        return this.megajoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegajoulesPerKilogram);
    }
    /** */
    get KilocaloriesPerGram() {
        if (this.kilocaloriespergramLazy !== null) {
            return this.kilocaloriespergramLazy;
        }
        return this.kilocaloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.KilocaloriesPerGram);
    }
    /** */
    get KilowattHoursPerKilogram() {
        if (this.kilowatthoursperkilogramLazy !== null) {
            return this.kilowatthoursperkilogramLazy;
        }
        return this.kilowatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHoursPerKilogram);
    }
    /** */
    get MegawattHoursPerKilogram() {
        if (this.megawatthoursperkilogramLazy !== null) {
            return this.megawatthoursperkilogramLazy;
        }
        return this.megawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHoursPerKilogram);
    }
    /**
     * Create a new SpecificEnergy instance from a JoulesPerKilogram
     *
     * @param value The unit as JoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromJoulesPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.JoulesPerKilogram);
    }
    /**
     * Create a new SpecificEnergy instance from a CaloriesPerGram
     *
     * @param value The unit as CaloriesPerGram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromCaloriesPerGram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.CaloriesPerGram);
    }
    /**
     * Create a new SpecificEnergy instance from a WattHoursPerKilogram
     *
     * @param value The unit as WattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromWattHoursPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattHoursPerKilogram);
    }
    /**
     * Create a new SpecificEnergy instance from a BtuPerPound
     *
     * @param value The unit as BtuPerPound to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromBtuPerPound(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.BtuPerPound);
    }
    /**
     * Create a new SpecificEnergy instance from a KilojoulesPerKilogram
     *
     * @param value The unit as KilojoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromKilojoulesPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilojoulesPerKilogram);
    }
    /**
     * Create a new SpecificEnergy instance from a MegajoulesPerKilogram
     *
     * @param value The unit as MegajoulesPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromMegajoulesPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegajoulesPerKilogram);
    }
    /**
     * Create a new SpecificEnergy instance from a KilocaloriesPerGram
     *
     * @param value The unit as KilocaloriesPerGram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromKilocaloriesPerGram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilocaloriesPerGram);
    }
    /**
     * Create a new SpecificEnergy instance from a KilowattHoursPerKilogram
     *
     * @param value The unit as KilowattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromKilowattHoursPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHoursPerKilogram);
    }
    /**
     * Create a new SpecificEnergy instance from a MegawattHoursPerKilogram
     *
     * @param value The unit as MegawattHoursPerKilogram to create a new SpecificEnergy from.
     * @returns The new SpecificEnergy instance.
     */
    static FromMegawattHoursPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattHoursPerKilogram);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpecificEnergyUnits.JoulesPerKilogram:
                return this.value;
            case SpecificEnergyUnits.CaloriesPerGram:
                return this.value / 4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return this.value / 3.6e3;
            case SpecificEnergyUnits.BtuPerPound:
                return this.value / 2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return (this.value / 4.184e3) / 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return (this.value / 3.6e3) / 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return (this.value / 3.6e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificEnergyUnits.JoulesPerKilogram:
                return value;
            case SpecificEnergyUnits.CaloriesPerGram:
                return value * 4.184e3;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return value * 3.6e3;
            case SpecificEnergyUnits.BtuPerPound:
                return value * 2326.000075362;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return (value * 4.184e3) * 1000;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return (value * 3.6e3) * 1000;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return (value * 3.6e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the SpecificEnergy to string.
     * Note! the default format for SpecificEnergy is JoulesPerKilogram.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificEnergy.
     * @returns The string format of the SpecificEnergy.
     */
    toString(toUnit = SpecificEnergyUnits.JoulesPerKilogram) {
        switch (toUnit) {
            case SpecificEnergyUnits.JoulesPerKilogram:
                return this.JoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.CaloriesPerGram:
                return this.CaloriesPerGram + ` cal/g`;
            case SpecificEnergyUnits.WattHoursPerKilogram:
                return this.WattHoursPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.BtuPerPound:
                return this.BtuPerPound + ` btu/lb`;
            case SpecificEnergyUnits.KilojoulesPerKilogram:
                return this.KilojoulesPerKilogram + ` `;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return this.MegajoulesPerKilogram + ` `;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return this.KilocaloriesPerGram + ` `;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return this.KilowattHoursPerKilogram + ` `;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return this.MegawattHoursPerKilogram + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given SpecificEnergy are equals to the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns True if the given SpecificEnergy are equal to the current SpecificEnergy.
     */
    equals(specificEnergy) {
        return this.value === specificEnergy.BaseValue;
    }
    /**
     * Compare the given SpecificEnergy against the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns 0 if they are equal, -1 if the current SpecificEnergy is less then other, 1 if the current SpecificEnergy is greater then other.
     */
    compareTo(specificEnergy) {
        if (this.value > specificEnergy.BaseValue)
            return 1;
        if (this.value < specificEnergy.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    add(specificEnergy) {
        return new SpecificEnergy(this.value + specificEnergy.BaseValue);
    }
    /**
     * Subtract the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    subtract(specificEnergy) {
        return new SpecificEnergy(this.value - specificEnergy.BaseValue);
    }
    /**
     * Multiply the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    multiply(specificEnergy) {
        return new SpecificEnergy(this.value * specificEnergy.BaseValue);
    }
    /**
     * Divide the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    divide(specificEnergy) {
        return new SpecificEnergy(this.value / specificEnergy.BaseValue);
    }
    /**
     * Modulo the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    modulo(specificEnergy) {
        return new SpecificEnergy(this.value % specificEnergy.BaseValue);
    }
    /**
     * Pow the given SpecificEnergy with the current SpecificEnergy.
     * @param specificEnergy The other SpecificEnergy.
     * @returns A new SpecificEnergy instance with the results.
     */
    pow(specificEnergy) {
        return new SpecificEnergy(this.value ** specificEnergy.BaseValue);
    }
}
exports.SpecificEnergy = SpecificEnergy;
//# sourceMappingURL=specificenergy.g.js.map