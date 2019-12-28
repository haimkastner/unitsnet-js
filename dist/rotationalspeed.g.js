"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** RotationalSpeedUnits enumeration */
var RotationalSpeedUnits;
(function (RotationalSpeedUnits) {
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["RadiansPerSecond"] = 0] = "RadiansPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerSecond"] = 1] = "DegreesPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["DegreesPerMinute"] = 2] = "DegreesPerMinute";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerSecond"] = 3] = "RevolutionsPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["RevolutionsPerMinute"] = 4] = "RevolutionsPerMinute";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["NanoradiansPerSecond"] = 5] = "NanoradiansPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["MicroradiansPerSecond"] = 6] = "MicroradiansPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["CentiradiansPerSecond"] = 7] = "CentiradiansPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["DeciradiansPerSecond"] = 8] = "DeciradiansPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["NanodegreesPerSecond"] = 9] = "NanodegreesPerSecond";
    /** */
    RotationalSpeedUnits[RotationalSpeedUnits["MicrodegreesPerSecond"] = 10] = "MicrodegreesPerSecond";
})(RotationalSpeedUnits = exports.RotationalSpeedUnits || (exports.RotationalSpeedUnits = {}));
/** Rotational speed (sometimes called speed of revolution) is the number of complete rotations, revolutions, cycles, or turns per time unit. Rotational speed is a cyclic frequency, measured in radians per second or in hertz in the SI System by scientists, or in revolutions per minute (rpm or min-1) or revolutions per second in everyday life. The symbol for rotational speed is ω (the Greek lowercase letter "omega"). */
class RotationalSpeed {
    /**
     * Create a new RotationalSpeed.
     * @param value The value.
     * @param fromUnit The ‘RotationalSpeed’ unit to create from.
     * The default unit is RadiansPerSecond
     */
    constructor(value, fromUnit = RotationalSpeedUnits.RadiansPerSecond) {
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
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of RotationalSpeed is RadiansPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get RadiansPerSecond() {
        if (this.radianspersecondLazy !== null) {
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RadiansPerSecond);
    }
    /** */
    get DegreesPerSecond() {
        if (this.degreespersecondLazy !== null) {
            return this.degreespersecondLazy;
        }
        return this.degreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerSecond);
    }
    /** */
    get DegreesPerMinute() {
        if (this.degreesperminuteLazy !== null) {
            return this.degreesperminuteLazy;
        }
        return this.degreesperminuteLazy = this.convertFromBase(RotationalSpeedUnits.DegreesPerMinute);
    }
    /** */
    get RevolutionsPerSecond() {
        if (this.revolutionspersecondLazy !== null) {
            return this.revolutionspersecondLazy;
        }
        return this.revolutionspersecondLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerSecond);
    }
    /** */
    get RevolutionsPerMinute() {
        if (this.revolutionsperminuteLazy !== null) {
            return this.revolutionsperminuteLazy;
        }
        return this.revolutionsperminuteLazy = this.convertFromBase(RotationalSpeedUnits.RevolutionsPerMinute);
    }
    /** */
    get NanoradiansPerSecond() {
        if (this.nanoradianspersecondLazy !== null) {
            return this.nanoradianspersecondLazy;
        }
        return this.nanoradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanoradiansPerSecond);
    }
    /** */
    get MicroradiansPerSecond() {
        if (this.microradianspersecondLazy !== null) {
            return this.microradianspersecondLazy;
        }
        return this.microradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicroradiansPerSecond);
    }
    /** */
    get CentiradiansPerSecond() {
        if (this.centiradianspersecondLazy !== null) {
            return this.centiradianspersecondLazy;
        }
        return this.centiradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.CentiradiansPerSecond);
    }
    /** */
    get DeciradiansPerSecond() {
        if (this.deciradianspersecondLazy !== null) {
            return this.deciradianspersecondLazy;
        }
        return this.deciradianspersecondLazy = this.convertFromBase(RotationalSpeedUnits.DeciradiansPerSecond);
    }
    /** */
    get NanodegreesPerSecond() {
        if (this.nanodegreespersecondLazy !== null) {
            return this.nanodegreespersecondLazy;
        }
        return this.nanodegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.NanodegreesPerSecond);
    }
    /** */
    get MicrodegreesPerSecond() {
        if (this.microdegreespersecondLazy !== null) {
            return this.microdegreespersecondLazy;
        }
        return this.microdegreespersecondLazy = this.convertFromBase(RotationalSpeedUnits.MicrodegreesPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a RadiansPerSecond
     *
     * @param value The unit as RadiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromRadiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.RadiansPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a DegreesPerSecond
     *
     * @param value The unit as DegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromDegreesPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a DegreesPerMinute
     *
     * @param value The unit as DegreesPerMinute to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromDegreesPerMinute(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DegreesPerMinute);
    }
    /**
     * Create a new RotationalSpeed instance from a RevolutionsPerSecond
     *
     * @param value The unit as RevolutionsPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromRevolutionsPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a RevolutionsPerMinute
     *
     * @param value The unit as RevolutionsPerMinute to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromRevolutionsPerMinute(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.RevolutionsPerMinute);
    }
    /**
     * Create a new RotationalSpeed instance from a NanoradiansPerSecond
     *
     * @param value The unit as NanoradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromNanoradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanoradiansPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a MicroradiansPerSecond
     *
     * @param value The unit as MicroradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromMicroradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.MicroradiansPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a CentiradiansPerSecond
     *
     * @param value The unit as CentiradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromCentiradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.CentiradiansPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a DeciradiansPerSecond
     *
     * @param value The unit as DeciradiansPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromDeciradiansPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.DeciradiansPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a NanodegreesPerSecond
     *
     * @param value The unit as NanodegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
    static FromNanodegreesPerSecond(value) {
        return new RotationalSpeed(value, RotationalSpeedUnits.NanodegreesPerSecond);
    }
    /**
     * Create a new RotationalSpeed instance from a MicrodegreesPerSecond
     *
     * @param value The unit as MicrodegreesPerSecond to create a new RotationalSpeed from.
     * @returns The new RotationalSpeed instance.
     */
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
    /**
     * Format the RotationalSpeed to string.
     * Note! the default format for RotationalSpeed is RadiansPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RotationalSpeed.
     * @returns The string format of the RotationalSpeed.
     */
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
                return this.NanoradiansPerSecond + ` `;
            case RotationalSpeedUnits.MicroradiansPerSecond:
                return this.MicroradiansPerSecond + ` `;
            case RotationalSpeedUnits.CentiradiansPerSecond:
                return this.CentiradiansPerSecond + ` `;
            case RotationalSpeedUnits.DeciradiansPerSecond:
                return this.DeciradiansPerSecond + ` `;
            case RotationalSpeedUnits.NanodegreesPerSecond:
                return this.NanodegreesPerSecond + ` `;
            case RotationalSpeedUnits.MicrodegreesPerSecond:
                return this.MicrodegreesPerSecond + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given RotationalSpeed are equals to the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns True if the given RotationalSpeed are equal to the current RotationalSpeed.
     */
    equals(rotationalSpeed) {
        return this.value === rotationalSpeed.BaseValue;
    }
    /**
     * Compare the given RotationalSpeed against the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns 0 if they are equal, -1 if the current RotationalSpeed is less then other, 1 if the current RotationalSpeed is greater then other.
     */
    compareTo(rotationalSpeed) {
        if (this.value > rotationalSpeed.BaseValue)
            return 1;
        if (this.value < rotationalSpeed.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    add(rotationalSpeed) {
        return new RotationalSpeed(this.value + rotationalSpeed.BaseValue);
    }
    /**
     * Subtract the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    subtract(rotationalSpeed) {
        return new RotationalSpeed(this.value - rotationalSpeed.BaseValue);
    }
    /**
     * Multiply the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    multiply(rotationalSpeed) {
        return new RotationalSpeed(this.value * rotationalSpeed.BaseValue);
    }
    /**
     * Divide the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    divide(rotationalSpeed) {
        return new RotationalSpeed(this.value / rotationalSpeed.BaseValue);
    }
    /**
     * Modulo the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    modulo(rotationalSpeed) {
        return new RotationalSpeed(this.value % rotationalSpeed.BaseValue);
    }
    /**
     * Pow the given RotationalSpeed with the current RotationalSpeed.
     * @param rotationalSpeed The other RotationalSpeed.
     * @returns A new RotationalSpeed instance with the results.
     */
    pow(rotationalSpeed) {
        return new RotationalSpeed(this.value ** rotationalSpeed.BaseValue);
    }
}
exports.RotationalSpeed = RotationalSpeed;
//# sourceMappingURL=rotationalspeed.g.js.map