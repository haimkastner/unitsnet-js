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
    TorqueUnits[TorqueUnits["KilonewtonMillimeter"] = 11] = "KilonewtonMillimeter";
    TorqueUnits[TorqueUnits["MeganewtonMillimeter"] = 12] = "MeganewtonMillimeter";
    TorqueUnits[TorqueUnits["KilonewtonCentimeter"] = 13] = "KilonewtonCentimeter";
    TorqueUnits[TorqueUnits["MeganewtonCentimeter"] = 14] = "MeganewtonCentimeter";
    TorqueUnits[TorqueUnits["KilonewtonMeter"] = 15] = "KilonewtonMeter";
    TorqueUnits[TorqueUnits["MeganewtonMeter"] = 16] = "MeganewtonMeter";
    TorqueUnits[TorqueUnits["KilopoundForceInch"] = 17] = "KilopoundForceInch";
    TorqueUnits[TorqueUnits["MegapoundForceInch"] = 18] = "MegapoundForceInch";
    TorqueUnits[TorqueUnits["KilopoundForceFoot"] = 19] = "KilopoundForceFoot";
    TorqueUnits[TorqueUnits["MegapoundForceFoot"] = 20] = "MegapoundForceFoot";
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
        this.kilonewtonmillimeterLazy = null;
        this.meganewtonmillimeterLazy = null;
        this.kilonewtoncentimeterLazy = null;
        this.meganewtoncentimeterLazy = null;
        this.kilonewtonmeterLazy = null;
        this.meganewtonmeterLazy = null;
        this.kilopoundforceinchLazy = null;
        this.megapoundforceinchLazy = null;
        this.kilopoundforcefootLazy = null;
        this.megapoundforcefootLazy = null;
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
    get KilonewtonMillimeter() {
        if (this.kilonewtonmillimeterLazy !== null) {
            return this.kilonewtonmillimeterLazy;
        }
        return this.kilonewtonmillimeterLazy = this.convertFromBase(TorqueUnits.KilonewtonMillimeter);
    }
    get MeganewtonMillimeter() {
        if (this.meganewtonmillimeterLazy !== null) {
            return this.meganewtonmillimeterLazy;
        }
        return this.meganewtonmillimeterLazy = this.convertFromBase(TorqueUnits.MeganewtonMillimeter);
    }
    get KilonewtonCentimeter() {
        if (this.kilonewtoncentimeterLazy !== null) {
            return this.kilonewtoncentimeterLazy;
        }
        return this.kilonewtoncentimeterLazy = this.convertFromBase(TorqueUnits.KilonewtonCentimeter);
    }
    get MeganewtonCentimeter() {
        if (this.meganewtoncentimeterLazy !== null) {
            return this.meganewtoncentimeterLazy;
        }
        return this.meganewtoncentimeterLazy = this.convertFromBase(TorqueUnits.MeganewtonCentimeter);
    }
    get KilonewtonMeter() {
        if (this.kilonewtonmeterLazy !== null) {
            return this.kilonewtonmeterLazy;
        }
        return this.kilonewtonmeterLazy = this.convertFromBase(TorqueUnits.KilonewtonMeter);
    }
    get MeganewtonMeter() {
        if (this.meganewtonmeterLazy !== null) {
            return this.meganewtonmeterLazy;
        }
        return this.meganewtonmeterLazy = this.convertFromBase(TorqueUnits.MeganewtonMeter);
    }
    get KilopoundForceInch() {
        if (this.kilopoundforceinchLazy !== null) {
            return this.kilopoundforceinchLazy;
        }
        return this.kilopoundforceinchLazy = this.convertFromBase(TorqueUnits.KilopoundForceInch);
    }
    get MegapoundForceInch() {
        if (this.megapoundforceinchLazy !== null) {
            return this.megapoundforceinchLazy;
        }
        return this.megapoundforceinchLazy = this.convertFromBase(TorqueUnits.MegapoundForceInch);
    }
    get KilopoundForceFoot() {
        if (this.kilopoundforcefootLazy !== null) {
            return this.kilopoundforcefootLazy;
        }
        return this.kilopoundforcefootLazy = this.convertFromBase(TorqueUnits.KilopoundForceFoot);
    }
    get MegapoundForceFoot() {
        if (this.megapoundforcefootLazy !== null) {
            return this.megapoundforcefootLazy;
        }
        return this.megapoundforcefootLazy = this.convertFromBase(TorqueUnits.MegapoundForceFoot);
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
    static FromKilonewtonMillimeter(value) {
        return new Torque(value, TorqueUnits.KilonewtonMillimeter);
    }
    static FromMeganewtonMillimeter(value) {
        return new Torque(value, TorqueUnits.MeganewtonMillimeter);
    }
    static FromKilonewtonCentimeter(value) {
        return new Torque(value, TorqueUnits.KilonewtonCentimeter);
    }
    static FromMeganewtonCentimeter(value) {
        return new Torque(value, TorqueUnits.MeganewtonCentimeter);
    }
    static FromKilonewtonMeter(value) {
        return new Torque(value, TorqueUnits.KilonewtonMeter);
    }
    static FromMeganewtonMeter(value) {
        return new Torque(value, TorqueUnits.MeganewtonMeter);
    }
    static FromKilopoundForceInch(value) {
        return new Torque(value, TorqueUnits.KilopoundForceInch);
    }
    static FromMegapoundForceInch(value) {
        return new Torque(value, TorqueUnits.MegapoundForceInch);
    }
    static FromKilopoundForceFoot(value) {
        return new Torque(value, TorqueUnits.KilopoundForceFoot);
    }
    static FromMegapoundForceFoot(value) {
        return new Torque(value, TorqueUnits.MegapoundForceFoot);
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
            case TorqueUnits.KilonewtonMillimeter:
                return (this.value * 1000) / 1000;
            case TorqueUnits.MeganewtonMillimeter:
                return (this.value * 1000) / 1000000;
            case TorqueUnits.KilonewtonCentimeter:
                return (this.value * 100) / 1000;
            case TorqueUnits.MeganewtonCentimeter:
                return (this.value * 100) / 1000000;
            case TorqueUnits.KilonewtonMeter:
                return (this.value) / 1000;
            case TorqueUnits.MeganewtonMeter:
                return (this.value) / 1000000;
            case TorqueUnits.KilopoundForceInch:
                return (this.value / 1.129848290276167e-1) / 1000;
            case TorqueUnits.MegapoundForceInch:
                return (this.value / 1.129848290276167e-1) / 1000000;
            case TorqueUnits.KilopoundForceFoot:
                return (this.value / 1.3558179483314) / 1000;
            case TorqueUnits.MegapoundForceFoot:
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
            case TorqueUnits.KilonewtonMillimeter:
                return (value * 0.001) * 1000;
            case TorqueUnits.MeganewtonMillimeter:
                return (value * 0.001) * 1000000;
            case TorqueUnits.KilonewtonCentimeter:
                return (value * 0.01) * 1000;
            case TorqueUnits.MeganewtonCentimeter:
                return (value * 0.01) * 1000000;
            case TorqueUnits.KilonewtonMeter:
                return (value) * 1000;
            case TorqueUnits.MeganewtonMeter:
                return (value) * 1000000;
            case TorqueUnits.KilopoundForceInch:
                return (value * 1.129848290276167e-1) * 1000;
            case TorqueUnits.MegapoundForceInch:
                return (value * 1.129848290276167e-1) * 1000000;
            case TorqueUnits.KilopoundForceFoot:
                return (value * 1.3558179483314) * 1000;
            case TorqueUnits.MegapoundForceFoot:
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
            case TorqueUnits.KilonewtonMillimeter:
                return this.KilonewtonMillimeter + ` N·mm`;
            case TorqueUnits.MeganewtonMillimeter:
                return this.MeganewtonMillimeter + ` N·mm`;
            case TorqueUnits.KilonewtonCentimeter:
                return this.KilonewtonCentimeter + ` N·cm`;
            case TorqueUnits.MeganewtonCentimeter:
                return this.MeganewtonCentimeter + ` N·cm`;
            case TorqueUnits.KilonewtonMeter:
                return this.KilonewtonMeter + ` N·m`;
            case TorqueUnits.MeganewtonMeter:
                return this.MeganewtonMeter + ` N·m`;
            case TorqueUnits.KilopoundForceInch:
                return this.KilopoundForceInch + ` lbf·in`;
            case TorqueUnits.MegapoundForceInch:
                return this.MegapoundForceInch + ` lbf·in`;
            case TorqueUnits.KilopoundForceFoot:
                return this.KilopoundForceFoot + ` lbf·ft`;
            case TorqueUnits.MegapoundForceFoot:
                return this.MegapoundForceFoot + ` lbf·ft`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Torque = Torque;
//# sourceMappingURL=torque.g.js.map