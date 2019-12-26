"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntropyUnits;
(function (EntropyUnits) {
    EntropyUnits[EntropyUnits["JoulesPerKelvin"] = 0] = "JoulesPerKelvin";
    EntropyUnits[EntropyUnits["CaloriesPerKelvin"] = 1] = "CaloriesPerKelvin";
    EntropyUnits[EntropyUnits["JoulesPerDegreeCelsius"] = 2] = "JoulesPerDegreeCelsius";
    EntropyUnits[EntropyUnits["Kilojoulesperkelvin"] = 3] = "Kilojoulesperkelvin";
    EntropyUnits[EntropyUnits["Megajoulesperkelvin"] = 4] = "Megajoulesperkelvin";
    EntropyUnits[EntropyUnits["Kilocaloriesperkelvin"] = 5] = "Kilocaloriesperkelvin";
    EntropyUnits[EntropyUnits["Kilojoulesperdegreecelsius"] = 6] = "Kilojoulesperdegreecelsius";
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
    get Kilojoulesperkelvin() {
        if (this.kilojoulesperkelvinLazy !== null) {
            return this.kilojoulesperkelvinLazy;
        }
        return this.kilojoulesperkelvinLazy = this.convertFromBase(EntropyUnits.Kilojoulesperkelvin);
    }
    get Megajoulesperkelvin() {
        if (this.megajoulesperkelvinLazy !== null) {
            return this.megajoulesperkelvinLazy;
        }
        return this.megajoulesperkelvinLazy = this.convertFromBase(EntropyUnits.Megajoulesperkelvin);
    }
    get Kilocaloriesperkelvin() {
        if (this.kilocaloriesperkelvinLazy !== null) {
            return this.kilocaloriesperkelvinLazy;
        }
        return this.kilocaloriesperkelvinLazy = this.convertFromBase(EntropyUnits.Kilocaloriesperkelvin);
    }
    get Kilojoulesperdegreecelsius() {
        if (this.kilojoulesperdegreecelsiusLazy !== null) {
            return this.kilojoulesperdegreecelsiusLazy;
        }
        return this.kilojoulesperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.Kilojoulesperdegreecelsius);
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
    static FromKilojoulesperkelvin(value) {
        return new Entropy(value, EntropyUnits.Kilojoulesperkelvin);
    }
    static FromMegajoulesperkelvin(value) {
        return new Entropy(value, EntropyUnits.Megajoulesperkelvin);
    }
    static FromKilocaloriesperkelvin(value) {
        return new Entropy(value, EntropyUnits.Kilocaloriesperkelvin);
    }
    static FromKilojoulesperdegreecelsius(value) {
        return new Entropy(value, EntropyUnits.Kilojoulesperdegreecelsius);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin:
                return this.value;
            case EntropyUnits.CaloriesPerKelvin:
                return this.value / 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.Kilojoulesperkelvin:
                return (this.value) / 1000;
            case EntropyUnits.Megajoulesperkelvin:
                return (this.value) / 1000000;
            case EntropyUnits.Kilocaloriesperkelvin:
                return (this.value / 4.184) / 1000;
            case EntropyUnits.Kilojoulesperdegreecelsius:
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
            case EntropyUnits.Kilojoulesperkelvin:
                return (value) * 1000;
            case EntropyUnits.Megajoulesperkelvin:
                return (value) * 1000000;
            case EntropyUnits.Kilocaloriesperkelvin:
                return (value * 4.184) * 1000;
            case EntropyUnits.Kilojoulesperdegreecelsius:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Entropy = Entropy;
//# sourceMappingURL=entropy.g.js.map