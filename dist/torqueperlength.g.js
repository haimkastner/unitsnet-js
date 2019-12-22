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
    TorquePerLengthUnits[TorquePerLengthUnits["Kilonewtonmillimeterspermeter"] = 11] = "Kilonewtonmillimeterspermeter";
    TorquePerLengthUnits[TorquePerLengthUnits["Meganewtonmillimeterspermeter"] = 12] = "Meganewtonmillimeterspermeter";
    TorquePerLengthUnits[TorquePerLengthUnits["Kilonewtoncentimeterspermeter"] = 13] = "Kilonewtoncentimeterspermeter";
    TorquePerLengthUnits[TorquePerLengthUnits["Meganewtoncentimeterspermeter"] = 14] = "Meganewtoncentimeterspermeter";
    TorquePerLengthUnits[TorquePerLengthUnits["Kilonewtonmeterspermeter"] = 15] = "Kilonewtonmeterspermeter";
    TorquePerLengthUnits[TorquePerLengthUnits["Meganewtonmeterspermeter"] = 16] = "Meganewtonmeterspermeter";
    TorquePerLengthUnits[TorquePerLengthUnits["Kilopoundforceinchesperfoot"] = 17] = "Kilopoundforceinchesperfoot";
    TorquePerLengthUnits[TorquePerLengthUnits["Megapoundforceinchesperfoot"] = 18] = "Megapoundforceinchesperfoot";
    TorquePerLengthUnits[TorquePerLengthUnits["Kilopoundforcefeetperfoot"] = 19] = "Kilopoundforcefeetperfoot";
    TorquePerLengthUnits[TorquePerLengthUnits["Megapoundforcefeetperfoot"] = 20] = "Megapoundforcefeetperfoot";
})(TorquePerLengthUnits = exports.TorquePerLengthUnits || (exports.TorquePerLengthUnits = {}));
class TorquePerLength {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get NewtonMillimetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }
    get NewtonCentimetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }
    get NewtonMetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.NewtonMetersPerMeter);
    }
    get PoundForceInchesPerFoot() {
        return this.convertFromBase(TorquePerLengthUnits.PoundForceInchesPerFoot);
    }
    get PoundForceFeetPerFoot() {
        return this.convertFromBase(TorquePerLengthUnits.PoundForceFeetPerFoot);
    }
    get KilogramForceMillimetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }
    get KilogramForceCentimetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }
    get KilogramForceMetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }
    get TonneForceMillimetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }
    get TonneForceCentimetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }
    get TonneForceMetersPerMeter() {
        return this.convertFromBase(TorquePerLengthUnits.TonneForceMetersPerMeter);
    }
    get Kilonewtonmillimeterspermeter() {
        return this.convertFromBase(TorquePerLengthUnits.Kilonewtonmillimeterspermeter);
    }
    get Meganewtonmillimeterspermeter() {
        return this.convertFromBase(TorquePerLengthUnits.Meganewtonmillimeterspermeter);
    }
    get Kilonewtoncentimeterspermeter() {
        return this.convertFromBase(TorquePerLengthUnits.Kilonewtoncentimeterspermeter);
    }
    get Meganewtoncentimeterspermeter() {
        return this.convertFromBase(TorquePerLengthUnits.Meganewtoncentimeterspermeter);
    }
    get Kilonewtonmeterspermeter() {
        return this.convertFromBase(TorquePerLengthUnits.Kilonewtonmeterspermeter);
    }
    get Meganewtonmeterspermeter() {
        return this.convertFromBase(TorquePerLengthUnits.Meganewtonmeterspermeter);
    }
    get Kilopoundforceinchesperfoot() {
        return this.convertFromBase(TorquePerLengthUnits.Kilopoundforceinchesperfoot);
    }
    get Megapoundforceinchesperfoot() {
        return this.convertFromBase(TorquePerLengthUnits.Megapoundforceinchesperfoot);
    }
    get Kilopoundforcefeetperfoot() {
        return this.convertFromBase(TorquePerLengthUnits.Kilopoundforcefeetperfoot);
    }
    get Megapoundforcefeetperfoot() {
        return this.convertFromBase(TorquePerLengthUnits.Megapoundforcefeetperfoot);
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
    static FromKilonewtonmillimeterspermeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilonewtonmillimeterspermeter);
    }
    static FromMeganewtonmillimeterspermeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Meganewtonmillimeterspermeter);
    }
    static FromKilonewtoncentimeterspermeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilonewtoncentimeterspermeter);
    }
    static FromMeganewtoncentimeterspermeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Meganewtoncentimeterspermeter);
    }
    static FromKilonewtonmeterspermeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilonewtonmeterspermeter);
    }
    static FromMeganewtonmeterspermeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Meganewtonmeterspermeter);
    }
    static FromKilopoundforceinchesperfoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilopoundforceinchesperfoot);
    }
    static FromMegapoundforceinchesperfoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Megapoundforceinchesperfoot);
    }
    static FromKilopoundforcefeetperfoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Kilopoundforcefeetperfoot);
    }
    static FromMegapoundforcefeetperfoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.Megapoundforcefeetperfoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case TorquePerLengthUnits.NewtonMillimetersPerMeter:
                return this.value * 0.001;
            case TorquePerLengthUnits.NewtonCentimetersPerMeter:
                return this.value * 0.01;
            case TorquePerLengthUnits.NewtonMetersPerMeter:
                return this.value;
            case TorquePerLengthUnits.PoundForceInchesPerFoot:
                return this.value * 0.370685147638;
            case TorquePerLengthUnits.PoundForceFeetPerFoot:
                return this.value * 4.44822161526;
            case TorquePerLengthUnits.KilogramForceMillimetersPerMeter:
                return this.value * 0.00980665019960652;
            case TorquePerLengthUnits.KilogramForceCentimetersPerMeter:
                return this.value * 0.0980665019960652;
            case TorquePerLengthUnits.KilogramForceMetersPerMeter:
                return this.value * 9.80665019960652;
            case TorquePerLengthUnits.TonneForceMillimetersPerMeter:
                return this.value * 9.80665019960652;
            case TorquePerLengthUnits.TonneForceCentimetersPerMeter:
                return this.value * 98.0665019960652;
            case TorquePerLengthUnits.TonneForceMetersPerMeter:
                return this.value * 9806.65019960653;
            case TorquePerLengthUnits.Kilonewtonmillimeterspermeter:
                return (this.value * 1000) * 1000;
            case TorquePerLengthUnits.Meganewtonmillimeterspermeter:
                return (this.value * 1000) * 1000000;
            case TorquePerLengthUnits.Kilonewtoncentimeterspermeter:
                return (this.value * 100) * 1000;
            case TorquePerLengthUnits.Meganewtoncentimeterspermeter:
                return (this.value * 100) * 1000000;
            case TorquePerLengthUnits.Kilonewtonmeterspermeter:
                return (this.value) * 1000;
            case TorquePerLengthUnits.Meganewtonmeterspermeter:
                return (this.value) * 1000000;
            case TorquePerLengthUnits.Kilopoundforceinchesperfoot:
                return (this.value / 0.370685147638) * 1000;
            case TorquePerLengthUnits.Megapoundforceinchesperfoot:
                return (this.value / 0.370685147638) * 1000000;
            case TorquePerLengthUnits.Kilopoundforcefeetperfoot:
                return (this.value / 4.44822161526) * 1000;
            case TorquePerLengthUnits.Megapoundforcefeetperfoot:
                return (this.value / 4.44822161526) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
            case TorquePerLengthUnits.Kilonewtonmillimeterspermeter:
                return (this.value * 0.001) / 1000;
            case TorquePerLengthUnits.Meganewtonmillimeterspermeter:
                return (this.value * 0.001) / 1000000;
            case TorquePerLengthUnits.Kilonewtoncentimeterspermeter:
                return (this.value * 0.01) / 1000;
            case TorquePerLengthUnits.Meganewtoncentimeterspermeter:
                return (this.value * 0.01) / 1000000;
            case TorquePerLengthUnits.Kilonewtonmeterspermeter:
                return (this.value) / 1000;
            case TorquePerLengthUnits.Meganewtonmeterspermeter:
                return (this.value) / 1000000;
            case TorquePerLengthUnits.Kilopoundforceinchesperfoot:
                return (this.value * 0.370685147638) / 1000;
            case TorquePerLengthUnits.Megapoundforceinchesperfoot:
                return (this.value * 0.370685147638) / 1000000;
            case TorquePerLengthUnits.Kilopoundforcefeetperfoot:
                return (this.value * 4.44822161526) / 1000;
            case TorquePerLengthUnits.Megapoundforcefeetperfoot:
                return (this.value * 4.44822161526) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.TorquePerLength = TorquePerLength;
//# sourceMappingURL=torqueperlength.g.js.map