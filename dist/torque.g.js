"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** TorqueUnits enumeration */
var TorqueUnits;
(function (TorqueUnits) {
    /** */
    TorqueUnits[TorqueUnits["NewtonMillimeters"] = 0] = "NewtonMillimeters";
    /** */
    TorqueUnits[TorqueUnits["NewtonCentimeters"] = 1] = "NewtonCentimeters";
    /** */
    TorqueUnits[TorqueUnits["NewtonMeters"] = 2] = "NewtonMeters";
    /** */
    TorqueUnits[TorqueUnits["PoundForceInches"] = 3] = "PoundForceInches";
    /** */
    TorqueUnits[TorqueUnits["PoundForceFeet"] = 4] = "PoundForceFeet";
    /** */
    TorqueUnits[TorqueUnits["KilogramForceMillimeters"] = 5] = "KilogramForceMillimeters";
    /** */
    TorqueUnits[TorqueUnits["KilogramForceCentimeters"] = 6] = "KilogramForceCentimeters";
    /** */
    TorqueUnits[TorqueUnits["KilogramForceMeters"] = 7] = "KilogramForceMeters";
    /** */
    TorqueUnits[TorqueUnits["TonneForceMillimeters"] = 8] = "TonneForceMillimeters";
    /** */
    TorqueUnits[TorqueUnits["TonneForceCentimeters"] = 9] = "TonneForceCentimeters";
    /** */
    TorqueUnits[TorqueUnits["TonneForceMeters"] = 10] = "TonneForceMeters";
    /** */
    TorqueUnits[TorqueUnits["KilonewtonMillimeters"] = 11] = "KilonewtonMillimeters";
    /** */
    TorqueUnits[TorqueUnits["MeganewtonMillimeters"] = 12] = "MeganewtonMillimeters";
    /** */
    TorqueUnits[TorqueUnits["KilonewtonCentimeters"] = 13] = "KilonewtonCentimeters";
    /** */
    TorqueUnits[TorqueUnits["MeganewtonCentimeters"] = 14] = "MeganewtonCentimeters";
    /** */
    TorqueUnits[TorqueUnits["KilonewtonMeters"] = 15] = "KilonewtonMeters";
    /** */
    TorqueUnits[TorqueUnits["MeganewtonMeters"] = 16] = "MeganewtonMeters";
    /** */
    TorqueUnits[TorqueUnits["KilopoundForceInches"] = 17] = "KilopoundForceInches";
    /** */
    TorqueUnits[TorqueUnits["MegapoundForceInches"] = 18] = "MegapoundForceInches";
    /** */
    TorqueUnits[TorqueUnits["KilopoundForceFeet"] = 19] = "KilopoundForceFeet";
    /** */
    TorqueUnits[TorqueUnits["MegapoundForceFeet"] = 20] = "MegapoundForceFeet";
})(TorqueUnits = exports.TorqueUnits || (exports.TorqueUnits = {}));
/** Torque, moment or moment of force (see the terminology below), is the tendency of a force to rotate an object about an axis,[1] fulcrum, or pivot. Just as a force is a push or a pull, a torque can be thought of as a twist to an object. Mathematically, torque is defined as the cross product of the lever-arm distance and force, which tends to produce rotation. Loosely speaking, torque is a measure of the turning force on an object such as a bolt or a flywheel. For example, pushing or pulling the handle of a wrench connected to a nut or bolt produces a torque (turning force) that loosens or tightens the nut or bolt. */
class Torque {
    /**
     * Create a new Torque.
     * @param value The value.
     * @param fromUnit The ‘Torque’ unit to create from.
     * The default unit is NewtonMeters
     */
    constructor(value, fromUnit = TorqueUnits.NewtonMeters) {
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
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Torque is NewtonMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonMillimeters() {
        if (this.newtonmillimetersLazy !== null) {
            return this.newtonmillimetersLazy;
        }
        return this.newtonmillimetersLazy = this.convertFromBase(TorqueUnits.NewtonMillimeters);
    }
    /** */
    get NewtonCentimeters() {
        if (this.newtoncentimetersLazy !== null) {
            return this.newtoncentimetersLazy;
        }
        return this.newtoncentimetersLazy = this.convertFromBase(TorqueUnits.NewtonCentimeters);
    }
    /** */
    get NewtonMeters() {
        if (this.newtonmetersLazy !== null) {
            return this.newtonmetersLazy;
        }
        return this.newtonmetersLazy = this.convertFromBase(TorqueUnits.NewtonMeters);
    }
    /** */
    get PoundForceInches() {
        if (this.poundforceinchesLazy !== null) {
            return this.poundforceinchesLazy;
        }
        return this.poundforceinchesLazy = this.convertFromBase(TorqueUnits.PoundForceInches);
    }
    /** */
    get PoundForceFeet() {
        if (this.poundforcefeetLazy !== null) {
            return this.poundforcefeetLazy;
        }
        return this.poundforcefeetLazy = this.convertFromBase(TorqueUnits.PoundForceFeet);
    }
    /** */
    get KilogramForceMillimeters() {
        if (this.kilogramforcemillimetersLazy !== null) {
            return this.kilogramforcemillimetersLazy;
        }
        return this.kilogramforcemillimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMillimeters);
    }
    /** */
    get KilogramForceCentimeters() {
        if (this.kilogramforcecentimetersLazy !== null) {
            return this.kilogramforcecentimetersLazy;
        }
        return this.kilogramforcecentimetersLazy = this.convertFromBase(TorqueUnits.KilogramForceCentimeters);
    }
    /** */
    get KilogramForceMeters() {
        if (this.kilogramforcemetersLazy !== null) {
            return this.kilogramforcemetersLazy;
        }
        return this.kilogramforcemetersLazy = this.convertFromBase(TorqueUnits.KilogramForceMeters);
    }
    /** */
    get TonneForceMillimeters() {
        if (this.tonneforcemillimetersLazy !== null) {
            return this.tonneforcemillimetersLazy;
        }
        return this.tonneforcemillimetersLazy = this.convertFromBase(TorqueUnits.TonneForceMillimeters);
    }
    /** */
    get TonneForceCentimeters() {
        if (this.tonneforcecentimetersLazy !== null) {
            return this.tonneforcecentimetersLazy;
        }
        return this.tonneforcecentimetersLazy = this.convertFromBase(TorqueUnits.TonneForceCentimeters);
    }
    /** */
    get TonneForceMeters() {
        if (this.tonneforcemetersLazy !== null) {
            return this.tonneforcemetersLazy;
        }
        return this.tonneforcemetersLazy = this.convertFromBase(TorqueUnits.TonneForceMeters);
    }
    /** */
    get KilonewtonMillimeters() {
        if (this.kilonewtonmillimetersLazy !== null) {
            return this.kilonewtonmillimetersLazy;
        }
        return this.kilonewtonmillimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMillimeters);
    }
    /** */
    get MeganewtonMillimeters() {
        if (this.meganewtonmillimetersLazy !== null) {
            return this.meganewtonmillimetersLazy;
        }
        return this.meganewtonmillimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMillimeters);
    }
    /** */
    get KilonewtonCentimeters() {
        if (this.kilonewtoncentimetersLazy !== null) {
            return this.kilonewtoncentimetersLazy;
        }
        return this.kilonewtoncentimetersLazy = this.convertFromBase(TorqueUnits.KilonewtonCentimeters);
    }
    /** */
    get MeganewtonCentimeters() {
        if (this.meganewtoncentimetersLazy !== null) {
            return this.meganewtoncentimetersLazy;
        }
        return this.meganewtoncentimetersLazy = this.convertFromBase(TorqueUnits.MeganewtonCentimeters);
    }
    /** */
    get KilonewtonMeters() {
        if (this.kilonewtonmetersLazy !== null) {
            return this.kilonewtonmetersLazy;
        }
        return this.kilonewtonmetersLazy = this.convertFromBase(TorqueUnits.KilonewtonMeters);
    }
    /** */
    get MeganewtonMeters() {
        if (this.meganewtonmetersLazy !== null) {
            return this.meganewtonmetersLazy;
        }
        return this.meganewtonmetersLazy = this.convertFromBase(TorqueUnits.MeganewtonMeters);
    }
    /** */
    get KilopoundForceInches() {
        if (this.kilopoundforceinchesLazy !== null) {
            return this.kilopoundforceinchesLazy;
        }
        return this.kilopoundforceinchesLazy = this.convertFromBase(TorqueUnits.KilopoundForceInches);
    }
    /** */
    get MegapoundForceInches() {
        if (this.megapoundforceinchesLazy !== null) {
            return this.megapoundforceinchesLazy;
        }
        return this.megapoundforceinchesLazy = this.convertFromBase(TorqueUnits.MegapoundForceInches);
    }
    /** */
    get KilopoundForceFeet() {
        if (this.kilopoundforcefeetLazy !== null) {
            return this.kilopoundforcefeetLazy;
        }
        return this.kilopoundforcefeetLazy = this.convertFromBase(TorqueUnits.KilopoundForceFeet);
    }
    /** */
    get MegapoundForceFeet() {
        if (this.megapoundforcefeetLazy !== null) {
            return this.megapoundforcefeetLazy;
        }
        return this.megapoundforcefeetLazy = this.convertFromBase(TorqueUnits.MegapoundForceFeet);
    }
    /**
     * Create a new Torque instance from a NewtonMillimeters
     *
     * @param value The unit as NewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromNewtonMillimeters(value) {
        return new Torque(value, TorqueUnits.NewtonMillimeters);
    }
    /**
     * Create a new Torque instance from a NewtonCentimeters
     *
     * @param value The unit as NewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromNewtonCentimeters(value) {
        return new Torque(value, TorqueUnits.NewtonCentimeters);
    }
    /**
     * Create a new Torque instance from a NewtonMeters
     *
     * @param value The unit as NewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromNewtonMeters(value) {
        return new Torque(value, TorqueUnits.NewtonMeters);
    }
    /**
     * Create a new Torque instance from a PoundForceInches
     *
     * @param value The unit as PoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromPoundForceInches(value) {
        return new Torque(value, TorqueUnits.PoundForceInches);
    }
    /**
     * Create a new Torque instance from a PoundForceFeet
     *
     * @param value The unit as PoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromPoundForceFeet(value) {
        return new Torque(value, TorqueUnits.PoundForceFeet);
    }
    /**
     * Create a new Torque instance from a KilogramForceMillimeters
     *
     * @param value The unit as KilogramForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilogramForceMillimeters(value) {
        return new Torque(value, TorqueUnits.KilogramForceMillimeters);
    }
    /**
     * Create a new Torque instance from a KilogramForceCentimeters
     *
     * @param value The unit as KilogramForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilogramForceCentimeters(value) {
        return new Torque(value, TorqueUnits.KilogramForceCentimeters);
    }
    /**
     * Create a new Torque instance from a KilogramForceMeters
     *
     * @param value The unit as KilogramForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilogramForceMeters(value) {
        return new Torque(value, TorqueUnits.KilogramForceMeters);
    }
    /**
     * Create a new Torque instance from a TonneForceMillimeters
     *
     * @param value The unit as TonneForceMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromTonneForceMillimeters(value) {
        return new Torque(value, TorqueUnits.TonneForceMillimeters);
    }
    /**
     * Create a new Torque instance from a TonneForceCentimeters
     *
     * @param value The unit as TonneForceCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromTonneForceCentimeters(value) {
        return new Torque(value, TorqueUnits.TonneForceCentimeters);
    }
    /**
     * Create a new Torque instance from a TonneForceMeters
     *
     * @param value The unit as TonneForceMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromTonneForceMeters(value) {
        return new Torque(value, TorqueUnits.TonneForceMeters);
    }
    /**
     * Create a new Torque instance from a KilonewtonMillimeters
     *
     * @param value The unit as KilonewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilonewtonMillimeters(value) {
        return new Torque(value, TorqueUnits.KilonewtonMillimeters);
    }
    /**
     * Create a new Torque instance from a MeganewtonMillimeters
     *
     * @param value The unit as MeganewtonMillimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMeganewtonMillimeters(value) {
        return new Torque(value, TorqueUnits.MeganewtonMillimeters);
    }
    /**
     * Create a new Torque instance from a KilonewtonCentimeters
     *
     * @param value The unit as KilonewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilonewtonCentimeters(value) {
        return new Torque(value, TorqueUnits.KilonewtonCentimeters);
    }
    /**
     * Create a new Torque instance from a MeganewtonCentimeters
     *
     * @param value The unit as MeganewtonCentimeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMeganewtonCentimeters(value) {
        return new Torque(value, TorqueUnits.MeganewtonCentimeters);
    }
    /**
     * Create a new Torque instance from a KilonewtonMeters
     *
     * @param value The unit as KilonewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilonewtonMeters(value) {
        return new Torque(value, TorqueUnits.KilonewtonMeters);
    }
    /**
     * Create a new Torque instance from a MeganewtonMeters
     *
     * @param value The unit as MeganewtonMeters to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMeganewtonMeters(value) {
        return new Torque(value, TorqueUnits.MeganewtonMeters);
    }
    /**
     * Create a new Torque instance from a KilopoundForceInches
     *
     * @param value The unit as KilopoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilopoundForceInches(value) {
        return new Torque(value, TorqueUnits.KilopoundForceInches);
    }
    /**
     * Create a new Torque instance from a MegapoundForceInches
     *
     * @param value The unit as MegapoundForceInches to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromMegapoundForceInches(value) {
        return new Torque(value, TorqueUnits.MegapoundForceInches);
    }
    /**
     * Create a new Torque instance from a KilopoundForceFeet
     *
     * @param value The unit as KilopoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
    static FromKilopoundForceFeet(value) {
        return new Torque(value, TorqueUnits.KilopoundForceFeet);
    }
    /**
     * Create a new Torque instance from a MegapoundForceFeet
     *
     * @param value The unit as MegapoundForceFeet to create a new Torque from.
     * @returns The new Torque instance.
     */
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
    /**
     * Format the Torque to string.
     * Note! the default format for Torque is NewtonMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Torque.
     * @returns The string format of the Torque.
     */
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
                return this.KilonewtonMillimeters + ` `;
            case TorqueUnits.MeganewtonMillimeters:
                return this.MeganewtonMillimeters + ` `;
            case TorqueUnits.KilonewtonCentimeters:
                return this.KilonewtonCentimeters + ` `;
            case TorqueUnits.MeganewtonCentimeters:
                return this.MeganewtonCentimeters + ` `;
            case TorqueUnits.KilonewtonMeters:
                return this.KilonewtonMeters + ` `;
            case TorqueUnits.MeganewtonMeters:
                return this.MeganewtonMeters + ` `;
            case TorqueUnits.KilopoundForceInches:
                return this.KilopoundForceInches + ` `;
            case TorqueUnits.MegapoundForceInches:
                return this.MegapoundForceInches + ` `;
            case TorqueUnits.KilopoundForceFeet:
                return this.KilopoundForceFeet + ` `;
            case TorqueUnits.MegapoundForceFeet:
                return this.MegapoundForceFeet + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Torque are equals to the current Torque.
     * @param torque The other Torque.
     * @returns True if the given Torque are equal to the current Torque.
     */
    equals(torque) {
        return this.value === torque.BaseValue;
    }
    /**
     * Compare the given Torque against the current Torque.
     * @param torque The other Torque.
     * @returns 0 if they are equal, -1 if the current Torque is less then other, 1 if the current Torque is greater then other.
     */
    compareTo(torque) {
        if (this.value > torque.BaseValue)
            return 1;
        if (this.value < torque.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    add(torque) {
        return new Torque(this.value + torque.BaseValue);
    }
    /**
     * Subtract the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    subtract(torque) {
        return new Torque(this.value - torque.BaseValue);
    }
    /**
     * Multiply the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    multiply(torque) {
        return new Torque(this.value * torque.BaseValue);
    }
    /**
     * Divide the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    divide(torque) {
        return new Torque(this.value / torque.BaseValue);
    }
    /**
     * Modulo the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    modulo(torque) {
        return new Torque(this.value % torque.BaseValue);
    }
    /**
     * Pow the given Torque with the current Torque.
     * @param torque The other Torque.
     * @returns A new Torque instance with the results.
     */
    pow(torque) {
        return new Torque(this.value ** torque.BaseValue);
    }
}
exports.Torque = Torque;
//# sourceMappingURL=torque.g.js.map