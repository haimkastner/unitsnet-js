"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoefficientOfThermalExpansionUnits;
(function (CoefficientOfThermalExpansionUnits) {
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseKelvin"] = 0] = "InverseKelvin";
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseDegreeCelsius"] = 1] = "InverseDegreeCelsius";
    CoefficientOfThermalExpansionUnits[CoefficientOfThermalExpansionUnits["InverseDegreeFahrenheit"] = 2] = "InverseDegreeFahrenheit";
})(CoefficientOfThermalExpansionUnits = exports.CoefficientOfThermalExpansionUnits || (exports.CoefficientOfThermalExpansionUnits = {}));
class CoefficientOfThermalExpansion {
    constructor(value, fromUnit) {
        this.inversekelvinLazy = null;
        this.inversedegreecelsiusLazy = null;
        this.inversedegreefahrenheitLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get InverseKelvin() {
        if (this.inversekelvinLazy !== null) {
            return this.inversekelvinLazy;
        }
        return this.inversekelvinLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseKelvin);
    }
    get InverseDegreeCelsius() {
        if (this.inversedegreecelsiusLazy !== null) {
            return this.inversedegreecelsiusLazy;
        }
        return this.inversedegreecelsiusLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }
    get InverseDegreeFahrenheit() {
        if (this.inversedegreefahrenheitLazy !== null) {
            return this.inversedegreefahrenheitLazy;
        }
        return this.inversedegreefahrenheitLazy = this.convertFromBase(CoefficientOfThermalExpansionUnits.InverseDegreeFahrenheit);
    }
    static FromInverseKelvin(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseKelvin);
    }
    static FromInverseDegreeCelsius(value) {
        return new CoefficientOfThermalExpansion(value, CoefficientOfThermalExpansionUnits.InverseDegreeCelsius);
    }
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
}
exports.CoefficientOfThermalExpansion = CoefficientOfThermalExpansion;
//# sourceMappingURL=coefficientofthermalexpansion.g.js.map