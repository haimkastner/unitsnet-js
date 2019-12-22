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
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerCubicMillimeter() {
        return this.convertFromBase(DensityUnits.GramsPerCubicMillimeter);
    }
    get GramsPerCubicCentimeter() {
        return this.convertFromBase(DensityUnits.GramsPerCubicCentimeter);
    }
    get GramsPerCubicMeter() {
        return this.convertFromBase(DensityUnits.GramsPerCubicMeter);
    }
    get PoundsPerCubicInch() {
        return this.convertFromBase(DensityUnits.PoundsPerCubicInch);
    }
    get PoundsPerCubicFoot() {
        return this.convertFromBase(DensityUnits.PoundsPerCubicFoot);
    }
    get TonnesPerCubicMillimeter() {
        return this.convertFromBase(DensityUnits.TonnesPerCubicMillimeter);
    }
    get TonnesPerCubicCentimeter() {
        return this.convertFromBase(DensityUnits.TonnesPerCubicCentimeter);
    }
    get TonnesPerCubicMeter() {
        return this.convertFromBase(DensityUnits.TonnesPerCubicMeter);
    }
    get SlugsPerCubicFoot() {
        return this.convertFromBase(DensityUnits.SlugsPerCubicFoot);
    }
    get GramsPerLiter() {
        return this.convertFromBase(DensityUnits.GramsPerLiter);
    }
    get GramsPerDeciLiter() {
        return this.convertFromBase(DensityUnits.GramsPerDeciLiter);
    }
    get GramsPerMilliliter() {
        return this.convertFromBase(DensityUnits.GramsPerMilliliter);
    }
    get PoundsPerUSGallon() {
        return this.convertFromBase(DensityUnits.PoundsPerUSGallon);
    }
    get PoundsPerImperialGallon() {
        return this.convertFromBase(DensityUnits.PoundsPerImperialGallon);
    }
    get KilogramsPerLiter() {
        return this.convertFromBase(DensityUnits.KilogramsPerLiter);
    }
    get Kilogramspercubicmillimeter() {
        return this.convertFromBase(DensityUnits.Kilogramspercubicmillimeter);
    }
    get Kilogramspercubiccentimeter() {
        return this.convertFromBase(DensityUnits.Kilogramspercubiccentimeter);
    }
    get Kilogramspercubicmeter() {
        return this.convertFromBase(DensityUnits.Kilogramspercubicmeter);
    }
    get Microgramspercubicmeter() {
        return this.convertFromBase(DensityUnits.Microgramspercubicmeter);
    }
    get Kilopoundspercubicinch() {
        return this.convertFromBase(DensityUnits.Kilopoundspercubicinch);
    }
    get Kilopoundspercubicfoot() {
        return this.convertFromBase(DensityUnits.Kilopoundspercubicfoot);
    }
    get Picogramsperliter() {
        return this.convertFromBase(DensityUnits.Picogramsperliter);
    }
    get Nanogramsperliter() {
        return this.convertFromBase(DensityUnits.Nanogramsperliter);
    }
    get Microgramsperliter() {
        return this.convertFromBase(DensityUnits.Microgramsperliter);
    }
    get Centigramsperliter() {
        return this.convertFromBase(DensityUnits.Centigramsperliter);
    }
    get Decigramsperliter() {
        return this.convertFromBase(DensityUnits.Decigramsperliter);
    }
    get Picogramsperdeciliter() {
        return this.convertFromBase(DensityUnits.Picogramsperdeciliter);
    }
    get Nanogramsperdeciliter() {
        return this.convertFromBase(DensityUnits.Nanogramsperdeciliter);
    }
    get Microgramsperdeciliter() {
        return this.convertFromBase(DensityUnits.Microgramsperdeciliter);
    }
    get Centigramsperdeciliter() {
        return this.convertFromBase(DensityUnits.Centigramsperdeciliter);
    }
    get Decigramsperdeciliter() {
        return this.convertFromBase(DensityUnits.Decigramsperdeciliter);
    }
    get Picogramspermilliliter() {
        return this.convertFromBase(DensityUnits.Picogramspermilliliter);
    }
    get Nanogramspermilliliter() {
        return this.convertFromBase(DensityUnits.Nanogramspermilliliter);
    }
    get Microgramspermilliliter() {
        return this.convertFromBase(DensityUnits.Microgramspermilliliter);
    }
    get Centigramspermilliliter() {
        return this.convertFromBase(DensityUnits.Centigramspermilliliter);
    }
    get Decigramspermilliliter() {
        return this.convertFromBase(DensityUnits.Decigramspermilliliter);
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
                return this.value / 1e-6;
            case DensityUnits.GramsPerCubicCentimeter:
                return this.value / 1e-3;
            case DensityUnits.GramsPerCubicMeter:
                return this.value / 1e3;
            case DensityUnits.PoundsPerCubicInch:
                return this.value / 3.6127298147753e-5;
            case DensityUnits.PoundsPerCubicFoot:
                return this.value / 0.062427961;
            case DensityUnits.TonnesPerCubicMillimeter:
                return this.value / 1e-12;
            case DensityUnits.TonnesPerCubicCentimeter:
                return this.value / 1e-9;
            case DensityUnits.TonnesPerCubicMeter:
                return this.value / 0.001;
            case DensityUnits.SlugsPerCubicFoot:
                return this.value * 515.378818;
            case DensityUnits.GramsPerLiter:
                return this.value / 1;
            case DensityUnits.GramsPerDeciLiter:
                return this.value / 1e-1;
            case DensityUnits.GramsPerMilliliter:
                return this.value / 1e-3;
            case DensityUnits.PoundsPerUSGallon:
                return this.value * 1.19826427e2;
            case DensityUnits.PoundsPerImperialGallon:
                return this.value * 9.9776398e1;
            case DensityUnits.KilogramsPerLiter:
                return this.value * 1e3;
            case DensityUnits.Kilogramspercubicmillimeter:
                return (this.value * 1e-6) * 1000;
            case DensityUnits.Kilogramspercubiccentimeter:
                return (this.value * 1e-3) * 1000;
            case DensityUnits.Kilogramspercubicmeter:
                return (this.value * 1e3) * 1000;
            case DensityUnits.Microgramspercubicmeter:
                return (this.value * 1e3) * 0.000001;
            case DensityUnits.Kilopoundspercubicinch:
                return (this.value * 3.6127298147753e-5) * 1000;
            case DensityUnits.Kilopoundspercubicfoot:
                return (this.value * 0.062427961) * 1000;
            case DensityUnits.Picogramsperliter:
                return (this.value * 1) * 1e-12;
            case DensityUnits.Nanogramsperliter:
                return (this.value * 1) * 1e-9;
            case DensityUnits.Microgramsperliter:
                return (this.value * 1) * 0.000001;
            case DensityUnits.Centigramsperliter:
                return (this.value * 1) * 0.01;
            case DensityUnits.Decigramsperliter:
                return (this.value * 1) * 0.1;
            case DensityUnits.Picogramsperdeciliter:
                return (this.value * 1e-1) * 1e-12;
            case DensityUnits.Nanogramsperdeciliter:
                return (this.value * 1e-1) * 1e-9;
            case DensityUnits.Microgramsperdeciliter:
                return (this.value * 1e-1) * 0.000001;
            case DensityUnits.Centigramsperdeciliter:
                return (this.value * 1e-1) * 0.01;
            case DensityUnits.Decigramsperdeciliter:
                return (this.value * 1e-1) * 0.1;
            case DensityUnits.Picogramspermilliliter:
                return (this.value * 1e-3) * 1e-12;
            case DensityUnits.Nanogramspermilliliter:
                return (this.value * 1e-3) * 1e-9;
            case DensityUnits.Microgramspermilliliter:
                return (this.value * 1e-3) * 0.000001;
            case DensityUnits.Centigramspermilliliter:
                return (this.value * 1e-3) * 0.01;
            case DensityUnits.Decigramspermilliliter:
                return (this.value * 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
                return (this.value / 1e-6) / 1000;
            case DensityUnits.Kilogramspercubiccentimeter:
                return (this.value / 1e-3) / 1000;
            case DensityUnits.Kilogramspercubicmeter:
                return (this.value / 1e3) / 1000;
            case DensityUnits.Microgramspercubicmeter:
                return (this.value / 1e3) / 0.000001;
            case DensityUnits.Kilopoundspercubicinch:
                return (this.value / 3.6127298147753e-5) / 1000;
            case DensityUnits.Kilopoundspercubicfoot:
                return (this.value / 0.062427961) / 1000;
            case DensityUnits.Picogramsperliter:
                return (this.value / 1) / 1e-12;
            case DensityUnits.Nanogramsperliter:
                return (this.value / 1) / 1e-9;
            case DensityUnits.Microgramsperliter:
                return (this.value / 1) / 0.000001;
            case DensityUnits.Centigramsperliter:
                return (this.value / 1) / 0.01;
            case DensityUnits.Decigramsperliter:
                return (this.value / 1) / 0.1;
            case DensityUnits.Picogramsperdeciliter:
                return (this.value / 1e-1) / 1e-12;
            case DensityUnits.Nanogramsperdeciliter:
                return (this.value / 1e-1) / 1e-9;
            case DensityUnits.Microgramsperdeciliter:
                return (this.value / 1e-1) / 0.000001;
            case DensityUnits.Centigramsperdeciliter:
                return (this.value / 1e-1) / 0.01;
            case DensityUnits.Decigramsperdeciliter:
                return (this.value / 1e-1) / 0.1;
            case DensityUnits.Picogramspermilliliter:
                return (this.value / 1e-3) / 1e-12;
            case DensityUnits.Nanogramspermilliliter:
                return (this.value / 1e-3) / 1e-9;
            case DensityUnits.Microgramspermilliliter:
                return (this.value / 1e-3) / 0.000001;
            case DensityUnits.Centigramspermilliliter:
                return (this.value / 1e-3) / 0.01;
            case DensityUnits.Decigramspermilliliter:
                return (this.value / 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }
}
exports.Density = Density;
//# sourceMappingURL=density.g.js.map