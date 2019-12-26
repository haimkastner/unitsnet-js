"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinearDensityUnits;
(function (LinearDensityUnits) {
    LinearDensityUnits[LinearDensityUnits["GramsPerMeter"] = 0] = "GramsPerMeter";
    LinearDensityUnits[LinearDensityUnits["PoundsPerFoot"] = 1] = "PoundsPerFoot";
    LinearDensityUnits[LinearDensityUnits["KilogramPerMeter"] = 2] = "KilogramPerMeter";
})(LinearDensityUnits = exports.LinearDensityUnits || (exports.LinearDensityUnits = {}));
class LinearDensity {
    constructor(value, fromUnit) {
        this.gramspermeterLazy = null;
        this.poundsperfootLazy = null;
        this.kilogrampermeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerMeter() {
        if (this.gramspermeterLazy !== null) {
            return this.gramspermeterLazy;
        }
        return this.gramspermeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerMeter);
    }
    get PoundsPerFoot() {
        if (this.poundsperfootLazy !== null) {
            return this.poundsperfootLazy;
        }
        return this.poundsperfootLazy = this.convertFromBase(LinearDensityUnits.PoundsPerFoot);
    }
    get KilogramPerMeter() {
        if (this.kilogrampermeterLazy !== null) {
            return this.kilogrampermeterLazy;
        }
        return this.kilogrampermeterLazy = this.convertFromBase(LinearDensityUnits.KilogramPerMeter);
    }
    static FromGramsPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }
    static FromPoundsPerFoot(value) {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }
    static FromKilogramPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.KilogramPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.value / 1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value / 1.48816394;
            case LinearDensityUnits.KilogramPerMeter:
                return (this.value / 1e-3) / 1000;
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
            case LinearDensityUnits.KilogramPerMeter:
                return (value * 1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = LinearDensityUnits.KilogramPerMeter) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.GramsPerMeter + ` g/m`;
            case LinearDensityUnits.PoundsPerFoot:
                return this.PoundsPerFoot + ` lb/ft`;
            case LinearDensityUnits.KilogramPerMeter:
                return this.KilogramPerMeter + ` g/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.LinearDensity = LinearDensity;
//# sourceMappingURL=lineardensity.g.js.map