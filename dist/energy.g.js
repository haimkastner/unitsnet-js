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
        this.joulesLazy = null;
        this.caloriesLazy = null;
        this.britishthermalunitsLazy = null;
        this.electronvoltsLazy = null;
        this.footpoundsLazy = null;
        this.ergsLazy = null;
        this.watthoursLazy = null;
        this.thermsecLazy = null;
        this.thermsusLazy = null;
        this.thermsimperialLazy = null;
        this.kilojoulesLazy = null;
        this.megajoulesLazy = null;
        this.gigajoulesLazy = null;
        this.kilocaloriesLazy = null;
        this.megacaloriesLazy = null;
        this.kilobritishthermalunitsLazy = null;
        this.megabritishthermalunitsLazy = null;
        this.gigabritishthermalunitsLazy = null;
        this.kilowatthoursLazy = null;
        this.megawatthoursLazy = null;
        this.gigawatthoursLazy = null;
        this.terawatthoursLazy = null;
        this.decathermsecLazy = null;
        this.decathermsusLazy = null;
        this.decathermsimperialLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Joules() {
        if (this.joulesLazy !== null) {
            return this.joulesLazy;
        }
        return this.joulesLazy = this.convertFromBase(EnergyUnits.Joules);
    }
    get Calories() {
        if (this.caloriesLazy !== null) {
            return this.caloriesLazy;
        }
        return this.caloriesLazy = this.convertFromBase(EnergyUnits.Calories);
    }
    get BritishThermalUnits() {
        if (this.britishthermalunitsLazy !== null) {
            return this.britishthermalunitsLazy;
        }
        return this.britishthermalunitsLazy = this.convertFromBase(EnergyUnits.BritishThermalUnits);
    }
    get ElectronVolts() {
        if (this.electronvoltsLazy !== null) {
            return this.electronvoltsLazy;
        }
        return this.electronvoltsLazy = this.convertFromBase(EnergyUnits.ElectronVolts);
    }
    get FootPounds() {
        if (this.footpoundsLazy !== null) {
            return this.footpoundsLazy;
        }
        return this.footpoundsLazy = this.convertFromBase(EnergyUnits.FootPounds);
    }
    get Ergs() {
        if (this.ergsLazy !== null) {
            return this.ergsLazy;
        }
        return this.ergsLazy = this.convertFromBase(EnergyUnits.Ergs);
    }
    get WattHours() {
        if (this.watthoursLazy !== null) {
            return this.watthoursLazy;
        }
        return this.watthoursLazy = this.convertFromBase(EnergyUnits.WattHours);
    }
    get ThermsEc() {
        if (this.thermsecLazy !== null) {
            return this.thermsecLazy;
        }
        return this.thermsecLazy = this.convertFromBase(EnergyUnits.ThermsEc);
    }
    get ThermsUs() {
        if (this.thermsusLazy !== null) {
            return this.thermsusLazy;
        }
        return this.thermsusLazy = this.convertFromBase(EnergyUnits.ThermsUs);
    }
    get ThermsImperial() {
        if (this.thermsimperialLazy !== null) {
            return this.thermsimperialLazy;
        }
        return this.thermsimperialLazy = this.convertFromBase(EnergyUnits.ThermsImperial);
    }
    get Kilojoules() {
        if (this.kilojoulesLazy !== null) {
            return this.kilojoulesLazy;
        }
        return this.kilojoulesLazy = this.convertFromBase(EnergyUnits.Kilojoules);
    }
    get Megajoules() {
        if (this.megajoulesLazy !== null) {
            return this.megajoulesLazy;
        }
        return this.megajoulesLazy = this.convertFromBase(EnergyUnits.Megajoules);
    }
    get Gigajoules() {
        if (this.gigajoulesLazy !== null) {
            return this.gigajoulesLazy;
        }
        return this.gigajoulesLazy = this.convertFromBase(EnergyUnits.Gigajoules);
    }
    get Kilocalories() {
        if (this.kilocaloriesLazy !== null) {
            return this.kilocaloriesLazy;
        }
        return this.kilocaloriesLazy = this.convertFromBase(EnergyUnits.Kilocalories);
    }
    get Megacalories() {
        if (this.megacaloriesLazy !== null) {
            return this.megacaloriesLazy;
        }
        return this.megacaloriesLazy = this.convertFromBase(EnergyUnits.Megacalories);
    }
    get Kilobritishthermalunits() {
        if (this.kilobritishthermalunitsLazy !== null) {
            return this.kilobritishthermalunitsLazy;
        }
        return this.kilobritishthermalunitsLazy = this.convertFromBase(EnergyUnits.Kilobritishthermalunits);
    }
    get Megabritishthermalunits() {
        if (this.megabritishthermalunitsLazy !== null) {
            return this.megabritishthermalunitsLazy;
        }
        return this.megabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.Megabritishthermalunits);
    }
    get Gigabritishthermalunits() {
        if (this.gigabritishthermalunitsLazy !== null) {
            return this.gigabritishthermalunitsLazy;
        }
        return this.gigabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.Gigabritishthermalunits);
    }
    get Kilowatthours() {
        if (this.kilowatthoursLazy !== null) {
            return this.kilowatthoursLazy;
        }
        return this.kilowatthoursLazy = this.convertFromBase(EnergyUnits.Kilowatthours);
    }
    get Megawatthours() {
        if (this.megawatthoursLazy !== null) {
            return this.megawatthoursLazy;
        }
        return this.megawatthoursLazy = this.convertFromBase(EnergyUnits.Megawatthours);
    }
    get Gigawatthours() {
        if (this.gigawatthoursLazy !== null) {
            return this.gigawatthoursLazy;
        }
        return this.gigawatthoursLazy = this.convertFromBase(EnergyUnits.Gigawatthours);
    }
    get Terawatthours() {
        if (this.terawatthoursLazy !== null) {
            return this.terawatthoursLazy;
        }
        return this.terawatthoursLazy = this.convertFromBase(EnergyUnits.Terawatthours);
    }
    get Decathermsec() {
        if (this.decathermsecLazy !== null) {
            return this.decathermsecLazy;
        }
        return this.decathermsecLazy = this.convertFromBase(EnergyUnits.Decathermsec);
    }
    get Decathermsus() {
        if (this.decathermsusLazy !== null) {
            return this.decathermsusLazy;
        }
        return this.decathermsusLazy = this.convertFromBase(EnergyUnits.Decathermsus);
    }
    get Decathermsimperial() {
        if (this.decathermsimperialLazy !== null) {
            return this.decathermsimperialLazy;
        }
        return this.decathermsimperialLazy = this.convertFromBase(EnergyUnits.Decathermsimperial);
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
                return (this.value) / 1000;
            case EnergyUnits.Megajoules:
                return (this.value) / 1000000;
            case EnergyUnits.Gigajoules:
                return (this.value) / 1000000000;
            case EnergyUnits.Kilocalories:
                return (this.value / 4.184) / 1000;
            case EnergyUnits.Megacalories:
                return (this.value / 4.184) / 1000000;
            case EnergyUnits.Kilobritishthermalunits:
                return (this.value / 1055.05585262) / 1000;
            case EnergyUnits.Megabritishthermalunits:
                return (this.value / 1055.05585262) / 1000000;
            case EnergyUnits.Gigabritishthermalunits:
                return (this.value / 1055.05585262) / 1000000000;
            case EnergyUnits.Kilowatthours:
                return (this.value / 3600) / 1000;
            case EnergyUnits.Megawatthours:
                return (this.value / 3600) / 1000000;
            case EnergyUnits.Gigawatthours:
                return (this.value / 3600) / 1000000000;
            case EnergyUnits.Terawatthours:
                return (this.value / 3600) / 1000000000000;
            case EnergyUnits.Decathermsec:
                return (this.value / 1.05505585262e8) / 10;
            case EnergyUnits.Decathermsus:
                return (this.value / 1.054804e8) / 10;
            case EnergyUnits.Decathermsimperial:
                return (this.value / 1.05505585257348e8) / 10;
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
                return (value) * 1000;
            case EnergyUnits.Megajoules:
                return (value) * 1000000;
            case EnergyUnits.Gigajoules:
                return (value) * 1000000000;
            case EnergyUnits.Kilocalories:
                return (value * 4.184) * 1000;
            case EnergyUnits.Megacalories:
                return (value * 4.184) * 1000000;
            case EnergyUnits.Kilobritishthermalunits:
                return (value * 1055.05585262) * 1000;
            case EnergyUnits.Megabritishthermalunits:
                return (value * 1055.05585262) * 1000000;
            case EnergyUnits.Gigabritishthermalunits:
                return (value * 1055.05585262) * 1000000000;
            case EnergyUnits.Kilowatthours:
                return (value * 3600) * 1000;
            case EnergyUnits.Megawatthours:
                return (value * 3600) * 1000000;
            case EnergyUnits.Gigawatthours:
                return (value * 3600) * 1000000000;
            case EnergyUnits.Terawatthours:
                return (value * 3600) * 1000000000000;
            case EnergyUnits.Decathermsec:
                return (value * 1.05505585262e8) * 10;
            case EnergyUnits.Decathermsus:
                return (value * 1.054804e8) * 10;
            case EnergyUnits.Decathermsimperial:
                return (value * 1.05505585257348e8) * 10;
            default:
                break;
        }
        return NaN;
    }
}
exports.Energy = Energy;
//# sourceMappingURL=energy.g.js.map