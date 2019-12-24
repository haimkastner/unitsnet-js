"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThermalResistanceUnits;
(function (ThermalResistanceUnits) {
    ThermalResistanceUnits[ThermalResistanceUnits["SquareMeterKelvinsPerKilowatt"] = 0] = "SquareMeterKelvinsPerKilowatt";
    ThermalResistanceUnits[ThermalResistanceUnits["SquareMeterDegreesCelsiusPerWatt"] = 1] = "SquareMeterDegreesCelsiusPerWatt";
    ThermalResistanceUnits[ThermalResistanceUnits["SquareCentimeterKelvinsPerWatt"] = 2] = "SquareCentimeterKelvinsPerWatt";
    ThermalResistanceUnits[ThermalResistanceUnits["SquareCentimeterHourDegreesCelsiusPerKilocalorie"] = 3] = "SquareCentimeterHourDegreesCelsiusPerKilocalorie";
    ThermalResistanceUnits[ThermalResistanceUnits["HourSquareFeetDegreesFahrenheitPerBtu"] = 4] = "HourSquareFeetDegreesFahrenheitPerBtu";
})(ThermalResistanceUnits = exports.ThermalResistanceUnits || (exports.ThermalResistanceUnits = {}));
class ThermalResistance {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get SquareMeterKelvinsPerKilowatt() {
        return this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }
    get SquareMeterDegreesCelsiusPerWatt() {
        return this.convertFromBase(ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }
    get SquareCentimeterKelvinsPerWatt() {
        return this.convertFromBase(ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }
    get SquareCentimeterHourDegreesCelsiusPerKilocalorie() {
        return this.convertFromBase(ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }
    get HourSquareFeetDegreesFahrenheitPerBtu() {
        return this.convertFromBase(ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }
    static FromSquareMeterKelvinsPerKilowatt(value) {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }
    static FromSquareMeterDegreesCelsiusPerWatt(value) {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }
    static FromSquareCentimeterKelvinsPerWatt(value) {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }
    static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value) {
        return new ThermalResistance(value, ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }
    static FromHourSquareFeetDegreesFahrenheitPerBtu(value) {
        return new ThermalResistance(value, ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return this.value;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return this.value / 1000.088056074108;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return this.value / 0.0999964777570357;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return this.value / 0.0859779507590433;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return this.value / 176.1121482159839;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return value;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return value * 1000.088056074108;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return value * 0.0999964777570357;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return value * 0.0859779507590433;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return value * 176.1121482159839;
            default:
                break;
        }
        return NaN;
    }
}
exports.ThermalResistance = ThermalResistance;
//# sourceMappingURL=thermalresistance.g.js.map