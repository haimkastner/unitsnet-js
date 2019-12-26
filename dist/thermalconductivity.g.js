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
     */
    constructor(value, fromUnit) {
        this.wattspermeterkelvinLazy = null;
        this.btusperhourfootfahrenheitLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of ThermalConductivity is WattPerMeterKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
exports.ThermalConductivity = ThermalConductivity;
//# sourceMappingURL=thermalconductivity.g.js.map