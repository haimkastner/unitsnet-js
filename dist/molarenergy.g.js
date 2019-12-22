"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarEnergyUnits;
(function (MolarEnergyUnits) {
    MolarEnergyUnits[MolarEnergyUnits["JoulesPerMole"] = 0] = "JoulesPerMole";
    MolarEnergyUnits[MolarEnergyUnits["Kilojoulespermole"] = 1] = "Kilojoulespermole";
    MolarEnergyUnits[MolarEnergyUnits["Megajoulespermole"] = 2] = "Megajoulespermole";
})(MolarEnergyUnits = exports.MolarEnergyUnits || (exports.MolarEnergyUnits = {}));
class MolarEnergy {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerMole() {
        return this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }
    get Kilojoulespermole() {
        return this.convertFromBase(MolarEnergyUnits.Kilojoulespermole);
    }
    get Megajoulespermole() {
        return this.convertFromBase(MolarEnergyUnits.Megajoulespermole);
    }
    static FromJoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }
    static FromKilojoulespermole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.Kilojoulespermole);
    }
    static FromMegajoulespermole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.Megajoulespermole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.Kilojoulespermole:
                return (this.value) * 1000;
            case MolarEnergyUnits.Megajoulespermole:
                return (this.value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.Kilojoulespermole:
                return (this.value) / 1000;
            case MolarEnergyUnits.Megajoulespermole:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MolarEnergy = MolarEnergy;
//# sourceMappingURL=molarenergy.g.js.map