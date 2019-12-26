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
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonMillimeterPerMeter"] = 11] = "KilonewtonMillimeterPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonMillimeterPerMeter"] = 12] = "MeganewtonMillimeterPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonCentimeterPerMeter"] = 13] = "KilonewtonCentimeterPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonCentimeterPerMeter"] = 14] = "MeganewtonCentimeterPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonMeterPerMeter"] = 15] = "KilonewtonMeterPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonMeterPerMeter"] = 16] = "MeganewtonMeterPerMeter";
    TorquePerLengthUnits[TorquePerLengthUnits["KilopoundForceInchPerFoot"] = 17] = "KilopoundForceInchPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["MegapoundForceInchPerFoot"] = 18] = "MegapoundForceInchPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["KilopoundForceFootPerFoot"] = 19] = "KilopoundForceFootPerFoot";
    TorquePerLengthUnits[TorquePerLengthUnits["MegapoundForceFootPerFoot"] = 20] = "MegapoundForceFootPerFoot";
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
        this.kilonewtonmillimeterpermeterLazy = null;
        this.meganewtonmillimeterpermeterLazy = null;
        this.kilonewtoncentimeterpermeterLazy = null;
        this.meganewtoncentimeterpermeterLazy = null;
        this.kilonewtonmeterpermeterLazy = null;
        this.meganewtonmeterpermeterLazy = null;
        this.kilopoundforceinchperfootLazy = null;
        this.megapoundforceinchperfootLazy = null;
        this.kilopoundforcefootperfootLazy = null;
        this.megapoundforcefootperfootLazy = null;
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
    get KilonewtonMillimeterPerMeter() {
        if (this.kilonewtonmillimeterpermeterLazy !== null) {
            return this.kilonewtonmillimeterpermeterLazy;
        }
        return this.kilonewtonmillimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMillimeterPerMeter);
    }
    get MeganewtonMillimeterPerMeter() {
        if (this.meganewtonmillimeterpermeterLazy !== null) {
            return this.meganewtonmillimeterpermeterLazy;
        }
        return this.meganewtonmillimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMillimeterPerMeter);
    }
    get KilonewtonCentimeterPerMeter() {
        if (this.kilonewtoncentimeterpermeterLazy !== null) {
            return this.kilonewtoncentimeterpermeterLazy;
        }
        return this.kilonewtoncentimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonCentimeterPerMeter);
    }
    get MeganewtonCentimeterPerMeter() {
        if (this.meganewtoncentimeterpermeterLazy !== null) {
            return this.meganewtoncentimeterpermeterLazy;
        }
        return this.meganewtoncentimeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonCentimeterPerMeter);
    }
    get KilonewtonMeterPerMeter() {
        if (this.kilonewtonmeterpermeterLazy !== null) {
            return this.kilonewtonmeterpermeterLazy;
        }
        return this.kilonewtonmeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMeterPerMeter);
    }
    get MeganewtonMeterPerMeter() {
        if (this.meganewtonmeterpermeterLazy !== null) {
            return this.meganewtonmeterpermeterLazy;
        }
        return this.meganewtonmeterpermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMeterPerMeter);
    }
    get KilopoundForceInchPerFoot() {
        if (this.kilopoundforceinchperfootLazy !== null) {
            return this.kilopoundforceinchperfootLazy;
        }
        return this.kilopoundforceinchperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceInchPerFoot);
    }
    get MegapoundForceInchPerFoot() {
        if (this.megapoundforceinchperfootLazy !== null) {
            return this.megapoundforceinchperfootLazy;
        }
        return this.megapoundforceinchperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceInchPerFoot);
    }
    get KilopoundForceFootPerFoot() {
        if (this.kilopoundforcefootperfootLazy !== null) {
            return this.kilopoundforcefootperfootLazy;
        }
        return this.kilopoundforcefootperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceFootPerFoot);
    }
    get MegapoundForceFootPerFoot() {
        if (this.megapoundforcefootperfootLazy !== null) {
            return this.megapoundforcefootperfootLazy;
        }
        return this.megapoundforcefootperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceFootPerFoot);
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
    static FromKilonewtonMillimeterPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMillimeterPerMeter);
    }
    static FromMeganewtonMillimeterPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMillimeterPerMeter);
    }
    static FromKilonewtonCentimeterPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonCentimeterPerMeter);
    }
    static FromMeganewtonCentimeterPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonCentimeterPerMeter);
    }
    static FromKilonewtonMeterPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMeterPerMeter);
    }
    static FromMeganewtonMeterPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMeterPerMeter);
    }
    static FromKilopoundForceInchPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceInchPerFoot);
    }
    static FromMegapoundForceInchPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceInchPerFoot);
    }
    static FromKilopoundForceFootPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceFootPerFoot);
    }
    static FromMegapoundForceFootPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceFootPerFoot);
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
            case TorquePerLengthUnits.KilonewtonMillimeterPerMeter:
                return (this.value * 1000) / 1000;
            case TorquePerLengthUnits.MeganewtonMillimeterPerMeter:
                return (this.value * 1000) / 1000000;
            case TorquePerLengthUnits.KilonewtonCentimeterPerMeter:
                return (this.value * 100) / 1000;
            case TorquePerLengthUnits.MeganewtonCentimeterPerMeter:
                return (this.value * 100) / 1000000;
            case TorquePerLengthUnits.KilonewtonMeterPerMeter:
                return (this.value) / 1000;
            case TorquePerLengthUnits.MeganewtonMeterPerMeter:
                return (this.value) / 1000000;
            case TorquePerLengthUnits.KilopoundForceInchPerFoot:
                return (this.value / 0.370685147638) / 1000;
            case TorquePerLengthUnits.MegapoundForceInchPerFoot:
                return (this.value / 0.370685147638) / 1000000;
            case TorquePerLengthUnits.KilopoundForceFootPerFoot:
                return (this.value / 4.44822161526) / 1000;
            case TorquePerLengthUnits.MegapoundForceFootPerFoot:
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
            case TorquePerLengthUnits.KilonewtonMillimeterPerMeter:
                return (value * 0.001) * 1000;
            case TorquePerLengthUnits.MeganewtonMillimeterPerMeter:
                return (value * 0.001) * 1000000;
            case TorquePerLengthUnits.KilonewtonCentimeterPerMeter:
                return (value * 0.01) * 1000;
            case TorquePerLengthUnits.MeganewtonCentimeterPerMeter:
                return (value * 0.01) * 1000000;
            case TorquePerLengthUnits.KilonewtonMeterPerMeter:
                return (value) * 1000;
            case TorquePerLengthUnits.MeganewtonMeterPerMeter:
                return (value) * 1000000;
            case TorquePerLengthUnits.KilopoundForceInchPerFoot:
                return (value * 0.370685147638) * 1000;
            case TorquePerLengthUnits.MegapoundForceInchPerFoot:
                return (value * 0.370685147638) * 1000000;
            case TorquePerLengthUnits.KilopoundForceFootPerFoot:
                return (value * 4.44822161526) * 1000;
            case TorquePerLengthUnits.MegapoundForceFootPerFoot:
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
            case TorquePerLengthUnits.KilonewtonMillimeterPerMeter:
                return this.KilonewtonMillimeterPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.MeganewtonMillimeterPerMeter:
                return this.MeganewtonMillimeterPerMeter + ` N·mm/m`;
            case TorquePerLengthUnits.KilonewtonCentimeterPerMeter:
                return this.KilonewtonCentimeterPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.MeganewtonCentimeterPerMeter:
                return this.MeganewtonCentimeterPerMeter + ` N·cm/m`;
            case TorquePerLengthUnits.KilonewtonMeterPerMeter:
                return this.KilonewtonMeterPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.MeganewtonMeterPerMeter:
                return this.MeganewtonMeterPerMeter + ` N·m/m`;
            case TorquePerLengthUnits.KilopoundForceInchPerFoot:
                return this.KilopoundForceInchPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.MegapoundForceInchPerFoot:
                return this.MegapoundForceInchPerFoot + ` lbf·in/ft`;
            case TorquePerLengthUnits.KilopoundForceFootPerFoot:
                return this.KilopoundForceFootPerFoot + ` lbf·ft/ft`;
            case TorquePerLengthUnits.MegapoundForceFootPerFoot:
                return this.MegapoundForceFootPerFoot + ` lbf·ft/ft`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.TorquePerLength = TorquePerLength;
//# sourceMappingURL=torqueperlength.g.js.map