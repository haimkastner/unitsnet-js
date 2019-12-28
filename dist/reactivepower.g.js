"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ReactivePowerUnits enumeration */
var ReactivePowerUnits;
(function (ReactivePowerUnits) {
    /** */
    ReactivePowerUnits[ReactivePowerUnits["VoltamperesReactive"] = 0] = "VoltamperesReactive";
    /** */
    ReactivePowerUnits[ReactivePowerUnits["KilovoltamperesReactive"] = 1] = "KilovoltamperesReactive";
    /** */
    ReactivePowerUnits[ReactivePowerUnits["MegavoltamperesReactive"] = 2] = "MegavoltamperesReactive";
    /** */
    ReactivePowerUnits[ReactivePowerUnits["GigavoltamperesReactive"] = 3] = "GigavoltamperesReactive";
})(ReactivePowerUnits = exports.ReactivePowerUnits || (exports.ReactivePowerUnits = {}));
/** Volt-ampere reactive (var) is a unit by which reactive power is expressed in an AC electric power system. Reactive power exists in an AC circuit when the current and voltage are not in phase. */
class ReactivePower {
    /**
     * Create a new ReactivePower.
     * @param value The value.
     * @param fromUnit The ‘ReactivePower’ unit to create from.
     * The default unit is VoltamperesReactive
     */
    constructor(value, fromUnit = ReactivePowerUnits.VoltamperesReactive) {
        this.voltamperesreactiveLazy = null;
        this.kilovoltamperesreactiveLazy = null;
        this.megavoltamperesreactiveLazy = null;
        this.gigavoltamperesreactiveLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ReactivePower is VoltamperesReactive.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get VoltamperesReactive() {
        if (this.voltamperesreactiveLazy !== null) {
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }
    /** */
    get KilovoltamperesReactive() {
        if (this.kilovoltamperesreactiveLazy !== null) {
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltamperesReactive);
    }
    /** */
    get MegavoltamperesReactive() {
        if (this.megavoltamperesreactiveLazy !== null) {
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltamperesReactive);
    }
    /** */
    get GigavoltamperesReactive() {
        if (this.gigavoltamperesreactiveLazy !== null) {
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltamperesReactive);
    }
    /**
     * Create a new ReactivePower instance from a VoltamperesReactive
     *
     * @param value The unit as VoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromVoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }
    /**
     * Create a new ReactivePower instance from a KilovoltamperesReactive
     *
     * @param value The unit as KilovoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromKilovoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltamperesReactive);
    }
    /**
     * Create a new ReactivePower instance from a MegavoltamperesReactive
     *
     * @param value The unit as MegavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromMegavoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltamperesReactive);
    }
    /**
     * Create a new ReactivePower instance from a GigavoltamperesReactive
     *
     * @param value The unit as GigavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromGigavoltamperesReactive(value) {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltamperesReactive);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (value) * 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (value) * 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ReactivePower to string.
     * Note! the default format for ReactivePower is VoltamperesReactive.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReactivePower.
     * @returns The string format of the ReactivePower.
     */
    toString(toUnit = ReactivePowerUnits.VoltamperesReactive) {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive:
                return this.VoltamperesReactive + ` var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return this.KilovoltamperesReactive + ` `;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return this.MegavoltamperesReactive + ` `;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return this.GigavoltamperesReactive + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ReactivePower are equals to the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns True if the given ReactivePower are equal to the current ReactivePower.
     */
    equals(reactivePower) {
        return this.value === reactivePower.BaseValue;
    }
    /**
     * Compare the given ReactivePower against the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns 0 if they are equal, -1 if the current ReactivePower is less then other, 1 if the current ReactivePower is greater then other.
     */
    compareTo(reactivePower) {
        if (this.value > reactivePower.BaseValue)
            return 1;
        if (this.value < reactivePower.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    add(reactivePower) {
        return new ReactivePower(this.value + reactivePower.BaseValue);
    }
    /**
     * Subtract the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    subtract(reactivePower) {
        return new ReactivePower(this.value - reactivePower.BaseValue);
    }
    /**
     * Multiply the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    multiply(reactivePower) {
        return new ReactivePower(this.value * reactivePower.BaseValue);
    }
    /**
     * Divide the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    divide(reactivePower) {
        return new ReactivePower(this.value / reactivePower.BaseValue);
    }
    /**
     * Modulo the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    modulo(reactivePower) {
        return new ReactivePower(this.value % reactivePower.BaseValue);
    }
    /**
     * Pow the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    pow(reactivePower) {
        return new ReactivePower(this.value ** reactivePower.BaseValue);
    }
}
exports.ReactivePower = ReactivePower;
//# sourceMappingURL=reactivepower.g.js.map