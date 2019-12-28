"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MassConcentrationUnits enumeration */
var MassConcentrationUnits;
(function (MassConcentrationUnits) {
    /** */
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicMillimeter"] = 0] = "GramsPerCubicMillimeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicCentimeter"] = 1] = "GramsPerCubicCentimeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicMeter"] = 2] = "GramsPerCubicMeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["GramsPerMilliliter"] = 3] = "GramsPerMilliliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["GramsPerDeciliter"] = 4] = "GramsPerDeciliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["GramsPerLiter"] = 5] = "GramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicMillimeter"] = 6] = "TonnesPerCubicMillimeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicCentimeter"] = 7] = "TonnesPerCubicCentimeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicMeter"] = 8] = "TonnesPerCubicMeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerCubicInch"] = 9] = "PoundsPerCubicInch";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerCubicFoot"] = 10] = "PoundsPerCubicFoot";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["SlugsPerCubicFoot"] = 11] = "SlugsPerCubicFoot";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerUSGallon"] = 12] = "PoundsPerUSGallon";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerImperialGallon"] = 13] = "PoundsPerImperialGallon";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["KilogramsPerCubicMillimeter"] = 14] = "KilogramsPerCubicMillimeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["KilogramsPerCubicCentimeter"] = 15] = "KilogramsPerCubicCentimeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["KilogramsPerCubicMeter"] = 16] = "KilogramsPerCubicMeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["MicrogramsPerCubicMeter"] = 17] = "MicrogramsPerCubicMeter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PicogramsPerMilliliter"] = 18] = "PicogramsPerMilliliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["NanogramsPerMilliliter"] = 19] = "NanogramsPerMilliliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["MicrogramsPerMilliliter"] = 20] = "MicrogramsPerMilliliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["CentigramsPerMilliliter"] = 21] = "CentigramsPerMilliliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["DecigramsPerMilliliter"] = 22] = "DecigramsPerMilliliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PicogramsPerDeciliter"] = 23] = "PicogramsPerDeciliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["NanogramsPerDeciliter"] = 24] = "NanogramsPerDeciliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["MicrogramsPerDeciliter"] = 25] = "MicrogramsPerDeciliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["CentigramsPerDeciliter"] = 26] = "CentigramsPerDeciliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["DecigramsPerDeciliter"] = 27] = "DecigramsPerDeciliter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["PicogramsPerLiter"] = 28] = "PicogramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["NanogramsPerLiter"] = 29] = "NanogramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["MicrogramsPerLiter"] = 30] = "MicrogramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["CentigramsPerLiter"] = 31] = "CentigramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["DecigramsPerLiter"] = 32] = "DecigramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["KilogramsPerLiter"] = 33] = "KilogramsPerLiter";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["KilopoundsPerCubicInch"] = 34] = "KilopoundsPerCubicInch";
    /** */
    MassConcentrationUnits[MassConcentrationUnits["KilopoundsPerCubicFoot"] = 35] = "KilopoundsPerCubicFoot";
})(MassConcentrationUnits = exports.MassConcentrationUnits || (exports.MassConcentrationUnits = {}));
/** In chemistry, the mass concentration ρi (or γi) is defined as the mass of a constituent mi divided by the volume of the mixture V */
class MassConcentration {
    /**
     * Create a new MassConcentration.
     * @param value The value.
     * @param fromUnit The ‘MassConcentration’ unit to create from.
     * The default unit is KilogramsPerCubicMeter
     */
    constructor(value, fromUnit = MassConcentrationUnits.KilogramsPerCubicMeter) {
        this.gramspercubicmillimeterLazy = null;
        this.gramspercubiccentimeterLazy = null;
        this.gramspercubicmeterLazy = null;
        this.gramspermilliliterLazy = null;
        this.gramsperdeciliterLazy = null;
        this.gramsperliterLazy = null;
        this.tonnespercubicmillimeterLazy = null;
        this.tonnespercubiccentimeterLazy = null;
        this.tonnespercubicmeterLazy = null;
        this.poundspercubicinchLazy = null;
        this.poundspercubicfootLazy = null;
        this.slugspercubicfootLazy = null;
        this.poundsperusgallonLazy = null;
        this.poundsperimperialgallonLazy = null;
        this.kilogramspercubicmillimeterLazy = null;
        this.kilogramspercubiccentimeterLazy = null;
        this.kilogramspercubicmeterLazy = null;
        this.microgramspercubicmeterLazy = null;
        this.picogramspermilliliterLazy = null;
        this.nanogramspermilliliterLazy = null;
        this.microgramspermilliliterLazy = null;
        this.centigramspermilliliterLazy = null;
        this.decigramspermilliliterLazy = null;
        this.picogramsperdeciliterLazy = null;
        this.nanogramsperdeciliterLazy = null;
        this.microgramsperdeciliterLazy = null;
        this.centigramsperdeciliterLazy = null;
        this.decigramsperdeciliterLazy = null;
        this.picogramsperliterLazy = null;
        this.nanogramsperliterLazy = null;
        this.microgramsperliterLazy = null;
        this.centigramsperliterLazy = null;
        this.decigramsperliterLazy = null;
        this.kilogramsperliterLazy = null;
        this.kilopoundspercubicinchLazy = null;
        this.kilopoundspercubicfootLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MassConcentration is KilogramsPerCubicMeter.
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
        return this.gramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMillimeter);
    }
    /** */
    get GramsPerCubicCentimeter() {
        if (this.gramspercubiccentimeterLazy !== null) {
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicCentimeter);
    }
    /** */
    get GramsPerCubicMeter() {
        if (this.gramspercubicmeterLazy !== null) {
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMeter);
    }
    /** */
    get GramsPerMilliliter() {
        if (this.gramspermilliliterLazy !== null) {
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerMilliliter);
    }
    /** */
    get GramsPerDeciliter() {
        if (this.gramsperdeciliterLazy !== null) {
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerDeciliter);
    }
    /** */
    get GramsPerLiter() {
        if (this.gramsperliterLazy !== null) {
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerLiter);
    }
    /** */
    get TonnesPerCubicMillimeter() {
        if (this.tonnespercubicmillimeterLazy !== null) {
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMillimeter);
    }
    /** */
    get TonnesPerCubicCentimeter() {
        if (this.tonnespercubiccentimeterLazy !== null) {
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicCentimeter);
    }
    /** */
    get TonnesPerCubicMeter() {
        if (this.tonnespercubicmeterLazy !== null) {
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMeter);
    }
    /** */
    get PoundsPerCubicInch() {
        if (this.poundspercubicinchLazy !== null) {
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicInch);
    }
    /** */
    get PoundsPerCubicFoot() {
        if (this.poundspercubicfootLazy !== null) {
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicFoot);
    }
    /** */
    get SlugsPerCubicFoot() {
        if (this.slugspercubicfootLazy !== null) {
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.SlugsPerCubicFoot);
    }
    /** */
    get PoundsPerUSGallon() {
        if (this.poundsperusgallonLazy !== null) {
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerUSGallon);
    }
    /** */
    get PoundsPerImperialGallon() {
        if (this.poundsperimperialgallonLazy !== null) {
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerImperialGallon);
    }
    /** */
    get KilogramsPerCubicMillimeter() {
        if (this.kilogramspercubicmillimeterLazy !== null) {
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicMillimeter);
    }
    /** */
    get KilogramsPerCubicCentimeter() {
        if (this.kilogramspercubiccentimeterLazy !== null) {
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicCentimeter);
    }
    /** */
    get KilogramsPerCubicMeter() {
        if (this.kilogramspercubicmeterLazy !== null) {
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerCubicMeter);
    }
    /** */
    get MicrogramsPerCubicMeter() {
        if (this.microgramspercubicmeterLazy !== null) {
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerCubicMeter);
    }
    /** */
    get PicogramsPerMilliliter() {
        if (this.picogramspermilliliterLazy !== null) {
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerMilliliter);
    }
    /** */
    get NanogramsPerMilliliter() {
        if (this.nanogramspermilliliterLazy !== null) {
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerMilliliter);
    }
    /** */
    get MicrogramsPerMilliliter() {
        if (this.microgramspermilliliterLazy !== null) {
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerMilliliter);
    }
    /** */
    get CentigramsPerMilliliter() {
        if (this.centigramspermilliliterLazy !== null) {
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerMilliliter);
    }
    /** */
    get DecigramsPerMilliliter() {
        if (this.decigramspermilliliterLazy !== null) {
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerMilliliter);
    }
    /** */
    get PicogramsPerDeciliter() {
        if (this.picogramsperdeciliterLazy !== null) {
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerDeciliter);
    }
    /** */
    get NanogramsPerDeciliter() {
        if (this.nanogramsperdeciliterLazy !== null) {
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerDeciliter);
    }
    /** */
    get MicrogramsPerDeciliter() {
        if (this.microgramsperdeciliterLazy !== null) {
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerDeciliter);
    }
    /** */
    get CentigramsPerDeciliter() {
        if (this.centigramsperdeciliterLazy !== null) {
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerDeciliter);
    }
    /** */
    get DecigramsPerDeciliter() {
        if (this.decigramsperdeciliterLazy !== null) {
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerDeciliter);
    }
    /** */
    get PicogramsPerLiter() {
        if (this.picogramsperliterLazy !== null) {
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramsPerLiter);
    }
    /** */
    get NanogramsPerLiter() {
        if (this.nanogramsperliterLazy !== null) {
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramsPerLiter);
    }
    /** */
    get MicrogramsPerLiter() {
        if (this.microgramsperliterLazy !== null) {
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramsPerLiter);
    }
    /** */
    get CentigramsPerLiter() {
        if (this.centigramsperliterLazy !== null) {
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramsPerLiter);
    }
    /** */
    get DecigramsPerLiter() {
        if (this.decigramsperliterLazy !== null) {
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramsPerLiter);
    }
    /** */
    get KilogramsPerLiter() {
        if (this.kilogramsperliterLazy !== null) {
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(MassConcentrationUnits.KilogramsPerLiter);
    }
    /** */
    get KilopoundsPerCubicInch() {
        if (this.kilopoundspercubicinchLazy !== null) {
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.KilopoundsPerCubicInch);
    }
    /** */
    get KilopoundsPerCubicFoot() {
        if (this.kilopoundspercubicfootLazy !== null) {
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.KilopoundsPerCubicFoot);
    }
    /**
     * Create a new MassConcentration instance from a GramsPerCubicMillimeter
     *
     * @param value The unit as GramsPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMillimeter);
    }
    /**
     * Create a new MassConcentration instance from a GramsPerCubicCentimeter
     *
     * @param value The unit as GramsPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicCentimeter);
    }
    /**
     * Create a new MassConcentration instance from a GramsPerCubicMeter
     *
     * @param value The unit as GramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMeter);
    }
    /**
     * Create a new MassConcentration instance from a GramsPerMilliliter
     *
     * @param value The unit as GramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerMilliliter);
    }
    /**
     * Create a new MassConcentration instance from a GramsPerDeciliter
     *
     * @param value The unit as GramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerDeciliter);
    }
    /**
     * Create a new MassConcentration instance from a GramsPerLiter
     *
     * @param value The unit as GramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromGramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a TonnesPerCubicMillimeter
     *
     * @param value The unit as TonnesPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromTonnesPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMillimeter);
    }
    /**
     * Create a new MassConcentration instance from a TonnesPerCubicCentimeter
     *
     * @param value The unit as TonnesPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromTonnesPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicCentimeter);
    }
    /**
     * Create a new MassConcentration instance from a TonnesPerCubicMeter
     *
     * @param value The unit as TonnesPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromTonnesPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMeter);
    }
    /**
     * Create a new MassConcentration instance from a PoundsPerCubicInch
     *
     * @param value The unit as PoundsPerCubicInch to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerCubicInch(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicInch);
    }
    /**
     * Create a new MassConcentration instance from a PoundsPerCubicFoot
     *
     * @param value The unit as PoundsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicFoot);
    }
    /**
     * Create a new MassConcentration instance from a SlugsPerCubicFoot
     *
     * @param value The unit as SlugsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromSlugsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.SlugsPerCubicFoot);
    }
    /**
     * Create a new MassConcentration instance from a PoundsPerUSGallon
     *
     * @param value The unit as PoundsPerUSGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerUSGallon(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerUSGallon);
    }
    /**
     * Create a new MassConcentration instance from a PoundsPerImperialGallon
     *
     * @param value The unit as PoundsPerImperialGallon to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPoundsPerImperialGallon(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerImperialGallon);
    }
    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicMillimeter
     *
     * @param value The unit as KilogramsPerCubicMillimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicMillimeter);
    }
    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicCentimeter
     *
     * @param value The unit as KilogramsPerCubicCentimeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicCentimeter);
    }
    /**
     * Create a new MassConcentration instance from a KilogramsPerCubicMeter
     *
     * @param value The unit as KilogramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerCubicMeter);
    }
    /**
     * Create a new MassConcentration instance from a MicrogramsPerCubicMeter
     *
     * @param value The unit as MicrogramsPerCubicMeter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerCubicMeter);
    }
    /**
     * Create a new MassConcentration instance from a PicogramsPerMilliliter
     *
     * @param value The unit as PicogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPicogramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerMilliliter);
    }
    /**
     * Create a new MassConcentration instance from a NanogramsPerMilliliter
     *
     * @param value The unit as NanogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromNanogramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerMilliliter);
    }
    /**
     * Create a new MassConcentration instance from a MicrogramsPerMilliliter
     *
     * @param value The unit as MicrogramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerMilliliter);
    }
    /**
     * Create a new MassConcentration instance from a CentigramsPerMilliliter
     *
     * @param value The unit as CentigramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromCentigramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerMilliliter);
    }
    /**
     * Create a new MassConcentration instance from a DecigramsPerMilliliter
     *
     * @param value The unit as DecigramsPerMilliliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromDecigramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerMilliliter);
    }
    /**
     * Create a new MassConcentration instance from a PicogramsPerDeciliter
     *
     * @param value The unit as PicogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPicogramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerDeciliter);
    }
    /**
     * Create a new MassConcentration instance from a NanogramsPerDeciliter
     *
     * @param value The unit as NanogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromNanogramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerDeciliter);
    }
    /**
     * Create a new MassConcentration instance from a MicrogramsPerDeciliter
     *
     * @param value The unit as MicrogramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerDeciliter);
    }
    /**
     * Create a new MassConcentration instance from a CentigramsPerDeciliter
     *
     * @param value The unit as CentigramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromCentigramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerDeciliter);
    }
    /**
     * Create a new MassConcentration instance from a DecigramsPerDeciliter
     *
     * @param value The unit as DecigramsPerDeciliter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromDecigramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerDeciliter);
    }
    /**
     * Create a new MassConcentration instance from a PicogramsPerLiter
     *
     * @param value The unit as PicogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromPicogramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.PicogramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a NanogramsPerLiter
     *
     * @param value The unit as NanogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromNanogramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.NanogramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a MicrogramsPerLiter
     *
     * @param value The unit as MicrogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromMicrogramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a CentigramsPerLiter
     *
     * @param value The unit as CentigramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromCentigramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.CentigramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a DecigramsPerLiter
     *
     * @param value The unit as DecigramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromDecigramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.DecigramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a KilogramsPerLiter
     *
     * @param value The unit as KilogramsPerLiter to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilogramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramsPerLiter);
    }
    /**
     * Create a new MassConcentration instance from a KilopoundsPerCubicInch
     *
     * @param value The unit as KilopoundsPerCubicInch to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilopoundsPerCubicInch(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundsPerCubicInch);
    }
    /**
     * Create a new MassConcentration instance from a KilopoundsPerCubicFoot
     *
     * @param value The unit as KilopoundsPerCubicFoot to create a new MassConcentration from.
     * @returns The new MassConcentration instance.
     */
    static FromKilopoundsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundsPerCubicFoot);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return this.value * 1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return this.value * 1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return this.value * 1e3;
            case MassConcentrationUnits.GramsPerMilliliter:
                return this.value * 1e-3;
            case MassConcentrationUnits.GramsPerDeciliter:
                return this.value * 1e-1;
            case MassConcentrationUnits.GramsPerLiter:
                return this.value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return this.value * 1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return this.value * 1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return this.value * 0.001;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return this.value * 3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return this.value * 0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return this.value * 0.00194032033;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return this.value / 1.19826427e2;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return this.value / 9.9776398e1;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return (this.value * 1e-6) / 1000;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return (this.value * 1e-3) / 1000;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return (this.value * 1e3) / 1000;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return (this.value * 1e3) / 0.000001;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return (this.value * 1e-3) / 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return (this.value * 1e-3) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return (this.value * 1e-3) / 0.000001;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return (this.value * 1e-3) / 0.01;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return (this.value * 1e-3) / 0.1;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return (this.value * 1e-1) / 1e-12;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return (this.value * 1e-1) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return (this.value * 1e-1) / 0.000001;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return (this.value * 1e-1) / 0.01;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return (this.value * 1e-1) / 0.1;
            case MassConcentrationUnits.PicogramsPerLiter:
                return (this.value) / 1e-12;
            case MassConcentrationUnits.NanogramsPerLiter:
                return (this.value) / 1e-9;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return (this.value) / 0.000001;
            case MassConcentrationUnits.CentigramsPerLiter:
                return (this.value) / 0.01;
            case MassConcentrationUnits.DecigramsPerLiter:
                return (this.value) / 0.1;
            case MassConcentrationUnits.KilogramsPerLiter:
                return (this.value) / 1000;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return (this.value * 3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return (this.value * 0.062427961) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return value / 1e-6;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return value / 1e-3;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return value / 1e3;
            case MassConcentrationUnits.GramsPerMilliliter:
                return value / 1e-3;
            case MassConcentrationUnits.GramsPerDeciliter:
                return value / 1e-1;
            case MassConcentrationUnits.GramsPerLiter:
                return value;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return value / 1e-12;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return value / 1e-9;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return value / 0.001;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return value / 3.6127298147753e-5;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return value / 0.062427961;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return value * 515.378818;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return value * 1.19826427e2;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return value * 9.9776398e1;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return (value / 1e-6) * 1000;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return (value / 1e-3) * 1000;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return (value / 1e3) * 1000;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return (value / 1e3) * 0.000001;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return (value / 1e-3) * 1e-12;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return (value / 1e-3) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return (value / 1e-3) * 0.000001;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return (value / 1e-3) * 0.01;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return (value / 1e-3) * 0.1;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return (value / 1e-1) * 1e-12;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return (value / 1e-1) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return (value / 1e-1) * 0.000001;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return (value / 1e-1) * 0.01;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return (value / 1e-1) * 0.1;
            case MassConcentrationUnits.PicogramsPerLiter:
                return (value) * 1e-12;
            case MassConcentrationUnits.NanogramsPerLiter:
                return (value) * 1e-9;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return (value) * 0.000001;
            case MassConcentrationUnits.CentigramsPerLiter:
                return (value) * 0.01;
            case MassConcentrationUnits.DecigramsPerLiter:
                return (value) * 0.1;
            case MassConcentrationUnits.KilogramsPerLiter:
                return (value) * 1000;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return (value / 3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return (value / 0.062427961) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MassConcentration to string.
     * Note! the default format for MassConcentration is KilogramsPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassConcentration.
     * @returns The string format of the MassConcentration.
     */
    toString(toUnit = MassConcentrationUnits.KilogramsPerCubicMeter) {
        switch (toUnit) {
            case MassConcentrationUnits.GramsPerCubicMillimeter:
                return this.GramsPerCubicMillimeter + ` g/mm³`;
            case MassConcentrationUnits.GramsPerCubicCentimeter:
                return this.GramsPerCubicCentimeter + ` g/cm³`;
            case MassConcentrationUnits.GramsPerCubicMeter:
                return this.GramsPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.GramsPerMilliliter:
                return this.GramsPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.GramsPerDeciliter:
                return this.GramsPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.GramsPerLiter:
                return this.GramsPerLiter + ` g/L`;
            case MassConcentrationUnits.TonnesPerCubicMillimeter:
                return this.TonnesPerCubicMillimeter + ` t/mm³`;
            case MassConcentrationUnits.TonnesPerCubicCentimeter:
                return this.TonnesPerCubicCentimeter + ` t/cm³`;
            case MassConcentrationUnits.TonnesPerCubicMeter:
                return this.TonnesPerCubicMeter + ` t/m³`;
            case MassConcentrationUnits.PoundsPerCubicInch:
                return this.PoundsPerCubicInch + ` lb/in³`;
            case MassConcentrationUnits.PoundsPerCubicFoot:
                return this.PoundsPerCubicFoot + ` lb/ft³`;
            case MassConcentrationUnits.SlugsPerCubicFoot:
                return this.SlugsPerCubicFoot + ` slug/ft³`;
            case MassConcentrationUnits.PoundsPerUSGallon:
                return this.PoundsPerUSGallon + ` ppg (U.S.)`;
            case MassConcentrationUnits.PoundsPerImperialGallon:
                return this.PoundsPerImperialGallon + ` ppg (imp.)`;
            case MassConcentrationUnits.KilogramsPerCubicMillimeter:
                return this.KilogramsPerCubicMillimeter + ` `;
            case MassConcentrationUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` `;
            case MassConcentrationUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` `;
            case MassConcentrationUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` `;
            case MassConcentrationUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` `;
            case MassConcentrationUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` `;
            case MassConcentrationUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` `;
            case MassConcentrationUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` `;
            case MassConcentrationUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` `;
            case MassConcentrationUnits.PicogramsPerDeciliter:
                return this.PicogramsPerDeciliter + ` `;
            case MassConcentrationUnits.NanogramsPerDeciliter:
                return this.NanogramsPerDeciliter + ` `;
            case MassConcentrationUnits.MicrogramsPerDeciliter:
                return this.MicrogramsPerDeciliter + ` `;
            case MassConcentrationUnits.CentigramsPerDeciliter:
                return this.CentigramsPerDeciliter + ` `;
            case MassConcentrationUnits.DecigramsPerDeciliter:
                return this.DecigramsPerDeciliter + ` `;
            case MassConcentrationUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` `;
            case MassConcentrationUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` `;
            case MassConcentrationUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` `;
            case MassConcentrationUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` `;
            case MassConcentrationUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` `;
            case MassConcentrationUnits.KilogramsPerLiter:
                return this.KilogramsPerLiter + ` `;
            case MassConcentrationUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` `;
            case MassConcentrationUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given MassConcentration are equals to the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns True if the given MassConcentration are equal to the current MassConcentration.
     */
    equals(massConcentration) {
        return this.value === massConcentration.BaseValue;
    }
    /**
     * Compare the given MassConcentration against the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns 0 if they are equal, -1 if the current MassConcentration is less then other, 1 if the current MassConcentration is greater then other.
     */
    compareTo(massConcentration) {
        if (this.value > massConcentration.BaseValue)
            return 1;
        if (this.value < massConcentration.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    add(massConcentration) {
        return new MassConcentration(this.value + massConcentration.BaseValue);
    }
    /**
     * Subtract the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    subtract(massConcentration) {
        return new MassConcentration(this.value - massConcentration.BaseValue);
    }
    /**
     * Multiply the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    multiply(massConcentration) {
        return new MassConcentration(this.value * massConcentration.BaseValue);
    }
    /**
     * Divide the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    divide(massConcentration) {
        return new MassConcentration(this.value / massConcentration.BaseValue);
    }
    /**
     * Modulo the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    modulo(massConcentration) {
        return new MassConcentration(this.value % massConcentration.BaseValue);
    }
    /**
     * Pow the given MassConcentration with the current MassConcentration.
     * @param massConcentration The other MassConcentration.
     * @returns A new MassConcentration instance with the results.
     */
    pow(massConcentration) {
        return new MassConcentration(this.value ** massConcentration.BaseValue);
    }
}
exports.MassConcentration = MassConcentration;
//# sourceMappingURL=massconcentration.g.js.map