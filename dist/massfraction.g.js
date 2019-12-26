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
    MassFractionUnits[MassFractionUnits["NanogramPerGram"] = 8] = "NanogramPerGram";
    MassFractionUnits[MassFractionUnits["MicrogramPerGram"] = 9] = "MicrogramPerGram";
    MassFractionUnits[MassFractionUnits["CentigramPerGram"] = 10] = "CentigramPerGram";
    MassFractionUnits[MassFractionUnits["DecigramPerGram"] = 11] = "DecigramPerGram";
    MassFractionUnits[MassFractionUnits["DecagramPerGram"] = 12] = "DecagramPerGram";
    MassFractionUnits[MassFractionUnits["HectogramPerGram"] = 13] = "HectogramPerGram";
    MassFractionUnits[MassFractionUnits["KilogramPerGram"] = 14] = "KilogramPerGram";
    MassFractionUnits[MassFractionUnits["NanogramPerKilogram"] = 15] = "NanogramPerKilogram";
    MassFractionUnits[MassFractionUnits["MicrogramPerKilogram"] = 16] = "MicrogramPerKilogram";
    MassFractionUnits[MassFractionUnits["CentigramPerKilogram"] = 17] = "CentigramPerKilogram";
    MassFractionUnits[MassFractionUnits["DecigramPerKilogram"] = 18] = "DecigramPerKilogram";
    MassFractionUnits[MassFractionUnits["DecagramPerKilogram"] = 19] = "DecagramPerKilogram";
    MassFractionUnits[MassFractionUnits["HectogramPerKilogram"] = 20] = "HectogramPerKilogram";
    MassFractionUnits[MassFractionUnits["KilogramPerKilogram"] = 21] = "KilogramPerKilogram";
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
        this.nanogrampergramLazy = null;
        this.microgrampergramLazy = null;
        this.centigrampergramLazy = null;
        this.decigrampergramLazy = null;
        this.decagrampergramLazy = null;
        this.hectogrampergramLazy = null;
        this.kilogrampergramLazy = null;
        this.nanogramperkilogramLazy = null;
        this.microgramperkilogramLazy = null;
        this.centigramperkilogramLazy = null;
        this.decigramperkilogramLazy = null;
        this.decagramperkilogramLazy = null;
        this.hectogramperkilogramLazy = null;
        this.kilogramperkilogramLazy = null;
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
    get NanogramPerGram() {
        if (this.nanogrampergramLazy !== null) {
            return this.nanogrampergramLazy;
        }
        return this.nanogrampergramLazy = this.convertFromBase(MassFractionUnits.NanogramPerGram);
    }
    get MicrogramPerGram() {
        if (this.microgrampergramLazy !== null) {
            return this.microgrampergramLazy;
        }
        return this.microgrampergramLazy = this.convertFromBase(MassFractionUnits.MicrogramPerGram);
    }
    get CentigramPerGram() {
        if (this.centigrampergramLazy !== null) {
            return this.centigrampergramLazy;
        }
        return this.centigrampergramLazy = this.convertFromBase(MassFractionUnits.CentigramPerGram);
    }
    get DecigramPerGram() {
        if (this.decigrampergramLazy !== null) {
            return this.decigrampergramLazy;
        }
        return this.decigrampergramLazy = this.convertFromBase(MassFractionUnits.DecigramPerGram);
    }
    get DecagramPerGram() {
        if (this.decagrampergramLazy !== null) {
            return this.decagrampergramLazy;
        }
        return this.decagrampergramLazy = this.convertFromBase(MassFractionUnits.DecagramPerGram);
    }
    get HectogramPerGram() {
        if (this.hectogrampergramLazy !== null) {
            return this.hectogrampergramLazy;
        }
        return this.hectogrampergramLazy = this.convertFromBase(MassFractionUnits.HectogramPerGram);
    }
    get KilogramPerGram() {
        if (this.kilogrampergramLazy !== null) {
            return this.kilogrampergramLazy;
        }
        return this.kilogrampergramLazy = this.convertFromBase(MassFractionUnits.KilogramPerGram);
    }
    get NanogramPerKilogram() {
        if (this.nanogramperkilogramLazy !== null) {
            return this.nanogramperkilogramLazy;
        }
        return this.nanogramperkilogramLazy = this.convertFromBase(MassFractionUnits.NanogramPerKilogram);
    }
    get MicrogramPerKilogram() {
        if (this.microgramperkilogramLazy !== null) {
            return this.microgramperkilogramLazy;
        }
        return this.microgramperkilogramLazy = this.convertFromBase(MassFractionUnits.MicrogramPerKilogram);
    }
    get CentigramPerKilogram() {
        if (this.centigramperkilogramLazy !== null) {
            return this.centigramperkilogramLazy;
        }
        return this.centigramperkilogramLazy = this.convertFromBase(MassFractionUnits.CentigramPerKilogram);
    }
    get DecigramPerKilogram() {
        if (this.decigramperkilogramLazy !== null) {
            return this.decigramperkilogramLazy;
        }
        return this.decigramperkilogramLazy = this.convertFromBase(MassFractionUnits.DecigramPerKilogram);
    }
    get DecagramPerKilogram() {
        if (this.decagramperkilogramLazy !== null) {
            return this.decagramperkilogramLazy;
        }
        return this.decagramperkilogramLazy = this.convertFromBase(MassFractionUnits.DecagramPerKilogram);
    }
    get HectogramPerKilogram() {
        if (this.hectogramperkilogramLazy !== null) {
            return this.hectogramperkilogramLazy;
        }
        return this.hectogramperkilogramLazy = this.convertFromBase(MassFractionUnits.HectogramPerKilogram);
    }
    get KilogramPerKilogram() {
        if (this.kilogramperkilogramLazy !== null) {
            return this.kilogramperkilogramLazy;
        }
        return this.kilogramperkilogramLazy = this.convertFromBase(MassFractionUnits.KilogramPerKilogram);
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
    static FromNanogramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.NanogramPerGram);
    }
    static FromMicrogramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.MicrogramPerGram);
    }
    static FromCentigramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.CentigramPerGram);
    }
    static FromDecigramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.DecigramPerGram);
    }
    static FromDecagramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.DecagramPerGram);
    }
    static FromHectogramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.HectogramPerGram);
    }
    static FromKilogramPerGram(value) {
        return new MassFraction(value, MassFractionUnits.KilogramPerGram);
    }
    static FromNanogramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.NanogramPerKilogram);
    }
    static FromMicrogramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.MicrogramPerKilogram);
    }
    static FromCentigramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.CentigramPerKilogram);
    }
    static FromDecigramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.DecigramPerKilogram);
    }
    static FromDecagramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.DecagramPerKilogram);
    }
    static FromHectogramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.HectogramPerKilogram);
    }
    static FromKilogramPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.KilogramPerKilogram);
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
            case MassFractionUnits.NanogramPerGram:
                return (this.value) / 1e-9;
            case MassFractionUnits.MicrogramPerGram:
                return (this.value) / 0.000001;
            case MassFractionUnits.CentigramPerGram:
                return (this.value) / 0.01;
            case MassFractionUnits.DecigramPerGram:
                return (this.value) / 0.1;
            case MassFractionUnits.DecagramPerGram:
                return (this.value) / 10;
            case MassFractionUnits.HectogramPerGram:
                return (this.value) / 100;
            case MassFractionUnits.KilogramPerGram:
                return (this.value) / 1000;
            case MassFractionUnits.NanogramPerKilogram:
                return (this.value * 1e3) / 1e-9;
            case MassFractionUnits.MicrogramPerKilogram:
                return (this.value * 1e3) / 0.000001;
            case MassFractionUnits.CentigramPerKilogram:
                return (this.value * 1e3) / 0.01;
            case MassFractionUnits.DecigramPerKilogram:
                return (this.value * 1e3) / 0.1;
            case MassFractionUnits.DecagramPerKilogram:
                return (this.value * 1e3) / 10;
            case MassFractionUnits.HectogramPerKilogram:
                return (this.value * 1e3) / 100;
            case MassFractionUnits.KilogramPerKilogram:
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
            case MassFractionUnits.NanogramPerGram:
                return (value) * 1e-9;
            case MassFractionUnits.MicrogramPerGram:
                return (value) * 0.000001;
            case MassFractionUnits.CentigramPerGram:
                return (value) * 0.01;
            case MassFractionUnits.DecigramPerGram:
                return (value) * 0.1;
            case MassFractionUnits.DecagramPerGram:
                return (value) * 10;
            case MassFractionUnits.HectogramPerGram:
                return (value) * 100;
            case MassFractionUnits.KilogramPerGram:
                return (value) * 1000;
            case MassFractionUnits.NanogramPerKilogram:
                return (value / 1e3) * 1e-9;
            case MassFractionUnits.MicrogramPerKilogram:
                return (value / 1e3) * 0.000001;
            case MassFractionUnits.CentigramPerKilogram:
                return (value / 1e3) * 0.01;
            case MassFractionUnits.DecigramPerKilogram:
                return (value / 1e3) * 0.1;
            case MassFractionUnits.DecagramPerKilogram:
                return (value / 1e3) * 10;
            case MassFractionUnits.HectogramPerKilogram:
                return (value / 1e3) * 100;
            case MassFractionUnits.KilogramPerKilogram:
                return (value / 1e3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassFractionUnits.DecimalFractions) {
        switch (toUnit) {
            case MassFractionUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case MassFractionUnits.GramsPerGram:
                return this.GramsPerGram + ` g/g`;
            case MassFractionUnits.GramsPerKilogram:
                return this.GramsPerKilogram + ` g/kg`;
            case MassFractionUnits.Percent:
                return this.Percent + ` %`;
            case MassFractionUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case MassFractionUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case MassFractionUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case MassFractionUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
            case MassFractionUnits.NanogramPerGram:
                return this.NanogramPerGram + ` g/g`;
            case MassFractionUnits.MicrogramPerGram:
                return this.MicrogramPerGram + ` g/g`;
            case MassFractionUnits.CentigramPerGram:
                return this.CentigramPerGram + ` g/g`;
            case MassFractionUnits.DecigramPerGram:
                return this.DecigramPerGram + ` g/g`;
            case MassFractionUnits.DecagramPerGram:
                return this.DecagramPerGram + ` g/g`;
            case MassFractionUnits.HectogramPerGram:
                return this.HectogramPerGram + ` g/g`;
            case MassFractionUnits.KilogramPerGram:
                return this.KilogramPerGram + ` g/g`;
            case MassFractionUnits.NanogramPerKilogram:
                return this.NanogramPerKilogram + ` g/kg`;
            case MassFractionUnits.MicrogramPerKilogram:
                return this.MicrogramPerKilogram + ` g/kg`;
            case MassFractionUnits.CentigramPerKilogram:
                return this.CentigramPerKilogram + ` g/kg`;
            case MassFractionUnits.DecigramPerKilogram:
                return this.DecigramPerKilogram + ` g/kg`;
            case MassFractionUnits.DecagramPerKilogram:
                return this.DecagramPerKilogram + ` g/kg`;
            case MassFractionUnits.HectogramPerKilogram:
                return this.HectogramPerKilogram + ` g/kg`;
            case MassFractionUnits.KilogramPerKilogram:
                return this.KilogramPerKilogram + ` g/kg`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassFraction = MassFraction;
//# sourceMappingURL=massfraction.g.js.map