"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassFluxUnits;
(function (MassFluxUnits) {
    MassFluxUnits[MassFluxUnits["GramsPerSecondPerSquareMeter"] = 0] = "GramsPerSecondPerSquareMeter";
    MassFluxUnits[MassFluxUnits["KilogramsPerSecondPerSquareMeter"] = 1] = "KilogramsPerSecondPerSquareMeter";
})(MassFluxUnits = exports.MassFluxUnits || (exports.MassFluxUnits = {}));
class MassFlux {
    constructor(value, fromUnit) {
        this.gramspersecondpersquaremeterLazy = null;
        this.kilogramspersecondpersquaremeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerSecondPerSquareMeter() {
        if (this.gramspersecondpersquaremeterLazy !== null) {
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    get KilogramsPerSecondPerSquareMeter() {
        if (this.kilogramspersecondpersquaremeterLazy !== null) {
            return this.kilogramspersecondpersquaremeterLazy;
        }
        return this.kilogramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }
    static FromGramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    static FromKilogramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value * 1e3;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
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
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return (value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassFluxUnits.KilogramsPerSecondPerSquareMeter) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return this.KilogramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassFlux = MassFlux;
//# sourceMappingURL=massflux.g.js.map