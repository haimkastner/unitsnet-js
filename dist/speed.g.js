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
    SpeedUnits[SpeedUnits["NanometerPerSecond"] = 17] = "NanometerPerSecond";
    SpeedUnits[SpeedUnits["MicrometerPerSecond"] = 18] = "MicrometerPerSecond";
    SpeedUnits[SpeedUnits["CentimeterPerSecond"] = 19] = "CentimeterPerSecond";
    SpeedUnits[SpeedUnits["DecimeterPerSecond"] = 20] = "DecimeterPerSecond";
    SpeedUnits[SpeedUnits["KilometerPerSecond"] = 21] = "KilometerPerSecond";
    SpeedUnits[SpeedUnits["NanometerPerMinute"] = 22] = "NanometerPerMinute";
    SpeedUnits[SpeedUnits["MicrometerPerMinute"] = 23] = "MicrometerPerMinute";
    SpeedUnits[SpeedUnits["CentimeterPerMinute"] = 24] = "CentimeterPerMinute";
    SpeedUnits[SpeedUnits["DecimeterPerMinute"] = 25] = "DecimeterPerMinute";
    SpeedUnits[SpeedUnits["KilometerPerMinute"] = 26] = "KilometerPerMinute";
    SpeedUnits[SpeedUnits["CentimeterPerHour"] = 27] = "CentimeterPerHour";
    SpeedUnits[SpeedUnits["KilometerPerHour"] = 28] = "KilometerPerHour";
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
        this.nanometerpersecondLazy = null;
        this.micrometerpersecondLazy = null;
        this.centimeterpersecondLazy = null;
        this.decimeterpersecondLazy = null;
        this.kilometerpersecondLazy = null;
        this.nanometerperminuteLazy = null;
        this.micrometerperminuteLazy = null;
        this.centimeterperminuteLazy = null;
        this.decimeterperminuteLazy = null;
        this.kilometerperminuteLazy = null;
        this.centimeterperhourLazy = null;
        this.kilometerperhourLazy = null;
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
    get NanometerPerSecond() {
        if (this.nanometerpersecondLazy !== null) {
            return this.nanometerpersecondLazy;
        }
        return this.nanometerpersecondLazy = this.convertFromBase(SpeedUnits.NanometerPerSecond);
    }
    get MicrometerPerSecond() {
        if (this.micrometerpersecondLazy !== null) {
            return this.micrometerpersecondLazy;
        }
        return this.micrometerpersecondLazy = this.convertFromBase(SpeedUnits.MicrometerPerSecond);
    }
    get CentimeterPerSecond() {
        if (this.centimeterpersecondLazy !== null) {
            return this.centimeterpersecondLazy;
        }
        return this.centimeterpersecondLazy = this.convertFromBase(SpeedUnits.CentimeterPerSecond);
    }
    get DecimeterPerSecond() {
        if (this.decimeterpersecondLazy !== null) {
            return this.decimeterpersecondLazy;
        }
        return this.decimeterpersecondLazy = this.convertFromBase(SpeedUnits.DecimeterPerSecond);
    }
    get KilometerPerSecond() {
        if (this.kilometerpersecondLazy !== null) {
            return this.kilometerpersecondLazy;
        }
        return this.kilometerpersecondLazy = this.convertFromBase(SpeedUnits.KilometerPerSecond);
    }
    get NanometerPerMinute() {
        if (this.nanometerperminuteLazy !== null) {
            return this.nanometerperminuteLazy;
        }
        return this.nanometerperminuteLazy = this.convertFromBase(SpeedUnits.NanometerPerMinute);
    }
    get MicrometerPerMinute() {
        if (this.micrometerperminuteLazy !== null) {
            return this.micrometerperminuteLazy;
        }
        return this.micrometerperminuteLazy = this.convertFromBase(SpeedUnits.MicrometerPerMinute);
    }
    get CentimeterPerMinute() {
        if (this.centimeterperminuteLazy !== null) {
            return this.centimeterperminuteLazy;
        }
        return this.centimeterperminuteLazy = this.convertFromBase(SpeedUnits.CentimeterPerMinute);
    }
    get DecimeterPerMinute() {
        if (this.decimeterperminuteLazy !== null) {
            return this.decimeterperminuteLazy;
        }
        return this.decimeterperminuteLazy = this.convertFromBase(SpeedUnits.DecimeterPerMinute);
    }
    get KilometerPerMinute() {
        if (this.kilometerperminuteLazy !== null) {
            return this.kilometerperminuteLazy;
        }
        return this.kilometerperminuteLazy = this.convertFromBase(SpeedUnits.KilometerPerMinute);
    }
    get CentimeterPerHour() {
        if (this.centimeterperhourLazy !== null) {
            return this.centimeterperhourLazy;
        }
        return this.centimeterperhourLazy = this.convertFromBase(SpeedUnits.CentimeterPerHour);
    }
    get KilometerPerHour() {
        if (this.kilometerperhourLazy !== null) {
            return this.kilometerperhourLazy;
        }
        return this.kilometerperhourLazy = this.convertFromBase(SpeedUnits.KilometerPerHour);
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
    static FromNanometerPerSecond(value) {
        return new Speed(value, SpeedUnits.NanometerPerSecond);
    }
    static FromMicrometerPerSecond(value) {
        return new Speed(value, SpeedUnits.MicrometerPerSecond);
    }
    static FromCentimeterPerSecond(value) {
        return new Speed(value, SpeedUnits.CentimeterPerSecond);
    }
    static FromDecimeterPerSecond(value) {
        return new Speed(value, SpeedUnits.DecimeterPerSecond);
    }
    static FromKilometerPerSecond(value) {
        return new Speed(value, SpeedUnits.KilometerPerSecond);
    }
    static FromNanometerPerMinute(value) {
        return new Speed(value, SpeedUnits.NanometerPerMinute);
    }
    static FromMicrometerPerMinute(value) {
        return new Speed(value, SpeedUnits.MicrometerPerMinute);
    }
    static FromCentimeterPerMinute(value) {
        return new Speed(value, SpeedUnits.CentimeterPerMinute);
    }
    static FromDecimeterPerMinute(value) {
        return new Speed(value, SpeedUnits.DecimeterPerMinute);
    }
    static FromKilometerPerMinute(value) {
        return new Speed(value, SpeedUnits.KilometerPerMinute);
    }
    static FromCentimeterPerHour(value) {
        return new Speed(value, SpeedUnits.CentimeterPerHour);
    }
    static FromKilometerPerHour(value) {
        return new Speed(value, SpeedUnits.KilometerPerHour);
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
            case SpeedUnits.NanometerPerSecond:
                return (this.value) / 1e-9;
            case SpeedUnits.MicrometerPerSecond:
                return (this.value) / 0.000001;
            case SpeedUnits.CentimeterPerSecond:
                return (this.value) / 0.01;
            case SpeedUnits.DecimeterPerSecond:
                return (this.value) / 0.1;
            case SpeedUnits.KilometerPerSecond:
                return (this.value) / 1000;
            case SpeedUnits.NanometerPerMinute:
                return (this.value * 60) / 1e-9;
            case SpeedUnits.MicrometerPerMinute:
                return (this.value * 60) / 0.000001;
            case SpeedUnits.CentimeterPerMinute:
                return (this.value * 60) / 0.01;
            case SpeedUnits.DecimeterPerMinute:
                return (this.value * 60) / 0.1;
            case SpeedUnits.KilometerPerMinute:
                return (this.value * 60) / 1000;
            case SpeedUnits.CentimeterPerHour:
                return (this.value * 3600) / 0.01;
            case SpeedUnits.KilometerPerHour:
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
            case SpeedUnits.NanometerPerSecond:
                return (value) * 1e-9;
            case SpeedUnits.MicrometerPerSecond:
                return (value) * 0.000001;
            case SpeedUnits.CentimeterPerSecond:
                return (value) * 0.01;
            case SpeedUnits.DecimeterPerSecond:
                return (value) * 0.1;
            case SpeedUnits.KilometerPerSecond:
                return (value) * 1000;
            case SpeedUnits.NanometerPerMinute:
                return (value / 60) * 1e-9;
            case SpeedUnits.MicrometerPerMinute:
                return (value / 60) * 0.000001;
            case SpeedUnits.CentimeterPerMinute:
                return (value / 60) * 0.01;
            case SpeedUnits.DecimeterPerMinute:
                return (value / 60) * 0.1;
            case SpeedUnits.KilometerPerMinute:
                return (value / 60) * 1000;
            case SpeedUnits.CentimeterPerHour:
                return (value / 3600) * 0.01;
            case SpeedUnits.KilometerPerHour:
                return (value / 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
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
            case SpeedUnits.NanometerPerSecond:
                return this.NanometerPerSecond + ` m/s`;
            case SpeedUnits.MicrometerPerSecond:
                return this.MicrometerPerSecond + ` m/s`;
            case SpeedUnits.CentimeterPerSecond:
                return this.CentimeterPerSecond + ` m/s`;
            case SpeedUnits.DecimeterPerSecond:
                return this.DecimeterPerSecond + ` m/s`;
            case SpeedUnits.KilometerPerSecond:
                return this.KilometerPerSecond + ` m/s`;
            case SpeedUnits.NanometerPerMinute:
                return this.NanometerPerMinute + ` m/min`;
            case SpeedUnits.MicrometerPerMinute:
                return this.MicrometerPerMinute + ` m/min`;
            case SpeedUnits.CentimeterPerMinute:
                return this.CentimeterPerMinute + ` m/min`;
            case SpeedUnits.DecimeterPerMinute:
                return this.DecimeterPerMinute + ` m/min`;
            case SpeedUnits.KilometerPerMinute:
                return this.KilometerPerMinute + ` m/min`;
            case SpeedUnits.CentimeterPerHour:
                return this.CentimeterPerHour + ` m/h`;
            case SpeedUnits.KilometerPerHour:
                return this.KilometerPerHour + ` m/h`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Speed = Speed;
//# sourceMappingURL=speed.g.js.map