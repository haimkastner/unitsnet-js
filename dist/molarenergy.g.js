"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarEnergyUnits;
(function (MolarEnergyUnits) {
    MolarEnergyUnits[MolarEnergyUnits["JoulesPerMole"] = 0] = "JoulesPerMole";
    MolarEnergyUnits[MolarEnergyUnits["KilojoulesPerMole"] = 1] = "KilojoulesPerMole";
    MolarEnergyUnits[MolarEnergyUnits["MegajoulesPerMole"] = 2] = "MegajoulesPerMole";
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
    get KilojoulesPerMole() {
        if (this.kilojoulespermoleLazy !== null) {
            return this.kilojoulespermoleLazy;
        }
        return this.kilojoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulesPerMole);
    }
    get MegajoulesPerMole() {
        if (this.megajoulespermoleLazy !== null) {
            return this.megajoulespermoleLazy;
        }
        return this.megajoulespermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulesPerMole);
    }
    static FromJoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }
    static FromKilojoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulesPerMole);
    }
    static FromMegajoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.MegajoulesPerMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.KilojoulesPerMole:
                return (this.value) / 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
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
            case MolarEnergyUnits.KilojoulesPerMole:
                return (value) * 1000;
            case MolarEnergyUnits.MegajoulesPerMole:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MolarEnergyUnits.JoulesPerMole) {
        switch (toUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.JoulesPerMole + ` J/mol`;
            case MolarEnergyUnits.KilojoulesPerMole:
                return this.KilojoulesPerMole + ` J/mol`;
            case MolarEnergyUnits.MegajoulesPerMole:
                return this.MegajoulesPerMole + ` J/mol`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarEnergy = MolarEnergy;
//# sourceMappingURL=molarenergy.g.js.map