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
        this.value = this.convertToBase(value, fromUnit);
    }
    get Bytes() {
        return this.convertFromBase(InformationUnits.Bytes);
    }
    get Bits() {
        return this.convertFromBase(InformationUnits.Bits);
    }
    get Kilobytes() {
        return this.convertFromBase(InformationUnits.Kilobytes);
    }
    get Megabytes() {
        return this.convertFromBase(InformationUnits.Megabytes);
    }
    get Gigabytes() {
        return this.convertFromBase(InformationUnits.Gigabytes);
    }
    get Terabytes() {
        return this.convertFromBase(InformationUnits.Terabytes);
    }
    get Petabytes() {
        return this.convertFromBase(InformationUnits.Petabytes);
    }
    get Exabytes() {
        return this.convertFromBase(InformationUnits.Exabytes);
    }
    get Kilobits() {
        return this.convertFromBase(InformationUnits.Kilobits);
    }
    get Megabits() {
        return this.convertFromBase(InformationUnits.Megabits);
    }
    get Gigabits() {
        return this.convertFromBase(InformationUnits.Gigabits);
    }
    get Terabits() {
        return this.convertFromBase(InformationUnits.Terabits);
    }
    get Petabits() {
        return this.convertFromBase(InformationUnits.Petabits);
    }
    get Exabits() {
        return this.convertFromBase(InformationUnits.Exabits);
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
                return this.value * 8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobytes:
                return (this.value / 8) * 1000;
            case InformationUnits.Megabytes:
                return (this.value / 8) * 1000000;
            case InformationUnits.Gigabytes:
                return (this.value / 8) * 1000000000;
            case InformationUnits.Terabytes:
                return (this.value / 8) * 1000000000000;
            case InformationUnits.Petabytes:
                return (this.value / 8) * 1000000000000000;
            case InformationUnits.Exabytes:
                return (this.value / 8) * 1000000000000000000;
            case InformationUnits.Kilobits:
                return (this.value) * 1000;
            case InformationUnits.Megabits:
                return (this.value) * 1000000;
            case InformationUnits.Gigabits:
                return (this.value) * 1000000000;
            case InformationUnits.Terabits:
                return (this.value) * 1000000000000;
            case InformationUnits.Petabits:
                return (this.value) * 1000000000000000;
            case InformationUnits.Exabits:
                return (this.value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case InformationUnits.Bytes:
                return this.value / 8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobytes:
                return (this.value * 8) / 1000;
            case InformationUnits.Megabytes:
                return (this.value * 8) / 1000000;
            case InformationUnits.Gigabytes:
                return (this.value * 8) / 1000000000;
            case InformationUnits.Terabytes:
                return (this.value * 8) / 1000000000000;
            case InformationUnits.Petabytes:
                return (this.value * 8) / 1000000000000000;
            case InformationUnits.Exabytes:
                return (this.value * 8) / 1000000000000000000;
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
}
exports.Information = Information;
//# sourceMappingURL=information.g.js.map