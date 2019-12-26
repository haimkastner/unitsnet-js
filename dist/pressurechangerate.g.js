"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PressureChangeRateUnits;
(function (PressureChangeRateUnits) {
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerSecond"] = 0] = "PascalsPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["PascalsPerMinute"] = 1] = "PascalsPerMinute";
    PressureChangeRateUnits[PressureChangeRateUnits["AtmospheresPerSecond"] = 2] = "AtmospheresPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["KilopascalsPerSecond"] = 3] = "KilopascalsPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["MegapascalsPerSecond"] = 4] = "MegapascalsPerSecond";
    PressureChangeRateUnits[PressureChangeRateUnits["KilopascalsPerMinute"] = 5] = "KilopascalsPerMinute";
    PressureChangeRateUnits[PressureChangeRateUnits["MegapascalsPerMinute"] = 6] = "MegapascalsPerMinute";
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
    get KilopascalsPerSecond() {
        if (this.kilopascalspersecondLazy !== null) {
            return this.kilopascalspersecondLazy;
        }
        return this.kilopascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerSecond);
    }
    get MegapascalsPerSecond() {
        if (this.megapascalspersecondLazy !== null) {
            return this.megapascalspersecondLazy;
        }
        return this.megapascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerSecond);
    }
    get KilopascalsPerMinute() {
        if (this.kilopascalsperminuteLazy !== null) {
            return this.kilopascalsperminuteLazy;
        }
        return this.kilopascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerMinute);
    }
    get MegapascalsPerMinute() {
        if (this.megapascalsperminuteLazy !== null) {
            return this.megapascalsperminuteLazy;
        }
        return this.megapascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerMinute);
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
    static FromKilopascalsPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerSecond);
    }
    static FromMegapascalsPerSecond(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerSecond);
    }
    static FromKilopascalsPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerMinute);
    }
    static FromMegapascalsPerMinute(value) {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerMinute);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value * 60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325 * 1e5);
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (this.value * 60) / 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
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
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (value) * 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (value / 60) * 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
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
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return this.KilopascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return this.MegapascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return this.KilopascalsPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return this.MegapascalsPerMinute + ` Pa/min`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.PressureChangeRate = PressureChangeRate;
//# sourceMappingURL=pressurechangerate.g.js.map