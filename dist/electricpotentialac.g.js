"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialAcUnits;
(function (ElectricPotentialAcUnits) {
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["VoltsAc"] = 0] = "VoltsAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["Microvoltsac"] = 1] = "Microvoltsac";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["Kilovoltsac"] = 2] = "Kilovoltsac";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["Megavoltsac"] = 3] = "Megavoltsac";
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
    get Microvoltsac() {
        if (this.microvoltsacLazy !== null) {
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.Microvoltsac);
    }
    get Kilovoltsac() {
        if (this.kilovoltsacLazy !== null) {
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.Kilovoltsac);
    }
    get Megavoltsac() {
        if (this.megavoltsacLazy !== null) {
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.Megavoltsac);
    }
    static FromVoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }
    static FromMicrovoltsac(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.Microvoltsac);
    }
    static FromKilovoltsac(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.Kilovoltsac);
    }
    static FromMegavoltsac(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.Megavoltsac);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.Microvoltsac:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.Kilovoltsac:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.Megavoltsac:
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
            case ElectricPotentialAcUnits.Microvoltsac:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.Kilovoltsac:
                return (value) * 1000;
            case ElectricPotentialAcUnits.Megavoltsac:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.ElectricPotentialAc = ElectricPotentialAc;
//# sourceMappingURL=electricpotentialac.g.js.map