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
    MassFractionUnits[MassFractionUnits["NanogramsPerGram"] = 8] = "NanogramsPerGram";
    MassFractionUnits[MassFractionUnits["MicrogramsPerGram"] = 9] = "MicrogramsPerGram";
    MassFractionUnits[MassFractionUnits["CentigramsPerGram"] = 10] = "CentigramsPerGram";
    MassFractionUnits[MassFractionUnits["DecigramsPerGram"] = 11] = "DecigramsPerGram";
    MassFractionUnits[MassFractionUnits["DecagramsPerGram"] = 12] = "DecagramsPerGram";
    MassFractionUnits[MassFractionUnits["HectogramsPerGram"] = 13] = "HectogramsPerGram";
    MassFractionUnits[MassFractionUnits["KilogramsPerGram"] = 14] = "KilogramsPerGram";
    MassFractionUnits[MassFractionUnits["NanogramsPerKilogram"] = 15] = "NanogramsPerKilogram";
    MassFractionUnits[MassFractionUnits["MicrogramsPerKilogram"] = 16] = "MicrogramsPerKilogram";
    MassFractionUnits[MassFractionUnits["CentigramsPerKilogram"] = 17] = "CentigramsPerKilogram";
    MassFractionUnits[MassFractionUnits["DecigramsPerKilogram"] = 18] = "DecigramsPerKilogram";
    MassFractionUnits[MassFractionUnits["DecagramsPerKilogram"] = 19] = "DecagramsPerKilogram";
    MassFractionUnits[MassFractionUnits["HectogramsPerKilogram"] = 20] = "HectogramsPerKilogram";
    MassFractionUnits[MassFractionUnits["KilogramsPerKilogram"] = 21] = "KilogramsPerKilogram";
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
    get NanogramsPerGram() {
        if (this.nanogramspergramLazy !== null) {
            return this.nanogramspergramLazy;
        }
        return this.nanogramspergramLazy = this.convertFromBase(MassFractionUnits.NanogramsPerGram);
    }
    get MicrogramsPerGram() {
        if (this.microgramspergramLazy !== null) {
            return this.microgramspergramLazy;
        }
        return this.microgramspergramLazy = this.convertFromBase(MassFractionUnits.MicrogramsPerGram);
    }
    get CentigramsPerGram() {
        if (this.centigramspergramLazy !== null) {
            return this.centigramspergramLazy;
        }
        return this.centigramspergramLazy = this.convertFromBase(MassFractionUnits.CentigramsPerGram);
    }
    get DecigramsPerGram() {
        if (this.decigramspergramLazy !== null) {
            return this.decigramspergramLazy;
        }
        return this.decigramspergramLazy = this.convertFromBase(MassFractionUnits.DecigramsPerGram);
    }
    get DecagramsPerGram() {
        if (this.decagramspergramLazy !== null) {
            return this.decagramspergramLazy;
        }
        return this.decagramspergramLazy = this.convertFromBase(MassFractionUnits.DecagramsPerGram);
    }
    get HectogramsPerGram() {
        if (this.hectogramspergramLazy !== null) {
            return this.hectogramspergramLazy;
        }
        return this.hectogramspergramLazy = this.convertFromBase(MassFractionUnits.HectogramsPerGram);
    }
    get KilogramsPerGram() {
        if (this.kilogramspergramLazy !== null) {
            return this.kilogramspergramLazy;
        }
        return this.kilogramspergramLazy = this.convertFromBase(MassFractionUnits.KilogramsPerGram);
    }
    get NanogramsPerKilogram() {
        if (this.nanogramsperkilogramLazy !== null) {
            return this.nanogramsperkilogramLazy;
        }
        return this.nanogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.NanogramsPerKilogram);
    }
    get MicrogramsPerKilogram() {
        if (this.microgramsperkilogramLazy !== null) {
            return this.microgramsperkilogramLazy;
        }
        return this.microgramsperkilogramLazy = this.convertFromBase(MassFractionUnits.MicrogramsPerKilogram);
    }
    get CentigramsPerKilogram() {
        if (this.centigramsperkilogramLazy !== null) {
            return this.centigramsperkilogramLazy;
        }
        return this.centigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.CentigramsPerKilogram);
    }
    get DecigramsPerKilogram() {
        if (this.decigramsperkilogramLazy !== null) {
            return this.decigramsperkilogramLazy;
        }
        return this.decigramsperkilogramLazy = this.convertFromBase(MassFractionUnits.DecigramsPerKilogram);
    }
    get DecagramsPerKilogram() {
        if (this.decagramsperkilogramLazy !== null) {
            return this.decagramsperkilogramLazy;
        }
        return this.decagramsperkilogramLazy = this.convertFromBase(MassFractionUnits.DecagramsPerKilogram);
    }
    get HectogramsPerKilogram() {
        if (this.hectogramsperkilogramLazy !== null) {
            return this.hectogramsperkilogramLazy;
        }
        return this.hectogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.HectogramsPerKilogram);
    }
    get KilogramsPerKilogram() {
        if (this.kilogramsperkilogramLazy !== null) {
            return this.kilogramsperkilogramLazy;
        }
        return this.kilogramsperkilogramLazy = this.convertFromBase(MassFractionUnits.KilogramsPerKilogram);
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
    static FromNanogramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.NanogramsPerGram);
    }
    static FromMicrogramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.MicrogramsPerGram);
    }
    static FromCentigramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.CentigramsPerGram);
    }
    static FromDecigramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.DecigramsPerGram);
    }
    static FromDecagramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.DecagramsPerGram);
    }
    static FromHectogramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.HectogramsPerGram);
    }
    static FromKilogramsPerGram(value) {
        return new MassFraction(value, MassFractionUnits.KilogramsPerGram);
    }
    static FromNanogramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.NanogramsPerKilogram);
    }
    static FromMicrogramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.MicrogramsPerKilogram);
    }
    static FromCentigramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.CentigramsPerKilogram);
    }
    static FromDecigramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.DecigramsPerKilogram);
    }
    static FromDecagramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.DecagramsPerKilogram);
    }
    static FromHectogramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.HectogramsPerKilogram);
    }
    static FromKilogramsPerKilogram(value) {
        return new MassFraction(value, MassFractionUnits.KilogramsPerKilogram);
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
            case MassFractionUnits.NanogramsPerGram:
                return (this.value) / 1e-9;
            case MassFractionUnits.MicrogramsPerGram:
                return (this.value) / 0.000001;
            case MassFractionUnits.CentigramsPerGram:
                return (this.value) / 0.01;
            case MassFractionUnits.DecigramsPerGram:
                return (this.value) / 0.1;
            case MassFractionUnits.DecagramsPerGram:
                return (this.value) / 10;
            case MassFractionUnits.HectogramsPerGram:
                return (this.value) / 100;
            case MassFractionUnits.KilogramsPerGram:
                return (this.value) / 1000;
            case MassFractionUnits.NanogramsPerKilogram:
                return (this.value * 1e3) / 1e-9;
            case MassFractionUnits.MicrogramsPerKilogram:
                return (this.value * 1e3) / 0.000001;
            case MassFractionUnits.CentigramsPerKilogram:
                return (this.value * 1e3) / 0.01;
            case MassFractionUnits.DecigramsPerKilogram:
                return (this.value * 1e3) / 0.1;
            case MassFractionUnits.DecagramsPerKilogram:
                return (this.value * 1e3) / 10;
            case MassFractionUnits.HectogramsPerKilogram:
                return (this.value * 1e3) / 100;
            case MassFractionUnits.KilogramsPerKilogram:
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
            case MassFractionUnits.NanogramsPerGram:
                return (value) * 1e-9;
            case MassFractionUnits.MicrogramsPerGram:
                return (value) * 0.000001;
            case MassFractionUnits.CentigramsPerGram:
                return (value) * 0.01;
            case MassFractionUnits.DecigramsPerGram:
                return (value) * 0.1;
            case MassFractionUnits.DecagramsPerGram:
                return (value) * 10;
            case MassFractionUnits.HectogramsPerGram:
                return (value) * 100;
            case MassFractionUnits.KilogramsPerGram:
                return (value) * 1000;
            case MassFractionUnits.NanogramsPerKilogram:
                return (value / 1e3) * 1e-9;
            case MassFractionUnits.MicrogramsPerKilogram:
                return (value / 1e3) * 0.000001;
            case MassFractionUnits.CentigramsPerKilogram:
                return (value / 1e3) * 0.01;
            case MassFractionUnits.DecigramsPerKilogram:
                return (value / 1e3) * 0.1;
            case MassFractionUnits.DecagramsPerKilogram:
                return (value / 1e3) * 10;
            case MassFractionUnits.HectogramsPerKilogram:
                return (value / 1e3) * 100;
            case MassFractionUnits.KilogramsPerKilogram:
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
            case MassFractionUnits.NanogramsPerGram:
                return this.NanogramsPerGram + ` g/g`;
            case MassFractionUnits.MicrogramsPerGram:
                return this.MicrogramsPerGram + ` g/g`;
            case MassFractionUnits.CentigramsPerGram:
                return this.CentigramsPerGram + ` g/g`;
            case MassFractionUnits.DecigramsPerGram:
                return this.DecigramsPerGram + ` g/g`;
            case MassFractionUnits.DecagramsPerGram:
                return this.DecagramsPerGram + ` g/g`;
            case MassFractionUnits.HectogramsPerGram:
                return this.HectogramsPerGram + ` g/g`;
            case MassFractionUnits.KilogramsPerGram:
                return this.KilogramsPerGram + ` g/g`;
            case MassFractionUnits.NanogramsPerKilogram:
                return this.NanogramsPerKilogram + ` g/kg`;
            case MassFractionUnits.MicrogramsPerKilogram:
                return this.MicrogramsPerKilogram + ` g/kg`;
            case MassFractionUnits.CentigramsPerKilogram:
                return this.CentigramsPerKilogram + ` g/kg`;
            case MassFractionUnits.DecigramsPerKilogram:
                return this.DecigramsPerKilogram + ` g/kg`;
            case MassFractionUnits.DecagramsPerKilogram:
                return this.DecagramsPerKilogram + ` g/kg`;
            case MassFractionUnits.HectogramsPerKilogram:
                return this.HectogramsPerKilogram + ` g/kg`;
            case MassFractionUnits.KilogramsPerKilogram:
                return this.KilogramsPerKilogram + ` g/kg`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassFraction = MassFraction;
//# sourceMappingURL=massfraction.g.js.map