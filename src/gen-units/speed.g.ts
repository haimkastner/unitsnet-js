import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Speed */
export interface SpeedDto {
    /** The value of the Speed */
    value: number;
    /**  The specific unit that the Speed value is representing */
    unit: SpeedUnits;
}

/** SpeedUnits enumeration */
export enum SpeedUnits {
    /** */
    MetersPerSecond = "MeterPerSecond",
    /** */
    MetersPerMinute = "MeterPerMinute",
    /** */
    MetersPerHour = "MeterPerHour",
    /** */
    FeetPerSecond = "FootPerSecond",
    /** */
    FeetPerMinute = "FootPerMinute",
    /** */
    FeetPerHour = "FootPerHour",
    /** */
    UsSurveyFeetPerSecond = "UsSurveyFootPerSecond",
    /** */
    UsSurveyFeetPerMinute = "UsSurveyFootPerMinute",
    /** */
    UsSurveyFeetPerHour = "UsSurveyFootPerHour",
    /** */
    InchesPerSecond = "InchPerSecond",
    /** */
    InchesPerMinute = "InchPerMinute",
    /** */
    InchesPerHour = "InchPerHour",
    /** */
    YardsPerSecond = "YardPerSecond",
    /** */
    YardsPerMinute = "YardPerMinute",
    /** */
    YardsPerHour = "YardPerHour",
    /** The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970. */
    Knots = "Knot",
    /** */
    MilesPerHour = "MilePerHour",
    /** */
    Mach = "Mach",
    /** */
    NanometersPerSecond = "NanometerPerSecond",
    /** */
    MicrometersPerSecond = "MicrometerPerSecond",
    /** */
    MillimetersPerSecond = "MillimeterPerSecond",
    /** */
    CentimetersPerSecond = "CentimeterPerSecond",
    /** */
    DecimetersPerSecond = "DecimeterPerSecond",
    /** */
    KilometersPerSecond = "KilometerPerSecond",
    /** */
    NanometersPerMinute = "NanometerPerMinute",
    /** */
    MicrometersPerMinute = "MicrometerPerMinute",
    /** */
    MillimetersPerMinute = "MillimeterPerMinute",
    /** */
    CentimetersPerMinute = "CentimeterPerMinute",
    /** */
    DecimetersPerMinute = "DecimeterPerMinute",
    /** */
    KilometersPerMinute = "KilometerPerMinute",
    /** */
    MillimetersPerHour = "MillimeterPerHour",
    /** */
    CentimetersPerHour = "CentimeterPerHour",
    /** */
    KilometersPerHour = "KilometerPerHour"
}

/** In everyday use and in kinematics, the speed of an object is the magnitude of its velocity (the rate of change of its position); it is thus a scalar quantity.[1] The average speed of an object in an interval of time is the distance travelled by the object divided by the duration of the interval;[2] the instantaneous speed is the limit of the average speed as the duration of the time interval approaches zero. */
export class Speed extends BaseUnit {
    protected value: number;
    private meterspersecondLazy: number | null = null;
    private metersperminuteLazy: number | null = null;
    private metersperhourLazy: number | null = null;
    private feetpersecondLazy: number | null = null;
    private feetperminuteLazy: number | null = null;
    private feetperhourLazy: number | null = null;
    private ussurveyfeetpersecondLazy: number | null = null;
    private ussurveyfeetperminuteLazy: number | null = null;
    private ussurveyfeetperhourLazy: number | null = null;
    private inchespersecondLazy: number | null = null;
    private inchesperminuteLazy: number | null = null;
    private inchesperhourLazy: number | null = null;
    private yardspersecondLazy: number | null = null;
    private yardsperminuteLazy: number | null = null;
    private yardsperhourLazy: number | null = null;
    private knotsLazy: number | null = null;
    private milesperhourLazy: number | null = null;
    private machLazy: number | null = null;
    private nanometerspersecondLazy: number | null = null;
    private micrometerspersecondLazy: number | null = null;
    private millimeterspersecondLazy: number | null = null;
    private centimeterspersecondLazy: number | null = null;
    private decimeterspersecondLazy: number | null = null;
    private kilometerspersecondLazy: number | null = null;
    private nanometersperminuteLazy: number | null = null;
    private micrometersperminuteLazy: number | null = null;
    private millimetersperminuteLazy: number | null = null;
    private centimetersperminuteLazy: number | null = null;
    private decimetersperminuteLazy: number | null = null;
    private kilometersperminuteLazy: number | null = null;
    private millimetersperhourLazy: number | null = null;
    private centimetersperhourLazy: number | null = null;
    private kilometersperhourLazy: number | null = null;

    /**
     * Create a new Speed.
     * @param value The value.
     * @param fromUnit The ‘Speed’ unit to create from.
     * The default unit is MetersPerSecond
     */
    public constructor(value: number, fromUnit: SpeedUnits = SpeedUnits.MetersPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Speed is MetersPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): SpeedUnits.MetersPerSecond {
        return SpeedUnits.MetersPerSecond
    }

    /** */
    public get MetersPerSecond(): number {
        if(this.meterspersecondLazy !== null){
            return this.meterspersecondLazy;
        }
        return this.meterspersecondLazy = this.convertFromBase(SpeedUnits.MetersPerSecond);
    }

    /** */
    public get MetersPerMinute(): number {
        if(this.metersperminuteLazy !== null){
            return this.metersperminuteLazy;
        }
        return this.metersperminuteLazy = this.convertFromBase(SpeedUnits.MetersPerMinute);
    }

    /** */
    public get MetersPerHour(): number {
        if(this.metersperhourLazy !== null){
            return this.metersperhourLazy;
        }
        return this.metersperhourLazy = this.convertFromBase(SpeedUnits.MetersPerHour);
    }

