"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IrradianceUnits;
(function (IrradianceUnits) {
    IrradianceUnits[IrradianceUnits["WattsPerSquareMeter"] = 0] = "WattsPerSquareMeter";
    IrradianceUnits[IrradianceUnits["WattsPerSquareCentimeter"] = 1] = "WattsPerSquareCentimeter";
    IrradianceUnits[IrradianceUnits["PicowattPerSquareMeter"] = 2] = "PicowattPerSquareMeter";
    IrradianceUnits[IrradianceUnits["NanowattPerSquareMeter"] = 3] = "NanowattPerSquareMeter";
    IrradianceUnits[IrradianceUnits["MicrowattPerSquareMeter"] = 4] = "MicrowattPerSquareMeter";
    IrradianceUnits[IrradianceUnits["KilowattPerSquareMeter"] = 5] = "KilowattPerSquareMeter";
    IrradianceUnits[IrradianceUnits["MegawattPerSquareMeter"] = 6] = "MegawattPerSquareMeter";
    IrradianceUnits[IrradianceUnits["PicowattPerSquareCentimeter"] = 7] = "PicowattPerSquareCentimeter";
    IrradianceUnits[IrradianceUnits["NanowattPerSquareCentimeter"] = 8] = "NanowattPerSquareCentimeter";
    IrradianceUnits[IrradianceUnits["MicrowattPerSquareCentimeter"] = 9] = "MicrowattPerSquareCentimeter";
    IrradianceUnits[IrradianceUnits["KilowattPerSquareCentimeter"] = 10] = "KilowattPerSquareCentimeter";
    IrradianceUnits[IrradianceUnits["MegawattPerSquareCentimeter"] = 11] = "MegawattPerSquareCentimeter";
})(IrradianceUnits = exports.IrradianceUnits || (exports.IrradianceUnits = {}));
class Irradiance {
    constructor(value, fromUnit) {
        this.wattspersquaremeterLazy = null;
        this.wattspersquarecentimeterLazy = null;
        this.picowattpersquaremeterLazy = null;
        this.nanowattpersquaremeterLazy = null;
        this.microwattpersquaremeterLazy = null;
        this.kilowattpersquaremeterLazy = null;
        this.megawattpersquaremeterLazy = null;
        this.picowattpersquarecentimeterLazy = null;
        this.nanowattpersquarecentimeterLazy = null;
        this.microwattpersquarecentimeterLazy = null;
        this.kilowattpersquarecentimeterLazy = null;
        this.megawattpersquarecentimeterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get WattsPerSquareMeter() {
        if (this.wattspersquaremeterLazy !== null) {
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareMeter);
    }
    get WattsPerSquareCentimeter() {
        if (this.wattspersquarecentimeterLazy !== null) {
            return this.wattspersquarecentimeterLazy;
        }
        return this.wattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareCentimeter);
    }
    get PicowattPerSquareMeter() {
        if (this.picowattpersquaremeterLazy !== null) {
            return this.picowattpersquaremeterLazy;
        }
        return this.picowattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.PicowattPerSquareMeter);
    }
    get NanowattPerSquareMeter() {
        if (this.nanowattpersquaremeterLazy !== null) {
            return this.nanowattpersquaremeterLazy;
        }
        return this.nanowattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.NanowattPerSquareMeter);
    }
    get MicrowattPerSquareMeter() {
        if (this.microwattpersquaremeterLazy !== null) {
            return this.microwattpersquaremeterLazy;
        }
        return this.microwattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.MicrowattPerSquareMeter);
    }
    get KilowattPerSquareMeter() {
        if (this.kilowattpersquaremeterLazy !== null) {
            return this.kilowattpersquaremeterLazy;
        }
        return this.kilowattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.KilowattPerSquareMeter);
    }
    get MegawattPerSquareMeter() {
        if (this.megawattpersquaremeterLazy !== null) {
            return this.megawattpersquaremeterLazy;
        }
        return this.megawattpersquaremeterLazy = this.convertFromBase(IrradianceUnits.MegawattPerSquareMeter);
    }
    get PicowattPerSquareCentimeter() {
        if (this.picowattpersquarecentimeterLazy !== null) {
            return this.picowattpersquarecentimeterLazy;
        }
        return this.picowattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.PicowattPerSquareCentimeter);
    }
    get NanowattPerSquareCentimeter() {
        if (this.nanowattpersquarecentimeterLazy !== null) {
            return this.nanowattpersquarecentimeterLazy;
        }
        return this.nanowattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.NanowattPerSquareCentimeter);
    }
    get MicrowattPerSquareCentimeter() {
        if (this.microwattpersquarecentimeterLazy !== null) {
            return this.microwattpersquarecentimeterLazy;
        }
        return this.microwattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MicrowattPerSquareCentimeter);
    }
    get KilowattPerSquareCentimeter() {
        if (this.kilowattpersquarecentimeterLazy !== null) {
            return this.kilowattpersquarecentimeterLazy;
        }
        return this.kilowattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.KilowattPerSquareCentimeter);
    }
    get MegawattPerSquareCentimeter() {
        if (this.megawattpersquarecentimeterLazy !== null) {
            return this.megawattpersquarecentimeterLazy;
        }
        return this.megawattpersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MegawattPerSquareCentimeter);
    }
    static FromWattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }
    static FromWattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }
    static FromPicowattPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.PicowattPerSquareMeter);
    }
    static FromNanowattPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.NanowattPerSquareMeter);
    }
    static FromMicrowattPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.MicrowattPerSquareMeter);
    }
    static FromKilowattPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.KilowattPerSquareMeter);
    }
    static FromMegawattPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.MegawattPerSquareMeter);
    }
    static FromPicowattPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.PicowattPerSquareCentimeter);
    }
    static FromNanowattPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.NanowattPerSquareCentimeter);
    }
    static FromMicrowattPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.MicrowattPerSquareCentimeter);
    }
    static FromKilowattPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.KilowattPerSquareCentimeter);
    }
    static FromMegawattPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.MegawattPerSquareCentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IrradianceUnits.WattsPerSquareMeter:
                return this.value;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.value * 0.0001;
            case IrradianceUnits.PicowattPerSquareMeter:
                return (this.value) / 1e-12;
            case IrradianceUnits.NanowattPerSquareMeter:
                return (this.value) / 1e-9;
            case IrradianceUnits.MicrowattPerSquareMeter:
                return (this.value) / 0.000001;
            case IrradianceUnits.KilowattPerSquareMeter:
                return (this.value) / 1000;
            case IrradianceUnits.MegawattPerSquareMeter:
                return (this.value) / 1000000;
            case IrradianceUnits.PicowattPerSquareCentimeter:
                return (this.value * 0.0001) / 1e-12;
            case IrradianceUnits.NanowattPerSquareCentimeter:
                return (this.value * 0.0001) / 1e-9;
            case IrradianceUnits.MicrowattPerSquareCentimeter:
                return (this.value * 0.0001) / 0.000001;
            case IrradianceUnits.KilowattPerSquareCentimeter:
                return (this.value * 0.0001) / 1000;
            case IrradianceUnits.MegawattPerSquareCentimeter:
                return (this.value * 0.0001) / 1000000;
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
            case IrradianceUnits.PicowattPerSquareMeter:
                return (value) * 1e-12;
            case IrradianceUnits.NanowattPerSquareMeter:
                return (value) * 1e-9;
            case IrradianceUnits.MicrowattPerSquareMeter:
                return (value) * 0.000001;
            case IrradianceUnits.KilowattPerSquareMeter:
                return (value) * 1000;
            case IrradianceUnits.MegawattPerSquareMeter:
                return (value) * 1000000;
            case IrradianceUnits.PicowattPerSquareCentimeter:
                return (value * 10000) * 1e-12;
            case IrradianceUnits.NanowattPerSquareCentimeter:
                return (value * 10000) * 1e-9;
            case IrradianceUnits.MicrowattPerSquareCentimeter:
                return (value * 10000) * 0.000001;
            case IrradianceUnits.KilowattPerSquareCentimeter:
                return (value * 10000) * 1000;
            case IrradianceUnits.MegawattPerSquareCentimeter:
                return (value * 10000) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = IrradianceUnits.WattsPerSquareMeter) {
        switch (toUnit) {
            case IrradianceUnits.WattsPerSquareMeter:
                return this.WattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.WattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.PicowattPerSquareMeter:
                return this.PicowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.NanowattPerSquareMeter:
                return this.NanowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MicrowattPerSquareMeter:
                return this.MicrowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.KilowattPerSquareMeter:
                return this.KilowattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MegawattPerSquareMeter:
                return this.MegawattPerSquareMeter + ` W/m²`;
            case IrradianceUnits.PicowattPerSquareCentimeter:
                return this.PicowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.NanowattPerSquareCentimeter:
                return this.NanowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MicrowattPerSquareCentimeter:
                return this.MicrowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.KilowattPerSquareCentimeter:
                return this.KilowattPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MegawattPerSquareCentimeter:
                return this.MegawattPerSquareCentimeter + ` W/cm²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Irradiance = Irradiance;
//# sourceMappingURL=irradiance.g.js.map