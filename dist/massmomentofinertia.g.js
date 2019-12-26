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
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareMeter"] = 12] = "KilogramSquareMeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareDecimeter"] = 13] = "KilogramSquareDecimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareCentimeter"] = 14] = "KilogramSquareCentimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareMillimeter"] = 15] = "KilogramSquareMillimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareMeter"] = 16] = "KilotonneSquareMeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareMeter"] = 17] = "MegatonneSquareMeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareDecimeter"] = 18] = "KilotonneSquareDecimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareDecimeter"] = 19] = "MegatonneSquareDecimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareCentimeter"] = 20] = "KilotonneSquareCentimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareCentimeter"] = 21] = "MegatonneSquareCentimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareMilimeter"] = 22] = "KilotonneSquareMilimeter";
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareMilimeter"] = 23] = "MegatonneSquareMilimeter";
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
        this.kilogramsquaremeterLazy = null;
        this.kilogramsquaredecimeterLazy = null;
        this.kilogramsquarecentimeterLazy = null;
        this.kilogramsquaremillimeterLazy = null;
        this.kilotonnesquaremeterLazy = null;
        this.megatonnesquaremeterLazy = null;
        this.kilotonnesquaredecimeterLazy = null;
        this.megatonnesquaredecimeterLazy = null;
        this.kilotonnesquarecentimeterLazy = null;
        this.megatonnesquarecentimeterLazy = null;
        this.kilotonnesquaremilimeterLazy = null;
        this.megatonnesquaremilimeterLazy = null;
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
    get KilogramSquareMeter() {
        if (this.kilogramsquaremeterLazy !== null) {
            return this.kilogramsquaremeterLazy;
        }
        return this.kilogramsquaremeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMeter);
    }
    get KilogramSquareDecimeter() {
        if (this.kilogramsquaredecimeterLazy !== null) {
            return this.kilogramsquaredecimeterLazy;
        }
        return this.kilogramsquaredecimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareDecimeter);
    }
    get KilogramSquareCentimeter() {
        if (this.kilogramsquarecentimeterLazy !== null) {
            return this.kilogramsquarecentimeterLazy;
        }
        return this.kilogramsquarecentimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareCentimeter);
    }
    get KilogramSquareMillimeter() {
        if (this.kilogramsquaremillimeterLazy !== null) {
            return this.kilogramsquaremillimeterLazy;
        }
        return this.kilogramsquaremillimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMillimeter);
    }
    get KilotonneSquareMeter() {
        if (this.kilotonnesquaremeterLazy !== null) {
            return this.kilotonnesquaremeterLazy;
        }
        return this.kilotonnesquaremeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMeter);
    }
    get MegatonneSquareMeter() {
        if (this.megatonnesquaremeterLazy !== null) {
            return this.megatonnesquaremeterLazy;
        }
        return this.megatonnesquaremeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMeter);
    }
    get KilotonneSquareDecimeter() {
        if (this.kilotonnesquaredecimeterLazy !== null) {
            return this.kilotonnesquaredecimeterLazy;
        }
        return this.kilotonnesquaredecimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareDecimeter);
    }
    get MegatonneSquareDecimeter() {
        if (this.megatonnesquaredecimeterLazy !== null) {
            return this.megatonnesquaredecimeterLazy;
        }
        return this.megatonnesquaredecimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareDecimeter);
    }
    get KilotonneSquareCentimeter() {
        if (this.kilotonnesquarecentimeterLazy !== null) {
            return this.kilotonnesquarecentimeterLazy;
        }
        return this.kilotonnesquarecentimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareCentimeter);
    }
    get MegatonneSquareCentimeter() {
        if (this.megatonnesquarecentimeterLazy !== null) {
            return this.megatonnesquarecentimeterLazy;
        }
        return this.megatonnesquarecentimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareCentimeter);
    }
    get KilotonneSquareMilimeter() {
        if (this.kilotonnesquaremilimeterLazy !== null) {
            return this.kilotonnesquaremilimeterLazy;
        }
        return this.kilotonnesquaremilimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMilimeter);
    }
    get MegatonneSquareMilimeter() {
        if (this.megatonnesquaremilimeterLazy !== null) {
            return this.megatonnesquaremilimeterLazy;
        }
        return this.megatonnesquaremilimeterLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMilimeter);
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
    static FromKilogramSquareMeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMeter);
    }
    static FromKilogramSquareDecimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareDecimeter);
    }
    static FromKilogramSquareCentimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareCentimeter);
    }
    static FromKilogramSquareMillimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMillimeter);
    }
    static FromKilotonneSquareMeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMeter);
    }
    static FromMegatonneSquareMeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMeter);
    }
    static FromKilotonneSquareDecimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareDecimeter);
    }
    static FromMegatonneSquareDecimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareDecimeter);
    }
    static FromKilotonneSquareCentimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareCentimeter);
    }
    static FromMegatonneSquareCentimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareCentimeter);
    }
    static FromKilotonneSquareMilimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMilimeter);
    }
    static FromMegatonneSquareMilimeter(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMilimeter);
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
            case MassMomentOfInertiaUnits.KilogramSquareMeter:
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeter:
                return (this.value * 1e5) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeter:
                return (this.value * 1e7) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeter:
                return (this.value * 1e9) / 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeter:
                return (this.value * 1e-3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeter:
                return (this.value * 1e-3) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeter:
                return (this.value * 1e-1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeter:
                return (this.value * 1e-1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeter:
                return (this.value * 1e1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeter:
                return (this.value * 1e1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeter:
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeter:
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
            case MassMomentOfInertiaUnits.KilogramSquareMeter:
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeter:
                return (value / 1e5) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeter:
                return (value / 1e7) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeter:
                return (value / 1e9) * 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeter:
                return (value / 1e-3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeter:
                return (value / 1e-3) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeter:
                return (value / 1e-1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeter:
                return (value / 1e-1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeter:
                return (value / 1e1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeter:
                return (value / 1e1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeter:
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeter:
                return (value / 1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MassMomentOfInertiaUnits.KilogramSquareMeter) {
        switch (toUnit) {
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return this.GramSquareMeters + ` g·m²`;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return this.GramSquareDecimeters + ` g·dm²`;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return this.GramSquareCentimeters + ` g·cm²`;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return this.GramSquareMillimeters + ` g·mm²`;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return this.TonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return this.TonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return this.TonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.TonneSquareMilimeters:
                return this.TonneSquareMilimeters + ` t·mm²`;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return this.PoundSquareFeet + ` lb·ft²`;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return this.PoundSquareInches + ` lb·in²`;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return this.SlugSquareFeet + ` slug·ft²`;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return this.SlugSquareInches + ` slug·in²`;
            case MassMomentOfInertiaUnits.KilogramSquareMeter:
                return this.KilogramSquareMeter + ` g·m²`;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeter:
                return this.KilogramSquareDecimeter + ` g·dm²`;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeter:
                return this.KilogramSquareCentimeter + ` g·cm²`;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeter:
                return this.KilogramSquareMillimeter + ` g·mm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMeter:
                return this.KilotonneSquareMeter + ` t·m²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMeter:
                return this.MegatonneSquareMeter + ` t·m²`;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeter:
                return this.KilotonneSquareDecimeter + ` t·dm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeter:
                return this.MegatonneSquareDecimeter + ` t·dm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeter:
                return this.KilotonneSquareCentimeter + ` t·cm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeter:
                return this.MegatonneSquareCentimeter + ` t·cm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeter:
                return this.KilotonneSquareMilimeter + ` t·mm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeter:
                return this.MegatonneSquareMilimeter + ` t·mm²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassMomentOfInertia = MassMomentOfInertia;
//# sourceMappingURL=massmomentofinertia.g.js.map