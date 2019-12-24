"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassFluxUnits;
(function (MassFluxUnits) {
    MassFluxUnits[MassFluxUnits["GramsPerSecondPerSquareMeter"] = 0] = "GramsPerSecondPerSquareMeter";
    MassFluxUnits[MassFluxUnits["Kilogramspersecondpersquaremeter"] = 1] = "Kilogramspersecondpersquaremeter";
})(MassFluxUnits = exports.MassFluxUnits || (exports.MassFluxUnits = {}));
class MassFlux {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerSecondPerSquareMeter() {
        return this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    get Kilogramspersecondpersquaremeter() {
        return this.convertFromBase(MassFluxUnits.Kilogramspersecondpersquaremeter);
    }
    static FromGramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    static FromKilogramspersecondpersquaremeter(value) {
        return new MassFlux(value, MassFluxUnits.Kilogramspersecondpersquaremeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.value * 1e3;
            case MassFluxUnits.Kilogramspersecondpersquaremeter:
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
            case MassFluxUnits.Kilogramspersecondpersquaremeter:
                return (value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassFlux = MassFlux;
//# sourceMappingURL=massflux.g.js.map