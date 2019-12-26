"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeatTransferCoefficientUnits;
(function (HeatTransferCoefficientUnits) {
    HeatTransferCoefficientUnits[HeatTransferCoefficientUnits["WattsPerSquareMeterKelvin"] = 0] = "WattsPerSquareMeterKelvin";
    HeatTransferCoefficientUnits[HeatTransferCoefficientUnits["WattsPerSquareMeterCelsius"] = 1] = "WattsPerSquareMeterCelsius";
    HeatTransferCoefficientUnits[HeatTransferCoefficientUnits["BtusPerSquareFootDegreeFahrenheit"] = 2] = "BtusPerSquareFootDegreeFahrenheit";
})(HeatTransferCoefficientUnits = exports.HeatTransferCoefficientUnits || (exports.HeatTransferCoefficientUnits = {}));
class HeatTransferCoefficient {
    constructor(value, fromUnit) {
        this.wattspersquaremeterkelvinLazy = null;
        this.wattspersquaremetercelsiusLazy = null;
        this.btuspersquarefootdegreefahrenheitLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerSquareMeterKelvin() {
        if (this.wattspersquaremeterkelvinLazy !== null) {
            return this.wattspersquaremeterkelvinLazy;
        }
        return this.wattspersquaremeterkelvinLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }
    get WattsPerSquareMeterCelsius() {
        if (this.wattspersquaremetercelsiusLazy !== null) {
            return this.wattspersquaremetercelsiusLazy;
        }
        return this.wattspersquaremetercelsiusLazy = this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }
    get BtusPerSquareFootDegreeFahrenheit() {
        if (this.btuspersquarefootdegreefahrenheitLazy !== null) {
            return this.btuspersquarefootdegreefahrenheitLazy;
        }
        return this.btuspersquarefootdegreefahrenheitLazy = this.convertFromBase(HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit);
    }
    static FromWattsPerSquareMeterKelvin(value) {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }
    static FromWattsPerSquareMeterCelsius(value) {
        return new HeatTransferCoefficient(value, HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }
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
}
exports.HeatTransferCoefficient = HeatTransferCoefficient;
//# sourceMappingURL=heattransfercoefficient.g.js.map