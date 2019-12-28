"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** DynamicViscosityUnits enumeration */
var DynamicViscosityUnits;
(function (DynamicViscosityUnits) {
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["NewtonSecondsPerMeterSquared"] = 0] = "NewtonSecondsPerMeterSquared";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["PascalSeconds"] = 1] = "PascalSeconds";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["Poise"] = 2] = "Poise";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["Reyns"] = 3] = "Reyns";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["PoundsForceSecondPerSquareInch"] = 4] = "PoundsForceSecondPerSquareInch";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["PoundsForceSecondPerSquareFoot"] = 5] = "PoundsForceSecondPerSquareFoot";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["MicropascalSeconds"] = 6] = "MicropascalSeconds";
    /** */
    DynamicViscosityUnits[DynamicViscosityUnits["Centipoise"] = 7] = "Centipoise";
})(DynamicViscosityUnits = exports.DynamicViscosityUnits || (exports.DynamicViscosityUnits = {}));
/** The dynamic (shear) viscosity of a fluid expresses its resistance to shearing flows, where adjacent layers move parallel to each other with different speeds */
class DynamicViscosity {
    /**
     * Create a new DynamicViscosity.
     * @param value The value.
     * @param fromUnit The ‘DynamicViscosity’ unit to create from.
     * The default unit is NewtonSecondsPerMeterSquared
     */
    constructor(value, fromUnit = DynamicViscosityUnits.NewtonSecondsPerMeterSquared) {
        this.newtonsecondspermetersquaredLazy = null;
        this.pascalsecondsLazy = null;
        this.poiseLazy = null;
        this.reynsLazy = null;
        this.poundsforcesecondpersquareinchLazy = null;
        this.poundsforcesecondpersquarefootLazy = null;
        this.micropascalsecondsLazy = null;
        this.centipoiseLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of DynamicViscosity is NewtonSecondsPerMeterSquared.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get NewtonSecondsPerMeterSquared() {
        if (this.newtonsecondspermetersquaredLazy !== null) {
            return this.newtonsecondspermetersquaredLazy;
        }
        return this.newtonsecondspermetersquaredLazy = this.convertFromBase(DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }
    /** */
    get PascalSeconds() {
        if (this.pascalsecondsLazy !== null) {
            return this.pascalsecondsLazy;
        }
        return this.pascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.PascalSeconds);
    }
    /** */
    get Poise() {
        if (this.poiseLazy !== null) {
            return this.poiseLazy;
        }
        return this.poiseLazy = this.convertFromBase(DynamicViscosityUnits.Poise);
    }
    /** */
    get Reyns() {
        if (this.reynsLazy !== null) {
            return this.reynsLazy;
        }
        return this.reynsLazy = this.convertFromBase(DynamicViscosityUnits.Reyns);
    }
    /** */
    get PoundsForceSecondPerSquareInch() {
        if (this.poundsforcesecondpersquareinchLazy !== null) {
            return this.poundsforcesecondpersquareinchLazy;
        }
        return this.poundsforcesecondpersquareinchLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }
    /** */
    get PoundsForceSecondPerSquareFoot() {
        if (this.poundsforcesecondpersquarefootLazy !== null) {
            return this.poundsforcesecondpersquarefootLazy;
        }
        return this.poundsforcesecondpersquarefootLazy = this.convertFromBase(DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }
    /** */
    get MicropascalSeconds() {
        if (this.micropascalsecondsLazy !== null) {
            return this.micropascalsecondsLazy;
        }
        return this.micropascalsecondsLazy = this.convertFromBase(DynamicViscosityUnits.MicropascalSeconds);
    }
    /** */
    get Centipoise() {
        if (this.centipoiseLazy !== null) {
            return this.centipoiseLazy;
        }
        return this.centipoiseLazy = this.convertFromBase(DynamicViscosityUnits.Centipoise);
    }
    /**
     * Create a new DynamicViscosity instance from a NewtonSecondsPerMeterSquared
     *
     * @param value The unit as NewtonSecondsPerMeterSquared to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromNewtonSecondsPerMeterSquared(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.NewtonSecondsPerMeterSquared);
    }
    /**
     * Create a new DynamicViscosity instance from a PascalSeconds
     *
     * @param value The unit as PascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPascalSeconds(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.PascalSeconds);
    }
    /**
     * Create a new DynamicViscosity instance from a Poise
     *
     * @param value The unit as Poise to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPoise(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Poise);
    }
    /**
     * Create a new DynamicViscosity instance from a Reyns
     *
     * @param value The unit as Reyns to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromReyns(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Reyns);
    }
    /**
     * Create a new DynamicViscosity instance from a PoundsForceSecondPerSquareInch
     *
     * @param value The unit as PoundsForceSecondPerSquareInch to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPoundsForceSecondPerSquareInch(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareInch);
    }
    /**
     * Create a new DynamicViscosity instance from a PoundsForceSecondPerSquareFoot
     *
     * @param value The unit as PoundsForceSecondPerSquareFoot to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromPoundsForceSecondPerSquareFoot(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.PoundsForceSecondPerSquareFoot);
    }
    /**
     * Create a new DynamicViscosity instance from a MicropascalSeconds
     *
     * @param value The unit as MicropascalSeconds to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromMicropascalSeconds(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.MicropascalSeconds);
    }
    /**
     * Create a new DynamicViscosity instance from a Centipoise
     *
     * @param value The unit as Centipoise to create a new DynamicViscosity from.
     * @returns The new DynamicViscosity instance.
     */
    static FromCentipoise(value) {
        return new DynamicViscosity(value, DynamicViscosityUnits.Centipoise);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return this.value;
            case DynamicViscosityUnits.PascalSeconds:
                return this.value;
            case DynamicViscosityUnits.Poise:
                return this.value * 10;
            case DynamicViscosityUnits.Reyns:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.value / 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.value / 4.7880258980335843e1;
            case DynamicViscosityUnits.MicropascalSeconds:
                return (this.value) / 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (this.value * 10) / 0.01;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return value;
            case DynamicViscosityUnits.PascalSeconds:
                return value;
            case DynamicViscosityUnits.Poise:
                return value / 10;
            case DynamicViscosityUnits.Reyns:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return value * 6.8947572931683613e3;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return value * 4.7880258980335843e1;
            case DynamicViscosityUnits.MicropascalSeconds:
                return (value) * 0.000001;
            case DynamicViscosityUnits.Centipoise:
                return (value / 10) * 0.01;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the DynamicViscosity to string.
     * Note! the default format for DynamicViscosity is NewtonSecondsPerMeterSquared.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the DynamicViscosity.
     * @returns The string format of the DynamicViscosity.
     */
    toString(toUnit = DynamicViscosityUnits.NewtonSecondsPerMeterSquared) {
        switch (toUnit) {
            case DynamicViscosityUnits.NewtonSecondsPerMeterSquared:
                return this.NewtonSecondsPerMeterSquared + ` Ns/m²`;
            case DynamicViscosityUnits.PascalSeconds:
                return this.PascalSeconds + ` Pa·s`;
            case DynamicViscosityUnits.Poise:
                return this.Poise + ` P`;
            case DynamicViscosityUnits.Reyns:
                return this.Reyns + ` reyn`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareInch:
                return this.PoundsForceSecondPerSquareInch + ` lbf·s/in²`;
            case DynamicViscosityUnits.PoundsForceSecondPerSquareFoot:
                return this.PoundsForceSecondPerSquareFoot + ` lbf·s/ft²`;
            case DynamicViscosityUnits.MicropascalSeconds:
                return this.MicropascalSeconds + ` `;
            case DynamicViscosityUnits.Centipoise:
                return this.Centipoise + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given DynamicViscosity are equals to the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns True if the given DynamicViscosity are equal to the current DynamicViscosity.
     */
    equals(dynamicViscosity) {
        return this.value === dynamicViscosity.BaseValue;
    }
    /**
     * Compare the given DynamicViscosity against the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns 0 if they are equal, -1 if the current DynamicViscosity is less then other, 1 if the current DynamicViscosity is greater then other.
     */
    compareTo(dynamicViscosity) {
        if (this.value > dynamicViscosity.BaseValue)
            return 1;
        if (this.value < dynamicViscosity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    add(dynamicViscosity) {
        return new DynamicViscosity(this.value + dynamicViscosity.BaseValue);
    }
    /**
     * Subtract the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    subtract(dynamicViscosity) {
        return new DynamicViscosity(this.value - dynamicViscosity.BaseValue);
    }
    /**
     * Multiply the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    multiply(dynamicViscosity) {
        return new DynamicViscosity(this.value * dynamicViscosity.BaseValue);
    }
    /**
     * Divide the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    divide(dynamicViscosity) {
        return new DynamicViscosity(this.value / dynamicViscosity.BaseValue);
    }
    /**
     * Modulo the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    modulo(dynamicViscosity) {
        return new DynamicViscosity(this.value % dynamicViscosity.BaseValue);
    }
    /**
     * Pow the given DynamicViscosity with the current DynamicViscosity.
     * @param dynamicViscosity The other DynamicViscosity.
     * @returns A new DynamicViscosity instance with the results.
     */
    pow(dynamicViscosity) {
        return new DynamicViscosity(this.value ** dynamicViscosity.BaseValue);
    }
}
exports.DynamicViscosity = DynamicViscosity;
//# sourceMappingURL=dynamicviscosity.g.js.map