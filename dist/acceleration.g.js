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
    AccelerationUnits[AccelerationUnits["NanometerPerSecondSquared"] = 7] = "NanometerPerSecondSquared";
    AccelerationUnits[AccelerationUnits["MicrometerPerSecondSquared"] = 8] = "MicrometerPerSecondSquared";
    AccelerationUnits[AccelerationUnits["CentimeterPerSecondSquared"] = 9] = "CentimeterPerSecondSquared";
    AccelerationUnits[AccelerationUnits["DecimeterPerSecondSquared"] = 10] = "DecimeterPerSecondSquared";
    AccelerationUnits[AccelerationUnits["KilometerPerSecondSquared"] = 11] = "KilometerPerSecondSquared";
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
        this.nanometerpersecondsquaredLazy = null;
        this.micrometerpersecondsquaredLazy = null;
        this.centimeterpersecondsquaredLazy = null;
        this.decimeterpersecondsquaredLazy = null;
        this.kilometerpersecondsquaredLazy = null;
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
    get NanometerPerSecondSquared() {
        if (this.nanometerpersecondsquaredLazy !== null) {
            return this.nanometerpersecondsquaredLazy;
        }
        return this.nanometerpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.NanometerPerSecondSquared);
    }
    get MicrometerPerSecondSquared() {
        if (this.micrometerpersecondsquaredLazy !== null) {
            return this.micrometerpersecondsquaredLazy;
        }
        return this.micrometerpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.MicrometerPerSecondSquared);
    }
    get CentimeterPerSecondSquared() {
        if (this.centimeterpersecondsquaredLazy !== null) {
            return this.centimeterpersecondsquaredLazy;
        }
        return this.centimeterpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.CentimeterPerSecondSquared);
    }
    get DecimeterPerSecondSquared() {
        if (this.decimeterpersecondsquaredLazy !== null) {
            return this.decimeterpersecondsquaredLazy;
        }
        return this.decimeterpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.DecimeterPerSecondSquared);
    }
    get KilometerPerSecondSquared() {
        if (this.kilometerpersecondsquaredLazy !== null) {
            return this.kilometerpersecondsquaredLazy;
        }
        return this.kilometerpersecondsquaredLazy = this.convertFromBase(AccelerationUnits.KilometerPerSecondSquared);
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
    static FromNanometerPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.NanometerPerSecondSquared);
    }
    static FromMicrometerPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.MicrometerPerSecondSquared);
    }
    static FromCentimeterPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.CentimeterPerSecondSquared);
    }
    static FromDecimeterPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.DecimeterPerSecondSquared);
    }
    static FromKilometerPerSecondSquared(value) {
        return new Acceleration(value, AccelerationUnits.KilometerPerSecondSquared);
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
            case AccelerationUnits.NanometerPerSecondSquared:
                return (this.value) / 1e-9;
            case AccelerationUnits.MicrometerPerSecondSquared:
                return (this.value) / 0.000001;
            case AccelerationUnits.CentimeterPerSecondSquared:
                return (this.value) / 0.01;
            case AccelerationUnits.DecimeterPerSecondSquared:
                return (this.value) / 0.1;
            case AccelerationUnits.KilometerPerSecondSquared:
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
            case AccelerationUnits.NanometerPerSecondSquared:
                return (value) * 1e-9;
            case AccelerationUnits.MicrometerPerSecondSquared:
                return (value) * 0.000001;
            case AccelerationUnits.CentimeterPerSecondSquared:
                return (value) * 0.01;
            case AccelerationUnits.DecimeterPerSecondSquared:
                return (value) * 0.1;
            case AccelerationUnits.KilometerPerSecondSquared:
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
            case AccelerationUnits.NanometerPerSecondSquared:
                return this.NanometerPerSecondSquared + ` m/s²`;
            case AccelerationUnits.MicrometerPerSecondSquared:
                return this.MicrometerPerSecondSquared + ` m/s²`;
            case AccelerationUnits.CentimeterPerSecondSquared:
                return this.CentimeterPerSecondSquared + ` m/s²`;
            case AccelerationUnits.DecimeterPerSecondSquared:
                return this.DecimeterPerSecondSquared + ` m/s²`;
            case AccelerationUnits.KilometerPerSecondSquared:
                return this.KilometerPerSecondSquared + ` m/s²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Acceleration = Acceleration;
//# sourceMappingURL=acceleration.g.js.map