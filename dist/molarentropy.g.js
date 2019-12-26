"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarEntropyUnits;
(function (MolarEntropyUnits) {
    MolarEntropyUnits[MolarEntropyUnits["JoulesPerMoleKelvin"] = 0] = "JoulesPerMoleKelvin";
    MolarEntropyUnits[MolarEntropyUnits["KilojoulesPerMoleKelvin"] = 1] = "KilojoulesPerMoleKelvin";
    MolarEntropyUnits[MolarEntropyUnits["MegajoulesPerMoleKelvin"] = 2] = "MegajoulesPerMoleKelvin";
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
    get KilojoulesPerMoleKelvin() {
        if (this.kilojoulespermolekelvinLazy !== null) {
            return this.kilojoulespermolekelvinLazy;
        }
        return this.kilojoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }
    get MegajoulesPerMoleKelvin() {
        if (this.megajoulespermolekelvinLazy !== null) {
            return this.megajoulespermolekelvinLazy;
        }
        return this.megajoulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }
    static FromJoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    static FromKilojoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulesPerMoleKelvin);
    }
    static FromMegajoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulesPerMoleKelvin);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
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
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return (value) * 1000;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MolarEntropyUnits.JoulesPerMoleKelvin) {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.JoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.KilojoulesPerMoleKelvin:
                return this.KilojoulesPerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.MegajoulesPerMoleKelvin:
                return this.MegajoulesPerMoleKelvin + ` J/(mol*K)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarEntropy = MolarEntropy;
//# sourceMappingURL=molarentropy.g.js.map