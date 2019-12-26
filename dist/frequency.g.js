"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrequencyUnits;
(function (FrequencyUnits) {
    FrequencyUnits[FrequencyUnits["Hertz"] = 0] = "Hertz";
    FrequencyUnits[FrequencyUnits["RadiansPerSecond"] = 1] = "RadiansPerSecond";
    FrequencyUnits[FrequencyUnits["CyclesPerMinute"] = 2] = "CyclesPerMinute";
    FrequencyUnits[FrequencyUnits["CyclesPerHour"] = 3] = "CyclesPerHour";
    FrequencyUnits[FrequencyUnits["BeatsPerMinute"] = 4] = "BeatsPerMinute";
    FrequencyUnits[FrequencyUnits["Kilohertz"] = 5] = "Kilohertz";
    FrequencyUnits[FrequencyUnits["Megahertz"] = 6] = "Megahertz";
    FrequencyUnits[FrequencyUnits["Gigahertz"] = 7] = "Gigahertz";
    FrequencyUnits[FrequencyUnits["Terahertz"] = 8] = "Terahertz";
})(FrequencyUnits = exports.FrequencyUnits || (exports.FrequencyUnits = {}));
class Frequency {
    constructor(value, fromUnit) {
        this.hertzLazy = null;
        this.radianspersecondLazy = null;
        this.cyclesperminuteLazy = null;
        this.cyclesperhourLazy = null;
        this.beatsperminuteLazy = null;
        this.kilohertzLazy = null;
        this.megahertzLazy = null;
        this.gigahertzLazy = null;
        this.terahertzLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Hertz() {
        if (this.hertzLazy !== null) {
            return this.hertzLazy;
        }
        return this.hertzLazy = this.convertFromBase(FrequencyUnits.Hertz);
    }
    get RadiansPerSecond() {
        if (this.radianspersecondLazy !== null) {
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(FrequencyUnits.RadiansPerSecond);
    }
    get CyclesPerMinute() {
        if (this.cyclesperminuteLazy !== null) {
            return this.cyclesperminuteLazy;
        }
        return this.cyclesperminuteLazy = this.convertFromBase(FrequencyUnits.CyclesPerMinute);
    }
    get CyclesPerHour() {
        if (this.cyclesperhourLazy !== null) {
            return this.cyclesperhourLazy;
        }
        return this.cyclesperhourLazy = this.convertFromBase(FrequencyUnits.CyclesPerHour);
    }
    get BeatsPerMinute() {
        if (this.beatsperminuteLazy !== null) {
            return this.beatsperminuteLazy;
        }
        return this.beatsperminuteLazy = this.convertFromBase(FrequencyUnits.BeatsPerMinute);
    }
    get Kilohertz() {
        if (this.kilohertzLazy !== null) {
            return this.kilohertzLazy;
        }
        return this.kilohertzLazy = this.convertFromBase(FrequencyUnits.Kilohertz);
    }
    get Megahertz() {
        if (this.megahertzLazy !== null) {
            return this.megahertzLazy;
        }
        return this.megahertzLazy = this.convertFromBase(FrequencyUnits.Megahertz);
    }
    get Gigahertz() {
        if (this.gigahertzLazy !== null) {
            return this.gigahertzLazy;
        }
        return this.gigahertzLazy = this.convertFromBase(FrequencyUnits.Gigahertz);
    }
    get Terahertz() {
        if (this.terahertzLazy !== null) {
            return this.terahertzLazy;
        }
        return this.terahertzLazy = this.convertFromBase(FrequencyUnits.Terahertz);
    }
    static FromHertz(value) {
        return new Frequency(value, FrequencyUnits.Hertz);
    }
    static FromRadiansPerSecond(value) {
        return new Frequency(value, FrequencyUnits.RadiansPerSecond);
    }
    static FromCyclesPerMinute(value) {
        return new Frequency(value, FrequencyUnits.CyclesPerMinute);
    }
    static FromCyclesPerHour(value) {
        return new Frequency(value, FrequencyUnits.CyclesPerHour);
    }
    static FromBeatsPerMinute(value) {
        return new Frequency(value, FrequencyUnits.BeatsPerMinute);
    }
    static FromKilohertz(value) {
        return new Frequency(value, FrequencyUnits.Kilohertz);
    }
    static FromMegahertz(value) {
        return new Frequency(value, FrequencyUnits.Megahertz);
    }
    static FromGigahertz(value) {
        return new Frequency(value, FrequencyUnits.Gigahertz);
    }
    static FromTerahertz(value) {
        return new Frequency(value, FrequencyUnits.Terahertz);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case FrequencyUnits.Hertz:
                return this.value;
            case FrequencyUnits.RadiansPerSecond:
                return this.value * 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return this.value * 60;
            case FrequencyUnits.CyclesPerHour:
                return this.value * 3600;
            case FrequencyUnits.BeatsPerMinute:
                return this.value * 60;
            case FrequencyUnits.Kilohertz:
                return (this.value) / 1000;
            case FrequencyUnits.Megahertz:
                return (this.value) / 1000000;
            case FrequencyUnits.Gigahertz:
                return (this.value) / 1000000000;
            case FrequencyUnits.Terahertz:
                return (this.value) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case FrequencyUnits.Hertz:
                return value;
            case FrequencyUnits.RadiansPerSecond:
                return value / 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return value / 60;
            case FrequencyUnits.CyclesPerHour:
                return value / 3600;
            case FrequencyUnits.BeatsPerMinute:
                return value / 60;
            case FrequencyUnits.Kilohertz:
                return (value) * 1000;
            case FrequencyUnits.Megahertz:
                return (value) * 1000000;
            case FrequencyUnits.Gigahertz:
                return (value) * 1000000000;
            case FrequencyUnits.Terahertz:
                return (value) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Frequency = Frequency;
//# sourceMappingURL=frequency.g.js.map