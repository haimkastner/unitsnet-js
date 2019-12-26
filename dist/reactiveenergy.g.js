"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactiveEnergyUnits;
(function (ReactiveEnergyUnits) {
    ReactiveEnergyUnits[ReactiveEnergyUnits["VoltampereReactiveHours"] = 0] = "VoltampereReactiveHours";
    ReactiveEnergyUnits[ReactiveEnergyUnits["KilovoltampereReactiveHours"] = 1] = "KilovoltampereReactiveHours";
    ReactiveEnergyUnits[ReactiveEnergyUnits["MegavoltampereReactiveHours"] = 2] = "MegavoltampereReactiveHours";
})(ReactiveEnergyUnits = exports.ReactiveEnergyUnits || (exports.ReactiveEnergyUnits = {}));
class ReactiveEnergy {
    constructor(value, fromUnit) {
        this.voltamperereactivehoursLazy = null;
        this.kilovoltamperereactivehoursLazy = null;
        this.megavoltamperereactivehoursLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltampereReactiveHours() {
        if (this.voltamperereactivehoursLazy !== null) {
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    get KilovoltampereReactiveHours() {
        if (this.kilovoltamperereactivehoursLazy !== null) {
            return this.kilovoltamperereactivehoursLazy;
        }
        return this.kilovoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }
    get MegavoltampereReactiveHours() {
        if (this.megavoltamperereactivehoursLazy !== null) {
            return this.megavoltamperereactivehoursLazy;
        }
        return this.megavoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }
    static FromVoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    static FromKilovoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }
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