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
        this.joulespermolekelvinLazy = null;
        this.kilojoulespermolekelvinLazy = null;
        this.megajoulespermolekelvinLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerMoleKelvin() {
        if (this.joulespermolekelvinLazy !== null) {
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    get Kilojoulespermolekelvin() {
        if (this.kilojoulespermolekelvinLazy !== null) {
            return this.kilojoulespermolekelvinLazy;
        }
        return this.kilojoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.Kilojoulespermolekelvin);
    }
    get Megajoulespermolekelvin() {
        if (this.megajoulespermolekelvinLazy !== null) {
            return this.megajoulespermolekelvinLazy;
        }
        return this.megajoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.Megajoulespermolekelvin);
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