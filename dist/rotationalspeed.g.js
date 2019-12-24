"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalSpeedUnits;
(function (RotationalSpeedUnits) {
    RotationalSpeedUnits[RotationalSpeedUnits["RadiansPerSecond"] = 0] = "RadiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerSecond"] = 1] = "DegreesPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerMinute"] = 2] = "DegreesPerMinute";
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerSecond"] = 3] = "RevolutionsPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerMinute"] = 4] = "RevolutionsPerMinute";
    RotationalSpeedUnits[RotationalSpeedUnits["Nanoradianspersecond"] = 5] = "Nanoradianspersecond";
    RotationalSpeedUnits[RotationalSpeedUnits["Microradianspersecond"] = 6] = "Microradianspersecond";
    RotationalSpeedUnits[RotationalSpeedUnits["Centiradianspersecond"] = 7] = "Centiradianspersecond";
    RotationalSpeedUnits[RotationalSpeedUnits["Deciradianspersecond"] = 8] = "Deciradianspersecond";
    RotationalSpeedUnits[RotationalSpeedUnits["Nanodegreespersecond"] = 9] = "Nanodegreespersecond";
    RotationalSpeedUnits[RotationalSpeedUnits["Microdegreespersecond"] = 10] = "Microdegreespersecond";
})(RotationalSpeedUnits = exports.RotationalSpeedUnits || (exports.RotationalSpeedUnits = {}));
class RotationalSpeed {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get RadiansPerSecond() {
        return this.convertFromBase(RotationalSpeedUnits.RadiansPerSecond);
    }
    get DegreesPerSecond() {
        return this.convertFromBase(RotationalSpeedUnits.DegreesPerSecond);
    }
    get DegreesPerMinute() {
        return this.convertFromBase(RotationalSpeedUnits.DegreesPerMinute);
    }
    get RevolutionsPerSecond() {
        return this.convertFromBase(RotationalSpeedUnits.RevolutionsPerSecond);
    }
    get RevolutionsPerMinute() {
        return this.convertFromBase(RotationalSpeedUnits.RevolutionsPerMinute);
    }
    get Nanoradianspersecond() {
        return this.convertFromBase(RotationalSpeedUnits.Nanoradianspersecond);
    }
    get Microradianspersecond() {
        return this.convertFromBase(RotationalSpeedUnits.Microradianspersecond);
    }
    get Centiradianspersecond() {
        return this.convertFromBase(RotationalSpeedUnits.Centiradianspersecond);
    }
    get Deciradianspersecond() {
        return this.convertFromBase(RotationalSpeedUnits.Deciradianspersecond);
    }
    get Nanodegreespersecond() {
        return this.convertFromBase(RotationalSpeedUnits.Nanodegreespersecond);
    }
    get Microdegreespersecond() {
        return this.convertFromBase(RotationalSpeedUnits.Microdegreespersecond);
    }
    static FromRadiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.RadiansPerSecond);
    }
    static FromDegreesPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerSecond);
    }
    static FromDegreesPerMinute(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerMinute);
    }
    static FromRevolutionsPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerSecond);
    }
    static FromRevolutionsPerMinute(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerMinute);
    }
    static FromNanoradianspersecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.Nanoradianspersecond);
    }
    static FromMicroradianspersecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.Microradianspersecond);
    }
    static FromCentiradianspersecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.Centiradianspersecond);
    }
    static FromDeciradianspersecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.Deciradianspersecond);
    }
    static FromNanodegreespersecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.Nanodegreespersecond);
    }
    static FromMicrodegreespersecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.Microdegreespersecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalSpeedUnits.RadiansPerSecond:
                return this.value;
            case RotationalSpeedUnits.DegreesPerSecond:
                return (180 / Math.PI) * this.value;
            case RotationalSpeedUnits.DegreesPerMinute:
                return (180 * 60 / Math.PI) * this.value;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return this.value / 6.2831853072;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return (this.value / 6.2831853072) * 60;
            case RotationalSpeedUnits.Nanoradianspersecond:
                return (this.value) * 1e-9;
            case RotationalSpeedUnits.Microradianspersecond:
                return (this.value) * 0.000001;
            case RotationalSpeedUnits.Centiradianspersecond:
                return (this.value) * 0.01;
            case RotationalSpeedUnits.Deciradianspersecond:
                return (this.value) * 0.1;
            case RotationalSpeedUnits.Nanodegreespersecond:
                return ((Math.PI / 180) * this.value) * 1e-9;
            case RotationalSpeedUnits.Microdegreespersecond:
                return ((Math.PI / 180) * this.value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RotationalSpeedUnits.RadiansPerSecond:
                return value;
            case RotationalSpeedUnits.DegreesPerSecond:
                return (Math.PI / 180) * value;
            case RotationalSpeedUnits.DegreesPerMinute:
                return (Math.PI / (180 * 60)) * value;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return value * 6.2831853072;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return (value * 6.2831853072) / 60;
            case RotationalSpeedUnits.Nanoradianspersecond:
                return (value) / 1e-9;
            case RotationalSpeedUnits.Microradianspersecond:
                return (value) / 0.000001;
            case RotationalSpeedUnits.Centiradianspersecond:
                return (value) / 0.01;
            case RotationalSpeedUnits.Deciradianspersecond:
                return (value) / 0.1;
            case RotationalSpeedUnits.Nanodegreespersecond:
                return ((180 / Math.PI) * value) / 1e-9;
            case RotationalSpeedUnits.Microdegreespersecond:
                return ((180 / Math.PI) * value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.RotationalSpeed = RotationalSpeed;
//# sourceMappingURL=rotationalspeed.g.js.map