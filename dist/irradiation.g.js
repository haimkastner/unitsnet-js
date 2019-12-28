"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** IrradiationUnits enumeration */
var IrradiationUnits;
(function (IrradiationUnits) {
    /** */
    IrradiationUnits[IrradiationUnits["JoulesPerSquareMeter"] = 0] = "JoulesPerSquareMeter";
    /** */
    IrradiationUnits[IrradiationUnits["JoulesPerSquareCentimeter"] = 1] = "JoulesPerSquareCentimeter";
    /** */
    IrradiationUnits[IrradiationUnits["JoulesPerSquareMillimeter"] = 2] = "JoulesPerSquareMillimeter";
    /** */
    IrradiationUnits[IrradiationUnits["WattHoursPerSquareMeter"] = 3] = "WattHoursPerSquareMeter";
    /** */
    IrradiationUnits[IrradiationUnits["KilojoulesPerSquareMeter"] = 4] = "KilojoulesPerSquareMeter";
    /** */
    IrradiationUnits[IrradiationUnits["KilowattHoursPerSquareMeter"] = 5] = "KilowattHoursPerSquareMeter";
})(IrradiationUnits = exports.IrradiationUnits || (exports.IrradiationUnits = {}));
/** Irradiation is the process by which an object is exposed to radiation. The exposure can originate from various sources, including natural sources. */
class Irradiation {
    /**
     * Create a new Irradiation.
     * @param value The value.
     * @param fromUnit The ‘Irradiation’ unit to create from.
     * The default unit is JoulesPerSquareMeter
     */
    constructor(value, fromUnit = IrradiationUnits.JoulesPerSquareMeter) {
        this.joulespersquaremeterLazy = null;
        this.joulespersquarecentimeterLazy = null;
        this.joulespersquaremillimeterLazy = null;
        this.watthourspersquaremeterLazy = null;
        this.kilojoulespersquaremeterLazy = null;
        this.kilowatthourspersquaremeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Irradiation is JoulesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get JoulesPerSquareMeter() {
        if (this.joulespersquaremeterLazy !== null) {
            return this.joulespersquaremeterLazy;
        }
        return this.joulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }
    /** */
    get JoulesPerSquareCentimeter() {
        if (this.joulespersquarecentimeterLazy !== null) {
            return this.joulespersquarecentimeterLazy;
        }
        return this.joulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }
    /** */
    get JoulesPerSquareMillimeter() {
        if (this.joulespersquaremillimeterLazy !== null) {
            return this.joulespersquaremillimeterLazy;
        }
        return this.joulespersquaremillimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }
    /** */
    get WattHoursPerSquareMeter() {
        if (this.watthourspersquaremeterLazy !== null) {
            return this.watthourspersquaremeterLazy;
        }
        return this.watthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }
    /** */
    get KilojoulesPerSquareMeter() {
        if (this.kilojoulespersquaremeterLazy !== null) {
            return this.kilojoulespersquaremeterLazy;
        }
        return this.kilojoulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilojoulesPerSquareMeter);
    }
    /** */
    get KilowattHoursPerSquareMeter() {
        if (this.kilowatthourspersquaremeterLazy !== null) {
            return this.kilowatthourspersquaremeterLazy;
        }
        return this.kilowatthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilowattHoursPerSquareMeter);
    }
    /**
     * Create a new Irradiation instance from a JoulesPerSquareMeter
     *
     * @param value The unit as JoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromJoulesPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMeter);
    }
    /**
     * Create a new Irradiation instance from a JoulesPerSquareCentimeter
     *
     * @param value The unit as JoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromJoulesPerSquareCentimeter(value) {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareCentimeter);
    }
    /**
     * Create a new Irradiation instance from a JoulesPerSquareMillimeter
     *
     * @param value The unit as JoulesPerSquareMillimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromJoulesPerSquareMillimeter(value) {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMillimeter);
    }
    /**
     * Create a new Irradiation instance from a WattHoursPerSquareMeter
     *
     * @param value The unit as WattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromWattHoursPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.WattHoursPerSquareMeter);
    }
    /**
     * Create a new Irradiation instance from a KilojoulesPerSquareMeter
     *
     * @param value The unit as KilojoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromKilojoulesPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.KilojoulesPerSquareMeter);
    }
    /**
     * Create a new Irradiation instance from a KilowattHoursPerSquareMeter
     *
     * @param value The unit as KilowattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromKilowattHoursPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.KilowattHoursPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.value / 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.value / 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.value / 3600;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return (this.value) / 1000;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return (this.value / 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case IrradiationUnits.JoulesPerSquareMeter:
                return value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return value * 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return value * 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return value * 3600;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return (value) * 1000;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return (value * 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Irradiation to string.
     * Note! the default format for Irradiation is JoulesPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Irradiation.
     * @returns The string format of the Irradiation.
     */
    toString(toUnit = IrradiationUnits.JoulesPerSquareMeter) {
        switch (toUnit) {
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.JoulesPerSquareMeter + ` J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.JoulesPerSquareCentimeter + ` J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.JoulesPerSquareMillimeter + ` J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.WattHoursPerSquareMeter + ` Wh/m²`;
            case IrradiationUnits.KilojoulesPerSquareMeter:
                return this.KilojoulesPerSquareMeter + ` `;
            case IrradiationUnits.KilowattHoursPerSquareMeter:
                return this.KilowattHoursPerSquareMeter + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Irradiation are equals to the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns True if the given Irradiation are equal to the current Irradiation.
     */
    equals(irradiation) {
        return this.value === irradiation.BaseValue;
    }
    /**
     * Compare the given Irradiation against the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns 0 if they are equal, -1 if the current Irradiation is less then other, 1 if the current Irradiation is greater then other.
     */
    compareTo(irradiation) {
        if (this.value > irradiation.BaseValue)
            return 1;
        if (this.value < irradiation.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    add(irradiation) {
        return new Irradiation(this.value + irradiation.BaseValue);
    }
    /**
     * Subtract the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    subtract(irradiation) {
        return new Irradiation(this.value - irradiation.BaseValue);
    }
    /**
     * Multiply the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    multiply(irradiation) {
        return new Irradiation(this.value * irradiation.BaseValue);
    }
    /**
     * Divide the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    divide(irradiation) {
        return new Irradiation(this.value / irradiation.BaseValue);
    }
    /**
     * Modulo the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    modulo(irradiation) {
        return new Irradiation(this.value % irradiation.BaseValue);
    }
    /**
     * Pow the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    pow(irradiation) {
        return new Irradiation(this.value ** irradiation.BaseValue);
    }
}
exports.Irradiation = Irradiation;
//# sourceMappingURL=irradiation.g.js.map