    /** */
    public get FeetPerSecond(): number {
        if(this.feetpersecondLazy !== null){
            return this.feetpersecondLazy;
        }
        return this.feetpersecondLazy = this.convertFromBase(SpeedUnits.FeetPerSecond);
    }

    /** */
    public get FeetPerMinute(): number {
        if(this.feetperminuteLazy !== null){
            return this.feetperminuteLazy;
        }
        return this.feetperminuteLazy = this.convertFromBase(SpeedUnits.FeetPerMinute);
    }

    /** */
    public get FeetPerHour(): number {
        if(this.feetperhourLazy !== null){
            return this.feetperhourLazy;
        }
        return this.feetperhourLazy = this.convertFromBase(SpeedUnits.FeetPerHour);
    }

    /** */
    public get UsSurveyFeetPerSecond(): number {
        if(this.ussurveyfeetpersecondLazy !== null){
            return this.ussurveyfeetpersecondLazy;
        }
        return this.ussurveyfeetpersecondLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }

    /** */
    public get UsSurveyFeetPerMinute(): number {
        if(this.ussurveyfeetperminuteLazy !== null){
            return this.ussurveyfeetperminuteLazy;
        }
        return this.ussurveyfeetperminuteLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }

    /** */
    public get UsSurveyFeetPerHour(): number {
        if(this.ussurveyfeetperhourLazy !== null){
            return this.ussurveyfeetperhourLazy;
        }
        return this.ussurveyfeetperhourLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }

    /** */
    public get InchesPerSecond(): number {
        if(this.inchespersecondLazy !== null){
            return this.inchespersecondLazy;
        }
        return this.inchespersecondLazy = this.convertFromBase(SpeedUnits.InchesPerSecond);
    }

    /** */
    public get InchesPerMinute(): number {
        if(this.inchesperminuteLazy !== null){
            return this.inchesperminuteLazy;
        }
        return this.inchesperminuteLazy = this.convertFromBase(SpeedUnits.InchesPerMinute);
    }

    /** */
    public get InchesPerHour(): number {
        if(this.inchesperhourLazy !== null){
            return this.inchesperhourLazy;
        }
        return this.inchesperhourLazy = this.convertFromBase(SpeedUnits.InchesPerHour);
    }

    /** */
    public get YardsPerSecond(): number {
        if(this.yardspersecondLazy !== null){
            return this.yardspersecondLazy;
        }
        return this.yardspersecondLazy = this.convertFromBase(SpeedUnits.YardsPerSecond);
    }

    /** */
    public get YardsPerMinute(): number {
        if(this.yardsperminuteLazy !== null){
            return this.yardsperminuteLazy;
        }
        return this.yardsperminuteLazy = this.convertFromBase(SpeedUnits.YardsPerMinute);
    }

    /** */
    public get YardsPerHour(): number {
        if(this.yardsperhourLazy !== null){
            return this.yardsperhourLazy;
        }
        return this.yardsperhourLazy = this.convertFromBase(SpeedUnits.YardsPerHour);
    }

    /** The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970. */
    public get Knots(): number {
        if(this.knotsLazy !== null){
            return this.knotsLazy;
        }
        return this.knotsLazy = this.convertFromBase(SpeedUnits.Knots);
    }

    /** */
    public get MilesPerHour(): number {
        if(this.milesperhourLazy !== null){
            return this.milesperhourLazy;
        }
        return this.milesperhourLazy = this.convertFromBase(SpeedUnits.MilesPerHour);
    }

    /** */
    public get Mach(): number {
        if(this.machLazy !== null){
            return this.machLazy;
        }
        return this.machLazy = this.convertFromBase(SpeedUnits.Mach);
    }

    /** */
    public get NanometersPerSecond(): number {
        if(this.nanometerspersecondLazy !== null){
            return this.nanometerspersecondLazy;
        }
        return this.nanometerspersecondLazy = this.convertFromBase(SpeedUnits.NanometersPerSecond);
    }

    /** */
    public get MicrometersPerSecond(): number {
        if(this.micrometerspersecondLazy !== null){
            return this.micrometerspersecondLazy;
        }
        return this.micrometerspersecondLazy = this.convertFromBase(SpeedUnits.MicrometersPerSecond);
    }

    /** */
    public get MillimetersPerSecond(): number {
        if(this.millimeterspersecondLazy !== null){
            return this.millimeterspersecondLazy;
        }
        return this.millimeterspersecondLazy = this.convertFromBase(SpeedUnits.MillimetersPerSecond);
    }

    /** */
    public get CentimetersPerSecond(): number {
        if(this.centimeterspersecondLazy !== null){
            return this.centimeterspersecondLazy;
        }
        return this.centimeterspersecondLazy = this.convertFromBase(SpeedUnits.CentimetersPerSecond);
    }

    /** */
    public get DecimetersPerSecond(): number {
        if(this.decimeterspersecondLazy !== null){
            return this.decimeterspersecondLazy;
        }
        return this.decimeterspersecondLazy = this.convertFromBase(SpeedUnits.DecimetersPerSecond);
    }

    /** */
    public get KilometersPerSecond(): number {
        if(this.kilometerspersecondLazy !== null){
            return this.kilometerspersecondLazy;
        }
        return this.kilometerspersecondLazy = this.convertFromBase(SpeedUnits.KilometersPerSecond);
    }

    /** */
    public get NanometersPerMinute(): number {
        if(this.nanometersperminuteLazy !== null){
            return this.nanometersperminuteLazy;
        }
        return this.nanometersperminuteLazy = this.convertFromBase(SpeedUnits.NanometersPerMinute);
    }

