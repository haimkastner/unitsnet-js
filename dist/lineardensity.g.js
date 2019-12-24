"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinearDensityUnits;
(function (LinearDensityUnits) {
    LinearDensityUnits[LinearDensityUnits["GramsPerMeter"] = 0] = "GramsPerMeter";
    LinearDensityUnits[LinearDensityUnits["PoundsPerFoot"] = 1] = "PoundsPerFoot";
    LinearDensityUnits[LinearDensityUnits["Kilogramspermeter"] = 2] = "Kilogramspermeter";
})(LinearDensityUnits = exports.LinearDensityUnits || (exports.LinearDensityUnits = {}));
class LinearDensity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerMeter() {
        return this.convertFromBase(LinearDensityUnits.GramsPerMeter);
    }
    get PoundsPerFoot() {
        return this.convertFromBase(LinearDensityUnits.PoundsPerFoot);
    }
    get Kilogramspermeter() {
        return this.convertFromBase(LinearDensityUnits.Kilogramspermeter);
    }
    static FromGramsPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }
    static FromPoundsPerFoot(value) {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }
    static FromKilogramspermeter(value) {
        return new LinearDensity(value, LinearDensityUnits.Kilogramspermeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.value / 1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value / 1.48816394;
            case LinearDensityUnits.Kilogramspermeter:
                return (this.value * 1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return value * 1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return value * 1.48816394;
            case LinearDensityUnits.Kilogramspermeter:
                return (value / 1e-3) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.LinearDensity = LinearDensity;
//# sourceMappingURL=lineardensity.g.js.map