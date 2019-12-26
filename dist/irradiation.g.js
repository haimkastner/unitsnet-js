"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IrradiationUnits;
(function (IrradiationUnits) {
    IrradiationUnits[IrradiationUnits["JoulesPerSquareMeter"] = 0] = "JoulesPerSquareMeter";
    IrradiationUnits[IrradiationUnits["JoulesPerSquareCentimeter"] = 1] = "JoulesPerSquareCentimeter";
    IrradiationUnits[IrradiationUnits["JoulesPerSquareMillimeter"] = 2] = "JoulesPerSquareMillimeter";
    IrradiationUnits[IrradiationUnits["WattHoursPerSquareMeter"] = 3] = "WattHoursPerSquareMeter";
    IrradiationUnits[IrradiationUnits["KilojoulePerSquareMeter"] = 4] = "KilojoulePerSquareMeter";
    IrradiationUnits[IrradiationUnits["KilowattHourPerSquareMeter"] = 5] = "KilowattHourPerSquareMeter";
})(IrradiationUnits = exports.IrradiationUnits || (exports.IrradiationUnits = {}));
class Irradiation {
    constructor(value, fromUnit) {
        this.joulespersquaremeterLazy = null;
        this.joulespersquarecentimeterLazy = null;
        this.joulespersquaremillimeterLazy = null;
        this.watthourspersquaremeterLazy = null;
        this.kilojoulepersquaremeterLazy = null;
        this.kilowatthourpersquaremeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerSquareMeter() {
        if (this.joulespersquaremeterLazy !== null) {
            return this.joulespersquaremeterLazy;
        }
        return this.joulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMeter);
    }
    get JoulesPerSquareCentimeter() {
        if (this.joulespersquarecentimeterLazy !== null) {
            return this.joulespersquarecentimeterLazy;
        }
        return this.joulespersquarecentimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareCentimeter);
    }
    get JoulesPerSquareMillimeter() {
        if (this.joulespersquaremillimeterLazy !== null) {
            return this.joulespersquaremillimeterLazy;
        }
        return this.joulespersquaremillimeterLazy = this.convertFromBase(IrradiationUnits.JoulesPerSquareMillimeter);
    }
    get WattHoursPerSquareMeter() {
        if (this.watthourspersquaremeterLazy !== null) {
            return this.watthourspersquaremeterLazy;
        }
        return this.watthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.WattHoursPerSquareMeter);
    }
    get KilojoulePerSquareMeter() {
        if (this.kilojoulepersquaremeterLazy !== null) {
            return this.kilojoulepersquaremeterLazy;
        }
        return this.kilojoulepersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilojoulePerSquareMeter);
    }
    get KilowattHourPerSquareMeter() {
        if (this.kilowatthourpersquaremeterLazy !== null) {
            return this.kilowatthourpersquaremeterLazy;
        }
        return this.kilowatthourpersquaremeterLazy = this.convertFromBase(IrradiationUnits.KilowattHourPerSquareMeter);
    }
    static FromJoulesPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMeter);
    }
    static FromJoulesPerSquareCentimeter(value) {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareCentimeter);
    }
    static FromJoulesPerSquareMillimeter(value) {
        return new Irradiation(value, IrradiationUnits.JoulesPerSquareMillimeter);
    }
    static FromWattHoursPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.WattHoursPerSquareMeter);
    }
    static FromKilojoulePerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.KilojoulePerSquareMeter);
    }
    static FromKilowattHourPerSquareMeter(value) {
        return new Irradiation(value, IrradiationUnits.KilowattHourPerSquareMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.value / 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.value / 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.value / 3600;
            case IrradiationUnits.KilojoulePerSquareMeter:
                return (this.value) / 1000;
            case IrradiationUnits.KilowattHourPerSquareMeter:
                return (this.value / 3600) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case IrradiationUnits.JoulesPerSquareMeter:
                return value;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return value * 1e4;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return value * 1e6;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return value * 3600;
            case IrradiationUnits.KilojoulePerSquareMeter:
                return (value) * 1000;
            case IrradiationUnits.KilowattHourPerSquareMeter:
                return (value * 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = IrradiationUnits.JoulesPerSquareMeter) {
        switch (toUnit) {
            case IrradiationUnits.JoulesPerSquareMeter:
                return this.JoulesPerSquareMeter + ` J/m²`;
            case IrradiationUnits.JoulesPerSquareCentimeter:
                return this.JoulesPerSquareCentimeter + ` J/cm²`;
            case IrradiationUnits.JoulesPerSquareMillimeter:
                return this.JoulesPerSquareMillimeter + ` J/mm²`;
            case IrradiationUnits.WattHoursPerSquareMeter:
                return this.WattHoursPerSquareMeter + ` Wh/m²`;
            case IrradiationUnits.KilojoulePerSquareMeter:
                return this.KilojoulePerSquareMeter + ` J/m²`;
            case IrradiationUnits.KilowattHourPerSquareMeter:
                return this.KilowattHourPerSquareMeter + ` Wh/m²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Irradiation = Irradiation;
//# sourceMappingURL=irradiation.g.js.map