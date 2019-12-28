"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MassFluxUnits enumeration */
var MassFluxUnits;
(function (MassFluxUnits) {
    /** */
    MassFluxUnits[MassFluxUnits["GramsPerSecondPerSquareMeter"] = 0] = "GramsPerSecondPerSquareMeter";
    /** */
    MassFluxUnits[MassFluxUnits["KilogramsPerSecondPerSquareMeter"] = 1] = "KilogramsPerSecondPerSquareMeter";
})(MassFluxUnits = exports.MassFluxUnits || (exports.MassFluxUnits = {}));
/** Mass flux is the mass flow rate per unit area. */
class MassFlux {
    /**
     * Create a new MassFlux.
     * @param value The value.
     * @param fromUnit The ‘MassFlux’ unit to create from.
     * The default unit is KilogramsPerSecondPerSquareMeter
     */
    constructor(value, fromUnit = MassFluxUnits.KilogramsPerSecondPerSquareMeter) {
        this.gramspersecondpersquaremeterLazy = null;
        this.kilogramspersecondpersquaremeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MassFlux is KilogramsPerSecondPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerSecondPerSquareMeter() {
        if (this.gramspersecondpersquaremeterLazy !== null) {
            return this.gramspersecondpersquaremeterLazy;
        }
        return this.gramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    /** */
    get KilogramsPerSecondPerSquareMeter() {
        if (this.kilogramspersecondpersquaremeterLazy !== null) {
            return this.kilogramspersecondpersquaremeterLazy;
        }
        return this.kilogramspersecondpersquaremeterLazy = this.convertFromBase(MassFluxUnits.KilogramsPerSecondPerSquareMeter);
    }
    /**
     * Create a new MassFlux instance from a GramsPerSecondPerSquareMeter
     *
     * @param value The unit as GramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
    static FromGramsPerSecondPerSquareMeter(value) {
        return new MassFlux(value, MassFluxUnits.GramsPerSecondPerSquareMeter);
    }
    /**
     * Create a new MassFlux instance from a KilogramsPerSecondPerSquareMeter
     *
     * @param value The unit as KilogramsPerSecondPerSquareMeter to create a new MassFlux from.
     * @returns The new MassFlux instance.
     */
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
    /**
     * Format the MassFlux to string.
     * Note! the default format for MassFlux is KilogramsPerSecondPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassFlux.
     * @returns The string format of the MassFlux.
     */
    toString(toUnit = MassFluxUnits.KilogramsPerSecondPerSquareMeter) {
        switch (toUnit) {
            case MassFluxUnits.GramsPerSecondPerSquareMeter:
                return this.GramsPerSecondPerSquareMeter + ` g·s⁻¹·m⁻²`;
            case MassFluxUnits.KilogramsPerSecondPerSquareMeter:
                return this.KilogramsPerSecondPerSquareMeter + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given MassFlux are equals to the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns True if the given MassFlux are equal to the current MassFlux.
     */
    equals(massFlux) {
        return this.value === massFlux.BaseValue;
    }
    /**
     * Compare the given MassFlux against the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns 0 if they are equal, -1 if the current MassFlux is less then other, 1 if the current MassFlux is greater then other.
     */
    compareTo(massFlux) {
        if (this.value > massFlux.BaseValue)
            return 1;
        if (this.value < massFlux.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    add(massFlux) {
        return new MassFlux(this.value + massFlux.BaseValue);
    }
    /**
     * Subtract the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    subtract(massFlux) {
        return new MassFlux(this.value - massFlux.BaseValue);
    }
    /**
     * Multiply the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    multiply(massFlux) {
        return new MassFlux(this.value * massFlux.BaseValue);
    }
    /**
     * Divide the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    divide(massFlux) {
        return new MassFlux(this.value / massFlux.BaseValue);
    }
    /**
     * Modulo the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    modulo(massFlux) {
        return new MassFlux(this.value % massFlux.BaseValue);
    }
    /**
     * Pow the given MassFlux with the current MassFlux.
     * @param massFlux The other MassFlux.
     * @returns A new MassFlux instance with the results.
     */
    pow(massFlux) {
        return new MassFlux(this.value ** massFlux.BaseValue);
    }
}
exports.MassFlux = MassFlux;
//# sourceMappingURL=massflux.g.js.map