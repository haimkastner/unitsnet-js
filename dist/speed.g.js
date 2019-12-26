"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpeedUnits;
(function (SpeedUnits) {
    SpeedUnits[SpeedUnits["MetersPerSecond"] = 0] = "MetersPerSecond";
    SpeedUnits[SpeedUnits["MetersPerMinutes"] = 1] = "MetersPerMinutes";
    SpeedUnits[SpeedUnits["MetersPerHour"] = 2] = "MetersPerHour";
    SpeedUnits[SpeedUnits["FeetPerSecond"] = 3] = "FeetPerSecond";
    SpeedUnits[SpeedUnits["FeetPerMinute"] = 4] = "FeetPerMinute";
    SpeedUnits[SpeedUnits["FeetPerHour"] = 5] = "FeetPerHour";
    SpeedUnits[SpeedUnits["UsSurveyFeetPerSecond"] = 6] = "UsSurveyFeetPerSecond";
    SpeedUnits[SpeedUnits["UsSurveyFeetPerMinute"] = 7] = "UsSurveyFeetPerMinute";
    SpeedUnits[SpeedUnits["UsSurveyFeetPerHour"] = 8] = "UsSurveyFeetPerHour";
    SpeedUnits[SpeedUnits["InchesPerSecond"] = 9] = "InchesPerSecond";
    SpeedUnits[SpeedUnits["InchesPerMinute"] = 10] = "InchesPerMinute";
    SpeedUnits[SpeedUnits["InchesPerHour"] = 11] = "InchesPerHour";
    SpeedUnits[SpeedUnits["YardsPerSecond"] = 12] = "YardsPerSecond";
    SpeedUnits[SpeedUnits["YardsPerMinute"] = 13] = "YardsPerMinute";
    SpeedUnits[SpeedUnits["YardsPerHour"] = 14] = "YardsPerHour";
    SpeedUnits[SpeedUnits["Knots"] = 15] = "Knots";
    SpeedUnits[SpeedUnits["MilesPerHour"] = 16] = "MilesPerHour";
    SpeedUnits[SpeedUnits["Nanometerspersecond"] = 17] = "Nanometerspersecond";
    SpeedUnits[SpeedUnits["Micrometerspersecond"] = 18] = "Micrometerspersecond";
    SpeedUnits[SpeedUnits["Centimeterspersecond"] = 19] = "Centimeterspersecond";
    SpeedUnits[SpeedUnits["Decimeterspersecond"] = 20] = "Decimeterspersecond";
    SpeedUnits[SpeedUnits["Kilometerspersecond"] = 21] = "Kilometerspersecond";
    SpeedUnits[SpeedUnits["Nanometersperminutes"] = 22] = "Nanometersperminutes";
    SpeedUnits[SpeedUnits["Micrometersperminutes"] = 23] = "Micrometersperminutes";
    SpeedUnits[SpeedUnits["Centimetersperminutes"] = 24] = "Centimetersperminutes";
    SpeedUnits[SpeedUnits["Decimetersperminutes"] = 25] = "Decimetersperminutes";
    SpeedUnits[SpeedUnits["Kilometersperminutes"] = 26] = "Kilometersperminutes";
    SpeedUnits[SpeedUnits["Centimetersperhour"] = 27] = "Centimetersperhour";
    SpeedUnits[SpeedUnits["Kilometersperhour"] = 28] = "Kilometersperhour";
})(SpeedUnits = exports.SpeedUnits || (exports.SpeedUnits = {}));
class Speed {
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
        this.value = this.convertToBase(value, fromUnit);
    }
    get MetersPerSecond() {
        if (this.meterspersecondLazy !== null) {
            return this.meterspersecondLazy;
        }
        return this.meterspersecondLazy = this.convertFromBase(SpeedUnits.MetersPerSecond);
    }
    get MetersPerMinutes() {
        if (this.metersperminutesLazy !== null) {
            return this.metersperminutesLazy;
        }
        return this.metersperminutesLazy = this.convertFromBase(SpeedUnits.MetersPerMinutes);
    }
    get MetersPerHour() {
        if (this.metersperhourLazy !== null) {
            return this.metersperhourLazy;
        }
        return this.metersperhourLazy = this.convertFromBase(SpeedUnits.MetersPerHour);
    }
    get FeetPerSecond() {
        if (this.feetpersecondLazy !== null) {
            return this.feetpersecondLazy;
        }
        return this.feetpersecondLazy = this.convertFromBase(SpeedUnits.FeetPerSecond);
    }
    get FeetPerMinute() {
        if (this.feetperminuteLazy !== null) {
            return this.feetperminuteLazy;
        }
        return this.feetperminuteLazy = this.convertFromBase(SpeedUnits.FeetPerMinute);
    }
    get FeetPerHour() {
        if (this.feetperhourLazy !== null) {
            return this.feetperhourLazy;
        }
        return this.feetperhourLazy = this.convertFromBase(SpeedUnits.FeetPerHour);
    }
    get UsSurveyFeetPerSecond() {
        if (this.ussurveyfeetpersecondLazy !== null) {
            return this.ussurveyfeetpersecondLazy;
        }
        return this.ussurveyfeetpersecondLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }
    get UsSurveyFeetPerMinute() {
        if (this.ussurveyfeetperminuteLazy !== null) {
            return this.ussurveyfeetperminuteLazy;
        }
        return this.ussurveyfeetperminuteLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }
    get UsSurveyFeetPerHour() {
        if (this.ussurveyfeetperhourLazy !== null) {
            return this.ussurveyfeetperhourLazy;
        }
        return this.ussurveyfeetperhourLazy = this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }
    get InchesPerSecond() {
        if (this.inchespersecondLazy !== null) {
            return this.inchespersecondLazy;
        }
        return this.inchespersecondLazy = this.convertFromBase(SpeedUnits.InchesPerSecond);
    }
    get InchesPerMinute() {
        if (this.inchesperminuteLazy !== null) {
            return this.inchesperminuteLazy;
        }
        return this.inchesperminuteLazy = this.convertFromBase(SpeedUnits.InchesPerMinute);
    }
    get InchesPerHour() {
        if (this.inchesperhourLazy !== null) {
            return this.inchesperhourLazy;
        }
        return this.inchesperhourLazy = this.convertFromBase(SpeedUnits.InchesPerHour);
    }
    get YardsPerSecond() {
        if (this.yardspersecondLazy !== null) {
            return this.yardspersecondLazy;
        }
        return this.yardspersecondLazy = this.convertFromBase(SpeedUnits.YardsPerSecond);
    }
    get YardsPerMinute() {
        if (this.yardsperminuteLazy !== null) {
            return this.yardsperminuteLazy;
        }
        return this.yardsperminuteLazy = this.convertFromBase(SpeedUnits.YardsPerMinute);
    }
    get YardsPerHour() {
        if (this.yardsperhourLazy !== null) {
            return this.yardsperhourLazy;
        }
        return this.yardsperhourLazy = this.convertFromBase(SpeedUnits.YardsPerHour);
    }
    get Knots() {
        if (this.knotsLazy !== null) {
            return this.knotsLazy;
        }
        return this.knotsLazy = this.convertFromBase(SpeedUnits.Knots);
    }
    get MilesPerHour() {
        if (this.milesperhourLazy !== null) {
            return this.milesperhourLazy;
        }
        return this.milesperhourLazy = this.convertFromBase(SpeedUnits.MilesPerHour);
    }
    get Nanometerspersecond() {
        if (this.nanometerspersecondLazy !== null) {
            return this.nanometerspersecondLazy;
        }
        return this.nanometerspersecondLazy = this.convertFromBase(SpeedUnits.Nanometerspersecond);
    }
    get Micrometerspersecond() {
        if (this.micrometerspersecondLazy !== null) {
            return this.micrometerspersecondLazy;
        }
        return this.micrometerspersecondLazy = this.convertFromBase(SpeedUnits.Micrometerspersecond);
    }
    get Centimeterspersecond() {
        if (this.centimeterspersecondLazy !== null) {
            return this.centimeterspersecondLazy;
        }
        return this.centimeterspersecondLazy = this.convertFromBase(SpeedUnits.Centimeterspersecond);
    }
    get Decimeterspersecond() {
        if (this.decimeterspersecondLazy !== null) {
            return this.decimeterspersecondLazy;
        }
        return this.decimeterspersecondLazy = this.convertFromBase(SpeedUnits.Decimeterspersecond);
    }
    get Kilometerspersecond() {
        if (this.kilometerspersecondLazy !== null) {
            return this.kilometerspersecondLazy;
        }
        return this.kilometerspersecondLazy = this.convertFromBase(SpeedUnits.Kilometerspersecond);
    }
    get Nanometersperminutes() {
        if (this.nanometersperminutesLazy !== null) {
            return this.nanometersperminutesLazy;
        }
        return this.nanometersperminutesLazy = this.convertFromBase(SpeedUnits.Nanometersperminutes);
    }
    get Micrometersperminutes() {
        if (this.micrometersperminutesLazy !== null) {
            return this.micrometersperminutesLazy;
        }
        return this.micrometersperminutesLazy = this.convertFromBase(SpeedUnits.Micrometersperminutes);
    }
    get Centimetersperminutes() {
        if (this.centimetersperminutesLazy !== null) {
            return this.centimetersperminutesLazy;
        }
        return this.centimetersperminutesLazy = this.convertFromBase(SpeedUnits.Centimetersperminutes);
    }
    get Decimetersperminutes() {
        if (this.decimetersperminutesLazy !== null) {
            return this.decimetersperminutesLazy;
        }
        return this.decimetersperminutesLazy = this.convertFromBase(SpeedUnits.Decimetersperminutes);
    }
    get Kilometersperminutes() {
        if (this.kilometersperminutesLazy !== null) {
            return this.kilometersperminutesLazy;
        }
        return this.kilometersperminutesLazy = this.convertFromBase(SpeedUnits.Kilometersperminutes);
    }
    get Centimetersperhour() {
        if (this.centimetersperhourLazy !== null) {
            return this.centimetersperhourLazy;
        }
        return this.centimetersperhourLazy = this.convertFromBase(SpeedUnits.Centimetersperhour);
    }
    get Kilometersperhour() {
        if (this.kilometersperhourLazy !== null) {
            return this.kilometersperhourLazy;
        }
        return this.kilometersperhourLazy = this.convertFromBase(SpeedUnits.Kilometersperhour);
    }
    static FromMetersPerSecond(value) {
        return new Speed(value, SpeedUnits.MetersPerSecond);
    }
    static FromMetersPerMinutes(value) {
        return new Speed(value, SpeedUnits.MetersPerMinutes);
    }
    static FromMetersPerHour(value) {
        return new Speed(value, SpeedUnits.MetersPerHour);
    }
    static FromFeetPerSecond(value) {
        return new Speed(value, SpeedUnits.FeetPerSecond);
    }
    static FromFeetPerMinute(value) {
        return new Speed(value, SpeedUnits.FeetPerMinute);
    }
    static FromFeetPerHour(value) {
        return new Speed(value, SpeedUnits.FeetPerHour);
    }
    static FromUsSurveyFeetPerSecond(value) {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerSecond);
    }
    static FromUsSurveyFeetPerMinute(value) {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerMinute);
    }
    static FromUsSurveyFeetPerHour(value) {
        return new Speed(value, SpeedUnits.UsSurveyFeetPerHour);
    }
    static FromInchesPerSecond(value) {
        return new Speed(value, SpeedUnits.InchesPerSecond);
    }
    static FromInchesPerMinute(value) {
        return new Speed(value, SpeedUnits.InchesPerMinute);
    }
    static FromInchesPerHour(value) {
        return new Speed(value, SpeedUnits.InchesPerHour);
    }
    static FromYardsPerSecond(value) {
        return new Speed(value, SpeedUnits.YardsPerSecond);
    }
    static FromYardsPerMinute(value) {
        return new Speed(value, SpeedUnits.YardsPerMinute);
    }
    static FromYardsPerHour(value) {
        return new Speed(value, SpeedUnits.YardsPerHour);
    }
    static FromKnots(value) {
        return new Speed(value, SpeedUnits.Knots);
    }
    static FromMilesPerHour(value) {
        return new Speed(value, SpeedUnits.MilesPerHour);
    }
    static FromNanometerspersecond(value) {
        return new Speed(value, SpeedUnits.Nanometerspersecond);
    }
    static FromMicrometerspersecond(value) {
        return new Speed(value, SpeedUnits.Micrometerspersecond);
    }
    static FromCentimeterspersecond(value) {
        return new Speed(value, SpeedUnits.Centimeterspersecond);
    }
    static FromDecimeterspersecond(value) {
        return new Speed(value, SpeedUnits.Decimeterspersecond);
    }
    static FromKilometerspersecond(value) {
        return new Speed(value, SpeedUnits.Kilometerspersecond);
    }
    static FromNanometersperminutes(value) {
        return new Speed(value, SpeedUnits.Nanometersperminutes);
    }
    static FromMicrometersperminutes(value) {
        return new Speed(value, SpeedUnits.Micrometersperminutes);
    }
    static FromCentimetersperminutes(value) {
        return new Speed(value, SpeedUnits.Centimetersperminutes);
    }
    static FromDecimetersperminutes(value) {
        return new Speed(value, SpeedUnits.Decimetersperminutes);
    }
    static FromKilometersperminutes(value) {
        return new Speed(value, SpeedUnits.Kilometersperminutes);
    }
    static FromCentimetersperhour(value) {
        return new Speed(value, SpeedUnits.Centimetersperhour);
    }
    static FromKilometersperhour(value) {
        return new Speed(value, SpeedUnits.Kilometersperhour);
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
            case SpeedUnits.Nanometerspersecond:
                return (this.value) / 1e-9;
            case SpeedUnits.Micrometerspersecond:
                return (this.value) / 0.000001;
            case SpeedUnits.Centimeterspersecond:
                return (this.value) / 0.01;
            case SpeedUnits.Decimeterspersecond:
                return (this.value) / 0.1;
            case SpeedUnits.Kilometerspersecond:
                return (this.value) / 1000;
            case SpeedUnits.Nanometersperminutes:
                return (this.value * 60) / 1e-9;
            case SpeedUnits.Micrometersperminutes:
                return (this.value * 60) / 0.000001;
            case SpeedUnits.Centimetersperminutes:
                return (this.value * 60) / 0.01;
            case SpeedUnits.Decimetersperminutes:
                return (this.value * 60) / 0.1;
            case SpeedUnits.Kilometersperminutes:
                return (this.value * 60) / 1000;
            case SpeedUnits.Centimetersperhour:
                return (this.value * 3600) / 0.01;
            case SpeedUnits.Kilometersperhour:
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
            case SpeedUnits.Nanometerspersecond:
                return (value) * 1e-9;
            case SpeedUnits.Micrometerspersecond:
                return (value) * 0.000001;
            case SpeedUnits.Centimeterspersecond:
                return (value) * 0.01;
            case SpeedUnits.Decimeterspersecond:
                return (value) * 0.1;
            case SpeedUnits.Kilometerspersecond:
                return (value) * 1000;
            case SpeedUnits.Nanometersperminutes:
                return (value / 60) * 1e-9;
            case SpeedUnits.Micrometersperminutes:
                return (value / 60) * 0.000001;
            case SpeedUnits.Centimetersperminutes:
                return (value / 60) * 0.01;
            case SpeedUnits.Decimetersperminutes:
                return (value / 60) * 0.1;
            case SpeedUnits.Kilometersperminutes:
                return (value / 60) * 1000;
            case SpeedUnits.Centimetersperhour:
                return (value / 3600) * 0.01;
            case SpeedUnits.Kilometersperhour:
                return (value / 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Speed = Speed;
//# sourceMappingURL=speed.g.js.map