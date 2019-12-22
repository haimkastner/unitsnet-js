"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LengthUnits;
(function (LengthUnits) {
    LengthUnits[LengthUnits["Meters"] = 0] = "Meters";
    LengthUnits[LengthUnits["Miles"] = 1] = "Miles";
    LengthUnits[LengthUnits["Yards"] = 2] = "Yards";
    LengthUnits[LengthUnits["Feet"] = 3] = "Feet";
    LengthUnits[LengthUnits["UsSurveyFeet"] = 4] = "UsSurveyFeet";
    LengthUnits[LengthUnits["Inches"] = 5] = "Inches";
    LengthUnits[LengthUnits["Mils"] = 6] = "Mils";
    LengthUnits[LengthUnits["NauticalMiles"] = 7] = "NauticalMiles";
    LengthUnits[LengthUnits["Fathoms"] = 8] = "Fathoms";
    LengthUnits[LengthUnits["Shackles"] = 9] = "Shackles";
    LengthUnits[LengthUnits["Microinches"] = 10] = "Microinches";
    LengthUnits[LengthUnits["PrinterPoints"] = 11] = "PrinterPoints";
    LengthUnits[LengthUnits["DtpPoints"] = 12] = "DtpPoints";
    LengthUnits[LengthUnits["PrinterPicas"] = 13] = "PrinterPicas";
    LengthUnits[LengthUnits["DtpPicas"] = 14] = "DtpPicas";
    LengthUnits[LengthUnits["Twips"] = 15] = "Twips";
    LengthUnits[LengthUnits["Hands"] = 16] = "Hands";
    LengthUnits[LengthUnits["AstronomicalUnits"] = 17] = "AstronomicalUnits";
    LengthUnits[LengthUnits["Parsecs"] = 18] = "Parsecs";
    LengthUnits[LengthUnits["LightYears"] = 19] = "LightYears";
    LengthUnits[LengthUnits["SolarRadiuses"] = 20] = "SolarRadiuses";
    LengthUnits[LengthUnits["Nanometers"] = 21] = "Nanometers";
    LengthUnits[LengthUnits["Micrometers"] = 22] = "Micrometers";
    LengthUnits[LengthUnits["Centimeters"] = 23] = "Centimeters";
    LengthUnits[LengthUnits["Decimeters"] = 24] = "Decimeters";
    LengthUnits[LengthUnits["Hectometers"] = 25] = "Hectometers";
    LengthUnits[LengthUnits["Kilometers"] = 26] = "Kilometers";
    LengthUnits[LengthUnits["Kiloparsecs"] = 27] = "Kiloparsecs";
    LengthUnits[LengthUnits["Megaparsecs"] = 28] = "Megaparsecs";
    LengthUnits[LengthUnits["Kilolightyears"] = 29] = "Kilolightyears";
    LengthUnits[LengthUnits["Megalightyears"] = 30] = "Megalightyears";
})(LengthUnits = exports.LengthUnits || (exports.LengthUnits = {}));
class Length {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Meters() {
        return this.convertFromBase(LengthUnits.Meters);
    }
    get Miles() {
        return this.convertFromBase(LengthUnits.Miles);
    }
    get Yards() {
        return this.convertFromBase(LengthUnits.Yards);
    }
    get Feet() {
        return this.convertFromBase(LengthUnits.Feet);
    }
    get UsSurveyFeet() {
        return this.convertFromBase(LengthUnits.UsSurveyFeet);
    }
    get Inches() {
        return this.convertFromBase(LengthUnits.Inches);
    }
    get Mils() {
        return this.convertFromBase(LengthUnits.Mils);
    }
    get NauticalMiles() {
        return this.convertFromBase(LengthUnits.NauticalMiles);
    }
    get Fathoms() {
        return this.convertFromBase(LengthUnits.Fathoms);
    }
    get Shackles() {
        return this.convertFromBase(LengthUnits.Shackles);
    }
    get Microinches() {
        return this.convertFromBase(LengthUnits.Microinches);
    }
    get PrinterPoints() {
        return this.convertFromBase(LengthUnits.PrinterPoints);
    }
    get DtpPoints() {
        return this.convertFromBase(LengthUnits.DtpPoints);
    }
    get PrinterPicas() {
        return this.convertFromBase(LengthUnits.PrinterPicas);
    }
    get DtpPicas() {
        return this.convertFromBase(LengthUnits.DtpPicas);
    }
    get Twips() {
        return this.convertFromBase(LengthUnits.Twips);
    }
    get Hands() {
        return this.convertFromBase(LengthUnits.Hands);
    }
    get AstronomicalUnits() {
        return this.convertFromBase(LengthUnits.AstronomicalUnits);
    }
    get Parsecs() {
        return this.convertFromBase(LengthUnits.Parsecs);
    }
    get LightYears() {
        return this.convertFromBase(LengthUnits.LightYears);
    }
    get SolarRadiuses() {
        return this.convertFromBase(LengthUnits.SolarRadiuses);
    }
    get Nanometers() {
        return this.convertFromBase(LengthUnits.Nanometers);
    }
    get Micrometers() {
        return this.convertFromBase(LengthUnits.Micrometers);
    }
    get Centimeters() {
        return this.convertFromBase(LengthUnits.Centimeters);
    }
    get Decimeters() {
        return this.convertFromBase(LengthUnits.Decimeters);
    }
    get Hectometers() {
        return this.convertFromBase(LengthUnits.Hectometers);
    }
    get Kilometers() {
        return this.convertFromBase(LengthUnits.Kilometers);
    }
    get Kiloparsecs() {
        return this.convertFromBase(LengthUnits.Kiloparsecs);
    }
    get Megaparsecs() {
        return this.convertFromBase(LengthUnits.Megaparsecs);
    }
    get Kilolightyears() {
        return this.convertFromBase(LengthUnits.Kilolightyears);
    }
    get Megalightyears() {
        return this.convertFromBase(LengthUnits.Megalightyears);
    }
    static FromMeters(value) {
        return new Length(value, LengthUnits.Meters);
    }
    static FromMiles(value) {
        return new Length(value, LengthUnits.Miles);
    }
    static FromYards(value) {
        return new Length(value, LengthUnits.Yards);
    }
    static FromFeet(value) {
        return new Length(value, LengthUnits.Feet);
    }
    static FromUsSurveyFeet(value) {
        return new Length(value, LengthUnits.UsSurveyFeet);
    }
    static FromInches(value) {
        return new Length(value, LengthUnits.Inches);
    }
    static FromMils(value) {
        return new Length(value, LengthUnits.Mils);
    }
    static FromNauticalMiles(value) {
        return new Length(value, LengthUnits.NauticalMiles);
    }
    static FromFathoms(value) {
        return new Length(value, LengthUnits.Fathoms);
    }
    static FromShackles(value) {
        return new Length(value, LengthUnits.Shackles);
    }
    static FromMicroinches(value) {
        return new Length(value, LengthUnits.Microinches);
    }
    static FromPrinterPoints(value) {
        return new Length(value, LengthUnits.PrinterPoints);
    }
    static FromDtpPoints(value) {
        return new Length(value, LengthUnits.DtpPoints);
    }
    static FromPrinterPicas(value) {
        return new Length(value, LengthUnits.PrinterPicas);
    }
    static FromDtpPicas(value) {
        return new Length(value, LengthUnits.DtpPicas);
    }
    static FromTwips(value) {
        return new Length(value, LengthUnits.Twips);
    }
    static FromHands(value) {
        return new Length(value, LengthUnits.Hands);
    }
    static FromAstronomicalUnits(value) {
        return new Length(value, LengthUnits.AstronomicalUnits);
    }
    static FromParsecs(value) {
        return new Length(value, LengthUnits.Parsecs);
    }
    static FromLightYears(value) {
        return new Length(value, LengthUnits.LightYears);
    }
    static FromSolarRadiuses(value) {
        return new Length(value, LengthUnits.SolarRadiuses);
    }
    static FromNanometers(value) {
        return new Length(value, LengthUnits.Nanometers);
    }
    static FromMicrometers(value) {
        return new Length(value, LengthUnits.Micrometers);
    }
    static FromCentimeters(value) {
        return new Length(value, LengthUnits.Centimeters);
    }
    static FromDecimeters(value) {
        return new Length(value, LengthUnits.Decimeters);
    }
    static FromHectometers(value) {
        return new Length(value, LengthUnits.Hectometers);
    }
    static FromKilometers(value) {
        return new Length(value, LengthUnits.Kilometers);
    }
    static FromKiloparsecs(value) {
        return new Length(value, LengthUnits.Kiloparsecs);
    }
    static FromMegaparsecs(value) {
        return new Length(value, LengthUnits.Megaparsecs);
    }
    static FromKilolightyears(value) {
        return new Length(value, LengthUnits.Kilolightyears);
    }
    static FromMegalightyears(value) {
        return new Length(value, LengthUnits.Megalightyears);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LengthUnits.Meters:
                return this.value;
            case LengthUnits.Miles:
                return this.value * 1609.34;
            case LengthUnits.Yards:
                return this.value * 0.9144;
            case LengthUnits.Feet:
                return this.value * 0.3048;
            case LengthUnits.UsSurveyFeet:
                return this.value * 1200 / 3937;
            case LengthUnits.Inches:
                return this.value * 2.54e-2;
            case LengthUnits.Mils:
                return this.value * 2.54e-5;
            case LengthUnits.NauticalMiles:
                return this.value * 1852;
            case LengthUnits.Fathoms:
                return this.value * 1.8288;
            case LengthUnits.Shackles:
                return this.value * 27.432;
            case LengthUnits.Microinches:
                return this.value * 2.54e-8;
            case LengthUnits.PrinterPoints:
                return (this.value / 72.27) * 2.54e-2;
            case LengthUnits.DtpPoints:
                return (this.value / 72) * 2.54e-2;
            case LengthUnits.PrinterPicas:
                return this.value / 237.106301584;
            case LengthUnits.DtpPicas:
                return this.value / 236.220472441;
            case LengthUnits.Twips:
                return this.value / 56692.913385826;
            case LengthUnits.Hands:
                return this.value * 1.016e-1;
            case LengthUnits.AstronomicalUnits:
                return this.value * 1.4959787070e11;
            case LengthUnits.Parsecs:
                return this.value * 3.08567758128e16;
            case LengthUnits.LightYears:
                return this.value * 9.46073047258e15;
            case LengthUnits.SolarRadiuses:
                return this.value * 6.95510000E+08;
            case LengthUnits.Nanometers:
                return (this.value) * 1e-9;
            case LengthUnits.Micrometers:
                return (this.value) * 0.000001;
            case LengthUnits.Centimeters:
                return (this.value) * 0.01;
            case LengthUnits.Decimeters:
                return (this.value) * 0.1;
            case LengthUnits.Hectometers:
                return (this.value) * 100;
            case LengthUnits.Kilometers:
                return (this.value) * 1000;
            case LengthUnits.Kiloparsecs:
                return (this.value / 3.08567758128e16) * 1000;
            case LengthUnits.Megaparsecs:
                return (this.value / 3.08567758128e16) * 1000000;
            case LengthUnits.Kilolightyears:
                return (this.value / 9.46073047258e15) * 1000;
            case LengthUnits.Megalightyears:
                return (this.value / 9.46073047258e15) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LengthUnits.Meters:
                return this.value;
            case LengthUnits.Miles:
                return this.value / 1609.34;
            case LengthUnits.Yards:
                return this.value / 0.9144;
            case LengthUnits.Feet:
                return this.value / 0.3048;
            case LengthUnits.UsSurveyFeet:
                return this.value * 3937 / 1200;
            case LengthUnits.Inches:
                return this.value / 2.54e-2;
            case LengthUnits.Mils:
                return this.value / 2.54e-5;
            case LengthUnits.NauticalMiles:
                return this.value / 1852;
            case LengthUnits.Fathoms:
                return this.value / 1.8288;
            case LengthUnits.Shackles:
                return this.value / 27.432;
            case LengthUnits.Microinches:
                return this.value / 2.54e-8;
            case LengthUnits.PrinterPoints:
                return (this.value / 2.54e-2) * 72.27;
            case LengthUnits.DtpPoints:
                return (this.value / 2.54e-2) * 72;
            case LengthUnits.PrinterPicas:
                return this.value * 237.106301584;
            case LengthUnits.DtpPicas:
                return this.value * 236.220472441;
            case LengthUnits.Twips:
                return this.value * 56692.913385826;
            case LengthUnits.Hands:
                return this.value / 1.016e-1;
            case LengthUnits.AstronomicalUnits:
                return this.value / 1.4959787070e11;
            case LengthUnits.Parsecs:
                return this.value / 3.08567758128e16;
            case LengthUnits.LightYears:
                return this.value / 9.46073047258e15;
            case LengthUnits.SolarRadiuses:
                return this.value / 6.95510000E+08;
            case LengthUnits.Nanometers:
                return (this.value) / 1e-9;
            case LengthUnits.Micrometers:
                return (this.value) / 0.000001;
            case LengthUnits.Centimeters:
                return (this.value) / 0.01;
            case LengthUnits.Decimeters:
                return (this.value) / 0.1;
            case LengthUnits.Hectometers:
                return (this.value) / 100;
            case LengthUnits.Kilometers:
                return (this.value) / 1000;
            case LengthUnits.Kiloparsecs:
                return (this.value * 3.08567758128e16) / 1000;
            case LengthUnits.Megaparsecs:
                return (this.value * 3.08567758128e16) / 1000000;
            case LengthUnits.Kilolightyears:
                return (this.value * 9.46073047258e15) / 1000;
            case LengthUnits.Megalightyears:
                return (this.value * 9.46073047258e15) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Length = Length;
//# sourceMappingURL=length.g.js.map