"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassFluxUnits;
(function (MassFluxUnits) {
    MassFluxUnits[MassFluxUnits["GramsPerSecondPerSquareMeter"] = 0] = "GramsPerSecondPerSquareMeter";
    MassFluxUnits[MassFluxUnits["KilogramPerSecondPerSquareMeter"] = 1] = "KilogramPerSecondPerSquareMeter";
})(MassFluxUnits = exports.MassFluxUnits || (exports.MassFluxUnits = {}));
class MassFlux {
    constructor(value, fromUnit) {
        this.gramspersecondpersquaremeterLazy = null;
        this.kilogrampersecondpersquaremeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerSecondPerSquareMeter() {
        if (this.gramspersecondpersquaremeterLazy !== null) {
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    get KilogramPerSecondPerSquareMeter() {
        if (this.kilogrampersecondpersquaremeterLazy !== null) {
            return this.kilogrampersecondpersquaremeterLazy;
        }
        return this.kilogrampersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramPerSecondPerSquareMeter);
    }
    static FromGramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    static FromKilogramPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.KilogramPerSecondPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value * 1e3;
            case MassFluxUnits.KilogramPerSecondPerSquareMeter:
                return (this.value * 1e3) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return value / 1e3;
            case MassFluxUnits.KilogramPerSecondPerSquareMeter:
                return (value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassFluxUnits.KilogramPerSecondPerSquareMeter) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramPerSecondPerSquareMeter:
                return this.KilogramPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassFlux = MassFlux;
//# sourceMappingURL=massflux.g.js.map