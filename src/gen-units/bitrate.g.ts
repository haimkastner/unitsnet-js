import { BaseUnit, areAnyOperatorsOverridden, ToStringOptions } from "../base-unit";

/** API DTO represents a BitRate */
export interface BitRateDto {
    /** The value of the BitRate */
    value: number;
    /**  The specific unit that the BitRate value is representing */
    unit: BitRateUnits;
}

/** BitRateUnits enumeration */
export enum BitRateUnits {
    /** */
    BitsPerSecond = "BitPerSecond",
    /** */
    BytesPerSecond = "BytePerSecond",
    /** */
    KilobitsPerSecond = "KilobitPerSecond",
    /** */
    MegabitsPerSecond = "MegabitPerSecond",
    /** */
    GigabitsPerSecond = "GigabitPerSecond",
    /** */
    TerabitsPerSecond = "TerabitPerSecond",
    /** */
    PetabitsPerSecond = "PetabitPerSecond",
    /** */
    ExabitsPerSecond = "ExabitPerSecond",
    /** */
    KibibitsPerSecond = "KibibitPerSecond",
    /** */
    MebibitsPerSecond = "MebibitPerSecond",
    /** */
    GibibitsPerSecond = "GibibitPerSecond",
    /** */
    TebibitsPerSecond = "TebibitPerSecond",
    /** */
    PebibitsPerSecond = "PebibitPerSecond",
    /** */
    ExbibitsPerSecond = "ExbibitPerSecond",
    /** */
    KilobytesPerSecond = "KilobytePerSecond",
    /** */
    MegabytesPerSecond = "MegabytePerSecond",
    /** */
    GigabytesPerSecond = "GigabytePerSecond",
    /** */
    TerabytesPerSecond = "TerabytePerSecond",
    /** */
    PetabytesPerSecond = "PetabytePerSecond",
    /** */
    ExabytesPerSecond = "ExabytePerSecond",
    /** */
    KibibytesPerSecond = "KibibytePerSecond",
    /** */
    MebibytesPerSecond = "MebibytePerSecond",
    /** */
    GibibytesPerSecond = "GibibytePerSecond",
    /** */
    TebibytesPerSecond = "TebibytePerSecond",
    /** */
    PebibytesPerSecond = "PebibytePerSecond",
    /** */
    ExbibytesPerSecond = "ExbibytePerSecond"
}

/** In telecommunications and computing, bit rate is the number of bits that are conveyed or processed per unit of time. */
export class BitRate extends BaseUnit {
    protected value: number;
    private bitspersecondLazy: number | null = null;
    private bytespersecondLazy: number | null = null;
    private kilobitspersecondLazy: number | null = null;
    private megabitspersecondLazy: number | null = null;
    private gigabitspersecondLazy: number | null = null;
    private terabitspersecondLazy: number | null = null;
    private petabitspersecondLazy: number | null = null;
    private exabitspersecondLazy: number | null = null;
    private kibibitspersecondLazy: number | null = null;
    private mebibitspersecondLazy: number | null = null;
    private gibibitspersecondLazy: number | null = null;
    private tebibitspersecondLazy: number | null = null;
    private pebibitspersecondLazy: number | null = null;
    private exbibitspersecondLazy: number | null = null;
    private kilobytespersecondLazy: number | null = null;
    private megabytespersecondLazy: number | null = null;
    private gigabytespersecondLazy: number | null = null;
    private terabytespersecondLazy: number | null = null;
    private petabytespersecondLazy: number | null = null;
    private exabytespersecondLazy: number | null = null;
    private kibibytespersecondLazy: number | null = null;
    private mebibytespersecondLazy: number | null = null;
    private gibibytespersecondLazy: number | null = null;
    private tebibytespersecondLazy: number | null = null;
    private pebibytespersecondLazy: number | null = null;
    private exbibytespersecondLazy: number | null = null;

