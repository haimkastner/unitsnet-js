import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Length */
export interface LengthDto {
    /** The value of the Length */
    value: number;
    /**  The specific unit that the Length value is representing */
    unit: LengthUnits;
}

/** LengthUnits enumeration */
export enum LengthUnits {
    /** */
    Meters = "Meter",
    /** The statute mile was standardised between the British Commonwealth and the United States by an international agreement in 1959, when it was formally redefined with respect to SI units as exactly 1,609.344 metres. */
    Miles = "Mile",
    /** The yard (symbol: yd) is an English unit of length in both the British imperial and US customary systems of measurement equalling 3 feet (or 36 inches). Since 1959 the yard has been by international agreement standardized as exactly 0.9144 meter. A distance of 1,760 yards is equal to 1 mile. */
    Yards = "Yard",
    /** */
    Feet = "Foot",
    /** In the United States, the foot was defined as 12 inches, with the inch being defined by the Mendenhall Order of 1893 as 39.37 inches = 1 m. This makes a U.S. survey foot exactly 1200/3937 meters. */
    UsSurveyFeet = "UsSurveyFoot",
    /** */
    Inches = "Inch",
    /** */
    Mils = "Mil",
    /** */
    NauticalMiles = "NauticalMile",
    /** */
    Fathoms = "Fathom",
    /** */
    Shackles = "Shackle",
    /** */
    Microinches = "Microinch",
    /** */
    PrinterPoints = "PrinterPoint",
    /** */
    DtpPoints = "DtpPoint",
    /** */
    PrinterPicas = "PrinterPica",
    /** */
    DtpPicas = "DtpPica",
    /** */
    Twips = "Twip",
    /** */
    Hands = "Hand",
    /** One Astronomical Unit is the distance from the solar system Star, the sun, to planet Earth. */
    AstronomicalUnits = "AstronomicalUnit",
    /** A parsec is defined as the distance at which one astronomical unit (AU) subtends an angle of one arcsecond. */
    Parsecs = "Parsec",
    /** A Light Year (ly) is the distance that light travel during an Earth year, ie 365 days. */
    LightYears = "LightYear",
    /** Solar radius is a ratio unit to the radius of the solar system star, the sun. */
    SolarRadiuses = "SolarRadius",
    /** */
    Chains = "Chain",
    /** Angstrom is a metric unit of length equal to 1e-10 meter */
    Angstroms = "Angstrom",
    /** In radar-related subjects and in JTIDS, a data mile is a unit of distance equal to 6000 feet (1.8288 kilometres or 0.987 nautical miles). */
    DataMiles = "DataMile",
    /** */
    Femtometers = "Femtometer",
    /** */
    Picometers = "Picometer",
    /** */
    Nanometers = "Nanometer",
    /** */
    Micrometers = "Micrometer",
    /** */
    Millimeters = "Millimeter",
    /** */
    Centimeters = "Centimeter",
    /** */
    Decimeters = "Decimeter",
    /** */
    Decameters = "Decameter",
    /** */
    Hectometers = "Hectometer",
    /** */
    Kilometers = "Kilometer",
    /** */
    Megameters = "Megameter",
    /** */
    Gigameters = "Gigameter",
    /** */
    Kiloyards = "Kiloyard",
    /** */
    Kilofeet = "Kilofoot",
    /** */
    Kiloparsecs = "Kiloparsec",
    /** */
    Megaparsecs = "Megaparsec",
    /** */
    KilolightYears = "KilolightYear",
    /** */
    MegalightYears = "MegalightYear"
}

/** Many different units of length have been used around the world. The main units in modern use are U.S. customary units in the United States and the Metric system elsewhere. British Imperial units are still used for some purposes in the United Kingdom and some other countries. The metric system is sub-divided into SI and non-SI units. */
export class Length extends BaseUnit {
    protected value: number;
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
    private chainsLazy: number | null = null;
    private angstromsLazy: number | null = null;
    private datamilesLazy: number | null = null;
    private femtometersLazy: number | null = null;
    private picometersLazy: number | null = null;
    private nanometersLazy: number | null = null;
    private micrometersLazy: number | null = null;
    private millimetersLazy: number | null = null;
    private centimetersLazy: number | null = null;
    private decimetersLazy: number | null = null;
    private decametersLazy: number | null = null;
    private hectometersLazy: number | null = null;
    private kilometersLazy: number | null = null;
    private megametersLazy: number | null = null;
    private gigametersLazy: number | null = null;
    private kiloyardsLazy: number | null = null;
    private kilofeetLazy: number | null = null;
    private kiloparsecsLazy: number | null = null;
    private megaparsecsLazy: number | null = null;
    private kilolightyearsLazy: number | null = null;
    private megalightyearsLazy: number | null = null;

