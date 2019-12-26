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
        this.squaremeterspersecondLazy = null;
        this.stokesLazy = null;
        this.nanostokesLazy = null;
        this.microstokesLazy = null;
        this.centistokesLazy = null;
        this.decistokesLazy = null;
        this.kilostokesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get SquareMetersPerSecond() {
        if (this.squaremeterspersecondLazy !== null) {
            return this.squaremeterspersecondLazy;
        }
        return this.squaremeterspersecondLazy = this.convertFromBase(KinematicViscosityUnits.SquareMetersPerSecond);
    }
    get Stokes() {
        if (this.stokesLazy !== null) {
            return this.stokesLazy;
        }
        return this.stokesLazy = this.convertFromBase(KinematicViscosityUnits.Stokes);
    }
    get Nanostokes() {
        if (this.nanostokesLazy !== null) {
            return this.nanostokesLazy;
        }
        return this.nanostokesLazy = this.convertFromBase(KinematicViscosityUnits.Nanostokes);
    }
    get Microstokes() {
        if (this.microstokesLazy !== null) {
            return this.microstokesLazy;
        }
        return this.microstokesLazy = this.convertFromBase(KinematicViscosityUnits.Microstokes);
    }
    get Centistokes() {
        if (this.centistokesLazy !== null) {
            return this.centistokesLazy;
        }
        return this.centistokesLazy = this.convertFromBase(KinematicViscosityUnits.Centistokes);
    }
    get Decistokes() {
        if (this.decistokesLazy !== null) {
            return this.decistokesLazy;
        }
        return this.decistokesLazy = this.convertFromBase(KinematicViscosityUnits.Decistokes);
    }
    get Kilostokes() {
        if (this.kilostokesLazy !== null) {
            return this.kilostokesLazy;
        }
        return this.kilostokesLazy = this.convertFromBase(KinematicViscosityUnits.Kilostokes);
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
                return this.value * 1e4;
            case KinematicViscosityUnits.Nanostokes:
                return (this.value * 1e4) / 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (this.value * 1e4) / 0.000001;
            case KinematicViscosityUnits.Centistokes:
                return (this.value * 1e4) / 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (this.value * 1e4) / 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (this.value * 1e4) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return value;
            case KinematicViscosityUnits.Stokes:
                return value / 1e4;
            case KinematicViscosityUnits.Nanostokes:
                return (value / 1e4) * 1e-9;
            case KinematicViscosityUnits.Microstokes:
                return (value / 1e4) * 0.000001;
            case KinematicViscosityUnits.Centistokes:
                return (value / 1e4) * 0.01;
            case KinematicViscosityUnits.Decistokes:
                return (value / 1e4) * 0.1;
            case KinematicViscosityUnits.Kilostokes:
                return (value / 1e4) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.KinematicViscosity = KinematicViscosity;
//# sourceMappingURL=kinematicviscosity.g.js.map