"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarMassUnits;
(function (MolarMassUnits) {
    MolarMassUnits[MolarMassUnits["GramsPerMole"] = 0] = "GramsPerMole";
    MolarMassUnits[MolarMassUnits["PoundsPerMole"] = 1] = "PoundsPerMole";
    MolarMassUnits[MolarMassUnits["Nanogramspermole"] = 2] = "Nanogramspermole";
    MolarMassUnits[MolarMassUnits["Microgramspermole"] = 3] = "Microgramspermole";
    MolarMassUnits[MolarMassUnits["Centigramspermole"] = 4] = "Centigramspermole";
    MolarMassUnits[MolarMassUnits["Decigramspermole"] = 5] = "Decigramspermole";
    MolarMassUnits[MolarMassUnits["Decagramspermole"] = 6] = "Decagramspermole";
    MolarMassUnits[MolarMassUnits["Hectogramspermole"] = 7] = "Hectogramspermole";
    MolarMassUnits[MolarMassUnits["Kilogramspermole"] = 8] = "Kilogramspermole";
    MolarMassUnits[MolarMassUnits["Kilopoundspermole"] = 9] = "Kilopoundspermole";
    MolarMassUnits[MolarMassUnits["Megapoundspermole"] = 10] = "Megapoundspermole";
})(MolarMassUnits = exports.MolarMassUnits || (exports.MolarMassUnits = {}));
class MolarMass {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramsPerMole() {
        return this.convertFromBase(MolarMassUnits.GramsPerMole);
    }
    get PoundsPerMole() {
        return this.convertFromBase(MolarMassUnits.PoundsPerMole);
    }
    get Nanogramspermole() {
        return this.convertFromBase(MolarMassUnits.Nanogramspermole);
    }
    get Microgramspermole() {
        return this.convertFromBase(MolarMassUnits.Microgramspermole);
    }
    get Centigramspermole() {
        return this.convertFromBase(MolarMassUnits.Centigramspermole);
    }
    get Decigramspermole() {
        return this.convertFromBase(MolarMassUnits.Decigramspermole);
    }
    get Decagramspermole() {
        return this.convertFromBase(MolarMassUnits.Decagramspermole);
    }
    get Hectogramspermole() {
        return this.convertFromBase(MolarMassUnits.Hectogramspermole);
    }
    get Kilogramspermole() {
        return this.convertFromBase(MolarMassUnits.Kilogramspermole);
    }
    get Kilopoundspermole() {
        return this.convertFromBase(MolarMassUnits.Kilopoundspermole);
    }
    get Megapoundspermole() {
        return this.convertFromBase(MolarMassUnits.Megapoundspermole);
    }
    static FromGramsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.GramsPerMole);
    }
    static FromPoundsPerMole(value) {
        return new MolarMass(value, MolarMassUnits.PoundsPerMole);
    }
    static FromNanogramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Nanogramspermole);
    }
    static FromMicrogramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Microgramspermole);
    }
    static FromCentigramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Centigramspermole);
    }
    static FromDecigramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Decigramspermole);
    }
    static FromDecagramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Decagramspermole);
    }
    static FromHectogramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Hectogramspermole);
    }
    static FromKilogramspermole(value) {
        return new MolarMass(value, MolarMassUnits.Kilogramspermole);
    }
    static FromKilopoundspermole(value) {
        return new MolarMass(value, MolarMassUnits.Kilopoundspermole);
    }
    static FromMegapoundspermole(value) {
        return new MolarMass(value, MolarMassUnits.Megapoundspermole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarMassUnits.GramsPerMole:
                return this.value * 1e3;
            case MolarMassUnits.PoundsPerMole:
                return this.value / 0.45359237;
            case MolarMassUnits.Nanogramspermole:
                return (this.value / 1e3) * 1e-9;
            case MolarMassUnits.Microgramspermole:
                return (this.value / 1e3) * 0.000001;
            case MolarMassUnits.Centigramspermole:
                return (this.value / 1e3) * 0.01;
            case MolarMassUnits.Decigramspermole:
                return (this.value / 1e3) * 0.1;
            case MolarMassUnits.Decagramspermole:
                return (this.value / 1e3) * 10;
            case MolarMassUnits.Hectogramspermole:
                return (this.value / 1e3) * 100;
            case MolarMassUnits.Kilogramspermole:
                return (this.value / 1e3) * 1000;
            case MolarMassUnits.Kilopoundspermole:
                return (this.value * 0.45359237) * 1000;
            case MolarMassUnits.Megapoundspermole:
                return (this.value * 0.45359237) * 1000000;
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
            case MolarMassUnits.Nanogramspermole:
                return (value * 1e3) / 1e-9;
            case MolarMassUnits.Microgramspermole:
                return (value * 1e3) / 0.000001;
            case MolarMassUnits.Centigramspermole:
                return (value * 1e3) / 0.01;
            case MolarMassUnits.Decigramspermole:
                return (value * 1e3) / 0.1;
            case MolarMassUnits.Decagramspermole:
                return (value * 1e3) / 10;
            case MolarMassUnits.Hectogramspermole:
                return (value * 1e3) / 100;
            case MolarMassUnits.Kilogramspermole:
                return (value * 1e3) / 1000;
            case MolarMassUnits.Kilopoundspermole:
                return (value / 0.45359237) / 1000;
            case MolarMassUnits.Megapoundspermole:
                return (value / 0.45359237) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MolarMass = MolarMass;
//# sourceMappingURL=molarmass.g.js.map