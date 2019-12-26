"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LuminosityUnits enumeration */
var LuminosityUnits;
(function (LuminosityUnits) {
    /** */
    LuminosityUnits[LuminosityUnits["Watts"] = 0] = "Watts";
    /** */
    LuminosityUnits[LuminosityUnits["SolarLuminosities"] = 1] = "SolarLuminosities";
    /** */
    LuminosityUnits[LuminosityUnits["Femtowatts"] = 2] = "Femtowatts";
    /** */
    LuminosityUnits[LuminosityUnits["Picowatts"] = 3] = "Picowatts";
    /** */
    LuminosityUnits[LuminosityUnits["Nanowatts"] = 4] = "Nanowatts";
    /** */
    LuminosityUnits[LuminosityUnits["Microwatts"] = 5] = "Microwatts";
    /** */
    LuminosityUnits[LuminosityUnits["Deciwatts"] = 6] = "Deciwatts";
    /** */
    LuminosityUnits[LuminosityUnits["Decawatts"] = 7] = "Decawatts";
    /** */
    LuminosityUnits[LuminosityUnits["Kilowatts"] = 8] = "Kilowatts";
    /** */
    LuminosityUnits[LuminosityUnits["Megawatts"] = 9] = "Megawatts";
    /** */
    LuminosityUnits[LuminosityUnits["Gigawatts"] = 10] = "Gigawatts";
    /** */
    LuminosityUnits[LuminosityUnits["Terawatts"] = 11] = "Terawatts";
    /** */
    LuminosityUnits[LuminosityUnits["Petawatts"] = 12] = "Petawatts";
})(LuminosityUnits = exports.LuminosityUnits || (exports.LuminosityUnits = {}));
/** Luminosity is an absolute measure of radiated electromagnetic power (light), the radiant power emitted by a light-emitting object. */
class Luminosity {
    /**
     * Create a new Luminosity.
     * @param value The value.
     * @param fromUnit The ‘Luminosity’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.wattsLazy = null;
        this.solarluminositiesLazy = null;
        this.femtowattsLazy = null;
        this.picowattsLazy = null;
        this.nanowattsLazy = null;
        this.microwattsLazy = null;
        this.deciwattsLazy = null;
        this.decawattsLazy = null;
        this.kilowattsLazy = null;
        this.megawattsLazy = null;
        this.gigawattsLazy = null;
        this.terawattsLazy = null;
        this.petawattsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Luminosity is Watt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Watts() {
        if (this.wattsLazy !== null) {
            return this.wattsLazy;
        }
        return this.wattsLazy = this.convertFromBase(LuminosityUnits.Watts);
    }
    /** */
    get SolarLuminosities() {
        if (this.solarluminositiesLazy !== null) {
            return this.solarluminositiesLazy;
        }
        return this.solarluminositiesLazy = this.convertFromBase(LuminosityUnits.SolarLuminosities);
    }
    /** */
    get Femtowatts() {
        if (this.femtowattsLazy !== null) {
            return this.femtowattsLazy;
        }
        return this.femtowattsLazy = this.convertFromBase(LuminosityUnits.Femtowatts);
    }
    /** */
    get Picowatts() {
        if (this.picowattsLazy !== null) {
            return this.picowattsLazy;
        }
        return this.picowattsLazy = this.convertFromBase(LuminosityUnits.Picowatts);
    }
    /** */
    get Nanowatts() {
        if (this.nanowattsLazy !== null) {
            return this.nanowattsLazy;
        }
        return this.nanowattsLazy = this.convertFromBase(LuminosityUnits.Nanowatts);
    }
    /** */
    get Microwatts() {
        if (this.microwattsLazy !== null) {
            return this.microwattsLazy;
        }
        return this.microwattsLazy = this.convertFromBase(LuminosityUnits.Microwatts);
    }
    /** */
    get Deciwatts() {
        if (this.deciwattsLazy !== null) {
            return this.deciwattsLazy;
        }
        return this.deciwattsLazy = this.convertFromBase(LuminosityUnits.Deciwatts);
    }
    /** */
    get Decawatts() {
        if (this.decawattsLazy !== null) {
            return this.decawattsLazy;
        }
        return this.decawattsLazy = this.convertFromBase(LuminosityUnits.Decawatts);
    }
    /** */
    get Kilowatts() {
        if (this.kilowattsLazy !== null) {
            return this.kilowattsLazy;
        }
        return this.kilowattsLazy = this.convertFromBase(LuminosityUnits.Kilowatts);
    }
    /** */
    get Megawatts() {
        if (this.megawattsLazy !== null) {
            return this.megawattsLazy;
        }
        return this.megawattsLazy = this.convertFromBase(LuminosityUnits.Megawatts);
    }
    /** */
    get Gigawatts() {
        if (this.gigawattsLazy !== null) {
            return this.gigawattsLazy;
        }
        return this.gigawattsLazy = this.convertFromBase(LuminosityUnits.Gigawatts);
    }
    /** */
    get Terawatts() {
        if (this.terawattsLazy !== null) {
            return this.terawattsLazy;
        }
        return this.terawattsLazy = this.convertFromBase(LuminosityUnits.Terawatts);
    }
    /** */
    get Petawatts() {
        if (this.petawattsLazy !== null) {
            return this.petawattsLazy;
        }
        return this.petawattsLazy = this.convertFromBase(LuminosityUnits.Petawatts);
    }
    /**
     * Create a new Luminosity instance from a Watts
     *
     * @param value The unit as Watts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromWatts(value) {
        return new Luminosity(value, LuminosityUnits.Watts);
    }
    /**
     * Create a new Luminosity instance from a SolarLuminosities
     *
     * @param value The unit as SolarLuminosities to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromSolarLuminosities(value) {
        return new Luminosity(value, LuminosityUnits.SolarLuminosities);
    }
    /**
     * Create a new Luminosity instance from a Femtowatts
     *
     * @param value The unit as Femtowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromFemtowatts(value) {
        return new Luminosity(value, LuminosityUnits.Femtowatts);
    }
    /**
     * Create a new Luminosity instance from a Picowatts
     *
     * @param value The unit as Picowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromPicowatts(value) {
        return new Luminosity(value, LuminosityUnits.Picowatts);
    }
    /**
     * Create a new Luminosity instance from a Nanowatts
     *
     * @param value The unit as Nanowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromNanowatts(value) {
        return new Luminosity(value, LuminosityUnits.Nanowatts);
    }
    /**
     * Create a new Luminosity instance from a Microwatts
     *
     * @param value The unit as Microwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromMicrowatts(value) {
        return new Luminosity(value, LuminosityUnits.Microwatts);
    }
    /**
     * Create a new Luminosity instance from a Deciwatts
     *
     * @param value The unit as Deciwatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromDeciwatts(value) {
        return new Luminosity(value, LuminosityUnits.Deciwatts);
    }
    /**
     * Create a new Luminosity instance from a Decawatts
     *
     * @param value The unit as Decawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromDecawatts(value) {
        return new Luminosity(value, LuminosityUnits.Decawatts);
    }
    /**
     * Create a new Luminosity instance from a Kilowatts
     *
     * @param value The unit as Kilowatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromKilowatts(value) {
        return new Luminosity(value, LuminosityUnits.Kilowatts);
    }
    /**
     * Create a new Luminosity instance from a Megawatts
     *
     * @param value The unit as Megawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromMegawatts(value) {
        return new Luminosity(value, LuminosityUnits.Megawatts);
    }
    /**
     * Create a new Luminosity instance from a Gigawatts
     *
     * @param value The unit as Gigawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromGigawatts(value) {
        return new Luminosity(value, LuminosityUnits.Gigawatts);
    }
    /**
     * Create a new Luminosity instance from a Terawatts
     *
     * @param value The unit as Terawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromTerawatts(value) {
        return new Luminosity(value, LuminosityUnits.Terawatts);
    }
    /**
     * Create a new Luminosity instance from a Petawatts
     *
     * @param value The unit as Petawatts to create a new Luminosity from.
     * @returns The new Luminosity instance.
     */
    static FromPetawatts(value) {
        return new Luminosity(value, LuminosityUnits.Petawatts);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LuminosityUnits.Watts:
                return this.value;
            case LuminosityUnits.SolarLuminosities:
                return this.value / 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (this.value) / 1e-15;
            case LuminosityUnits.Picowatts:
                return (this.value) / 1e-12;
            case LuminosityUnits.Nanowatts:
                return (this.value) / 1e-9;
            case LuminosityUnits.Microwatts:
                return (this.value) / 0.000001;
            case LuminosityUnits.Deciwatts:
                return (this.value) / 0.1;
            case LuminosityUnits.Decawatts:
                return (this.value) / 10;
            case LuminosityUnits.Kilowatts:
                return (this.value) / 1000;
            case LuminosityUnits.Megawatts:
                return (this.value) / 1000000;
            case LuminosityUnits.Gigawatts:
                return (this.value) / 1000000000;
            case LuminosityUnits.Terawatts:
                return (this.value) / 1000000000000;
            case LuminosityUnits.Petawatts:
                return (this.value) / 1000000000000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LuminosityUnits.Watts:
                return value;
            case LuminosityUnits.SolarLuminosities:
                return value * 3.846e26;
            case LuminosityUnits.Femtowatts:
                return (value) * 1e-15;
            case LuminosityUnits.Picowatts:
                return (value) * 1e-12;
            case LuminosityUnits.Nanowatts:
                return (value) * 1e-9;
            case LuminosityUnits.Microwatts:
                return (value) * 0.000001;
            case LuminosityUnits.Deciwatts:
                return (value) * 0.1;
            case LuminosityUnits.Decawatts:
                return (value) * 10;
            case LuminosityUnits.Kilowatts:
                return (value) * 1000;
            case LuminosityUnits.Megawatts:
                return (value) * 1000000;
            case LuminosityUnits.Gigawatts:
                return (value) * 1000000000;
            case LuminosityUnits.Terawatts:
                return (value) * 1000000000000;
            case LuminosityUnits.Petawatts:
                return (value) * 1000000000000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Luminosity to string.
     * Note! the default format for Luminosity is Watts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Luminosity.
     * @returns The string format of the Luminosity.
     */
    toString(toUnit = LuminosityUnits.Watts) {
        switch (toUnit) {
            case LuminosityUnits.Watts:
                return this.Watts + ` W`;
            case LuminosityUnits.SolarLuminosities:
                return this.SolarLuminosities + ` L⊙`;
            case LuminosityUnits.Femtowatts:
                return this.Femtowatts + ` W`;
            case LuminosityUnits.Picowatts:
                return this.Picowatts + ` W`;
            case LuminosityUnits.Nanowatts:
                return this.Nanowatts + ` W`;
            case LuminosityUnits.Microwatts:
                return this.Microwatts + ` W`;
            case LuminosityUnits.Deciwatts:
                return this.Deciwatts + ` W`;
            case LuminosityUnits.Decawatts:
                return this.Decawatts + ` W`;
            case LuminosityUnits.Kilowatts:
                return this.Kilowatts + ` W`;
            case LuminosityUnits.Megawatts:
                return this.Megawatts + ` W`;
            case LuminosityUnits.Gigawatts:
                return this.Gigawatts + ` W`;
            case LuminosityUnits.Terawatts:
                return this.Terawatts + ` W`;
            case LuminosityUnits.Petawatts:
                return this.Petawatts + ` W`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Luminosity = Luminosity;
//# sourceMappingURL=luminosity.g.js.map