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
    PowerUnits[PowerUnits["Femtowatt"] = 8] = "Femtowatt";
    PowerUnits[PowerUnits["Picowatt"] = 9] = "Picowatt";
    PowerUnits[PowerUnits["Nanowatt"] = 10] = "Nanowatt";
    PowerUnits[PowerUnits["Microwatt"] = 11] = "Microwatt";
    PowerUnits[PowerUnits["Deciwatt"] = 12] = "Deciwatt";
    PowerUnits[PowerUnits["Decawatt"] = 13] = "Decawatt";
    PowerUnits[PowerUnits["Kilowatt"] = 14] = "Kilowatt";
    PowerUnits[PowerUnits["Megawatt"] = 15] = "Megawatt";
    PowerUnits[PowerUnits["Gigawatt"] = 16] = "Gigawatt";
    PowerUnits[PowerUnits["Terawatt"] = 17] = "Terawatt";
    PowerUnits[PowerUnits["Petawatt"] = 18] = "Petawatt";
    PowerUnits[PowerUnits["KilobritishThermalUnitPerHour"] = 19] = "KilobritishThermalUnitPerHour";
    PowerUnits[PowerUnits["KilojoulePerHour"] = 20] = "KilojoulePerHour";
    PowerUnits[PowerUnits["MegajoulePerHour"] = 21] = "MegajoulePerHour";
    PowerUnits[PowerUnits["GigajoulePerHour"] = 22] = "GigajoulePerHour";
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
        this.femtowattLazy = null;
        this.picowattLazy = null;
        this.nanowattLazy = null;
        this.microwattLazy = null;
        this.deciwattLazy = null;
        this.decawattLazy = null;
        this.kilowattLazy = null;
        this.megawattLazy = null;
        this.gigawattLazy = null;
        this.terawattLazy = null;
        this.petawattLazy = null;
        this.kilobritishthermalunitperhourLazy = null;
        this.kilojouleperhourLazy = null;
        this.megajouleperhourLazy = null;
        this.gigajouleperhourLazy = null;
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
    get Femtowatt() {
        if (this.femtowattLazy !== null) {
            return this.femtowattLazy;
        }
        return this.femtowattLazy = this.convertFromBase(PowerUnits.Femtowatt);
    }
    get Picowatt() {
        if (this.picowattLazy !== null) {
            return this.picowattLazy;
        }
        return this.picowattLazy = this.convertFromBase(PowerUnits.Picowatt);
    }
    get Nanowatt() {
        if (this.nanowattLazy !== null) {
            return this.nanowattLazy;
        }
        return this.nanowattLazy = this.convertFromBase(PowerUnits.Nanowatt);
    }
    get Microwatt() {
        if (this.microwattLazy !== null) {
            return this.microwattLazy;
        }
        return this.microwattLazy = this.convertFromBase(PowerUnits.Microwatt);
    }
    get Deciwatt() {
        if (this.deciwattLazy !== null) {
            return this.deciwattLazy;
        }
        return this.deciwattLazy = this.convertFromBase(PowerUnits.Deciwatt);
    }
    get Decawatt() {
        if (this.decawattLazy !== null) {
            return this.decawattLazy;
        }
        return this.decawattLazy = this.convertFromBase(PowerUnits.Decawatt);
    }
    get Kilowatt() {
        if (this.kilowattLazy !== null) {
            return this.kilowattLazy;
        }
        return this.kilowattLazy = this.convertFromBase(PowerUnits.Kilowatt);
    }
    get Megawatt() {
        if (this.megawattLazy !== null) {
            return this.megawattLazy;
        }
        return this.megawattLazy = this.convertFromBase(PowerUnits.Megawatt);
    }
    get Gigawatt() {
        if (this.gigawattLazy !== null) {
            return this.gigawattLazy;
        }
        return this.gigawattLazy = this.convertFromBase(PowerUnits.Gigawatt);
    }
    get Terawatt() {
        if (this.terawattLazy !== null) {
            return this.terawattLazy;
        }
        return this.terawattLazy = this.convertFromBase(PowerUnits.Terawatt);
    }
    get Petawatt() {
        if (this.petawattLazy !== null) {
            return this.petawattLazy;
        }
        return this.petawattLazy = this.convertFromBase(PowerUnits.Petawatt);
    }
    get KilobritishThermalUnitPerHour() {
        if (this.kilobritishthermalunitperhourLazy !== null) {
            return this.kilobritishthermalunitperhourLazy;
        }
        return this.kilobritishthermalunitperhourLazy = this.convertFromBase(PowerUnits.KilobritishThermalUnitPerHour);
    }
    get KilojoulePerHour() {
        if (this.kilojouleperhourLazy !== null) {
            return this.kilojouleperhourLazy;
        }
        return this.kilojouleperhourLazy = this.convertFromBase(PowerUnits.KilojoulePerHour);
    }
    get MegajoulePerHour() {
        if (this.megajouleperhourLazy !== null) {
            return this.megajouleperhourLazy;
        }
        return this.megajouleperhourLazy = this.convertFromBase(PowerUnits.MegajoulePerHour);
    }
    get GigajoulePerHour() {
        if (this.gigajouleperhourLazy !== null) {
            return this.gigajouleperhourLazy;
        }
        return this.gigajouleperhourLazy = this.convertFromBase(PowerUnits.GigajoulePerHour);
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
    static FromFemtowatt(value) {
        return new Power(value, PowerUnits.Femtowatt);
    }
    static FromPicowatt(value) {
        return new Power(value, PowerUnits.Picowatt);
    }
    static FromNanowatt(value) {
        return new Power(value, PowerUnits.Nanowatt);
    }
    static FromMicrowatt(value) {
        return new Power(value, PowerUnits.Microwatt);
    }
    static FromDeciwatt(value) {
        return new Power(value, PowerUnits.Deciwatt);
    }
    static FromDecawatt(value) {
        return new Power(value, PowerUnits.Decawatt);
    }
    static FromKilowatt(value) {
        return new Power(value, PowerUnits.Kilowatt);
    }
    static FromMegawatt(value) {
        return new Power(value, PowerUnits.Megawatt);
    }
    static FromGigawatt(value) {
        return new Power(value, PowerUnits.Gigawatt);
    }
    static FromTerawatt(value) {
        return new Power(value, PowerUnits.Terawatt);
    }
    static FromPetawatt(value) {
        return new Power(value, PowerUnits.Petawatt);
    }
    static FromKilobritishThermalUnitPerHour(value) {
        return new Power(value, PowerUnits.KilobritishThermalUnitPerHour);
    }
    static FromKilojoulePerHour(value) {
        return new Power(value, PowerUnits.KilojoulePerHour);
    }
    static FromMegajoulePerHour(value) {
        return new Power(value, PowerUnits.MegajoulePerHour);
    }
    static FromGigajoulePerHour(value) {
        return new Power(value, PowerUnits.GigajoulePerHour);
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
            case PowerUnits.Femtowatt:
                return (this.value) / 1e-15;
            case PowerUnits.Picowatt:
                return (this.value) / 1e-12;
            case PowerUnits.Nanowatt:
                return (this.value) / 1e-9;
            case PowerUnits.Microwatt:
                return (this.value) / 0.000001;
            case PowerUnits.Deciwatt:
                return (this.value) / 0.1;
            case PowerUnits.Decawatt:
                return (this.value) / 10;
            case PowerUnits.Kilowatt:
                return (this.value) / 1000;
            case PowerUnits.Megawatt:
                return (this.value) / 1000000;
            case PowerUnits.Gigawatt:
                return (this.value) / 1000000000;
            case PowerUnits.Terawatt:
                return (this.value) / 1000000000000;
            case PowerUnits.Petawatt:
                return (this.value) / 1000000000000000;
            case PowerUnits.KilobritishThermalUnitPerHour:
                return (this.value / 0.293071) / 1000;
            case PowerUnits.KilojoulePerHour:
                return (this.value * 3600) / 1000;
            case PowerUnits.MegajoulePerHour:
                return (this.value * 3600) / 1000000;
            case PowerUnits.GigajoulePerHour:
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
            case PowerUnits.Femtowatt:
                return (value) * 1e-15;
            case PowerUnits.Picowatt:
                return (value) * 1e-12;
            case PowerUnits.Nanowatt:
                return (value) * 1e-9;
            case PowerUnits.Microwatt:
                return (value) * 0.000001;
            case PowerUnits.Deciwatt:
                return (value) * 0.1;
            case PowerUnits.Decawatt:
                return (value) * 10;
            case PowerUnits.Kilowatt:
                return (value) * 1000;
            case PowerUnits.Megawatt:
                return (value) * 1000000;
            case PowerUnits.Gigawatt:
                return (value) * 1000000000;
            case PowerUnits.Terawatt:
                return (value) * 1000000000000;
            case PowerUnits.Petawatt:
                return (value) * 1000000000000000;
            case PowerUnits.KilobritishThermalUnitPerHour:
                return (value * 0.293071) * 1000;
            case PowerUnits.KilojoulePerHour:
                return (value / 3600) * 1000;
            case PowerUnits.MegajoulePerHour:
                return (value / 3600) * 1000000;
            case PowerUnits.GigajoulePerHour:
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
            case PowerUnits.Femtowatt:
                return this.Femtowatt + ` W`;
            case PowerUnits.Picowatt:
                return this.Picowatt + ` W`;
            case PowerUnits.Nanowatt:
                return this.Nanowatt + ` W`;
            case PowerUnits.Microwatt:
                return this.Microwatt + ` W`;
            case PowerUnits.Deciwatt:
                return this.Deciwatt + ` W`;
            case PowerUnits.Decawatt:
                return this.Decawatt + ` W`;
            case PowerUnits.Kilowatt:
                return this.Kilowatt + ` W`;
            case PowerUnits.Megawatt:
                return this.Megawatt + ` W`;
            case PowerUnits.Gigawatt:
                return this.Gigawatt + ` W`;
            case PowerUnits.Terawatt:
                return this.Terawatt + ` W`;
            case PowerUnits.Petawatt:
                return this.Petawatt + ` W`;
            case PowerUnits.KilobritishThermalUnitPerHour:
                return this.KilobritishThermalUnitPerHour + ` Btu/h`;
            case PowerUnits.KilojoulePerHour:
                return this.KilojoulePerHour + ` J/h`;
            case PowerUnits.MegajoulePerHour:
                return this.MegajoulePerHour + ` J/h`;
            case PowerUnits.GigajoulePerHour:
                return this.GigajoulePerHour + ` J/h`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Power = Power;
//# sourceMappingURL=power.g.js.map