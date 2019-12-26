"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PressureChangeRateUnits;
(function (PressureChangeRateUnits) {
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerSecond"] = 0] = "PascalsPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerMinute"] = 1] = "PascalsPerMinute";
    PressureChangeRateUnits[PressureChangeRateUnits["AtmospheresPerSecond"] = 2] = "AtmospheresPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["KilopascalPerSecond"] = 3] = "KilopascalPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["MegapascalPerSecond"] = 4] = "MegapascalPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["KilopascalPerMinute"] = 5] = "KilopascalPerMinute";
    PressureChangeRateUnits[PressureChangeRateUnits["MegapascalPerMinute"] = 6] = "MegapascalPerMinute";
})(PressureChangeRateUnits = exports.PressureChangeRateUnits || (exports.PressureChangeRateUnits = {}));
class PressureChangeRate {
    constructor(value, fromUnit) {
        this.pascalspersecondLazy = null;
        this.pascalsperminuteLazy = null;
        this.atmospherespersecondLazy = null;
        this.kilopascalpersecondLazy = null;
        this.megapascalpersecondLazy = null;
        this.kilopascalperminuteLazy = null;
        this.megapascalperminuteLazy = null;
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
    get KilopascalPerSecond() {
        if (this.kilopascalpersecondLazy !== null) {
            return this.kilopascalpersecondLazy;
        }
        return this.kilopascalpersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalPerSecond);
    }
    get MegapascalPerSecond() {
        if (this.megapascalpersecondLazy !== null) {
            return this.megapascalpersecondLazy;
        }
        return this.megapascalpersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalPerSecond);
    }
    get KilopascalPerMinute() {
        if (this.kilopascalperminuteLazy !== null) {
            return this.kilopascalperminuteLazy;
        }
        return this.kilopascalperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalPerMinute);
    }
    get MegapascalPerMinute() {
        if (this.megapascalperminuteLazy !== null) {
            return this.megapascalperminuteLazy;
        }
        return this.megapascalperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalPerMinute);
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
    static FromKilopascalPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalPerSecond);
    }
    static FromMegapascalPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalPerSecond);
    }
    static FromKilopascalPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalPerMinute);
    }
    static FromMegapascalPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalPerMinute);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value * 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325 * 1e5);
            case PressureChangeRateUnits.KilopascalPerSecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalPerSecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalPerMinute:
                return (this.value * 60) / 1000;
            case PressureChangeRateUnits.MegapascalPerMinute:
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
            case PressureChangeRateUnits.KilopascalPerSecond:
                return (value) * 1000;
            case PressureChangeRateUnits.MegapascalPerSecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalPerMinute:
                return (value / 60) * 1000;
            case PressureChangeRateUnits.MegapascalPerMinute:
                return (value / 60) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = PressureChangeRateUnits.PascalsPerSecond) {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.PascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.PascalsPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.AtmospheresPerSecond + ` atm/s`;
            case PressureChangeRateUnits.KilopascalPerSecond:
                return this.KilopascalPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.MegapascalPerSecond:
                return this.MegapascalPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.KilopascalPerMinute:
                return this.KilopascalPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.MegapascalPerMinute:
                return this.MegapascalPerMinute + ` Pa/min`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.PressureChangeRate = PressureChangeRate;
//# sourceMappingURL=pressurechangerate.g.js.map