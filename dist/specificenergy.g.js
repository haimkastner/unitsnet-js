"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificEnergyUnits;
(function (SpecificEnergyUnits) {
    SpecificEnergyUnits[SpecificEnergyUnits["JoulesPerKilogram"] = 0] = "JoulesPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["CaloriesPerGram"] = 1] = "CaloriesPerGram";
    SpecificEnergyUnits[SpecificEnergyUnits["WattHoursPerKilogram"] = 2] = "WattHoursPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["BtuPerPound"] = 3] = "BtuPerPound";
    SpecificEnergyUnits[SpecificEnergyUnits["Kilojoulesperkilogram"] = 4] = "Kilojoulesperkilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["Megajoulesperkilogram"] = 5] = "Megajoulesperkilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["Kilocaloriespergram"] = 6] = "Kilocaloriespergram";
    SpecificEnergyUnits[SpecificEnergyUnits["Kilowatthoursperkilogram"] = 7] = "Kilowatthoursperkilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["Megawatthoursperkilogram"] = 8] = "Megawatthoursperkilogram";
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
    get Kilojoulesperkilogram() {
        if (this.kilojoulesperkilogramLazy !== null) {
            return this.kilojoulesperkilogramLazy;
        }
        return this.kilojoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Kilojoulesperkilogram);
    }
    get Megajoulesperkilogram() {
        if (this.megajoulesperkilogramLazy !== null) {
            return this.megajoulesperkilogramLazy;
        }
        return this.megajoulesperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Megajoulesperkilogram);
    }
    get Kilocaloriespergram() {
        if (this.kilocaloriespergramLazy !== null) {
            return this.kilocaloriespergramLazy;
        }
        return this.kilocaloriespergramLazy = this.convertFromBase(SpecificEnergyUnits.Kilocaloriespergram);
    }
    get Kilowatthoursperkilogram() {
        if (this.kilowatthoursperkilogramLazy !== null) {
            return this.kilowatthoursperkilogramLazy;
        }
        return this.kilowatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Kilowatthoursperkilogram);
    }
    get Megawatthoursperkilogram() {
        if (this.megawatthoursperkilogramLazy !== null) {
            return this.megawatthoursperkilogramLazy;
        }
        return this.megawatthoursperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.Megawatthoursperkilogram);
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
    static FromKilojoulesperkilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.Kilojoulesperkilogram);
    }
    static FromMegajoulesperkilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.Megajoulesperkilogram);
    }
    static FromKilocaloriespergram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.Kilocaloriespergram);
    }
    static FromKilowatthoursperkilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.Kilowatthoursperkilogram);
    }
    static FromMegawatthoursperkilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.Megawatthoursperkilogram);
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
            case SpecificEnergyUnits.Kilojoulesperkilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.Megajoulesperkilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.Kilocaloriespergram:
                return (this.value / 4.184e3) / 1000;
            case SpecificEnergyUnits.Kilowatthoursperkilogram:
                return (this.value / 3.6e3) / 1000;
            case SpecificEnergyUnits.Megawatthoursperkilogram:
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
            case SpecificEnergyUnits.Kilojoulesperkilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.Megajoulesperkilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.Kilocaloriespergram:
                return (value * 4.184e3) * 1000;
            case SpecificEnergyUnits.Kilowatthoursperkilogram:
                return (value * 3.6e3) * 1000;
            case SpecificEnergyUnits.Megawatthoursperkilogram:
                return (value * 3.6e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.SpecificEnergy = SpecificEnergy;
//# sourceMappingURL=specificenergy.g.js.map