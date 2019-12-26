"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** SpecificEntropyUnits enumeration */
var SpecificEntropyUnits;
(function (SpecificEntropyUnits) {
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["JoulesPerKilogramKelvin"] = 0] = "JoulesPerKilogramKelvin";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["JoulesPerKilogramDegreeCelsius"] = 1] = "JoulesPerKilogramDegreeCelsius";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["CaloriesPerGramKelvin"] = 2] = "CaloriesPerGramKelvin";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["BtusPerPoundFahrenheit"] = 3] = "BtusPerPoundFahrenheit";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["KilojoulesPerKilogramKelvin"] = 4] = "KilojoulesPerKilogramKelvin";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["MegajoulesPerKilogramKelvin"] = 5] = "MegajoulesPerKilogramKelvin";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["KilojoulesPerKilogramDegreeCelsius"] = 6] = "KilojoulesPerKilogramDegreeCelsius";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["MegajoulesPerKilogramDegreeCelsius"] = 7] = "MegajoulesPerKilogramDegreeCelsius";
    /** */
    SpecificEntropyUnits[SpecificEntropyUnits["KilocaloriesPerGramKelvin"] = 8] = "KilocaloriesPerGramKelvin";
})(SpecificEntropyUnits = exports.SpecificEntropyUnits || (exports.SpecificEntropyUnits = {}));
/** Specific entropy is an amount of energy required to raise temperature of a substance by 1 Kelvin per unit mass. */
class SpecificEntropy {
    /**
     * Create a new SpecificEntropy.
     * @param value The value.
     * @param fromUnit The ‘SpecificEntropy’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.joulesperkilogramkelvinLazy = null;
        this.joulesperkilogramdegreecelsiusLazy = null;
        this.caloriespergramkelvinLazy = null;
        this.btusperpoundfahrenheitLazy = null;
        this.kilojoulesperkilogramkelvinLazy = null;
        this.megajoulesperkilogramkelvinLazy = null;
        this.kilojoulesperkilogramdegreecelsiusLazy = null;
        this.megajoulesperkilogramdegreecelsiusLazy = null;
        this.kilocaloriespergramkelvinLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of SpecificEntropy is JoulePerKilogramKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get JoulesPerKilogramKelvin() {
        if (this.joulesperkilogramkelvinLazy !== null) {
            return this.joulesperkilogramkelvinLazy;
        }
        return this.joulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }
    /** */
    get JoulesPerKilogramDegreeCelsius() {
        if (this.joulesperkilogramdegreecelsiusLazy !== null) {
            return this.joulesperkilogramdegreecelsiusLazy;
        }
        return this.joulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }
    /** */
    get CaloriesPerGramKelvin() {
        if (this.caloriespergramkelvinLazy !== null) {
            return this.caloriespergramkelvinLazy;
        }
        return this.caloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }
    /** */
    get BtusPerPoundFahrenheit() {
        if (this.btusperpoundfahrenheitLazy !== null) {
            return this.btusperpoundfahrenheitLazy;
        }
        return this.btusperpoundfahrenheitLazy = this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }
    /** */
    get KilojoulesPerKilogramKelvin() {
        if (this.kilojoulesperkilogramkelvinLazy !== null) {
            return this.kilojoulesperkilogramkelvinLazy;
        }
        return this.kilojoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }
    /** */
    get MegajoulesPerKilogramKelvin() {
        if (this.megajoulesperkilogramkelvinLazy !== null) {
            return this.megajoulesperkilogramkelvinLazy;
        }
        return this.megajoulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }
    /** */
    get KilojoulesPerKilogramDegreeCelsius() {
        if (this.kilojoulesperkilogramdegreecelsiusLazy !== null) {
            return this.kilojoulesperkilogramdegreecelsiusLazy;
        }
        return this.kilojoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }
    /** */
    get MegajoulesPerKilogramDegreeCelsius() {
        if (this.megajoulesperkilogramdegreecelsiusLazy !== null) {
            return this.megajoulesperkilogramdegreecelsiusLazy;
        }
        return this.megajoulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }
    /** */
    get KilocaloriesPerGramKelvin() {
        if (this.kilocaloriespergramkelvinLazy !== null) {
            return this.kilocaloriespergramkelvinLazy;
        }
        return this.kilocaloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilocaloriesPerGramKelvin);
    }
    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramKelvin
     *
     * @param value The unit as JoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromJoulesPerKilogramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }
    /**
     * Create a new SpecificEntropy instance from a JoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as JoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromJoulesPerKilogramDegreeCelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }
    /**
     * Create a new SpecificEntropy instance from a CaloriesPerGramKelvin
     *
     * @param value The unit as CaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromCaloriesPerGramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.CaloriesPerGramKelvin);
    }
    /**
     * Create a new SpecificEntropy instance from a BtusPerPoundFahrenheit
     *
     * @param value The unit as BtusPerPoundFahrenheit to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromBtusPerPoundFahrenheit(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }
    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramKelvin
     *
     * @param value The unit as KilojoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromKilojoulesPerKilogramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramKelvin);
    }
    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramKelvin
     *
     * @param value The unit as MegajoulesPerKilogramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromMegajoulesPerKilogramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramKelvin);
    }
    /**
     * Create a new SpecificEntropy instance from a KilojoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as KilojoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromKilojoulesPerKilogramDegreeCelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius);
    }
    /**
     * Create a new SpecificEntropy instance from a MegajoulesPerKilogramDegreeCelsius
     *
     * @param value The unit as MegajoulesPerKilogramDegreeCelsius to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromMegajoulesPerKilogramDegreeCelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius);
    }
    /**
     * Create a new SpecificEntropy instance from a KilocaloriesPerGramKelvin
     *
     * @param value The unit as KilocaloriesPerGramKelvin to create a new SpecificEntropy from.
     * @returns The new SpecificEntropy instance.
     */
    static FromKilocaloriesPerGramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilocaloriesPerGramKelvin);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return this.value;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return this.value;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return this.value / 4.184e3;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return this.value / 4.1868e3;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return (this.value / 4.184e3) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return value;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return value;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return value * 4.184e3;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return value * 4.1868e3;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return (value * 4.184e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the SpecificEntropy to string.
     * Note! the default format for SpecificEntropy is JoulesPerKilogramKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificEntropy.
     * @returns The string format of the SpecificEntropy.
     */
    toString(toUnit = SpecificEntropyUnits.JoulesPerKilogramKelvin) {
        switch (toUnit) {
            case SpecificEntropyUnits.JoulesPerKilogramKelvin:
                return this.JoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius:
                return this.JoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.CaloriesPerGramKelvin:
                return this.CaloriesPerGramKelvin + ` cal/g.K`;
            case SpecificEntropyUnits.BtusPerPoundFahrenheit:
                return this.BtusPerPoundFahrenheit + ` BTU/lb·°F`;
            case SpecificEntropyUnits.KilojoulesPerKilogramKelvin:
                return this.KilojoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.MegajoulesPerKilogramKelvin:
                return this.MegajoulesPerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.KilojoulesPerKilogramDegreeCelsius:
                return this.KilojoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.MegajoulesPerKilogramDegreeCelsius:
                return this.MegajoulesPerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.KilocaloriesPerGramKelvin:
                return this.KilocaloriesPerGramKelvin + ` cal/g.K`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificEntropy = SpecificEntropy;
//# sourceMappingURL=specificentropy.g.js.map