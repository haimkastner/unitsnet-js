"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AngleUnits;
(function (AngleUnits) {
    AngleUnits[AngleUnits["Radians"] = 0] = "Radians";
    AngleUnits[AngleUnits["Degrees"] = 1] = "Degrees";
    AngleUnits[AngleUnits["Arcminutes"] = 2] = "Arcminutes";
    AngleUnits[AngleUnits["Arcseconds"] = 3] = "Arcseconds";
    AngleUnits[AngleUnits["Gradians"] = 4] = "Gradians";
    AngleUnits[AngleUnits["Revolutions"] = 5] = "Revolutions";
    AngleUnits[AngleUnits["Nanoradians"] = 6] = "Nanoradians";
    AngleUnits[AngleUnits["Microradians"] = 7] = "Microradians";
    AngleUnits[AngleUnits["Centiradians"] = 8] = "Centiradians";
    AngleUnits[AngleUnits["Deciradians"] = 9] = "Deciradians";
    AngleUnits[AngleUnits["Nanodegrees"] = 10] = "Nanodegrees";
    AngleUnits[AngleUnits["Microdegrees"] = 11] = "Microdegrees";
})(AngleUnits = exports.AngleUnits || (exports.AngleUnits = {}));
class Angle {
    constructor(value, fromUnit) {
        this.radiansLazy = null;
        this.degreesLazy = null;
        this.arcminutesLazy = null;
        this.arcsecondsLazy = null;
        this.gradiansLazy = null;
        this.revolutionsLazy = null;
        this.nanoradiansLazy = null;
        this.microradiansLazy = null;
        this.centiradiansLazy = null;
        this.deciradiansLazy = null;
        this.nanodegreesLazy = null;
        this.microdegreesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Radians() {
        if (this.radiansLazy !== null) {
            return this.radiansLazy;
        }
        return this.radiansLazy = this.convertFromBase(AngleUnits.Radians);
    }
    get Degrees() {
        if (this.degreesLazy !== null) {
            return this.degreesLazy;
        }
        return this.degreesLazy = this.convertFromBase(AngleUnits.Degrees);
    }
    get Arcminutes() {
        if (this.arcminutesLazy !== null) {
            return this.arcminutesLazy;
        }
        return this.arcminutesLazy = this.convertFromBase(AngleUnits.Arcminutes);
    }
    get Arcseconds() {
        if (this.arcsecondsLazy !== null) {
            return this.arcsecondsLazy;
        }
        return this.arcsecondsLazy = this.convertFromBase(AngleUnits.Arcseconds);
    }
    get Gradians() {
        if (this.gradiansLazy !== null) {
            return this.gradiansLazy;
        }
        return this.gradiansLazy = this.convertFromBase(AngleUnits.Gradians);
    }
    get Revolutions() {
        if (this.revolutionsLazy !== null) {
            return this.revolutionsLazy;
        }
        return this.revolutionsLazy = this.convertFromBase(AngleUnits.Revolutions);
    }
    get Nanoradians() {
        if (this.nanoradiansLazy !== null) {
            return this.nanoradiansLazy;
        }
        return this.nanoradiansLazy = this.convertFromBase(AngleUnits.Nanoradians);
    }
    get Microradians() {
        if (this.microradiansLazy !== null) {
            return this.microradiansLazy;
        }
        return this.microradiansLazy = this.convertFromBase(AngleUnits.Microradians);
    }
    get Centiradians() {
        if (this.centiradiansLazy !== null) {
            return this.centiradiansLazy;
        }
        return this.centiradiansLazy = this.convertFromBase(AngleUnits.Centiradians);
    }
    get Deciradians() {
        if (this.deciradiansLazy !== null) {
            return this.deciradiansLazy;
        }
        return this.deciradiansLazy = this.convertFromBase(AngleUnits.Deciradians);
    }
    get Nanodegrees() {
        if (this.nanodegreesLazy !== null) {
            return this.nanodegreesLazy;
        }
        return this.nanodegreesLazy = this.convertFromBase(AngleUnits.Nanodegrees);
    }
    get Microdegrees() {
        if (this.microdegreesLazy !== null) {
            return this.microdegreesLazy;
        }
        return this.microdegreesLazy = this.convertFromBase(AngleUnits.Microdegrees);
    }
    static FromRadians(value) {
        return new Angle(value, AngleUnits.Radians);
    }
    static FromDegrees(value) {
        return new Angle(value, AngleUnits.Degrees);
    }
    static FromArcminutes(value) {
        return new Angle(value, AngleUnits.Arcminutes);
    }
    static FromArcseconds(value) {
        return new Angle(value, AngleUnits.Arcseconds);
    }
    static FromGradians(value) {
        return new Angle(value, AngleUnits.Gradians);
    }
    static FromRevolutions(value) {
        return new Angle(value, AngleUnits.Revolutions);
    }
    static FromNanoradians(value) {
        return new Angle(value, AngleUnits.Nanoradians);
    }
    static FromMicroradians(value) {
        return new Angle(value, AngleUnits.Microradians);
    }
    static FromCentiradians(value) {
        return new Angle(value, AngleUnits.Centiradians);
    }
    static FromDeciradians(value) {
        return new Angle(value, AngleUnits.Deciradians);
    }
    static FromNanodegrees(value) {
        return new Angle(value, AngleUnits.Nanodegrees);
    }
    static FromMicrodegrees(value) {
        return new Angle(value, AngleUnits.Microdegrees);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AngleUnits.Radians:
                return this.value / 180 * Math.PI;
            case AngleUnits.Degrees:
                return this.value;
            case AngleUnits.Arcminutes:
                return this.value * 60;
            case AngleUnits.Arcseconds:
                return this.value * 3600;
            case AngleUnits.Gradians:
                return this.value / 0.9;
            case AngleUnits.Revolutions:
                return this.value / 360;
            case AngleUnits.Nanoradians:
                return (this.value / 180 * Math.PI) / 1e-9;
            case AngleUnits.Microradians:
                return (this.value / 180 * Math.PI) / 0.000001;
            case AngleUnits.Centiradians:
                return (this.value / 180 * Math.PI) / 0.01;
            case AngleUnits.Deciradians:
                return (this.value / 180 * Math.PI) / 0.1;
            case AngleUnits.Nanodegrees:
                return (this.value) / 1e-9;
            case AngleUnits.Microdegrees:
                return (this.value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AngleUnits.Radians:
                return value * 180 / Math.PI;
            case AngleUnits.Degrees:
                return value;
            case AngleUnits.Arcminutes:
                return value / 60;
            case AngleUnits.Arcseconds:
                return value / 3600;
            case AngleUnits.Gradians:
                return value * 0.9;
            case AngleUnits.Revolutions:
                return value * 360;
            case AngleUnits.Nanoradians:
                return (value * 180 / Math.PI) * 1e-9;
            case AngleUnits.Microradians:
                return (value * 180 / Math.PI) * 0.000001;
            case AngleUnits.Centiradians:
                return (value * 180 / Math.PI) * 0.01;
            case AngleUnits.Deciradians:
                return (value * 180 / Math.PI) * 0.1;
            case AngleUnits.Nanodegrees:
                return (value) * 1e-9;
            case AngleUnits.Microdegrees:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.Angle = Angle;
//# sourceMappingURL=angle.g.js.map