"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MassMomentOfInertiaUnits;
(function (MassMomentOfInertiaUnits) {
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareMeters"] = 0] = "GramSquareMeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareDecimeters"] = 1] = "GramSquareDecimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareCentimeters"] = 2] = "GramSquareCentimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareMillimeters"] = 3] = "GramSquareMillimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareMeters"] = 4] = "TonneSquareMeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareDecimeters"] = 5] = "TonneSquareDecimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareCentimeters"] = 6] = "TonneSquareCentimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareMilimeters"] = 7] = "TonneSquareMilimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["PoundSquareFeet"] = 8] = "PoundSquareFeet";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["PoundSquareInches"] = 9] = "PoundSquareInches";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["SlugSquareFeet"] = 10] = "SlugSquareFeet";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["SlugSquareInches"] = 11] = "SlugSquareInches";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilogramsquaremeters"] = 12] = "Kilogramsquaremeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilogramsquaredecimeters"] = 13] = "Kilogramsquaredecimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilogramsquarecentimeters"] = 14] = "Kilogramsquarecentimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilogramsquaremillimeters"] = 15] = "Kilogramsquaremillimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilotonnesquaremeters"] = 16] = "Kilotonnesquaremeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Megatonnesquaremeters"] = 17] = "Megatonnesquaremeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilotonnesquaredecimeters"] = 18] = "Kilotonnesquaredecimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Megatonnesquaredecimeters"] = 19] = "Megatonnesquaredecimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilotonnesquarecentimeters"] = 20] = "Kilotonnesquarecentimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Megatonnesquarecentimeters"] = 21] = "Megatonnesquarecentimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Kilotonnesquaremilimeters"] = 22] = "Kilotonnesquaremilimeters";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["Megatonnesquaremilimeters"] = 23] = "Megatonnesquaremilimeters";
})(MassMomentOfInertiaUnits = exports.MassMomentOfInertiaUnits || (exports.MassMomentOfInertiaUnits = {}));
class MassMomentOfInertia {
    constructor(value, fromUnit) {
        this.gramsquaremetersLazy = null;
        this.gramsquaredecimetersLazy = null;
        this.gramsquarecentimetersLazy = null;
        this.gramsquaremillimetersLazy = null;
        this.tonnesquaremetersLazy = null;
        this.tonnesquaredecimetersLazy = null;
        this.tonnesquarecentimetersLazy = null;
        this.tonnesquaremilimetersLazy = null;
        this.poundsquarefeetLazy = null;
        this.poundsquareinchesLazy = null;
        this.slugsquarefeetLazy = null;
        this.slugsquareinchesLazy = null;
        this.kilogramsquaremetersLazy = null;
        this.kilogramsquaredecimetersLazy = null;
        this.kilogramsquarecentimetersLazy = null;
        this.kilogramsquaremillimetersLazy = null;
        this.kilotonnesquaremetersLazy = null;
        this.megatonnesquaremetersLazy = null;
        this.kilotonnesquaredecimetersLazy = null;
        this.megatonnesquaredecimetersLazy = null;
        this.kilotonnesquarecentimetersLazy = null;
        this.megatonnesquarecentimetersLazy = null;
        this.kilotonnesquaremilimetersLazy = null;
        this.megatonnesquaremilimetersLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramSquareMeters() {
        if (this.gramsquaremetersLazy !== null) {
            return this.gramsquaremetersLazy;
        }
        return this.gramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }
    get GramSquareDecimeters() {
        if (this.gramsquaredecimetersLazy !== null) {
            return this.gramsquaredecimetersLazy;
        }
        return this.gramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }
    get GramSquareCentimeters() {
        if (this.gramsquarecentimetersLazy !== null) {
            return this.gramsquarecentimetersLazy;
        }
        return this.gramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }
    get GramSquareMillimeters() {
        if (this.gramsquaremillimetersLazy !== null) {
            return this.gramsquaremillimetersLazy;
        }
        return this.gramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }
    get TonneSquareMeters() {
        if (this.tonnesquaremetersLazy !== null) {
            return this.tonnesquaremetersLazy;
        }
        return this.tonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }
    get TonneSquareDecimeters() {
        if (this.tonnesquaredecimetersLazy !== null) {
            return this.tonnesquaredecimetersLazy;
        }
        return this.tonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }
    get TonneSquareCentimeters() {
        if (this.tonnesquarecentimetersLazy !== null) {
            return this.tonnesquarecentimetersLazy;
        }
        return this.tonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }
    get TonneSquareMilimeters() {
        if (this.tonnesquaremilimetersLazy !== null) {
            return this.tonnesquaremilimetersLazy;
        }
        return this.tonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }
    get PoundSquareFeet() {
        if (this.poundsquarefeetLazy !== null) {
            return this.poundsquarefeetLazy;
        }
        return this.poundsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }
    get PoundSquareInches() {
        if (this.poundsquareinchesLazy !== null) {
            return this.poundsquareinchesLazy;
        }
        return this.poundsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }
    get SlugSquareFeet() {
        if (this.slugsquarefeetLazy !== null) {
            return this.slugsquarefeetLazy;
        }
        return this.slugsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }
    get SlugSquareInches() {
        if (this.slugsquareinchesLazy !== null) {
            return this.slugsquareinchesLazy;
        }
        return this.slugsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }
    get Kilogramsquaremeters() {
        if (this.kilogramsquaremetersLazy !== null) {
            return this.kilogramsquaremetersLazy;
        }
        return this.kilogramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremeters);
    }
    get Kilogramsquaredecimeters() {
        if (this.kilogramsquaredecimetersLazy !== null) {
            return this.kilogramsquaredecimetersLazy;
        }
        return this.kilogramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaredecimeters);
    }
    get Kilogramsquarecentimeters() {
        if (this.kilogramsquarecentimetersLazy !== null) {
            return this.kilogramsquarecentimetersLazy;
        }
        return this.kilogramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquarecentimeters);
    }
    get Kilogramsquaremillimeters() {
        if (this.kilogramsquaremillimetersLazy !== null) {
            return this.kilogramsquaremillimetersLazy;
        }
        return this.kilogramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremillimeters);
    }
    get Kilotonnesquaremeters() {
        if (this.kilotonnesquaremetersLazy !== null) {
            return this.kilotonnesquaremetersLazy;
        }
        return this.kilotonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremeters);
    }
    get Megatonnesquaremeters() {
        if (this.megatonnesquaremetersLazy !== null) {
            return this.megatonnesquaremetersLazy;
        }
        return this.megatonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremeters);
    }
    get Kilotonnesquaredecimeters() {
        if (this.kilotonnesquaredecimetersLazy !== null) {
            return this.kilotonnesquaredecimetersLazy;
        }
        return this.kilotonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaredecimeters);
    }
    get Megatonnesquaredecimeters() {
        if (this.megatonnesquaredecimetersLazy !== null) {
            return this.megatonnesquaredecimetersLazy;
        }
        return this.megatonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaredecimeters);
    }
    get Kilotonnesquarecentimeters() {
        if (this.kilotonnesquarecentimetersLazy !== null) {
            return this.kilotonnesquarecentimetersLazy;
        }
        return this.kilotonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquarecentimeters);
    }
    get Megatonnesquarecentimeters() {
        if (this.megatonnesquarecentimetersLazy !== null) {
            return this.megatonnesquarecentimetersLazy;
        }
        return this.megatonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquarecentimeters);
    }
    get Kilotonnesquaremilimeters() {
        if (this.kilotonnesquaremilimetersLazy !== null) {
            return this.kilotonnesquaremilimetersLazy;
        }
        return this.kilotonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremilimeters);
    }
    get Megatonnesquaremilimeters() {
        if (this.megatonnesquaremilimetersLazy !== null) {
            return this.megatonnesquaremilimetersLazy;
        }
        return this.megatonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremilimeters);
    }
    static FromGramSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMeters);
    }
    static FromGramSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareDecimeters);
    }
    static FromGramSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareCentimeters);
    }
    static FromGramSquareMillimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMillimeters);
    }
    static FromTonneSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMeters);
    }
    static FromTonneSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }
    static FromTonneSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }
    static FromTonneSquareMilimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }
    static FromPoundSquareFeet(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareFeet);
    }
    static FromPoundSquareInches(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareInches);
    }
    static FromSlugSquareFeet(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareFeet);
    }
    static FromSlugSquareInches(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareInches);
    }
    static FromKilogramsquaremeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquaremeters);
    }
    static FromKilogramsquaredecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquaredecimeters);
    }
    static FromKilogramsquarecentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquarecentimeters);
    }
    static FromKilogramsquaremillimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilogramsquaremillimeters);
    }
    static FromKilotonnesquaremeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquaremeters);
    }
    static FromMegatonnesquaremeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquaremeters);
    }
    static FromKilotonnesquaredecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquaredecimeters);
    }
    static FromMegatonnesquaredecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquaredecimeters);
    }
    static FromKilotonnesquarecentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquarecentimeters);
    }
    static FromMegatonnesquarecentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquarecentimeters);
    }
    static FromKilotonnesquaremilimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Kilotonnesquaremilimeters);
    }
    static FromMegatonnesquaremilimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.Megatonnesquaremilimeters);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return this.value * 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return this.value * 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return this.value * 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return this.value * 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return this.value * 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return this.value * 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return this.value * 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return this.value * 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return this.value / 4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return this.value / 2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return this.value / 1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return this.value / 9.41540242e-3;
            case MassMomentOfInertiaUnits.Kilogramsquaremeters:
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaredecimeters:
                return (this.value * 1e5) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquarecentimeters:
                return (this.value * 1e7) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaremillimeters:
                return (this.value * 1e9) / 1000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremeters:
                return (this.value * 1e-3) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremeters:
                return (this.value * 1e-3) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaredecimeters:
                return (this.value * 1e-1) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaredecimeters:
                return (this.value * 1e-1) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquarecentimeters:
                return (this.value * 1e1) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquarecentimeters:
                return (this.value * 1e1) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremilimeters:
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremilimeters:
                return (this.value * 1e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return value / 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return value / 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return value / 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return value / 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return value / 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return value / 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return value / 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return value / 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return value * 4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return value * 2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return value * 1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return value * 9.41540242e-3;
            case MassMomentOfInertiaUnits.Kilogramsquaremeters:
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaredecimeters:
                return (value / 1e5) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquarecentimeters:
                return (value / 1e7) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaremillimeters:
                return (value / 1e9) * 1000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremeters:
                return (value / 1e-3) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremeters:
                return (value / 1e-3) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaredecimeters:
                return (value / 1e-1) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaredecimeters:
                return (value / 1e-1) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquarecentimeters:
                return (value / 1e1) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquarecentimeters:
                return (value / 1e1) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremilimeters:
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremilimeters:
                return (value / 1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassMomentOfInertia = MassMomentOfInertia;
//# sourceMappingURL=massmomentofinertia.g.js.map