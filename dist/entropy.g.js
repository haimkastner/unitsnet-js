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
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerKelvin() {
        return this.convertFromBase(EntropyUnits.JoulesPerKelvin);
    }
    get CaloriesPerKelvin() {
        return this.convertFromBase(EntropyUnits.CaloriesPerKelvin);
    }
    get JoulesPerDegreeCelsius() {
        return this.convertFromBase(EntropyUnits.JoulesPerDegreeCelsius);
    }
    get Kilojoulesperkelvin() {
        return this.convertFromBase(EntropyUnits.Kilojoulesperkelvin);
    }
    get Megajoulesperkelvin() {
        return this.convertFromBase(EntropyUnits.Megajoulesperkelvin);
    }
    get Kilocaloriesperkelvin() {
        return this.convertFromBase(EntropyUnits.Kilocaloriesperkelvin);
    }
    get Kilojoulesperdegreecelsius() {
        return this.convertFromBase(EntropyUnits.Kilojoulesperdegreecelsius);
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
                return this.value * 4.184;
            case EntropyUnits.JoulesPerDegreeCelsius:
                return this.value;
            case EntropyUnits.Kilojoulesperkelvin:
                return (this.value) * 1000;
            case EntropyUnits.Megajoulesperkelvin:
                return (this.value) * 1000000;
            case EntropyUnits.Kilocaloriesperkelvin:
                return (this.value / 4.184) * 1000;
            case EntropyUnits.Kilojoulesperdegreecelsius:
                return (this.value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
                return (this.value * 4.184) / 1000;
            case EntropyUnits.Kilojoulesperdegreecelsius:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Entropy = Entropy;
//# sourceMappingURL=entropy.g.js.map