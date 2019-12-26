"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** KinematicViscosityUnits enumeration */
var KinematicViscosityUnits;
(function (KinematicViscosityUnits) {
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["SquareMetersPerSecond"] = 0] = "SquareMetersPerSecond";
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["Stokes"] = 1] = "Stokes";
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["Nanostokes"] = 2] = "Nanostokes";
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["Microstokes"] = 3] = "Microstokes";
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["Centistokes"] = 4] = "Centistokes";
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["Decistokes"] = 5] = "Decistokes";
    /** */
    KinematicViscosityUnits[KinematicViscosityUnits["Kilostokes"] = 6] = "Kilostokes";
})(KinematicViscosityUnits = exports.KinematicViscosityUnits || (exports.KinematicViscosityUnits = {}));
/** The viscosity of a fluid is a measure of its resistance to gradual deformation by shear stress or tensile stress. */
class KinematicViscosity {
    /**
     * Create a new KinematicViscosity.
     * @param value The value.
     * @param fromUnit The ‘KinematicViscosity’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.squaremeterspersecondLazy = null;
        this.stokesLazy = null;
        this.nanostokesLazy = null;
        this.microstokesLazy = null;
        this.centistokesLazy = null;
        this.decistokesLazy = null;
        this.kilostokesLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of KinematicViscosity is SquareMeterPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get SquareMetersPerSecond() {
        if (this.squaremeterspersecondLazy !== null) {
            return this.squaremeterspersecondLazy;
        }
        return this.squaremeterspersecondLazy = this.convertFromBase(KinematicViscosityUnits.SquareMetersPerSecond);
    }
    /** */
    get Stokes() {
        if (this.stokesLazy !== null) {
            return this.stokesLazy;
        }
        return this.stokesLazy = this.convertFromBase(KinematicViscosityUnits.Stokes);
    }
    /** */
    get Nanostokes() {
        if (this.nanostokesLazy !== null) {
            return this.nanostokesLazy;
        }
        return this.nanostokesLazy = this.convertFromBase(KinematicViscosityUnits.Nanostokes);
    }
    /** */
    get Microstokes() {
        if (this.microstokesLazy !== null) {
            return this.microstokesLazy;
        }
        return this.microstokesLazy = this.convertFromBase(KinematicViscosityUnits.Microstokes);
    }
    /** */
    get Centistokes() {
        if (this.centistokesLazy !== null) {
            return this.centistokesLazy;
        }
        return this.centistokesLazy = this.convertFromBase(KinematicViscosityUnits.Centistokes);
    }
    /** */
    get Decistokes() {
        if (this.decistokesLazy !== null) {
            return this.decistokesLazy;
        }
        return this.decistokesLazy = this.convertFromBase(KinematicViscosityUnits.Decistokes);
    }
    /** */
    get Kilostokes() {
        if (this.kilostokesLazy !== null) {
            return this.kilostokesLazy;
        }
        return this.kilostokesLazy = this.convertFromBase(KinematicViscosityUnits.Kilostokes);
    }
    /**
     * Create a new KinematicViscosity instance from a SquareMetersPerSecond
     *
     * @param value The unit as SquareMetersPerSecond to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromSquareMetersPerSecond(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.SquareMetersPerSecond);
    }
    /**
     * Create a new KinematicViscosity instance from a Stokes
     *
     * @param value The unit as Stokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromStokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Stokes);
    }
    /**
     * Create a new KinematicViscosity instance from a Nanostokes
     *
     * @param value The unit as Nanostokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromNanostokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Nanostokes);
    }
    /**
     * Create a new KinematicViscosity instance from a Microstokes
     *
     * @param value The unit as Microstokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromMicrostokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Microstokes);
    }
    /**
     * Create a new KinematicViscosity instance from a Centistokes
     *
     * @param value The unit as Centistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromCentistokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Centistokes);
    }
    /**
     * Create a new KinematicViscosity instance from a Decistokes
     *
     * @param value The unit as Decistokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
    static FromDecistokes(value) {
        return new KinematicViscosity(value, KinematicViscosityUnits.Decistokes);
    }
    /**
     * Create a new KinematicViscosity instance from a Kilostokes
     *
     * @param value The unit as Kilostokes to create a new KinematicViscosity from.
     * @returns The new KinematicViscosity instance.
     */
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
    /**
     * Format the KinematicViscosity to string.
     * Note! the default format for KinematicViscosity is SquareMetersPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the KinematicViscosity.
     * @returns The string format of the KinematicViscosity.
     */
    toString(toUnit = KinematicViscosityUnits.SquareMetersPerSecond) {
        switch (toUnit) {
            case KinematicViscosityUnits.SquareMetersPerSecond:
                return this.SquareMetersPerSecond + ` m²/s`;
            case KinematicViscosityUnits.Stokes:
                return this.Stokes + ` St`;
            case KinematicViscosityUnits.Nanostokes:
                return this.Nanostokes + ` St`;
            case KinematicViscosityUnits.Microstokes:
                return this.Microstokes + ` St`;
            case KinematicViscosityUnits.Centistokes:
                return this.Centistokes + ` St`;
            case KinematicViscosityUnits.Decistokes:
                return this.Decistokes + ` St`;
            case KinematicViscosityUnits.Kilostokes:
                return this.Kilostokes + ` St`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.KinematicViscosity = KinematicViscosity;
//# sourceMappingURL=kinematicviscosity.g.js.map