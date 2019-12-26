"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntropyUnits;
(function (EntropyUnits) {
    EntropyUnits[EntropyUnits["JoulesPerKelvin"] = 0] = "JoulesPerKelvin";
    EntropyUnits[EntropyUnits["CaloriesPerKelvin"] = 1] = "CaloriesPerKelvin";
    EntropyUnits[EntropyUnits["JoulesPerDegreeCelsius"] = 2] = "JoulesPerDegreeCelsius";
    EntropyUnits[EntropyUnits["KilojoulesPerKelvin"] = 3] = "KilojoulesPerKelvin";
    EntropyUnits[EntropyUnits["MegajoulesPerKelvin"] = 4] = "MegajoulesPerKelvin";
    EntropyUnits[EntropyUnits["KilocaloriesPerKelvin"] = 5] = "KilocaloriesPerKelvin";
    EntropyUnits[EntropyUnits["KilojoulesPerDegreeCelsius"] = 6] = "KilojoulesPerDegreeCelsius";
})(EntropyUnits = exports.EntropyUnits || (exports.EntropyUnits = {}));
class Entropy {
    constructor(value, fromUnit) {
        this.joulesperkelvinLazy = null;
        this.caloriesperkelvinLazy = null;
        this.joulesperdegreecelsiusLazy = null;
        this.kilojoulesperkelvinLazy = null;
        this.megajoulesperkelvinLazy = null;
        this.kilocaloriesperkelvinLazy = null;
        this.kilojoulesperdegreecelsiusLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerKelvin() {
        if (this.joulesperkelvinLazy !== null) {
            return this.joulesperkelvinLazy;
        }
        return this.joulesperkelvinLazy = this.convertFromBase(EntropyUnits.JoulesPerKelvin);
    }
    get CaloriesPerKelvin() {
        if (this.caloriesperkelvinLazy !== null) {
            return this.caloriesperkelvinLazy;
        }
        return this.caloriesperkelvinLazy = this.convertFromBase(EntropyUnits.CaloriesPerKelvin);
    }
    get JoulesPerDegreeCelsius() {
        if (this.joulesperdegreecelsiusLazy !== null) {
            return this.joulesperdegreecelsiusLazy;
        }
        return this.joulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.JoulesPerDegreeCelsius);
    }
    get KilojoulesPerKelvin() {
        if (this.kilojoulesperkelvinLazy !== null) {
            return this.kilojoulesperkelvinLazy;
        }
        return this.kilojoulesperkelvinLazy = this.convertFromBase(EntropyUnits.KilojoulesPerKelvin);
    }
    get MegajoulesPerKelvin() {
        if (this.megajoulesperkelvinLazy !== null) {
            return this.megajoulesperkelvinLazy;
        }
        return this.megajoulesperkelvinLazy = this.convertFromBase(EntropyUnits.MegajoulesPerKelvin);
    }
    get KilocaloriesPerKelvin() {
        if (this.kilocaloriesperkelvinLazy !== null) {
            return this.kilocaloriesperkelvinLazy;
        }
        return this.kilocaloriesperkelvinLazy = this.convertFromBase(EntropyUnits.KilocaloriesPerKelvin);
    }
    get KilojoulesPerDegreeCelsius() {
        if (this.kilojoulesperdegreecelsiusLazy !== null) {
            return this.kilojoulesperdegreecelsiusLazy;
        }
        return this.kilojoulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.KilojoulesPerDegreeCelsius);
    }
    static FromJoulesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.JoulesPerKelvin);
    }
    static FromCaloriesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.CaloriesPerKelvin);
    }
    static FromJoulesPerDegreeCelsius(value) {
        return new Entropy(value, EntropyUnits.JoulesPerDegreeCelsius);
    }
    static FromKilojoulesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.KilojoulesPerKelvin);
    }
    static FromMegajoulesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.MegajoulesPerKelvin);
    }
    static FromKilocaloriesPerKelvin(value) {
        return new Entropy(value, EntropyUnits.KilocaloriesPerKelvin);
    }
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
    toString(toUnit = EntropyUnits.JoulesPerKelvin) {
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin:
                return this.JoulesPerKelvin + ` J/K`;
            case EntropyUnits.CaloriesPerKelvin:
                return this.CaloriesPerKelvin + ` cal/K`;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.JoulesPerDegreeCelsius + ` J/C`;
            case EntropyUnits.KilojoulesPerKelvin:
                return this.KilojoulesPerKelvin + ` J/K`;
            case EntropyUnits.MegajoulesPerKelvin:
                return this.MegajoulesPerKelvin + ` J/K`;
            case EntropyUnits.KilocaloriesPerKelvin:
                return this.KilocaloriesPerKelvin + ` cal/K`;
            case EntropyUnits.KilojoulesPerDegreeCelsius:
                return this.KilojoulesPerDegreeCelsius + ` J/C`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Entropy = Entropy;
//# sourceMappingURL=entropy.g.js.map