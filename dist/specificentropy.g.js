"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificEntropyUnits;
(function (SpecificEntropyUnits) {
    SpecificEntropyUnits[SpecificEntropyUnits["JoulesPerKilogramKelvin"] = 0] = "JoulesPerKilogramKelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["JoulesPerKilogramDegreeCelsius"] = 1] = "JoulesPerKilogramDegreeCelsius";
    SpecificEntropyUnits[SpecificEntropyUnits["CaloriesPerGramKelvin"] = 2] = "CaloriesPerGramKelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["BtusPerPoundFahrenheit"] = 3] = "BtusPerPoundFahrenheit";
    SpecificEntropyUnits[SpecificEntropyUnits["Kilojoulesperkilogramkelvin"] = 4] = "Kilojoulesperkilogramkelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["Megajoulesperkilogramkelvin"] = 5] = "Megajoulesperkilogramkelvin";
    SpecificEntropyUnits[SpecificEntropyUnits["Kilojoulesperkilogramdegreecelsius"] = 6] = "Kilojoulesperkilogramdegreecelsius";
    SpecificEntropyUnits[SpecificEntropyUnits["Megajoulesperkilogramdegreecelsius"] = 7] = "Megajoulesperkilogramdegreecelsius";
    SpecificEntropyUnits[SpecificEntropyUnits["Kilocaloriespergramkelvin"] = 8] = "Kilocaloriespergramkelvin";
})(SpecificEntropyUnits = exports.SpecificEntropyUnits || (exports.SpecificEntropyUnits = {}));
class SpecificEntropy {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerKilogramKelvin() {
        return this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramKelvin);
    }
    get JoulesPerKilogramDegreeCelsius() {
        return this.convertFromBase(SpecificEntropyUnits.JoulesPerKilogramDegreeCelsius);
    }
    get CaloriesPerGramKelvin() {
        return this.convertFromBase(SpecificEntropyUnits.CaloriesPerGramKelvin);
    }
    get BtusPerPoundFahrenheit() {
        return this.convertFromBase(SpecificEntropyUnits.BtusPerPoundFahrenheit);
    }
    get Kilojoulesperkilogramkelvin() {
        return this.convertFromBase(SpecificEntropyUnits.Kilojoulesperkilogramkelvin);
    }
    get Megajoulesperkilogramkelvin() {
        return this.convertFromBase(SpecificEntropyUnits.Megajoulesperkilogramkelvin);
    }
    get Kilojoulesperkilogramdegreecelsius() {
        return this.convertFromBase(SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius);
    }
    get Megajoulesperkilogramdegreecelsius() {
        return this.convertFromBase(SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius);
    }
    get Kilocaloriespergramkelvin() {
        return this.convertFromBase(SpecificEntropyUnits.Kilocaloriespergramkelvin);
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
    static FromKilojoulesperkilogramkelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.Kilojoulesperkilogramkelvin);
    }
    static FromMegajoulesperkilogramkelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.Megajoulesperkilogramkelvin);
    }
    static FromKilojoulesperkilogramdegreecelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius);
    }
    static FromMegajoulesperkilogramdegreecelsius(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius);
    }
    static FromKilocaloriespergramkelvin(value) {
        return new SpecificEntropy(value, SpecificEntropyUnits.Kilocaloriespergramkelvin);
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
            case SpecificEntropyUnits.Kilojoulesperkilogramkelvin:
                return (this.value) * 1000;
            case SpecificEntropyUnits.Megajoulesperkilogramkelvin:
                return (this.value) * 1000000;
            case SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius:
                return (this.value) * 1000;
            case SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius:
                return (this.value) * 1000000;
            case SpecificEntropyUnits.Kilocaloriespergramkelvin:
                return (this.value * 4.184e3) * 1000;
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
            case SpecificEntropyUnits.Kilojoulesperkilogramkelvin:
                return (value) / 1000;
            case SpecificEntropyUnits.Megajoulesperkilogramkelvin:
                return (value) / 1000000;
            case SpecificEntropyUnits.Kilojoulesperkilogramdegreecelsius:
                return (value) / 1000;
            case SpecificEntropyUnits.Megajoulesperkilogramdegreecelsius:
                return (value) / 1000000;
            case SpecificEntropyUnits.Kilocaloriespergramkelvin:
                return (value / 4.184e3) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.SpecificEntropy = SpecificEntropy;
//# sourceMappingURL=specificentropy.g.js.map