    /** */
    public get MicrometersPerMinute(): number {
        if(this.micrometersperminuteLazy !== null){
            return this.micrometersperminuteLazy;
        }
        return this.micrometersperminuteLazy = this.convertFromBase(SpeedUnits.MicrometersPerMinute);
    }

    /** */
    public get MillimetersPerMinute(): number {
        if(this.millimetersperminuteLazy !== null){
            return this.millimetersperminuteLazy;
        }
        return this.millimetersperminuteLazy = this.convertFromBase(SpeedUnits.MillimetersPerMinute);
    }

    /** */
    public get CentimetersPerMinute(): number {
        if(this.centimetersperminuteLazy !== null){
            return this.centimetersperminuteLazy;
        }
        return this.centimetersperminuteLazy = this.convertFromBase(SpeedUnits.CentimetersPerMinute);
    }

    /** */
    public get DecimetersPerMinute(): number {
        if(this.decimetersperminuteLazy !== null){
            return this.decimetersperminuteLazy;
        }
        return this.decimetersperminuteLazy = this.convertFromBase(SpeedUnits.DecimetersPerMinute);
    }

    /** */
    public get KilometersPerMinute(): number {
        if(this.kilometersperminuteLazy !== null){
            return this.kilometersperminuteLazy;
        }
        return this.kilometersperminuteLazy = this.convertFromBase(SpeedUnits.KilometersPerMinute);
    }

    /** */
    public get MillimetersPerHour(): number {
        if(this.millimetersperhourLazy !== null){
            return this.millimetersperhourLazy;
        }
        return this.millimetersperhourLazy = this.convertFromBase(SpeedUnits.MillimetersPerHour);
    }

    /** */
    public get CentimetersPerHour(): number {
        if(this.centimetersperhourLazy !== null){
            return this.centimetersperhourLazy;
        }
        return this.centimetersperhourLazy = this.convertFromBase(SpeedUnits.CentimetersPerHour);
    }

    /** */
    public get KilometersPerHour(): number {
        if(this.kilometersperhourLazy !== null){
            return this.kilometersperhourLazy;
        }
        return this.kilometersperhourLazy = this.convertFromBase(SpeedUnits.KilometersPerHour);
    }

    /**
     * Create a new Speed instance from a MetersPerSecond
     *
     * @param value The unit as MetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerSecond);
    }

    /**
     * Create a new Speed instance from a MetersPerMinute
     *
     * @param value The unit as MetersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMetersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerMinute);
    }

    /**
     * Create a new Speed instance from a MetersPerHour
     *
     * @param value The unit as MetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MetersPerHour);
    }

    /**
     * Create a new Speed instance from a FeetPerSecond
     *
     * @param value The unit as FeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromFeetPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerSecond);
    }

    /**
     * Create a new Speed instance from a FeetPerMinute
     *
     * @param value The unit as FeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromFeetPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerMinute);
    }

    /**
     * Create a new Speed instance from a FeetPerHour
     *
     * @param value The unit as FeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromFeetPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.FeetPerHour);
    }

    /**
     * Create a new Speed instance from a UsSurveyFeetPerSecond
     *
     * @param value The unit as UsSurveyFeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromUsSurveyFeetPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerSecond);
    }

    /**
     * Create a new Speed instance from a UsSurveyFeetPerMinute
     *
     * @param value The unit as UsSurveyFeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromUsSurveyFeetPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerMinute);
    }

    /**
     * Create a new Speed instance from a UsSurveyFeetPerHour
     *
     * @param value The unit as UsSurveyFeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromUsSurveyFeetPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerHour);
    }

    /**
     * Create a new Speed instance from a InchesPerSecond
     *
     * @param value The unit as InchesPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromInchesPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerSecond);
    }

    /**
     * Create a new Speed instance from a InchesPerMinute
     *
     * @param value The unit as InchesPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromInchesPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerMinute);
    }

    /**
     * Create a new Speed instance from a InchesPerHour
     *
     * @param value The unit as InchesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromInchesPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.InchesPerHour);
    }

    /**
     * Create a new Speed instance from a YardsPerSecond
     *
     * @param value The unit as YardsPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromYardsPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerSecond);
    }

    /**
     * Create a new Speed instance from a YardsPerMinute
     *
     * @param value The unit as YardsPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromYardsPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerMinute);
    }

    /**
     * Create a new Speed instance from a YardsPerHour
     *
     * @param value The unit as YardsPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromYardsPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.YardsPerHour);
    }

    /**
     * Create a new Speed instance from a Knots
     * The knot, by definition, is a unit of speed equals to 1 nautical mile per hour, which is exactly 1852.000 metres per hour. The length of the internationally agreed nautical mile is 1852 m. The US adopted the international definition in 1954, the UK adopted the international nautical mile definition in 1970.
     * @param value The unit as Knots to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKnots(value: number): Speed {
        return new Speed(value, SpeedUnits.Knots);
    }

    /**
     * Create a new Speed instance from a MilesPerHour
     *
     * @param value The unit as MilesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMilesPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MilesPerHour);
    }

    /**
     * Create a new Speed instance from a Mach
     *
     * @param value The unit as Mach to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMach(value: number): Speed {
        return new Speed(value, SpeedUnits.Mach);
    }

    /**
     * Create a new Speed instance from a NanometersPerSecond
     *
     * @param value The unit as NanometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromNanometersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.NanometersPerSecond);
    }

    /**
     * Create a new Speed instance from a MicrometersPerSecond
     *
     * @param value The unit as MicrometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMicrometersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MicrometersPerSecond);
    }

    /**
     * Create a new Speed instance from a MillimetersPerSecond
     *
     * @param value The unit as MillimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMillimetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.MillimetersPerSecond);
    }

    /**
     * Create a new Speed instance from a CentimetersPerSecond
     *
     * @param value The unit as CentimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromCentimetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimetersPerSecond);
    }

    /**
     * Create a new Speed instance from a DecimetersPerSecond
     *
     * @param value The unit as DecimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromDecimetersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.DecimetersPerSecond);
    }

    /**
     * Create a new Speed instance from a KilometersPerSecond
     *
     * @param value The unit as KilometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKilometersPerSecond(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometersPerSecond);
    }

    /**
     * Create a new Speed instance from a NanometersPerMinute
     *
     * @param value The unit as NanometersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromNanometersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.NanometersPerMinute);
    }

    /**
     * Create a new Speed instance from a MicrometersPerMinute
     *
     * @param value The unit as MicrometersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMicrometersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.MicrometersPerMinute);
    }

    /**
     * Create a new Speed instance from a MillimetersPerMinute
     *
     * @param value The unit as MillimetersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMillimetersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.MillimetersPerMinute);
    }

    /**
     * Create a new Speed instance from a CentimetersPerMinute
     *
     * @param value The unit as CentimetersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromCentimetersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimetersPerMinute);
    }

    /**
     * Create a new Speed instance from a DecimetersPerMinute
     *
     * @param value The unit as DecimetersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromDecimetersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.DecimetersPerMinute);
    }

    /**
     * Create a new Speed instance from a KilometersPerMinute
     *
     * @param value The unit as KilometersPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKilometersPerMinute(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometersPerMinute);
    }

    /**
     * Create a new Speed instance from a MillimetersPerHour
     *
     * @param value The unit as MillimetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromMillimetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.MillimetersPerHour);
    }

    /**
     * Create a new Speed instance from a CentimetersPerHour
     *
     * @param value The unit as CentimetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromCentimetersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.CentimetersPerHour);
    }

    /**
     * Create a new Speed instance from a KilometersPerHour
     *
     * @param value The unit as KilometersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    public static FromKilometersPerHour(value: number): Speed {
        return new Speed(value, SpeedUnits.KilometersPerHour);
    }

    /**
     * Gets the base unit enumeration associated with Speed
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof SpeedUnits {
        return SpeedUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): SpeedUnits.MetersPerSecond {
        return SpeedUnits.MetersPerSecond;
    }

    /**
     * Create API DTO represent a Speed unit.
     * @param holdInUnit The specific Speed unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: SpeedUnits = SpeedUnits.MetersPerSecond): SpeedDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Speed unit from an API DTO representation.
     * @param dtoSpeed The Speed API DTO representation
     */
    public static FromDto(dtoSpeed: SpeedDto): Speed {
        return new Speed(dtoSpeed.value, dtoSpeed.unit);
    }

