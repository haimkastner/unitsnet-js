"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AmountOfSubstanceUnits;
(function (AmountOfSubstanceUnits) {
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Moles"] = 0] = "Moles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["PoundMoles"] = 1] = "PoundMoles";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Nanomole"] = 2] = "Nanomole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Micromole"] = 3] = "Micromole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Centimole"] = 4] = "Centimole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Decimole"] = 5] = "Decimole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Kilomole"] = 6] = "Kilomole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["Megamole"] = 7] = "Megamole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["NanopoundMole"] = 8] = "NanopoundMole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["MicropoundMole"] = 9] = "MicropoundMole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["CentipoundMole"] = 10] = "CentipoundMole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["DecipoundMole"] = 11] = "DecipoundMole";
    AmountOfSubstanceUnits[AmountOfSubstanceUnits["KilopoundMole"] = 12] = "KilopoundMole";
})(AmountOfSubstanceUnits = exports.AmountOfSubstanceUnits || (exports.AmountOfSubstanceUnits = {}));
class AmountOfSubstance {
    constructor(value, fromUnit) {
        this.molesLazy = null;
        this.poundmolesLazy = null;
        this.nanomoleLazy = null;
        this.micromoleLazy = null;
        this.centimoleLazy = null;
        this.decimoleLazy = null;
        this.kilomoleLazy = null;
        this.megamoleLazy = null;
        this.nanopoundmoleLazy = null;
        this.micropoundmoleLazy = null;
        this.centipoundmoleLazy = null;
        this.decipoundmoleLazy = null;
        this.kilopoundmoleLazy = null;
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
    get Nanomole() {
        if (this.nanomoleLazy !== null) {
            return this.nanomoleLazy;
        }
        return this.nanomoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Nanomole);
    }
    get Micromole() {
        if (this.micromoleLazy !== null) {
            return this.micromoleLazy;
        }
        return this.micromoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Micromole);
    }
    get Centimole() {
        if (this.centimoleLazy !== null) {
            return this.centimoleLazy;
        }
        return this.centimoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Centimole);
    }
    get Decimole() {
        if (this.decimoleLazy !== null) {
            return this.decimoleLazy;
        }
        return this.decimoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Decimole);
    }
    get Kilomole() {
        if (this.kilomoleLazy !== null) {
            return this.kilomoleLazy;
        }
        return this.kilomoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Kilomole);
    }
    get Megamole() {
        if (this.megamoleLazy !== null) {
            return this.megamoleLazy;
        }
        return this.megamoleLazy = this.convertFromBase(AmountOfSubstanceUnits.Megamole);
    }
    get NanopoundMole() {
        if (this.nanopoundmoleLazy !== null) {
            return this.nanopoundmoleLazy;
        }
        return this.nanopoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.NanopoundMole);
    }
    get MicropoundMole() {
        if (this.micropoundmoleLazy !== null) {
            return this.micropoundmoleLazy;
        }
        return this.micropoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.MicropoundMole);
    }
    get CentipoundMole() {
        if (this.centipoundmoleLazy !== null) {
            return this.centipoundmoleLazy;
        }
        return this.centipoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.CentipoundMole);
    }
    get DecipoundMole() {
        if (this.decipoundmoleLazy !== null) {
            return this.decipoundmoleLazy;
        }
        return this.decipoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.DecipoundMole);
    }
    get KilopoundMole() {
        if (this.kilopoundmoleLazy !== null) {
            return this.kilopoundmoleLazy;
        }
        return this.kilopoundmoleLazy = this.convertFromBase(AmountOfSubstanceUnits.KilopoundMole);
    }
    static FromMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Moles);
    }
    static FromPoundMoles(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.PoundMoles);
    }
    static FromNanomole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Nanomole);
    }
    static FromMicromole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Micromole);
    }
    static FromCentimole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Centimole);
    }
    static FromDecimole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Decimole);
    }
    static FromKilomole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Kilomole);
    }
    static FromMegamole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.Megamole);
    }
    static FromNanopoundMole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.NanopoundMole);
    }
    static FromMicropoundMole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.MicropoundMole);
    }
    static FromCentipoundMole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.CentipoundMole);
    }
    static FromDecipoundMole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.DecipoundMole);
    }
    static FromKilopoundMole(value) {
        return new AmountOfSubstance(value, AmountOfSubstanceUnits.KilopoundMole);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case AmountOfSubstanceUnits.Moles:
                return this.value;
            case AmountOfSubstanceUnits.PoundMoles:
                return this.value / 453.59237;
            case AmountOfSubstanceUnits.Nanomole:
                return (this.value) / 1e-9;
            case AmountOfSubstanceUnits.Micromole:
                return (this.value) / 0.000001;
            case AmountOfSubstanceUnits.Centimole:
                return (this.value) / 0.01;
            case AmountOfSubstanceUnits.Decimole:
                return (this.value) / 0.1;
            case AmountOfSubstanceUnits.Kilomole:
                return (this.value) / 1000;
            case AmountOfSubstanceUnits.Megamole:
                return (this.value) / 1000000;
            case AmountOfSubstanceUnits.NanopoundMole:
                return (this.value / 453.59237) / 1e-9;
            case AmountOfSubstanceUnits.MicropoundMole:
                return (this.value / 453.59237) / 0.000001;
            case AmountOfSubstanceUnits.CentipoundMole:
                return (this.value / 453.59237) / 0.01;
            case AmountOfSubstanceUnits.DecipoundMole:
                return (this.value / 453.59237) / 0.1;
            case AmountOfSubstanceUnits.KilopoundMole:
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
            case AmountOfSubstanceUnits.Nanomole:
                return (value) * 1e-9;
            case AmountOfSubstanceUnits.Micromole:
                return (value) * 0.000001;
            case AmountOfSubstanceUnits.Centimole:
                return (value) * 0.01;
            case AmountOfSubstanceUnits.Decimole:
                return (value) * 0.1;
            case AmountOfSubstanceUnits.Kilomole:
                return (value) * 1000;
            case AmountOfSubstanceUnits.Megamole:
                return (value) * 1000000;
            case AmountOfSubstanceUnits.NanopoundMole:
                return (value * 453.59237) * 1e-9;
            case AmountOfSubstanceUnits.MicropoundMole:
                return (value * 453.59237) * 0.000001;
            case AmountOfSubstanceUnits.CentipoundMole:
                return (value * 453.59237) * 0.01;
            case AmountOfSubstanceUnits.DecipoundMole:
                return (value * 453.59237) * 0.1;
            case AmountOfSubstanceUnits.KilopoundMole:
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
            case AmountOfSubstanceUnits.Nanomole:
                return this.Nanomole + ` mol`;
            case AmountOfSubstanceUnits.Micromole:
                return this.Micromole + ` mol`;
            case AmountOfSubstanceUnits.Centimole:
                return this.Centimole + ` mol`;
            case AmountOfSubstanceUnits.Decimole:
                return this.Decimole + ` mol`;
            case AmountOfSubstanceUnits.Kilomole:
                return this.Kilomole + ` mol`;
            case AmountOfSubstanceUnits.Megamole:
                return this.Megamole + ` mol`;
            case AmountOfSubstanceUnits.NanopoundMole:
                return this.NanopoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.MicropoundMole:
                return this.MicropoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.CentipoundMole:
                return this.CentipoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.DecipoundMole:
                return this.DecipoundMole + ` lbmol`;
            case AmountOfSubstanceUnits.KilopoundMole:
                return this.KilopoundMole + ` lbmol`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.AmountOfSubstance = AmountOfSubstance;
//# sourceMappingURL=amountofsubstance.g.js.map