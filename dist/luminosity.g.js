"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuminosityUnits;
(function (LuminosityUnits) {
    LuminosityUnits[LuminosityUnits["Watts"] = 0] = "Watts";
    LuminosityUnits[LuminosityUnits["SolarLuminosities"] = 1] = "SolarLuminosities";
    LuminosityUnits[LuminosityUnits["Femtowatts"] = 2] = "Femtowatts";
    LuminosityUnits[LuminosityUnits["Picowatts"] = 3] = "Picowatts";
    LuminosityUnits[LuminosityUnits["Nanowatts"] = 4] = "Nanowatts";
    LuminosityUnits[LuminosityUnits["Microwatts"] = 5] = "Microwatts";
    LuminosityUnits[LuminosityUnits["Deciwatts"] = 6] = "Deciwatts";
    LuminosityUnits[LuminosityUnits["Decawatts"] = 7] = "Decawatts";
    LuminosityUnits[LuminosityUnits["Kilowatts"] = 8] = "Kilowatts";
    LuminosityUnits[LuminosityUnits["Megawatts"] = 9] = "Megawatts";
    LuminosityUnits[LuminosityUnits["Gigawatts"] = 10] = "Gigawatts";
    LuminosityUnits[LuminosityUnits["Terawatts"] = 11] = "Terawatts";
    LuminosityUnits[LuminosityUnits["Petawatts"] = 12] = "Petawatts";
})(LuminosityUnits = exports.LuminosityUnits || (exports.LuminosityUnits = {}));
class Luminosity {
    constructor(value, fromUnit) {
        this.wattsLazy = null;
        this.solarluminositiesLazy = null;
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
        this.value = this.convertToBase(value, fromUnit);
    }
    get Watts() {
        if (this.wattsLazy !== null) {
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(LuminosityUnits.Watts);
    }
    get SolarLuminosities() {
        if (this.solarluminositiesLazy !== null) {
            return this.solarluminositiesLazy;
        }
        return this.solarluminositiesLazy = this.convertFromBase(LuminosityUnits.SolarLuminosities);
    }
    get Femtowatts() {
        if (this.femtowattsLazy !== null) {
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(LuminosityUnits.Femtowatts);
    }
    get Picowatts() {
        if (this.picowattsLazy !== null) {
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(LuminosityUnits.Picowatts);
    }
    get Nanowatts() {
        if (this.nanowattsLazy !== null) {
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(LuminosityUnits.Nanowatts);
    }
    get Microwatts() {
        if (this.microwattsLazy !== null) {
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(LuminosityUnits.Microwatts);
    }
    get Deciwatts() {
        if (this.deciwattsLazy !== null) {
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(LuminosityUnits.Deciwatts);
    }
    get Decawatts() {
        if (this.decawattsLazy !== null) {
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(LuminosityUnits.Decawatts);
    }
    get Kilowatts() {
        if (this.kilowattsLazy !== null) {
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(LuminosityUnits.Kilowatts);
    }
    get Megawatts() {
        if (this.megawattsLazy !== null) {
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(LuminosityUnits.Megawatts);
    }
    get Gigawatts() {
        if (this.gigawattsLazy !== null) {
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(LuminosityUnits.Gigawatts);
    }
    get Terawatts() {
        if (this.terawattsLazy !== null) {
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(LuminosityUnits.Terawatts);
    }
    get Petawatts() {
        if (this.petawattsLazy !== null) {
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(LuminosityUnits.Petawatts);
    }
    static FromWatts(value) {
        return new Luminosity(value, LuminosityUnits.Watts);
    }
    static FromSolarLuminosities(value) {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }
    static FromFemtowatts(value) {
        return new Luminosity(value, LuminosityUnits.Femtowatts);
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
    static FromDecawatts(value) {
        return new Luminosity(value, LuminosityUnits.Decawatts);
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
                return this.value / 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (this.value) / 1e-15;
            case LuminosityUnits.Picowatts:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatts:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatts:
                return (this.value) / 0.000001;
            case LuminosityUnits.Deciwatts:
                return (this.value) / 0.1;
            case LuminosityUnits.Decawatts:
                return (this.value) / 10;
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
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminosityUnits.Watts:
                return value;
            case LuminosityUnits.SolarLuminosities:
                return value * 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (value) * 1e-15;
            case LuminosityUnits.Picowatts:
                return (value) * 1e-12;
            case LuminosityUnits.Nanowatts:
                return (value) * 1e-9;
            case LuminosityUnits.Microwatts:
                return (value) * 0.000001;
            case LuminosityUnits.Deciwatts:
                return (value) * 0.1;
            case LuminosityUnits.Decawatts:
                return (value) * 10;
            case LuminosityUnits.Kilowatts:
                return (value) * 1000;
            case LuminosityUnits.Megawatts:
                return (value) * 1000000;
            case LuminosityUnits.Gigawatts:
                return (value) * 1000000000;
            case LuminosityUnits.Terawatts:
                return (value) * 1000000000000;
            case LuminosityUnits.Petawatts:
                return (value) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = LuminosityUnits.Watts) {
        switch (toUnit) {
            case LuminosityUnits.Watts:
                return this.Watts + ` W`;
            case LuminosityUnits.SolarLuminosities:
                return this.SolarLuminosities + ` L⊙`;
            case LuminosityUnits.Femtowatts:
                return this.Femtowatts + ` W`;
            case LuminosityUnits.Picowatts:
                return this.Picowatts + ` W`;
            case LuminosityUnits.Nanowatts:
                return this.Nanowatts + ` W`;
            case LuminosityUnits.Microwatts:
                return this.Microwatts + ` W`;
            case LuminosityUnits.Deciwatts:
                return this.Deciwatts + ` W`;
            case LuminosityUnits.Decawatts:
                return this.Decawatts + ` W`;
            case LuminosityUnits.Kilowatts:
                return this.Kilowatts + ` W`;
            case LuminosityUnits.Megawatts:
                return this.Megawatts + ` W`;
            case LuminosityUnits.Gigawatts:
                return this.Gigawatts + ` W`;
            case LuminosityUnits.Terawatts:
                return this.Terawatts + ` W`;
            case LuminosityUnits.Petawatts:
                return this.Petawatts + ` W`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Luminosity = Luminosity;
//# sourceMappingURL=luminosity.g.js.map