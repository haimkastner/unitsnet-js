"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InformationUnits;
(function (InformationUnits) {
    InformationUnits[InformationUnits["Bytes"] = 0] = "Bytes";
    InformationUnits[InformationUnits["Bits"] = 1] = "Bits";
    InformationUnits[InformationUnits["Kilobyte"] = 2] = "Kilobyte";
    InformationUnits[InformationUnits["Megabyte"] = 3] = "Megabyte";
    InformationUnits[InformationUnits["Gigabyte"] = 4] = "Gigabyte";
    InformationUnits[InformationUnits["Terabyte"] = 5] = "Terabyte";
    InformationUnits[InformationUnits["Petabyte"] = 6] = "Petabyte";
    InformationUnits[InformationUnits["Exabyte"] = 7] = "Exabyte";
    InformationUnits[InformationUnits["Kilobit"] = 8] = "Kilobit";
    InformationUnits[InformationUnits["Megabit"] = 9] = "Megabit";
    InformationUnits[InformationUnits["Gigabit"] = 10] = "Gigabit";
    InformationUnits[InformationUnits["Terabit"] = 11] = "Terabit";
    InformationUnits[InformationUnits["Petabit"] = 12] = "Petabit";
    InformationUnits[InformationUnits["Exabit"] = 13] = "Exabit";
})(InformationUnits = exports.InformationUnits || (exports.InformationUnits = {}));
class Information {
    constructor(value, fromUnit) {
        this.bytesLazy = null;
        this.bitsLazy = null;
        this.kilobyteLazy = null;
        this.megabyteLazy = null;
        this.gigabyteLazy = null;
        this.terabyteLazy = null;
        this.petabyteLazy = null;
        this.exabyteLazy = null;
        this.kilobitLazy = null;
        this.megabitLazy = null;
        this.gigabitLazy = null;
        this.terabitLazy = null;
        this.petabitLazy = null;
        this.exabitLazy = null;
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
    get Kilobyte() {
        if (this.kilobyteLazy !== null) {
            return this.kilobyteLazy;
        }
        return this.kilobyteLazy = this.convertFromBase(InformationUnits.Kilobyte);
    }
    get Megabyte() {
        if (this.megabyteLazy !== null) {
            return this.megabyteLazy;
        }
        return this.megabyteLazy = this.convertFromBase(InformationUnits.Megabyte);
    }
    get Gigabyte() {
        if (this.gigabyteLazy !== null) {
            return this.gigabyteLazy;
        }
        return this.gigabyteLazy = this.convertFromBase(InformationUnits.Gigabyte);
    }
    get Terabyte() {
        if (this.terabyteLazy !== null) {
            return this.terabyteLazy;
        }
        return this.terabyteLazy = this.convertFromBase(InformationUnits.Terabyte);
    }
    get Petabyte() {
        if (this.petabyteLazy !== null) {
            return this.petabyteLazy;
        }
        return this.petabyteLazy = this.convertFromBase(InformationUnits.Petabyte);
    }
    get Exabyte() {
        if (this.exabyteLazy !== null) {
            return this.exabyteLazy;
        }
        return this.exabyteLazy = this.convertFromBase(InformationUnits.Exabyte);
    }
    get Kilobit() {
        if (this.kilobitLazy !== null) {
            return this.kilobitLazy;
        }
        return this.kilobitLazy = this.convertFromBase(InformationUnits.Kilobit);
    }
    get Megabit() {
        if (this.megabitLazy !== null) {
            return this.megabitLazy;
        }
        return this.megabitLazy = this.convertFromBase(InformationUnits.Megabit);
    }
    get Gigabit() {
        if (this.gigabitLazy !== null) {
            return this.gigabitLazy;
        }
        return this.gigabitLazy = this.convertFromBase(InformationUnits.Gigabit);
    }
    get Terabit() {
        if (this.terabitLazy !== null) {
            return this.terabitLazy;
        }
        return this.terabitLazy = this.convertFromBase(InformationUnits.Terabit);
    }
    get Petabit() {
        if (this.petabitLazy !== null) {
            return this.petabitLazy;
        }
        return this.petabitLazy = this.convertFromBase(InformationUnits.Petabit);
    }
    get Exabit() {
        if (this.exabitLazy !== null) {
            return this.exabitLazy;
        }
        return this.exabitLazy = this.convertFromBase(InformationUnits.Exabit);
    }
    static FromBytes(value) {
        return new Information(value, InformationUnits.Bytes);
    }
    static FromBits(value) {
        return new Information(value, InformationUnits.Bits);
    }
    static FromKilobyte(value) {
        return new Information(value, InformationUnits.Kilobyte);
    }
    static FromMegabyte(value) {
        return new Information(value, InformationUnits.Megabyte);
    }
    static FromGigabyte(value) {
        return new Information(value, InformationUnits.Gigabyte);
    }
    static FromTerabyte(value) {
        return new Information(value, InformationUnits.Terabyte);
    }
    static FromPetabyte(value) {
        return new Information(value, InformationUnits.Petabyte);
    }
    static FromExabyte(value) {
        return new Information(value, InformationUnits.Exabyte);
    }
    static FromKilobit(value) {
        return new Information(value, InformationUnits.Kilobit);
    }
    static FromMegabit(value) {
        return new Information(value, InformationUnits.Megabit);
    }
    static FromGigabit(value) {
        return new Information(value, InformationUnits.Gigabit);
    }
    static FromTerabit(value) {
        return new Information(value, InformationUnits.Terabit);
    }
    static FromPetabit(value) {
        return new Information(value, InformationUnits.Petabit);
    }
    static FromExabit(value) {
        return new Information(value, InformationUnits.Exabit);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case InformationUnits.Bytes:
                return this.value / 8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobyte:
                return (this.value / 8) / 1000;
            case InformationUnits.Megabyte:
                return (this.value / 8) / 1000000;
            case InformationUnits.Gigabyte:
                return (this.value / 8) / 1000000000;
            case InformationUnits.Terabyte:
                return (this.value / 8) / 1000000000000;
            case InformationUnits.Petabyte:
                return (this.value / 8) / 1000000000000000;
            case InformationUnits.Exabyte:
                return (this.value / 8) / 1000000000000000000;
            case InformationUnits.Kilobit:
                return (this.value) / 1000;
            case InformationUnits.Megabit:
                return (this.value) / 1000000;
            case InformationUnits.Gigabit:
                return (this.value) / 1000000000;
            case InformationUnits.Terabit:
                return (this.value) / 1000000000000;
            case InformationUnits.Petabit:
                return (this.value) / 1000000000000000;
            case InformationUnits.Exabit:
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
            case InformationUnits.Kilobyte:
                return (value * 8) * 1000;
            case InformationUnits.Megabyte:
                return (value * 8) * 1000000;
            case InformationUnits.Gigabyte:
                return (value * 8) * 1000000000;
            case InformationUnits.Terabyte:
                return (value * 8) * 1000000000000;
            case InformationUnits.Petabyte:
                return (value * 8) * 1000000000000000;
            case InformationUnits.Exabyte:
                return (value * 8) * 1000000000000000000;
            case InformationUnits.Kilobit:
                return (value) * 1000;
            case InformationUnits.Megabit:
                return (value) * 1000000;
            case InformationUnits.Gigabit:
                return (value) * 1000000000;
            case InformationUnits.Terabit:
                return (value) * 1000000000000;
            case InformationUnits.Petabit:
                return (value) * 1000000000000000;
            case InformationUnits.Exabit:
                return (value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = InformationUnits.Bits) {
        switch (toUnit) {
            case InformationUnits.Bytes:
                return this.Bytes + ` B`;
            case InformationUnits.Bits:
                return this.Bits + ` b`;
            case InformationUnits.Kilobyte:
                return this.Kilobyte + ` B`;
            case InformationUnits.Megabyte:
                return this.Megabyte + ` B`;
            case InformationUnits.Gigabyte:
                return this.Gigabyte + ` B`;
            case InformationUnits.Terabyte:
                return this.Terabyte + ` B`;
            case InformationUnits.Petabyte:
                return this.Petabyte + ` B`;
            case InformationUnits.Exabyte:
                return this.Exabyte + ` B`;
            case InformationUnits.Kilobit:
                return this.Kilobit + ` b`;
            case InformationUnits.Megabit:
                return this.Megabit + ` b`;
            case InformationUnits.Gigabit:
                return this.Gigabit + ` b`;
            case InformationUnits.Terabit:
                return this.Terabit + ` b`;
            case InformationUnits.Petabit:
                return this.Petabit + ` b`;
            case InformationUnits.Exabit:
                return this.Exabit + ` b`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Information = Information;
//# sourceMappingURL=information.g.js.map