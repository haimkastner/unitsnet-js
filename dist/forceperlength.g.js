"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ForcePerLengthUnits enumeration */
var ForcePerLengthUnits;
(function (ForcePerLengthUnits) {
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["NewtonsPerMeter"] = 0] = "NewtonsPerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["KilogramsForcePerMeter"] = 1] = "KilogramsForcePerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerFoot"] = 2] = "PoundsForcePerFoot";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerInch"] = 3] = "PoundsForcePerInch";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["PoundsForcePerYard"] = 4] = "PoundsForcePerYard";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["NanonewtonsPerMeter"] = 5] = "NanonewtonsPerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["MicronewtonsPerMeter"] = 6] = "MicronewtonsPerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["CentinewtonsPerMeter"] = 7] = "CentinewtonsPerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["DecinewtonsPerMeter"] = 8] = "DecinewtonsPerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["KilonewtonsPerMeter"] = 9] = "KilonewtonsPerMeter";
    /** */
    ForcePerLengthUnits[ForcePerLengthUnits["MeganewtonsPerMeter"] = 10] = "MeganewtonsPerMeter";
})(ForcePerLengthUnits = exports.ForcePerLengthUnits || (exports.ForcePerLengthUnits = {}));
/** The magnitude of force per unit length. */
class ForcePerLength {
    /**
     * Create a new ForcePerLength.
     * @param value The value.
     * @param fromUnit The ‘ForcePerLength’ unit to create from.
     * The default unit is NewtonsPerMeter
     */
    constructor(value, fromUnit = ForcePerLengthUnits.NewtonsPerMeter) {
        this.newtonspermeterLazy = null;
        this.kilogramsforcepermeterLazy = null;
        this.poundsforceperfootLazy = null;
        this.poundsforceperinchLazy = null;
        this.poundsforceperyardLazy = null;
        this.nanonewtonspermeterLazy = null;
        this.micronewtonspermeterLazy = null;
        this.centinewtonspermeterLazy = null;
        this.decinewtonspermeterLazy = null;
        this.kilonewtonspermeterLazy = null;
        this.meganewtonspermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ForcePerLength is NewtonsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonsPerMeter() {
        if (this.newtonspermeterLazy !== null) {
            return this.newtonspermeterLazy;
        }
        return this.newtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NewtonsPerMeter);
    }
    /** */
    get KilogramsForcePerMeter() {
        if (this.kilogramsforcepermeterLazy !== null) {
            return this.kilogramsforcepermeterLazy;
        }
        return this.kilogramsforcepermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilogramsForcePerMeter);
    }
    /** */
    get PoundsForcePerFoot() {
        if (this.poundsforceperfootLazy !== null) {
            return this.poundsforceperfootLazy;
        }
        return this.poundsforceperfootLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerFoot);
    }
    /** */
    get PoundsForcePerInch() {
        if (this.poundsforceperinchLazy !== null) {
            return this.poundsforceperinchLazy;
        }
        return this.poundsforceperinchLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerInch);
    }
    /** */
    get PoundsForcePerYard() {
        if (this.poundsforceperyardLazy !== null) {
            return this.poundsforceperyardLazy;
        }
        return this.poundsforceperyardLazy = this.convertFromBase(ForcePerLengthUnits.PoundsForcePerYard);
    }
    /** */
    get NanonewtonsPerMeter() {
        if (this.nanonewtonspermeterLazy !== null) {
            return this.nanonewtonspermeterLazy;
        }
        return this.nanonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.NanonewtonsPerMeter);
    }
    /** */
    get MicronewtonsPerMeter() {
        if (this.micronewtonspermeterLazy !== null) {
            return this.micronewtonspermeterLazy;
        }
        return this.micronewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MicronewtonsPerMeter);
    }
    /** */
    get CentinewtonsPerMeter() {
        if (this.centinewtonspermeterLazy !== null) {
            return this.centinewtonspermeterLazy;
        }
        return this.centinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.CentinewtonsPerMeter);
    }
    /** */
    get DecinewtonsPerMeter() {
        if (this.decinewtonspermeterLazy !== null) {
            return this.decinewtonspermeterLazy;
        }
        return this.decinewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.DecinewtonsPerMeter);
    }
    /** */
    get KilonewtonsPerMeter() {
        if (this.kilonewtonspermeterLazy !== null) {
            return this.kilonewtonspermeterLazy;
        }
        return this.kilonewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.KilonewtonsPerMeter);
    }
    /** */
    get MeganewtonsPerMeter() {
        if (this.meganewtonspermeterLazy !== null) {
            return this.meganewtonspermeterLazy;
        }
        return this.meganewtonspermeterLazy = this.convertFromBase(ForcePerLengthUnits.MeganewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a NewtonsPerMeter
     *
     * @param value The unit as NewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromNewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.NewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a KilogramsForcePerMeter
     *
     * @param value The unit as KilogramsForcePerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromKilogramsForcePerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.KilogramsForcePerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a PoundsForcePerFoot
     *
     * @param value The unit as PoundsForcePerFoot to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromPoundsForcePerFoot(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerFoot);
    }
    /**
     * Create a new ForcePerLength instance from a PoundsForcePerInch
     *
     * @param value The unit as PoundsForcePerInch to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromPoundsForcePerInch(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerInch);
    }
    /**
     * Create a new ForcePerLength instance from a PoundsForcePerYard
     *
     * @param value The unit as PoundsForcePerYard to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromPoundsForcePerYard(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.PoundsForcePerYard);
    }
    /**
     * Create a new ForcePerLength instance from a NanonewtonsPerMeter
     *
     * @param value The unit as NanonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromNanonewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.NanonewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a MicronewtonsPerMeter
     *
     * @param value The unit as MicronewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromMicronewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.MicronewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a CentinewtonsPerMeter
     *
     * @param value The unit as CentinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromCentinewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.CentinewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a DecinewtonsPerMeter
     *
     * @param value The unit as DecinewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromDecinewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.DecinewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a KilonewtonsPerMeter
     *
     * @param value The unit as KilonewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromKilonewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.KilonewtonsPerMeter);
    }
    /**
     * Create a new ForcePerLength instance from a MeganewtonsPerMeter
     *
     * @param value The unit as MeganewtonsPerMeter to create a new ForcePerLength from.
     * @returns The new ForcePerLength instance.
     */
    static FromMeganewtonsPerMeter(value) {
        return new ForcePerLength(value, ForcePerLengthUnits.MeganewtonsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.value / 9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.value / 14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.value / 1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.value / 4.864634307;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (this.value) / 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (this.value) / 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (this.value) / 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (this.value) / 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (this.value) / 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter:
                return value;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return value * 9.80665002864;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return value * 14.59390292;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return value * 1.75126835e2;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return value * 4.864634307;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return (value) * 1e-9;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return (value) * 0.000001;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return (value) * 0.01;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return (value) * 0.1;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return (value) * 1000;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ForcePerLength to string.
     * Note! the default format for ForcePerLength is NewtonsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForcePerLength.
     * @returns The string format of the ForcePerLength.
     */
    toString(toUnit = ForcePerLengthUnits.NewtonsPerMeter) {
        switch (toUnit) {
            case ForcePerLengthUnits.NewtonsPerMeter:
                return this.NewtonsPerMeter + ` N/m`;
            case ForcePerLengthUnits.KilogramsForcePerMeter:
                return this.KilogramsForcePerMeter + ` kgf/m`;
            case ForcePerLengthUnits.PoundsForcePerFoot:
                return this.PoundsForcePerFoot + ` lbf/ft`;
            case ForcePerLengthUnits.PoundsForcePerInch:
                return this.PoundsForcePerInch + ` lbf/in`;
            case ForcePerLengthUnits.PoundsForcePerYard:
                return this.PoundsForcePerYard + ` lbf/yd`;
            case ForcePerLengthUnits.NanonewtonsPerMeter:
                return this.NanonewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MicronewtonsPerMeter:
                return this.MicronewtonsPerMeter + ` `;
            case ForcePerLengthUnits.CentinewtonsPerMeter:
                return this.CentinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.DecinewtonsPerMeter:
                return this.DecinewtonsPerMeter + ` `;
            case ForcePerLengthUnits.KilonewtonsPerMeter:
                return this.KilonewtonsPerMeter + ` `;
            case ForcePerLengthUnits.MeganewtonsPerMeter:
                return this.MeganewtonsPerMeter + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ForcePerLength are equals to the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns True if the given ForcePerLength are equal to the current ForcePerLength.
     */
    equals(forcePerLength) {
        return this.value === forcePerLength.BaseValue;
    }
    /**
     * Compare the given ForcePerLength against the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns 0 if they are equal, -1 if the current ForcePerLength is less then other, 1 if the current ForcePerLength is greater then other.
     */
    compareTo(forcePerLength) {
        if (this.value > forcePerLength.BaseValue)
            return 1;
        if (this.value < forcePerLength.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    add(forcePerLength) {
        return new ForcePerLength(this.value + forcePerLength.BaseValue);
    }
    /**
     * Subtract the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    subtract(forcePerLength) {
        return new ForcePerLength(this.value - forcePerLength.BaseValue);
    }
    /**
     * Multiply the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    multiply(forcePerLength) {
        return new ForcePerLength(this.value * forcePerLength.BaseValue);
    }
    /**
     * Divide the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    divide(forcePerLength) {
        return new ForcePerLength(this.value / forcePerLength.BaseValue);
    }
    /**
     * Modulo the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    modulo(forcePerLength) {
        return new ForcePerLength(this.value % forcePerLength.BaseValue);
    }
    /**
     * Pow the given ForcePerLength with the current ForcePerLength.
     * @param forcePerLength The other ForcePerLength.
     * @returns A new ForcePerLength instance with the results.
     */
    pow(forcePerLength) {
        return new ForcePerLength(this.value ** forcePerLength.BaseValue);
    }
}
exports.ForcePerLength = ForcePerLength;
//# sourceMappingURL=forceperlength.g.js.map