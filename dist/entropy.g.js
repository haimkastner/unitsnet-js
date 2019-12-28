"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** EntropyUnits enumeration */
var EntropyUnits;
(function (EntropyUnits) {
    /** */
    EntropyUnits[EntropyUnits["JoulesPerKelvin"] = 0] = "JoulesPerKelvin";
    /** */
    EntropyUnits[EntropyUnits["CaloriesPerKelvin"] = 1] = "CaloriesPerKelvin";
    /** */
    EntropyUnits[EntropyUnits["JoulesPerDegreeCelsius"] = 2] = "JoulesPerDegreeCelsius";
    /** */
    EntropyUnits[EntropyUnits["KilojoulesPerKelvin"] = 3] = "KilojoulesPerKelvin";
    /** */
    EntropyUnits[EntropyUnits["MegajoulesPerKelvin"] = 4] = "MegajoulesPerKelvin";
    /** */
    EntropyUnits[EntropyUnits["KilocaloriesPerKelvin"] = 5] = "KilocaloriesPerKelvin";
    /** */
    EntropyUnits[EntropyUnits["KilojoulesPerDegreeCelsius"] = 6] = "KilojoulesPerDegreeCelsius";
})(EntropyUnits = exports.EntropyUnits || (exports.EntropyUnits = {}));
/** Entropy is an important concept in the branch of science known as thermodynamics. The idea of "irreversibility" is central to the understanding of entropy.  It is often said that entropy is an expression of the disorder, or randomness of a system, or of our lack of information about it. Entropy is an extensive property. It has the dimension of energy divided by temperature, which has a unit of joules per kelvin (J/K) in the International System of Units */
class Entropy {
    /**
     * Create a new Entropy.
     * @param value The value.
     * @param fromUnit The ‘Entropy’ unit to create from.
     * The default unit is JoulesPerKelvin
     */
    constructor(value, fromUnit = EntropyUnits.JoulesPerKelvin) {
        this.joulesperkelvinLazy = null;
        this.caloriesperkelvinLazy = null;
        this.joulesperdegreecelsiusLazy = null;
        this.kilojoulesperkelvinLazy = null;
        this.megajoulesperkelvinLazy = null;
        this.kilocaloriesperkelvinLazy = null;
        this.kilojoulesperdegreecelsiusLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Entropy is JoulesPerKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get JoulesPerKelvin() {
        if (this.joulesperkelvinLazy !== null) {
            return this.joulesperkelvinLazy;
        }
        return this.joulesperkelvinLazy = this.convertFromBase(EntropyUnits.JoulesPerKelvin);
    }
    /** */
    get CaloriesPerKelvin() {
        if (this.caloriesperkelvinLazy !== null) {
            return this.caloriesperkelvinLazy;
        }
        return this.caloriesperkelvinLazy = this.convertFromBase(EntropyUnits.CaloriesPerKelvin);
    }
    /** */
    get JoulesPerDegreeCelsius() {
        if (this.joulesperdegreecelsiusLazy !== null) {
            return this.joulesperdegreecelsiusLazy;
        }
        return this.joulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.JoulesPerDegreeCelsius);
    }
    /** */
    get KilojoulesPerKelvin() {
        if (this.kilojoulesperkelvinLazy !== null) {
            return this.kilojoulesperkelvinLazy;
        }
        return this.kilojoulesperkelvinLazy = this.convertFromBase(EntropyUnits.KilojoulesPerKelvin);
    }
    /** */
    get MegajoulesPerKelvin() {
        if (this.megajoulesperkelvinLazy !== null) {
            return this.megajoulesperkelvinLazy;
        }
        return this.megajoulesperkelvinLazy = this.convertFromBase(EntropyUnits.MegajoulesPerKelvin);
    }
    /** */
    get KilocaloriesPerKelvin() {
        if (this.kilocaloriesperkelvinLazy !== null) {
            return this.kilocaloriesperkelvinLazy;
        }
        return this.kilocaloriesperkelvinLazy = this.convertFromBase(EntropyUnits.KilocaloriesPerKelvin);
    }
    /** */
    get KilojoulesPerDegreeCelsius() {
        if (this.kilojoulesperdegreecelsiusLazy !== null) {
            return this.kilojoulesperdegreecelsiusLazy;
        }
        return this.kilojoulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.KilojoulesPerDegreeCelsius);
    }
    /**
     * Create a new Entropy instance from a JoulesPerKelvin
     *
     * @param value The unit as JoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromJoulesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.JoulesPerKelvin);
    }
    /**
     * Create a new Entropy instance from a CaloriesPerKelvin
     *
     * @param value The unit as CaloriesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromCaloriesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.CaloriesPerKelvin);
    }
    /**
     * Create a new Entropy instance from a JoulesPerDegreeCelsius
     *
     * @param value The unit as JoulesPerDegreeCelsius to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromJoulesPerDegreeCelsius(value) {
        return new Entropy(value, EntropyUnits.JoulesPerDegreeCelsius);
    }
    /**
     * Create a new Entropy instance from a KilojoulesPerKelvin
     *
     * @param value The unit as KilojoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromKilojoulesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.KilojoulesPerKelvin);
    }
    /**
     * Create a new Entropy instance from a MegajoulesPerKelvin
     *
     * @param value The unit as MegajoulesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromMegajoulesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.MegajoulesPerKelvin);
    }
    /**
     * Create a new Entropy instance from a KilocaloriesPerKelvin
     *
     * @param value The unit as KilocaloriesPerKelvin to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromKilocaloriesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.KilocaloriesPerKelvin);
    }
    /**
     * Create a new Entropy instance from a KilojoulesPerDegreeCelsius
     *
     * @param value The unit as KilojoulesPerDegreeCelsius to create a new Entropy from.
     * @returns The new Entropy instance.
     */
    static FromKilojoulesPerDegreeCelsius(value) {
        return new Entropy(value, EntropyUnits.KilojoulesPerDegreeCelsius);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin:
                return this.value;
            case EntropyUnits.CaloriesPerKelvin:
                return this.value / 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.KilojoulesPerKelvin:
                return (this.value) / 1000;
            case EntropyUnits.MegajoulesPerKelvin:
                return (this.value) / 1000000;
            case EntropyUnits.KilocaloriesPerKelvin:
                return (this.value / 4.184) / 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case EntropyUnits.JoulesPerKelvin:
                return value;
            case EntropyUnits.CaloriesPerKelvin:
                return value * 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return value;
            case EntropyUnits.KilojoulesPerKelvin:
                return (value) * 1000;
            case EntropyUnits.MegajoulesPerKelvin:
                return (value) * 1000000;
            case EntropyUnits.KilocaloriesPerKelvin:
                return (value * 4.184) * 1000;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Entropy to string.
     * Note! the default format for Entropy is JoulesPerKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Entropy.
     * @returns The string format of the Entropy.
     */
    toString(toUnit = EntropyUnits.JoulesPerKelvin) {
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin:
                return this.JoulesPerKelvin + ` J/K`;
            case EntropyUnits.CaloriesPerKelvin:
                return this.CaloriesPerKelvin + ` cal/K`;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.JoulesPerDegreeCelsius + ` J/C`;
            case EntropyUnits.KilojoulesPerKelvin:
                return this.KilojoulesPerKelvin + ` `;
            case EntropyUnits.MegajoulesPerKelvin:
                return this.MegajoulesPerKelvin + ` `;
            case EntropyUnits.KilocaloriesPerKelvin:
                return this.KilocaloriesPerKelvin + ` `;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return this.KilojoulesPerDegreeCelsius + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Entropy are equals to the current Entropy.
     * @param entropy The other Entropy.
     * @returns True if the given Entropy are equal to the current Entropy.
     */
    equals(entropy) {
        return this.value === entropy.BaseValue;
    }
    /**
     * Compare the given Entropy against the current Entropy.
     * @param entropy The other Entropy.
     * @returns 0 if they are equal, -1 if the current Entropy is less then other, 1 if the current Entropy is greater then other.
     */
    compareTo(entropy) {
        if (this.value > entropy.BaseValue)
            return 1;
        if (this.value < entropy.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    add(entropy) {
        return new Entropy(this.value + entropy.BaseValue);
    }
    /**
     * Subtract the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    subtract(entropy) {
        return new Entropy(this.value - entropy.BaseValue);
    }
    /**
     * Multiply the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    multiply(entropy) {
        return new Entropy(this.value * entropy.BaseValue);
    }
    /**
     * Divide the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    divide(entropy) {
        return new Entropy(this.value / entropy.BaseValue);
    }
    /**
     * Modulo the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    modulo(entropy) {
        return new Entropy(this.value % entropy.BaseValue);
    }
    /**
     * Pow the given Entropy with the current Entropy.
     * @param entropy The other Entropy.
     * @returns A new Entropy instance with the results.
     */
    pow(entropy) {
        return new Entropy(this.value ** entropy.BaseValue);
    }
}
exports.Entropy = Entropy;
//# sourceMappingURL=entropy.g.js.map