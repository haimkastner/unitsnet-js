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
export class Pressure {
    private value: number;
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

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Pressure is Pascals.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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
        return NaN;
    }

    private convertFromBase(toUnit: PressureUnits): number {
        switch (toUnit) {
                
            case PressureUnits.Pascals:
                return this.value;
            case PressureUnits.Atmospheres:
                return this.value / (1.01325 * 1e5);
            case PressureUnits.Bars:
                return this.value / 1e5;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return this.value * 0.101971619222242;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return this.value / 9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return this.value / 9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter:
                return this.value;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return this.value / 1e4;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return this.value / 1e6;
            case PressureUnits.TechnicalAtmospheres:
                return this.value / (9.80680592331 * 1e4);
            case PressureUnits.Torrs:
                return this.value / (1.3332266752 * 1e2);
            case PressureUnits.PoundsForcePerSquareInch:
                return this.value / 6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareMil:
                return this.value / 6.894757293168361e9;
            case PressureUnits.PoundsForcePerSquareFoot:
                return this.value / 4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return this.value / 9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter:
                return this.value / 9.80665e3;
            case PressureUnits.MetersOfHead:
                return this.value * 0.0001019977334;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return this.value / 9.80665e7;
            case PressureUnits.FeetOfHead:
                return this.value * 0.000334552565551;
            case PressureUnits.MillimetersOfMercury:
                return this.value * 7.50061561302643e-3;
            case PressureUnits.InchesOfMercury:
                return this.value * 2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter:
                return this.value / 1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared:
                return this.value / 1.785796732283465e1;
            case PressureUnits.MetersOfWaterColumn:
                return this.value / 9.806650000000272e3;
            case PressureUnits.InchesOfWaterColumn:
                return this.value / 249.08890833333;
            case PressureUnits.MetersOfElevation:
                return (1.0 - Math.pow(this.value / 101325.0, 0.190284)) * 44307.69396;
            case PressureUnits.FeetOfElevation:
                return (1.0 - Math.pow(this.value / 101325.0, 0.190284)) * 145366.45;
            case PressureUnits.Micropascals:
                return (this.value) / 0.000001;
            case PressureUnits.Millipascals:
                return (this.value) / 0.001;
            case PressureUnits.Decapascals:
                return (this.value) / 10;
            case PressureUnits.Hectopascals:
                return (this.value) / 100;
            case PressureUnits.Kilopascals:
                return (this.value) / 1000;
            case PressureUnits.Megapascals:
                return (this.value) / 1000000;
            case PressureUnits.Gigapascals:
                return (this.value) / 1000000000;
            case PressureUnits.Microbars:
                return (this.value / 1e5) / 0.000001;
            case PressureUnits.Millibars:
                return (this.value / 1e5) / 0.001;
            case PressureUnits.Centibars:
                return (this.value / 1e5) / 0.01;
            case PressureUnits.Decibars:
                return (this.value / 1e5) / 0.1;
            case PressureUnits.Kilobars:
                return (this.value / 1e5) / 1000;
            case PressureUnits.Megabars:
                return (this.value / 1e5) / 1000000;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return (this.value) / 1000;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return (this.value) / 1000000;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return (this.value / 1e4) / 1000;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return (this.value / 1e6) / 1000;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return (this.value / 6.894757293168361e3) / 1000;
            case PressureUnits.KilopoundsForcePerSquareMil:
                return (this.value / 6.894757293168361e9) / 1000;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return (this.value / 4.788025898033584e1) / 1000;
            case PressureUnits.MillimetersOfWaterColumn:
                return (this.value / 9.806650000000272e3) / 0.001;
            case PressureUnits.CentimetersOfWaterColumn:
                return (this.value / 9.806650000000272e3) / 0.01;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PressureUnits): number {
        switch (fromUnit) {
                
            case PressureUnits.Pascals:
                return value;
            case PressureUnits.Atmospheres:
                return value * 1.01325 * 1e5;
            case PressureUnits.Bars:
                return value * 1e5;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return value * 9.80665019960652;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return value * 9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return value * 9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter:
                return value;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return value * 1e4;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return value * 1e6;
            case PressureUnits.TechnicalAtmospheres:
                return value * 9.80680592331 * 1e4;
            case PressureUnits.Torrs:
                return value * 1.3332266752 * 1e2;
            case PressureUnits.PoundsForcePerSquareInch:
                return value * 6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareMil:
                return value * 6.894757293168361e9;
            case PressureUnits.PoundsForcePerSquareFoot:
                return value * 4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return value * 9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter:
                return value * 9.80665e3;
            case PressureUnits.MetersOfHead:
                return value * 9804.139432;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return value * 9.80665e7;
            case PressureUnits.FeetOfHead:
                return value * 2989.0669;
            case PressureUnits.MillimetersOfMercury:
                return value / 7.50061561302643e-3;
            case PressureUnits.InchesOfMercury:
                return value / 2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter:
                return value * 1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared:
                return value * 1.785796732283465e1;
            case PressureUnits.MetersOfWaterColumn:
                return value * 9.806650000000272e3;
            case PressureUnits.InchesOfWaterColumn:
                return value * 249.08890833333;
            case PressureUnits.MetersOfElevation:
                return Math.pow(1.0 - (value / 44307.69396), 5.2553026003237266401799415610351) * 101325.0;
            case PressureUnits.FeetOfElevation:
                return Math.pow(1.0 - (value / 145366.45), 5.2553026003237266401799415610351) * 101325.0;
            case PressureUnits.Micropascals:
                return (value) * 0.000001;
            case PressureUnits.Millipascals:
                return (value) * 0.001;
            case PressureUnits.Decapascals:
                return (value) * 10;
            case PressureUnits.Hectopascals:
                return (value) * 100;
            case PressureUnits.Kilopascals:
                return (value) * 1000;
            case PressureUnits.Megapascals:
                return (value) * 1000000;
            case PressureUnits.Gigapascals:
                return (value) * 1000000000;
            case PressureUnits.Microbars:
                return (value * 1e5) * 0.000001;
            case PressureUnits.Millibars:
                return (value * 1e5) * 0.001;
            case PressureUnits.Centibars:
                return (value * 1e5) * 0.01;
            case PressureUnits.Decibars:
                return (value * 1e5) * 0.1;
            case PressureUnits.Kilobars:
                return (value * 1e5) * 1000;
            case PressureUnits.Megabars:
                return (value * 1e5) * 1000000;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return (value) * 1000;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return (value) * 1000000;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return (value * 1e4) * 1000;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return (value * 1e6) * 1000;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return (value * 6.894757293168361e3) * 1000;
            case PressureUnits.KilopoundsForcePerSquareMil:
                return (value * 6.894757293168361e9) * 1000;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return (value * 4.788025898033584e1) * 1000;
            case PressureUnits.MillimetersOfWaterColumn:
                return (value * 9.806650000000272e3) * 0.001;
            case PressureUnits.CentimetersOfWaterColumn:
                return (value * 9.806650000000272e3) * 0.01;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Pressure to string.
     * Note! the default format for Pressure is Pascals.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Pressure.
     * @returns The string format of the Pressure.
     */
    public toString(unit: PressureUnits = PressureUnits.Pascals): string {

        switch (unit) {
            
            case PressureUnits.Pascals:
                return this.Pascals + ` Pa`;
            case PressureUnits.Atmospheres:
                return this.Atmospheres + ` atm`;
            case PressureUnits.Bars:
                return this.Bars + ` bar`;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return this.KilogramsForcePerSquareMeter + ` kgf/m²`;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return this.KilogramsForcePerSquareCentimeter + ` kgf/cm²`;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return this.KilogramsForcePerSquareMillimeter + ` kgf/mm²`;
            case PressureUnits.NewtonsPerSquareMeter:
                return this.NewtonsPerSquareMeter + ` N/m²`;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return this.NewtonsPerSquareCentimeter + ` N/cm²`;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return this.NewtonsPerSquareMillimeter + ` N/mm²`;
            case PressureUnits.TechnicalAtmospheres:
                return this.TechnicalAtmospheres + ` at`;
            case PressureUnits.Torrs:
                return this.Torrs + ` torr`;
            case PressureUnits.PoundsForcePerSquareInch:
                return this.PoundsForcePerSquareInch + ` psi`;
            case PressureUnits.PoundsForcePerSquareMil:
                return this.PoundsForcePerSquareMil + ` lb/mil²`;
            case PressureUnits.PoundsForcePerSquareFoot:
                return this.PoundsForcePerSquareFoot + ` lb/ft²`;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return this.TonnesForcePerSquareMillimeter + ` tf/mm²`;
            case PressureUnits.TonnesForcePerSquareMeter:
                return this.TonnesForcePerSquareMeter + ` tf/m²`;
            case PressureUnits.MetersOfHead:
                return this.MetersOfHead + ` m of head`;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return this.TonnesForcePerSquareCentimeter + ` tf/cm²`;
            case PressureUnits.FeetOfHead:
                return this.FeetOfHead + ` ft of head`;
            case PressureUnits.MillimetersOfMercury:
                return this.MillimetersOfMercury + ` mmHg`;
            case PressureUnits.InchesOfMercury:
                return this.InchesOfMercury + ` inHg`;
            case PressureUnits.DynesPerSquareCentimeter:
                return this.DynesPerSquareCentimeter + ` dyn/cm²`;
            case PressureUnits.PoundsPerInchSecondSquared:
                return this.PoundsPerInchSecondSquared + ` lbm/(in·s²)`;
            case PressureUnits.MetersOfWaterColumn:
                return this.MetersOfWaterColumn + ` mH₂O`;
            case PressureUnits.InchesOfWaterColumn:
                return this.InchesOfWaterColumn + ` inH2O`;
            case PressureUnits.MetersOfElevation:
                return this.MetersOfElevation + ` m of elevation`;
            case PressureUnits.FeetOfElevation:
                return this.FeetOfElevation + ` ft of elevation`;
            case PressureUnits.Micropascals:
                return this.Micropascals + ` μPa`;
            case PressureUnits.Millipascals:
                return this.Millipascals + ` mPa`;
            case PressureUnits.Decapascals:
                return this.Decapascals + ` daPa`;
            case PressureUnits.Hectopascals:
                return this.Hectopascals + ` hPa`;
            case PressureUnits.Kilopascals:
                return this.Kilopascals + ` kPa`;
            case PressureUnits.Megapascals:
                return this.Megapascals + ` MPa`;
            case PressureUnits.Gigapascals:
                return this.Gigapascals + ` GPa`;
            case PressureUnits.Microbars:
                return this.Microbars + ` μbar`;
            case PressureUnits.Millibars:
                return this.Millibars + ` mbar`;
            case PressureUnits.Centibars:
                return this.Centibars + ` cbar`;
            case PressureUnits.Decibars:
                return this.Decibars + ` dbar`;
            case PressureUnits.Kilobars:
                return this.Kilobars + ` kbar`;
            case PressureUnits.Megabars:
                return this.Megabars + ` Mbar`;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return this.KilonewtonsPerSquareMeter + ` kN/m²`;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return this.MeganewtonsPerSquareMeter + ` MN/m²`;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return this.KilonewtonsPerSquareCentimeter + ` kN/cm²`;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return this.KilonewtonsPerSquareMillimeter + ` kN/mm²`;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return this.KilopoundsForcePerSquareInch + ` kpsi`;
            case PressureUnits.KilopoundsForcePerSquareMil:
                return this.KilopoundsForcePerSquareMil + ` klb/mil²`;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return this.KilopoundsForcePerSquareFoot + ` klb/ft²`;
            case PressureUnits.MillimetersOfWaterColumn:
                return this.MillimetersOfWaterColumn + ` mmH₂O`;
            case PressureUnits.CentimetersOfWaterColumn:
                return this.CentimetersOfWaterColumn + ` cmH₂O`;
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
        return this.value === pressure.BaseValue;
    }

    /**
     * Compare the given Pressure against the current Pressure.
     * @param pressure The other Pressure.
     * @returns 0 if they are equal, -1 if the current Pressure is less then other, 1 if the current Pressure is greater then other.
     */
    public compareTo(pressure: Pressure): number {

        if (this.value > pressure.BaseValue)
            return 1;
        if (this.value < pressure.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public add(pressure: Pressure): Pressure {
        return new Pressure(this.value + pressure.BaseValue)
    }

    /**
     * Subtract the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public subtract(pressure: Pressure): Pressure {
        return new Pressure(this.value - pressure.BaseValue)
    }

    /**
     * Multiply the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public multiply(pressure: Pressure): Pressure {
        return new Pressure(this.value * pressure.BaseValue)
    }

    /**
     * Divide the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public divide(pressure: Pressure): Pressure {
        return new Pressure(this.value / pressure.BaseValue)
    }

    /**
     * Modulo the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public modulo(pressure: Pressure): Pressure {
        return new Pressure(this.value % pressure.BaseValue)
    }

    /**
     * Pow the given Pressure with the current Pressure.
     * @param pressure The other Pressure.
     * @returns A new Pressure instance with the results.
     */
    public pow(pressure: Pressure): Pressure {
        return new Pressure(this.value ** pressure.BaseValue)
    }
}
