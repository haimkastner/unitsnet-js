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
    TorqueUnits[TorqueUnits["KilonewtonMillimeters"] = 11] = "KilonewtonMillimeters";
    TorqueUnits[TorqueUnits["MeganewtonMillimeters"] = 12] = "MeganewtonMillimeters";
    TorqueUnits[TorqueUnits["KilonewtonCentimeters"] = 13] = "KilonewtonCentimeters";
    TorqueUnits[TorqueUnits["MeganewtonCentimeters"] = 14] = "MeganewtonCentimeters";
    TorqueUnits[TorqueUnits["KilonewtonMeters"] = 15] = "KilonewtonMeters";
    TorqueUnits[TorqueUnits["MeganewtonMeters"] = 16] = "MeganewtonMeters";
    TorqueUnits[TorqueUnits["KilopoundForceInches"] = 17] = "KilopoundForceInches";
    TorqueUnits[TorqueUnits["MegapoundForceInches"] = 18] = "MegapoundForceInches";
    TorqueUnits[TorqueUnits["KilopoundForceFeet"] = 19] = "KilopoundForceFeet";
    TorqueUnits[TorqueUnits["MegapoundForceFeet"] = 20] = "MegapoundForceFeet";
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
    get KilonewtonMillimeters() {
        if (this.kilonewtonmillimetersLazy !== null) {
            return this.kilonewtonmillimetersLazy;
        }
        return this.kilonewtonmillimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMillimeters);
    }
    get MeganewtonMillimeters() {
        if (this.meganewtonmillimetersLazy !== null) {
            return this.meganewtonmillimetersLazy;
        }
        return this.meganewtonmillimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMillimeters);
    }
    get KilonewtonCentimeters() {
        if (this.kilonewtoncentimetersLazy !== null) {
            return this.kilonewtoncentimetersLazy;
        }
        return this.kilonewtoncentimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonCentimeters);
    }
    get MeganewtonCentimeters() {
        if (this.meganewtoncentimetersLazy !== null) {
            return this.meganewtoncentimetersLazy;
        }
        return this.meganewtoncentimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonCentimeters);
    }
    get KilonewtonMeters() {
        if (this.kilonewtonmetersLazy !== null) {
            return this.kilonewtonmetersLazy;
        }
        return this.kilonewtonmetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMeters);
    }
    get MeganewtonMeters() {
        if (this.meganewtonmetersLazy !== null) {
            return this.meganewtonmetersLazy;
        }
        return this.meganewtonmetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMeters);
    }
    get KilopoundForceInches() {
        if (this.kilopoundforceinchesLazy !== null) {
            return this.kilopoundforceinchesLazy;
        }
        return this.kilopoundforceinchesLazy = this.convertFromBase(TorqueUnits.KilopoundForceInches);
    }
    get MegapoundForceInches() {
        if (this.megapoundforceinchesLazy !== null) {
            return this.megapoundforceinchesLazy;
        }
        return this.megapoundforceinchesLazy = this.convertFromBase(TorqueUnits.MegapoundForceInches);
    }
    get KilopoundForceFeet() {
        if (this.kilopoundforcefeetLazy !== null) {
            return this.kilopoundforcefeetLazy;
        }
        return this.kilopoundforcefeetLazy = this.convertFromBase(TorqueUnits.KilopoundForceFeet);
    }
    get MegapoundForceFeet() {
        if (this.megapoundforcefeetLazy !== null) {
            return this.megapoundforcefeetLazy;
        }
        return this.megapoundforcefeetLazy = this.convertFromBase(TorqueUnits.MegapoundForceFeet);
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
    static FromKilonewtonMillimeters(value) {
        return new Torque(value, TorqueUnits.KilonewtonMillimeters);
    }
    static FromMeganewtonMillimeters(value) {
        return new Torque(value, TorqueUnits.MeganewtonMillimeters);
    }
    static FromKilonewtonCentimeters(value) {
        return new Torque(value, TorqueUnits.KilonewtonCentimeters);
    }
    static FromMeganewtonCentimeters(value) {
        return new Torque(value, TorqueUnits.MeganewtonCentimeters);
    }
    static FromKilonewtonMeters(value) {
        return new Torque(value, TorqueUnits.KilonewtonMeters);
    }
    static FromMeganewtonMeters(value) {
        return new Torque(value, TorqueUnits.MeganewtonMeters);
    }
    static FromKilopoundForceInches(value) {
        return new Torque(value, TorqueUnits.KilopoundForceInches);
    }
    static FromMegapoundForceInches(value) {
        return new Torque(value, TorqueUnits.MegapoundForceInches);
    }
    static FromKilopoundForceFeet(value) {
        return new Torque(value, TorqueUnits.KilopoundForceFeet);
    }
    static FromMegapoundForceFeet(value) {
        return new Torque(value, TorqueUnits.MegapoundForceFeet);
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
            case TorqueUnits.KilonewtonMillimeters:
                return (this.value * 1000) / 1000;
            case TorqueUnits.MeganewtonMillimeters:
                return (this.value * 1000) / 1000000;
            case TorqueUnits.KilonewtonCentimeters:
                return (this.value * 100) / 1000;
            case TorqueUnits.MeganewtonCentimeters:
                return (this.value * 100) / 1000000;
            case TorqueUnits.KilonewtonMeters:
                return (this.value) / 1000;
            case TorqueUnits.MeganewtonMeters:
                return (this.value) / 1000000;
            case TorqueUnits.KilopoundForceInches:
                return (this.value / 1.129848290276167e-1) / 1000;
            case TorqueUnits.MegapoundForceInches:
                return (this.value / 1.129848290276167e-1) / 1000000;
            case TorqueUnits.KilopoundForceFeet:
                return (this.value / 1.3558179483314) / 1000;
            case TorqueUnits.MegapoundForceFeet:
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
            case TorqueUnits.KilonewtonMillimeters:
                return (value * 0.001) * 1000;
            case TorqueUnits.MeganewtonMillimeters:
                return (value * 0.001) * 1000000;
            case TorqueUnits.KilonewtonCentimeters:
                return (value * 0.01) * 1000;
            case TorqueUnits.MeganewtonCentimeters:
                return (value * 0.01) * 1000000;
            case TorqueUnits.KilonewtonMeters:
                return (value) * 1000;
            case TorqueUnits.MeganewtonMeters:
                return (value) * 1000000;
            case TorqueUnits.KilopoundForceInches:
                return (value * 1.129848290276167e-1) * 1000;
            case TorqueUnits.MegapoundForceInches:
                return (value * 1.129848290276167e-1) * 1000000;
            case TorqueUnits.KilopoundForceFeet:
                return (value * 1.3558179483314) * 1000;
            case TorqueUnits.MegapoundForceFeet:
                return (value * 1.3558179483314) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = TorqueUnits.NewtonMeters) {
        switch (toUnit) {
            case TorqueUnits.NewtonMillimeters:
                return this.NewtonMillimeters + ` N·mm`;
            case TorqueUnits.NewtonCentimeters:
                return this.NewtonCentimeters + ` N·cm`;
            case TorqueUnits.NewtonMeters:
                return this.NewtonMeters + ` N·m`;
            case TorqueUnits.PoundForceInches:
                return this.PoundForceInches + ` lbf·in`;
            case TorqueUnits.PoundForceFeet:
                return this.PoundForceFeet + ` lbf·ft`;
            case TorqueUnits.KilogramForceMillimeters:
                return this.KilogramForceMillimeters + ` kgf·mm`;
            case TorqueUnits.KilogramForceCentimeters:
                return this.KilogramForceCentimeters + ` kgf·cm`;
            case TorqueUnits.KilogramForceMeters:
                return this.KilogramForceMeters + ` kgf·m`;
            case TorqueUnits.TonneForceMillimeters:
                return this.TonneForceMillimeters + ` tf·mm`;
            case TorqueUnits.TonneForceCentimeters:
                return this.TonneForceCentimeters + ` tf·cm`;
            case TorqueUnits.TonneForceMeters:
                return this.TonneForceMeters + ` tf·m`;
            case TorqueUnits.KilonewtonMillimeters:
                return this.KilonewtonMillimeters + ` N·mm`;
            case TorqueUnits.MeganewtonMillimeters:
                return this.MeganewtonMillimeters + ` N·mm`;
            case TorqueUnits.KilonewtonCentimeters:
                return this.KilonewtonCentimeters + ` N·cm`;
            case TorqueUnits.MeganewtonCentimeters:
                return this.MeganewtonCentimeters + ` N·cm`;
            case TorqueUnits.KilonewtonMeters:
                return this.KilonewtonMeters + ` N·m`;
            case TorqueUnits.MeganewtonMeters:
                return this.MeganewtonMeters + ` N·m`;
            case TorqueUnits.KilopoundForceInches:
                return this.KilopoundForceInches + ` lbf·in`;
            case TorqueUnits.MegapoundForceInches:
                return this.MegapoundForceInches + ` lbf·in`;
            case TorqueUnits.KilopoundForceFeet:
                return this.KilopoundForceFeet + ` lbf·ft`;
            case TorqueUnits.MegapoundForceFeet:
                return this.MegapoundForceFeet + ` lbf·ft`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Torque = Torque;
//# sourceMappingURL=torque.g.js.map