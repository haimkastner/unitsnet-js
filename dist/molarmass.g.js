"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarMassUnits;
(function (MolarMassUnits) {
    MolarMassUnits[MolarMassUnits["GramsPerMole"] = 0] = "GramsPerMole";
    MolarMassUnits[MolarMassUnits["PoundsPerMole"] = 1] = "PoundsPerMole";
    MolarMassUnits[MolarMassUnits["NanogramPerMole"] = 2] = "NanogramPerMole";
    MolarMassUnits[MolarMassUnits["MicrogramPerMole"] = 3] = "MicrogramPerMole";
    MolarMassUnits[MolarMassUnits["CentigramPerMole"] = 4] = "CentigramPerMole";
    MolarMassUnits[MolarMassUnits["DecigramPerMole"] = 5] = "DecigramPerMole";
    MolarMassUnits[MolarMassUnits["DecagramPerMole"] = 6] = "DecagramPerMole";
    MolarMassUnits[MolarMassUnits["HectogramPerMole"] = 7] = "HectogramPerMole";
    MolarMassUnits[MolarMassUnits["KilogramPerMole"] = 8] = "KilogramPerMole";
    MolarMassUnits[MolarMassUnits["KilopoundPerMole"] = 9] = "KilopoundPerMole";
    MolarMassUnits[MolarMassUnits["MegapoundPerMole"] = 10] = "MegapoundPerMole";
})(MolarMassUnits = exports.MolarMassUnits || (exports.MolarMassUnits = {}));
class MolarMass {
    constructor(value, fromUnit) {
        this.gramspermoleLazy = null;
        this.poundspermoleLazy = null;
        this.nanogrampermoleLazy = null;
        this.microgrampermoleLazy = null;
        this.centigrampermoleLazy = null;
        this.decigrampermoleLazy = null;
        this.decagrampermoleLazy = null;
        this.hectogrampermoleLazy = null;
        this.kilogrampermoleLazy = null;
        this.kilopoundpermoleLazy = null;
        this.megapoundpermoleLazy = null;
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
    get NanogramPerMole() {
        if (this.nanogrampermoleLazy !== null) {
            return this.nanogrampermoleLazy;
        }
        return this.nanogrampermoleLazy = this.convertFromBase(MolarMassUnits.NanogramPerMole);
    }
    get MicrogramPerMole() {
        if (this.microgrampermoleLazy !== null) {
            return this.microgrampermoleLazy;
        }
        return this.microgrampermoleLazy = this.convertFromBase(MolarMassUnits.MicrogramPerMole);
    }
    get CentigramPerMole() {
        if (this.centigrampermoleLazy !== null) {
            return this.centigrampermoleLazy;
        }
        return this.centigrampermoleLazy = this.convertFromBase(MolarMassUnits.CentigramPerMole);
    }
    get DecigramPerMole() {
        if (this.decigrampermoleLazy !== null) {
            return this.decigrampermoleLazy;
        }
        return this.decigrampermoleLazy = this.convertFromBase(MolarMassUnits.DecigramPerMole);
    }
    get DecagramPerMole() {
        if (this.decagrampermoleLazy !== null) {
            return this.decagrampermoleLazy;
        }
        return this.decagrampermoleLazy = this.convertFromBase(MolarMassUnits.DecagramPerMole);
    }
    get HectogramPerMole() {
        if (this.hectogrampermoleLazy !== null) {
            return this.hectogrampermoleLazy;
        }
        return this.hectogrampermoleLazy = this.convertFromBase(MolarMassUnits.HectogramPerMole);
    }
    get KilogramPerMole() {
        if (this.kilogrampermoleLazy !== null) {
            return this.kilogrampermoleLazy;
        }
        return this.kilogrampermoleLazy = this.convertFromBase(MolarMassUnits.KilogramPerMole);
    }
    get KilopoundPerMole() {
        if (this.kilopoundpermoleLazy !== null) {
            return this.kilopoundpermoleLazy;
        }
        return this.kilopoundpermoleLazy = this.convertFromBase(MolarMassUnits.KilopoundPerMole);
    }
    get MegapoundPerMole() {
        if (this.megapoundpermoleLazy !== null) {
            return this.megapoundpermoleLazy;
        }
        return this.megapoundpermoleLazy = this.convertFromBase(MolarMassUnits.MegapoundPerMole);
    }
    static FromGramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }
    static FromPoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }
    static FromNanogramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.NanogramPerMole);
    }
    static FromMicrogramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.MicrogramPerMole);
    }
    static FromCentigramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.CentigramPerMole);
    }
    static FromDecigramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.DecigramPerMole);
    }
    static FromDecagramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.DecagramPerMole);
    }
    static FromHectogramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.HectogramPerMole);
    }
    static FromKilogramPerMole(value) {
        return new MolarMass(value, MolarMassUnits.KilogramPerMole);
    }
    static FromKilopoundPerMole(value) {
        return new MolarMass(value, MolarMassUnits.KilopoundPerMole);
    }
    static FromMegapoundPerMole(value) {
        return new MolarMass(value, MolarMassUnits.MegapoundPerMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.value * 1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value / 0.45359237;
            case MolarMassUnits.NanogramPerMole:
                return (this.value * 1e3) / 1e-9;
            case MolarMassUnits.MicrogramPerMole:
                return (this.value * 1e3) / 0.000001;
            case MolarMassUnits.CentigramPerMole:
                return (this.value * 1e3) / 0.01;
            case MolarMassUnits.DecigramPerMole:
                return (this.value * 1e3) / 0.1;
            case MolarMassUnits.DecagramPerMole:
                return (this.value * 1e3) / 10;
            case MolarMassUnits.HectogramPerMole:
                return (this.value * 1e3) / 100;
            case MolarMassUnits.KilogramPerMole:
                return (this.value * 1e3) / 1000;
            case MolarMassUnits.KilopoundPerMole:
                return (this.value / 0.45359237) / 1000;
            case MolarMassUnits.MegapoundPerMole:
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
            case MolarMassUnits.NanogramPerMole:
                return (value / 1e3) * 1e-9;
            case MolarMassUnits.MicrogramPerMole:
                return (value / 1e3) * 0.000001;
            case MolarMassUnits.CentigramPerMole:
                return (value / 1e3) * 0.01;
            case MolarMassUnits.DecigramPerMole:
                return (value / 1e3) * 0.1;
            case MolarMassUnits.DecagramPerMole:
                return (value / 1e3) * 10;
            case MolarMassUnits.HectogramPerMole:
                return (value / 1e3) * 100;
            case MolarMassUnits.KilogramPerMole:
                return (value / 1e3) * 1000;
            case MolarMassUnits.KilopoundPerMole:
                return (value * 0.45359237) * 1000;
            case MolarMassUnits.MegapoundPerMole:
                return (value * 0.45359237) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MolarMassUnits.KilogramPerMole) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.GramsPerMole + ` g/mol`;
            case MolarMassUnits.PoundsPerMole:
                return this.PoundsPerMole + ` lb/mol`;
            case MolarMassUnits.NanogramPerMole:
                return this.NanogramPerMole + ` g/mol`;
            case MolarMassUnits.MicrogramPerMole:
                return this.MicrogramPerMole + ` g/mol`;
            case MolarMassUnits.CentigramPerMole:
                return this.CentigramPerMole + ` g/mol`;
            case MolarMassUnits.DecigramPerMole:
                return this.DecigramPerMole + ` g/mol`;
            case MolarMassUnits.DecagramPerMole:
                return this.DecagramPerMole + ` g/mol`;
            case MolarMassUnits.HectogramPerMole:
                return this.HectogramPerMole + ` g/mol`;
            case MolarMassUnits.KilogramPerMole:
                return this.KilogramPerMole + ` g/mol`;
            case MolarMassUnits.KilopoundPerMole:
                return this.KilopoundPerMole + ` lb/mol`;
            case MolarMassUnits.MegapoundPerMole:
                return this.MegapoundPerMole + ` lb/mol`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarMass = MolarMass;
//# sourceMappingURL=molarmass.g.js.map