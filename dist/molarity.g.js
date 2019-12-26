"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MolarityUnits;
(function (MolarityUnits) {
    MolarityUnits[MolarityUnits["MolesPerCubicMeter"] = 0] = "MolesPerCubicMeter";
    MolarityUnits[MolarityUnits["MolesPerLiter"] = 1] = "MolesPerLiter";
    MolarityUnits[MolarityUnits["Picomolesperliter"] = 2] = "Picomolesperliter";
    MolarityUnits[MolarityUnits["Nanomolesperliter"] = 3] = "Nanomolesperliter";
    MolarityUnits[MolarityUnits["Micromolesperliter"] = 4] = "Micromolesperliter";
    MolarityUnits[MolarityUnits["Centimolesperliter"] = 5] = "Centimolesperliter";
    MolarityUnits[MolarityUnits["Decimolesperliter"] = 6] = "Decimolesperliter";
})(MolarityUnits = exports.MolarityUnits || (exports.MolarityUnits = {}));
class Molarity {
    constructor(value, fromUnit) {
        this.molespercubicmeterLazy = null;
        this.molesperliterLazy = null;
        this.picomolesperliterLazy = null;
        this.nanomolesperliterLazy = null;
        this.micromolesperliterLazy = null;
        this.centimolesperliterLazy = null;
        this.decimolesperliterLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get MolesPerCubicMeter() {
        if (this.molespercubicmeterLazy !== null) {
            return this.molespercubicmeterLazy;
        }
        return this.molespercubicmeterLazy = this.convertFromBase(MolarityUnits.MolesPerCubicMeter);
    }
    get MolesPerLiter() {
        if (this.molesperliterLazy !== null) {
            return this.molesperliterLazy;
        }
        return this.molesperliterLazy = this.convertFromBase(MolarityUnits.MolesPerLiter);
    }
    get Picomolesperliter() {
        if (this.picomolesperliterLazy !== null) {
            return this.picomolesperliterLazy;
        }
        return this.picomolesperliterLazy = this.convertFromBase(MolarityUnits.Picomolesperliter);
    }
    get Nanomolesperliter() {
        if (this.nanomolesperliterLazy !== null) {
            return this.nanomolesperliterLazy;
        }
        return this.nanomolesperliterLazy = this.convertFromBase(MolarityUnits.Nanomolesperliter);
    }
    get Micromolesperliter() {
        if (this.micromolesperliterLazy !== null) {
            return this.micromolesperliterLazy;
        }
        return this.micromolesperliterLazy = this.convertFromBase(MolarityUnits.Micromolesperliter);
    }
    get Centimolesperliter() {
        if (this.centimolesperliterLazy !== null) {
            return this.centimolesperliterLazy;
        }
        return this.centimolesperliterLazy = this.convertFromBase(MolarityUnits.Centimolesperliter);
    }
    get Decimolesperliter() {
        if (this.decimolesperliterLazy !== null) {
            return this.decimolesperliterLazy;
        }
        return this.decimolesperliterLazy = this.convertFromBase(MolarityUnits.Decimolesperliter);
    }
    static FromMolesPerCubicMeter(value) {
        return new Molarity(value, MolarityUnits.MolesPerCubicMeter);
    }
    static FromMolesPerLiter(value) {
        return new Molarity(value, MolarityUnits.MolesPerLiter);
    }
    static FromPicomolesperliter(value) {
        return new Molarity(value, MolarityUnits.Picomolesperliter);
    }
    static FromNanomolesperliter(value) {
        return new Molarity(value, MolarityUnits.Nanomolesperliter);
    }
    static FromMicromolesperliter(value) {
        return new Molarity(value, MolarityUnits.Micromolesperliter);
    }
    static FromCentimolesperliter(value) {
        return new Molarity(value, MolarityUnits.Centimolesperliter);
    }
    static FromDecimolesperliter(value) {
        return new Molarity(value, MolarityUnits.Decimolesperliter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MolarityUnits.MolesPerCubicMeter:
                return this.value;
            case MolarityUnits.MolesPerLiter:
                return this.value * 1e-3;
            case MolarityUnits.Picomolesperliter:
                return (this.value * 1e-3) / 1e-12;
            case MolarityUnits.Nanomolesperliter:
                return (this.value * 1e-3) / 1e-9;
            case MolarityUnits.Micromolesperliter:
                return (this.value * 1e-3) / 0.000001;
            case MolarityUnits.Centimolesperliter:
                return (this.value * 1e-3) / 0.01;
            case MolarityUnits.Decimolesperliter:
                return (this.value * 1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MolarityUnits.MolesPerCubicMeter:
                return value;
            case MolarityUnits.MolesPerLiter:
                return value / 1e-3;
            case MolarityUnits.Picomolesperliter:
                return (value / 1e-3) * 1e-12;
            case MolarityUnits.Nanomolesperliter:
                return (value / 1e-3) * 1e-9;
            case MolarityUnits.Micromolesperliter:
                return (value / 1e-3) * 0.000001;
            case MolarityUnits.Centimolesperliter:
                return (value / 1e-3) * 0.01;
            case MolarityUnits.Decimolesperliter:
                return (value / 1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }
}
exports.Molarity = Molarity;
//# sourceMappingURL=molarity.g.js.map