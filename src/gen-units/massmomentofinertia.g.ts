import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a MassMomentOfInertia */
export interface MassMomentOfInertiaDto {
    /** The value of the MassMomentOfInertia */
    value: number;
    /**  The specific unit that the MassMomentOfInertia value is representing */
    unit: MassMomentOfInertiaUnits;
}

/** MassMomentOfInertiaUnits enumeration */
export enum MassMomentOfInertiaUnits {
    /** */
    GramSquareMeters = "GramSquareMeter",
    /** */
    GramSquareDecimeters = "GramSquareDecimeter",
    /** */
    GramSquareCentimeters = "GramSquareCentimeter",
    /** */
    GramSquareMillimeters = "GramSquareMillimeter",
    /** */
    TonneSquareMeters = "TonneSquareMeter",
    /** */
    TonneSquareDecimeters = "TonneSquareDecimeter",
    /** */
    TonneSquareCentimeters = "TonneSquareCentimeter",
    /** */
    TonneSquareMillimeters = "TonneSquareMillimeter",
    /** */
    PoundSquareFeet = "PoundSquareFoot",
    /** */
    PoundSquareInches = "PoundSquareInch",
    /** */
    SlugSquareFeet = "SlugSquareFoot",
    /** */
    SlugSquareInches = "SlugSquareInch",
    /** */
    MilligramSquareMeters = "MilligramSquareMeter",
    /** */
    KilogramSquareMeters = "KilogramSquareMeter",
    /** */
    MilligramSquareDecimeters = "MilligramSquareDecimeter",
    /** */
    KilogramSquareDecimeters = "KilogramSquareDecimeter",
    /** */
    MilligramSquareCentimeters = "MilligramSquareCentimeter",
    /** */
    KilogramSquareCentimeters = "KilogramSquareCentimeter",
    /** */
    MilligramSquareMillimeters = "MilligramSquareMillimeter",
    /** */
    KilogramSquareMillimeters = "KilogramSquareMillimeter",
    /** */
    KilotonneSquareMeters = "KilotonneSquareMeter",
    /** */
    MegatonneSquareMeters = "MegatonneSquareMeter",
    /** */
    KilotonneSquareDecimeters = "KilotonneSquareDecimeter",
    /** */
    MegatonneSquareDecimeters = "MegatonneSquareDecimeter",
    /** */
    KilotonneSquareCentimeters = "KilotonneSquareCentimeter",
    /** */
    MegatonneSquareCentimeters = "MegatonneSquareCentimeter",
    /** */
    KilotonneSquareMillimeters = "KilotonneSquareMillimeter",
    /** */
    MegatonneSquareMillimeters = "MegatonneSquareMillimeter"
}

/** A property of body reflects how its mass is distributed with regard to an axis. */
export class MassMomentOfInertia extends BaseUnit {
    protected value: number;
    private gramsquaremetersLazy: number | null = null;
    private gramsquaredecimetersLazy: number | null = null;
    private gramsquarecentimetersLazy: number | null = null;
    private gramsquaremillimetersLazy: number | null = null;
    private tonnesquaremetersLazy: number | null = null;
    private tonnesquaredecimetersLazy: number | null = null;
    private tonnesquarecentimetersLazy: number | null = null;
    private tonnesquaremillimetersLazy: number | null = null;
    private poundsquarefeetLazy: number | null = null;
    private poundsquareinchesLazy: number | null = null;
    private slugsquarefeetLazy: number | null = null;
    private slugsquareinchesLazy: number | null = null;
    private milligramsquaremetersLazy: number | null = null;
    private kilogramsquaremetersLazy: number | null = null;
    private milligramsquaredecimetersLazy: number | null = null;
    private kilogramsquaredecimetersLazy: number | null = null;
    private milligramsquarecentimetersLazy: number | null = null;
    private kilogramsquarecentimetersLazy: number | null = null;
    private milligramsquaremillimetersLazy: number | null = null;
    private kilogramsquaremillimetersLazy: number | null = null;
    private kilotonnesquaremetersLazy: number | null = null;
    private megatonnesquaremetersLazy: number | null = null;
    private kilotonnesquaredecimetersLazy: number | null = null;
    private megatonnesquaredecimetersLazy: number | null = null;
    private kilotonnesquarecentimetersLazy: number | null = null;
    private megatonnesquarecentimetersLazy: number | null = null;
    private kilotonnesquaremillimetersLazy: number | null = null;
    private megatonnesquaremillimetersLazy: number | null = null;

