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
    DensityUnits[DensityUnits["Kilogramspercubicmillimeter"] = 15] = "Kilogramspercubicmillimeter";
    DensityUnits[DensityUnits["Kilogramspercubiccentimeter"] = 16] = "Kilogramspercubiccentimeter";
    DensityUnits[DensityUnits["Kilogramspercubicmeter"] = 17] = "Kilogramspercubicmeter";
    DensityUnits[DensityUnits["Microgramspercubicmeter"] = 18] = "Microgramspercubicmeter";
    DensityUnits[DensityUnits["Kilopoundspercubicinch"] = 19] = "Kilopoundspercubicinch";
    DensityUnits[DensityUnits["Kilopoundspercubicfoot"] = 20] = "Kilopoundspercubicfoot";
    DensityUnits[DensityUnits["Picogramsperliter"] = 21] = "Picogramsperliter";
    DensityUnits[DensityUnits["Nanogramsperliter"] = 22] = "Nanogramsperliter";
    DensityUnits[DensityUnits["Microgramsperliter"] = 23] = "Microgramsperliter";
    DensityUnits[DensityUnits["Centigramsperliter"] = 24] = "Centigramsperliter";
    DensityUnits[DensityUnits["Decigramsperliter"] = 25] = "Decigramsperliter";
    DensityUnits[DensityUnits["Picogramsperdeciliter"] = 26] = "Picogramsperdeciliter";
    DensityUnits[DensityUnits["Nanogramsperdeciliter"] = 27] = "Nanogramsperdeciliter";
    DensityUnits[DensityUnits["Microgramsperdeciliter"] = 28] = "Microgramsperdeciliter";
    DensityUnits[DensityUnits["Centigramsperdeciliter"] = 29] = "Centigramsperdeciliter";
    DensityUnits[DensityUnits["Decigramsperdeciliter"] = 30] = "Decigramsperdeciliter";
    DensityUnits[DensityUnits["Picogramspermilliliter"] = 31] = "Picogramspermilliliter";
    DensityUnits[DensityUnits["Nanogramspermilliliter"] = 32] = "Nanogramspermilliliter";
    DensityUnits[DensityUnits["Microgramspermilliliter"] = 33] = "Microgramspermilliliter";
    DensityUnits[DensityUnits["Centigramspermilliliter"] = 34] = "Centigramspermilliliter";
    DensityUnits[DensityUnits["Decigramspermilliliter"] = 35] = "Decigramspermilliliter";
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
    get Kilogramspercubicmillimeter() {
        if (this.kilogramspercubicmillimeterLazy !== null) {
            return this.kilogramspercubicmillimeterLazy;
        }
        return this.kilogramspercubicmillimeterLazy = this.convertFromBase(DensityUnits.Kilogramspercubicmillimeter);
    }
    get Kilogramspercubiccentimeter() {
        if (this.kilogramspercubiccentimeterLazy !== null) {
            return this.kilogramspercubiccentimeterLazy;
        }
        return this.kilogramspercubiccentimeterLazy = this.convertFromBase(DensityUnits.Kilogramspercubiccentimeter);
    }
    get Kilogramspercubicmeter() {
        if (this.kilogramspercubicmeterLazy !== null) {
            return this.kilogramspercubicmeterLazy;
        }
        return this.kilogramspercubicmeterLazy = this.convertFromBase(DensityUnits.Kilogramspercubicmeter);
    }
    get Microgramspercubicmeter() {
        if (this.microgramspercubicmeterLazy !== null) {
            return this.microgramspercubicmeterLazy;
        }
        return this.microgramspercubicmeterLazy = this.convertFromBase(DensityUnits.Microgramspercubicmeter);
    }
    get Kilopoundspercubicinch() {
        if (this.kilopoundspercubicinchLazy !== null) {
            return this.kilopoundspercubicinchLazy;
        }
        return this.kilopoundspercubicinchLazy = this.convertFromBase(DensityUnits.Kilopoundspercubicinch);
    }
    get Kilopoundspercubicfoot() {
        if (this.kilopoundspercubicfootLazy !== null) {
            return this.kilopoundspercubicfootLazy;
        }
        return this.kilopoundspercubicfootLazy = this.convertFromBase(DensityUnits.Kilopoundspercubicfoot);
    }
    get Picogramsperliter() {
        if (this.picogramsperliterLazy !== null) {
            return this.picogramsperliterLazy;
        }
        return this.picogramsperliterLazy = this.convertFromBase(DensityUnits.Picogramsperliter);
    }
    get Nanogramsperliter() {
        if (this.nanogramsperliterLazy !== null) {
            return this.nanogramsperliterLazy;
        }
        return this.nanogramsperliterLazy = this.convertFromBase(DensityUnits.Nanogramsperliter);
    }
    get Microgramsperliter() {
        if (this.microgramsperliterLazy !== null) {
            return this.microgramsperliterLazy;
        }
        return this.microgramsperliterLazy = this.convertFromBase(DensityUnits.Microgramsperliter);
    }
    get Centigramsperliter() {
        if (this.centigramsperliterLazy !== null) {
            return this.centigramsperliterLazy;
        }
        return this.centigramsperliterLazy = this.convertFromBase(DensityUnits.Centigramsperliter);
    }
    get Decigramsperliter() {
        if (this.decigramsperliterLazy !== null) {
            return this.decigramsperliterLazy;
        }
        return this.decigramsperliterLazy = this.convertFromBase(DensityUnits.Decigramsperliter);
    }
    get Picogramsperdeciliter() {
        if (this.picogramsperdeciliterLazy !== null) {
            return this.picogramsperdeciliterLazy;
        }
        return this.picogramsperdeciliterLazy = this.convertFromBase(DensityUnits.Picogramsperdeciliter);
    }
    get Nanogramsperdeciliter() {
        if (this.nanogramsperdeciliterLazy !== null) {
            return this.nanogramsperdeciliterLazy;
        }
        return this.nanogramsperdeciliterLazy = this.convertFromBase(DensityUnits.Nanogramsperdeciliter);
    }
    get Microgramsperdeciliter() {
        if (this.microgramsperdeciliterLazy !== null) {
            return this.microgramsperdeciliterLazy;
        }
        return this.microgramsperdeciliterLazy = this.convertFromBase(DensityUnits.Microgramsperdeciliter);
    }
    get Centigramsperdeciliter() {
        if (this.centigramsperdeciliterLazy !== null) {
            return this.centigramsperdeciliterLazy;
        }
        return this.centigramsperdeciliterLazy = this.convertFromBase(DensityUnits.Centigramsperdeciliter);
    }
    get Decigramsperdeciliter() {
        if (this.decigramsperdeciliterLazy !== null) {
            return this.decigramsperdeciliterLazy;
        }
        return this.decigramsperdeciliterLazy = this.convertFromBase(DensityUnits.Decigramsperdeciliter);
    }
    get Picogramspermilliliter() {
        if (this.picogramspermilliliterLazy !== null) {
            return this.picogramspermilliliterLazy;
        }
        return this.picogramspermilliliterLazy = this.convertFromBase(DensityUnits.Picogramspermilliliter);
    }
    get Nanogramspermilliliter() {
        if (this.nanogramspermilliliterLazy !== null) {
            return this.nanogramspermilliliterLazy;
        }
        return this.nanogramspermilliliterLazy = this.convertFromBase(DensityUnits.Nanogramspermilliliter);
    }
    get Microgramspermilliliter() {
        if (this.microgramspermilliliterLazy !== null) {
            return this.microgramspermilliliterLazy;
        }
        return this.microgramspermilliliterLazy = this.convertFromBase(DensityUnits.Microgramspermilliliter);
    }
    get Centigramspermilliliter() {
        if (this.centigramspermilliliterLazy !== null) {
            return this.centigramspermilliliterLazy;
        }
        return this.centigramspermilliliterLazy = this.convertFromBase(DensityUnits.Centigramspermilliliter);
    }
    get Decigramspermilliliter() {
        if (this.decigramspermilliliterLazy !== null) {
            return this.decigramspermilliliterLazy;
        }
        return this.decigramspermilliliterLazy = this.convertFromBase(DensityUnits.Decigramspermilliliter);
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
    static FromKilogramspercubicmillimeter(value) {
        return new Density(value, DensityUnits.Kilogramspercubicmillimeter);
    }
    static FromKilogramspercubiccentimeter(value) {
        return new Density(value, DensityUnits.Kilogramspercubiccentimeter);
    }
    static FromKilogramspercubicmeter(value) {
        return new Density(value, DensityUnits.Kilogramspercubicmeter);
    }
    static FromMicrogramspercubicmeter(value) {
        return new Density(value, DensityUnits.Microgramspercubicmeter);
    }
    static FromKilopoundspercubicinch(value) {
        return new Density(value, DensityUnits.Kilopoundspercubicinch);
    }
    static FromKilopoundspercubicfoot(value) {
        return new Density(value, DensityUnits.Kilopoundspercubicfoot);
    }
    static FromPicogramsperliter(value) {
        return new Density(value, DensityUnits.Picogramsperliter);
    }
    static FromNanogramsperliter(value) {
        return new Density(value, DensityUnits.Nanogramsperliter);
    }
    static FromMicrogramsperliter(value) {
        return new Density(value, DensityUnits.Microgramsperliter);
    }
    static FromCentigramsperliter(value) {
        return new Density(value, DensityUnits.Centigramsperliter);
    }
    static FromDecigramsperliter(value) {
        return new Density(value, DensityUnits.Decigramsperliter);
    }
    static FromPicogramsperdeciliter(value) {
        return new Density(value, DensityUnits.Picogramsperdeciliter);
    }
    static FromNanogramsperdeciliter(value) {
        return new Density(value, DensityUnits.Nanogramsperdeciliter);
    }
    static FromMicrogramsperdeciliter(value) {
        return new Density(value, DensityUnits.Microgramsperdeciliter);
    }
    static FromCentigramsperdeciliter(value) {
        return new Density(value, DensityUnits.Centigramsperdeciliter);
    }
    static FromDecigramsperdeciliter(value) {
        return new Density(value, DensityUnits.Decigramsperdeciliter);
    }
    static FromPicogramspermilliliter(value) {
        return new Density(value, DensityUnits.Picogramspermilliliter);
    }
    static FromNanogramspermilliliter(value) {
        return new Density(value, DensityUnits.Nanogramspermilliliter);
    }
    static FromMicrogramspermilliliter(value) {
        return new Density(value, DensityUnits.Microgramspermilliliter);
    }
    static FromCentigramspermilliliter(value) {
        return new Density(value, DensityUnits.Centigramspermilliliter);
    }
    static FromDecigramspermilliliter(value) {
        return new Density(value, DensityUnits.Decigramspermilliliter);
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
            case DensityUnits.Kilogramspercubicmillimeter:
                return (this.value * 1e-6) / 1000;
            case DensityUnits.Kilogramspercubiccentimeter:
                return (this.value * 1e-3) / 1000;
            case DensityUnits.Kilogramspercubicmeter:
                return (this.value * 1e3) / 1000;
            case DensityUnits.Microgramspercubicmeter:
                return (this.value * 1e3) / 0.000001;
            case DensityUnits.Kilopoundspercubicinch:
                return (this.value * 3.6127298147753e-5) / 1000;
            case DensityUnits.Kilopoundspercubicfoot:
                return (this.value * 0.062427961) / 1000;
            case DensityUnits.Picogramsperliter:
                return (this.value * 1) / 1e-12;
            case DensityUnits.Nanogramsperliter:
                return (this.value * 1) / 1e-9;
            case DensityUnits.Microgramsperliter:
                return (this.value * 1) / 0.000001;
            case DensityUnits.Centigramsperliter:
                return (this.value * 1) / 0.01;
            case DensityUnits.Decigramsperliter:
                return (this.value * 1) / 0.1;
            case DensityUnits.Picogramsperdeciliter:
                return (this.value * 1e-1) / 1e-12;
            case DensityUnits.Nanogramsperdeciliter:
                return (this.value * 1e-1) / 1e-9;
            case DensityUnits.Microgramsperdeciliter:
                return (this.value * 1e-1) / 0.000001;
            case DensityUnits.Centigramsperdeciliter:
                return (this.value * 1e-1) / 0.01;
            case DensityUnits.Decigramsperdeciliter:
                return (this.value * 1e-1) / 0.1;
            case DensityUnits.Picogramspermilliliter:
                return (this.value * 1e-3) / 1e-12;
            case DensityUnits.Nanogramspermilliliter:
                return (this.value * 1e-3) / 1e-9;
            case DensityUnits.Microgramspermilliliter:
                return (this.value * 1e-3) / 0.000001;
            case DensityUnits.Centigramspermilliliter:
                return (this.value * 1e-3) / 0.01;
            case DensityUnits.Decigramspermilliliter:
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
            case DensityUnits.Kilogramspercubicmillimeter:
                return (value / 1e-6) * 1000;
            case DensityUnits.Kilogramspercubiccentimeter:
                return (value / 1e-3) * 1000;
            case DensityUnits.Kilogramspercubicmeter:
                return (value / 1e3) * 1000;
            case DensityUnits.Microgramspercubicmeter:
                return (value / 1e3) * 0.000001;
            case DensityUnits.Kilopoundspercubicinch:
                return (value / 3.6127298147753e-5) * 1000;
            case DensityUnits.Kilopoundspercubicfoot:
                return (value / 0.062427961) * 1000;
            case DensityUnits.Picogramsperliter:
                return (value / 1) * 1e-12;
            case DensityUnits.Nanogramsperliter:
                return (value / 1) * 1e-9;
            case DensityUnits.Microgramsperliter:
                return (value / 1) * 0.000001;
            case DensityUnits.Centigramsperliter:
                return (value / 1) * 0.01;
            case DensityUnits.Decigramsperliter:
                return (value / 1) * 0.1;
            case DensityUnits.Picogramsperdeciliter:
                return (value / 1e-1) * 1e-12;
            case DensityUnits.Nanogramsperdeciliter:
                return (value / 1e-1) * 1e-9;
            case DensityUnits.Microgramsperdeciliter:
                return (value / 1e-1) * 0.000001;
            case DensityUnits.Centigramsperdeciliter:
                return (value / 1e-1) * 0.01;
            case DensityUnits.Decigramsperdeciliter:
                return (value / 1e-1) * 0.1;
            case DensityUnits.Picogramspermilliliter:
                return (value / 1e-3) * 1e-12;
            case DensityUnits.Nanogramspermilliliter:
                return (value / 1e-3) * 1e-9;
            case DensityUnits.Microgramspermilliliter:
                return (value / 1e-3) * 0.000001;
            case DensityUnits.Centigramspermilliliter:
                return (value / 1e-3) * 0.01;
            case DensityUnits.Decigramspermilliliter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
}
exports.Density = Density;
//# sourceMappingURL=density.g.js.map