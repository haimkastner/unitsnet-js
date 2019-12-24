"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThermalConductivityUnits;
(function (ThermalConductivityUnits) {
    ThermalConductivityUnits[ThermalConductivityUnits["WattsPerMeterKelvin"] = 0] = "WattsPerMeterKelvin";
    ThermalConductivityUnits[ThermalConductivityUnits["BtusPerHourFootFahrenheit"] = 1] = "BtusPerHourFootFahrenheit";
})(ThermalConductivityUnits = exports.ThermalConductivityUnits || (exports.ThermalConductivityUnits = {}));
class ThermalConductivity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerMeterKelvin() {
        return this.convertFromBase(ThermalConductivityUnits.WattsPerMeterKelvin);
    }
    get BtusPerHourFootFahrenheit() {
        return this.convertFromBase(ThermalConductivityUnits.BtusPerHourFootFahrenheit);
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
}
exports.ThermalConductivity = ThermalConductivity;
//# sourceMappingURL=thermalconductivity.g.js.map