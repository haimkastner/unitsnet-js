"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificEnergyUnits;
(function (SpecificEnergyUnits) {
    SpecificEnergyUnits[SpecificEnergyUnits["JoulesPerKilogram"] = 0] = "JoulesPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["CaloriesPerGram"] = 1] = "CaloriesPerGram";
    SpecificEnergyUnits[SpecificEnergyUnits["WattHoursPerKilogram"] = 2] = "WattHoursPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["BtuPerPound"] = 3] = "BtuPerPound";
    SpecificEnergyUnits[SpecificEnergyUnits["KilojoulesPerKilogram"] = 4] = "KilojoulesPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["MegajoulesPerKilogram"] = 5] = "MegajoulesPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["KilocaloriesPerGram"] = 6] = "KilocaloriesPerGram";
    SpecificEnergyUnits[SpecificEnergyUnits["KilowattHoursPerKilogram"] = 7] = "KilowattHoursPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["MegawattHoursPerKilogram"] = 8] = "MegawattHoursPerKilogram";
})(SpecificEnergyUnits = exports.SpecificEnergyUnits || (exports.SpecificEnergyUnits = {}));
class SpecificEnergy {
    constructor(value, fromUnit) {
        this.joulesperkilogramLazy = null;
        this.caloriespergramLazy = null;
        this.watthoursperkilogramLazy = null;
        this.btuperpoundLazy = null;
        this.kilojoulesperkilogramLazy = null;
        this.megajoulesperkilogramLazy = null;
        this.kilocaloriespergramLazy = null;
        this.kilowatthoursperkilogramLazy = null;
        this.megawatthoursperkilogramLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerKilogram() {
        if (this.joulesperkilogramLazy !== null) {
            return this.joulesperkilogramLazy;
        }
        return this.joulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
    }
    get CaloriesPerGram() {
        if (this.caloriespergramLazy !== null) {
            return this.caloriespergramLazy;
        }
        return this.caloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.CaloriesPerGram);
    }
    get WattHoursPerKilogram() {
        if (this.watthoursperkilogramLazy !== null) {
            return this.watthoursperkilogramLazy;
        }
        return this.watthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.WattHoursPerKilogram);
    }
    get BtuPerPound() {
        if (this.btuperpoundLazy !== null) {
            return this.btuperpoundLazy;
        }
        return this.btuperpoundLazy = this.convertFromBase(SpecificEnergyUnits.BtuPerPound);
    }
    get KilojoulesPerKilogram() {
        if (this.kilojoulesperkilogramLazy !== null) {
            return this.kilojoulesperkilogramLazy;
        }
        return this.kilojoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilojoulesPerKilogram);
    }
    get MegajoulesPerKilogram() {
        if (this.megajoulesperkilogramLazy !== null) {
            return this.megajoulesperkilogramLazy;
        }
        return this.megajoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegajoulesPerKilogram);
    }
    get KilocaloriesPerGram() {
        if (this.kilocaloriespergramLazy !== null) {
            return this.kilocaloriespergramLazy;
        }
        return this.kilocaloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.KilocaloriesPerGram);
    }
    get KilowattHoursPerKilogram() {
        if (this.kilowatthoursperkilogramLazy !== null) {
            return this.kilowatthoursperkilogramLazy;
        }
        return this.kilowatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHoursPerKilogram);
    }
    get MegawattHoursPerKilogram() {
        if (this.megawatthoursperkilogramLazy !== null) {
            return this.megawatthoursperkilogramLazy;
        }
        return this.megawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHoursPerKilogram);
    }
    static FromJoulesPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.JoulesPerKilogram);
    }
    static FromCaloriesPerGram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.CaloriesPerGram);
    }
    static FromWattHoursPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.WattHoursPerKilogram);
    }
    static FromBtuPerPound(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.BtuPerPound);
    }
    static FromKilojoulesPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilojoulesPerKilogram);
    }
    static FromMegajoulesPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegajoulesPerKilogram);
    }
    static FromKilocaloriesPerGram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilocaloriesPerGram);
    }
    static FromKilowattHoursPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHoursPerKilogram);
    }
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
                return this.KilojoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.MegajoulesPerKilogram:
                return this.MegajoulesPerKilogram + ` J/kg`;
            case SpecificEnergyUnits.KilocaloriesPerGram:
                return this.KilocaloriesPerGram + ` cal/g`;
            case SpecificEnergyUnits.KilowattHoursPerKilogram:
                return this.KilowattHoursPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.MegawattHoursPerKilogram:
                return this.MegawattHoursPerKilogram + ` Wh/kg`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificEnergy = SpecificEnergy;
//# sourceMappingURL=specificenergy.g.js.map