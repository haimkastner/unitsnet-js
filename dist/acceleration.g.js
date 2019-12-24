"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccelerationUnits;
(function (AccelerationUnits) {
    AccelerationUnits[AccelerationUnits["MetersPerSecondSquared"] = 0] = "MetersPerSecondSquared";
    AccelerationUnits[AccelerationUnits["InchesPerSecondSquared"] = 1] = "InchesPerSecondSquared";
    AccelerationUnits[AccelerationUnits["FeetPerSecondSquared"] = 2] = "FeetPerSecondSquared";
    AccelerationUnits[AccelerationUnits["KnotsPerSecond"] = 3] = "KnotsPerSecond";
    AccelerationUnits[AccelerationUnits["KnotsPerMinute"] = 4] = "KnotsPerMinute";
    AccelerationUnits[AccelerationUnits["KnotsPerHour"] = 5] = "KnotsPerHour";
    AccelerationUnits[AccelerationUnits["StandardGravity"] = 6] = "StandardGravity";
    AccelerationUnits[AccelerationUnits["Nanometerspersecondsquared"] = 7] = "Nanometerspersecondsquared";
    AccelerationUnits[AccelerationUnits["Micrometerspersecondsquared"] = 8] = "Micrometerspersecondsquared";
    AccelerationUnits[AccelerationUnits["Centimeterspersecondsquared"] = 9] = "Centimeterspersecondsquared";
    AccelerationUnits[AccelerationUnits["Decimeterspersecondsquared"] = 10] = "Decimeterspersecondsquared";
    AccelerationUnits[AccelerationUnits["Kilometerspersecondsquared"] = 11] = "Kilometerspersecondsquared";
})(AccelerationUnits = exports.AccelerationUnits || (exports.AccelerationUnits = {}));
class Acceleration {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get MetersPerSecondSquared() {
        return this.convertFromBase(AccelerationUnits.MetersPerSecondSquared);
    }
    get InchesPerSecondSquared() {
        return this.convertFromBase(AccelerationUnits.InchesPerSecondSquared);
    }
    get FeetPerSecondSquared() {
        return this.convertFromBase(AccelerationUnits.FeetPerSecondSquared);
    }
    get KnotsPerSecond() {
        return this.convertFromBase(AccelerationUnits.KnotsPerSecond);
    }
    get KnotsPerMinute() {
        return this.convertFromBase(AccelerationUnits.KnotsPerMinute);
    }
    get KnotsPerHour() {
        return this.convertFromBase(AccelerationUnits.KnotsPerHour);
    }
    get StandardGravity() {
        return this.convertFromBase(AccelerationUnits.StandardGravity);
    }
    get Nanometerspersecondsquared() {
        return this.convertFromBase(AccelerationUnits.Nanometerspersecondsquared);
    }
    get Micrometerspersecondsquared() {
        return this.convertFromBase(AccelerationUnits.Micrometerspersecondsquared);
    }
    get Centimeterspersecondsquared() {
        return this.convertFromBase(AccelerationUnits.Centimeterspersecondsquared);
    }
    get Decimeterspersecondsquared() {
        return this.convertFromBase(AccelerationUnits.Decimeterspersecondsquared);
    }
    get Kilometerspersecondsquared() {
        return this.convertFromBase(AccelerationUnits.Kilometerspersecondsquared);
    }
    static FromMetersPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.MetersPerSecondSquared);
    }
    static FromInchesPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.InchesPerSecondSquared);
    }
    static FromFeetPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.FeetPerSecondSquared);
    }
    static FromKnotsPerSecond(value) {
        return new Acceleration(value, AccelerationUnits.KnotsPerSecond);
    }
    static FromKnotsPerMinute(value) {
        return new Acceleration(value, AccelerationUnits.KnotsPerMinute);
    }
    static FromKnotsPerHour(value) {
        return new Acceleration(value, AccelerationUnits.KnotsPerHour);
    }
    static FromStandardGravity(value) {
        return new Acceleration(value, AccelerationUnits.StandardGravity);
    }
    static FromNanometerspersecondsquared(value) {
        return new Acceleration(value, AccelerationUnits.Nanometerspersecondsquared);
    }
    static FromMicrometerspersecondsquared(value) {
        return new Acceleration(value, AccelerationUnits.Micrometerspersecondsquared);
    }
    static FromCentimeterspersecondsquared(value) {
        return new Acceleration(value, AccelerationUnits.Centimeterspersecondsquared);
    }
    static FromDecimeterspersecondsquared(value) {
        return new Acceleration(value, AccelerationUnits.Decimeterspersecondsquared);
    }
    static FromKilometerspersecondsquared(value) {
        return new Acceleration(value, AccelerationUnits.Kilometerspersecondsquared);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AccelerationUnits.MetersPerSecondSquared:
                return this.value;
            case AccelerationUnits.InchesPerSecondSquared:
                return this.value / 0.0254;
            case AccelerationUnits.FeetPerSecondSquared:
                return this.value / 0.304800;
            case AccelerationUnits.KnotsPerSecond:
                return this.value / 0.5144444444444;
            case AccelerationUnits.KnotsPerMinute:
                return this.value / 0.5144444444444 * 60;
            case AccelerationUnits.KnotsPerHour:
                return this.value / 0.5144444444444 * 3600;
            case AccelerationUnits.StandardGravity:
                return this.value / 9.80665;
            case AccelerationUnits.Nanometerspersecondsquared:
                return (this.value) / 1e-9;
            case AccelerationUnits.Micrometerspersecondsquared:
                return (this.value) / 0.000001;
            case AccelerationUnits.Centimeterspersecondsquared:
                return (this.value) / 0.01;
            case AccelerationUnits.Decimeterspersecondsquared:
                return (this.value) / 0.1;
            case AccelerationUnits.Kilometerspersecondsquared:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AccelerationUnits.MetersPerSecondSquared:
                return value;
            case AccelerationUnits.InchesPerSecondSquared:
                return value * 0.0254;
            case AccelerationUnits.FeetPerSecondSquared:
                return value * 0.304800;
            case AccelerationUnits.KnotsPerSecond:
                return value * 0.5144444444444;
            case AccelerationUnits.KnotsPerMinute:
                return value * 0.5144444444444 / 60;
            case AccelerationUnits.KnotsPerHour:
                return value * 0.5144444444444 / 3600;
            case AccelerationUnits.StandardGravity:
                return value * 9.80665;
            case AccelerationUnits.Nanometerspersecondsquared:
                return (value) * 1e-9;
            case AccelerationUnits.Micrometerspersecondsquared:
                return (value) * 0.000001;
            case AccelerationUnits.Centimeterspersecondsquared:
                return (value) * 0.01;
            case AccelerationUnits.Decimeterspersecondsquared:
                return (value) * 0.1;
            case AccelerationUnits.Kilometerspersecondsquared:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Acceleration = Acceleration;
//# sourceMappingURL=acceleration.g.js.map