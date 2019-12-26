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
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Nanopoundmoles"] = 8] = "Nanopoundmoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Micropoundmoles"] = 9] = "Micropoundmoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Centipoundmoles"] = 10] = "Centipoundmoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Decipoundmoles"] = 11] = "Decipoundmoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Kilopoundmoles"] = 12] = "Kilopoundmoles";
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
    get Nanopoundmoles() {
        if (this.nanopoundmolesLazy !== null) {
            return this.nanopoundmolesLazy;
        }
        return this.nanopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanopoundmoles);
    }
    get Micropoundmoles() {
        if (this.micropoundmolesLazy !== null) {
            return this.micropoundmolesLazy;
        }
        return this.micropoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Micropoundmoles);
    }
    get Centipoundmoles() {
        if (this.centipoundmolesLazy !== null) {
            return this.centipoundmolesLazy;
        }
        return this.centipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Centipoundmoles);
    }
    get Decipoundmoles() {
        if (this.decipoundmolesLazy !== null) {
            return this.decipoundmolesLazy;
        }
        return this.decipoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Decipoundmoles);
    }
    get Kilopoundmoles() {
        if (this.kilopoundmolesLazy !== null) {
            return this.kilopoundmolesLazy;
        }
        return this.kilopoundmolesLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilopoundmoles);
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
    static FromNanopoundmoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanopoundmoles);
    }
    static FromMicropoundmoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micropoundmoles);
    }
    static FromCentipoundmoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centipoundmoles);
    }
    static FromDecipoundmoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decipoundmoles);
    }
    static FromKilopoundmoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilopoundmoles);
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
            case AmountOfSubstanceUnits.Nanopoundmoles:
                return (this.value / 453.59237) / 1e-9;
            case AmountOfSubstanceUnits.Micropoundmoles:
                return (this.value / 453.59237) / 0.000001;
            case AmountOfSubstanceUnits.Centipoundmoles:
                return (this.value / 453.59237) / 0.01;
            case AmountOfSubstanceUnits.Decipoundmoles:
                return (this.value / 453.59237) / 0.1;
            case AmountOfSubstanceUnits.Kilopoundmoles:
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
            case AmountOfSubstanceUnits.Nanopoundmoles:
                return (value * 453.59237) * 1e-9;
            case AmountOfSubstanceUnits.Micropoundmoles:
                return (value * 453.59237) * 0.000001;
            case AmountOfSubstanceUnits.Centipoundmoles:
                return (value * 453.59237) * 0.01;
            case AmountOfSubstanceUnits.Decipoundmoles:
                return (value * 453.59237) * 0.1;
            case AmountOfSubstanceUnits.Kilopoundmoles:
                return (value * 453.59237) * 1000;
            default:
                break;
        }
        return NaN;
    }
}
exports.AmountOfSubstance = AmountOfSubstance;
//# sourceMappingURL=amountofsubstance.g.js.map