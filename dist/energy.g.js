"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnergyUnits;
(function (EnergyUnits) {
    EnergyUnits[EnergyUnits["Joules"] = 0] = "Joules";
    EnergyUnits[EnergyUnits["Calories"] = 1] = "Calories";
    EnergyUnits[EnergyUnits["BritishThermalUnits"] = 2] = "BritishThermalUnits";
    EnergyUnits[EnergyUnits["ElectronVolts"] = 3] = "ElectronVolts";
    EnergyUnits[EnergyUnits["FootPounds"] = 4] = "FootPounds";
    EnergyUnits[EnergyUnits["Ergs"] = 5] = "Ergs";
    EnergyUnits[EnergyUnits["WattHours"] = 6] = "WattHours";
    EnergyUnits[EnergyUnits["ThermsEc"] = 7] = "ThermsEc";
    EnergyUnits[EnergyUnits["ThermsUs"] = 8] = "ThermsUs";
    EnergyUnits[EnergyUnits["ThermsImperial"] = 9] = "ThermsImperial";
    EnergyUnits[EnergyUnits["Kilojoules"] = 10] = "Kilojoules";
    EnergyUnits[EnergyUnits["Megajoules"] = 11] = "Megajoules";
    EnergyUnits[EnergyUnits["Gigajoules"] = 12] = "Gigajoules";
    EnergyUnits[EnergyUnits["Kilocalories"] = 13] = "Kilocalories";
    EnergyUnits[EnergyUnits["Megacalories"] = 14] = "Megacalories";
    EnergyUnits[EnergyUnits["Kilobritishthermalunits"] = 15] = "Kilobritishthermalunits";
    EnergyUnits[EnergyUnits["Megabritishthermalunits"] = 16] = "Megabritishthermalunits";
    EnergyUnits[EnergyUnits["Gigabritishthermalunits"] = 17] = "Gigabritishthermalunits";
    EnergyUnits[EnergyUnits["Kilowatthours"] = 18] = "Kilowatthours";
    EnergyUnits[EnergyUnits["Megawatthours"] = 19] = "Megawatthours";
    EnergyUnits[EnergyUnits["Gigawatthours"] = 20] = "Gigawatthours";
    EnergyUnits[EnergyUnits["Terawatthours"] = 21] = "Terawatthours";
    EnergyUnits[EnergyUnits["Decathermsec"] = 22] = "Decathermsec";
    EnergyUnits[EnergyUnits["Decathermsus"] = 23] = "Decathermsus";
    EnergyUnits[EnergyUnits["Decathermsimperial"] = 24] = "Decathermsimperial";
})(EnergyUnits = exports.EnergyUnits || (exports.EnergyUnits = {}));
class Energy {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Joules() {
        return this.convertFromBase(EnergyUnits.Joules);
    }
    get Calories() {
        return this.convertFromBase(EnergyUnits.Calories);
    }
    get BritishThermalUnits() {
        return this.convertFromBase(EnergyUnits.BritishThermalUnits);
    }
    get ElectronVolts() {
        return this.convertFromBase(EnergyUnits.ElectronVolts);
    }
    get FootPounds() {
        return this.convertFromBase(EnergyUnits.FootPounds);
    }
    get Ergs() {
        return this.convertFromBase(EnergyUnits.Ergs);
    }
    get WattHours() {
        return this.convertFromBase(EnergyUnits.WattHours);
    }
    get ThermsEc() {
        return this.convertFromBase(EnergyUnits.ThermsEc);
    }
    get ThermsUs() {
        return this.convertFromBase(EnergyUnits.ThermsUs);
    }
    get ThermsImperial() {
        return this.convertFromBase(EnergyUnits.ThermsImperial);
    }
    get Kilojoules() {
        return this.convertFromBase(EnergyUnits.Kilojoules);
    }
    get Megajoules() {
        return this.convertFromBase(EnergyUnits.Megajoules);
    }
    get Gigajoules() {
        return this.convertFromBase(EnergyUnits.Gigajoules);
    }
    get Kilocalories() {
        return this.convertFromBase(EnergyUnits.Kilocalories);
    }
    get Megacalories() {
        return this.convertFromBase(EnergyUnits.Megacalories);
    }
    get Kilobritishthermalunits() {
        return this.convertFromBase(EnergyUnits.Kilobritishthermalunits);
    }
    get Megabritishthermalunits() {
        return this.convertFromBase(EnergyUnits.Megabritishthermalunits);
    }
    get Gigabritishthermalunits() {
        return this.convertFromBase(EnergyUnits.Gigabritishthermalunits);
    }
    get Kilowatthours() {
        return this.convertFromBase(EnergyUnits.Kilowatthours);
    }
    get Megawatthours() {
        return this.convertFromBase(EnergyUnits.Megawatthours);
    }
    get Gigawatthours() {
        return this.convertFromBase(EnergyUnits.Gigawatthours);
    }
    get Terawatthours() {
        return this.convertFromBase(EnergyUnits.Terawatthours);
    }
    get Decathermsec() {
        return this.convertFromBase(EnergyUnits.Decathermsec);
    }
    get Decathermsus() {
        return this.convertFromBase(EnergyUnits.Decathermsus);
    }
    get Decathermsimperial() {
        return this.convertFromBase(EnergyUnits.Decathermsimperial);
    }
    static FromJoules(value) {
        return new Energy(value, EnergyUnits.Joules);
    }
    static FromCalories(value) {
        return new Energy(value, EnergyUnits.Calories);
    }
    static FromBritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.BritishThermalUnits);
    }
    static FromElectronVolts(value) {
        return new Energy(value, EnergyUnits.ElectronVolts);
    }
    static FromFootPounds(value) {
        return new Energy(value, EnergyUnits.FootPounds);
    }
    static FromErgs(value) {
        return new Energy(value, EnergyUnits.Ergs);
    }
    static FromWattHours(value) {
        return new Energy(value, EnergyUnits.WattHours);
    }
    static FromThermsEc(value) {
        return new Energy(value, EnergyUnits.ThermsEc);
    }
    static FromThermsUs(value) {
        return new Energy(value, EnergyUnits.ThermsUs);
    }
    static FromThermsImperial(value) {
        return new Energy(value, EnergyUnits.ThermsImperial);
    }
    static FromKilojoules(value) {
        return new Energy(value, EnergyUnits.Kilojoules);
    }
    static FromMegajoules(value) {
        return new Energy(value, EnergyUnits.Megajoules);
    }
    static FromGigajoules(value) {
        return new Energy(value, EnergyUnits.Gigajoules);
    }
    static FromKilocalories(value) {
        return new Energy(value, EnergyUnits.Kilocalories);
    }
    static FromMegacalories(value) {
        return new Energy(value, EnergyUnits.Megacalories);
    }
    static FromKilobritishthermalunits(value) {
        return new Energy(value, EnergyUnits.Kilobritishthermalunits);
    }
    static FromMegabritishthermalunits(value) {
        return new Energy(value, EnergyUnits.Megabritishthermalunits);
    }
    static FromGigabritishthermalunits(value) {
        return new Energy(value, EnergyUnits.Gigabritishthermalunits);
    }
    static FromKilowatthours(value) {
        return new Energy(value, EnergyUnits.Kilowatthours);
    }
    static FromMegawatthours(value) {
        return new Energy(value, EnergyUnits.Megawatthours);
    }
    static FromGigawatthours(value) {
        return new Energy(value, EnergyUnits.Gigawatthours);
    }
    static FromTerawatthours(value) {
        return new Energy(value, EnergyUnits.Terawatthours);
    }
    static FromDecathermsec(value) {
        return new Energy(value, EnergyUnits.Decathermsec);
    }
    static FromDecathermsus(value) {
        return new Energy(value, EnergyUnits.Decathermsus);
    }
    static FromDecathermsimperial(value) {
        return new Energy(value, EnergyUnits.Decathermsimperial);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case EnergyUnits.Joules:
                return this.value;
            case EnergyUnits.Calories:
                return this.value / 4.184;
            case EnergyUnits.BritishThermalUnits:
                return this.value / 1055.05585262;
            case EnergyUnits.ElectronVolts:
                return this.value / 1.602176565e-19;
            case EnergyUnits.FootPounds:
                return this.value / 1.355817948;
            case EnergyUnits.Ergs:
                return this.value / 1e-7;
            case EnergyUnits.WattHours:
                return this.value / 3600;
            case EnergyUnits.ThermsEc:
                return this.value / 1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return this.value / 1.054804e8;
            case EnergyUnits.ThermsImperial:
                return this.value / 1.05505585257348e8;
            case EnergyUnits.Kilojoules:
                return (this.value) * 1000;
            case EnergyUnits.Megajoules:
                return (this.value) * 1000000;
            case EnergyUnits.Gigajoules:
                return (this.value) * 1000000000;
            case EnergyUnits.Kilocalories:
                return (this.value * 4.184) * 1000;
            case EnergyUnits.Megacalories:
                return (this.value * 4.184) * 1000000;
            case EnergyUnits.Kilobritishthermalunits:
                return (this.value * 1055.05585262) * 1000;
            case EnergyUnits.Megabritishthermalunits:
                return (this.value * 1055.05585262) * 1000000;
            case EnergyUnits.Gigabritishthermalunits:
                return (this.value * 1055.05585262) * 1000000000;
            case EnergyUnits.Kilowatthours:
                return (this.value * 3600) * 1000;
            case EnergyUnits.Megawatthours:
                return (this.value * 3600) * 1000000;
            case EnergyUnits.Gigawatthours:
                return (this.value * 3600) * 1000000000;
            case EnergyUnits.Terawatthours:
                return (this.value * 3600) * 1000000000000;
            case EnergyUnits.Decathermsec:
                return (this.value * 1.05505585262e8) * 10;
            case EnergyUnits.Decathermsus:
                return (this.value * 1.054804e8) * 10;
            case EnergyUnits.Decathermsimperial:
                return (this.value * 1.05505585257348e8) * 10;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case EnergyUnits.Joules:
                return value;
            case EnergyUnits.Calories:
                return value * 4.184;
            case EnergyUnits.BritishThermalUnits:
                return value * 1055.05585262;
            case EnergyUnits.ElectronVolts:
                return value * 1.602176565e-19;
            case EnergyUnits.FootPounds:
                return value * 1.355817948;
            case EnergyUnits.Ergs:
                return value * 1e-7;
            case EnergyUnits.WattHours:
                return value * 3600;
            case EnergyUnits.ThermsEc:
                return value * 1.05505585262e8;
            case EnergyUnits.ThermsUs:
                return value * 1.054804e8;
            case EnergyUnits.ThermsImperial:
                return value * 1.05505585257348e8;
            case EnergyUnits.Kilojoules:
                return (value) / 1000;
            case EnergyUnits.Megajoules:
                return (value) / 1000000;
            case EnergyUnits.Gigajoules:
                return (value) / 1000000000;
            case EnergyUnits.Kilocalories:
                return (value / 4.184) / 1000;
            case EnergyUnits.Megacalories:
                return (value / 4.184) / 1000000;
            case EnergyUnits.Kilobritishthermalunits:
                return (value / 1055.05585262) / 1000;
            case EnergyUnits.Megabritishthermalunits:
                return (value / 1055.05585262) / 1000000;
            case EnergyUnits.Gigabritishthermalunits:
                return (value / 1055.05585262) / 1000000000;
            case EnergyUnits.Kilowatthours:
                return (value / 3600) / 1000;
            case EnergyUnits.Megawatthours:
                return (value / 3600) / 1000000;
            case EnergyUnits.Gigawatthours:
                return (value / 3600) / 1000000000;
            case EnergyUnits.Terawatthours:
                return (value / 3600) / 1000000000000;
            case EnergyUnits.Decathermsec:
                return (value / 1.05505585262e8) / 10;
            case EnergyUnits.Decathermsus:
                return (value / 1.054804e8) / 10;
            case EnergyUnits.Decathermsimperial:
                return (value / 1.05505585257348e8) / 10;
            default:
                break;
        }
        return NaN;
    }
}
exports.Energy = Energy;
//# sourceMappingURL=energy.g.js.map