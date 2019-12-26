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
        this.radianspersecondLazy = null;
        this.degreespersecondLazy = null;
        this.degreesperminuteLazy = null;
        this.revolutionspersecondLazy = null;
        this.revolutionsperminuteLazy = null;
        this.nanoradianspersecondLazy = null;
        this.microradianspersecondLazy = null;
        this.centiradianspersecondLazy = null;
        this.deciradianspersecondLazy = null;
        this.nanodegreespersecondLazy = null;
        this.microdegreespersecondLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get RadiansPerSecond() {
        if (this.radianspersecondLazy !== null) {
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RadiansPerSecond);
    }
    get DegreesPerSecond() {
        if (this.degreespersecondLazy !== null) {
            return this.degreespersecondLazy;
        }
        return this.degreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerSecond);
    }
    get DegreesPerMinute() {
        if (this.degreesperminuteLazy !== null) {
            return this.degreesperminuteLazy;
        }
        return this.degreesperminuteLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerMinute);
    }
    get RevolutionsPerSecond() {
        if (this.revolutionspersecondLazy !== null) {
            return this.revolutionspersecondLazy;
        }
        return this.revolutionspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerSecond);
    }
    get RevolutionsPerMinute() {
        if (this.revolutionsperminuteLazy !== null) {
            return this.revolutionsperminuteLazy;
        }
        return this.revolutionsperminuteLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerMinute);
    }
    get Nanoradianspersecond() {
        if (this.nanoradianspersecondLazy !== null) {
            return this.nanoradianspersecondLazy;
        }
        return this.nanoradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Nanoradianspersecond);
    }
    get Microradianspersecond() {
        if (this.microradianspersecondLazy !== null) {
            return this.microradianspersecondLazy;
        }
        return this.microradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Microradianspersecond);
    }
    get Centiradianspersecond() {
        if (this.centiradianspersecondLazy !== null) {
            return this.centiradianspersecondLazy;
        }
        return this.centiradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Centiradianspersecond);
    }
    get Deciradianspersecond() {
        if (this.deciradianspersecondLazy !== null) {
            return this.deciradianspersecondLazy;
        }
        return this.deciradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.Deciradianspersecond);
    }
    get Nanodegreespersecond() {
        if (this.nanodegreespersecondLazy !== null) {
            return this.nanodegreespersecondLazy;
        }
        return this.nanodegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.Nanodegreespersecond);
    }
    get Microdegreespersecond() {
        if (this.microdegreespersecondLazy !== null) {
            return this.microdegreespersecondLazy;
        }
        return this.microdegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.Microdegreespersecond);
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
                return (this.value) / 1e-9;
            case RotationalSpeedUnits.Microradianspersecond:
                return (this.value) / 0.000001;
            case RotationalSpeedUnits.Centiradianspersecond:
                return (this.value) / 0.01;
            case RotationalSpeedUnits.Deciradianspersecond:
                return (this.value) / 0.1;
            case RotationalSpeedUnits.Nanodegreespersecond:
                return ((180 / Math.PI) * this.value) / 1e-9;
            case RotationalSpeedUnits.Microdegreespersecond:
                return ((180 / Math.PI) * this.value) / 0.000001;
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
                return (value) * 1e-9;
            case RotationalSpeedUnits.Microradianspersecond:
                return (value) * 0.000001;
            case RotationalSpeedUnits.Centiradianspersecond:
                return (value) * 0.01;
            case RotationalSpeedUnits.Deciradianspersecond:
                return (value) * 0.1;
            case RotationalSpeedUnits.Nanodegreespersecond:
                return ((Math.PI / 180) * value) * 1e-9;
            case RotationalSpeedUnits.Microdegreespersecond:
                return ((Math.PI / 180) * value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.RotationalSpeed = RotationalSpeed;
//# sourceMappingURL=rotationalspeed.g.js.map