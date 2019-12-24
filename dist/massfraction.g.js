"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassFractionUnits;
(function (MassFractionUnits) {
    MassFractionUnits[MassFractionUnits["DecimalFractions"] = 0] = "DecimalFractions";
    MassFractionUnits[MassFractionUnits["GramsPerGram"] = 1] = "GramsPerGram";
    MassFractionUnits[MassFractionUnits["GramsPerKilogram"] = 2] = "GramsPerKilogram";
    MassFractionUnits[MassFractionUnits["Percent"] = 3] = "Percent";
    MassFractionUnits[MassFractionUnits["PartsPerThousand"] = 4] = "PartsPerThousand";
    MassFractionUnits[MassFractionUnits["PartsPerMillion"] = 5] = "PartsPerMillion";
    MassFractionUnits[MassFractionUnits["PartsPerBillion"] = 6] = "PartsPerBillion";
    MassFractionUnits[MassFractionUnits["PartsPerTrillion"] = 7] = "PartsPerTrillion";
    MassFractionUnits[MassFractionUnits["Nanogramspergram"] = 8] = "Nanogramspergram";
    MassFractionUnits[MassFractionUnits["Microgramspergram"] = 9] = "Microgramspergram";
    MassFractionUnits[MassFractionUnits["Centigramspergram"] = 10] = "Centigramspergram";
    MassFractionUnits[MassFractionUnits["Decigramspergram"] = 11] = "Decigramspergram";
    MassFractionUnits[MassFractionUnits["Decagramspergram"] = 12] = "Decagramspergram";
    MassFractionUnits[MassFractionUnits["Hectogramspergram"] = 13] = "Hectogramspergram";
    MassFractionUnits[MassFractionUnits["Kilogramspergram"] = 14] = "Kilogramspergram";
    MassFractionUnits[MassFractionUnits["Nanogramsperkilogram"] = 15] = "Nanogramsperkilogram";
    MassFractionUnits[MassFractionUnits["Microgramsperkilogram"] = 16] = "Microgramsperkilogram";
    MassFractionUnits[MassFractionUnits["Centigramsperkilogram"] = 17] = "Centigramsperkilogram";
    MassFractionUnits[MassFractionUnits["Decigramsperkilogram"] = 18] = "Decigramsperkilogram";
    MassFractionUnits[MassFractionUnits["Decagramsperkilogram"] = 19] = "Decagramsperkilogram";
    MassFractionUnits[MassFractionUnits["Hectogramsperkilogram"] = 20] = "Hectogramsperkilogram";
    MassFractionUnits[MassFractionUnits["Kilogramsperkilogram"] = 21] = "Kilogramsperkilogram";
})(MassFractionUnits = exports.MassFractionUnits || (exports.MassFractionUnits = {}));
class MassFraction {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecimalFractions() {
        return this.convertFromBase(MassFractionUnits.DecimalFractions);
    }
    get GramsPerGram() {
        return this.convertFromBase(MassFractionUnits.GramsPerGram);
    }
    get GramsPerKilogram() {
        return this.convertFromBase(MassFractionUnits.GramsPerKilogram);
    }
    get Percent() {
        return this.convertFromBase(MassFractionUnits.Percent);
    }
    get PartsPerThousand() {
        return this.convertFromBase(MassFractionUnits.PartsPerThousand);
    }
    get PartsPerMillion() {
        return this.convertFromBase(MassFractionUnits.PartsPerMillion);
    }
    get PartsPerBillion() {
        return this.convertFromBase(MassFractionUnits.PartsPerBillion);
    }
    get PartsPerTrillion() {
        return this.convertFromBase(MassFractionUnits.PartsPerTrillion);
    }
    get Nanogramspergram() {
        return this.convertFromBase(MassFractionUnits.Nanogramspergram);
    }
    get Microgramspergram() {
        return this.convertFromBase(MassFractionUnits.Microgramspergram);
    }
    get Centigramspergram() {
        return this.convertFromBase(MassFractionUnits.Centigramspergram);
    }
    get Decigramspergram() {
        return this.convertFromBase(MassFractionUnits.Decigramspergram);
    }
    get Decagramspergram() {
        return this.convertFromBase(MassFractionUnits.Decagramspergram);
    }
    get Hectogramspergram() {
        return this.convertFromBase(MassFractionUnits.Hectogramspergram);
    }
    get Kilogramspergram() {
        return this.convertFromBase(MassFractionUnits.Kilogramspergram);
    }
    get Nanogramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Nanogramsperkilogram);
    }
    get Microgramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Microgramsperkilogram);
    }
    get Centigramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Centigramsperkilogram);
    }
    get Decigramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Decigramsperkilogram);
    }
    get Decagramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Decagramsperkilogram);
    }
    get Hectogramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Hectogramsperkilogram);
    }
    get Kilogramsperkilogram() {
        return this.convertFromBase(MassFractionUnits.Kilogramsperkilogram);
    }
    static FromDecimalFractions(value) {
        return new MassFraction(value, MassFractionUnits.DecimalFractions);
    }
    static FromGramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.GramsPerGram);
    }
    static FromGramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.GramsPerKilogram);
    }
    static FromPercent(value) {
        return new MassFraction(value, MassFractionUnits.Percent);
    }
    static FromPartsPerThousand(value) {
        return new MassFraction(value, MassFractionUnits.PartsPerThousand);
    }
    static FromPartsPerMillion(value) {
        return new MassFraction(value, MassFractionUnits.PartsPerMillion);
    }
    static FromPartsPerBillion(value) {
        return new MassFraction(value, MassFractionUnits.PartsPerBillion);
    }
    static FromPartsPerTrillion(value) {
        return new MassFraction(value, MassFractionUnits.PartsPerTrillion);
    }
    static FromNanogramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Nanogramspergram);
    }
    static FromMicrogramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Microgramspergram);
    }
    static FromCentigramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Centigramspergram);
    }
    static FromDecigramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Decigramspergram);
    }
    static FromDecagramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Decagramspergram);
    }
    static FromHectogramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Hectogramspergram);
    }
    static FromKilogramspergram(value) {
        return new MassFraction(value, MassFractionUnits.Kilogramspergram);
    }
    static FromNanogramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Nanogramsperkilogram);
    }
    static FromMicrogramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Microgramsperkilogram);
    }
    static FromCentigramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Centigramsperkilogram);
    }
    static FromDecigramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Decigramsperkilogram);
    }
    static FromDecagramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Decagramsperkilogram);
    }
    static FromHectogramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Hectogramsperkilogram);
    }
    static FromKilogramsperkilogram(value) {
        return new MassFraction(value, MassFractionUnits.Kilogramsperkilogram);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassFractionUnits.DecimalFractions:
                return this.value;
            case MassFractionUnits.GramsPerGram:
                return this.value;
            case MassFractionUnits.GramsPerKilogram:
                return this.value * 1e3;
            case MassFractionUnits.Percent:
                return this.value * 1e2;
            case MassFractionUnits.PartsPerThousand:
                return this.value * 1e3;
            case MassFractionUnits.PartsPerMillion:
                return this.value * 1e6;
            case MassFractionUnits.PartsPerBillion:
                return this.value * 1e9;
            case MassFractionUnits.PartsPerTrillion:
                return this.value * 1e12;
            case MassFractionUnits.Nanogramspergram:
                return (this.value) * 1e-9;
            case MassFractionUnits.Microgramspergram:
                return (this.value) * 0.000001;
            case MassFractionUnits.Centigramspergram:
                return (this.value) * 0.01;
            case MassFractionUnits.Decigramspergram:
                return (this.value) * 0.1;
            case MassFractionUnits.Decagramspergram:
                return (this.value) * 10;
            case MassFractionUnits.Hectogramspergram:
                return (this.value) * 100;
            case MassFractionUnits.Kilogramspergram:
                return (this.value) * 1000;
            case MassFractionUnits.Nanogramsperkilogram:
                return (this.value / 1e3) * 1e-9;
            case MassFractionUnits.Microgramsperkilogram:
                return (this.value / 1e3) * 0.000001;
            case MassFractionUnits.Centigramsperkilogram:
                return (this.value / 1e3) * 0.01;
            case MassFractionUnits.Decigramsperkilogram:
                return (this.value / 1e3) * 0.1;
            case MassFractionUnits.Decagramsperkilogram:
                return (this.value / 1e3) * 10;
            case MassFractionUnits.Hectogramsperkilogram:
                return (this.value / 1e3) * 100;
            case MassFractionUnits.Kilogramsperkilogram:
                return (this.value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassFractionUnits.DecimalFractions:
                return value;
            case MassFractionUnits.GramsPerGram:
                return value;
            case MassFractionUnits.GramsPerKilogram:
                return value / 1e3;
            case MassFractionUnits.Percent:
                return value / 1e2;
            case MassFractionUnits.PartsPerThousand:
                return value / 1e3;
            case MassFractionUnits.PartsPerMillion:
                return value / 1e6;
            case MassFractionUnits.PartsPerBillion:
                return value / 1e9;
            case MassFractionUnits.PartsPerTrillion:
                return value / 1e12;
            case MassFractionUnits.Nanogramspergram:
                return (value) / 1e-9;
            case MassFractionUnits.Microgramspergram:
                return (value) / 0.000001;
            case MassFractionUnits.Centigramspergram:
                return (value) / 0.01;
            case MassFractionUnits.Decigramspergram:
                return (value) / 0.1;
            case MassFractionUnits.Decagramspergram:
                return (value) / 10;
            case MassFractionUnits.Hectogramspergram:
                return (value) / 100;
            case MassFractionUnits.Kilogramspergram:
                return (value) / 1000;
            case MassFractionUnits.Nanogramsperkilogram:
                return (value * 1e3) / 1e-9;
            case MassFractionUnits.Microgramsperkilogram:
                return (value * 1e3) / 0.000001;
            case MassFractionUnits.Centigramsperkilogram:
                return (value * 1e3) / 0.01;
            case MassFractionUnits.Decigramsperkilogram:
                return (value * 1e3) / 0.1;
            case MassFractionUnits.Decagramsperkilogram:
                return (value * 1e3) / 10;
            case MassFractionUnits.Hectogramsperkilogram:
                return (value * 1e3) / 100;
            case MassFractionUnits.Kilogramsperkilogram:
                return (value * 1e3) / 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassFraction = MassFraction;
//# sourceMappingURL=massfraction.g.js.map