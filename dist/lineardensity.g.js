"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinearDensityUnits;
(function (LinearDensityUnits) {
    LinearDensityUnits[LinearDensityUnits["GramsPerMeter"] = 0] = "GramsPerMeter";
    LinearDensityUnits[LinearDensityUnits["PoundsPerFoot"] = 1] = "PoundsPerFoot";
    LinearDensityUnits[LinearDensityUnits["KilogramsPerMeter"] = 2] = "KilogramsPerMeter";
})(LinearDensityUnits = exports.LinearDensityUnits || (exports.LinearDensityUnits = {}));
class LinearDensity {
    constructor(value, fromUnit) {
        this.gramspermeterLazy = null;
        this.poundsperfootLazy = null;
        this.kilogramspermeterLazy = null;
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
    get KilogramsPerMeter() {
        if (this.kilogramspermeterLazy !== null) {
            return this.kilogramspermeterLazy;
        }
        return this.kilogramspermeterLazy = this.convertFromBase(LinearDensityUnits.KilogramsPerMeter);
    }
    static FromGramsPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }
    static FromPoundsPerFoot(value) {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }
    static FromKilogramsPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.KilogramsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.value / 1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value / 1.48816394;
            case LinearDensityUnits.KilogramsPerMeter:
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
            case LinearDensityUnits.KilogramsPerMeter:
                return (value * 1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = LinearDensityUnits.KilogramsPerMeter) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.GramsPerMeter + ` g/m`;
            case LinearDensityUnits.PoundsPerFoot:
                return this.PoundsPerFoot + ` lb/ft`;
            case LinearDensityUnits.KilogramsPerMeter:
                return this.KilogramsPerMeter + ` g/m`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.LinearDensity = LinearDensity;
//# sourceMappingURL=lineardensity.g.js.map