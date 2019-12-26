"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** MassMomentOfInertiaUnits enumeration */
var MassMomentOfInertiaUnits;
(function (MassMomentOfInertiaUnits) {
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareMeters"] = 0] = "GramSquareMeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareDecimeters"] = 1] = "GramSquareDecimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareCentimeters"] = 2] = "GramSquareCentimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["GramSquareMillimeters"] = 3] = "GramSquareMillimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareMeters"] = 4] = "TonneSquareMeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareDecimeters"] = 5] = "TonneSquareDecimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareCentimeters"] = 6] = "TonneSquareCentimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["TonneSquareMilimeters"] = 7] = "TonneSquareMilimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["PoundSquareFeet"] = 8] = "PoundSquareFeet";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["PoundSquareInches"] = 9] = "PoundSquareInches";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["SlugSquareFeet"] = 10] = "SlugSquareFeet";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["SlugSquareInches"] = 11] = "SlugSquareInches";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareMeters"] = 12] = "KilogramSquareMeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareDecimeters"] = 13] = "KilogramSquareDecimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareCentimeters"] = 14] = "KilogramSquareCentimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilogramSquareMillimeters"] = 15] = "KilogramSquareMillimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareMeters"] = 16] = "KilotonneSquareMeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareMeters"] = 17] = "MegatonneSquareMeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareDecimeters"] = 18] = "KilotonneSquareDecimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareDecimeters"] = 19] = "MegatonneSquareDecimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareCentimeters"] = 20] = "KilotonneSquareCentimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareCentimeters"] = 21] = "MegatonneSquareCentimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["KilotonneSquareMilimeters"] = 22] = "KilotonneSquareMilimeters";
    /** */
    MassMomentOfInertiaUnits[MassMomentOfInertiaUnits["MegatonneSquareMilimeters"] = 23] = "MegatonneSquareMilimeters";
})(MassMomentOfInertiaUnits = exports.MassMomentOfInertiaUnits || (exports.MassMomentOfInertiaUnits = {}));
/** A property of body reflects how its mass is distributed with regard to an axis. */
class MassMomentOfInertia {
    /**
     * Create a new MassMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘MassMomentOfInertia’ unit to create from.
     */
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
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of MassMomentOfInertia is KilogramSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramSquareMeters() {
        if (this.gramsquaremetersLazy !== null) {
            return this.gramsquaremetersLazy;
        }
        return this.gramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }
    /** */
    get GramSquareDecimeters() {
        if (this.gramsquaredecimetersLazy !== null) {
            return this.gramsquaredecimetersLazy;
        }
        return this.gramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }
    /** */
    get GramSquareCentimeters() {
        if (this.gramsquarecentimetersLazy !== null) {
            return this.gramsquarecentimetersLazy;
        }
        return this.gramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }
    /** */
    get GramSquareMillimeters() {
        if (this.gramsquaremillimetersLazy !== null) {
            return this.gramsquaremillimetersLazy;
        }
        return this.gramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }
    /** */
    get TonneSquareMeters() {
        if (this.tonnesquaremetersLazy !== null) {
            return this.tonnesquaremetersLazy;
        }
        return this.tonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }
    /** */
    get TonneSquareDecimeters() {
        if (this.tonnesquaredecimetersLazy !== null) {
            return this.tonnesquaredecimetersLazy;
        }
        return this.tonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }
    /** */
    get TonneSquareCentimeters() {
        if (this.tonnesquarecentimetersLazy !== null) {
            return this.tonnesquarecentimetersLazy;
        }
        return this.tonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }
    /** */
    get TonneSquareMilimeters() {
        if (this.tonnesquaremilimetersLazy !== null) {
            return this.tonnesquaremilimetersLazy;
        }
        return this.tonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }
    /** */
    get PoundSquareFeet() {
        if (this.poundsquarefeetLazy !== null) {
            return this.poundsquarefeetLazy;
        }
        return this.poundsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }
    /** */
    get PoundSquareInches() {
        if (this.poundsquareinchesLazy !== null) {
            return this.poundsquareinchesLazy;
        }
        return this.poundsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }
    /** */
    get SlugSquareFeet() {
        if (this.slugsquarefeetLazy !== null) {
            return this.slugsquarefeetLazy;
        }
        return this.slugsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }
    /** */
    get SlugSquareInches() {
        if (this.slugsquareinchesLazy !== null) {
            return this.slugsquareinchesLazy;
        }
        return this.slugsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }
    /** */
    get KilogramSquareMeters() {
        if (this.kilogramsquaremetersLazy !== null) {
            return this.kilogramsquaremetersLazy;
        }
        return this.kilogramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMeters);
    }
    /** */
    get KilogramSquareDecimeters() {
        if (this.kilogramsquaredecimetersLazy !== null) {
            return this.kilogramsquaredecimetersLazy;
        }
        return this.kilogramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }
    /** */
    get KilogramSquareCentimeters() {
        if (this.kilogramsquarecentimetersLazy !== null) {
            return this.kilogramsquarecentimetersLazy;
        }
        return this.kilogramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }
    /** */
    get KilogramSquareMillimeters() {
        if (this.kilogramsquaremillimetersLazy !== null) {
            return this.kilogramsquaremillimetersLazy;
        }
        return this.kilogramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }
    /** */
    get KilotonneSquareMeters() {
        if (this.kilotonnesquaremetersLazy !== null) {
            return this.kilotonnesquaremetersLazy;
        }
        return this.kilotonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }
    /** */
    get MegatonneSquareMeters() {
        if (this.megatonnesquaremetersLazy !== null) {
            return this.megatonnesquaremetersLazy;
        }
        return this.megatonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }
    /** */
    get KilotonneSquareDecimeters() {
        if (this.kilotonnesquaredecimetersLazy !== null) {
            return this.kilotonnesquaredecimetersLazy;
        }
        return this.kilotonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }
    /** */
    get MegatonneSquareDecimeters() {
        if (this.megatonnesquaredecimetersLazy !== null) {
            return this.megatonnesquaredecimetersLazy;
        }
        return this.megatonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }
    /** */
    get KilotonneSquareCentimeters() {
        if (this.kilotonnesquarecentimetersLazy !== null) {
            return this.kilotonnesquarecentimetersLazy;
        }
        return this.kilotonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }
    /** */
    get MegatonneSquareCentimeters() {
        if (this.megatonnesquarecentimetersLazy !== null) {
            return this.megatonnesquarecentimetersLazy;
        }
        return this.megatonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }
    /** */
    get KilotonneSquareMilimeters() {
        if (this.kilotonnesquaremilimetersLazy !== null) {
            return this.kilotonnesquaremilimetersLazy;
        }
        return this.kilotonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMilimeters);
    }
    /** */
    get MegatonneSquareMilimeters() {
        if (this.megatonnesquaremilimetersLazy !== null) {
            return this.megatonnesquaremilimetersLazy;
        }
        return this.megatonnesquaremilimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMilimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMeters
     *
     * @param value The unit as GramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareDecimeters
     *
     * @param value The unit as GramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareDecimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareCentimeters
     *
     * @param value The unit as GramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareCentimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMillimeters
     *
     * @param value The unit as GramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromGramSquareMillimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMillimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMeters
     *
     * @param value The unit as TonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareDecimeters
     *
     * @param value The unit as TonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareCentimeters
     *
     * @param value The unit as TonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMilimeters
     *
     * @param value The unit as TonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromTonneSquareMilimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMilimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareFeet
     *
     * @param value The unit as PoundSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromPoundSquareFeet(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareFeet);
    }
    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareInches
     *
     * @param value The unit as PoundSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromPoundSquareInches(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareInches);
    }
    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareFeet
     *
     * @param value The unit as SlugSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromSlugSquareFeet(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareFeet);
    }
    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareInches
     *
     * @param value The unit as SlugSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromSlugSquareInches(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareInches);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMeters
     *
     * @param value The unit as KilogramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareDecimeters
     *
     * @param value The unit as KilogramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareCentimeters
     *
     * @param value The unit as KilogramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMillimeters
     *
     * @param value The unit as KilogramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilogramSquareMillimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMeters
     *
     * @param value The unit as KilotonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMeters
     *
     * @param value The unit as MegatonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareMeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareDecimeters
     *
     * @param value The unit as KilotonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareDecimeters
     *
     * @param value The unit as MegatonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareDecimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareCentimeters
     *
     * @param value The unit as KilotonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareCentimeters
     *
     * @param value The unit as MegatonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareCentimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMilimeters
     *
     * @param value The unit as KilotonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromKilotonneSquareMilimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMilimeters);
    }
    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMilimeters
     *
     * @param value The unit as MegatonneSquareMilimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    static FromMegatonneSquareMilimeters(value) {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMilimeters);
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
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return (this.value * 1e5) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return (this.value * 1e7) / 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return (this.value * 1e9) / 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return (this.value * 1e-3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return (this.value * 1e-3) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return (this.value * 1e-1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return (this.value * 1e-1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return (this.value * 1e1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return (this.value * 1e1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
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
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return (value / 1e5) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return (value / 1e7) * 1000;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return (value / 1e9) * 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return (value / 1e-3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return (value / 1e-3) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return (value / 1e-1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return (value / 1e-1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return (value / 1e1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return (value / 1e1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
                return (value / 1e3) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the MassMomentOfInertia to string.
     * Note! the default format for MassMomentOfInertia is KilogramSquareMeters.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MassMomentOfInertia.
     * @returns The string format of the MassMomentOfInertia.
     */
    toString(toUnit = MassMomentOfInertiaUnits.KilogramSquareMeters) {
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
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return this.KilogramSquareMeters + ` g·m²`;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return this.KilogramSquareDecimeters + ` g·dm²`;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return this.KilogramSquareCentimeters + ` g·cm²`;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return this.KilogramSquareMillimeters + ` g·mm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return this.KilotonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return this.MegatonneSquareMeters + ` t·m²`;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return this.KilotonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return this.MegatonneSquareDecimeters + ` t·dm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return this.KilotonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return this.MegatonneSquareCentimeters + ` t·cm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMilimeters:
                return this.KilotonneSquareMilimeters + ` t·mm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMilimeters:
                return this.MegatonneSquareMilimeters + ` t·mm²`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MassMomentOfInertia = MassMomentOfInertia;
//# sourceMappingURL=massmomentofinertia.g.js.map