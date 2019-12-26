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
        this.newtonmillimetersLazy = null;
        this.newtoncentimetersLazy = null;
        this.newtonmetersLazy = null;
        this.poundforceinchesLazy = null;
        this.poundforcefeetLazy = null;
        this.kilogramforcemillimetersLazy = null;
        this.kilogramforcecentimetersLazy = null;
        this.kilogramforcemetersLazy = null;
        this.tonneforcemillimetersLazy = null;
        this.tonneforcecentimetersLazy = null;
        this.tonneforcemetersLazy = null;
        this.kilonewtonmillimetersLazy = null;
        this.meganewtonmillimetersLazy = null;
        this.kilonewtoncentimetersLazy = null;
        this.meganewtoncentimetersLazy = null;
        this.kilonewtonmetersLazy = null;
        this.meganewtonmetersLazy = null;
        this.kilopoundforceinchesLazy = null;
        this.megapoundforceinchesLazy = null;
        this.kilopoundforcefeetLazy = null;
        this.megapoundforcefeetLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMillimeters() {
        if (this.newtonmillimetersLazy !== null) {
            return this.newtonmillimetersLazy;
        }
        return this.newtonmillimetersLazy = this.convertFromBase(TorqueUnits.NewtonMillimeters);
    }
    get NewtonCentimeters() {
        if (this.newtoncentimetersLazy !== null) {
            return this.newtoncentimetersLazy;
        }
        return this.newtoncentimetersLazy = this.convertFromBase(TorqueUnits.NewtonCentimeters);
    }
    get NewtonMeters() {
        if (this.newtonmetersLazy !== null) {
            return this.newtonmetersLazy;
        }
        return this.newtonmetersLazy = this.convertFromBase(TorqueUnits.NewtonMeters);
    }
    get PoundForceInches() {
        if (this.poundforceinchesLazy !== null) {
            return this.poundforceinchesLazy;
        }
        return this.poundforceinchesLazy = this.convertFromBase(TorqueUnits.PoundForceInches);
    }
    get PoundForceFeet() {
        if (this.poundforcefeetLazy !== null) {
            return this.poundforcefeetLazy;
        }
        return this.poundforcefeetLazy = this.convertFromBase(TorqueUnits.PoundForceFeet);
    }
    get KilogramForceMillimeters() {
        if (this.kilogramforcemillimetersLazy !== null) {
            return this.kilogramforcemillimetersLazy;
        }
        return this.kilogramforcemillimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMillimeters);
    }
    get KilogramForceCentimeters() {
        if (this.kilogramforcecentimetersLazy !== null) {
            return this.kilogramforcecentimetersLazy;
        }
        return this.kilogramforcecentimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceCentimeters);
    }
    get KilogramForceMeters() {
        if (this.kilogramforcemetersLazy !== null) {
            return this.kilogramforcemetersLazy;
        }
        return this.kilogramforcemetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMeters);
    }
    get TonneForceMillimeters() {
        if (this.tonneforcemillimetersLazy !== null) {
            return this.tonneforcemillimetersLazy;
        }
        return this.tonneforcemillimetersLazy = this.convertFromBase(TorqueUnits.TonneForceMillimeters);
    }
    get TonneForceCentimeters() {
        if (this.tonneforcecentimetersLazy !== null) {
            return this.tonneforcecentimetersLazy;
        }
        return this.tonneforcecentimetersLazy = this.convertFromBase(TorqueUnits.TonneForceCentimeters);
    }
    get TonneForceMeters() {
        if (this.tonneforcemetersLazy !== null) {
            return this.tonneforcemetersLazy;
        }
        return this.tonneforcemetersLazy = this.convertFromBase(TorqueUnits.TonneForceMeters);
    }
    get Kilonewtonmillimeters() {
        if (this.kilonewtonmillimetersLazy !== null) {
            return this.kilonewtonmillimetersLazy;
        }
        return this.kilonewtonmillimetersLazy = this.convertFromBase(TorqueUnits.Kilonewtonmillimeters);
    }
    get Meganewtonmillimeters() {
        if (this.meganewtonmillimetersLazy !== null) {
            return this.meganewtonmillimetersLazy;
        }
        return this.meganewtonmillimetersLazy = this.convertFromBase(TorqueUnits.Meganewtonmillimeters);
    }
    get Kilonewtoncentimeters() {
        if (this.kilonewtoncentimetersLazy !== null) {
            return this.kilonewtoncentimetersLazy;
        }
        return this.kilonewtoncentimetersLazy = this.convertFromBase(TorqueUnits.Kilonewtoncentimeters);
    }
    get Meganewtoncentimeters() {
        if (this.meganewtoncentimetersLazy !== null) {
            return this.meganewtoncentimetersLazy;
        }
        return this.meganewtoncentimetersLazy = this.convertFromBase(TorqueUnits.Meganewtoncentimeters);
    }
    get Kilonewtonmeters() {
        if (this.kilonewtonmetersLazy !== null) {
            return this.kilonewtonmetersLazy;
        }
        return this.kilonewtonmetersLazy = this.convertFromBase(TorqueUnits.Kilonewtonmeters);
    }
    get Meganewtonmeters() {
        if (this.meganewtonmetersLazy !== null) {
            return this.meganewtonmetersLazy;
        }
        return this.meganewtonmetersLazy = this.convertFromBase(TorqueUnits.Meganewtonmeters);
    }
    get Kilopoundforceinches() {
        if (this.kilopoundforceinchesLazy !== null) {
            return this.kilopoundforceinchesLazy;
        }
        return this.kilopoundforceinchesLazy = this.convertFromBase(TorqueUnits.Kilopoundforceinches);
    }
    get Megapoundforceinches() {
        if (this.megapoundforceinchesLazy !== null) {
            return this.megapoundforceinchesLazy;
        }
        return this.megapoundforceinchesLazy = this.convertFromBase(TorqueUnits.Megapoundforceinches);
    }
    get Kilopoundforcefeet() {
        if (this.kilopoundforcefeetLazy !== null) {
            return this.kilopoundforcefeetLazy;
        }
        return this.kilopoundforcefeetLazy = this.convertFromBase(TorqueUnits.Kilopoundforcefeet);
    }
    get Megapoundforcefeet() {
        if (this.megapoundforcefeetLazy !== null) {
            return this.megapoundforcefeetLazy;
        }
        return this.megapoundforcefeetLazy = this.convertFromBase(TorqueUnits.Megapoundforcefeet);
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
                return (this.value * 1000) / 1000;
            case TorqueUnits.Meganewtonmillimeters:
                return (this.value * 1000) / 1000000;
            case TorqueUnits.Kilonewtoncentimeters:
                return (this.value * 100) / 1000;
            case TorqueUnits.Meganewtoncentimeters:
                return (this.value * 100) / 1000000;
            case TorqueUnits.Kilonewtonmeters:
                return (this.value) / 1000;
            case TorqueUnits.Meganewtonmeters:
                return (this.value) / 1000000;
            case TorqueUnits.Kilopoundforceinches:
                return (this.value / 1.129848290276167e-1) / 1000;
            case TorqueUnits.Megapoundforceinches:
                return (this.value / 1.129848290276167e-1) / 1000000;
            case TorqueUnits.Kilopoundforcefeet:
                return (this.value / 1.3558179483314) / 1000;
            case TorqueUnits.Megapoundforcefeet:
                return (this.value / 1.3558179483314) / 1000000;
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
                return (value * 0.001) * 1000;
            case TorqueUnits.Meganewtonmillimeters:
                return (value * 0.001) * 1000000;
            case TorqueUnits.Kilonewtoncentimeters:
                return (value * 0.01) * 1000;
            case TorqueUnits.Meganewtoncentimeters:
                return (value * 0.01) * 1000000;
            case TorqueUnits.Kilonewtonmeters:
                return (value) * 1000;
            case TorqueUnits.Meganewtonmeters:
                return (value) * 1000000;
            case TorqueUnits.Kilopoundforceinches:
                return (value * 1.129848290276167e-1) * 1000;
            case TorqueUnits.Megapoundforceinches:
                return (value * 1.129848290276167e-1) * 1000000;
            case TorqueUnits.Kilopoundforcefeet:
                return (value * 1.3558179483314) * 1000;
            case TorqueUnits.Megapoundforcefeet:
                return (value * 1.3558179483314) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Torque = Torque;
//# sourceMappingURL=torque.g.js.map