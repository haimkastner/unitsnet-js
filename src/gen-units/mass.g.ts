import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a Mass */
export interface MassDto {
    /** The value of the Mass */
    value: number;
    /**  The specific unit that the Mass value is representing */
    unit: MassUnits;
}

/** MassUnits enumeration */
export enum MassUnits {
    /** */
    Grams = "Gram",
    /** The tonne is a unit of mass equal to 1,000 kilograms. It is a non-SI unit accepted for use with SI. It is also referred to as a metric ton in the United States to distinguish it from the non-metric units of the short ton (United States customary units) and the long ton (British imperial units). It is equivalent to approximately 2,204.6 pounds, 1.102 short tons, and 0.984 long tons. */
    Tonnes = "Tonne",
    /** The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton. */
    ShortTons = "ShortTon",
    /** Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication. */
    LongTons = "LongTon",
    /** The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces. */
    Pounds = "Pound",
    /** The international avoirdupois ounce (abbreviated oz) is defined as exactly 28.349523125 g under the international yard and pound agreement of 1959, signed by the United States and countries of the Commonwealth of Nations. 16 oz make up an avoirdupois pound. */
    Ounces = "Ounce",
    /** The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it. */
    Slugs = "Slug",
    /** The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight. */
    Stone = "Stone",
    /** The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental". */
    ShortHundredweight = "ShortHundredweight",
    /** The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada. */
    LongHundredweight = "LongHundredweight",
    /** A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams. */
    Grains = "Grain",
    /** Solar mass is a ratio unit to the mass of the solar system star, the sun. */
    SolarMasses = "SolarMass",
    /** Earth mass is a ratio unit to the mass of planet Earth. */
    EarthMasses = "EarthMass",
    /** */
    Femtograms = "Femtogram",
    /** */
    Picograms = "Picogram",
    /** */
    Nanograms = "Nanogram",
    /** */
    Micrograms = "Microgram",
    /** */
    Milligrams = "Milligram",
    /** */
    Centigrams = "Centigram",
    /** */
    Decigrams = "Decigram",
    /** */
    Decagrams = "Decagram",
    /** */
    Hectograms = "Hectogram",
    /** */
    Kilograms = "Kilogram",
    /** */
    Kilotonnes = "Kilotonne",
    /** */
    Megatonnes = "Megatonne",
    /** */
    Kilopounds = "Kilopound",
    /** */
    Megapounds = "Megapound"
}

/** In physics, mass (from Greek μᾶζα "barley cake, lump [of dough]") is a property of a physical system or body, giving rise to the phenomena of the body's resistance to being accelerated by a force and the strength of its mutual gravitational attraction with other bodies. Instruments such as mass balances or scales use those phenomena to measure mass. The SI unit of mass is the kilogram (kg). */
export class Mass extends BaseUnit {
    protected value: number;
    private gramsLazy: number | null = null;
    private tonnesLazy: number | null = null;
    private shorttonsLazy: number | null = null;
    private longtonsLazy: number | null = null;
    private poundsLazy: number | null = null;
    private ouncesLazy: number | null = null;
    private slugsLazy: number | null = null;
    private stoneLazy: number | null = null;
    private shorthundredweightLazy: number | null = null;
    private longhundredweightLazy: number | null = null;
    private grainsLazy: number | null = null;
    private solarmassesLazy: number | null = null;
    private earthmassesLazy: number | null = null;
    private femtogramsLazy: number | null = null;
    private picogramsLazy: number | null = null;
    private nanogramsLazy: number | null = null;
    private microgramsLazy: number | null = null;
    private milligramsLazy: number | null = null;
    private centigramsLazy: number | null = null;
    private decigramsLazy: number | null = null;
    private decagramsLazy: number | null = null;
    private hectogramsLazy: number | null = null;
    private kilogramsLazy: number | null = null;
    private kilotonnesLazy: number | null = null;
    private megatonnesLazy: number | null = null;
    private kilopoundsLazy: number | null = null;
    private megapoundsLazy: number | null = null;

