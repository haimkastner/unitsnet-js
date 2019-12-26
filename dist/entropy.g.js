"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EntropyUnits;
(function (EntropyUnits) {
    EntropyUnits[EntropyUnits["JoulesPerKelvin"] = 0] = "JoulesPerKelvin";
    EntropyUnits[EntropyUnits["CaloriesPerKelvin"] = 1] = "CaloriesPerKelvin";
    EntropyUnits[EntropyUnits["JoulesPerDegreeCelsius"] = 2] = "JoulesPerDegreeCelsius";
    EntropyUnits[EntropyUnits["KilojoulePerKelvin"] = 3] = "KilojoulePerKelvin";
    EntropyUnits[EntropyUnits["MegajoulePerKelvin"] = 4] = "MegajoulePerKelvin";
    EntropyUnits[EntropyUnits["KilocaloriePerKelvin"] = 5] = "KilocaloriePerKelvin";
    EntropyUnits[EntropyUnits["KilojoulePerDegreeCelsius"] = 6] = "KilojoulePerDegreeCelsius";
})(EntropyUnits = exports.EntropyUnits || (exports.EntropyUnits = {}));
class Entropy {
    constructor(value, fromUnit) {
        this.joulesperkelvinLazy = null;
        this.caloriesperkelvinLazy = null;
        this.joulesperdegreecelsiusLazy = null;
        this.kilojouleperkelvinLazy = null;
        this.megajouleperkelvinLazy = null;
        this.kilocalorieperkelvinLazy = null;
        this.kilojouleperdegreecelsiusLazy = null;
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
    get KilojoulePerKelvin() {
        if (this.kilojouleperkelvinLazy !== null) {
            return this.kilojouleperkelvinLazy;
        }
        return this.kilojouleperkelvinLazy = this.convertFromBase(EntropyUnits.KilojoulePerKelvin);
    }
    get MegajoulePerKelvin() {
        if (this.megajouleperkelvinLazy !== null) {
            return this.megajouleperkelvinLazy;
        }
        return this.megajouleperkelvinLazy = this.convertFromBase(EntropyUnits.MegajoulePerKelvin);
    }
    get KilocaloriePerKelvin() {
        if (this.kilocalorieperkelvinLazy !== null) {
            return this.kilocalorieperkelvinLazy;
        }
        return this.kilocalorieperkelvinLazy = this.convertFromBase(EntropyUnits.KilocaloriePerKelvin);
    }
    get KilojoulePerDegreeCelsius() {
        if (this.kilojouleperdegreecelsiusLazy !== null) {
            return this.kilojouleperdegreecelsiusLazy;
        }
        return this.kilojouleperdegreecelsiusLazy = this.convertFromBase(EntropyUnits.KilojoulePerDegreeCelsius);
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
    static FromKilojoulePerKelvin(value) {
        return new Entropy(value, EntropyUnits.KilojoulePerKelvin);
    }
    static FromMegajoulePerKelvin(value) {
        return new Entropy(value, EntropyUnits.MegajoulePerKelvin);
    }
    static FromKilocaloriePerKelvin(value) {
        return new Entropy(value, EntropyUnits.KilocaloriePerKelvin);
    }
    static FromKilojoulePerDegreeCelsius(value) {
        return new Entropy(value, EntropyUnits.KilojoulePerDegreeCelsius);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case EntropyUnits.JoulesPerKelvin:
                return this.value;
            case EntropyUnits.CaloriesPerKelvin:
                return this.value / 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.KilojoulePerKelvin:
                return (this.value) / 1000;
            case EntropyUnits.MegajoulePerKelvin:
                return (this.value) / 1000000;
            case EntropyUnits.KilocaloriePerKelvin:
                return (this.value / 4.184) / 1000;
            case EntropyUnits.KilojoulePerDegreeCelsius:
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
            case EntropyUnits.KilojoulePerKelvin:
                return (value) * 1000;
            case EntropyUnits.MegajoulePerKelvin:
                return (value) * 1000000;
            case EntropyUnits.KilocaloriePerKelvin:
                return (value * 4.184) * 1000;
            case EntropyUnits.KilojoulePerDegreeCelsius:
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
            case EntropyUnits.KilojoulePerKelvin:
                return this.KilojoulePerKelvin + ` J/K`;
            case EntropyUnits.MegajoulePerKelvin:
                return this.MegajoulePerKelvin + ` J/K`;
            case EntropyUnits.KilocaloriePerKelvin:
                return this.KilocaloriePerKelvin + ` cal/K`;
            case EntropyUnits.KilojoulePerDegreeCelsius:
                return this.KilojoulePerDegreeCelsius + ` J/C`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Entropy = Entropy;
//# sourceMappingURL=entropy.g.js.map