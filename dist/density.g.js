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
    DensityUnits[DensityUnits["KilogramsPerCubicMillimeter"] = 15] = "KilogramsPerCubicMillimeter";
    DensityUnits[DensityUnits["KilogramsPerCubicCentimeter"] = 16] = "KilogramsPerCubicCentimeter";
    DensityUnits[DensityUnits["KilogramsPerCubicMeter"] = 17] = "KilogramsPerCubicMeter";
    DensityUnits[DensityUnits["MicrogramsPerCubicMeter"] = 18] = "MicrogramsPerCubicMeter";
    DensityUnits[DensityUnits["KilopoundsPerCubicInch"] = 19] = "KilopoundsPerCubicInch";
    DensityUnits[DensityUnits["KilopoundsPerCubicFoot"] = 20] = "KilopoundsPerCubicFoot";
    DensityUnits[DensityUnits["PicogramsPerLiter"] = 21] = "PicogramsPerLiter";
    DensityUnits[DensityUnits["NanogramsPerLiter"] = 22] = "NanogramsPerLiter";
    DensityUnits[DensityUnits["MicrogramsPerLiter"] = 23] = "MicrogramsPerLiter";
    DensityUnits[DensityUnits["CentigramsPerLiter"] = 24] = "CentigramsPerLiter";
    DensityUnits[DensityUnits["DecigramsPerLiter"] = 25] = "DecigramsPerLiter";
    DensityUnits[DensityUnits["PicogramsPerDeciLiter"] = 26] = "PicogramsPerDeciLiter";
    DensityUnits[DensityUnits["NanogramsPerDeciLiter"] = 27] = "NanogramsPerDeciLiter";
    DensityUnits[DensityUnits["MicrogramsPerDeciLiter"] = 28] = "MicrogramsPerDeciLiter";
    DensityUnits[DensityUnits["CentigramsPerDeciLiter"] = 29] = "CentigramsPerDeciLiter";
    DensityUnits[DensityUnits["DecigramsPerDeciLiter"] = 30] = "DecigramsPerDeciLiter";
    DensityUnits[DensityUnits["PicogramsPerMilliliter"] = 31] = "PicogramsPerMilliliter";
    DensityUnits[DensityUnits["NanogramsPerMilliliter"] = 32] = "NanogramsPerMilliliter";
    DensityUnits[DensityUnits["MicrogramsPerMilliliter"] = 33] = "MicrogramsPerMilliliter";
    DensityUnits[DensityUnits["CentigramsPerMilliliter"] = 34] = "CentigramsPerMilliliter";
    DensityUnits[DensityUnits["DecigramsPerMilliliter"] = 35] = "DecigramsPerMilliliter";
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
    get KilogramsPerCubicMillimeter() {
        if (this.kilogramspercubicmillimeterLazy !== null) {
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMillimeter);
    }
    get KilogramsPerCubicCentimeter() {
        if (this.kilogramspercubiccentimeterLazy !== null) {
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicCentimeter);
    }
    get KilogramsPerCubicMeter() {
        if (this.kilogramspercubicmeterLazy !== null) {
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(DensityUnits.KilogramsPerCubicMeter);
    }
    get MicrogramsPerCubicMeter() {
        if (this.microgramspercubicmeterLazy !== null) {
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(DensityUnits.MicrogramsPerCubicMeter);
    }
    get KilopoundsPerCubicInch() {
        if (this.kilopoundspercubicinchLazy !== null) {
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicInch);
    }
    get KilopoundsPerCubicFoot() {
        if (this.kilopoundspercubicfootLazy !== null) {
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(DensityUnits.KilopoundsPerCubicFoot);
    }
    get PicogramsPerLiter() {
        if (this.picogramsperliterLazy !== null) {
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(DensityUnits.PicogramsPerLiter);
    }
    get NanogramsPerLiter() {
        if (this.nanogramsperliterLazy !== null) {
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(DensityUnits.NanogramsPerLiter);
    }
    get MicrogramsPerLiter() {
        if (this.microgramsperliterLazy !== null) {
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerLiter);
    }
    get CentigramsPerLiter() {
        if (this.centigramsperliterLazy !== null) {
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(DensityUnits.CentigramsPerLiter);
    }
    get DecigramsPerLiter() {
        if (this.decigramsperliterLazy !== null) {
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(DensityUnits.DecigramsPerLiter);
    }
    get PicogramsPerDeciLiter() {
        if (this.picogramsperdeciliterLazy !== null) {
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.PicogramsPerDeciLiter);
    }
    get NanogramsPerDeciLiter() {
        if (this.nanogramsperdeciliterLazy !== null) {
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.NanogramsPerDeciLiter);
    }
    get MicrogramsPerDeciLiter() {
        if (this.microgramsperdeciliterLazy !== null) {
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerDeciLiter);
    }
    get CentigramsPerDeciLiter() {
        if (this.centigramsperdeciliterLazy !== null) {
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.CentigramsPerDeciLiter);
    }
    get DecigramsPerDeciLiter() {
        if (this.decigramsperdeciliterLazy !== null) {
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.DecigramsPerDeciLiter);
    }
    get PicogramsPerMilliliter() {
        if (this.picogramspermilliliterLazy !== null) {
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(DensityUnits.PicogramsPerMilliliter);
    }
    get NanogramsPerMilliliter() {
        if (this.nanogramspermilliliterLazy !== null) {
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(DensityUnits.NanogramsPerMilliliter);
    }
    get MicrogramsPerMilliliter() {
        if (this.microgramspermilliliterLazy !== null) {
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(DensityUnits.MicrogramsPerMilliliter);
    }
    get CentigramsPerMilliliter() {
        if (this.centigramspermilliliterLazy !== null) {
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(DensityUnits.CentigramsPerMilliliter);
    }
    get DecigramsPerMilliliter() {
        if (this.decigramspermilliliterLazy !== null) {
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(DensityUnits.DecigramsPerMilliliter);
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
    static FromKilogramsPerCubicMillimeter(value) {
        return new Density(value, DensityUnits.KilogramsPerCubicMillimeter);
    }
    static FromKilogramsPerCubicCentimeter(value) {
        return new Density(value, DensityUnits.KilogramsPerCubicCentimeter);
    }
    static FromKilogramsPerCubicMeter(value) {
        return new Density(value, DensityUnits.KilogramsPerCubicMeter);
    }
    static FromMicrogramsPerCubicMeter(value) {
        return new Density(value, DensityUnits.MicrogramsPerCubicMeter);
    }
    static FromKilopoundsPerCubicInch(value) {
        return new Density(value, DensityUnits.KilopoundsPerCubicInch);
    }
    static FromKilopoundsPerCubicFoot(value) {
        return new Density(value, DensityUnits.KilopoundsPerCubicFoot);
    }
    static FromPicogramsPerLiter(value) {
        return new Density(value, DensityUnits.PicogramsPerLiter);
    }
    static FromNanogramsPerLiter(value) {
        return new Density(value, DensityUnits.NanogramsPerLiter);
    }
    static FromMicrogramsPerLiter(value) {
        return new Density(value, DensityUnits.MicrogramsPerLiter);
    }
    static FromCentigramsPerLiter(value) {
        return new Density(value, DensityUnits.CentigramsPerLiter);
    }
    static FromDecigramsPerLiter(value) {
        return new Density(value, DensityUnits.DecigramsPerLiter);
    }
    static FromPicogramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.PicogramsPerDeciLiter);
    }
    static FromNanogramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.NanogramsPerDeciLiter);
    }
    static FromMicrogramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.MicrogramsPerDeciLiter);
    }
    static FromCentigramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.CentigramsPerDeciLiter);
    }
    static FromDecigramsPerDeciLiter(value) {
        return new Density(value, DensityUnits.DecigramsPerDeciLiter);
    }
    static FromPicogramsPerMilliliter(value) {
        return new Density(value, DensityUnits.PicogramsPerMilliliter);
    }
    static FromNanogramsPerMilliliter(value) {
        return new Density(value, DensityUnits.NanogramsPerMilliliter);
    }
    static FromMicrogramsPerMilliliter(value) {
        return new Density(value, DensityUnits.MicrogramsPerMilliliter);
    }
    static FromCentigramsPerMilliliter(value) {
        return new Density(value, DensityUnits.CentigramsPerMilliliter);
    }
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
                return this.KilogramsPerCubicMillimeter + ` g/mm³`;
            case DensityUnits.KilogramsPerCubicCentimeter:
                return this.KilogramsPerCubicCentimeter + ` g/cm³`;
            case DensityUnits.KilogramsPerCubicMeter:
                return this.KilogramsPerCubicMeter + ` g/m³`;
            case DensityUnits.MicrogramsPerCubicMeter:
                return this.MicrogramsPerCubicMeter + ` g/m³`;
            case DensityUnits.KilopoundsPerCubicInch:
                return this.KilopoundsPerCubicInch + ` lb/in³`;
            case DensityUnits.KilopoundsPerCubicFoot:
                return this.KilopoundsPerCubicFoot + ` lb/ft³`;
            case DensityUnits.PicogramsPerLiter:
                return this.PicogramsPerLiter + ` g/L`;
            case DensityUnits.NanogramsPerLiter:
                return this.NanogramsPerLiter + ` g/L`;
            case DensityUnits.MicrogramsPerLiter:
                return this.MicrogramsPerLiter + ` g/L`;
            case DensityUnits.CentigramsPerLiter:
                return this.CentigramsPerLiter + ` g/L`;
            case DensityUnits.DecigramsPerLiter:
                return this.DecigramsPerLiter + ` g/L`;
            case DensityUnits.PicogramsPerDeciLiter:
                return this.PicogramsPerDeciLiter + ` g/dl`;
            case DensityUnits.NanogramsPerDeciLiter:
                return this.NanogramsPerDeciLiter + ` g/dl`;
            case DensityUnits.MicrogramsPerDeciLiter:
                return this.MicrogramsPerDeciLiter + ` g/dl`;
            case DensityUnits.CentigramsPerDeciLiter:
                return this.CentigramsPerDeciLiter + ` g/dl`;
            case DensityUnits.DecigramsPerDeciLiter:
                return this.DecigramsPerDeciLiter + ` g/dl`;
            case DensityUnits.PicogramsPerMilliliter:
                return this.PicogramsPerMilliliter + ` g/ml`;
            case DensityUnits.NanogramsPerMilliliter:
                return this.NanogramsPerMilliliter + ` g/ml`;
            case DensityUnits.MicrogramsPerMilliliter:
                return this.MicrogramsPerMilliliter + ` g/ml`;
            case DensityUnits.CentigramsPerMilliliter:
                return this.CentigramsPerMilliliter + ` g/ml`;
            case DensityUnits.DecigramsPerMilliliter:
                return this.DecigramsPerMilliliter + ` g/ml`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.Density = Density;
//# sourceMappingURL=density.g.js.map