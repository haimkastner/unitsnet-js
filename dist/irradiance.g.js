"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** IrradianceUnits enumeration */
var IrradianceUnits;
(function (IrradianceUnits) {
    /** */
    IrradianceUnits[IrradianceUnits["WattsPerSquareMeter"] = 0] = "WattsPerSquareMeter";
    /** */
    IrradianceUnits[IrradianceUnits["WattsPerSquareCentimeter"] = 1] = "WattsPerSquareCentimeter";
    /** */
    IrradianceUnits[IrradianceUnits["PicowattsPerSquareMeter"] = 2] = "PicowattsPerSquareMeter";
    /** */
    IrradianceUnits[IrradianceUnits["NanowattsPerSquareMeter"] = 3] = "NanowattsPerSquareMeter";
    /** */
    IrradianceUnits[IrradianceUnits["MicrowattsPerSquareMeter"] = 4] = "MicrowattsPerSquareMeter";
    /** */
    IrradianceUnits[IrradianceUnits["KilowattsPerSquareMeter"] = 5] = "KilowattsPerSquareMeter";
    /** */
    IrradianceUnits[IrradianceUnits["MegawattsPerSquareMeter"] = 6] = "MegawattsPerSquareMeter";
    /** */
    IrradianceUnits[IrradianceUnits["PicowattsPerSquareCentimeter"] = 7] = "PicowattsPerSquareCentimeter";
    /** */
    IrradianceUnits[IrradianceUnits["NanowattsPerSquareCentimeter"] = 8] = "NanowattsPerSquareCentimeter";
    /** */
    IrradianceUnits[IrradianceUnits["MicrowattsPerSquareCentimeter"] = 9] = "MicrowattsPerSquareCentimeter";
    /** */
    IrradianceUnits[IrradianceUnits["KilowattsPerSquareCentimeter"] = 10] = "KilowattsPerSquareCentimeter";
    /** */
    IrradianceUnits[IrradianceUnits["MegawattsPerSquareCentimeter"] = 11] = "MegawattsPerSquareCentimeter";
})(IrradianceUnits = exports.IrradianceUnits || (exports.IrradianceUnits = {}));
/** Irradiance is the intensity of ultraviolet (UV) or visible light incident on a surface. */
class Irradiance {
    /**
     * Create a new Irradiance.
     * @param value The value.
     * @param fromUnit The ‘Irradiance’ unit to create from.
     */
    constructor(value, fromUnit) {
        this.wattspersquaremeterLazy = null;
        this.wattspersquarecentimeterLazy = null;
        this.picowattspersquaremeterLazy = null;
        this.nanowattspersquaremeterLazy = null;
        this.microwattspersquaremeterLazy = null;
        this.kilowattspersquaremeterLazy = null;
        this.megawattspersquaremeterLazy = null;
        this.picowattspersquarecentimeterLazy = null;
        this.nanowattspersquarecentimeterLazy = null;
        this.microwattspersquarecentimeterLazy = null;
        this.kilowattspersquarecentimeterLazy = null;
        this.megawattspersquarecentimeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Irradiance is WattPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get WattsPerSquareMeter() {
        if (this.wattspersquaremeterLazy !== null) {
            return this.wattspersquaremeterLazy;
        }
        return this.wattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareMeter);
    }
    /** */
    get WattsPerSquareCentimeter() {
        if (this.wattspersquarecentimeterLazy !== null) {
            return this.wattspersquarecentimeterLazy;
        }
        return this.wattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.WattsPerSquareCentimeter);
    }
    /** */
    get PicowattsPerSquareMeter() {
        if (this.picowattspersquaremeterLazy !== null) {
            return this.picowattspersquaremeterLazy;
        }
        return this.picowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.PicowattsPerSquareMeter);
    }
    /** */
    get NanowattsPerSquareMeter() {
        if (this.nanowattspersquaremeterLazy !== null) {
            return this.nanowattspersquaremeterLazy;
        }
        return this.nanowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.NanowattsPerSquareMeter);
    }
    /** */
    get MicrowattsPerSquareMeter() {
        if (this.microwattspersquaremeterLazy !== null) {
            return this.microwattspersquaremeterLazy;
        }
        return this.microwattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MicrowattsPerSquareMeter);
    }
    /** */
    get KilowattsPerSquareMeter() {
        if (this.kilowattspersquaremeterLazy !== null) {
            return this.kilowattspersquaremeterLazy;
        }
        return this.kilowattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.KilowattsPerSquareMeter);
    }
    /** */
    get MegawattsPerSquareMeter() {
        if (this.megawattspersquaremeterLazy !== null) {
            return this.megawattspersquaremeterLazy;
        }
        return this.megawattspersquaremeterLazy = this.convertFromBase(IrradianceUnits.MegawattsPerSquareMeter);
    }
    /** */
    get PicowattsPerSquareCentimeter() {
        if (this.picowattspersquarecentimeterLazy !== null) {
            return this.picowattspersquarecentimeterLazy;
        }
        return this.picowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.PicowattsPerSquareCentimeter);
    }
    /** */
    get NanowattsPerSquareCentimeter() {
        if (this.nanowattspersquarecentimeterLazy !== null) {
            return this.nanowattspersquarecentimeterLazy;
        }
        return this.nanowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.NanowattsPerSquareCentimeter);
    }
    /** */
    get MicrowattsPerSquareCentimeter() {
        if (this.microwattspersquarecentimeterLazy !== null) {
            return this.microwattspersquarecentimeterLazy;
        }
        return this.microwattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MicrowattsPerSquareCentimeter);
    }
    /** */
    get KilowattsPerSquareCentimeter() {
        if (this.kilowattspersquarecentimeterLazy !== null) {
            return this.kilowattspersquarecentimeterLazy;
        }
        return this.kilowattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.KilowattsPerSquareCentimeter);
    }
    /** */
    get MegawattsPerSquareCentimeter() {
        if (this.megawattspersquarecentimeterLazy !== null) {
            return this.megawattspersquarecentimeterLazy;
        }
        return this.megawattspersquarecentimeterLazy = this.convertFromBase(IrradianceUnits.MegawattsPerSquareCentimeter);
    }
    /**
     * Create a new Irradiance instance from a WattsPerSquareMeter
     *
     * @param value The unit as WattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromWattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareMeter);
    }
    /**
     * Create a new Irradiance instance from a WattsPerSquareCentimeter
     *
     * @param value The unit as WattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromWattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.WattsPerSquareCentimeter);
    }
    /**
     * Create a new Irradiance instance from a PicowattsPerSquareMeter
     *
     * @param value The unit as PicowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromPicowattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.PicowattsPerSquareMeter);
    }
    /**
     * Create a new Irradiance instance from a NanowattsPerSquareMeter
     *
     * @param value The unit as NanowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromNanowattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.NanowattsPerSquareMeter);
    }
    /**
     * Create a new Irradiance instance from a MicrowattsPerSquareMeter
     *
     * @param value The unit as MicrowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMicrowattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.MicrowattsPerSquareMeter);
    }
    /**
     * Create a new Irradiance instance from a KilowattsPerSquareMeter
     *
     * @param value The unit as KilowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromKilowattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.KilowattsPerSquareMeter);
    }
    /**
     * Create a new Irradiance instance from a MegawattsPerSquareMeter
     *
     * @param value The unit as MegawattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMegawattsPerSquareMeter(value) {
        return new Irradiance(value, IrradianceUnits.MegawattsPerSquareMeter);
    }
    /**
     * Create a new Irradiance instance from a PicowattsPerSquareCentimeter
     *
     * @param value The unit as PicowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromPicowattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.PicowattsPerSquareCentimeter);
    }
    /**
     * Create a new Irradiance instance from a NanowattsPerSquareCentimeter
     *
     * @param value The unit as NanowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromNanowattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.NanowattsPerSquareCentimeter);
    }
    /**
     * Create a new Irradiance instance from a MicrowattsPerSquareCentimeter
     *
     * @param value The unit as MicrowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMicrowattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.MicrowattsPerSquareCentimeter);
    }
    /**
     * Create a new Irradiance instance from a KilowattsPerSquareCentimeter
     *
     * @param value The unit as KilowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromKilowattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.KilowattsPerSquareCentimeter);
    }
    /**
     * Create a new Irradiance instance from a MegawattsPerSquareCentimeter
     *
     * @param value The unit as MegawattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMegawattsPerSquareCentimeter(value) {
        return new Irradiance(value, IrradianceUnits.MegawattsPerSquareCentimeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case IrradianceUnits.WattsPerSquareMeter:
                return this.value;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.value * 0.0001;
            case IrradianceUnits.PicowattsPerSquareMeter:
                return (this.value) / 1e-12;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return (this.value) / 1e-9;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return (this.value) / 0.000001;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return (this.value) / 1000;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return (this.value) / 1000000;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return (this.value * 0.0001) / 1e-12;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return (this.value * 0.0001) / 1e-9;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return (this.value * 0.0001) / 0.000001;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return (this.value * 0.0001) / 1000;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
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
            case IrradianceUnits.PicowattsPerSquareMeter:
                return (value) * 1e-12;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return (value) * 1e-9;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return (value) * 0.000001;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return (value) * 1000;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return (value) * 1000000;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return (value * 10000) * 1e-12;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return (value * 10000) * 1e-9;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return (value * 10000) * 0.000001;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return (value * 10000) * 1000;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return (value * 10000) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Irradiance to string.
     * Note! the default format for Irradiance is WattsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Irradiance.
     * @returns The string format of the Irradiance.
     */
    toString(toUnit = IrradianceUnits.WattsPerSquareMeter) {
        switch (toUnit) {
            case IrradianceUnits.WattsPerSquareMeter:
                return this.WattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.WattsPerSquareCentimeter:
                return this.WattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.PicowattsPerSquareMeter:
                return this.PicowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.NanowattsPerSquareMeter:
                return this.NanowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MicrowattsPerSquareMeter:
                return this.MicrowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.KilowattsPerSquareMeter:
                return this.KilowattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.MegawattsPerSquareMeter:
                return this.MegawattsPerSquareMeter + ` W/m²`;
            case IrradianceUnits.PicowattsPerSquareCentimeter:
                return this.PicowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.NanowattsPerSquareCentimeter:
                return this.NanowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MicrowattsPerSquareCentimeter:
                return this.MicrowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.KilowattsPerSquareCentimeter:
                return this.KilowattsPerSquareCentimeter + ` W/cm²`;
            case IrradianceUnits.MegawattsPerSquareCentimeter:
                return this.MegawattsPerSquareCentimeter + ` W/cm²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Irradiance = Irradiance;
//# sourceMappingURL=irradiance.g.js.map