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
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerKilogram() {
        return this.convertFromBase(SpecificEnergyUnits.JoulesPerKilogram);
    }
    get CaloriesPerGram() {
        return this.convertFromBase(SpecificEnergyUnits.CaloriesPerGram);
    }
    get WattHoursPerKilogram() {
        return this.convertFromBase(SpecificEnergyUnits.WattHoursPerKilogram);
    }
    get BtuPerPound() {
        return this.convertFromBase(SpecificEnergyUnits.BtuPerPound);
    }
    get Kilojoulesperkilogram() {
        return this.convertFromBase(SpecificEnergyUnits.Kilojoulesperkilogram);
    }
    get Megajoulesperkilogram() {
        return this.convertFromBase(SpecificEnergyUnits.Megajoulesperkilogram);
    }
    get Kilocaloriespergram() {
        return this.convertFromBase(SpecificEnergyUnits.Kilocaloriespergram);
    }
    get Kilowatthoursperkilogram() {
        return this.convertFromBase(SpecificEnergyUnits.Kilowatthoursperkilogram);
    }
    get Megawatthoursperkilogram() {
        return this.convertFromBase(SpecificEnergyUnits.Megawatthoursperkilogram);
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