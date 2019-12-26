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
    AngleUnits[AngleUnits["Nanoradian"] = 6] = "Nanoradian";
    AngleUnits[AngleUnits["Microradian"] = 7] = "Microradian";
    AngleUnits[AngleUnits["Centiradian"] = 8] = "Centiradian";
    AngleUnits[AngleUnits["Deciradian"] = 9] = "Deciradian";
    AngleUnits[AngleUnits["Nanodegree"] = 10] = "Nanodegree";
    AngleUnits[AngleUnits["Microdegree"] = 11] = "Microdegree";
})(AngleUnits = exports.AngleUnits || (exports.AngleUnits = {}));
class Angle {
    constructor(value, fromUnit) {
        this.radiansLazy = null;
        this.degreesLazy = null;
        this.arcminutesLazy = null;
        this.arcsecondsLazy = null;
        this.gradiansLazy = null;
        this.revolutionsLazy = null;
        this.nanoradianLazy = null;
        this.microradianLazy = null;
        this.centiradianLazy = null;
        this.deciradianLazy = null;
        this.nanodegreeLazy = null;
        this.microdegreeLazy = null;
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
    get Nanoradian() {
        if (this.nanoradianLazy !== null) {
            return this.nanoradianLazy;
        }
        return this.nanoradianLazy = this.convertFromBase(AngleUnits.Nanoradian);
    }
    get Microradian() {
        if (this.microradianLazy !== null) {
            return this.microradianLazy;
        }
        return this.microradianLazy = this.convertFromBase(AngleUnits.Microradian);
    }
    get Centiradian() {
        if (this.centiradianLazy !== null) {
            return this.centiradianLazy;
        }
        return this.centiradianLazy = this.convertFromBase(AngleUnits.Centiradian);
    }
    get Deciradian() {
        if (this.deciradianLazy !== null) {
            return this.deciradianLazy;
        }
        return this.deciradianLazy = this.convertFromBase(AngleUnits.Deciradian);
    }
    get Nanodegree() {
        if (this.nanodegreeLazy !== null) {
            return this.nanodegreeLazy;
        }
        return this.nanodegreeLazy = this.convertFromBase(AngleUnits.Nanodegree);
    }
    get Microdegree() {
        if (this.microdegreeLazy !== null) {
            return this.microdegreeLazy;
        }
        return this.microdegreeLazy = this.convertFromBase(AngleUnits.Microdegree);
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
    static FromNanoradian(value) {
        return new Angle(value, AngleUnits.Nanoradian);
    }
    static FromMicroradian(value) {
        return new Angle(value, AngleUnits.Microradian);
    }
    static FromCentiradian(value) {
        return new Angle(value, AngleUnits.Centiradian);
    }
    static FromDeciradian(value) {
        return new Angle(value, AngleUnits.Deciradian);
    }
    static FromNanodegree(value) {
        return new Angle(value, AngleUnits.Nanodegree);
    }
    static FromMicrodegree(value) {
        return new Angle(value, AngleUnits.Microdegree);
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
            case AngleUnits.Nanoradian:
                return (this.value / 180 * Math.PI) / 1e-9;
            case AngleUnits.Microradian:
                return (this.value / 180 * Math.PI) / 0.000001;
            case AngleUnits.Centiradian:
                return (this.value / 180 * Math.PI) / 0.01;
            case AngleUnits.Deciradian:
                return (this.value / 180 * Math.PI) / 0.1;
            case AngleUnits.Nanodegree:
                return (this.value) / 1e-9;
            case AngleUnits.Microdegree:
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
            case AngleUnits.Nanoradian:
                return (value * 180 / Math.PI) * 1e-9;
            case AngleUnits.Microradian:
                return (value * 180 / Math.PI) * 0.000001;
            case AngleUnits.Centiradian:
                return (value * 180 / Math.PI) * 0.01;
            case AngleUnits.Deciradian:
                return (value * 180 / Math.PI) * 0.1;
            case AngleUnits.Nanodegree:
                return (value) * 1e-9;
            case AngleUnits.Microdegree:
                return (value) * 0.000001;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = AngleUnits.Degrees) {
        switch (toUnit) {
            case AngleUnits.Radians:
                return this.Radians + ` rad`;
            case AngleUnits.Degrees:
                return this.Degrees + ` °`;
            case AngleUnits.Arcminutes:
                return this.Arcminutes + ` '`;
            case AngleUnits.Arcseconds:
                return this.Arcseconds + ` ″`;
            case AngleUnits.Gradians:
                return this.Gradians + ` g`;
            case AngleUnits.Revolutions:
                return this.Revolutions + ` r`;
            case AngleUnits.Nanoradian:
                return this.Nanoradian + ` rad`;
            case AngleUnits.Microradian:
                return this.Microradian + ` rad`;
            case AngleUnits.Centiradian:
                return this.Centiradian + ` rad`;
            case AngleUnits.Deciradian:
                return this.Deciradian + ` rad`;
            case AngleUnits.Nanodegree:
                return this.Nanodegree + ` °`;
            case AngleUnits.Microdegree:
                return this.Microdegree + ` °`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Angle = Angle;
//# sourceMappingURL=angle.g.js.map