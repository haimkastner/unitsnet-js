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
    PressureUnits[PressureUnits["Micropascal"] = 23] = "Micropascal";
    PressureUnits[PressureUnits["Decapascal"] = 24] = "Decapascal";
    PressureUnits[PressureUnits["Hectopascal"] = 25] = "Hectopascal";
    PressureUnits[PressureUnits["Kilopascal"] = 26] = "Kilopascal";
    PressureUnits[PressureUnits["Megapascal"] = 27] = "Megapascal";
    PressureUnits[PressureUnits["Gigapascal"] = 28] = "Gigapascal";
    PressureUnits[PressureUnits["Microbar"] = 29] = "Microbar";
    PressureUnits[PressureUnits["Centibar"] = 30] = "Centibar";
    PressureUnits[PressureUnits["Decibar"] = 31] = "Decibar";
    PressureUnits[PressureUnits["Kilobar"] = 32] = "Kilobar";
    PressureUnits[PressureUnits["Megabar"] = 33] = "Megabar";
    PressureUnits[PressureUnits["KilonewtonPerSquareMeter"] = 34] = "KilonewtonPerSquareMeter";
    PressureUnits[PressureUnits["MeganewtonPerSquareMeter"] = 35] = "MeganewtonPerSquareMeter";
    PressureUnits[PressureUnits["KilonewtonPerSquareCentimeter"] = 36] = "KilonewtonPerSquareCentimeter";
    PressureUnits[PressureUnits["KilonewtonPerSquareMillimeter"] = 37] = "KilonewtonPerSquareMillimeter";
    PressureUnits[PressureUnits["KilopoundForcePerSquareInch"] = 38] = "KilopoundForcePerSquareInch";
    PressureUnits[PressureUnits["KilopoundForcePerSquareFoot"] = 39] = "KilopoundForcePerSquareFoot";
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
        this.micropascalLazy = null;
        this.decapascalLazy = null;
        this.hectopascalLazy = null;
        this.kilopascalLazy = null;
        this.megapascalLazy = null;
        this.gigapascalLazy = null;
        this.microbarLazy = null;
        this.centibarLazy = null;
        this.decibarLazy = null;
        this.kilobarLazy = null;
        this.megabarLazy = null;
        this.kilonewtonpersquaremeterLazy = null;
        this.meganewtonpersquaremeterLazy = null;
        this.kilonewtonpersquarecentimeterLazy = null;
        this.kilonewtonpersquaremillimeterLazy = null;
        this.kilopoundforcepersquareinchLazy = null;
        this.kilopoundforcepersquarefootLazy = null;
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
    get Micropascal() {
        if (this.micropascalLazy !== null) {
            return this.micropascalLazy;
        }
        return this.micropascalLazy = this.convertFromBase(PressureUnits.Micropascal);
    }
    get Decapascal() {
        if (this.decapascalLazy !== null) {
            return this.decapascalLazy;
        }
        return this.decapascalLazy = this.convertFromBase(PressureUnits.Decapascal);
    }
    get Hectopascal() {
        if (this.hectopascalLazy !== null) {
            return this.hectopascalLazy;
        }
        return this.hectopascalLazy = this.convertFromBase(PressureUnits.Hectopascal);
    }
    get Kilopascal() {
        if (this.kilopascalLazy !== null) {
            return this.kilopascalLazy;
        }
        return this.kilopascalLazy = this.convertFromBase(PressureUnits.Kilopascal);
    }
    get Megapascal() {
        if (this.megapascalLazy !== null) {
            return this.megapascalLazy;
        }
        return this.megapascalLazy = this.convertFromBase(PressureUnits.Megapascal);
    }
    get Gigapascal() {
        if (this.gigapascalLazy !== null) {
            return this.gigapascalLazy;
        }
        return this.gigapascalLazy = this.convertFromBase(PressureUnits.Gigapascal);
    }
    get Microbar() {
        if (this.microbarLazy !== null) {
            return this.microbarLazy;
        }
        return this.microbarLazy = this.convertFromBase(PressureUnits.Microbar);
    }
    get Centibar() {
        if (this.centibarLazy !== null) {
            return this.centibarLazy;
        }
        return this.centibarLazy = this.convertFromBase(PressureUnits.Centibar);
    }
    get Decibar() {
        if (this.decibarLazy !== null) {
            return this.decibarLazy;
        }
        return this.decibarLazy = this.convertFromBase(PressureUnits.Decibar);
    }
    get Kilobar() {
        if (this.kilobarLazy !== null) {
            return this.kilobarLazy;
        }
        return this.kilobarLazy = this.convertFromBase(PressureUnits.Kilobar);
    }
    get Megabar() {
        if (this.megabarLazy !== null) {
            return this.megabarLazy;
        }
        return this.megabarLazy = this.convertFromBase(PressureUnits.Megabar);
    }
    get KilonewtonPerSquareMeter() {
        if (this.kilonewtonpersquaremeterLazy !== null) {
            return this.kilonewtonpersquaremeterLazy;
        }
        return this.kilonewtonpersquaremeterLazy = this.convertFromBase(PressureUnits.KilonewtonPerSquareMeter);
    }
    get MeganewtonPerSquareMeter() {
        if (this.meganewtonpersquaremeterLazy !== null) {
            return this.meganewtonpersquaremeterLazy;
        }
        return this.meganewtonpersquaremeterLazy = this.convertFromBase(PressureUnits.MeganewtonPerSquareMeter);
    }
    get KilonewtonPerSquareCentimeter() {
        if (this.kilonewtonpersquarecentimeterLazy !== null) {
            return this.kilonewtonpersquarecentimeterLazy;
        }
        return this.kilonewtonpersquarecentimeterLazy = this.convertFromBase(PressureUnits.KilonewtonPerSquareCentimeter);
    }
    get KilonewtonPerSquareMillimeter() {
        if (this.kilonewtonpersquaremillimeterLazy !== null) {
            return this.kilonewtonpersquaremillimeterLazy;
        }
        return this.kilonewtonpersquaremillimeterLazy = this.convertFromBase(PressureUnits.KilonewtonPerSquareMillimeter);
    }
    get KilopoundForcePerSquareInch() {
        if (this.kilopoundforcepersquareinchLazy !== null) {
            return this.kilopoundforcepersquareinchLazy;
        }
        return this.kilopoundforcepersquareinchLazy = this.convertFromBase(PressureUnits.KilopoundForcePerSquareInch);
    }
    get KilopoundForcePerSquareFoot() {
        if (this.kilopoundforcepersquarefootLazy !== null) {
            return this.kilopoundforcepersquarefootLazy;
        }
        return this.kilopoundforcepersquarefootLazy = this.convertFromBase(PressureUnits.KilopoundForcePerSquareFoot);
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
    static FromMicropascal(value) {
        return new Pressure(value, PressureUnits.Micropascal);
    }
    static FromDecapascal(value) {
        return new Pressure(value, PressureUnits.Decapascal);
    }
    static FromHectopascal(value) {
        return new Pressure(value, PressureUnits.Hectopascal);
    }
    static FromKilopascal(value) {
        return new Pressure(value, PressureUnits.Kilopascal);
    }
    static FromMegapascal(value) {
        return new Pressure(value, PressureUnits.Megapascal);
    }
    static FromGigapascal(value) {
        return new Pressure(value, PressureUnits.Gigapascal);
    }
    static FromMicrobar(value) {
        return new Pressure(value, PressureUnits.Microbar);
    }
    static FromCentibar(value) {
        return new Pressure(value, PressureUnits.Centibar);
    }
    static FromDecibar(value) {
        return new Pressure(value, PressureUnits.Decibar);
    }
    static FromKilobar(value) {
        return new Pressure(value, PressureUnits.Kilobar);
    }
    static FromMegabar(value) {
        return new Pressure(value, PressureUnits.Megabar);
    }
    static FromKilonewtonPerSquareMeter(value) {
        return new Pressure(value, PressureUnits.KilonewtonPerSquareMeter);
    }
    static FromMeganewtonPerSquareMeter(value) {
        return new Pressure(value, PressureUnits.MeganewtonPerSquareMeter);
    }
    static FromKilonewtonPerSquareCentimeter(value) {
        return new Pressure(value, PressureUnits.KilonewtonPerSquareCentimeter);
    }
    static FromKilonewtonPerSquareMillimeter(value) {
        return new Pressure(value, PressureUnits.KilonewtonPerSquareMillimeter);
    }
    static FromKilopoundForcePerSquareInch(value) {
        return new Pressure(value, PressureUnits.KilopoundForcePerSquareInch);
    }
    static FromKilopoundForcePerSquareFoot(value) {
        return new Pressure(value, PressureUnits.KilopoundForcePerSquareFoot);
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
            case PressureUnits.Micropascal:
                return (this.value) / 0.000001;
            case PressureUnits.Decapascal:
                return (this.value) / 10;
            case PressureUnits.Hectopascal:
                return (this.value) / 100;
            case PressureUnits.Kilopascal:
                return (this.value) / 1000;
            case PressureUnits.Megapascal:
                return (this.value) / 1000000;
            case PressureUnits.Gigapascal:
                return (this.value) / 1000000000;
            case PressureUnits.Microbar:
                return (this.value / 1e5) / 0.000001;
            case PressureUnits.Centibar:
                return (this.value / 1e5) / 0.01;
            case PressureUnits.Decibar:
                return (this.value / 1e5) / 0.1;
            case PressureUnits.Kilobar:
                return (this.value / 1e5) / 1000;
            case PressureUnits.Megabar:
                return (this.value / 1e5) / 1000000;
            case PressureUnits.KilonewtonPerSquareMeter:
                return (this.value) / 1000;
            case PressureUnits.MeganewtonPerSquareMeter:
                return (this.value) / 1000000;
            case PressureUnits.KilonewtonPerSquareCentimeter:
                return (this.value / 1e4) / 1000;
            case PressureUnits.KilonewtonPerSquareMillimeter:
                return (this.value / 1e6) / 1000;
            case PressureUnits.KilopoundForcePerSquareInch:
                return (this.value / 6.894757293168361e3) / 1000;
            case PressureUnits.KilopoundForcePerSquareFoot:
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
            case PressureUnits.Micropascal:
                return (value) * 0.000001;
            case PressureUnits.Decapascal:
                return (value) * 10;
            case PressureUnits.Hectopascal:
                return (value) * 100;
            case PressureUnits.Kilopascal:
                return (value) * 1000;
            case PressureUnits.Megapascal:
                return (value) * 1000000;
            case PressureUnits.Gigapascal:
                return (value) * 1000000000;
            case PressureUnits.Microbar:
                return (value * 1e5) * 0.000001;
            case PressureUnits.Centibar:
                return (value * 1e5) * 0.01;
            case PressureUnits.Decibar:
                return (value * 1e5) * 0.1;
            case PressureUnits.Kilobar:
                return (value * 1e5) * 1000;
            case PressureUnits.Megabar:
                return (value * 1e5) * 1000000;
            case PressureUnits.KilonewtonPerSquareMeter:
                return (value) * 1000;
            case PressureUnits.MeganewtonPerSquareMeter:
                return (value) * 1000000;
            case PressureUnits.KilonewtonPerSquareCentimeter:
                return (value * 1e4) * 1000;
            case PressureUnits.KilonewtonPerSquareMillimeter:
                return (value * 1e6) * 1000;
            case PressureUnits.KilopoundForcePerSquareInch:
                return (value * 6.894757293168361e3) * 1000;
            case PressureUnits.KilopoundForcePerSquareFoot:
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
            case PressureUnits.Micropascal:
                return this.Micropascal + ` Pa`;
            case PressureUnits.Decapascal:
                return this.Decapascal + ` Pa`;
            case PressureUnits.Hectopascal:
                return this.Hectopascal + ` Pa`;
            case PressureUnits.Kilopascal:
                return this.Kilopascal + ` Pa`;
            case PressureUnits.Megapascal:
                return this.Megapascal + ` Pa`;
            case PressureUnits.Gigapascal:
                return this.Gigapascal + ` Pa`;
            case PressureUnits.Microbar:
                return this.Microbar + ` bar`;
            case PressureUnits.Centibar:
                return this.Centibar + ` bar`;
            case PressureUnits.Decibar:
                return this.Decibar + ` bar`;
            case PressureUnits.Kilobar:
                return this.Kilobar + ` bar`;
            case PressureUnits.Megabar:
                return this.Megabar + ` bar`;
            case PressureUnits.KilonewtonPerSquareMeter:
                return this.KilonewtonPerSquareMeter + ` N/m²`;
            case PressureUnits.MeganewtonPerSquareMeter:
                return this.MeganewtonPerSquareMeter + ` N/m²`;
            case PressureUnits.KilonewtonPerSquareCentimeter:
                return this.KilonewtonPerSquareCentimeter + ` N/cm²`;
            case PressureUnits.KilonewtonPerSquareMillimeter:
                return this.KilonewtonPerSquareMillimeter + ` N/mm²`;
            case PressureUnits.KilopoundForcePerSquareInch:
                return this.KilopoundForcePerSquareInch + ` psi`;
            case PressureUnits.KilopoundForcePerSquareFoot:
                return this.KilopoundForcePerSquareFoot + ` lb/ft²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Pressure = Pressure;
//# sourceMappingURL=pressure.g.js.map