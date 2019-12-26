"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** SpeedUnits enumeration */
var SpeedUnits;
(function (SpeedUnits) {
    /** */
    SpeedUnits[SpeedUnits["MetersPerSecond"] = 0] = "MetersPerSecond";
    /** */
    SpeedUnits[SpeedUnits["MetersPerMinutes"] = 1] = "MetersPerMinutes";
    /** */
    SpeedUnits[SpeedUnits["MetersPerHour"] = 2] = "MetersPerHour";
    /** */
    SpeedUnits[SpeedUnits["FeetPerSecond"] = 3] = "FeetPerSecond";
    /** */
    SpeedUnits[SpeedUnits["FeetPerMinute"] = 4] = "FeetPerMinute";
    /** */
    SpeedUnits[SpeedUnits["FeetPerHour"] = 5] = "FeetPerHour";
    /** */
    SpeedUnits[SpeedUnits["UsSurveyFeetPerSecond"] = 6] = "UsSurveyFeetPerSecond";
    /** */
    SpeedUnits[SpeedUnits["UsSurveyFeetPerMinute"] = 7] = "UsSurveyFeetPerMinute";
    /** */
    SpeedUnits[SpeedUnits["UsSurveyFeetPerHour"] = 8] = "UsSurveyFeetPerHour";
    /** */
    SpeedUnits[SpeedUnits["InchesPerSecond"] = 9] = "InchesPerSecond";
    /** */
    SpeedUnits[SpeedUnits["InchesPerMinute"] = 10] = "InchesPerMinute";
    /** */
    SpeedUnits[SpeedUnits["InchesPerHour"] = 11] = "InchesPerHour";
    /** */
    SpeedUnits[SpeedUnits["YardsPerSecond"] = 12] = "YardsPerSecond";
    /** */
    SpeedUnits[SpeedUnits["YardsPerMinute"] = 13] = "YardsPerMinute";
    /** */
    SpeedUnits[SpeedUnits["YardsPerHour"] = 14] = "YardsPerHour";
    /** */
    SpeedUnits[SpeedUnits["Knots"] = 15] = "Knots";
    /** */
    SpeedUnits[SpeedUnits["MilesPerHour"] = 16] = "MilesPerHour";
    /** */
    SpeedUnits[SpeedUnits["NanometersPerSecond"] = 17] = "NanometersPerSecond";
    /** */
    SpeedUnits[SpeedUnits["MicrometersPerSecond"] = 18] = "MicrometersPerSecond";
    /** */
    SpeedUnits[SpeedUnits["CentimetersPerSecond"] = 19] = "CentimetersPerSecond";
    /** */
    SpeedUnits[SpeedUnits["DecimetersPerSecond"] = 20] = "DecimetersPerSecond";
    /** */
    SpeedUnits[SpeedUnits["KilometersPerSecond"] = 21] = "KilometersPerSecond";
    /** */
    SpeedUnits[SpeedUnits["NanometersPerMinutes"] = 22] = "NanometersPerMinutes";
    /** */
    SpeedUnits[SpeedUnits["MicrometersPerMinutes"] = 23] = "MicrometersPerMinutes";
    /** */
    SpeedUnits[SpeedUnits["CentimetersPerMinutes"] = 24] = "CentimetersPerMinutes";
    /** */
    SpeedUnits[SpeedUnits["DecimetersPerMinutes"] = 25] = "DecimetersPerMinutes";
    /** */
    SpeedUnits[SpeedUnits["KilometersPerMinutes"] = 26] = "KilometersPerMinutes";
    /** */
    SpeedUnits[SpeedUnits["CentimetersPerHour"] = 27] = "CentimetersPerHour";
    /** */
    SpeedUnits[SpeedUnits["KilometersPerHour"] = 28] = "KilometersPerHour";
})(SpeedUnits = exports.SpeedUnits || (exports.SpeedUnits = {}));
/** In everyday use and in kinematics, the speed of an object is the magnitude of its velocity (the rate of change of its position); it is thus a scalar quantity.[1] The average speed of an object in an interval of time is the distance travelled by the object divided by the duration of the interval;[2] the instantaneous speed is the limit of the average speed as the duration of the time interval approaches zero. */
class Speed {
    /**
     * Create a new Speed.
     * @param value The value.
     * @param fromUnit The ‘Speed’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.meterspersecondLazy = null;
        this.metersperminutesLazy = null;
        this.metersperhourLazy = null;
        this.feetpersecondLazy = null;
        this.feetperminuteLazy = null;
        this.feetperhourLazy = null;
        this.ussurveyfeetpersecondLazy = null;
        this.ussurveyfeetperminuteLazy = null;
        this.ussurveyfeetperhourLazy = null;
        this.inchespersecondLazy = null;
        this.inchesperminuteLazy = null;
        this.inchesperhourLazy = null;
        this.yardspersecondLazy = null;
        this.yardsperminuteLazy = null;
        this.yardsperhourLazy = null;
        this.knotsLazy = null;
        this.milesperhourLazy = null;
        this.nanometerspersecondLazy = null;
        this.micrometerspersecondLazy = null;
        this.centimeterspersecondLazy = null;
        this.decimeterspersecondLazy = null;
        this.kilometerspersecondLazy = null;
        this.nanometersperminutesLazy = null;
        this.micrometersperminutesLazy = null;
        this.centimetersperminutesLazy = null;
        this.decimetersperminutesLazy = null;
        this.kilometersperminutesLazy = null;
        this.centimetersperhourLazy = null;
        this.kilometersperhourLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Speed is MeterPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get MetersPerSecond() {
        if (this.meterspersecondLazy !== null) {
            return this.meterspersecondLazy;
        }
        return this.meterspersecondLazy = this.convertFromBase(SpeedUnits.MetersPerSecond);
    }
    /** */
    get MetersPerMinutes() {
        if (this.metersperminutesLazy !== null) {
            return this.metersperminutesLazy;
        }
        return this.metersperminutesLazy = this.convertFromBase(SpeedUnits.MetersPerMinutes);
    }
    /** */
    get MetersPerHour() {
        if (this.metersperhourLazy !== null) {
            return this.metersperhourLazy;
        }
        return this.metersperhourLazy = this.convertFromBase(SpeedUnits.MetersPerHour);
    }
    /** */
    get FeetPerSecond() {
        if (this.feetpersecondLazy !== null) {
            return this.feetpersecondLazy;
        }
        return this.feetpersecondLazy = this.convertFromBase(SpeedUnits.FeetPerSecond);
    }
    /** */
    get FeetPerMinute() {
        if (this.feetperminuteLazy !== null) {
            return this.feetperminuteLazy;
        }
        return this.feetperminuteLazy = this.convertFromBase(SpeedUnits.FeetPerMinute);
    }
    /** */
    get FeetPerHour() {
        if (this.feetperhourLazy !== null) {
            return this.feetperhourLazy;
        }
        return this.feetperhourLazy = this.convertFromBase(SpeedUnits.FeetPerHour);
    }
    /** */
    get UsSurveyFeetPerSecond() {
        if (this.ussurveyfeetpersecondLazy !== null) {
            return this.ussurveyfeetpersecondLazy;
        }
        return this.ussurveyfeetpersecondLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }
    /** */
    get UsSurveyFeetPerMinute() {
        if (this.ussurveyfeetperminuteLazy !== null) {
            return this.ussurveyfeetperminuteLazy;
        }
        return this.ussurveyfeetperminuteLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }
    /** */
    get UsSurveyFeetPerHour() {
        if (this.ussurveyfeetperhourLazy !== null) {
            return this.ussurveyfeetperhourLazy;
        }
        return this.ussurveyfeetperhourLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }
    /** */
    get InchesPerSecond() {
        if (this.inchespersecondLazy !== null) {
            return this.inchespersecondLazy;
        }
        return this.inchespersecondLazy = this.convertFromBase(SpeedUnits.InchesPerSecond);
    }
    /** */
    get InchesPerMinute() {
        if (this.inchesperminuteLazy !== null) {
            return this.inchesperminuteLazy;
        }
        return this.inchesperminuteLazy = this.convertFromBase(SpeedUnits.InchesPerMinute);
    }
    /** */
    get InchesPerHour() {
        if (this.inchesperhourLazy !== null) {
            return this.inchesperhourLazy;
        }
        return this.inchesperhourLazy = this.convertFromBase(SpeedUnits.InchesPerHour);
    }
    /** */
    get YardsPerSecond() {
        if (this.yardspersecondLazy !== null) {
            return this.yardspersecondLazy;
        }
        return this.yardspersecondLazy = this.convertFromBase(SpeedUnits.YardsPerSecond);
    }
    /** */
    get YardsPerMinute() {
        if (this.yardsperminuteLazy !== null) {
            return this.yardsperminuteLazy;
        }
        return this.yardsperminuteLazy = this.convertFromBase(SpeedUnits.YardsPerMinute);
    }
    /** */
    get YardsPerHour() {
        if (this.yardsperhourLazy !== null) {
            return this.yardsperhourLazy;
        }
        return this.yardsperhourLazy = this.convertFromBase(SpeedUnits.YardsPerHour);
    }
    /** */
    get Knots() {
        if (this.knotsLazy !== null) {
            return this.knotsLazy;
        }
        return this.knotsLazy = this.convertFromBase(SpeedUnits.Knots);
    }
    /** */
    get MilesPerHour() {
        if (this.milesperhourLazy !== null) {
            return this.milesperhourLazy;
        }
        return this.milesperhourLazy = this.convertFromBase(SpeedUnits.MilesPerHour);
    }
    /** */
    get NanometersPerSecond() {
        if (this.nanometerspersecondLazy !== null) {
            return this.nanometerspersecondLazy;
        }
        return this.nanometerspersecondLazy = this.convertFromBase(SpeedUnits.NanometersPerSecond);
    }
    /** */
    get MicrometersPerSecond() {
        if (this.micrometerspersecondLazy !== null) {
            return this.micrometerspersecondLazy;
        }
        return this.micrometerspersecondLazy = this.convertFromBase(SpeedUnits.MicrometersPerSecond);
    }
    /** */
    get CentimetersPerSecond() {
        if (this.centimeterspersecondLazy !== null) {
            return this.centimeterspersecondLazy;
        }
        return this.centimeterspersecondLazy = this.convertFromBase(SpeedUnits.CentimetersPerSecond);
    }
    /** */
    get DecimetersPerSecond() {
        if (this.decimeterspersecondLazy !== null) {
            return this.decimeterspersecondLazy;
        }
        return this.decimeterspersecondLazy = this.convertFromBase(SpeedUnits.DecimetersPerSecond);
    }
    /** */
    get KilometersPerSecond() {
        if (this.kilometerspersecondLazy !== null) {
            return this.kilometerspersecondLazy;
        }
        return this.kilometerspersecondLazy = this.convertFromBase(SpeedUnits.KilometersPerSecond);
    }
    /** */
    get NanometersPerMinutes() {
        if (this.nanometersperminutesLazy !== null) {
            return this.nanometersperminutesLazy;
        }
        return this.nanometersperminutesLazy = this.convertFromBase(SpeedUnits.NanometersPerMinutes);
    }
    /** */
    get MicrometersPerMinutes() {
        if (this.micrometersperminutesLazy !== null) {
            return this.micrometersperminutesLazy;
        }
        return this.micrometersperminutesLazy = this.convertFromBase(SpeedUnits.MicrometersPerMinutes);
    }
    /** */
    get CentimetersPerMinutes() {
        if (this.centimetersperminutesLazy !== null) {
            return this.centimetersperminutesLazy;
        }
        return this.centimetersperminutesLazy = this.convertFromBase(SpeedUnits.CentimetersPerMinutes);
    }
    /** */
    get DecimetersPerMinutes() {
        if (this.decimetersperminutesLazy !== null) {
            return this.decimetersperminutesLazy;
        }
        return this.decimetersperminutesLazy = this.convertFromBase(SpeedUnits.DecimetersPerMinutes);
    }
    /** */
    get KilometersPerMinutes() {
        if (this.kilometersperminutesLazy !== null) {
            return this.kilometersperminutesLazy;
        }
        return this.kilometersperminutesLazy = this.convertFromBase(SpeedUnits.KilometersPerMinutes);
    }
    /** */
    get CentimetersPerHour() {
        if (this.centimetersperhourLazy !== null) {
            return this.centimetersperhourLazy;
        }
        return this.centimetersperhourLazy = this.convertFromBase(SpeedUnits.CentimetersPerHour);
    }
    /** */
    get KilometersPerHour() {
        if (this.kilometersperhourLazy !== null) {
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
    static FromMetersPerSecond(value) {
        return new Speed(value, SpeedUnits.MetersPerSecond);
    }
    /**
     * Create a new Speed instance from a MetersPerMinutes
     *
     * @param value The unit as MetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMetersPerMinutes(value) {
        return new Speed(value, SpeedUnits.MetersPerMinutes);
    }
    /**
     * Create a new Speed instance from a MetersPerHour
     *
     * @param value The unit as MetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMetersPerHour(value) {
        return new Speed(value, SpeedUnits.MetersPerHour);
    }
    /**
     * Create a new Speed instance from a FeetPerSecond
     *
     * @param value The unit as FeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromFeetPerSecond(value) {
        return new Speed(value, SpeedUnits.FeetPerSecond);
    }
    /**
     * Create a new Speed instance from a FeetPerMinute
     *
     * @param value The unit as FeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromFeetPerMinute(value) {
        return new Speed(value, SpeedUnits.FeetPerMinute);
    }
    /**
     * Create a new Speed instance from a FeetPerHour
     *
     * @param value The unit as FeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromFeetPerHour(value) {
        return new Speed(value, SpeedUnits.FeetPerHour);
    }
    /**
     * Create a new Speed instance from a UsSurveyFeetPerSecond
     *
     * @param value The unit as UsSurveyFeetPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromUsSurveyFeetPerSecond(value) {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerSecond);
    }
    /**
     * Create a new Speed instance from a UsSurveyFeetPerMinute
     *
     * @param value The unit as UsSurveyFeetPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromUsSurveyFeetPerMinute(value) {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerMinute);
    }
    /**
     * Create a new Speed instance from a UsSurveyFeetPerHour
     *
     * @param value The unit as UsSurveyFeetPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromUsSurveyFeetPerHour(value) {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerHour);
    }
    /**
     * Create a new Speed instance from a InchesPerSecond
     *
     * @param value The unit as InchesPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromInchesPerSecond(value) {
        return new Speed(value, SpeedUnits.InchesPerSecond);
    }
    /**
     * Create a new Speed instance from a InchesPerMinute
     *
     * @param value The unit as InchesPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromInchesPerMinute(value) {
        return new Speed(value, SpeedUnits.InchesPerMinute);
    }
    /**
     * Create a new Speed instance from a InchesPerHour
     *
     * @param value The unit as InchesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromInchesPerHour(value) {
        return new Speed(value, SpeedUnits.InchesPerHour);
    }
    /**
     * Create a new Speed instance from a YardsPerSecond
     *
     * @param value The unit as YardsPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromYardsPerSecond(value) {
        return new Speed(value, SpeedUnits.YardsPerSecond);
    }
    /**
     * Create a new Speed instance from a YardsPerMinute
     *
     * @param value The unit as YardsPerMinute to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromYardsPerMinute(value) {
        return new Speed(value, SpeedUnits.YardsPerMinute);
    }
    /**
     * Create a new Speed instance from a YardsPerHour
     *
     * @param value The unit as YardsPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromYardsPerHour(value) {
        return new Speed(value, SpeedUnits.YardsPerHour);
    }
    /**
     * Create a new Speed instance from a Knots
     *
     * @param value The unit as Knots to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKnots(value) {
        return new Speed(value, SpeedUnits.Knots);
    }
    /**
     * Create a new Speed instance from a MilesPerHour
     *
     * @param value The unit as MilesPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMilesPerHour(value) {
        return new Speed(value, SpeedUnits.MilesPerHour);
    }
    /**
     * Create a new Speed instance from a NanometersPerSecond
     *
     * @param value The unit as NanometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromNanometersPerSecond(value) {
        return new Speed(value, SpeedUnits.NanometersPerSecond);
    }
    /**
     * Create a new Speed instance from a MicrometersPerSecond
     *
     * @param value The unit as MicrometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMicrometersPerSecond(value) {
        return new Speed(value, SpeedUnits.MicrometersPerSecond);
    }
    /**
     * Create a new Speed instance from a CentimetersPerSecond
     *
     * @param value The unit as CentimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromCentimetersPerSecond(value) {
        return new Speed(value, SpeedUnits.CentimetersPerSecond);
    }
    /**
     * Create a new Speed instance from a DecimetersPerSecond
     *
     * @param value The unit as DecimetersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromDecimetersPerSecond(value) {
        return new Speed(value, SpeedUnits.DecimetersPerSecond);
    }
    /**
     * Create a new Speed instance from a KilometersPerSecond
     *
     * @param value The unit as KilometersPerSecond to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKilometersPerSecond(value) {
        return new Speed(value, SpeedUnits.KilometersPerSecond);
    }
    /**
     * Create a new Speed instance from a NanometersPerMinutes
     *
     * @param value The unit as NanometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromNanometersPerMinutes(value) {
        return new Speed(value, SpeedUnits.NanometersPerMinutes);
    }
    /**
     * Create a new Speed instance from a MicrometersPerMinutes
     *
     * @param value The unit as MicrometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromMicrometersPerMinutes(value) {
        return new Speed(value, SpeedUnits.MicrometersPerMinutes);
    }
    /**
     * Create a new Speed instance from a CentimetersPerMinutes
     *
     * @param value The unit as CentimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromCentimetersPerMinutes(value) {
        return new Speed(value, SpeedUnits.CentimetersPerMinutes);
    }
    /**
     * Create a new Speed instance from a DecimetersPerMinutes
     *
     * @param value The unit as DecimetersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromDecimetersPerMinutes(value) {
        return new Speed(value, SpeedUnits.DecimetersPerMinutes);
    }
    /**
     * Create a new Speed instance from a KilometersPerMinutes
     *
     * @param value The unit as KilometersPerMinutes to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKilometersPerMinutes(value) {
        return new Speed(value, SpeedUnits.KilometersPerMinutes);
    }
    /**
     * Create a new Speed instance from a CentimetersPerHour
     *
     * @param value The unit as CentimetersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromCentimetersPerHour(value) {
        return new Speed(value, SpeedUnits.CentimetersPerHour);
    }
    /**
     * Create a new Speed instance from a KilometersPerHour
     *
     * @param value The unit as KilometersPerHour to create a new Speed from.
     * @returns The new Speed instance.
     */
    static FromKilometersPerHour(value) {
        return new Speed(value, SpeedUnits.KilometersPerHour);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case SpeedUnits.MetersPerSecond:
                return this.value;
            case SpeedUnits.MetersPerMinutes:
                return this.value * 60;
            case SpeedUnits.MetersPerHour:
                return this.value * 3600;
            case SpeedUnits.FeetPerSecond:
                return this.value / 0.3048;
            case SpeedUnits.FeetPerMinute:
                return this.value / 0.3048 * 60;
            case SpeedUnits.FeetPerHour:
                return this.value / 0.3048 * 3600;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return this.value * 3937 / 1200;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return (this.value * 3937 / 1200) * 60;
            case SpeedUnits.UsSurveyFeetPerHour:
                return (this.value * 3937 / 1200) * 3600;
            case SpeedUnits.InchesPerSecond:
                return this.value / 2.54e-2;
            case SpeedUnits.InchesPerMinute:
                return (this.value / 2.54e-2) * 60;
            case SpeedUnits.InchesPerHour:
                return (this.value / 2.54e-2) * 3600;
            case SpeedUnits.YardsPerSecond:
                return this.value / 0.9144;
            case SpeedUnits.YardsPerMinute:
                return this.value / 0.9144 * 60;
            case SpeedUnits.YardsPerHour:
                return this.value / 0.9144 * 3600;
            case SpeedUnits.Knots:
                return this.value / 0.514444;
            case SpeedUnits.MilesPerHour:
                return this.value / 0.44704;
            case SpeedUnits.NanometersPerSecond:
                return (this.value) / 1e-9;
            case SpeedUnits.MicrometersPerSecond:
                return (this.value) / 0.000001;
            case SpeedUnits.CentimetersPerSecond:
                return (this.value) / 0.01;
            case SpeedUnits.DecimetersPerSecond:
                return (this.value) / 0.1;
            case SpeedUnits.KilometersPerSecond:
                return (this.value) / 1000;
            case SpeedUnits.NanometersPerMinutes:
                return (this.value * 60) / 1e-9;
            case SpeedUnits.MicrometersPerMinutes:
                return (this.value * 60) / 0.000001;
            case SpeedUnits.CentimetersPerMinutes:
                return (this.value * 60) / 0.01;
            case SpeedUnits.DecimetersPerMinutes:
                return (this.value * 60) / 0.1;
            case SpeedUnits.KilometersPerMinutes:
                return (this.value * 60) / 1000;
            case SpeedUnits.CentimetersPerHour:
                return (this.value * 3600) / 0.01;
            case SpeedUnits.KilometersPerHour:
                return (this.value * 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case SpeedUnits.MetersPerSecond:
                return value;
            case SpeedUnits.MetersPerMinutes:
                return value / 60;
            case SpeedUnits.MetersPerHour:
                return value / 3600;
            case SpeedUnits.FeetPerSecond:
                return value * 0.3048;
            case SpeedUnits.FeetPerMinute:
                return value * 0.3048 / 60;
            case SpeedUnits.FeetPerHour:
                return value * 0.3048 / 3600;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return value * 1200 / 3937;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return (value * 1200 / 3937) / 60;
            case SpeedUnits.UsSurveyFeetPerHour:
                return (value * 1200 / 3937) / 3600;
            case SpeedUnits.InchesPerSecond:
                return value * 2.54e-2;
            case SpeedUnits.InchesPerMinute:
                return (value / 60) * 2.54e-2;
            case SpeedUnits.InchesPerHour:
                return (value / 3600) * 2.54e-2;
            case SpeedUnits.YardsPerSecond:
                return value * 0.9144;
            case SpeedUnits.YardsPerMinute:
                return value * 0.9144 / 60;
            case SpeedUnits.YardsPerHour:
                return value * 0.9144 / 3600;
            case SpeedUnits.Knots:
                return value * 0.514444;
            case SpeedUnits.MilesPerHour:
                return value * 0.44704;
            case SpeedUnits.NanometersPerSecond:
                return (value) * 1e-9;
            case SpeedUnits.MicrometersPerSecond:
                return (value) * 0.000001;
            case SpeedUnits.CentimetersPerSecond:
                return (value) * 0.01;
            case SpeedUnits.DecimetersPerSecond:
                return (value) * 0.1;
            case SpeedUnits.KilometersPerSecond:
                return (value) * 1000;
            case SpeedUnits.NanometersPerMinutes:
                return (value / 60) * 1e-9;
            case SpeedUnits.MicrometersPerMinutes:
                return (value / 60) * 0.000001;
            case SpeedUnits.CentimetersPerMinutes:
                return (value / 60) * 0.01;
            case SpeedUnits.DecimetersPerMinutes:
                return (value / 60) * 0.1;
            case SpeedUnits.KilometersPerMinutes:
                return (value / 60) * 1000;
            case SpeedUnits.CentimetersPerHour:
                return (value / 3600) * 0.01;
            case SpeedUnits.KilometersPerHour:
                return (value / 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Speed to string.
     * Note! the default format for Speed is MetersPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Speed.
     * @returns The string format of the Speed.
     */
    toString(toUnit = SpeedUnits.MetersPerSecond) {
        switch (toUnit) {
            case SpeedUnits.MetersPerSecond:
                return this.MetersPerSecond + ` m/s`;
            case SpeedUnits.MetersPerMinutes:
                return this.MetersPerMinutes + ` m/min`;
            case SpeedUnits.MetersPerHour:
                return this.MetersPerHour + ` m/h`;
            case SpeedUnits.FeetPerSecond:
                return this.FeetPerSecond + ` ft/s`;
            case SpeedUnits.FeetPerMinute:
                return this.FeetPerMinute + ` ft/min`;
            case SpeedUnits.FeetPerHour:
                return this.FeetPerHour + ` ft/h`;
            case SpeedUnits.UsSurveyFeetPerSecond:
                return this.UsSurveyFeetPerSecond + ` ftUS/s`;
            case SpeedUnits.UsSurveyFeetPerMinute:
                return this.UsSurveyFeetPerMinute + ` ftUS/min`;
            case SpeedUnits.UsSurveyFeetPerHour:
                return this.UsSurveyFeetPerHour + ` ftUS/h`;
            case SpeedUnits.InchesPerSecond:
                return this.InchesPerSecond + ` in/s`;
            case SpeedUnits.InchesPerMinute:
                return this.InchesPerMinute + ` in/min`;
            case SpeedUnits.InchesPerHour:
                return this.InchesPerHour + ` in/h`;
            case SpeedUnits.YardsPerSecond:
                return this.YardsPerSecond + ` yd/s`;
            case SpeedUnits.YardsPerMinute:
                return this.YardsPerMinute + ` yd/min`;
            case SpeedUnits.YardsPerHour:
                return this.YardsPerHour + ` yd/h`;
            case SpeedUnits.Knots:
                return this.Knots + ` kn`;
            case SpeedUnits.MilesPerHour:
                return this.MilesPerHour + ` mph`;
            case SpeedUnits.NanometersPerSecond:
                return this.NanometersPerSecond + ` m/s`;
            case SpeedUnits.MicrometersPerSecond:
                return this.MicrometersPerSecond + ` m/s`;
            case SpeedUnits.CentimetersPerSecond:
                return this.CentimetersPerSecond + ` m/s`;
            case SpeedUnits.DecimetersPerSecond:
                return this.DecimetersPerSecond + ` m/s`;
            case SpeedUnits.KilometersPerSecond:
                return this.KilometersPerSecond + ` m/s`;
            case SpeedUnits.NanometersPerMinutes:
                return this.NanometersPerMinutes + ` m/min`;
            case SpeedUnits.MicrometersPerMinutes:
                return this.MicrometersPerMinutes + ` m/min`;
            case SpeedUnits.CentimetersPerMinutes:
                return this.CentimetersPerMinutes + ` m/min`;
            case SpeedUnits.DecimetersPerMinutes:
                return this.DecimetersPerMinutes + ` m/min`;
            case SpeedUnits.KilometersPerMinutes:
                return this.KilometersPerMinutes + ` m/min`;
            case SpeedUnits.CentimetersPerHour:
                return this.CentimetersPerHour + ` m/h`;
            case SpeedUnits.KilometersPerHour:
                return this.KilometersPerHour + ` m/h`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Speed = Speed;
//# sourceMappingURL=speed.g.js.map