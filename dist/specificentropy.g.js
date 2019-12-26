"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificEntropyUnits;
(function (SpecificEntropyUnits) {
    SpecificEntropyUnits[SpecificEntropyUnits["JoulesPerKilogramKelvin"] = 0] = "JoulesPerKilogramKelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["JoulesPerKilogramDegreeCelsius"] = 1] = "JoulesPerKilogramDegreeCelsius";
    SpecificEntropyUnits[SpecificEntropyUnits["CaloriesPerGramKelvin"] = 2] = "CaloriesPerGramKelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["BtusPerPoundFahrenheit"] = 3] = "BtusPerPoundFahrenheit";
    SpecificEntropyUnits[SpecificEntropyUnits["KilojoulePerKilogramKelvin"] = 4] = "KilojoulePerKilogramKelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["MegajoulePerKilogramKelvin"] = 5] = "MegajoulePerKilogramKelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["KilojoulePerKilogramDegreeCelsius"] = 6] = "KilojoulePerKilogramDegreeCelsius";
    SpecificEntropyUnits[SpecificEntropyUnits["MegajoulePerKilogramDegreeCelsius"] = 7] = "MegajoulePerKilogramDegreeCelsius";
    SpecificEntropyUnits[SpecificEntropyUnits["KilocaloriePerGramKelvin"] = 8] = "KilocaloriePerGramKelvin";
})(SpecificEntropyUnits = exports.SpecificEntropyUnits || (exports.SpecificEntropyUnits = {}));
class SpecificEntropy {
    constructor(value, fromUnit) {
        this.joulesperkilogramkelvinLazy = null;
        this.joulesperkilogramdegreecelsiusLazy = null;
        this.caloriespergramkelvinLazy = null;
        this.btusperpoundfahrenheitLazy = null;
        this.kilojouleperkilogramkelvinLazy = null;
        this.megajouleperkilogramkelvinLazy = null;
        this.kilojouleperkilogramdegreecelsiusLazy = null;
        this.megajouleperkilogramdegreecelsiusLazy = null;
        this.kilocaloriepergramkelvinLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerKilogramKelvin() {
        if (this.joulesperkilogramkelvinLazy !== null) {
            return this.joulesperkilogramkelvinLazy;
        }
        return this.joulesperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }
    get JoulesPerKilogramDegreeCelsius() {
        if (this.joulesperkilogramdegreecelsiusLazy !== null) {
            return this.joulesperkilogramdegreecelsiusLazy;
        }
        return this.joulesperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }
    get CaloriesPerGramKelvin() {
        if (this.caloriespergramkelvinLazy !== null) {
            return this.caloriespergramkelvinLazy;
        }
        return this.caloriespergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }
    get BtusPerPoundFahrenheit() {
        if (this.btusperpoundfahrenheitLazy !== null) {
            return this.btusperpoundfahrenheitLazy;
        }
        return this.btusperpoundfahrenheitLazy = this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }
    get KilojoulePerKilogramKelvin() {
        if (this.kilojouleperkilogramkelvinLazy !== null) {
            return this.kilojouleperkilogramkelvinLazy;
        }
        return this.kilojouleperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulePerKilogramKelvin);
    }
    get MegajoulePerKilogramKelvin() {
        if (this.megajouleperkilogramkelvinLazy !== null) {
            return this.megajouleperkilogramkelvinLazy;
        }
        return this.megajouleperkilogramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulePerKilogramKelvin);
    }
    get KilojoulePerKilogramDegreeCelsius() {
        if (this.kilojouleperkilogramdegreecelsiusLazy !== null) {
            return this.kilojouleperkilogramdegreecelsiusLazy;
        }
        return this.kilojouleperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius);
    }
    get MegajoulePerKilogramDegreeCelsius() {
        if (this.megajouleperkilogramdegreecelsiusLazy !== null) {
            return this.megajouleperkilogramdegreecelsiusLazy;
        }
        return this.megajouleperkilogramdegreecelsiusLazy = this.convertFromBase(SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius);
    }
    get KilocaloriePerGramKelvin() {
        if (this.kilocaloriepergramkelvinLazy !== null) {
            return this.kilocaloriepergramkelvinLazy;
        }
        return this.kilocaloriepergramkelvinLazy = this.convertFromBase(SpecificEntropyUnits.KilocaloriePerGramKelvin);
    }
    static FromJoulesPerKilogramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }
    static FromJoulesPerKilogramDegreeCelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }
    static FromCaloriesPerGramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.CaloriesPerGramKelvin);
    }
    static FromBtusPerPoundFahrenheit(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }
    static FromKilojoulePerKilogramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulePerKilogramKelvin);
    }
    static FromMegajoulePerKilogramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulePerKilogramKelvin);
    }
    static FromKilojoulePerKilogramDegreeCelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius);
    }
    static FromMegajoulePerKilogramDegreeCelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius);
    }
    static FromKilocaloriePerGramKelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.KilocaloriePerGramKelvin);
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
            case SpecificEntropyUnits.KilojoulePerKilogramKelvin:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramKelvin:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius:
                return (this.value) / 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius:
                return (this.value) / 1000000;
            case SpecificEntropyUnits.KilocaloriePerGramKelvin:
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
            case SpecificEntropyUnits.KilojoulePerKilogramKelvin:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramKelvin:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius:
                return (value) * 1000;
            case SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius:
                return (value) * 1000000;
            case SpecificEntropyUnits.KilocaloriePerGramKelvin:
                return (value * 4.184e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
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
            case SpecificEntropyUnits.KilojoulePerKilogramKelvin:
                return this.KilojoulePerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.MegajoulePerKilogramKelvin:
                return this.MegajoulePerKilogramKelvin + ` J/kg.K`;
            case SpecificEntropyUnits.KilojoulePerKilogramDegreeCelsius:
                return this.KilojoulePerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.MegajoulePerKilogramDegreeCelsius:
                return this.MegajoulePerKilogramDegreeCelsius + ` J/kg.C`;
            case SpecificEntropyUnits.KilocaloriePerGramKelvin:
                return this.KilocaloriePerGramKelvin + ` cal/g.K`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificEntropy = SpecificEntropy;
//# sourceMappingURL=specificentropy.g.js.map