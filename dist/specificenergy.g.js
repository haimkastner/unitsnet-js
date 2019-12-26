"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpecificEnergyUnits;
(function (SpecificEnergyUnits) {
    SpecificEnergyUnits[SpecificEnergyUnits["JoulesPerKilogram"] = 0] = "JoulesPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["CaloriesPerGram"] = 1] = "CaloriesPerGram";
    SpecificEnergyUnits[SpecificEnergyUnits["WattHoursPerKilogram"] = 2] = "WattHoursPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["BtuPerPound"] = 3] = "BtuPerPound";
    SpecificEnergyUnits[SpecificEnergyUnits["KilojoulePerKilogram"] = 4] = "KilojoulePerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["MegajoulePerKilogram"] = 5] = "MegajoulePerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["KilocaloriePerGram"] = 6] = "KilocaloriePerGram";
    SpecificEnergyUnits[SpecificEnergyUnits["KilowattHourPerKilogram"] = 7] = "KilowattHourPerKilogram";
    SpecificEnergyUnits[SpecificEnergyUnits["MegawattHourPerKilogram"] = 8] = "MegawattHourPerKilogram";
})(SpecificEnergyUnits = exports.SpecificEnergyUnits || (exports.SpecificEnergyUnits = {}));
class SpecificEnergy {
    constructor(value, fromUnit) {
        this.joulesperkilogramLazy = null;
        this.caloriespergramLazy = null;
        this.watthoursperkilogramLazy = null;
        this.btuperpoundLazy = null;
        this.kilojouleperkilogramLazy = null;
        this.megajouleperkilogramLazy = null;
        this.kilocaloriepergramLazy = null;
        this.kilowatthourperkilogramLazy = null;
        this.megawatthourperkilogramLazy = null;
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
    get KilojoulePerKilogram() {
        if (this.kilojouleperkilogramLazy !== null) {
            return this.kilojouleperkilogramLazy;
        }
        return this.kilojouleperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilojoulePerKilogram);
    }
    get MegajoulePerKilogram() {
        if (this.megajouleperkilogramLazy !== null) {
            return this.megajouleperkilogramLazy;
        }
        return this.megajouleperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegajoulePerKilogram);
    }
    get KilocaloriePerGram() {
        if (this.kilocaloriepergramLazy !== null) {
            return this.kilocaloriepergramLazy;
        }
        return this.kilocaloriepergramLazy = this.convertFromBase(SpecificEnergyUnits.KilocaloriePerGram);
    }
    get KilowattHourPerKilogram() {
        if (this.kilowatthourperkilogramLazy !== null) {
            return this.kilowatthourperkilogramLazy;
        }
        return this.kilowatthourperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.KilowattHourPerKilogram);
    }
    get MegawattHourPerKilogram() {
        if (this.megawatthourperkilogramLazy !== null) {
            return this.megawatthourperkilogramLazy;
        }
        return this.megawatthourperkilogramLazy = this.convertFromBase(SpecificEnergyUnits.MegawattHourPerKilogram);
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
    static FromKilojoulePerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilojoulePerKilogram);
    }
    static FromMegajoulePerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegajoulePerKilogram);
    }
    static FromKilocaloriePerGram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilocaloriePerGram);
    }
    static FromKilowattHourPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.KilowattHourPerKilogram);
    }
    static FromMegawattHourPerKilogram(value) {
        return new SpecificEnergy(value, SpecificEnergyUnits.MegawattHourPerKilogram);
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
            case SpecificEnergyUnits.KilojoulePerKilogram:
                return (this.value) / 1000;
            case SpecificEnergyUnits.MegajoulePerKilogram:
                return (this.value) / 1000000;
            case SpecificEnergyUnits.KilocaloriePerGram:
                return (this.value / 4.184e3) / 1000;
            case SpecificEnergyUnits.KilowattHourPerKilogram:
                return (this.value / 3.6e3) / 1000;
            case SpecificEnergyUnits.MegawattHourPerKilogram:
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
            case SpecificEnergyUnits.KilojoulePerKilogram:
                return (value) * 1000;
            case SpecificEnergyUnits.MegajoulePerKilogram:
                return (value) * 1000000;
            case SpecificEnergyUnits.KilocaloriePerGram:
                return (value * 4.184e3) * 1000;
            case SpecificEnergyUnits.KilowattHourPerKilogram:
                return (value * 3.6e3) * 1000;
            case SpecificEnergyUnits.MegawattHourPerKilogram:
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
            case SpecificEnergyUnits.KilojoulePerKilogram:
                return this.KilojoulePerKilogram + ` J/kg`;
            case SpecificEnergyUnits.MegajoulePerKilogram:
                return this.MegajoulePerKilogram + ` J/kg`;
            case SpecificEnergyUnits.KilocaloriePerGram:
                return this.KilocaloriePerGram + ` cal/g`;
            case SpecificEnergyUnits.KilowattHourPerKilogram:
                return this.KilowattHourPerKilogram + ` Wh/kg`;
            case SpecificEnergyUnits.MegawattHourPerKilogram:
                return this.MegawattHourPerKilogram + ` Wh/kg`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificEnergy = SpecificEnergy;
//# sourceMappingURL=specificenergy.g.js.map