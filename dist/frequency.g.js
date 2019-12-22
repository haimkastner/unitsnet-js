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
        this.value = this.convertToBase(value, fromUnit);
    }
    get Hertz() {
        return this.convertFromBase(FrequencyUnits.Hertz);
    }
    get RadiansPerSecond() {
        return this.convertFromBase(FrequencyUnits.RadiansPerSecond);
    }
    get CyclesPerMinute() {
        return this.convertFromBase(FrequencyUnits.CyclesPerMinute);
    }
    get CyclesPerHour() {
        return this.convertFromBase(FrequencyUnits.CyclesPerHour);
    }
    get BeatsPerMinute() {
        return this.convertFromBase(FrequencyUnits.BeatsPerMinute);
    }
    get Kilohertz() {
        return this.convertFromBase(FrequencyUnits.Kilohertz);
    }
    get Megahertz() {
        return this.convertFromBase(FrequencyUnits.Megahertz);
    }
    get Gigahertz() {
        return this.convertFromBase(FrequencyUnits.Gigahertz);
    }
    get Terahertz() {
        return this.convertFromBase(FrequencyUnits.Terahertz);
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
                return this.value / 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return this.value / 60;
            case FrequencyUnits.CyclesPerHour:
                return this.value / 3600;
            case FrequencyUnits.BeatsPerMinute:
                return this.value / 60;
            case FrequencyUnits.Kilohertz:
                return (this.value) * 1000;
            case FrequencyUnits.Megahertz:
                return (this.value) * 1000000;
            case FrequencyUnits.Gigahertz:
                return (this.value) * 1000000000;
            case FrequencyUnits.Terahertz:
                return (this.value) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
}
exports.Frequency = Frequency;
//# sourceMappingURL=frequency.g.js.map