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
        this.joulespermoleLazy = null;
        this.kilojoulespermoleLazy = null;
        this.megajoulespermoleLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerMole() {
        if (this.joulespermoleLazy !== null) {
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }
    get Kilojoulespermole() {
        if (this.kilojoulespermoleLazy !== null) {
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.Kilojoulespermole);
    }
    get Megajoulespermole() {
        if (this.megajoulespermoleLazy !== null) {
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.Megajoulespermole);
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
                return (this.value) / 1000;
            case MolarEnergyUnits.Megajoulespermole:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return value;
            case MolarEnergyUnits.Kilojoulespermole:
                return (value) * 1000;
            case MolarEnergyUnits.Megajoulespermole:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MolarEnergy = MolarEnergy;
//# sourceMappingURL=molarenergy.g.js.map