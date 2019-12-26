"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalSpeedUnits;
(function (RotationalSpeedUnits) {
    RotationalSpeedUnits[RotationalSpeedUnits["RadiansPerSecond"] = 0] = "RadiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerSecond"] = 1] = "DegreesPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerMinute"] = 2] = "DegreesPerMinute";
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerSecond"] = 3] = "RevolutionsPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerMinute"] = 4] = "RevolutionsPerMinute";
    RotationalSpeedUnits[RotationalSpeedUnits["NanoradiansPerSecond"] = 5] = "NanoradiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["MicroradiansPerSecond"] = 6] = "MicroradiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["CentiradiansPerSecond"] = 7] = "CentiradiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["DeciradiansPerSecond"] = 8] = "DeciradiansPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["NanodegreesPerSecond"] = 9] = "NanodegreesPerSecond";
    RotationalSpeedUnits[RotationalSpeedUnits["MicrodegreesPerSecond"] = 10] = "MicrodegreesPerSecond";
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
    get NanoradiansPerSecond() {
        if (this.nanoradianspersecondLazy !== null) {
            return this.nanoradianspersecondLazy;
        }
        return this.nanoradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanoradiansPerSecond);
    }
    get MicroradiansPerSecond() {
        if (this.microradianspersecondLazy !== null) {
            return this.microradianspersecondLazy;
        }
        return this.microradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicroradiansPerSecond);
    }
    get CentiradiansPerSecond() {
        if (this.centiradianspersecondLazy !== null) {
            return this.centiradianspersecondLazy;
        }
        return this.centiradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.CentiradiansPerSecond);
    }
    get DeciradiansPerSecond() {
        if (this.deciradianspersecondLazy !== null) {
            return this.deciradianspersecondLazy;
        }
        return this.deciradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.DeciradiansPerSecond);
    }
    get NanodegreesPerSecond() {
        if (this.nanodegreespersecondLazy !== null) {
            return this.nanodegreespersecondLazy;
        }
        return this.nanodegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanodegreesPerSecond);
    }
    get MicrodegreesPerSecond() {
        if (this.microdegreespersecondLazy !== null) {
            return this.microdegreespersecondLazy;
        }
        return this.microdegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicrodegreesPerSecond);
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
    static FromNanoradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanoradiansPerSecond);
    }
    static FromMicroradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicroradiansPerSecond);
    }
    static FromCentiradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.CentiradiansPerSecond);
    }
    static FromDeciradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DeciradiansPerSecond);
    }
    static FromNanodegreesPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanodegreesPerSecond);
    }
    static FromMicrodegreesPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicrodegreesPerSecond);
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
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return (this.value) / 1e-9;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return (this.value) / 0.000001;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return (this.value) / 0.01;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return (this.value) / 0.1;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return ((180 / Math.PI) * this.value) / 1e-9;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
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
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return (value) * 1e-9;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return (value) * 0.000001;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return (value) * 0.01;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return (value) * 0.1;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return ((Math.PI / 180) * value) * 1e-9;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
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
            case RotationalSpeedUnits.NanoradiansPerSecond:
                return this.NanoradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return this.MicroradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return this.CentiradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return this.DeciradiansPerSecond + ` rad/s`;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return this.NanodegreesPerSecond + ` °/s`;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
                return this.MicrodegreesPerSecond + ` °/s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalSpeed = RotationalSpeed;
//# sourceMappingURL=rotationalspeed.g.js.map