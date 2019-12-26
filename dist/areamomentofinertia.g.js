"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** AreaMomentOfInertiaUnits enumeration */
var AreaMomentOfInertiaUnits;
(function (AreaMomentOfInertiaUnits) {
    /** */
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["MetersToTheFourth"] = 0] = "MetersToTheFourth";
    /** */
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["DecimetersToTheFourth"] = 1] = "DecimetersToTheFourth";
    /** */
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["CentimetersToTheFourth"] = 2] = "CentimetersToTheFourth";
    /** */
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["MillimetersToTheFourth"] = 3] = "MillimetersToTheFourth";
    /** */
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["FeetToTheFourth"] = 4] = "FeetToTheFourth";
    /** */
    AreaMomentOfInertiaUnits[AreaMomentOfInertiaUnits["InchesToTheFourth"] = 5] = "InchesToTheFourth";
})(AreaMomentOfInertiaUnits = exports.AreaMomentOfInertiaUnits || (exports.AreaMomentOfInertiaUnits = {}));
/** A geometric property of an area that reflects how its points are distributed with regard to an axis. */
class AreaMomentOfInertia {
    /**
     * Create a new AreaMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘AreaMomentOfInertia’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.meterstothefourthLazy = null;
        this.decimeterstothefourthLazy = null;
        this.centimeterstothefourthLazy = null;
        this.millimeterstothefourthLazy = null;
        this.feettothefourthLazy = null;
        this.inchestothefourthLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of AreaMomentOfInertia is MeterToTheFourth.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get MetersToTheFourth() {
        if (this.meterstothefourthLazy !== null) {
            return this.meterstothefourthLazy;
        }
        return this.meterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MetersToTheFourth);
    }
    /** */
    get DecimetersToTheFourth() {
        if (this.decimeterstothefourthLazy !== null) {
            return this.decimeterstothefourthLazy;
        }
        return this.decimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }
    /** */
    get CentimetersToTheFourth() {
        if (this.centimeterstothefourthLazy !== null) {
            return this.centimeterstothefourthLazy;
        }
        return this.centimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }
    /** */
    get MillimetersToTheFourth() {
        if (this.millimeterstothefourthLazy !== null) {
            return this.millimeterstothefourthLazy;
        }
        return this.millimeterstothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }
    /** */
    get FeetToTheFourth() {
        if (this.feettothefourthLazy !== null) {
            return this.feettothefourthLazy;
        }
        return this.feettothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.FeetToTheFourth);
    }
    /** */
    get InchesToTheFourth() {
        if (this.inchestothefourthLazy !== null) {
            return this.inchestothefourthLazy;
        }
        return this.inchestothefourthLazy = this.convertFromBase(AreaMomentOfInertiaUnits.InchesToTheFourth);
    }
    /**
     * Create a new AreaMomentOfInertia instance from a MetersToTheFourth
     *
     * @param value The unit as MetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromMetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MetersToTheFourth);
    }
    /**
     * Create a new AreaMomentOfInertia instance from a DecimetersToTheFourth
     *
     * @param value The unit as DecimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromDecimetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.DecimetersToTheFourth);
    }
    /**
     * Create a new AreaMomentOfInertia instance from a CentimetersToTheFourth
     *
     * @param value The unit as CentimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromCentimetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.CentimetersToTheFourth);
    }
    /**
     * Create a new AreaMomentOfInertia instance from a MillimetersToTheFourth
     *
     * @param value The unit as MillimetersToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromMillimetersToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.MillimetersToTheFourth);
    }
    /**
     * Create a new AreaMomentOfInertia instance from a FeetToTheFourth
     *
     * @param value The unit as FeetToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromFeetToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.FeetToTheFourth);
    }
    /**
     * Create a new AreaMomentOfInertia instance from a InchesToTheFourth
     *
     * @param value The unit as InchesToTheFourth to create a new AreaMomentOfInertia from.
     * @returns The new AreaMomentOfInertia instance.
     */
    static FromInchesToTheFourth(value) {
        return new AreaMomentOfInertia(value, AreaMomentOfInertiaUnits.InchesToTheFourth);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.value * 1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.value * 1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.value * 1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.value / Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.value / Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return value;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return value / 1e4;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return value / 1e8;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return value / 1e12;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return value * Math.pow(0.3048, 4);
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return value * Math.pow(2.54e-2, 4);
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the AreaMomentOfInertia to string.
     * Note! the default format for AreaMomentOfInertia is MetersToTheFourth.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AreaMomentOfInertia.
     * @returns The string format of the AreaMomentOfInertia.
     */
    toString(toUnit = AreaMomentOfInertiaUnits.MetersToTheFourth) {
        switch (toUnit) {
            case AreaMomentOfInertiaUnits.MetersToTheFourth:
                return this.MetersToTheFourth + ` m⁴`;
            case AreaMomentOfInertiaUnits.DecimetersToTheFourth:
                return this.DecimetersToTheFourth + ` dm⁴`;
            case AreaMomentOfInertiaUnits.CentimetersToTheFourth:
                return this.CentimetersToTheFourth + ` cm⁴`;
            case AreaMomentOfInertiaUnits.MillimetersToTheFourth:
                return this.MillimetersToTheFourth + ` mm⁴`;
            case AreaMomentOfInertiaUnits.FeetToTheFourth:
                return this.FeetToTheFourth + ` ft⁴`;
            case AreaMomentOfInertiaUnits.InchesToTheFourth:
                return this.InchesToTheFourth + ` in⁴`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.AreaMomentOfInertia = AreaMomentOfInertia;
//# sourceMappingURL=areamomentofinertia.g.js.map