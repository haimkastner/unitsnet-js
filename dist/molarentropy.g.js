"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarEntropyUnits;
(function (MolarEntropyUnits) {
    MolarEntropyUnits[MolarEntropyUnits["JoulesPerMoleKelvin"] = 0] = "JoulesPerMoleKelvin";
    MolarEntropyUnits[MolarEntropyUnits["KilojoulePerMoleKelvin"] = 1] = "KilojoulePerMoleKelvin";
    MolarEntropyUnits[MolarEntropyUnits["MegajoulePerMoleKelvin"] = 2] = "MegajoulePerMoleKelvin";
})(MolarEntropyUnits = exports.MolarEntropyUnits || (exports.MolarEntropyUnits = {}));
class MolarEntropy {
    constructor(value, fromUnit) {
        this.joulespermolekelvinLazy = null;
        this.kilojoulepermolekelvinLazy = null;
        this.megajoulepermolekelvinLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get JoulesPerMoleKelvin() {
        if (this.joulespermolekelvinLazy !== null) {
            return this.joulespermolekelvinLazy;
        }
        return this.joulespermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    get KilojoulePerMoleKelvin() {
        if (this.kilojoulepermolekelvinLazy !== null) {
            return this.kilojoulepermolekelvinLazy;
        }
        return this.kilojoulepermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.KilojoulePerMoleKelvin);
    }
    get MegajoulePerMoleKelvin() {
        if (this.megajoulepermolekelvinLazy !== null) {
            return this.megajoulepermolekelvinLazy;
        }
        return this.megajoulepermolekelvinLazy = this.convertFromBase(MolarEntropyUnits.MegajoulePerMoleKelvin);
    }
    static FromJoulesPerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.JoulesPerMoleKelvin);
    }
    static FromKilojoulePerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.KilojoulePerMoleKelvin);
    }
    static FromMegajoulePerMoleKelvin(value) {
        return new MolarEntropy(value, MolarEntropyUnits.MegajoulePerMoleKelvin);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarEntropyUnits.JoulesPerMoleKelvin:
                return this.value;
            case MolarEntropyUnits.KilojoulePerMoleKelvin:
                return (this.value) / 1000;
            case MolarEntropyUnits.MegajoulePerMoleKelvin:
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
            case MolarEntropyUnits.KilojoulePerMoleKelvin:
                return (value) * 1000;
            case MolarEntropyUnits.MegajoulePerMoleKelvin:
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
            case MolarEntropyUnits.KilojoulePerMoleKelvin:
                return this.KilojoulePerMoleKelvin + ` J/(mol*K)`;
            case MolarEntropyUnits.MegajoulePerMoleKelvin:
                return this.MegajoulePerMoleKelvin + ` J/(mol*K)`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MolarEntropy = MolarEntropy;
//# sourceMappingURL=molarentropy.g.js.map