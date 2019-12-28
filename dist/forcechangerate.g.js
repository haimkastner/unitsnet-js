"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ForceChangeRateUnits enumeration */
var ForceChangeRateUnits;
(function (ForceChangeRateUnits) {
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerMinute"] = 0] = "NewtonsPerMinute";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["NewtonsPerSecond"] = 1] = "NewtonsPerSecond";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["DecanewtonsPerMinute"] = 2] = "DecanewtonsPerMinute";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["KilonewtonsPerMinute"] = 3] = "KilonewtonsPerMinute";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["NanonewtonsPerSecond"] = 4] = "NanonewtonsPerSecond";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["MicronewtonsPerSecond"] = 5] = "MicronewtonsPerSecond";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["CentinewtonsPerSecond"] = 6] = "CentinewtonsPerSecond";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["DecinewtonsPerSecond"] = 7] = "DecinewtonsPerSecond";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["DecanewtonsPerSecond"] = 8] = "DecanewtonsPerSecond";
    /** */
    ForceChangeRateUnits[ForceChangeRateUnits["KilonewtonsPerSecond"] = 9] = "KilonewtonsPerSecond";
})(ForceChangeRateUnits = exports.ForceChangeRateUnits || (exports.ForceChangeRateUnits = {}));
/** Force change rate is the ratio of the force change to the time during which the change occurred (value of force changes per unit time). */
class ForceChangeRate {
    /**
     * Create a new ForceChangeRate.
     * @param value The value.
     * @param fromUnit The ‘ForceChangeRate’ unit to create from.
     * The default unit is NewtonsPerSecond
     */
    constructor(value, fromUnit = ForceChangeRateUnits.NewtonsPerSecond) {
        this.newtonsperminuteLazy = null;
        this.newtonspersecondLazy = null;
        this.decanewtonsperminuteLazy = null;
        this.kilonewtonsperminuteLazy = null;
        this.nanonewtonspersecondLazy = null;
        this.micronewtonspersecondLazy = null;
        this.centinewtonspersecondLazy = null;
        this.decinewtonspersecondLazy = null;
        this.decanewtonspersecondLazy = null;
        this.kilonewtonspersecondLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ForceChangeRate is NewtonsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonsPerMinute() {
        if (this.newtonsperminuteLazy !== null) {
            return this.newtonsperminuteLazy;
        }
        return this.newtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }
    /** */
    get NewtonsPerSecond() {
        if (this.newtonspersecondLazy !== null) {
            return this.newtonspersecondLazy;
        }
        return this.newtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }
    /** */
    get DecanewtonsPerMinute() {
        if (this.decanewtonsperminuteLazy !== null) {
            return this.decanewtonsperminuteLazy;
        }
        return this.decanewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonsPerMinute);
    }
    /** */
    get KilonewtonsPerMinute() {
        if (this.kilonewtonsperminuteLazy !== null) {
            return this.kilonewtonsperminuteLazy;
        }
        return this.kilonewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonsPerMinute);
    }
    /** */
    get NanonewtonsPerSecond() {
        if (this.nanonewtonspersecondLazy !== null) {
            return this.nanonewtonspersecondLazy;
        }
        return this.nanonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NanonewtonsPerSecond);
    }
    /** */
    get MicronewtonsPerSecond() {
        if (this.micronewtonspersecondLazy !== null) {
            return this.micronewtonspersecondLazy;
        }
        return this.micronewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.MicronewtonsPerSecond);
    }
    /** */
    get CentinewtonsPerSecond() {
        if (this.centinewtonspersecondLazy !== null) {
            return this.centinewtonspersecondLazy;
        }
        return this.centinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.CentinewtonsPerSecond);
    }
    /** */
    get DecinewtonsPerSecond() {
        if (this.decinewtonspersecondLazy !== null) {
            return this.decinewtonspersecondLazy;
        }
        return this.decinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecinewtonsPerSecond);
    }
    /** */
    get DecanewtonsPerSecond() {
        if (this.decanewtonspersecondLazy !== null) {
            return this.decanewtonspersecondLazy;
        }
        return this.decanewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonsPerSecond);
    }
    /** */
    get KilonewtonsPerSecond() {
        if (this.kilonewtonspersecondLazy !== null) {
            return this.kilonewtonspersecondLazy;
        }
        return this.kilonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a NewtonsPerMinute
     *
     * @param value The unit as NewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromNewtonsPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }
    /**
     * Create a new ForceChangeRate instance from a NewtonsPerSecond
     *
     * @param value The unit as NewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromNewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerMinute
     *
     * @param value The unit as DecanewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromDecanewtonsPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonsPerMinute);
    }
    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerMinute
     *
     * @param value The unit as KilonewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromKilonewtonsPerMinute(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonsPerMinute);
    }
    /**
     * Create a new ForceChangeRate instance from a NanonewtonsPerSecond
     *
     * @param value The unit as NanonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromNanonewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.NanonewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a MicronewtonsPerSecond
     *
     * @param value The unit as MicronewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromMicronewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.MicronewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a CentinewtonsPerSecond
     *
     * @param value The unit as CentinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromCentinewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.CentinewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a DecinewtonsPerSecond
     *
     * @param value The unit as DecinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromDecinewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecinewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerSecond
     *
     * @param value The unit as DecanewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromDecanewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonsPerSecond);
    }
    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerSecond
     *
     * @param value The unit as KilonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    static FromKilonewtonsPerSecond(value) {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonsPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value * 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return (this.value * 60) / 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return (this.value * 60) / 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return value / 60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return value;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return (value / 60) * 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return (value / 60) * 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return (value) * 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ForceChangeRate to string.
     * Note! the default format for ForceChangeRate is NewtonsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForceChangeRate.
     * @returns The string format of the ForceChangeRate.
     */
    toString(toUnit = ForceChangeRateUnits.NewtonsPerSecond) {
        switch (toUnit) {
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.NewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.NewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return this.DecanewtonsPerMinute + ` `;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return this.KilonewtonsPerMinute + ` `;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return this.NanonewtonsPerSecond + ` `;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return this.MicronewtonsPerSecond + ` `;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return this.CentinewtonsPerSecond + ` `;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return this.DecinewtonsPerSecond + ` `;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return this.DecanewtonsPerSecond + ` `;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return this.KilonewtonsPerSecond + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ForceChangeRate are equals to the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns True if the given ForceChangeRate are equal to the current ForceChangeRate.
     */
    equals(forceChangeRate) {
        return this.value === forceChangeRate.BaseValue;
    }
    /**
     * Compare the given ForceChangeRate against the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns 0 if they are equal, -1 if the current ForceChangeRate is less then other, 1 if the current ForceChangeRate is greater then other.
     */
    compareTo(forceChangeRate) {
        if (this.value > forceChangeRate.BaseValue)
            return 1;
        if (this.value < forceChangeRate.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    add(forceChangeRate) {
        return new ForceChangeRate(this.value + forceChangeRate.BaseValue);
    }
    /**
     * Subtract the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    subtract(forceChangeRate) {
        return new ForceChangeRate(this.value - forceChangeRate.BaseValue);
    }
    /**
     * Multiply the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    multiply(forceChangeRate) {
        return new ForceChangeRate(this.value * forceChangeRate.BaseValue);
    }
    /**
     * Divide the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    divide(forceChangeRate) {
        return new ForceChangeRate(this.value / forceChangeRate.BaseValue);
    }
    /**
     * Modulo the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    modulo(forceChangeRate) {
        return new ForceChangeRate(this.value % forceChangeRate.BaseValue);
    }
    /**
     * Pow the given ForceChangeRate with the current ForceChangeRate.
     * @param forceChangeRate The other ForceChangeRate.
     * @returns A new ForceChangeRate instance with the results.
     */
    pow(forceChangeRate) {
        return new ForceChangeRate(this.value ** forceChangeRate.BaseValue);
    }
}
exports.ForceChangeRate = ForceChangeRate;
//# sourceMappingURL=forcechangerate.g.js.map