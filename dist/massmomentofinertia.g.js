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
        this.value = this.convertToBase(value, fromUnit);
    }
    get GramSquareMeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }
    get GramSquareDecimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }
    get GramSquareCentimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }
    get GramSquareMillimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }
    get TonneSquareMeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }
    get TonneSquareDecimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }
    get TonneSquareCentimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }
    get TonneSquareMilimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }
    get PoundSquareFeet() {
        return this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }
    get PoundSquareInches() {
        return this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }
    get SlugSquareFeet() {
        return this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }
    get SlugSquareInches() {
        return this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }
    get Kilogramsquaremeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremeters);
    }
    get Kilogramsquaredecimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaredecimeters);
    }
    get Kilogramsquarecentimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquarecentimeters);
    }
    get Kilogramsquaremillimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilogramsquaremillimeters);
    }
    get Kilotonnesquaremeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremeters);
    }
    get Megatonnesquaremeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremeters);
    }
    get Kilotonnesquaredecimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaredecimeters);
    }
    get Megatonnesquaredecimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaredecimeters);
    }
    get Kilotonnesquarecentimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquarecentimeters);
    }
    get Megatonnesquarecentimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquarecentimeters);
    }
    get Kilotonnesquaremilimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Kilotonnesquaremilimeters);
    }
    get Megatonnesquaremilimeters() {
        return this.convertFromBase(MassMomentOfInertiaUnits.Megatonnesquaremilimeters);
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
                return this.value / 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return this.value / 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return this.value / 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return this.value / 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return this.value / 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return this.value / 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return this.value / 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return this.value / 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return this.value * 4.21401101e-2;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return this.value * 2.9263965e-4;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return this.value * 1.3558179619;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return this.value * 9.41540242e-3;
            case MassMomentOfInertiaUnits.Kilogramsquaremeters:
                return (this.value * 1e3) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaredecimeters:
                return (this.value * 1e5) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquarecentimeters:
                return (this.value * 1e7) * 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaremillimeters:
                return (this.value * 1e9) * 1000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremeters:
                return (this.value * 1e-3) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremeters:
                return (this.value * 1e-3) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaredecimeters:
                return (this.value * 1e-1) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaredecimeters:
                return (this.value * 1e-1) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquarecentimeters:
                return (this.value * 1e1) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquarecentimeters:
                return (this.value * 1e1) * 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremilimeters:
                return (this.value * 1e3) * 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremilimeters:
                return (this.value * 1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
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
                return (this.value / 1e3) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaredecimeters:
                return (this.value / 1e5) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquarecentimeters:
                return (this.value / 1e7) / 1000;
            case MassMomentOfInertiaUnits.Kilogramsquaremillimeters:
                return (this.value / 1e9) / 1000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremeters:
                return (this.value / 1e-3) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremeters:
                return (this.value / 1e-3) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaredecimeters:
                return (this.value / 1e-1) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaredecimeters:
                return (this.value / 1e-1) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquarecentimeters:
                return (this.value / 1e1) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquarecentimeters:
                return (this.value / 1e1) / 1000000;
            case MassMomentOfInertiaUnits.Kilotonnesquaremilimeters:
                return (this.value / 1e3) / 1000;
            case MassMomentOfInertiaUnits.Megatonnesquaremilimeters:
                return (this.value / 1e3) / 1000000;
            default:
                break;
        }
        return NaN;
    }
}
exports.MassMomentOfInertia = MassMomentOfInertia;
//# sourceMappingURL=massmomentofinertia.g.js.map