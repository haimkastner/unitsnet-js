"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KinematicViscosityUnits;
(function (KinematicViscosityUnits) {
    KinematicViscosityUnits[KinematicViscosityUnits["SquareMetersPerSecond"] = 0] = "SquareMetersPerSecond";
    KinematicViscosityUnits[KinematicViscosityUnits["Stokes"] = 1] = "Stokes";
    KinematicViscosityUnits[KinematicViscosityUnits["Nanostokes"] = 2] = "Nanostokes";
    KinematicViscosityUnits[KinematicViscosityUnits["Microstokes"] = 3] = "Microstokes";
    KinematicViscosityUnits[KinematicViscosityUnits["Centistokes"] = 4] = "Centistokes";
    KinematicViscosityUnits[KinematicViscosityUnits["Decistokes"] = 5] = "Decistokes";
    KinematicViscosityUnits[KinematicViscosityUnits["Kilostokes"] = 6] = "Kilostokes";
})(KinematicViscosityUnits = exports.KinematicViscosityUnits || (exports.KinematicViscosityUnits = {}));
class KinematicViscosity {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get SquareMetersPerSecond() {
        return this.convertFromBase(KinematicViscosityUnits.SquareMetersPerSecond);
    }
    get Stokes() {
        return this.convertFromBase(KinematicViscosityUnits.Stokes);
    }
    get Nanostokes() {
        return this.convertFromBase(KinematicViscosityUnits.Nanostokes);
    }
    get Microstokes() {
        return this.convertFromBase(KinematicViscosityUnits.Microstokes);
    }
    get Centistokes() {
        return this.convertFromBase(KinematicViscosityUnits.Centistokes);
    }
    get Decistokes() {
        return this.convertFromBase(KinematicViscosityUnits.Decistokes);
    }
    get Kilostokes() {
        return this.convertFromBase(KinematicViscosityUnits.Kilostokes);
    }
    static FromSquareMetersPerSecond(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.SquareMetersPerSecond);
    }
    static FromStokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Stokes);
    }
    static FromNanostokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Nanostokes);
    }
    static FromMicrostokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Microstokes);
    }
    static FromCentistokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Centistokes);
    }
    static FromDecistokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Decistokes);
    }
    static FromKilostokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Kilostokes);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return this.value;
            case KinematicViscosityUnits.Stokes:
                return this.value / 1e4;
            case KinematicViscosityUnits.Nanostokes:
                return (this.value * 1e4) * 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (this.value * 1e4) * 0.000001;
            case KinematicViscosityUnits.Centistokes:
                return (this.value * 1e4) * 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (this.value * 1e4) * 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (this.value * 1e4) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return this.value;
            case KinematicViscosityUnits.Stokes:
                return this.value * 1e4;
            case KinematicViscosityUnits.Nanostokes:
                return (this.value / 1e4) / 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (this.value / 1e4) / 0.000001;
            case KinematicViscosityUnits.Centistokes:
                return (this.value / 1e4) / 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (this.value / 1e4) / 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (this.value / 1e4) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.KinematicViscosity = KinematicViscosity;
//# sourceMappingURL=kinematicviscosity.g.js.map