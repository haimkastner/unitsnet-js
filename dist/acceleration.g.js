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
    AccelerationUnits[AccelerationUnits["NanometersPerSecondSquared"] = 7] = "NanometersPerSecondSquared";
    AccelerationUnits[AccelerationUnits["MicrometersPerSecondSquared"] = 8] = "MicrometersPerSecondSquared";
    AccelerationUnits[AccelerationUnits["CentimetersPerSecondSquared"] = 9] = "CentimetersPerSecondSquared";
    AccelerationUnits[AccelerationUnits["DecimetersPerSecondSquared"] = 10] = "DecimetersPerSecondSquared";
    AccelerationUnits[AccelerationUnits["KilometersPerSecondSquared"] = 11] = "KilometersPerSecondSquared";
})(AccelerationUnits = exports.AccelerationUnits || (exports.AccelerationUnits = {}));
class Acceleration {
    constructor(value, fromUnit) {
        this.meterspersecondsquaredLazy = null;
        this.inchespersecondsquaredLazy = null;
        this.feetpersecondsquaredLazy = null;
        this.knotspersecondLazy = null;
        this.knotsperminuteLazy = null;
        this.knotsperhourLazy = null;
        this.standardgravityLazy = null;
        this.nanometerspersecondsquaredLazy = null;
        this.micrometerspersecondsquaredLazy = null;
        this.centimeterspersecondsquaredLazy = null;
        this.decimeterspersecondsquaredLazy = null;
        this.kilometerspersecondsquaredLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get MetersPerSecondSquared() {
        if (this.meterspersecondsquaredLazy !== null) {
            return this.meterspersecondsquaredLazy;
        }
        return this.meterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MetersPerSecondSquared);
    }
    get InchesPerSecondSquared() {
        if (this.inchespersecondsquaredLazy !== null) {
            return this.inchespersecondsquaredLazy;
        }
        return this.inchespersecondsquaredLazy = this.convertFromBase(AccelerationUnits.InchesPerSecondSquared);
    }
    get FeetPerSecondSquared() {
        if (this.feetpersecondsquaredLazy !== null) {
            return this.feetpersecondsquaredLazy;
        }
        return this.feetpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.FeetPerSecondSquared);
    }
    get KnotsPerSecond() {
        if (this.knotspersecondLazy !== null) {
            return this.knotspersecondLazy;
        }
        return this.knotspersecondLazy = this.convertFromBase(AccelerationUnits.KnotsPerSecond);
    }
    get KnotsPerMinute() {
        if (this.knotsperminuteLazy !== null) {
            return this.knotsperminuteLazy;
        }
        return this.knotsperminuteLazy = this.convertFromBase(AccelerationUnits.KnotsPerMinute);
    }
    get KnotsPerHour() {
        if (this.knotsperhourLazy !== null) {
            return this.knotsperhourLazy;
        }
        return this.knotsperhourLazy = this.convertFromBase(AccelerationUnits.KnotsPerHour);
    }
    get StandardGravity() {
        if (this.standardgravityLazy !== null) {
            return this.standardgravityLazy;
        }
        return this.standardgravityLazy = this.convertFromBase(AccelerationUnits.StandardGravity);
    }
    get NanometersPerSecondSquared() {
        if (this.nanometerspersecondsquaredLazy !== null) {
            return this.nanometerspersecondsquaredLazy;
        }
        return this.nanometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.NanometersPerSecondSquared);
    }
    get MicrometersPerSecondSquared() {
        if (this.micrometerspersecondsquaredLazy !== null) {
            return this.micrometerspersecondsquaredLazy;
        }
        return this.micrometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MicrometersPerSecondSquared);
    }
    get CentimetersPerSecondSquared() {
        if (this.centimeterspersecondsquaredLazy !== null) {
            return this.centimeterspersecondsquaredLazy;
        }
        return this.centimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.CentimetersPerSecondSquared);
    }
    get DecimetersPerSecondSquared() {
        if (this.decimeterspersecondsquaredLazy !== null) {
            return this.decimeterspersecondsquaredLazy;
        }
        return this.decimeterspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.DecimetersPerSecondSquared);
    }
    get KilometersPerSecondSquared() {
        if (this.kilometerspersecondsquaredLazy !== null) {
            return this.kilometerspersecondsquaredLazy;
        }
        return this.kilometerspersecondsquaredLazy = this.convertFromBase(AccelerationUnits.KilometersPerSecondSquared);
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
    static FromNanometersPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.NanometersPerSecondSquared);
    }
    static FromMicrometersPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.MicrometersPerSecondSquared);
    }
    static FromCentimetersPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.CentimetersPerSecondSquared);
    }
    static FromDecimetersPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.DecimetersPerSecondSquared);
    }
    static FromKilometersPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.KilometersPerSecondSquared);
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
            case AccelerationUnits.NanometersPerSecondSquared:
                return (this.value) / 1e-9;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return (this.value) / 0.000001;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return (this.value) / 0.01;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return (this.value) / 0.1;
            case AccelerationUnits.KilometersPerSecondSquared:
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
            case AccelerationUnits.NanometersPerSecondSquared:
                return (value) * 1e-9;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return (value) * 0.000001;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return (value) * 0.01;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return (value) * 0.1;
            case AccelerationUnits.KilometersPerSecondSquared:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = AccelerationUnits.MetersPerSecondSquared) {
        switch (toUnit) {
            case AccelerationUnits.MetersPerSecondSquared:
                return this.MetersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.InchesPerSecondSquared:
                return this.InchesPerSecondSquared + ` in/s²`;
            case AccelerationUnits.FeetPerSecondSquared:
                return this.FeetPerSecondSquared + ` ft/s²`;
            case AccelerationUnits.KnotsPerSecond:
                return this.KnotsPerSecond + ` kn/s`;
            case AccelerationUnits.KnotsPerMinute:
                return this.KnotsPerMinute + ` kn/min`;
            case AccelerationUnits.KnotsPerHour:
                return this.KnotsPerHour + ` kn/h`;
            case AccelerationUnits.StandardGravity:
                return this.StandardGravity + ` g`;
            case AccelerationUnits.NanometersPerSecondSquared:
                return this.NanometersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.MicrometersPerSecondSquared:
                return this.MicrometersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.CentimetersPerSecondSquared:
                return this.CentimetersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.DecimetersPerSecondSquared:
                return this.DecimetersPerSecondSquared + ` m/s²`;
            case AccelerationUnits.KilometersPerSecondSquared:
                return this.KilometersPerSecondSquared + ` m/s²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Acceleration = Acceleration;
//# sourceMappingURL=acceleration.g.js.map