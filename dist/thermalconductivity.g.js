"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** ThermalConductivityUnits enumeration */
var ThermalConductivityUnits;
(function (ThermalConductivityUnits) {
    /** */
    ThermalConductivityUnits[ThermalConductivityUnits["WattsPerMeterKelvin"] = 0] = "WattsPerMeterKelvin";
    /** */
    ThermalConductivityUnits[ThermalConductivityUnits["BtusPerHourFootFahrenheit"] = 1] = "BtusPerHourFootFahrenheit";
})(ThermalConductivityUnits = exports.ThermalConductivityUnits || (exports.ThermalConductivityUnits = {}));
/** Thermal conductivity is the property of a material to conduct heat. */
class ThermalConductivity {
    /**
     * Create a new ThermalConductivity.
     * @param value The value.
     * @param fromUnit The ‘ThermalConductivity’ unit to create from.
     * The default unit is WattsPerMeterKelvin
     */
    constructor(value, fromUnit = ThermalConductivityUnits.WattsPerMeterKelvin) {
        this.wattspermeterkelvinLazy = null;
        this.btusperhourfootfahrenheitLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ThermalConductivity is WattsPerMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get WattsPerMeterKelvin() {
        if (this.wattspermeterkelvinLazy !== null) {
            return this.wattspermeterkelvinLazy;
        }
        return this.wattspermeterkelvinLazy = this.convertFromBase(ThermalConductivityUnits.WattsPerMeterKelvin);
    }
    /** */
    get BtusPerHourFootFahrenheit() {
        if (this.btusperhourfootfahrenheitLazy !== null) {
            return this.btusperhourfootfahrenheitLazy;
        }
        return this.btusperhourfootfahrenheitLazy = this.convertFromBase(ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }
    /**
     * Create a new ThermalConductivity instance from a WattsPerMeterKelvin
     *
     * @param value The unit as WattsPerMeterKelvin to create a new ThermalConductivity from.
     * @returns The new ThermalConductivity instance.
     */
    static FromWattsPerMeterKelvin(value) {
        return new ThermalConductivity(value, ThermalConductivityUnits.WattsPerMeterKelvin);
    }
    /**
     * Create a new ThermalConductivity instance from a BtusPerHourFootFahrenheit
     *
     * @param value The unit as BtusPerHourFootFahrenheit to create a new ThermalConductivity from.
     * @returns The new ThermalConductivity instance.
     */
    static FromBtusPerHourFootFahrenheit(value) {
        return new ThermalConductivity(value, ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return this.value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return this.value / 1.73073467;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return value;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return value * 1.73073467;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the ThermalConductivity to string.
     * Note! the default format for ThermalConductivity is WattsPerMeterKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ThermalConductivity.
     * @returns The string format of the ThermalConductivity.
     */
    toString(toUnit = ThermalConductivityUnits.WattsPerMeterKelvin) {
        switch (toUnit) {
            case ThermalConductivityUnits.WattsPerMeterKelvin:
                return this.WattsPerMeterKelvin + ` W/m·K`;
            case ThermalConductivityUnits.BtusPerHourFootFahrenheit:
                return this.BtusPerHourFootFahrenheit + ` BTU/h·ft·°F`;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given ThermalConductivity are equals to the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns True if the given ThermalConductivity are equal to the current ThermalConductivity.
     */
    equals(thermalConductivity) {
        return this.value === thermalConductivity.BaseValue;
    }
    /**
     * Compare the given ThermalConductivity against the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns 0 if they are equal, -1 if the current ThermalConductivity is less then other, 1 if the current ThermalConductivity is greater then other.
     */
    compareTo(thermalConductivity) {
        if (this.value > thermalConductivity.BaseValue)
            return 1;
        if (this.value < thermalConductivity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    add(thermalConductivity) {
        return new ThermalConductivity(this.value + thermalConductivity.BaseValue);
    }
    /**
     * Subtract the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    subtract(thermalConductivity) {
        return new ThermalConductivity(this.value - thermalConductivity.BaseValue);
    }
    /**
     * Multiply the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    multiply(thermalConductivity) {
        return new ThermalConductivity(this.value * thermalConductivity.BaseValue);
    }
    /**
     * Divide the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    divide(thermalConductivity) {
        return new ThermalConductivity(this.value / thermalConductivity.BaseValue);
    }
    /**
     * Modulo the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    modulo(thermalConductivity) {
        return new ThermalConductivity(this.value % thermalConductivity.BaseValue);
    }
    /**
     * Pow the given ThermalConductivity with the current ThermalConductivity.
     * @param thermalConductivity The other ThermalConductivity.
     * @returns A new ThermalConductivity instance with the results.
     */
    pow(thermalConductivity) {
        return new ThermalConductivity(this.value ** thermalConductivity.BaseValue);
    }
}
exports.ThermalConductivity = ThermalConductivity;
//# sourceMappingURL=thermalconductivity.g.js.map