    /**
     * Create a new Length.
     * @param value The value.
     * @param fromUnit The ‘Length’ unit to create from.
     * The default unit is Meters
     */
    public constructor(value: number, fromUnit: LengthUnits = LengthUnits.Meters) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Length is Meters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): LengthUnits.Meters {
        return LengthUnits.Meters
    }

    /** */
    public get Meters(): number {
        if(this.metersLazy !== null){
            return this.metersLazy;
        }
        return this.metersLazy = this.convertFromBase(LengthUnits.Meters);
    }

    /** The statute mile was standardised between the British Commonwealth and the United States by an international agreement in 1959, when it was formally redefined with respect to SI units as exactly 1,609.344 metres. */
    public get Miles(): number {
        if(this.milesLazy !== null){
            return this.milesLazy;
        }
        return this.milesLazy = this.convertFromBase(LengthUnits.Miles);
    }

    /** The yard (symbol: yd) is an English unit of length in both the British imperial and US customary systems of measurement equalling 3 feet (or 36 inches). Since 1959 the yard has been by international agreement standardized as exactly 0.9144 meter. A distance of 1,760 yards is equal to 1 mile. */
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

    /** In the United States, the foot was defined as 12 inches, with the inch being defined by the Mendenhall Order of 1893 as 39.37 inches = 1 m. This makes a U.S. survey foot exactly 1200/3937 meters. */
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
    public get Chains(): number {
        if(this.chainsLazy !== null){
            return this.chainsLazy;
        }
        return this.chainsLazy = this.convertFromBase(LengthUnits.Chains);
    }

    /** Angstrom is a metric unit of length equal to 1e-10 meter */
    public get Angstroms(): number {
        if(this.angstromsLazy !== null){
            return this.angstromsLazy;
        }
        return this.angstromsLazy = this.convertFromBase(LengthUnits.Angstroms);
    }

    /** In radar-related subjects and in JTIDS, a data mile is a unit of distance equal to 6000 feet (1.8288 kilometres or 0.987 nautical miles). */
    public get DataMiles(): number {
        if(this.datamilesLazy !== null){
            return this.datamilesLazy;
        }
        return this.datamilesLazy = this.convertFromBase(LengthUnits.DataMiles);
    }

    /** */
    public get Femtometers(): number {
        if(this.femtometersLazy !== null){
            return this.femtometersLazy;
        }
        return this.femtometersLazy = this.convertFromBase(LengthUnits.Femtometers);
    }

    /** */
    public get Picometers(): number {
        if(this.picometersLazy !== null){
            return this.picometersLazy;
        }
        return this.picometersLazy = this.convertFromBase(LengthUnits.Picometers);
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
    public get Millimeters(): number {
        if(this.millimetersLazy !== null){
            return this.millimetersLazy;
        }
        return this.millimetersLazy = this.convertFromBase(LengthUnits.Millimeters);
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
    public get Decameters(): number {
        if(this.decametersLazy !== null){
            return this.decametersLazy;
        }
        return this.decametersLazy = this.convertFromBase(LengthUnits.Decameters);
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
    public get Megameters(): number {
        if(this.megametersLazy !== null){
            return this.megametersLazy;
        }
        return this.megametersLazy = this.convertFromBase(LengthUnits.Megameters);
    }

    /** */
    public get Gigameters(): number {
        if(this.gigametersLazy !== null){
            return this.gigametersLazy;
        }
        return this.gigametersLazy = this.convertFromBase(LengthUnits.Gigameters);
    }

    /** */
    public get Kiloyards(): number {
        if(this.kiloyardsLazy !== null){
            return this.kiloyardsLazy;
        }
        return this.kiloyardsLazy = this.convertFromBase(LengthUnits.Kiloyards);
    }

    /** */
    public get Kilofeet(): number {
        if(this.kilofeetLazy !== null){
            return this.kilofeetLazy;
        }
        return this.kilofeetLazy = this.convertFromBase(LengthUnits.Kilofeet);
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
     * The statute mile was standardised between the British Commonwealth and the United States by an international agreement in 1959, when it was formally redefined with respect to SI units as exactly 1,609.344 metres.
     * @param value The unit as Miles to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMiles(value: number): Length {
        return new Length(value, LengthUnits.Miles);
    }

    /**
     * Create a new Length instance from a Yards
     * The yard (symbol: yd) is an English unit of length in both the British imperial and US customary systems of measurement equalling 3 feet (or 36 inches). Since 1959 the yard has been by international agreement standardized as exactly 0.9144 meter. A distance of 1,760 yards is equal to 1 mile.
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
     * In the United States, the foot was defined as 12 inches, with the inch being defined by the Mendenhall Order of 1893 as 39.37 inches = 1 m. This makes a U.S. survey foot exactly 1200/3937 meters.
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
     * Create a new Length instance from a Chains
     *
     * @param value The unit as Chains to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromChains(value: number): Length {
        return new Length(value, LengthUnits.Chains);
    }

    /**
     * Create a new Length instance from a Angstroms
     * Angstrom is a metric unit of length equal to 1e-10 meter
     * @param value The unit as Angstroms to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromAngstroms(value: number): Length {
        return new Length(value, LengthUnits.Angstroms);
    }

    /**
     * Create a new Length instance from a DataMiles
     * In radar-related subjects and in JTIDS, a data mile is a unit of distance equal to 6000 feet (1.8288 kilometres or 0.987 nautical miles).
     * @param value The unit as DataMiles to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromDataMiles(value: number): Length {
        return new Length(value, LengthUnits.DataMiles);
    }

    /**
     * Create a new Length instance from a Femtometers
     *
     * @param value The unit as Femtometers to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromFemtometers(value: number): Length {
        return new Length(value, LengthUnits.Femtometers);
    }

    /**
     * Create a new Length instance from a Picometers
     *
     * @param value The unit as Picometers to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromPicometers(value: number): Length {
        return new Length(value, LengthUnits.Picometers);
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
     * Create a new Length instance from a Millimeters
     *
     * @param value The unit as Millimeters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMillimeters(value: number): Length {
        return new Length(value, LengthUnits.Millimeters);
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
     * Create a new Length instance from a Decameters
     *
     * @param value The unit as Decameters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromDecameters(value: number): Length {
        return new Length(value, LengthUnits.Decameters);
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
     * Create a new Length instance from a Megameters
     *
     * @param value The unit as Megameters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromMegameters(value: number): Length {
        return new Length(value, LengthUnits.Megameters);
    }

    /**
     * Create a new Length instance from a Gigameters
     *
     * @param value The unit as Gigameters to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromGigameters(value: number): Length {
        return new Length(value, LengthUnits.Gigameters);
    }

    /**
     * Create a new Length instance from a Kiloyards
     *
     * @param value The unit as Kiloyards to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromKiloyards(value: number): Length {
        return new Length(value, LengthUnits.Kiloyards);
    }

    /**
     * Create a new Length instance from a Kilofeet
     *
     * @param value The unit as Kilofeet to create a new Length from.
     * @returns The new Length instance.
     */
    public static FromKilofeet(value: number): Length {
        return new Length(value, LengthUnits.Kilofeet);
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

    /**
     * Gets the base unit enumeration associated with Length
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof LengthUnits {
        return LengthUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): LengthUnits.Meters {
        return LengthUnits.Meters;
    }

    /**
     * Create API DTO represent a Length unit.
     * @param holdInUnit The specific Length unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: LengthUnits = LengthUnits.Meters): LengthDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Length unit from an API DTO representation.
     * @param dtoLength The Length API DTO representation
     */
    public static FromDto(dtoLength: LengthDto): Length {
        return new Length(dtoLength.value, dtoLength.unit);
    }

    /**
     * Convert Length to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: LengthUnits): number {
        switch (toUnit) {
            case LengthUnits.Meters: return this.Meters;
            case LengthUnits.Miles: return this.Miles;
            case LengthUnits.Yards: return this.Yards;
            case LengthUnits.Feet: return this.Feet;
            case LengthUnits.UsSurveyFeet: return this.UsSurveyFeet;
            case LengthUnits.Inches: return this.Inches;
            case LengthUnits.Mils: return this.Mils;
            case LengthUnits.NauticalMiles: return this.NauticalMiles;
            case LengthUnits.Fathoms: return this.Fathoms;
            case LengthUnits.Shackles: return this.Shackles;
            case LengthUnits.Microinches: return this.Microinches;
            case LengthUnits.PrinterPoints: return this.PrinterPoints;
            case LengthUnits.DtpPoints: return this.DtpPoints;
            case LengthUnits.PrinterPicas: return this.PrinterPicas;
            case LengthUnits.DtpPicas: return this.DtpPicas;
            case LengthUnits.Twips: return this.Twips;
            case LengthUnits.Hands: return this.Hands;
            case LengthUnits.AstronomicalUnits: return this.AstronomicalUnits;
            case LengthUnits.Parsecs: return this.Parsecs;
            case LengthUnits.LightYears: return this.LightYears;
            case LengthUnits.SolarRadiuses: return this.SolarRadiuses;
            case LengthUnits.Chains: return this.Chains;
            case LengthUnits.Angstroms: return this.Angstroms;
            case LengthUnits.DataMiles: return this.DataMiles;
            case LengthUnits.Femtometers: return this.Femtometers;
            case LengthUnits.Picometers: return this.Picometers;
            case LengthUnits.Nanometers: return this.Nanometers;
            case LengthUnits.Micrometers: return this.Micrometers;
            case LengthUnits.Millimeters: return this.Millimeters;
            case LengthUnits.Centimeters: return this.Centimeters;
            case LengthUnits.Decimeters: return this.Decimeters;
            case LengthUnits.Decameters: return this.Decameters;
            case LengthUnits.Hectometers: return this.Hectometers;
            case LengthUnits.Kilometers: return this.Kilometers;
            case LengthUnits.Megameters: return this.Megameters;
            case LengthUnits.Gigameters: return this.Gigameters;
            case LengthUnits.Kiloyards: return this.Kiloyards;
            case LengthUnits.Kilofeet: return this.Kilofeet;
            case LengthUnits.Kiloparsecs: return this.Kiloparsecs;
            case LengthUnits.Megaparsecs: return this.Megaparsecs;
            case LengthUnits.KilolightYears: return this.KilolightYears;
            case LengthUnits.MegalightYears: return this.MegalightYears;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: LengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case LengthUnits.Meters: return this.value;
                case LengthUnits.Miles: return super.internalDivide(this.value, 1609.344);
                case LengthUnits.Yards: return super.internalDivide(this.value, 0.9144);
                case LengthUnits.Feet: return super.internalDivide(this.value, 0.3048);
                case LengthUnits.UsSurveyFeet: {
                    const v4 = super.internalDivide(3937, 1200);
                    return super.internalMultiply(this.value, v4);
                }
                case LengthUnits.Inches: return super.internalDivide(this.value, 2.54e-2);
                case LengthUnits.Mils: return super.internalDivide(this.value, 2.54e-5);
                case LengthUnits.NauticalMiles: return super.internalDivide(this.value, 1852);
                case LengthUnits.Fathoms: return super.internalDivide(this.value, 1.8288);
                case LengthUnits.Shackles: return super.internalDivide(this.value, 27.432);
                case LengthUnits.Microinches: return super.internalDivide(this.value, 2.54e-8);
                case LengthUnits.PrinterPoints: {
                    const v3 = super.internalDivide(this.value, 2.54e-2);
                    return super.internalMultiply(v3, 72.27);
                }
                case LengthUnits.DtpPoints: {
                    const v3 = super.internalDivide(this.value, 2.54e-2);
                    return super.internalMultiply(v3, 72);
                }
                case LengthUnits.PrinterPicas: return super.internalMultiply(this.value, 237.106301584);
                case LengthUnits.DtpPicas: return super.internalMultiply(this.value, 236.220472441);
                case LengthUnits.Twips: return super.internalMultiply(this.value, 56692.913385826);
                case LengthUnits.Hands: return super.internalDivide(this.value, 1.016e-1);
                case LengthUnits.AstronomicalUnits: return super.internalDivide(this.value, 1.4959787070e11);
                case LengthUnits.Parsecs: return super.internalDivide(this.value, 3.08567758128e16);
                case LengthUnits.LightYears: return super.internalDivide(this.value, 9.46073047258e15);
                case LengthUnits.SolarRadiuses: return super.internalDivide(this.value, 6.95510000E+08);
                case LengthUnits.Chains: return super.internalDivide(this.value, 20.1168);
                case LengthUnits.Angstroms: return super.internalDivide(this.value, 1e-10);
                case LengthUnits.DataMiles: return super.internalDivide(this.value, 1828.8);
                case LengthUnits.Femtometers: return super.internalDivide(this.value, 1e-15);
                case LengthUnits.Picometers: return super.internalDivide(this.value, 1e-12);
                case LengthUnits.Nanometers: return super.internalDivide(this.value, 1e-9);
                case LengthUnits.Micrometers: return super.internalDivide(this.value, 0.000001);
                case LengthUnits.Millimeters: return super.internalDivide(this.value, 0.001);
                case LengthUnits.Centimeters: return super.internalDivide(this.value, 0.01);
                case LengthUnits.Decimeters: return super.internalDivide(this.value, 0.1);
                case LengthUnits.Decameters: return super.internalDivide(this.value, 10);
                case LengthUnits.Hectometers: return super.internalDivide(this.value, 100);
                case LengthUnits.Kilometers: return super.internalDivide(this.value, 1000);
                case LengthUnits.Megameters: return super.internalDivide(this.value, 1000000);
                case LengthUnits.Gigameters: return super.internalDivide(this.value, 1000000000);
                case LengthUnits.Kiloyards: {
                    const v3 = super.internalDivide(this.value, 0.9144);
                    return super.internalDivide(v3, 1000);
                }
                case LengthUnits.Kilofeet: {
                    const v3 = super.internalDivide(this.value, 0.3048);
                    return super.internalDivide(v3, 1000);
                }
                case LengthUnits.Kiloparsecs: {
                    const v3 = super.internalDivide(this.value, 3.08567758128e16);
                    return super.internalDivide(v3, 1000);
                }
                case LengthUnits.Megaparsecs: {
                    const v3 = super.internalDivide(this.value, 3.08567758128e16);
                    return super.internalDivide(v3, 1000000);
                }
                case LengthUnits.KilolightYears: {
                    const v3 = super.internalDivide(this.value, 9.46073047258e15);
                    return super.internalDivide(v3, 1000);
                }
                case LengthUnits.MegalightYears: {
                    const v3 = super.internalDivide(this.value, 9.46073047258e15);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case LengthUnits.Meters: return this.value;
            case LengthUnits.Miles: return this.value / 1609.344;
            case LengthUnits.Yards: return this.value / 0.9144;
            case LengthUnits.Feet: return this.value / 0.3048;
            case LengthUnits.UsSurveyFeet: return this.value * 3937 / 1200;
            case LengthUnits.Inches: return this.value / 2.54e-2;
            case LengthUnits.Mils: return this.value / 2.54e-5;
            case LengthUnits.NauticalMiles: return this.value / 1852;
            case LengthUnits.Fathoms: return this.value / 1.8288;
            case LengthUnits.Shackles: return this.value / 27.432;
            case LengthUnits.Microinches: return this.value / 2.54e-8;
            case LengthUnits.PrinterPoints: return (this.value / 2.54e-2) * 72.27;
            case LengthUnits.DtpPoints: return (this.value / 2.54e-2) * 72;
            case LengthUnits.PrinterPicas: return this.value * 237.106301584;
            case LengthUnits.DtpPicas: return this.value * 236.220472441;
            case LengthUnits.Twips: return this.value * 56692.913385826;
            case LengthUnits.Hands: return this.value / 1.016e-1;
            case LengthUnits.AstronomicalUnits: return this.value / 1.4959787070e11;
            case LengthUnits.Parsecs: return this.value / 3.08567758128e16;
            case LengthUnits.LightYears: return this.value / 9.46073047258e15;
            case LengthUnits.SolarRadiuses: return this.value / 6.95510000E+08;
            case LengthUnits.Chains: return this.value / 20.1168;
            case LengthUnits.Angstroms: return this.value / 1e-10;
            case LengthUnits.DataMiles: return this.value / 1828.8;
            case LengthUnits.Femtometers: return (this.value) / 1e-15;
            case LengthUnits.Picometers: return (this.value) / 1e-12;
            case LengthUnits.Nanometers: return (this.value) / 1e-9;
            case LengthUnits.Micrometers: return (this.value) / 0.000001;
            case LengthUnits.Millimeters: return (this.value) / 0.001;
            case LengthUnits.Centimeters: return (this.value) / 0.01;
            case LengthUnits.Decimeters: return (this.value) / 0.1;
            case LengthUnits.Decameters: return (this.value) / 10;
            case LengthUnits.Hectometers: return (this.value) / 100;
            case LengthUnits.Kilometers: return (this.value) / 1000;
            case LengthUnits.Megameters: return (this.value) / 1000000;
            case LengthUnits.Gigameters: return (this.value) / 1000000000;
            case LengthUnits.Kiloyards: return (this.value / 0.9144) / 1000;
            case LengthUnits.Kilofeet: return (this.value / 0.3048) / 1000;
            case LengthUnits.Kiloparsecs: return (this.value / 3.08567758128e16) / 1000;
            case LengthUnits.Megaparsecs: return (this.value / 3.08567758128e16) / 1000000;
            case LengthUnits.KilolightYears: return (this.value / 9.46073047258e15) / 1000;
            case LengthUnits.MegalightYears: return (this.value / 9.46073047258e15) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: LengthUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case LengthUnits.Meters: return value;
                case LengthUnits.Miles: return super.internalMultiply(value, 1609.344);
                case LengthUnits.Yards: return super.internalMultiply(value, 0.9144);
                case LengthUnits.Feet: return super.internalMultiply(value, 0.3048);
                case LengthUnits.UsSurveyFeet: {
                    const v4 = super.internalDivide(1200, 3937);
                    return super.internalMultiply(value, v4);
                }
                case LengthUnits.Inches: return super.internalMultiply(value, 2.54e-2);
                case LengthUnits.Mils: return super.internalMultiply(value, 2.54e-5);
                case LengthUnits.NauticalMiles: return super.internalMultiply(value, 1852);
                case LengthUnits.Fathoms: return super.internalMultiply(value, 1.8288);
                case LengthUnits.Shackles: return super.internalMultiply(value, 27.432);
                case LengthUnits.Microinches: return super.internalMultiply(value, 2.54e-8);
                case LengthUnits.PrinterPoints: {
                    const v3 = super.internalDivide(value, 72.27);
                    return super.internalMultiply(v3, 2.54e-2);
                }
                case LengthUnits.DtpPoints: {
                    const v3 = super.internalDivide(value, 72);
                    return super.internalMultiply(v3, 2.54e-2);
                }
                case LengthUnits.PrinterPicas: return super.internalDivide(value, 237.106301584);
                case LengthUnits.DtpPicas: return super.internalDivide(value, 236.220472441);
                case LengthUnits.Twips: return super.internalDivide(value, 56692.913385826);
                case LengthUnits.Hands: return super.internalMultiply(value, 1.016e-1);
                case LengthUnits.AstronomicalUnits: return super.internalMultiply(value, 1.4959787070e11);
                case LengthUnits.Parsecs: return super.internalMultiply(value, 3.08567758128e16);
                case LengthUnits.LightYears: return super.internalMultiply(value, 9.46073047258e15);
                case LengthUnits.SolarRadiuses: return super.internalMultiply(value, 6.95510000E+08);
                case LengthUnits.Chains: return super.internalMultiply(value, 20.1168);
                case LengthUnits.Angstroms: return super.internalMultiply(value, 1e-10);
                case LengthUnits.DataMiles: return super.internalMultiply(value, 1828.8);
                case LengthUnits.Femtometers: return super.internalMultiply(value, 1e-15);
                case LengthUnits.Picometers: return super.internalMultiply(value, 1e-12);
                case LengthUnits.Nanometers: return super.internalMultiply(value, 1e-9);
                case LengthUnits.Micrometers: return super.internalMultiply(value, 0.000001);
                case LengthUnits.Millimeters: return super.internalMultiply(value, 0.001);
                case LengthUnits.Centimeters: return super.internalMultiply(value, 0.01);
                case LengthUnits.Decimeters: return super.internalMultiply(value, 0.1);
                case LengthUnits.Decameters: return super.internalMultiply(value, 10);
                case LengthUnits.Hectometers: return super.internalMultiply(value, 100);
                case LengthUnits.Kilometers: return super.internalMultiply(value, 1000);
                case LengthUnits.Megameters: return super.internalMultiply(value, 1000000);
                case LengthUnits.Gigameters: return super.internalMultiply(value, 1000000000);
                case LengthUnits.Kiloyards: {
                    const v3 = super.internalMultiply(value, 0.9144);
                    return super.internalMultiply(v3, 1000);
                }
                case LengthUnits.Kilofeet: {
                    const v3 = super.internalMultiply(value, 0.3048);
                    return super.internalMultiply(v3, 1000);
                }
                case LengthUnits.Kiloparsecs: {
                    const v3 = super.internalMultiply(value, 3.08567758128e16);
                    return super.internalMultiply(v3, 1000);
                }
                case LengthUnits.Megaparsecs: {
                    const v3 = super.internalMultiply(value, 3.08567758128e16);
                    return super.internalMultiply(v3, 1000000);
                }
                case LengthUnits.KilolightYears: {
                    const v3 = super.internalMultiply(value, 9.46073047258e15);
                    return super.internalMultiply(v3, 1000);
                }
                case LengthUnits.MegalightYears: {
                    const v3 = super.internalMultiply(value, 9.46073047258e15);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case LengthUnits.Meters: return value;
            case LengthUnits.Miles: return value * 1609.344;
            case LengthUnits.Yards: return value * 0.9144;
            case LengthUnits.Feet: return value * 0.3048;
            case LengthUnits.UsSurveyFeet: return value * 1200 / 3937;
            case LengthUnits.Inches: return value * 2.54e-2;
            case LengthUnits.Mils: return value * 2.54e-5;
            case LengthUnits.NauticalMiles: return value * 1852;
            case LengthUnits.Fathoms: return value * 1.8288;
            case LengthUnits.Shackles: return value * 27.432;
            case LengthUnits.Microinches: return value * 2.54e-8;
            case LengthUnits.PrinterPoints: return (value / 72.27) * 2.54e-2;
            case LengthUnits.DtpPoints: return (value / 72) * 2.54e-2;
            case LengthUnits.PrinterPicas: return value / 237.106301584;
            case LengthUnits.DtpPicas: return value / 236.220472441;
            case LengthUnits.Twips: return value / 56692.913385826;
            case LengthUnits.Hands: return value * 1.016e-1;
            case LengthUnits.AstronomicalUnits: return value * 1.4959787070e11;
            case LengthUnits.Parsecs: return value * 3.08567758128e16;
            case LengthUnits.LightYears: return value * 9.46073047258e15;
            case LengthUnits.SolarRadiuses: return value * 6.95510000E+08;
            case LengthUnits.Chains: return value * 20.1168;
            case LengthUnits.Angstroms: return value * 1e-10;
            case LengthUnits.DataMiles: return value * 1828.8;
            case LengthUnits.Femtometers: return (value) * 1e-15;
            case LengthUnits.Picometers: return (value) * 1e-12;
            case LengthUnits.Nanometers: return (value) * 1e-9;
            case LengthUnits.Micrometers: return (value) * 0.000001;
            case LengthUnits.Millimeters: return (value) * 0.001;
            case LengthUnits.Centimeters: return (value) * 0.01;
            case LengthUnits.Decimeters: return (value) * 0.1;
            case LengthUnits.Decameters: return (value) * 10;
            case LengthUnits.Hectometers: return (value) * 100;
            case LengthUnits.Kilometers: return (value) * 1000;
            case LengthUnits.Megameters: return (value) * 1000000;
            case LengthUnits.Gigameters: return (value) * 1000000000;
            case LengthUnits.Kiloyards: return (value * 0.9144) * 1000;
            case LengthUnits.Kilofeet: return (value * 0.3048) * 1000;
            case LengthUnits.Kiloparsecs: return (value * 3.08567758128e16) * 1000;
            case LengthUnits.Megaparsecs: return (value * 3.08567758128e16) * 1000000;
            case LengthUnits.KilolightYears: return (value * 9.46073047258e15) * 1000;
            case LengthUnits.MegalightYears: return (value * 9.46073047258e15) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Length to string.
     * Note! the default format for Length is Meters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Length.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Length.
     */
    public toString(unit: LengthUnits = LengthUnits.Meters, fractionalDigits?: number): string {

        switch (unit) {
            
            case LengthUnits.Meters:
                return super.truncateFractionDigits(this.Meters, fractionalDigits) + ` m`;
            case LengthUnits.Miles:
                return super.truncateFractionDigits(this.Miles, fractionalDigits) + ` mi`;
            case LengthUnits.Yards:
                return super.truncateFractionDigits(this.Yards, fractionalDigits) + ` yd`;
            case LengthUnits.Feet:
                return super.truncateFractionDigits(this.Feet, fractionalDigits) + ` ft`;
            case LengthUnits.UsSurveyFeet:
                return super.truncateFractionDigits(this.UsSurveyFeet, fractionalDigits) + ` ftUS`;
            case LengthUnits.Inches:
                return super.truncateFractionDigits(this.Inches, fractionalDigits) + ` in`;
            case LengthUnits.Mils:
                return super.truncateFractionDigits(this.Mils, fractionalDigits) + ` mil`;
            case LengthUnits.NauticalMiles:
                return super.truncateFractionDigits(this.NauticalMiles, fractionalDigits) + ` NM`;
            case LengthUnits.Fathoms:
                return super.truncateFractionDigits(this.Fathoms, fractionalDigits) + ` fathom`;
            case LengthUnits.Shackles:
                return super.truncateFractionDigits(this.Shackles, fractionalDigits) + ` shackle`;
            case LengthUnits.Microinches:
                return super.truncateFractionDigits(this.Microinches, fractionalDigits) + ` µin`;
            case LengthUnits.PrinterPoints:
                return super.truncateFractionDigits(this.PrinterPoints, fractionalDigits) + ` pt`;
            case LengthUnits.DtpPoints:
                return super.truncateFractionDigits(this.DtpPoints, fractionalDigits) + ` pt`;
            case LengthUnits.PrinterPicas:
                return super.truncateFractionDigits(this.PrinterPicas, fractionalDigits) + ` pica`;
            case LengthUnits.DtpPicas:
                return super.truncateFractionDigits(this.DtpPicas, fractionalDigits) + ` pica`;
            case LengthUnits.Twips:
                return super.truncateFractionDigits(this.Twips, fractionalDigits) + ` twip`;
            case LengthUnits.Hands:
                return super.truncateFractionDigits(this.Hands, fractionalDigits) + ` h`;
            case LengthUnits.AstronomicalUnits:
                return super.truncateFractionDigits(this.AstronomicalUnits, fractionalDigits) + ` au`;
            case LengthUnits.Parsecs:
                return super.truncateFractionDigits(this.Parsecs, fractionalDigits) + ` pc`;
            case LengthUnits.LightYears:
                return super.truncateFractionDigits(this.LightYears, fractionalDigits) + ` ly`;
            case LengthUnits.SolarRadiuses:
                return super.truncateFractionDigits(this.SolarRadiuses, fractionalDigits) + ` R⊙`;
            case LengthUnits.Chains:
                return super.truncateFractionDigits(this.Chains, fractionalDigits) + ` ch`;
            case LengthUnits.Angstroms:
                return super.truncateFractionDigits(this.Angstroms, fractionalDigits) + ` Å`;
            case LengthUnits.DataMiles:
                return super.truncateFractionDigits(this.DataMiles, fractionalDigits) + ` DM`;
            case LengthUnits.Femtometers:
                return super.truncateFractionDigits(this.Femtometers, fractionalDigits) + ` fm`;
            case LengthUnits.Picometers:
                return super.truncateFractionDigits(this.Picometers, fractionalDigits) + ` pm`;
            case LengthUnits.Nanometers:
                return super.truncateFractionDigits(this.Nanometers, fractionalDigits) + ` nm`;
            case LengthUnits.Micrometers:
                return super.truncateFractionDigits(this.Micrometers, fractionalDigits) + ` μm`;
            case LengthUnits.Millimeters:
                return super.truncateFractionDigits(this.Millimeters, fractionalDigits) + ` mm`;
            case LengthUnits.Centimeters:
                return super.truncateFractionDigits(this.Centimeters, fractionalDigits) + ` cm`;
            case LengthUnits.Decimeters:
                return super.truncateFractionDigits(this.Decimeters, fractionalDigits) + ` dm`;
            case LengthUnits.Decameters:
                return super.truncateFractionDigits(this.Decameters, fractionalDigits) + ` dam`;
            case LengthUnits.Hectometers:
                return super.truncateFractionDigits(this.Hectometers, fractionalDigits) + ` hm`;
            case LengthUnits.Kilometers:
                return super.truncateFractionDigits(this.Kilometers, fractionalDigits) + ` km`;
            case LengthUnits.Megameters:
                return super.truncateFractionDigits(this.Megameters, fractionalDigits) + ` Mm`;
            case LengthUnits.Gigameters:
                return super.truncateFractionDigits(this.Gigameters, fractionalDigits) + ` Gm`;
            case LengthUnits.Kiloyards:
                return super.truncateFractionDigits(this.Kiloyards, fractionalDigits) + ` kyd`;
            case LengthUnits.Kilofeet:
                return super.truncateFractionDigits(this.Kilofeet, fractionalDigits) + ` kft`;
            case LengthUnits.Kiloparsecs:
                return super.truncateFractionDigits(this.Kiloparsecs, fractionalDigits) + ` kpc`;
            case LengthUnits.Megaparsecs:
                return super.truncateFractionDigits(this.Megaparsecs, fractionalDigits) + ` Mpc`;
            case LengthUnits.KilolightYears:
                return super.truncateFractionDigits(this.KilolightYears, fractionalDigits) + ` kly`;
            case LengthUnits.MegalightYears:
                return super.truncateFractionDigits(this.MegalightYears, fractionalDigits) + ` Mly`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Length unit abbreviation.
     * Note! the default abbreviation for Length is Meters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Length.
     * @returns The abbreviation string of Length.
     */
    public getUnitAbbreviation(unitAbbreviation: LengthUnits = LengthUnits.Meters): string {

        switch (unitAbbreviation) {
            
            case LengthUnits.Meters:
                return `m`;
            case LengthUnits.Miles:
                return `mi`;
            case LengthUnits.Yards:
                return `yd`;
            case LengthUnits.Feet:
                return `ft`;
            case LengthUnits.UsSurveyFeet:
                return `ftUS`;
            case LengthUnits.Inches:
                return `in`;
            case LengthUnits.Mils:
                return `mil`;
            case LengthUnits.NauticalMiles:
                return `NM`;
            case LengthUnits.Fathoms:
                return `fathom`;
            case LengthUnits.Shackles:
                return `shackle`;
            case LengthUnits.Microinches:
                return `µin`;
            case LengthUnits.PrinterPoints:
                return `pt`;
            case LengthUnits.DtpPoints:
                return `pt`;
            case LengthUnits.PrinterPicas:
                return `pica`;
            case LengthUnits.DtpPicas:
                return `pica`;
            case LengthUnits.Twips:
                return `twip`;
            case LengthUnits.Hands:
                return `h`;
            case LengthUnits.AstronomicalUnits:
                return `au`;
            case LengthUnits.Parsecs:
                return `pc`;
            case LengthUnits.LightYears:
                return `ly`;
            case LengthUnits.SolarRadiuses:
                return `R⊙`;
            case LengthUnits.Chains:
                return `ch`;
            case LengthUnits.Angstroms:
                return `Å`;
            case LengthUnits.DataMiles:
                return `DM`;
            case LengthUnits.Femtometers:
                return `fm`;
            case LengthUnits.Picometers:
                return `pm`;
            case LengthUnits.Nanometers:
                return `nm`;
            case LengthUnits.Micrometers:
                return `μm`;
            case LengthUnits.Millimeters:
                return `mm`;
            case LengthUnits.Centimeters:
                return `cm`;
            case LengthUnits.Decimeters:
                return `dm`;
            case LengthUnits.Decameters:
                return `dam`;
            case LengthUnits.Hectometers:
                return `hm`;
            case LengthUnits.Kilometers:
                return `km`;
            case LengthUnits.Megameters:
                return `Mm`;
            case LengthUnits.Gigameters:
                return `Gm`;
            case LengthUnits.Kiloyards:
                return `kyd`;
            case LengthUnits.Kilofeet:
                return `kft`;
            case LengthUnits.Kiloparsecs:
                return `kpc`;
            case LengthUnits.Megaparsecs:
                return `Mpc`;
            case LengthUnits.KilolightYears:
                return `kly`;
            case LengthUnits.MegalightYears:
                return `Mly`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Length are equals to the current Length.
     * @param length The other Length.
     * @returns True if the given Length are equal to the current Length.
     */
    public equals(length: Length): boolean {
        return super.internalEquals(this.value, length.BaseValue);
    }

    /**
     * Compare the given Length against the current Length.
     * @param length The other Length.
     * @returns 0 if they are equal, -1 if the current Length is less then other, 1 if the current Length is greater then other.
     */
    public compareTo(length: Length): number {
        return super.internalCompareTo(this.value, length.BaseValue);
    }

    /**
     * Add the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public add(length: Length): Length {
        return new Length(super.internalAdd(this.value, length.BaseValue))
    }

    /**
     * Subtract the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public subtract(length: Length): Length {
        return new Length(super.internalSubtract(this.value, length.BaseValue))
    }

    /**
     * Multiply the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public multiply(length: Length): Length {
        return new Length(super.internalMultiply(this.value, length.BaseValue))
    }

    /**
     * Divide the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public divide(length: Length): Length {
        return new Length(super.internalDivide(this.value, length.BaseValue))
    }

    /**
     * Modulo the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public modulo(length: Length): Length {
        return new Length(super.internalModulo(this.value, length.BaseValue))
    }

    /**
     * Pow the given Length with the current Length.
     * @param length The other Length.
     * @returns A new Length instance with the results.
     */
    public pow(length: Length): Length {
        return new Length(super.internalPow(this.value, length.BaseValue))
    }
}
