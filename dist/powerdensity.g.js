"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PowerDensityUnits;
(function (PowerDensityUnits) {
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicMeter"] = 0] = "WattsPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicInch"] = 1] = "WattsPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["WattsPerCubicFoot"] = 2] = "WattsPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["WattsPerLiter"] = 3] = "WattsPerLiter";
    PowerDensityUnits[PowerDensityUnits["PicowattPerCubicMeter"] = 4] = "PicowattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["NanowattPerCubicMeter"] = 5] = "NanowattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["MicrowattPerCubicMeter"] = 6] = "MicrowattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["DeciwattPerCubicMeter"] = 7] = "DeciwattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["DecawattPerCubicMeter"] = 8] = "DecawattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["KilowattPerCubicMeter"] = 9] = "KilowattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["MegawattPerCubicMeter"] = 10] = "MegawattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["GigawattPerCubicMeter"] = 11] = "GigawattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["TerawattPerCubicMeter"] = 12] = "TerawattPerCubicMeter";
    PowerDensityUnits[PowerDensityUnits["PicowattPerCubicInch"] = 13] = "PicowattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["NanowattPerCubicInch"] = 14] = "NanowattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["MicrowattPerCubicInch"] = 15] = "MicrowattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["DeciwattPerCubicInch"] = 16] = "DeciwattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["DecawattPerCubicInch"] = 17] = "DecawattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["KilowattPerCubicInch"] = 18] = "KilowattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["MegawattPerCubicInch"] = 19] = "MegawattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["GigawattPerCubicInch"] = 20] = "GigawattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["TerawattPerCubicInch"] = 21] = "TerawattPerCubicInch";
    PowerDensityUnits[PowerDensityUnits["PicowattPerCubicFoot"] = 22] = "PicowattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["NanowattPerCubicFoot"] = 23] = "NanowattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["MicrowattPerCubicFoot"] = 24] = "MicrowattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["DeciwattPerCubicFoot"] = 25] = "DeciwattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["DecawattPerCubicFoot"] = 26] = "DecawattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["KilowattPerCubicFoot"] = 27] = "KilowattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["MegawattPerCubicFoot"] = 28] = "MegawattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["GigawattPerCubicFoot"] = 29] = "GigawattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["TerawattPerCubicFoot"] = 30] = "TerawattPerCubicFoot";
    PowerDensityUnits[PowerDensityUnits["PicowattPerLiter"] = 31] = "PicowattPerLiter";
    PowerDensityUnits[PowerDensityUnits["NanowattPerLiter"] = 32] = "NanowattPerLiter";
    PowerDensityUnits[PowerDensityUnits["MicrowattPerLiter"] = 33] = "MicrowattPerLiter";
    PowerDensityUnits[PowerDensityUnits["DeciwattPerLiter"] = 34] = "DeciwattPerLiter";
    PowerDensityUnits[PowerDensityUnits["DecawattPerLiter"] = 35] = "DecawattPerLiter";
    PowerDensityUnits[PowerDensityUnits["KilowattPerLiter"] = 36] = "KilowattPerLiter";
    PowerDensityUnits[PowerDensityUnits["MegawattPerLiter"] = 37] = "MegawattPerLiter";
    PowerDensityUnits[PowerDensityUnits["GigawattPerLiter"] = 38] = "GigawattPerLiter";
    PowerDensityUnits[PowerDensityUnits["TerawattPerLiter"] = 39] = "TerawattPerLiter";
})(PowerDensityUnits = exports.PowerDensityUnits || (exports.PowerDensityUnits = {}));
class PowerDensity {
    constructor(value, fromUnit) {
        this.wattspercubicmeterLazy = null;
        this.wattspercubicinchLazy = null;
        this.wattspercubicfootLazy = null;
        this.wattsperliterLazy = null;
        this.picowattpercubicmeterLazy = null;
        this.nanowattpercubicmeterLazy = null;
        this.microwattpercubicmeterLazy = null;
        this.deciwattpercubicmeterLazy = null;
        this.decawattpercubicmeterLazy = null;
        this.kilowattpercubicmeterLazy = null;
        this.megawattpercubicmeterLazy = null;
        this.gigawattpercubicmeterLazy = null;
        this.terawattpercubicmeterLazy = null;
        this.picowattpercubicinchLazy = null;
        this.nanowattpercubicinchLazy = null;
        this.microwattpercubicinchLazy = null;
        this.deciwattpercubicinchLazy = null;
        this.decawattpercubicinchLazy = null;
        this.kilowattpercubicinchLazy = null;
        this.megawattpercubicinchLazy = null;
        this.gigawattpercubicinchLazy = null;
        this.terawattpercubicinchLazy = null;
        this.picowattpercubicfootLazy = null;
        this.nanowattpercubicfootLazy = null;
        this.microwattpercubicfootLazy = null;
        this.deciwattpercubicfootLazy = null;
        this.decawattpercubicfootLazy = null;
        this.kilowattpercubicfootLazy = null;
        this.megawattpercubicfootLazy = null;
        this.gigawattpercubicfootLazy = null;
        this.terawattpercubicfootLazy = null;
        this.picowattperliterLazy = null;
        this.nanowattperliterLazy = null;
        this.microwattperliterLazy = null;
        this.deciwattperliterLazy = null;
        this.decawattperliterLazy = null;
        this.kilowattperliterLazy = null;
        this.megawattperliterLazy = null;
        this.gigawattperliterLazy = null;
        this.terawattperliterLazy = null;
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
    get PicowattPerCubicMeter() {
        if (this.picowattpercubicmeterLazy !== null) {
            return this.picowattpercubicmeterLazy;
        }
        return this.picowattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.PicowattPerCubicMeter);
    }
    get NanowattPerCubicMeter() {
        if (this.nanowattpercubicmeterLazy !== null) {
            return this.nanowattpercubicmeterLazy;
        }
        return this.nanowattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.NanowattPerCubicMeter);
    }
    get MicrowattPerCubicMeter() {
        if (this.microwattpercubicmeterLazy !== null) {
            return this.microwattpercubicmeterLazy;
        }
        return this.microwattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerCubicMeter);
    }
    get DeciwattPerCubicMeter() {
        if (this.deciwattpercubicmeterLazy !== null) {
            return this.deciwattpercubicmeterLazy;
        }
        return this.deciwattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerCubicMeter);
    }
    get DecawattPerCubicMeter() {
        if (this.decawattpercubicmeterLazy !== null) {
            return this.decawattpercubicmeterLazy;
        }
        return this.decawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.DecawattPerCubicMeter);
    }
    get KilowattPerCubicMeter() {
        if (this.kilowattpercubicmeterLazy !== null) {
            return this.kilowattpercubicmeterLazy;
        }
        return this.kilowattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.KilowattPerCubicMeter);
    }
    get MegawattPerCubicMeter() {
        if (this.megawattpercubicmeterLazy !== null) {
            return this.megawattpercubicmeterLazy;
        }
        return this.megawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.MegawattPerCubicMeter);
    }
    get GigawattPerCubicMeter() {
        if (this.gigawattpercubicmeterLazy !== null) {
            return this.gigawattpercubicmeterLazy;
        }
        return this.gigawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.GigawattPerCubicMeter);
    }
    get TerawattPerCubicMeter() {
        if (this.terawattpercubicmeterLazy !== null) {
            return this.terawattpercubicmeterLazy;
        }
        return this.terawattpercubicmeterLazy = this.convertFromBase(PowerDensityUnits.TerawattPerCubicMeter);
    }
    get PicowattPerCubicInch() {
        if (this.picowattpercubicinchLazy !== null) {
            return this.picowattpercubicinchLazy;
        }
        return this.picowattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.PicowattPerCubicInch);
    }
    get NanowattPerCubicInch() {
        if (this.nanowattpercubicinchLazy !== null) {
            return this.nanowattpercubicinchLazy;
        }
        return this.nanowattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.NanowattPerCubicInch);
    }
    get MicrowattPerCubicInch() {
        if (this.microwattpercubicinchLazy !== null) {
            return this.microwattpercubicinchLazy;
        }
        return this.microwattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerCubicInch);
    }
    get DeciwattPerCubicInch() {
        if (this.deciwattpercubicinchLazy !== null) {
            return this.deciwattpercubicinchLazy;
        }
        return this.deciwattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerCubicInch);
    }
    get DecawattPerCubicInch() {
        if (this.decawattpercubicinchLazy !== null) {
            return this.decawattpercubicinchLazy;
        }
        return this.decawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.DecawattPerCubicInch);
    }
    get KilowattPerCubicInch() {
        if (this.kilowattpercubicinchLazy !== null) {
            return this.kilowattpercubicinchLazy;
        }
        return this.kilowattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.KilowattPerCubicInch);
    }
    get MegawattPerCubicInch() {
        if (this.megawattpercubicinchLazy !== null) {
            return this.megawattpercubicinchLazy;
        }
        return this.megawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.MegawattPerCubicInch);
    }
    get GigawattPerCubicInch() {
        if (this.gigawattpercubicinchLazy !== null) {
            return this.gigawattpercubicinchLazy;
        }
        return this.gigawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.GigawattPerCubicInch);
    }
    get TerawattPerCubicInch() {
        if (this.terawattpercubicinchLazy !== null) {
            return this.terawattpercubicinchLazy;
        }
        return this.terawattpercubicinchLazy = this.convertFromBase(PowerDensityUnits.TerawattPerCubicInch);
    }
    get PicowattPerCubicFoot() {
        if (this.picowattpercubicfootLazy !== null) {
            return this.picowattpercubicfootLazy;
        }
        return this.picowattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.PicowattPerCubicFoot);
    }
    get NanowattPerCubicFoot() {
        if (this.nanowattpercubicfootLazy !== null) {
            return this.nanowattpercubicfootLazy;
        }
        return this.nanowattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.NanowattPerCubicFoot);
    }
    get MicrowattPerCubicFoot() {
        if (this.microwattpercubicfootLazy !== null) {
            return this.microwattpercubicfootLazy;
        }
        return this.microwattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerCubicFoot);
    }
    get DeciwattPerCubicFoot() {
        if (this.deciwattpercubicfootLazy !== null) {
            return this.deciwattpercubicfootLazy;
        }
        return this.deciwattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerCubicFoot);
    }
    get DecawattPerCubicFoot() {
        if (this.decawattpercubicfootLazy !== null) {
            return this.decawattpercubicfootLazy;
        }
        return this.decawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.DecawattPerCubicFoot);
    }
    get KilowattPerCubicFoot() {
        if (this.kilowattpercubicfootLazy !== null) {
            return this.kilowattpercubicfootLazy;
        }
        return this.kilowattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.KilowattPerCubicFoot);
    }
    get MegawattPerCubicFoot() {
        if (this.megawattpercubicfootLazy !== null) {
            return this.megawattpercubicfootLazy;
        }
        return this.megawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.MegawattPerCubicFoot);
    }
    get GigawattPerCubicFoot() {
        if (this.gigawattpercubicfootLazy !== null) {
            return this.gigawattpercubicfootLazy;
        }
        return this.gigawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.GigawattPerCubicFoot);
    }
    get TerawattPerCubicFoot() {
        if (this.terawattpercubicfootLazy !== null) {
            return this.terawattpercubicfootLazy;
        }
        return this.terawattpercubicfootLazy = this.convertFromBase(PowerDensityUnits.TerawattPerCubicFoot);
    }
    get PicowattPerLiter() {
        if (this.picowattperliterLazy !== null) {
            return this.picowattperliterLazy;
        }
        return this.picowattperliterLazy = this.convertFromBase(PowerDensityUnits.PicowattPerLiter);
    }
    get NanowattPerLiter() {
        if (this.nanowattperliterLazy !== null) {
            return this.nanowattperliterLazy;
        }
        return this.nanowattperliterLazy = this.convertFromBase(PowerDensityUnits.NanowattPerLiter);
    }
    get MicrowattPerLiter() {
        if (this.microwattperliterLazy !== null) {
            return this.microwattperliterLazy;
        }
        return this.microwattperliterLazy = this.convertFromBase(PowerDensityUnits.MicrowattPerLiter);
    }
    get DeciwattPerLiter() {
        if (this.deciwattperliterLazy !== null) {
            return this.deciwattperliterLazy;
        }
        return this.deciwattperliterLazy = this.convertFromBase(PowerDensityUnits.DeciwattPerLiter);
    }
    get DecawattPerLiter() {
        if (this.decawattperliterLazy !== null) {
            return this.decawattperliterLazy;
        }
        return this.decawattperliterLazy = this.convertFromBase(PowerDensityUnits.DecawattPerLiter);
    }
    get KilowattPerLiter() {
        if (this.kilowattperliterLazy !== null) {
            return this.kilowattperliterLazy;
        }
        return this.kilowattperliterLazy = this.convertFromBase(PowerDensityUnits.KilowattPerLiter);
    }
    get MegawattPerLiter() {
        if (this.megawattperliterLazy !== null) {
            return this.megawattperliterLazy;
        }
        return this.megawattperliterLazy = this.convertFromBase(PowerDensityUnits.MegawattPerLiter);
    }
    get GigawattPerLiter() {
        if (this.gigawattperliterLazy !== null) {
            return this.gigawattperliterLazy;
        }
        return this.gigawattperliterLazy = this.convertFromBase(PowerDensityUnits.GigawattPerLiter);
    }
    get TerawattPerLiter() {
        if (this.terawattperliterLazy !== null) {
            return this.terawattperliterLazy;
        }
        return this.terawattperliterLazy = this.convertFromBase(PowerDensityUnits.TerawattPerLiter);
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
    static FromPicowattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerCubicMeter);
    }
    static FromNanowattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerCubicMeter);
    }
    static FromMicrowattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerCubicMeter);
    }
    static FromDeciwattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerCubicMeter);
    }
    static FromDecawattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerCubicMeter);
    }
    static FromKilowattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerCubicMeter);
    }
    static FromMegawattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerCubicMeter);
    }
    static FromGigawattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerCubicMeter);
    }
    static FromTerawattPerCubicMeter(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerCubicMeter);
    }
    static FromPicowattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerCubicInch);
    }
    static FromNanowattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerCubicInch);
    }
    static FromMicrowattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerCubicInch);
    }
    static FromDeciwattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerCubicInch);
    }
    static FromDecawattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerCubicInch);
    }
    static FromKilowattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerCubicInch);
    }
    static FromMegawattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerCubicInch);
    }
    static FromGigawattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerCubicInch);
    }
    static FromTerawattPerCubicInch(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerCubicInch);
    }
    static FromPicowattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerCubicFoot);
    }
    static FromNanowattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerCubicFoot);
    }
    static FromMicrowattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerCubicFoot);
    }
    static FromDeciwattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerCubicFoot);
    }
    static FromDecawattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerCubicFoot);
    }
    static FromKilowattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerCubicFoot);
    }
    static FromMegawattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerCubicFoot);
    }
    static FromGigawattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerCubicFoot);
    }
    static FromTerawattPerCubicFoot(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerCubicFoot);
    }
    static FromPicowattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.PicowattPerLiter);
    }
    static FromNanowattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.NanowattPerLiter);
    }
    static FromMicrowattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.MicrowattPerLiter);
    }
    static FromDeciwattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.DeciwattPerLiter);
    }
    static FromDecawattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.DecawattPerLiter);
    }
    static FromKilowattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.KilowattPerLiter);
    }
    static FromMegawattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.MegawattPerLiter);
    }
    static FromGigawattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.GigawattPerLiter);
    }
    static FromTerawattPerLiter(value) {
        return new PowerDensity(value, PowerDensityUnits.TerawattPerLiter);
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
            case PowerDensityUnits.PicowattPerCubicMeter:
                return (this.value) / 1e-12;
            case PowerDensityUnits.NanowattPerCubicMeter:
                return (this.value) / 1e-9;
            case PowerDensityUnits.MicrowattPerCubicMeter:
                return (this.value) / 0.000001;
            case PowerDensityUnits.DeciwattPerCubicMeter:
                return (this.value) / 0.1;
            case PowerDensityUnits.DecawattPerCubicMeter:
                return (this.value) / 10;
            case PowerDensityUnits.KilowattPerCubicMeter:
                return (this.value) / 1000;
            case PowerDensityUnits.MegawattPerCubicMeter:
                return (this.value) / 1000000;
            case PowerDensityUnits.GigawattPerCubicMeter:
                return (this.value) / 1000000000;
            case PowerDensityUnits.TerawattPerCubicMeter:
                return (this.value) / 1000000000000;
            case PowerDensityUnits.PicowattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1e-12;
            case PowerDensityUnits.NanowattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1e-9;
            case PowerDensityUnits.MicrowattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 0.000001;
            case PowerDensityUnits.DeciwattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 0.1;
            case PowerDensityUnits.DecawattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 10;
            case PowerDensityUnits.KilowattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000;
            case PowerDensityUnits.MegawattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000000;
            case PowerDensityUnits.GigawattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000000000;
            case PowerDensityUnits.TerawattPerCubicInch:
                return (this.value / 6.102374409473228e4) / 1000000000000;
            case PowerDensityUnits.PicowattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1e-12;
            case PowerDensityUnits.NanowattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1e-9;
            case PowerDensityUnits.MicrowattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 0.000001;
            case PowerDensityUnits.DeciwattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 0.1;
            case PowerDensityUnits.DecawattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 10;
            case PowerDensityUnits.KilowattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000;
            case PowerDensityUnits.MegawattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000000;
            case PowerDensityUnits.GigawattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000000000;
            case PowerDensityUnits.TerawattPerCubicFoot:
                return (this.value / 3.531466672148859e1) / 1000000000000;
            case PowerDensityUnits.PicowattPerLiter:
                return (this.value / 1.0e3) / 1e-12;
            case PowerDensityUnits.NanowattPerLiter:
                return (this.value / 1.0e3) / 1e-9;
            case PowerDensityUnits.MicrowattPerLiter:
                return (this.value / 1.0e3) / 0.000001;
            case PowerDensityUnits.DeciwattPerLiter:
                return (this.value / 1.0e3) / 0.1;
            case PowerDensityUnits.DecawattPerLiter:
                return (this.value / 1.0e3) / 10;
            case PowerDensityUnits.KilowattPerLiter:
                return (this.value / 1.0e3) / 1000;
            case PowerDensityUnits.MegawattPerLiter:
                return (this.value / 1.0e3) / 1000000;
            case PowerDensityUnits.GigawattPerLiter:
                return (this.value / 1.0e3) / 1000000000;
            case PowerDensityUnits.TerawattPerLiter:
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
            case PowerDensityUnits.PicowattPerCubicMeter:
                return (value) * 1e-12;
            case PowerDensityUnits.NanowattPerCubicMeter:
                return (value) * 1e-9;
            case PowerDensityUnits.MicrowattPerCubicMeter:
                return (value) * 0.000001;
            case PowerDensityUnits.DeciwattPerCubicMeter:
                return (value) * 0.1;
            case PowerDensityUnits.DecawattPerCubicMeter:
                return (value) * 10;
            case PowerDensityUnits.KilowattPerCubicMeter:
                return (value) * 1000;
            case PowerDensityUnits.MegawattPerCubicMeter:
                return (value) * 1000000;
            case PowerDensityUnits.GigawattPerCubicMeter:
                return (value) * 1000000000;
            case PowerDensityUnits.TerawattPerCubicMeter:
                return (value) * 1000000000000;
            case PowerDensityUnits.PicowattPerCubicInch:
                return (value * 6.102374409473228e4) * 1e-12;
            case PowerDensityUnits.NanowattPerCubicInch:
                return (value * 6.102374409473228e4) * 1e-9;
            case PowerDensityUnits.MicrowattPerCubicInch:
                return (value * 6.102374409473228e4) * 0.000001;
            case PowerDensityUnits.DeciwattPerCubicInch:
                return (value * 6.102374409473228e4) * 0.1;
            case PowerDensityUnits.DecawattPerCubicInch:
                return (value * 6.102374409473228e4) * 10;
            case PowerDensityUnits.KilowattPerCubicInch:
                return (value * 6.102374409473228e4) * 1000;
            case PowerDensityUnits.MegawattPerCubicInch:
                return (value * 6.102374409473228e4) * 1000000;
            case PowerDensityUnits.GigawattPerCubicInch:
                return (value * 6.102374409473228e4) * 1000000000;
            case PowerDensityUnits.TerawattPerCubicInch:
                return (value * 6.102374409473228e4) * 1000000000000;
            case PowerDensityUnits.PicowattPerCubicFoot:
                return (value * 3.531466672148859e1) * 1e-12;
            case PowerDensityUnits.NanowattPerCubicFoot:
                return (value * 3.531466672148859e1) * 1e-9;
            case PowerDensityUnits.MicrowattPerCubicFoot:
                return (value * 3.531466672148859e1) * 0.000001;
            case PowerDensityUnits.DeciwattPerCubicFoot:
                return (value * 3.531466672148859e1) * 0.1;
            case PowerDensityUnits.DecawattPerCubicFoot:
                return (value * 3.531466672148859e1) * 10;
            case PowerDensityUnits.KilowattPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000;
            case PowerDensityUnits.MegawattPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000000;
            case PowerDensityUnits.GigawattPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000000000;
            case PowerDensityUnits.TerawattPerCubicFoot:
                return (value * 3.531466672148859e1) * 1000000000000;
            case PowerDensityUnits.PicowattPerLiter:
                return (value * 1.0e3) * 1e-12;
            case PowerDensityUnits.NanowattPerLiter:
                return (value * 1.0e3) * 1e-9;
            case PowerDensityUnits.MicrowattPerLiter:
                return (value * 1.0e3) * 0.000001;
            case PowerDensityUnits.DeciwattPerLiter:
                return (value * 1.0e3) * 0.1;
            case PowerDensityUnits.DecawattPerLiter:
                return (value * 1.0e3) * 10;
            case PowerDensityUnits.KilowattPerLiter:
                return (value * 1.0e3) * 1000;
            case PowerDensityUnits.MegawattPerLiter:
                return (value * 1.0e3) * 1000000;
            case PowerDensityUnits.GigawattPerLiter:
                return (value * 1.0e3) * 1000000000;
            case PowerDensityUnits.TerawattPerLiter:
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
            case PowerDensityUnits.PicowattPerCubicMeter:
                return this.PicowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.NanowattPerCubicMeter:
                return this.NanowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.MicrowattPerCubicMeter:
                return this.MicrowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.DeciwattPerCubicMeter:
                return this.DeciwattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.DecawattPerCubicMeter:
                return this.DecawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.KilowattPerCubicMeter:
                return this.KilowattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.MegawattPerCubicMeter:
                return this.MegawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.GigawattPerCubicMeter:
                return this.GigawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.TerawattPerCubicMeter:
                return this.TerawattPerCubicMeter + ` W/m³`;
            case PowerDensityUnits.PicowattPerCubicInch:
                return this.PicowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.NanowattPerCubicInch:
                return this.NanowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.MicrowattPerCubicInch:
                return this.MicrowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.DeciwattPerCubicInch:
                return this.DeciwattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.DecawattPerCubicInch:
                return this.DecawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.KilowattPerCubicInch:
                return this.KilowattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.MegawattPerCubicInch:
                return this.MegawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.GigawattPerCubicInch:
                return this.GigawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.TerawattPerCubicInch:
                return this.TerawattPerCubicInch + ` W/in³`;
            case PowerDensityUnits.PicowattPerCubicFoot:
                return this.PicowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.NanowattPerCubicFoot:
                return this.NanowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.MicrowattPerCubicFoot:
                return this.MicrowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.DeciwattPerCubicFoot:
                return this.DeciwattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.DecawattPerCubicFoot:
                return this.DecawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.KilowattPerCubicFoot:
                return this.KilowattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.MegawattPerCubicFoot:
                return this.MegawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.GigawattPerCubicFoot:
                return this.GigawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.TerawattPerCubicFoot:
                return this.TerawattPerCubicFoot + ` W/ft³`;
            case PowerDensityUnits.PicowattPerLiter:
                return this.PicowattPerLiter + ` W/l`;
            case PowerDensityUnits.NanowattPerLiter:
                return this.NanowattPerLiter + ` W/l`;
            case PowerDensityUnits.MicrowattPerLiter:
                return this.MicrowattPerLiter + ` W/l`;
            case PowerDensityUnits.DeciwattPerLiter:
                return this.DeciwattPerLiter + ` W/l`;
            case PowerDensityUnits.DecawattPerLiter:
                return this.DecawattPerLiter + ` W/l`;
            case PowerDensityUnits.KilowattPerLiter:
                return this.KilowattPerLiter + ` W/l`;
            case PowerDensityUnits.MegawattPerLiter:
                return this.MegawattPerLiter + ` W/l`;
            case PowerDensityUnits.GigawattPerLiter:
                return this.GigawattPerLiter + ` W/l`;
            case PowerDensityUnits.TerawattPerLiter:
                return this.TerawattPerLiter + ` W/l`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.PowerDensity = PowerDensity;
//# sourceMappingURL=powerdensity.g.js.map