"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** RatioChangeRateUnits enumeration */
var RatioChangeRateUnits;
(function (RatioChangeRateUnits) {
    /** */
    RatioChangeRateUnits[RatioChangeRateUnits["PercentsPerSecond"] = 0] = "PercentsPerSecond";
    /** */
    RatioChangeRateUnits[RatioChangeRateUnits["DecimalFractionsPerSecond"] = 1] = "DecimalFractionsPerSecond";
})(RatioChangeRateUnits = exports.RatioChangeRateUnits || (exports.RatioChangeRateUnits = {}));
/** The change in ratio per unit of time. */
class RatioChangeRate {
    /**
     * Create a new RatioChangeRate.
     * @param value The value.
     * @param fromUnit The ‘RatioChangeRate’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.percentspersecondLazy = null;
        this.decimalfractionspersecondLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of RatioChangeRate is DecimalFractionPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get PercentsPerSecond() {
        if (this.percentspersecondLazy !== null) {
            return this.percentspersecondLazy;
        }
        return this.percentspersecondLazy = this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }
    /** */
    get DecimalFractionsPerSecond() {
        if (this.decimalfractionspersecondLazy !== null) {
            return this.decimalfractionspersecondLazy;
        }
        return this.decimalfractionspersecondLazy = this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
    }
    /**
     * Create a new RatioChangeRate instance from a PercentsPerSecond
     *
     * @param value The unit as PercentsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    static FromPercentsPerSecond(value) {
        return new RatioChangeRate(value, RatioChangeRateUnits.PercentsPerSecond);
    }
    /**
     * Create a new RatioChangeRate instance from a DecimalFractionsPerSecond
     *
     * @param value The unit as DecimalFractionsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    static FromDecimalFractionsPerSecond(value) {
        return new RatioChangeRate(value, RatioChangeRateUnits.DecimalFractionsPerSecond);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.value / 1e2;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case RatioChangeRateUnits.PercentsPerSecond:
                return value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return value * 1e2;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the RatioChangeRate to string.
     * Note! the default format for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RatioChangeRate.
     * @returns The string format of the RatioChangeRate.
     */
    toString(toUnit = RatioChangeRateUnits.DecimalFractionsPerSecond) {
        switch (toUnit) {
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.PercentsPerSecond + ` %/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.DecimalFractionsPerSecond + ` /s`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.RatioChangeRate = RatioChangeRate;
//# sourceMappingURL=ratiochangerate.g.js.map