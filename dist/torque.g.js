"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TorqueUnits;
(function (TorqueUnits) {
    TorqueUnits[TorqueUnits["NewtonMillimeters"] = 0] = "NewtonMillimeters";
    TorqueUnits[TorqueUnits["NewtonCentimeters"] = 1] = "NewtonCentimeters";
    TorqueUnits[TorqueUnits["NewtonMeters"] = 2] = "NewtonMeters";
    TorqueUnits[TorqueUnits["PoundForceInches"] = 3] = "PoundForceInches";
    TorqueUnits[TorqueUnits["PoundForceFeet"] = 4] = "PoundForceFeet";
    TorqueUnits[TorqueUnits["KilogramForceMillimeters"] = 5] = "KilogramForceMillimeters";
    TorqueUnits[TorqueUnits["KilogramForceCentimeters"] = 6] = "KilogramForceCentimeters";
    TorqueUnits[TorqueUnits["KilogramForceMeters"] = 7] = "KilogramForceMeters";
    TorqueUnits[TorqueUnits["TonneForceMillimeters"] = 8] = "TonneForceMillimeters";
    TorqueUnits[TorqueUnits["TonneForceCentimeters"] = 9] = "TonneForceCentimeters";
    TorqueUnits[TorqueUnits["TonneForceMeters"] = 10] = "TonneForceMeters";
    TorqueUnits[TorqueUnits["Kilonewtonmillimeters"] = 11] = "Kilonewtonmillimeters";
    TorqueUnits[TorqueUnits["Meganewtonmillimeters"] = 12] = "Meganewtonmillimeters";
    TorqueUnits[TorqueUnits["Kilonewtoncentimeters"] = 13] = "Kilonewtoncentimeters";
    TorqueUnits[TorqueUnits["Meganewtoncentimeters"] = 14] = "Meganewtoncentimeters";
    TorqueUnits[TorqueUnits["Kilonewtonmeters"] = 15] = "Kilonewtonmeters";
    TorqueUnits[TorqueUnits["Meganewtonmeters"] = 16] = "Meganewtonmeters";
    TorqueUnits[TorqueUnits["Kilopoundforceinches"] = 17] = "Kilopoundforceinches";
    TorqueUnits[TorqueUnits["Megapoundforceinches"] = 18] = "Megapoundforceinches";
    TorqueUnits[TorqueUnits["Kilopoundforcefeet"] = 19] = "Kilopoundforcefeet";
    TorqueUnits[TorqueUnits["Megapoundforcefeet"] = 20] = "Megapoundforcefeet";
})(TorqueUnits = exports.TorqueUnits || (exports.TorqueUnits = {}));
class Torque {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMillimeters() {
        return this.convertFromBase(TorqueUnits.NewtonMillimeters);
    }
    get NewtonCentimeters() {
        return this.convertFromBase(TorqueUnits.NewtonCentimeters);
    }
    get NewtonMeters() {
        return this.convertFromBase(TorqueUnits.NewtonMeters);
    }
    get PoundForceInches() {
        return this.convertFromBase(TorqueUnits.PoundForceInches);
    }
    get PoundForceFeet() {
        return this.convertFromBase(TorqueUnits.PoundForceFeet);
    }
    get KilogramForceMillimeters() {
        return this.convertFromBase(TorqueUnits.KilogramForceMillimeters);
    }
    get KilogramForceCentimeters() {
        return this.convertFromBase(TorqueUnits.KilogramForceCentimeters);
    }
    get KilogramForceMeters() {
        return this.convertFromBase(TorqueUnits.KilogramForceMeters);
    }
    get TonneForceMillimeters() {
        return this.convertFromBase(TorqueUnits.TonneForceMillimeters);
    }
    get TonneForceCentimeters() {
        return this.convertFromBase(TorqueUnits.TonneForceCentimeters);
    }
    get TonneForceMeters() {
        return this.convertFromBase(TorqueUnits.TonneForceMeters);
    }
    get Kilonewtonmillimeters() {
        return this.convertFromBase(TorqueUnits.Kilonewtonmillimeters);
    }
    get Meganewtonmillimeters() {
        return this.convertFromBase(TorqueUnits.Meganewtonmillimeters);
    }
    get Kilonewtoncentimeters() {
        return this.convertFromBase(TorqueUnits.Kilonewtoncentimeters);
    }
    get Meganewtoncentimeters() {
        return this.convertFromBase(TorqueUnits.Meganewtoncentimeters);
    }
    get Kilonewtonmeters() {
        return this.convertFromBase(TorqueUnits.Kilonewtonmeters);
    }
    get Meganewtonmeters() {
        return this.convertFromBase(TorqueUnits.Meganewtonmeters);
    }
    get Kilopoundforceinches() {
        return this.convertFromBase(TorqueUnits.Kilopoundforceinches);
    }
    get Megapoundforceinches() {
        return this.convertFromBase(TorqueUnits.Megapoundforceinches);
    }
    get Kilopoundforcefeet() {
        return this.convertFromBase(TorqueUnits.Kilopoundforcefeet);
    }
    get Megapoundforcefeet() {
        return this.convertFromBase(TorqueUnits.Megapoundforcefeet);
    }
    static FromNewtonMillimeters(value) {
        return new Torque(value, TorqueUnits.NewtonMillimeters);
    }
    static FromNewtonCentimeters(value) {
        return new Torque(value, TorqueUnits.NewtonCentimeters);
    }
    static FromNewtonMeters(value) {
        return new Torque(value, TorqueUnits.NewtonMeters);
    }
    static FromPoundForceInches(value) {
        return new Torque(value, TorqueUnits.PoundForceInches);
    }
    static FromPoundForceFeet(value) {
        return new Torque(value, TorqueUnits.PoundForceFeet);
    }
    static FromKilogramForceMillimeters(value) {
        return new Torque(value, TorqueUnits.KilogramForceMillimeters);
    }
    static FromKilogramForceCentimeters(value) {
        return new Torque(value, TorqueUnits.KilogramForceCentimeters);
    }
    static FromKilogramForceMeters(value) {
        return new Torque(value, TorqueUnits.KilogramForceMeters);
    }
    static FromTonneForceMillimeters(value) {
        return new Torque(value, TorqueUnits.TonneForceMillimeters);
    }
    static FromTonneForceCentimeters(value) {
        return new Torque(value, TorqueUnits.TonneForceCentimeters);
    }
    static FromTonneForceMeters(value) {
        return new Torque(value, TorqueUnits.TonneForceMeters);
    }
    static FromKilonewtonmillimeters(value) {
        return new Torque(value, TorqueUnits.Kilonewtonmillimeters);
    }
    static FromMeganewtonmillimeters(value) {
        return new Torque(value, TorqueUnits.Meganewtonmillimeters);
    }
    static FromKilonewtoncentimeters(value) {
        return new Torque(value, TorqueUnits.Kilonewtoncentimeters);
    }
    static FromMeganewtoncentimeters(value) {
        return new Torque(value, TorqueUnits.Meganewtoncentimeters);
    }
    static FromKilonewtonmeters(value) {
        return new Torque(value, TorqueUnits.Kilonewtonmeters);
    }
    static FromMeganewtonmeters(value) {
        return new Torque(value, TorqueUnits.Meganewtonmeters);
    }
    static FromKilopoundforceinches(value) {
        return new Torque(value, TorqueUnits.Kilopoundforceinches);
    }
    static FromMegapoundforceinches(value) {
        return new Torque(value, TorqueUnits.Megapoundforceinches);
    }
    static FromKilopoundforcefeet(value) {
        return new Torque(value, TorqueUnits.Kilopoundforcefeet);
    }
    static FromMegapoundforcefeet(value) {
        return new Torque(value, TorqueUnits.Megapoundforcefeet);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TorqueUnits.NewtonMillimeters:
                return this.value * 1000;
            case TorqueUnits.NewtonCentimeters:
                return this.value * 100;
            case TorqueUnits.NewtonMeters:
                return this.value;
            case TorqueUnits.PoundForceInches:
                return this.value / 1.129848290276167e-1;
            case TorqueUnits.PoundForceFeet:
                return this.value / 1.3558179483314;
            case TorqueUnits.KilogramForceMillimeters:
                return this.value * 101.971619222242;
            case TorqueUnits.KilogramForceCentimeters:
                return this.value * 10.1971619222242;
            case TorqueUnits.KilogramForceMeters:
                return this.value * 0.101971619222242;
            case TorqueUnits.TonneForceMillimeters:
                return this.value * 0.101971619222242;
            case TorqueUnits.TonneForceCentimeters:
                return this.value * 0.0101971619222242;
            case TorqueUnits.TonneForceMeters:
                return this.value * 0.000101971619222242;
            case TorqueUnits.Kilonewtonmillimeters:
                return (this.value * 0.001) * 1000;
            case TorqueUnits.Meganewtonmillimeters:
                return (this.value * 0.001) * 1000000;
            case TorqueUnits.Kilonewtoncentimeters:
                return (this.value * 0.01) * 1000;
            case TorqueUnits.Meganewtoncentimeters:
                return (this.value * 0.01) * 1000000;
            case TorqueUnits.Kilonewtonmeters:
                return (this.value) * 1000;
            case TorqueUnits.Meganewtonmeters:
                return (this.value) * 1000000;
            case TorqueUnits.Kilopoundforceinches:
                return (this.value * 1.129848290276167e-1) * 1000;
            case TorqueUnits.Megapoundforceinches:
                return (this.value * 1.129848290276167e-1) * 1000000;
            case TorqueUnits.Kilopoundforcefeet:
                return (this.value * 1.3558179483314) * 1000;
            case TorqueUnits.Megapoundforcefeet:
                return (this.value * 1.3558179483314) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case TorqueUnits.NewtonMillimeters:
                return value * 0.001;
            case TorqueUnits.NewtonCentimeters:
                return value * 0.01;
            case TorqueUnits.NewtonMeters:
                return value;
            case TorqueUnits.PoundForceInches:
                return value * 1.129848290276167e-1;
            case TorqueUnits.PoundForceFeet:
                return value * 1.3558179483314;
            case TorqueUnits.KilogramForceMillimeters:
                return value * 0.00980665019960652;
            case TorqueUnits.KilogramForceCentimeters:
                return value * 0.0980665019960652;
            case TorqueUnits.KilogramForceMeters:
                return value * 9.80665019960652;
            case TorqueUnits.TonneForceMillimeters:
                return value * 9.80665019960652;
            case TorqueUnits.TonneForceCentimeters:
                return value * 98.0665019960652;
            case TorqueUnits.TonneForceMeters:
                return value * 9806.65019960653;
            case TorqueUnits.Kilonewtonmillimeters:
                return (value * 1000) / 1000;
            case TorqueUnits.Meganewtonmillimeters:
                return (value * 1000) / 1000000;
            case TorqueUnits.Kilonewtoncentimeters:
                return (value * 100) / 1000;
            case TorqueUnits.Meganewtoncentimeters:
                return (value * 100) / 1000000;
            case TorqueUnits.Kilonewtonmeters:
                return (value) / 1000;
            case TorqueUnits.Meganewtonmeters:
                return (value) / 1000000;
            case TorqueUnits.Kilopoundforceinches:
                return (value / 1.129848290276167e-1) / 1000;
            case TorqueUnits.Megapoundforceinches:
                return (value / 1.129848290276167e-1) / 1000000;
            case TorqueUnits.Kilopoundforcefeet:
                return (value / 1.3558179483314) / 1000;
            case TorqueUnits.Megapoundforcefeet:
                return (value / 1.3558179483314) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Torque = Torque;
//# sourceMappingURL=torque.g.js.map