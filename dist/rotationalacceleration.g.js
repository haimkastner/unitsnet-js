"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RotationalAccelerationUnits;
(function (RotationalAccelerationUnits) {
    RotationalAccelerationUnits[RotationalAccelerationUnits["RadiansPerSecondSquared"] = 0] = "RadiansPerSecondSquared";
    RotationalAccelerationUnits[RotationalAccelerationUnits["DegreesPerSecondSquared"] = 1] = "DegreesPerSecondSquared";
    RotationalAccelerationUnits[RotationalAccelerationUnits["RevolutionsPerMinutePerSecond"] = 2] = "RevolutionsPerMinutePerSecond";
    RotationalAccelerationUnits[RotationalAccelerationUnits["RevolutionsPerSecondSquared"] = 3] = "RevolutionsPerSecondSquared";
})(RotationalAccelerationUnits = exports.RotationalAccelerationUnits || (exports.RotationalAccelerationUnits = {}));
class RotationalAcceleration {
    constructor(value, fromUnit) {
        this.radianspersecondsquaredLazy = null;
        this.degreespersecondsquaredLazy = null;
        this.revolutionsperminutepersecondLazy = null;
        this.revolutionspersecondsquaredLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get RadiansPerSecondSquared() {
        if (this.radianspersecondsquaredLazy !== null) {
            return this.radianspersecondsquaredLazy;
        }
        return this.radianspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RadiansPerSecondSquared);
    }
    get DegreesPerSecondSquared() {
        if (this.degreespersecondsquaredLazy !== null) {
            return this.degreespersecondsquaredLazy;
        }
        return this.degreespersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.DegreesPerSecondSquared);
    }
    get RevolutionsPerMinutePerSecond() {
        if (this.revolutionsperminutepersecondLazy !== null) {
            return this.revolutionsperminutepersecondLazy;
        }
        return this.revolutionsperminutepersecondLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }
    get RevolutionsPerSecondSquared() {
        if (this.revolutionspersecondsquaredLazy !== null) {
            return this.revolutionspersecondsquaredLazy;
        }
        return this.revolutionspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }
    static FromRadiansPerSecondSquared(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RadiansPerSecondSquared);
    }
    static FromDegreesPerSecondSquared(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.DegreesPerSecondSquared);
    }
    static FromRevolutionsPerMinutePerSecond(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }
    static FromRevolutionsPerSecondSquared(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
                return this.value;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
                return (180 / Math.PI) * this.value;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return (60 / (2 * Math.PI)) * this.value;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return (1 / (2 * Math.PI)) * this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
                return value;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
                return (Math.PI / 180) * value;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return ((2 * Math.PI) / 60) * value;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return (2 * Math.PI) * value;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = RotationalAccelerationUnits.RadiansPerSecondSquared) {
        switch (toUnit) {
            case RotationalAccelerationUnits.RadiansPerSecondSquared:
                return this.RadiansPerSecondSquared + ` rad/s²`;
            case RotationalAccelerationUnits.DegreesPerSecondSquared:
                return this.DegreesPerSecondSquared + ` °/s²`;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return this.RevolutionsPerMinutePerSecond + ` rpm/s`;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return this.RevolutionsPerSecondSquared + ` r/s²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RotationalAcceleration = RotationalAcceleration;
//# sourceMappingURL=rotationalacceleration.g.js.map