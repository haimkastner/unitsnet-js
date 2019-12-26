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
    EnergyUnits[EnergyUnits["KilobritishThermalUnits"] = 15] = "KilobritishThermalUnits";
    EnergyUnits[EnergyUnits["MegabritishThermalUnits"] = 16] = "MegabritishThermalUnits";
    EnergyUnits[EnergyUnits["GigabritishThermalUnits"] = 17] = "GigabritishThermalUnits";
    EnergyUnits[EnergyUnits["KilowattHours"] = 18] = "KilowattHours";
    EnergyUnits[EnergyUnits["MegawattHours"] = 19] = "MegawattHours";
    EnergyUnits[EnergyUnits["GigawattHours"] = 20] = "GigawattHours";
    EnergyUnits[EnergyUnits["TerawattHours"] = 21] = "TerawattHours";
    EnergyUnits[EnergyUnits["DecathermsEc"] = 22] = "DecathermsEc";
    EnergyUnits[EnergyUnits["DecathermsUs"] = 23] = "DecathermsUs";
    EnergyUnits[EnergyUnits["DecathermsImperial"] = 24] = "DecathermsImperial";
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
    get KilobritishThermalUnits() {
        if (this.kilobritishthermalunitsLazy !== null) {
            return this.kilobritishthermalunitsLazy;
        }
        return this.kilobritishthermalunitsLazy = this.convertFromBase(EnergyUnits.KilobritishThermalUnits);
    }
    get MegabritishThermalUnits() {
        if (this.megabritishthermalunitsLazy !== null) {
            return this.megabritishthermalunitsLazy;
        }
        return this.megabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.MegabritishThermalUnits);
    }
    get GigabritishThermalUnits() {
        if (this.gigabritishthermalunitsLazy !== null) {
            return this.gigabritishthermalunitsLazy;
        }
        return this.gigabritishthermalunitsLazy = this.convertFromBase(EnergyUnits.GigabritishThermalUnits);
    }
    get KilowattHours() {
        if (this.kilowatthoursLazy !== null) {
            return this.kilowatthoursLazy;
        }
        return this.kilowatthoursLazy = this.convertFromBase(EnergyUnits.KilowattHours);
    }
    get MegawattHours() {
        if (this.megawatthoursLazy !== null) {
            return this.megawatthoursLazy;
        }
        return this.megawatthoursLazy = this.convertFromBase(EnergyUnits.MegawattHours);
    }
    get GigawattHours() {
        if (this.gigawatthoursLazy !== null) {
            return this.gigawatthoursLazy;
        }
        return this.gigawatthoursLazy = this.convertFromBase(EnergyUnits.GigawattHours);
    }
    get TerawattHours() {
        if (this.terawatthoursLazy !== null) {
            return this.terawatthoursLazy;
        }
        return this.terawatthoursLazy = this.convertFromBase(EnergyUnits.TerawattHours);
    }
    get DecathermsEc() {
        if (this.decathermsecLazy !== null) {
            return this.decathermsecLazy;
        }
        return this.decathermsecLazy = this.convertFromBase(EnergyUnits.DecathermsEc);
    }
    get DecathermsUs() {
        if (this.decathermsusLazy !== null) {
            return this.decathermsusLazy;
        }
        return this.decathermsusLazy = this.convertFromBase(EnergyUnits.DecathermsUs);
    }
    get DecathermsImperial() {
        if (this.decathermsimperialLazy !== null) {
            return this.decathermsimperialLazy;
        }
        return this.decathermsimperialLazy = this.convertFromBase(EnergyUnits.DecathermsImperial);
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
    static FromKilobritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.KilobritishThermalUnits);
    }
    static FromMegabritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.MegabritishThermalUnits);
    }
    static FromGigabritishThermalUnits(value) {
        return new Energy(value, EnergyUnits.GigabritishThermalUnits);
    }
    static FromKilowattHours(value) {
        return new Energy(value, EnergyUnits.KilowattHours);
    }
    static FromMegawattHours(value) {
        return new Energy(value, EnergyUnits.MegawattHours);
    }
    static FromGigawattHours(value) {
        return new Energy(value, EnergyUnits.GigawattHours);
    }
    static FromTerawattHours(value) {
        return new Energy(value, EnergyUnits.TerawattHours);
    }
    static FromDecathermsEc(value) {
        return new Energy(value, EnergyUnits.DecathermsEc);
    }
    static FromDecathermsUs(value) {
        return new Energy(value, EnergyUnits.DecathermsUs);
    }
    static FromDecathermsImperial(value) {
        return new Energy(value, EnergyUnits.DecathermsImperial);
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
            case EnergyUnits.KilobritishThermalUnits:
                return (this.value / 1055.05585262) / 1000;
            case EnergyUnits.MegabritishThermalUnits:
                return (this.value / 1055.05585262) / 1000000;
            case EnergyUnits.GigabritishThermalUnits:
                return (this.value / 1055.05585262) / 1000000000;
            case EnergyUnits.KilowattHours:
                return (this.value / 3600) / 1000;
            case EnergyUnits.MegawattHours:
                return (this.value / 3600) / 1000000;
            case EnergyUnits.GigawattHours:
                return (this.value / 3600) / 1000000000;
            case EnergyUnits.TerawattHours:
                return (this.value / 3600) / 1000000000000;
            case EnergyUnits.DecathermsEc:
                return (this.value / 1.05505585262e8) / 10;
            case EnergyUnits.DecathermsUs:
                return (this.value / 1.054804e8) / 10;
            case EnergyUnits.DecathermsImperial:
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
            case EnergyUnits.KilobritishThermalUnits:
                return (value * 1055.05585262) * 1000;
            case EnergyUnits.MegabritishThermalUnits:
                return (value * 1055.05585262) * 1000000;
            case EnergyUnits.GigabritishThermalUnits:
                return (value * 1055.05585262) * 1000000000;
            case EnergyUnits.KilowattHours:
                return (value * 3600) * 1000;
            case EnergyUnits.MegawattHours:
                return (value * 3600) * 1000000;
            case EnergyUnits.GigawattHours:
                return (value * 3600) * 1000000000;
            case EnergyUnits.TerawattHours:
                return (value * 3600) * 1000000000000;
            case EnergyUnits.DecathermsEc:
                return (value * 1.05505585262e8) * 10;
            case EnergyUnits.DecathermsUs:
                return (value * 1.054804e8) * 10;
            case EnergyUnits.DecathermsImperial:
                return (value * 1.05505585257348e8) * 10;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = EnergyUnits.Joules) {
        switch (toUnit) {
            case EnergyUnits.Joules:
                return this.Joules + ` J`;
            case EnergyUnits.Calories:
                return this.Calories + ` cal`;
            case EnergyUnits.BritishThermalUnits:
                return this.BritishThermalUnits + ` BTU`;
            case EnergyUnits.ElectronVolts:
                return this.ElectronVolts + ` eV`;
            case EnergyUnits.FootPounds:
                return this.FootPounds + ` ft·lb`;
            case EnergyUnits.Ergs:
                return this.Ergs + ` erg`;
            case EnergyUnits.WattHours:
                return this.WattHours + ` Wh`;
            case EnergyUnits.ThermsEc:
                return this.ThermsEc + ` th (E.C.)`;
            case EnergyUnits.ThermsUs:
                return this.ThermsUs + ` th (U.S.)`;
            case EnergyUnits.ThermsImperial:
                return this.ThermsImperial + ` th (imp.)`;
            case EnergyUnits.Kilojoules:
                return this.Kilojoules + ` J`;
            case EnergyUnits.Megajoules:
                return this.Megajoules + ` J`;
            case EnergyUnits.Gigajoules:
                return this.Gigajoules + ` J`;
            case EnergyUnits.Kilocalories:
                return this.Kilocalories + ` cal`;
            case EnergyUnits.Megacalories:
                return this.Megacalories + ` cal`;
            case EnergyUnits.KilobritishThermalUnits:
                return this.KilobritishThermalUnits + ` BTU`;
            case EnergyUnits.MegabritishThermalUnits:
                return this.MegabritishThermalUnits + ` BTU`;
            case EnergyUnits.GigabritishThermalUnits:
                return this.GigabritishThermalUnits + ` BTU`;
            case EnergyUnits.KilowattHours:
                return this.KilowattHours + ` Wh`;
            case EnergyUnits.MegawattHours:
                return this.MegawattHours + ` Wh`;
            case EnergyUnits.GigawattHours:
                return this.GigawattHours + ` Wh`;
            case EnergyUnits.TerawattHours:
                return this.TerawattHours + ` Wh`;
            case EnergyUnits.DecathermsEc:
                return this.DecathermsEc + ` th (E.C.)`;
            case EnergyUnits.DecathermsUs:
                return this.DecathermsUs + ` th (U.S.)`;
            case EnergyUnits.DecathermsImperial:
                return this.DecathermsImperial + ` th (imp.)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Energy = Energy;
//# sourceMappingURL=energy.g.js.map