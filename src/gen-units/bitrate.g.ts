import { BaseUnit } from "../base-unit";

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
    ExabytesPerSecond = "ExabytePerSecond"
}

/** In telecommunications and computing, bit rate is the number of bits that are conveyed or processed per unit of time. */
export class BitRate extends BaseUnit {
    private value: number;
    private bitspersecondLazy: number | null = null;
    private bytespersecondLazy: number | null = null;
    private kilobitspersecondLazy: number | null = null;
    private megabitspersecondLazy: number | null = null;
    private gigabitspersecondLazy: number | null = null;
    private terabitspersecondLazy: number | null = null;
    private petabitspersecondLazy: number | null = null;
    private exabitspersecondLazy: number | null = null;
    private kilobytespersecondLazy: number | null = null;
    private megabytespersecondLazy: number | null = null;
    private gigabytespersecondLazy: number | null = null;
    private terabytespersecondLazy: number | null = null;
    private petabytespersecondLazy: number | null = null;
    private exabytespersecondLazy: number | null = null;

    /**
     * Create a new BitRate.
     * @param value The value.
     * @param fromUnit The ‘BitRate’ unit to create from.
     * The default unit is BitsPerSecond
     */
    public constructor(value: number, fromUnit: BitRateUnits = BitRateUnits.BitsPerSecond) {

        super();
        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of BitRate is BitsPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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
            case BitRateUnits.KilobytesPerSecond: return this.KilobytesPerSecond;
            case BitRateUnits.MegabytesPerSecond: return this.MegabytesPerSecond;
            case BitRateUnits.GigabytesPerSecond: return this.GigabytesPerSecond;
            case BitRateUnits.TerabytesPerSecond: return this.TerabytesPerSecond;
            case BitRateUnits.PetabytesPerSecond: return this.PetabytesPerSecond;
            case BitRateUnits.ExabytesPerSecond: return this.ExabytesPerSecond;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: BitRateUnits): number {
        switch (toUnit) {
                
            case BitRateUnits.BitsPerSecond:
                return this.value;
            case BitRateUnits.BytesPerSecond:
                return this.value / 8;
            case BitRateUnits.KilobitsPerSecond:
                return (this.value) / 1000;
            case BitRateUnits.MegabitsPerSecond:
                return (this.value) / 1000000;
            case BitRateUnits.GigabitsPerSecond:
                return (this.value) / 1000000000;
            case BitRateUnits.TerabitsPerSecond:
                return (this.value) / 1000000000000;
            case BitRateUnits.PetabitsPerSecond:
                return (this.value) / 1000000000000000;
            case BitRateUnits.ExabitsPerSecond:
                return (this.value) / 1000000000000000000;
            case BitRateUnits.KilobytesPerSecond:
                return (this.value / 8) / 1000;
            case BitRateUnits.MegabytesPerSecond:
                return (this.value / 8) / 1000000;
            case BitRateUnits.GigabytesPerSecond:
                return (this.value / 8) / 1000000000;
            case BitRateUnits.TerabytesPerSecond:
                return (this.value / 8) / 1000000000000;
            case BitRateUnits.PetabytesPerSecond:
                return (this.value / 8) / 1000000000000000;
            case BitRateUnits.ExabytesPerSecond:
                return (this.value / 8) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: BitRateUnits): number {
        switch (fromUnit) {
                
            case BitRateUnits.BitsPerSecond:
                return value;
            case BitRateUnits.BytesPerSecond:
                return value * 8;
            case BitRateUnits.KilobitsPerSecond:
                return (value) * 1000;
            case BitRateUnits.MegabitsPerSecond:
                return (value) * 1000000;
            case BitRateUnits.GigabitsPerSecond:
                return (value) * 1000000000;
            case BitRateUnits.TerabitsPerSecond:
                return (value) * 1000000000000;
            case BitRateUnits.PetabitsPerSecond:
                return (value) * 1000000000000000;
            case BitRateUnits.ExabitsPerSecond:
                return (value) * 1000000000000000000;
            case BitRateUnits.KilobytesPerSecond:
                return (value * 8) * 1000;
            case BitRateUnits.MegabytesPerSecond:
                return (value * 8) * 1000000;
            case BitRateUnits.GigabytesPerSecond:
                return (value * 8) * 1000000000;
            case BitRateUnits.TerabytesPerSecond:
                return (value * 8) * 1000000000000;
            case BitRateUnits.PetabytesPerSecond:
                return (value * 8) * 1000000000000000;
            case BitRateUnits.ExabytesPerSecond:
                return (value * 8) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the BitRate to string.
     * Note! the default format for BitRate is BitsPerSecond.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the BitRate.
     * @returns The string format of the BitRate.
     */
    public toString(unit: BitRateUnits = BitRateUnits.BitsPerSecond): string {

        switch (unit) {
            
            case BitRateUnits.BitsPerSecond:
                return this.BitsPerSecond + ` bit/s`;
            case BitRateUnits.BytesPerSecond:
                return this.BytesPerSecond + ` B/s`;
            case BitRateUnits.KilobitsPerSecond:
                return this.KilobitsPerSecond + ` kbit/s`;
            case BitRateUnits.MegabitsPerSecond:
                return this.MegabitsPerSecond + ` Mbit/s`;
            case BitRateUnits.GigabitsPerSecond:
                return this.GigabitsPerSecond + ` Gbit/s`;
            case BitRateUnits.TerabitsPerSecond:
                return this.TerabitsPerSecond + ` Tbit/s`;
            case BitRateUnits.PetabitsPerSecond:
                return this.PetabitsPerSecond + ` Pbit/s`;
            case BitRateUnits.ExabitsPerSecond:
                return this.ExabitsPerSecond + ` Ebit/s`;
            case BitRateUnits.KilobytesPerSecond:
                return this.KilobytesPerSecond + ` kB/s`;
            case BitRateUnits.MegabytesPerSecond:
                return this.MegabytesPerSecond + ` MB/s`;
            case BitRateUnits.GigabytesPerSecond:
                return this.GigabytesPerSecond + ` GB/s`;
            case BitRateUnits.TerabytesPerSecond:
                return this.TerabytesPerSecond + ` TB/s`;
            case BitRateUnits.PetabytesPerSecond:
                return this.PetabytesPerSecond + ` PB/s`;
            case BitRateUnits.ExabytesPerSecond:
                return this.ExabytesPerSecond + ` EB/s`;
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