    /**
     * Create a new MassMomentOfInertia.
     * @param value The value.
     * @param fromUnit The ‘MassMomentOfInertia’ unit to create from.
     * The default unit is KilogramSquareMeters
     */
    public constructor(value: number, fromUnit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of MassMomentOfInertia is KilogramSquareMeters.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MassMomentOfInertiaUnits.KilogramSquareMeters {
        return MassMomentOfInertiaUnits.KilogramSquareMeters
    }

    /** */
    public get GramSquareMeters(): number {
        if(this.gramsquaremetersLazy !== null){
            return this.gramsquaremetersLazy;
        }
        return this.gramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMeters);
    }

    /** */
    public get GramSquareDecimeters(): number {
        if(this.gramsquaredecimetersLazy !== null){
            return this.gramsquaredecimetersLazy;
        }
        return this.gramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    /** */
    public get GramSquareCentimeters(): number {
        if(this.gramsquarecentimetersLazy !== null){
            return this.gramsquarecentimetersLazy;
        }
        return this.gramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    /** */
    public get GramSquareMillimeters(): number {
        if(this.gramsquaremillimetersLazy !== null){
            return this.gramsquaremillimetersLazy;
        }
        return this.gramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    /** */
    public get TonneSquareMeters(): number {
        if(this.tonnesquaremetersLazy !== null){
            return this.tonnesquaremetersLazy;
        }
        return this.tonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    /** */
    public get TonneSquareDecimeters(): number {
        if(this.tonnesquaredecimetersLazy !== null){
            return this.tonnesquaredecimetersLazy;
        }
        return this.tonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    /** */
    public get TonneSquareCentimeters(): number {
        if(this.tonnesquarecentimetersLazy !== null){
            return this.tonnesquarecentimetersLazy;
        }
        return this.tonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    /** */
    public get TonneSquareMillimeters(): number {
        if(this.tonnesquaremillimetersLazy !== null){
            return this.tonnesquaremillimetersLazy;
        }
        return this.tonnesquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.TonneSquareMillimeters);
    }

    /** */
    public get PoundSquareFeet(): number {
        if(this.poundsquarefeetLazy !== null){
            return this.poundsquarefeetLazy;
        }
        return this.poundsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    /** */
    public get PoundSquareInches(): number {
        if(this.poundsquareinchesLazy !== null){
            return this.poundsquareinchesLazy;
        }
        return this.poundsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.PoundSquareInches);
    }

    /** */
    public get SlugSquareFeet(): number {
        if(this.slugsquarefeetLazy !== null){
            return this.slugsquarefeetLazy;
        }
        return this.slugsquarefeetLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    /** */
    public get SlugSquareInches(): number {
        if(this.slugsquareinchesLazy !== null){
            return this.slugsquareinchesLazy;
        }
        return this.slugsquareinchesLazy = this.convertFromBase(MassMomentOfInertiaUnits.SlugSquareInches);
    }

    /** */
    public get MilligramSquareMeters(): number {
        if(this.milligramsquaremetersLazy !== null){
            return this.milligramsquaremetersLazy;
        }
        return this.milligramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareMeters);
    }

    /** */
    public get KilogramSquareMeters(): number {
        if(this.kilogramsquaremetersLazy !== null){
            return this.kilogramsquaremetersLazy;
        }
        return this.kilogramsquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMeters);
    }

    /** */
    public get MilligramSquareDecimeters(): number {
        if(this.milligramsquaredecimetersLazy !== null){
            return this.milligramsquaredecimetersLazy;
        }
        return this.milligramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareDecimeters);
    }

    /** */
    public get KilogramSquareDecimeters(): number {
        if(this.kilogramsquaredecimetersLazy !== null){
            return this.kilogramsquaredecimetersLazy;
        }
        return this.kilogramsquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }

    /** */
    public get MilligramSquareCentimeters(): number {
        if(this.milligramsquarecentimetersLazy !== null){
            return this.milligramsquarecentimetersLazy;
        }
        return this.milligramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareCentimeters);
    }

    /** */
    public get KilogramSquareCentimeters(): number {
        if(this.kilogramsquarecentimetersLazy !== null){
            return this.kilogramsquarecentimetersLazy;
        }
        return this.kilogramsquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }

    /** */
    public get MilligramSquareMillimeters(): number {
        if(this.milligramsquaremillimetersLazy !== null){
            return this.milligramsquaremillimetersLazy;
        }
        return this.milligramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MilligramSquareMillimeters);
    }

    /** */
    public get KilogramSquareMillimeters(): number {
        if(this.kilogramsquaremillimetersLazy !== null){
            return this.kilogramsquaremillimetersLazy;
        }
        return this.kilogramsquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }

    /** */
    public get KilotonneSquareMeters(): number {
        if(this.kilotonnesquaremetersLazy !== null){
            return this.kilotonnesquaremetersLazy;
        }
        return this.kilotonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }

    /** */
    public get MegatonneSquareMeters(): number {
        if(this.megatonnesquaremetersLazy !== null){
            return this.megatonnesquaremetersLazy;
        }
        return this.megatonnesquaremetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }

    /** */
    public get KilotonneSquareDecimeters(): number {
        if(this.kilotonnesquaredecimetersLazy !== null){
            return this.kilotonnesquaredecimetersLazy;
        }
        return this.kilotonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }

    /** */
    public get MegatonneSquareDecimeters(): number {
        if(this.megatonnesquaredecimetersLazy !== null){
            return this.megatonnesquaredecimetersLazy;
        }
        return this.megatonnesquaredecimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }

    /** */
    public get KilotonneSquareCentimeters(): number {
        if(this.kilotonnesquarecentimetersLazy !== null){
            return this.kilotonnesquarecentimetersLazy;
        }
        return this.kilotonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }

    /** */
    public get MegatonneSquareCentimeters(): number {
        if(this.megatonnesquarecentimetersLazy !== null){
            return this.megatonnesquarecentimetersLazy;
        }
        return this.megatonnesquarecentimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }

    /** */
    public get KilotonneSquareMillimeters(): number {
        if(this.kilotonnesquaremillimetersLazy !== null){
            return this.kilotonnesquaremillimetersLazy;
        }
        return this.kilotonnesquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.KilotonneSquareMillimeters);
    }

