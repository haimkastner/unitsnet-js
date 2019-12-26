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
    EnergyUnits[EnergyUnits["Kilojoule"] = 10] = "Kilojoule";
    EnergyUnits[EnergyUnits["Megajoule"] = 11] = "Megajoule";
    EnergyUnits[EnergyUnits["Gigajoule"] = 12] = "Gigajoule";
    EnergyUnits[EnergyUnits["Kilocalorie"] = 13] = "Kilocalorie";
    EnergyUnits[EnergyUnits["Megacalorie"] = 14] = "Megacalorie";
    EnergyUnits[EnergyUnits["KilobritishThermalUnit"] = 15] = "KilobritishThermalUnit";
    EnergyUnits[EnergyUnits["MegabritishThermalUnit"] = 16] = "MegabritishThermalUnit";
    EnergyUnits[EnergyUnits["GigabritishThermalUnit"] = 17] = "GigabritishThermalUnit";
    EnergyUnits[EnergyUnits["KilowattHour"] = 18] = "KilowattHour";
    EnergyUnits[EnergyUnits["MegawattHour"] = 19] = "MegawattHour";
    EnergyUnits[EnergyUnits["GigawattHour"] = 20] = "GigawattHour";
    EnergyUnits[EnergyUnits["TerawattHour"] = 21] = "TerawattHour";
    EnergyUnits[EnergyUnits["DecathermEc"] = 22] = "DecathermEc";
    EnergyUnits[EnergyUnits["DecathermUs"] = 23] = "DecathermUs";
    EnergyUnits[EnergyUnits["DecathermImperial"] = 24] = "DecathermImperial";
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
        this.kilojouleLazy = null;
        this.megajouleLazy = null;
        this.gigajouleLazy = null;
        this.kilocalorieLazy = null;
        this.megacalorieLazy = null;
        this.kilobritishthermalunitLazy = null;
        this.megabritishthermalunitLazy = null;
        this.gigabritishthermalunitLazy = null;
        this.kilowatthourLazy = null;
        this.megawatthourLazy = null;
        this.gigawatthourLazy = null;
        this.terawatthourLazy = null;
        this.decathermecLazy = null;
        this.decathermusLazy = null;
        this.decathermimperialLazy = null;
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
    get Kilojoule() {
        if (this.kilojouleLazy !== null) {
            return this.kilojouleLazy;
        }
        return this.kilojouleLazy = this.convertFromBase(EnergyUnits.Kilojoule);
    }
    get Megajoule() {
        if (this.megajouleLazy !== null) {
            return this.megajouleLazy;
        }
        return this.megajouleLazy = this.convertFromBase(EnergyUnits.Megajoule);
    }
    get Gigajoule() {
        if (this.gigajouleLazy !== null) {
            return this.gigajouleLazy;
        }
        return this.gigajouleLazy = this.convertFromBase(EnergyUnits.Gigajoule);
    }
    get Kilocalorie() {
        if (this.kilocalorieLazy !== null) {
            return this.kilocalorieLazy;
        }
        return this.kilocalorieLazy = this.convertFromBase(EnergyUnits.Kilocalorie);
    }
    get Megacalorie() {
        if (this.megacalorieLazy !== null) {
            return this.megacalorieLazy;
        }
        return this.megacalorieLazy = this.convertFromBase(EnergyUnits.Megacalorie);
    }
    get KilobritishThermalUnit() {
        if (this.kilobritishthermalunitLazy !== null) {
            return this.kilobritishthermalunitLazy;
        }
        return this.kilobritishthermalunitLazy = this.convertFromBase(EnergyUnits.KilobritishThermalUnit);
    }
    get MegabritishThermalUnit() {
        if (this.megabritishthermalunitLazy !== null) {
            return this.megabritishthermalunitLazy;
        }
        return this.megabritishthermalunitLazy = this.convertFromBase(EnergyUnits.MegabritishThermalUnit);
    }
    get GigabritishThermalUnit() {
        if (this.gigabritishthermalunitLazy !== null) {
            return this.gigabritishthermalunitLazy;
        }
        return this.gigabritishthermalunitLazy = this.convertFromBase(EnergyUnits.GigabritishThermalUnit);
    }
    get KilowattHour() {
        if (this.kilowatthourLazy !== null) {
            return this.kilowatthourLazy;
        }
        return this.kilowatthourLazy = this.convertFromBase(EnergyUnits.KilowattHour);
    }
    get MegawattHour() {
        if (this.megawatthourLazy !== null) {
            return this.megawatthourLazy;
        }
        return this.megawatthourLazy = this.convertFromBase(EnergyUnits.MegawattHour);
    }
    get GigawattHour() {
        if (this.gigawatthourLazy !== null) {
            return this.gigawatthourLazy;
        }
        return this.gigawatthourLazy = this.convertFromBase(EnergyUnits.GigawattHour);
    }
    get TerawattHour() {
        if (this.terawatthourLazy !== null) {
            return this.terawatthourLazy;
        }
        return this.terawatthourLazy = this.convertFromBase(EnergyUnits.TerawattHour);
    }
    get DecathermEc() {
        if (this.decathermecLazy !== null) {
            return this.decathermecLazy;
        }
        return this.decathermecLazy = this.convertFromBase(EnergyUnits.DecathermEc);
    }
    get DecathermUs() {
        if (this.decathermusLazy !== null) {
            return this.decathermusLazy;
        }
        return this.decathermusLazy = this.convertFromBase(EnergyUnits.DecathermUs);
    }
    get DecathermImperial() {
        if (this.decathermimperialLazy !== null) {
            return this.decathermimperialLazy;
        }
        return this.decathermimperialLazy = this.convertFromBase(EnergyUnits.DecathermImperial);
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
    static FromKilojoule(value) {
        return new Energy(value, EnergyUnits.Kilojoule);
    }
    static FromMegajoule(value) {
        return new Energy(value, EnergyUnits.Megajoule);
    }
    static FromGigajoule(value) {
        return new Energy(value, EnergyUnits.Gigajoule);
    }
    static FromKilocalorie(value) {
        return new Energy(value, EnergyUnits.Kilocalorie);
    }
    static FromMegacalorie(value) {
        return new Energy(value, EnergyUnits.Megacalorie);
    }
    static FromKilobritishThermalUnit(value) {
        return new Energy(value, EnergyUnits.KilobritishThermalUnit);
    }
    static FromMegabritishThermalUnit(value) {
        return new Energy(value, EnergyUnits.MegabritishThermalUnit);
    }
    static FromGigabritishThermalUnit(value) {
        return new Energy(value, EnergyUnits.GigabritishThermalUnit);
    }
    static FromKilowattHour(value) {
        return new Energy(value, EnergyUnits.KilowattHour);
    }
    static FromMegawattHour(value) {
        return new Energy(value, EnergyUnits.MegawattHour);
    }
    static FromGigawattHour(value) {
        return new Energy(value, EnergyUnits.GigawattHour);
    }
    static FromTerawattHour(value) {
        return new Energy(value, EnergyUnits.TerawattHour);
    }
    static FromDecathermEc(value) {
        return new Energy(value, EnergyUnits.DecathermEc);
    }
    static FromDecathermUs(value) {
        return new Energy(value, EnergyUnits.DecathermUs);
    }
    static FromDecathermImperial(value) {
        return new Energy(value, EnergyUnits.DecathermImperial);
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
            case EnergyUnits.Kilojoule:
                return (this.value) / 1000;
            case EnergyUnits.Megajoule:
                return (this.value) / 1000000;
            case EnergyUnits.Gigajoule:
                return (this.value) / 1000000000;
            case EnergyUnits.Kilocalorie:
                return (this.value / 4.184) / 1000;
            case EnergyUnits.Megacalorie:
                return (this.value / 4.184) / 1000000;
            case EnergyUnits.KilobritishThermalUnit:
                return (this.value / 1055.05585262) / 1000;
            case EnergyUnits.MegabritishThermalUnit:
                return (this.value / 1055.05585262) / 1000000;
            case EnergyUnits.GigabritishThermalUnit:
                return (this.value / 1055.05585262) / 1000000000;
            case EnergyUnits.KilowattHour:
                return (this.value / 3600) / 1000;
            case EnergyUnits.MegawattHour:
                return (this.value / 3600) / 1000000;
            case EnergyUnits.GigawattHour:
                return (this.value / 3600) / 1000000000;
            case EnergyUnits.TerawattHour:
                return (this.value / 3600) / 1000000000000;
            case EnergyUnits.DecathermEc:
                return (this.value / 1.05505585262e8) / 10;
            case EnergyUnits.DecathermUs:
                return (this.value / 1.054804e8) / 10;
            case EnergyUnits.DecathermImperial:
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
            case EnergyUnits.Kilojoule:
                return (value) * 1000;
            case EnergyUnits.Megajoule:
                return (value) * 1000000;
            case EnergyUnits.Gigajoule:
                return (value) * 1000000000;
            case EnergyUnits.Kilocalorie:
                return (value * 4.184) * 1000;
            case EnergyUnits.Megacalorie:
                return (value * 4.184) * 1000000;
            case EnergyUnits.KilobritishThermalUnit:
                return (value * 1055.05585262) * 1000;
            case EnergyUnits.MegabritishThermalUnit:
                return (value * 1055.05585262) * 1000000;
            case EnergyUnits.GigabritishThermalUnit:
                return (value * 1055.05585262) * 1000000000;
            case EnergyUnits.KilowattHour:
                return (value * 3600) * 1000;
            case EnergyUnits.MegawattHour:
                return (value * 3600) * 1000000;
            case EnergyUnits.GigawattHour:
                return (value * 3600) * 1000000000;
            case EnergyUnits.TerawattHour:
                return (value * 3600) * 1000000000000;
            case EnergyUnits.DecathermEc:
                return (value * 1.05505585262e8) * 10;
            case EnergyUnits.DecathermUs:
                return (value * 1.054804e8) * 10;
            case EnergyUnits.DecathermImperial:
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
            case EnergyUnits.Kilojoule:
                return this.Kilojoule + ` J`;
            case EnergyUnits.Megajoule:
                return this.Megajoule + ` J`;
            case EnergyUnits.Gigajoule:
                return this.Gigajoule + ` J`;
            case EnergyUnits.Kilocalorie:
                return this.Kilocalorie + ` cal`;
            case EnergyUnits.Megacalorie:
                return this.Megacalorie + ` cal`;
            case EnergyUnits.KilobritishThermalUnit:
                return this.KilobritishThermalUnit + ` BTU`;
            case EnergyUnits.MegabritishThermalUnit:
                return this.MegabritishThermalUnit + ` BTU`;
            case EnergyUnits.GigabritishThermalUnit:
                return this.GigabritishThermalUnit + ` BTU`;
            case EnergyUnits.KilowattHour:
                return this.KilowattHour + ` Wh`;
            case EnergyUnits.MegawattHour:
                return this.MegawattHour + ` Wh`;
            case EnergyUnits.GigawattHour:
                return this.GigawattHour + ` Wh`;
            case EnergyUnits.TerawattHour:
                return this.TerawattHour + ` Wh`;
            case EnergyUnits.DecathermEc:
                return this.DecathermEc + ` th (E.C.)`;
            case EnergyUnits.DecathermUs:
                return this.DecathermUs + ` th (U.S.)`;
            case EnergyUnits.DecathermImperial:
                return this.DecathermImperial + ` th (imp.)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Energy = Energy;
//# sourceMappingURL=energy.g.js.map