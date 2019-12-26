"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PowerDensityUnits;
(function (PowerDensityUnits) {
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicMeter"] = 0] = "WattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicInch"] = 1] = "WattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicFoot"] = 2] = "WattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["WattsPerLiter"] = 3] = "WattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["PicowattsPerCubicMeter"] = 4] = "PicowattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["NanowattsPerCubicMeter"] = 5] = "NanowattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["MicrowattsPerCubicMeter"] = 6] = "MicrowattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["DeciwattsPerCubicMeter"] = 7] = "DeciwattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["DecawattsPerCubicMeter"] = 8] = "DecawattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["KilowattsPerCubicMeter"] = 9] = "KilowattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["MegawattsPerCubicMeter"] = 10] = "MegawattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["GigawattsPerCubicMeter"] = 11] = "GigawattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["TerawattsPerCubicMeter"] = 12] = "TerawattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["PicowattsPerCubicInch"] = 13] = "PicowattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["NanowattsPerCubicInch"] = 14] = "NanowattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["MicrowattsPerCubicInch"] = 15] = "MicrowattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["DeciwattsPerCubicInch"] = 16] = "DeciwattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["DecawattsPerCubicInch"] = 17] = "DecawattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["KilowattsPerCubicInch"] = 18] = "KilowattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["MegawattsPerCubicInch"] = 19] = "MegawattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["GigawattsPerCubicInch"] = 20] = "GigawattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["TerawattsPerCubicInch"] = 21] = "TerawattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["PicowattsPerCubicFoot"] = 22] = "PicowattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["NanowattsPerCubicFoot"] = 23] = "NanowattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["MicrowattsPerCubicFoot"] = 24] = "MicrowattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["DeciwattsPerCubicFoot"] = 25] = "DeciwattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["DecawattsPerCubicFoot"] = 26] = "DecawattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["KilowattsPerCubicFoot"] = 27] = "KilowattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["MegawattsPerCubicFoot"] = 28] = "MegawattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["GigawattsPerCubicFoot"] = 29] = "GigawattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["TerawattsPerCubicFoot"] = 30] = "TerawattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["PicowattsPerLiter"] = 31] = "PicowattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["NanowattsPerLiter"] = 32] = "NanowattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["MicrowattsPerLiter"] = 33] = "MicrowattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["DeciwattsPerLiter"] = 34] = "DeciwattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["DecawattsPerLiter"] = 35] = "DecawattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["KilowattsPerLiter"] = 36] = "KilowattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["MegawattsPerLiter"] = 37] = "MegawattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["GigawattsPerLiter"] = 38] = "GigawattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["TerawattsPerLiter"] = 39] = "TerawattsPerLiter";
})(PowerDensityUnits = exports.PowerDensityUnits || (exports.PowerDensityUnits = {}));
class PowerDensity {
    constructor(value, fromUnit) {
        this.wattspercubicmeterLazy = null;
        this.wattspercubicinchLazy = null;
        this.wattspercubicfootLazy = null;
        this.wattsperliterLazy = null;
        this.picowattspercubicmeterLazy = null;
        this.nanowattspercubicmeterLazy = null;
        this.microwattspercubicmeterLazy = null;
        this.deciwattspercubicmeterLazy = null;
        this.decawattspercubicmeterLazy = null;
        this.kilowattspercubicmeterLazy = null;
        this.megawattspercubicmeterLazy = null;
        this.gigawattspercubicmeterLazy = null;
        this.terawattspercubicmeterLazy = null;
        this.picowattspercubicinchLazy = null;
        this.nanowattspercubicinchLazy = null;
        this.microwattspercubicinchLazy = null;
        this.deciwattspercubicinchLazy = null;
        this.decawattspercubicinchLazy = null;
        this.kilowattspercubicinchLazy = null;
        this.megawattspercubicinchLazy = null;
        this.gigawattspercubicinchLazy = null;
        this.terawattspercubicinchLazy = null;
        this.picowattspercubicfootLazy = null;
        this.nanowattspercubicfootLazy = null;
        this.microwattspercubicfootLazy = null;
        this.deciwattspercubicfootLazy = null;
        this.decawattspercubicfootLazy = null;
        this.kilowattspercubicfootLazy = null;
        this.megawattspercubicfootLazy = null;
        this.gigawattspercubicfootLazy = null;
        this.terawattspercubicfootLazy = null;
        this.picowattsperliterLazy = null;
        this.nanowattsperliterLazy = null;
        this.microwattsperliterLazy = null;
        this.deciwattsperliterLazy = null;
        this.decawattsperliterLazy = null;
        this.kilowattsperliterLazy = null;
        this.megawattsperliterLazy = null;
        this.gigawattsperliterLazy = null;
        this.terawattsperliterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerCubicMeter() {
        if (this.wattspercubicmeterLazy !== null) {
            return this.wattspercubicmeterLazy;
        }
        return this.wattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicMeter);
    }
    get WattsPerCubicInch() {
        if (this.wattspercubicinchLazy !== null) {
            return this.wattspercubicinchLazy;
        }
        return this.wattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicInch);
    }
    get WattsPerCubicFoot() {
        if (this.wattspercubicfootLazy !== null) {
            return this.wattspercubicfootLazy;
        }
        return this.wattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.WattsPerCubicFoot);
    }
    get WattsPerLiter() {
        if (this.wattsperliterLazy !== null) {
            return this.wattsperliterLazy;
        }
        return this.wattsperliterLazy = this.convertFromBase(PowerDensityUnits.WattsPerLiter);
    }
    get PicowattsPerCubicMeter() {
        if (this.picowattspercubicmeterLazy !== null) {
            return this.picowattspercubicmeterLazy;
        }
        return this.picowattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerCubicMeter);
    }
    get NanowattsPerCubicMeter() {
        if (this.nanowattspercubicmeterLazy !== null) {
            return this.nanowattspercubicmeterLazy;
        }
        return this.nanowattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerCubicMeter);
    }
    get MicrowattsPerCubicMeter() {
        if (this.microwattspercubicmeterLazy !== null) {
            return this.microwattspercubicmeterLazy;
        }
        return this.microwattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerCubicMeter);
    }
    get DeciwattsPerCubicMeter() {
        if (this.deciwattspercubicmeterLazy !== null) {
            return this.deciwattspercubicmeterLazy;
        }
        return this.deciwattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerCubicMeter);
    }
    get DecawattsPerCubicMeter() {
        if (this.decawattspercubicmeterLazy !== null) {
            return this.decawattspercubicmeterLazy;
        }
        return this.decawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerCubicMeter);
    }
    get KilowattsPerCubicMeter() {
        if (this.kilowattspercubicmeterLazy !== null) {
            return this.kilowattspercubicmeterLazy;
        }
        return this.kilowattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerCubicMeter);
    }
    get MegawattsPerCubicMeter() {
        if (this.megawattspercubicmeterLazy !== null) {
            return this.megawattspercubicmeterLazy;
        }
        return this.megawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerCubicMeter);
    }
    get GigawattsPerCubicMeter() {
        if (this.gigawattspercubicmeterLazy !== null) {
            return this.gigawattspercubicmeterLazy;
        }
        return this.gigawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerCubicMeter);
    }
    get TerawattsPerCubicMeter() {
        if (this.terawattspercubicmeterLazy !== null) {
            return this.terawattspercubicmeterLazy;
        }
        return this.terawattspercubicmeterLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerCubicMeter);
    }
    get PicowattsPerCubicInch() {
        if (this.picowattspercubicinchLazy !== null) {
            return this.picowattspercubicinchLazy;
        }
        return this.picowattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerCubicInch);
    }
    get NanowattsPerCubicInch() {
        if (this.nanowattspercubicinchLazy !== null) {
            return this.nanowattspercubicinchLazy;
        }
        return this.nanowattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerCubicInch);
    }
    get MicrowattsPerCubicInch() {
        if (this.microwattspercubicinchLazy !== null) {
            return this.microwattspercubicinchLazy;
        }
        return this.microwattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerCubicInch);
    }
    get DeciwattsPerCubicInch() {
        if (this.deciwattspercubicinchLazy !== null) {
            return this.deciwattspercubicinchLazy;
        }
        return this.deciwattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerCubicInch);
    }
    get DecawattsPerCubicInch() {
        if (this.decawattspercubicinchLazy !== null) {
            return this.decawattspercubicinchLazy;
        }
        return this.decawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerCubicInch);
    }
    get KilowattsPerCubicInch() {
        if (this.kilowattspercubicinchLazy !== null) {
            return this.kilowattspercubicinchLazy;
        }
        return this.kilowattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerCubicInch);
    }
    get MegawattsPerCubicInch() {
        if (this.megawattspercubicinchLazy !== null) {
            return this.megawattspercubicinchLazy;
        }
        return this.megawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerCubicInch);
    }
    get GigawattsPerCubicInch() {
        if (this.gigawattspercubicinchLazy !== null) {
            return this.gigawattspercubicinchLazy;
        }
        return this.gigawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerCubicInch);
    }
    get TerawattsPerCubicInch() {
        if (this.terawattspercubicinchLazy !== null) {
            return this.terawattspercubicinchLazy;
        }
        return this.terawattspercubicinchLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerCubicInch);
    }
    get PicowattsPerCubicFoot() {
        if (this.picowattspercubicfootLazy !== null) {
            return this.picowattspercubicfootLazy;
        }
        return this.picowattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerCubicFoot);
    }
    get NanowattsPerCubicFoot() {
        if (this.nanowattspercubicfootLazy !== null) {
            return this.nanowattspercubicfootLazy;
        }
        return this.nanowattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerCubicFoot);
    }
    get MicrowattsPerCubicFoot() {
        if (this.microwattspercubicfootLazy !== null) {
            return this.microwattspercubicfootLazy;
        }
        return this.microwattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerCubicFoot);
    }
    get DeciwattsPerCubicFoot() {
        if (this.deciwattspercubicfootLazy !== null) {
            return this.deciwattspercubicfootLazy;
        }
        return this.deciwattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerCubicFoot);
    }
    get DecawattsPerCubicFoot() {
        if (this.decawattspercubicfootLazy !== null) {
            return this.decawattspercubicfootLazy;
        }
        return this.decawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerCubicFoot);
    }
    get KilowattsPerCubicFoot() {
        if (this.kilowattspercubicfootLazy !== null) {
            return this.kilowattspercubicfootLazy;
        }
        return this.kilowattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerCubicFoot);
    }
    get MegawattsPerCubicFoot() {
        if (this.megawattspercubicfootLazy !== null) {
            return this.megawattspercubicfootLazy;
        }
        return this.megawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerCubicFoot);
    }
    get GigawattsPerCubicFoot() {
        if (this.gigawattspercubicfootLazy !== null) {
            return this.gigawattspercubicfootLazy;
        }
        return this.gigawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerCubicFoot);
    }
    get TerawattsPerCubicFoot() {
        if (this.terawattspercubicfootLazy !== null) {
            return this.terawattspercubicfootLazy;
        }
        return this.terawattspercubicfootLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerCubicFoot);
    }
    get PicowattsPerLiter() {
        if (this.picowattsperliterLazy !== null) {
            return this.picowattsperliterLazy;
        }
        return this.picowattsperliterLazy = this.convertFromBase(PowerDensityUnits.PicowattsPerLiter);
    }
    get NanowattsPerLiter() {
        if (this.nanowattsperliterLazy !== null) {
            return this.nanowattsperliterLazy;
        }
        return this.nanowattsperliterLazy = this.convertFromBase(PowerDensityUnits.NanowattsPerLiter);
    }
    get MicrowattsPerLiter() {
        if (this.microwattsperliterLazy !== null) {
            return this.microwattsperliterLazy;
        }
        return this.microwattsperliterLazy = this.convertFromBase(PowerDensityUnits.MicrowattsPerLiter);
    }
    get DeciwattsPerLiter() {
        if (this.deciwattsperliterLazy !== null) {
            return this.deciwattsperliterLazy;
        }
        return this.deciwattsperliterLazy = this.convertFromBase(PowerDensityUnits.DeciwattsPerLiter);
    }
    get DecawattsPerLiter() {
        if (this.decawattsperliterLazy !== null) {
            return this.decawattsperliterLazy;
        }
        return this.decawattsperliterLazy = this.convertFromBase(PowerDensityUnits.DecawattsPerLiter);
    }
    get KilowattsPerLiter() {
        if (this.kilowattsperliterLazy !== null) {
            return this.kilowattsperliterLazy;
        }
        return this.kilowattsperliterLazy = this.convertFromBase(PowerDensityUnits.KilowattsPerLiter);
    }
    get MegawattsPerLiter() {
        if (this.megawattsperliterLazy !== null) {
            return this.megawattsperliterLazy;
        }
        return this.megawattsperliterLazy = this.convertFromBase(PowerDensityUnits.MegawattsPerLiter);
    }
    get GigawattsPerLiter() {
        if (this.gigawattsperliterLazy !== null) {
            return this.gigawattsperliterLazy;
        }
        return this.gigawattsperliterLazy = this.convertFromBase(PowerDensityUnits.GigawattsPerLiter);
    }
    get TerawattsPerLiter() {
        if (this.terawattsperliterLazy !== null) {
            return this.terawattsperliterLazy;
        }
        return this.terawattsperliterLazy = this.convertFromBase(PowerDensityUnits.TerawattsPerLiter);
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
    static FromPicowattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerCubicMeter);
    }
    static FromNanowattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerCubicMeter);
    }
    static FromMicrowattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerCubicMeter);
    }
    static FromDeciwattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerCubicMeter);
    }
    static FromDecawattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerCubicMeter);
    }
    static FromKilowattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerCubicMeter);
    }
    static FromMegawattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerCubicMeter);
    }
    static FromGigawattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerCubicMeter);
    }
    static FromTerawattsPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerCubicMeter);
    }
    static FromPicowattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerCubicInch);
    }
    static FromNanowattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerCubicInch);
    }
    static FromMicrowattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerCubicInch);
    }
    static FromDeciwattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerCubicInch);
    }
    static FromDecawattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerCubicInch);
    }
    static FromKilowattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerCubicInch);
    }
    static FromMegawattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerCubicInch);
    }
    static FromGigawattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerCubicInch);
    }
    static FromTerawattsPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerCubicInch);
    }
    static FromPicowattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerCubicFoot);
    }
    static FromNanowattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerCubicFoot);
    }
    static FromMicrowattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerCubicFoot);
    }
    static FromDeciwattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerCubicFoot);
    }
    static FromDecawattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerCubicFoot);
    }
    static FromKilowattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerCubicFoot);
    }
    static FromMegawattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerCubicFoot);
    }
    static FromGigawattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerCubicFoot);
    }
    static FromTerawattsPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerCubicFoot);
    }
    static FromPicowattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattsPerLiter);
    }
    static FromNanowattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattsPerLiter);
    }
    static FromMicrowattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattsPerLiter);
    }
    static FromDeciwattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattsPerLiter);
    }
    static FromDecawattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattsPerLiter);
    }
    static FromKilowattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattsPerLiter);
    }
    static FromMegawattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattsPerLiter);
    }
    static FromGigawattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattsPerLiter);
    }
    static FromTerawattsPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattsPerLiter);
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
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return (this.value) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return (this.value) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return (this.value) / 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return (this.value) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return (this.value) / 10;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return (this.value) / 1000;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return (this.value) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return (this.value) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return (this.value) / 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 10;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1e-12;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 0.1;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 10;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000000;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000000000;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000000000000;
            case PowerDensityUnits.PicowattsPerLiter:
                return (this.value / 1.0e3) / 1e-12;
            case PowerDensityUnits.NanowattsPerLiter:
                return (this.value / 1.0e3) / 1e-9;
            case PowerDensityUnits.MicrowattsPerLiter:
                return (this.value / 1.0e3) / 0.000001;
            case PowerDensityUnits.DeciwattsPerLiter:
                return (this.value / 1.0e3) / 0.1;
            case PowerDensityUnits.DecawattsPerLiter:
                return (this.value / 1.0e3) / 10;
            case PowerDensityUnits.KilowattsPerLiter:
                return (this.value / 1.0e3) / 1000;
            case PowerDensityUnits.MegawattsPerLiter:
                return (this.value / 1.0e3) / 1000000;
            case PowerDensityUnits.GigawattsPerLiter:
                return (this.value / 1.0e3) / 1000000000;
            case PowerDensityUnits.TerawattsPerLiter:
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
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return (value) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return (value) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return (value) * 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return (value) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return (value) * 10;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return (value) * 1000;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return (value) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return (value) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return (value) * 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return (value * 6.102374409473228e4) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return (value * 6.102374409473228e4) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return (value * 6.102374409473228e4) * 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return (value * 6.102374409473228e4) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return (value * 6.102374409473228e4) * 10;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return (value * 6.102374409473228e4) * 1000;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return (value * 6.102374409473228e4) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return (value * 6.102374409473228e4) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return (value * 6.102374409473228e4) * 1000000000000;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 1e-12;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 1e-9;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 0.000001;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 0.1;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 10;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000000;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000000000;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000000000000;
            case PowerDensityUnits.PicowattsPerLiter:
                return (value * 1.0e3) * 1e-12;
            case PowerDensityUnits.NanowattsPerLiter:
                return (value * 1.0e3) * 1e-9;
            case PowerDensityUnits.MicrowattsPerLiter:
                return (value * 1.0e3) * 0.000001;
            case PowerDensityUnits.DeciwattsPerLiter:
                return (value * 1.0e3) * 0.1;
            case PowerDensityUnits.DecawattsPerLiter:
                return (value * 1.0e3) * 10;
            case PowerDensityUnits.KilowattsPerLiter:
                return (value * 1.0e3) * 1000;
            case PowerDensityUnits.MegawattsPerLiter:
                return (value * 1.0e3) * 1000000;
            case PowerDensityUnits.GigawattsPerLiter:
                return (value * 1.0e3) * 1000000000;
            case PowerDensityUnits.TerawattsPerLiter:
                return (value * 1.0e3) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = PowerDensityUnits.WattsPerCubicMeter) {
        switch (toUnit) {
            case PowerDensityUnits.WattsPerCubicMeter:
                return this.WattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.WattsPerCubicInch:
                return this.WattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.WattsPerCubicFoot:
                return this.WattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.WattsPerLiter:
                return this.WattsPerLiter + ` W/l`;
            case PowerDensityUnits.PicowattsPerCubicMeter:
                return this.PicowattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.NanowattsPerCubicMeter:
                return this.NanowattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.MicrowattsPerCubicMeter:
                return this.MicrowattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.DeciwattsPerCubicMeter:
                return this.DeciwattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.DecawattsPerCubicMeter:
                return this.DecawattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.KilowattsPerCubicMeter:
                return this.KilowattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.MegawattsPerCubicMeter:
                return this.MegawattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.GigawattsPerCubicMeter:
                return this.GigawattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.TerawattsPerCubicMeter:
                return this.TerawattsPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.PicowattsPerCubicInch:
                return this.PicowattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.NanowattsPerCubicInch:
                return this.NanowattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.MicrowattsPerCubicInch:
                return this.MicrowattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.DeciwattsPerCubicInch:
                return this.DeciwattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.DecawattsPerCubicInch:
                return this.DecawattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.KilowattsPerCubicInch:
                return this.KilowattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.MegawattsPerCubicInch:
                return this.MegawattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.GigawattsPerCubicInch:
                return this.GigawattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.TerawattsPerCubicInch:
                return this.TerawattsPerCubicInch + ` W/in³`;
            case PowerDensityUnits.PicowattsPerCubicFoot:
                return this.PicowattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.NanowattsPerCubicFoot:
                return this.NanowattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.MicrowattsPerCubicFoot:
                return this.MicrowattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.DeciwattsPerCubicFoot:
                return this.DeciwattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.DecawattsPerCubicFoot:
                return this.DecawattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.KilowattsPerCubicFoot:
                return this.KilowattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.MegawattsPerCubicFoot:
                return this.MegawattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.GigawattsPerCubicFoot:
                return this.GigawattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.TerawattsPerCubicFoot:
                return this.TerawattsPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.PicowattsPerLiter:
                return this.PicowattsPerLiter + ` W/l`;
            case PowerDensityUnits.NanowattsPerLiter:
                return this.NanowattsPerLiter + ` W/l`;
            case PowerDensityUnits.MicrowattsPerLiter:
                return this.MicrowattsPerLiter + ` W/l`;
            case PowerDensityUnits.DeciwattsPerLiter:
                return this.DeciwattsPerLiter + ` W/l`;
            case PowerDensityUnits.DecawattsPerLiter:
                return this.DecawattsPerLiter + ` W/l`;
            case PowerDensityUnits.KilowattsPerLiter:
                return this.KilowattsPerLiter + ` W/l`;
            case PowerDensityUnits.MegawattsPerLiter:
                return this.MegawattsPerLiter + ` W/l`;
            case PowerDensityUnits.GigawattsPerLiter:
                return this.GigawattsPerLiter + ` W/l`;
            case PowerDensityUnits.TerawattsPerLiter:
                return this.TerawattsPerLiter + ` W/l`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.PowerDensity = PowerDensity;
//# sourceMappingURL=powerdensity.g.js.map