    /** */
    public get MegatonneSquareMillimeters(): number {
        if(this.megatonnesquaremillimetersLazy !== null){
            return this.megatonnesquaremillimetersLazy;
        }
        return this.megatonnesquaremillimetersLazy = this.convertFromBase(MassMomentOfInertiaUnits.MegatonneSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMeters
     *
     * @param value The unit as GramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareDecimeters
     *
     * @param value The unit as GramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareCentimeters
     *
     * @param value The unit as GramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a GramSquareMillimeters
     *
     * @param value The unit as GramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromGramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.GramSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMeters
     *
     * @param value The unit as TonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareDecimeters
     *
     * @param value The unit as TonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareCentimeters
     *
     * @param value The unit as TonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a TonneSquareMillimeters
     *
     * @param value The unit as TonneSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromTonneSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.TonneSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareFeet
     *
     * @param value The unit as PoundSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromPoundSquareFeet(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareFeet);
    }

    /**
     * Create a new MassMomentOfInertia instance from a PoundSquareInches
     *
     * @param value The unit as PoundSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromPoundSquareInches(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.PoundSquareInches);
    }

    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareFeet
     *
     * @param value The unit as SlugSquareFeet to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromSlugSquareFeet(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareFeet);
    }

    /**
     * Create a new MassMomentOfInertia instance from a SlugSquareInches
     *
     * @param value The unit as SlugSquareInches to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromSlugSquareInches(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.SlugSquareInches);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareMeters
     *
     * @param value The unit as MilligramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMeters
     *
     * @param value The unit as KilogramSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareDecimeters
     *
     * @param value The unit as MilligramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareDecimeters
     *
     * @param value The unit as KilogramSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareCentimeters
     *
     * @param value The unit as MilligramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareCentimeters
     *
     * @param value The unit as KilogramSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MilligramSquareMillimeters
     *
     * @param value The unit as MilligramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMilligramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MilligramSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilogramSquareMillimeters
     *
     * @param value The unit as KilogramSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilogramSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilogramSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMeters
     *
     * @param value The unit as KilotonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMeters
     *
     * @param value The unit as MegatonneSquareMeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareMeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareDecimeters
     *
     * @param value The unit as KilotonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareDecimeters
     *
     * @param value The unit as MegatonneSquareDecimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareDecimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareDecimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareCentimeters
     *
     * @param value The unit as KilotonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareCentimeters
     *
     * @param value The unit as MegatonneSquareCentimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareCentimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareCentimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a KilotonneSquareMillimeters
     *
     * @param value The unit as KilotonneSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromKilotonneSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.KilotonneSquareMillimeters);
    }

    /**
     * Create a new MassMomentOfInertia instance from a MegatonneSquareMillimeters
     *
     * @param value The unit as MegatonneSquareMillimeters to create a new MassMomentOfInertia from.
     * @returns The new MassMomentOfInertia instance.
     */
    public static FromMegatonneSquareMillimeters(value: number): MassMomentOfInertia {
        return new MassMomentOfInertia(value, MassMomentOfInertiaUnits.MegatonneSquareMillimeters);
    }

    /**
     * Gets the base unit enumeration associated with MassMomentOfInertia
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MassMomentOfInertiaUnits {
        return MassMomentOfInertiaUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MassMomentOfInertiaUnits.KilogramSquareMeters {
        return MassMomentOfInertiaUnits.KilogramSquareMeters;
    }

    /**
     * Create API DTO represent a MassMomentOfInertia unit.
     * @param holdInUnit The specific MassMomentOfInertia unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters): MassMomentOfInertiaDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a MassMomentOfInertia unit from an API DTO representation.
     * @param dtoMassMomentOfInertia The MassMomentOfInertia API DTO representation
     */
    public static FromDto(dtoMassMomentOfInertia: MassMomentOfInertiaDto): MassMomentOfInertia {
        return new MassMomentOfInertia(dtoMassMomentOfInertia.value, dtoMassMomentOfInertia.unit);
    }

    /**
     * Convert MassMomentOfInertia to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MassMomentOfInertiaUnits): number {
        switch (toUnit) {
            case MassMomentOfInertiaUnits.GramSquareMeters: return this.GramSquareMeters;
            case MassMomentOfInertiaUnits.GramSquareDecimeters: return this.GramSquareDecimeters;
            case MassMomentOfInertiaUnits.GramSquareCentimeters: return this.GramSquareCentimeters;
            case MassMomentOfInertiaUnits.GramSquareMillimeters: return this.GramSquareMillimeters;
            case MassMomentOfInertiaUnits.TonneSquareMeters: return this.TonneSquareMeters;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters: return this.TonneSquareDecimeters;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters: return this.TonneSquareCentimeters;
            case MassMomentOfInertiaUnits.TonneSquareMillimeters: return this.TonneSquareMillimeters;
            case MassMomentOfInertiaUnits.PoundSquareFeet: return this.PoundSquareFeet;
            case MassMomentOfInertiaUnits.PoundSquareInches: return this.PoundSquareInches;
            case MassMomentOfInertiaUnits.SlugSquareFeet: return this.SlugSquareFeet;
            case MassMomentOfInertiaUnits.SlugSquareInches: return this.SlugSquareInches;
            case MassMomentOfInertiaUnits.MilligramSquareMeters: return this.MilligramSquareMeters;
            case MassMomentOfInertiaUnits.KilogramSquareMeters: return this.KilogramSquareMeters;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters: return this.MilligramSquareDecimeters;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters: return this.KilogramSquareDecimeters;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters: return this.MilligramSquareCentimeters;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters: return this.KilogramSquareCentimeters;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters: return this.MilligramSquareMillimeters;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters: return this.KilogramSquareMillimeters;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters: return this.KilotonneSquareMeters;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters: return this.MegatonneSquareMeters;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters: return this.KilotonneSquareDecimeters;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters: return this.MegatonneSquareDecimeters;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters: return this.KilotonneSquareCentimeters;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters: return this.MegatonneSquareCentimeters;
            case MassMomentOfInertiaUnits.KilotonneSquareMillimeters: return this.KilotonneSquareMillimeters;
            case MassMomentOfInertiaUnits.MegatonneSquareMillimeters: return this.MegatonneSquareMillimeters;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MassMomentOfInertiaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MassMomentOfInertiaUnits.GramSquareMeters: return super.internalMultiply(this.value, 1e3);
                case MassMomentOfInertiaUnits.GramSquareDecimeters: return super.internalMultiply(this.value, 1e5);
                case MassMomentOfInertiaUnits.GramSquareCentimeters: return super.internalMultiply(this.value, 1e7);
                case MassMomentOfInertiaUnits.GramSquareMillimeters: return super.internalMultiply(this.value, 1e9);
                case MassMomentOfInertiaUnits.TonneSquareMeters: return super.internalMultiply(this.value, 1e-3);
                case MassMomentOfInertiaUnits.TonneSquareDecimeters: return super.internalMultiply(this.value, 1e-1);
                case MassMomentOfInertiaUnits.TonneSquareCentimeters: return super.internalMultiply(this.value, 1e1);
                case MassMomentOfInertiaUnits.TonneSquareMillimeters: return super.internalMultiply(this.value, 1e3);
                case MassMomentOfInertiaUnits.PoundSquareFeet: {
                    const v4 = super.internalMultiply(0.45359237, 9.290304e-2);
                    return super.internalDivide(this.value, v4);
                }
                case MassMomentOfInertiaUnits.PoundSquareInches: {
                    const v4 = super.internalMultiply(0.45359237, 0.00064516);
                    return super.internalDivide(this.value, v4);
                }
                case MassMomentOfInertiaUnits.SlugSquareFeet: {
                    const v5 = super.internalMultiply(0.45359237, 9.290304e-2);
                    const v7 = super.internalMultiply(v5, 9.80665);
                    const v8 = super.internalDivide(0.3048, v7);
                    return super.internalMultiply(this.value, v8);
                }
                case MassMomentOfInertiaUnits.SlugSquareInches: {
                    const v5 = super.internalMultiply(0.45359237, 0.00064516);
                    const v7 = super.internalMultiply(v5, 9.80665);
                    const v8 = super.internalDivide(0.3048, v7);
                    return super.internalMultiply(this.value, v8);
                }
                case MassMomentOfInertiaUnits.MilligramSquareMeters: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareMeters: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MilligramSquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 1e5);
                    return super.internalDivide(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 1e5);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MilligramSquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 1e7);
                    return super.internalDivide(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 1e7);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MilligramSquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1e9);
                    return super.internalDivide(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1e9);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareMeters: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareMeters: {
                    const v3 = super.internalMultiply(this.value, 1e-3);
                    return super.internalDivide(v3, 1000000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareDecimeters: {
                    const v3 = super.internalMultiply(this.value, 1e-1);
                    return super.internalDivide(v3, 1000000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 1e1);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareCentimeters: {
                    const v3 = super.internalMultiply(this.value, 1e1);
                    return super.internalDivide(v3, 1000000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareMillimeters: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MassMomentOfInertiaUnits.GramSquareMeters: return this.value * 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters: return this.value * 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters: return this.value * 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters: return this.value * 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters: return this.value * 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters: return this.value * 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters: return this.value * 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMillimeters: return this.value * 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet: return this.value / (0.45359237 * 9.290304e-2);
            case MassMomentOfInertiaUnits.PoundSquareInches: return this.value / (0.45359237 * 0.00064516);
            case MassMomentOfInertiaUnits.SlugSquareFeet: return this.value * 0.3048 / (0.45359237 * 9.290304e-2 * 9.80665);
            case MassMomentOfInertiaUnits.SlugSquareInches: return this.value * 0.3048 / (0.45359237 * 0.00064516 * 9.80665);
            case MassMomentOfInertiaUnits.MilligramSquareMeters: return (this.value * 1e3) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMeters: return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters: return (this.value * 1e5) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters: return (this.value * 1e5) / 1000;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters: return (this.value * 1e7) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters: return (this.value * 1e7) / 1000;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters: return (this.value * 1e9) / 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters: return (this.value * 1e9) / 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters: return (this.value * 1e-3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters: return (this.value * 1e-3) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters: return (this.value * 1e-1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters: return (this.value * 1e-1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters: return (this.value * 1e1) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters: return (this.value * 1e1) / 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMillimeters: return (this.value * 1e3) / 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMillimeters: return (this.value * 1e3) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MassMomentOfInertiaUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MassMomentOfInertiaUnits.GramSquareMeters: return super.internalDivide(value, 1e3);
                case MassMomentOfInertiaUnits.GramSquareDecimeters: return super.internalDivide(value, 1e5);
                case MassMomentOfInertiaUnits.GramSquareCentimeters: return super.internalDivide(value, 1e7);
                case MassMomentOfInertiaUnits.GramSquareMillimeters: return super.internalDivide(value, 1e9);
                case MassMomentOfInertiaUnits.TonneSquareMeters: return super.internalDivide(value, 1e-3);
                case MassMomentOfInertiaUnits.TonneSquareDecimeters: return super.internalDivide(value, 1e-1);
                case MassMomentOfInertiaUnits.TonneSquareCentimeters: return super.internalDivide(value, 1e1);
                case MassMomentOfInertiaUnits.TonneSquareMillimeters: return super.internalDivide(value, 1e3);
                case MassMomentOfInertiaUnits.PoundSquareFeet: {
                    const v4 = super.internalMultiply(0.45359237, 9.290304e-2);
                    return super.internalMultiply(value, v4);
                }
                case MassMomentOfInertiaUnits.PoundSquareInches: {
                    const v4 = super.internalMultiply(0.45359237, 0.00064516);
                    return super.internalMultiply(value, v4);
                }
                case MassMomentOfInertiaUnits.SlugSquareFeet: {
                    const v3 = super.internalMultiply(value, 0.45359237);
                    const v5 = super.internalMultiply(v3, 9.290304e-2);
                    const v8 = super.internalDivide(9.80665, 0.3048);
                    return super.internalMultiply(v5, v8);
                }
                case MassMomentOfInertiaUnits.SlugSquareInches: {
                    const v3 = super.internalMultiply(value, 0.45359237);
                    const v5 = super.internalMultiply(v3, 0.00064516);
                    const v8 = super.internalDivide(9.80665, 0.3048);
                    return super.internalMultiply(v5, v8);
                }
                case MassMomentOfInertiaUnits.MilligramSquareMeters: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareMeters: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MilligramSquareDecimeters: {
                    const v3 = super.internalDivide(value, 1e5);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareDecimeters: {
                    const v3 = super.internalDivide(value, 1e5);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MilligramSquareCentimeters: {
                    const v3 = super.internalDivide(value, 1e7);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareCentimeters: {
                    const v3 = super.internalDivide(value, 1e7);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MilligramSquareMillimeters: {
                    const v3 = super.internalDivide(value, 1e9);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassMomentOfInertiaUnits.KilogramSquareMillimeters: {
                    const v3 = super.internalDivide(value, 1e9);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareMeters: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareMeters: {
                    const v3 = super.internalDivide(value, 1e-3);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareDecimeters: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareDecimeters: {
                    const v3 = super.internalDivide(value, 1e-1);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareCentimeters: {
                    const v3 = super.internalDivide(value, 1e1);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareCentimeters: {
                    const v3 = super.internalDivide(value, 1e1);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassMomentOfInertiaUnits.KilotonneSquareMillimeters: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassMomentOfInertiaUnits.MegatonneSquareMillimeters: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MassMomentOfInertiaUnits.GramSquareMeters: return value / 1e3;
            case MassMomentOfInertiaUnits.GramSquareDecimeters: return value / 1e5;
            case MassMomentOfInertiaUnits.GramSquareCentimeters: return value / 1e7;
            case MassMomentOfInertiaUnits.GramSquareMillimeters: return value / 1e9;
            case MassMomentOfInertiaUnits.TonneSquareMeters: return value / 1e-3;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters: return value / 1e-1;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters: return value / 1e1;
            case MassMomentOfInertiaUnits.TonneSquareMillimeters: return value / 1e3;
            case MassMomentOfInertiaUnits.PoundSquareFeet: return value * (0.45359237 * 9.290304e-2);
            case MassMomentOfInertiaUnits.PoundSquareInches: return value * (0.45359237 * 0.00064516);
            case MassMomentOfInertiaUnits.SlugSquareFeet: return value * 0.45359237 * 9.290304e-2 * 9.80665 / 0.3048;
            case MassMomentOfInertiaUnits.SlugSquareInches: return value * 0.45359237 * 0.00064516 * 9.80665 / 0.3048;
            case MassMomentOfInertiaUnits.MilligramSquareMeters: return (value / 1e3) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMeters: return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters: return (value / 1e5) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters: return (value / 1e5) * 1000;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters: return (value / 1e7) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters: return (value / 1e7) * 1000;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters: return (value / 1e9) * 0.001;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters: return (value / 1e9) * 1000;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters: return (value / 1e-3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters: return (value / 1e-3) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters: return (value / 1e-1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters: return (value / 1e-1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters: return (value / 1e1) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters: return (value / 1e1) * 1000000;
            case MassMomentOfInertiaUnits.KilotonneSquareMillimeters: return (value / 1e3) * 1000;
            case MassMomentOfInertiaUnits.MegatonneSquareMillimeters: return (value / 1e3) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the MassMomentOfInertia to string.
     * Note! the default format for MassMomentOfInertia is KilogramSquareMeters.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the MassMomentOfInertia.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the MassMomentOfInertia.
     */
    public toString(unit: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return super.truncateFractionDigits(this.GramSquareMeters, options as ToStringOptions) + ` g·m²`;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return super.truncateFractionDigits(this.GramSquareDecimeters, options as ToStringOptions) + ` g·dm²`;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return super.truncateFractionDigits(this.GramSquareCentimeters, options as ToStringOptions) + ` g·cm²`;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return super.truncateFractionDigits(this.GramSquareMillimeters, options as ToStringOptions) + ` g·mm²`;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return super.truncateFractionDigits(this.TonneSquareMeters, options as ToStringOptions) + ` t·m²`;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return super.truncateFractionDigits(this.TonneSquareDecimeters, options as ToStringOptions) + ` t·dm²`;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return super.truncateFractionDigits(this.TonneSquareCentimeters, options as ToStringOptions) + ` t·cm²`;
            case MassMomentOfInertiaUnits.TonneSquareMillimeters:
                return super.truncateFractionDigits(this.TonneSquareMillimeters, options as ToStringOptions) + ` t·mm²`;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return super.truncateFractionDigits(this.PoundSquareFeet, options as ToStringOptions) + ` lb·ft²`;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return super.truncateFractionDigits(this.PoundSquareInches, options as ToStringOptions) + ` lb·in²`;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return super.truncateFractionDigits(this.SlugSquareFeet, options as ToStringOptions) + ` slug·ft²`;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return super.truncateFractionDigits(this.SlugSquareInches, options as ToStringOptions) + ` slug·in²`;
            case MassMomentOfInertiaUnits.MilligramSquareMeters:
                return super.truncateFractionDigits(this.MilligramSquareMeters, options as ToStringOptions) + ` mg·m²`;
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return super.truncateFractionDigits(this.KilogramSquareMeters, options as ToStringOptions) + ` kg·m²`;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:
                return super.truncateFractionDigits(this.MilligramSquareDecimeters, options as ToStringOptions) + ` mg·dm²`;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return super.truncateFractionDigits(this.KilogramSquareDecimeters, options as ToStringOptions) + ` kg·dm²`;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:
                return super.truncateFractionDigits(this.MilligramSquareCentimeters, options as ToStringOptions) + ` mg·cm²`;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return super.truncateFractionDigits(this.KilogramSquareCentimeters, options as ToStringOptions) + ` kg·cm²`;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:
                return super.truncateFractionDigits(this.MilligramSquareMillimeters, options as ToStringOptions) + ` mg·mm²`;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return super.truncateFractionDigits(this.KilogramSquareMillimeters, options as ToStringOptions) + ` kg·mm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return super.truncateFractionDigits(this.KilotonneSquareMeters, options as ToStringOptions) + ` kt·m²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return super.truncateFractionDigits(this.MegatonneSquareMeters, options as ToStringOptions) + ` Mt·m²`;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return super.truncateFractionDigits(this.KilotonneSquareDecimeters, options as ToStringOptions) + ` kt·dm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return super.truncateFractionDigits(this.MegatonneSquareDecimeters, options as ToStringOptions) + ` Mt·dm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return super.truncateFractionDigits(this.KilotonneSquareCentimeters, options as ToStringOptions) + ` kt·cm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return super.truncateFractionDigits(this.MegatonneSquareCentimeters, options as ToStringOptions) + ` Mt·cm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMillimeters:
                return super.truncateFractionDigits(this.KilotonneSquareMillimeters, options as ToStringOptions) + ` kt·mm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMillimeters:
                return super.truncateFractionDigits(this.MegatonneSquareMillimeters, options as ToStringOptions) + ` Mt·mm²`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get MassMomentOfInertia unit abbreviation.
     * Note! the default abbreviation for MassMomentOfInertia is KilogramSquareMeters.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the MassMomentOfInertia.
     * @returns The abbreviation string of MassMomentOfInertia.
     */
    public getUnitAbbreviation(unitAbbreviation: MassMomentOfInertiaUnits = MassMomentOfInertiaUnits.KilogramSquareMeters): string {

        switch (unitAbbreviation) {
            
            case MassMomentOfInertiaUnits.GramSquareMeters:
                return `g·m²`;
            case MassMomentOfInertiaUnits.GramSquareDecimeters:
                return `g·dm²`;
            case MassMomentOfInertiaUnits.GramSquareCentimeters:
                return `g·cm²`;
            case MassMomentOfInertiaUnits.GramSquareMillimeters:
                return `g·mm²`;
            case MassMomentOfInertiaUnits.TonneSquareMeters:
                return `t·m²`;
            case MassMomentOfInertiaUnits.TonneSquareDecimeters:
                return `t·dm²`;
            case MassMomentOfInertiaUnits.TonneSquareCentimeters:
                return `t·cm²`;
            case MassMomentOfInertiaUnits.TonneSquareMillimeters:
                return `t·mm²`;
            case MassMomentOfInertiaUnits.PoundSquareFeet:
                return `lb·ft²`;
            case MassMomentOfInertiaUnits.PoundSquareInches:
                return `lb·in²`;
            case MassMomentOfInertiaUnits.SlugSquareFeet:
                return `slug·ft²`;
            case MassMomentOfInertiaUnits.SlugSquareInches:
                return `slug·in²`;
            case MassMomentOfInertiaUnits.MilligramSquareMeters:
                return `mg·m²`;
            case MassMomentOfInertiaUnits.KilogramSquareMeters:
                return `kg·m²`;
            case MassMomentOfInertiaUnits.MilligramSquareDecimeters:
                return `mg·dm²`;
            case MassMomentOfInertiaUnits.KilogramSquareDecimeters:
                return `kg·dm²`;
            case MassMomentOfInertiaUnits.MilligramSquareCentimeters:
                return `mg·cm²`;
            case MassMomentOfInertiaUnits.KilogramSquareCentimeters:
                return `kg·cm²`;
            case MassMomentOfInertiaUnits.MilligramSquareMillimeters:
                return `mg·mm²`;
            case MassMomentOfInertiaUnits.KilogramSquareMillimeters:
                return `kg·mm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMeters:
                return `kt·m²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMeters:
                return `Mt·m²`;
            case MassMomentOfInertiaUnits.KilotonneSquareDecimeters:
                return `kt·dm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareDecimeters:
                return `Mt·dm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareCentimeters:
                return `kt·cm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareCentimeters:
                return `Mt·cm²`;
            case MassMomentOfInertiaUnits.KilotonneSquareMillimeters:
                return `kt·mm²`;
            case MassMomentOfInertiaUnits.MegatonneSquareMillimeters:
                return `Mt·mm²`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given MassMomentOfInertia are equals to the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns True if the given MassMomentOfInertia are equal to the current MassMomentOfInertia.
     */
    public equals(massMomentOfInertia: MassMomentOfInertia): boolean {
        return super.internalEquals(this.value, massMomentOfInertia.BaseValue);
    }

    /**
     * Compare the given MassMomentOfInertia against the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns 0 if they are equal, -1 if the current MassMomentOfInertia is less then other, 1 if the current MassMomentOfInertia is greater then other.
     */
    public compareTo(massMomentOfInertia: MassMomentOfInertia): number {
        return super.internalCompareTo(this.value, massMomentOfInertia.BaseValue);
    }

    /**
     * Add the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public add(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(super.internalAdd(this.value, massMomentOfInertia.BaseValue))
    }

    /**
     * Subtract the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public subtract(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(super.internalSubtract(this.value, massMomentOfInertia.BaseValue))
    }

    /**
     * Multiply the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public multiply(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(super.internalMultiply(this.value, massMomentOfInertia.BaseValue))
    }

    /**
     * Divide the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public divide(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(super.internalDivide(this.value, massMomentOfInertia.BaseValue))
    }

    /**
     * Modulo the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public modulo(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(super.internalModulo(this.value, massMomentOfInertia.BaseValue))
    }

    /**
     * Pow the given MassMomentOfInertia with the current MassMomentOfInertia.
     * @param massMomentOfInertia The other MassMomentOfInertia.
     * @returns A new MassMomentOfInertia instance with the results.
     */
    public pow(massMomentOfInertia: MassMomentOfInertia): MassMomentOfInertia {
        return new MassMomentOfInertia(super.internalPow(this.value, massMomentOfInertia.BaseValue))
    }
}
