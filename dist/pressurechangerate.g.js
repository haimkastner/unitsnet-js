"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PressureChangeRateUnits;
(function (PressureChangeRateUnits) {
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerSecond"] = 0] = "PascalsPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerMinute"] = 1] = "PascalsPerMinute";
    PressureChangeRateUnits[PressureChangeRateUnits["AtmospheresPerSecond"] = 2] = "AtmospheresPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["Kilopascalspersecond"] = 3] = "Kilopascalspersecond";
    PressureChangeRateUnits[PressureChangeRateUnits["Megapascalspersecond"] = 4] = "Megapascalspersecond";
    PressureChangeRateUnits[PressureChangeRateUnits["Kilopascalsperminute"] = 5] = "Kilopascalsperminute";
    PressureChangeRateUnits[PressureChangeRateUnits["Megapascalsperminute"] = 6] = "Megapascalsperminute";
})(PressureChangeRateUnits = exports.PressureChangeRateUnits || (exports.PressureChangeRateUnits = {}));
class PressureChangeRate {
    constructor(value, fromUnit) {
        this.pascalspersecondLazy = null;
        this.pascalsperminuteLazy = null;
        this.atmospherespersecondLazy = null;
        this.kilopascalspersecondLazy = null;
        this.megapascalspersecondLazy = null;
        this.kilopascalsperminuteLazy = null;
        this.megapascalsperminuteLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get PascalsPerSecond() {
        if (this.pascalspersecondLazy !== null) {
            return this.pascalspersecondLazy;
        }
        return this.pascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerSecond);
    }
    get PascalsPerMinute() {
        if (this.pascalsperminuteLazy !== null) {
            return this.pascalsperminuteLazy;
        }
        return this.pascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerMinute);
    }
    get AtmospheresPerSecond() {
        if (this.atmospherespersecondLazy !== null) {
            return this.atmospherespersecondLazy;
        }
        return this.atmospherespersecondLazy = this.convertFromBase(PressureChangeRateUnits.AtmospheresPerSecond);
    }
    get Kilopascalspersecond() {
        if (this.kilopascalspersecondLazy !== null) {
            return this.kilopascalspersecondLazy;
        }
        return this.kilopascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.Kilopascalspersecond);
    }
    get Megapascalspersecond() {
        if (this.megapascalspersecondLazy !== null) {
            return this.megapascalspersecondLazy;
        }
        return this.megapascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.Megapascalspersecond);
    }
    get Kilopascalsperminute() {
        if (this.kilopascalsperminuteLazy !== null) {
            return this.kilopascalsperminuteLazy;
        }
        return this.kilopascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.Kilopascalsperminute);
    }
    get Megapascalsperminute() {
        if (this.megapascalsperminuteLazy !== null) {
            return this.megapascalsperminuteLazy;
        }
        return this.megapascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.Megapascalsperminute);
    }
    static FromPascalsPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerSecond);
    }
    static FromPascalsPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerMinute);
    }
    static FromAtmospheresPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.AtmospheresPerSecond);
    }
    static FromKilopascalspersecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.Kilopascalspersecond);
    }
    static FromMegapascalspersecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.Megapascalspersecond);
    }
    static FromKilopascalsperminute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.Kilopascalsperminute);
    }
    static FromMegapascalsperminute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.Megapascalsperminute);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value * 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325 * 1e5);
            case PressureChangeRateUnits.Kilopascalspersecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.Megapascalspersecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.Kilopascalsperminute:
                return (this.value * 60) / 1000;
            case PressureChangeRateUnits.Megapascalsperminute:
                return (this.value * 60) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return value / 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return value * 1.01325 * 1e5;
            case PressureChangeRateUnits.Kilopascalspersecond:
                return (value) * 1000;
            case PressureChangeRateUnits.Megapascalspersecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.Kilopascalsperminute:
                return (value / 60) * 1000;
            case PressureChangeRateUnits.Megapascalsperminute:
                return (value / 60) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.PressureChangeRate = PressureChangeRate;
//# sourceMappingURL=pressurechangerate.g.js.map