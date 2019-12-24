"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PowerDensityUnits;
(function (PowerDensityUnits) {
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicMeter"] = 0] = "WattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicInch"] = 1] = "WattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicFoot"] = 2] = "WattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["WattsPerLiter"] = 3] = "WattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["Picowattspercubicmeter"] = 4] = "Picowattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Nanowattspercubicmeter"] = 5] = "Nanowattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Microwattspercubicmeter"] = 6] = "Microwattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Deciwattspercubicmeter"] = 7] = "Deciwattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Decawattspercubicmeter"] = 8] = "Decawattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Kilowattspercubicmeter"] = 9] = "Kilowattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Megawattspercubicmeter"] = 10] = "Megawattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Gigawattspercubicmeter"] = 11] = "Gigawattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Terawattspercubicmeter"] = 12] = "Terawattspercubicmeter";
    PowerDensityUnits[PowerDensityUnits["Picowattspercubicinch"] = 13] = "Picowattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Nanowattspercubicinch"] = 14] = "Nanowattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Microwattspercubicinch"] = 15] = "Microwattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Deciwattspercubicinch"] = 16] = "Deciwattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Decawattspercubicinch"] = 17] = "Decawattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Kilowattspercubicinch"] = 18] = "Kilowattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Megawattspercubicinch"] = 19] = "Megawattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Gigawattspercubicinch"] = 20] = "Gigawattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Terawattspercubicinch"] = 21] = "Terawattspercubicinch";
    PowerDensityUnits[PowerDensityUnits["Picowattspercubicfoot"] = 22] = "Picowattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Nanowattspercubicfoot"] = 23] = "Nanowattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Microwattspercubicfoot"] = 24] = "Microwattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Deciwattspercubicfoot"] = 25] = "Deciwattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Decawattspercubicfoot"] = 26] = "Decawattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Kilowattspercubicfoot"] = 27] = "Kilowattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Megawattspercubicfoot"] = 28] = "Megawattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Gigawattspercubicfoot"] = 29] = "Gigawattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Terawattspercubicfoot"] = 30] = "Terawattspercubicfoot";
    PowerDensityUnits[PowerDensityUnits["Picowattsperliter"] = 31] = "Picowattsperliter";
    PowerDensityUnits[PowerDensityUnits["Nanowattsperliter"] = 32] = "Nanowattsperliter";
    PowerDensityUnits[PowerDensityUnits["Microwattsperliter"] = 33] = "Microwattsperliter";
    PowerDensityUnits[PowerDensityUnits["Deciwattsperliter"] = 34] = "Deciwattsperliter";
    PowerDensityUnits[PowerDensityUnits["Decawattsperliter"] = 35] = "Decawattsperliter";
    PowerDensityUnits[PowerDensityUnits["Kilowattsperliter"] = 36] = "Kilowattsperliter";
    PowerDensityUnits[PowerDensityUnits["Megawattsperliter"] = 37] = "Megawattsperliter";
    PowerDensityUnits[PowerDensityUnits["Gigawattsperliter"] = 38] = "Gigawattsperliter";
    PowerDensityUnits[PowerDensityUnits["Terawattsperliter"] = 39] = "Terawattsperliter";
})(PowerDensityUnits = exports.PowerDensityUnits || (exports.PowerDensityUnits = {}));
class PowerDensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerCubicMeter() {
        return this.convertFromBase(PowerDensityUnits.WattsPerCubicMeter);
    }
    get WattsPerCubicInch() {
        return this.convertFromBase(PowerDensityUnits.WattsPerCubicInch);
    }
    get WattsPerCubicFoot() {
        return this.convertFromBase(PowerDensityUnits.WattsPerCubicFoot);
    }
    get WattsPerLiter() {
        return this.convertFromBase(PowerDensityUnits.WattsPerLiter);
    }
    get Picowattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Picowattspercubicmeter);
    }
    get Nanowattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Nanowattspercubicmeter);
    }
    get Microwattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Microwattspercubicmeter);
    }
    get Deciwattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Deciwattspercubicmeter);
    }
    get Decawattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Decawattspercubicmeter);
    }
    get Kilowattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Kilowattspercubicmeter);
    }
    get Megawattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Megawattspercubicmeter);
    }
    get Gigawattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Gigawattspercubicmeter);
    }
    get Terawattspercubicmeter() {
        return this.convertFromBase(PowerDensityUnits.Terawattspercubicmeter);
    }
    get Picowattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Picowattspercubicinch);
    }
    get Nanowattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Nanowattspercubicinch);
    }
    get Microwattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Microwattspercubicinch);
    }
    get Deciwattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Deciwattspercubicinch);
    }
    get Decawattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Decawattspercubicinch);
    }
    get Kilowattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Kilowattspercubicinch);
    }
    get Megawattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Megawattspercubicinch);
    }
    get Gigawattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Gigawattspercubicinch);
    }
    get Terawattspercubicinch() {
        return this.convertFromBase(PowerDensityUnits.Terawattspercubicinch);
    }
    get Picowattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Picowattspercubicfoot);
    }
    get Nanowattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Nanowattspercubicfoot);
    }
    get Microwattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Microwattspercubicfoot);
    }
    get Deciwattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Deciwattspercubicfoot);
    }
    get Decawattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Decawattspercubicfoot);
    }
    get Kilowattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Kilowattspercubicfoot);
    }
    get Megawattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Megawattspercubicfoot);
    }
    get Gigawattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Gigawattspercubicfoot);
    }
    get Terawattspercubicfoot() {
        return this.convertFromBase(PowerDensityUnits.Terawattspercubicfoot);
    }
    get Picowattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Picowattsperliter);
    }
    get Nanowattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Nanowattsperliter);
    }
    get Microwattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Microwattsperliter);
    }
    get Deciwattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Deciwattsperliter);
    }
    get Decawattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Decawattsperliter);
    }
    get Kilowattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Kilowattsperliter);
    }
    get Megawattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Megawattsperliter);
    }
    get Gigawattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Gigawattsperliter);
    }
    get Terawattsperliter() {
        return this.convertFromBase(PowerDensityUnits.Terawattsperliter);
    }
    static FromWattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicMeter);
    }
    static FromWattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicInch);
    }
    static FromWattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.WattsPerCubicFoot);
    }
    static FromWattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.WattsPerLiter);
    }
    static FromPicowattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Picowattspercubicmeter);
    }
    static FromNanowattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Nanowattspercubicmeter);
    }
    static FromMicrowattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Microwattspercubicmeter);
    }
    static FromDeciwattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Deciwattspercubicmeter);
    }
    static FromDecawattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Decawattspercubicmeter);
    }
    static FromKilowattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Kilowattspercubicmeter);
    }
    static FromMegawattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Megawattspercubicmeter);
    }
    static FromGigawattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Gigawattspercubicmeter);
    }
    static FromTerawattspercubicmeter(value) {
        return new PowerDensity(value, PowerDensityUnits.Terawattspercubicmeter);
    }
    static FromPicowattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Picowattspercubicinch);
    }
    static FromNanowattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Nanowattspercubicinch);
    }
    static FromMicrowattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Microwattspercubicinch);
    }
    static FromDeciwattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Deciwattspercubicinch);
    }
    static FromDecawattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Decawattspercubicinch);
    }
    static FromKilowattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Kilowattspercubicinch);
    }
    static FromMegawattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Megawattspercubicinch);
    }
    static FromGigawattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Gigawattspercubicinch);
    }
    static FromTerawattspercubicinch(value) {
        return new PowerDensity(value, PowerDensityUnits.Terawattspercubicinch);
    }
    static FromPicowattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Picowattspercubicfoot);
    }
    static FromNanowattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Nanowattspercubicfoot);
    }
    static FromMicrowattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Microwattspercubicfoot);
    }
    static FromDeciwattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Deciwattspercubicfoot);
    }
    static FromDecawattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Decawattspercubicfoot);
    }
    static FromKilowattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Kilowattspercubicfoot);
    }
    static FromMegawattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Megawattspercubicfoot);
    }
    static FromGigawattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Gigawattspercubicfoot);
    }
    static FromTerawattspercubicfoot(value) {
        return new PowerDensity(value, PowerDensityUnits.Terawattspercubicfoot);
    }
    static FromPicowattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Picowattsperliter);
    }
    static FromNanowattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Nanowattsperliter);
    }
    static FromMicrowattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Microwattsperliter);
    }
    static FromDeciwattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Deciwattsperliter);
    }
    static FromDecawattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Decawattsperliter);
    }
    static FromKilowattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Kilowattsperliter);
    }
    static FromMegawattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Megawattsperliter);
    }
    static FromGigawattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Gigawattsperliter);
    }
    static FromTerawattsperliter(value) {
        return new PowerDensity(value, PowerDensityUnits.Terawattsperliter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PowerDensityUnits.WattsPerCubicMeter:
                return this.value;
            case PowerDensityUnits.WattsPerCubicInch:
                return this.value / 6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot:
                return this.value / 3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter:
                return this.value / 1.0e3;
            case PowerDensityUnits.Picowattspercubicmeter:
                return (this.value) / 1e-12;
            case PowerDensityUnits.Nanowattspercubicmeter:
                return (this.value) / 1e-9;
            case PowerDensityUnits.Microwattspercubicmeter:
                return (this.value) / 0.000001;
            case PowerDensityUnits.Deciwattspercubicmeter:
                return (this.value) / 0.1;
            case PowerDensityUnits.Decawattspercubicmeter:
                return (this.value) / 10;
            case PowerDensityUnits.Kilowattspercubicmeter:
                return (this.value) / 1000;
            case PowerDensityUnits.Megawattspercubicmeter:
                return (this.value) / 1000000;
            case PowerDensityUnits.Gigawattspercubicmeter:
                return (this.value) / 1000000000;
            case PowerDensityUnits.Terawattspercubicmeter:
                return (this.value) / 1000000000000;
            case PowerDensityUnits.Picowattspercubicinch:
                return (this.value / 6.102374409473228e4) / 1e-12;
            case PowerDensityUnits.Nanowattspercubicinch:
                return (this.value / 6.102374409473228e4) / 1e-9;
            case PowerDensityUnits.Microwattspercubicinch:
                return (this.value / 6.102374409473228e4) / 0.000001;
            case PowerDensityUnits.Deciwattspercubicinch:
                return (this.value / 6.102374409473228e4) / 0.1;
            case PowerDensityUnits.Decawattspercubicinch:
                return (this.value / 6.102374409473228e4) / 10;
            case PowerDensityUnits.Kilowattspercubicinch:
                return (this.value / 6.102374409473228e4) / 1000;
            case PowerDensityUnits.Megawattspercubicinch:
                return (this.value / 6.102374409473228e4) / 1000000;
            case PowerDensityUnits.Gigawattspercubicinch:
                return (this.value / 6.102374409473228e4) / 1000000000;
            case PowerDensityUnits.Terawattspercubicinch:
                return (this.value / 6.102374409473228e4) / 1000000000000;
            case PowerDensityUnits.Picowattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 1e-12;
            case PowerDensityUnits.Nanowattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 1e-9;
            case PowerDensityUnits.Microwattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 0.000001;
            case PowerDensityUnits.Deciwattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 0.1;
            case PowerDensityUnits.Decawattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 10;
            case PowerDensityUnits.Kilowattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 1000;
            case PowerDensityUnits.Megawattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 1000000;
            case PowerDensityUnits.Gigawattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 1000000000;
            case PowerDensityUnits.Terawattspercubicfoot:
                return (this.value / 3.531466672148859e1) / 1000000000000;
            case PowerDensityUnits.Picowattsperliter:
                return (this.value / 1.0e3) / 1e-12;
            case PowerDensityUnits.Nanowattsperliter:
                return (this.value / 1.0e3) / 1e-9;
            case PowerDensityUnits.Microwattsperliter:
                return (this.value / 1.0e3) / 0.000001;
            case PowerDensityUnits.Deciwattsperliter:
                return (this.value / 1.0e3) / 0.1;
            case PowerDensityUnits.Decawattsperliter:
                return (this.value / 1.0e3) / 10;
            case PowerDensityUnits.Kilowattsperliter:
                return (this.value / 1.0e3) / 1000;
            case PowerDensityUnits.Megawattsperliter:
                return (this.value / 1.0e3) / 1000000;
            case PowerDensityUnits.Gigawattsperliter:
                return (this.value / 1.0e3) / 1000000000;
            case PowerDensityUnits.Terawattsperliter:
                return (this.value / 1.0e3) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PowerDensityUnits.WattsPerCubicMeter:
                return value;
            case PowerDensityUnits.WattsPerCubicInch:
                return value * 6.102374409473228e4;
            case PowerDensityUnits.WattsPerCubicFoot:
                return value * 3.531466672148859e1;
            case PowerDensityUnits.WattsPerLiter:
                return value * 1.0e3;
            case PowerDensityUnits.Picowattspercubicmeter:
                return (value) * 1e-12;
            case PowerDensityUnits.Nanowattspercubicmeter:
                return (value) * 1e-9;
            case PowerDensityUnits.Microwattspercubicmeter:
                return (value) * 0.000001;
            case PowerDensityUnits.Deciwattspercubicmeter:
                return (value) * 0.1;
            case PowerDensityUnits.Decawattspercubicmeter:
                return (value) * 10;
            case PowerDensityUnits.Kilowattspercubicmeter:
                return (value) * 1000;
            case PowerDensityUnits.Megawattspercubicmeter:
                return (value) * 1000000;
            case PowerDensityUnits.Gigawattspercubicmeter:
                return (value) * 1000000000;
            case PowerDensityUnits.Terawattspercubicmeter:
                return (value) * 1000000000000;
            case PowerDensityUnits.Picowattspercubicinch:
                return (value * 6.102374409473228e4) * 1e-12;
            case PowerDensityUnits.Nanowattspercubicinch:
                return (value * 6.102374409473228e4) * 1e-9;
            case PowerDensityUnits.Microwattspercubicinch:
                return (value * 6.102374409473228e4) * 0.000001;
            case PowerDensityUnits.Deciwattspercubicinch:
                return (value * 6.102374409473228e4) * 0.1;
            case PowerDensityUnits.Decawattspercubicinch:
                return (value * 6.102374409473228e4) * 10;
            case PowerDensityUnits.Kilowattspercubicinch:
                return (value * 6.102374409473228e4) * 1000;
            case PowerDensityUnits.Megawattspercubicinch:
                return (value * 6.102374409473228e4) * 1000000;
            case PowerDensityUnits.Gigawattspercubicinch:
                return (value * 6.102374409473228e4) * 1000000000;
            case PowerDensityUnits.Terawattspercubicinch:
                return (value * 6.102374409473228e4) * 1000000000000;
            case PowerDensityUnits.Picowattspercubicfoot:
                return (value * 3.531466672148859e1) * 1e-12;
            case PowerDensityUnits.Nanowattspercubicfoot:
                return (value * 3.531466672148859e1) * 1e-9;
            case PowerDensityUnits.Microwattspercubicfoot:
                return (value * 3.531466672148859e1) * 0.000001;
            case PowerDensityUnits.Deciwattspercubicfoot:
                return (value * 3.531466672148859e1) * 0.1;
            case PowerDensityUnits.Decawattspercubicfoot:
                return (value * 3.531466672148859e1) * 10;
            case PowerDensityUnits.Kilowattspercubicfoot:
                return (value * 3.531466672148859e1) * 1000;
            case PowerDensityUnits.Megawattspercubicfoot:
                return (value * 3.531466672148859e1) * 1000000;
            case PowerDensityUnits.Gigawattspercubicfoot:
                return (value * 3.531466672148859e1) * 1000000000;
            case PowerDensityUnits.Terawattspercubicfoot:
                return (value * 3.531466672148859e1) * 1000000000000;
            case PowerDensityUnits.Picowattsperliter:
                return (value * 1.0e3) * 1e-12;
            case PowerDensityUnits.Nanowattsperliter:
                return (value * 1.0e3) * 1e-9;
            case PowerDensityUnits.Microwattsperliter:
                return (value * 1.0e3) * 0.000001;
            case PowerDensityUnits.Deciwattsperliter:
                return (value * 1.0e3) * 0.1;
            case PowerDensityUnits.Decawattsperliter:
                return (value * 1.0e3) * 10;
            case PowerDensityUnits.Kilowattsperliter:
                return (value * 1.0e3) * 1000;
            case PowerDensityUnits.Megawattsperliter:
                return (value * 1.0e3) * 1000000;
            case PowerDensityUnits.Gigawattsperliter:
                return (value * 1.0e3) * 1000000000;
            case PowerDensityUnits.Terawattsperliter:
                return (value * 1.0e3) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.PowerDensity = PowerDensity;
//# sourceMappingURL=powerdensity.g.js.map