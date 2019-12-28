"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LengthUnits enumeration */
var LengthUnits;
(function (LengthUnits) {
    /** */
    LengthUnits[LengthUnits["Meters"] = 0] = "Meters";
    /** */
    LengthUnits[LengthUnits["Miles"] = 1] = "Miles";
    /** */
    LengthUnits[LengthUnits["Yards"] = 2] = "Yards";
    /** */
    LengthUnits[LengthUnits["Feet"] = 3] = "Feet";
    /** */
    LengthUnits[LengthUnits["UsSurveyFeet"] = 4] = "UsSurveyFeet";
    /** */
    LengthUnits[LengthUnits["Inches"] = 5] = "Inches";
    /** */
    LengthUnits[LengthUnits["Mils"] = 6] = "Mils";
    /** */
    LengthUnits[LengthUnits["NauticalMiles"] = 7] = "NauticalMiles";
    /** */
    LengthUnits[LengthUnits["Fathoms"] = 8] = "Fathoms";
    /** */
    LengthUnits[LengthUnits["Shackles"] = 9] = "Shackles";
    /** */
    LengthUnits[LengthUnits["Microinches"] = 10] = "Microinches";
    /** */
    LengthUnits[LengthUnits["PrinterPoints"] = 11] = "PrinterPoints";
    /** */
    LengthUnits[LengthUnits["DtpPoints"] = 12] = "DtpPoints";
    /** */
    LengthUnits[LengthUnits["PrinterPicas"] = 13] = "PrinterPicas";
    /** */
    LengthUnits[LengthUnits["DtpPicas"] = 14] = "DtpPicas";
    /** */
    LengthUnits[LengthUnits["Twips"] = 15] = "Twips";
    /** */
    LengthUnits[LengthUnits["Hands"] = 16] = "Hands";
    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    LengthUnits[LengthUnits["AstronomicalUnits"] = 17] = "AstronomicalUnits";
    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    LengthUnits[LengthUnits["Parsecs"] = 18] = "Parsecs";
    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    LengthUnits[LengthUnits["LightYears"] = 19] = "LightYears";
    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    LengthUnits[LengthUnits["SolarRadiuses"] = 20] = "SolarRadiuses";
    /** */
    LengthUnits[LengthUnits["Nanometers"] = 21] = "Nanometers";
    /** */
    LengthUnits[LengthUnits["Micrometers"] = 22] = "Micrometers";
    /** */
    LengthUnits[LengthUnits["Centimeters"] = 23] = "Centimeters";
    /** */
    LengthUnits[LengthUnits["Decimeters"] = 24] = "Decimeters";
    /** */
    LengthUnits[LengthUnits["Hectometers"] = 25] = "Hectometers";
    /** */
    LengthUnits[LengthUnits["Kilometers"] = 26] = "Kilometers";
    /** */
    LengthUnits[LengthUnits["Kiloparsecs"] = 27] = "Kiloparsecs";
    /** */
    LengthUnits[LengthUnits["Megaparsecs"] = 28] = "Megaparsecs";
    /** */
    LengthUnits[LengthUnits["KilolightYears"] = 29] = "KilolightYears";
    /** */
    LengthUnits[LengthUnits["MegalightYears"] = 30] = "MegalightYears";
})(LengthUnits = exports.LengthUnits || (exports.LengthUnits = {}));
/** Many different units of length have been used around the world. The main units in modern use are U.S. customary units in the United States and the Metric system elsewhere. British Imperial units are still used for some purposes in the United Kingdom and some other countries. The metric system is sub-divided into SI and non-SI units. */
class Length {
    /**
     * Create a new Length.
     * @param value The value.
     * @param fromUnit The ‘Length’ unit to create from.
     * The default unit is Meters
     */
    constructor(value, fromUnit = LengthUnits.Meters) {
        this.metersLazy = null;
        this.milesLazy = null;
        this.yardsLazy = null;
        this.feetLazy = null;
        this.ussurveyfeetLazy = null;
        this.inchesLazy = null;
        this.milsLazy = null;
        this.nauticalmilesLazy = null;
        this.fathomsLazy = null;
        this.shacklesLazy = null;
        this.microinchesLazy = null;
        this.printerpointsLazy = null;
        this.dtppointsLazy = null;
        this.printerpicasLazy = null;
        this.dtppicasLazy = null;
        this.twipsLazy = null;
        this.handsLazy = null;
        this.astronomicalunitsLazy = null;
        this.parsecsLazy = null;
        this.lightyearsLazy = null;
        this.solarradiusesLazy = null;
        this.nanometersLazy = null;
        this.micrometersLazy = null;
        this.centimetersLazy = null;
        this.decimetersLazy = null;
        this.hectometersLazy = null;
        this.kilometersLazy = null;
        this.kiloparsecsLazy = null;
        this.megaparsecsLazy = null;
        this.kilolightyearsLazy = null;
        this.megalightyearsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Length is Meters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Meters() {
        if (this.metersLazy !== null) {
            return this.metersLazy;
        }
        return this.metersLazy = this.convertFromBase(LengthUnits.Meters);
    }
    /** */
    get Miles() {
        if (this.milesLazy !== null) {
            return this.milesLazy;
        }
        return this.milesLazy = this.convertFromBase(LengthUnits.Miles);
    }
    /** */
    get Yards() {
        if (this.yardsLazy !== null) {
            return this.yardsLazy;
        }
        return this.yardsLazy = this.convertFromBase(LengthUnits.Yards);
    }
    /** */
    get Feet() {
        if (this.feetLazy !== null) {
            return this.feetLazy;
        }
        return this.feetLazy = this.convertFromBase(LengthUnits.Feet);
    }
    /** */
    get UsSurveyFeet() {
        if (this.ussurveyfeetLazy !== null) {
            return this.ussurveyfeetLazy;
        }
        return this.ussurveyfeetLazy = this.convertFromBase(LengthUnits.UsSurveyFeet);
    }
    /** */
    get Inches() {
        if (this.inchesLazy !== null) {
            return this.inchesLazy;
        }
        return this.inchesLazy = this.convertFromBase(LengthUnits.Inches);
    }
    /** */
    get Mils() {
        if (this.milsLazy !== null) {
            return this.milsLazy;
        }
        return this.milsLazy = this.convertFromBase(LengthUnits.Mils);
    }
    /** */
    get NauticalMiles() {
        if (this.nauticalmilesLazy !== null) {
            return this.nauticalmilesLazy;
        }
        return this.nauticalmilesLazy = this.convertFromBase(LengthUnits.NauticalMiles);
    }
    /** */
    get Fathoms() {
        if (this.fathomsLazy !== null) {
            return this.fathomsLazy;
        }
        return this.fathomsLazy = this.convertFromBase(LengthUnits.Fathoms);
    }
    /** */
    get Shackles() {
        if (this.shacklesLazy !== null) {
            return this.shacklesLazy;
        }
        return this.shacklesLazy = this.convertFromBase(LengthUnits.Shackles);
    }
    /** */
    get Microinches() {
        if (this.microinchesLazy !== null) {
            return this.microinchesLazy;
        }
        return this.microinchesLazy = this.convertFromBase(LengthUnits.Microinches);
    }
    /** */
    get PrinterPoints() {
        if (this.printerpointsLazy !== null) {
            return this.printerpointsLazy;
        }
        return this.printerpointsLazy = this.convertFromBase(LengthUnits.PrinterPoints);
    }
    /** */
    get DtpPoints() {
        if (this.dtppointsLazy !== null) {
            return this.dtppointsLazy;
        }
        return this.dtppointsLazy = this.convertFromBase(LengthUnits.DtpPoints);
    }
    /** */
    get PrinterPicas() {
        if (this.printerpicasLazy !== null) {
            return this.printerpicasLazy;
        }
        return this.printerpicasLazy = this.convertFromBase(LengthUnits.PrinterPicas);
    }
    /** */
    get DtpPicas() {
        if (this.dtppicasLazy !== null) {
            return this.dtppicasLazy;
        }
        return this.dtppicasLazy = this.convertFromBase(LengthUnits.DtpPicas);
    }
    /** */
    get Twips() {
        if (this.twipsLazy !== null) {
            return this.twipsLazy;
        }
        return this.twipsLazy = this.convertFromBase(LengthUnits.Twips);
    }
    /** */
    get Hands() {
        if (this.handsLazy !== null) {
            return this.handsLazy;
        }
        return this.handsLazy = this.convertFromBase(LengthUnits.Hands);
    }
    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    get AstronomicalUnits() {
        if (this.astronomicalunitsLazy !== null) {
            return this.astronomicalunitsLazy;
        }
        return this.astronomicalunitsLazy = this.convertFromBase(LengthUnits.AstronomicalUnits);
    }
    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    get Parsecs() {
        if (this.parsecsLazy !== null) {
            return this.parsecsLazy;
        }
        return this.parsecsLazy = this.convertFromBase(LengthUnits.Parsecs);
    }
    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    get LightYears() {
        if (this.lightyearsLazy !== null) {
            return this.lightyearsLazy;
        }
        return this.lightyearsLazy = this.convertFromBase(LengthUnits.LightYears);
    }
    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    get SolarRadiuses() {
        if (this.solarradiusesLazy !== null) {
            return this.solarradiusesLazy;
        }
        return this.solarradiusesLazy = this.convertFromBase(LengthUnits.SolarRadiuses);
    }
    /** */
    get Nanometers() {
        if (this.nanometersLazy !== null) {
            return this.nanometersLazy;
        }
        return this.nanometersLazy = this.convertFromBase(LengthUnits.Nanometers);
    }
    /** */
    get Micrometers() {
        if (this.micrometersLazy !== null) {
            return this.micrometersLazy;
        }
        return this.micrometersLazy = this.convertFromBase(LengthUnits.Micrometers);
    }
    /** */
    get Centimeters() {
        if (this.centimetersLazy !== null) {
            return this.centimetersLazy;
        }
        return this.centimetersLazy = this.convertFromBase(LengthUnits.Centimeters);
    }
    /** */
    get Decimeters() {
        if (this.decimetersLazy !== null) {
            return this.decimetersLazy;
        }
        return this.decimetersLazy = this.convertFromBase(LengthUnits.Decimeters);
    }
    /** */
    get Hectometers() {
        if (this.hectometersLazy !== null) {
            return this.hectometersLazy;
        }
        return this.hectometersLazy = this.convertFromBase(LengthUnits.Hectometers);
    }
    /** */
    get Kilometers() {
        if (this.kilometersLazy !== null) {
            return this.kilometersLazy;
        }
        return this.kilometersLazy = this.convertFromBase(LengthUnits.Kilometers);
    }
    /** */
    get Kiloparsecs() {
        if (this.kiloparsecsLazy !== null) {
            return this.kiloparsecsLazy;
        }
        return this.kiloparsecsLazy = this.convertFromBase(LengthUnits.Kiloparsecs);
    }
    /** */
    get Megaparsecs() {
        if (this.megaparsecsLazy !== null) {
            return this.megaparsecsLazy;
        }
        return this.megaparsecsLazy = this.convertFromBase(LengthUnits.Megaparsecs);
    }
    /** */
    get KilolightYears() {
        if (this.kilolightyearsLazy !== null) {
            return this.kilolightyearsLazy;
        }
        return this.kilolightyearsLazy = this.convertFromBase(LengthUnits.KilolightYears);
    }
    /** */
    get MegalightYears() {
        if (this.megalightyearsLazy !== null) {
            return this.megalightyearsLazy;
        }
        return this.megalightyearsLazy = this.convertFromBase(LengthUnits.MegalightYears);
    }
    /**
     * Create a new Length instance from a Meters
     *
     * @param value The unit as Meters to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMeters(value) {
        return new Length(value, LengthUnits.Meters);
    }
    /**
     * Create a new Length instance from a Miles
     *
     * @param value The unit as Miles to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMiles(value) {
        return new Length(value, LengthUnits.Miles);
    }
    /**
     * Create a new Length instance from a Yards
     *
     * @param value The unit as Yards to create a new Length from.
     * @returns The new Length instance.
     */
    static FromYards(value) {
        return new Length(value, LengthUnits.Yards);
    }
    /**
     * Create a new Length instance from a Feet
     *
     * @param value The unit as Feet to create a new Length from.
     * @returns The new Length instance.
     */
    static FromFeet(value) {
        return new Length(value, LengthUnits.Feet);
    }
    /**
     * Create a new Length instance from a UsSurveyFeet
     *
     * @param value The unit as UsSurveyFeet to create a new Length from.
     * @returns The new Length instance.
     */
    static FromUsSurveyFeet(value) {
        return new Length(value, LengthUnits.UsSurveyFeet);
    }
    /**
     * Create a new Length instance from a Inches
     *
     * @param value The unit as Inches to create a new Length from.
     * @returns The new Length instance.
     */
    static FromInches(value) {
        return new Length(value, LengthUnits.Inches);
    }
    /**
     * Create a new Length instance from a Mils
     *
     * @param value The unit as Mils to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMils(value) {
        return new Length(value, LengthUnits.Mils);
    }
    /**
     * Create a new Length instance from a NauticalMiles
     *
     * @param value The unit as NauticalMiles to create a new Length from.
     * @returns The new Length instance.
     */
    static FromNauticalMiles(value) {
        return new Length(value, LengthUnits.NauticalMiles);
    }
    /**
     * Create a new Length instance from a Fathoms
     *
     * @param value The unit as Fathoms to create a new Length from.
     * @returns The new Length instance.
     */
    static FromFathoms(value) {
        return new Length(value, LengthUnits.Fathoms);
    }
    /**
     * Create a new Length instance from a Shackles
     *
     * @param value The unit as Shackles to create a new Length from.
     * @returns The new Length instance.
     */
    static FromShackles(value) {
        return new Length(value, LengthUnits.Shackles);
    }
    /**
     * Create a new Length instance from a Microinches
     *
     * @param value The unit as Microinches to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMicroinches(value) {
        return new Length(value, LengthUnits.Microinches);
    }
    /**
     * Create a new Length instance from a PrinterPoints
     *
     * @param value The unit as PrinterPoints to create a new Length from.
     * @returns The new Length instance.
     */
    static FromPrinterPoints(value) {
        return new Length(value, LengthUnits.PrinterPoints);
    }
    /**
     * Create a new Length instance from a DtpPoints
     *
     * @param value The unit as DtpPoints to create a new Length from.
     * @returns The new Length instance.
     */
    static FromDtpPoints(value) {
        return new Length(value, LengthUnits.DtpPoints);
    }
    /**
     * Create a new Length instance from a PrinterPicas
     *
     * @param value The unit as PrinterPicas to create a new Length from.
     * @returns The new Length instance.
     */
    static FromPrinterPicas(value) {
        return new Length(value, LengthUnits.PrinterPicas);
    }
    /**
     * Create a new Length instance from a DtpPicas
     *
     * @param value The unit as DtpPicas to create a new Length from.
     * @returns The new Length instance.
     */
    static FromDtpPicas(value) {
        return new Length(value, LengthUnits.DtpPicas);
    }
    /**
     * Create a new Length instance from a Twips
     *
     * @param value The unit as Twips to create a new Length from.
     * @returns The new Length instance.
     */
    static FromTwips(value) {
        return new Length(value, LengthUnits.Twips);
    }
    /**
     * Create a new Length instance from a Hands
     *
     * @param value The unit as Hands to create a new Length from.
     * @returns The new Length instance.
     */
    static FromHands(value) {
        return new Length(value, LengthUnits.Hands);
    }
    /**
     * Create a new Length instance from a AstronomicalUnits
     * One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth.
     * @param value The unit as AstronomicalUnits to create a new Length from.
     * @returns The new Length instance.
     */
    static FromAstronomicalUnits(value) {
        return new Length(value, LengthUnits.AstronomicalUnits);
    }
    /**
     * Create a new Length instance from a Parsecs
     * A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond.
     * @param value The unit as Parsecs to create a new Length from.
     * @returns The new Length instance.
     */
    static FromParsecs(value) {
        return new Length(value, LengthUnits.Parsecs);
    }
    /**
     * Create a new Length instance from a LightYears
     * A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days.
     * @param value The unit as LightYears to create a new Length from.
     * @returns The new Length instance.
     */
    static FromLightYears(value) {
        return new Length(value, LengthUnits.LightYears);
    }
    /**
     * Create a new Length instance from a SolarRadiuses
     * Solar radius is a ratio unit to the radius of the solar system star, the sun.
     * @param value The unit as SolarRadiuses to create a new Length from.
     * @returns The new Length instance.
     */
    static FromSolarRadiuses(value) {
        return new Length(value, LengthUnits.SolarRadiuses);
    }
    /**
     * Create a new Length instance from a Nanometers
     *
     * @param value The unit as Nanometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromNanometers(value) {
        return new Length(value, LengthUnits.Nanometers);
    }
    /**
     * Create a new Length instance from a Micrometers
     *
     * @param value The unit as Micrometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMicrometers(value) {
        return new Length(value, LengthUnits.Micrometers);
    }
    /**
     * Create a new Length instance from a Centimeters
     *
     * @param value The unit as Centimeters to create a new Length from.
     * @returns The new Length instance.
     */
    static FromCentimeters(value) {
        return new Length(value, LengthUnits.Centimeters);
    }
    /**
     * Create a new Length instance from a Decimeters
     *
     * @param value The unit as Decimeters to create a new Length from.
     * @returns The new Length instance.
     */
    static FromDecimeters(value) {
        return new Length(value, LengthUnits.Decimeters);
    }
    /**
     * Create a new Length instance from a Hectometers
     *
     * @param value The unit as Hectometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromHectometers(value) {
        return new Length(value, LengthUnits.Hectometers);
    }
    /**
     * Create a new Length instance from a Kilometers
     *
     * @param value The unit as Kilometers to create a new Length from.
     * @returns The new Length instance.
     */
    static FromKilometers(value) {
        return new Length(value, LengthUnits.Kilometers);
    }
    /**
     * Create a new Length instance from a Kiloparsecs
     *
     * @param value The unit as Kiloparsecs to create a new Length from.
     * @returns The new Length instance.
     */
    static FromKiloparsecs(value) {
        return new Length(value, LengthUnits.Kiloparsecs);
    }
    /**
     * Create a new Length instance from a Megaparsecs
     *
     * @param value The unit as Megaparsecs to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMegaparsecs(value) {
        return new Length(value, LengthUnits.Megaparsecs);
    }
    /**
     * Create a new Length instance from a KilolightYears
     *
     * @param value The unit as KilolightYears to create a new Length from.
     * @returns The new Length instance.
     */
    static FromKilolightYears(value) {
        return new Length(value, LengthUnits.KilolightYears);
    }
    /**
     * Create a new Length instance from a MegalightYears
     *
     * @param value The unit as MegalightYears to create a new Length from.
     * @returns The new Length instance.
     */
    static FromMegalightYears(value) {
        return new Length(value, LengthUnits.MegalightYears);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LengthUnits.Meters:
                return this.value;
            case LengthUnits.Miles:
                return this.value / 1609.34;
            case LengthUnits.Yards:
                return this.value / 0.9144;
            case LengthUnits.Feet:
                return this.value / 0.3048;
            case LengthUnits.UsSurveyFeet:
                return this.value * 3937 / 1200;
            case LengthUnits.Inches:
                return this.value / 2.54e-2;
            case LengthUnits.Mils:
                return this.value / 2.54e-5;
            case LengthUnits.NauticalMiles:
                return this.value / 1852;
            case LengthUnits.Fathoms:
                return this.value / 1.8288;
            case LengthUnits.Shackles:
                return this.value / 27.432;
            case LengthUnits.Microinches:
                return this.value / 2.54e-8;
            case LengthUnits.PrinterPoints:
                return (this.value / 2.54e-2) * 72.27;
            case LengthUnits.DtpPoints:
                return (this.value / 2.54e-2) * 72;
            case LengthUnits.PrinterPicas:
                return this.value * 237.106301584;
            case LengthUnits.DtpPicas:
                return this.value * 236.220472441;
            case LengthUnits.Twips:
                return this.value * 56692.913385826;
            case LengthUnits.Hands:
                return this.value / 1.016e-1;
            case LengthUnits.AstronomicalUnits:
                return this.value / 1.4959787070e11;
            case LengthUnits.Parsecs:
                return this.value / 3.08567758128e16;
            case LengthUnits.LightYears:
                return this.value / 9.46073047258e15;
            case LengthUnits.SolarRadiuses:
                return this.value / 6.95510000E+08;
            case LengthUnits.Nanometers:
                return (this.value) / 1e-9;
            case LengthUnits.Micrometers:
                return (this.value) / 0.000001;
            case LengthUnits.Centimeters:
                return (this.value) / 0.01;
            case LengthUnits.Decimeters:
                return (this.value) / 0.1;
            case LengthUnits.Hectometers:
                return (this.value) / 100;
            case LengthUnits.Kilometers:
                return (this.value) / 1000;
            case LengthUnits.Kiloparsecs:
                return (this.value / 3.08567758128e16) / 1000;
            case LengthUnits.Megaparsecs:
                return (this.value / 3.08567758128e16) / 1000000;
            case LengthUnits.KilolightYears:
                return (this.value / 9.46073047258e15) / 1000;
            case LengthUnits.MegalightYears:
                return (this.value / 9.46073047258e15) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LengthUnits.Meters:
                return value;
            case LengthUnits.Miles:
                return value * 1609.34;
            case LengthUnits.Yards:
                return value * 0.9144;
            case LengthUnits.Feet:
                return value * 0.3048;
            case LengthUnits.UsSurveyFeet:
                return value * 1200 / 3937;
            case LengthUnits.Inches:
                return value * 2.54e-2;
            case LengthUnits.Mils:
                return value * 2.54e-5;
            case LengthUnits.NauticalMiles:
                return value * 1852;
            case LengthUnits.Fathoms:
                return value * 1.8288;
            case LengthUnits.Shackles:
                return value * 27.432;
            case LengthUnits.Microinches:
                return value * 2.54e-8;
            case LengthUnits.PrinterPoints:
                return (value / 72.27) * 2.54e-2;
            case LengthUnits.DtpPoints:
                return (value / 72) * 2.54e-2;
            case LengthUnits.PrinterPicas:
                return value / 237.106301584;
            case LengthUnits.DtpPicas:
                return value / 236.220472441;
            case LengthUnits.Twips:
                return value / 56692.913385826;
            case LengthUnits.Hands:
                return value * 1.016e-1;
            case LengthUnits.AstronomicalUnits:
                return value * 1.4959787070e11;
            case LengthUnits.Parsecs:
                return value * 3.08567758128e16;
            case LengthUnits.LightYears:
                return value * 9.46073047258e15;
            case LengthUnits.SolarRadiuses:
                return value * 6.95510000E+08;
            case LengthUnits.Nanometers:
                return (value) * 1e-9;
            case LengthUnits.Micrometers:
                return (value) * 0.000001;
            case LengthUnits.Centimeters:
                return (value) * 0.01;
            case LengthUnits.Decimeters:
                return (value) * 0.1;
            case LengthUnits.Hectometers:
                return (value) * 100;
            case LengthUnits.Kilometers:
                return (value) * 1000;
            case LengthUnits.Kiloparsecs:
                return (value * 3.08567758128e16) * 1000;
            case LengthUnits.Megaparsecs:
                return (value * 3.08567758128e16) * 1000000;
            case LengthUnits.KilolightYears:
                return (value * 9.46073047258e15) * 1000;
            case LengthUnits.MegalightYears:
                return (value * 9.46073047258e15) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Length to string.
     * Note! the default format for Length is Meters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Length.
     * @returns The string format of the Length.
     */
    toString(toUnit = LengthUnits.Meters) {
        switch (toUnit) {
            case LengthUnits.Meters:
                return this.Meters + ` m`;
            case LengthUnits.Miles:
                return this.Miles + ` mi`;
            case LengthUnits.Yards:
                return this.Yards + ` yd`;
            case LengthUnits.Feet:
                return this.Feet + ` ft`;
            case LengthUnits.UsSurveyFeet:
                return this.UsSurveyFeet + ` ftUS`;
            case LengthUnits.Inches:
                return this.Inches + ` in`;
            case LengthUnits.Mils:
                return this.Mils + ` mil`;
            case LengthUnits.NauticalMiles:
                return this.NauticalMiles + ` NM`;
            case LengthUnits.Fathoms:
                return this.Fathoms + ` fathom`;
            case LengthUnits.Shackles:
                return this.Shackles + ` shackle`;
            case LengthUnits.Microinches:
                return this.Microinches + ` µin`;
            case LengthUnits.PrinterPoints:
                return this.PrinterPoints + ` pt`;
            case LengthUnits.DtpPoints:
                return this.DtpPoints + ` pt`;
            case LengthUnits.PrinterPicas:
                return this.PrinterPicas + ` pica`;
            case LengthUnits.DtpPicas:
                return this.DtpPicas + ` pica`;
            case LengthUnits.Twips:
                return this.Twips + ` twip`;
            case LengthUnits.Hands:
                return this.Hands + ` h`;
            case LengthUnits.AstronomicalUnits:
                return this.AstronomicalUnits + ` au`;
            case LengthUnits.Parsecs:
                return this.Parsecs + ` pc`;
            case LengthUnits.LightYears:
                return this.LightYears + ` ly`;
            case LengthUnits.SolarRadiuses:
                return this.SolarRadiuses + ` R⊙`;
            case LengthUnits.Nanometers:
                return this.Nanometers + ` `;
            case LengthUnits.Micrometers:
                return this.Micrometers + ` `;
            case LengthUnits.Centimeters:
                return this.Centimeters + ` `;
            case LengthUnits.Decimeters:
                return this.Decimeters + ` `;
            case LengthUnits.Hectometers:
                return this.Hectometers + ` `;
            case LengthUnits.Kilometers:
                return this.Kilometers + ` `;
            case LengthUnits.Kiloparsecs:
                return this.Kiloparsecs + ` `;
            case LengthUnits.Megaparsecs:
                return this.Megaparsecs + ` `;
            case LengthUnits.KilolightYears:
                return this.KilolightYears + ` `;
            case LengthUnits.MegalightYears:
                return this.MegalightYears + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Length are equals to the current Length.
     * @param length The other Length.
     * @returns True if the given Length are equal to the current Length.
     */
    equals(length) {
        return this.value === length.BaseValue;
    }
    /**
     * Compare the given Length against the current Length.
     * @param length The other Length.
     * @returns 0 if they are equal, -1 if the current Length is less then other, 1 if the current Length is greater then other.
     */
    compareTo(length) {
        if (this.value > length.BaseValue)
            return 1;
        if (this.value < length.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    add(length) {
        return new Length(this.value + length.BaseValue);
    }
    /**
     * Subtract the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    subtract(length) {
        return new Length(this.value - length.BaseValue);
    }
    /**
     * Multiply the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    multiply(length) {
        return new Length(this.value * length.BaseValue);
    }
    /**
     * Divide the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    divide(length) {
        return new Length(this.value / length.BaseValue);
    }
    /**
     * Modulo the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    modulo(length) {
        return new Length(this.value % length.BaseValue);
    }
    /**
     * Pow the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    pow(length) {
        return new Length(this.value ** length.BaseValue);
    }
}
exports.Length = Length;
//# sourceMappingURL=length.g.js.map