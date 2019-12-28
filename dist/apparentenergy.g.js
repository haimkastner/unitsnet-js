"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ApparentEnergyUnits enumeration */
var ApparentEnergyUnits;
(function (ApparentEnergyUnits) {
    /** */
    ApparentEnergyUnits[ApparentEnergyUnits["VoltampereHours"] = 0] = "VoltampereHours";
    /** */
    ApparentEnergyUnits[ApparentEnergyUnits["KilovoltampereHours"] = 1] = "KilovoltampereHours";
    /** */
    ApparentEnergyUnits[ApparentEnergyUnits["MegavoltampereHours"] = 2] = "MegavoltampereHours";
})(ApparentEnergyUnits = exports.ApparentEnergyUnits || (exports.ApparentEnergyUnits = {}));
/** A unit for expressing the integral of apparent power over time, equal to the product of 1 volt-ampere and 1 hour, or to 3600 joules. */
class ApparentEnergy {
    /**
     * Create a new ApparentEnergy.
     * @param value The value.
     * @param fromUnit The ‘ApparentEnergy’ unit to create from.
     * The default unit is VoltampereHours
     */
    constructor(value, fromUnit = ApparentEnergyUnits.VoltampereHours) {
        this.voltamperehoursLazy = null;
        this.kilovoltamperehoursLazy = null;
        this.megavoltamperehoursLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ApparentEnergy is VoltampereHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get VoltampereHours() {
        if (this.voltamperehoursLazy !== null) {
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }
    /** */
    get KilovoltampereHours() {
        if (this.kilovoltamperehoursLazy !== null) {
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHours);
    }
    /** */
    get MegavoltampereHours() {
        if (this.megavoltamperehoursLazy !== null) {
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHours);
    }
    /**
     * Create a new ApparentEnergy instance from a VoltampereHours
     *
     * @param value The unit as VoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    static FromVoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }
    /**
     * Create a new ApparentEnergy instance from a KilovoltampereHours
     *
     * @param value The unit as KilovoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    static FromKilovoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHours);
    }
    /**
     * Create a new ApparentEnergy instance from a MegavoltampereHours
     *
     * @param value The unit as MegavoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    static FromMegavoltampereHours(value) {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ApparentEnergy to string.
     * Note! the default format for ApparentEnergy is VoltampereHours.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ApparentEnergy.
     * @returns The string format of the ApparentEnergy.
     */
    toString(toUnit = ApparentEnergyUnits.VoltampereHours) {
        switch (toUnit) {
            case ApparentEnergyUnits.VoltampereHours:
                return this.VoltampereHours + ` VAh`;
            case ApparentEnergyUnits.KilovoltampereHours:
                return this.KilovoltampereHours + ` `;
            case ApparentEnergyUnits.MegavoltampereHours:
                return this.MegavoltampereHours + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ApparentEnergy are equals to the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns True if the given ApparentEnergy are equal to the current ApparentEnergy.
     */
    equals(apparentEnergy) {
        return this.value === apparentEnergy.BaseValue;
    }
    /**
     * Compare the given ApparentEnergy against the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns 0 if they are equal, -1 if the current ApparentEnergy is less then other, 1 if the current ApparentEnergy is greater then other.
     */
    compareTo(apparentEnergy) {
        if (this.value > apparentEnergy.BaseValue)
            return 1;
        if (this.value < apparentEnergy.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    add(apparentEnergy) {
        return new ApparentEnergy(this.value + apparentEnergy.BaseValue);
    }
    /**
     * Subtract the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    subtract(apparentEnergy) {
        return new ApparentEnergy(this.value - apparentEnergy.BaseValue);
    }
    /**
     * Multiply the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    multiply(apparentEnergy) {
        return new ApparentEnergy(this.value * apparentEnergy.BaseValue);
    }
    /**
     * Divide the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    divide(apparentEnergy) {
        return new ApparentEnergy(this.value / apparentEnergy.BaseValue);
    }
    /**
     * Modulo the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    modulo(apparentEnergy) {
        return new ApparentEnergy(this.value % apparentEnergy.BaseValue);
    }
    /**
     * Pow the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    pow(apparentEnergy) {
        return new ApparentEnergy(this.value ** apparentEnergy.BaseValue);
    }
}
exports.ApparentEnergy = ApparentEnergy;
//# sourceMappingURL=apparentenergy.g.js.map