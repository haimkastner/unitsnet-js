"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialAcUnits;
(function (ElectricPotentialAcUnits) {
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["VoltsAc"] = 0] = "VoltsAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["MicrovoltsAc"] = 1] = "MicrovoltsAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["KilovoltsAc"] = 2] = "KilovoltsAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["MegavoltsAc"] = 3] = "MegavoltsAc";
})(ElectricPotentialAcUnits = exports.ElectricPotentialAcUnits || (exports.ElectricPotentialAcUnits = {}));
class ElectricPotentialAc {
    constructor(value, fromUnit) {
        this.voltsacLazy = null;
        this.microvoltsacLazy = null;
        this.kilovoltsacLazy = null;
        this.megavoltsacLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltsAc() {
        if (this.voltsacLazy !== null) {
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }
    get MicrovoltsAc() {
        if (this.microvoltsacLazy !== null) {
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltsAc);
    }
    get KilovoltsAc() {
        if (this.kilovoltsacLazy !== null) {
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltsAc);
    }
    get MegavoltsAc() {
        if (this.megavoltsacLazy !== null) {
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltsAc);
    }
    static FromVoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }
    static FromMicrovoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltsAc);
    }
    static FromKilovoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltsAc);
    }
    static FromMegavoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltsAc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = ElectricPotentialAcUnits.VoltsAc) {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return this.VoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return this.MicrovoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return this.KilovoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return this.MegavoltsAc + ` Vac`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricPotentialAc = ElectricPotentialAc;
//# sourceMappingURL=electricpotentialac.g.js.map