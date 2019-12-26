"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PressureUnits;
(function (PressureUnits) {
    PressureUnits[PressureUnits["Pascals"] = 0] = "Pascals";
    PressureUnits[PressureUnits["Atmospheres"] = 1] = "Atmospheres";
    PressureUnits[PressureUnits["Bars"] = 2] = "Bars";
    PressureUnits[PressureUnits["KilogramsForcePerSquareMeter"] = 3] = "KilogramsForcePerSquareMeter";
    PressureUnits[PressureUnits["KilogramsForcePerSquareCentimeter"] = 4] = "KilogramsForcePerSquareCentimeter";
    PressureUnits[PressureUnits["KilogramsForcePerSquareMillimeter"] = 5] = "KilogramsForcePerSquareMillimeter";
    PressureUnits[PressureUnits["NewtonsPerSquareMeter"] = 6] = "NewtonsPerSquareMeter";
    PressureUnits[PressureUnits["NewtonsPerSquareCentimeter"] = 7] = "NewtonsPerSquareCentimeter";
    PressureUnits[PressureUnits["NewtonsPerSquareMillimeter"] = 8] = "NewtonsPerSquareMillimeter";
    PressureUnits[PressureUnits["TechnicalAtmospheres"] = 9] = "TechnicalAtmospheres";
    PressureUnits[PressureUnits["Torrs"] = 10] = "Torrs";
    PressureUnits[PressureUnits["PoundsForcePerSquareInch"] = 11] = "PoundsForcePerSquareInch";
    PressureUnits[PressureUnits["PoundsForcePerSquareFoot"] = 12] = "PoundsForcePerSquareFoot";
    PressureUnits[PressureUnits["TonnesForcePerSquareMillimeter"] = 13] = "TonnesForcePerSquareMillimeter";
    PressureUnits[PressureUnits["TonnesForcePerSquareMeter"] = 14] = "TonnesForcePerSquareMeter";
    PressureUnits[PressureUnits["MetersOfHead"] = 15] = "MetersOfHead";
    PressureUnits[PressureUnits["TonnesForcePerSquareCentimeter"] = 16] = "TonnesForcePerSquareCentimeter";
    PressureUnits[PressureUnits["FeetOfHead"] = 17] = "FeetOfHead";
    PressureUnits[PressureUnits["MillimetersOfMercury"] = 18] = "MillimetersOfMercury";
    PressureUnits[PressureUnits["InchesOfMercury"] = 19] = "InchesOfMercury";
    PressureUnits[PressureUnits["DynesPerSquareCentimeter"] = 20] = "DynesPerSquareCentimeter";
    PressureUnits[PressureUnits["PoundsPerInchSecondSquared"] = 21] = "PoundsPerInchSecondSquared";
    PressureUnits[PressureUnits["InchesOfWaterColumn"] = 22] = "InchesOfWaterColumn";
    PressureUnits[PressureUnits["Micropascals"] = 23] = "Micropascals";
    PressureUnits[PressureUnits["Decapascals"] = 24] = "Decapascals";
    PressureUnits[PressureUnits["Hectopascals"] = 25] = "Hectopascals";
    PressureUnits[PressureUnits["Kilopascals"] = 26] = "Kilopascals";
    PressureUnits[PressureUnits["Megapascals"] = 27] = "Megapascals";
    PressureUnits[PressureUnits["Gigapascals"] = 28] = "Gigapascals";
    PressureUnits[PressureUnits["Microbars"] = 29] = "Microbars";
    PressureUnits[PressureUnits["Centibars"] = 30] = "Centibars";
    PressureUnits[PressureUnits["Decibars"] = 31] = "Decibars";
    PressureUnits[PressureUnits["Kilobars"] = 32] = "Kilobars";
    PressureUnits[PressureUnits["Megabars"] = 33] = "Megabars";
    PressureUnits[PressureUnits["KilonewtonsPerSquareMeter"] = 34] = "KilonewtonsPerSquareMeter";
    PressureUnits[PressureUnits["MeganewtonsPerSquareMeter"] = 35] = "MeganewtonsPerSquareMeter";
    PressureUnits[PressureUnits["KilonewtonsPerSquareCentimeter"] = 36] = "KilonewtonsPerSquareCentimeter";
    PressureUnits[PressureUnits["KilonewtonsPerSquareMillimeter"] = 37] = "KilonewtonsPerSquareMillimeter";
    PressureUnits[PressureUnits["KilopoundsForcePerSquareInch"] = 38] = "KilopoundsForcePerSquareInch";
    PressureUnits[PressureUnits["KilopoundsForcePerSquareFoot"] = 39] = "KilopoundsForcePerSquareFoot";
})(PressureUnits = exports.PressureUnits || (exports.PressureUnits = {}));
class Pressure {
    constructor(value, fromUnit) {
        this.pascalsLazy = null;
        this.atmospheresLazy = null;
        this.barsLazy = null;
        this.kilogramsforcepersquaremeterLazy = null;
        this.kilogramsforcepersquarecentimeterLazy = null;
        this.kilogramsforcepersquaremillimeterLazy = null;
        this.newtonspersquaremeterLazy = null;
        this.newtonspersquarecentimeterLazy = null;
        this.newtonspersquaremillimeterLazy = null;
        this.technicalatmospheresLazy = null;
        this.torrsLazy = null;
        this.poundsforcepersquareinchLazy = null;
        this.poundsforcepersquarefootLazy = null;
        this.tonnesforcepersquaremillimeterLazy = null;
        this.tonnesforcepersquaremeterLazy = null;
        this.metersofheadLazy = null;
        this.tonnesforcepersquarecentimeterLazy = null;
        this.feetofheadLazy = null;
        this.millimetersofmercuryLazy = null;
        this.inchesofmercuryLazy = null;
        this.dynespersquarecentimeterLazy = null;
        this.poundsperinchsecondsquaredLazy = null;
        this.inchesofwatercolumnLazy = null;
        this.micropascalsLazy = null;
        this.decapascalsLazy = null;
        this.hectopascalsLazy = null;
        this.kilopascalsLazy = null;
        this.megapascalsLazy = null;
        this.gigapascalsLazy = null;
        this.microbarsLazy = null;
        this.centibarsLazy = null;
        this.decibarsLazy = null;
        this.kilobarsLazy = null;
        this.megabarsLazy = null;
        this.kilonewtonspersquaremeterLazy = null;
        this.meganewtonspersquaremeterLazy = null;
        this.kilonewtonspersquarecentimeterLazy = null;
        this.kilonewtonspersquaremillimeterLazy = null;
        this.kilopoundsforcepersquareinchLazy = null;
        this.kilopoundsforcepersquarefootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Pascals() {
        if (this.pascalsLazy !== null) {
            return this.pascalsLazy;
        }
        return this.pascalsLazy = this.convertFromBase(PressureUnits.Pascals);
    }
    get Atmospheres() {
        if (this.atmospheresLazy !== null) {
            return this.atmospheresLazy;
        }
        return this.atmospheresLazy = this.convertFromBase(PressureUnits.Atmospheres);
    }
    get Bars() {
        if (this.barsLazy !== null) {
            return this.barsLazy;
        }
        return this.barsLazy = this.convertFromBase(PressureUnits.Bars);
    }
    get KilogramsForcePerSquareMeter() {
        if (this.kilogramsforcepersquaremeterLazy !== null) {
            return this.kilogramsforcepersquaremeterLazy;
        }
        return this.kilogramsforcepersquaremeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareMeter);
    }
    get KilogramsForcePerSquareCentimeter() {
        if (this.kilogramsforcepersquarecentimeterLazy !== null) {
            return this.kilogramsforcepersquarecentimeterLazy;
        }
        return this.kilogramsforcepersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareCentimeter);
    }
    get KilogramsForcePerSquareMillimeter() {
        if (this.kilogramsforcepersquaremillimeterLazy !== null) {
            return this.kilogramsforcepersquaremillimeterLazy;
        }
        return this.kilogramsforcepersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilogramsForcePerSquareMillimeter);
    }
    get NewtonsPerSquareMeter() {
        if (this.newtonspersquaremeterLazy !== null) {
            return this.newtonspersquaremeterLazy;
        }
        return this.newtonspersquaremeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareMeter);
    }
    get NewtonsPerSquareCentimeter() {
        if (this.newtonspersquarecentimeterLazy !== null) {
            return this.newtonspersquarecentimeterLazy;
        }
        return this.newtonspersquarecentimeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareCentimeter);
    }
    get NewtonsPerSquareMillimeter() {
        if (this.newtonspersquaremillimeterLazy !== null) {
            return this.newtonspersquaremillimeterLazy;
        }
        return this.newtonspersquaremillimeterLazy = this.convertFromBase(PressureUnits.NewtonsPerSquareMillimeter);
    }
    get TechnicalAtmospheres() {
        if (this.technicalatmospheresLazy !== null) {
            return this.technicalatmospheresLazy;
        }
        return this.technicalatmospheresLazy = this.convertFromBase(PressureUnits.TechnicalAtmospheres);
    }
    get Torrs() {
        if (this.torrsLazy !== null) {
            return this.torrsLazy;
        }
        return this.torrsLazy = this.convertFromBase(PressureUnits.Torrs);
    }
    get PoundsForcePerSquareInch() {
        if (this.poundsforcepersquareinchLazy !== null) {
            return this.poundsforcepersquareinchLazy;
        }
        return this.poundsforcepersquareinchLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareInch);
    }
    get PoundsForcePerSquareFoot() {
        if (this.poundsforcepersquarefootLazy !== null) {
            return this.poundsforcepersquarefootLazy;
        }
        return this.poundsforcepersquarefootLazy = this.convertFromBase(PressureUnits.PoundsForcePerSquareFoot);
    }
    get TonnesForcePerSquareMillimeter() {
        if (this.tonnesforcepersquaremillimeterLazy !== null) {
            return this.tonnesforcepersquaremillimeterLazy;
        }
        return this.tonnesforcepersquaremillimeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareMillimeter);
    }
    get TonnesForcePerSquareMeter() {
        if (this.tonnesforcepersquaremeterLazy !== null) {
            return this.tonnesforcepersquaremeterLazy;
        }
        return this.tonnesforcepersquaremeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareMeter);
    }
    get MetersOfHead() {
        if (this.metersofheadLazy !== null) {
            return this.metersofheadLazy;
        }
        return this.metersofheadLazy = this.convertFromBase(PressureUnits.MetersOfHead);
    }
    get TonnesForcePerSquareCentimeter() {
        if (this.tonnesforcepersquarecentimeterLazy !== null) {
            return this.tonnesforcepersquarecentimeterLazy;
        }
        return this.tonnesforcepersquarecentimeterLazy = this.convertFromBase(PressureUnits.TonnesForcePerSquareCentimeter);
    }
    get FeetOfHead() {
        if (this.feetofheadLazy !== null) {
            return this.feetofheadLazy;
        }
        return this.feetofheadLazy = this.convertFromBase(PressureUnits.FeetOfHead);
    }
    get MillimetersOfMercury() {
        if (this.millimetersofmercuryLazy !== null) {
            return this.millimetersofmercuryLazy;
        }
        return this.millimetersofmercuryLazy = this.convertFromBase(PressureUnits.MillimetersOfMercury);
    }
    get InchesOfMercury() {
        if (this.inchesofmercuryLazy !== null) {
            return this.inchesofmercuryLazy;
        }
        return this.inchesofmercuryLazy = this.convertFromBase(PressureUnits.InchesOfMercury);
    }
    get DynesPerSquareCentimeter() {
        if (this.dynespersquarecentimeterLazy !== null) {
            return this.dynespersquarecentimeterLazy;
        }
        return this.dynespersquarecentimeterLazy = this.convertFromBase(PressureUnits.DynesPerSquareCentimeter);
    }
    get PoundsPerInchSecondSquared() {
        if (this.poundsperinchsecondsquaredLazy !== null) {
            return this.poundsperinchsecondsquaredLazy;
        }
        return this.poundsperinchsecondsquaredLazy = this.convertFromBase(PressureUnits.PoundsPerInchSecondSquared);
    }
    get InchesOfWaterColumn() {
        if (this.inchesofwatercolumnLazy !== null) {
            return this.inchesofwatercolumnLazy;
        }
        return this.inchesofwatercolumnLazy = this.convertFromBase(PressureUnits.InchesOfWaterColumn);
    }
    get Micropascals() {
        if (this.micropascalsLazy !== null) {
            return this.micropascalsLazy;
        }
        return this.micropascalsLazy = this.convertFromBase(PressureUnits.Micropascals);
    }
    get Decapascals() {
        if (this.decapascalsLazy !== null) {
            return this.decapascalsLazy;
        }
        return this.decapascalsLazy = this.convertFromBase(PressureUnits.Decapascals);
    }
    get Hectopascals() {
        if (this.hectopascalsLazy !== null) {
            return this.hectopascalsLazy;
        }
        return this.hectopascalsLazy = this.convertFromBase(PressureUnits.Hectopascals);
    }
    get Kilopascals() {
        if (this.kilopascalsLazy !== null) {
            return this.kilopascalsLazy;
        }
        return this.kilopascalsLazy = this.convertFromBase(PressureUnits.Kilopascals);
    }
    get Megapascals() {
        if (this.megapascalsLazy !== null) {
            return this.megapascalsLazy;
        }
        return this.megapascalsLazy = this.convertFromBase(PressureUnits.Megapascals);
    }
    get Gigapascals() {
        if (this.gigapascalsLazy !== null) {
            return this.gigapascalsLazy;
        }
        return this.gigapascalsLazy = this.convertFromBase(PressureUnits.Gigapascals);
    }
    get Microbars() {
        if (this.microbarsLazy !== null) {
            return this.microbarsLazy;
        }
        return this.microbarsLazy = this.convertFromBase(PressureUnits.Microbars);
    }
    get Centibars() {
        if (this.centibarsLazy !== null) {
            return this.centibarsLazy;
        }
        return this.centibarsLazy = this.convertFromBase(PressureUnits.Centibars);
    }
    get Decibars() {
        if (this.decibarsLazy !== null) {
            return this.decibarsLazy;
        }
        return this.decibarsLazy = this.convertFromBase(PressureUnits.Decibars);
    }
    get Kilobars() {
        if (this.kilobarsLazy !== null) {
            return this.kilobarsLazy;
        }
        return this.kilobarsLazy = this.convertFromBase(PressureUnits.Kilobars);
    }
    get Megabars() {
        if (this.megabarsLazy !== null) {
            return this.megabarsLazy;
        }
        return this.megabarsLazy = this.convertFromBase(PressureUnits.Megabars);
    }
    get KilonewtonsPerSquareMeter() {
        if (this.kilonewtonspersquaremeterLazy !== null) {
            return this.kilonewtonspersquaremeterLazy;
        }
        return this.kilonewtonspersquaremeterLazy = this.convertFromBase(PressureUnits.KilonewtonsPerSquareMeter);
    }
    get MeganewtonsPerSquareMeter() {
        if (this.meganewtonspersquaremeterLazy !== null) {
            return this.meganewtonspersquaremeterLazy;
        }
        return this.meganewtonspersquaremeterLazy = this.convertFromBase(PressureUnits.MeganewtonsPerSquareMeter);
    }
    get KilonewtonsPerSquareCentimeter() {
        if (this.kilonewtonspersquarecentimeterLazy !== null) {
            return this.kilonewtonspersquarecentimeterLazy;
        }
        return this.kilonewtonspersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilonewtonsPerSquareCentimeter);
    }
    get KilonewtonsPerSquareMillimeter() {
        if (this.kilonewtonspersquaremillimeterLazy !== null) {
            return this.kilonewtonspersquaremillimeterLazy;
        }
        return this.kilonewtonspersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilonewtonsPerSquareMillimeter);
    }
    get KilopoundsForcePerSquareInch() {
        if (this.kilopoundsforcepersquareinchLazy !== null) {
            return this.kilopoundsforcepersquareinchLazy;
        }
        return this.kilopoundsforcepersquareinchLazy = this.convertFromBase(PressureUnits.KilopoundsForcePerSquareInch);
    }
    get KilopoundsForcePerSquareFoot() {
        if (this.kilopoundsforcepersquarefootLazy !== null) {
            return this.kilopoundsforcepersquarefootLazy;
        }
        return this.kilopoundsforcepersquarefootLazy = this.convertFromBase(PressureUnits.KilopoundsForcePerSquareFoot);
    }
    static FromPascals(value) {
        return new Pressure(value, PressureUnits.Pascals);
    }
    static FromAtmospheres(value) {
        return new Pressure(value, PressureUnits.Atmospheres);
    }
    static FromBars(value) {
        return new Pressure(value, PressureUnits.Bars);
    }
    static FromKilogramsForcePerSquareMeter(value) {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareMeter);
    }
    static FromKilogramsForcePerSquareCentimeter(value) {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareCentimeter);
    }
    static FromKilogramsForcePerSquareMillimeter(value) {
        return new Pressure(value, PressureUnits.KilogramsForcePerSquareMillimeter);
    }
    static FromNewtonsPerSquareMeter(value) {
        return new Pressure(value, PressureUnits.NewtonsPerSquareMeter);
    }
    static FromNewtonsPerSquareCentimeter(value) {
        return new Pressure(value, PressureUnits.NewtonsPerSquareCentimeter);
    }
    static FromNewtonsPerSquareMillimeter(value) {
        return new Pressure(value, PressureUnits.NewtonsPerSquareMillimeter);
    }
    static FromTechnicalAtmospheres(value) {
        return new Pressure(value, PressureUnits.TechnicalAtmospheres);
    }
    static FromTorrs(value) {
        return new Pressure(value, PressureUnits.Torrs);
    }
    static FromPoundsForcePerSquareInch(value) {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareInch);
    }
    static FromPoundsForcePerSquareFoot(value) {
        return new Pressure(value, PressureUnits.PoundsForcePerSquareFoot);
    }
    static FromTonnesForcePerSquareMillimeter(value) {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareMillimeter);
    }
    static FromTonnesForcePerSquareMeter(value) {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareMeter);
    }
    static FromMetersOfHead(value) {
        return new Pressure(value, PressureUnits.MetersOfHead);
    }
    static FromTonnesForcePerSquareCentimeter(value) {
        return new Pressure(value, PressureUnits.TonnesForcePerSquareCentimeter);
    }
    static FromFeetOfHead(value) {
        return new Pressure(value, PressureUnits.FeetOfHead);
    }
    static FromMillimetersOfMercury(value) {
        return new Pressure(value, PressureUnits.MillimetersOfMercury);
    }
    static FromInchesOfMercury(value) {
        return new Pressure(value, PressureUnits.InchesOfMercury);
    }
    static FromDynesPerSquareCentimeter(value) {
        return new Pressure(value, PressureUnits.DynesPerSquareCentimeter);
    }
    static FromPoundsPerInchSecondSquared(value) {
        return new Pressure(value, PressureUnits.PoundsPerInchSecondSquared);
    }
    static FromInchesOfWaterColumn(value) {
        return new Pressure(value, PressureUnits.InchesOfWaterColumn);
    }
    static FromMicropascals(value) {
        return new Pressure(value, PressureUnits.Micropascals);
    }
    static FromDecapascals(value) {
        return new Pressure(value, PressureUnits.Decapascals);
    }
    static FromHectopascals(value) {
        return new Pressure(value, PressureUnits.Hectopascals);
    }
    static FromKilopascals(value) {
        return new Pressure(value, PressureUnits.Kilopascals);
    }
    static FromMegapascals(value) {
        return new Pressure(value, PressureUnits.Megapascals);
    }
    static FromGigapascals(value) {
        return new Pressure(value, PressureUnits.Gigapascals);
    }
    static FromMicrobars(value) {
        return new Pressure(value, PressureUnits.Microbars);
    }
    static FromCentibars(value) {
        return new Pressure(value, PressureUnits.Centibars);
    }
    static FromDecibars(value) {
        return new Pressure(value, PressureUnits.Decibars);
    }
    static FromKilobars(value) {
        return new Pressure(value, PressureUnits.Kilobars);
    }
    static FromMegabars(value) {
        return new Pressure(value, PressureUnits.Megabars);
    }
    static FromKilonewtonsPerSquareMeter(value) {
        return new Pressure(value, PressureUnits.KilonewtonsPerSquareMeter);
    }
    static FromMeganewtonsPerSquareMeter(value) {
        return new Pressure(value, PressureUnits.MeganewtonsPerSquareMeter);
    }
    static FromKilonewtonsPerSquareCentimeter(value) {
        return new Pressure(value, PressureUnits.KilonewtonsPerSquareCentimeter);
    }
    static FromKilonewtonsPerSquareMillimeter(value) {
        return new Pressure(value, PressureUnits.KilonewtonsPerSquareMillimeter);
    }
    static FromKilopoundsForcePerSquareInch(value) {
        return new Pressure(value, PressureUnits.KilopoundsForcePerSquareInch);
    }
    static FromKilopoundsForcePerSquareFoot(value) {
        return new Pressure(value, PressureUnits.KilopoundsForcePerSquareFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case PressureUnits.Pascals:
                return this.value;
            case PressureUnits.Atmospheres:
                return this.value / (1.01325 * 1e5);
            case PressureUnits.Bars:
                return this.value / 1e5;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return this.value * 0.101971619222242;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return this.value / 9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return this.value / 9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter:
                return this.value;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return this.value / 1e4;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return this.value / 1e6;
            case PressureUnits.TechnicalAtmospheres:
                return this.value / (9.80680592331 * 1e4);
            case PressureUnits.Torrs:
                return this.value / (1.3332266752 * 1e2);
            case PressureUnits.PoundsForcePerSquareInch:
                return this.value / 6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareFoot:
                return this.value / 4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return this.value / 9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter:
                return this.value / 9.80665e3;
            case PressureUnits.MetersOfHead:
                return this.value * 0.0001019977334;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return this.value / 9.80665e7;
            case PressureUnits.FeetOfHead:
                return this.value * 0.000334552565551;
            case PressureUnits.MillimetersOfMercury:
                return this.value * 7.50061561302643e-3;
            case PressureUnits.InchesOfMercury:
                return this.value * 2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter:
                return this.value / 1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared:
                return this.value / 1.785796732283465e1;
            case PressureUnits.InchesOfWaterColumn:
                return this.value / 249.08890833333;
            case PressureUnits.Micropascals:
                return (this.value) / 0.000001;
            case PressureUnits.Decapascals:
                return (this.value) / 10;
            case PressureUnits.Hectopascals:
                return (this.value) / 100;
            case PressureUnits.Kilopascals:
                return (this.value) / 1000;
            case PressureUnits.Megapascals:
                return (this.value) / 1000000;
            case PressureUnits.Gigapascals:
                return (this.value) / 1000000000;
            case PressureUnits.Microbars:
                return (this.value / 1e5) / 0.000001;
            case PressureUnits.Centibars:
                return (this.value / 1e5) / 0.01;
            case PressureUnits.Decibars:
                return (this.value / 1e5) / 0.1;
            case PressureUnits.Kilobars:
                return (this.value / 1e5) / 1000;
            case PressureUnits.Megabars:
                return (this.value / 1e5) / 1000000;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return (this.value) / 1000;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return (this.value) / 1000000;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return (this.value / 1e4) / 1000;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return (this.value / 1e6) / 1000;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return (this.value / 6.894757293168361e3) / 1000;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return (this.value / 4.788025898033584e1) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case PressureUnits.Pascals:
                return value;
            case PressureUnits.Atmospheres:
                return value * 1.01325 * 1e5;
            case PressureUnits.Bars:
                return value * 1e5;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return value * 9.80665019960652;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return value * 9.80665e4;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return value * 9.80665e6;
            case PressureUnits.NewtonsPerSquareMeter:
                return value;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return value * 1e4;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return value * 1e6;
            case PressureUnits.TechnicalAtmospheres:
                return value * 9.80680592331 * 1e4;
            case PressureUnits.Torrs:
                return value * 1.3332266752 * 1e2;
            case PressureUnits.PoundsForcePerSquareInch:
                return value * 6.894757293168361e3;
            case PressureUnits.PoundsForcePerSquareFoot:
                return value * 4.788025898033584e1;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return value * 9.80665e9;
            case PressureUnits.TonnesForcePerSquareMeter:
                return value * 9.80665e3;
            case PressureUnits.MetersOfHead:
                return value * 9804.139432;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return value * 9.80665e7;
            case PressureUnits.FeetOfHead:
                return value * 2989.0669;
            case PressureUnits.MillimetersOfMercury:
                return value / 7.50061561302643e-3;
            case PressureUnits.InchesOfMercury:
                return value / 2.95299830714159e-4;
            case PressureUnits.DynesPerSquareCentimeter:
                return value * 1.0e-1;
            case PressureUnits.PoundsPerInchSecondSquared:
                return value * 1.785796732283465e1;
            case PressureUnits.InchesOfWaterColumn:
                return value * 249.08890833333;
            case PressureUnits.Micropascals:
                return (value) * 0.000001;
            case PressureUnits.Decapascals:
                return (value) * 10;
            case PressureUnits.Hectopascals:
                return (value) * 100;
            case PressureUnits.Kilopascals:
                return (value) * 1000;
            case PressureUnits.Megapascals:
                return (value) * 1000000;
            case PressureUnits.Gigapascals:
                return (value) * 1000000000;
            case PressureUnits.Microbars:
                return (value * 1e5) * 0.000001;
            case PressureUnits.Centibars:
                return (value * 1e5) * 0.01;
            case PressureUnits.Decibars:
                return (value * 1e5) * 0.1;
            case PressureUnits.Kilobars:
                return (value * 1e5) * 1000;
            case PressureUnits.Megabars:
                return (value * 1e5) * 1000000;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return (value) * 1000;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return (value) * 1000000;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return (value * 1e4) * 1000;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return (value * 1e6) * 1000;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return (value * 6.894757293168361e3) * 1000;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return (value * 4.788025898033584e1) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = PressureUnits.Pascals) {
        switch (toUnit) {
            case PressureUnits.Pascals:
                return this.Pascals + ` Pa`;
            case PressureUnits.Atmospheres:
                return this.Atmospheres + ` atm`;
            case PressureUnits.Bars:
                return this.Bars + ` bar`;
            case PressureUnits.KilogramsForcePerSquareMeter:
                return this.KilogramsForcePerSquareMeter + ` kgf/m²`;
            case PressureUnits.KilogramsForcePerSquareCentimeter:
                return this.KilogramsForcePerSquareCentimeter + ` kgf/cm²`;
            case PressureUnits.KilogramsForcePerSquareMillimeter:
                return this.KilogramsForcePerSquareMillimeter + ` kgf/mm²`;
            case PressureUnits.NewtonsPerSquareMeter:
                return this.NewtonsPerSquareMeter + ` N/m²`;
            case PressureUnits.NewtonsPerSquareCentimeter:
                return this.NewtonsPerSquareCentimeter + ` N/cm²`;
            case PressureUnits.NewtonsPerSquareMillimeter:
                return this.NewtonsPerSquareMillimeter + ` N/mm²`;
            case PressureUnits.TechnicalAtmospheres:
                return this.TechnicalAtmospheres + ` at`;
            case PressureUnits.Torrs:
                return this.Torrs + ` torr`;
            case PressureUnits.PoundsForcePerSquareInch:
                return this.PoundsForcePerSquareInch + ` psi`;
            case PressureUnits.PoundsForcePerSquareFoot:
                return this.PoundsForcePerSquareFoot + ` lb/ft²`;
            case PressureUnits.TonnesForcePerSquareMillimeter:
                return this.TonnesForcePerSquareMillimeter + ` tf/mm²`;
            case PressureUnits.TonnesForcePerSquareMeter:
                return this.TonnesForcePerSquareMeter + ` tf/m²`;
            case PressureUnits.MetersOfHead:
                return this.MetersOfHead + ` m of head`;
            case PressureUnits.TonnesForcePerSquareCentimeter:
                return this.TonnesForcePerSquareCentimeter + ` tf/cm²`;
            case PressureUnits.FeetOfHead:
                return this.FeetOfHead + ` ft of head`;
            case PressureUnits.MillimetersOfMercury:
                return this.MillimetersOfMercury + ` mmHg`;
            case PressureUnits.InchesOfMercury:
                return this.InchesOfMercury + ` inHg`;
            case PressureUnits.DynesPerSquareCentimeter:
                return this.DynesPerSquareCentimeter + ` dyn/cm²`;
            case PressureUnits.PoundsPerInchSecondSquared:
                return this.PoundsPerInchSecondSquared + ` lbm/(in·s²)`;
            case PressureUnits.InchesOfWaterColumn:
                return this.InchesOfWaterColumn + ` wc`;
            case PressureUnits.Micropascals:
                return this.Micropascals + ` Pa`;
            case PressureUnits.Decapascals:
                return this.Decapascals + ` Pa`;
            case PressureUnits.Hectopascals:
                return this.Hectopascals + ` Pa`;
            case PressureUnits.Kilopascals:
                return this.Kilopascals + ` Pa`;
            case PressureUnits.Megapascals:
                return this.Megapascals + ` Pa`;
            case PressureUnits.Gigapascals:
                return this.Gigapascals + ` Pa`;
            case PressureUnits.Microbars:
                return this.Microbars + ` bar`;
            case PressureUnits.Centibars:
                return this.Centibars + ` bar`;
            case PressureUnits.Decibars:
                return this.Decibars + ` bar`;
            case PressureUnits.Kilobars:
                return this.Kilobars + ` bar`;
            case PressureUnits.Megabars:
                return this.Megabars + ` bar`;
            case PressureUnits.KilonewtonsPerSquareMeter:
                return this.KilonewtonsPerSquareMeter + ` N/m²`;
            case PressureUnits.MeganewtonsPerSquareMeter:
                return this.MeganewtonsPerSquareMeter + ` N/m²`;
            case PressureUnits.KilonewtonsPerSquareCentimeter:
                return this.KilonewtonsPerSquareCentimeter + ` N/cm²`;
            case PressureUnits.KilonewtonsPerSquareMillimeter:
                return this.KilonewtonsPerSquareMillimeter + ` N/mm²`;
            case PressureUnits.KilopoundsForcePerSquareInch:
                return this.KilopoundsForcePerSquareInch + ` psi`;
            case PressureUnits.KilopoundsForcePerSquareFoot:
                return this.KilopoundsForcePerSquareFoot + ` lb/ft²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Pressure = Pressure;
//# sourceMappingURL=pressure.g.js.map