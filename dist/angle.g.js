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
        this.value = this.convertToBase(value, fromUnit);
    }
    get Radians() {
        return this.convertFromBase(AngleUnits.Radians);
    }
    get Degrees() {
        return this.convertFromBase(AngleUnits.Degrees);
    }
    get Arcminutes() {
        return this.convertFromBase(AngleUnits.Arcminutes);
    }
    get Arcseconds() {
        return this.convertFromBase(AngleUnits.Arcseconds);
    }
    get Gradians() {
        return this.convertFromBase(AngleUnits.Gradians);
    }
    get Revolutions() {
        return this.convertFromBase(AngleUnits.Revolutions);
    }
    get Nanoradians() {
        return this.convertFromBase(AngleUnits.Nanoradians);
    }
    get Microradians() {
        return this.convertFromBase(AngleUnits.Microradians);
    }
    get Centiradians() {
        return this.convertFromBase(AngleUnits.Centiradians);
    }
    get Deciradians() {
        return this.convertFromBase(AngleUnits.Deciradians);
    }
    get Nanodegrees() {
        return this.convertFromBase(AngleUnits.Nanodegrees);
    }
    get Microdegrees() {
        return this.convertFromBase(AngleUnits.Microdegrees);
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
                return (this.value * 180 / Math.PI) * 1e-9;
            case AngleUnits.Microradians:
                return (this.value * 180 / Math.PI) * 0.000001;
            case AngleUnits.Centiradians:
                return (this.value * 180 / Math.PI) * 0.01;
            case AngleUnits.Deciradians:
                return (this.value * 180 / Math.PI) * 0.1;
            case AngleUnits.Nanodegrees:
                return (this.value) * 1e-9;
            case AngleUnits.Microdegrees:
                return (this.value) * 0.000001;
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
                return (value / 180 * Math.PI) / 1e-9;
            case AngleUnits.Microradians:
                return (value / 180 * Math.PI) / 0.000001;
            case AngleUnits.Centiradians:
                return (value / 180 * Math.PI) / 0.01;
            case AngleUnits.Deciradians:
                return (value / 180 * Math.PI) / 0.1;
            case AngleUnits.Nanodegrees:
                return (value) / 1e-9;
            case AngleUnits.Microdegrees:
                return (value) / 0.000001;
            default:
                break;
        }
        return NaN;
    }
}
exports.Angle = Angle;
//# sourceMappingURL=angle.g.js.map