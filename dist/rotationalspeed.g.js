"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalSpeedUnits;
(function (RotationalSpeedUnits) {
    RotationalSpeedUnits[RotationalSpeedUnits["RadiansPerSecond"] = 0] = "RadiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerSecond"] = 1] = "DegreesPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerMinute"] = 2] = "DegreesPerMinute";
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerSecond"] = 3] = "RevolutionsPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerMinute"] = 4] = "RevolutionsPerMinute";
    RotationalSpeedUnits[RotationalSpeedUnits["NanoradianPerSecond"] = 5] = "NanoradianPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["MicroradianPerSecond"] = 6] = "MicroradianPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["CentiradianPerSecond"] = 7] = "CentiradianPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DeciradianPerSecond"] = 8] = "DeciradianPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["NanodegreePerSecond"] = 9] = "NanodegreePerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["MicrodegreePerSecond"] = 10] = "MicrodegreePerSecond";
})(RotationalSpeedUnits = exports.RotationalSpeedUnits || (exports.RotationalSpeedUnits = {}));
class RotationalSpeed {
    constructor(value, fromUnit) {
        this.radianspersecondLazy = null;
        this.degreespersecondLazy = null;
        this.degreesperminuteLazy = null;
        this.revolutionspersecondLazy = null;
        this.revolutionsperminuteLazy = null;
        this.nanoradianpersecondLazy = null;
        this.microradianpersecondLazy = null;
        this.centiradianpersecondLazy = null;
        this.deciradianpersecondLazy = null;
        this.nanodegreepersecondLazy = null;
        this.microdegreepersecondLazy = null;
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
    get NanoradianPerSecond() {
        if (this.nanoradianpersecondLazy !== null) {
            return this.nanoradianpersecondLazy;
        }
        return this.nanoradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanoradianPerSecond);
    }
    get MicroradianPerSecond() {
        if (this.microradianpersecondLazy !== null) {
            return this.microradianpersecondLazy;
        }
        return this.microradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicroradianPerSecond);
    }
    get CentiradianPerSecond() {
        if (this.centiradianpersecondLazy !== null) {
            return this.centiradianpersecondLazy;
        }
        return this.centiradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.CentiradianPerSecond);
    }
    get DeciradianPerSecond() {
        if (this.deciradianpersecondLazy !== null) {
            return this.deciradianpersecondLazy;
        }
        return this.deciradianpersecondLazy = this.convertFromBase(RotationalSpeedUnits.DeciradianPerSecond);
    }
    get NanodegreePerSecond() {
        if (this.nanodegreepersecondLazy !== null) {
            return this.nanodegreepersecondLazy;
        }
        return this.nanodegreepersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanodegreePerSecond);
    }
    get MicrodegreePerSecond() {
        if (this.microdegreepersecondLazy !== null) {
            return this.microdegreepersecondLazy;
        }
        return this.microdegreepersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicrodegreePerSecond);
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
    static FromNanoradianPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanoradianPerSecond);
    }
    static FromMicroradianPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicroradianPerSecond);
    }
    static FromCentiradianPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.CentiradianPerSecond);
    }
    static FromDeciradianPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DeciradianPerSecond);
    }
    static FromNanodegreePerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanodegreePerSecond);
    }
    static FromMicrodegreePerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicrodegreePerSecond);
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
            case RotationalSpeedUnits.NanoradianPerSecond:
                return (this.value) / 1e-9;
            case RotationalSpeedUnits.MicroradianPerSecond:
                return (this.value) / 0.000001;
            case RotationalSpeedUnits.CentiradianPerSecond:
                return (this.value) / 0.01;
            case RotationalSpeedUnits.DeciradianPerSecond:
                return (this.value) / 0.1;
            case RotationalSpeedUnits.NanodegreePerSecond:
                return ((180 / Math.PI) * this.value) / 1e-9;
            case RotationalSpeedUnits.MicrodegreePerSecond:
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
            case RotationalSpeedUnits.NanoradianPerSecond:
                return (value) * 1e-9;
            case RotationalSpeedUnits.MicroradianPerSecond:
                return (value) * 0.000001;
            case RotationalSpeedUnits.CentiradianPerSecond:
                return (value) * 0.01;
            case RotationalSpeedUnits.DeciradianPerSecond:
                return (value) * 0.1;
            case RotationalSpeedUnits.NanodegreePerSecond:
                return ((Math.PI / 180) * value) * 1e-9;
            case RotationalSpeedUnits.MicrodegreePerSecond:
                return ((Math.PI / 180) * value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = RotationalSpeedUnits.RadiansPerSecond) {
        switch (toUnit) {
            case RotationalSpeedUnits.RadiansPerSecond:
                return this.RadiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.DegreesPerSecond:
                return this.DegreesPerSecond + ` °/s`;
            case RotationalSpeedUnits.DegreesPerMinute:
                return this.DegreesPerMinute + ` °/min`;
            case RotationalSpeedUnits.RevolutionsPerSecond:
                return this.RevolutionsPerSecond + ` r/s`;
            case RotationalSpeedUnits.RevolutionsPerMinute:
                return this.RevolutionsPerMinute + ` rpm`;
            case RotationalSpeedUnits.NanoradianPerSecond:
                return this.NanoradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.MicroradianPerSecond:
                return this.MicroradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.CentiradianPerSecond:
                return this.CentiradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.DeciradianPerSecond:
                return this.DeciradianPerSecond + ` rad/s`;
            case RotationalSpeedUnits.NanodegreePerSecond:
                return this.NanodegreePerSecond + ` °/s`;
            case RotationalSpeedUnits.MicrodegreePerSecond:
                return this.MicrodegreePerSecond + ` °/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalSpeed = RotationalSpeed;
//# sourceMappingURL=rotationalspeed.g.js.map