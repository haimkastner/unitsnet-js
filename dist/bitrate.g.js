"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitRateUnits;
(function (BitRateUnits) {
    BitRateUnits[BitRateUnits["BitsPerSecond"] = 0] = "BitsPerSecond";
    BitRateUnits[BitRateUnits["BytesPerSecond"] = 1] = "BytesPerSecond";
    BitRateUnits[BitRateUnits["KilobitsPerSecond"] = 2] = "KilobitsPerSecond";
    BitRateUnits[BitRateUnits["MegabitsPerSecond"] = 3] = "MegabitsPerSecond";
    BitRateUnits[BitRateUnits["GigabitsPerSecond"] = 4] = "GigabitsPerSecond";
    BitRateUnits[BitRateUnits["TerabitsPerSecond"] = 5] = "TerabitsPerSecond";
    BitRateUnits[BitRateUnits["PetabitsPerSecond"] = 6] = "PetabitsPerSecond";
    BitRateUnits[BitRateUnits["ExabitsPerSecond"] = 7] = "ExabitsPerSecond";
    BitRateUnits[BitRateUnits["KilobytesPerSecond"] = 8] = "KilobytesPerSecond";
    BitRateUnits[BitRateUnits["MegabytesPerSecond"] = 9] = "MegabytesPerSecond";
    BitRateUnits[BitRateUnits["GigabytesPerSecond"] = 10] = "GigabytesPerSecond";
    BitRateUnits[BitRateUnits["TerabytesPerSecond"] = 11] = "TerabytesPerSecond";
    BitRateUnits[BitRateUnits["PetabytesPerSecond"] = 12] = "PetabytesPerSecond";
    BitRateUnits[BitRateUnits["ExabytesPerSecond"] = 13] = "ExabytesPerSecond";
})(BitRateUnits = exports.BitRateUnits || (exports.BitRateUnits = {}));
class BitRate {
    constructor(value, fromUnit) {
        this.bitspersecondLazy = null;
        this.bytespersecondLazy = null;
        this.kilobitspersecondLazy = null;
        this.megabitspersecondLazy = null;
        this.gigabitspersecondLazy = null;
        this.terabitspersecondLazy = null;
        this.petabitspersecondLazy = null;
        this.exabitspersecondLazy = null;
        this.kilobytespersecondLazy = null;
        this.megabytespersecondLazy = null;
        this.gigabytespersecondLazy = null;
        this.terabytespersecondLazy = null;
        this.petabytespersecondLazy = null;
        this.exabytespersecondLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get BitsPerSecond() {
        if (this.bitspersecondLazy !== null) {
            return this.bitspersecondLazy;
        }
        return this.bitspersecondLazy = this.convertFromBase(BitRateUnits.BitsPerSecond);
    }
    get BytesPerSecond() {
        if (this.bytespersecondLazy !== null) {
            return this.bytespersecondLazy;
        }
        return this.bytespersecondLazy = this.convertFromBase(BitRateUnits.BytesPerSecond);
    }
    get KilobitsPerSecond() {
        if (this.kilobitspersecondLazy !== null) {
            return this.kilobitspersecondLazy;
        }
        return this.kilobitspersecondLazy = this.convertFromBase(BitRateUnits.KilobitsPerSecond);
    }
    get MegabitsPerSecond() {
        if (this.megabitspersecondLazy !== null) {
            return this.megabitspersecondLazy;
        }
        return this.megabitspersecondLazy = this.convertFromBase(BitRateUnits.MegabitsPerSecond);
    }
    get GigabitsPerSecond() {
        if (this.gigabitspersecondLazy !== null) {
            return this.gigabitspersecondLazy;
        }
        return this.gigabitspersecondLazy = this.convertFromBase(BitRateUnits.GigabitsPerSecond);
    }
    get TerabitsPerSecond() {
        if (this.terabitspersecondLazy !== null) {
            return this.terabitspersecondLazy;
        }
        return this.terabitspersecondLazy = this.convertFromBase(BitRateUnits.TerabitsPerSecond);
    }
    get PetabitsPerSecond() {
        if (this.petabitspersecondLazy !== null) {
            return this.petabitspersecondLazy;
        }
        return this.petabitspersecondLazy = this.convertFromBase(BitRateUnits.PetabitsPerSecond);
    }
    get ExabitsPerSecond() {
        if (this.exabitspersecondLazy !== null) {
            return this.exabitspersecondLazy;
        }
        return this.exabitspersecondLazy = this.convertFromBase(BitRateUnits.ExabitsPerSecond);
    }
    get KilobytesPerSecond() {
        if (this.kilobytespersecondLazy !== null) {
            return this.kilobytespersecondLazy;
        }
        return this.kilobytespersecondLazy = this.convertFromBase(BitRateUnits.KilobytesPerSecond);
    }
    get MegabytesPerSecond() {
        if (this.megabytespersecondLazy !== null) {
            return this.megabytespersecondLazy;
        }
        return this.megabytespersecondLazy = this.convertFromBase(BitRateUnits.MegabytesPerSecond);
    }
    get GigabytesPerSecond() {
        if (this.gigabytespersecondLazy !== null) {
            return this.gigabytespersecondLazy;
        }
        return this.gigabytespersecondLazy = this.convertFromBase(BitRateUnits.GigabytesPerSecond);
    }
    get TerabytesPerSecond() {
        if (this.terabytespersecondLazy !== null) {
            return this.terabytespersecondLazy;
        }
        return this.terabytespersecondLazy = this.convertFromBase(BitRateUnits.TerabytesPerSecond);
    }
    get PetabytesPerSecond() {
        if (this.petabytespersecondLazy !== null) {
            return this.petabytespersecondLazy;
        }
        return this.petabytespersecondLazy = this.convertFromBase(BitRateUnits.PetabytesPerSecond);
    }
    get ExabytesPerSecond() {
        if (this.exabytespersecondLazy !== null) {
            return this.exabytespersecondLazy;
        }
        return this.exabytespersecondLazy = this.convertFromBase(BitRateUnits.ExabytesPerSecond);
    }
    static FromBitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }
    static FromBytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }
    static FromKilobitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.KilobitsPerSecond);
    }
    static FromMegabitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.MegabitsPerSecond);
    }
    static FromGigabitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.GigabitsPerSecond);
    }
    static FromTerabitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.TerabitsPerSecond);
    }
    static FromPetabitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.PetabitsPerSecond);
    }
    static FromExabitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.ExabitsPerSecond);
    }
    static FromKilobytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.KilobytesPerSecond);
    }
    static FromMegabytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.MegabytesPerSecond);
    }
    static FromGigabytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.GigabytesPerSecond);
    }
    static FromTerabytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.TerabytesPerSecond);
    }
    static FromPetabytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.PetabytesPerSecond);
    }
    static FromExabytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.ExabytesPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value / 8;
            case BitRateUnits.KilobitsPerSecond:
                return (this.value) / 1000;
            case BitRateUnits.MegabitsPerSecond:
                return (this.value) / 1000000;
            case BitRateUnits.GigabitsPerSecond:
                return (this.value) / 1000000000;
            case BitRateUnits.TerabitsPerSecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.PetabitsPerSecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.ExabitsPerSecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.KilobytesPerSecond:
                return (this.value / 8) / 1000;
            case BitRateUnits.MegabytesPerSecond:
                return (this.value / 8) / 1000000;
            case BitRateUnits.GigabytesPerSecond:
                return (this.value / 8) / 1000000000;
            case BitRateUnits.TerabytesPerSecond:
                return (this.value / 8) / 1000000000000;
            case BitRateUnits.PetabytesPerSecond:
                return (this.value / 8) / 1000000000000000;
            case BitRateUnits.ExabytesPerSecond:
                return (this.value / 8) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case BitRateUnits.BitsPerSecond:
                return value;
            case BitRateUnits.BytesPerSecond:
                return value * 8;
            case BitRateUnits.KilobitsPerSecond:
                return (value) * 1000;
            case BitRateUnits.MegabitsPerSecond:
                return (value) * 1000000;
            case BitRateUnits.GigabitsPerSecond:
                return (value) * 1000000000;
            case BitRateUnits.TerabitsPerSecond:
                return (value) * 1000000000000;
            case BitRateUnits.PetabitsPerSecond:
                return (value) * 1000000000000000;
            case BitRateUnits.ExabitsPerSecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.KilobytesPerSecond:
                return (value * 8) * 1000;
            case BitRateUnits.MegabytesPerSecond:
                return (value * 8) * 1000000;
            case BitRateUnits.GigabytesPerSecond:
                return (value * 8) * 1000000000;
            case BitRateUnits.TerabytesPerSecond:
                return (value * 8) * 1000000000000;
            case BitRateUnits.PetabytesPerSecond:
                return (value * 8) * 1000000000000000;
            case BitRateUnits.ExabytesPerSecond:
                return (value * 8) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = BitRateUnits.BitsPerSecond) {
        switch (toUnit) {
            case BitRateUnits.BitsPerSecond:
                return this.BitsPerSecond + ` bit/s`;
            case BitRateUnits.BytesPerSecond:
                return this.BytesPerSecond + ` B/s`;
            case BitRateUnits.KilobitsPerSecond:
                return this.KilobitsPerSecond + ` bit/s`;
            case BitRateUnits.MegabitsPerSecond:
                return this.MegabitsPerSecond + ` bit/s`;
            case BitRateUnits.GigabitsPerSecond:
                return this.GigabitsPerSecond + ` bit/s`;
            case BitRateUnits.TerabitsPerSecond:
                return this.TerabitsPerSecond + ` bit/s`;
            case BitRateUnits.PetabitsPerSecond:
                return this.PetabitsPerSecond + ` bit/s`;
            case BitRateUnits.ExabitsPerSecond:
                return this.ExabitsPerSecond + ` bit/s`;
            case BitRateUnits.KilobytesPerSecond:
                return this.KilobytesPerSecond + ` B/s`;
            case BitRateUnits.MegabytesPerSecond:
                return this.MegabytesPerSecond + ` B/s`;
            case BitRateUnits.GigabytesPerSecond:
                return this.GigabytesPerSecond + ` B/s`;
            case BitRateUnits.TerabytesPerSecond:
                return this.TerabytesPerSecond + ` B/s`;
            case BitRateUnits.PetabytesPerSecond:
                return this.PetabytesPerSecond + ` B/s`;
            case BitRateUnits.ExabytesPerSecond:
                return this.ExabytesPerSecond + ` B/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.BitRate = BitRate;
//# sourceMappingURL=bitrate.g.js.map