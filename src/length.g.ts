/** LengthUnits enumeration */
export enum LengthUnits {
    /** */
    Meters,
    /** */
    Miles,
    /** */
    Yards,
    /** */
    Feet,
    /** */
    UsSurveyFeet,
    /** */
    Inches,
    /** */
    Mils,
    /** */
    NauticalMiles,
    /** */
    Fathoms,
    /** */
    Shackles,
    /** */
    Microinches,
    /** */
    PrinterPoints,
    /** */
    DtpPoints,
    /** */
    PrinterPicas,
    /** */
    DtpPicas,
    /** */
    Twips,
    /** */
    Hands,
    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    AstronomicalUnits,
    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    Parsecs,
    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    LightYears,
    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    SolarRadiuses,
    /** */
    Nanometers,
    /** */
    Micrometers,
    /** */
    Centimeters,
    /** */
    Decimeters,
    /** */
    Hectometers,
    /** */
    Kilometers,
    /** */
    Kiloparsecs,
    /** */
    Megaparsecs,
    /** */
    KilolightYears,
    /** */
    MegalightYears
}

/** Many different units of length have been used around the world. The main units in modern use are U.S. customary units in the United States and the Metric system elsewhere. British Imperial units are still used for some purposes in the United Kingdom and some other countries. The metric system is sub-divided into SI and non-SI units. */
export class Length {
    private value: number;
    private metersLazy: number | null = null;
    private milesLazy: number | null = null;
    private yardsLazy: number | null = null;
    private feetLazy: number | null = null;
    private ussurveyfeetLazy: number | null = null;
    private inchesLazy: number | null = null;
    private milsLazy: number | null = null;
    private nauticalmilesLazy: number | null = null;
    private fathomsLazy: number | null = null;
    private shacklesLazy: number | null = null;
    private microinchesLazy: number | null = null;
    private printerpointsLazy: number | null = null;
    private dtppointsLazy: number | null = null;
    private printerpicasLazy: number | null = null;
    private dtppicasLazy: number | null = null;
    private twipsLazy: number | null = null;
    private handsLazy: number | null = null;
    private astronomicalunitsLazy: number | null = null;
    private parsecsLazy: number | null = null;
    private lightyearsLazy: number | null = null;
    private solarradiusesLazy: number | null = null;
    private nanometersLazy: number | null = null;
    private micrometersLazy: number | null = null;
    private centimetersLazy: number | null = null;
    private decimetersLazy: number | null = null;
    private hectometersLazy: number | null = null;
    private kilometersLazy: number | null = null;
    private kiloparsecsLazy: number | null = null;
    private megaparsecsLazy: number | null = null;
    private kilolightyearsLazy: number | null = null;
    private megalightyearsLazy: number | null = null;

