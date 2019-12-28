"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** DensityUnits enumeration */
var DensityUnits;
(function (DensityUnits) {
    /** */
    DensityUnits[DensityUnits["GramsPerCubicMillimeter"] = 0] = "GramsPerCubicMillimeter";
    /** */
    DensityUnits[DensityUnits["GramsPerCubicCentimeter"] = 1] = "GramsPerCubicCentimeter";
    /** */
    DensityUnits[DensityUnits["GramsPerCubicMeter"] = 2] = "GramsPerCubicMeter";
    /** */
    DensityUnits[DensityUnits["PoundsPerCubicInch"] = 3] = "PoundsPerCubicInch";
    /** */
    DensityUnits[DensityUnits["PoundsPerCubicFoot"] = 4] = "PoundsPerCubicFoot";
    /** */
    DensityUnits[DensityUnits["TonnesPerCubicMillimeter"] = 5] = "TonnesPerCubicMillimeter";
    /** */
    DensityUnits[DensityUnits["TonnesPerCubicCentimeter"] = 6] = "TonnesPerCubicCentimeter";
    /** */
    DensityUnits[DensityUnits["TonnesPerCubicMeter"] = 7] = "TonnesPerCubicMeter";
    /** */
    DensityUnits[DensityUnits["SlugsPerCubicFoot"] = 8] = "SlugsPerCubicFoot";
    /** */
    DensityUnits[DensityUnits["GramsPerLiter"] = 9] = "GramsPerLiter";
    /** */
    DensityUnits[DensityUnits["GramsPerDeciLiter"] = 10] = "GramsPerDeciLiter";
    /** */
    DensityUnits[DensityUnits["GramsPerMilliliter"] = 11] = "GramsPerMilliliter";
    /** */
    DensityUnits[DensityUnits["PoundsPerUSGallon"] = 12] = "PoundsPerUSGallon";
    /** */
    DensityUnits[DensityUnits["PoundsPerImperialGallon"] = 13] = "PoundsPerImperialGallon";
    /** */
    DensityUnits[DensityUnits["KilogramsPerLiter"] = 14] = "KilogramsPerLiter";
    /** */
    DensityUnits[DensityUnits["KilogramsPerCubicMillimeter"] = 15] = "KilogramsPerCubicMillimeter";
    /** */
    DensityUnits[DensityUnits["KilogramsPerCubicCentimeter"] = 16] = "KilogramsPerCubicCentimeter";
    /** */
    DensityUnits[DensityUnits["KilogramsPerCubicMeter"] = 17] = "KilogramsPerCubicMeter";
    /** */
    DensityUnits[DensityUnits["MicrogramsPerCubicMeter"] = 18] = "MicrogramsPerCubicMeter";
    /** */
    DensityUnits[DensityUnits["KilopoundsPerCubicInch"] = 19] = "KilopoundsPerCubicInch";
    /** */
    DensityUnits[DensityUnits["KilopoundsPerCubicFoot"] = 20] = "KilopoundsPerCubicFoot";
    /** */
    DensityUnits[DensityUnits["PicogramsPerLiter"] = 21] = "PicogramsPerLiter";
    /** */
    DensityUnits[DensityUnits["NanogramsPerLiter"] = 22] = "NanogramsPerLiter";
    /** */
    DensityUnits[DensityUnits["MicrogramsPerLiter"] = 23] = "MicrogramsPerLiter";
    /** */
    DensityUnits[DensityUnits["CentigramsPerLiter"] = 24] = "CentigramsPerLiter";
    /** */
    DensityUnits[DensityUnits["DecigramsPerLiter"] = 25] = "DecigramsPerLiter";
    /** */
    DensityUnits[DensityUnits["PicogramsPerDeciLiter"] = 26] = "PicogramsPerDeciLiter";
    /** */
    DensityUnits[DensityUnits["NanogramsPerDeciLiter"] = 27] = "NanogramsPerDeciLiter";
    /** */
    DensityUnits[DensityUnits["MicrogramsPerDeciLiter"] = 28] = "MicrogramsPerDeciLiter";
    /** */
    DensityUnits[DensityUnits["CentigramsPerDeciLiter"] = 29] = "CentigramsPerDeciLiter";
    /** */
    DensityUnits[DensityUnits["DecigramsPerDeciLiter"] = 30] = "DecigramsPerDeciLiter";
    /** */
    DensityUnits[DensityUnits["PicogramsPerMilliliter"] = 31] = "PicogramsPerMilliliter";
    /** */
    DensityUnits[DensityUnits["NanogramsPerMilliliter"] = 32] = "NanogramsPerMilliliter";
    /** */
    DensityUnits[DensityUnits["MicrogramsPerMilliliter"] = 33] = "MicrogramsPerMilliliter";
    /** */
    DensityUnits[DensityUnits["CentigramsPerMilliliter"] = 34] = "CentigramsPerMilliliter";
    /** */
    DensityUnits[DensityUnits["DecigramsPerMilliliter"] = 35] = "DecigramsPerMilliliter";
})(DensityUnits = exports.DensityUnits || (exports.DensityUnits = {}));
/** The density, or more precisely, the volumetric mass density, of a substance is its mass per unit volume. */
class Density {
    /**
     * Create a new Density.
     * @param value The value.
     * @param fromUnit The ‘Density’ unit to create from.
     * The default unit is KilogramsPerCubicMeter
     */
    constructor(value, fromUnit = DensityUnits.KilogramsPerCubicMeter) {
        this.gramspercubicmillimeterLazy = null;
        this.gramspercubiccentimeterLazy = null;
        this.gramspercubicmeterLazy = null;
        this.poundspercubicinchLazy = null;
        this.poundspercubicfootLazy = null;
        this.tonnespercubicmillimeterLazy = null;
        this.tonnespercubiccentimeterLazy = null;
        this.tonnespercubicmeterLazy = null;
        this.slugspercubicfootLazy = null;
        this.gramsperliterLazy = null;
        this.gramsperdeciliterLazy = null;
        this.gramspermilliliterLazy = null;
        this.poundsperusgallonLazy = null;
        this.poundsperimperialgallonLazy = null;
        this.kilogramsperliterLazy = null;
        this.kilogramspercubicmillimeterLazy = null;
        this.kilogramspercubiccentimeterLazy = null;
        this.kilogramspercubicmeterLazy = null;
        this.microgramspercubicmeterLazy = null;
        this.kilopoundspercubicinchLazy = null;
        this.kilopoundspercubicfootLazy = null;
        this.picogramsperliterLazy = null;
        this.nanogramsperliterLazy = null;
        this.microgramsperliterLazy = null;
        this.centigramsperliterLazy = null;
        this.decigramsperliterLazy = null;
        this.picogramsperdeciliterLazy = null;
        this.nanogramsperdeciliterLazy = null;
        this.microgramsperdeciliterLazy = null;
        this.centigramsperdeciliterLazy = null;
        this.decigramsperdeciliterLazy = null;
        this.picogramspermilliliterLazy = null;
        this.nanogramspermilliliterLazy = null;
        this.microgramspermilliliterLazy = null;
        this.centigramspermilliliterLazy = null;
        this.decigramspermilliliterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Density is KilogramsPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerCubicMillimeter() {
        if (this.gramspercubicmillimeterLazy !== null) {
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }
    /** */
    get GramsPerCubicCentimeter() {
        if (this.gramspercubiccentimeterLazy !== null) {
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }
    /** */
    get GramsPerCubicMeter() {
        if (this.gramspercubicmeterLazy !== null) {
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }
    /** */
    get PoundsPerCubicInch() {
        if (this.poundspercubicinchLazy !== null) {
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }
    /** */
    get PoundsPerCubicFoot() {
        if (this.poundspercubicfootLazy !== null) {
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }
    /** */
    get TonnesPerCubicMillimeter() {
        if (this.tonnespercubicmillimeterLazy !== null) {
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }
    /** */
    get TonnesPerCubicCentimeter() {
        if (this.tonnespercubiccentimeterLazy !== null) {
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }
    /** */
    get TonnesPerCubicMeter() {
        if (this.tonnespercubicmeterLazy !== null) {
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }
    /** */
    get SlugsPerCubicFoot() {
        if (this.slugspercubicfootLazy !== null) {
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }
    /** */
    get GramsPerLiter() {
        if (this.gramsperliterLazy !== null) {
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(DensityUnits.GramsPerLiter);
    }
    /** */
    get GramsPerDeciLiter() {
        if (this.gramsperdeciliterLazy !== null) {
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }
    /** */
    get GramsPerMilliliter() {
        if (this.gramspermilliliterLazy !== null) {
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }
    /** */
    get PoundsPerUSGallon() {
        if (this.poundsperusgallonLazy !== null) {
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }
    /** */
    get PoundsPerImperialGallon() {
        if (this.poundsperimperialgallonLazy !== null) {
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }
    /** */
    get KilogramsPerLiter() {
        if (this.kilogramsperliterLazy !== null) {
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }
    /** */
    get KilogramsPerCubicMillimeter() {
        if (this.kilogramspercubicmillimeterLazy !== null) {
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMillimeter);
    }
    /** */
    get KilogramsPerCubicCentimeter() {
        if (this.kilogramspercubiccentimeterLazy !== null) {
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicCentimeter);
    }
    /** */
    get KilogramsPerCubicMeter() {
        if (this.kilogramspercubicmeterLazy !== null) {
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMeter);
    }
    /** */
    get MicrogramsPerCubicMeter() {
        if (this.microgramspercubicmeterLazy !== null) {
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(DensityUnits.MicrogramsPerCubicMeter);
    }
    /** */
    get KilopoundsPerCubicInch() {
        if (this.kilopoundspercubicinchLazy !== null) {
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicInch);
    }
    /** */
    get KilopoundsPerCubicFoot() {
        if (this.kilopoundspercubicfootLazy !== null) {
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicFoot);
    }
    /** */
    get PicogramsPerLiter() {
        if (this.picogramsperliterLazy !== null) {
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(DensityUnits.PicogramsPerLiter);
    }
    /** */
    get NanogramsPerLiter() {
        if (this.nanogramsperliterLazy !== null) {
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(DensityUnits.NanogramsPerLiter);
    }
    /** */
    get MicrogramsPerLiter() {
        if (this.microgramsperliterLazy !== null) {
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerLiter);
    }
    /** */
    get CentigramsPerLiter() {
        if (this.centigramsperliterLazy !== null) {
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(DensityUnits.CentigramsPerLiter);
    }
    /** */
    get DecigramsPerLiter() {
        if (this.decigramsperliterLazy !== null) {
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(DensityUnits.DecigramsPerLiter);
    }
    /** */
    get PicogramsPerDeciLiter() {
        if (this.picogramsperdeciliterLazy !== null) {
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramsPerDeciLiter);
    }
    /** */
    get NanogramsPerDeciLiter() {
        if (this.nanogramsperdeciliterLazy !== null) {
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramsPerDeciLiter);
    }
    /** */
    get MicrogramsPerDeciLiter() {
        if (this.microgramsperdeciliterLazy !== null) {
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerDeciLiter);
    }
    /** */
    get CentigramsPerDeciLiter() {
        if (this.centigramsperdeciliterLazy !== null) {
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramsPerDeciLiter);
    }
    /** */
    get DecigramsPerDeciLiter() {
        if (this.decigramsperdeciliterLazy !== null) {
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramsPerDeciLiter);
    }
    /** */
    get PicogramsPerMilliliter() {
        if (this.picogramspermilliliterLazy !== null) {
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(DensityUnits.PicogramsPerMilliliter);
    }
    /** */
    get NanogramsPerMilliliter() {
        if (this.nanogramspermilliliterLazy !== null) {
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(DensityUnits.NanogramsPerMilliliter);
    }
    /** */
    get MicrogramsPerMilliliter() {
        if (this.microgramspermilliliterLazy !== null) {
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerMilliliter);
    }
    /** */
    get CentigramsPerMilliliter() {
        if (this.centigramspermilliliterLazy !== null) {
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(DensityUnits.CentigramsPerMilliliter);
    }
    /** */
    get DecigramsPerMilliliter() {
        if (this.decigramspermilliliterLazy !== null) {
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(DensityUnits.DecigramsPerMilliliter);
    }
    /**
     * Create a new Density instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.GramsPerCubicMillimeter);
    }
    /**
     * Create a new Density instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.GramsPerCubicCentimeter);
    }
    /**
     * Create a new Density instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerCubicMeter(value) {
        return new Density(value, DensityUnits.GramsPerCubicMeter);
    }
    /**
     * Create a new Density instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerCubicInch(value) {
        return new Density(value, DensityUnits.PoundsPerCubicInch);
    }
    /**
     * Create a new Density instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerCubicFoot(value) {
        return new Density(value, DensityUnits.PoundsPerCubicFoot);
    }
    /**
     * Create a new Density instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromTonnesPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.TonnesPerCubicMillimeter);
    }
    /**
     * Create a new Density instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromTonnesPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.TonnesPerCubicCentimeter);
    }
    /**
     * Create a new Density instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromTonnesPerCubicMeter(value) {
        return new Density(value, DensityUnits.TonnesPerCubicMeter);
    }
    /**
     * Create a new Density instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    static FromSlugsPerCubicFoot(value) {
        return new Density(value, DensityUnits.SlugsPerCubicFoot);
    }
    /**
     * Create a new Density instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerLiter(value) {
        return new Density(value, DensityUnits.GramsPerLiter);
    }
    /**
     * Create a new Density instance from a GramsPerDeciLiter
     *
     * @param value The unit as GramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.GramsPerDeciLiter);
    }
    /**
     * Create a new Density instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromGramsPerMilliliter(value) {
        return new Density(value, DensityUnits.GramsPerMilliliter);
    }
    /**
     * Create a new Density instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerUSGallon(value) {
        return new Density(value, DensityUnits.PoundsPerUSGallon);
    }
    /**
     * Create a new Density instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPoundsPerImperialGallon(value) {
        return new Density(value, DensityUnits.PoundsPerImperialGallon);
    }
    /**
     * Create a new Density instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerLiter(value) {
        return new Density(value, DensityUnits.KilogramsPerLiter);
    }
    /**
     * Create a new Density instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.KilogramsPerCubicMillimeter);
    }
    /**
     * Create a new Density instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.KilogramsPerCubicCentimeter);
    }
    /**
     * Create a new Density instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilogramsPerCubicMeter(value) {
        return new Density(value, DensityUnits.KilogramsPerCubicMeter);
    }
    /**
     * Create a new Density instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerCubicMeter(value) {
        return new Density(value, DensityUnits.MicrogramsPerCubicMeter);
    }
    /**
     * Create a new Density instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilopoundsPerCubicInch(value) {
        return new Density(value, DensityUnits.KilopoundsPerCubicInch);
    }
    /**
     * Create a new Density instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new Density from.
     * @returns The new Density instance.
     */
    static FromKilopoundsPerCubicFoot(value) {
        return new Density(value, DensityUnits.KilopoundsPerCubicFoot);
    }
    /**
     * Create a new Density instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPicogramsPerLiter(value) {
        return new Density(value, DensityUnits.PicogramsPerLiter);
    }
    /**
     * Create a new Density instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromNanogramsPerLiter(value) {
        return new Density(value, DensityUnits.NanogramsPerLiter);
    }
    /**
     * Create a new Density instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerLiter(value) {
        return new Density(value, DensityUnits.MicrogramsPerLiter);
    }
    /**
     * Create a new Density instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromCentigramsPerLiter(value) {
        return new Density(value, DensityUnits.CentigramsPerLiter);
    }
    /**
     * Create a new Density instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromDecigramsPerLiter(value) {
        return new Density(value, DensityUnits.DecigramsPerLiter);
    }
    /**
     * Create a new Density instance from a PicogramsPerDeciLiter
     *
     * @param value The unit as PicogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPicogramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.PicogramsPerDeciLiter);
    }
    /**
     * Create a new Density instance from a NanogramsPerDeciLiter
     *
     * @param value The unit as NanogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromNanogramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.NanogramsPerDeciLiter);
    }
    /**
     * Create a new Density instance from a MicrogramsPerDeciLiter
     *
     * @param value The unit as MicrogramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.MicrogramsPerDeciLiter);
    }
    /**
     * Create a new Density instance from a CentigramsPerDeciLiter
     *
     * @param value The unit as CentigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromCentigramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.CentigramsPerDeciLiter);
    }
    /**
     * Create a new Density instance from a DecigramsPerDeciLiter
     *
     * @param value The unit as DecigramsPerDeciLiter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromDecigramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.DecigramsPerDeciLiter);
    }
    /**
     * Create a new Density instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromPicogramsPerMilliliter(value) {
        return new Density(value, DensityUnits.PicogramsPerMilliliter);
    }
    /**
     * Create a new Density instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromNanogramsPerMilliliter(value) {
        return new Density(value, DensityUnits.NanogramsPerMilliliter);
    }
    /**
     * Create a new Density instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromMicrogramsPerMilliliter(value) {
        return new Density(value, DensityUnits.MicrogramsPerMilliliter);
    }
    /**
     * Create a new Density instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromCentigramsPerMilliliter(value) {
        return new Density(value, DensityUnits.CentigramsPerMilliliter);
    }
    /**
     * Create a new Density instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new Density from.
     * @returns The new Density instance.
     */
    static FromDecigramsPerMilliliter(value) {
        return new Density(value, DensityUnits.DecigramsPerMilliliter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case DensityUnits.GramsPerCubicMillimeter:
                return this.value * 1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
                return this.value * 1e-3;
            case DensityUnits.GramsPerCubicMeter:
                return this.value * 1e3;
            case DensityUnits.PoundsPerCubicInch:
                return this.value * 3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
                return this.value * 0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
                return this.value * 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
                return this.value * 1e-9;
            case DensityUnits.TonnesPerCubicMeter:
                return this.value * 0.001;
            case DensityUnits.SlugsPerCubicFoot:
                return this.value * 0.00194032033;
            case DensityUnits.GramsPerLiter:
                return this.value * 1;
            case DensityUnits.GramsPerDeciLiter:
                return this.value * 1e-1;
            case DensityUnits.GramsPerMilliliter:
                return this.value * 1e-3;
            case DensityUnits.PoundsPerUSGallon:
                return this.value / 1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
                return this.value / 9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
                return this.value / 1e3;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return (this.value * 1e-6) / 1000;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return (this.value * 1e-3) / 1000;
            case DensityUnits.KilogramsPerCubicMeter:
                return (this.value * 1e3) / 1000;
            case DensityUnits.MicrogramsPerCubicMeter:
                return (this.value * 1e3) / 0.000001;
            case DensityUnits.KilopoundsPerCubicInch:
                return (this.value * 3.6127298147753e-5) / 1000;
            case DensityUnits.KilopoundsPerCubicFoot:
                return (this.value * 0.062427961) / 1000;
            case DensityUnits.PicogramsPerLiter:
                return (this.value * 1) / 1e-12;
            case DensityUnits.NanogramsPerLiter:
                return (this.value * 1) / 1e-9;
            case DensityUnits.MicrogramsPerLiter:
                return (this.value * 1) / 0.000001;
            case DensityUnits.CentigramsPerLiter:
                return (this.value * 1) / 0.01;
            case DensityUnits.DecigramsPerLiter:
                return (this.value * 1) / 0.1;
            case DensityUnits.PicogramsPerDeciLiter:
                return (this.value * 1e-1) / 1e-12;
            case DensityUnits.NanogramsPerDeciLiter:
                return (this.value * 1e-1) / 1e-9;
            case DensityUnits.MicrogramsPerDeciLiter:
                return (this.value * 1e-1) / 0.000001;
            case DensityUnits.CentigramsPerDeciLiter:
                return (this.value * 1e-1) / 0.01;
            case DensityUnits.DecigramsPerDeciLiter:
                return (this.value * 1e-1) / 0.1;
            case DensityUnits.PicogramsPerMilliliter:
                return (this.value * 1e-3) / 1e-12;
            case DensityUnits.NanogramsPerMilliliter:
                return (this.value * 1e-3) / 1e-9;
            case DensityUnits.MicrogramsPerMilliliter:
                return (this.value * 1e-3) / 0.000001;
            case DensityUnits.CentigramsPerMilliliter:
                return (this.value * 1e-3) / 0.01;
            case DensityUnits.DecigramsPerMilliliter:
                return (this.value * 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case DensityUnits.GramsPerCubicMillimeter:
                return value / 1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
                return value / 1e-3;
            case DensityUnits.GramsPerCubicMeter:
                return value / 1e3;
            case DensityUnits.PoundsPerCubicInch:
                return value / 3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
                return value / 0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
                return value / 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
                return value / 1e-9;
            case DensityUnits.TonnesPerCubicMeter:
                return value / 0.001;
            case DensityUnits.SlugsPerCubicFoot:
                return value * 515.378818;
            case DensityUnits.GramsPerLiter:
                return value / 1;
            case DensityUnits.GramsPerDeciLiter:
                return value / 1e-1;
            case DensityUnits.GramsPerMilliliter:
                return value / 1e-3;
            case DensityUnits.PoundsPerUSGallon:
                return value * 1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
                return value * 9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
                return value * 1e3;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return (value / 1e-6) * 1000;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return (value / 1e-3) * 1000;
            case DensityUnits.KilogramsPerCubicMeter:
                return (value / 1e3) * 1000;
            case DensityUnits.MicrogramsPerCubicMeter:
                return (value / 1e3) * 0.000001;
            case DensityUnits.KilopoundsPerCubicInch:
                return (value / 3.6127298147753e-5) * 1000;
            case DensityUnits.KilopoundsPerCubicFoot:
                return (value / 0.062427961) * 1000;
            case DensityUnits.PicogramsPerLiter:
                return (value / 1) * 1e-12;
            case DensityUnits.NanogramsPerLiter:
                return (value / 1) * 1e-9;
            case DensityUnits.MicrogramsPerLiter:
                return (value / 1) * 0.000001;
            case DensityUnits.CentigramsPerLiter:
                return (value / 1) * 0.01;
            case DensityUnits.DecigramsPerLiter:
                return (value / 1) * 0.1;
            case DensityUnits.PicogramsPerDeciLiter:
                return (value / 1e-1) * 1e-12;
            case DensityUnits.NanogramsPerDeciLiter:
                return (value / 1e-1) * 1e-9;
            case DensityUnits.MicrogramsPerDeciLiter:
                return (value / 1e-1) * 0.000001;
            case DensityUnits.CentigramsPerDeciLiter:
                return (value / 1e-1) * 0.01;
            case DensityUnits.DecigramsPerDeciLiter:
                return (value / 1e-1) * 0.1;
            case DensityUnits.PicogramsPerMilliliter:
                return (value / 1e-3) * 1e-12;
            case DensityUnits.NanogramsPerMilliliter:
                return (value / 1e-3) * 1e-9;
            case DensityUnits.MicrogramsPerMilliliter:
                return (value / 1e-3) * 0.000001;
            case DensityUnits.CentigramsPerMilliliter:
                return (value / 1e-3) * 0.01;
            case DensityUnits.DecigramsPerMilliliter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Density to string.
     * Note! the default format for Density is KilogramsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Density.
     * @returns The string format of the Density.
     */
    toString(toUnit = DensityUnits.KilogramsPerCubicMeter) {
        switch (toUnit) {
            case DensityUnits.GramsPerCubicMillimeter:
                return this.GramsPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.GramsPerCubicCentimeter:
                return this.GramsPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.GramsPerCubicMeter:
                return this.GramsPerCubicMeter + ` g/m³`;
            case DensityUnits.PoundsPerCubicInch:
                return this.PoundsPerCubicInch + ` lb/in³`;
            case DensityUnits.PoundsPerCubicFoot:
                return this.PoundsPerCubicFoot + ` lb/ft³`;
            case DensityUnits.TonnesPerCubicMillimeter:
                return this.TonnesPerCubicMillimeter + ` t/mm³`;
            case DensityUnits.TonnesPerCubicCentimeter:
                return this.TonnesPerCubicCentimeter + ` t/cm³`;
            case DensityUnits.TonnesPerCubicMeter:
                return this.TonnesPerCubicMeter + ` t/m³`;
            case DensityUnits.SlugsPerCubicFoot:
                return this.SlugsPerCubicFoot + ` slug/ft³`;
            case DensityUnits.GramsPerLiter:
                return this.GramsPerLiter + ` g/L`;
            case DensityUnits.GramsPerDeciLiter:
                return this.GramsPerDeciLiter + ` g/dl`;
            case DensityUnits.GramsPerMilliliter:
                return this.GramsPerMilliliter + ` g/ml`;
            case DensityUnits.PoundsPerUSGallon:
                return this.PoundsPerUSGallon + ` ppg (U.S.)`;
            case DensityUnits.PoundsPerImperialGallon:
                return this.PoundsPerImperialGallon + ` ppg (imp.)`;
            case DensityUnits.KilogramsPerLiter:
                return this.KilogramsPerLiter + ` kg/l`;
            case DensityUnits.KilogramsPerCubicMillimeter:
                return this.KilogramsPerCubicMillimeter + ` `;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` `;
            case DensityUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` `;
            case DensityUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` `;
            case DensityUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` `;
            case DensityUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` `;
            case DensityUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` `;
            case DensityUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` `;
            case DensityUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` `;
            case DensityUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` `;
            case DensityUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` `;
            case DensityUnits.PicogramsPerDeciLiter:
                return this.PicogramsPerDeciLiter + ` `;
            case DensityUnits.NanogramsPerDeciLiter:
                return this.NanogramsPerDeciLiter + ` `;
            case DensityUnits.MicrogramsPerDeciLiter:
                return this.MicrogramsPerDeciLiter + ` `;
            case DensityUnits.CentigramsPerDeciLiter:
                return this.CentigramsPerDeciLiter + ` `;
            case DensityUnits.DecigramsPerDeciLiter:
                return this.DecigramsPerDeciLiter + ` `;
            case DensityUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` `;
            case DensityUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` `;
            case DensityUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` `;
            case DensityUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` `;
            case DensityUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Density are equals to the current Density.
     * @param density The other Density.
     * @returns True if the given Density are equal to the current Density.
     */
    equals(density) {
        return this.value === density.BaseValue;
    }
    /**
     * Compare the given Density against the current Density.
     * @param density The other Density.
     * @returns 0 if they are equal, -1 if the current Density is less then other, 1 if the current Density is greater then other.
     */
    compareTo(density) {
        if (this.value > density.BaseValue)
            return 1;
        if (this.value < density.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    add(density) {
        return new Density(this.value + density.BaseValue);
    }
    /**
     * Subtract the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    subtract(density) {
        return new Density(this.value - density.BaseValue);
    }
    /**
     * Multiply the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    multiply(density) {
        return new Density(this.value * density.BaseValue);
    }
    /**
     * Divide the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    divide(density) {
        return new Density(this.value / density.BaseValue);
    }
    /**
     * Modulo the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    modulo(density) {
        return new Density(this.value % density.BaseValue);
    }
    /**
     * Pow the given Density with the current Density.
     * @param density The other Density.
     * @returns A new Density instance with the results.
     */
    pow(density) {
        return new Density(this.value ** density.BaseValue);
    }
}
exports.Density = Density;
//# sourceMappingURL=density.g.js.map