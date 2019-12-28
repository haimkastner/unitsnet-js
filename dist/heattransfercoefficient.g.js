"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** HeatTransferCoefficientUnits enumeration */
var HeatTransferCoefficientUnits;
(function (HeatTransferCoefficientUnits) {
    /** */
    HeatTransferCoefficientUnits[HeatTransferCoefficientUnits["WattsPerSquareMeterKelvin"] = 0] = "WattsPerSquareMeterKelvin";
    /** */
    HeatTransferCoefficientUnits[HeatTransferCoefficientUnits["WattsPerSquareMeterCelsius"] = 1] = "WattsPerSquareMeterCelsius";
    /** */
    HeatTransferCoefficientUnits[HeatTransferCoefficientUnits["BtusPerSquareFootDegreeFahrenheit"] = 2] = "BtusPerSquareFootDegreeFahrenheit";
})(HeatTransferCoefficientUnits = exports.HeatTransferCoefficientUnits || (exports.HeatTransferCoefficientUnits = {}));
/** The heat transfer coefficient or film coefficient, or film effectiveness, in thermodynamics and in mechanics is the proportionality constant between the heat flux and the thermodynamic driving force for the flow of heat (i.e., the temperature difference, ΔT) */
class HeatTransferCoefficient {
    /**
     * Create a new HeatTransferCoefficient.
     * @param value The value.
     * @param fromUnit The ‘HeatTransferCoefficient’ unit to create from.
     * The default unit is WattsPerSquareMeterKelvin
     */
    constructor(value, fromUnit = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin) {
        this.wattspersquaremeterkelvinLazy = null;
        this.wattspersquaremetercelsiusLazy = null;
        this.btuspersquarefootdegreefahrenheitLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get WattsPerSquareMeterKelvin() {
        if (this.wattspersquaremeterkelvinLazy !== null) {
            return this.wattspersquaremeterkelvinLazy;
        }
        return this.wattspersquaremeterkelvinLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }
    /** */
    get WattsPerSquareMeterCelsius() {
        if (this.wattspersquaremetercelsiusLazy !== null) {
            return this.wattspersquaremetercelsiusLazy;
        }
        return this.wattspersquaremetercelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }
    /** */
    get BtusPerSquareFootDegreeFahrenheit() {
        if (this.btuspersquarefootdegreefahrenheitLazy !== null) {
            return this.btuspersquarefootdegreefahrenheitLazy;
        }
        return this.btuspersquarefootdegreefahrenheitLazy = this.convertFromBase(HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit);
    }
    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterKelvin
     *
     * @param value The unit as WattsPerSquareMeterKelvin to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    static FromWattsPerSquareMeterKelvin(value) {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }
    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterCelsius
     *
     * @param value The unit as WattsPerSquareMeterCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    static FromWattsPerSquareMeterCelsius(value) {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }
    /**
     * Create a new HeatTransferCoefficient instance from a BtusPerSquareFootDegreeFahrenheit
     *
     * @param value The unit as BtusPerSquareFootDegreeFahrenheit to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    static FromBtusPerSquareFootDegreeFahrenheit(value) {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return this.value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return this.value;
            case HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit:
                return this.value / 5.6782633411134878;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return value;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return value;
            case HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit:
                return value * 5.6782633411134878;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the HeatTransferCoefficient to string.
     * Note! the default format for HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the HeatTransferCoefficient.
     * @returns The string format of the HeatTransferCoefficient.
     */
    toString(toUnit = HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin) {
        switch (toUnit) {
            case HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin:
                return this.WattsPerSquareMeterKelvin + ` W/m²·K`;
            case HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius:
                return this.WattsPerSquareMeterCelsius + ` W/m²·°C`;
            case HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit:
                return this.BtusPerSquareFootDegreeFahrenheit + ` Btu/ft²·hr·°F`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given HeatTransferCoefficient are equals to the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns True if the given HeatTransferCoefficient are equal to the current HeatTransferCoefficient.
     */
    equals(heatTransferCoefficient) {
        return this.value === heatTransferCoefficient.BaseValue;
    }
    /**
     * Compare the given HeatTransferCoefficient against the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns 0 if they are equal, -1 if the current HeatTransferCoefficient is less then other, 1 if the current HeatTransferCoefficient is greater then other.
     */
    compareTo(heatTransferCoefficient) {
        if (this.value > heatTransferCoefficient.BaseValue)
            return 1;
        if (this.value < heatTransferCoefficient.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    add(heatTransferCoefficient) {
        return new HeatTransferCoefficient(this.value + heatTransferCoefficient.BaseValue);
    }
    /**
     * Subtract the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    subtract(heatTransferCoefficient) {
        return new HeatTransferCoefficient(this.value - heatTransferCoefficient.BaseValue);
    }
    /**
     * Multiply the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    multiply(heatTransferCoefficient) {
        return new HeatTransferCoefficient(this.value * heatTransferCoefficient.BaseValue);
    }
    /**
     * Divide the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    divide(heatTransferCoefficient) {
        return new HeatTransferCoefficient(this.value / heatTransferCoefficient.BaseValue);
    }
    /**
     * Modulo the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    modulo(heatTransferCoefficient) {
        return new HeatTransferCoefficient(this.value % heatTransferCoefficient.BaseValue);
    }
    /**
     * Pow the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    pow(heatTransferCoefficient) {
        return new HeatTransferCoefficient(this.value ** heatTransferCoefficient.BaseValue);
    }
}
exports.HeatTransferCoefficient = HeatTransferCoefficient;
//# sourceMappingURL=heattransfercoefficient.g.js.map