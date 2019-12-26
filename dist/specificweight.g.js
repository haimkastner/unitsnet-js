"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** SpecificWeightUnits enumeration */
var SpecificWeightUnits;
(function (SpecificWeightUnits) {
    /** */
    SpecificWeightUnits[SpecificWeightUnits["NewtonsPerCubicMillimeter"] = 0] = "NewtonsPerCubicMillimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["NewtonsPerCubicCentimeter"] = 1] = "NewtonsPerCubicCentimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["NewtonsPerCubicMeter"] = 2] = "NewtonsPerCubicMeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilogramsForcePerCubicMillimeter"] = 3] = "KilogramsForcePerCubicMillimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilogramsForcePerCubicCentimeter"] = 4] = "KilogramsForcePerCubicCentimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilogramsForcePerCubicMeter"] = 5] = "KilogramsForcePerCubicMeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["PoundsForcePerCubicInch"] = 6] = "PoundsForcePerCubicInch";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["PoundsForcePerCubicFoot"] = 7] = "PoundsForcePerCubicFoot";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["TonnesForcePerCubicMillimeter"] = 8] = "TonnesForcePerCubicMillimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["TonnesForcePerCubicCentimeter"] = 9] = "TonnesForcePerCubicCentimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["TonnesForcePerCubicMeter"] = 10] = "TonnesForcePerCubicMeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilonewtonsPerCubicMillimeter"] = 11] = "KilonewtonsPerCubicMillimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilonewtonsPerCubicCentimeter"] = 12] = "KilonewtonsPerCubicCentimeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilonewtonsPerCubicMeter"] = 13] = "KilonewtonsPerCubicMeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["MeganewtonsPerCubicMeter"] = 14] = "MeganewtonsPerCubicMeter";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilopoundsForcePerCubicInch"] = 15] = "KilopoundsForcePerCubicInch";
    /** */
    SpecificWeightUnits[SpecificWeightUnits["KilopoundsForcePerCubicFoot"] = 16] = "KilopoundsForcePerCubicFoot";
})(SpecificWeightUnits = exports.SpecificWeightUnits || (exports.SpecificWeightUnits = {}));
/** The SpecificWeight, or more precisely, the volumetric weight density, of a substance is its weight per unit volume. */
class SpecificWeight {
    /**
     * Create a new SpecificWeight.
     * @param value The value.
     * @param fromUnit The ‘SpecificWeight’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.newtonspercubicmillimeterLazy = null;
        this.newtonspercubiccentimeterLazy = null;
        this.newtonspercubicmeterLazy = null;
        this.kilogramsforcepercubicmillimeterLazy = null;
        this.kilogramsforcepercubiccentimeterLazy = null;
        this.kilogramsforcepercubicmeterLazy = null;
        this.poundsforcepercubicinchLazy = null;
        this.poundsforcepercubicfootLazy = null;
        this.tonnesforcepercubicmillimeterLazy = null;
        this.tonnesforcepercubiccentimeterLazy = null;
        this.tonnesforcepercubicmeterLazy = null;
        this.kilonewtonspercubicmillimeterLazy = null;
        this.kilonewtonspercubiccentimeterLazy = null;
        this.kilonewtonspercubicmeterLazy = null;
        this.meganewtonspercubicmeterLazy = null;
        this.kilopoundsforcepercubicinchLazy = null;
        this.kilopoundsforcepercubicfootLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of SpecificWeight is NewtonPerCubicMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonsPerCubicMillimeter() {
        if (this.newtonspercubicmillimeterLazy !== null) {
            return this.newtonspercubicmillimeterLazy;
        }
        return this.newtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }
    /** */
    get NewtonsPerCubicCentimeter() {
        if (this.newtonspercubiccentimeterLazy !== null) {
            return this.newtonspercubiccentimeterLazy;
        }
        return this.newtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }
    /** */
    get NewtonsPerCubicMeter() {
        if (this.newtonspercubicmeterLazy !== null) {
            return this.newtonspercubicmeterLazy;
        }
        return this.newtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.NewtonsPerCubicMeter);
    }
    /** */
    get KilogramsForcePerCubicMillimeter() {
        if (this.kilogramsforcepercubicmillimeterLazy !== null) {
            return this.kilogramsforcepercubicmillimeterLazy;
        }
        return this.kilogramsforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }
    /** */
    get KilogramsForcePerCubicCentimeter() {
        if (this.kilogramsforcepercubiccentimeterLazy !== null) {
            return this.kilogramsforcepercubiccentimeterLazy;
        }
        return this.kilogramsforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }
    /** */
    get KilogramsForcePerCubicMeter() {
        if (this.kilogramsforcepercubicmeterLazy !== null) {
            return this.kilogramsforcepercubicmeterLazy;
        }
        return this.kilogramsforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }
    /** */
    get PoundsForcePerCubicInch() {
        if (this.poundsforcepercubicinchLazy !== null) {
            return this.poundsforcepercubicinchLazy;
        }
        return this.poundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicInch);
    }
    /** */
    get PoundsForcePerCubicFoot() {
        if (this.poundsforcepercubicfootLazy !== null) {
            return this.poundsforcepercubicfootLazy;
        }
        return this.poundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.PoundsForcePerCubicFoot);
    }
    /** */
    get TonnesForcePerCubicMillimeter() {
        if (this.tonnesforcepercubicmillimeterLazy !== null) {
            return this.tonnesforcepercubicmillimeterLazy;
        }
        return this.tonnesforcepercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }
    /** */
    get TonnesForcePerCubicCentimeter() {
        if (this.tonnesforcepercubiccentimeterLazy !== null) {
            return this.tonnesforcepercubiccentimeterLazy;
        }
        return this.tonnesforcepercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }
    /** */
    get TonnesForcePerCubicMeter() {
        if (this.tonnesforcepercubicmeterLazy !== null) {
            return this.tonnesforcepercubicmeterLazy;
        }
        return this.tonnesforcepercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.TonnesForcePerCubicMeter);
    }
    /** */
    get KilonewtonsPerCubicMillimeter() {
        if (this.kilonewtonspercubicmillimeterLazy !== null) {
            return this.kilonewtonspercubicmillimeterLazy;
        }
        return this.kilonewtonspercubicmillimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }
    /** */
    get KilonewtonsPerCubicCentimeter() {
        if (this.kilonewtonspercubiccentimeterLazy !== null) {
            return this.kilonewtonspercubiccentimeterLazy;
        }
        return this.kilonewtonspercubiccentimeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }
    /** */
    get KilonewtonsPerCubicMeter() {
        if (this.kilonewtonspercubicmeterLazy !== null) {
            return this.kilonewtonspercubicmeterLazy;
        }
        return this.kilonewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }
    /** */
    get MeganewtonsPerCubicMeter() {
        if (this.meganewtonspercubicmeterLazy !== null) {
            return this.meganewtonspercubicmeterLazy;
        }
        return this.meganewtonspercubicmeterLazy = this.convertFromBase(SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }
    /** */
    get KilopoundsForcePerCubicInch() {
        if (this.kilopoundsforcepercubicinchLazy !== null) {
            return this.kilopoundsforcepercubicinchLazy;
        }
        return this.kilopoundsforcepercubicinchLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }
    /** */
    get KilopoundsForcePerCubicFoot() {
        if (this.kilopoundsforcepercubicfootLazy !== null) {
            return this.kilopoundsforcepercubicfootLazy;
        }
        return this.kilopoundsforcepercubicfootLazy = this.convertFromBase(SpecificWeightUnits.KilopoundsForcePerCubicFoot);
    }
    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMillimeter
     *
     * @param value The unit as NewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromNewtonsPerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMillimeter);
    }
    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicCentimeter
     *
     * @param value The unit as NewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromNewtonsPerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicCentimeter);
    }
    /**
     * Create a new SpecificWeight instance from a NewtonsPerCubicMeter
     *
     * @param value The unit as NewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromNewtonsPerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.NewtonsPerCubicMeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMillimeter
     *
     * @param value The unit as KilogramsForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilogramsForcePerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMillimeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicCentimeter
     *
     * @param value The unit as KilogramsForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilogramsForcePerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicCentimeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilogramsForcePerCubicMeter
     *
     * @param value The unit as KilogramsForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilogramsForcePerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilogramsForcePerCubicMeter);
    }
    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicInch
     *
     * @param value The unit as PoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromPoundsForcePerCubicInch(value) {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicInch);
    }
    /**
     * Create a new SpecificWeight instance from a PoundsForcePerCubicFoot
     *
     * @param value The unit as PoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromPoundsForcePerCubicFoot(value) {
        return new SpecificWeight(value, SpecificWeightUnits.PoundsForcePerCubicFoot);
    }
    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMillimeter
     *
     * @param value The unit as TonnesForcePerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromTonnesForcePerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMillimeter);
    }
    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicCentimeter
     *
     * @param value The unit as TonnesForcePerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromTonnesForcePerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicCentimeter);
    }
    /**
     * Create a new SpecificWeight instance from a TonnesForcePerCubicMeter
     *
     * @param value The unit as TonnesForcePerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromTonnesForcePerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.TonnesForcePerCubicMeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMillimeter
     *
     * @param value The unit as KilonewtonsPerCubicMillimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilonewtonsPerCubicMillimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMillimeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicCentimeter
     *
     * @param value The unit as KilonewtonsPerCubicCentimeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilonewtonsPerCubicCentimeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicCentimeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilonewtonsPerCubicMeter
     *
     * @param value The unit as KilonewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilonewtonsPerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilonewtonsPerCubicMeter);
    }
    /**
     * Create a new SpecificWeight instance from a MeganewtonsPerCubicMeter
     *
     * @param value The unit as MeganewtonsPerCubicMeter to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromMeganewtonsPerCubicMeter(value) {
        return new SpecificWeight(value, SpecificWeightUnits.MeganewtonsPerCubicMeter);
    }
    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicInch
     *
     * @param value The unit as KilopoundsForcePerCubicInch to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilopoundsForcePerCubicInch(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicInch);
    }
    /**
     * Create a new SpecificWeight instance from a KilopoundsForcePerCubicFoot
     *
     * @param value The unit as KilopoundsForcePerCubicFoot to create a new SpecificWeight from.
     * @returns The new SpecificWeight instance.
     */
    static FromKilopoundsForcePerCubicFoot(value) {
        return new SpecificWeight(value, SpecificWeightUnits.KilopoundsForcePerCubicFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.value * 0.000000001;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.value * 0.000001;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.value / 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.value / 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.value / 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.value / 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.value / 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.value / 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.value / 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.value / 9.80665e3;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return (this.value * 0.000000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return (this.value * 0.000001) / 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return (this.value) / 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return (this.value) / 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return (this.value / 2.714471375263134e5) / 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return (this.value / 1.570874638462462e2) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return value * 1000000000;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return value * 1000000;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return value;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return value * 9.80665e9;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return value * 9.80665e6;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return value * 9.80665;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return value * 2.714471375263134e5;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return value * 1.570874638462462e2;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return value * 9.80665e12;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return value * 9.80665e9;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return value * 9.80665e3;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return (value * 1000000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return (value * 1000000) * 1000;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return (value) * 1000;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return (value) * 1000000;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return (value * 2.714471375263134e5) * 1000;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return (value * 1.570874638462462e2) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the SpecificWeight to string.
     * Note! the default format for SpecificWeight is NewtonsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the SpecificWeight.
     * @returns The string format of the SpecificWeight.
     */
    toString(toUnit = SpecificWeightUnits.NewtonsPerCubicMeter) {
        switch (toUnit) {
            case SpecificWeightUnits.NewtonsPerCubicMillimeter:
                return this.NewtonsPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.NewtonsPerCubicCentimeter:
                return this.NewtonsPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.NewtonsPerCubicMeter:
                return this.NewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMillimeter:
                return this.KilogramsForcePerCubicMillimeter + ` kgf/mm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicCentimeter:
                return this.KilogramsForcePerCubicCentimeter + ` kgf/cm³`;
            case SpecificWeightUnits.KilogramsForcePerCubicMeter:
                return this.KilogramsForcePerCubicMeter + ` kgf/m³`;
            case SpecificWeightUnits.PoundsForcePerCubicInch:
                return this.PoundsForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.PoundsForcePerCubicFoot:
                return this.PoundsForcePerCubicFoot + ` lbf/ft³`;
            case SpecificWeightUnits.TonnesForcePerCubicMillimeter:
                return this.TonnesForcePerCubicMillimeter + ` tf/mm³`;
            case SpecificWeightUnits.TonnesForcePerCubicCentimeter:
                return this.TonnesForcePerCubicCentimeter + ` tf/cm³`;
            case SpecificWeightUnits.TonnesForcePerCubicMeter:
                return this.TonnesForcePerCubicMeter + ` tf/m³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMillimeter:
                return this.KilonewtonsPerCubicMillimeter + ` N/mm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicCentimeter:
                return this.KilonewtonsPerCubicCentimeter + ` N/cm³`;
            case SpecificWeightUnits.KilonewtonsPerCubicMeter:
                return this.KilonewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.MeganewtonsPerCubicMeter:
                return this.MeganewtonsPerCubicMeter + ` N/m³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicInch:
                return this.KilopoundsForcePerCubicInch + ` lbf/in³`;
            case SpecificWeightUnits.KilopoundsForcePerCubicFoot:
                return this.KilopoundsForcePerCubicFoot + ` lbf/ft³`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.SpecificWeight = SpecificWeight;
//# sourceMappingURL=specificweight.g.js.map