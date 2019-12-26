"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** RotationalAccelerationUnits enumeration */
var RotationalAccelerationUnits;
(function (RotationalAccelerationUnits) {
    /** */
    RotationalAccelerationUnits[RotationalAccelerationUnits["RadiansPerSecondSquared"] = 0] = "RadiansPerSecondSquared";
    /** */
    RotationalAccelerationUnits[RotationalAccelerationUnits["DegreesPerSecondSquared"] = 1] = "DegreesPerSecondSquared";
    /** */
    RotationalAccelerationUnits[RotationalAccelerationUnits["RevolutionsPerMinutePerSecond"] = 2] = "RevolutionsPerMinutePerSecond";
    /** */
    RotationalAccelerationUnits[RotationalAccelerationUnits["RevolutionsPerSecondSquared"] = 3] = "RevolutionsPerSecondSquared";
})(RotationalAccelerationUnits = exports.RotationalAccelerationUnits || (exports.RotationalAccelerationUnits = {}));
/** Angular acceleration is the rate of change of rotational speed. */
class RotationalAcceleration {
    /**
     * Create a new RotationalAcceleration.
     * @param value The value.
     * @param fromUnit The ‘RotationalAcceleration’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.radianspersecondsquaredLazy = null;
        this.degreespersecondsquaredLazy = null;
        this.revolutionsperminutepersecondLazy = null;
        this.revolutionspersecondsquaredLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of RotationalAcceleration is RadianPerSecondSquared.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get RadiansPerSecondSquared() {
        if (this.radianspersecondsquaredLazy !== null) {
            return this.radianspersecondsquaredLazy;
        }
        return this.radianspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RadiansPerSecondSquared);
    }
    /** */
    get DegreesPerSecondSquared() {
        if (this.degreespersecondsquaredLazy !== null) {
            return this.degreespersecondsquaredLazy;
        }
        return this.degreespersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.DegreesPerSecondSquared);
    }
    /** */
    get RevolutionsPerMinutePerSecond() {
        if (this.revolutionsperminutepersecondLazy !== null) {
            return this.revolutionsperminutepersecondLazy;
        }
        return this.revolutionsperminutepersecondLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }
    /** */
    get RevolutionsPerSecondSquared() {
        if (this.revolutionspersecondsquaredLazy !== null) {
            return this.revolutionspersecondsquaredLazy;
        }
        return this.revolutionspersecondsquaredLazy = this.convertFromBase(RotationalAccelerationUnits.RevolutionsPerSecondSquared);
    }
    /**
     * Create a new RotationalAcceleration instance from a RadiansPerSecondSquared
     *
     * @param value The unit as RadiansPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromRadiansPerSecondSquared(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RadiansPerSecondSquared);
    }
    /**
     * Create a new RotationalAcceleration instance from a DegreesPerSecondSquared
     *
     * @param value The unit as DegreesPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromDegreesPerSecondSquared(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.DegreesPerSecondSquared);
    }
    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerMinutePerSecond
     *
     * @param value The unit as RevolutionsPerMinutePerSecond to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
    static FromRevolutionsPerMinutePerSecond(value) {
        return new RotationalAcceleration(value, RotationalAccelerationUnits.RevolutionsPerMinutePerSecond);
    }
    /**
     * Create a new RotationalAcceleration instance from a RevolutionsPerSecondSquared
     *
     * @param value The unit as RevolutionsPerSecondSquared to create a new RotationalAcceleration from.
     * @returns The new RotationalAcceleration instance.
     */
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
    /**
     * Format the RotationalAcceleration to string.
     * Note! the default format for RotationalAcceleration is RadiansPerSecondSquared.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalAcceleration.
     * @returns The string format of the RotationalAcceleration.
     */
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