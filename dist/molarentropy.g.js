"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarEntropyUnits;
(function (MolarEntropyUnits) {
    MolarEntropyUnits[MolarEntropyUnits["JoulesPerMoleKelvin"] = 0] = "JoulesPerMoleKelvin";
    MolarEntropyUnits[MolarEntropyUnits["Kilojoulespermolekelvin"] = 1] = "Kilojoulespermolekelvin";
    MolarEntropyUnits[MolarEntropyUnits["Megajoulespermolekelvin"] = 2] = "Megajoulespermolekelvin";
})(MolarEntropyUnits = exports.MolarEntropyUnits || (exports.MolarEntropyUnits = {}));
class MolarEntropy {
    constructor(value, fromUnit) {
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerMoleKelvin() {
        return this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    get Kilojoulespermolekelvin() {
        return this.convertFromBase(MolarEntropyUnits.Kilojoulespermolekelvin);
    }
    get Megajoulespermolekelvin() {
        return this.convertFromBase(MolarEntropyUnits.Megajoulespermolekelvin);
    }
    static FromJoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    static FromKilojoulespermolekelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.Kilojoulespermolekelvin);
    }
    static FromMegajoulespermolekelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.Megajoulespermolekelvin);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.Kilojoulespermolekelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.Megajoulespermolekelvin:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return value;
            case MolarEntropyUnits.Kilojoulespermolekelvin:
                return (value) * 1000;
            case MolarEntropyUnits.Megajoulespermolekelvin:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MolarEntropy = MolarEntropy;
//# sourceMappingURL=molarentropy.g.js.map