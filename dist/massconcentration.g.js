"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassConcentrationUnits;
(function (MassConcentrationUnits) {
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicMillimeter"] = 0] = "GramsPerCubicMillimeter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicCentimeter"] = 1] = "GramsPerCubicCentimeter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerCubicMeter"] = 2] = "GramsPerCubicMeter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerMilliliter"] = 3] = "GramsPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerDeciliter"] = 4] = "GramsPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["GramsPerLiter"] = 5] = "GramsPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicMillimeter"] = 6] = "TonnesPerCubicMillimeter";
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicCentimeter"] = 7] = "TonnesPerCubicCentimeter";
    MassConcentrationUnits[MassConcentrationUnits["TonnesPerCubicMeter"] = 8] = "TonnesPerCubicMeter";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerCubicInch"] = 9] = "PoundsPerCubicInch";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerCubicFoot"] = 10] = "PoundsPerCubicFoot";
    MassConcentrationUnits[MassConcentrationUnits["SlugsPerCubicFoot"] = 11] = "SlugsPerCubicFoot";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerUSGallon"] = 12] = "PoundsPerUSGallon";
    MassConcentrationUnits[MassConcentrationUnits["PoundsPerImperialGallon"] = 13] = "PoundsPerImperialGallon";
    MassConcentrationUnits[MassConcentrationUnits["KilogramPerCubicMillimeter"] = 14] = "KilogramPerCubicMillimeter";
    MassConcentrationUnits[MassConcentrationUnits["KilogramPerCubicCentimeter"] = 15] = "KilogramPerCubicCentimeter";
    MassConcentrationUnits[MassConcentrationUnits["KilogramPerCubicMeter"] = 16] = "KilogramPerCubicMeter";
    MassConcentrationUnits[MassConcentrationUnits["MicrogramPerCubicMeter"] = 17] = "MicrogramPerCubicMeter";
    MassConcentrationUnits[MassConcentrationUnits["PicogramPerMilliliter"] = 18] = "PicogramPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["NanogramPerMilliliter"] = 19] = "NanogramPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["MicrogramPerMilliliter"] = 20] = "MicrogramPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["CentigramPerMilliliter"] = 21] = "CentigramPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["DecigramPerMilliliter"] = 22] = "DecigramPerMilliliter";
    MassConcentrationUnits[MassConcentrationUnits["PicogramPerDeciliter"] = 23] = "PicogramPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["NanogramPerDeciliter"] = 24] = "NanogramPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["MicrogramPerDeciliter"] = 25] = "MicrogramPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["CentigramPerDeciliter"] = 26] = "CentigramPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["DecigramPerDeciliter"] = 27] = "DecigramPerDeciliter";
    MassConcentrationUnits[MassConcentrationUnits["PicogramPerLiter"] = 28] = "PicogramPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["NanogramPerLiter"] = 29] = "NanogramPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["MicrogramPerLiter"] = 30] = "MicrogramPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["CentigramPerLiter"] = 31] = "CentigramPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["DecigramPerLiter"] = 32] = "DecigramPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["KilogramPerLiter"] = 33] = "KilogramPerLiter";
    MassConcentrationUnits[MassConcentrationUnits["KilopoundPerCubicInch"] = 34] = "KilopoundPerCubicInch";
    MassConcentrationUnits[MassConcentrationUnits["KilopoundPerCubicFoot"] = 35] = "KilopoundPerCubicFoot";
})(MassConcentrationUnits = exports.MassConcentrationUnits || (exports.MassConcentrationUnits = {}));
class MassConcentration {
    constructor(value, fromUnit) {
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
        this.kilogrampercubicmillimeterLazy = null;
        this.kilogrampercubiccentimeterLazy = null;
        this.kilogrampercubicmeterLazy = null;
        this.microgrampercubicmeterLazy = null;
        this.picogrampermilliliterLazy = null;
        this.nanogrampermilliliterLazy = null;
        this.microgrampermilliliterLazy = null;
        this.centigrampermilliliterLazy = null;
        this.decigrampermilliliterLazy = null;
        this.picogramperdeciliterLazy = null;
        this.nanogramperdeciliterLazy = null;
        this.microgramperdeciliterLazy = null;
        this.centigramperdeciliterLazy = null;
        this.decigramperdeciliterLazy = null;
        this.picogramperliterLazy = null;
        this.nanogramperliterLazy = null;
        this.microgramperliterLazy = null;
        this.centigramperliterLazy = null;
        this.decigramperliterLazy = null;
        this.kilogramperliterLazy = null;
        this.kilopoundpercubicinchLazy = null;
        this.kilopoundpercubicfootLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerCubicMillimeter() {
        if (this.gramspercubicmillimeterLazy !== null) {
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMillimeter);
    }
    get GramsPerCubicCentimeter() {
        if (this.gramspercubiccentimeterLazy !== null) {
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicCentimeter);
    }
    get GramsPerCubicMeter() {
        if (this.gramspercubicmeterLazy !== null) {
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerCubicMeter);
    }
    get GramsPerMilliliter() {
        if (this.gramspermilliliterLazy !== null) {
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerMilliliter);
    }
    get GramsPerDeciliter() {
        if (this.gramsperdeciliterLazy !== null) {
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerDeciliter);
    }
    get GramsPerLiter() {
        if (this.gramsperliterLazy !== null) {
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(MassConcentrationUnits.GramsPerLiter);
    }
    get TonnesPerCubicMillimeter() {
        if (this.tonnespercubicmillimeterLazy !== null) {
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMillimeter);
    }
    get TonnesPerCubicCentimeter() {
        if (this.tonnespercubiccentimeterLazy !== null) {
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicCentimeter);
    }
    get TonnesPerCubicMeter() {
        if (this.tonnespercubicmeterLazy !== null) {
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.TonnesPerCubicMeter);
    }
    get PoundsPerCubicInch() {
        if (this.poundspercubicinchLazy !== null) {
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicInch);
    }
    get PoundsPerCubicFoot() {
        if (this.poundspercubicfootLazy !== null) {
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerCubicFoot);
    }
    get SlugsPerCubicFoot() {
        if (this.slugspercubicfootLazy !== null) {
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(MassConcentrationUnits.SlugsPerCubicFoot);
    }
    get PoundsPerUSGallon() {
        if (this.poundsperusgallonLazy !== null) {
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerUSGallon);
    }
    get PoundsPerImperialGallon() {
        if (this.poundsperimperialgallonLazy !== null) {
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(MassConcentrationUnits.PoundsPerImperialGallon);
    }
    get KilogramPerCubicMillimeter() {
        if (this.kilogrampercubicmillimeterLazy !== null) {
            return this.kilogrampercubicmillimeterLazy;
        }
        return this.kilogrampercubicmillimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerCubicMillimeter);
    }
    get KilogramPerCubicCentimeter() {
        if (this.kilogrampercubiccentimeterLazy !== null) {
            return this.kilogrampercubiccentimeterLazy;
        }
        return this.kilogrampercubiccentimeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerCubicCentimeter);
    }
    get KilogramPerCubicMeter() {
        if (this.kilogrampercubicmeterLazy !== null) {
            return this.kilogrampercubicmeterLazy;
        }
        return this.kilogrampercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerCubicMeter);
    }
    get MicrogramPerCubicMeter() {
        if (this.microgrampercubicmeterLazy !== null) {
            return this.microgrampercubicmeterLazy;
        }
        return this.microgrampercubicmeterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerCubicMeter);
    }
    get PicogramPerMilliliter() {
        if (this.picogrampermilliliterLazy !== null) {
            return this.picogrampermilliliterLazy;
        }
        return this.picogrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramPerMilliliter);
    }
    get NanogramPerMilliliter() {
        if (this.nanogrampermilliliterLazy !== null) {
            return this.nanogrampermilliliterLazy;
        }
        return this.nanogrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramPerMilliliter);
    }
    get MicrogramPerMilliliter() {
        if (this.microgrampermilliliterLazy !== null) {
            return this.microgrampermilliliterLazy;
        }
        return this.microgrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerMilliliter);
    }
    get CentigramPerMilliliter() {
        if (this.centigrampermilliliterLazy !== null) {
            return this.centigrampermilliliterLazy;
        }
        return this.centigrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramPerMilliliter);
    }
    get DecigramPerMilliliter() {
        if (this.decigrampermilliliterLazy !== null) {
            return this.decigrampermilliliterLazy;
        }
        return this.decigrampermilliliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramPerMilliliter);
    }
    get PicogramPerDeciliter() {
        if (this.picogramperdeciliterLazy !== null) {
            return this.picogramperdeciliterLazy;
        }
        return this.picogramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramPerDeciliter);
    }
    get NanogramPerDeciliter() {
        if (this.nanogramperdeciliterLazy !== null) {
            return this.nanogramperdeciliterLazy;
        }
        return this.nanogramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramPerDeciliter);
    }
    get MicrogramPerDeciliter() {
        if (this.microgramperdeciliterLazy !== null) {
            return this.microgramperdeciliterLazy;
        }
        return this.microgramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerDeciliter);
    }
    get CentigramPerDeciliter() {
        if (this.centigramperdeciliterLazy !== null) {
            return this.centigramperdeciliterLazy;
        }
        return this.centigramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramPerDeciliter);
    }
    get DecigramPerDeciliter() {
        if (this.decigramperdeciliterLazy !== null) {
            return this.decigramperdeciliterLazy;
        }
        return this.decigramperdeciliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramPerDeciliter);
    }
    get PicogramPerLiter() {
        if (this.picogramperliterLazy !== null) {
            return this.picogramperliterLazy;
        }
        return this.picogramperliterLazy = this.convertFromBase(MassConcentrationUnits.PicogramPerLiter);
    }
    get NanogramPerLiter() {
        if (this.nanogramperliterLazy !== null) {
            return this.nanogramperliterLazy;
        }
        return this.nanogramperliterLazy = this.convertFromBase(MassConcentrationUnits.NanogramPerLiter);
    }
    get MicrogramPerLiter() {
        if (this.microgramperliterLazy !== null) {
            return this.microgramperliterLazy;
        }
        return this.microgramperliterLazy = this.convertFromBase(MassConcentrationUnits.MicrogramPerLiter);
    }
    get CentigramPerLiter() {
        if (this.centigramperliterLazy !== null) {
            return this.centigramperliterLazy;
        }
        return this.centigramperliterLazy = this.convertFromBase(MassConcentrationUnits.CentigramPerLiter);
    }
    get DecigramPerLiter() {
        if (this.decigramperliterLazy !== null) {
            return this.decigramperliterLazy;
        }
        return this.decigramperliterLazy = this.convertFromBase(MassConcentrationUnits.DecigramPerLiter);
    }
    get KilogramPerLiter() {
        if (this.kilogramperliterLazy !== null) {
            return this.kilogramperliterLazy;
        }
        return this.kilogramperliterLazy = this.convertFromBase(MassConcentrationUnits.KilogramPerLiter);
    }
    get KilopoundPerCubicInch() {
        if (this.kilopoundpercubicinchLazy !== null) {
            return this.kilopoundpercubicinchLazy;
        }
        return this.kilopoundpercubicinchLazy = this.convertFromBase(MassConcentrationUnits.KilopoundPerCubicInch);
    }
    get KilopoundPerCubicFoot() {
        if (this.kilopoundpercubicfootLazy !== null) {
            return this.kilopoundpercubicfootLazy;
        }
        return this.kilopoundpercubicfootLazy = this.convertFromBase(MassConcentrationUnits.KilopoundPerCubicFoot);
    }
    static FromGramsPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMillimeter);
    }
    static FromGramsPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicCentimeter);
    }
    static FromGramsPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerCubicMeter);
    }
    static FromGramsPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerMilliliter);
    }
    static FromGramsPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerDeciliter);
    }
    static FromGramsPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.GramsPerLiter);
    }
    static FromTonnesPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMillimeter);
    }
    static FromTonnesPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicCentimeter);
    }
    static FromTonnesPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.TonnesPerCubicMeter);
    }
    static FromPoundsPerCubicInch(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicInch);
    }
    static FromPoundsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerCubicFoot);
    }
    static FromSlugsPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.SlugsPerCubicFoot);
    }
    static FromPoundsPerUSGallon(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerUSGallon);
    }
    static FromPoundsPerImperialGallon(value) {
        return new MassConcentration(value, MassConcentrationUnits.PoundsPerImperialGallon);
    }
    static FromKilogramPerCubicMillimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerCubicMillimeter);
    }
    static FromKilogramPerCubicCentimeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerCubicCentimeter);
    }
    static FromKilogramPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerCubicMeter);
    }
    static FromMicrogramPerCubicMeter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerCubicMeter);
    }
    static FromPicogramPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.PicogramPerMilliliter);
    }
    static FromNanogramPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.NanogramPerMilliliter);
    }
    static FromMicrogramPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerMilliliter);
    }
    static FromCentigramPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.CentigramPerMilliliter);
    }
    static FromDecigramPerMilliliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.DecigramPerMilliliter);
    }
    static FromPicogramPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.PicogramPerDeciliter);
    }
    static FromNanogramPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.NanogramPerDeciliter);
    }
    static FromMicrogramPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerDeciliter);
    }
    static FromCentigramPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.CentigramPerDeciliter);
    }
    static FromDecigramPerDeciliter(value) {
        return new MassConcentration(value, MassConcentrationUnits.DecigramPerDeciliter);
    }
    static FromPicogramPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.PicogramPerLiter);
    }
    static FromNanogramPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.NanogramPerLiter);
    }
    static FromMicrogramPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.MicrogramPerLiter);
    }
    static FromCentigramPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.CentigramPerLiter);
    }
    static FromDecigramPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.DecigramPerLiter);
    }
    static FromKilogramPerLiter(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilogramPerLiter);
    }
    static FromKilopoundPerCubicInch(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundPerCubicInch);
    }
    static FromKilopoundPerCubicFoot(value) {
        return new MassConcentration(value, MassConcentrationUnits.KilopoundPerCubicFoot);
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
            case MassConcentrationUnits.KilogramPerCubicMillimeter:
                return (this.value * 1e-6) / 1000;
            case MassConcentrationUnits.KilogramPerCubicCentimeter:
                return (this.value * 1e-3) / 1000;
            case MassConcentrationUnits.KilogramPerCubicMeter:
                return (this.value * 1e3) / 1000;
            case MassConcentrationUnits.MicrogramPerCubicMeter:
                return (this.value * 1e3) / 0.000001;
            case MassConcentrationUnits.PicogramPerMilliliter:
                return (this.value * 1e-3) / 1e-12;
            case MassConcentrationUnits.NanogramPerMilliliter:
                return (this.value * 1e-3) / 1e-9;
            case MassConcentrationUnits.MicrogramPerMilliliter:
                return (this.value * 1e-3) / 0.000001;
            case MassConcentrationUnits.CentigramPerMilliliter:
                return (this.value * 1e-3) / 0.01;
            case MassConcentrationUnits.DecigramPerMilliliter:
                return (this.value * 1e-3) / 0.1;
            case MassConcentrationUnits.PicogramPerDeciliter:
                return (this.value * 1e-1) / 1e-12;
            case MassConcentrationUnits.NanogramPerDeciliter:
                return (this.value * 1e-1) / 1e-9;
            case MassConcentrationUnits.MicrogramPerDeciliter:
                return (this.value * 1e-1) / 0.000001;
            case MassConcentrationUnits.CentigramPerDeciliter:
                return (this.value * 1e-1) / 0.01;
            case MassConcentrationUnits.DecigramPerDeciliter:
                return (this.value * 1e-1) / 0.1;
            case MassConcentrationUnits.PicogramPerLiter:
                return (this.value) / 1e-12;
            case MassConcentrationUnits.NanogramPerLiter:
                return (this.value) / 1e-9;
            case MassConcentrationUnits.MicrogramPerLiter:
                return (this.value) / 0.000001;
            case MassConcentrationUnits.CentigramPerLiter:
                return (this.value) / 0.01;
            case MassConcentrationUnits.DecigramPerLiter:
                return (this.value) / 0.1;
            case MassConcentrationUnits.KilogramPerLiter:
                return (this.value) / 1000;
            case MassConcentrationUnits.KilopoundPerCubicInch:
                return (this.value * 3.6127298147753e-5) / 1000;
            case MassConcentrationUnits.KilopoundPerCubicFoot:
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
            case MassConcentrationUnits.KilogramPerCubicMillimeter:
                return (value / 1e-6) * 1000;
            case MassConcentrationUnits.KilogramPerCubicCentimeter:
                return (value / 1e-3) * 1000;
            case MassConcentrationUnits.KilogramPerCubicMeter:
                return (value / 1e3) * 1000;
            case MassConcentrationUnits.MicrogramPerCubicMeter:
                return (value / 1e3) * 0.000001;
            case MassConcentrationUnits.PicogramPerMilliliter:
                return (value / 1e-3) * 1e-12;
            case MassConcentrationUnits.NanogramPerMilliliter:
                return (value / 1e-3) * 1e-9;
            case MassConcentrationUnits.MicrogramPerMilliliter:
                return (value / 1e-3) * 0.000001;
            case MassConcentrationUnits.CentigramPerMilliliter:
                return (value / 1e-3) * 0.01;
            case MassConcentrationUnits.DecigramPerMilliliter:
                return (value / 1e-3) * 0.1;
            case MassConcentrationUnits.PicogramPerDeciliter:
                return (value / 1e-1) * 1e-12;
            case MassConcentrationUnits.NanogramPerDeciliter:
                return (value / 1e-1) * 1e-9;
            case MassConcentrationUnits.MicrogramPerDeciliter:
                return (value / 1e-1) * 0.000001;
            case MassConcentrationUnits.CentigramPerDeciliter:
                return (value / 1e-1) * 0.01;
            case MassConcentrationUnits.DecigramPerDeciliter:
                return (value / 1e-1) * 0.1;
            case MassConcentrationUnits.PicogramPerLiter:
                return (value) * 1e-12;
            case MassConcentrationUnits.NanogramPerLiter:
                return (value) * 1e-9;
            case MassConcentrationUnits.MicrogramPerLiter:
                return (value) * 0.000001;
            case MassConcentrationUnits.CentigramPerLiter:
                return (value) * 0.01;
            case MassConcentrationUnits.DecigramPerLiter:
                return (value) * 0.1;
            case MassConcentrationUnits.KilogramPerLiter:
                return (value) * 1000;
            case MassConcentrationUnits.KilopoundPerCubicInch:
                return (value / 3.6127298147753e-5) * 1000;
            case MassConcentrationUnits.KilopoundPerCubicFoot:
                return (value / 0.062427961) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassConcentrationUnits.KilogramPerCubicMeter) {
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
            case MassConcentrationUnits.KilogramPerCubicMillimeter:
                return this.KilogramPerCubicMillimeter + ` g/mm³`;
            case MassConcentrationUnits.KilogramPerCubicCentimeter:
                return this.KilogramPerCubicCentimeter + ` g/cm³`;
            case MassConcentrationUnits.KilogramPerCubicMeter:
                return this.KilogramPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.MicrogramPerCubicMeter:
                return this.MicrogramPerCubicMeter + ` g/m³`;
            case MassConcentrationUnits.PicogramPerMilliliter:
                return this.PicogramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.NanogramPerMilliliter:
                return this.NanogramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.MicrogramPerMilliliter:
                return this.MicrogramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.CentigramPerMilliliter:
                return this.CentigramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.DecigramPerMilliliter:
                return this.DecigramPerMilliliter + ` g/mL`;
            case MassConcentrationUnits.PicogramPerDeciliter:
                return this.PicogramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.NanogramPerDeciliter:
                return this.NanogramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.MicrogramPerDeciliter:
                return this.MicrogramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.CentigramPerDeciliter:
                return this.CentigramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.DecigramPerDeciliter:
                return this.DecigramPerDeciliter + ` g/dL`;
            case MassConcentrationUnits.PicogramPerLiter:
                return this.PicogramPerLiter + ` g/L`;
            case MassConcentrationUnits.NanogramPerLiter:
                return this.NanogramPerLiter + ` g/L`;
            case MassConcentrationUnits.MicrogramPerLiter:
                return this.MicrogramPerLiter + ` g/L`;
            case MassConcentrationUnits.CentigramPerLiter:
                return this.CentigramPerLiter + ` g/L`;
            case MassConcentrationUnits.DecigramPerLiter:
                return this.DecigramPerLiter + ` g/L`;
            case MassConcentrationUnits.KilogramPerLiter:
                return this.KilogramPerLiter + ` g/L`;
            case MassConcentrationUnits.KilopoundPerCubicInch:
                return this.KilopoundPerCubicInch + ` lb/in³`;
            case MassConcentrationUnits.KilopoundPerCubicFoot:
                return this.KilopoundPerCubicFoot + ` lb/ft³`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassConcentration = MassConcentration;
//# sourceMappingURL=massconcentration.g.js.map