    /**
     * Create a new Mass.
     * @param value The value.
     * @param fromUnit The ‘Mass’ unit to create from.
     * The default unit is Kilograms
     */
    public constructor(value: number, fromUnit: MassUnits = MassUnits.Kilograms) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Mass is Kilograms.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): MassUnits.Kilograms {
        return MassUnits.Kilograms
    }

    /** */
    public get Grams(): number {
        if(this.gramsLazy !== null){
            return this.gramsLazy;
        }
        return this.gramsLazy = this.convertFromBase(MassUnits.Grams);
    }

    /** The tonne is a unit of mass equal to 1,000 kilograms. It is a non-SI unit accepted for use with SI. It is also referred to as a metric ton in the United States to distinguish it from the non-metric units of the short ton (United States customary units) and the long ton (British imperial units). It is equivalent to approximately 2,204.6 pounds, 1.102 short tons, and 0.984 long tons. */
    public get Tonnes(): number {
        if(this.tonnesLazy !== null){
            return this.tonnesLazy;
        }
        return this.tonnesLazy = this.convertFromBase(MassUnits.Tonnes);
    }

    /** The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton. */
    public get ShortTons(): number {
        if(this.shorttonsLazy !== null){
            return this.shorttonsLazy;
        }
        return this.shorttonsLazy = this.convertFromBase(MassUnits.ShortTons);
    }

    /** Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication. */
    public get LongTons(): number {
        if(this.longtonsLazy !== null){
            return this.longtonsLazy;
        }
        return this.longtonsLazy = this.convertFromBase(MassUnits.LongTons);
    }

    /** The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces. */
    public get Pounds(): number {
        if(this.poundsLazy !== null){
            return this.poundsLazy;
        }
        return this.poundsLazy = this.convertFromBase(MassUnits.Pounds);
    }

    /** The international avoirdupois ounce (abbreviated oz) is defined as exactly 28.349523125 g under the international yard and pound agreement of 1959, signed by the United States and countries of the Commonwealth of Nations. 16 oz make up an avoirdupois pound. */
    public get Ounces(): number {
        if(this.ouncesLazy !== null){
            return this.ouncesLazy;
        }
        return this.ouncesLazy = this.convertFromBase(MassUnits.Ounces);
    }

    /** The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it. */
    public get Slugs(): number {
        if(this.slugsLazy !== null){
            return this.slugsLazy;
        }
        return this.slugsLazy = this.convertFromBase(MassUnits.Slugs);
    }

    /** The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight. */
    public get Stone(): number {
        if(this.stoneLazy !== null){
            return this.stoneLazy;
        }
        return this.stoneLazy = this.convertFromBase(MassUnits.Stone);
    }

    /** The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental". */
    public get ShortHundredweight(): number {
        if(this.shorthundredweightLazy !== null){
            return this.shorthundredweightLazy;
        }
        return this.shorthundredweightLazy = this.convertFromBase(MassUnits.ShortHundredweight);
    }

    /** The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada. */
    public get LongHundredweight(): number {
        if(this.longhundredweightLazy !== null){
            return this.longhundredweightLazy;
        }
        return this.longhundredweightLazy = this.convertFromBase(MassUnits.LongHundredweight);
    }

    /** A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams. */
    public get Grains(): number {
        if(this.grainsLazy !== null){
            return this.grainsLazy;
        }
        return this.grainsLazy = this.convertFromBase(MassUnits.Grains);
    }

    /** Solar mass is a ratio unit to the mass of the solar system star, the sun. */
    public get SolarMasses(): number {
        if(this.solarmassesLazy !== null){
            return this.solarmassesLazy;
        }
        return this.solarmassesLazy = this.convertFromBase(MassUnits.SolarMasses);
    }

    /** Earth mass is a ratio unit to the mass of planet Earth. */
    public get EarthMasses(): number {
        if(this.earthmassesLazy !== null){
            return this.earthmassesLazy;
        }
        return this.earthmassesLazy = this.convertFromBase(MassUnits.EarthMasses);
    }

    /** */
    public get Femtograms(): number {
        if(this.femtogramsLazy !== null){
            return this.femtogramsLazy;
        }
        return this.femtogramsLazy = this.convertFromBase(MassUnits.Femtograms);
    }

    /** */
    public get Picograms(): number {
        if(this.picogramsLazy !== null){
            return this.picogramsLazy;
        }
        return this.picogramsLazy = this.convertFromBase(MassUnits.Picograms);
    }

    /** */
    public get Nanograms(): number {
        if(this.nanogramsLazy !== null){
            return this.nanogramsLazy;
        }
        return this.nanogramsLazy = this.convertFromBase(MassUnits.Nanograms);
    }

    /** */
    public get Micrograms(): number {
        if(this.microgramsLazy !== null){
            return this.microgramsLazy;
        }
        return this.microgramsLazy = this.convertFromBase(MassUnits.Micrograms);
    }

    /** */
    public get Milligrams(): number {
        if(this.milligramsLazy !== null){
            return this.milligramsLazy;
        }
        return this.milligramsLazy = this.convertFromBase(MassUnits.Milligrams);
    }

    /** */
    public get Centigrams(): number {
        if(this.centigramsLazy !== null){
            return this.centigramsLazy;
        }
        return this.centigramsLazy = this.convertFromBase(MassUnits.Centigrams);
    }

    /** */
    public get Decigrams(): number {
        if(this.decigramsLazy !== null){
            return this.decigramsLazy;
        }
        return this.decigramsLazy = this.convertFromBase(MassUnits.Decigrams);
    }

    /** */
    public get Decagrams(): number {
        if(this.decagramsLazy !== null){
            return this.decagramsLazy;
        }
        return this.decagramsLazy = this.convertFromBase(MassUnits.Decagrams);
    }

    /** */
    public get Hectograms(): number {
        if(this.hectogramsLazy !== null){
            return this.hectogramsLazy;
        }
        return this.hectogramsLazy = this.convertFromBase(MassUnits.Hectograms);
    }

    /** */
    public get Kilograms(): number {
        if(this.kilogramsLazy !== null){
            return this.kilogramsLazy;
        }
        return this.kilogramsLazy = this.convertFromBase(MassUnits.Kilograms);
    }

    /** */
    public get Kilotonnes(): number {
        if(this.kilotonnesLazy !== null){
            return this.kilotonnesLazy;
        }
        return this.kilotonnesLazy = this.convertFromBase(MassUnits.Kilotonnes);
    }

    /** */
    public get Megatonnes(): number {
        if(this.megatonnesLazy !== null){
            return this.megatonnesLazy;
        }
        return this.megatonnesLazy = this.convertFromBase(MassUnits.Megatonnes);
    }

    /** */
    public get Kilopounds(): number {
        if(this.kilopoundsLazy !== null){
            return this.kilopoundsLazy;
        }
        return this.kilopoundsLazy = this.convertFromBase(MassUnits.Kilopounds);
    }

    /** */
    public get Megapounds(): number {
        if(this.megapoundsLazy !== null){
            return this.megapoundsLazy;
        }
        return this.megapoundsLazy = this.convertFromBase(MassUnits.Megapounds);
    }

    /**
     * Create a new Mass instance from a Grams
     *
     * @param value The unit as Grams to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromGrams(value: number): Mass {
        return new Mass(value, MassUnits.Grams);
    }

    /**
     * Create a new Mass instance from a Tonnes
     * The tonne is a unit of mass equal to 1,000 kilograms. It is a non-SI unit accepted for use with SI. It is also referred to as a metric ton in the United States to distinguish it from the non-metric units of the short ton (United States customary units) and the long ton (British imperial units). It is equivalent to approximately 2,204.6 pounds, 1.102 short tons, and 0.984 long tons.
     * @param value The unit as Tonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromTonnes(value: number): Mass {
        return new Mass(value, MassUnits.Tonnes);
    }

    /**
     * Create a new Mass instance from a ShortTons
     * The short ton is a unit of mass equal to 2,000 pounds (907.18474 kg), that is most commonly used in the United States – known there simply as the ton.
     * @param value The unit as ShortTons to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromShortTons(value: number): Mass {
        return new Mass(value, MassUnits.ShortTons);
    }

    /**
     * Create a new Mass instance from a LongTons
     * Long ton (weight ton or Imperial ton) is a unit of mass equal to 2,240 pounds (1,016 kg) and is the name for the unit called the "ton" in the avoirdupois or Imperial system of measurements that was used in the United Kingdom and several other Commonwealth countries before metrication.
     * @param value The unit as LongTons to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromLongTons(value: number): Mass {
        return new Mass(value, MassUnits.LongTons);
    }

    /**
     * Create a new Mass instance from a Pounds
     * The pound or pound-mass (abbreviations: lb, lbm) is a unit of mass used in the imperial, United States customary and other systems of measurement. A number of different definitions have been used, the most common today being the international avoirdupois pound which is legally defined as exactly 0.45359237 kilograms, and which is divided into 16 avoirdupois ounces.
     * @param value The unit as Pounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromPounds(value: number): Mass {
        return new Mass(value, MassUnits.Pounds);
    }

    /**
     * Create a new Mass instance from a Ounces
     * The international avoirdupois ounce (abbreviated oz) is defined as exactly 28.349523125 g under the international yard and pound agreement of 1959, signed by the United States and countries of the Commonwealth of Nations. 16 oz make up an avoirdupois pound.
     * @param value The unit as Ounces to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromOunces(value: number): Mass {
        return new Mass(value, MassUnits.Ounces);
    }

    /**
     * Create a new Mass instance from a Slugs
     * The slug (abbreviation slug) is a unit of mass that is accelerated by 1 ft/s² when a force of one pound (lbf) is exerted on it.
     * @param value The unit as Slugs to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromSlugs(value: number): Mass {
        return new Mass(value, MassUnits.Slugs);
    }

    /**
     * Create a new Mass instance from a Stone
     * The stone (abbreviation st) is a unit of mass equal to 14 pounds avoirdupois (about 6.35 kilograms) used in Great Britain and Ireland for measuring human body weight.
     * @param value The unit as Stone to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromStone(value: number): Mass {
        return new Mass(value, MassUnits.Stone);
    }

    /**
     * Create a new Mass instance from a ShortHundredweight
     * The short hundredweight (abbreviation cwt) is a unit of mass equal to 100 pounds in US and Canada. In British English, the short hundredweight is referred to as the "cental".
     * @param value The unit as ShortHundredweight to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromShortHundredweight(value: number): Mass {
        return new Mass(value, MassUnits.ShortHundredweight);
    }

    /**
     * Create a new Mass instance from a LongHundredweight
     * The long or imperial hundredweight (abbreviation cwt) is a unit of mass equal to 112 pounds in US and Canada.
     * @param value The unit as LongHundredweight to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromLongHundredweight(value: number): Mass {
        return new Mass(value, MassUnits.LongHundredweight);
    }

    /**
     * Create a new Mass instance from a Grains
     * A grain is a unit of measurement of mass, and in the troy weight, avoirdupois, and Apothecaries' system, equal to exactly 64.79891 milligrams.
     * @param value The unit as Grains to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromGrains(value: number): Mass {
        return new Mass(value, MassUnits.Grains);
    }

    /**
     * Create a new Mass instance from a SolarMasses
     * Solar mass is a ratio unit to the mass of the solar system star, the sun.
     * @param value The unit as SolarMasses to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromSolarMasses(value: number): Mass {
        return new Mass(value, MassUnits.SolarMasses);
    }

    /**
     * Create a new Mass instance from a EarthMasses
     * Earth mass is a ratio unit to the mass of planet Earth.
     * @param value The unit as EarthMasses to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromEarthMasses(value: number): Mass {
        return new Mass(value, MassUnits.EarthMasses);
    }

    /**
     * Create a new Mass instance from a Femtograms
     *
     * @param value The unit as Femtograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromFemtograms(value: number): Mass {
        return new Mass(value, MassUnits.Femtograms);
    }

    /**
     * Create a new Mass instance from a Picograms
     *
     * @param value The unit as Picograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromPicograms(value: number): Mass {
        return new Mass(value, MassUnits.Picograms);
    }

    /**
     * Create a new Mass instance from a Nanograms
     *
     * @param value The unit as Nanograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromNanograms(value: number): Mass {
        return new Mass(value, MassUnits.Nanograms);
    }

    /**
     * Create a new Mass instance from a Micrograms
     *
     * @param value The unit as Micrograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromMicrograms(value: number): Mass {
        return new Mass(value, MassUnits.Micrograms);
    }

    /**
     * Create a new Mass instance from a Milligrams
     *
     * @param value The unit as Milligrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromMilligrams(value: number): Mass {
        return new Mass(value, MassUnits.Milligrams);
    }

    /**
     * Create a new Mass instance from a Centigrams
     *
     * @param value The unit as Centigrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromCentigrams(value: number): Mass {
        return new Mass(value, MassUnits.Centigrams);
    }

    /**
     * Create a new Mass instance from a Decigrams
     *
     * @param value The unit as Decigrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromDecigrams(value: number): Mass {
        return new Mass(value, MassUnits.Decigrams);
    }

    /**
     * Create a new Mass instance from a Decagrams
     *
     * @param value The unit as Decagrams to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromDecagrams(value: number): Mass {
        return new Mass(value, MassUnits.Decagrams);
    }

    /**
     * Create a new Mass instance from a Hectograms
     *
     * @param value The unit as Hectograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromHectograms(value: number): Mass {
        return new Mass(value, MassUnits.Hectograms);
    }

    /**
     * Create a new Mass instance from a Kilograms
     *
     * @param value The unit as Kilograms to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromKilograms(value: number): Mass {
        return new Mass(value, MassUnits.Kilograms);
    }

    /**
     * Create a new Mass instance from a Kilotonnes
     *
     * @param value The unit as Kilotonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromKilotonnes(value: number): Mass {
        return new Mass(value, MassUnits.Kilotonnes);
    }

    /**
     * Create a new Mass instance from a Megatonnes
     *
     * @param value The unit as Megatonnes to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromMegatonnes(value: number): Mass {
        return new Mass(value, MassUnits.Megatonnes);
    }

    /**
     * Create a new Mass instance from a Kilopounds
     *
     * @param value The unit as Kilopounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromKilopounds(value: number): Mass {
        return new Mass(value, MassUnits.Kilopounds);
    }

    /**
     * Create a new Mass instance from a Megapounds
     *
     * @param value The unit as Megapounds to create a new Mass from.
     * @returns The new Mass instance.
     */
    public static FromMegapounds(value: number): Mass {
        return new Mass(value, MassUnits.Megapounds);
    }

    /**
     * Gets the base unit enumeration associated with Mass
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof MassUnits {
        return MassUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): MassUnits.Kilograms {
        return MassUnits.Kilograms;
    }

    /**
     * Create API DTO represent a Mass unit.
     * @param holdInUnit The specific Mass unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: MassUnits = MassUnits.Kilograms): MassDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Mass unit from an API DTO representation.
     * @param dtoMass The Mass API DTO representation
     */
    public static FromDto(dtoMass: MassDto): Mass {
        return new Mass(dtoMass.value, dtoMass.unit);
    }

    /**
     * Convert Mass to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: MassUnits): number {
        switch (toUnit) {
            case MassUnits.Grams: return this.Grams;
            case MassUnits.Tonnes: return this.Tonnes;
            case MassUnits.ShortTons: return this.ShortTons;
            case MassUnits.LongTons: return this.LongTons;
            case MassUnits.Pounds: return this.Pounds;
            case MassUnits.Ounces: return this.Ounces;
            case MassUnits.Slugs: return this.Slugs;
            case MassUnits.Stone: return this.Stone;
            case MassUnits.ShortHundredweight: return this.ShortHundredweight;
            case MassUnits.LongHundredweight: return this.LongHundredweight;
            case MassUnits.Grains: return this.Grains;
            case MassUnits.SolarMasses: return this.SolarMasses;
            case MassUnits.EarthMasses: return this.EarthMasses;
            case MassUnits.Femtograms: return this.Femtograms;
            case MassUnits.Picograms: return this.Picograms;
            case MassUnits.Nanograms: return this.Nanograms;
            case MassUnits.Micrograms: return this.Micrograms;
            case MassUnits.Milligrams: return this.Milligrams;
            case MassUnits.Centigrams: return this.Centigrams;
            case MassUnits.Decigrams: return this.Decigrams;
            case MassUnits.Decagrams: return this.Decagrams;
            case MassUnits.Hectograms: return this.Hectograms;
            case MassUnits.Kilograms: return this.Kilograms;
            case MassUnits.Kilotonnes: return this.Kilotonnes;
            case MassUnits.Megatonnes: return this.Megatonnes;
            case MassUnits.Kilopounds: return this.Kilopounds;
            case MassUnits.Megapounds: return this.Megapounds;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: MassUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case MassUnits.Grams: return super.internalMultiply(this.value, 1e3);
                case MassUnits.Tonnes: return super.internalDivide(this.value, 1e3);
                case MassUnits.ShortTons: return super.internalDivide(this.value, 907.18474);
                case MassUnits.LongTons: return super.internalDivide(this.value, 1016.0469088);
                case MassUnits.Pounds: return super.internalDivide(this.value, 0.45359237);
                case MassUnits.Ounces: return super.internalDivide(this.value, 0.028349523125);
                case MassUnits.Slugs: {
                    const v5 = super.internalMultiply(0.45359237, 9.80665);
                    const v6 = super.internalDivide(0.3048, v5);
                    return super.internalMultiply(this.value, v6);
                }
                case MassUnits.Stone: return super.internalDivide(this.value, 6.35029318);
                case MassUnits.ShortHundredweight: return super.internalDivide(this.value, 45.359237);
                case MassUnits.LongHundredweight: return super.internalDivide(this.value, 50.80234544);
                case MassUnits.Grains: return super.internalDivide(this.value, 64.79891e-6);
                case MassUnits.SolarMasses: return super.internalDivide(this.value, 1.98947e30);
                case MassUnits.EarthMasses: return super.internalDivide(this.value, 5.9722E+24);
                case MassUnits.Femtograms: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1e-15);
                }
                case MassUnits.Picograms: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1e-12);
                }
                case MassUnits.Nanograms: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1e-9);
                }
                case MassUnits.Micrograms: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.000001);
                }
                case MassUnits.Milligrams: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.001);
                }
                case MassUnits.Centigrams: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.01);
                }
                case MassUnits.Decigrams: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 0.1);
                }
                case MassUnits.Decagrams: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 10);
                }
                case MassUnits.Hectograms: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 100);
                }
                case MassUnits.Kilograms: {
                    const v3 = super.internalMultiply(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case MassUnits.Kilotonnes: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 1000);
                }
                case MassUnits.Megatonnes: {
                    const v3 = super.internalDivide(this.value, 1e3);
                    return super.internalDivide(v3, 1000000);
                }
                case MassUnits.Kilopounds: {
                    const v3 = super.internalDivide(this.value, 0.45359237);
                    return super.internalDivide(v3, 1000);
                }
                case MassUnits.Megapounds: {
                    const v3 = super.internalDivide(this.value, 0.45359237);
                    return super.internalDivide(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case MassUnits.Grams: return this.value * 1e3;
            case MassUnits.Tonnes: return this.value / 1e3;
            case MassUnits.ShortTons: return this.value / 907.18474;
            case MassUnits.LongTons: return this.value / 1016.0469088;
            case MassUnits.Pounds: return this.value / 0.45359237;
            case MassUnits.Ounces: return this.value / 0.028349523125;
            case MassUnits.Slugs: return this.value * 0.3048 / (0.45359237 * 9.80665);
            case MassUnits.Stone: return this.value / 6.35029318;
            case MassUnits.ShortHundredweight: return this.value / 45.359237;
            case MassUnits.LongHundredweight: return this.value / 50.80234544;
            case MassUnits.Grains: return this.value / 64.79891e-6;
            case MassUnits.SolarMasses: return this.value / 1.98947e30;
            case MassUnits.EarthMasses: return this.value / 5.9722E+24;
            case MassUnits.Femtograms: return (this.value * 1e3) / 1e-15;
            case MassUnits.Picograms: return (this.value * 1e3) / 1e-12;
            case MassUnits.Nanograms: return (this.value * 1e3) / 1e-9;
            case MassUnits.Micrograms: return (this.value * 1e3) / 0.000001;
            case MassUnits.Milligrams: return (this.value * 1e3) / 0.001;
            case MassUnits.Centigrams: return (this.value * 1e3) / 0.01;
            case MassUnits.Decigrams: return (this.value * 1e3) / 0.1;
            case MassUnits.Decagrams: return (this.value * 1e3) / 10;
            case MassUnits.Hectograms: return (this.value * 1e3) / 100;
            case MassUnits.Kilograms: return (this.value * 1e3) / 1000;
            case MassUnits.Kilotonnes: return (this.value / 1e3) / 1000;
            case MassUnits.Megatonnes: return (this.value / 1e3) / 1000000;
            case MassUnits.Kilopounds: return (this.value / 0.45359237) / 1000;
            case MassUnits.Megapounds: return (this.value / 0.45359237) / 1000000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: MassUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case MassUnits.Grams: return super.internalDivide(value, 1e3);
                case MassUnits.Tonnes: return super.internalMultiply(value, 1e3);
                case MassUnits.ShortTons: return super.internalMultiply(value, 907.18474);
                case MassUnits.LongTons: return super.internalMultiply(value, 1016.0469088);
                case MassUnits.Pounds: return super.internalMultiply(value, 0.45359237);
                case MassUnits.Ounces: return super.internalMultiply(value, 0.028349523125);
                case MassUnits.Slugs: {
                    const v3 = super.internalMultiply(value, 0.45359237);
                    const v6 = super.internalDivide(9.80665, 0.3048);
                    return super.internalMultiply(v3, v6);
                }
                case MassUnits.Stone: return super.internalMultiply(value, 6.35029318);
                case MassUnits.ShortHundredweight: return super.internalMultiply(value, 45.359237);
                case MassUnits.LongHundredweight: return super.internalMultiply(value, 50.80234544);
                case MassUnits.Grains: return super.internalMultiply(value, 64.79891e-6);
                case MassUnits.SolarMasses: return super.internalMultiply(value, 1.98947e30);
                case MassUnits.EarthMasses: return super.internalMultiply(value, 5.9722E+24);
                case MassUnits.Femtograms: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1e-15);
                }
                case MassUnits.Picograms: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1e-12);
                }
                case MassUnits.Nanograms: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1e-9);
                }
                case MassUnits.Micrograms: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.000001);
                }
                case MassUnits.Milligrams: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.001);
                }
                case MassUnits.Centigrams: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.01);
                }
                case MassUnits.Decigrams: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 0.1);
                }
                case MassUnits.Decagrams: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 10);
                }
                case MassUnits.Hectograms: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 100);
                }
                case MassUnits.Kilograms: {
                    const v3 = super.internalDivide(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassUnits.Kilotonnes: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 1000);
                }
                case MassUnits.Megatonnes: {
                    const v3 = super.internalMultiply(value, 1e3);
                    return super.internalMultiply(v3, 1000000);
                }
                case MassUnits.Kilopounds: {
                    const v3 = super.internalMultiply(value, 0.45359237);
                    return super.internalMultiply(v3, 1000);
                }
                case MassUnits.Megapounds: {
                    const v3 = super.internalMultiply(value, 0.45359237);
                    return super.internalMultiply(v3, 1000000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case MassUnits.Grams: return value / 1e3;
            case MassUnits.Tonnes: return value * 1e3;
            case MassUnits.ShortTons: return value * 907.18474;
            case MassUnits.LongTons: return value * 1016.0469088;
            case MassUnits.Pounds: return value * 0.45359237;
            case MassUnits.Ounces: return value * 0.028349523125;
            case MassUnits.Slugs: return value * 0.45359237 * 9.80665 / 0.3048;
            case MassUnits.Stone: return value * 6.35029318;
            case MassUnits.ShortHundredweight: return value * 45.359237;
            case MassUnits.LongHundredweight: return value * 50.80234544;
            case MassUnits.Grains: return value * 64.79891e-6;
            case MassUnits.SolarMasses: return value * 1.98947e30;
            case MassUnits.EarthMasses: return value * 5.9722E+24;
            case MassUnits.Femtograms: return (value / 1e3) * 1e-15;
            case MassUnits.Picograms: return (value / 1e3) * 1e-12;
            case MassUnits.Nanograms: return (value / 1e3) * 1e-9;
            case MassUnits.Micrograms: return (value / 1e3) * 0.000001;
            case MassUnits.Milligrams: return (value / 1e3) * 0.001;
            case MassUnits.Centigrams: return (value / 1e3) * 0.01;
            case MassUnits.Decigrams: return (value / 1e3) * 0.1;
            case MassUnits.Decagrams: return (value / 1e3) * 10;
            case MassUnits.Hectograms: return (value / 1e3) * 100;
            case MassUnits.Kilograms: return (value / 1e3) * 1000;
            case MassUnits.Kilotonnes: return (value * 1e3) * 1000;
            case MassUnits.Megatonnes: return (value * 1e3) * 1000000;
            case MassUnits.Kilopounds: return (value * 0.45359237) * 1000;
            case MassUnits.Megapounds: return (value * 0.45359237) * 1000000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Mass to string.
     * Note! the default format for Mass is Kilograms.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Mass.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the Mass.
     */
    public toString(unit: MassUnits = MassUnits.Kilograms, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case MassUnits.Grams:
                return super.truncateFractionDigits(this.Grams, options as ToStringOptions) + ` g`;
            case MassUnits.Tonnes:
                return super.truncateFractionDigits(this.Tonnes, options as ToStringOptions) + ` t`;
            case MassUnits.ShortTons:
                return super.truncateFractionDigits(this.ShortTons, options as ToStringOptions) + ` t (short)`;
            case MassUnits.LongTons:
                return super.truncateFractionDigits(this.LongTons, options as ToStringOptions) + ` long tn`;
            case MassUnits.Pounds:
                return super.truncateFractionDigits(this.Pounds, options as ToStringOptions) + ` lb`;
            case MassUnits.Ounces:
                return super.truncateFractionDigits(this.Ounces, options as ToStringOptions) + ` oz`;
            case MassUnits.Slugs:
                return super.truncateFractionDigits(this.Slugs, options as ToStringOptions) + ` slug`;
            case MassUnits.Stone:
                return super.truncateFractionDigits(this.Stone, options as ToStringOptions) + ` st`;
            case MassUnits.ShortHundredweight:
                return super.truncateFractionDigits(this.ShortHundredweight, options as ToStringOptions) + ` cwt`;
            case MassUnits.LongHundredweight:
                return super.truncateFractionDigits(this.LongHundredweight, options as ToStringOptions) + ` cwt`;
            case MassUnits.Grains:
                return super.truncateFractionDigits(this.Grains, options as ToStringOptions) + ` gr`;
            case MassUnits.SolarMasses:
                return super.truncateFractionDigits(this.SolarMasses, options as ToStringOptions) + ` M☉`;
            case MassUnits.EarthMasses:
                return super.truncateFractionDigits(this.EarthMasses, options as ToStringOptions) + ` em`;
            case MassUnits.Femtograms:
                return super.truncateFractionDigits(this.Femtograms, options as ToStringOptions) + ` fg`;
            case MassUnits.Picograms:
                return super.truncateFractionDigits(this.Picograms, options as ToStringOptions) + ` pg`;
            case MassUnits.Nanograms:
                return super.truncateFractionDigits(this.Nanograms, options as ToStringOptions) + ` ng`;
            case MassUnits.Micrograms:
                return super.truncateFractionDigits(this.Micrograms, options as ToStringOptions) + ` μg`;
            case MassUnits.Milligrams:
                return super.truncateFractionDigits(this.Milligrams, options as ToStringOptions) + ` mg`;
            case MassUnits.Centigrams:
                return super.truncateFractionDigits(this.Centigrams, options as ToStringOptions) + ` cg`;
            case MassUnits.Decigrams:
                return super.truncateFractionDigits(this.Decigrams, options as ToStringOptions) + ` dg`;
            case MassUnits.Decagrams:
                return super.truncateFractionDigits(this.Decagrams, options as ToStringOptions) + ` dag`;
            case MassUnits.Hectograms:
                return super.truncateFractionDigits(this.Hectograms, options as ToStringOptions) + ` hg`;
            case MassUnits.Kilograms:
                return super.truncateFractionDigits(this.Kilograms, options as ToStringOptions) + ` kg`;
            case MassUnits.Kilotonnes:
                return super.truncateFractionDigits(this.Kilotonnes, options as ToStringOptions) + ` kt`;
            case MassUnits.Megatonnes:
                return super.truncateFractionDigits(this.Megatonnes, options as ToStringOptions) + ` Mt`;
            case MassUnits.Kilopounds:
                return super.truncateFractionDigits(this.Kilopounds, options as ToStringOptions) + ` klb`;
            case MassUnits.Megapounds:
                return super.truncateFractionDigits(this.Megapounds, options as ToStringOptions) + ` Mlb`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Mass unit abbreviation.
     * Note! the default abbreviation for Mass is Kilograms.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Mass.
     * @returns The abbreviation string of Mass.
     */
    public getUnitAbbreviation(unitAbbreviation: MassUnits = MassUnits.Kilograms): string {

        switch (unitAbbreviation) {
            
            case MassUnits.Grams:
                return `g`;
            case MassUnits.Tonnes:
                return `t`;
            case MassUnits.ShortTons:
                return `t (short)`;
            case MassUnits.LongTons:
                return `long tn`;
            case MassUnits.Pounds:
                return `lb`;
            case MassUnits.Ounces:
                return `oz`;
            case MassUnits.Slugs:
                return `slug`;
            case MassUnits.Stone:
                return `st`;
            case MassUnits.ShortHundredweight:
                return `cwt`;
            case MassUnits.LongHundredweight:
                return `cwt`;
            case MassUnits.Grains:
                return `gr`;
            case MassUnits.SolarMasses:
                return `M☉`;
            case MassUnits.EarthMasses:
                return `em`;
            case MassUnits.Femtograms:
                return `fg`;
            case MassUnits.Picograms:
                return `pg`;
            case MassUnits.Nanograms:
                return `ng`;
            case MassUnits.Micrograms:
                return `μg`;
            case MassUnits.Milligrams:
                return `mg`;
            case MassUnits.Centigrams:
                return `cg`;
            case MassUnits.Decigrams:
                return `dg`;
            case MassUnits.Decagrams:
                return `dag`;
            case MassUnits.Hectograms:
                return `hg`;
            case MassUnits.Kilograms:
                return `kg`;
            case MassUnits.Kilotonnes:
                return `kt`;
            case MassUnits.Megatonnes:
                return `Mt`;
            case MassUnits.Kilopounds:
                return `klb`;
            case MassUnits.Megapounds:
                return `Mlb`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Mass are equals to the current Mass.
     * @param mass The other Mass.
     * @returns True if the given Mass are equal to the current Mass.
     */
    public equals(mass: Mass): boolean {
        return super.internalEquals(this.value, mass.BaseValue);
    }

    /**
     * Compare the given Mass against the current Mass.
     * @param mass The other Mass.
     * @returns 0 if they are equal, -1 if the current Mass is less then other, 1 if the current Mass is greater then other.
     */
    public compareTo(mass: Mass): number {
        return super.internalCompareTo(this.value, mass.BaseValue);
    }

    /**
     * Add the given Mass with the current Mass.
     * @param mass The other Mass.
     * @returns A new Mass instance with the results.
     */
    public add(mass: Mass): Mass {
        return new Mass(super.internalAdd(this.value, mass.BaseValue))
    }

    /**
     * Subtract the given Mass with the current Mass.
     * @param mass The other Mass.
     * @returns A new Mass instance with the results.
     */
    public subtract(mass: Mass): Mass {
        return new Mass(super.internalSubtract(this.value, mass.BaseValue))
    }

    /**
     * Multiply the given Mass with the current Mass.
     * @param mass The other Mass.
     * @returns A new Mass instance with the results.
     */
    public multiply(mass: Mass): Mass {
        return new Mass(super.internalMultiply(this.value, mass.BaseValue))
    }

    /**
     * Divide the given Mass with the current Mass.
     * @param mass The other Mass.
     * @returns A new Mass instance with the results.
     */
    public divide(mass: Mass): Mass {
        return new Mass(super.internalDivide(this.value, mass.BaseValue))
    }

    /**
     * Modulo the given Mass with the current Mass.
     * @param mass The other Mass.
     * @returns A new Mass instance with the results.
     */
    public modulo(mass: Mass): Mass {
        return new Mass(super.internalModulo(this.value, mass.BaseValue))
    }

    /**
     * Pow the given Mass with the current Mass.
     * @param mass The other Mass.
     * @returns A new Mass instance with the results.
     */
    public pow(mass: Mass): Mass {
        return new Mass(super.internalPow(this.value, mass.BaseValue))
    }
}
