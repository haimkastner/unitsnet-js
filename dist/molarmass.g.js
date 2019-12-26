"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarMassUnits;
(function (MolarMassUnits) {
    MolarMassUnits[MolarMassUnits["GramsPerMole"] = 0] = "GramsPerMole";
    MolarMassUnits[MolarMassUnits["PoundsPerMole"] = 1] = "PoundsPerMole";
    MolarMassUnits[MolarMassUnits["NanogramsPerMole"] = 2] = "NanogramsPerMole";
    MolarMassUnits[MolarMassUnits["MicrogramsPerMole"] = 3] = "MicrogramsPerMole";
    MolarMassUnits[MolarMassUnits["CentigramsPerMole"] = 4] = "CentigramsPerMole";
    MolarMassUnits[MolarMassUnits["DecigramsPerMole"] = 5] = "DecigramsPerMole";
    MolarMassUnits[MolarMassUnits["DecagramsPerMole"] = 6] = "DecagramsPerMole";
    MolarMassUnits[MolarMassUnits["HectogramsPerMole"] = 7] = "HectogramsPerMole";
    MolarMassUnits[MolarMassUnits["KilogramsPerMole"] = 8] = "KilogramsPerMole";
    MolarMassUnits[MolarMassUnits["KilopoundsPerMole"] = 9] = "KilopoundsPerMole";
    MolarMassUnits[MolarMassUnits["MegapoundsPerMole"] = 10] = "MegapoundsPerMole";
})(MolarMassUnits = exports.MolarMassUnits || (exports.MolarMassUnits = {}));
class MolarMass {
    constructor(value, fromUnit) {
        this.gramspermoleLazy = null;
        this.poundspermoleLazy = null;
        this.nanogramspermoleLazy = null;
        this.microgramspermoleLazy = null;
        this.centigramspermoleLazy = null;
        this.decigramspermoleLazy = null;
        this.decagramspermoleLazy = null;
        this.hectogramspermoleLazy = null;
        this.kilogramspermoleLazy = null;
        this.kilopoundspermoleLazy = null;
        this.megapoundspermoleLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerMole() {
        if (this.gramspermoleLazy !== null) {
            return this.gramspermoleLazy;
        }
        return this.gramspermoleLazy = this.convertFromBase(MolarMassUnits.GramsPerMole);
    }
    get PoundsPerMole() {
        if (this.poundspermoleLazy !== null) {
            return this.poundspermoleLazy;
        }
        return this.poundspermoleLazy = this.convertFromBase(MolarMassUnits.PoundsPerMole);
    }
    get NanogramsPerMole() {
        if (this.nanogramspermoleLazy !== null) {
            return this.nanogramspermoleLazy;
        }
        return this.nanogramspermoleLazy = this.convertFromBase(MolarMassUnits.NanogramsPerMole);
    }
    get MicrogramsPerMole() {
        if (this.microgramspermoleLazy !== null) {
            return this.microgramspermoleLazy;
        }
        return this.microgramspermoleLazy = this.convertFromBase(MolarMassUnits.MicrogramsPerMole);
    }
    get CentigramsPerMole() {
        if (this.centigramspermoleLazy !== null) {
            return this.centigramspermoleLazy;
        }
        return this.centigramspermoleLazy = this.convertFromBase(MolarMassUnits.CentigramsPerMole);
    }
    get DecigramsPerMole() {
        if (this.decigramspermoleLazy !== null) {
            return this.decigramspermoleLazy;
        }
        return this.decigramspermoleLazy = this.convertFromBase(MolarMassUnits.DecigramsPerMole);
    }
    get DecagramsPerMole() {
        if (this.decagramspermoleLazy !== null) {
            return this.decagramspermoleLazy;
        }
        return this.decagramspermoleLazy = this.convertFromBase(MolarMassUnits.DecagramsPerMole);
    }
    get HectogramsPerMole() {
        if (this.hectogramspermoleLazy !== null) {
            return this.hectogramspermoleLazy;
        }
        return this.hectogramspermoleLazy = this.convertFromBase(MolarMassUnits.HectogramsPerMole);
    }
    get KilogramsPerMole() {
        if (this.kilogramspermoleLazy !== null) {
            return this.kilogramspermoleLazy;
        }
        return this.kilogramspermoleLazy = this.convertFromBase(MolarMassUnits.KilogramsPerMole);
    }
    get KilopoundsPerMole() {
        if (this.kilopoundspermoleLazy !== null) {
            return this.kilopoundspermoleLazy;
        }
        return this.kilopoundspermoleLazy = this.convertFromBase(MolarMassUnits.KilopoundsPerMole);
    }
    get MegapoundsPerMole() {
        if (this.megapoundspermoleLazy !== null) {
            return this.megapoundspermoleLazy;
        }
        return this.megapoundspermoleLazy = this.convertFromBase(MolarMassUnits.MegapoundsPerMole);
    }
    static FromGramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }
    static FromPoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }
    static FromNanogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.NanogramsPerMole);
    }
    static FromMicrogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.MicrogramsPerMole);
    }
    static FromCentigramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.CentigramsPerMole);
    }
    static FromDecigramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.DecigramsPerMole);
    }
    static FromDecagramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.DecagramsPerMole);
    }
    static FromHectogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.HectogramsPerMole);
    }
    static FromKilogramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.KilogramsPerMole);
    }
    static FromKilopoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.KilopoundsPerMole);
    }
    static FromMegapoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.MegapoundsPerMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.value * 1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value / 0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (this.value * 1e3) / 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (this.value * 1e3) / 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (this.value * 1e3) / 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (this.value * 1e3) / 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (this.value * 1e3) / 10;
            case MolarMassUnits.HectogramsPerMole:
                return (this.value * 1e3) / 100;
            case MolarMassUnits.KilogramsPerMole:
                return (this.value * 1e3) / 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (this.value / 0.45359237) / 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (this.value / 0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarMassUnits.GramsPerMole:
                return value / 1e3;
            case MolarMassUnits.PoundsPerMole:
                return value * 0.45359237;
            case MolarMassUnits.NanogramsPerMole:
                return (value / 1e3) * 1e-9;
            case MolarMassUnits.MicrogramsPerMole:
                return (value / 1e3) * 0.000001;
            case MolarMassUnits.CentigramsPerMole:
                return (value / 1e3) * 0.01;
            case MolarMassUnits.DecigramsPerMole:
                return (value / 1e3) * 0.1;
            case MolarMassUnits.DecagramsPerMole:
                return (value / 1e3) * 10;
            case MolarMassUnits.HectogramsPerMole:
                return (value / 1e3) * 100;
            case MolarMassUnits.KilogramsPerMole:
                return (value / 1e3) * 1000;
            case MolarMassUnits.KilopoundsPerMole:
                return (value * 0.45359237) * 1000;
            case MolarMassUnits.MegapoundsPerMole:
                return (value * 0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MolarMassUnits.KilogramsPerMole) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.GramsPerMole + ` g/mol`;
            case MolarMassUnits.PoundsPerMole:
                return this.PoundsPerMole + ` lb/mol`;
            case MolarMassUnits.NanogramsPerMole:
                return this.NanogramsPerMole + ` g/mol`;
            case MolarMassUnits.MicrogramsPerMole:
                return this.MicrogramsPerMole + ` g/mol`;
            case MolarMassUnits.CentigramsPerMole:
                return this.CentigramsPerMole + ` g/mol`;
            case MolarMassUnits.DecigramsPerMole:
                return this.DecigramsPerMole + ` g/mol`;
            case MolarMassUnits.DecagramsPerMole:
                return this.DecagramsPerMole + ` g/mol`;
            case MolarMassUnits.HectogramsPerMole:
                return this.HectogramsPerMole + ` g/mol`;
            case MolarMassUnits.KilogramsPerMole:
                return this.KilogramsPerMole + ` g/mol`;
            case MolarMassUnits.KilopoundsPerMole:
                return this.KilopoundsPerMole + ` lb/mol`;
            case MolarMassUnits.MegapoundsPerMole:
                return this.MegapoundsPerMole + ` lb/mol`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarMass = MolarMass;
//# sourceMappingURL=molarmass.g.js.map