"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TorquePerLengthUnits;
(function (TorquePerLengthUnits) {
    TorquePerLengthUnits[TorquePerLengthUnits["NewtonMillimetersPerMeter"] = 0] = "NewtonMillimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["NewtonCentimetersPerMeter"] = 1] = "NewtonCentimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["NewtonMetersPerMeter"] = 2] = "NewtonMetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["PoundForceInchesPerFoot"] = 3] = "PoundForceInchesPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["PoundForceFeetPerFoot"] = 4] = "PoundForceFeetPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["KilogramForceMillimetersPerMeter"] = 5] = "KilogramForceMillimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilogramForceCentimetersPerMeter"] = 6] = "KilogramForceCentimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilogramForceMetersPerMeter"] = 7] = "KilogramForceMetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["TonneForceMillimetersPerMeter"] = 8] = "TonneForceMillimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["TonneForceCentimetersPerMeter"] = 9] = "TonneForceCentimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["TonneForceMetersPerMeter"] = 10] = "TonneForceMetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonMillimetersPerMeter"] = 11] = "KilonewtonMillimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonMillimetersPerMeter"] = 12] = "MeganewtonMillimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonCentimetersPerMeter"] = 13] = "KilonewtonCentimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonCentimetersPerMeter"] = 14] = "MeganewtonCentimetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonMetersPerMeter"] = 15] = "KilonewtonMetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonMetersPerMeter"] = 16] = "MeganewtonMetersPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilopoundForceInchesPerFoot"] = 17] = "KilopoundForceInchesPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["MegapoundForceInchesPerFoot"] = 18] = "MegapoundForceInchesPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["KilopoundForceFeetPerFoot"] = 19] = "KilopoundForceFeetPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["MegapoundForceFeetPerFoot"] = 20] = "MegapoundForceFeetPerFoot";
})(TorquePerLengthUnits = exports.TorquePerLengthUnits || (exports.TorquePerLengthUnits = {}));
class TorquePerLength {
    constructor(value, fromUnit) {
        this.newtonmillimeterspermeterLazy = null;
        this.newtoncentimeterspermeterLazy = null;
        this.newtonmeterspermeterLazy = null;
        this.poundforceinchesperfootLazy = null;
        this.poundforcefeetperfootLazy = null;
        this.kilogramforcemillimeterspermeterLazy = null;
        this.kilogramforcecentimeterspermeterLazy = null;
        this.kilogramforcemeterspermeterLazy = null;
        this.tonneforcemillimeterspermeterLazy = null;
        this.tonneforcecentimeterspermeterLazy = null;
        this.tonneforcemeterspermeterLazy = null;
        this.kilonewtonmillimeterspermeterLazy = null;
        this.meganewtonmillimeterspermeterLazy = null;
        this.kilonewtoncentimeterspermeterLazy = null;
        this.meganewtoncentimeterspermeterLazy = null;
        this.kilonewtonmeterspermeterLazy = null;
        this.meganewtonmeterspermeterLazy = null;
        this.kilopoundforceinchesperfootLazy = null;
        this.megapoundforceinchesperfootLazy = null;
        this.kilopoundforcefeetperfootLazy = null;
        this.megapoundforcefeetperfootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMillimetersPerMeter() {
        if (this.newtonmillimeterspermeterLazy !== null) {
            return this.newtonmillimeterspermeterLazy;
        }
        return this.newtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }
    get NewtonCentimetersPerMeter() {
        if (this.newtoncentimeterspermeterLazy !== null) {
            return this.newtoncentimeterspermeterLazy;
        }
        return this.newtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }
    get NewtonMetersPerMeter() {
        if (this.newtonmeterspermeterLazy !== null) {
            return this.newtonmeterspermeterLazy;
        }
        return this.newtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMetersPerMeter);
    }
    get PoundForceInchesPerFoot() {
        if (this.poundforceinchesperfootLazy !== null) {
            return this.poundforceinchesperfootLazy;
        }
        return this.poundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceInchesPerFoot);
    }
    get PoundForceFeetPerFoot() {
        if (this.poundforcefeetperfootLazy !== null) {
            return this.poundforcefeetperfootLazy;
        }
        return this.poundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceFeetPerFoot);
    }
    get KilogramForceMillimetersPerMeter() {
        if (this.kilogramforcemillimeterspermeterLazy !== null) {
            return this.kilogramforcemillimeterspermeterLazy;
        }
        return this.kilogramforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }
    get KilogramForceCentimetersPerMeter() {
        if (this.kilogramforcecentimeterspermeterLazy !== null) {
            return this.kilogramforcecentimeterspermeterLazy;
        }
        return this.kilogramforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }
    get KilogramForceMetersPerMeter() {
        if (this.kilogramforcemeterspermeterLazy !== null) {
            return this.kilogramforcemeterspermeterLazy;
        }
        return this.kilogramforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }
    get TonneForceMillimetersPerMeter() {
        if (this.tonneforcemillimeterspermeterLazy !== null) {
            return this.tonneforcemillimeterspermeterLazy;
        }
        return this.tonneforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }
    get TonneForceCentimetersPerMeter() {
        if (this.tonneforcecentimeterspermeterLazy !== null) {
            return this.tonneforcecentimeterspermeterLazy;
        }
        return this.tonneforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }
    get TonneForceMetersPerMeter() {
        if (this.tonneforcemeterspermeterLazy !== null) {
            return this.tonneforcemeterspermeterLazy;
        }
        return this.tonneforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMetersPerMeter);
    }
    get KilonewtonMillimetersPerMeter() {
        if (this.kilonewtonmillimeterspermeterLazy !== null) {
            return this.kilonewtonmillimeterspermeterLazy;
        }
        return this.kilonewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }
    get MeganewtonMillimetersPerMeter() {
        if (this.meganewtonmillimeterspermeterLazy !== null) {
            return this.meganewtonmillimeterspermeterLazy;
        }
        return this.meganewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }
    get KilonewtonCentimetersPerMeter() {
        if (this.kilonewtoncentimeterspermeterLazy !== null) {
            return this.kilonewtoncentimeterspermeterLazy;
        }
        return this.kilonewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }
    get MeganewtonCentimetersPerMeter() {
        if (this.meganewtoncentimeterspermeterLazy !== null) {
            return this.meganewtoncentimeterspermeterLazy;
        }
        return this.meganewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }
    get KilonewtonMetersPerMeter() {
        if (this.kilonewtonmeterspermeterLazy !== null) {
            return this.kilonewtonmeterspermeterLazy;
        }
        return this.kilonewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }
    get MeganewtonMetersPerMeter() {
        if (this.meganewtonmeterspermeterLazy !== null) {
            return this.meganewtonmeterspermeterLazy;
        }
        return this.meganewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }
    get KilopoundForceInchesPerFoot() {
        if (this.kilopoundforceinchesperfootLazy !== null) {
            return this.kilopoundforceinchesperfootLazy;
        }
        return this.kilopoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }
    get MegapoundForceInchesPerFoot() {
        if (this.megapoundforceinchesperfootLazy !== null) {
            return this.megapoundforceinchesperfootLazy;
        }
        return this.megapoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }
    get KilopoundForceFeetPerFoot() {
        if (this.kilopoundforcefeetperfootLazy !== null) {
            return this.kilopoundforcefeetperfootLazy;
        }
        return this.kilopoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }
    get MegapoundForceFeetPerFoot() {
        if (this.megapoundforcefeetperfootLazy !== null) {
            return this.megapoundforcefeetperfootLazy;
        }
        return this.megapoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceFeetPerFoot);
    }
    static FromNewtonMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }
    static FromNewtonCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }
    static FromNewtonMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMetersPerMeter);
    }
    static FromPoundForceInchesPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceInchesPerFoot);
    }
    static FromPoundForceFeetPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceFeetPerFoot);
    }
    static FromKilogramForceMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }
    static FromKilogramForceCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }
    static FromKilogramForceMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }
    static FromTonneForceMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }
    static FromTonneForceCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }
    static FromTonneForceMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMetersPerMeter);
    }
    static FromKilonewtonMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }
    static FromMeganewtonMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }
    static FromKilonewtonCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }
    static FromMeganewtonCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }
    static FromKilonewtonMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }
    static FromMeganewtonMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }
    static FromKilopoundForceInchesPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }
    static FromMegapoundForceInchesPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }
    static FromKilopoundForceFeetPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }
    static FromMegapoundForceFeetPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceFeetPerFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return this.value * 1000;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return this.value * 100;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return this.value;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return this.value / 0.370685147638;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return this.value / 4.44822161526;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return this.value * 101.971619222242;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return this.value * 10.1971619222242;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return this.value * 0.101971619222242;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return this.value * 0.101971619222242;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return this.value * 0.0101971619222242;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return this.value * 0.000101971619222242;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return (this.value * 1000) / 1000;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return (this.value * 1000) / 1000000;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return (this.value * 100) / 1000;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return (this.value * 100) / 1000000;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return (this.value) / 1000;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return (this.value) / 1000000;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return (this.value / 0.370685147638) / 1000;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return (this.value / 0.370685147638) / 1000000;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return (this.value / 4.44822161526) / 1000;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return (this.value / 4.44822161526) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return value * 0.001;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return value * 0.01;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return value;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return value * 0.370685147638;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return value * 4.44822161526;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return value * 0.00980665019960652;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return value * 0.0980665019960652;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return value * 9.80665019960652;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return value * 9.80665019960652;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return value * 98.0665019960652;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return value * 9806.65019960653;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return (value * 0.001) * 1000;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return (value * 0.001) * 1000000;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return (value * 0.01) * 1000;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return (value * 0.01) * 1000000;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return (value) * 1000;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return (value) * 1000000;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return (value * 0.370685147638) * 1000;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return (value * 0.370685147638) * 1000000;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return (value * 4.44822161526) * 1000;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return (value * 4.44822161526) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = TorquePerLengthUnits.NewtonMetersPerMeter) {
        switch (toUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return this.NewtonMillimetersPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return this.NewtonCentimetersPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return this.NewtonMetersPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return this.PoundForceInchesPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return this.PoundForceFeetPerFoot + ` lbf·ft/ft`;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return this.KilogramForceMillimetersPerMeter + ` kgf·mm/m`;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return this.KilogramForceCentimetersPerMeter + ` kgf·cm/m`;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return this.KilogramForceMetersPerMeter + ` kgf·m/m`;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return this.TonneForceMillimetersPerMeter + ` tf·mm/m`;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return this.TonneForceCentimetersPerMeter + ` tf·cm/m`;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return this.TonneForceMetersPerMeter + ` tf·m/m`;
            case TorquePerLengthUnits.KilonewtonMillimetersPerMeter:
                return this.KilonewtonMillimetersPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return this.MeganewtonMillimetersPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return this.KilonewtonCentimetersPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return this.MeganewtonCentimetersPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return this.KilonewtonMetersPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return this.MeganewtonMetersPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return this.KilopoundForceInchesPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return this.MegapoundForceInchesPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return this.KilopoundForceFeetPerFoot + ` lbf·ft/ft`;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return this.MegapoundForceFeetPerFoot + ` lbf·ft/ft`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.TorquePerLength = TorquePerLength;
//# sourceMappingURL=torqueperlength.g.js.map