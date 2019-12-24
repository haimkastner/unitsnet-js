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
    PressureUnits[PressureUnits["Kilonewtonspersquaremeter"] = 34] = "Kilonewtonspersquaremeter";
    PressureUnits[PressureUnits["Meganewtonspersquaremeter"] = 35] = "Meganewtonspersquaremeter";
    PressureUnits[PressureUnits["Kilonewtonspersquarecentimeter"] = 36] = "Kilonewtonspersquarecentimeter";
    PressureUnits[PressureUnits["Kilonewtonspersquaremillimeter"] = 37] = "Kilonewtonspersquaremillimeter";
    PressureUnits[PressureUnits["Kilopoundsforcepersquareinch"] = 38] = "Kilopoundsforcepersquareinch";
    PressureUnits[PressureUnits["Kilopoundsforcepersquarefoot"] = 39] = "Kilopoundsforcepersquarefoot";
})(PressureUnits = exports.PressureUnits || (exports.PressureUnits = {}));
class Pressure {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get Pascals() {
        return this.convertFromBase(PressureUnits.Pascals);
    }
    get Atmospheres() {
        return this.convertFromBase(PressureUnits.Atmospheres);
    }
    get Bars() {
        return this.convertFromBase(PressureUnits.Bars);
    }
    get KilogramsForcePerSquareMeter() {
        return this.convertFromBase(PressureUnits.KilogramsForcePerSquareMeter);
    }
    get KilogramsForcePerSquareCentimeter() {
        return this.convertFromBase(PressureUnits.KilogramsForcePerSquareCentimeter);
    }
    get KilogramsForcePerSquareMillimeter() {
        return this.convertFromBase(PressureUnits.KilogramsForcePerSquareMillimeter);
    }
    get NewtonsPerSquareMeter() {
        return this.convertFromBase(PressureUnits.NewtonsPerSquareMeter);
    }
    get NewtonsPerSquareCentimeter() {
        return this.convertFromBase(PressureUnits.NewtonsPerSquareCentimeter);
    }
    get NewtonsPerSquareMillimeter() {
        return this.convertFromBase(PressureUnits.NewtonsPerSquareMillimeter);
    }
    get TechnicalAtmospheres() {
        return this.convertFromBase(PressureUnits.TechnicalAtmospheres);
    }
    get Torrs() {
        return this.convertFromBase(PressureUnits.Torrs);
    }
    get PoundsForcePerSquareInch() {
        return this.convertFromBase(PressureUnits.PoundsForcePerSquareInch);
    }
    get PoundsForcePerSquareFoot() {
        return this.convertFromBase(PressureUnits.PoundsForcePerSquareFoot);
    }
    get TonnesForcePerSquareMillimeter() {
        return this.convertFromBase(PressureUnits.TonnesForcePerSquareMillimeter);
    }
    get TonnesForcePerSquareMeter() {
        return this.convertFromBase(PressureUnits.TonnesForcePerSquareMeter);
    }
    get MetersOfHead() {
        return this.convertFromBase(PressureUnits.MetersOfHead);
    }
    get TonnesForcePerSquareCentimeter() {
        return this.convertFromBase(PressureUnits.TonnesForcePerSquareCentimeter);
    }
    get FeetOfHead() {
        return this.convertFromBase(PressureUnits.FeetOfHead);
    }
    get MillimetersOfMercury() {
        return this.convertFromBase(PressureUnits.MillimetersOfMercury);
    }
    get InchesOfMercury() {
        return this.convertFromBase(PressureUnits.InchesOfMercury);
    }
    get DynesPerSquareCentimeter() {
        return this.convertFromBase(PressureUnits.DynesPerSquareCentimeter);
    }
    get PoundsPerInchSecondSquared() {
        return this.convertFromBase(PressureUnits.PoundsPerInchSecondSquared);
    }
    get InchesOfWaterColumn() {
        return this.convertFromBase(PressureUnits.InchesOfWaterColumn);
    }
    get Micropascals() {
        return this.convertFromBase(PressureUnits.Micropascals);
    }
    get Decapascals() {
        return this.convertFromBase(PressureUnits.Decapascals);
    }
    get Hectopascals() {
        return this.convertFromBase(PressureUnits.Hectopascals);
    }
    get Kilopascals() {
        return this.convertFromBase(PressureUnits.Kilopascals);
    }
    get Megapascals() {
        return this.convertFromBase(PressureUnits.Megapascals);
    }
    get Gigapascals() {
        return this.convertFromBase(PressureUnits.Gigapascals);
    }
    get Microbars() {
        return this.convertFromBase(PressureUnits.Microbars);
    }
    get Centibars() {
        return this.convertFromBase(PressureUnits.Centibars);
    }
    get Decibars() {
        return this.convertFromBase(PressureUnits.Decibars);
    }
    get Kilobars() {
        return this.convertFromBase(PressureUnits.Kilobars);
    }
    get Megabars() {
        return this.convertFromBase(PressureUnits.Megabars);
    }
    get Kilonewtonspersquaremeter() {
        return this.convertFromBase(PressureUnits.Kilonewtonspersquaremeter);
    }
    get Meganewtonspersquaremeter() {
        return this.convertFromBase(PressureUnits.Meganewtonspersquaremeter);
    }
    get Kilonewtonspersquarecentimeter() {
        return this.convertFromBase(PressureUnits.Kilonewtonspersquarecentimeter);
    }
    get Kilonewtonspersquaremillimeter() {
        return this.convertFromBase(PressureUnits.Kilonewtonspersquaremillimeter);
    }
    get Kilopoundsforcepersquareinch() {
        return this.convertFromBase(PressureUnits.Kilopoundsforcepersquareinch);
    }
    get Kilopoundsforcepersquarefoot() {
        return this.convertFromBase(PressureUnits.Kilopoundsforcepersquarefoot);
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
    static FromKilonewtonspersquaremeter(value) {
        return new Pressure(value, PressureUnits.Kilonewtonspersquaremeter);
    }
    static FromMeganewtonspersquaremeter(value) {
        return new Pressure(value, PressureUnits.Meganewtonspersquaremeter);
    }
    static FromKilonewtonspersquarecentimeter(value) {
        return new Pressure(value, PressureUnits.Kilonewtonspersquarecentimeter);
    }
    static FromKilonewtonspersquaremillimeter(value) {
        return new Pressure(value, PressureUnits.Kilonewtonspersquaremillimeter);
    }
    static FromKilopoundsforcepersquareinch(value) {
        return new Pressure(value, PressureUnits.Kilopoundsforcepersquareinch);
    }
    static FromKilopoundsforcepersquarefoot(value) {
        return new Pressure(value, PressureUnits.Kilopoundsforcepersquarefoot);
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
            case PressureUnits.Kilonewtonspersquaremeter:
                return (this.value) / 1000;
            case PressureUnits.Meganewtonspersquaremeter:
                return (this.value) / 1000000;
            case PressureUnits.Kilonewtonspersquarecentimeter:
                return (this.value / 1e4) / 1000;
            case PressureUnits.Kilonewtonspersquaremillimeter:
                return (this.value / 1e6) / 1000;
            case PressureUnits.Kilopoundsforcepersquareinch:
                return (this.value / 6.894757293168361e3) / 1000;
            case PressureUnits.Kilopoundsforcepersquarefoot:
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
            case PressureUnits.Kilonewtonspersquaremeter:
                return (value) * 1000;
            case PressureUnits.Meganewtonspersquaremeter:
                return (value) * 1000000;
            case PressureUnits.Kilonewtonspersquarecentimeter:
                return (value * 1e4) * 1000;
            case PressureUnits.Kilonewtonspersquaremillimeter:
                return (value * 1e6) * 1000;
            case PressureUnits.Kilopoundsforcepersquareinch:
                return (value * 6.894757293168361e3) * 1000;
            case PressureUnits.Kilopoundsforcepersquarefoot:
                return (value * 4.788025898033584e1) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Pressure = Pressure;
//# sourceMappingURL=pressure.g.js.map