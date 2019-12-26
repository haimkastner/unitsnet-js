"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BitRateUnits;
(function (BitRateUnits) {
    BitRateUnits[BitRateUnits["BitsPerSecond"] = 0] = "BitsPerSecond";
    BitRateUnits[BitRateUnits["BytesPerSecond"] = 1] = "BytesPerSecond";
    BitRateUnits[BitRateUnits["KilobitPerSecond"] = 2] = "KilobitPerSecond";
    BitRateUnits[BitRateUnits["MegabitPerSecond"] = 3] = "MegabitPerSecond";
    BitRateUnits[BitRateUnits["GigabitPerSecond"] = 4] = "GigabitPerSecond";
    BitRateUnits[BitRateUnits["TerabitPerSecond"] = 5] = "TerabitPerSecond";
    BitRateUnits[BitRateUnits["PetabitPerSecond"] = 6] = "PetabitPerSecond";
    BitRateUnits[BitRateUnits["ExabitPerSecond"] = 7] = "ExabitPerSecond";
    BitRateUnits[BitRateUnits["KilobytePerSecond"] = 8] = "KilobytePerSecond";
    BitRateUnits[BitRateUnits["MegabytePerSecond"] = 9] = "MegabytePerSecond";
    BitRateUnits[BitRateUnits["GigabytePerSecond"] = 10] = "GigabytePerSecond";
    BitRateUnits[BitRateUnits["TerabytePerSecond"] = 11] = "TerabytePerSecond";
    BitRateUnits[BitRateUnits["PetabytePerSecond"] = 12] = "PetabytePerSecond";
    BitRateUnits[BitRateUnits["ExabytePerSecond"] = 13] = "ExabytePerSecond";
})(BitRateUnits = exports.BitRateUnits || (exports.BitRateUnits = {}));
class BitRate {
    constructor(value, fromUnit) {
        this.bitspersecondLazy = null;
        this.bytespersecondLazy = null;
        this.kilobitpersecondLazy = null;
        this.megabitpersecondLazy = null;
        this.gigabitpersecondLazy = null;
        this.terabitpersecondLazy = null;
        this.petabitpersecondLazy = null;
        this.exabitpersecondLazy = null;
        this.kilobytepersecondLazy = null;
        this.megabytepersecondLazy = null;
        this.gigabytepersecondLazy = null;
        this.terabytepersecondLazy = null;
        this.petabytepersecondLazy = null;
        this.exabytepersecondLazy = null;
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
    get KilobitPerSecond() {
        if (this.kilobitpersecondLazy !== null) {
            return this.kilobitpersecondLazy;
        }
        return this.kilobitpersecondLazy = this.convertFromBase(BitRateUnits.KilobitPerSecond);
    }
    get MegabitPerSecond() {
        if (this.megabitpersecondLazy !== null) {
            return this.megabitpersecondLazy;
        }
        return this.megabitpersecondLazy = this.convertFromBase(BitRateUnits.MegabitPerSecond);
    }
    get GigabitPerSecond() {
        if (this.gigabitpersecondLazy !== null) {
            return this.gigabitpersecondLazy;
        }
        return this.gigabitpersecondLazy = this.convertFromBase(BitRateUnits.GigabitPerSecond);
    }
    get TerabitPerSecond() {
        if (this.terabitpersecondLazy !== null) {
            return this.terabitpersecondLazy;
        }
        return this.terabitpersecondLazy = this.convertFromBase(BitRateUnits.TerabitPerSecond);
    }
    get PetabitPerSecond() {
        if (this.petabitpersecondLazy !== null) {
            return this.petabitpersecondLazy;
        }
        return this.petabitpersecondLazy = this.convertFromBase(BitRateUnits.PetabitPerSecond);
    }
    get ExabitPerSecond() {
        if (this.exabitpersecondLazy !== null) {
            return this.exabitpersecondLazy;
        }
        return this.exabitpersecondLazy = this.convertFromBase(BitRateUnits.ExabitPerSecond);
    }
    get KilobytePerSecond() {
        if (this.kilobytepersecondLazy !== null) {
            return this.kilobytepersecondLazy;
        }
        return this.kilobytepersecondLazy = this.convertFromBase(BitRateUnits.KilobytePerSecond);
    }
    get MegabytePerSecond() {
        if (this.megabytepersecondLazy !== null) {
            return this.megabytepersecondLazy;
        }
        return this.megabytepersecondLazy = this.convertFromBase(BitRateUnits.MegabytePerSecond);
    }
    get GigabytePerSecond() {
        if (this.gigabytepersecondLazy !== null) {
            return this.gigabytepersecondLazy;
        }
        return this.gigabytepersecondLazy = this.convertFromBase(BitRateUnits.GigabytePerSecond);
    }
    get TerabytePerSecond() {
        if (this.terabytepersecondLazy !== null) {
            return this.terabytepersecondLazy;
        }
        return this.terabytepersecondLazy = this.convertFromBase(BitRateUnits.TerabytePerSecond);
    }
    get PetabytePerSecond() {
        if (this.petabytepersecondLazy !== null) {
            return this.petabytepersecondLazy;
        }
        return this.petabytepersecondLazy = this.convertFromBase(BitRateUnits.PetabytePerSecond);
    }
    get ExabytePerSecond() {
        if (this.exabytepersecondLazy !== null) {
            return this.exabytepersecondLazy;
        }
        return this.exabytepersecondLazy = this.convertFromBase(BitRateUnits.ExabytePerSecond);
    }
    static FromBitsPerSecond(value) {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }
    static FromBytesPerSecond(value) {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }
    static FromKilobitPerSecond(value) {
        return new BitRate(value, BitRateUnits.KilobitPerSecond);
    }
    static FromMegabitPerSecond(value) {
        return new BitRate(value, BitRateUnits.MegabitPerSecond);
    }
    static FromGigabitPerSecond(value) {
        return new BitRate(value, BitRateUnits.GigabitPerSecond);
    }
    static FromTerabitPerSecond(value) {
        return new BitRate(value, BitRateUnits.TerabitPerSecond);
    }
    static FromPetabitPerSecond(value) {
        return new BitRate(value, BitRateUnits.PetabitPerSecond);
    }
    static FromExabitPerSecond(value) {
        return new BitRate(value, BitRateUnits.ExabitPerSecond);
    }
    static FromKilobytePerSecond(value) {
        return new BitRate(value, BitRateUnits.KilobytePerSecond);
    }
    static FromMegabytePerSecond(value) {
        return new BitRate(value, BitRateUnits.MegabytePerSecond);
    }
    static FromGigabytePerSecond(value) {
        return new BitRate(value, BitRateUnits.GigabytePerSecond);
    }
    static FromTerabytePerSecond(value) {
        return new BitRate(value, BitRateUnits.TerabytePerSecond);
    }
    static FromPetabytePerSecond(value) {
        return new BitRate(value, BitRateUnits.PetabytePerSecond);
    }
    static FromExabytePerSecond(value) {
        return new BitRate(value, BitRateUnits.ExabytePerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value / 8;
            case BitRateUnits.KilobitPerSecond:
                return (this.value) / 1000;
            case BitRateUnits.MegabitPerSecond:
                return (this.value) / 1000000;
            case BitRateUnits.GigabitPerSecond:
                return (this.value) / 1000000000;
            case BitRateUnits.TerabitPerSecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.PetabitPerSecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.ExabitPerSecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.KilobytePerSecond:
                return (this.value / 8) / 1000;
            case BitRateUnits.MegabytePerSecond:
                return (this.value / 8) / 1000000;
            case BitRateUnits.GigabytePerSecond:
                return (this.value / 8) / 1000000000;
            case BitRateUnits.TerabytePerSecond:
                return (this.value / 8) / 1000000000000;
            case BitRateUnits.PetabytePerSecond:
                return (this.value / 8) / 1000000000000000;
            case BitRateUnits.ExabytePerSecond:
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
            case BitRateUnits.KilobitPerSecond:
                return (value) * 1000;
            case BitRateUnits.MegabitPerSecond:
                return (value) * 1000000;
            case BitRateUnits.GigabitPerSecond:
                return (value) * 1000000000;
            case BitRateUnits.TerabitPerSecond:
                return (value) * 1000000000000;
            case BitRateUnits.PetabitPerSecond:
                return (value) * 1000000000000000;
            case BitRateUnits.ExabitPerSecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.KilobytePerSecond:
                return (value * 8) * 1000;
            case BitRateUnits.MegabytePerSecond:
                return (value * 8) * 1000000;
            case BitRateUnits.GigabytePerSecond:
                return (value * 8) * 1000000000;
            case BitRateUnits.TerabytePerSecond:
                return (value * 8) * 1000000000000;
            case BitRateUnits.PetabytePerSecond:
                return (value * 8) * 1000000000000000;
            case BitRateUnits.ExabytePerSecond:
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
            case BitRateUnits.KilobitPerSecond:
                return this.KilobitPerSecond + ` bit/s`;
            case BitRateUnits.MegabitPerSecond:
                return this.MegabitPerSecond + ` bit/s`;
            case BitRateUnits.GigabitPerSecond:
                return this.GigabitPerSecond + ` bit/s`;
            case BitRateUnits.TerabitPerSecond:
                return this.TerabitPerSecond + ` bit/s`;
            case BitRateUnits.PetabitPerSecond:
                return this.PetabitPerSecond + ` bit/s`;
            case BitRateUnits.ExabitPerSecond:
                return this.ExabitPerSecond + ` bit/s`;
            case BitRateUnits.KilobytePerSecond:
                return this.KilobytePerSecond + ` B/s`;
            case BitRateUnits.MegabytePerSecond:
                return this.MegabytePerSecond + ` B/s`;
            case BitRateUnits.GigabytePerSecond:
                return this.GigabytePerSecond + ` B/s`;
            case BitRateUnits.TerabytePerSecond:
                return this.TerabytePerSecond + ` B/s`;
            case BitRateUnits.PetabytePerSecond:
                return this.PetabytePerSecond + ` B/s`;
            case BitRateUnits.ExabytePerSecond:
                return this.ExabytePerSecond + ` B/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.BitRate = BitRate;
//# sourceMappingURL=bitrate.g.js.map