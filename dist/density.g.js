"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DensityUnits;
(function (DensityUnits) {
    DensityUnits[DensityUnits["GramsPerCubicMillimeter"] = 0] = "GramsPerCubicMillimeter";
    DensityUnits[DensityUnits["GramsPerCubicCentimeter"] = 1] = "GramsPerCubicCentimeter";
    DensityUnits[DensityUnits["GramsPerCubicMeter"] = 2] = "GramsPerCubicMeter";
    DensityUnits[DensityUnits["PoundsPerCubicInch"] = 3] = "PoundsPerCubicInch";
    DensityUnits[DensityUnits["PoundsPerCubicFoot"] = 4] = "PoundsPerCubicFoot";
    DensityUnits[DensityUnits["TonnesPerCubicMillimeter"] = 5] = "TonnesPerCubicMillimeter";
    DensityUnits[DensityUnits["TonnesPerCubicCentimeter"] = 6] = "TonnesPerCubicCentimeter";
    DensityUnits[DensityUnits["TonnesPerCubicMeter"] = 7] = "TonnesPerCubicMeter";
    DensityUnits[DensityUnits["SlugsPerCubicFoot"] = 8] = "SlugsPerCubicFoot";
    DensityUnits[DensityUnits["GramsPerLiter"] = 9] = "GramsPerLiter";
    DensityUnits[DensityUnits["GramsPerDeciLiter"] = 10] = "GramsPerDeciLiter";
    DensityUnits[DensityUnits["GramsPerMilliliter"] = 11] = "GramsPerMilliliter";
    DensityUnits[DensityUnits["PoundsPerUSGallon"] = 12] = "PoundsPerUSGallon";
    DensityUnits[DensityUnits["PoundsPerImperialGallon"] = 13] = "PoundsPerImperialGallon";
    DensityUnits[DensityUnits["KilogramsPerLiter"] = 14] = "KilogramsPerLiter";
    DensityUnits[DensityUnits["KilogramPerCubicMillimeter"] = 15] = "KilogramPerCubicMillimeter";
    DensityUnits[DensityUnits["KilogramPerCubicCentimeter"] = 16] = "KilogramPerCubicCentimeter";
    DensityUnits[DensityUnits["KilogramPerCubicMeter"] = 17] = "KilogramPerCubicMeter";
    DensityUnits[DensityUnits["MicrogramPerCubicMeter"] = 18] = "MicrogramPerCubicMeter";
    DensityUnits[DensityUnits["KilopoundPerCubicInch"] = 19] = "KilopoundPerCubicInch";
    DensityUnits[DensityUnits["KilopoundPerCubicFoot"] = 20] = "KilopoundPerCubicFoot";
    DensityUnits[DensityUnits["PicogramPerLiter"] = 21] = "PicogramPerLiter";
    DensityUnits[DensityUnits["NanogramPerLiter"] = 22] = "NanogramPerLiter";
    DensityUnits[DensityUnits["MicrogramPerLiter"] = 23] = "MicrogramPerLiter";
    DensityUnits[DensityUnits["CentigramPerLiter"] = 24] = "CentigramPerLiter";
    DensityUnits[DensityUnits["DecigramPerLiter"] = 25] = "DecigramPerLiter";
    DensityUnits[DensityUnits["PicogramPerDeciliter"] = 26] = "PicogramPerDeciliter";
    DensityUnits[DensityUnits["NanogramPerDeciliter"] = 27] = "NanogramPerDeciliter";
    DensityUnits[DensityUnits["MicrogramPerDeciliter"] = 28] = "MicrogramPerDeciliter";
    DensityUnits[DensityUnits["CentigramPerDeciliter"] = 29] = "CentigramPerDeciliter";
    DensityUnits[DensityUnits["DecigramPerDeciliter"] = 30] = "DecigramPerDeciliter";
    DensityUnits[DensityUnits["PicogramPerMilliliter"] = 31] = "PicogramPerMilliliter";
    DensityUnits[DensityUnits["NanogramPerMilliliter"] = 32] = "NanogramPerMilliliter";
    DensityUnits[DensityUnits["MicrogramPerMilliliter"] = 33] = "MicrogramPerMilliliter";
    DensityUnits[DensityUnits["CentigramPerMilliliter"] = 34] = "CentigramPerMilliliter";
    DensityUnits[DensityUnits["DecigramPerMilliliter"] = 35] = "DecigramPerMilliliter";
})(DensityUnits = exports.DensityUnits || (exports.DensityUnits = {}));
class Density {
    constructor(value, fromUnit) {
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
        this.kilogrampercubicmillimeterLazy = null;
        this.kilogrampercubiccentimeterLazy = null;
        this.kilogrampercubicmeterLazy = null;
        this.microgrampercubicmeterLazy = null;
        this.kilopoundpercubicinchLazy = null;
        this.kilopoundpercubicfootLazy = null;
        this.picogramperliterLazy = null;
        this.nanogramperliterLazy = null;
        this.microgramperliterLazy = null;
        this.centigramperliterLazy = null;
        this.decigramperliterLazy = null;
        this.picogramperdeciliterLazy = null;
        this.nanogramperdeciliterLazy = null;
        this.microgramperdeciliterLazy = null;
        this.centigramperdeciliterLazy = null;
        this.decigramperdeciliterLazy = null;
        this.picogrampermilliliterLazy = null;
        this.nanogrampermilliliterLazy = null;
        this.microgrampermilliliterLazy = null;
        this.centigrampermilliliterLazy = null;
        this.decigrampermilliliterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerCubicMillimeter() {
        if (this.gramspercubicmillimeterLazy !== null) {
            return this.gramspercubicmillimeterLazy;
        }
        return this.gramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }
    get GramsPerCubicCentimeter() {
        if (this.gramspercubiccentimeterLazy !== null) {
            return this.gramspercubiccentimeterLazy;
        }
        return this.gramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }
    get GramsPerCubicMeter() {
        if (this.gramspercubicmeterLazy !== null) {
            return this.gramspercubicmeterLazy;
        }
        return this.gramspercubicmeterLazy = this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }
    get PoundsPerCubicInch() {
        if (this.poundspercubicinchLazy !== null) {
            return this.poundspercubicinchLazy;
        }
        return this.poundspercubicinchLazy = this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }
    get PoundsPerCubicFoot() {
        if (this.poundspercubicfootLazy !== null) {
            return this.poundspercubicfootLazy;
        }
        return this.poundspercubicfootLazy = this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }
    get TonnesPerCubicMillimeter() {
        if (this.tonnespercubicmillimeterLazy !== null) {
            return this.tonnespercubicmillimeterLazy;
        }
        return this.tonnespercubicmillimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }
    get TonnesPerCubicCentimeter() {
        if (this.tonnespercubiccentimeterLazy !== null) {
            return this.tonnespercubiccentimeterLazy;
        }
        return this.tonnespercubiccentimeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }
    get TonnesPerCubicMeter() {
        if (this.tonnespercubicmeterLazy !== null) {
            return this.tonnespercubicmeterLazy;
        }
        return this.tonnespercubicmeterLazy = this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }
    get SlugsPerCubicFoot() {
        if (this.slugspercubicfootLazy !== null) {
            return this.slugspercubicfootLazy;
        }
        return this.slugspercubicfootLazy = this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }
    get GramsPerLiter() {
        if (this.gramsperliterLazy !== null) {
            return this.gramsperliterLazy;
        }
        return this.gramsperliterLazy = this.convertFromBase(DensityUnits.GramsPerLiter);
    }
    get GramsPerDeciLiter() {
        if (this.gramsperdeciliterLazy !== null) {
            return this.gramsperdeciliterLazy;
        }
        return this.gramsperdeciliterLazy = this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }
    get GramsPerMilliliter() {
        if (this.gramspermilliliterLazy !== null) {
            return this.gramspermilliliterLazy;
        }
        return this.gramspermilliliterLazy = this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }
    get PoundsPerUSGallon() {
        if (this.poundsperusgallonLazy !== null) {
            return this.poundsperusgallonLazy;
        }
        return this.poundsperusgallonLazy = this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }
    get PoundsPerImperialGallon() {
        if (this.poundsperimperialgallonLazy !== null) {
            return this.poundsperimperialgallonLazy;
        }
        return this.poundsperimperialgallonLazy = this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }
    get KilogramsPerLiter() {
        if (this.kilogramsperliterLazy !== null) {
            return this.kilogramsperliterLazy;
        }
        return this.kilogramsperliterLazy = this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }
    get KilogramPerCubicMillimeter() {
        if (this.kilogrampercubicmillimeterLazy !== null) {
            return this.kilogrampercubicmillimeterLazy;
        }
        return this.kilogrampercubicmillimeterLazy = this.convertFromBase(DensityUnits.KilogramPerCubicMillimeter);
    }
    get KilogramPerCubicCentimeter() {
        if (this.kilogrampercubiccentimeterLazy !== null) {
            return this.kilogrampercubiccentimeterLazy;
        }
        return this.kilogrampercubiccentimeterLazy = this.convertFromBase(DensityUnits.KilogramPerCubicCentimeter);
    }
    get KilogramPerCubicMeter() {
        if (this.kilogrampercubicmeterLazy !== null) {
            return this.kilogrampercubicmeterLazy;
        }
        return this.kilogrampercubicmeterLazy = this.convertFromBase(DensityUnits.KilogramPerCubicMeter);
    }
    get MicrogramPerCubicMeter() {
        if (this.microgrampercubicmeterLazy !== null) {
            return this.microgrampercubicmeterLazy;
        }
        return this.microgrampercubicmeterLazy = this.convertFromBase(DensityUnits.MicrogramPerCubicMeter);
    }
    get KilopoundPerCubicInch() {
        if (this.kilopoundpercubicinchLazy !== null) {
            return this.kilopoundpercubicinchLazy;
        }
        return this.kilopoundpercubicinchLazy = this.convertFromBase(DensityUnits.KilopoundPerCubicInch);
    }
    get KilopoundPerCubicFoot() {
        if (this.kilopoundpercubicfootLazy !== null) {
            return this.kilopoundpercubicfootLazy;
        }
        return this.kilopoundpercubicfootLazy = this.convertFromBase(DensityUnits.KilopoundPerCubicFoot);
    }
    get PicogramPerLiter() {
        if (this.picogramperliterLazy !== null) {
            return this.picogramperliterLazy;
        }
        return this.picogramperliterLazy = this.convertFromBase(DensityUnits.PicogramPerLiter);
    }
    get NanogramPerLiter() {
        if (this.nanogramperliterLazy !== null) {
            return this.nanogramperliterLazy;
        }
        return this.nanogramperliterLazy = this.convertFromBase(DensityUnits.NanogramPerLiter);
    }
    get MicrogramPerLiter() {
        if (this.microgramperliterLazy !== null) {
            return this.microgramperliterLazy;
        }
        return this.microgramperliterLazy = this.convertFromBase(DensityUnits.MicrogramPerLiter);
    }
    get CentigramPerLiter() {
        if (this.centigramperliterLazy !== null) {
            return this.centigramperliterLazy;
        }
        return this.centigramperliterLazy = this.convertFromBase(DensityUnits.CentigramPerLiter);
    }
    get DecigramPerLiter() {
        if (this.decigramperliterLazy !== null) {
            return this.decigramperliterLazy;
        }
        return this.decigramperliterLazy = this.convertFromBase(DensityUnits.DecigramPerLiter);
    }
    get PicogramPerDeciliter() {
        if (this.picogramperdeciliterLazy !== null) {
            return this.picogramperdeciliterLazy;
        }
        return this.picogramperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramPerDeciliter);
    }
    get NanogramPerDeciliter() {
        if (this.nanogramperdeciliterLazy !== null) {
            return this.nanogramperdeciliterLazy;
        }
        return this.nanogramperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramPerDeciliter);
    }
    get MicrogramPerDeciliter() {
        if (this.microgramperdeciliterLazy !== null) {
            return this.microgramperdeciliterLazy;
        }
        return this.microgramperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramPerDeciliter);
    }
    get CentigramPerDeciliter() {
        if (this.centigramperdeciliterLazy !== null) {
            return this.centigramperdeciliterLazy;
        }
        return this.centigramperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramPerDeciliter);
    }
    get DecigramPerDeciliter() {
        if (this.decigramperdeciliterLazy !== null) {
            return this.decigramperdeciliterLazy;
        }
        return this.decigramperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramPerDeciliter);
    }
    get PicogramPerMilliliter() {
        if (this.picogrampermilliliterLazy !== null) {
            return this.picogrampermilliliterLazy;
        }
        return this.picogrampermilliliterLazy = this.convertFromBase(DensityUnits.PicogramPerMilliliter);
    }
    get NanogramPerMilliliter() {
        if (this.nanogrampermilliliterLazy !== null) {
            return this.nanogrampermilliliterLazy;
        }
        return this.nanogrampermilliliterLazy = this.convertFromBase(DensityUnits.NanogramPerMilliliter);
    }
    get MicrogramPerMilliliter() {
        if (this.microgrampermilliliterLazy !== null) {
            return this.microgrampermilliliterLazy;
        }
        return this.microgrampermilliliterLazy = this.convertFromBase(DensityUnits.MicrogramPerMilliliter);
    }
    get CentigramPerMilliliter() {
        if (this.centigrampermilliliterLazy !== null) {
            return this.centigrampermilliliterLazy;
        }
        return this.centigrampermilliliterLazy = this.convertFromBase(DensityUnits.CentigramPerMilliliter);
    }
    get DecigramPerMilliliter() {
        if (this.decigrampermilliliterLazy !== null) {
            return this.decigrampermilliliterLazy;
        }
        return this.decigrampermilliliterLazy = this.convertFromBase(DensityUnits.DecigramPerMilliliter);
    }
    static FromGramsPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.GramsPerCubicMillimeter);
    }
    static FromGramsPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.GramsPerCubicCentimeter);
    }
    static FromGramsPerCubicMeter(value) {
        return new Density(value, DensityUnits.GramsPerCubicMeter);
    }
    static FromPoundsPerCubicInch(value) {
        return new Density(value, DensityUnits.PoundsPerCubicInch);
    }
    static FromPoundsPerCubicFoot(value) {
        return new Density(value, DensityUnits.PoundsPerCubicFoot);
    }
    static FromTonnesPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.TonnesPerCubicMillimeter);
    }
    static FromTonnesPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.TonnesPerCubicCentimeter);
    }
    static FromTonnesPerCubicMeter(value) {
        return new Density(value, DensityUnits.TonnesPerCubicMeter);
    }
    static FromSlugsPerCubicFoot(value) {
        return new Density(value, DensityUnits.SlugsPerCubicFoot);
    }
    static FromGramsPerLiter(value) {
        return new Density(value, DensityUnits.GramsPerLiter);
    }
    static FromGramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.GramsPerDeciLiter);
    }
    static FromGramsPerMilliliter(value) {
        return new Density(value, DensityUnits.GramsPerMilliliter);
    }
    static FromPoundsPerUSGallon(value) {
        return new Density(value, DensityUnits.PoundsPerUSGallon);
    }
    static FromPoundsPerImperialGallon(value) {
        return new Density(value, DensityUnits.PoundsPerImperialGallon);
    }
    static FromKilogramsPerLiter(value) {
        return new Density(value, DensityUnits.KilogramsPerLiter);
    }
    static FromKilogramPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.KilogramPerCubicMillimeter);
    }
    static FromKilogramPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.KilogramPerCubicCentimeter);
    }
    static FromKilogramPerCubicMeter(value) {
        return new Density(value, DensityUnits.KilogramPerCubicMeter);
    }
    static FromMicrogramPerCubicMeter(value) {
        return new Density(value, DensityUnits.MicrogramPerCubicMeter);
    }
    static FromKilopoundPerCubicInch(value) {
        return new Density(value, DensityUnits.KilopoundPerCubicInch);
    }
    static FromKilopoundPerCubicFoot(value) {
        return new Density(value, DensityUnits.KilopoundPerCubicFoot);
    }
    static FromPicogramPerLiter(value) {
        return new Density(value, DensityUnits.PicogramPerLiter);
    }
    static FromNanogramPerLiter(value) {
        return new Density(value, DensityUnits.NanogramPerLiter);
    }
    static FromMicrogramPerLiter(value) {
        return new Density(value, DensityUnits.MicrogramPerLiter);
    }
    static FromCentigramPerLiter(value) {
        return new Density(value, DensityUnits.CentigramPerLiter);
    }
    static FromDecigramPerLiter(value) {
        return new Density(value, DensityUnits.DecigramPerLiter);
    }
    static FromPicogramPerDeciliter(value) {
        return new Density(value, DensityUnits.PicogramPerDeciliter);
    }
    static FromNanogramPerDeciliter(value) {
        return new Density(value, DensityUnits.NanogramPerDeciliter);
    }
    static FromMicrogramPerDeciliter(value) {
        return new Density(value, DensityUnits.MicrogramPerDeciliter);
    }
    static FromCentigramPerDeciliter(value) {
        return new Density(value, DensityUnits.CentigramPerDeciliter);
    }
    static FromDecigramPerDeciliter(value) {
        return new Density(value, DensityUnits.DecigramPerDeciliter);
    }
    static FromPicogramPerMilliliter(value) {
        return new Density(value, DensityUnits.PicogramPerMilliliter);
    }
    static FromNanogramPerMilliliter(value) {
        return new Density(value, DensityUnits.NanogramPerMilliliter);
    }
    static FromMicrogramPerMilliliter(value) {
        return new Density(value, DensityUnits.MicrogramPerMilliliter);
    }
    static FromCentigramPerMilliliter(value) {
        return new Density(value, DensityUnits.CentigramPerMilliliter);
    }
    static FromDecigramPerMilliliter(value) {
        return new Density(value, DensityUnits.DecigramPerMilliliter);
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
            case DensityUnits.KilogramPerCubicMillimeter:
                return (this.value * 1e-6) / 1000;
            case DensityUnits.KilogramPerCubicCentimeter:
                return (this.value * 1e-3) / 1000;
            case DensityUnits.KilogramPerCubicMeter:
                return (this.value * 1e3) / 1000;
            case DensityUnits.MicrogramPerCubicMeter:
                return (this.value * 1e3) / 0.000001;
            case DensityUnits.KilopoundPerCubicInch:
                return (this.value * 3.6127298147753e-5) / 1000;
            case DensityUnits.KilopoundPerCubicFoot:
                return (this.value * 0.062427961) / 1000;
            case DensityUnits.PicogramPerLiter:
                return (this.value * 1) / 1e-12;
            case DensityUnits.NanogramPerLiter:
                return (this.value * 1) / 1e-9;
            case DensityUnits.MicrogramPerLiter:
                return (this.value * 1) / 0.000001;
            case DensityUnits.CentigramPerLiter:
                return (this.value * 1) / 0.01;
            case DensityUnits.DecigramPerLiter:
                return (this.value * 1) / 0.1;
            case DensityUnits.PicogramPerDeciliter:
                return (this.value * 1e-1) / 1e-12;
            case DensityUnits.NanogramPerDeciliter:
                return (this.value * 1e-1) / 1e-9;
            case DensityUnits.MicrogramPerDeciliter:
                return (this.value * 1e-1) / 0.000001;
            case DensityUnits.CentigramPerDeciliter:
                return (this.value * 1e-1) / 0.01;
            case DensityUnits.DecigramPerDeciliter:
                return (this.value * 1e-1) / 0.1;
            case DensityUnits.PicogramPerMilliliter:
                return (this.value * 1e-3) / 1e-12;
            case DensityUnits.NanogramPerMilliliter:
                return (this.value * 1e-3) / 1e-9;
            case DensityUnits.MicrogramPerMilliliter:
                return (this.value * 1e-3) / 0.000001;
            case DensityUnits.CentigramPerMilliliter:
                return (this.value * 1e-3) / 0.01;
            case DensityUnits.DecigramPerMilliliter:
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
            case DensityUnits.KilogramPerCubicMillimeter:
                return (value / 1e-6) * 1000;
            case DensityUnits.KilogramPerCubicCentimeter:
                return (value / 1e-3) * 1000;
            case DensityUnits.KilogramPerCubicMeter:
                return (value / 1e3) * 1000;
            case DensityUnits.MicrogramPerCubicMeter:
                return (value / 1e3) * 0.000001;
            case DensityUnits.KilopoundPerCubicInch:
                return (value / 3.6127298147753e-5) * 1000;
            case DensityUnits.KilopoundPerCubicFoot:
                return (value / 0.062427961) * 1000;
            case DensityUnits.PicogramPerLiter:
                return (value / 1) * 1e-12;
            case DensityUnits.NanogramPerLiter:
                return (value / 1) * 1e-9;
            case DensityUnits.MicrogramPerLiter:
                return (value / 1) * 0.000001;
            case DensityUnits.CentigramPerLiter:
                return (value / 1) * 0.01;
            case DensityUnits.DecigramPerLiter:
                return (value / 1) * 0.1;
            case DensityUnits.PicogramPerDeciliter:
                return (value / 1e-1) * 1e-12;
            case DensityUnits.NanogramPerDeciliter:
                return (value / 1e-1) * 1e-9;
            case DensityUnits.MicrogramPerDeciliter:
                return (value / 1e-1) * 0.000001;
            case DensityUnits.CentigramPerDeciliter:
                return (value / 1e-1) * 0.01;
            case DensityUnits.DecigramPerDeciliter:
                return (value / 1e-1) * 0.1;
            case DensityUnits.PicogramPerMilliliter:
                return (value / 1e-3) * 1e-12;
            case DensityUnits.NanogramPerMilliliter:
                return (value / 1e-3) * 1e-9;
            case DensityUnits.MicrogramPerMilliliter:
                return (value / 1e-3) * 0.000001;
            case DensityUnits.CentigramPerMilliliter:
                return (value / 1e-3) * 0.01;
            case DensityUnits.DecigramPerMilliliter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = DensityUnits.KilogramPerCubicMeter) {
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
            case DensityUnits.KilogramPerCubicMillimeter:
                return this.KilogramPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.KilogramPerCubicCentimeter:
                return this.KilogramPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.KilogramPerCubicMeter:
                return this.KilogramPerCubicMeter + ` g/m³`;
            case DensityUnits.MicrogramPerCubicMeter:
                return this.MicrogramPerCubicMeter + ` g/m³`;
            case DensityUnits.KilopoundPerCubicInch:
                return this.KilopoundPerCubicInch + ` lb/in³`;
            case DensityUnits.KilopoundPerCubicFoot:
                return this.KilopoundPerCubicFoot + ` lb/ft³`;
            case DensityUnits.PicogramPerLiter:
                return this.PicogramPerLiter + ` g/L`;
            case DensityUnits.NanogramPerLiter:
                return this.NanogramPerLiter + ` g/L`;
            case DensityUnits.MicrogramPerLiter:
                return this.MicrogramPerLiter + ` g/L`;
            case DensityUnits.CentigramPerLiter:
                return this.CentigramPerLiter + ` g/L`;
            case DensityUnits.DecigramPerLiter:
                return this.DecigramPerLiter + ` g/L`;
            case DensityUnits.PicogramPerDeciliter:
                return this.PicogramPerDeciliter + ` g/dl`;
            case DensityUnits.NanogramPerDeciliter:
                return this.NanogramPerDeciliter + ` g/dl`;
            case DensityUnits.MicrogramPerDeciliter:
                return this.MicrogramPerDeciliter + ` g/dl`;
            case DensityUnits.CentigramPerDeciliter:
                return this.CentigramPerDeciliter + ` g/dl`;
            case DensityUnits.DecigramPerDeciliter:
                return this.DecigramPerDeciliter + ` g/dl`;
            case DensityUnits.PicogramPerMilliliter:
                return this.PicogramPerMilliliter + ` g/ml`;
            case DensityUnits.NanogramPerMilliliter:
                return this.NanogramPerMilliliter + ` g/ml`;
            case DensityUnits.MicrogramPerMilliliter:
                return this.MicrogramPerMilliliter + ` g/ml`;
            case DensityUnits.CentigramPerMilliliter:
                return this.CentigramPerMilliliter + ` g/ml`;
            case DensityUnits.DecigramPerMilliliter:
                return this.DecigramPerMilliliter + ` g/ml`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Density = Density;
//# sourceMappingURL=density.g.js.map