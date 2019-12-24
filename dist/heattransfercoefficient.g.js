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
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerSquareMeterKelvin() {
        return this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterKelvin);
    }
    get WattsPerSquareMeterCelsius() {
        return this.convertFromBase(HeatTransferCoefficientUnits.WattsPerSquareMeterCelsius);
    }
    get BtusPerSquareFootDegreeFahrenheit() {
        return this.convertFromBase(HeatTransferCoefficientUnits.BtusPerSquareFootDegreeFahrenheit);
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
}
exports.HeatTransferCoefficient = HeatTransferCoefficient;
//# sourceMappingURL=heattransfercoefficient.g.js.map