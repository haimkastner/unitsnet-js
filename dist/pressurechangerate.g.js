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
        this.value = this.convertToBase(value, fromUnit);
    }
    get PascalsPerSecond() {
        return this.convertFromBase(PressureChangeRateUnits.PascalsPerSecond);
    }
    get PascalsPerMinute() {
        return this.convertFromBase(PressureChangeRateUnits.PascalsPerMinute);
    }
    get AtmospheresPerSecond() {
        return this.convertFromBase(PressureChangeRateUnits.AtmospheresPerSecond);
    }
    get Kilopascalspersecond() {
        return this.convertFromBase(PressureChangeRateUnits.Kilopascalspersecond);
    }
    get Megapascalspersecond() {
        return this.convertFromBase(PressureChangeRateUnits.Megapascalspersecond);
    }
    get Kilopascalsperminute() {
        return this.convertFromBase(PressureChangeRateUnits.Kilopascalsperminute);
    }
    get Megapascalsperminute() {
        return this.convertFromBase(PressureChangeRateUnits.Megapascalsperminute);
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
                return this.value / 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value * 1.01325 * 1e5;
            case PressureChangeRateUnits.Kilopascalspersecond:
                return (this.value) * 1000;
            case PressureChangeRateUnits.Megapascalspersecond:
                return (this.value) * 1000000;
            case PressureChangeRateUnits.Kilopascalsperminute:
                return (this.value * 60) * 1000;
            case PressureChangeRateUnits.Megapascalsperminute:
                return (this.value * 60) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
                return (this.value / 60) / 1000;
            case PressureChangeRateUnits.Megapascalsperminute:
                return (this.value / 60) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.PressureChangeRate = PressureChangeRate;
//# sourceMappingURL=pressurechangerate.g.js.map