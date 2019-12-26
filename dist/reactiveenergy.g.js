"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactiveEnergyUnits;
(function (ReactiveEnergyUnits) {
    ReactiveEnergyUnits[ReactiveEnergyUnits["VoltampereReactiveHours"] = 0] = "VoltampereReactiveHours";
    ReactiveEnergyUnits[ReactiveEnergyUnits["KilovoltampereReactiveHour"] = 1] = "KilovoltampereReactiveHour";
    ReactiveEnergyUnits[ReactiveEnergyUnits["MegavoltampereReactiveHour"] = 2] = "MegavoltampereReactiveHour";
})(ReactiveEnergyUnits = exports.ReactiveEnergyUnits || (exports.ReactiveEnergyUnits = {}));
class ReactiveEnergy {
    constructor(value, fromUnit) {
        this.voltamperereactivehoursLazy = null;
        this.kilovoltamperereactivehourLazy = null;
        this.megavoltamperereactivehourLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltampereReactiveHours() {
        if (this.voltamperereactivehoursLazy !== null) {
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    get KilovoltampereReactiveHour() {
        if (this.kilovoltamperereactivehourLazy !== null) {
            return this.kilovoltamperereactivehourLazy;
        }
        return this.kilovoltamperereactivehourLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHour);
    }
    get MegavoltampereReactiveHour() {
        if (this.megavoltamperereactivehourLazy !== null) {
            return this.megavoltamperereactivehourLazy;
        }
        return this.megavoltamperereactivehourLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHour);
    }
    static FromVoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    static FromKilovoltampereReactiveHour(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHour);
    }
    static FromMegavoltampereReactiveHour(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.MegavoltampereReactiveHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHour:
                return (this.value) / 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHour:
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
            case ReactiveEnergyUnits.KilovoltampereReactiveHour:
                return (value) * 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHour:
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
            case ReactiveEnergyUnits.KilovoltampereReactiveHour:
                return this.KilovoltampereReactiveHour + ` varh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHour:
                return this.MegavoltampereReactiveHour + ` varh`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ReactiveEnergy = ReactiveEnergy;
//# sourceMappingURL=reactiveenergy.g.js.map