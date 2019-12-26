/** SpeedUnits enumeration */
export declare enum SpeedUnits {
    /** */
    MetersPerSecond = 0,
    /** */
    MetersPerMinutes = 1,
    /** */
    MetersPerHour = 2,
    /** */
    FeetPerSecond = 3,
    /** */
    FeetPerMinute = 4,
    /** */
    FeetPerHour = 5,
    /** */
    UsSurveyFeetPerSecond = 6,
    /** */
    UsSurveyFeetPerMinute = 7,
    /** */
    UsSurveyFeetPerHour = 8,
    /** */
    InchesPerSecond = 9,
    /** */
    InchesPerMinute = 10,
    /** */
    InchesPerHour = 11,
    /** */
    YardsPerSecond = 12,
    /** */
    YardsPerMinute = 13,
    /** */
    YardsPerHour = 14,
    /** */
    Knots = 15,
    /** */
    MilesPerHour = 16,
    /** */
    NanometersPerSecond = 17,
    /** */
    MicrometersPerSecond = 18,
    /** */
    CentimetersPerSecond = 19,
    /** */
    DecimetersPerSecond = 20,
    /** */
    KilometersPerSecond = 21,
    /** */
    NanometersPerMinutes = 22,
    /** */
    MicrometersPerMinutes = 23,
    /** */
    CentimetersPerMinutes = 24,
    /** */
    DecimetersPerMinutes = 25,
    /** */
    KilometersPerMinutes = 26,
    /** */
    CentimetersPerHour = 27,
    /** */
    KilometersPerHour = 28
}
/** In everyday use and in kinematics, the speed of an object is the magnitude of its velocity (the rate of change of its position); it is thus a scalar quantity.[1] The average speed of an object in an interval of time is the distance travelled by the object divided by the duration of the interval;[2] the instantaneous speed is the limit of the average speed as the duration of the time interval approaches zero. */
export declare class Speed {
    private value;
    private meterspersecondLazy;
    private metersperminutesLazy;
    private metersperhourLazy;
    private feetpersecondLazy;
    private feetperminuteLazy;
    private feetperhourLazy;
    private ussurveyfeetpersecondLazy;
    private ussurveyfeetperminuteLazy;
    private ussurveyfeetperhourLazy;
    private inchespersecondLazy;
    private inchesperminuteLazy;
    private inchesperhourLazy;
    private yardspersecondLazy;
    private yardsperminuteLazy;
    private yardsperhourLazy;
    private knotsLazy;
    private milesperhourLazy;
    private nanometerspersecondLazy;
    private micrometerspersecondLazy;
    private centimeterspersecondLazy;
    private decimeterspersecondLazy;
    private kilometerspersecondLazy;
    private nanometersperminutesLazy;
    private micrometersperminutesLazy;
    private centimetersperminutesLazy;
    private decimetersperminutesLazy;
    private kilometersperminutesLazy;
    private centimetersperhourLazy;
    private kilometersperhourLazy;
    /**
     * Create a new Speed.
     * @param value The value.
     * @param fromUnit The ‘Speed’ unit to create from.
     */
    constructor(value: number, fromUnit: SpeedUnits);
    /**
     * The base value of Speed is MeterPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get MetersPerSecond(): number;
    /** */
    get MetersPerMinutes(): number;
    /** */
    get MetersPerHour(): number;
    /** */
    get FeetPerSecond(): number;
    /** */
    get FeetPerMinute(): number;
    /** */
    get FeetPerHour(): number;
    /** */
    get UsSurveyFeetPerSecond(): number;
    /** */
    get UsSurveyFeetPerMinute(): number;
    /** */
    get UsSurveyFeetPerHour(): number;
    /** */
    get InchesPerSecond(): number;
    /** */
    get InchesPerMinute(): number;
    /** */
    get InchesPerHour(): number;
    /** */
    get YardsPerSecond(): number;
    /** */
    get YardsPerMinute(): number;
    /** */
    get YardsPerHour(): number;
    /** */
    get Knots(): number;
    /** */
    get MilesPerHour(): number;
    /** */
    get NanometersPerSecond(): number;
    /** */
    get MicrometersPerSecond(): number;
    /** */
    get CentimetersPerSecond(): number;
    /** */
    get DecimetersPerSecond(): number;
    /** */
    get KilometersPerSecond(): number;
    /** */
    get NanometersPerMinutes(): number;
    /** */
    get MicrometersPerMinutes(): number;
    /** */
    get CentimetersPerMinutes(): number;
    /** */
    get DecimetersPerMinutes(): number;
    /** */
    get KilometersPerMinutes(): number;
    /** */
    get CentimetersPerHour(): number;
    /** */
    get KilometersPerHour(): number;
    /**
     * Create a new Speed instance from a MetersPerSecond
     *
     * @param value The unit as MetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMetersPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a MetersPerMinutes
     *
     * @param value The unit as MetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMetersPerMinutes(value: number): Speed;
    /**
     * Create a new Speed instance from a MetersPerHour
     *
     * @param value The unit as MetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMetersPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a FeetPerSecond
     *
     * @param value The unit as FeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromFeetPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a FeetPerMinute
     *
     * @param value The unit as FeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromFeetPerMinute(value: number): Speed;
    /**
     * Create a new Speed instance from a FeetPerHour
     *
     * @param value The unit as FeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromFeetPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a UsSurveyFeetPerSecond
     *
     * @param value The unit as UsSurveyFeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromUsSurveyFeetPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a UsSurveyFeetPerMinute
     *
     * @param value The unit as UsSurveyFeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromUsSurveyFeetPerMinute(value: number): Speed;
    /**
     * Create a new Speed instance from a UsSurveyFeetPerHour
     *
     * @param value The unit as UsSurveyFeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromUsSurveyFeetPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a InchesPerSecond
     *
     * @param value The unit as InchesPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromInchesPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a InchesPerMinute
     *
     * @param value The unit as InchesPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromInchesPerMinute(value: number): Speed;
    /**
     * Create a new Speed instance from a InchesPerHour
     *
     * @param value The unit as InchesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromInchesPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a YardsPerSecond
     *
     * @param value The unit as YardsPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromYardsPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a YardsPerMinute
     *
     * @param value The unit as YardsPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromYardsPerMinute(value: number): Speed;
    /**
     * Create a new Speed instance from a YardsPerHour
     *
     * @param value The unit as YardsPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromYardsPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a Knots
     *
     * @param value The unit as Knots to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKnots(value: number): Speed;
    /**
     * Create a new Speed instance from a MilesPerHour
     *
     * @param value The unit as MilesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMilesPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a NanometersPerSecond
     *
     * @param value The unit as NanometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromNanometersPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a MicrometersPerSecond
     *
     * @param value The unit as MicrometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMicrometersPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a CentimetersPerSecond
     *
     * @param value The unit as CentimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromCentimetersPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a DecimetersPerSecond
     *
     * @param value The unit as DecimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromDecimetersPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a KilometersPerSecond
     *
     * @param value The unit as KilometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKilometersPerSecond(value: number): Speed;
    /**
     * Create a new Speed instance from a NanometersPerMinutes
     *
     * @param value The unit as NanometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromNanometersPerMinutes(value: number): Speed;
    /**
     * Create a new Speed instance from a MicrometersPerMinutes
     *
     * @param value The unit as MicrometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMicrometersPerMinutes(value: number): Speed;
    /**
     * Create a new Speed instance from a CentimetersPerMinutes
     *
     * @param value The unit as CentimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromCentimetersPerMinutes(value: number): Speed;
    /**
     * Create a new Speed instance from a DecimetersPerMinutes
     *
     * @param value The unit as DecimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromDecimetersPerMinutes(value: number): Speed;
    /**
     * Create a new Speed instance from a KilometersPerMinutes
     *
     * @param value The unit as KilometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKilometersPerMinutes(value: number): Speed;
    /**
     * Create a new Speed instance from a CentimetersPerHour
     *
     * @param value The unit as CentimetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromCentimetersPerHour(value: number): Speed;
    /**
     * Create a new Speed instance from a KilometersPerHour
     *
     * @param value The unit as KilometersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKilometersPerHour(value: number): Speed;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Speed to string.
     * Note! the default format for Speed is MetersPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Speed.
     * @returns The string format of the Speed.
     */
    toString(toUnit?: SpeedUnits): string;
}
//# sourceMappingURL=speed.g.d.ts.map