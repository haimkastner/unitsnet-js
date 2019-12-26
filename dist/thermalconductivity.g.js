"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThermalConductivityUnits;
(function (ThermalConductivityUnits) {
    ThermalConductivityUnits[ThermalConductivityUnits["WattsPerMeterKelvin"] = 0] = "WattsPerMeterKelvin";
    ThermalConductivityUnits[ThermalConductivityUnits["BtusPerHourFootFahrenheit"] = 1] = "BtusPerHourFootFahrenheit";
})(ThermalConductivityUnits = exports.ThermalConductivityUnits || (exports.ThermalConductivityUnits = {}));
class ThermalConductivity {
    constructor(value, fromUnit) {
        this.wattspermeterkelvinLazy = null;
        this.btusperhourfootfahrenheitLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerMeterKelvin() {
        if (this.wattspermeterkelvinLazy !== null) {
            return this.wattspermeterkelvinLazy;
        }
        return this.wattspermeterkelvinLazy = this.convertFromBase(ThermalConductivityUnits.WattsPerMeterKelvin);
    }
    get BtusPerHourFootFahrenheit() {
        if (this.btusperhourfootfahrenheitLazy !== null) {
            return this.btusperhourfootfahrenheitLazy;
        }
        return this.btusperhourfootfahrenheitLazy = this.convertFromBase(ThermalConductivityUnits.BtusPerHourFootFahrenheit);
    }
    static FromWattsPerMeterKelvin(value) {
        return new ThermalConductivity(value, ThermalConductivityUnits.WattsPerMeterKelvin);
    }
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