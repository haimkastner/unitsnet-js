"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuminosityUnits;
(function (LuminosityUnits) {
    LuminosityUnits[LuminosityUnits["Watts"] = 0] = "Watts";
    LuminosityUnits[LuminosityUnits["SolarLuminosities"] = 1] = "SolarLuminosities";
    LuminosityUnits[LuminosityUnits["Picowatts"] = 2] = "Picowatts";
    LuminosityUnits[LuminosityUnits["Nanowatts"] = 3] = "Nanowatts";
    LuminosityUnits[LuminosityUnits["Microwatts"] = 4] = "Microwatts";
    LuminosityUnits[LuminosityUnits["Deciwatts"] = 5] = "Deciwatts";
    LuminosityUnits[LuminosityUnits["Kilowatts"] = 6] = "Kilowatts";
    LuminosityUnits[LuminosityUnits["Megawatts"] = 7] = "Megawatts";
    LuminosityUnits[LuminosityUnits["Gigawatts"] = 8] = "Gigawatts";
    LuminosityUnits[LuminosityUnits["Terawatts"] = 9] = "Terawatts";
    LuminosityUnits[LuminosityUnits["Petawatts"] = 10] = "Petawatts";
})(LuminosityUnits = exports.LuminosityUnits || (exports.LuminosityUnits = {}));
class Luminosity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Watts() {
        return this.convertFromBase(LuminosityUnits.Watts);
    }
    get SolarLuminosities() {
        return this.convertFromBase(LuminosityUnits.SolarLuminosities);
    }
    get Picowatts() {
        return this.convertFromBase(LuminosityUnits.Picowatts);
    }
    get Nanowatts() {
        return this.convertFromBase(LuminosityUnits.Nanowatts);
    }
    get Microwatts() {
        return this.convertFromBase(LuminosityUnits.Microwatts);
    }
    get Deciwatts() {
        return this.convertFromBase(LuminosityUnits.Deciwatts);
    }
    get Kilowatts() {
        return this.convertFromBase(LuminosityUnits.Kilowatts);
    }
    get Megawatts() {
        return this.convertFromBase(LuminosityUnits.Megawatts);
    }
    get Gigawatts() {
        return this.convertFromBase(LuminosityUnits.Gigawatts);
    }
    get Terawatts() {
        return this.convertFromBase(LuminosityUnits.Terawatts);
    }
    get Petawatts() {
        return this.convertFromBase(LuminosityUnits.Petawatts);
    }
    static FromWatts(value) {
        return new Luminosity(value, LuminosityUnits.Watts);
    }
    static FromSolarLuminosities(value) {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }
    static FromPicowatts(value) {
        return new Luminosity(value, LuminosityUnits.Picowatts);
    }
    static FromNanowatts(value) {
        return new Luminosity(value, LuminosityUnits.Nanowatts);
    }
    static FromMicrowatts(value) {
        return new Luminosity(value, LuminosityUnits.Microwatts);
    }
    static FromDeciwatts(value) {
        return new Luminosity(value, LuminosityUnits.Deciwatts);
    }
    static FromKilowatts(value) {
        return new Luminosity(value, LuminosityUnits.Kilowatts);
    }
    static FromMegawatts(value) {
        return new Luminosity(value, LuminosityUnits.Megawatts);
    }
    static FromGigawatts(value) {
        return new Luminosity(value, LuminosityUnits.Gigawatts);
    }
    static FromTerawatts(value) {
        return new Luminosity(value, LuminosityUnits.Terawatts);
    }
    static FromPetawatts(value) {
        return new Luminosity(value, LuminosityUnits.Petawatts);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value * 3.846e26;
            case LuminosityUnits.Picowatts:
                return (this.value) * 1e-12;
            case LuminosityUnits.Nanowatts:
                return (this.value) * 1e-9;
            case LuminosityUnits.Microwatts:
                return (this.value) * 0.000001;
            case LuminosityUnits.Deciwatts:
                return (this.value) * 0.1;
            case LuminosityUnits.Kilowatts:
                return (this.value) * 1000;
            case LuminosityUnits.Megawatts:
                return (this.value) * 1000000;
            case LuminosityUnits.Gigawatts:
                return (this.value) * 1000000000;
            case LuminosityUnits.Terawatts:
                return (this.value) * 1000000000000;
            case LuminosityUnits.Petawatts:
                return (this.value) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value / 3.846e26;
            case LuminosityUnits.Picowatts:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatts:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatts:
                return (this.value) / 0.000001;
            case LuminosityUnits.Deciwatts:
                return (this.value) / 0.1;
            case LuminosityUnits.Kilowatts:
                return (this.value) / 1000;
            case LuminosityUnits.Megawatts:
                return (this.value) / 1000000;
            case LuminosityUnits.Gigawatts:
                return (this.value) / 1000000000;
            case LuminosityUnits.Terawatts:
                return (this.value) / 1000000000000;
            case LuminosityUnits.Petawatts:
                return (this.value) / 1000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Luminosity = Luminosity;
//# sourceMappingURL=luminosity.g.js.map