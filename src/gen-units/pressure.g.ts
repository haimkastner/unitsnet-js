import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Pressure */
export interface PressureDto {
    /** The value of the Pressure */
    value: number;
    /**  The specific unit that the Pressure value is representing */
    unit: PressureUnits;
}

/** PressureUnits enumeration */
export enum PressureUnits {
    /** */
    Pascals = "Pascal",
    /** */
    Atmospheres = "Atmosphere",
    /** */
    Bars = "Bar",
    /** */
    KilogramsForcePerSquareMeter = "KilogramForcePerSquareMeter",
    /** */
    KilogramsForcePerSquareCentimeter = "KilogramForcePerSquareCentimeter",
    /** */
    KilogramsForcePerSquareMillimeter = "KilogramForcePerSquareMillimeter",
    /** */
    NewtonsPerSquareMeter = "NewtonPerSquareMeter",
    /** */
    NewtonsPerSquareCentimeter = "NewtonPerSquareCentimeter",
    /** */
    NewtonsPerSquareMillimeter = "NewtonPerSquareMillimeter",
    /** */
    TechnicalAtmospheres = "TechnicalAtmosphere",
    /** */
    Torrs = "Torr",
    /** */
    PoundsForcePerSquareInch = "PoundForcePerSquareInch",
    /** */
    PoundsForcePerSquareMil = "PoundForcePerSquareMil",
    /** */
    PoundsForcePerSquareFoot = "PoundForcePerSquareFoot",
    /** */
    TonnesForcePerSquareMillimeter = "TonneForcePerSquareMillimeter",
    /** */
    TonnesForcePerSquareMeter = "TonneForcePerSquareMeter",
    /** */
    MetersOfHead = "MeterOfHead",
    /** */
    TonnesForcePerSquareCentimeter = "TonneForcePerSquareCentimeter",
    /** */
    FeetOfHead = "FootOfHead",
    /** */
    MillimetersOfMercury = "MillimeterOfMercury",
    /** */
    InchesOfMercury = "InchOfMercury",
    /** */
    DynesPerSquareCentimeter = "DynePerSquareCentimeter",
    /** */
    PoundsPerInchSecondSquared = "PoundPerInchSecondSquared",
    /** */
    MetersOfWaterColumn = "MeterOfWaterColumn",
    /** */
    InchesOfWaterColumn = "InchOfWaterColumn",
    /** */
    MetersOfElevation = "MeterOfElevation",
    /** */
    FeetOfElevation = "FootOfElevation",
    /** */
    Micropascals = "Micropascal",
    /** */
    Millipascals = "Millipascal",
    /** */
    Decapascals = "Decapascal",
    /** */
    Hectopascals = "Hectopascal",
    /** */
    Kilopascals = "Kilopascal",
    /** */
    Megapascals = "Megapascal",
    /** */
    Gigapascals = "Gigapascal",
    /** */
    Microbars = "Microbar",
    /** */
    Millibars = "Millibar",
    /** */
    Centibars = "Centibar",
    /** */
    Decibars = "Decibar",
    /** */
    Kilobars = "Kilobar",
    /** */
    Megabars = "Megabar",
    /** */
    KilonewtonsPerSquareMeter = "KilonewtonPerSquareMeter",
    /** */
    MeganewtonsPerSquareMeter = "MeganewtonPerSquareMeter",
    /** */
    KilonewtonsPerSquareCentimeter = "KilonewtonPerSquareCentimeter",
    /** */
    KilonewtonsPerSquareMillimeter = "KilonewtonPerSquareMillimeter",
    /** */
    KilopoundsForcePerSquareInch = "KilopoundForcePerSquareInch",
    /** */
    KilopoundsForcePerSquareMil = "KilopoundForcePerSquareMil",
    /** */
    KilopoundsForcePerSquareFoot = "KilopoundForcePerSquareFoot",
    /** */
    MillimetersOfWaterColumn = "MillimeterOfWaterColumn",
    /** */
    CentimetersOfWaterColumn = "CentimeterOfWaterColumn"
}

/** Pressure (symbol: P or p) is the ratio of force to the area over which that force is distributed. Pressure is force per unit area applied in a direction perpendicular to the surface of an object. Gauge pressure (also spelled gage pressure)[a] is the pressure relative to the local atmospheric or ambient pressure. Pressure is measured in any unit of force divided by any unit of area. The SI unit of pressure is the newton per square metre, which is called the pascal (Pa) after the seventeenth-century philosopher and scientist Blaise Pascal. A pressure of 1 Pa is small; it approximately equals the pressure exerted by a dollar bill resting flat on a table. Everyday pressures are often stated in kilopascals (1 kPa = 1000 Pa). */
export class Pressure extends BaseUnit {
    protected value: number;
    private pascalsLazy: number | null = null;
    private atmospheresLazy: number | null = null;
    private barsLazy: number | null = null;
    private kilogramsforcepersquaremeterLazy: number | null = null;
    private kilogramsforcepersquarecentimeterLazy: number | null = null;
    private kilogramsforcepersquaremillimeterLazy: number | null = null;
    private newtonspersquaremeterLazy: number | null = null;
    private newtonspersquarecentimeterLazy: number | null = null;
    private newtonspersquaremillimeterLazy: number | null = null;
    private technicalatmospheresLazy: number | null = null;
    private torrsLazy: number | null = null;
    private poundsforcepersquareinchLazy: number | null = null;
    private poundsforcepersquaremilLazy: number | null = null;
    private poundsforcepersquarefootLazy: number | null = null;
    private tonnesforcepersquaremillimeterLazy: number | null = null;
    private tonnesforcepersquaremeterLazy: number | null = null;
    private metersofheadLazy: number | null = null;
    private tonnesforcepersquarecentimeterLazy: number | null = null;
    private feetofheadLazy: number | null = null;
    private millimetersofmercuryLazy: number | null = null;
    private inchesofmercuryLazy: number | null = null;
    private dynespersquarecentimeterLazy: number | null = null;
    private poundsperinchsecondsquaredLazy: number | null = null;
    private metersofwatercolumnLazy: number | null = null;
    private inchesofwatercolumnLazy: number | null = null;
    private metersofelevationLazy: number | null = null;
    private feetofelevationLazy: number | null = null;
    private micropascalsLazy: number | null = null;
    private millipascalsLazy: number | null = null;
    private decapascalsLazy: number | null = null;
    private hectopascalsLazy: number | null = null;
    private kilopascalsLazy: number | null = null;
    private megapascalsLazy: number | null = null;
    private gigapascalsLazy: number | null = null;
    private microbarsLazy: number | null = null;
    private millibarsLazy: number | null = null;
    private centibarsLazy: number | null = null;
    private decibarsLazy: number | null = null;
    private kilobarsLazy: number | null = null;
    private megabarsLazy: number | null = null;
    private kilonewtonspersquaremeterLazy: number | null = null;
    private meganewtonspersquaremeterLazy: number | null = null;
    private kilonewtonspersquarecentimeterLazy: number | null = null;
    private kilonewtonspersquaremillimeterLazy: number | null = null;
    private kilopoundsforcepersquareinchLazy: number | null = null;
    private kilopoundsforcepersquaremilLazy: number | null = null;
    private kilopoundsforcepersquarefootLazy: number | null = null;
    private millimetersofwatercolumnLazy: number | null = null;
    private centimetersofwatercolumnLazy: number | null = null;

    /**
     * Create a new Pressure.
     * @param value The value.
     * @param fromUnit The ‘Pressure’ unit to create from.
     * The default unit is Pascals
     */
    public constructor(value: number, fromUnit: PressureUnits = PressureUnits.Pascals) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Pressure is Pascals.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get getBaseUnit(): PressureUnits.Pascals {
        return PressureUnits.Pascals
    }

    /** */
    public get Pascals(): number {
        if(this.pascalsLazy !== null){
            return this.pascalsLazy;
        }
        return this.pascalsLazy = this.convertFromBase(PressureUnits.Pascals);
    }

    /** */
    public get Atmospheres(): number {
        if(this.atmospheresLazy !== null){
            return this.atmospheresLazy;
        }
        return this.atmospheresLazy = this.convertFromBase(PressureUnits.Atmospheres);
    }

    /** */
    public get Bars(): number {
        if(this.barsLazy !== null){
            return this.barsLazy;
        }
        return this.barsLazy = this.convertFromBase(PressureUnits.Bars);
    }

