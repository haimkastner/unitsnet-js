"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarEnergyUnits;
(function (MolarEnergyUnits) {
    MolarEnergyUnits[MolarEnergyUnits["JoulesPerMole"] = 0] = "JoulesPerMole";
    MolarEnergyUnits[MolarEnergyUnits["KilojoulePerMole"] = 1] = "KilojoulePerMole";
    MolarEnergyUnits[MolarEnergyUnits["MegajoulePerMole"] = 2] = "MegajoulePerMole";
})(MolarEnergyUnits = exports.MolarEnergyUnits || (exports.MolarEnergyUnits = {}));
class MolarEnergy {
    constructor(value, fromUnit) {
        this.joulespermoleLazy = null;
        this.kilojoulepermoleLazy = null;
        this.megajoulepermoleLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerMole() {
        if (this.joulespermoleLazy !== null) {
            return this.joulespermoleLazy;
        }
        return this.joulespermoleLazy = this.convertFromBase(MolarEnergyUnits.JoulesPerMole);
    }
    get KilojoulePerMole() {
        if (this.kilojoulepermoleLazy !== null) {
            return this.kilojoulepermoleLazy;
        }
        return this.kilojoulepermoleLazy = this.convertFromBase(MolarEnergyUnits.KilojoulePerMole);
    }
    get MegajoulePerMole() {
        if (this.megajoulepermoleLazy !== null) {
            return this.megajoulepermoleLazy;
        }
        return this.megajoulepermoleLazy = this.convertFromBase(MolarEnergyUnits.MegajoulePerMole);
    }
    static FromJoulesPerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.JoulesPerMole);
    }
    static FromKilojoulePerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.KilojoulePerMole);
    }
    static FromMegajoulePerMole(value) {
        return new MolarEnergy(value, MolarEnergyUnits.MegajoulePerMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEnergyUnits.JoulesPerMole:
                return this.value;
            case MolarEnergyUnits.KilojoulePerMole:
                return (this.value) / 1000;
            case MolarEnergyUnits.MegajoulePerMole:
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
            case MolarEnergyUnits.KilojoulePerMole:
                return (value) * 1000;
            case MolarEnergyUnits.MegajoulePerMole:
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
            case MolarEnergyUnits.KilojoulePerMole:
                return this.KilojoulePerMole + ` J/mol`;
            case MolarEnergyUnits.MegajoulePerMole:
                return this.MegajoulePerMole + ` J/mol`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarEnergy = MolarEnergy;
//# sourceMappingURL=molarenergy.g.js.map