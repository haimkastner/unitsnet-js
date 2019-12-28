"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MolarMassUnits enumeration */
var MolarMassUnits;
(function (MolarMassUnits) {
    /** */
    MolarMassUnits[MolarMassUnits["GramsPerMole"] = 0] = "GramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["PoundsPerMole"] = 1] = "PoundsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["NanogramsPerMole"] = 2] = "NanogramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["MicrogramsPerMole"] = 3] = "MicrogramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["CentigramsPerMole"] = 4] = "CentigramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["DecigramsPerMole"] = 5] = "DecigramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["DecagramsPerMole"] = 6] = "DecagramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["HectogramsPerMole"] = 7] = "HectogramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["KilogramsPerMole"] = 8] = "KilogramsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["KilopoundsPerMole"] = 9] = "KilopoundsPerMole";
    /** */
    MolarMassUnits[MolarMassUnits["MegapoundsPerMole"] = 10] = "MegapoundsPerMole";
})(MolarMassUnits = exports.MolarMassUnits || (exports.MolarMassUnits = {}));
/** In chemistry, the molar mass M is a physical property defined as the mass of a given substance (chemical element or chemical compound) divided by the amount of substance. */
class MolarMass {
    /**
     * Create a new MolarMass.
     * @param value The value.
     * @param fromUnit The ‘MolarMass’ unit to create from.
     * The default unit is KilogramsPerMole
     */
    constructor(value, fromUnit = MolarMassUnits.KilogramsPerMole) {
        this.gramspermoleLazy = null;
        this.poundspermoleLazy = null;
        this.nanogramspermoleLazy = null;
        this.microgramspermoleLazy = null;
        this.centigramspermoleLazy = null;
        this.decigramspermoleLazy = null;
        this.decagramspermoleLazy = null;
        this.hectogramspermoleLazy = null;
        this.kilogramspermoleLazy = null;
        this.kilopoundspermoleLazy = null;
        this.megapoundspermoleLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MolarMass is KilogramsPerMole.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerMole() {
        if (this.gramspermoleLazy !== null) {
            return this.gramspermoleLazy;
        }
        return this.gramspermoleLazy = this.convertFromBase(MolarMassUnits.GramsPerMole);
    }
    /** */
    get PoundsPerMole() {
        if (this.poundspermoleLazy !== null) {
            return this.poundspermoleLazy;
        }
        return this.poundspermoleLazy = this.convertFromBase(MolarMassUnits.PoundsPerMole);
    }
    /** */
    get NanogramsPerMole() {
        if (this.nanogramspermoleLazy !== null) {
            return this.nanogramspermoleLazy;
        }
        return this.nanogramspermoleLazy = this.convertFromBase(MolarMassUnits.NanogramsPerMole);
    }
    /** */
    get MicrogramsPerMole() {
        if (this.microgramspermoleLazy !== null) {
            return this.microgramspermoleLazy;
        }
        return this.microgramspermoleLazy = this.convertFromBase(MolarMassUnits.MicrogramsPerMole);
    }
    /** */
    get CentigramsPerMole() {
        if (this.centigramspermoleLazy !== null) {
            return this.centigramspermoleLazy;
        }
        return this.centigramspermoleLazy = this.convertFromBase(MolarMassUnits.CentigramsPerMole);
    }
    /** */
    get DecigramsPerMole() {
        if (this.decigramspermoleLazy !== null) {
            return this.decigramspermoleLazy;
        }
        return this.decigramspermoleLazy = this.convertFromBase(MolarMassUnits.DecigramsPerMole);
    }
    /** */
    get DecagramsPerMole() {
        if (this.decagramspermoleLazy !== null) {
            return this.decagramspermoleLazy;
        }
        return this.decagramspermoleLazy = this.convertFromBase(MolarMassUnits.DecagramsPerMole);
    }
    /** */
    get HectogramsPerMole() {
        if (this.hectogramspermoleLazy !== null) {
            return this.hectogramspermoleLazy;
        }
        return this.hectogramspermoleLazy = this.convertFromBase(MolarMassUnits.HectogramsPerMole);
    }
    /** */
    get KilogramsPerMole() {
        if (this.kilogramspermoleLazy !== null) {
            return this.kilogramspermoleLazy;
        }
        return this.kilogramspermoleLazy = this.convertFromBase(MolarMassUnits.KilogramsPerMole);
    }
    /** */
    get KilopoundsPerMole() {
        if (this.kilopoundspermoleLazy !== null) {
            return this.kilopoundspermoleLazy;
        }
        return this.kilopoundspermoleLazy = this.convertFromBase(MolarMassUnits.KilopoundsPerMole);
    }
    /** */
    get MegapoundsPerMole() {
        if (this.megapoundspermoleLazy !== null) {
            return this.megapoundspermoleLazy;
        }
        return this.megapoundspermoleLazy = this.convertFromBase(MolarMassUnits.MegapoundsPerMole);
    }
    /**
     * Create a new MolarMass instance from a GramsPerMole
     *
     * @param value The unit as GramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromGramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a PoundsPerMole
     *
     * @param value The unit as PoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromPoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }
    /**
     * Create a new MolarMass instance from a NanogramsPerMole
     *
     * @param value The unit as NanogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromNanogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.NanogramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a MicrogramsPerMole
     *
     * @param value The unit as MicrogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromMicrogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.MicrogramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a CentigramsPerMole
     *
     * @param value The unit as CentigramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromCentigramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.CentigramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a DecigramsPerMole
     *
     * @param value The unit as DecigramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromDecigramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.DecigramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a DecagramsPerMole
     *
     * @param value The unit as DecagramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromDecagramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.DecagramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a HectogramsPerMole
     *
     * @param value The unit as HectogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromHectogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.HectogramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a KilogramsPerMole
     *
     * @param value The unit as KilogramsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromKilogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.KilogramsPerMole);
    }
    /**
     * Create a new MolarMass instance from a KilopoundsPerMole
     *
     * @param value The unit as KilopoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromKilopoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.KilopoundsPerMole);
    }
    /**
     * Create a new MolarMass instance from a MegapoundsPerMole
     *
     * @param value The unit as MegapoundsPerMole to create a new MolarMass from.
     * @returns The new MolarMass instance.
     */
    static FromMegapoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.MegapoundsPerMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.value * 1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value / 0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (this.value * 1e3) / 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (this.value * 1e3) / 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (this.value * 1e3) / 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (this.value * 1e3) / 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (this.value * 1e3) / 10;
            case MolarMassUnits.HectogramsPerMole:
                return (this.value * 1e3) / 100;
            case MolarMassUnits.KilogramsPerMole:
                return (this.value * 1e3) / 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (this.value / 0.45359237) / 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (this.value / 0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarMassUnits.GramsPerMole:
                return value / 1e3;
            case MolarMassUnits.PoundsPerMole:
                return value * 0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (value / 1e3) * 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (value / 1e3) * 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (value / 1e3) * 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (value / 1e3) * 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (value / 1e3) * 10;
            case MolarMassUnits.HectogramsPerMole:
                return (value / 1e3) * 100;
            case MolarMassUnits.KilogramsPerMole:
                return (value / 1e3) * 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (value * 0.45359237) * 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (value * 0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MolarMass to string.
     * Note! the default format for MolarMass is KilogramsPerMole.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarMass.
     * @returns The string format of the MolarMass.
     */
    toString(toUnit = MolarMassUnits.KilogramsPerMole) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.GramsPerMole + ` g/mol`;
            case MolarMassUnits.PoundsPerMole:
                return this.PoundsPerMole + ` lb/mol`;
            case MolarMassUnits.NanogramsPerMole:
                return this.NanogramsPerMole + ` `;
            case MolarMassUnits.MicrogramsPerMole:
                return this.MicrogramsPerMole + ` `;
            case MolarMassUnits.CentigramsPerMole:
                return this.CentigramsPerMole + ` `;
            case MolarMassUnits.DecigramsPerMole:
                return this.DecigramsPerMole + ` `;
            case MolarMassUnits.DecagramsPerMole:
                return this.DecagramsPerMole + ` `;
            case MolarMassUnits.HectogramsPerMole:
                return this.HectogramsPerMole + ` `;
            case MolarMassUnits.KilogramsPerMole:
                return this.KilogramsPerMole + ` `;
            case MolarMassUnits.KilopoundsPerMole:
                return this.KilopoundsPerMole + ` `;
            case MolarMassUnits.MegapoundsPerMole:
                return this.MegapoundsPerMole + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given MolarMass are equals to the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns True if the given MolarMass are equal to the current MolarMass.
     */
    equals(molarMass) {
        return this.value === molarMass.BaseValue;
    }
    /**
     * Compare the given MolarMass against the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns 0 if they are equal, -1 if the current MolarMass is less then other, 1 if the current MolarMass is greater then other.
     */
    compareTo(molarMass) {
        if (this.value > molarMass.BaseValue)
            return 1;
        if (this.value < molarMass.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    add(molarMass) {
        return new MolarMass(this.value + molarMass.BaseValue);
    }
    /**
     * Subtract the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    subtract(molarMass) {
        return new MolarMass(this.value - molarMass.BaseValue);
    }
    /**
     * Multiply the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    multiply(molarMass) {
        return new MolarMass(this.value * molarMass.BaseValue);
    }
    /**
     * Divide the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    divide(molarMass) {
        return new MolarMass(this.value / molarMass.BaseValue);
    }
    /**
     * Modulo the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    modulo(molarMass) {
        return new MolarMass(this.value % molarMass.BaseValue);
    }
    /**
     * Pow the given MolarMass with the current MolarMass.
     * @param molarMass The other MolarMass.
     * @returns A new MolarMass instance with the results.
     */
    pow(molarMass) {
        return new MolarMass(this.value ** molarMass.BaseValue);
    }
}
exports.MolarMass = MolarMass;
//# sourceMappingURL=molarmass.g.js.map