    /** */
    public get KilogramsForcePerSquareMeter(): number {
        if(this.kilogramsforcepersquaremeterLazy !== null){
            return this.kilogramsforcepersquaremeterLazy;
        }
        return this.kilogramsforcepersquaremeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareMeter);
    }

    /** */
    public get KilogramsForcePerSquareCentimeter(): number {
        if(this.kilogramsforcepersquarecentimeterLazy !== null){
            return this.kilogramsforcepersquarecentimeterLazy;
        }
        return this.kilogramsforcepersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareCentimeter);
    }

    /** */
    public get KilogramsForcePerSquareMillimeter(): number {
        if(this.kilogramsforcepersquaremillimeterLazy !== null){
            return this.kilogramsforcepersquaremillimeterLazy;
        }
        return this.kilogramsforcepersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareMillimeter);
    }

    /** */
    public get NewtonsPerSquareMeter(): number {
        if(this.newtonspersquaremeterLazy !== null){
            return this.newtonspersquaremeterLazy;
        }
        return this.newtonspersquaremeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareMeter);
    }

    /** */
    public get NewtonsPerSquareCentimeter(): number {
        if(this.newtonspersquarecentimeterLazy !== null){
            return this.newtonspersquarecentimeterLazy;
        }
        return this.newtonspersquarecentimeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareCentimeter);
    }

    /** */
    public get NewtonsPerSquareMillimeter(): number {
        if(this.newtonspersquaremillimeterLazy !== null){
            return this.newtonspersquaremillimeterLazy;
        }
        return this.newtonspersquaremillimeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareMillimeter);
    }

    /** */
    public get TechnicalAtmospheres(): number {
        if(this.technicalatmospheresLazy !== null){
            return this.technicalatmospheresLazy;
        }
        return this.technicalatmospheresLazy = this.convertFromBase(PressureUnits.TechnicalAtmospheres);
    }

    /** */
    public get Torrs(): number {
        if(this.torrsLazy !== null){
            return this.torrsLazy;
        }
        return this.torrsLazy = this.convertFromBase(PressureUnits.Torrs);
    }

    /** */
    public get PoundsForcePerSquareInch(): number {
        if(this.poundsforcepersquareinchLazy !== null){
            return this.poundsforcepersquareinchLazy;
        }
        return this.poundsforcepersquareinchLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareInch);
    }

    /** */
    public get PoundsForcePerSquareMil(): number {
        if(this.poundsforcepersquaremilLazy !== null){
            return this.poundsforcepersquaremilLazy;
        }
        return this.poundsforcepersquaremilLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareMil);
    }

    /** */
    public get PoundsForcePerSquareFoot(): number {
        if(this.poundsforcepersquarefootLazy !== null){
            return this.poundsforcepersquarefootLazy;
        }
        return this.poundsforcepersquarefootLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareFoot);
    }

    /** */
    public get TonnesForcePerSquareMillimeter(): number {
        if(this.tonnesforcepersquaremillimeterLazy !== null){
            return this.tonnesforcepersquaremillimeterLazy;
        }
        return this.tonnesforcepersquaremillimeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareMillimeter);
    }

    /** */
    public get TonnesForcePerSquareMeter(): number {
        if(this.tonnesforcepersquaremeterLazy !== null){
            return this.tonnesforcepersquaremeterLazy;
        }
        return this.tonnesforcepersquaremeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareMeter);
    }

    /** */
    public get MetersOfHead(): number {
        if(this.metersofheadLazy !== null){
            return this.metersofheadLazy;
        }
        return this.metersofheadLazy = this.convertFromBase(PressureUnits.MetersOfHead);
    }

    /** */
    public get TonnesForcePerSquareCentimeter(): number {
        if(this.tonnesforcepersquarecentimeterLazy !== null){
            return this.tonnesforcepersquarecentimeterLazy;
        }
        return this.tonnesforcepersquarecentimeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareCentimeter);
    }

    /** */
    public get FeetOfHead(): number {
        if(this.feetofheadLazy !== null){
            return this.feetofheadLazy;
        }
        return this.feetofheadLazy = this.convertFromBase(PressureUnits.FeetOfHead);
    }

    /** */
    public get MillimetersOfMercury(): number {
        if(this.millimetersofmercuryLazy !== null){
            return this.millimetersofmercuryLazy;
        }
        return this.millimetersofmercuryLazy = this.convertFromBase(PressureUnits.MillimetersOfMercury);
    }

    /** */
    public get InchesOfMercury(): number {
        if(this.inchesofmercuryLazy !== null){
            return this.inchesofmercuryLazy;
        }
        return this.inchesofmercuryLazy = this.convertFromBase(PressureUnits.InchesOfMercury);
    }

    /** */
    public get DynesPerSquareCentimeter(): number {
        if(this.dynespersquarecentimeterLazy !== null){
            return this.dynespersquarecentimeterLazy;
        }
        return this.dynespersquarecentimeterLazy = this.convertFromBase(PressureUnits.DynesPerSquareCentimeter);
    }

    /** */
    public get PoundsPerInchSecondSquared(): number {
        if(this.poundsperinchsecondsquaredLazy !== null){
            return this.poundsperinchsecondsquaredLazy;
        }
        return this.poundsperinchsecondsquaredLazy = this.convertFromBase(PressureUnits.PoundsPerInchSecondSquared);
    }

    /** */
    public get MetersOfWaterColumn(): number {
        if(this.metersofwatercolumnLazy !== null){
            return this.metersofwatercolumnLazy;
        }
        return this.metersofwatercolumnLazy = this.convertFromBase(PressureUnits.MetersOfWaterColumn);
    }

    /** */
    public get InchesOfWaterColumn(): number {
        if(this.inchesofwatercolumnLazy !== null){
            return this.inchesofwatercolumnLazy;
        }
        return this.inchesofwatercolumnLazy = this.convertFromBase(PressureUnits.InchesOfWaterColumn);
    }

    /** */
    public get MetersOfElevation(): number {
        if(this.metersofelevationLazy !== null){
            return this.metersofelevationLazy;
        }
        return this.metersofelevationLazy = this.convertFromBase(PressureUnits.MetersOfElevation);
    }

    /** */
    public get FeetOfElevation(): number {
        if(this.feetofelevationLazy !== null){
            return this.feetofelevationLazy;
        }
        return this.feetofelevationLazy = this.convertFromBase(PressureUnits.FeetOfElevation);
    }

    /** */
    public get Micropascals(): number {
        if(this.micropascalsLazy !== null){
            return this.micropascalsLazy;
        }
        return this.micropascalsLazy = this.convertFromBase(PressureUnits.Micropascals);
    }

    /** */
    public get Millipascals(): number {
        if(this.millipascalsLazy !== null){
            return this.millipascalsLazy;
        }
        return this.millipascalsLazy = this.convertFromBase(PressureUnits.Millipascals);
    }

    /** */
    public get Decapascals(): number {
        if(this.decapascalsLazy !== null){
            return this.decapascalsLazy;
        }
        return this.decapascalsLazy = this.convertFromBase(PressureUnits.Decapascals);
    }

    /** */
    public get Hectopascals(): number {
        if(this.hectopascalsLazy !== null){
            return this.hectopascalsLazy;
        }
        return this.hectopascalsLazy = this.convertFromBase(PressureUnits.Hectopascals);
    }

    /** */
    public get Kilopascals(): number {
        if(this.kilopascalsLazy !== null){
            return this.kilopascalsLazy;
        }
        return this.kilopascalsLazy = this.convertFromBase(PressureUnits.Kilopascals);
    }

    /** */
    public get Megapascals(): number {
        if(this.megapascalsLazy !== null){
            return this.megapascalsLazy;
        }
        return this.megapascalsLazy = this.convertFromBase(PressureUnits.Megapascals);
    }

    /** */
    public get Gigapascals(): number {
        if(this.gigapascalsLazy !== null){
            return this.gigapascalsLazy;
        }
        return this.gigapascalsLazy = this.convertFromBase(PressureUnits.Gigapascals);
    }

    /** */
    public get Microbars(): number {
        if(this.microbarsLazy !== null){
            return this.microbarsLazy;
        }
        return this.microbarsLazy = this.convertFromBase(PressureUnits.Microbars);
    }

    /** */
    public get Millibars(): number {
        if(this.millibarsLazy !== null){
            return this.millibarsLazy;
        }
        return this.millibarsLazy = this.convertFromBase(PressureUnits.Millibars);
    }

    /** */
    public get Centibars(): number {
        if(this.centibarsLazy !== null){
            return this.centibarsLazy;
        }
        return this.centibarsLazy = this.convertFromBase(PressureUnits.Centibars);
    }

    /** */
    public get Decibars(): number {
        if(this.decibarsLazy !== null){
            return this.decibarsLazy;
        }
        return this.decibarsLazy = this.convertFromBase(PressureUnits.Decibars);
    }

    /** */
    public get Kilobars(): number {
        if(this.kilobarsLazy !== null){
            return this.kilobarsLazy;
        }
        return this.kilobarsLazy = this.convertFromBase(PressureUnits.Kilobars);
    }

    /** */
    public get Megabars(): number {
        if(this.megabarsLazy !== null){
            return this.megabarsLazy;
        }
        return this.megabarsLazy = this.convertFromBase(PressureUnits.Megabars);
    }

    /** */
    public get KilonewtonsPerSquareMeter(): number {
        if(this.kilonewtonspersquaremeterLazy !== null){
            return this.kilonewtonspersquaremeterLazy;
        }
        return this.kilonewtonspersquaremeterLazy = this.convertFromBase(PressureUnits.KilonewtonsPerSquareMeter);
    }

    /** */
    public get MeganewtonsPerSquareMeter(): number {
        if(this.meganewtonspersquaremeterLazy !== null){
            return this.meganewtonspersquaremeterLazy;
        }
        return this.meganewtonspersquaremeterLazy = this.convertFromBase(PressureUnits.MeganewtonsPerSquareMeter);
    }

    /** */
    public get KilonewtonsPerSquareCentimeter(): number {
        if(this.kilonewtonspersquarecentimeterLazy !== null){
            return this.kilonewtonspersquarecentimeterLazy;
        }
        return this.kilonewtonspersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilonewtonsPerSquareCentimeter);
    }

    /** */
    public get KilonewtonsPerSquareMillimeter(): number {
        if(this.kilonewtonspersquaremillimeterLazy !== null){
            return this.kilonewtonspersquaremillimeterLazy;
        }
        return this.kilonewtonspersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilonewtonsPerSquareMillimeter);
    }

    /** */
    public get KilopoundsForcePerSquareInch(): number {
        if(this.kilopoundsforcepersquareinchLazy !== null){
            return this.kilopoundsforcepersquareinchLazy;
        }
        return this.kilopoundsforcepersquareinchLazy = this.convertFromBase(PressureUnits.KilopoundsForcePerSquareInch);
    }

    /** */
    public get KilopoundsForcePerSquareMil(): number {
        if(this.kilopoundsforcepersquaremilLazy !== null){
            return this.kilopoundsforcepersquaremilLazy;
        }
        return this.kilopoundsforcepersquaremilLazy = this.convertFromBase(PressureUnits.KilopoundsForcePerSquareMil);
    }

    /** */
    public get KilopoundsForcePerSquareFoot(): number {
        if(this.kilopoundsforcepersquarefootLazy !== null){
            return this.kilopoundsforcepersquarefootLazy;
        }
        return this.kilopoundsforcepersquarefootLazy = this.convertFromBase(PressureUnits.KilopoundsForcePerSquareFoot);
    }

    /** */
    public get MillimetersOfWaterColumn(): number {
        if(this.millimetersofwatercolumnLazy !== null){
            return this.millimetersofwatercolumnLazy;
        }
        return this.millimetersofwatercolumnLazy = this.convertFromBase(PressureUnits.MillimetersOfWaterColumn);
    }

    /** */
    public get CentimetersOfWaterColumn(): number {
        if(this.centimetersofwatercolumnLazy !== null){
            return this.centimetersofwatercolumnLazy;
        }
        return this.centimetersofwatercolumnLazy = this.convertFromBase(PressureUnits.CentimetersOfWaterColumn);
    }

    /**
     * Create a new Pressure instance from a Pascals
     *
     * @param value The unit as Pascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromPascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Pascals);
    }

    /**
     * Create a new Pressure instance from a Atmospheres
     *
     * @param value The unit as Atmospheres to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromAtmospheres(value: number): Pressure {
        return new Pressure(value, PressureUnits.Atmospheres);
    }

    /**
     * Create a new Pressure instance from a Bars
     *
     * @param value The unit as Bars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromBars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Bars);
    }

    /**
     * Create a new Pressure instance from a KilogramsForcePerSquareMeter
     *
     * @param value The unit as KilogramsForcePerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilogramsForcePerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareMeter);
    }

    /**
     * Create a new Pressure instance from a KilogramsForcePerSquareCentimeter
     *
     * @param value The unit as KilogramsForcePerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilogramsForcePerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareCentimeter);
    }

    /**
     * Create a new Pressure instance from a KilogramsForcePerSquareMillimeter
     *
     * @param value The unit as KilogramsForcePerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilogramsForcePerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareMillimeter);
    }

    /**
     * Create a new Pressure instance from a NewtonsPerSquareMeter
     *
     * @param value The unit as NewtonsPerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromNewtonsPerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.NewtonsPerSquareMeter);
    }

    /**
     * Create a new Pressure instance from a NewtonsPerSquareCentimeter
     *
     * @param value The unit as NewtonsPerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromNewtonsPerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.NewtonsPerSquareCentimeter);
    }

    /**
     * Create a new Pressure instance from a NewtonsPerSquareMillimeter
     *
     * @param value The unit as NewtonsPerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromNewtonsPerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.NewtonsPerSquareMillimeter);
    }

    /**
     * Create a new Pressure instance from a TechnicalAtmospheres
     *
     * @param value The unit as TechnicalAtmospheres to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromTechnicalAtmospheres(value: number): Pressure {
        return new Pressure(value, PressureUnits.TechnicalAtmospheres);
    }

    /**
     * Create a new Pressure instance from a Torrs
     *
     * @param value The unit as Torrs to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromTorrs(value: number): Pressure {
        return new Pressure(value, PressureUnits.Torrs);
    }

    /**
     * Create a new Pressure instance from a PoundsForcePerSquareInch
     *
     * @param value The unit as PoundsForcePerSquareInch to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromPoundsForcePerSquareInch(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareInch);
    }

    /**
     * Create a new Pressure instance from a PoundsForcePerSquareMil
     *
     * @param value The unit as PoundsForcePerSquareMil to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromPoundsForcePerSquareMil(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareMil);
    }

    /**
     * Create a new Pressure instance from a PoundsForcePerSquareFoot
     *
     * @param value The unit as PoundsForcePerSquareFoot to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromPoundsForcePerSquareFoot(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareFoot);
    }

    /**
     * Create a new Pressure instance from a TonnesForcePerSquareMillimeter
     *
     * @param value The unit as TonnesForcePerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromTonnesForcePerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareMillimeter);
    }

    /**
     * Create a new Pressure instance from a TonnesForcePerSquareMeter
     *
     * @param value The unit as TonnesForcePerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromTonnesForcePerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareMeter);
    }

    /**
     * Create a new Pressure instance from a MetersOfHead
     *
     * @param value The unit as MetersOfHead to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMetersOfHead(value: number): Pressure {
        return new Pressure(value, PressureUnits.MetersOfHead);
    }

    /**
     * Create a new Pressure instance from a TonnesForcePerSquareCentimeter
     *
     * @param value The unit as TonnesForcePerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromTonnesForcePerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareCentimeter);
    }

    /**
     * Create a new Pressure instance from a FeetOfHead
     *
     * @param value The unit as FeetOfHead to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromFeetOfHead(value: number): Pressure {
        return new Pressure(value, PressureUnits.FeetOfHead);
    }

    /**
     * Create a new Pressure instance from a MillimetersOfMercury
     *
     * @param value The unit as MillimetersOfMercury to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMillimetersOfMercury(value: number): Pressure {
        return new Pressure(value, PressureUnits.MillimetersOfMercury);
    }

    /**
     * Create a new Pressure instance from a InchesOfMercury
     *
     * @param value The unit as InchesOfMercury to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromInchesOfMercury(value: number): Pressure {
        return new Pressure(value, PressureUnits.InchesOfMercury);
    }

    /**
     * Create a new Pressure instance from a DynesPerSquareCentimeter
     *
     * @param value The unit as DynesPerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromDynesPerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.DynesPerSquareCentimeter);
    }

    /**
     * Create a new Pressure instance from a PoundsPerInchSecondSquared
     *
     * @param value The unit as PoundsPerInchSecondSquared to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromPoundsPerInchSecondSquared(value: number): Pressure {
        return new Pressure(value, PressureUnits.PoundsPerInchSecondSquared);
    }

    /**
     * Create a new Pressure instance from a MetersOfWaterColumn
     *
     * @param value The unit as MetersOfWaterColumn to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMetersOfWaterColumn(value: number): Pressure {
        return new Pressure(value, PressureUnits.MetersOfWaterColumn);
    }

    /**
     * Create a new Pressure instance from a InchesOfWaterColumn
     *
     * @param value The unit as InchesOfWaterColumn to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromInchesOfWaterColumn(value: number): Pressure {
        return new Pressure(value, PressureUnits.InchesOfWaterColumn);
    }

    /**
     * Create a new Pressure instance from a MetersOfElevation
     *
     * @param value The unit as MetersOfElevation to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMetersOfElevation(value: number): Pressure {
        return new Pressure(value, PressureUnits.MetersOfElevation);
    }

    /**
     * Create a new Pressure instance from a FeetOfElevation
     *
     * @param value The unit as FeetOfElevation to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromFeetOfElevation(value: number): Pressure {
        return new Pressure(value, PressureUnits.FeetOfElevation);
    }

    /**
     * Create a new Pressure instance from a Micropascals
     *
     * @param value The unit as Micropascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMicropascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Micropascals);
    }

    /**
     * Create a new Pressure instance from a Millipascals
     *
     * @param value The unit as Millipascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMillipascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Millipascals);
    }

    /**
     * Create a new Pressure instance from a Decapascals
     *
     * @param value The unit as Decapascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromDecapascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Decapascals);
    }

    /**
     * Create a new Pressure instance from a Hectopascals
     *
     * @param value The unit as Hectopascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromHectopascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Hectopascals);
    }

    /**
     * Create a new Pressure instance from a Kilopascals
     *
     * @param value The unit as Kilopascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilopascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilopascals);
    }

    /**
     * Create a new Pressure instance from a Megapascals
     *
     * @param value The unit as Megapascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMegapascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Megapascals);
    }

    /**
     * Create a new Pressure instance from a Gigapascals
     *
     * @param value The unit as Gigapascals to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromGigapascals(value: number): Pressure {
        return new Pressure(value, PressureUnits.Gigapascals);
    }

    /**
     * Create a new Pressure instance from a Microbars
     *
     * @param value The unit as Microbars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMicrobars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Microbars);
    }

    /**
     * Create a new Pressure instance from a Millibars
     *
     * @param value The unit as Millibars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMillibars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Millibars);
    }

    /**
     * Create a new Pressure instance from a Centibars
     *
     * @param value The unit as Centibars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromCentibars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Centibars);
    }

    /**
     * Create a new Pressure instance from a Decibars
     *
     * @param value The unit as Decibars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromDecibars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Decibars);
    }

    /**
     * Create a new Pressure instance from a Kilobars
     *
     * @param value The unit as Kilobars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilobars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Kilobars);
    }

    /**
     * Create a new Pressure instance from a Megabars
     *
     * @param value The unit as Megabars to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMegabars(value: number): Pressure {
        return new Pressure(value, PressureUnits.Megabars);
    }

    /**
     * Create a new Pressure instance from a KilonewtonsPerSquareMeter
     *
     * @param value The unit as KilonewtonsPerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilonewtonsPerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilonewtonsPerSquareMeter);
    }

    /**
     * Create a new Pressure instance from a MeganewtonsPerSquareMeter
     *
     * @param value The unit as MeganewtonsPerSquareMeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMeganewtonsPerSquareMeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.MeganewtonsPerSquareMeter);
    }

    /**
     * Create a new Pressure instance from a KilonewtonsPerSquareCentimeter
     *
     * @param value The unit as KilonewtonsPerSquareCentimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilonewtonsPerSquareCentimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilonewtonsPerSquareCentimeter);
    }

    /**
     * Create a new Pressure instance from a KilonewtonsPerSquareMillimeter
     *
     * @param value The unit as KilonewtonsPerSquareMillimeter to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilonewtonsPerSquareMillimeter(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilonewtonsPerSquareMillimeter);
    }

    /**
     * Create a new Pressure instance from a KilopoundsForcePerSquareInch
     *
     * @param value The unit as KilopoundsForcePerSquareInch to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilopoundsForcePerSquareInch(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilopoundsForcePerSquareInch);
    }

    /**
     * Create a new Pressure instance from a KilopoundsForcePerSquareMil
     *
     * @param value The unit as KilopoundsForcePerSquareMil to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilopoundsForcePerSquareMil(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilopoundsForcePerSquareMil);
    }

    /**
     * Create a new Pressure instance from a KilopoundsForcePerSquareFoot
     *
     * @param value The unit as KilopoundsForcePerSquareFoot to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromKilopoundsForcePerSquareFoot(value: number): Pressure {
        return new Pressure(value, PressureUnits.KilopoundsForcePerSquareFoot);
    }

    /**
     * Create a new Pressure instance from a MillimetersOfWaterColumn
     *
     * @param value The unit as MillimetersOfWaterColumn to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromMillimetersOfWaterColumn(value: number): Pressure {
        return new Pressure(value, PressureUnits.MillimetersOfWaterColumn);
    }

    /**
     * Create a new Pressure instance from a CentimetersOfWaterColumn
     *
     * @param value The unit as CentimetersOfWaterColumn to create a new Pressure from.
     * @returns The new Pressure instance.
     */
    public static FromCentimetersOfWaterColumn(value: number): Pressure {
        return new Pressure(value, PressureUnits.CentimetersOfWaterColumn);
    }

    /**
     * Gets the base unit enumeration associated with Pressure
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof PressureUnits {
        return PressureUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): PressureUnits.Pascals {
        return PressureUnits.Pascals;
    }

    /**
     * Create API DTO represent a Pressure unit.
     * @param holdInUnit The specific Pressure unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: PressureUnits = PressureUnits.Pascals): PressureDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Pressure unit from an API DTO representation.
     * @param dtoPressure The Pressure API DTO representation
     */
    public static FromDto(dtoPressure: PressureDto): Pressure {
        return new Pressure(dtoPressure.value, dtoPressure.unit);
    }

    /**
     * Convert Pressure to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: PressureUnits): number {
        switch (toUnit) {
            case PressureUnits.Pascals: return this.Pascals;
            case PressureUnits.Atmospheres: return this.Atmospheres;
            case PressureUnits.Bars: return this.Bars;
            case PressureUnits.KilogramsForcePerSquareMeter: return this.KilogramsForcePerSquareMeter;
            case PressureUnits.KilogramsForcePerSquareCentimeter: return this.KilogramsForcePerSquareCentimeter;
            case PressureUnits.KilogramsForcePerSquareMillimeter: return this.KilogramsForcePerSquareMillimeter;
            case PressureUnits.NewtonsPerSquareMeter: return this.NewtonsPerSquareMeter;
            case PressureUnits.NewtonsPerSquareCentimeter: return this.NewtonsPerSquareCentimeter;
            case PressureUnits.NewtonsPerSquareMillimeter: return this.NewtonsPerSquareMillimeter;
            case PressureUnits.TechnicalAtmospheres: return this.TechnicalAtmospheres;
            case PressureUnits.Torrs: return this.Torrs;
            case PressureUnits.PoundsForcePerSquareInch: return this.PoundsForcePerSquareInch;
            case PressureUnits.PoundsForcePerSquareMil: return this.PoundsForcePerSquareMil;
            case PressureUnits.PoundsForcePerSquareFoot: return this.PoundsForcePerSquareFoot;
            case PressureUnits.TonnesForcePerSquareMillimeter: return this.TonnesForcePerSquareMillimeter;
            case PressureUnits.TonnesForcePerSquareMeter: return this.TonnesForcePerSquareMeter;
            case PressureUnits.MetersOfHead: return this.MetersOfHead;
            case PressureUnits.TonnesForcePerSquareCentimeter: return this.TonnesForcePerSquareCentimeter;
            case PressureUnits.FeetOfHead: return this.FeetOfHead;
            case PressureUnits.MillimetersOfMercury: return this.MillimetersOfMercury;
            case PressureUnits.InchesOfMercury: return this.InchesOfMercury;
            case PressureUnits.DynesPerSquareCentimeter: return this.DynesPerSquareCentimeter;
            case PressureUnits.PoundsPerInchSecondSquared: return this.PoundsPerInchSecondSquared;
            case PressureUnits.MetersOfWaterColumn: return this.MetersOfWaterColumn;
            case PressureUnits.InchesOfWaterColumn: return this.InchesOfWaterColumn;
            case PressureUnits.MetersOfElevation: return this.MetersOfElevation;
            case PressureUnits.FeetOfElevation: return this.FeetOfElevation;
            case PressureUnits.Micropascals: return this.Micropascals;
            case PressureUnits.Millipascals: return this.Millipascals;
            case PressureUnits.Decapascals: return this.Decapascals;
            case PressureUnits.Hectopascals: return this.Hectopascals;
            case PressureUnits.Kilopascals: return this.Kilopascals;
            case PressureUnits.Megapascals: return this.Megapascals;
            case PressureUnits.Gigapascals: return this.Gigapascals;
            case PressureUnits.Microbars: return this.Microbars;
            case PressureUnits.Millibars: return this.Millibars;
            case PressureUnits.Centibars: return this.Centibars;
            case PressureUnits.Decibars: return this.Decibars;
            case PressureUnits.Kilobars: return this.Kilobars;
            case PressureUnits.Megabars: return this.Megabars;
            case PressureUnits.KilonewtonsPerSquareMeter: return this.KilonewtonsPerSquareMeter;
            case PressureUnits.MeganewtonsPerSquareMeter: return this.MeganewtonsPerSquareMeter;
            case PressureUnits.KilonewtonsPerSquareCentimeter: return this.KilonewtonsPerSquareCentimeter;
            case PressureUnits.KilonewtonsPerSquareMillimeter: return this.KilonewtonsPerSquareMillimeter;
            case PressureUnits.KilopoundsForcePerSquareInch: return this.KilopoundsForcePerSquareInch;
            case PressureUnits.KilopoundsForcePerSquareMil: return this.KilopoundsForcePerSquareMil;
            case PressureUnits.KilopoundsForcePerSquareFoot: return this.KilopoundsForcePerSquareFoot;
            case PressureUnits.MillimetersOfWaterColumn: return this.MillimetersOfWaterColumn;
            case PressureUnits.CentimetersOfWaterColumn: return this.CentimetersOfWaterColumn;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: PressureUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case PressureUnits.Pascals: return this.value;
                case PressureUnits.Atmospheres: {
                    const v4 = super.internalMultiply(1.01325, 1e5);
                    return super.internalDivide(this.value, v4);
                }
                case PressureUnits.Bars: return super.internalDivide(this.value, 1e5);
                case PressureUnits.KilogramsForcePerSquareMeter: return super.internalMultiply(this.value, 0.101971619222242);
                case PressureUnits.KilogramsForcePerSquareCentimeter: return super.internalDivide(this.value, 9.80665e4);
                case PressureUnits.KilogramsForcePerSquareMillimeter: return super.internalDivide(this.value, 9.80665e6);
                case PressureUnits.NewtonsPerSquareMeter: return this.value;
                case PressureUnits.NewtonsPerSquareCentimeter: return super.internalDivide(this.value, 1e4);
                case PressureUnits.NewtonsPerSquareMillimeter: return super.internalDivide(this.value, 1e6);
                case PressureUnits.TechnicalAtmospheres: {
                    const v4 = super.internalMultiply(9.80680592331, 1e4);
                    return super.internalDivide(this.value, v4);
                }
                case PressureUnits.Torrs: {
                    const v4 = super.internalMultiply(1.3332266752, 1e2);
                    return super.internalDivide(this.value, v4);
                }
                case PressureUnits.PoundsForcePerSquareInch: return super.internalDivide(this.value, 6.894757293168361e3);
                case PressureUnits.PoundsForcePerSquareMil: return super.internalDivide(this.value, 6.894757293168361e9);
                case PressureUnits.PoundsForcePerSquareFoot: return super.internalDivide(this.value, 4.788025898033584e1);
                case PressureUnits.TonnesForcePerSquareMillimeter: return super.internalDivide(this.value, 9.80665e9);
                case PressureUnits.TonnesForcePerSquareMeter: return super.internalDivide(this.value, 9.80665e3);
                case PressureUnits.MetersOfHead: return super.internalMultiply(this.value, 0.0001019977334);
                case PressureUnits.TonnesForcePerSquareCentimeter: return super.internalDivide(this.value, 9.80665e7);
                case PressureUnits.FeetOfHead: return super.internalMultiply(this.value, 0.000334552565551);
                case PressureUnits.MillimetersOfMercury: return super.internalMultiply(this.value, 7.50061561302643e-3);
                case PressureUnits.InchesOfMercury: return super.internalMultiply(this.value, 2.95299830714159e-4);
                case PressureUnits.DynesPerSquareCentimeter: return super.internalDivide(this.value, 1.0e-1);
                case PressureUnits.PoundsPerInchSecondSquared: return super.internalDivide(this.value, 1.785796732283465e1);
                case PressureUnits.MetersOfWaterColumn: return super.internalDivide(this.value, 9.806650000000272e3);
                case PressureUnits.InchesOfWaterColumn: return super.internalDivide(this.value, 249.08890833333);
                case PressureUnits.MetersOfElevation: {
                    const v4 = super.internalDivide(this.value, 101325.0);
                    const v6 = super.internalPow(v4, 0.190284);
                    const v7 = super.internalSubtract(1.0, v6);
                    return super.internalMultiply(v7, 44307.69396);
                }
                case PressureUnits.FeetOfElevation: {
                    const v4 = super.internalDivide(this.value, 101325.0);
                    const v6 = super.internalPow(v4, 0.190284);
                    const v7 = super.internalSubtract(1.0, v6);
                    return super.internalMultiply(v7, 145366.45);
                }
                case PressureUnits.Micropascals: return super.internalDivide(this.value, 0.000001);
                case PressureUnits.Millipascals: return super.internalDivide(this.value, 0.001);
                case PressureUnits.Decapascals: return super.internalDivide(this.value, 10);
                case PressureUnits.Hectopascals: return super.internalDivide(this.value, 100);
                case PressureUnits.Kilopascals: return super.internalDivide(this.value, 1000);
                case PressureUnits.Megapascals: return super.internalDivide(this.value, 1000000);
                case PressureUnits.Gigapascals: return super.internalDivide(this.value, 1000000000);
                case PressureUnits.Microbars: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 0.000001);
                }
                case PressureUnits.Millibars: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 0.001);
                }
                case PressureUnits.Centibars: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 0.01);
                }
                case PressureUnits.Decibars: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 0.1);
                }
                case PressureUnits.Kilobars: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 1000);
                }
                case PressureUnits.Megabars: {
                    const v3 = super.internalDivide(this.value, 1e5);
                    return super.internalDivide(v3, 1000000);
                }
                case PressureUnits.KilonewtonsPerSquareMeter: return super.internalDivide(this.value, 1000);
                case PressureUnits.MeganewtonsPerSquareMeter: return super.internalDivide(this.value, 1000000);
                case PressureUnits.KilonewtonsPerSquareCentimeter: {
                    const v3 = super.internalDivide(this.value, 1e4);
                    return super.internalDivide(v3, 1000);
                }
                case PressureUnits.KilonewtonsPerSquareMillimeter: {
                    const v3 = super.internalDivide(this.value, 1e6);
                    return super.internalDivide(v3, 1000);
                }
                case PressureUnits.KilopoundsForcePerSquareInch: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e3);
                    return super.internalDivide(v3, 1000);
                }
                case PressureUnits.KilopoundsForcePerSquareMil: {
                    const v3 = super.internalDivide(this.value, 6.894757293168361e9);
                    return super.internalDivide(v3, 1000);
                }
                case PressureUnits.KilopoundsForcePerSquareFoot: {
                    const v3 = super.internalDivide(this.value, 4.788025898033584e1);
                    return super.internalDivide(v3, 1000);
                }
                case PressureUnits.MillimetersOfWaterColumn: {
                    const v3 = super.internalDivide(this.value, 9.806650000000272e3);
                    return super.internalDivide(v3, 0.001);
                }
                case PressureUnits.CentimetersOfWaterColumn: {
                    const v3 = super.internalDivide(this.value, 9.806650000000272e3);
                    return super.internalDivide(v3, 0.01);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case PressureUnits.Pascals: return this.value;
            case PressureUnits.Atmospheres: return this.value / (1.01325 * 1e5);
            case PressureUnits.Bars: return this.value / 1e5;
            case PressureUnits.KilogramsForcePerSquareMeter: return this.value * 0.101971619222242;
            case PressureUnits.KilogramsForcePerSquareCentimeter: return this.value / 9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter: return this.value / 9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter: return this.value;
            case PressureUnits.NewtonsPerSquareCentimeter: return this.value / 1e4;
            case PressureUnits.NewtonsPerSquareMillimeter: return this.value / 1e6;
            case PressureUnits.TechnicalAtmospheres: return this.value / (9.80680592331 * 1e4);
            case PressureUnits.Torrs: return this.value / (1.3332266752 * 1e2);
            case PressureUnits.PoundsForcePerSquareInch: return this.value / 6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareMil: return this.value / 6.894757293168361e9;
            case PressureUnits.PoundsForcePerSquareFoot: return this.value / 4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter: return this.value / 9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter: return this.value / 9.80665e3;
            case PressureUnits.MetersOfHead: return this.value * 0.0001019977334;
            case PressureUnits.TonnesForcePerSquareCentimeter: return this.value / 9.80665e7;
            case PressureUnits.FeetOfHead: return this.value * 0.000334552565551;
            case PressureUnits.MillimetersOfMercury: return this.value * 7.50061561302643e-3;
            case PressureUnits.InchesOfMercury: return this.value * 2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter: return this.value / 1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared: return this.value / 1.785796732283465e1;
            case PressureUnits.MetersOfWaterColumn: return this.value / 9.806650000000272e3;
            case PressureUnits.InchesOfWaterColumn: return this.value / 249.08890833333;
            case PressureUnits.MetersOfElevation: return (1.0 - Math.pow(this.value / 101325.0, 0.190284)) * 44307.69396;
            case PressureUnits.FeetOfElevation: return (1.0 - Math.pow(this.value / 101325.0, 0.190284)) * 145366.45;
            case PressureUnits.Micropascals: return (this.value) / 0.000001;
            case PressureUnits.Millipascals: return (this.value) / 0.001;
            case PressureUnits.Decapascals: return (this.value) / 10;
            case PressureUnits.Hectopascals: return (this.value) / 100;
            case PressureUnits.Kilopascals: return (this.value) / 1000;
            case PressureUnits.Megapascals: return (this.value) / 1000000;
            case PressureUnits.Gigapascals: return (this.value) / 1000000000;
            case PressureUnits.Microbars: return (this.value / 1e5) / 0.000001;
            case PressureUnits.Millibars: return (this.value / 1e5) / 0.001;
            case PressureUnits.Centibars: return (this.value / 1e5) / 0.01;
            case PressureUnits.Decibars: return (this.value / 1e5) / 0.1;
            case PressureUnits.Kilobars: return (this.value / 1e5) / 1000;
            case PressureUnits.Megabars: return (this.value / 1e5) / 1000000;
            case PressureUnits.KilonewtonsPerSquareMeter: return (this.value) / 1000;
            case PressureUnits.MeganewtonsPerSquareMeter: return (this.value) / 1000000;
            case PressureUnits.KilonewtonsPerSquareCentimeter: return (this.value / 1e4) / 1000;
            case PressureUnits.KilonewtonsPerSquareMillimeter: return (this.value / 1e6) / 1000;
            case PressureUnits.KilopoundsForcePerSquareInch: return (this.value / 6.894757293168361e3) / 1000;
            case PressureUnits.KilopoundsForcePerSquareMil: return (this.value / 6.894757293168361e9) / 1000;
            case PressureUnits.KilopoundsForcePerSquareFoot: return (this.value / 4.788025898033584e1) / 1000;
            case PressureUnits.MillimetersOfWaterColumn: return (this.value / 9.806650000000272e3) / 0.001;
            case PressureUnits.CentimetersOfWaterColumn: return (this.value / 9.806650000000272e3) / 0.01;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: PressureUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case PressureUnits.Pascals: return value;
                case PressureUnits.Atmospheres: {
                    const v3 = super.internalMultiply(value, 1.01325);
                    return super.internalMultiply(v3, 1e5);
                }
                case PressureUnits.Bars: return super.internalMultiply(value, 1e5);
                case PressureUnits.KilogramsForcePerSquareMeter: return super.internalMultiply(value, 9.80665019960652);
                case PressureUnits.KilogramsForcePerSquareCentimeter: return super.internalMultiply(value, 9.80665e4);
                case PressureUnits.KilogramsForcePerSquareMillimeter: return super.internalMultiply(value, 9.80665e6);
                case PressureUnits.NewtonsPerSquareMeter: return value;
                case PressureUnits.NewtonsPerSquareCentimeter: return super.internalMultiply(value, 1e4);
                case PressureUnits.NewtonsPerSquareMillimeter: return super.internalMultiply(value, 1e6);
                case PressureUnits.TechnicalAtmospheres: {
                    const v3 = super.internalMultiply(value, 9.80680592331);
                    return super.internalMultiply(v3, 1e4);
                }
                case PressureUnits.Torrs: {
                    const v3 = super.internalMultiply(value, 1.3332266752);
                    return super.internalMultiply(v3, 1e2);
                }
                case PressureUnits.PoundsForcePerSquareInch: return super.internalMultiply(value, 6.894757293168361e3);
                case PressureUnits.PoundsForcePerSquareMil: return super.internalMultiply(value, 6.894757293168361e9);
                case PressureUnits.PoundsForcePerSquareFoot: return super.internalMultiply(value, 4.788025898033584e1);
                case PressureUnits.TonnesForcePerSquareMillimeter: return super.internalMultiply(value, 9.80665e9);
                case PressureUnits.TonnesForcePerSquareMeter: return super.internalMultiply(value, 9.80665e3);
                case PressureUnits.MetersOfHead: return super.internalMultiply(value, 9804.139432);
                case PressureUnits.TonnesForcePerSquareCentimeter: return super.internalMultiply(value, 9.80665e7);
                case PressureUnits.FeetOfHead: return super.internalMultiply(value, 2989.0669);
                case PressureUnits.MillimetersOfMercury: return super.internalDivide(value, 7.50061561302643e-3);
                case PressureUnits.InchesOfMercury: return super.internalDivide(value, 2.95299830714159e-4);
                case PressureUnits.DynesPerSquareCentimeter: return super.internalMultiply(value, 1.0e-1);
                case PressureUnits.PoundsPerInchSecondSquared: return super.internalMultiply(value, 1.785796732283465e1);
                case PressureUnits.MetersOfWaterColumn: return super.internalMultiply(value, 9.806650000000272e3);
                case PressureUnits.InchesOfWaterColumn: return super.internalMultiply(value, 249.08890833333);
                case PressureUnits.MetersOfElevation: {
                    const v4 = super.internalDivide(value, 44307.69396);
                    const v5 = super.internalSubtract(1.0, v4);
                    const v7 = super.internalPow(v5, 5.2553026003237266401799415610351);
                    return super.internalMultiply(v7, 101325.0);
                }
                case PressureUnits.FeetOfElevation: {
                    const v4 = super.internalDivide(value, 145366.45);
                    const v5 = super.internalSubtract(1.0, v4);
                    const v7 = super.internalPow(v5, 5.2553026003237266401799415610351);
                    return super.internalMultiply(v7, 101325.0);
                }
                case PressureUnits.Micropascals: return super.internalMultiply(value, 0.000001);
                case PressureUnits.Millipascals: return super.internalMultiply(value, 0.001);
                case PressureUnits.Decapascals: return super.internalMultiply(value, 10);
                case PressureUnits.Hectopascals: return super.internalMultiply(value, 100);
                case PressureUnits.Kilopascals: return super.internalMultiply(value, 1000);
                case PressureUnits.Megapascals: return super.internalMultiply(value, 1000000);
                case PressureUnits.Gigapascals: return super.internalMultiply(value, 1000000000);
                case PressureUnits.Microbars: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 0.000001);
                }
                case PressureUnits.Millibars: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 0.001);
                }
                case PressureUnits.Centibars: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 0.01);
                }
                case PressureUnits.Decibars: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 0.1);
                }
                case PressureUnits.Kilobars: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureUnits.Megabars: {
                    const v3 = super.internalMultiply(value, 1e5);
                    return super.internalMultiply(v3, 1000000);
                }
                case PressureUnits.KilonewtonsPerSquareMeter: return super.internalMultiply(value, 1000);
                case PressureUnits.MeganewtonsPerSquareMeter: return super.internalMultiply(value, 1000000);
                case PressureUnits.KilonewtonsPerSquareCentimeter: {
                    const v3 = super.internalMultiply(value, 1e4);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureUnits.KilonewtonsPerSquareMillimeter: {
                    const v3 = super.internalMultiply(value, 1e6);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureUnits.KilopoundsForcePerSquareInch: {
                    const v3 = super.internalMultiply(value, 6.894757293168361e3);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureUnits.KilopoundsForcePerSquareMil: {
                    const v3 = super.internalMultiply(value, 6.894757293168361e9);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureUnits.KilopoundsForcePerSquareFoot: {
                    const v3 = super.internalMultiply(value, 4.788025898033584e1);
                    return super.internalMultiply(v3, 1000);
                }
                case PressureUnits.MillimetersOfWaterColumn: {
                    const v3 = super.internalMultiply(value, 9.806650000000272e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case PressureUnits.CentimetersOfWaterColumn: {
                    const v3 = super.internalMultiply(value, 9.806650000000272e3);
                    return super.internalMultiply(v3, 0.01);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case PressureUnits.Pascals: return value;
            case PressureUnits.Atmospheres: return value * 1.01325 * 1e5;
            case PressureUnits.Bars: return value * 1e5;
            case PressureUnits.KilogramsForcePerSquareMeter: return value * 9.80665019960652;
            case PressureUnits.KilogramsForcePerSquareCentimeter: return value * 9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter: return value * 9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter: return value;
            case PressureUnits.NewtonsPerSquareCentimeter: return value * 1e4;
            case PressureUnits.NewtonsPerSquareMillimeter: return value * 1e6;
            case PressureUnits.TechnicalAtmospheres: return value * 9.80680592331 * 1e4;
            case PressureUnits.Torrs: return value * 1.3332266752 * 1e2;
            case PressureUnits.PoundsForcePerSquareInch: return value * 6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareMil: return value * 6.894757293168361e9;
            case PressureUnits.PoundsForcePerSquareFoot: return value * 4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter: return value * 9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter: return value * 9.80665e3;
            case PressureUnits.MetersOfHead: return value * 9804.139432;
            case PressureUnits.TonnesForcePerSquareCentimeter: return value * 9.80665e7;
            case PressureUnits.FeetOfHead: return value * 2989.0669;
            case PressureUnits.MillimetersOfMercury: return value / 7.50061561302643e-3;
            case PressureUnits.InchesOfMercury: return value / 2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter: return value * 1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared: return value * 1.785796732283465e1;
            case PressureUnits.MetersOfWaterColumn: return value * 9.806650000000272e3;
            case PressureUnits.InchesOfWaterColumn: return value * 249.08890833333;
            case PressureUnits.MetersOfElevation: return Math.pow(1.0 - (value / 44307.69396), 5.2553026003237266401799415610351) * 101325.0;
            case PressureUnits.FeetOfElevation: return Math.pow(1.0 - (value / 145366.45), 5.2553026003237266401799415610351) * 101325.0;
            case PressureUnits.Micropascals: return (value) * 0.000001;
            case PressureUnits.Millipascals: return (value) * 0.001;
            case PressureUnits.Decapascals: return (value) * 10;
            case PressureUnits.Hectopascals: return (value) * 100;
            case PressureUnits.Kilopascals: return (value) * 1000;
            case PressureUnits.Megapascals: return (value) * 1000000;
            case PressureUnits.Gigapascals: return (value) * 1000000000;
            case PressureUnits.Microbars: return (value * 1e5) * 0.000001;
            case PressureUnits.Millibars: return (value * 1e5) * 0.001;
            case PressureUnits.Centibars: return (value * 1e5) * 0.01;
            case PressureUnits.Decibars: return (value * 1e5) * 0.1;
            case PressureUnits.Kilobars: return (value * 1e5) * 1000;
            case PressureUnits.Megabars: return (value * 1e5) * 1000000;
            case PressureUnits.KilonewtonsPerSquareMeter: return (value) * 1000;
            case PressureUnits.MeganewtonsPerSquareMeter: return (value) * 1000000;
            case PressureUnits.KilonewtonsPerSquareCentimeter: return (value * 1e4) * 1000;
            case PressureUnits.KilonewtonsPerSquareMillimeter: return (value * 1e6) * 1000;
            case PressureUnits.KilopoundsForcePerSquareInch: return (value * 6.894757293168361e3) * 1000;
            case PressureUnits.KilopoundsForcePerSquareMil: return (value * 6.894757293168361e9) * 1000;
            case PressureUnits.KilopoundsForcePerSquareFoot: return (value * 4.788025898033584e1) * 1000;
            case PressureUnits.MillimetersOfWaterColumn: return (value * 9.806650000000272e3) * 0.001;
            case PressureUnits.CentimetersOfWaterColumn: return (value * 9.806650000000272e3) * 0.01;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Pressure to string.
     * Note! the default format for Pressure is Pascals.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Pressure.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Pressure.
     */
    public toString(unit: PressureUnits = PressureUnits.Pascals, fractionalDigits?: number): string {

        switch (unit) {
            
            case PressureUnits.Pascals:
                return super.truncateFractionDigits(this.Pascals, fractionalDigits) + ` Pa`;
            case PressureUnits.Atmospheres:
                return super.truncateFractionDigits(this.Atmospheres, fractionalDigits) + ` atm`;
            case PressureUnits.Bars:
                return super.truncateFractionDigits(this.Bars, fractionalDigits) + ` bar`;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return super.truncateFractionDigits(this.KilogramsForcePerSquareMeter, fractionalDigits) + ` kgf/m²`;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return super.truncateFractionDigits(this.KilogramsForcePerSquareCentimeter, fractionalDigits) + ` kgf/cm²`;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return super.truncateFractionDigits(this.KilogramsForcePerSquareMillimeter, fractionalDigits) + ` kgf/mm²`;
            case PressureUnits.NewtonsPerSquareMeter:
                return super.truncateFractionDigits(this.NewtonsPerSquareMeter, fractionalDigits) + ` N/m²`;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return super.truncateFractionDigits(this.NewtonsPerSquareCentimeter, fractionalDigits) + ` N/cm²`;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return super.truncateFractionDigits(this.NewtonsPerSquareMillimeter, fractionalDigits) + ` N/mm²`;
            case PressureUnits.TechnicalAtmospheres:
                return super.truncateFractionDigits(this.TechnicalAtmospheres, fractionalDigits) + ` at`;
            case PressureUnits.Torrs:
                return super.truncateFractionDigits(this.Torrs, fractionalDigits) + ` torr`;
            case PressureUnits.PoundsForcePerSquareInch:
                return super.truncateFractionDigits(this.PoundsForcePerSquareInch, fractionalDigits) + ` psi`;
            case PressureUnits.PoundsForcePerSquareMil:
                return super.truncateFractionDigits(this.PoundsForcePerSquareMil, fractionalDigits) + ` lb/mil²`;
            case PressureUnits.PoundsForcePerSquareFoot:
                return super.truncateFractionDigits(this.PoundsForcePerSquareFoot, fractionalDigits) + ` lb/ft²`;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return super.truncateFractionDigits(this.TonnesForcePerSquareMillimeter, fractionalDigits) + ` tf/mm²`;
            case PressureUnits.TonnesForcePerSquareMeter:
                return super.truncateFractionDigits(this.TonnesForcePerSquareMeter, fractionalDigits) + ` tf/m²`;
            case PressureUnits.MetersOfHead:
                return super.truncateFractionDigits(this.MetersOfHead, fractionalDigits) + ` m of head`;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return super.truncateFractionDigits(this.TonnesForcePerSquareCentimeter, fractionalDigits) + ` tf/cm²`;
            case PressureUnits.FeetOfHead:
                return super.truncateFractionDigits(this.FeetOfHead, fractionalDigits) + ` ft of head`;
            case PressureUnits.MillimetersOfMercury:
                return super.truncateFractionDigits(this.MillimetersOfMercury, fractionalDigits) + ` mmHg`;
            case PressureUnits.InchesOfMercury:
                return super.truncateFractionDigits(this.InchesOfMercury, fractionalDigits) + ` inHg`;
            case PressureUnits.DynesPerSquareCentimeter:
                return super.truncateFractionDigits(this.DynesPerSquareCentimeter, fractionalDigits) + ` dyn/cm²`;
            case PressureUnits.PoundsPerInchSecondSquared:
                return super.truncateFractionDigits(this.PoundsPerInchSecondSquared, fractionalDigits) + ` lbm/(in·s²)`;
            case PressureUnits.MetersOfWaterColumn:
                return super.truncateFractionDigits(this.MetersOfWaterColumn, fractionalDigits) + ` mH₂O`;
            case PressureUnits.InchesOfWaterColumn:
                return super.truncateFractionDigits(this.InchesOfWaterColumn, fractionalDigits) + ` inH2O`;
            case PressureUnits.MetersOfElevation:
                return super.truncateFractionDigits(this.MetersOfElevation, fractionalDigits) + ` m of elevation`;
            case PressureUnits.FeetOfElevation:
                return super.truncateFractionDigits(this.FeetOfElevation, fractionalDigits) + ` ft of elevation`;
            case PressureUnits.Micropascals:
                return super.truncateFractionDigits(this.Micropascals, fractionalDigits) + ` μPa`;
            case PressureUnits.Millipascals:
                return super.truncateFractionDigits(this.Millipascals, fractionalDigits) + ` mPa`;
            case PressureUnits.Decapascals:
                return super.truncateFractionDigits(this.Decapascals, fractionalDigits) + ` daPa`;
            case PressureUnits.Hectopascals:
                return super.truncateFractionDigits(this.Hectopascals, fractionalDigits) + ` hPa`;
            case PressureUnits.Kilopascals:
                return super.truncateFractionDigits(this.Kilopascals, fractionalDigits) + ` kPa`;
            case PressureUnits.Megapascals:
                return super.truncateFractionDigits(this.Megapascals, fractionalDigits) + ` MPa`;
            case PressureUnits.Gigapascals:
                return super.truncateFractionDigits(this.Gigapascals, fractionalDigits) + ` GPa`;
            case PressureUnits.Microbars:
                return super.truncateFractionDigits(this.Microbars, fractionalDigits) + ` μbar`;
            case PressureUnits.Millibars:
                return super.truncateFractionDigits(this.Millibars, fractionalDigits) + ` mbar`;
            case PressureUnits.Centibars:
                return super.truncateFractionDigits(this.Centibars, fractionalDigits) + ` cbar`;
            case PressureUnits.Decibars:
                return super.truncateFractionDigits(this.Decibars, fractionalDigits) + ` dbar`;
            case PressureUnits.Kilobars:
                return super.truncateFractionDigits(this.Kilobars, fractionalDigits) + ` kbar`;
            case PressureUnits.Megabars:
                return super.truncateFractionDigits(this.Megabars, fractionalDigits) + ` Mbar`;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return super.truncateFractionDigits(this.KilonewtonsPerSquareMeter, fractionalDigits) + ` kN/m²`;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return super.truncateFractionDigits(this.MeganewtonsPerSquareMeter, fractionalDigits) + ` MN/m²`;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return super.truncateFractionDigits(this.KilonewtonsPerSquareCentimeter, fractionalDigits) + ` kN/cm²`;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return super.truncateFractionDigits(this.KilonewtonsPerSquareMillimeter, fractionalDigits) + ` kN/mm²`;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return super.truncateFractionDigits(this.KilopoundsForcePerSquareInch, fractionalDigits) + ` kpsi`;
            case PressureUnits.KilopoundsForcePerSquareMil:
                return super.truncateFractionDigits(this.KilopoundsForcePerSquareMil, fractionalDigits) + ` klb/mil²`;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return super.truncateFractionDigits(this.KilopoundsForcePerSquareFoot, fractionalDigits) + ` klb/ft²`;
            case PressureUnits.MillimetersOfWaterColumn:
                return super.truncateFractionDigits(this.MillimetersOfWaterColumn, fractionalDigits) + ` mmH₂O`;
            case PressureUnits.CentimetersOfWaterColumn:
                return super.truncateFractionDigits(this.CentimetersOfWaterColumn, fractionalDigits) + ` cmH₂O`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Pressure unit abbreviation.
     * Note! the default abbreviation for Pressure is Pascals.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Pressure.
     * @returns The abbreviation string of Pressure.
     */
    public getUnitAbbreviation(unitAbbreviation: PressureUnits = PressureUnits.Pascals): string {

        switch (unitAbbreviation) {
            
            case PressureUnits.Pascals:
                return `Pa`;
            case PressureUnits.Atmospheres:
                return `atm`;
            case PressureUnits.Bars:
                return `bar`;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return `kgf/m²`;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return `kgf/cm²`;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return `kgf/mm²`;
            case PressureUnits.NewtonsPerSquareMeter:
                return `N/m²`;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return `N/cm²`;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return `N/mm²`;
            case PressureUnits.TechnicalAtmospheres:
                return `at`;
            case PressureUnits.Torrs:
                return `torr`;
            case PressureUnits.PoundsForcePerSquareInch:
                return `psi`;
            case PressureUnits.PoundsForcePerSquareMil:
                return `lb/mil²`;
            case PressureUnits.PoundsForcePerSquareFoot:
                return `lb/ft²`;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return `tf/mm²`;
            case PressureUnits.TonnesForcePerSquareMeter:
                return `tf/m²`;
            case PressureUnits.MetersOfHead:
                return `m of head`;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return `tf/cm²`;
            case PressureUnits.FeetOfHead:
                return `ft of head`;
            case PressureUnits.MillimetersOfMercury:
                return `mmHg`;
            case PressureUnits.InchesOfMercury:
                return `inHg`;
            case PressureUnits.DynesPerSquareCentimeter:
                return `dyn/cm²`;
            case PressureUnits.PoundsPerInchSecondSquared:
                return `lbm/(in·s²)`;
            case PressureUnits.MetersOfWaterColumn:
                return `mH₂O`;
            case PressureUnits.InchesOfWaterColumn:
                return `inH2O`;
            case PressureUnits.MetersOfElevation:
                return `m of elevation`;
            case PressureUnits.FeetOfElevation:
                return `ft of elevation`;
            case PressureUnits.Micropascals:
                return `μPa`;
            case PressureUnits.Millipascals:
                return `mPa`;
            case PressureUnits.Decapascals:
                return `daPa`;
            case PressureUnits.Hectopascals:
                return `hPa`;
            case PressureUnits.Kilopascals:
                return `kPa`;
            case PressureUnits.Megapascals:
                return `MPa`;
            case PressureUnits.Gigapascals:
                return `GPa`;
            case PressureUnits.Microbars:
                return `μbar`;
            case PressureUnits.Millibars:
                return `mbar`;
            case PressureUnits.Centibars:
                return `cbar`;
            case PressureUnits.Decibars:
                return `dbar`;
            case PressureUnits.Kilobars:
                return `kbar`;
            case PressureUnits.Megabars:
                return `Mbar`;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return `kN/m²`;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return `MN/m²`;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return `kN/cm²`;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return `kN/mm²`;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return `kpsi`;
            case PressureUnits.KilopoundsForcePerSquareMil:
                return `klb/mil²`;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return `klb/ft²`;
            case PressureUnits.MillimetersOfWaterColumn:
                return `mmH₂O`;
            case PressureUnits.CentimetersOfWaterColumn:
                return `cmH₂O`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Pressure are equals to the current Pressure.
     * @param pressure The other Pressure.
     * @returns True if the given Pressure are equal to the current Pressure.
     */
    public equals(pressure: Pressure): boolean {
        return super.internalEquals(this.value, pressure.BaseValue);
    }

    /**
     * Compare the given Pressure against the current Pressure.
     * @param pressure The other Pressure.
     * @returns 0 if they are equal, -1 if the current Pressure is less then other, 1 if the current Pressure is greater then other.
     */
    public compareTo(pressure: Pressure): number {
        return super.internalCompareTo(this.value, pressure.BaseValue);
    }

    /**
     * Add the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public add(pressure: Pressure): Pressure {
        return new Pressure(super.internalAdd(this.value, pressure.BaseValue))
    }

    /**
     * Subtract the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public subtract(pressure: Pressure): Pressure {
        return new Pressure(super.internalSubtract(this.value, pressure.BaseValue))
    }

    /**
     * Multiply the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public multiply(pressure: Pressure): Pressure {
        return new Pressure(super.internalMultiply(this.value, pressure.BaseValue))
    }

    /**
     * Divide the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public divide(pressure: Pressure): Pressure {
        return new Pressure(super.internalDivide(this.value, pressure.BaseValue))
    }

    /**
     * Modulo the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public modulo(pressure: Pressure): Pressure {
        return new Pressure(super.internalModulo(this.value, pressure.BaseValue))
    }

    /**
     * Pow the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public pow(pressure: Pressure): Pressure {
        return new Pressure(super.internalPow(this.value, pressure.BaseValue))
    }
}
