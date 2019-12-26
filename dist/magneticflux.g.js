"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MagneticFluxUnits enumeration */
var MagneticFluxUnits;
(function (MagneticFluxUnits) {
    /** */
    MagneticFluxUnits[MagneticFluxUnits["Webers"] = 0] = "Webers";
})(MagneticFluxUnits = exports.MagneticFluxUnits || (exports.MagneticFluxUnits = {}));
/** In physics, specifically electromagnetism, the magnetic flux through a surface is the surface integral of the normal component of the magnetic field B passing through that surface. */
class MagneticFlux {
    /**
     * Create a new MagneticFlux.
     * @param value The value.
     * @param fromUnit The ‘MagneticFlux’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.webersLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MagneticFlux is Weber.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Webers() {
        if (this.webersLazy !== null) {
            return this.webersLazy;
        }
        return this.webersLazy = this.convertFromBase(MagneticFluxUnits.Webers);
    }
    /**
     * Create a new MagneticFlux instance from a Webers
     *
     * @param value The unit as Webers to create a new MagneticFlux from.
     * @returns The new MagneticFlux instance.
     */
    static FromWebers(value) {
        return new MagneticFlux(value, MagneticFluxUnits.Webers);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagneticFluxUnits.Webers:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MagneticFluxUnits.Webers:
                return value;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MagneticFlux to string.
     * Note! the default format for MagneticFlux is Webers.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MagneticFlux.
     * @returns The string format of the MagneticFlux.
     */
    toString(toUnit = MagneticFluxUnits.Webers) {
        switch (toUnit) {
            case MagneticFluxUnits.Webers:
                return this.Webers + ` Wb`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MagneticFlux = MagneticFlux;
//# sourceMappingURL=magneticflux.g.js.map