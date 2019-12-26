"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitRateUnits;
(function (BitRateUnits) {
    BitRateUnits[BitRateUnits["BitsPerSecond"] = 0] = "BitsPerSecond";
    BitRateUnits[BitRateUnits["BytesPerSecond"] = 1] = "BytesPerSecond";
    BitRateUnits[BitRateUnits["Kilobitspersecond"] = 2] = "Kilobitspersecond";
    BitRateUnits[BitRateUnits["Megabitspersecond"] = 3] = "Megabitspersecond";
    BitRateUnits[BitRateUnits["Gigabitspersecond"] = 4] = "Gigabitspersecond";
    BitRateUnits[BitRateUnits["Terabitspersecond"] = 5] = "Terabitspersecond";
    BitRateUnits[BitRateUnits["Petabitspersecond"] = 6] = "Petabitspersecond";
    BitRateUnits[BitRateUnits["Exabitspersecond"] = 7] = "Exabitspersecond";
    BitRateUnits[BitRateUnits["Kilobytespersecond"] = 8] = "Kilobytespersecond";
    BitRateUnits[BitRateUnits["Megabytespersecond"] = 9] = "Megabytespersecond";
    BitRateUnits[BitRateUnits["Gigabytespersecond"] = 10] = "Gigabytespersecond";
    BitRateUnits[BitRateUnits["Terabytespersecond"] = 11] = "Terabytespersecond";
    BitRateUnits[BitRateUnits["Petabytespersecond"] = 12] = "Petabytespersecond";
    BitRateUnits[BitRateUnits["Exabytespersecond"] = 13] = "Exabytespersecond";
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
    get Kilobitspersecond() {
        if (this.kilobitspersecondLazy !== null) {
            return this.kilobitspersecondLazy;
        }
        return this.kilobitspersecondLazy = this.convertFromBase(BitRateUnits.Kilobitspersecond);
    }
    get Megabitspersecond() {
        if (this.megabitspersecondLazy !== null) {
            return this.megabitspersecondLazy;
        }
        return this.megabitspersecondLazy = this.convertFromBase(BitRateUnits.Megabitspersecond);
    }
    get Gigabitspersecond() {
        if (this.gigabitspersecondLazy !== null) {
            return this.gigabitspersecondLazy;
        }
        return this.gigabitspersecondLazy = this.convertFromBase(BitRateUnits.Gigabitspersecond);
    }
    get Terabitspersecond() {
        if (this.terabitspersecondLazy !== null) {
            return this.terabitspersecondLazy;
        }
        return this.terabitspersecondLazy = this.convertFromBase(BitRateUnits.Terabitspersecond);
    }
    get Petabitspersecond() {
        if (this.petabitspersecondLazy !== null) {
            return this.petabitspersecondLazy;
        }
        return this.petabitspersecondLazy = this.convertFromBase(BitRateUnits.Petabitspersecond);
    }
    get Exabitspersecond() {
        if (this.exabitspersecondLazy !== null) {
            return this.exabitspersecondLazy;
        }
        return this.exabitspersecondLazy = this.convertFromBase(BitRateUnits.Exabitspersecond);
    }
    get Kilobytespersecond() {
        if (this.kilobytespersecondLazy !== null) {
            return this.kilobytespersecondLazy;
        }
        return this.kilobytespersecondLazy = this.convertFromBase(BitRateUnits.Kilobytespersecond);
    }
    get Megabytespersecond() {
        if (this.megabytespersecondLazy !== null) {
            return this.megabytespersecondLazy;
        }
        return this.megabytespersecondLazy = this.convertFromBase(BitRateUnits.Megabytespersecond);
    }
    get Gigabytespersecond() {
        if (this.gigabytespersecondLazy !== null) {
            return this.gigabytespersecondLazy;
        }
        return this.gigabytespersecondLazy = this.convertFromBase(BitRateUnits.Gigabytespersecond);
    }
    get Terabytespersecond() {
        if (this.terabytespersecondLazy !== null) {
            return this.terabytespersecondLazy;
        }
        return this.terabytespersecondLazy = this.convertFromBase(BitRateUnits.Terabytespersecond);
    }
    get Petabytespersecond() {
        if (this.petabytespersecondLazy !== null) {
            return this.petabytespersecondLazy;
        }
        return this.petabytespersecondLazy = this.convertFromBase(BitRateUnits.Petabytespersecond);
    }
    get Exabytespersecond() {
        if (this.exabytespersecondLazy !== null) {
            return this.exabytespersecondLazy;
        }
        return this.exabytespersecondLazy = this.convertFromBase(BitRateUnits.Exabytespersecond);
    }
    static FromBitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }
    static FromBytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }
    static FromKilobitspersecond(value) {
        return new BitRate(value, BitRateUnits.Kilobitspersecond);
    }
    static FromMegabitspersecond(value) {
        return new BitRate(value, BitRateUnits.Megabitspersecond);
    }
    static FromGigabitspersecond(value) {
        return new BitRate(value, BitRateUnits.Gigabitspersecond);
    }
    static FromTerabitspersecond(value) {
        return new BitRate(value, BitRateUnits.Terabitspersecond);
    }
    static FromPetabitspersecond(value) {
        return new BitRate(value, BitRateUnits.Petabitspersecond);
    }
    static FromExabitspersecond(value) {
        return new BitRate(value, BitRateUnits.Exabitspersecond);
    }
    static FromKilobytespersecond(value) {
        return new BitRate(value, BitRateUnits.Kilobytespersecond);
    }
    static FromMegabytespersecond(value) {
        return new BitRate(value, BitRateUnits.Megabytespersecond);
    }
    static FromGigabytespersecond(value) {
        return new BitRate(value, BitRateUnits.Gigabytespersecond);
    }
    static FromTerabytespersecond(value) {
        return new BitRate(value, BitRateUnits.Terabytespersecond);
    }
    static FromPetabytespersecond(value) {
        return new BitRate(value, BitRateUnits.Petabytespersecond);
    }
    static FromExabytespersecond(value) {
        return new BitRate(value, BitRateUnits.Exabytespersecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value / 8;
            case BitRateUnits.Kilobitspersecond:
                return (this.value) / 1000;
            case BitRateUnits.Megabitspersecond:
                return (this.value) / 1000000;
            case BitRateUnits.Gigabitspersecond:
                return (this.value) / 1000000000;
            case BitRateUnits.Terabitspersecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.Petabitspersecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.Exabitspersecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.Kilobytespersecond:
                return (this.value / 8) / 1000;
            case BitRateUnits.Megabytespersecond:
                return (this.value / 8) / 1000000;
            case BitRateUnits.Gigabytespersecond:
                return (this.value / 8) / 1000000000;
            case BitRateUnits.Terabytespersecond:
                return (this.value / 8) / 1000000000000;
            case BitRateUnits.Petabytespersecond:
                return (this.value / 8) / 1000000000000000;
            case BitRateUnits.Exabytespersecond:
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
            case BitRateUnits.Kilobitspersecond:
                return (value) * 1000;
            case BitRateUnits.Megabitspersecond:
                return (value) * 1000000;
            case BitRateUnits.Gigabitspersecond:
                return (value) * 1000000000;
            case BitRateUnits.Terabitspersecond:
                return (value) * 1000000000000;
            case BitRateUnits.Petabitspersecond:
                return (value) * 1000000000000000;
            case BitRateUnits.Exabitspersecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.Kilobytespersecond:
                return (value * 8) * 1000;
            case BitRateUnits.Megabytespersecond:
                return (value * 8) * 1000000;
            case BitRateUnits.Gigabytespersecond:
                return (value * 8) * 1000000000;
            case BitRateUnits.Terabytespersecond:
                return (value * 8) * 1000000000000;
            case BitRateUnits.Petabytespersecond:
                return (value * 8) * 1000000000000000;
            case BitRateUnits.Exabytespersecond:
                return (value * 8) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.BitRate = BitRate;
//# sourceMappingURL=bitrate.g.js.map