"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElectricPotentialAcUnits;
(function (ElectricPotentialAcUnits) {
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["VoltsAc"] = 0] = "VoltsAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["MicrovoltAc"] = 1] = "MicrovoltAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["KilovoltAc"] = 2] = "KilovoltAc";
    ElectricPotentialAcUnits[ElectricPotentialAcUnits["MegavoltAc"] = 3] = "MegavoltAc";
})(ElectricPotentialAcUnits = exports.ElectricPotentialAcUnits || (exports.ElectricPotentialAcUnits = {}));
class ElectricPotentialAc {
    constructor(value, fromUnit) {
        this.voltsacLazy = null;
        this.microvoltacLazy = null;
        this.kilovoltacLazy = null;
        this.megavoltacLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get VoltsAc() {
        if (this.voltsacLazy !== null) {
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }
    get MicrovoltAc() {
        if (this.microvoltacLazy !== null) {
            return this.microvoltacLazy;
        }
        return this.microvoltacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltAc);
    }
    get KilovoltAc() {
        if (this.kilovoltacLazy !== null) {
            return this.kilovoltacLazy;
        }
        return this.kilovoltacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltAc);
    }
    get MegavoltAc() {
        if (this.megavoltacLazy !== null) {
            return this.megavoltacLazy;
        }
        return this.megavoltacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltAc);
    }
    static FromVoltsAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }
    static FromMicrovoltAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltAc);
    }
    static FromKilovoltAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltAc);
    }
    static FromMegavoltAc(value) {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltAc);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.KilovoltAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltAc:
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
            case ElectricPotentialAcUnits.MicrovoltAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.KilovoltAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltAc:
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
            case ElectricPotentialAcUnits.MicrovoltAc:
                return this.MicrovoltAc + ` Vac`;
            case ElectricPotentialAcUnits.KilovoltAc:
                return this.KilovoltAc + ` Vac`;
            case ElectricPotentialAcUnits.MegavoltAc:
                return this.MegavoltAc + ` Vac`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.ElectricPotentialAc = ElectricPotentialAc;
//# sourceMappingURL=electricpotentialac.g.js.map