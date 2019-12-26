"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PowerUnits;
(function (PowerUnits) {
    PowerUnits[PowerUnits["Watts"] = 0] = "Watts";
    PowerUnits[PowerUnits["MechanicalHorsepower"] = 1] = "MechanicalHorsepower";
    PowerUnits[PowerUnits["MetricHorsepower"] = 2] = "MetricHorsepower";
    PowerUnits[PowerUnits["ElectricalHorsepower"] = 3] = "ElectricalHorsepower";
    PowerUnits[PowerUnits["BoilerHorsepower"] = 4] = "BoilerHorsepower";
    PowerUnits[PowerUnits["HydraulicHorsepower"] = 5] = "HydraulicHorsepower";
    PowerUnits[PowerUnits["BritishThermalUnitsPerHour"] = 6] = "BritishThermalUnitsPerHour";
    PowerUnits[PowerUnits["JoulesPerHour"] = 7] = "JoulesPerHour";
    PowerUnits[PowerUnits["Femtowatts"] = 8] = "Femtowatts";
    PowerUnits[PowerUnits["Picowatts"] = 9] = "Picowatts";
    PowerUnits[PowerUnits["Nanowatts"] = 10] = "Nanowatts";
    PowerUnits[PowerUnits["Microwatts"] = 11] = "Microwatts";
    PowerUnits[PowerUnits["Deciwatts"] = 12] = "Deciwatts";
    PowerUnits[PowerUnits["Decawatts"] = 13] = "Decawatts";
    PowerUnits[PowerUnits["Kilowatts"] = 14] = "Kilowatts";
    PowerUnits[PowerUnits["Megawatts"] = 15] = "Megawatts";
    PowerUnits[PowerUnits["Gigawatts"] = 16] = "Gigawatts";
    PowerUnits[PowerUnits["Terawatts"] = 17] = "Terawatts";
    PowerUnits[PowerUnits["Petawatts"] = 18] = "Petawatts";
    PowerUnits[PowerUnits["KilobritishThermalUnitsPerHour"] = 19] = "KilobritishThermalUnitsPerHour";
    PowerUnits[PowerUnits["KilojoulesPerHour"] = 20] = "KilojoulesPerHour";
    PowerUnits[PowerUnits["MegajoulesPerHour"] = 21] = "MegajoulesPerHour";
    PowerUnits[PowerUnits["GigajoulesPerHour"] = 22] = "GigajoulesPerHour";
})(PowerUnits = exports.PowerUnits || (exports.PowerUnits = {}));
class Power {
    constructor(value, fromUnit) {
        this.wattsLazy = null;
        this.mechanicalhorsepowerLazy = null;
        this.metrichorsepowerLazy = null;
        this.electricalhorsepowerLazy = null;
        this.boilerhorsepowerLazy = null;
        this.hydraulichorsepowerLazy = null;
        this.britishthermalunitsperhourLazy = null;
        this.joulesperhourLazy = null;
        this.femtowattsLazy = null;
        this.picowattsLazy = null;
        this.nanowattsLazy = null;
        this.microwattsLazy = null;
        this.deciwattsLazy = null;
        this.decawattsLazy = null;
        this.kilowattsLazy = null;
        this.megawattsLazy = null;
        this.gigawattsLazy = null;
        this.terawattsLazy = null;
        this.petawattsLazy = null;
        this.kilobritishthermalunitsperhourLazy = null;
        this.kilojoulesperhourLazy = null;
        this.megajoulesperhourLazy = null;
        this.gigajoulesperhourLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Watts() {
        if (this.wattsLazy !== null) {
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(PowerUnits.Watts);
    }
    get MechanicalHorsepower() {
        if (this.mechanicalhorsepowerLazy !== null) {
            return this.mechanicalhorsepowerLazy;
        }
        return this.mechanicalhorsepowerLazy = this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }
    get MetricHorsepower() {
        if (this.metrichorsepowerLazy !== null) {
            return this.metrichorsepowerLazy;
        }
        return this.metrichorsepowerLazy = this.convertFromBase(PowerUnits.MetricHorsepower);
    }
    get ElectricalHorsepower() {
        if (this.electricalhorsepowerLazy !== null) {
            return this.electricalhorsepowerLazy;
        }
        return this.electricalhorsepowerLazy = this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }
    get BoilerHorsepower() {
        if (this.boilerhorsepowerLazy !== null) {
            return this.boilerhorsepowerLazy;
        }
        return this.boilerhorsepowerLazy = this.convertFromBase(PowerUnits.BoilerHorsepower);
    }
    get HydraulicHorsepower() {
        if (this.hydraulichorsepowerLazy !== null) {
            return this.hydraulichorsepowerLazy;
        }
        return this.hydraulichorsepowerLazy = this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }
    get BritishThermalUnitsPerHour() {
        if (this.britishthermalunitsperhourLazy !== null) {
            return this.britishthermalunitsperhourLazy;
        }
        return this.britishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }
    get JoulesPerHour() {
        if (this.joulesperhourLazy !== null) {
            return this.joulesperhourLazy;
        }
        return this.joulesperhourLazy = this.convertFromBase(PowerUnits.JoulesPerHour);
    }
    get Femtowatts() {
        if (this.femtowattsLazy !== null) {
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(PowerUnits.Femtowatts);
    }
    get Picowatts() {
        if (this.picowattsLazy !== null) {
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(PowerUnits.Picowatts);
    }
    get Nanowatts() {
        if (this.nanowattsLazy !== null) {
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(PowerUnits.Nanowatts);
    }
    get Microwatts() {
        if (this.microwattsLazy !== null) {
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(PowerUnits.Microwatts);
    }
    get Deciwatts() {
        if (this.deciwattsLazy !== null) {
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(PowerUnits.Deciwatts);
    }
    get Decawatts() {
        if (this.decawattsLazy !== null) {
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(PowerUnits.Decawatts);
    }
    get Kilowatts() {
        if (this.kilowattsLazy !== null) {
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(PowerUnits.Kilowatts);
    }
    get Megawatts() {
        if (this.megawattsLazy !== null) {
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(PowerUnits.Megawatts);
    }
    get Gigawatts() {
        if (this.gigawattsLazy !== null) {
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(PowerUnits.Gigawatts);
    }
    get Terawatts() {
        if (this.terawattsLazy !== null) {
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(PowerUnits.Terawatts);
    }
    get Petawatts() {
        if (this.petawattsLazy !== null) {
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(PowerUnits.Petawatts);
    }
    get KilobritishThermalUnitsPerHour() {
        if (this.kilobritishthermalunitsperhourLazy !== null) {
            return this.kilobritishthermalunitsperhourLazy;
        }
        return this.kilobritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.KilobritishThermalUnitsPerHour);
    }
    get KilojoulesPerHour() {
        if (this.kilojoulesperhourLazy !== null) {
            return this.kilojoulesperhourLazy;
        }
        return this.kilojoulesperhourLazy = this.convertFromBase(PowerUnits.KilojoulesPerHour);
    }
    get MegajoulesPerHour() {
        if (this.megajoulesperhourLazy !== null) {
            return this.megajoulesperhourLazy;
        }
        return this.megajoulesperhourLazy = this.convertFromBase(PowerUnits.MegajoulesPerHour);
    }
    get GigajoulesPerHour() {
        if (this.gigajoulesperhourLazy !== null) {
            return this.gigajoulesperhourLazy;
        }
        return this.gigajoulesperhourLazy = this.convertFromBase(PowerUnits.GigajoulesPerHour);
    }
    static FromWatts(value) {
        return new Power(value, PowerUnits.Watts);
    }
    static FromMechanicalHorsepower(value) {
        return new Power(value, PowerUnits.MechanicalHorsepower);
    }
    static FromMetricHorsepower(value) {
        return new Power(value, PowerUnits.MetricHorsepower);
    }
    static FromElectricalHorsepower(value) {
        return new Power(value, PowerUnits.ElectricalHorsepower);
    }
    static FromBoilerHorsepower(value) {
        return new Power(value, PowerUnits.BoilerHorsepower);
    }
    static FromHydraulicHorsepower(value) {
        return new Power(value, PowerUnits.HydraulicHorsepower);
    }
    static FromBritishThermalUnitsPerHour(value) {
        return new Power(value, PowerUnits.BritishThermalUnitsPerHour);
    }
    static FromJoulesPerHour(value) {
        return new Power(value, PowerUnits.JoulesPerHour);
    }
    static FromFemtowatts(value) {
        return new Power(value, PowerUnits.Femtowatts);
    }
    static FromPicowatts(value) {
        return new Power(value, PowerUnits.Picowatts);
    }
    static FromNanowatts(value) {
        return new Power(value, PowerUnits.Nanowatts);
    }
    static FromMicrowatts(value) {
        return new Power(value, PowerUnits.Microwatts);
    }
    static FromDeciwatts(value) {
        return new Power(value, PowerUnits.Deciwatts);
    }
    static FromDecawatts(value) {
        return new Power(value, PowerUnits.Decawatts);
    }
    static FromKilowatts(value) {
        return new Power(value, PowerUnits.Kilowatts);
    }
    static FromMegawatts(value) {
        return new Power(value, PowerUnits.Megawatts);
    }
    static FromGigawatts(value) {
        return new Power(value, PowerUnits.Gigawatts);
    }
    static FromTerawatts(value) {
        return new Power(value, PowerUnits.Terawatts);
    }
    static FromPetawatts(value) {
        return new Power(value, PowerUnits.Petawatts);
    }
    static FromKilobritishThermalUnitsPerHour(value) {
        return new Power(value, PowerUnits.KilobritishThermalUnitsPerHour);
    }
    static FromKilojoulesPerHour(value) {
        return new Power(value, PowerUnits.KilojoulesPerHour);
    }
    static FromMegajoulesPerHour(value) {
        return new Power(value, PowerUnits.MegajoulesPerHour);
    }
    static FromGigajoulesPerHour(value) {
        return new Power(value, PowerUnits.GigajoulesPerHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PowerUnits.Watts:
                return this.value;
            case PowerUnits.MechanicalHorsepower:
                return this.value / 745.69;
            case PowerUnits.MetricHorsepower:
                return this.value / 735.49875;
            case PowerUnits.ElectricalHorsepower:
                return this.value / 746;
            case PowerUnits.BoilerHorsepower:
                return this.value / 9812.5;
            case PowerUnits.HydraulicHorsepower:
                return this.value / 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.value / 0.293071;
            case PowerUnits.JoulesPerHour:
                return this.value * 3600;
            case PowerUnits.Femtowatts:
                return (this.value) / 1e-15;
            case PowerUnits.Picowatts:
                return (this.value) / 1e-12;
            case PowerUnits.Nanowatts:
                return (this.value) / 1e-9;
            case PowerUnits.Microwatts:
                return (this.value) / 0.000001;
            case PowerUnits.Deciwatts:
                return (this.value) / 0.1;
            case PowerUnits.Decawatts:
                return (this.value) / 10;
            case PowerUnits.Kilowatts:
                return (this.value) / 1000;
            case PowerUnits.Megawatts:
                return (this.value) / 1000000;
            case PowerUnits.Gigawatts:
                return (this.value) / 1000000000;
            case PowerUnits.Terawatts:
                return (this.value) / 1000000000000;
            case PowerUnits.Petawatts:
                return (this.value) / 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return (this.value / 0.293071) / 1000;
            case PowerUnits.KilojoulesPerHour:
                return (this.value * 3600) / 1000;
            case PowerUnits.MegajoulesPerHour:
                return (this.value * 3600) / 1000000;
            case PowerUnits.GigajoulesPerHour:
                return (this.value * 3600) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PowerUnits.Watts:
                return value;
            case PowerUnits.MechanicalHorsepower:
                return value * 745.69;
            case PowerUnits.MetricHorsepower:
                return value * 735.49875;
            case PowerUnits.ElectricalHorsepower:
                return value * 746;
            case PowerUnits.BoilerHorsepower:
                return value * 9812.5;
            case PowerUnits.HydraulicHorsepower:
                return value * 745.69988145;
            case PowerUnits.BritishThermalUnitsPerHour:
                return value * 0.293071;
            case PowerUnits.JoulesPerHour:
                return value / 3600;
            case PowerUnits.Femtowatts:
                return (value) * 1e-15;
            case PowerUnits.Picowatts:
                return (value) * 1e-12;
            case PowerUnits.Nanowatts:
                return (value) * 1e-9;
            case PowerUnits.Microwatts:
                return (value) * 0.000001;
            case PowerUnits.Deciwatts:
                return (value) * 0.1;
            case PowerUnits.Decawatts:
                return (value) * 10;
            case PowerUnits.Kilowatts:
                return (value) * 1000;
            case PowerUnits.Megawatts:
                return (value) * 1000000;
            case PowerUnits.Gigawatts:
                return (value) * 1000000000;
            case PowerUnits.Terawatts:
                return (value) * 1000000000000;
            case PowerUnits.Petawatts:
                return (value) * 1000000000000000;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return (value * 0.293071) * 1000;
            case PowerUnits.KilojoulesPerHour:
                return (value / 3600) * 1000;
            case PowerUnits.MegajoulesPerHour:
                return (value / 3600) * 1000000;
            case PowerUnits.GigajoulesPerHour:
                return (value / 3600) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = PowerUnits.Watts) {
        switch (toUnit) {
            case PowerUnits.Watts:
                return this.Watts + ` W`;
            case PowerUnits.MechanicalHorsepower:
                return this.MechanicalHorsepower + ` hp(I)`;
            case PowerUnits.MetricHorsepower:
                return this.MetricHorsepower + ` hp(M)`;
            case PowerUnits.ElectricalHorsepower:
                return this.ElectricalHorsepower + ` hp(E)`;
            case PowerUnits.BoilerHorsepower:
                return this.BoilerHorsepower + ` hp(S)`;
            case PowerUnits.HydraulicHorsepower:
                return this.HydraulicHorsepower + ` hp(H)`;
            case PowerUnits.BritishThermalUnitsPerHour:
                return this.BritishThermalUnitsPerHour + ` Btu/h`;
            case PowerUnits.JoulesPerHour:
                return this.JoulesPerHour + ` J/h`;
            case PowerUnits.Femtowatts:
                return this.Femtowatts + ` W`;
            case PowerUnits.Picowatts:
                return this.Picowatts + ` W`;
            case PowerUnits.Nanowatts:
                return this.Nanowatts + ` W`;
            case PowerUnits.Microwatts:
                return this.Microwatts + ` W`;
            case PowerUnits.Deciwatts:
                return this.Deciwatts + ` W`;
            case PowerUnits.Decawatts:
                return this.Decawatts + ` W`;
            case PowerUnits.Kilowatts:
                return this.Kilowatts + ` W`;
            case PowerUnits.Megawatts:
                return this.Megawatts + ` W`;
            case PowerUnits.Gigawatts:
                return this.Gigawatts + ` W`;
            case PowerUnits.Terawatts:
                return this.Terawatts + ` W`;
            case PowerUnits.Petawatts:
                return this.Petawatts + ` W`;
            case PowerUnits.KilobritishThermalUnitsPerHour:
                return this.KilobritishThermalUnitsPerHour + ` Btu/h`;
            case PowerUnits.KilojoulesPerHour:
                return this.KilojoulesPerHour + ` J/h`;
            case PowerUnits.MegajoulesPerHour:
                return this.MegajoulesPerHour + ` J/h`;
            case PowerUnits.GigajoulesPerHour:
                return this.GigajoulesPerHour + ` J/h`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Power = Power;
//# sourceMappingURL=power.g.js.map