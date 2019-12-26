"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ReactiveEnergyUnits enumeration */
var ReactiveEnergyUnits;
(function (ReactiveEnergyUnits) {
    /** */
    ReactiveEnergyUnits[ReactiveEnergyUnits["VoltampereReactiveHours"] = 0] = "VoltampereReactiveHours";
    /** */
    ReactiveEnergyUnits[ReactiveEnergyUnits["KilovoltampereReactiveHours"] = 1] = "KilovoltampereReactiveHours";
    /** */
    ReactiveEnergyUnits[ReactiveEnergyUnits["MegavoltampereReactiveHours"] = 2] = "MegavoltampereReactiveHours";
})(ReactiveEnergyUnits = exports.ReactiveEnergyUnits || (exports.ReactiveEnergyUnits = {}));
/** The Volt-ampere reactive hour (expressed as varh) is the reactive power of one Volt-ampere reactive produced in one hour. */
class ReactiveEnergy {
    /**
     * Create a new ReactiveEnergy.
     * @param value The value.
     * @param fromUnit The ‘ReactiveEnergy’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.voltamperereactivehoursLazy = null;
        this.kilovoltamperereactivehoursLazy = null;
        this.megavoltamperereactivehoursLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ReactiveEnergy is VoltampereReactiveHour.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get VoltampereReactiveHours() {
        if (this.voltamperereactivehoursLazy !== null) {
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    /** */
    get KilovoltampereReactiveHours() {
        if (this.kilovoltamperereactivehoursLazy !== null) {
            return this.kilovoltamperereactivehoursLazy;
        }
        return this.kilovoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }
    /** */
    get MegavoltampereReactiveHours() {
        if (this.megavoltamperereactivehoursLazy !== null) {
            return this.megavoltamperereactivehoursLazy;
        }
        return this.megavoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }
    /**
     * Create a new ReactiveEnergy instance from a VoltampereReactiveHours
     *
     * @param value The unit as VoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    static FromVoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    /**
     * Create a new ReactiveEnergy instance from a KilovoltampereReactiveHours
     *
     * @param value The unit as KilovoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    static FromKilovoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }
    /**
     * Create a new ReactiveEnergy instance from a MegavoltampereReactiveHours
     *
     * @param value The unit as MegavoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    static FromMegavoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return (this.value) / 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return (value) * 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ReactiveEnergy to string.
     * Note! the default format for ReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReactiveEnergy.
     * @returns The string format of the ReactiveEnergy.
     */
    toString(toUnit = ReactiveEnergyUnits.VoltampereReactiveHours) {
        switch (toUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.VoltampereReactiveHours + ` varh`;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return this.KilovoltampereReactiveHours + ` varh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return this.MegavoltampereReactiveHours + ` varh`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ReactiveEnergy = ReactiveEnergy;
//# sourceMappingURL=reactiveenergy.g.js.map