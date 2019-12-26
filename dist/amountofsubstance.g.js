"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmountOfSubstanceUnits;
(function (AmountOfSubstanceUnits) {
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Moles"] = 0] = "Moles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["PoundMoles"] = 1] = "PoundMoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Nanomoles"] = 2] = "Nanomoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Micromoles"] = 3] = "Micromoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Centimoles"] = 4] = "Centimoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Decimoles"] = 5] = "Decimoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Kilomoles"] = 6] = "Kilomoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Megamoles"] = 7] = "Megamoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["NanopoundMoles"] = 8] = "NanopoundMoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["MicropoundMoles"] = 9] = "MicropoundMoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["CentipoundMoles"] = 10] = "CentipoundMoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["DecipoundMoles"] = 11] = "DecipoundMoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["KilopoundMoles"] = 12] = "KilopoundMoles";
})(AmountOfSubstanceUnits = exports.AmountOfSubstanceUnits || (exports.AmountOfSubstanceUnits = {}));
class AmountOfSubstance {
    constructor(value, fromUnit) {
        this.molesLazy = null;
        this.poundmolesLazy = null;
        this.nanomolesLazy = null;
        this.micromolesLazy = null;
        this.centimolesLazy = null;
        this.decimolesLazy = null;
        this.kilomolesLazy = null;
        this.megamolesLazy = null;
        this.nanopoundmolesLazy = null;
        this.micropoundmolesLazy = null;
        this.centipoundmolesLazy = null;
        this.decipoundmolesLazy = null;
        this.kilopoundmolesLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Moles() {
        if (this.molesLazy !== null) {
            return this.molesLazy;
        }
        return this.molesLazy = this.convertFromBase(AmountOfSubstanceUnits.Moles);
    }
    get PoundMoles() {
        if (this.poundmolesLazy !== null) {
            return this.poundmolesLazy;
        }
        return this.poundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.PoundMoles);
    }
    get Nanomoles() {
        if (this.nanomolesLazy !== null) {
            return this.nanomolesLazy;
        }
        return this.nanomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanomoles);
    }
    get Micromoles() {
        if (this.micromolesLazy !== null) {
            return this.micromolesLazy;
        }
        return this.micromolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Micromoles);
    }
    get Centimoles() {
        if (this.centimolesLazy !== null) {
            return this.centimolesLazy;
        }
        return this.centimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Centimoles);
    }
    get Decimoles() {
        if (this.decimolesLazy !== null) {
            return this.decimolesLazy;
        }
        return this.decimolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Decimoles);
    }
    get Kilomoles() {
        if (this.kilomolesLazy !== null) {
            return this.kilomolesLazy;
        }
        return this.kilomolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilomoles);
    }
    get Megamoles() {
        if (this.megamolesLazy !== null) {
            return this.megamolesLazy;
        }
        return this.megamolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Megamoles);
    }
    get NanopoundMoles() {
        if (this.nanopoundmolesLazy !== null) {
            return this.nanopoundmolesLazy;
        }
        return this.nanopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.NanopoundMoles);
    }
    get MicropoundMoles() {
        if (this.micropoundmolesLazy !== null) {
            return this.micropoundmolesLazy;
        }
        return this.micropoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.MicropoundMoles);
    }
    get CentipoundMoles() {
        if (this.centipoundmolesLazy !== null) {
            return this.centipoundmolesLazy;
        }
        return this.centipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.CentipoundMoles);
    }
    get DecipoundMoles() {
        if (this.decipoundmolesLazy !== null) {
            return this.decipoundmolesLazy;
        }
        return this.decipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.DecipoundMoles);
    }
    get KilopoundMoles() {
        if (this.kilopoundmolesLazy !== null) {
            return this.kilopoundmolesLazy;
        }
        return this.kilopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.KilopoundMoles);
    }
    static FromMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Moles);
    }
    static FromPoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.PoundMoles);
    }
    static FromNanomoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanomoles);
    }
    static FromMicromoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micromoles);
    }
    static FromCentimoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centimoles);
    }
    static FromDecimoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decimoles);
    }
    static FromKilomoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilomoles);
    }
    static FromMegamoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Megamoles);
    }
    static FromNanopoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.NanopoundMoles);
    }
    static FromMicropoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MicropoundMoles);
    }
    static FromCentipoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.CentipoundMoles);
    }
    static FromDecipoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.DecipoundMoles);
    }
    static FromKilopoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.KilopoundMoles);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AmountOfSubstanceUnits.Moles:
                return this.value;
            case AmountOfSubstanceUnits.PoundMoles:
                return this.value / 453.59237;
            case AmountOfSubstanceUnits.Nanomoles:
                return (this.value) / 1e-9;
            case AmountOfSubstanceUnits.Micromoles:
                return (this.value) / 0.000001;
            case AmountOfSubstanceUnits.Centimoles:
                return (this.value) / 0.01;
            case AmountOfSubstanceUnits.Decimoles:
                return (this.value) / 0.1;
            case AmountOfSubstanceUnits.Kilomoles:
                return (this.value) / 1000;
            case AmountOfSubstanceUnits.Megamoles:
                return (this.value) / 1000000;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return (this.value / 453.59237) / 1e-9;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return (this.value / 453.59237) / 0.000001;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return (this.value / 453.59237) / 0.01;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return (this.value / 453.59237) / 0.1;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return (this.value / 453.59237) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case AmountOfSubstanceUnits.Moles:
                return value;
            case AmountOfSubstanceUnits.PoundMoles:
                return value * 453.59237;
            case AmountOfSubstanceUnits.Nanomoles:
                return (value) * 1e-9;
            case AmountOfSubstanceUnits.Micromoles:
                return (value) * 0.000001;
            case AmountOfSubstanceUnits.Centimoles:
                return (value) * 0.01;
            case AmountOfSubstanceUnits.Decimoles:
                return (value) * 0.1;
            case AmountOfSubstanceUnits.Kilomoles:
                return (value) * 1000;
            case AmountOfSubstanceUnits.Megamoles:
                return (value) * 1000000;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return (value * 453.59237) * 1e-9;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return (value * 453.59237) * 0.000001;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return (value * 453.59237) * 0.01;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return (value * 453.59237) * 0.1;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return (value * 453.59237) * 1000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = AmountOfSubstanceUnits.Moles) {
        switch (toUnit) {
            case AmountOfSubstanceUnits.Moles:
                return this.Moles + ` mol`;
            case AmountOfSubstanceUnits.PoundMoles:
                return this.PoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.Nanomoles:
                return this.Nanomoles + ` mol`;
            case AmountOfSubstanceUnits.Micromoles:
                return this.Micromoles + ` mol`;
            case AmountOfSubstanceUnits.Centimoles:
                return this.Centimoles + ` mol`;
            case AmountOfSubstanceUnits.Decimoles:
                return this.Decimoles + ` mol`;
            case AmountOfSubstanceUnits.Kilomoles:
                return this.Kilomoles + ` mol`;
            case AmountOfSubstanceUnits.Megamoles:
                return this.Megamoles + ` mol`;
            case AmountOfSubstanceUnits.NanopoundMoles:
                return this.NanopoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.MicropoundMoles:
                return this.MicropoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.CentipoundMoles:
                return this.CentipoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.DecipoundMoles:
                return this.DecipoundMoles + ` lbmol`;
            case AmountOfSubstanceUnits.KilopoundMoles:
                return this.KilopoundMoles + ` lbmol`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.AmountOfSubstance = AmountOfSubstance;
//# sourceMappingURL=amountofsubstance.g.js.map