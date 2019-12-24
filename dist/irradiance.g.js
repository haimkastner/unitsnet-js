"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IrradianceUnits;
(function (IrradianceUnits) {
    IrradianceUnits[IrradianceUnits["WattsPerSquareMeter"] = 0] = "WattsPerSquareMeter";
    IrradianceUnits[IrradianceUnits["WattsPerSquareCentimeter"] = 1] = "WattsPerSquareCentimeter";
    IrradianceUnits[IrradianceUnits["Picowattspersquaremeter"] = 2] = "Picowattspersquaremeter";
    IrradianceUnits[IrradianceUnits["Nanowattspersquaremeter"] = 3] = "Nanowattspersquaremeter";
    IrradianceUnits[IrradianceUnits["Microwattspersquaremeter"] = 4] = "Microwattspersquaremeter";
    IrradianceUnits[IrradianceUnits["Kilowattspersquaremeter"] = 5] = "Kilowattspersquaremeter";
    IrradianceUnits[IrradianceUnits["Megawattspersquaremeter"] = 6] = "Megawattspersquaremeter";
    IrradianceUnits[IrradianceUnits["Picowattspersquarecentimeter"] = 7] = "Picowattspersquarecentimeter";
    IrradianceUnits[IrradianceUnits["Nanowattspersquarecentimeter"] = 8] = "Nanowattspersquarecentimeter";
    IrradianceUnits[IrradianceUnits["Microwattspersquarecentimeter"] = 9] = "Microwattspersquarecentimeter";
    IrradianceUnits[IrradianceUnits["Kilowattspersquarecentimeter"] = 10] = "Kilowattspersquarecentimeter";
    IrradianceUnits[IrradianceUnits["Megawattspersquarecentimeter"] = 11] = "Megawattspersquarecentimeter";
})(IrradianceUnits = exports.IrradianceUnits || (exports.IrradianceUnits = {}));
class Irradiance {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerSquareMeter() {
        return this.convertFromBase(IrradianceUnits.WattsPerSquareMeter);
    }
    get WattsPerSquareCentimeter() {
        return this.convertFromBase(IrradianceUnits.WattsPerSquareCentimeter);
    }
    get Picowattspersquaremeter() {
        return this.convertFromBase(IrradianceUnits.Picowattspersquaremeter);
    }
    get Nanowattspersquaremeter() {
        return this.convertFromBase(IrradianceUnits.Nanowattspersquaremeter);
    }
    get Microwattspersquaremeter() {
        return this.convertFromBase(IrradianceUnits.Microwattspersquaremeter);
    }
    get Kilowattspersquaremeter() {
        return this.convertFromBase(IrradianceUnits.Kilowattspersquaremeter);
    }
    get Megawattspersquaremeter() {
        return this.convertFromBase(IrradianceUnits.Megawattspersquaremeter);
    }
    get Picowattspersquarecentimeter() {
        return this.convertFromBase(IrradianceUnits.Picowattspersquarecentimeter);
    }
    get Nanowattspersquarecentimeter() {
        return this.convertFromBase(IrradianceUnits.Nanowattspersquarecentimeter);
    }
    get Microwattspersquarecentimeter() {
        return this.convertFromBase(IrradianceUnits.Microwattspersquarecentimeter);
    }
    get Kilowattspersquarecentimeter() {
        return this.convertFromBase(IrradianceUnits.Kilowattspersquarecentimeter);
    }
    get Megawattspersquarecentimeter() {
        return this.convertFromBase(IrradianceUnits.Megawattspersquarecentimeter);
    }
    static FromWattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }
    static FromWattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }
    static FromPicowattspersquaremeter(value) {
        return new Irradiance(value, IrradianceUnits.Picowattspersquaremeter);
    }
    static FromNanowattspersquaremeter(value) {
        return new Irradiance(value, IrradianceUnits.Nanowattspersquaremeter);
    }
    static FromMicrowattspersquaremeter(value) {
        return new Irradiance(value, IrradianceUnits.Microwattspersquaremeter);
    }
    static FromKilowattspersquaremeter(value) {
        return new Irradiance(value, IrradianceUnits.Kilowattspersquaremeter);
    }
    static FromMegawattspersquaremeter(value) {
        return new Irradiance(value, IrradianceUnits.Megawattspersquaremeter);
    }
    static FromPicowattspersquarecentimeter(value) {
        return new Irradiance(value, IrradianceUnits.Picowattspersquarecentimeter);
    }
    static FromNanowattspersquarecentimeter(value) {
        return new Irradiance(value, IrradianceUnits.Nanowattspersquarecentimeter);
    }
    static FromMicrowattspersquarecentimeter(value) {
        return new Irradiance(value, IrradianceUnits.Microwattspersquarecentimeter);
    }
    static FromKilowattspersquarecentimeter(value) {
        return new Irradiance(value, IrradianceUnits.Kilowattspersquarecentimeter);
    }
    static FromMegawattspersquarecentimeter(value) {
        return new Irradiance(value, IrradianceUnits.Megawattspersquarecentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IrradianceUnits.WattsPerSquareMeter:
                return this.value;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.value * 0.0001;
            case IrradianceUnits.Picowattspersquaremeter:
                return (this.value) * 1e-12;
            case IrradianceUnits.Nanowattspersquaremeter:
                return (this.value) * 1e-9;
            case IrradianceUnits.Microwattspersquaremeter:
                return (this.value) * 0.000001;
            case IrradianceUnits.Kilowattspersquaremeter:
                return (this.value) * 1000;
            case IrradianceUnits.Megawattspersquaremeter:
                return (this.value) * 1000000;
            case IrradianceUnits.Picowattspersquarecentimeter:
                return (this.value * 10000) * 1e-12;
            case IrradianceUnits.Nanowattspersquarecentimeter:
                return (this.value * 10000) * 1e-9;
            case IrradianceUnits.Microwattspersquarecentimeter:
                return (this.value * 10000) * 0.000001;
            case IrradianceUnits.Kilowattspersquarecentimeter:
                return (this.value * 10000) * 1000;
            case IrradianceUnits.Megawattspersquarecentimeter:
                return (this.value * 10000) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case IrradianceUnits.WattsPerSquareMeter:
                return value;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return value * 10000;
            case IrradianceUnits.Picowattspersquaremeter:
                return (value) / 1e-12;
            case IrradianceUnits.Nanowattspersquaremeter:
                return (value) / 1e-9;
            case IrradianceUnits.Microwattspersquaremeter:
                return (value) / 0.000001;
            case IrradianceUnits.Kilowattspersquaremeter:
                return (value) / 1000;
            case IrradianceUnits.Megawattspersquaremeter:
                return (value) / 1000000;
            case IrradianceUnits.Picowattspersquarecentimeter:
                return (value * 0.0001) / 1e-12;
            case IrradianceUnits.Nanowattspersquarecentimeter:
                return (value * 0.0001) / 1e-9;
            case IrradianceUnits.Microwattspersquarecentimeter:
                return (value * 0.0001) / 0.000001;
            case IrradianceUnits.Kilowattspersquarecentimeter:
                return (value * 0.0001) / 1000;
            case IrradianceUnits.Megawattspersquarecentimeter:
                return (value * 0.0001) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.Irradiance = Irradiance;
//# sourceMappingURL=irradiance.g.js.map