    /**
     * Convert Speed to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: SpeedUnits): number {
        switch (toUnit) {
            case SpeedUnits.MetersPerSecond: return this.MetersPerSecond;
            case SpeedUnits.MetersPerMinute: return this.MetersPerMinute;
            case SpeedUnits.MetersPerHour: return this.MetersPerHour;
            case SpeedUnits.FeetPerSecond: return this.FeetPerSecond;
            case SpeedUnits.FeetPerMinute: return this.FeetPerMinute;
            case SpeedUnits.FeetPerHour: return this.FeetPerHour;
            case SpeedUnits.UsSurveyFeetPerSecond: return this.UsSurveyFeetPerSecond;
            case SpeedUnits.UsSurveyFeetPerMinute: return this.UsSurveyFeetPerMinute;
            case SpeedUnits.UsSurveyFeetPerHour: return this.UsSurveyFeetPerHour;
            case SpeedUnits.InchesPerSecond: return this.InchesPerSecond;
            case SpeedUnits.InchesPerMinute: return this.InchesPerMinute;
            case SpeedUnits.InchesPerHour: return this.InchesPerHour;
            case SpeedUnits.YardsPerSecond: return this.YardsPerSecond;
            case SpeedUnits.YardsPerMinute: return this.YardsPerMinute;
            case SpeedUnits.YardsPerHour: return this.YardsPerHour;
            case SpeedUnits.Knots: return this.Knots;
            case SpeedUnits.MilesPerHour: return this.MilesPerHour;
            case SpeedUnits.Mach: return this.Mach;
            case SpeedUnits.NanometersPerSecond: return this.NanometersPerSecond;
            case SpeedUnits.MicrometersPerSecond: return this.MicrometersPerSecond;
            case SpeedUnits.MillimetersPerSecond: return this.MillimetersPerSecond;
            case SpeedUnits.CentimetersPerSecond: return this.CentimetersPerSecond;
            case SpeedUnits.DecimetersPerSecond: return this.DecimetersPerSecond;
            case SpeedUnits.KilometersPerSecond: return this.KilometersPerSecond;
            case SpeedUnits.NanometersPerMinute: return this.NanometersPerMinute;
            case SpeedUnits.MicrometersPerMinute: return this.MicrometersPerMinute;
            case SpeedUnits.MillimetersPerMinute: return this.MillimetersPerMinute;
            case SpeedUnits.CentimetersPerMinute: return this.CentimetersPerMinute;
            case SpeedUnits.DecimetersPerMinute: return this.DecimetersPerMinute;
            case SpeedUnits.KilometersPerMinute: return this.KilometersPerMinute;
            case SpeedUnits.MillimetersPerHour: return this.MillimetersPerHour;
            case SpeedUnits.CentimetersPerHour: return this.CentimetersPerHour;
            case SpeedUnits.KilometersPerHour: return this.KilometersPerHour;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: SpeedUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case SpeedUnits.MetersPerSecond: return this.value;
                case SpeedUnits.MetersPerMinute: return super.internalMultiply(this.value, 60);
                case SpeedUnits.MetersPerHour: return super.internalMultiply(this.value, 3600);
                case SpeedUnits.FeetPerSecond: return super.internalDivide(this.value, 0.3048);
                case SpeedUnits.FeetPerMinute: {
                    const v3 = super.internalDivide(this.value, 0.3048);
                    return super.internalMultiply(v3, 60);
                }
                case SpeedUnits.FeetPerHour: {
                    const v3 = super.internalDivide(this.value, 0.3048);
                    return super.internalMultiply(v3, 3600);
                }
                case SpeedUnits.UsSurveyFeetPerSecond: {
                    const v4 = super.internalDivide(3937, 1200);
                    return super.internalMultiply(this.value, v4);
                }
                case SpeedUnits.UsSurveyFeetPerMinute: {
                    const v4 = super.internalDivide(3937, 1200);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalMultiply(v5, 60);
                }
                case SpeedUnits.UsSurveyFeetPerHour: {
                    const v4 = super.internalDivide(3937, 1200);
                    const v5 = super.internalMultiply(this.value, v4);
                    return super.internalMultiply(v5, 3600);
                }
                case SpeedUnits.InchesPerSecond: return super.internalDivide(this.value, 2.54e-2);
                case SpeedUnits.InchesPerMinute: {
                    const v3 = super.internalDivide(this.value, 2.54e-2);
                    return super.internalMultiply(v3, 60);
                }
                case SpeedUnits.InchesPerHour: {
                    const v3 = super.internalDivide(this.value, 2.54e-2);
                    return super.internalMultiply(v3, 3600);
                }
                case SpeedUnits.YardsPerSecond: return super.internalDivide(this.value, 0.9144);
                case SpeedUnits.YardsPerMinute: {
                    const v3 = super.internalDivide(this.value, 0.9144);
                    return super.internalMultiply(v3, 60);
                }
                case SpeedUnits.YardsPerHour: {
                    const v3 = super.internalDivide(this.value, 0.9144);
                    return super.internalMultiply(v3, 3600);
                }
                case SpeedUnits.Knots: {
                    const v4 = super.internalDivide(1852.0, 3600.0);
                    return super.internalDivide(this.value, v4);
                }
                case SpeedUnits.MilesPerHour: return super.internalDivide(this.value, 0.44704);
                case SpeedUnits.Mach: return super.internalDivide(this.value, 340.29);
                case SpeedUnits.NanometersPerSecond: return super.internalDivide(this.value, 1e-9);
                case SpeedUnits.MicrometersPerSecond: return super.internalDivide(this.value, 0.000001);
                case SpeedUnits.MillimetersPerSecond: return super.internalDivide(this.value, 0.001);
                case SpeedUnits.CentimetersPerSecond: return super.internalDivide(this.value, 0.01);
                case SpeedUnits.DecimetersPerSecond: return super.internalDivide(this.value, 0.1);
                case SpeedUnits.KilometersPerSecond: return super.internalDivide(this.value, 1000);
                case SpeedUnits.NanometersPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1e-9);
                }
                case SpeedUnits.MicrometersPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.000001);
                }
                case SpeedUnits.MillimetersPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.001);
                }
                case SpeedUnits.CentimetersPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.01);
                }
                case SpeedUnits.DecimetersPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 0.1);
                }
                case SpeedUnits.KilometersPerMinute: {
                    const v3 = super.internalMultiply(this.value, 60);
                    return super.internalDivide(v3, 1000);
                }
                case SpeedUnits.MillimetersPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.001);
                }
                case SpeedUnits.CentimetersPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 0.01);
                }
                case SpeedUnits.KilometersPerHour: {
                    const v3 = super.internalMultiply(this.value, 3600);
                    return super.internalDivide(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case SpeedUnits.MetersPerSecond: return this.value;
            case SpeedUnits.MetersPerMinute: return this.value * 60;
            case SpeedUnits.MetersPerHour: return this.value * 3600;
            case SpeedUnits.FeetPerSecond: return this.value / 0.3048;
            case SpeedUnits.FeetPerMinute: return this.value / 0.3048 * 60;
            case SpeedUnits.FeetPerHour: return this.value / 0.3048 * 3600;
            case SpeedUnits.UsSurveyFeetPerSecond: return this.value * 3937 / 1200;
            case SpeedUnits.UsSurveyFeetPerMinute: return (this.value * 3937 / 1200) * 60;
            case SpeedUnits.UsSurveyFeetPerHour: return (this.value * 3937 / 1200) * 3600;
            case SpeedUnits.InchesPerSecond: return this.value / 2.54e-2;
            case SpeedUnits.InchesPerMinute: return (this.value / 2.54e-2) * 60;
            case SpeedUnits.InchesPerHour: return (this.value / 2.54e-2) * 3600;
            case SpeedUnits.YardsPerSecond: return this.value / 0.9144;
            case SpeedUnits.YardsPerMinute: return this.value / 0.9144 * 60;
            case SpeedUnits.YardsPerHour: return this.value / 0.9144 * 3600;
            case SpeedUnits.Knots: return this.value / (1852.0 / 3600.0);
            case SpeedUnits.MilesPerHour: return this.value / 0.44704;
            case SpeedUnits.Mach: return this.value / 340.29;
            case SpeedUnits.NanometersPerSecond: return (this.value) / 1e-9;
            case SpeedUnits.MicrometersPerSecond: return (this.value) / 0.000001;
            case SpeedUnits.MillimetersPerSecond: return (this.value) / 0.001;
            case SpeedUnits.CentimetersPerSecond: return (this.value) / 0.01;
            case SpeedUnits.DecimetersPerSecond: return (this.value) / 0.1;
            case SpeedUnits.KilometersPerSecond: return (this.value) / 1000;
            case SpeedUnits.NanometersPerMinute: return (this.value * 60) / 1e-9;
            case SpeedUnits.MicrometersPerMinute: return (this.value * 60) / 0.000001;
            case SpeedUnits.MillimetersPerMinute: return (this.value * 60) / 0.001;
            case SpeedUnits.CentimetersPerMinute: return (this.value * 60) / 0.01;
            case SpeedUnits.DecimetersPerMinute: return (this.value * 60) / 0.1;
            case SpeedUnits.KilometersPerMinute: return (this.value * 60) / 1000;
            case SpeedUnits.MillimetersPerHour: return (this.value * 3600) / 0.001;
            case SpeedUnits.CentimetersPerHour: return (this.value * 3600) / 0.01;
            case SpeedUnits.KilometersPerHour: return (this.value * 3600) / 1000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: SpeedUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case SpeedUnits.MetersPerSecond: return value;
                case SpeedUnits.MetersPerMinute: return super.internalDivide(value, 60);
                case SpeedUnits.MetersPerHour: return super.internalDivide(value, 3600);
                case SpeedUnits.FeetPerSecond: return super.internalMultiply(value, 0.3048);
                case SpeedUnits.FeetPerMinute: {
                    const v4 = super.internalDivide(0.3048, 60);
                    return super.internalMultiply(value, v4);
                }
                case SpeedUnits.FeetPerHour: {
                    const v4 = super.internalDivide(0.3048, 3600);
                    return super.internalMultiply(value, v4);
                }
                case SpeedUnits.UsSurveyFeetPerSecond: {
                    const v4 = super.internalDivide(1200, 3937);
                    return super.internalMultiply(value, v4);
                }
                case SpeedUnits.UsSurveyFeetPerMinute: {
                    const v4 = super.internalDivide(1200, 3937);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalDivide(v5, 60);
                }
                case SpeedUnits.UsSurveyFeetPerHour: {
                    const v4 = super.internalDivide(1200, 3937);
                    const v5 = super.internalMultiply(value, v4);
                    return super.internalDivide(v5, 3600);
                }
                case SpeedUnits.InchesPerSecond: return super.internalMultiply(value, 2.54e-2);
                case SpeedUnits.InchesPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 2.54e-2);
                }
                case SpeedUnits.InchesPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 2.54e-2);
                }
                case SpeedUnits.YardsPerSecond: return super.internalMultiply(value, 0.9144);
                case SpeedUnits.YardsPerMinute: {
                    const v4 = super.internalDivide(0.9144, 60);
                    return super.internalMultiply(value, v4);
                }
                case SpeedUnits.YardsPerHour: {
                    const v4 = super.internalDivide(0.9144, 3600);
                    return super.internalMultiply(value, v4);
                }
                case SpeedUnits.Knots: {
                    const v4 = super.internalDivide(1852.0, 3600.0);
                    return super.internalMultiply(value, v4);
                }
                case SpeedUnits.MilesPerHour: return super.internalMultiply(value, 0.44704);
                case SpeedUnits.Mach: return super.internalMultiply(value, 340.29);
                case SpeedUnits.NanometersPerSecond: return super.internalMultiply(value, 1e-9);
                case SpeedUnits.MicrometersPerSecond: return super.internalMultiply(value, 0.000001);
                case SpeedUnits.MillimetersPerSecond: return super.internalMultiply(value, 0.001);
                case SpeedUnits.CentimetersPerSecond: return super.internalMultiply(value, 0.01);
                case SpeedUnits.DecimetersPerSecond: return super.internalMultiply(value, 0.1);
                case SpeedUnits.KilometersPerSecond: return super.internalMultiply(value, 1000);
                case SpeedUnits.NanometersPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1e-9);
                }
                case SpeedUnits.MicrometersPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.000001);
                }
                case SpeedUnits.MillimetersPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.001);
                }
                case SpeedUnits.CentimetersPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.01);
                }
                case SpeedUnits.DecimetersPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 0.1);
                }
                case SpeedUnits.KilometersPerMinute: {
                    const v3 = super.internalDivide(value, 60);
                    return super.internalMultiply(v3, 1000);
                }
                case SpeedUnits.MillimetersPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.001);
                }
                case SpeedUnits.CentimetersPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 0.01);
                }
                case SpeedUnits.KilometersPerHour: {
                    const v3 = super.internalDivide(value, 3600);
                    return super.internalMultiply(v3, 1000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case SpeedUnits.MetersPerSecond: return value;
            case SpeedUnits.MetersPerMinute: return value / 60;
            case SpeedUnits.MetersPerHour: return value / 3600;
            case SpeedUnits.FeetPerSecond: return value * 0.3048;
            case SpeedUnits.FeetPerMinute: return value * 0.3048 / 60;
            case SpeedUnits.FeetPerHour: return value * 0.3048 / 3600;
            case SpeedUnits.UsSurveyFeetPerSecond: return value * 1200 / 3937;
            case SpeedUnits.UsSurveyFeetPerMinute: return (value * 1200 / 3937) / 60;
            case SpeedUnits.UsSurveyFeetPerHour: return (value * 1200 / 3937) / 3600;
            case SpeedUnits.InchesPerSecond: return value * 2.54e-2;
            case SpeedUnits.InchesPerMinute: return (value / 60) * 2.54e-2;
            case SpeedUnits.InchesPerHour: return (value / 3600) * 2.54e-2;
            case SpeedUnits.YardsPerSecond: return value * 0.9144;
            case SpeedUnits.YardsPerMinute: return value * 0.9144 / 60;
            case SpeedUnits.YardsPerHour: return value * 0.9144 / 3600;
            case SpeedUnits.Knots: return value * (1852.0 / 3600.0);
            case SpeedUnits.MilesPerHour: return value * 0.44704;
            case SpeedUnits.Mach: return value * 340.29;
            case SpeedUnits.NanometersPerSecond: return (value) * 1e-9;
            case SpeedUnits.MicrometersPerSecond: return (value) * 0.000001;
            case SpeedUnits.MillimetersPerSecond: return (value) * 0.001;
            case SpeedUnits.CentimetersPerSecond: return (value) * 0.01;
            case SpeedUnits.DecimetersPerSecond: return (value) * 0.1;
            case SpeedUnits.KilometersPerSecond: return (value) * 1000;
            case SpeedUnits.NanometersPerMinute: return (value / 60) * 1e-9;
            case SpeedUnits.MicrometersPerMinute: return (value / 60) * 0.000001;
            case SpeedUnits.MillimetersPerMinute: return (value / 60) * 0.001;
            case SpeedUnits.CentimetersPerMinute: return (value / 60) * 0.01;
            case SpeedUnits.DecimetersPerMinute: return (value / 60) * 0.1;
            case SpeedUnits.KilometersPerMinute: return (value / 60) * 1000;
            case SpeedUnits.MillimetersPerHour: return (value / 3600) * 0.001;
            case SpeedUnits.CentimetersPerHour: return (value / 3600) * 0.01;
            case SpeedUnits.KilometersPerHour: return (value / 3600) * 1000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Speed to string.
     * Note! the default format for Speed is MetersPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Speed.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Speed.
     */
    public toString(unit: SpeedUnits = SpeedUnits.MetersPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case SpeedUnits.MetersPerSecond:
                return super.truncateFractionDigits(this.MetersPerSecond, options as ToStringOptions) + ` m/s`;
            case SpeedUnits.MetersPerMinute:
                return super.truncateFractionDigits(this.MetersPerMinute, options as ToStringOptions) + ` m/min`;
            case SpeedUnits.MetersPerHour:
                return super.truncateFractionDigits(this.MetersPerHour, options as ToStringOptions) + ` m/h`;
            case SpeedUnits.FeetPerSecond:
                return super.truncateFractionDigits(this.FeetPerSecond, options as ToStringOptions) + ` ft/s`;
            case SpeedUnits.FeetPerMinute:
                return super.truncateFractionDigits(this.FeetPerMinute, options as ToStringOptions) + ` ft/min`;
            case SpeedUnits.FeetPerHour:
                return super.truncateFractionDigits(this.FeetPerHour, options as ToStringOptions) + ` ft/h`;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return super.truncateFractionDigits(this.UsSurveyFeetPerSecond, options as ToStringOptions) + ` ftUS/s`;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return super.truncateFractionDigits(this.UsSurveyFeetPerMinute, options as ToStringOptions) + ` ftUS/min`;
            case SpeedUnits.UsSurveyFeetPerHour:
                return super.truncateFractionDigits(this.UsSurveyFeetPerHour, options as ToStringOptions) + ` ftUS/h`;
            case SpeedUnits.InchesPerSecond:
                return super.truncateFractionDigits(this.InchesPerSecond, options as ToStringOptions) + ` in/s`;
            case SpeedUnits.InchesPerMinute:
                return super.truncateFractionDigits(this.InchesPerMinute, options as ToStringOptions) + ` in/min`;
            case SpeedUnits.InchesPerHour:
                return super.truncateFractionDigits(this.InchesPerHour, options as ToStringOptions) + ` in/h`;
            case SpeedUnits.YardsPerSecond:
                return super.truncateFractionDigits(this.YardsPerSecond, options as ToStringOptions) + ` yd/s`;
            case SpeedUnits.YardsPerMinute:
                return super.truncateFractionDigits(this.YardsPerMinute, options as ToStringOptions) + ` yd/min`;
            case SpeedUnits.YardsPerHour:
                return super.truncateFractionDigits(this.YardsPerHour, options as ToStringOptions) + ` yd/h`;
            case SpeedUnits.Knots:
                return super.truncateFractionDigits(this.Knots, options as ToStringOptions) + ` kn`;
            case SpeedUnits.MilesPerHour:
                return super.truncateFractionDigits(this.MilesPerHour, options as ToStringOptions) + ` mph`;
            case SpeedUnits.Mach:
                return super.truncateFractionDigits(this.Mach, options as ToStringOptions) + ` M`;
            case SpeedUnits.NanometersPerSecond:
                return super.truncateFractionDigits(this.NanometersPerSecond, options as ToStringOptions) + ` nm/s`;
            case SpeedUnits.MicrometersPerSecond:
                return super.truncateFractionDigits(this.MicrometersPerSecond, options as ToStringOptions) + ` μm/s`;
            case SpeedUnits.MillimetersPerSecond:
                return super.truncateFractionDigits(this.MillimetersPerSecond, options as ToStringOptions) + ` mm/s`;
            case SpeedUnits.CentimetersPerSecond:
                return super.truncateFractionDigits(this.CentimetersPerSecond, options as ToStringOptions) + ` cm/s`;
            case SpeedUnits.DecimetersPerSecond:
                return super.truncateFractionDigits(this.DecimetersPerSecond, options as ToStringOptions) + ` dm/s`;
            case SpeedUnits.KilometersPerSecond:
                return super.truncateFractionDigits(this.KilometersPerSecond, options as ToStringOptions) + ` km/s`;
            case SpeedUnits.NanometersPerMinute:
                return super.truncateFractionDigits(this.NanometersPerMinute, options as ToStringOptions) + ` nm/min`;
            case SpeedUnits.MicrometersPerMinute:
                return super.truncateFractionDigits(this.MicrometersPerMinute, options as ToStringOptions) + ` μm/min`;
            case SpeedUnits.MillimetersPerMinute:
                return super.truncateFractionDigits(this.MillimetersPerMinute, options as ToStringOptions) + ` mm/min`;
            case SpeedUnits.CentimetersPerMinute:
                return super.truncateFractionDigits(this.CentimetersPerMinute, options as ToStringOptions) + ` cm/min`;
            case SpeedUnits.DecimetersPerMinute:
                return super.truncateFractionDigits(this.DecimetersPerMinute, options as ToStringOptions) + ` dm/min`;
            case SpeedUnits.KilometersPerMinute:
                return super.truncateFractionDigits(this.KilometersPerMinute, options as ToStringOptions) + ` km/min`;
            case SpeedUnits.MillimetersPerHour:
                return super.truncateFractionDigits(this.MillimetersPerHour, options as ToStringOptions) + ` mm/h`;
            case SpeedUnits.CentimetersPerHour:
                return super.truncateFractionDigits(this.CentimetersPerHour, options as ToStringOptions) + ` cm/h`;
            case SpeedUnits.KilometersPerHour:
                return super.truncateFractionDigits(this.KilometersPerHour, options as ToStringOptions) + ` km/h`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Speed unit abbreviation.
     * Note! the default abbreviation for Speed is MetersPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Speed.
     * @returns The abbreviation string of Speed.
     */
    public getUnitAbbreviation(unitAbbreviation: SpeedUnits = SpeedUnits.MetersPerSecond): string {

        switch (unitAbbreviation) {
            
            case SpeedUnits.MetersPerSecond:
                return `m/s`;
            case SpeedUnits.MetersPerMinute:
                return `m/min`;
            case SpeedUnits.MetersPerHour:
                return `m/h`;
            case SpeedUnits.FeetPerSecond:
                return `ft/s`;
            case SpeedUnits.FeetPerMinute:
                return `ft/min`;
            case SpeedUnits.FeetPerHour:
                return `ft/h`;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return `ftUS/s`;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return `ftUS/min`;
            case SpeedUnits.UsSurveyFeetPerHour:
                return `ftUS/h`;
            case SpeedUnits.InchesPerSecond:
                return `in/s`;
            case SpeedUnits.InchesPerMinute:
                return `in/min`;
            case SpeedUnits.InchesPerHour:
                return `in/h`;
            case SpeedUnits.YardsPerSecond:
                return `yd/s`;
            case SpeedUnits.YardsPerMinute:
                return `yd/min`;
            case SpeedUnits.YardsPerHour:
                return `yd/h`;
            case SpeedUnits.Knots:
                return `kn`;
            case SpeedUnits.MilesPerHour:
                return `mph`;
            case SpeedUnits.Mach:
                return `M`;
            case SpeedUnits.NanometersPerSecond:
                return `nm/s`;
            case SpeedUnits.MicrometersPerSecond:
                return `μm/s`;
            case SpeedUnits.MillimetersPerSecond:
                return `mm/s`;
            case SpeedUnits.CentimetersPerSecond:
                return `cm/s`;
            case SpeedUnits.DecimetersPerSecond:
                return `dm/s`;
            case SpeedUnits.KilometersPerSecond:
                return `km/s`;
            case SpeedUnits.NanometersPerMinute:
                return `nm/min`;
            case SpeedUnits.MicrometersPerMinute:
                return `μm/min`;
            case SpeedUnits.MillimetersPerMinute:
                return `mm/min`;
            case SpeedUnits.CentimetersPerMinute:
                return `cm/min`;
            case SpeedUnits.DecimetersPerMinute:
                return `dm/min`;
            case SpeedUnits.KilometersPerMinute:
                return `km/min`;
            case SpeedUnits.MillimetersPerHour:
                return `mm/h`;
            case SpeedUnits.CentimetersPerHour:
                return `cm/h`;
            case SpeedUnits.KilometersPerHour:
                return `km/h`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Speed are equals to the current Speed.
     * @param speed The other Speed.
     * @returns True if the given Speed are equal to the current Speed.
     */
    public equals(speed: Speed): boolean {
        return super.internalEquals(this.value, speed.BaseValue);
    }

    /**
     * Compare the given Speed against the current Speed.
     * @param speed The other Speed.
     * @returns 0 if they are equal, -1 if the current Speed is less then other, 1 if the current Speed is greater then other.
     */
    public compareTo(speed: Speed): number {
        return super.internalCompareTo(this.value, speed.BaseValue);
    }

    /**
     * Add the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public add(speed: Speed): Speed {
        return new Speed(super.internalAdd(this.value, speed.BaseValue))
    }

    /**
     * Subtract the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public subtract(speed: Speed): Speed {
        return new Speed(super.internalSubtract(this.value, speed.BaseValue))
    }

    /**
     * Multiply the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public multiply(speed: Speed): Speed {
        return new Speed(super.internalMultiply(this.value, speed.BaseValue))
    }

    /**
     * Divide the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public divide(speed: Speed): Speed {
        return new Speed(super.internalDivide(this.value, speed.BaseValue))
    }

    /**
     * Modulo the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public modulo(speed: Speed): Speed {
        return new Speed(super.internalModulo(this.value, speed.BaseValue))
    }

    /**
     * Pow the given Speed with the current Speed.
     * @param speed The other Speed.
     * @returns A new Speed instance with the results.
     */
    public pow(speed: Speed): Speed {
        return new Speed(super.internalPow(this.value, speed.BaseValue))
    }
}
