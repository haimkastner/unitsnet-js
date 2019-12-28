"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** CoefficientOfThermalExpansionUnits enumeration */
var CoefficientOfThermalExpansionUnits;
(function (CoefficientOfThermalExpansionUnits) {
    /** */
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseKelvin"] = 0] = "InverseKelvin";
    /** */
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseDegreeCelsius"] = 1] = "InverseDegreeCelsius";
    /** */
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseDegreeFahrenheit"] = 2] = "InverseDegreeFahrenheit";
})(CoefficientOfThermalExpansionUnits = exports.CoefficientOfThermalExpansionUnits || (exports.CoefficientOfThermalExpansionUnits = {}));
/** A unit that represents a fractional change in size in response to a change in temperature. */
class CoefficientOfThermalExpansion {
    /**
     * Create a new CoefficientOfThermalExpansion.
     * @param value The value.
     * @param fromUnit The ‘CoefficientOfThermalExpansion’ unit to create from.
     * The default unit is InverseKelvin
     */
    constructor(value, fromUnit = CoefficientOfThermalExpansionUnits.InverseKelvin) {
        this.inversekelvinLazy = null;
        this.inversedegreecelsiusLazy = null;
        this.inversedegreefahrenheitLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of CoefficientOfThermalExpansion is InverseKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get InverseKelvin() {
        if (this.inversekelvinLazy !== null) {
            return this.inversekelvinLazy;
        }
        return this.inversekelvinLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseKelvin);
    }
    /** */
    get InverseDegreeCelsius() {
        if (this.inversedegreecelsiusLazy !== null) {
            return this.inversedegreecelsiusLazy;
        }
        return this.inversedegreecelsiusLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }
    /** */
    get InverseDegreeFahrenheit() {
        if (this.inversedegreefahrenheitLazy !== null) {
            return this.inversedegreefahrenheitLazy;
        }
        return this.inversedegreefahrenheitLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }
    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseKelvin
     *
     * @param value The unit as InverseKelvin to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    static FromInverseKelvin(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseKelvin);
    }
    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseDegreeCelsius
     *
     * @param value The unit as InverseDegreeCelsius to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    static FromInverseDegreeCelsius(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }
    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseDegreeFahrenheit
     *
     * @param value The unit as InverseDegreeFahrenheit to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    static FromInverseDegreeFahrenheit(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return this.value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return this.value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return this.value * 9 / 5;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return value;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return value * 5 / 9;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the CoefficientOfThermalExpansion to string.
     * Note! the default format for CoefficientOfThermalExpansion is InverseKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the CoefficientOfThermalExpansion.
     * @returns The string format of the CoefficientOfThermalExpansion.
     */
    toString(toUnit = CoefficientOfThermalExpansionUnits.InverseKelvin) {
        switch (toUnit) {
            case CoefficientOfThermalExpansionUnits.InverseKelvin:
                return this.InverseKelvin + ` K⁻¹`;
            case CoefficientOfThermalExpansionUnits.InverseDegreeCelsius:
                return this.InverseDegreeCelsius + ` °C⁻¹`;
            case CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit:
                return this.InverseDegreeFahrenheit + ` °F⁻¹`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given CoefficientOfThermalExpansion are equals to the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns True if the given CoefficientOfThermalExpansion are equal to the current CoefficientOfThermalExpansion.
     */
    equals(coefficientOfThermalExpansion) {
        return this.value === coefficientOfThermalExpansion.BaseValue;
    }
    /**
     * Compare the given CoefficientOfThermalExpansion against the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns 0 if they are equal, -1 if the current CoefficientOfThermalExpansion is less then other, 1 if the current CoefficientOfThermalExpansion is greater then other.
     */
    compareTo(coefficientOfThermalExpansion) {
        if (this.value > coefficientOfThermalExpansion.BaseValue)
            return 1;
        if (this.value < coefficientOfThermalExpansion.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    add(coefficientOfThermalExpansion) {
        return new CoefficientOfThermalExpansion(this.value + coefficientOfThermalExpansion.BaseValue);
    }
    /**
     * Subtract the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    subtract(coefficientOfThermalExpansion) {
        return new CoefficientOfThermalExpansion(this.value - coefficientOfThermalExpansion.BaseValue);
    }
    /**
     * Multiply the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    multiply(coefficientOfThermalExpansion) {
        return new CoefficientOfThermalExpansion(this.value * coefficientOfThermalExpansion.BaseValue);
    }
    /**
     * Divide the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    divide(coefficientOfThermalExpansion) {
        return new CoefficientOfThermalExpansion(this.value / coefficientOfThermalExpansion.BaseValue);
    }
    /**
     * Modulo the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    modulo(coefficientOfThermalExpansion) {
        return new CoefficientOfThermalExpansion(this.value % coefficientOfThermalExpansion.BaseValue);
    }
    /**
     * Pow the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    pow(coefficientOfThermalExpansion) {
        return new CoefficientOfThermalExpansion(this.value ** coefficientOfThermalExpansion.BaseValue);
    }
}
exports.CoefficientOfThermalExpansion = CoefficientOfThermalExpansion;
//# sourceMappingURL=coefficientofthermalexpansion.g.js.map