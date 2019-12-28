"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** TorquePerLengthUnits enumeration */
var TorquePerLengthUnits;
(function (TorquePerLengthUnits) {
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["NewtonMillimetersPerMeter"] = 0] = "NewtonMillimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["NewtonCentimetersPerMeter"] = 1] = "NewtonCentimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["NewtonMetersPerMeter"] = 2] = "NewtonMetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["PoundForceInchesPerFoot"] = 3] = "PoundForceInchesPerFoot";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["PoundForceFeetPerFoot"] = 4] = "PoundForceFeetPerFoot";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilogramForceMillimetersPerMeter"] = 5] = "KilogramForceMillimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilogramForceCentimetersPerMeter"] = 6] = "KilogramForceCentimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilogramForceMetersPerMeter"] = 7] = "KilogramForceMetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["TonneForceMillimetersPerMeter"] = 8] = "TonneForceMillimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["TonneForceCentimetersPerMeter"] = 9] = "TonneForceCentimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["TonneForceMetersPerMeter"] = 10] = "TonneForceMetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonMillimetersPerMeter"] = 11] = "KilonewtonMillimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonMillimetersPerMeter"] = 12] = "MeganewtonMillimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonCentimetersPerMeter"] = 13] = "KilonewtonCentimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonCentimetersPerMeter"] = 14] = "MeganewtonCentimetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilonewtonMetersPerMeter"] = 15] = "KilonewtonMetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["MeganewtonMetersPerMeter"] = 16] = "MeganewtonMetersPerMeter";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilopoundForceInchesPerFoot"] = 17] = "KilopoundForceInchesPerFoot";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["MegapoundForceInchesPerFoot"] = 18] = "MegapoundForceInchesPerFoot";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["KilopoundForceFeetPerFoot"] = 19] = "KilopoundForceFeetPerFoot";
    /** */
    TorquePerLengthUnits[TorquePerLengthUnits["MegapoundForceFeetPerFoot"] = 20] = "MegapoundForceFeetPerFoot";
})(TorquePerLengthUnits = exports.TorquePerLengthUnits || (exports.TorquePerLengthUnits = {}));
/** The magnitude of torque per unit length. */
class TorquePerLength {
    /**
     * Create a new TorquePerLength.
     * @param value The value.
     * @param fromUnit The ‘TorquePerLength’ unit to create from.
     * The default unit is NewtonMetersPerMeter
     */
    constructor(value, fromUnit = TorquePerLengthUnits.NewtonMetersPerMeter) {
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
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of TorquePerLength is NewtonMetersPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonMillimetersPerMeter() {
        if (this.newtonmillimeterspermeterLazy !== null) {
            return this.newtonmillimeterspermeterLazy;
        }
        return this.newtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }
    /** */
    get NewtonCentimetersPerMeter() {
        if (this.newtoncentimeterspermeterLazy !== null) {
            return this.newtoncentimeterspermeterLazy;
        }
        return this.newtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }
    /** */
    get NewtonMetersPerMeter() {
        if (this.newtonmeterspermeterLazy !== null) {
            return this.newtonmeterspermeterLazy;
        }
        return this.newtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.NewtonMetersPerMeter);
    }
    /** */
    get PoundForceInchesPerFoot() {
        if (this.poundforceinchesperfootLazy !== null) {
            return this.poundforceinchesperfootLazy;
        }
        return this.poundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceInchesPerFoot);
    }
    /** */
    get PoundForceFeetPerFoot() {
        if (this.poundforcefeetperfootLazy !== null) {
            return this.poundforcefeetperfootLazy;
        }
        return this.poundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.PoundForceFeetPerFoot);
    }
    /** */
    get KilogramForceMillimetersPerMeter() {
        if (this.kilogramforcemillimeterspermeterLazy !== null) {
            return this.kilogramforcemillimeterspermeterLazy;
        }
        return this.kilogramforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }
    /** */
    get KilogramForceCentimetersPerMeter() {
        if (this.kilogramforcecentimeterspermeterLazy !== null) {
            return this.kilogramforcecentimeterspermeterLazy;
        }
        return this.kilogramforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }
    /** */
    get KilogramForceMetersPerMeter() {
        if (this.kilogramforcemeterspermeterLazy !== null) {
            return this.kilogramforcemeterspermeterLazy;
        }
        return this.kilogramforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }
    /** */
    get TonneForceMillimetersPerMeter() {
        if (this.tonneforcemillimeterspermeterLazy !== null) {
            return this.tonneforcemillimeterspermeterLazy;
        }
        return this.tonneforcemillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }
    /** */
    get TonneForceCentimetersPerMeter() {
        if (this.tonneforcecentimeterspermeterLazy !== null) {
            return this.tonneforcecentimeterspermeterLazy;
        }
        return this.tonneforcecentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }
    /** */
    get TonneForceMetersPerMeter() {
        if (this.tonneforcemeterspermeterLazy !== null) {
            return this.tonneforcemeterspermeterLazy;
        }
        return this.tonneforcemeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.TonneForceMetersPerMeter);
    }
    /** */
    get KilonewtonMillimetersPerMeter() {
        if (this.kilonewtonmillimeterspermeterLazy !== null) {
            return this.kilonewtonmillimeterspermeterLazy;
        }
        return this.kilonewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }
    /** */
    get MeganewtonMillimetersPerMeter() {
        if (this.meganewtonmillimeterspermeterLazy !== null) {
            return this.meganewtonmillimeterspermeterLazy;
        }
        return this.meganewtonmillimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }
    /** */
    get KilonewtonCentimetersPerMeter() {
        if (this.kilonewtoncentimeterspermeterLazy !== null) {
            return this.kilonewtoncentimeterspermeterLazy;
        }
        return this.kilonewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }
    /** */
    get MeganewtonCentimetersPerMeter() {
        if (this.meganewtoncentimeterspermeterLazy !== null) {
            return this.meganewtoncentimeterspermeterLazy;
        }
        return this.meganewtoncentimeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }
    /** */
    get KilonewtonMetersPerMeter() {
        if (this.kilonewtonmeterspermeterLazy !== null) {
            return this.kilonewtonmeterspermeterLazy;
        }
        return this.kilonewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }
    /** */
    get MeganewtonMetersPerMeter() {
        if (this.meganewtonmeterspermeterLazy !== null) {
            return this.meganewtonmeterspermeterLazy;
        }
        return this.meganewtonmeterspermeterLazy = this.convertFromBase(TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }
    /** */
    get KilopoundForceInchesPerFoot() {
        if (this.kilopoundforceinchesperfootLazy !== null) {
            return this.kilopoundforceinchesperfootLazy;
        }
        return this.kilopoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }
    /** */
    get MegapoundForceInchesPerFoot() {
        if (this.megapoundforceinchesperfootLazy !== null) {
            return this.megapoundforceinchesperfootLazy;
        }
        return this.megapoundforceinchesperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }
    /** */
    get KilopoundForceFeetPerFoot() {
        if (this.kilopoundforcefeetperfootLazy !== null) {
            return this.kilopoundforcefeetperfootLazy;
        }
        return this.kilopoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }
    /** */
    get MegapoundForceFeetPerFoot() {
        if (this.megapoundforcefeetperfootLazy !== null) {
            return this.megapoundforcefeetperfootLazy;
        }
        return this.megapoundforcefeetperfootLazy = this.convertFromBase(TorquePerLengthUnits.MegapoundForceFeetPerFoot);
    }
    /**
     * Create a new TorquePerLength instance from a NewtonMillimetersPerMeter
     *
     * @param value The unit as NewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromNewtonMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMillimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a NewtonCentimetersPerMeter
     *
     * @param value The unit as NewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromNewtonCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonCentimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a NewtonMetersPerMeter
     *
     * @param value The unit as NewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromNewtonMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.NewtonMetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a PoundForceInchesPerFoot
     *
     * @param value The unit as PoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromPoundForceInchesPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceInchesPerFoot);
    }
    /**
     * Create a new TorquePerLength instance from a PoundForceFeetPerFoot
     *
     * @param value The unit as PoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromPoundForceFeetPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.PoundForceFeetPerFoot);
    }
    /**
     * Create a new TorquePerLength instance from a KilogramForceMillimetersPerMeter
     *
     * @param value The unit as KilogramForceMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilogramForceMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMillimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a KilogramForceCentimetersPerMeter
     *
     * @param value The unit as KilogramForceCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilogramForceCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceCentimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a KilogramForceMetersPerMeter
     *
     * @param value The unit as KilogramForceMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilogramForceMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilogramForceMetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a TonneForceMillimetersPerMeter
     *
     * @param value The unit as TonneForceMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromTonneForceMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMillimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a TonneForceCentimetersPerMeter
     *
     * @param value The unit as TonneForceCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromTonneForceCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceCentimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a TonneForceMetersPerMeter
     *
     * @param value The unit as TonneForceMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromTonneForceMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.TonneForceMetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a KilonewtonMillimetersPerMeter
     *
     * @param value The unit as KilonewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilonewtonMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMillimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a MeganewtonMillimetersPerMeter
     *
     * @param value The unit as MeganewtonMillimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMeganewtonMillimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMillimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a KilonewtonCentimetersPerMeter
     *
     * @param value The unit as KilonewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilonewtonCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonCentimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a MeganewtonCentimetersPerMeter
     *
     * @param value The unit as MeganewtonCentimetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMeganewtonCentimetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonCentimetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a KilonewtonMetersPerMeter
     *
     * @param value The unit as KilonewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilonewtonMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilonewtonMetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a MeganewtonMetersPerMeter
     *
     * @param value The unit as MeganewtonMetersPerMeter to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMeganewtonMetersPerMeter(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MeganewtonMetersPerMeter);
    }
    /**
     * Create a new TorquePerLength instance from a KilopoundForceInchesPerFoot
     *
     * @param value The unit as KilopoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilopoundForceInchesPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceInchesPerFoot);
    }
    /**
     * Create a new TorquePerLength instance from a MegapoundForceInchesPerFoot
     *
     * @param value The unit as MegapoundForceInchesPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromMegapoundForceInchesPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.MegapoundForceInchesPerFoot);
    }
    /**
     * Create a new TorquePerLength instance from a KilopoundForceFeetPerFoot
     *
     * @param value The unit as KilopoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
    static FromKilopoundForceFeetPerFoot(value) {
        return new TorquePerLength(value, TorquePerLengthUnits.KilopoundForceFeetPerFoot);
    }
    /**
     * Create a new TorquePerLength instance from a MegapoundForceFeetPerFoot
     *
     * @param value The unit as MegapoundForceFeetPerFoot to create a new TorquePerLength from.
     * @returns The new TorquePerLength instance.
     */
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
    /**
     * Format the TorquePerLength to string.
     * Note! the default format for TorquePerLength is NewtonMetersPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the TorquePerLength.
     * @returns The string format of the TorquePerLength.
     */
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
                return this.KilonewtonMillimetersPerMeter + ` `;
            case TorquePerLengthUnits.MeganewtonMillimetersPerMeter:
                return this.MeganewtonMillimetersPerMeter + ` `;
            case TorquePerLengthUnits.KilonewtonCentimetersPerMeter:
                return this.KilonewtonCentimetersPerMeter + ` `;
            case TorquePerLengthUnits.MeganewtonCentimetersPerMeter:
                return this.MeganewtonCentimetersPerMeter + ` `;
            case TorquePerLengthUnits.KilonewtonMetersPerMeter:
                return this.KilonewtonMetersPerMeter + ` `;
            case TorquePerLengthUnits.MeganewtonMetersPerMeter:
                return this.MeganewtonMetersPerMeter + ` `;
            case TorquePerLengthUnits.KilopoundForceInchesPerFoot:
                return this.KilopoundForceInchesPerFoot + ` `;
            case TorquePerLengthUnits.MegapoundForceInchesPerFoot:
                return this.MegapoundForceInchesPerFoot + ` `;
            case TorquePerLengthUnits.KilopoundForceFeetPerFoot:
                return this.KilopoundForceFeetPerFoot + ` `;
            case TorquePerLengthUnits.MegapoundForceFeetPerFoot:
                return this.MegapoundForceFeetPerFoot + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given TorquePerLength are equals to the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns True if the given TorquePerLength are equal to the current TorquePerLength.
     */
    equals(torquePerLength) {
        return this.value === torquePerLength.BaseValue;
    }
    /**
     * Compare the given TorquePerLength against the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns 0 if they are equal, -1 if the current TorquePerLength is less then other, 1 if the current TorquePerLength is greater then other.
     */
    compareTo(torquePerLength) {
        if (this.value > torquePerLength.BaseValue)
            return 1;
        if (this.value < torquePerLength.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    add(torquePerLength) {
        return new TorquePerLength(this.value + torquePerLength.BaseValue);
    }
    /**
     * Subtract the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    subtract(torquePerLength) {
        return new TorquePerLength(this.value - torquePerLength.BaseValue);
    }
    /**
     * Multiply the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    multiply(torquePerLength) {
        return new TorquePerLength(this.value * torquePerLength.BaseValue);
    }
    /**
     * Divide the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    divide(torquePerLength) {
        return new TorquePerLength(this.value / torquePerLength.BaseValue);
    }
    /**
     * Modulo the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    modulo(torquePerLength) {
        return new TorquePerLength(this.value % torquePerLength.BaseValue);
    }
    /**
     * Pow the given TorquePerLength with the current TorquePerLength.
     * @param torquePerLength The other TorquePerLength.
     * @returns A new TorquePerLength instance with the results.
     */
    pow(torquePerLength) {
        return new TorquePerLength(this.value ** torquePerLength.BaseValue);
    }
}
exports.TorquePerLength = TorquePerLength;
//# sourceMappingURL=torqueperlength.g.js.map