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
    PowerUnits[PowerUnits["Kilobritishthermalunitsperhour"] = 19] = "Kilobritishthermalunitsperhour";
    PowerUnits[PowerUnits["Kilojoulesperhour"] = 20] = "Kilojoulesperhour";
    PowerUnits[PowerUnits["Megajoulesperhour"] = 21] = "Megajoulesperhour";
    PowerUnits[PowerUnits["Gigajoulesperhour"] = 22] = "Gigajoulesperhour";
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
    get Kilobritishthermalunitsperhour() {
        if (this.kilobritishthermalunitsperhourLazy !== null) {
            return this.kilobritishthermalunitsperhourLazy;
        }
        return this.kilobritishthermalunitsperhourLazy = this.convertFromBase(PowerUnits.Kilobritishthermalunitsperhour);
    }
    get Kilojoulesperhour() {
        if (this.kilojoulesperhourLazy !== null) {
            return this.kilojoulesperhourLazy;
        }
        return this.kilojoulesperhourLazy = this.convertFromBase(PowerUnits.Kilojoulesperhour);
    }
    get Megajoulesperhour() {
        if (this.megajoulesperhourLazy !== null) {
            return this.megajoulesperhourLazy;
        }
        return this.megajoulesperhourLazy = this.convertFromBase(PowerUnits.Megajoulesperhour);
    }
    get Gigajoulesperhour() {
        if (this.gigajoulesperhourLazy !== null) {
            return this.gigajoulesperhourLazy;
        }
        return this.gigajoulesperhourLazy = this.convertFromBase(PowerUnits.Gigajoulesperhour);
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
    static FromKilobritishthermalunitsperhour(value) {
        return new Power(value, PowerUnits.Kilobritishthermalunitsperhour);
    }
    static FromKilojoulesperhour(value) {
        return new Power(value, PowerUnits.Kilojoulesperhour);
    }
    static FromMegajoulesperhour(value) {
        return new Power(value, PowerUnits.Megajoulesperhour);
    }
    static FromGigajoulesperhour(value) {
        return new Power(value, PowerUnits.Gigajoulesperhour);
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
            case PowerUnits.Kilobritishthermalunitsperhour:
                return (this.value / 0.293071) / 1000;
            case PowerUnits.Kilojoulesperhour:
                return (this.value * 3600) / 1000;
            case PowerUnits.Megajoulesperhour:
                return (this.value * 3600) / 1000000;
            case PowerUnits.Gigajoulesperhour:
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
            case PowerUnits.Kilobritishthermalunitsperhour:
                return (value * 0.293071) * 1000;
            case PowerUnits.Kilojoulesperhour:
                return (value / 3600) * 1000;
            case PowerUnits.Megajoulesperhour:
                return (value / 3600) * 1000000;
            case PowerUnits.Gigajoulesperhour:
                return (value / 3600) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Power = Power;
//# sourceMappingURL=power.g.js.map