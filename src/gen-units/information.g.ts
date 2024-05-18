import { BaseUnit, areAnyOperatorsOverridden } from "../base-unit";

/** API DTO represents a Information */
export interface InformationDto {
    /** The value of the Information */
    value: number;
    /**  The specific unit that the Information value is representing */
    unit: InformationUnits;
}

/** InformationUnits enumeration */
export enum InformationUnits {
    /** */
    Bytes = "Byte",
    /** */
    Bits = "Bit",
    /** */
    Kilobytes = "Kilobyte",
    /** */
    Megabytes = "Megabyte",
    /** */
    Gigabytes = "Gigabyte",
    /** */
    Terabytes = "Terabyte",
    /** */
    Petabytes = "Petabyte",
    /** */
    Exabytes = "Exabyte",
    /** */
    Kibibytes = "Kibibyte",
    /** */
    Mebibytes = "Mebibyte",
    /** */
    Gibibytes = "Gibibyte",
    /** */
    Tebibytes = "Tebibyte",
    /** */
    Pebibytes = "Pebibyte",
    /** */
    Exbibytes = "Exbibyte",
    /** */
    Kilobits = "Kilobit",
    /** */
    Megabits = "Megabit",
    /** */
    Gigabits = "Gigabit",
    /** */
    Terabits = "Terabit",
    /** */
    Petabits = "Petabit",
    /** */
    Exabits = "Exabit",
    /** */
    Kibibits = "Kibibit",
    /** */
    Mebibits = "Mebibit",
    /** */
    Gibibits = "Gibibit",
    /** */
    Tebibits = "Tebibit",
    /** */
    Pebibits = "Pebibit",
    /** */
    Exbibits = "Exbibit"
}

/** In computing and telecommunications, a unit of information is the capacity of some standard data storage system or communication channel, used to measure the capacities of other systems and channels. In information theory, units of information are also used to measure the information contents or entropy of random variables. */
export class Information extends BaseUnit {
    protected value: number;
    private bytesLazy: number | null = null;
    private bitsLazy: number | null = null;
    private kilobytesLazy: number | null = null;
    private megabytesLazy: number | null = null;
    private gigabytesLazy: number | null = null;
    private terabytesLazy: number | null = null;
    private petabytesLazy: number | null = null;
    private exabytesLazy: number | null = null;
    private kibibytesLazy: number | null = null;
    private mebibytesLazy: number | null = null;
    private gibibytesLazy: number | null = null;
    private tebibytesLazy: number | null = null;
    private pebibytesLazy: number | null = null;
    private exbibytesLazy: number | null = null;
    private kilobitsLazy: number | null = null;
    private megabitsLazy: number | null = null;
    private gigabitsLazy: number | null = null;
    private terabitsLazy: number | null = null;
    private petabitsLazy: number | null = null;
    private exabitsLazy: number | null = null;
    private kibibitsLazy: number | null = null;
    private mebibitsLazy: number | null = null;
    private gibibitsLazy: number | null = null;
    private tebibitsLazy: number | null = null;
    private pebibitsLazy: number | null = null;
    private exbibitsLazy: number | null = null;

