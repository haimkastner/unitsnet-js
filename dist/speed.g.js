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
        this.value = this.convertToBase(value, fromUnit);
    }
    get MetersPerSecond() {
        return this.convertFromBase(SpeedUnits.MetersPerSecond);
    }
    get MetersPerMinutes() {
        return this.convertFromBase(SpeedUnits.MetersPerMinutes);
    }
    get MetersPerHour() {
        return this.convertFromBase(SpeedUnits.MetersPerHour);
    }
    get FeetPerSecond() {
        return this.convertFromBase(SpeedUnits.FeetPerSecond);
    }
    get FeetPerMinute() {
        return this.convertFromBase(SpeedUnits.FeetPerMinute);
    }
    get FeetPerHour() {
        return this.convertFromBase(SpeedUnits.FeetPerHour);
    }
    get UsSurveyFeetPerSecond() {
        return this.convertFromBase(SpeedUnits.UsSurveyFeetPerSecond);
    }
    get UsSurveyFeetPerMinute() {
        return this.convertFromBase(SpeedUnits.UsSurveyFeetPerMinute);
    }
    get UsSurveyFeetPerHour() {
        return this.convertFromBase(SpeedUnits.UsSurveyFeetPerHour);
    }
    get InchesPerSecond() {
        return this.convertFromBase(SpeedUnits.InchesPerSecond);
    }
    get InchesPerMinute() {
        return this.convertFromBase(SpeedUnits.InchesPerMinute);
    }
    get InchesPerHour() {
        return this.convertFromBase(SpeedUnits.InchesPerHour);
    }
    get YardsPerSecond() {
        return this.convertFromBase(SpeedUnits.YardsPerSecond);
    }
    get YardsPerMinute() {
        return this.convertFromBase(SpeedUnits.YardsPerMinute);
    }
    get YardsPerHour() {
        return this.convertFromBase(SpeedUnits.YardsPerHour);
    }
    get Knots() {
        return this.convertFromBase(SpeedUnits.Knots);
    }
    get MilesPerHour() {
        return this.convertFromBase(SpeedUnits.MilesPerHour);
    }
    get Nanometerspersecond() {
        return this.convertFromBase(SpeedUnits.Nanometerspersecond);
    }
    get Micrometerspersecond() {
        return this.convertFromBase(SpeedUnits.Micrometerspersecond);
    }
    get Centimeterspersecond() {
        return this.convertFromBase(SpeedUnits.Centimeterspersecond);
    }
    get Decimeterspersecond() {
        return this.convertFromBase(SpeedUnits.Decimeterspersecond);
    }
    get Kilometerspersecond() {
        return this.convertFromBase(SpeedUnits.Kilometerspersecond);
    }
    get Nanometersperminutes() {
        return this.convertFromBase(SpeedUnits.Nanometersperminutes);
    }
    get Micrometersperminutes() {
        return this.convertFromBase(SpeedUnits.Micrometersperminutes);
    }
    get Centimetersperminutes() {
        return this.convertFromBase(SpeedUnits.Centimetersperminutes);
    }
    get Decimetersperminutes() {
        return this.convertFromBase(SpeedUnits.Decimetersperminutes);
    }
    get Kilometersperminutes() {
        return this.convertFromBase(SpeedUnits.Kilometersperminutes);
    }
    get Centimetersperhour() {
        return this.convertFromBase(SpeedUnits.Centimetersperhour);
    }
    get Kilometersperhour() {
        return this.convertFromBase(SpeedUnits.Kilometersperhour);
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
                return (this.value) * 1e-9;
            case SpeedUnits.Micrometerspersecond:
                return (this.value) * 0.000001;
            case SpeedUnits.Centimeterspersecond:
                return (this.value) * 0.01;
            case SpeedUnits.Decimeterspersecond:
                return (this.value) * 0.1;
            case SpeedUnits.Kilometerspersecond:
                return (this.value) * 1000;
            case SpeedUnits.Nanometersperminutes:
                return (this.value / 60) * 1e-9;
            case SpeedUnits.Micrometersperminutes:
                return (this.value / 60) * 0.000001;
            case SpeedUnits.Centimetersperminutes:
                return (this.value / 60) * 0.01;
            case SpeedUnits.Decimetersperminutes:
                return (this.value / 60) * 0.1;
            case SpeedUnits.Kilometersperminutes:
                return (this.value / 60) * 1000;
            case SpeedUnits.Centimetersperhour:
                return (this.value / 3600) * 0.01;
            case SpeedUnits.Kilometersperhour:
                return (this.value / 3600) * 1000;
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
                return (value) / 1e-9;
            case SpeedUnits.Micrometerspersecond:
                return (value) / 0.000001;
            case SpeedUnits.Centimeterspersecond:
                return (value) / 0.01;
            case SpeedUnits.Decimeterspersecond:
                return (value) / 0.1;
            case SpeedUnits.Kilometerspersecond:
                return (value) / 1000;
            case SpeedUnits.Nanometersperminutes:
                return (value * 60) / 1e-9;
            case SpeedUnits.Micrometersperminutes:
                return (value * 60) / 0.000001;
            case SpeedUnits.Centimetersperminutes:
                return (value * 60) / 0.01;
            case SpeedUnits.Decimetersperminutes:
                return (value * 60) / 0.1;
            case SpeedUnits.Kilometersperminutes:
                return (value * 60) / 1000;
            case SpeedUnits.Centimetersperhour:
                return (value * 3600) / 0.01;
            case SpeedUnits.Kilometersperhour:
                return (value * 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Speed = Speed;
//# sourceMappingURL=speed.g.js.map