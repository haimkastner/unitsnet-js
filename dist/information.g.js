"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InformationUnits;
(function (InformationUnits) {
    InformationUnits[InformationUnits["Bytes"] = 0] = "Bytes";
    InformationUnits[InformationUnits["Bits"] = 1] = "Bits";
    InformationUnits[InformationUnits["Kilobytes"] = 2] = "Kilobytes";
    InformationUnits[InformationUnits["Megabytes"] = 3] = "Megabytes";
    InformationUnits[InformationUnits["Gigabytes"] = 4] = "Gigabytes";
    InformationUnits[InformationUnits["Terabytes"] = 5] = "Terabytes";
    InformationUnits[InformationUnits["Petabytes"] = 6] = "Petabytes";
    InformationUnits[InformationUnits["Exabytes"] = 7] = "Exabytes";
    InformationUnits[InformationUnits["Kilobits"] = 8] = "Kilobits";
    InformationUnits[InformationUnits["Megabits"] = 9] = "Megabits";
    InformationUnits[InformationUnits["Gigabits"] = 10] = "Gigabits";
    InformationUnits[InformationUnits["Terabits"] = 11] = "Terabits";
    InformationUnits[InformationUnits["Petabits"] = 12] = "Petabits";
    InformationUnits[InformationUnits["Exabits"] = 13] = "Exabits";
})(InformationUnits = exports.InformationUnits || (exports.InformationUnits = {}));
class Information {
    constructor(value, fromUnit) {
        this.bytesLazy = null;
        this.bitsLazy = null;
        this.kilobytesLazy = null;
        this.megabytesLazy = null;
        this.gigabytesLazy = null;
        this.terabytesLazy = null;
        this.petabytesLazy = null;
        this.exabytesLazy = null;
        this.kilobitsLazy = null;
        this.megabitsLazy = null;
        this.gigabitsLazy = null;
        this.terabitsLazy = null;
        this.petabitsLazy = null;
        this.exabitsLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Bytes() {
        if (this.bytesLazy !== null) {
            return this.bytesLazy;
        }
        return this.bytesLazy = this.convertFromBase(InformationUnits.Bytes);
    }
    get Bits() {
        if (this.bitsLazy !== null) {
            return this.bitsLazy;
        }
        return this.bitsLazy = this.convertFromBase(InformationUnits.Bits);
    }
    get Kilobytes() {
        if (this.kilobytesLazy !== null) {
            return this.kilobytesLazy;
        }
        return this.kilobytesLazy = this.convertFromBase(InformationUnits.Kilobytes);
    }
    get Megabytes() {
        if (this.megabytesLazy !== null) {
            return this.megabytesLazy;
        }
        return this.megabytesLazy = this.convertFromBase(InformationUnits.Megabytes);
    }
    get Gigabytes() {
        if (this.gigabytesLazy !== null) {
            return this.gigabytesLazy;
        }
        return this.gigabytesLazy = this.convertFromBase(InformationUnits.Gigabytes);
    }
    get Terabytes() {
        if (this.terabytesLazy !== null) {
            return this.terabytesLazy;
        }
        return this.terabytesLazy = this.convertFromBase(InformationUnits.Terabytes);
    }
    get Petabytes() {
        if (this.petabytesLazy !== null) {
            return this.petabytesLazy;
        }
        return this.petabytesLazy = this.convertFromBase(InformationUnits.Petabytes);
    }
    get Exabytes() {
        if (this.exabytesLazy !== null) {
            return this.exabytesLazy;
        }
        return this.exabytesLazy = this.convertFromBase(InformationUnits.Exabytes);
    }
    get Kilobits() {
        if (this.kilobitsLazy !== null) {
            return this.kilobitsLazy;
        }
        return this.kilobitsLazy = this.convertFromBase(InformationUnits.Kilobits);
    }
    get Megabits() {
        if (this.megabitsLazy !== null) {
            return this.megabitsLazy;
        }
        return this.megabitsLazy = this.convertFromBase(InformationUnits.Megabits);
    }
    get Gigabits() {
        if (this.gigabitsLazy !== null) {
            return this.gigabitsLazy;
        }
        return this.gigabitsLazy = this.convertFromBase(InformationUnits.Gigabits);
    }
    get Terabits() {
        if (this.terabitsLazy !== null) {
            return this.terabitsLazy;
        }
        return this.terabitsLazy = this.convertFromBase(InformationUnits.Terabits);
    }
    get Petabits() {
        if (this.petabitsLazy !== null) {
            return this.petabitsLazy;
        }
        return this.petabitsLazy = this.convertFromBase(InformationUnits.Petabits);
    }
    get Exabits() {
        if (this.exabitsLazy !== null) {
            return this.exabitsLazy;
        }
        return this.exabitsLazy = this.convertFromBase(InformationUnits.Exabits);
    }
    static FromBytes(value) {
        return new Information(value, InformationUnits.Bytes);
    }
    static FromBits(value) {
        return new Information(value, InformationUnits.Bits);
    }
    static FromKilobytes(value) {
        return new Information(value, InformationUnits.Kilobytes);
    }
    static FromMegabytes(value) {
        return new Information(value, InformationUnits.Megabytes);
    }
    static FromGigabytes(value) {
        return new Information(value, InformationUnits.Gigabytes);
    }
    static FromTerabytes(value) {
        return new Information(value, InformationUnits.Terabytes);
    }
    static FromPetabytes(value) {
        return new Information(value, InformationUnits.Petabytes);
    }
    static FromExabytes(value) {
        return new Information(value, InformationUnits.Exabytes);
    }
    static FromKilobits(value) {
        return new Information(value, InformationUnits.Kilobits);
    }
    static FromMegabits(value) {
        return new Information(value, InformationUnits.Megabits);
    }
    static FromGigabits(value) {
        return new Information(value, InformationUnits.Gigabits);
    }
    static FromTerabits(value) {
        return new Information(value, InformationUnits.Terabits);
    }
    static FromPetabits(value) {
        return new Information(value, InformationUnits.Petabits);
    }
    static FromExabits(value) {
        return new Information(value, InformationUnits.Exabits);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case InformationUnits.Bytes:
                return this.value / 8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobytes:
                return (this.value / 8) / 1000;
            case InformationUnits.Megabytes:
                return (this.value / 8) / 1000000;
            case InformationUnits.Gigabytes:
                return (this.value / 8) / 1000000000;
            case InformationUnits.Terabytes:
                return (this.value / 8) / 1000000000000;
            case InformationUnits.Petabytes:
                return (this.value / 8) / 1000000000000000;
            case InformationUnits.Exabytes:
                return (this.value / 8) / 1000000000000000000;
            case InformationUnits.Kilobits:
                return (this.value) / 1000;
            case InformationUnits.Megabits:
                return (this.value) / 1000000;
            case InformationUnits.Gigabits:
                return (this.value) / 1000000000;
            case InformationUnits.Terabits:
                return (this.value) / 1000000000000;
            case InformationUnits.Petabits:
                return (this.value) / 1000000000000000;
            case InformationUnits.Exabits:
                return (this.value) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case InformationUnits.Bytes:
                return value * 8;
            case InformationUnits.Bits:
                return value;
            case InformationUnits.Kilobytes:
                return (value * 8) * 1000;
            case InformationUnits.Megabytes:
                return (value * 8) * 1000000;
            case InformationUnits.Gigabytes:
                return (value * 8) * 1000000000;
            case InformationUnits.Terabytes:
                return (value * 8) * 1000000000000;
            case InformationUnits.Petabytes:
                return (value * 8) * 1000000000000000;
            case InformationUnits.Exabytes:
                return (value * 8) * 1000000000000000000;
            case InformationUnits.Kilobits:
                return (value) * 1000;
            case InformationUnits.Megabits:
                return (value) * 1000000;
            case InformationUnits.Gigabits:
                return (value) * 1000000000;
            case InformationUnits.Terabits:
                return (value) * 1000000000000;
            case InformationUnits.Petabits:
                return (value) * 1000000000000000;
            case InformationUnits.Exabits:
                return (value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Information = Information;
//# sourceMappingURL=information.g.js.map