    /**
     * Create a new Information.
     * @param value The value.
     * @param fromUnit The ‘Information’ unit to create from.
     * The default unit is Bits
     */
    public constructor(value: number, fromUnit: InformationUnits = InformationUnits.Bits) {

        super();
        if (value === undefined || value === null || Number.isNaN(value)) {
            throw new TypeError('invalid unit value ‘' + value + '’');
        }
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Information is Bits.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** Gets the default unit used when creating instances of the unit or its DTO */
    protected get baseUnit(): InformationUnits.Bits {
        return InformationUnits.Bits
    }

    /** */
    public get Bytes(): number {
        if(this.bytesLazy !== null){
            return this.bytesLazy;
        }
        return this.bytesLazy = this.convertFromBase(InformationUnits.Bytes);
    }

    /** */
    public get Bits(): number {
        if(this.bitsLazy !== null){
            return this.bitsLazy;
        }
        return this.bitsLazy = this.convertFromBase(InformationUnits.Bits);
    }

    /** */
    public get Kilobytes(): number {
        if(this.kilobytesLazy !== null){
            return this.kilobytesLazy;
        }
        return this.kilobytesLazy = this.convertFromBase(InformationUnits.Kilobytes);
    }

    /** */
    public get Megabytes(): number {
        if(this.megabytesLazy !== null){
            return this.megabytesLazy;
        }
        return this.megabytesLazy = this.convertFromBase(InformationUnits.Megabytes);
    }

    /** */
    public get Gigabytes(): number {
        if(this.gigabytesLazy !== null){
            return this.gigabytesLazy;
        }
        return this.gigabytesLazy = this.convertFromBase(InformationUnits.Gigabytes);
    }

    /** */
    public get Terabytes(): number {
        if(this.terabytesLazy !== null){
            return this.terabytesLazy;
        }
        return this.terabytesLazy = this.convertFromBase(InformationUnits.Terabytes);
    }

    /** */
    public get Petabytes(): number {
        if(this.petabytesLazy !== null){
            return this.petabytesLazy;
        }
        return this.petabytesLazy = this.convertFromBase(InformationUnits.Petabytes);
    }

    /** */
    public get Exabytes(): number {
        if(this.exabytesLazy !== null){
            return this.exabytesLazy;
        }
        return this.exabytesLazy = this.convertFromBase(InformationUnits.Exabytes);
    }

    /** */
    public get Kibibytes(): number {
        if(this.kibibytesLazy !== null){
            return this.kibibytesLazy;
        }
        return this.kibibytesLazy = this.convertFromBase(InformationUnits.Kibibytes);
    }

    /** */
    public get Mebibytes(): number {
        if(this.mebibytesLazy !== null){
            return this.mebibytesLazy;
        }
        return this.mebibytesLazy = this.convertFromBase(InformationUnits.Mebibytes);
    }

    /** */
    public get Gibibytes(): number {
        if(this.gibibytesLazy !== null){
            return this.gibibytesLazy;
        }
        return this.gibibytesLazy = this.convertFromBase(InformationUnits.Gibibytes);
    }

    /** */
    public get Tebibytes(): number {
        if(this.tebibytesLazy !== null){
            return this.tebibytesLazy;
        }
        return this.tebibytesLazy = this.convertFromBase(InformationUnits.Tebibytes);
    }

    /** */
    public get Pebibytes(): number {
        if(this.pebibytesLazy !== null){
            return this.pebibytesLazy;
        }
        return this.pebibytesLazy = this.convertFromBase(InformationUnits.Pebibytes);
    }

    /** */
    public get Exbibytes(): number {
        if(this.exbibytesLazy !== null){
            return this.exbibytesLazy;
        }
        return this.exbibytesLazy = this.convertFromBase(InformationUnits.Exbibytes);
    }

    /** */
    public get Kilobits(): number {
        if(this.kilobitsLazy !== null){
            return this.kilobitsLazy;
        }
        return this.kilobitsLazy = this.convertFromBase(InformationUnits.Kilobits);
    }

    /** */
    public get Megabits(): number {
        if(this.megabitsLazy !== null){
            return this.megabitsLazy;
        }
        return this.megabitsLazy = this.convertFromBase(InformationUnits.Megabits);
    }

    /** */
    public get Gigabits(): number {
        if(this.gigabitsLazy !== null){
            return this.gigabitsLazy;
        }
        return this.gigabitsLazy = this.convertFromBase(InformationUnits.Gigabits);
    }

    /** */
    public get Terabits(): number {
        if(this.terabitsLazy !== null){
            return this.terabitsLazy;
        }
        return this.terabitsLazy = this.convertFromBase(InformationUnits.Terabits);
    }

    /** */
    public get Petabits(): number {
        if(this.petabitsLazy !== null){
            return this.petabitsLazy;
        }
        return this.petabitsLazy = this.convertFromBase(InformationUnits.Petabits);
    }

    /** */
    public get Exabits(): number {
        if(this.exabitsLazy !== null){
            return this.exabitsLazy;
        }
        return this.exabitsLazy = this.convertFromBase(InformationUnits.Exabits);
    }

    /** */
    public get Kibibits(): number {
        if(this.kibibitsLazy !== null){
            return this.kibibitsLazy;
        }
        return this.kibibitsLazy = this.convertFromBase(InformationUnits.Kibibits);
    }

    /** */
    public get Mebibits(): number {
        if(this.mebibitsLazy !== null){
            return this.mebibitsLazy;
        }
        return this.mebibitsLazy = this.convertFromBase(InformationUnits.Mebibits);
    }

    /** */
    public get Gibibits(): number {
        if(this.gibibitsLazy !== null){
            return this.gibibitsLazy;
        }
        return this.gibibitsLazy = this.convertFromBase(InformationUnits.Gibibits);
    }

    /** */
    public get Tebibits(): number {
        if(this.tebibitsLazy !== null){
            return this.tebibitsLazy;
        }
        return this.tebibitsLazy = this.convertFromBase(InformationUnits.Tebibits);
    }

    /** */
    public get Pebibits(): number {
        if(this.pebibitsLazy !== null){
            return this.pebibitsLazy;
        }
        return this.pebibitsLazy = this.convertFromBase(InformationUnits.Pebibits);
    }

    /** */
    public get Exbibits(): number {
        if(this.exbibitsLazy !== null){
            return this.exbibitsLazy;
        }
        return this.exbibitsLazy = this.convertFromBase(InformationUnits.Exbibits);
    }

    /**
     * Create a new Information instance from a Bytes
     *
     * @param value The unit as Bytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromBytes(value: number): Information {
        return new Information(value, InformationUnits.Bytes);
    }

    /**
     * Create a new Information instance from a Bits
     *
     * @param value The unit as Bits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromBits(value: number): Information {
        return new Information(value, InformationUnits.Bits);
    }

    /**
     * Create a new Information instance from a Kilobytes
     *
     * @param value The unit as Kilobytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromKilobytes(value: number): Information {
        return new Information(value, InformationUnits.Kilobytes);
    }

    /**
     * Create a new Information instance from a Megabytes
     *
     * @param value The unit as Megabytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromMegabytes(value: number): Information {
        return new Information(value, InformationUnits.Megabytes);
    }

    /**
     * Create a new Information instance from a Gigabytes
     *
     * @param value The unit as Gigabytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromGigabytes(value: number): Information {
        return new Information(value, InformationUnits.Gigabytes);
    }

    /**
     * Create a new Information instance from a Terabytes
     *
     * @param value The unit as Terabytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromTerabytes(value: number): Information {
        return new Information(value, InformationUnits.Terabytes);
    }

    /**
     * Create a new Information instance from a Petabytes
     *
     * @param value The unit as Petabytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromPetabytes(value: number): Information {
        return new Information(value, InformationUnits.Petabytes);
    }

    /**
     * Create a new Information instance from a Exabytes
     *
     * @param value The unit as Exabytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromExabytes(value: number): Information {
        return new Information(value, InformationUnits.Exabytes);
    }

    /**
     * Create a new Information instance from a Kibibytes
     *
     * @param value The unit as Kibibytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromKibibytes(value: number): Information {
        return new Information(value, InformationUnits.Kibibytes);
    }

    /**
     * Create a new Information instance from a Mebibytes
     *
     * @param value The unit as Mebibytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromMebibytes(value: number): Information {
        return new Information(value, InformationUnits.Mebibytes);
    }

    /**
     * Create a new Information instance from a Gibibytes
     *
     * @param value The unit as Gibibytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromGibibytes(value: number): Information {
        return new Information(value, InformationUnits.Gibibytes);
    }

    /**
     * Create a new Information instance from a Tebibytes
     *
     * @param value The unit as Tebibytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromTebibytes(value: number): Information {
        return new Information(value, InformationUnits.Tebibytes);
    }

    /**
     * Create a new Information instance from a Pebibytes
     *
     * @param value The unit as Pebibytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromPebibytes(value: number): Information {
        return new Information(value, InformationUnits.Pebibytes);
    }

    /**
     * Create a new Information instance from a Exbibytes
     *
     * @param value The unit as Exbibytes to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromExbibytes(value: number): Information {
        return new Information(value, InformationUnits.Exbibytes);
    }

    /**
     * Create a new Information instance from a Kilobits
     *
     * @param value The unit as Kilobits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromKilobits(value: number): Information {
        return new Information(value, InformationUnits.Kilobits);
    }

    /**
     * Create a new Information instance from a Megabits
     *
     * @param value The unit as Megabits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromMegabits(value: number): Information {
        return new Information(value, InformationUnits.Megabits);
    }

    /**
     * Create a new Information instance from a Gigabits
     *
     * @param value The unit as Gigabits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromGigabits(value: number): Information {
        return new Information(value, InformationUnits.Gigabits);
    }

    /**
     * Create a new Information instance from a Terabits
     *
     * @param value The unit as Terabits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromTerabits(value: number): Information {
        return new Information(value, InformationUnits.Terabits);
    }

    /**
     * Create a new Information instance from a Petabits
     *
     * @param value The unit as Petabits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromPetabits(value: number): Information {
        return new Information(value, InformationUnits.Petabits);
    }

    /**
     * Create a new Information instance from a Exabits
     *
     * @param value The unit as Exabits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromExabits(value: number): Information {
        return new Information(value, InformationUnits.Exabits);
    }

    /**
     * Create a new Information instance from a Kibibits
     *
     * @param value The unit as Kibibits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromKibibits(value: number): Information {
        return new Information(value, InformationUnits.Kibibits);
    }

    /**
     * Create a new Information instance from a Mebibits
     *
     * @param value The unit as Mebibits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromMebibits(value: number): Information {
        return new Information(value, InformationUnits.Mebibits);
    }

    /**
     * Create a new Information instance from a Gibibits
     *
     * @param value The unit as Gibibits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromGibibits(value: number): Information {
        return new Information(value, InformationUnits.Gibibits);
    }

    /**
     * Create a new Information instance from a Tebibits
     *
     * @param value The unit as Tebibits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromTebibits(value: number): Information {
        return new Information(value, InformationUnits.Tebibits);
    }

    /**
     * Create a new Information instance from a Pebibits
     *
     * @param value The unit as Pebibits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromPebibits(value: number): Information {
        return new Information(value, InformationUnits.Pebibits);
    }

    /**
     * Create a new Information instance from a Exbibits
     *
     * @param value The unit as Exbibits to create a new Information from.
     * @returns The new Information instance.
     */
    public static FromExbibits(value: number): Information {
        return new Information(value, InformationUnits.Exbibits);
    }

    /**
     * Gets the base unit enumeration associated with Information
     * @returns The unit enumeration that can be used to interact with this type
     */
    protected static getUnitEnum(): typeof InformationUnits {
        return InformationUnits;
    }

    /**
     * Gets the default unit used when creating instances of the unit or its DTO
     * @returns The unit enumeration value used as a default parameter in constructor and DTO methods
     */
    protected static getBaseUnit(): InformationUnits.Bits {
        return InformationUnits.Bits;
    }

    /**
     * Create API DTO represent a Information unit.
     * @param holdInUnit The specific Information unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: InformationUnits = InformationUnits.Bits): InformationDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Information unit from an API DTO representation.
     * @param dtoInformation The Information API DTO representation
     */
    public static FromDto(dtoInformation: InformationDto): Information {
        return new Information(dtoInformation.value, dtoInformation.unit);
    }

    /**
     * Convert Information to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: InformationUnits): number {
        switch (toUnit) {
            case InformationUnits.Bytes: return this.Bytes;
            case InformationUnits.Bits: return this.Bits;
            case InformationUnits.Kilobytes: return this.Kilobytes;
            case InformationUnits.Megabytes: return this.Megabytes;
            case InformationUnits.Gigabytes: return this.Gigabytes;
            case InformationUnits.Terabytes: return this.Terabytes;
            case InformationUnits.Petabytes: return this.Petabytes;
            case InformationUnits.Exabytes: return this.Exabytes;
            case InformationUnits.Kibibytes: return this.Kibibytes;
            case InformationUnits.Mebibytes: return this.Mebibytes;
            case InformationUnits.Gibibytes: return this.Gibibytes;
            case InformationUnits.Tebibytes: return this.Tebibytes;
            case InformationUnits.Pebibytes: return this.Pebibytes;
            case InformationUnits.Exbibytes: return this.Exbibytes;
            case InformationUnits.Kilobits: return this.Kilobits;
            case InformationUnits.Megabits: return this.Megabits;
            case InformationUnits.Gigabits: return this.Gigabits;
            case InformationUnits.Terabits: return this.Terabits;
            case InformationUnits.Petabits: return this.Petabits;
            case InformationUnits.Exabits: return this.Exabits;
            case InformationUnits.Kibibits: return this.Kibibits;
            case InformationUnits.Mebibits: return this.Mebibits;
            case InformationUnits.Gibibits: return this.Gibibits;
            case InformationUnits.Tebibits: return this.Tebibits;
            case InformationUnits.Pebibits: return this.Pebibits;
            case InformationUnits.Exbibits: return this.Exbibits;

            default:
                break;
        }
        return Number.NaN;
    }

    private convertFromBase(toUnit: InformationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (toUnit) {
                case InformationUnits.Bytes: return super.internalDivide(this.value, 8);
                case InformationUnits.Bits: return this.value;
                case InformationUnits.Kilobytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000);
                }
                case InformationUnits.Megabytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000);
                }
                case InformationUnits.Gigabytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000);
                }
                case InformationUnits.Terabytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000000);
                }
                case InformationUnits.Petabytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000000000);
                }
                case InformationUnits.Exabytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1000000000000000000);
                }
                case InformationUnits.Kibibytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1024);
                }
                case InformationUnits.Mebibytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1048576);
                }
                case InformationUnits.Gibibytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1073741824);
                }
                case InformationUnits.Tebibytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1099511627776);
                }
                case InformationUnits.Pebibytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1125899906842624);
                }
                case InformationUnits.Exbibytes: {
                    const v3 = super.internalDivide(this.value, 8);
                    return super.internalDivide(v3, 1152921504606847000);
                }
                case InformationUnits.Kilobits: return super.internalDivide(this.value, 1000);
                case InformationUnits.Megabits: return super.internalDivide(this.value, 1000000);
                case InformationUnits.Gigabits: return super.internalDivide(this.value, 1000000000);
                case InformationUnits.Terabits: return super.internalDivide(this.value, 1000000000000);
                case InformationUnits.Petabits: return super.internalDivide(this.value, 1000000000000000);
                case InformationUnits.Exabits: return super.internalDivide(this.value, 1000000000000000000);
                case InformationUnits.Kibibits: return super.internalDivide(this.value, 1024);
                case InformationUnits.Mebibits: return super.internalDivide(this.value, 1048576);
                case InformationUnits.Gibibits: return super.internalDivide(this.value, 1073741824);
                case InformationUnits.Tebibits: return super.internalDivide(this.value, 1099511627776);
                case InformationUnits.Pebibits: return super.internalDivide(this.value, 1125899906842624);
                case InformationUnits.Exbibits: return super.internalDivide(this.value, 1152921504606847000);
                default: return Number.NaN;
            }
        switch (toUnit) {
            case InformationUnits.Bytes: return this.value / 8;
            case InformationUnits.Bits: return this.value;
            case InformationUnits.Kilobytes: return (this.value / 8) / 1000;
            case InformationUnits.Megabytes: return (this.value / 8) / 1000000;
            case InformationUnits.Gigabytes: return (this.value / 8) / 1000000000;
            case InformationUnits.Terabytes: return (this.value / 8) / 1000000000000;
            case InformationUnits.Petabytes: return (this.value / 8) / 1000000000000000;
            case InformationUnits.Exabytes: return (this.value / 8) / 1000000000000000000;
            case InformationUnits.Kibibytes: return (this.value / 8) / 1024;
            case InformationUnits.Mebibytes: return (this.value / 8) / 1048576;
            case InformationUnits.Gibibytes: return (this.value / 8) / 1073741824;
            case InformationUnits.Tebibytes: return (this.value / 8) / 1099511627776;
            case InformationUnits.Pebibytes: return (this.value / 8) / 1125899906842624;
            case InformationUnits.Exbibytes: return (this.value / 8) / 1152921504606847000;
            case InformationUnits.Kilobits: return (this.value) / 1000;
            case InformationUnits.Megabits: return (this.value) / 1000000;
            case InformationUnits.Gigabits: return (this.value) / 1000000000;
            case InformationUnits.Terabits: return (this.value) / 1000000000000;
            case InformationUnits.Petabits: return (this.value) / 1000000000000000;
            case InformationUnits.Exabits: return (this.value) / 1000000000000000000;
            case InformationUnits.Kibibits: return (this.value) / 1024;
            case InformationUnits.Mebibits: return (this.value) / 1048576;
            case InformationUnits.Gibibits: return (this.value) / 1073741824;
            case InformationUnits.Tebibits: return (this.value) / 1099511627776;
            case InformationUnits.Pebibits: return (this.value) / 1125899906842624;
            case InformationUnits.Exbibits: return (this.value) / 1152921504606847000;
            default: return Number.NaN;
        }
    }

    private convertToBase(value: number, fromUnit: InformationUnits): number {
        if (areAnyOperatorsOverridden())
            switch (fromUnit) {
                case InformationUnits.Bytes: return super.internalMultiply(value, 8);
                case InformationUnits.Bits: return value;
                case InformationUnits.Kilobytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000);
                }
                case InformationUnits.Megabytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000);
                }
                case InformationUnits.Gigabytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000);
                }
                case InformationUnits.Terabytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000000);
                }
                case InformationUnits.Petabytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000000000);
                }
                case InformationUnits.Exabytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1000000000000000000);
                }
                case InformationUnits.Kibibytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1024);
                }
                case InformationUnits.Mebibytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1048576);
                }
                case InformationUnits.Gibibytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1073741824);
                }
                case InformationUnits.Tebibytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1099511627776);
                }
                case InformationUnits.Pebibytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1125899906842624);
                }
                case InformationUnits.Exbibytes: {
                    const v3 = super.internalMultiply(value, 8);
                    return super.internalMultiply(v3, 1152921504606847000);
                }
                case InformationUnits.Kilobits: return super.internalMultiply(value, 1000);
                case InformationUnits.Megabits: return super.internalMultiply(value, 1000000);
                case InformationUnits.Gigabits: return super.internalMultiply(value, 1000000000);
                case InformationUnits.Terabits: return super.internalMultiply(value, 1000000000000);
                case InformationUnits.Petabits: return super.internalMultiply(value, 1000000000000000);
                case InformationUnits.Exabits: return super.internalMultiply(value, 1000000000000000000);
                case InformationUnits.Kibibits: return super.internalMultiply(value, 1024);
                case InformationUnits.Mebibits: return super.internalMultiply(value, 1048576);
                case InformationUnits.Gibibits: return super.internalMultiply(value, 1073741824);
                case InformationUnits.Tebibits: return super.internalMultiply(value, 1099511627776);
                case InformationUnits.Pebibits: return super.internalMultiply(value, 1125899906842624);
                case InformationUnits.Exbibits: return super.internalMultiply(value, 1152921504606847000);
                default: return Number.NaN;
            }
        switch (fromUnit) {
            case InformationUnits.Bytes: return value * 8;
            case InformationUnits.Bits: return value;
            case InformationUnits.Kilobytes: return (value * 8) * 1000;
            case InformationUnits.Megabytes: return (value * 8) * 1000000;
            case InformationUnits.Gigabytes: return (value * 8) * 1000000000;
            case InformationUnits.Terabytes: return (value * 8) * 1000000000000;
            case InformationUnits.Petabytes: return (value * 8) * 1000000000000000;
            case InformationUnits.Exabytes: return (value * 8) * 1000000000000000000;
            case InformationUnits.Kibibytes: return (value * 8) * 1024;
            case InformationUnits.Mebibytes: return (value * 8) * 1048576;
            case InformationUnits.Gibibytes: return (value * 8) * 1073741824;
            case InformationUnits.Tebibytes: return (value * 8) * 1099511627776;
            case InformationUnits.Pebibytes: return (value * 8) * 1125899906842624;
            case InformationUnits.Exbibytes: return (value * 8) * 1152921504606847000;
            case InformationUnits.Kilobits: return (value) * 1000;
            case InformationUnits.Megabits: return (value) * 1000000;
            case InformationUnits.Gigabits: return (value) * 1000000000;
            case InformationUnits.Terabits: return (value) * 1000000000000;
            case InformationUnits.Petabits: return (value) * 1000000000000000;
            case InformationUnits.Exabits: return (value) * 1000000000000000000;
            case InformationUnits.Kibibits: return (value) * 1024;
            case InformationUnits.Mebibits: return (value) * 1048576;
            case InformationUnits.Gibibits: return (value) * 1073741824;
            case InformationUnits.Tebibits: return (value) * 1099511627776;
            case InformationUnits.Pebibits: return (value) * 1125899906842624;
            case InformationUnits.Exbibits: return (value) * 1152921504606847000;
            default: return Number.NaN;
        }
    }

    /**
     * Format the Information to string.
     * Note! the default format for Information is Bits.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Information.
     * @param fractionalDigits The number of fractional digits to keep.
     * @returns The string format of the Information.
     */
    public toString(unit: InformationUnits = InformationUnits.Bits, fractionalDigits?: number): string {

        switch (unit) {
            
            case InformationUnits.Bytes:
                return super.truncateFractionDigits(this.Bytes, fractionalDigits) + ` B`;
            case InformationUnits.Bits:
                return super.truncateFractionDigits(this.Bits, fractionalDigits) + ` b`;
            case InformationUnits.Kilobytes:
                return super.truncateFractionDigits(this.Kilobytes, fractionalDigits) + ` kB`;
            case InformationUnits.Megabytes:
                return super.truncateFractionDigits(this.Megabytes, fractionalDigits) + ` MB`;
            case InformationUnits.Gigabytes:
                return super.truncateFractionDigits(this.Gigabytes, fractionalDigits) + ` GB`;
            case InformationUnits.Terabytes:
                return super.truncateFractionDigits(this.Terabytes, fractionalDigits) + ` TB`;
            case InformationUnits.Petabytes:
                return super.truncateFractionDigits(this.Petabytes, fractionalDigits) + ` PB`;
            case InformationUnits.Exabytes:
                return super.truncateFractionDigits(this.Exabytes, fractionalDigits) + ` EB`;
            case InformationUnits.Kibibytes:
                return super.truncateFractionDigits(this.Kibibytes, fractionalDigits) + ` KiBB`;
            case InformationUnits.Mebibytes:
                return super.truncateFractionDigits(this.Mebibytes, fractionalDigits) + ` MiBB`;
            case InformationUnits.Gibibytes:
                return super.truncateFractionDigits(this.Gibibytes, fractionalDigits) + ` GiBB`;
            case InformationUnits.Tebibytes:
                return super.truncateFractionDigits(this.Tebibytes, fractionalDigits) + ` TiBB`;
            case InformationUnits.Pebibytes:
                return super.truncateFractionDigits(this.Pebibytes, fractionalDigits) + ` PiBB`;
            case InformationUnits.Exbibytes:
                return super.truncateFractionDigits(this.Exbibytes, fractionalDigits) + ` EiBB`;
            case InformationUnits.Kilobits:
                return super.truncateFractionDigits(this.Kilobits, fractionalDigits) + ` kb`;
            case InformationUnits.Megabits:
                return super.truncateFractionDigits(this.Megabits, fractionalDigits) + ` Mb`;
            case InformationUnits.Gigabits:
                return super.truncateFractionDigits(this.Gigabits, fractionalDigits) + ` Gb`;
            case InformationUnits.Terabits:
                return super.truncateFractionDigits(this.Terabits, fractionalDigits) + ` Tb`;
            case InformationUnits.Petabits:
                return super.truncateFractionDigits(this.Petabits, fractionalDigits) + ` Pb`;
            case InformationUnits.Exabits:
                return super.truncateFractionDigits(this.Exabits, fractionalDigits) + ` Eb`;
            case InformationUnits.Kibibits:
                return super.truncateFractionDigits(this.Kibibits, fractionalDigits) + ` KiBb`;
            case InformationUnits.Mebibits:
                return super.truncateFractionDigits(this.Mebibits, fractionalDigits) + ` MiBb`;
            case InformationUnits.Gibibits:
                return super.truncateFractionDigits(this.Gibibits, fractionalDigits) + ` GiBb`;
            case InformationUnits.Tebibits:
                return super.truncateFractionDigits(this.Tebibits, fractionalDigits) + ` TiBb`;
            case InformationUnits.Pebibits:
                return super.truncateFractionDigits(this.Pebibits, fractionalDigits) + ` PiBb`;
            case InformationUnits.Exbibits:
                return super.truncateFractionDigits(this.Exbibits, fractionalDigits) + ` EiBb`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Information unit abbreviation.
     * Note! the default abbreviation for Information is Bits.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Information.
     * @returns The abbreviation string of Information.
     */
    public getUnitAbbreviation(unitAbbreviation: InformationUnits = InformationUnits.Bits): string {

        switch (unitAbbreviation) {
            
            case InformationUnits.Bytes:
                return `B`;
            case InformationUnits.Bits:
                return `b`;
            case InformationUnits.Kilobytes:
                return `kB`;
            case InformationUnits.Megabytes:
                return `MB`;
            case InformationUnits.Gigabytes:
                return `GB`;
            case InformationUnits.Terabytes:
                return `TB`;
            case InformationUnits.Petabytes:
                return `PB`;
            case InformationUnits.Exabytes:
                return `EB`;
            case InformationUnits.Kibibytes:
                return `KiBB`;
            case InformationUnits.Mebibytes:
                return `MiBB`;
            case InformationUnits.Gibibytes:
                return `GiBB`;
            case InformationUnits.Tebibytes:
                return `TiBB`;
            case InformationUnits.Pebibytes:
                return `PiBB`;
            case InformationUnits.Exbibytes:
                return `EiBB`;
            case InformationUnits.Kilobits:
                return `kb`;
            case InformationUnits.Megabits:
                return `Mb`;
            case InformationUnits.Gigabits:
                return `Gb`;
            case InformationUnits.Terabits:
                return `Tb`;
            case InformationUnits.Petabits:
                return `Pb`;
            case InformationUnits.Exabits:
                return `Eb`;
            case InformationUnits.Kibibits:
                return `KiBb`;
            case InformationUnits.Mebibits:
                return `MiBb`;
            case InformationUnits.Gibibits:
                return `GiBb`;
            case InformationUnits.Tebibits:
                return `TiBb`;
            case InformationUnits.Pebibits:
                return `PiBb`;
            case InformationUnits.Exbibits:
                return `EiBb`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Information are equals to the current Information.
     * @param information The other Information.
     * @returns True if the given Information are equal to the current Information.
     */
    public equals(information: Information): boolean {
        return super.internalEquals(this.value, information.BaseValue);
    }

    /**
     * Compare the given Information against the current Information.
     * @param information The other Information.
     * @returns 0 if they are equal, -1 if the current Information is less then other, 1 if the current Information is greater then other.
     */
    public compareTo(information: Information): number {
        return super.internalCompareTo(this.value, information.BaseValue);
    }

    /**
     * Add the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public add(information: Information): Information {
        return new Information(super.internalAdd(this.value, information.BaseValue))
    }

    /**
     * Subtract the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public subtract(information: Information): Information {
        return new Information(super.internalSubtract(this.value, information.BaseValue))
    }

    /**
     * Multiply the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public multiply(information: Information): Information {
        return new Information(super.internalMultiply(this.value, information.BaseValue))
    }

    /**
     * Divide the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public divide(information: Information): Information {
        return new Information(super.internalDivide(this.value, information.BaseValue))
    }

    /**
     * Modulo the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public modulo(information: Information): Information {
        return new Information(super.internalModulo(this.value, information.BaseValue))
    }

    /**
     * Pow the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public pow(information: Information): Information {
        return new Information(super.internalPow(this.value, information.BaseValue))
    }
}
