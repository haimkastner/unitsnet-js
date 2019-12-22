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
        this.value = this.convertToBase(value, fromUnit);
    }
    get RadiansPerSecondSquared() {
        return this.convertFromBase(RotationalAccelerationUnits.RadiansPerSecondSquared);
    }
    get DegreesPerSecondSquared() {
        return this.convertFromBase(RotationalAccelerationUnits.DegreesPerSecondSquared);
    }
    get RevolutionsPerMinutePerSecond() {
        return this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }
    get RevolutionsPerSecondSquared() {
        return this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerSecondSquared);
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
                return (Math.PI / 180) * this.value;
            case RotationalAccelerationUnits.RevolutionsPerMinutePerSecond:
                return ((2 * Math.PI) / 60) * this.value;
            case RotationalAccelerationUnits.RevolutionsPerSecondSquared:
                return (2 * Math.PI) * this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
}
exports.RotationalAcceleration = RotationalAcceleration;
//# sourceMappingURL=rotationalacceleration.g.js.map