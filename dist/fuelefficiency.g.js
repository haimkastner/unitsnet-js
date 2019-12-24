"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuelEfficiencyUnits;
(function (FuelEfficiencyUnits) {
    FuelEfficiencyUnits[FuelEfficiencyUnits["LitersPer100Kilometers"] = 0] = "LitersPer100Kilometers";
    FuelEfficiencyUnits[FuelEfficiencyUnits["MilesPerUsGallon"] = 1] = "MilesPerUsGallon";
    FuelEfficiencyUnits[FuelEfficiencyUnits["MilesPerUkGallon"] = 2] = "MilesPerUkGallon";
    FuelEfficiencyUnits[FuelEfficiencyUnits["KilometersPerLiters"] = 3] = "KilometersPerLiters";
})(FuelEfficiencyUnits = exports.FuelEfficiencyUnits || (exports.FuelEfficiencyUnits = {}));
class FuelEfficiency {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get LitersPer100Kilometers() {
        return this.convertFromBase(FuelEfficiencyUnits.LitersPer100Kilometers);
    }
    get MilesPerUsGallon() {
        return this.convertFromBase(FuelEfficiencyUnits.MilesPerUsGallon);
    }
    get MilesPerUkGallon() {
        return this.convertFromBase(FuelEfficiencyUnits.MilesPerUkGallon);
    }
    get KilometersPerLiters() {
        return this.convertFromBase(FuelEfficiencyUnits.KilometersPerLiters);
    }
    static FromLitersPer100Kilometers(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.LitersPer100Kilometers);
    }
    static FromMilesPerUsGallon(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUsGallon);
    }
    static FromMilesPerUkGallon(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.MilesPerUkGallon);
    }
    static FromKilometersPerLiters(value) {
        return new FuelEfficiency(value, FuelEfficiencyUnits.KilometersPerLiters);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return this.value;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return (100 * 3.785411784) / (1.609344 * this.value);
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return (100 * 4.54609188) / (1.609344 * this.value);
            case FuelEfficiencyUnits.KilometersPerLiters:
                return 100 / this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case FuelEfficiencyUnits.LitersPer100Kilometers:
                return value;
            case FuelEfficiencyUnits.MilesPerUsGallon:
                return (100 * 3.785411784) / (1.609344 * value);
            case FuelEfficiencyUnits.MilesPerUkGallon:
                return (100 * 4.54609188) / (1.609344 * value);
            case FuelEfficiencyUnits.KilometersPerLiters:
                return 100 / value;
            default:
                break;
        }
        return NaN;
    }
}
exports.FuelEfficiency = FuelEfficiency;
//# sourceMappingURL=fuelefficiency.g.js.map