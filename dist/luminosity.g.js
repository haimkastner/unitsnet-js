"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LuminosityUnits;
(function (LuminosityUnits) {
    LuminosityUnits[LuminosityUnits["Watts"] = 0] = "Watts";
    LuminosityUnits[LuminosityUnits["SolarLuminosities"] = 1] = "SolarLuminosities";
    LuminosityUnits[LuminosityUnits["Femtowatt"] = 2] = "Femtowatt";
    LuminosityUnits[LuminosityUnits["Picowatt"] = 3] = "Picowatt";
    LuminosityUnits[LuminosityUnits["Nanowatt"] = 4] = "Nanowatt";
    LuminosityUnits[LuminosityUnits["Microwatt"] = 5] = "Microwatt";
    LuminosityUnits[LuminosityUnits["Deciwatt"] = 6] = "Deciwatt";
    LuminosityUnits[LuminosityUnits["Decawatt"] = 7] = "Decawatt";
    LuminosityUnits[LuminosityUnits["Kilowatt"] = 8] = "Kilowatt";
    LuminosityUnits[LuminosityUnits["Megawatt"] = 9] = "Megawatt";
    LuminosityUnits[LuminosityUnits["Gigawatt"] = 10] = "Gigawatt";
    LuminosityUnits[LuminosityUnits["Terawatt"] = 11] = "Terawatt";
    LuminosityUnits[LuminosityUnits["Petawatt"] = 12] = "Petawatt";
})(LuminosityUnits = exports.LuminosityUnits || (exports.LuminosityUnits = {}));
class Luminosity {
    constructor(value, fromUnit) {
        this.wattsLazy = null;
        this.solarluminositiesLazy = null;
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
    get Femtowatt() {
        if (this.femtowattLazy !== null) {
            return this.femtowattLazy;
        }
        return this.femtowattLazy = this.convertFromBase(LuminosityUnits.Femtowatt);
    }
    get Picowatt() {
        if (this.picowattLazy !== null) {
            return this.picowattLazy;
        }
        return this.picowattLazy = this.convertFromBase(LuminosityUnits.Picowatt);
    }
    get Nanowatt() {
        if (this.nanowattLazy !== null) {
            return this.nanowattLazy;
        }
        return this.nanowattLazy = this.convertFromBase(LuminosityUnits.Nanowatt);
    }
    get Microwatt() {
        if (this.microwattLazy !== null) {
            return this.microwattLazy;
        }
        return this.microwattLazy = this.convertFromBase(LuminosityUnits.Microwatt);
    }
    get Deciwatt() {
        if (this.deciwattLazy !== null) {
            return this.deciwattLazy;
        }
        return this.deciwattLazy = this.convertFromBase(LuminosityUnits.Deciwatt);
    }
    get Decawatt() {
        if (this.decawattLazy !== null) {
            return this.decawattLazy;
        }
        return this.decawattLazy = this.convertFromBase(LuminosityUnits.Decawatt);
    }
    get Kilowatt() {
        if (this.kilowattLazy !== null) {
            return this.kilowattLazy;
        }
        return this.kilowattLazy = this.convertFromBase(LuminosityUnits.Kilowatt);
    }
    get Megawatt() {
        if (this.megawattLazy !== null) {
            return this.megawattLazy;
        }
        return this.megawattLazy = this.convertFromBase(LuminosityUnits.Megawatt);
    }
    get Gigawatt() {
        if (this.gigawattLazy !== null) {
            return this.gigawattLazy;
        }
        return this.gigawattLazy = this.convertFromBase(LuminosityUnits.Gigawatt);
    }
    get Terawatt() {
        if (this.terawattLazy !== null) {
            return this.terawattLazy;
        }
        return this.terawattLazy = this.convertFromBase(LuminosityUnits.Terawatt);
    }
    get Petawatt() {
        if (this.petawattLazy !== null) {
            return this.petawattLazy;
        }
        return this.petawattLazy = this.convertFromBase(LuminosityUnits.Petawatt);
    }
    static FromWatts(value) {
        return new Luminosity(value, LuminosityUnits.Watts);
    }
    static FromSolarLuminosities(value) {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }
    static FromFemtowatt(value) {
        return new Luminosity(value, LuminosityUnits.Femtowatt);
    }
    static FromPicowatt(value) {
        return new Luminosity(value, LuminosityUnits.Picowatt);
    }
    static FromNanowatt(value) {
        return new Luminosity(value, LuminosityUnits.Nanowatt);
    }
    static FromMicrowatt(value) {
        return new Luminosity(value, LuminosityUnits.Microwatt);
    }
    static FromDeciwatt(value) {
        return new Luminosity(value, LuminosityUnits.Deciwatt);
    }
    static FromDecawatt(value) {
        return new Luminosity(value, LuminosityUnits.Decawatt);
    }
    static FromKilowatt(value) {
        return new Luminosity(value, LuminosityUnits.Kilowatt);
    }
    static FromMegawatt(value) {
        return new Luminosity(value, LuminosityUnits.Megawatt);
    }
    static FromGigawatt(value) {
        return new Luminosity(value, LuminosityUnits.Gigawatt);
    }
    static FromTerawatt(value) {
        return new Luminosity(value, LuminosityUnits.Terawatt);
    }
    static FromPetawatt(value) {
        return new Luminosity(value, LuminosityUnits.Petawatt);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value / 3.846e26;
            case LuminosityUnits.Femtowatt:
                return (this.value) / 1e-15;
            case LuminosityUnits.Picowatt:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatt:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatt:
                return (this.value) / 0.000001;
            case LuminosityUnits.Deciwatt:
                return (this.value) / 0.1;
            case LuminosityUnits.Decawatt:
                return (this.value) / 10;
            case LuminosityUnits.Kilowatt:
                return (this.value) / 1000;
            case LuminosityUnits.Megawatt:
                return (this.value) / 1000000;
            case LuminosityUnits.Gigawatt:
                return (this.value) / 1000000000;
            case LuminosityUnits.Terawatt:
                return (this.value) / 1000000000000;
            case LuminosityUnits.Petawatt:
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
            case LuminosityUnits.Femtowatt:
                return (value) * 1e-15;
            case LuminosityUnits.Picowatt:
                return (value) * 1e-12;
            case LuminosityUnits.Nanowatt:
                return (value) * 1e-9;
            case LuminosityUnits.Microwatt:
                return (value) * 0.000001;
            case LuminosityUnits.Deciwatt:
                return (value) * 0.1;
            case LuminosityUnits.Decawatt:
                return (value) * 10;
            case LuminosityUnits.Kilowatt:
                return (value) * 1000;
            case LuminosityUnits.Megawatt:
                return (value) * 1000000;
            case LuminosityUnits.Gigawatt:
                return (value) * 1000000000;
            case LuminosityUnits.Terawatt:
                return (value) * 1000000000000;
            case LuminosityUnits.Petawatt:
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
            case LuminosityUnits.Femtowatt:
                return this.Femtowatt + ` W`;
            case LuminosityUnits.Picowatt:
                return this.Picowatt + ` W`;
            case LuminosityUnits.Nanowatt:
                return this.Nanowatt + ` W`;
            case LuminosityUnits.Microwatt:
                return this.Microwatt + ` W`;
            case LuminosityUnits.Deciwatt:
                return this.Deciwatt + ` W`;
            case LuminosityUnits.Decawatt:
                return this.Decawatt + ` W`;
            case LuminosityUnits.Kilowatt:
                return this.Kilowatt + ` W`;
            case LuminosityUnits.Megawatt:
                return this.Megawatt + ` W`;
            case LuminosityUnits.Gigawatt:
                return this.Gigawatt + ` W`;
            case LuminosityUnits.Terawatt:
                return this.Terawatt + ` W`;
            case LuminosityUnits.Petawatt:
                return this.Petawatt + ` W`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Luminosity = Luminosity;
//# sourceMappingURL=luminosity.g.js.map