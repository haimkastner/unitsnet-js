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
        this.value = this.convertToBase(value, fromUnit);
    }
    get BitsPerSecond() {
        return this.convertFromBase(BitRateUnits.BitsPerSecond);
    }
    get BytesPerSecond() {
        return this.convertFromBase(BitRateUnits.BytesPerSecond);
    }
    get Kilobitspersecond() {
        return this.convertFromBase(BitRateUnits.Kilobitspersecond);
    }
    get Megabitspersecond() {
        return this.convertFromBase(BitRateUnits.Megabitspersecond);
    }
    get Gigabitspersecond() {
        return this.convertFromBase(BitRateUnits.Gigabitspersecond);
    }
    get Terabitspersecond() {
        return this.convertFromBase(BitRateUnits.Terabitspersecond);
    }
    get Petabitspersecond() {
        return this.convertFromBase(BitRateUnits.Petabitspersecond);
    }
    get Exabitspersecond() {
        return this.convertFromBase(BitRateUnits.Exabitspersecond);
    }
    get Kilobytespersecond() {
        return this.convertFromBase(BitRateUnits.Kilobytespersecond);
    }
    get Megabytespersecond() {
        return this.convertFromBase(BitRateUnits.Megabytespersecond);
    }
    get Gigabytespersecond() {
        return this.convertFromBase(BitRateUnits.Gigabytespersecond);
    }
    get Terabytespersecond() {
        return this.convertFromBase(BitRateUnits.Terabytespersecond);
    }
    get Petabytespersecond() {
        return this.convertFromBase(BitRateUnits.Petabytespersecond);
    }
    get Exabytespersecond() {
        return this.convertFromBase(BitRateUnits.Exabytespersecond);
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
                return (this.value) * 1000;
            case BitRateUnits.Megabitspersecond:
                return (this.value) * 1000000;
            case BitRateUnits.Gigabitspersecond:
                return (this.value) * 1000000000;
            case BitRateUnits.Terabitspersecond:
                return (this.value) * 1000000000000;
            case BitRateUnits.Petabitspersecond:
                return (this.value) * 1000000000000000;
            case BitRateUnits.Exabitspersecond:
                return (this.value) * 1000000000000000000;
            case BitRateUnits.Kilobytespersecond:
                return (this.value * 8) * 1000;
            case BitRateUnits.Megabytespersecond:
                return (this.value * 8) * 1000000;
            case BitRateUnits.Gigabytespersecond:
                return (this.value * 8) * 1000000000;
            case BitRateUnits.Terabytespersecond:
                return (this.value * 8) * 1000000000000;
            case BitRateUnits.Petabytespersecond:
                return (this.value * 8) * 1000000000000000;
            case BitRateUnits.Exabytespersecond:
                return (this.value * 8) * 1000000000000000000;
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
                return (value) / 1000;
            case BitRateUnits.Megabitspersecond:
                return (value) / 1000000;
            case BitRateUnits.Gigabitspersecond:
                return (value) / 1000000000;
            case BitRateUnits.Terabitspersecond:
                return (value) / 1000000000000;
            case BitRateUnits.Petabitspersecond:
                return (value) / 1000000000000000;
            case BitRateUnits.Exabitspersecond:
                return (value) / 1000000000000000000;
            case BitRateUnits.Kilobytespersecond:
                return (value / 8) / 1000;
            case BitRateUnits.Megabytespersecond:
                return (value / 8) / 1000000;
            case BitRateUnits.Gigabytespersecond:
                return (value / 8) / 1000000000;
            case BitRateUnits.Terabytespersecond:
                return (value / 8) / 1000000000000;
            case BitRateUnits.Petabytespersecond:
                return (value / 8) / 1000000000000000;
            case BitRateUnits.Exabytespersecond:
                return (value / 8) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.BitRate = BitRate;
//# sourceMappingURL=bitrate.g.js.map