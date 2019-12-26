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
        this.decimalfractionsLazy = null;
        this.gramspergramLazy = null;
        this.gramsperkilogramLazy = null;
        this.percentLazy = null;
        this.partsperthousandLazy = null;
        this.partspermillionLazy = null;
        this.partsperbillionLazy = null;
        this.partspertrillionLazy = null;
        this.nanogramspergramLazy = null;
        this.microgramspergramLazy = null;
        this.centigramspergramLazy = null;
        this.decigramspergramLazy = null;
        this.decagramspergramLazy = null;
        this.hectogramspergramLazy = null;
        this.kilogramspergramLazy = null;
        this.nanogramsperkilogramLazy = null;
        this.microgramsperkilogramLazy = null;
        this.centigramsperkilogramLazy = null;
        this.decigramsperkilogramLazy = null;
        this.decagramsperkilogramLazy = null;
        this.hectogramsperkilogramLazy = null;
        this.kilogramsperkilogramLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get DecimalFractions() {
        if (this.decimalfractionsLazy !== null) {
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(MassFractionUnits.DecimalFractions);
    }
    get GramsPerGram() {
        if (this.gramspergramLazy !== null) {
            return this.gramspergramLazy;
        }
        return this.gramspergramLazy = this.convertFromBase(MassFractionUnits.GramsPerGram);
    }
    get GramsPerKilogram() {
        if (this.gramsperkilogramLazy !== null) {
            return this.gramsperkilogramLazy;
        }
        return this.gramsperkilogramLazy = this.convertFromBase(MassFractionUnits.GramsPerKilogram);
    }
    get Percent() {
        if (this.percentLazy !== null) {
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(MassFractionUnits.Percent);
    }
    get PartsPerThousand() {
        if (this.partsperthousandLazy !== null) {
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(MassFractionUnits.PartsPerThousand);
    }
    get PartsPerMillion() {
        if (this.partspermillionLazy !== null) {
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(MassFractionUnits.PartsPerMillion);
    }
    get PartsPerBillion() {
        if (this.partsperbillionLazy !== null) {
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(MassFractionUnits.PartsPerBillion);
    }
    get PartsPerTrillion() {
        if (this.partspertrillionLazy !== null) {
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(MassFractionUnits.PartsPerTrillion);
    }
    get Nanogramspergram() {
        if (this.nanogramspergramLazy !== null) {
            return this.nanogramspergramLazy;
        }
        return this.nanogramspergramLazy = this.convertFromBase(MassFractionUnits.Nanogramspergram);
    }
    get Microgramspergram() {
        if (this.microgramspergramLazy !== null) {
            return this.microgramspergramLazy;
        }
        return this.microgramspergramLazy = this.convertFromBase(MassFractionUnits.Microgramspergram);
    }
    get Centigramspergram() {
        if (this.centigramspergramLazy !== null) {
            return this.centigramspergramLazy;
        }
        return this.centigramspergramLazy = this.convertFromBase(MassFractionUnits.Centigramspergram);
    }
    get Decigramspergram() {
        if (this.decigramspergramLazy !== null) {
            return this.decigramspergramLazy;
        }
        return this.decigramspergramLazy = this.convertFromBase(MassFractionUnits.Decigramspergram);
    }
    get Decagramspergram() {
        if (this.decagramspergramLazy !== null) {
            return this.decagramspergramLazy;
        }
        return this.decagramspergramLazy = this.convertFromBase(MassFractionUnits.Decagramspergram);
    }
    get Hectogramspergram() {
        if (this.hectogramspergramLazy !== null) {
            return this.hectogramspergramLazy;
        }
        return this.hectogramspergramLazy = this.convertFromBase(MassFractionUnits.Hectogramspergram);
    }
    get Kilogramspergram() {
        if (this.kilogramspergramLazy !== null) {
            return this.kilogramspergramLazy;
        }
        return this.kilogramspergramLazy = this.convertFromBase(MassFractionUnits.Kilogramspergram);
    }
    get Nanogramsperkilogram() {
        if (this.nanogramsperkilogramLazy !== null) {
            return this.nanogramsperkilogramLazy;
        }
        return this.nanogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Nanogramsperkilogram);
    }
    get Microgramsperkilogram() {
        if (this.microgramsperkilogramLazy !== null) {
            return this.microgramsperkilogramLazy;
        }
        return this.microgramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Microgramsperkilogram);
    }
    get Centigramsperkilogram() {
        if (this.centigramsperkilogramLazy !== null) {
            return this.centigramsperkilogramLazy;
        }
        return this.centigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Centigramsperkilogram);
    }
    get Decigramsperkilogram() {
        if (this.decigramsperkilogramLazy !== null) {
            return this.decigramsperkilogramLazy;
        }
        return this.decigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Decigramsperkilogram);
    }
    get Decagramsperkilogram() {
        if (this.decagramsperkilogramLazy !== null) {
            return this.decagramsperkilogramLazy;
        }
        return this.decagramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Decagramsperkilogram);
    }
    get Hectogramsperkilogram() {
        if (this.hectogramsperkilogramLazy !== null) {
            return this.hectogramsperkilogramLazy;
        }
        return this.hectogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Hectogramsperkilogram);
    }
    get Kilogramsperkilogram() {
        if (this.kilogramsperkilogramLazy !== null) {
            return this.kilogramsperkilogramLazy;
        }
        return this.kilogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.Kilogramsperkilogram);
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
                return (this.value) / 1e-9;
            case MassFractionUnits.Microgramspergram:
                return (this.value) / 0.000001;
            case MassFractionUnits.Centigramspergram:
                return (this.value) / 0.01;
            case MassFractionUnits.Decigramspergram:
                return (this.value) / 0.1;
            case MassFractionUnits.Decagramspergram:
                return (this.value) / 10;
            case MassFractionUnits.Hectogramspergram:
                return (this.value) / 100;
            case MassFractionUnits.Kilogramspergram:
                return (this.value) / 1000;
            case MassFractionUnits.Nanogramsperkilogram:
                return (this.value * 1e3) / 1e-9;
            case MassFractionUnits.Microgramsperkilogram:
                return (this.value * 1e3) / 0.000001;
            case MassFractionUnits.Centigramsperkilogram:
                return (this.value * 1e3) / 0.01;
            case MassFractionUnits.Decigramsperkilogram:
                return (this.value * 1e3) / 0.1;
            case MassFractionUnits.Decagramsperkilogram:
                return (this.value * 1e3) / 10;
            case MassFractionUnits.Hectogramsperkilogram:
                return (this.value * 1e3) / 100;
            case MassFractionUnits.Kilogramsperkilogram:
                return (this.value * 1e3) / 1000;
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
                return (value) * 1e-9;
            case MassFractionUnits.Microgramspergram:
                return (value) * 0.000001;
            case MassFractionUnits.Centigramspergram:
                return (value) * 0.01;
            case MassFractionUnits.Decigramspergram:
                return (value) * 0.1;
            case MassFractionUnits.Decagramspergram:
                return (value) * 10;
            case MassFractionUnits.Hectogramspergram:
                return (value) * 100;
            case MassFractionUnits.Kilogramspergram:
                return (value) * 1000;
            case MassFractionUnits.Nanogramsperkilogram:
                return (value / 1e3) * 1e-9;
            case MassFractionUnits.Microgramsperkilogram:
                return (value / 1e3) * 0.000001;
            case MassFractionUnits.Centigramsperkilogram:
                return (value / 1e3) * 0.01;
            case MassFractionUnits.Decigramsperkilogram:
                return (value / 1e3) * 0.1;
            case MassFractionUnits.Decagramsperkilogram:
                return (value / 1e3) * 10;
            case MassFractionUnits.Hectogramsperkilogram:
                return (value / 1e3) * 100;
            case MassFractionUnits.Kilogramsperkilogram:
                return (value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassFraction = MassFraction;
//# sourceMappingURL=massfraction.g.js.map