    /**
     * Create a new BitRate.
     * @param value The value.
     * @param fromUnit The ‘BitRate’ unit to create from.
     * The default unit is BitsPerSecond
     */
    public constructor(value: number, fromUnit: BitRateUnits = BitRateUnits.BitsPerSecond) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of BitRate is BitsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): BitRateUnits.BitsPerSecond {
        return BitRateUnits.BitsPerSecond
    }

    /** */
    public get BitsPerSecond(): number {
        if(this.bitspersecondLazy !== null){
            return this.bitspersecondLazy;
        }
        return this.bitspersecondLazy = this.convertFromBase(BitRateUnits.BitsPerSecond);
    }

    /** */
    public get BytesPerSecond(): number {
        if(this.bytespersecondLazy !== null){
            return this.bytespersecondLazy;
        }
        return this.bytespersecondLazy = this.convertFromBase(BitRateUnits.BytesPerSecond);
    }

    /** */
    public get KilobitsPerSecond(): number {
        if(this.kilobitspersecondLazy !== null){
            return this.kilobitspersecondLazy;
        }
        return this.kilobitspersecondLazy = this.convertFromBase(BitRateUnits.KilobitsPerSecond);
    }

    /** */
    public get MegabitsPerSecond(): number {
        if(this.megabitspersecondLazy !== null){
            return this.megabitspersecondLazy;
        }
        return this.megabitspersecondLazy = this.convertFromBase(BitRateUnits.MegabitsPerSecond);
    }

    /** */
    public get GigabitsPerSecond(): number {
        if(this.gigabitspersecondLazy !== null){
            return this.gigabitspersecondLazy;
        }
        return this.gigabitspersecondLazy = this.convertFromBase(BitRateUnits.GigabitsPerSecond);
    }

    /** */
    public get TerabitsPerSecond(): number {
        if(this.terabitspersecondLazy !== null){
            return this.terabitspersecondLazy;
        }
        return this.terabitspersecondLazy = this.convertFromBase(BitRateUnits.TerabitsPerSecond);
    }

    /** */
    public get PetabitsPerSecond(): number {
        if(this.petabitspersecondLazy !== null){
            return this.petabitspersecondLazy;
        }
        return this.petabitspersecondLazy = this.convertFromBase(BitRateUnits.PetabitsPerSecond);
    }

    /** */
    public get ExabitsPerSecond(): number {
        if(this.exabitspersecondLazy !== null){
            return this.exabitspersecondLazy;
        }
        return this.exabitspersecondLazy = this.convertFromBase(BitRateUnits.ExabitsPerSecond);
    }

    /** */
    public get KibibitsPerSecond(): number {
        if(this.kibibitspersecondLazy !== null){
            return this.kibibitspersecondLazy;
        }
        return this.kibibitspersecondLazy = this.convertFromBase(BitRateUnits.KibibitsPerSecond);
    }

    /** */
    public get MebibitsPerSecond(): number {
        if(this.mebibitspersecondLazy !== null){
            return this.mebibitspersecondLazy;
        }
        return this.mebibitspersecondLazy = this.convertFromBase(BitRateUnits.MebibitsPerSecond);
    }

    /** */
    public get GibibitsPerSecond(): number {
        if(this.gibibitspersecondLazy !== null){
            return this.gibibitspersecondLazy;
        }
        return this.gibibitspersecondLazy = this.convertFromBase(BitRateUnits.GibibitsPerSecond);
    }

    /** */
    public get TebibitsPerSecond(): number {
        if(this.tebibitspersecondLazy !== null){
            return this.tebibitspersecondLazy;
        }
        return this.tebibitspersecondLazy = this.convertFromBase(BitRateUnits.TebibitsPerSecond);
    }

    /** */
    public get PebibitsPerSecond(): number {
        if(this.pebibitspersecondLazy !== null){
            return this.pebibitspersecondLazy;
        }
        return this.pebibitspersecondLazy = this.convertFromBase(BitRateUnits.PebibitsPerSecond);
    }

    /** */
    public get ExbibitsPerSecond(): number {
        if(this.exbibitspersecondLazy !== null){
            return this.exbibitspersecondLazy;
        }
        return this.exbibitspersecondLazy = this.convertFromBase(BitRateUnits.ExbibitsPerSecond);
    }

    /** */
    public get KilobytesPerSecond(): number {
        if(this.kilobytespersecondLazy !== null){
            return this.kilobytespersecondLazy;
        }
        return this.kilobytespersecondLazy = this.convertFromBase(BitRateUnits.KilobytesPerSecond);
    }

    /** */
    public get MegabytesPerSecond(): number {
        if(this.megabytespersecondLazy !== null){
            return this.megabytespersecondLazy;
        }
        return this.megabytespersecondLazy = this.convertFromBase(BitRateUnits.MegabytesPerSecond);
    }

    /** */
    public get GigabytesPerSecond(): number {
        if(this.gigabytespersecondLazy !== null){
            return this.gigabytespersecondLazy;
        }
        return this.gigabytespersecondLazy = this.convertFromBase(BitRateUnits.GigabytesPerSecond);
    }

    /** */
    public get TerabytesPerSecond(): number {
        if(this.terabytespersecondLazy !== null){
            return this.terabytespersecondLazy;
        }
        return this.terabytespersecondLazy = this.convertFromBase(BitRateUnits.TerabytesPerSecond);
    }

    /** */
    public get PetabytesPerSecond(): number {
        if(this.petabytespersecondLazy !== null){
            return this.petabytespersecondLazy;
        }
        return this.petabytespersecondLazy = this.convertFromBase(BitRateUnits.PetabytesPerSecond);
    }

    /** */
    public get ExabytesPerSecond(): number {
        if(this.exabytespersecondLazy !== null){
            return this.exabytespersecondLazy;
        }
        return this.exabytespersecondLazy = this.convertFromBase(BitRateUnits.ExabytesPerSecond);
    }

    /** */
    public get KibibytesPerSecond(): number {
        if(this.kibibytespersecondLazy !== null){
            return this.kibibytespersecondLazy;
        }
        return this.kibibytespersecondLazy = this.convertFromBase(BitRateUnits.KibibytesPerSecond);
    }

    /** */
    public get MebibytesPerSecond(): number {
        if(this.mebibytespersecondLazy !== null){
            return this.mebibytespersecondLazy;
        }
        return this.mebibytespersecondLazy = this.convertFromBase(BitRateUnits.MebibytesPerSecond);
    }

    /** */
    public get GibibytesPerSecond(): number {
        if(this.gibibytespersecondLazy !== null){
            return this.gibibytespersecondLazy;
        }
        return this.gibibytespersecondLazy = this.convertFromBase(BitRateUnits.GibibytesPerSecond);
    }

    /** */
    public get TebibytesPerSecond(): number {
        if(this.tebibytespersecondLazy !== null){
            return this.tebibytespersecondLazy;
        }
        return this.tebibytespersecondLazy = this.convertFromBase(BitRateUnits.TebibytesPerSecond);
    }

    /** */
    public get PebibytesPerSecond(): number {
        if(this.pebibytespersecondLazy !== null){
            return this.pebibytespersecondLazy;
        }
        return this.pebibytespersecondLazy = this.convertFromBase(BitRateUnits.PebibytesPerSecond);
    }

    /** */
    public get ExbibytesPerSecond(): number {
        if(this.exbibytespersecondLazy !== null){
            return this.exbibytespersecondLazy;
        }
        return this.exbibytespersecondLazy = this.convertFromBase(BitRateUnits.ExbibytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a BitsPerSecond
     *
     * @param value The unit as BitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromBitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a BytesPerSecond
     *
     * @param value The unit as BytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromBytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.BytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a KilobitsPerSecond
     *
     * @param value The unit as KilobitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromKilobitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KilobitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a MegabitsPerSecond
     *
     * @param value The unit as MegabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromMegabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MegabitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a GigabitsPerSecond
     *
     * @param value The unit as GigabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromGigabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GigabitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a TerabitsPerSecond
     *
     * @param value The unit as TerabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromTerabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TerabitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a PetabitsPerSecond
     *
     * @param value The unit as PetabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromPetabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PetabitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a ExabitsPerSecond
     *
     * @param value The unit as ExabitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromExabitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExabitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a KibibitsPerSecond
     *
     * @param value The unit as KibibitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromKibibitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KibibitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a MebibitsPerSecond
     *
     * @param value The unit as MebibitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromMebibitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MebibitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a GibibitsPerSecond
     *
     * @param value The unit as GibibitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromGibibitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GibibitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a TebibitsPerSecond
     *
     * @param value The unit as TebibitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromTebibitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TebibitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a PebibitsPerSecond
     *
     * @param value The unit as PebibitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromPebibitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PebibitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a ExbibitsPerSecond
     *
     * @param value The unit as ExbibitsPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromExbibitsPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExbibitsPerSecond);
    }

    /**
     * Create a new BitRate instance from a KilobytesPerSecond
     *
     * @param value The unit as KilobytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromKilobytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KilobytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a MegabytesPerSecond
     *
     * @param value The unit as MegabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromMegabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MegabytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a GigabytesPerSecond
     *
     * @param value The unit as GigabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromGigabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GigabytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a TerabytesPerSecond
     *
     * @param value The unit as TerabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromTerabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TerabytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a PetabytesPerSecond
     *
     * @param value The unit as PetabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromPetabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PetabytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a ExabytesPerSecond
     *
     * @param value The unit as ExabytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromExabytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExabytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a KibibytesPerSecond
     *
     * @param value The unit as KibibytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromKibibytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.KibibytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a MebibytesPerSecond
     *
     * @param value The unit as MebibytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromMebibytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.MebibytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a GibibytesPerSecond
     *
     * @param value The unit as GibibytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromGibibytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.GibibytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a TebibytesPerSecond
     *
     * @param value The unit as TebibytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromTebibytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.TebibytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a PebibytesPerSecond
     *
     * @param value The unit as PebibytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromPebibytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.PebibytesPerSecond);
    }

    /**
     * Create a new BitRate instance from a ExbibytesPerSecond
     *
     * @param value The unit as ExbibytesPerSecond to create a new BitRate from.
     * @returns The new BitRate instance.
     */
    public static FromExbibytesPerSecond(value: number): BitRate {
        return new BitRate(value, BitRateUnits.ExbibytesPerSecond);
    }

    /**
     * Gets the base unit enumeration associated with BitRate
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof BitRateUnits {
        return BitRateUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): BitRateUnits.BitsPerSecond {
        return BitRateUnits.BitsPerSecond;
    }

    /**
     * Create API DTO represent a BitRate unit.
     * @param holdInUnit The specific BitRate unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: BitRateUnits = BitRateUnits.BitsPerSecond): BitRateDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a BitRate unit from an API DTO representation.
     * @param dtoBitRate The BitRate API DTO representation
     */
    public static FromDto(dtoBitRate: BitRateDto): BitRate {
        return new BitRate(dtoBitRate.value, dtoBitRate.unit);
    }

    /**
     * Convert BitRate to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: BitRateUnits): number {
        switch (toUnit) {
            case BitRateUnits.BitsPerSecond: return this.BitsPerSecond;
            case BitRateUnits.BytesPerSecond: return this.BytesPerSecond;
            case BitRateUnits.KilobitsPerSecond: return this.KilobitsPerSecond;
            case BitRateUnits.MegabitsPerSecond: return this.MegabitsPerSecond;
            case BitRateUnits.GigabitsPerSecond: return this.GigabitsPerSecond;
            case BitRateUnits.TerabitsPerSecond: return this.TerabitsPerSecond;
            case BitRateUnits.PetabitsPerSecond: return this.PetabitsPerSecond;
            case BitRateUnits.ExabitsPerSecond: return this.ExabitsPerSecond;
            case BitRateUnits.KibibitsPerSecond: return this.KibibitsPerSecond;
            case BitRateUnits.MebibitsPerSecond: return this.MebibitsPerSecond;
            case BitRateUnits.GibibitsPerSecond: return this.GibibitsPerSecond;
            case BitRateUnits.TebibitsPerSecond: return this.TebibitsPerSecond;
            case BitRateUnits.PebibitsPerSecond: return this.PebibitsPerSecond;
            case BitRateUnits.ExbibitsPerSecond: return this.ExbibitsPerSecond;
            case BitRateUnits.KilobytesPerSecond: return this.KilobytesPerSecond;
            case BitRateUnits.MegabytesPerSecond: return this.MegabytesPerSecond;
            case BitRateUnits.GigabytesPerSecond: return this.GigabytesPerSecond;
            case BitRateUnits.TerabytesPerSecond: return this.TerabytesPerSecond;
            case BitRateUnits.PetabytesPerSecond: return this.PetabytesPerSecond;
            case BitRateUnits.ExabytesPerSecond: return this.ExabytesPerSecond;
            case BitRateUnits.KibibytesPerSecond: return this.KibibytesPerSecond;
            case BitRateUnits.MebibytesPerSecond: return this.MebibytesPerSecond;
            case BitRateUnits.GibibytesPerSecond: return this.GibibytesPerSecond;
            case BitRateUnits.TebibytesPerSecond: return this.TebibytesPerSecond;
            case BitRateUnits.PebibytesPerSecond: return this.PebibytesPerSecond;
            case BitRateUnits.ExbibytesPerSecond: return this.ExbibytesPerSecond;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: BitRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case BitRateUnits.BitsPerSecond: return this.value;
                case BitRateUnits.BytesPerSecond: return super.internalDivide(this.value, 8);
                case BitRateUnits.KilobitsPerSecond: return super.internalDivide(this.value, 1000);
                case BitRateUnits.MegabitsPerSecond: return super.internalDivide(this.value, 1000000);
                case BitRateUnits.GigabitsPerSecond: return super.internalDivide(this.value, 1000000000);
                case BitRateUnits.TerabitsPerSecond: return super.internalDivide(this.value, 1000000000000);
                case BitRateUnits.PetabitsPerSecond: return super.internalDivide(this.value, 1000000000000000);
                case BitRateUnits.ExabitsPerSecond: return super.internalDivide(this.value, 1000000000000000000);
                case BitRateUnits.KibibitsPerSecond: return super.internalDivide(this.value, 1024);
                case BitRateUnits.MebibitsPerSecond: return super.internalDivide(this.value, 1048576);
                case BitRateUnits.GibibitsPerSecond: return super.internalDivide(this.value, 1073741824);
                case BitRateUnits.TebibitsPerSecond: return super.internalDivide(this.value, 1099511627776);
                case BitRateUnits.PebibitsPerSecond: return super.internalDivide(this.value, 1125899906842624);
                case BitRateUnits.ExbibitsPerSecond: return super.internalDivide(this.value, 1152921504606847000);
                case BitRateUnits.KilobytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000);
                }
                case BitRateUnits.MegabytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000);
                }
                case BitRateUnits.GigabytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000);
                }
                case BitRateUnits.TerabytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000000);
                }
                case BitRateUnits.PetabytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000000000);
                }
                case BitRateUnits.ExabytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000000000000);
                }
                case BitRateUnits.KibibytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1024);
                }
                case BitRateUnits.MebibytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1048576);
                }
                case BitRateUnits.GibibytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1073741824);
                }
                case BitRateUnits.TebibytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1099511627776);
                }
                case BitRateUnits.PebibytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1125899906842624);
                }
                case BitRateUnits.ExbibytesPerSecond: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1152921504606847000);
                }
                default: return Number.NaN;
            }
        switch (toUnit) {
            case BitRateUnits.BitsPerSecond: return this.value;
            case BitRateUnits.BytesPerSecond: return this.value / 8;
            case BitRateUnits.KilobitsPerSecond: return (this.value) / 1000;
            case BitRateUnits.MegabitsPerSecond: return (this.value) / 1000000;
            case BitRateUnits.GigabitsPerSecond: return (this.value) / 1000000000;
            case BitRateUnits.TerabitsPerSecond: return (this.value) / 1000000000000;
            case BitRateUnits.PetabitsPerSecond: return (this.value) / 1000000000000000;
            case BitRateUnits.ExabitsPerSecond: return (this.value) / 1000000000000000000;
            case BitRateUnits.KibibitsPerSecond: return (this.value) / 1024;
            case BitRateUnits.MebibitsPerSecond: return (this.value) / 1048576;
            case BitRateUnits.GibibitsPerSecond: return (this.value) / 1073741824;
            case BitRateUnits.TebibitsPerSecond: return (this.value) / 1099511627776;
            case BitRateUnits.PebibitsPerSecond: return (this.value) / 1125899906842624;
            case BitRateUnits.ExbibitsPerSecond: return (this.value) / 1152921504606847000;
            case BitRateUnits.KilobytesPerSecond: return (this.value / 8) / 1000;
            case BitRateUnits.MegabytesPerSecond: return (this.value / 8) / 1000000;
            case BitRateUnits.GigabytesPerSecond: return (this.value / 8) / 1000000000;
            case BitRateUnits.TerabytesPerSecond: return (this.value / 8) / 1000000000000;
            case BitRateUnits.PetabytesPerSecond: return (this.value / 8) / 1000000000000000;
            case BitRateUnits.ExabytesPerSecond: return (this.value / 8) / 1000000000000000000;
            case BitRateUnits.KibibytesPerSecond: return (this.value / 8) / 1024;
            case BitRateUnits.MebibytesPerSecond: return (this.value / 8) / 1048576;
            case BitRateUnits.GibibytesPerSecond: return (this.value / 8) / 1073741824;
            case BitRateUnits.TebibytesPerSecond: return (this.value / 8) / 1099511627776;
            case BitRateUnits.PebibytesPerSecond: return (this.value / 8) / 1125899906842624;
            case BitRateUnits.ExbibytesPerSecond: return (this.value / 8) / 1152921504606847000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: BitRateUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case BitRateUnits.BitsPerSecond: return value;
                case BitRateUnits.BytesPerSecond: return super.internalMultiply(value, 8);
                case BitRateUnits.KilobitsPerSecond: return super.internalMultiply(value, 1000);
                case BitRateUnits.MegabitsPerSecond: return super.internalMultiply(value, 1000000);
                case BitRateUnits.GigabitsPerSecond: return super.internalMultiply(value, 1000000000);
                case BitRateUnits.TerabitsPerSecond: return super.internalMultiply(value, 1000000000000);
                case BitRateUnits.PetabitsPerSecond: return super.internalMultiply(value, 1000000000000000);
                case BitRateUnits.ExabitsPerSecond: return super.internalMultiply(value, 1000000000000000000);
                case BitRateUnits.KibibitsPerSecond: return super.internalMultiply(value, 1024);
                case BitRateUnits.MebibitsPerSecond: return super.internalMultiply(value, 1048576);
                case BitRateUnits.GibibitsPerSecond: return super.internalMultiply(value, 1073741824);
                case BitRateUnits.TebibitsPerSecond: return super.internalMultiply(value, 1099511627776);
                case BitRateUnits.PebibitsPerSecond: return super.internalMultiply(value, 1125899906842624);
                case BitRateUnits.ExbibitsPerSecond: return super.internalMultiply(value, 1152921504606847000);
                case BitRateUnits.KilobytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000);
                }
                case BitRateUnits.MegabytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000);
                }
                case BitRateUnits.GigabytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000);
                }
                case BitRateUnits.TerabytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000000);
                }
                case BitRateUnits.PetabytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000000000);
                }
                case BitRateUnits.ExabytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000000000000);
                }
                case BitRateUnits.KibibytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1024);
                }
                case BitRateUnits.MebibytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1048576);
                }
                case BitRateUnits.GibibytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1073741824);
                }
                case BitRateUnits.TebibytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1099511627776);
                }
                case BitRateUnits.PebibytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1125899906842624);
                }
                case BitRateUnits.ExbibytesPerSecond: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1152921504606847000);
                }
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case BitRateUnits.BitsPerSecond: return value;
            case BitRateUnits.BytesPerSecond: return value * 8;
            case BitRateUnits.KilobitsPerSecond: return (value) * 1000;
            case BitRateUnits.MegabitsPerSecond: return (value) * 1000000;
            case BitRateUnits.GigabitsPerSecond: return (value) * 1000000000;
            case BitRateUnits.TerabitsPerSecond: return (value) * 1000000000000;
            case BitRateUnits.PetabitsPerSecond: return (value) * 1000000000000000;
            case BitRateUnits.ExabitsPerSecond: return (value) * 1000000000000000000;
            case BitRateUnits.KibibitsPerSecond: return (value) * 1024;
            case BitRateUnits.MebibitsPerSecond: return (value) * 1048576;
            case BitRateUnits.GibibitsPerSecond: return (value) * 1073741824;
            case BitRateUnits.TebibitsPerSecond: return (value) * 1099511627776;
            case BitRateUnits.PebibitsPerSecond: return (value) * 1125899906842624;
            case BitRateUnits.ExbibitsPerSecond: return (value) * 1152921504606847000;
            case BitRateUnits.KilobytesPerSecond: return (value * 8) * 1000;
            case BitRateUnits.MegabytesPerSecond: return (value * 8) * 1000000;
            case BitRateUnits.GigabytesPerSecond: return (value * 8) * 1000000000;
            case BitRateUnits.TerabytesPerSecond: return (value * 8) * 1000000000000;
            case BitRateUnits.PetabytesPerSecond: return (value * 8) * 1000000000000000;
            case BitRateUnits.ExabytesPerSecond: return (value * 8) * 1000000000000000000;
            case BitRateUnits.KibibytesPerSecond: return (value * 8) * 1024;
            case BitRateUnits.MebibytesPerSecond: return (value * 8) * 1048576;
            case BitRateUnits.GibibytesPerSecond: return (value * 8) * 1073741824;
            case BitRateUnits.TebibytesPerSecond: return (value * 8) * 1099511627776;
            case BitRateUnits.PebibytesPerSecond: return (value * 8) * 1125899906842624;
            case BitRateUnits.ExbibytesPerSecond: return (value * 8) * 1152921504606847000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the BitRate to string.
     * Note! the default format for BitRate is BitsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the BitRate.
     * @param options The ToString options, it also can be the number of fractional digits to keep that deprecated and moved to the options object. support in number will be dropped in the upcoming versions.
     * @returns The string format of the BitRate.
     */
    public toString(unit: BitRateUnits = BitRateUnits.BitsPerSecond, options?: number | ToStringOptions): string {

        if (typeof options === 'number') {
            console.warn('The number parameter is deprecated and moved to the options object. support in number will be dropped in the upcoming versions.');
            options = { fractionalDigits: options as number };
        }
        switch (unit) {
            
            case BitRateUnits.BitsPerSecond:
                return super.truncateFractionDigits(this.BitsPerSecond, options as ToStringOptions) + ` bit/s`;
            case BitRateUnits.BytesPerSecond:
                return super.truncateFractionDigits(this.BytesPerSecond, options as ToStringOptions) + ` B/s`;
            case BitRateUnits.KilobitsPerSecond:
                return super.truncateFractionDigits(this.KilobitsPerSecond, options as ToStringOptions) + ` kbit/s`;
            case BitRateUnits.MegabitsPerSecond:
                return super.truncateFractionDigits(this.MegabitsPerSecond, options as ToStringOptions) + ` Mbit/s`;
            case BitRateUnits.GigabitsPerSecond:
                return super.truncateFractionDigits(this.GigabitsPerSecond, options as ToStringOptions) + ` Gbit/s`;
            case BitRateUnits.TerabitsPerSecond:
                return super.truncateFractionDigits(this.TerabitsPerSecond, options as ToStringOptions) + ` Tbit/s`;
            case BitRateUnits.PetabitsPerSecond:
                return super.truncateFractionDigits(this.PetabitsPerSecond, options as ToStringOptions) + ` Pbit/s`;
            case BitRateUnits.ExabitsPerSecond:
                return super.truncateFractionDigits(this.ExabitsPerSecond, options as ToStringOptions) + ` Ebit/s`;
            case BitRateUnits.KibibitsPerSecond:
                return super.truncateFractionDigits(this.KibibitsPerSecond, options as ToStringOptions) + ` KiBbit/s`;
            case BitRateUnits.MebibitsPerSecond:
                return super.truncateFractionDigits(this.MebibitsPerSecond, options as ToStringOptions) + ` MiBbit/s`;
            case BitRateUnits.GibibitsPerSecond:
                return super.truncateFractionDigits(this.GibibitsPerSecond, options as ToStringOptions) + ` GiBbit/s`;
            case BitRateUnits.TebibitsPerSecond:
                return super.truncateFractionDigits(this.TebibitsPerSecond, options as ToStringOptions) + ` TiBbit/s`;
            case BitRateUnits.PebibitsPerSecond:
                return super.truncateFractionDigits(this.PebibitsPerSecond, options as ToStringOptions) + ` PiBbit/s`;
            case BitRateUnits.ExbibitsPerSecond:
                return super.truncateFractionDigits(this.ExbibitsPerSecond, options as ToStringOptions) + ` EiBbit/s`;
            case BitRateUnits.KilobytesPerSecond:
                return super.truncateFractionDigits(this.KilobytesPerSecond, options as ToStringOptions) + ` kB/s`;
            case BitRateUnits.MegabytesPerSecond:
                return super.truncateFractionDigits(this.MegabytesPerSecond, options as ToStringOptions) + ` MB/s`;
            case BitRateUnits.GigabytesPerSecond:
                return super.truncateFractionDigits(this.GigabytesPerSecond, options as ToStringOptions) + ` GB/s`;
            case BitRateUnits.TerabytesPerSecond:
                return super.truncateFractionDigits(this.TerabytesPerSecond, options as ToStringOptions) + ` TB/s`;
            case BitRateUnits.PetabytesPerSecond:
                return super.truncateFractionDigits(this.PetabytesPerSecond, options as ToStringOptions) + ` PB/s`;
            case BitRateUnits.ExabytesPerSecond:
                return super.truncateFractionDigits(this.ExabytesPerSecond, options as ToStringOptions) + ` EB/s`;
            case BitRateUnits.KibibytesPerSecond:
                return super.truncateFractionDigits(this.KibibytesPerSecond, options as ToStringOptions) + ` KiBB/s`;
            case BitRateUnits.MebibytesPerSecond:
                return super.truncateFractionDigits(this.MebibytesPerSecond, options as ToStringOptions) + ` MiBB/s`;
            case BitRateUnits.GibibytesPerSecond:
                return super.truncateFractionDigits(this.GibibytesPerSecond, options as ToStringOptions) + ` GiBB/s`;
            case BitRateUnits.TebibytesPerSecond:
                return super.truncateFractionDigits(this.TebibytesPerSecond, options as ToStringOptions) + ` TiBB/s`;
            case BitRateUnits.PebibytesPerSecond:
                return super.truncateFractionDigits(this.PebibytesPerSecond, options as ToStringOptions) + ` PiBB/s`;
            case BitRateUnits.ExbibytesPerSecond:
                return super.truncateFractionDigits(this.ExbibytesPerSecond, options as ToStringOptions) + ` EiBB/s`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get BitRate unit abbreviation.
     * Note! the default abbreviation for BitRate is BitsPerSecond.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the BitRate.
     * @returns The abbreviation string of BitRate.
     */
    public getUnitAbbreviation(unitAbbreviation: BitRateUnits = BitRateUnits.BitsPerSecond): string {

        switch (unitAbbreviation) {
            
            case BitRateUnits.BitsPerSecond:
                return `bit/s`;
            case BitRateUnits.BytesPerSecond:
                return `B/s`;
            case BitRateUnits.KilobitsPerSecond:
                return `kbit/s`;
            case BitRateUnits.MegabitsPerSecond:
                return `Mbit/s`;
            case BitRateUnits.GigabitsPerSecond:
                return `Gbit/s`;
            case BitRateUnits.TerabitsPerSecond:
                return `Tbit/s`;
            case BitRateUnits.PetabitsPerSecond:
                return `Pbit/s`;
            case BitRateUnits.ExabitsPerSecond:
                return `Ebit/s`;
            case BitRateUnits.KibibitsPerSecond:
                return `KiBbit/s`;
            case BitRateUnits.MebibitsPerSecond:
                return `MiBbit/s`;
            case BitRateUnits.GibibitsPerSecond:
                return `GiBbit/s`;
            case BitRateUnits.TebibitsPerSecond:
                return `TiBbit/s`;
            case BitRateUnits.PebibitsPerSecond:
                return `PiBbit/s`;
            case BitRateUnits.ExbibitsPerSecond:
                return `EiBbit/s`;
            case BitRateUnits.KilobytesPerSecond:
                return `kB/s`;
            case BitRateUnits.MegabytesPerSecond:
                return `MB/s`;
            case BitRateUnits.GigabytesPerSecond:
                return `GB/s`;
            case BitRateUnits.TerabytesPerSecond:
                return `TB/s`;
            case BitRateUnits.PetabytesPerSecond:
                return `PB/s`;
            case BitRateUnits.ExabytesPerSecond:
                return `EB/s`;
            case BitRateUnits.KibibytesPerSecond:
                return `KiBB/s`;
            case BitRateUnits.MebibytesPerSecond:
                return `MiBB/s`;
            case BitRateUnits.GibibytesPerSecond:
                return `GiBB/s`;
            case BitRateUnits.TebibytesPerSecond:
                return `TiBB/s`;
            case BitRateUnits.PebibytesPerSecond:
                return `PiBB/s`;
            case BitRateUnits.ExbibytesPerSecond:
                return `EiBB/s`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given BitRate are equals to the current BitRate.
     * @param bitRate The other BitRate.
     * @returns True if the given BitRate are equal to the current BitRate.
     */
    public equals(bitRate: BitRate): boolean {
        return super.internalEquals(this.value, bitRate.BaseValue);
    }

    /**
     * Compare the given BitRate against the current BitRate.
     * @param bitRate The other BitRate.
     * @returns 0 if they are equal, -1 if the current BitRate is less then other, 1 if the current BitRate is greater then other.
     */
    public compareTo(bitRate: BitRate): number {
        return super.internalCompareTo(this.value, bitRate.BaseValue);
    }

    /**
     * Add the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    public add(bitRate: BitRate): BitRate {
        return new BitRate(super.internalAdd(this.value, bitRate.BaseValue))
    }

    /**
     * Subtract the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    public subtract(bitRate: BitRate): BitRate {
        return new BitRate(super.internalSubtract(this.value, bitRate.BaseValue))
    }

    /**
     * Multiply the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    public multiply(bitRate: BitRate): BitRate {
        return new BitRate(super.internalMultiply(this.value, bitRate.BaseValue))
    }

    /**
     * Divide the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    public divide(bitRate: BitRate): BitRate {
        return new BitRate(super.internalDivide(this.value, bitRate.BaseValue))
    }

    /**
     * Modulo the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    public modulo(bitRate: BitRate): BitRate {
        return new BitRate(super.internalModulo(this.value, bitRate.BaseValue))
    }

    /**
     * Pow the given BitRate with the current BitRate.
     * @param bitRate The other BitRate.
     * @returns A new BitRate instance with the results.
     */
    public pow(bitRate: BitRate): BitRate {
        return new BitRate(super.internalPow(this.value, bitRate.BaseValue))
    }
}
