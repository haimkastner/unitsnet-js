"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactiveEnergyUnits;
(function (ReactiveEnergyUnits) {
    ReactiveEnergyUnits[ReactiveEnergyUnits["VoltampereReactiveHours"] = 0] = "VoltampereReactiveHours";
    ReactiveEnergyUnits[ReactiveEnergyUnits["Kilovoltamperereactivehours"] = 1] = "Kilovoltamperereactivehours";
    ReactiveEnergyUnits[ReactiveEnergyUnits["Megavoltamperereactivehours"] = 2] = "Megavoltamperereactivehours";
})(ReactiveEnergyUnits = exports.ReactiveEnergyUnits || (exports.ReactiveEnergyUnits = {}));
class ReactiveEnergy {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltampereReactiveHours() {
        return this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    get Kilovoltamperereactivehours() {
        return this.convertFromBase(ReactiveEnergyUnits.Kilovoltamperereactivehours);
    }
    get Megavoltamperereactivehours() {
        return this.convertFromBase(ReactiveEnergyUnits.Megavoltamperereactivehours);
    }
    static FromVoltampereReactiveHours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }
    static FromKilovoltamperereactivehours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.Kilovoltamperereactivehours);
    }
    static FromMegavoltamperereactivehours(value) {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.Megavoltamperereactivehours);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.value;
            case ReactiveEnergyUnits.Kilovoltamperereactivehours:
                return (this.value) / 1000;
            case ReactiveEnergyUnits.Megavoltamperereactivehours:
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
            case ReactiveEnergyUnits.Kilovoltamperereactivehours:
                return (value) * 1000;
            case ReactiveEnergyUnits.Megavoltamperereactivehours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ReactiveEnergy = ReactiveEnergy;
//# sourceMappingURL=reactiveenergy.g.js.map