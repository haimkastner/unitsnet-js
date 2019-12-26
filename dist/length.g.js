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
    LengthUnits[LengthUnits["Nanometer"] = 21] = "Nanometer";
    LengthUnits[LengthUnits["Micrometer"] = 22] = "Micrometer";
    LengthUnits[LengthUnits["Centimeter"] = 23] = "Centimeter";
    LengthUnits[LengthUnits["Decimeter"] = 24] = "Decimeter";
    LengthUnits[LengthUnits["Hectometer"] = 25] = "Hectometer";
    LengthUnits[LengthUnits["Kilometer"] = 26] = "Kilometer";
    LengthUnits[LengthUnits["Kiloparsec"] = 27] = "Kiloparsec";
    LengthUnits[LengthUnits["Megaparsec"] = 28] = "Megaparsec";
    LengthUnits[LengthUnits["KilolightYear"] = 29] = "KilolightYear";
    LengthUnits[LengthUnits["MegalightYear"] = 30] = "MegalightYear";
})(LengthUnits = exports.LengthUnits || (exports.LengthUnits = {}));
class Length {
    constructor(value, fromUnit) {
        this.metersLazy = null;
        this.milesLazy = null;
        this.yardsLazy = null;
        this.feetLazy = null;
        this.ussurveyfeetLazy = null;
        this.inchesLazy = null;
        this.milsLazy = null;
        this.nauticalmilesLazy = null;
        this.fathomsLazy = null;
        this.shacklesLazy = null;
        this.microinchesLazy = null;
        this.printerpointsLazy = null;
        this.dtppointsLazy = null;
        this.printerpicasLazy = null;
        this.dtppicasLazy = null;
        this.twipsLazy = null;
        this.handsLazy = null;
        this.astronomicalunitsLazy = null;
        this.parsecsLazy = null;
        this.lightyearsLazy = null;
        this.solarradiusesLazy = null;
        this.nanometerLazy = null;
        this.micrometerLazy = null;
        this.centimeterLazy = null;
        this.decimeterLazy = null;
        this.hectometerLazy = null;
        this.kilometerLazy = null;
        this.kiloparsecLazy = null;
        this.megaparsecLazy = null;
        this.kilolightyearLazy = null;
        this.megalightyearLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Meters() {
        if (this.metersLazy !== null) {
            return this.metersLazy;
        }
        return this.metersLazy = this.convertFromBase(LengthUnits.Meters);
    }
    get Miles() {
        if (this.milesLazy !== null) {
            return this.milesLazy;
        }
        return this.milesLazy = this.convertFromBase(LengthUnits.Miles);
    }
    get Yards() {
        if (this.yardsLazy !== null) {
            return this.yardsLazy;
        }
        return this.yardsLazy = this.convertFromBase(LengthUnits.Yards);
    }
    get Feet() {
        if (this.feetLazy !== null) {
            return this.feetLazy;
        }
        return this.feetLazy = this.convertFromBase(LengthUnits.Feet);
    }
    get UsSurveyFeet() {
        if (this.ussurveyfeetLazy !== null) {
            return this.ussurveyfeetLazy;
        }
        return this.ussurveyfeetLazy = this.convertFromBase(LengthUnits.UsSurveyFeet);
    }
    get Inches() {
        if (this.inchesLazy !== null) {
            return this.inchesLazy;
        }
        return this.inchesLazy = this.convertFromBase(LengthUnits.Inches);
    }
    get Mils() {
        if (this.milsLazy !== null) {
            return this.milsLazy;
        }
        return this.milsLazy = this.convertFromBase(LengthUnits.Mils);
    }
    get NauticalMiles() {
        if (this.nauticalmilesLazy !== null) {
            return this.nauticalmilesLazy;
        }
        return this.nauticalmilesLazy = this.convertFromBase(LengthUnits.NauticalMiles);
    }
    get Fathoms() {
        if (this.fathomsLazy !== null) {
            return this.fathomsLazy;
        }
        return this.fathomsLazy = this.convertFromBase(LengthUnits.Fathoms);
    }
    get Shackles() {
        if (this.shacklesLazy !== null) {
            return this.shacklesLazy;
        }
        return this.shacklesLazy = this.convertFromBase(LengthUnits.Shackles);
    }
    get Microinches() {
        if (this.microinchesLazy !== null) {
            return this.microinchesLazy;
        }
        return this.microinchesLazy = this.convertFromBase(LengthUnits.Microinches);
    }
    get PrinterPoints() {
        if (this.printerpointsLazy !== null) {
            return this.printerpointsLazy;
        }
        return this.printerpointsLazy = this.convertFromBase(LengthUnits.PrinterPoints);
    }
    get DtpPoints() {
        if (this.dtppointsLazy !== null) {
            return this.dtppointsLazy;
        }
        return this.dtppointsLazy = this.convertFromBase(LengthUnits.DtpPoints);
    }
    get PrinterPicas() {
        if (this.printerpicasLazy !== null) {
            return this.printerpicasLazy;
        }
        return this.printerpicasLazy = this.convertFromBase(LengthUnits.PrinterPicas);
    }
    get DtpPicas() {
        if (this.dtppicasLazy !== null) {
            return this.dtppicasLazy;
        }
        return this.dtppicasLazy = this.convertFromBase(LengthUnits.DtpPicas);
    }
    get Twips() {
        if (this.twipsLazy !== null) {
            return this.twipsLazy;
        }
        return this.twipsLazy = this.convertFromBase(LengthUnits.Twips);
    }
    get Hands() {
        if (this.handsLazy !== null) {
            return this.handsLazy;
        }
        return this.handsLazy = this.convertFromBase(LengthUnits.Hands);
    }
    get AstronomicalUnits() {
        if (this.astronomicalunitsLazy !== null) {
            return this.astronomicalunitsLazy;
        }
        return this.astronomicalunitsLazy = this.convertFromBase(LengthUnits.AstronomicalUnits);
    }
    get Parsecs() {
        if (this.parsecsLazy !== null) {
            return this.parsecsLazy;
        }
        return this.parsecsLazy = this.convertFromBase(LengthUnits.Parsecs);
    }
    get LightYears() {
        if (this.lightyearsLazy !== null) {
            return this.lightyearsLazy;
        }
        return this.lightyearsLazy = this.convertFromBase(LengthUnits.LightYears);
    }
    get SolarRadiuses() {
        if (this.solarradiusesLazy !== null) {
            return this.solarradiusesLazy;
        }
        return this.solarradiusesLazy = this.convertFromBase(LengthUnits.SolarRadiuses);
    }
    get Nanometer() {
        if (this.nanometerLazy !== null) {
            return this.nanometerLazy;
        }
        return this.nanometerLazy = this.convertFromBase(LengthUnits.Nanometer);
    }
    get Micrometer() {
        if (this.micrometerLazy !== null) {
            return this.micrometerLazy;
        }
        return this.micrometerLazy = this.convertFromBase(LengthUnits.Micrometer);
    }
    get Centimeter() {
        if (this.centimeterLazy !== null) {
            return this.centimeterLazy;
        }
        return this.centimeterLazy = this.convertFromBase(LengthUnits.Centimeter);
    }
    get Decimeter() {
        if (this.decimeterLazy !== null) {
            return this.decimeterLazy;
        }
        return this.decimeterLazy = this.convertFromBase(LengthUnits.Decimeter);
    }
    get Hectometer() {
        if (this.hectometerLazy !== null) {
            return this.hectometerLazy;
        }
        return this.hectometerLazy = this.convertFromBase(LengthUnits.Hectometer);
    }
    get Kilometer() {
        if (this.kilometerLazy !== null) {
            return this.kilometerLazy;
        }
        return this.kilometerLazy = this.convertFromBase(LengthUnits.Kilometer);
    }
    get Kiloparsec() {
        if (this.kiloparsecLazy !== null) {
            return this.kiloparsecLazy;
        }
        return this.kiloparsecLazy = this.convertFromBase(LengthUnits.Kiloparsec);
    }
    get Megaparsec() {
        if (this.megaparsecLazy !== null) {
            return this.megaparsecLazy;
        }
        return this.megaparsecLazy = this.convertFromBase(LengthUnits.Megaparsec);
    }
    get KilolightYear() {
        if (this.kilolightyearLazy !== null) {
            return this.kilolightyearLazy;
        }
        return this.kilolightyearLazy = this.convertFromBase(LengthUnits.KilolightYear);
    }
    get MegalightYear() {
        if (this.megalightyearLazy !== null) {
            return this.megalightyearLazy;
        }
        return this.megalightyearLazy = this.convertFromBase(LengthUnits.MegalightYear);
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
    static FromNanometer(value) {
        return new Length(value, LengthUnits.Nanometer);
    }
    static FromMicrometer(value) {
        return new Length(value, LengthUnits.Micrometer);
    }
    static FromCentimeter(value) {
        return new Length(value, LengthUnits.Centimeter);
    }
    static FromDecimeter(value) {
        return new Length(value, LengthUnits.Decimeter);
    }
    static FromHectometer(value) {
        return new Length(value, LengthUnits.Hectometer);
    }
    static FromKilometer(value) {
        return new Length(value, LengthUnits.Kilometer);
    }
    static FromKiloparsec(value) {
        return new Length(value, LengthUnits.Kiloparsec);
    }
    static FromMegaparsec(value) {
        return new Length(value, LengthUnits.Megaparsec);
    }
    static FromKilolightYear(value) {
        return new Length(value, LengthUnits.KilolightYear);
    }
    static FromMegalightYear(value) {
        return new Length(value, LengthUnits.MegalightYear);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
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
            case LengthUnits.Nanometer:
                return (this.value) / 1e-9;
            case LengthUnits.Micrometer:
                return (this.value) / 0.000001;
            case LengthUnits.Centimeter:
                return (this.value) / 0.01;
            case LengthUnits.Decimeter:
                return (this.value) / 0.1;
            case LengthUnits.Hectometer:
                return (this.value) / 100;
            case LengthUnits.Kilometer:
                return (this.value) / 1000;
            case LengthUnits.Kiloparsec:
                return (this.value / 3.08567758128e16) / 1000;
            case LengthUnits.Megaparsec:
                return (this.value / 3.08567758128e16) / 1000000;
            case LengthUnits.KilolightYear:
                return (this.value / 9.46073047258e15) / 1000;
            case LengthUnits.MegalightYear:
                return (this.value / 9.46073047258e15) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LengthUnits.Meters:
                return value;
            case LengthUnits.Miles:
                return value * 1609.34;
            case LengthUnits.Yards:
                return value * 0.9144;
            case LengthUnits.Feet:
                return value * 0.3048;
            case LengthUnits.UsSurveyFeet:
                return value * 1200 / 3937;
            case LengthUnits.Inches:
                return value * 2.54e-2;
            case LengthUnits.Mils:
                return value * 2.54e-5;
            case LengthUnits.NauticalMiles:
                return value * 1852;
            case LengthUnits.Fathoms:
                return value * 1.8288;
            case LengthUnits.Shackles:
                return value * 27.432;
            case LengthUnits.Microinches:
                return value * 2.54e-8;
            case LengthUnits.PrinterPoints:
                return (value / 72.27) * 2.54e-2;
            case LengthUnits.DtpPoints:
                return (value / 72) * 2.54e-2;
            case LengthUnits.PrinterPicas:
                return value / 237.106301584;
            case LengthUnits.DtpPicas:
                return value / 236.220472441;
            case LengthUnits.Twips:
                return value / 56692.913385826;
            case LengthUnits.Hands:
                return value * 1.016e-1;
            case LengthUnits.AstronomicalUnits:
                return value * 1.4959787070e11;
            case LengthUnits.Parsecs:
                return value * 3.08567758128e16;
            case LengthUnits.LightYears:
                return value * 9.46073047258e15;
            case LengthUnits.SolarRadiuses:
                return value * 6.95510000E+08;
            case LengthUnits.Nanometer:
                return (value) * 1e-9;
            case LengthUnits.Micrometer:
                return (value) * 0.000001;
            case LengthUnits.Centimeter:
                return (value) * 0.01;
            case LengthUnits.Decimeter:
                return (value) * 0.1;
            case LengthUnits.Hectometer:
                return (value) * 100;
            case LengthUnits.Kilometer:
                return (value) * 1000;
            case LengthUnits.Kiloparsec:
                return (value * 3.08567758128e16) * 1000;
            case LengthUnits.Megaparsec:
                return (value * 3.08567758128e16) * 1000000;
            case LengthUnits.KilolightYear:
                return (value * 9.46073047258e15) * 1000;
            case LengthUnits.MegalightYear:
                return (value * 9.46073047258e15) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = LengthUnits.Meters) {
        switch (toUnit) {
            case LengthUnits.Meters:
                return this.Meters + ` m`;
            case LengthUnits.Miles:
                return this.Miles + ` mi`;
            case LengthUnits.Yards:
                return this.Yards + ` yd`;
            case LengthUnits.Feet:
                return this.Feet + ` ft`;
            case LengthUnits.UsSurveyFeet:
                return this.UsSurveyFeet + ` ftUS`;
            case LengthUnits.Inches:
                return this.Inches + ` in`;
            case LengthUnits.Mils:
                return this.Mils + ` mil`;
            case LengthUnits.NauticalMiles:
                return this.NauticalMiles + ` NM`;
            case LengthUnits.Fathoms:
                return this.Fathoms + ` fathom`;
            case LengthUnits.Shackles:
                return this.Shackles + ` shackle`;
            case LengthUnits.Microinches:
                return this.Microinches + ` µin`;
            case LengthUnits.PrinterPoints:
                return this.PrinterPoints + ` pt`;
            case LengthUnits.DtpPoints:
                return this.DtpPoints + ` pt`;
            case LengthUnits.PrinterPicas:
                return this.PrinterPicas + ` pica`;
            case LengthUnits.DtpPicas:
                return this.DtpPicas + ` pica`;
            case LengthUnits.Twips:
                return this.Twips + ` twip`;
            case LengthUnits.Hands:
                return this.Hands + ` h`;
            case LengthUnits.AstronomicalUnits:
                return this.AstronomicalUnits + ` au`;
            case LengthUnits.Parsecs:
                return this.Parsecs + ` pc`;
            case LengthUnits.LightYears:
                return this.LightYears + ` ly`;
            case LengthUnits.SolarRadiuses:
                return this.SolarRadiuses + ` R⊙`;
            case LengthUnits.Nanometer:
                return this.Nanometer + ` m`;
            case LengthUnits.Micrometer:
                return this.Micrometer + ` m`;
            case LengthUnits.Centimeter:
                return this.Centimeter + ` m`;
            case LengthUnits.Decimeter:
                return this.Decimeter + ` m`;
            case LengthUnits.Hectometer:
                return this.Hectometer + ` m`;
            case LengthUnits.Kilometer:
                return this.Kilometer + ` m`;
            case LengthUnits.Kiloparsec:
                return this.Kiloparsec + ` pc`;
            case LengthUnits.Megaparsec:
                return this.Megaparsec + ` pc`;
            case LengthUnits.KilolightYear:
                return this.KilolightYear + ` ly`;
            case LengthUnits.MegalightYear:
                return this.MegalightYear + ` ly`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Length = Length;
//# sourceMappingURL=length.g.js.map