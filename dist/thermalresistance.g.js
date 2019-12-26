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
        this.squaremeterkelvinsperkilowattLazy = null;
        this.squaremeterdegreescelsiusperwattLazy = null;
        this.squarecentimeterkelvinsperwattLazy = null;
        this.squarecentimeterhourdegreescelsiusperkilocalorieLazy = null;
        this.hoursquarefeetdegreesfahrenheitperbtuLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get SquareMeterKelvinsPerKilowatt() {
        if (this.squaremeterkelvinsperkilowattLazy !== null) {
            return this.squaremeterkelvinsperkilowattLazy;
        }
        return this.squaremeterkelvinsperkilowattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt);
    }
    get SquareMeterDegreesCelsiusPerWatt() {
        if (this.squaremeterdegreescelsiusperwattLazy !== null) {
            return this.squaremeterdegreescelsiusperwattLazy;
        }
        return this.squaremeterdegreescelsiusperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt);
    }
    get SquareCentimeterKelvinsPerWatt() {
        if (this.squarecentimeterkelvinsperwattLazy !== null) {
            return this.squarecentimeterkelvinsperwattLazy;
        }
        return this.squarecentimeterkelvinsperwattLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt);
    }
    get SquareCentimeterHourDegreesCelsiusPerKilocalorie() {
        if (this.squarecentimeterhourdegreescelsiusperkilocalorieLazy !== null) {
            return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy;
        }
        return this.squarecentimeterhourdegreescelsiusperkilocalorieLazy = this.convertFromBase(ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie);
    }
    get HourSquareFeetDegreesFahrenheitPerBtu() {
        if (this.hoursquarefeetdegreesfahrenheitperbtuLazy !== null) {
            return this.hoursquarefeetdegreesfahrenheitperbtuLazy;
        }
        return this.hoursquarefeetdegreesfahrenheitperbtuLazy = this.convertFromBase(ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu);
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
    toString(toUnit = ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt) {
        switch (toUnit) {
            case ThermalResistanceUnits.SquareMeterKelvinsPerKilowatt:
                return this.SquareMeterKelvinsPerKilowatt + ` m²K/kW`;
            case ThermalResistanceUnits.SquareMeterDegreesCelsiusPerWatt:
                return this.SquareMeterDegreesCelsiusPerWatt + ` m²°C/W`;
            case ThermalResistanceUnits.SquareCentimeterKelvinsPerWatt:
                return this.SquareCentimeterKelvinsPerWatt + ` cm²K/W`;
            case ThermalResistanceUnits.SquareCentimeterHourDegreesCelsiusPerKilocalorie:
                return this.SquareCentimeterHourDegreesCelsiusPerKilocalorie + ` cm²Hr°C/kcal`;
            case ThermalResistanceUnits.HourSquareFeetDegreesFahrenheitPerBtu:
                return this.HourSquareFeetDegreesFahrenheitPerBtu + ` Hrft²°F/Btu`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ThermalResistance = ThermalResistance;
//# sourceMappingURL=thermalresistance.g.js.map