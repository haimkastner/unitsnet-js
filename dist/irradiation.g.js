"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IrradiationUnits;
(function (IrradiationUnits) {
    IrradiationUnits[IrradiationUnits["JoulesPerSquareMeter"] = 0] = "JoulesPerSquareMeter";
    IrradiationUnits[IrradiationUnits["JoulesPerSquareCentimeter"] = 1] = "JoulesPerSquareCentimeter";
    IrradiationUnits[IrradiationUnits["JoulesPerSquareMillimeter"] = 2] = "JoulesPerSquareMillimeter";
    IrradiationUnits[IrradiationUnits["WattHoursPerSquareMeter"] = 3] = "WattHoursPerSquareMeter";
    IrradiationUnits[IrradiationUnits["Kilojoulespersquaremeter"] = 4] = "Kilojoulespersquaremeter";
    IrradiationUnits[IrradiationUnits["Kilowatthourspersquaremeter"] = 5] = "Kilowatthourspersquaremeter";
})(IrradiationUnits = exports.IrradiationUnits || (exports.IrradiationUnits = {}));
class Irradiation {
    constructor(value, fromUnit) {
        this.joulespersquaremeterLazy = null;
        this.joulespersquarecentimeterLazy = null;
        this.joulespersquaremillimeterLazy = null;
        this.watthourspersquaremeterLazy = null;
        this.kilojoulespersquaremeterLazy = null;
        this.kilowatthourspersquaremeterLazy = null;
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
    get Kilojoulespersquaremeter() {
        if (this.kilojoulespersquaremeterLazy !== null) {
            return this.kilojoulespersquaremeterLazy;
        }
        return this.kilojoulespersquaremeterLazy = this.convertFromBase(IrradiationUnits.Kilojoulespersquaremeter);
    }
    get Kilowatthourspersquaremeter() {
        if (this.kilowatthourspersquaremeterLazy !== null) {
            return this.kilowatthourspersquaremeterLazy;
        }
        return this.kilowatthourspersquaremeterLazy = this.convertFromBase(IrradiationUnits.Kilowatthourspersquaremeter);
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
    static FromKilojoulespersquaremeter(value) {
        return new Irradiation(value, IrradiationUnits.Kilojoulespersquaremeter);
    }
    static FromKilowatthourspersquaremeter(value) {
        return new Irradiation(value, IrradiationUnits.Kilowatthourspersquaremeter);
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
            case IrradiationUnits.Kilojoulespersquaremeter:
                return (this.value) / 1000;
            case IrradiationUnits.Kilowatthourspersquaremeter:
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
            case IrradiationUnits.Kilojoulespersquaremeter:
                return (value) * 1000;
            case IrradiationUnits.Kilowatthourspersquaremeter:
                return (value * 3600) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Irradiation = Irradiation;
//# sourceMappingURL=irradiation.g.js.map