    /**
     * Create a new Length.
     * @param value The value.
     * @param fromUnit The ‘Length’ unit to create from.
     */
    public constructor(value: number, fromUnit: LengthUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Length is Meter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Meters(): number {
        if(this.metersLazy !== null){
            return this.metersLazy;
        }
        return this.metersLazy = this.convertFromBase(LengthUnits.Meters);
    }

    /** */
    public get Miles(): number {
        if(this.milesLazy !== null){
            return this.milesLazy;
        }
        return this.milesLazy = this.convertFromBase(LengthUnits.Miles);
    }

    /** */
    public get Yards(): number {
        if(this.yardsLazy !== null){
            return this.yardsLazy;
        }
        return this.yardsLazy = this.convertFromBase(LengthUnits.Yards);
    }

    /** */
    public get Feet(): number {
        if(this.feetLazy !== null){
            return this.feetLazy;
        }
        return this.feetLazy = this.convertFromBase(LengthUnits.Feet);
    }

    /** */
    public get UsSurveyFeet(): number {
        if(this.ussurveyfeetLazy !== null){
            return this.ussurveyfeetLazy;
        }
        return this.ussurveyfeetLazy = this.convertFromBase(LengthUnits.UsSurveyFeet);
    }

    /** */
    public get Inches(): number {
        if(this.inchesLazy !== null){
            return this.inchesLazy;
        }
        return this.inchesLazy = this.convertFromBase(LengthUnits.Inches);
    }

    /** */
    public get Mils(): number {
        if(this.milsLazy !== null){
            return this.milsLazy;
        }
        return this.milsLazy = this.convertFromBase(LengthUnits.Mils);
    }

    /** */
    public get NauticalMiles(): number {
        if(this.nauticalmilesLazy !== null){
            return this.nauticalmilesLazy;
        }
        return this.nauticalmilesLazy = this.convertFromBase(LengthUnits.NauticalMiles);
    }

    /** */
    public get Fathoms(): number {
        if(this.fathomsLazy !== null){
            return this.fathomsLazy;
        }
        return this.fathomsLazy = this.convertFromBase(LengthUnits.Fathoms);
    }

    /** */
    public get Shackles(): number {
        if(this.shacklesLazy !== null){
            return this.shacklesLazy;
        }
        return this.shacklesLazy = this.convertFromBase(LengthUnits.Shackles);
    }

    /** */
    public get Microinches(): number {
        if(this.microinchesLazy !== null){
            return this.microinchesLazy;
        }
        return this.microinchesLazy = this.convertFromBase(LengthUnits.Microinches);
    }

    /** */
    public get PrinterPoints(): number {
        if(this.printerpointsLazy !== null){
            return this.printerpointsLazy;
        }
        return this.printerpointsLazy = this.convertFromBase(LengthUnits.PrinterPoints);
    }

    /** */
    public get DtpPoints(): number {
        if(this.dtppointsLazy !== null){
            return this.dtppointsLazy;
        }
        return this.dtppointsLazy = this.convertFromBase(LengthUnits.DtpPoints);
    }

    /** */
    public get PrinterPicas(): number {
        if(this.printerpicasLazy !== null){
            return this.printerpicasLazy;
        }
        return this.printerpicasLazy = this.convertFromBase(LengthUnits.PrinterPicas);
    }

    /** */
    public get DtpPicas(): number {
        if(this.dtppicasLazy !== null){
            return this.dtppicasLazy;
        }
        return this.dtppicasLazy = this.convertFromBase(LengthUnits.DtpPicas);
    }

    /** */
    public get Twips(): number {
        if(this.twipsLazy !== null){
            return this.twipsLazy;
        }
        return this.twipsLazy = this.convertFromBase(LengthUnits.Twips);
    }

    /** */
    public get Hands(): number {
        if(this.handsLazy !== null){
            return this.handsLazy;
        }
        return this.handsLazy = this.convertFromBase(LengthUnits.Hands);
    }

    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    public get AstronomicalUnits(): number {
        if(this.astronomicalunitsLazy !== null){
            return this.astronomicalunitsLazy;
        }
        return this.astronomicalunitsLazy = this.convertFromBase(LengthUnits.AstronomicalUnits);
    }

    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    public get Parsecs(): number {
        if(this.parsecsLazy !== null){
            return this.parsecsLazy;
        }
        return this.parsecsLazy = this.convertFromBase(LengthUnits.Parsecs);
    }

    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    public get LightYears(): number {
        if(this.lightyearsLazy !== null){
            return this.lightyearsLazy;
        }
        return this.lightyearsLazy = this.convertFromBase(LengthUnits.LightYears);
    }

    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    public get SolarRadiuses(): number {
        if(this.solarradiusesLazy !== null){
            return this.solarradiusesLazy;
        }
        return this.solarradiusesLazy = this.convertFromBase(LengthUnits.SolarRadiuses);
    }

    /** */
    public get Nanometers(): number {
        if(this.nanometersLazy !== null){
            return this.nanometersLazy;
        }
        return this.nanometersLazy = this.convertFromBase(LengthUnits.Nanometers);
    }

    /** */
    public get Micrometers(): number {
        if(this.micrometersLazy !== null){
            return this.micrometersLazy;
        }
        return this.micrometersLazy = this.convertFromBase(LengthUnits.Micrometers);
    }

    /** */
    public get Centimeters(): number {
        if(this.centimetersLazy !== null){
            return this.centimetersLazy;
        }
        return this.centimetersLazy = this.convertFromBase(LengthUnits.Centimeters);
    }

    /** */
    public get Decimeters(): number {
        if(this.decimetersLazy !== null){
            return this.decimetersLazy;
        }
        return this.decimetersLazy = this.convertFromBase(LengthUnits.Decimeters);
    }

    /** */
    public get Hectometers(): number {
        if(this.hectometersLazy !== null){
            return this.hectometersLazy;
        }
        return this.hectometersLazy = this.convertFromBase(LengthUnits.Hectometers);
    }

    /** */
    public get Kilometers(): number {
        if(this.kilometersLazy !== null){
            return this.kilometersLazy;
        }
        return this.kilometersLazy = this.convertFromBase(LengthUnits.Kilometers);
    }

    /** */
    public get Kiloparsecs(): number {
        if(this.kiloparsecsLazy !== null){
            return this.kiloparsecsLazy;
        }
        return this.kiloparsecsLazy = this.convertFromBase(LengthUnits.Kiloparsecs);
    }

    /** */
    public get Megaparsecs(): number {
        if(this.megaparsecsLazy !== null){
            return this.megaparsecsLazy;
        }
        return this.megaparsecsLazy = this.convertFromBase(LengthUnits.Megaparsecs);
    }

    /** */
    public get KilolightYears(): number {
        if(this.kilolightyearsLazy !== null){
            return this.kilolightyearsLazy;
        }
        return this.kilolightyearsLazy = this.convertFromBase(LengthUnits.KilolightYears);
    }

    /** */
    public get MegalightYears(): number {
        if(this.megalightyearsLazy !== null){
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
    public static FromMeters(value: number): Length {
        return new Length(value, LengthUnits.Meters);
    }

    /**
     * Create a new Length instance from a Miles
     *
     * @param value The unit as Miles to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMiles(value: number): Length {
        return new Length(value, LengthUnits.Miles);
    }

    /**
     * Create a new Length instance from a Yards
     *
     * @param value The unit as Yards to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromYards(value: number): Length {
        return new Length(value, LengthUnits.Yards);
    }

    /**
     * Create a new Length instance from a Feet
     *
     * @param value The unit as Feet to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromFeet(value: number): Length {
        return new Length(value, LengthUnits.Feet);
    }

    /**
     * Create a new Length instance from a UsSurveyFeet
     *
     * @param value The unit as UsSurveyFeet to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromUsSurveyFeet(value: number): Length {
        return new Length(value, LengthUnits.UsSurveyFeet);
    }

    /**
     * Create a new Length instance from a Inches
     *
     * @param value The unit as Inches to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromInches(value: number): Length {
        return new Length(value, LengthUnits.Inches);
    }

    /**
     * Create a new Length instance from a Mils
     *
     * @param value The unit as Mils to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMils(value: number): Length {
        return new Length(value, LengthUnits.Mils);
    }

    /**
     * Create a new Length instance from a NauticalMiles
     *
     * @param value The unit as NauticalMiles to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromNauticalMiles(value: number): Length {
        return new Length(value, LengthUnits.NauticalMiles);
    }

    /**
     * Create a new Length instance from a Fathoms
     *
     * @param value The unit as Fathoms to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromFathoms(value: number): Length {
        return new Length(value, LengthUnits.Fathoms);
    }

    /**
     * Create a new Length instance from a Shackles
     *
     * @param value The unit as Shackles to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromShackles(value: number): Length {
        return new Length(value, LengthUnits.Shackles);
    }

    /**
     * Create a new Length instance from a Microinches
     *
     * @param value The unit as Microinches to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMicroinches(value: number): Length {
        return new Length(value, LengthUnits.Microinches);
    }

    /**
     * Create a new Length instance from a PrinterPoints
     *
     * @param value The unit as PrinterPoints to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromPrinterPoints(value: number): Length {
        return new Length(value, LengthUnits.PrinterPoints);
    }

    /**
     * Create a new Length instance from a DtpPoints
     *
     * @param value The unit as DtpPoints to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromDtpPoints(value: number): Length {
        return new Length(value, LengthUnits.DtpPoints);
    }

    /**
     * Create a new Length instance from a PrinterPicas
     *
     * @param value The unit as PrinterPicas to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromPrinterPicas(value: number): Length {
        return new Length(value, LengthUnits.PrinterPicas);
    }

    /**
     * Create a new Length instance from a DtpPicas
     *
     * @param value The unit as DtpPicas to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromDtpPicas(value: number): Length {
        return new Length(value, LengthUnits.DtpPicas);
    }

    /**
     * Create a new Length instance from a Twips
     *
     * @param value The unit as Twips to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromTwips(value: number): Length {
        return new Length(value, LengthUnits.Twips);
    }

    /**
     * Create a new Length instance from a Hands
     *
     * @param value The unit as Hands to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromHands(value: number): Length {
        return new Length(value, LengthUnits.Hands);
    }

    /**
     * Create a new Length instance from a AstronomicalUnits
     * One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth.
     * @param value The unit as AstronomicalUnits to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromAstronomicalUnits(value: number): Length {
        return new Length(value, LengthUnits.AstronomicalUnits);
    }

    /**
     * Create a new Length instance from a Parsecs
     * A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond.
     * @param value The unit as Parsecs to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromParsecs(value: number): Length {
        return new Length(value, LengthUnits.Parsecs);
    }

    /**
     * Create a new Length instance from a LightYears
     * A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days.
     * @param value The unit as LightYears to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromLightYears(value: number): Length {
        return new Length(value, LengthUnits.LightYears);
    }

    /**
     * Create a new Length instance from a SolarRadiuses
     * Solar radius is a ratio unit to the radius of the solar system star, the sun.
     * @param value The unit as SolarRadiuses to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromSolarRadiuses(value: number): Length {
        return new Length(value, LengthUnits.SolarRadiuses);
    }

    /**
     * Create a new Length instance from a Nanometers
     *
     * @param value The unit as Nanometers to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromNanometers(value: number): Length {
        return new Length(value, LengthUnits.Nanometers);
    }

    /**
     * Create a new Length instance from a Micrometers
     *
     * @param value The unit as Micrometers to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMicrometers(value: number): Length {
        return new Length(value, LengthUnits.Micrometers);
    }

    /**
     * Create a new Length instance from a Centimeters
     *
     * @param value The unit as Centimeters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromCentimeters(value: number): Length {
        return new Length(value, LengthUnits.Centimeters);
    }

    /**
     * Create a new Length instance from a Decimeters
     *
     * @param value The unit as Decimeters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromDecimeters(value: number): Length {
        return new Length(value, LengthUnits.Decimeters);
    }

    /**
     * Create a new Length instance from a Hectometers
     *
     * @param value The unit as Hectometers to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromHectometers(value: number): Length {
        return new Length(value, LengthUnits.Hectometers);
    }

    /**
     * Create a new Length instance from a Kilometers
     *
     * @param value The unit as Kilometers to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromKilometers(value: number): Length {
        return new Length(value, LengthUnits.Kilometers);
    }

    /**
     * Create a new Length instance from a Kiloparsecs
     *
     * @param value The unit as Kiloparsecs to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromKiloparsecs(value: number): Length {
        return new Length(value, LengthUnits.Kiloparsecs);
    }

    /**
     * Create a new Length instance from a Megaparsecs
     *
     * @param value The unit as Megaparsecs to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMegaparsecs(value: number): Length {
        return new Length(value, LengthUnits.Megaparsecs);
    }

    /**
     * Create a new Length instance from a KilolightYears
     *
     * @param value The unit as KilolightYears to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromKilolightYears(value: number): Length {
        return new Length(value, LengthUnits.KilolightYears);
    }

    /**
     * Create a new Length instance from a MegalightYears
     *
     * @param value The unit as MegalightYears to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMegalightYears(value: number): Length {
        return new Length(value, LengthUnits.MegalightYears);
    }

    private convertFromBase(toUnit: LengthUnits): number {
        switch (toUnit) {
                
            case LengthUnits.Meters:
                return this.value;
            case LengthUnits.Miles:
                return this.value/1609.34;
            case LengthUnits.Yards:
                return this.value/0.9144;
            case LengthUnits.Feet:
                return this.value/0.3048;
            case LengthUnits.UsSurveyFeet:
                return this.value*3937/1200;
            case LengthUnits.Inches:
                return this.value/2.54e-2;
            case LengthUnits.Mils:
                return this.value/2.54e-5;
            case LengthUnits.NauticalMiles:
                return this.value/1852;
            case LengthUnits.Fathoms:
                return this.value/1.8288;
            case LengthUnits.Shackles:
                return this.value/27.432;
            case LengthUnits.Microinches:
                return this.value/2.54e-8;
            case LengthUnits.PrinterPoints:
                return (this.value/2.54e-2)*72.27;
            case LengthUnits.DtpPoints:
                return (this.value/2.54e-2)*72;
            case LengthUnits.PrinterPicas:
                return this.value*237.106301584;
            case LengthUnits.DtpPicas:
                return this.value*236.220472441;
            case LengthUnits.Twips:
                return this.value*56692.913385826;
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

    private convertToBase(value: number, fromUnit: LengthUnits): number {
        switch (fromUnit) {
                
            case LengthUnits.Meters:
                return value;
            case LengthUnits.Miles:
                return value*1609.34;
            case LengthUnits.Yards:
                return value*0.9144;
            case LengthUnits.Feet:
                return value*0.3048;
            case LengthUnits.UsSurveyFeet:
                return value*1200/3937;
            case LengthUnits.Inches:
                return value*2.54e-2;
            case LengthUnits.Mils:
                return value*2.54e-5;
            case LengthUnits.NauticalMiles:
                return value*1852;
            case LengthUnits.Fathoms:
                return value*1.8288;
            case LengthUnits.Shackles:
                return value*27.432;
            case LengthUnits.Microinches:
                return value*2.54e-8;
            case LengthUnits.PrinterPoints:
                return (value/72.27)*2.54e-2;
            case LengthUnits.DtpPoints:
                return (value/72)*2.54e-2;
            case LengthUnits.PrinterPicas:
                return value/237.106301584;
            case LengthUnits.DtpPicas:
                return value/236.220472441;
            case LengthUnits.Twips:
                return value/56692.913385826;
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
    public toString(toUnit: LengthUnits = LengthUnits.Meters): string {

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
                return this.Nanometers + ` m`;
            case LengthUnits.Micrometers:
                return this.Micrometers + ` m`;
            case LengthUnits.Centimeters:
                return this.Centimeters + ` m`;
            case LengthUnits.Decimeters:
                return this.Decimeters + ` m`;
            case LengthUnits.Hectometers:
                return this.Hectometers + ` m`;
            case LengthUnits.Kilometers:
                return this.Kilometers + ` m`;
            case LengthUnits.Kiloparsecs:
                return this.Kiloparsecs + ` pc`;
            case LengthUnits.Megaparsecs:
                return this.Megaparsecs + ` pc`;
            case LengthUnits.KilolightYears:
                return this.KilolightYears + ` ly`;
            case LengthUnits.MegalightYears:
                return this.MegalightYears + ` ly`;
        default:
            break;
        }
        return this.value.toString();
    }
}
