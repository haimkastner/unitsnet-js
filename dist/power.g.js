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
        this.value = this.convertToBase(value, fromUnit);
    }
    get Watts() {
        return this.convertFromBase(PowerUnits.Watts);
    }
    get MechanicalHorsepower() {
        return this.convertFromBase(PowerUnits.MechanicalHorsepower);
    }
    get MetricHorsepower() {
        return this.convertFromBase(PowerUnits.MetricHorsepower);
    }
    get ElectricalHorsepower() {
        return this.convertFromBase(PowerUnits.ElectricalHorsepower);
    }
    get BoilerHorsepower() {
        return this.convertFromBase(PowerUnits.BoilerHorsepower);
    }
    get HydraulicHorsepower() {
        return this.convertFromBase(PowerUnits.HydraulicHorsepower);
    }
    get BritishThermalUnitsPerHour() {
        return this.convertFromBase(PowerUnits.BritishThermalUnitsPerHour);
    }
    get JoulesPerHour() {
        return this.convertFromBase(PowerUnits.JoulesPerHour);
    }
    get Femtowatts() {
        return this.convertFromBase(PowerUnits.Femtowatts);
    }
    get Picowatts() {
        return this.convertFromBase(PowerUnits.Picowatts);
    }
    get Nanowatts() {
        return this.convertFromBase(PowerUnits.Nanowatts);
    }
    get Microwatts() {
        return this.convertFromBase(PowerUnits.Microwatts);
    }
    get Deciwatts() {
        return this.convertFromBase(PowerUnits.Deciwatts);
    }
    get Decawatts() {
        return this.convertFromBase(PowerUnits.Decawatts);
    }
    get Kilowatts() {
        return this.convertFromBase(PowerUnits.Kilowatts);
    }
    get Megawatts() {
        return this.convertFromBase(PowerUnits.Megawatts);
    }
    get Gigawatts() {
        return this.convertFromBase(PowerUnits.Gigawatts);
    }
    get Terawatts() {
        return this.convertFromBase(PowerUnits.Terawatts);
    }
    get Petawatts() {
        return this.convertFromBase(PowerUnits.Petawatts);
    }
    get Kilobritishthermalunitsperhour() {
        return this.convertFromBase(PowerUnits.Kilobritishthermalunitsperhour);
    }
    get Kilojoulesperhour() {
        return this.convertFromBase(PowerUnits.Kilojoulesperhour);
    }
    get Megajoulesperhour() {
        return this.convertFromBase(PowerUnits.Megajoulesperhour);
    }
    get Gigajoulesperhour() {
        return this.convertFromBase(PowerUnits.Gigajoulesperhour);
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
                return (this.value) * 1e-15;
            case PowerUnits.Picowatts:
                return (this.value) * 1e-12;
            case PowerUnits.Nanowatts:
                return (this.value) * 1e-9;
            case PowerUnits.Microwatts:
                return (this.value) * 0.000001;
            case PowerUnits.Deciwatts:
                return (this.value) * 0.1;
            case PowerUnits.Decawatts:
                return (this.value) * 10;
            case PowerUnits.Kilowatts:
                return (this.value) * 1000;
            case PowerUnits.Megawatts:
                return (this.value) * 1000000;
            case PowerUnits.Gigawatts:
                return (this.value) * 1000000000;
            case PowerUnits.Terawatts:
                return (this.value) * 1000000000000;
            case PowerUnits.Petawatts:
                return (this.value) * 1000000000000000;
            case PowerUnits.Kilobritishthermalunitsperhour:
                return (this.value * 0.293071) * 1000;
            case PowerUnits.Kilojoulesperhour:
                return (this.value / 3600) * 1000;
            case PowerUnits.Megajoulesperhour:
                return (this.value / 3600) * 1000000;
            case PowerUnits.Gigajoulesperhour:
                return (this.value / 3600) * 1000000000;
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
                return (value) / 1e-15;
            case PowerUnits.Picowatts:
                return (value) / 1e-12;
            case PowerUnits.Nanowatts:
                return (value) / 1e-9;
            case PowerUnits.Microwatts:
                return (value) / 0.000001;
            case PowerUnits.Deciwatts:
                return (value) / 0.1;
            case PowerUnits.Decawatts:
                return (value) / 10;
            case PowerUnits.Kilowatts:
                return (value) / 1000;
            case PowerUnits.Megawatts:
                return (value) / 1000000;
            case PowerUnits.Gigawatts:
                return (value) / 1000000000;
            case PowerUnits.Terawatts:
                return (value) / 1000000000000;
            case PowerUnits.Petawatts:
                return (value) / 1000000000000000;
            case PowerUnits.Kilobritishthermalunitsperhour:
                return (value / 0.293071) / 1000;
            case PowerUnits.Kilojoulesperhour:
                return (value * 3600) / 1000;
            case PowerUnits.Megajoulesperhour:
                return (value * 3600) / 1000000;
            case PowerUnits.Gigajoulesperhour:
                return (value * 3600) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Power = Power;
//# sourceMappingURL=power.g.js.map