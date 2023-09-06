/** InformationUnits enumeration */
export enum InformationUnits {
    /** */
    Bytes,
    /** */
    Bits,
    /** */
    Kilobytes,
    /** */
    Megabytes,
    /** */
    Gigabytes,
    /** */
    Terabytes,
    /** */
    Petabytes,
    /** */
    Exabytes,
    /** */
    Kilobits,
    /** */
    Megabits,
    /** */
    Gigabits,
    /** */
    Terabits,
    /** */
    Petabits,
    /** */
    Exabits
}

/** In computing and telecommunications, a unit of information is the capacity of some standard data storage system or communication channel, used to measure the capacities of other systems and channels. In information theory, units of information are also used to measure the information contents or entropy of random variables. */
export class Information {
    private value: number;
    private bytesLazy: number | null = null;
    private bitsLazy: number | null = null;
    private kilobytesLazy: number | null = null;
    private megabytesLazy: number | null = null;
    private gigabytesLazy: number | null = null;
    private terabytesLazy: number | null = null;
    private petabytesLazy: number | null = null;
    private exabytesLazy: number | null = null;
    private kilobitsLazy: number | null = null;
    private megabitsLazy: number | null = null;
    private gigabitsLazy: number | null = null;
    private terabitsLazy: number | null = null;
    private petabitsLazy: number | null = null;
    private exabitsLazy: number | null = null;

    /**
     * Create a new Information.
     * @param value The value.
     * @param fromUnit The ‘Information’ unit to create from.
     * The default unit is Bits
     */
    public constructor(value: number, fromUnit: InformationUnits = InformationUnits.Bits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Information is Bits.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
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
            case InformationUnits.Kilobits: return this.Kilobits;
            case InformationUnits.Megabits: return this.Megabits;
            case InformationUnits.Gigabits: return this.Gigabits;
            case InformationUnits.Terabits: return this.Terabits;
            case InformationUnits.Petabits: return this.Petabits;
            case InformationUnits.Exabits: return this.Exabits;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: InformationUnits): number {
        switch (toUnit) {
                
            case InformationUnits.Bytes:
                return this.value / 8;
            case InformationUnits.Bits:
                return this.value;
            case InformationUnits.Kilobytes:
                return (this.value / 8) / 1000;
            case InformationUnits.Megabytes:
                return (this.value / 8) / 1000000;
            case InformationUnits.Gigabytes:
                return (this.value / 8) / 1000000000;
            case InformationUnits.Terabytes:
                return (this.value / 8) / 1000000000000;
            case InformationUnits.Petabytes:
                return (this.value / 8) / 1000000000000000;
            case InformationUnits.Exabytes:
                return (this.value / 8) / 1000000000000000000;
            case InformationUnits.Kilobits:
                return (this.value) / 1000;
            case InformationUnits.Megabits:
                return (this.value) / 1000000;
            case InformationUnits.Gigabits:
                return (this.value) / 1000000000;
            case InformationUnits.Terabits:
                return (this.value) / 1000000000000;
            case InformationUnits.Petabits:
                return (this.value) / 1000000000000000;
            case InformationUnits.Exabits:
                return (this.value) / 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: InformationUnits): number {
        switch (fromUnit) {
                
            case InformationUnits.Bytes:
                return value * 8;
            case InformationUnits.Bits:
                return value;
            case InformationUnits.Kilobytes:
                return (value * 8) * 1000;
            case InformationUnits.Megabytes:
                return (value * 8) * 1000000;
            case InformationUnits.Gigabytes:
                return (value * 8) * 1000000000;
            case InformationUnits.Terabytes:
                return (value * 8) * 1000000000000;
            case InformationUnits.Petabytes:
                return (value * 8) * 1000000000000000;
            case InformationUnits.Exabytes:
                return (value * 8) * 1000000000000000000;
            case InformationUnits.Kilobits:
                return (value) * 1000;
            case InformationUnits.Megabits:
                return (value) * 1000000;
            case InformationUnits.Gigabits:
                return (value) * 1000000000;
            case InformationUnits.Terabits:
                return (value) * 1000000000000;
            case InformationUnits.Petabits:
                return (value) * 1000000000000000;
            case InformationUnits.Exabits:
                return (value) * 1000000000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Information to string.
     * Note! the default format for Information is Bits.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Information.
     * @returns The string format of the Information.
     */
    public toString(unit: InformationUnits = InformationUnits.Bits): string {

        switch (unit) {
            
            case InformationUnits.Bytes:
                return this.Bytes + ` B`;
            case InformationUnits.Bits:
                return this.Bits + ` b`;
            case InformationUnits.Kilobytes:
                return this.Kilobytes + ` kB`;
            case InformationUnits.Megabytes:
                return this.Megabytes + ` MB`;
            case InformationUnits.Gigabytes:
                return this.Gigabytes + ` GB`;
            case InformationUnits.Terabytes:
                return this.Terabytes + ` TB`;
            case InformationUnits.Petabytes:
                return this.Petabytes + ` PB`;
            case InformationUnits.Exabytes:
                return this.Exabytes + ` EB`;
            case InformationUnits.Kilobits:
                return this.Kilobits + ` kb`;
            case InformationUnits.Megabits:
                return this.Megabits + ` Mb`;
            case InformationUnits.Gigabits:
                return this.Gigabits + ` Gb`;
            case InformationUnits.Terabits:
                return this.Terabits + ` Tb`;
            case InformationUnits.Petabits:
                return this.Petabits + ` Pb`;
            case InformationUnits.Exabits:
                return this.Exabits + ` Eb`;
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
        return this.value === information.BaseValue;
    }

    /**
     * Compare the given Information against the current Information.
     * @param information The other Information.
     * @returns 0 if they are equal, -1 if the current Information is less then other, 1 if the current Information is greater then other.
     */
    public compareTo(information: Information): number {

        if (this.value > information.BaseValue)
            return 1;
        if (this.value < information.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public add(information: Information): Information {
        return new Information(this.value + information.BaseValue)
    }

    /**
     * Subtract the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public subtract(information: Information): Information {
        return new Information(this.value - information.BaseValue)
    }

    /**
     * Multiply the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public multiply(information: Information): Information {
        return new Information(this.value * information.BaseValue)
    }

    /**
     * Divide the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public divide(information: Information): Information {
        return new Information(this.value / information.BaseValue)
    }

    /**
     * Modulo the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public modulo(information: Information): Information {
        return new Information(this.value % information.BaseValue)
    }

    /**
     * Pow the given Information with the current Information.
     * @param information The other Information.
     * @returns A new Information instance with the results.
     */
    public pow(information: Information): Information {
        return new Information(this.value ** information.BaseValue)
    }
}
