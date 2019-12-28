"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ApparentPowerUnits enumeration */
var ApparentPowerUnits;
(function (ApparentPowerUnits) {
    /** */
    ApparentPowerUnits[ApparentPowerUnits["Voltamperes"] = 0] = "Voltamperes";
    /** */
    ApparentPowerUnits[ApparentPowerUnits["Kilovoltamperes"] = 1] = "Kilovoltamperes";
    /** */
    ApparentPowerUnits[ApparentPowerUnits["Megavoltamperes"] = 2] = "Megavoltamperes";
    /** */
    ApparentPowerUnits[ApparentPowerUnits["Gigavoltamperes"] = 3] = "Gigavoltamperes";
})(ApparentPowerUnits = exports.ApparentPowerUnits || (exports.ApparentPowerUnits = {}));
/** Power engineers measure apparent power as the magnitude of the vector sum of active and reactive power. Apparent power is the product of the root-mean-square of voltage and current. */
class ApparentPower {
    /**
     * Create a new ApparentPower.
     * @param value The value.
     * @param fromUnit The ‘ApparentPower’ unit to create from.
     * The default unit is Voltamperes
     */
    constructor(value, fromUnit = ApparentPowerUnits.Voltamperes) {
        this.voltamperesLazy = null;
        this.kilovoltamperesLazy = null;
        this.megavoltamperesLazy = null;
        this.gigavoltamperesLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ApparentPower is Voltamperes.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Voltamperes() {
        if (this.voltamperesLazy !== null) {
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }
    /** */
    get Kilovoltamperes() {
        if (this.kilovoltamperesLazy !== null) {
            return this.kilovoltamperesLazy;
        }
        return this.kilovoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Kilovoltamperes);
    }
    /** */
    get Megavoltamperes() {
        if (this.megavoltamperesLazy !== null) {
            return this.megavoltamperesLazy;
        }
        return this.megavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Megavoltamperes);
    }
    /** */
    get Gigavoltamperes() {
        if (this.gigavoltamperesLazy !== null) {
            return this.gigavoltamperesLazy;
        }
        return this.gigavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Gigavoltamperes);
    }
    /**
     * Create a new ApparentPower instance from a Voltamperes
     *
     * @param value The unit as Voltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromVoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Voltamperes);
    }
    /**
     * Create a new ApparentPower instance from a Kilovoltamperes
     *
     * @param value The unit as Kilovoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromKilovoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Kilovoltamperes);
    }
    /**
     * Create a new ApparentPower instance from a Megavoltamperes
     *
     * @param value The unit as Megavoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromMegavoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Megavoltamperes);
    }
    /**
     * Create a new ApparentPower instance from a Gigavoltamperes
     *
     * @param value The unit as Gigavoltamperes to create a new ApparentPower from.
     * @returns The new ApparentPower instance.
     */
    static FromGigavoltamperes(value) {
        return new ApparentPower(value, ApparentPowerUnits.Gigavoltamperes);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (this.value) / 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (this.value) / 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ApparentPowerUnits.Voltamperes:
                return value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (value) * 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (value) * 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ApparentPower to string.
     * Note! the default format for ApparentPower is Voltamperes.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ApparentPower.
     * @returns The string format of the ApparentPower.
     */
    toString(toUnit = ApparentPowerUnits.Voltamperes) {
        switch (toUnit) {
            case ApparentPowerUnits.Voltamperes:
                return this.Voltamperes + ` VA`;
            case ApparentPowerUnits.Kilovoltamperes:
                return this.Kilovoltamperes + ` `;
            case ApparentPowerUnits.Megavoltamperes:
                return this.Megavoltamperes + ` `;
            case ApparentPowerUnits.Gigavoltamperes:
                return this.Gigavoltamperes + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ApparentPower are equals to the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns True if the given ApparentPower are equal to the current ApparentPower.
     */
    equals(apparentPower) {
        return this.value === apparentPower.BaseValue;
    }
    /**
     * Compare the given ApparentPower against the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns 0 if they are equal, -1 if the current ApparentPower is less then other, 1 if the current ApparentPower is greater then other.
     */
    compareTo(apparentPower) {
        if (this.value > apparentPower.BaseValue)
            return 1;
        if (this.value < apparentPower.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    add(apparentPower) {
        return new ApparentPower(this.value + apparentPower.BaseValue);
    }
    /**
     * Subtract the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    subtract(apparentPower) {
        return new ApparentPower(this.value - apparentPower.BaseValue);
    }
    /**
     * Multiply the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    multiply(apparentPower) {
        return new ApparentPower(this.value * apparentPower.BaseValue);
    }
    /**
     * Divide the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    divide(apparentPower) {
        return new ApparentPower(this.value / apparentPower.BaseValue);
    }
    /**
     * Modulo the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    modulo(apparentPower) {
        return new ApparentPower(this.value % apparentPower.BaseValue);
    }
    /**
     * Pow the given ApparentPower with the current ApparentPower.
     * @param apparentPower The other ApparentPower.
     * @returns A new ApparentPower instance with the results.
     */
    pow(apparentPower) {
        return new ApparentPower(this.value ** apparentPower.BaseValue);
    }
}
exports.ApparentPower = ApparentPower;
//# sourceMappingURL=apparentpower.g.js.map