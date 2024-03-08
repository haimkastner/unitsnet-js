/** API DTO represents a Frequency */
export interface FrequencyDto {
    value: number;
    unit: FrequencyUnits;
}

/** FrequencyUnits enumeration */
export enum FrequencyUnits {
    /** */
    Hertz = "Hertz",
    /** */
    RadiansPerSecond = "RadianPerSecond",
    /** */
    CyclesPerMinute = "CyclePerMinute",
    /** */
    CyclesPerHour = "CyclePerHour",
    /** */
    BeatsPerMinute = "BeatPerMinute",
    /** */
    PerSecond = "PerSecond",
    /** */
    BUnits = "BUnit",
    /** */
    Microhertz = "Microhertz",
    /** */
    Millihertz = "Millihertz",
    /** */
    Kilohertz = "Kilohertz",
    /** */
    Megahertz = "Megahertz",
    /** */
    Gigahertz = "Gigahertz",
    /** */
    Terahertz = "Terahertz"
}

/** The number of occurrences of a repeating event per unit time. */
export class Frequency {
    private value: number;
    private hertzLazy: number | null = null;
    private radianspersecondLazy: number | null = null;
    private cyclesperminuteLazy: number | null = null;
    private cyclesperhourLazy: number | null = null;
    private beatsperminuteLazy: number | null = null;
    private persecondLazy: number | null = null;
    private bunitsLazy: number | null = null;
    private microhertzLazy: number | null = null;
    private millihertzLazy: number | null = null;
    private kilohertzLazy: number | null = null;
    private megahertzLazy: number | null = null;
    private gigahertzLazy: number | null = null;
    private terahertzLazy: number | null = null;

    /**
     * Create a new Frequency.
     * @param value The value.
     * @param fromUnit The ‘Frequency’ unit to create from.
     * The default unit is Hertz
     */
    public constructor(value: number, fromUnit: FrequencyUnits = FrequencyUnits.Hertz) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Frequency is Hertz.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get Hertz(): number {
        if(this.hertzLazy !== null){
            return this.hertzLazy;
        }
        return this.hertzLazy = this.convertFromBase(FrequencyUnits.Hertz);
    }

    /** */
    public get RadiansPerSecond(): number {
        if(this.radianspersecondLazy !== null){
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(FrequencyUnits.RadiansPerSecond);
    }

    /** */
    public get CyclesPerMinute(): number {
        if(this.cyclesperminuteLazy !== null){
            return this.cyclesperminuteLazy;
        }
        return this.cyclesperminuteLazy = this.convertFromBase(FrequencyUnits.CyclesPerMinute);
    }

    /** */
    public get CyclesPerHour(): number {
        if(this.cyclesperhourLazy !== null){
            return this.cyclesperhourLazy;
        }
        return this.cyclesperhourLazy = this.convertFromBase(FrequencyUnits.CyclesPerHour);
    }

    /** */
    public get BeatsPerMinute(): number {
        if(this.beatsperminuteLazy !== null){
            return this.beatsperminuteLazy;
        }
        return this.beatsperminuteLazy = this.convertFromBase(FrequencyUnits.BeatsPerMinute);
    }

    /** */
    public get PerSecond(): number {
        if(this.persecondLazy !== null){
            return this.persecondLazy;
        }
        return this.persecondLazy = this.convertFromBase(FrequencyUnits.PerSecond);
    }

    /** */
    public get BUnits(): number {
        if(this.bunitsLazy !== null){
            return this.bunitsLazy;
        }
        return this.bunitsLazy = this.convertFromBase(FrequencyUnits.BUnits);
    }

    /** */
    public get Microhertz(): number {
        if(this.microhertzLazy !== null){
            return this.microhertzLazy;
        }
        return this.microhertzLazy = this.convertFromBase(FrequencyUnits.Microhertz);
    }

    /** */
    public get Millihertz(): number {
        if(this.millihertzLazy !== null){
            return this.millihertzLazy;
        }
        return this.millihertzLazy = this.convertFromBase(FrequencyUnits.Millihertz);
    }

    /** */
    public get Kilohertz(): number {
        if(this.kilohertzLazy !== null){
            return this.kilohertzLazy;
        }
        return this.kilohertzLazy = this.convertFromBase(FrequencyUnits.Kilohertz);
    }

    /** */
    public get Megahertz(): number {
        if(this.megahertzLazy !== null){
            return this.megahertzLazy;
        }
        return this.megahertzLazy = this.convertFromBase(FrequencyUnits.Megahertz);
    }

    /** */
    public get Gigahertz(): number {
        if(this.gigahertzLazy !== null){
            return this.gigahertzLazy;
        }
        return this.gigahertzLazy = this.convertFromBase(FrequencyUnits.Gigahertz);
    }

    /** */
    public get Terahertz(): number {
        if(this.terahertzLazy !== null){
            return this.terahertzLazy;
        }
        return this.terahertzLazy = this.convertFromBase(FrequencyUnits.Terahertz);
    }

    /**
     * Create a new Frequency instance from a Hertz
     *
     * @param value The unit as Hertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromHertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Hertz);
    }

    /**
     * Create a new Frequency instance from a RadiansPerSecond
     *
     * @param value The unit as RadiansPerSecond to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromRadiansPerSecond(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.RadiansPerSecond);
    }

    /**
     * Create a new Frequency instance from a CyclesPerMinute
     *
     * @param value The unit as CyclesPerMinute to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromCyclesPerMinute(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.CyclesPerMinute);
    }

    /**
     * Create a new Frequency instance from a CyclesPerHour
     *
     * @param value The unit as CyclesPerHour to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromCyclesPerHour(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.CyclesPerHour);
    }

    /**
     * Create a new Frequency instance from a BeatsPerMinute
     *
     * @param value The unit as BeatsPerMinute to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromBeatsPerMinute(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.BeatsPerMinute);
    }

    /**
     * Create a new Frequency instance from a PerSecond
     *
     * @param value The unit as PerSecond to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromPerSecond(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.PerSecond);
    }

    /**
     * Create a new Frequency instance from a BUnits
     *
     * @param value The unit as BUnits to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromBUnits(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.BUnits);
    }

    /**
     * Create a new Frequency instance from a Microhertz
     *
     * @param value The unit as Microhertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromMicrohertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Microhertz);
    }

    /**
     * Create a new Frequency instance from a Millihertz
     *
     * @param value The unit as Millihertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromMillihertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Millihertz);
    }

    /**
     * Create a new Frequency instance from a Kilohertz
     *
     * @param value The unit as Kilohertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromKilohertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Kilohertz);
    }

    /**
     * Create a new Frequency instance from a Megahertz
     *
     * @param value The unit as Megahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromMegahertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Megahertz);
    }

    /**
     * Create a new Frequency instance from a Gigahertz
     *
     * @param value The unit as Gigahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromGigahertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Gigahertz);
    }

    /**
     * Create a new Frequency instance from a Terahertz
     *
     * @param value The unit as Terahertz to create a new Frequency from.
     * @returns The new Frequency instance.
     */
    public static FromTerahertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Terahertz);
    }

    /**
     * Create API DTO represent a Frequency unit.
     * @param holdInUnit The specific Frequency unit to be used in the unit representation at the DTO
     */
    public toDto(holdInUnit: FrequencyUnits = FrequencyUnits.Hertz): FrequencyDto {
        return {
            value: this.convert(holdInUnit),
            unit: holdInUnit
        };
    }

    /**
     * Create a Frequency unit from an API DTO representation.
     * @param dtoFrequency The Frequency API DTO representation
     */
    public static FromDto(dtoFrequency: FrequencyDto): Frequency {
        return new Frequency(dtoFrequency.value, dtoFrequency.unit);
    }

    /**
     * Convert Frequency to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: FrequencyUnits): number {
        switch (toUnit) {
            case FrequencyUnits.Hertz: return this.Hertz;
            case FrequencyUnits.RadiansPerSecond: return this.RadiansPerSecond;
            case FrequencyUnits.CyclesPerMinute: return this.CyclesPerMinute;
            case FrequencyUnits.CyclesPerHour: return this.CyclesPerHour;
            case FrequencyUnits.BeatsPerMinute: return this.BeatsPerMinute;
            case FrequencyUnits.PerSecond: return this.PerSecond;
            case FrequencyUnits.BUnits: return this.BUnits;
            case FrequencyUnits.Microhertz: return this.Microhertz;
            case FrequencyUnits.Millihertz: return this.Millihertz;
            case FrequencyUnits.Kilohertz: return this.Kilohertz;
            case FrequencyUnits.Megahertz: return this.Megahertz;
            case FrequencyUnits.Gigahertz: return this.Gigahertz;
            case FrequencyUnits.Terahertz: return this.Terahertz;

            default:
                break;
        }
        return NaN;
    }

    private convertFromBase(toUnit: FrequencyUnits): number {
        switch (toUnit) {
                
            case FrequencyUnits.Hertz:
                return this.value;
            case FrequencyUnits.RadiansPerSecond:
                return this.value * 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return this.value * 60;
            case FrequencyUnits.CyclesPerHour:
                return this.value * 3600;
            case FrequencyUnits.BeatsPerMinute:
                return this.value * 60;
            case FrequencyUnits.PerSecond:
                return this.value;
            case FrequencyUnits.BUnits:
                return this.value * this.value * 1e-3;
            case FrequencyUnits.Microhertz:
                return (this.value) / 0.000001;
            case FrequencyUnits.Millihertz:
                return (this.value) / 0.001;
            case FrequencyUnits.Kilohertz:
                return (this.value) / 1000;
            case FrequencyUnits.Megahertz:
                return (this.value) / 1000000;
            case FrequencyUnits.Gigahertz:
                return (this.value) / 1000000000;
            case FrequencyUnits.Terahertz:
                return (this.value) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: FrequencyUnits): number {
        switch (fromUnit) {
                
            case FrequencyUnits.Hertz:
                return value;
            case FrequencyUnits.RadiansPerSecond:
                return value / 6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return value / 60;
            case FrequencyUnits.CyclesPerHour:
                return value / 3600;
            case FrequencyUnits.BeatsPerMinute:
                return value / 60;
            case FrequencyUnits.PerSecond:
                return value;
            case FrequencyUnits.BUnits:
                return Math.sqrt(value * 1e3);
            case FrequencyUnits.Microhertz:
                return (value) * 0.000001;
            case FrequencyUnits.Millihertz:
                return (value) * 0.001;
            case FrequencyUnits.Kilohertz:
                return (value) * 1000;
            case FrequencyUnits.Megahertz:
                return (value) * 1000000;
            case FrequencyUnits.Gigahertz:
                return (value) * 1000000000;
            case FrequencyUnits.Terahertz:
                return (value) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Frequency to string.
     * Note! the default format for Frequency is Hertz.
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the Frequency.
     * @returns The string format of the Frequency.
     */
    public toString(unit: FrequencyUnits = FrequencyUnits.Hertz): string {

        switch (unit) {
            
            case FrequencyUnits.Hertz:
                return this.Hertz + ` Hz`;
            case FrequencyUnits.RadiansPerSecond:
                return this.RadiansPerSecond + ` rad/s`;
            case FrequencyUnits.CyclesPerMinute:
                return this.CyclesPerMinute + ` cpm`;
            case FrequencyUnits.CyclesPerHour:
                return this.CyclesPerHour + ` cph`;
            case FrequencyUnits.BeatsPerMinute:
                return this.BeatsPerMinute + ` bpm`;
            case FrequencyUnits.PerSecond:
                return this.PerSecond + ` s⁻¹`;
            case FrequencyUnits.BUnits:
                return this.BUnits + ` B Units`;
            case FrequencyUnits.Microhertz:
                return this.Microhertz + ` μHz`;
            case FrequencyUnits.Millihertz:
                return this.Millihertz + ` mHz`;
            case FrequencyUnits.Kilohertz:
                return this.Kilohertz + ` kHz`;
            case FrequencyUnits.Megahertz:
                return this.Megahertz + ` MHz`;
            case FrequencyUnits.Gigahertz:
                return this.Gigahertz + ` GHz`;
            case FrequencyUnits.Terahertz:
                return this.Terahertz + ` THz`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get Frequency unit abbreviation.
     * Note! the default abbreviation for Frequency is Hertz.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the Frequency.
     * @returns The abbreviation string of Frequency.
     */
    public getUnitAbbreviation(unitAbbreviation: FrequencyUnits = FrequencyUnits.Hertz): string {

        switch (unitAbbreviation) {
            
            case FrequencyUnits.Hertz:
                return `Hz`;
            case FrequencyUnits.RadiansPerSecond:
                return `rad/s`;
            case FrequencyUnits.CyclesPerMinute:
                return `cpm`;
            case FrequencyUnits.CyclesPerHour:
                return `cph`;
            case FrequencyUnits.BeatsPerMinute:
                return `bpm`;
            case FrequencyUnits.PerSecond:
                return `s⁻¹`;
            case FrequencyUnits.BUnits:
                return `B Units`;
            case FrequencyUnits.Microhertz:
                return `μHz`;
            case FrequencyUnits.Millihertz:
                return `mHz`;
            case FrequencyUnits.Kilohertz:
                return `kHz`;
            case FrequencyUnits.Megahertz:
                return `MHz`;
            case FrequencyUnits.Gigahertz:
                return `GHz`;
            case FrequencyUnits.Terahertz:
                return `THz`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given Frequency are equals to the current Frequency.
     * @param frequency The other Frequency.
     * @returns True if the given Frequency are equal to the current Frequency.
     */
    public equals(frequency: Frequency): boolean {
        return this.value === frequency.BaseValue;
    }

    /**
     * Compare the given Frequency against the current Frequency.
     * @param frequency The other Frequency.
     * @returns 0 if they are equal, -1 if the current Frequency is less then other, 1 if the current Frequency is greater then other.
     */
    public compareTo(frequency: Frequency): number {

        if (this.value > frequency.BaseValue)
            return 1;
        if (this.value < frequency.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    public add(frequency: Frequency): Frequency {
        return new Frequency(this.value + frequency.BaseValue)
    }

    /**
     * Subtract the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    public subtract(frequency: Frequency): Frequency {
        return new Frequency(this.value - frequency.BaseValue)
    }

    /**
     * Multiply the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    public multiply(frequency: Frequency): Frequency {
        return new Frequency(this.value * frequency.BaseValue)
    }

    /**
     * Divide the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    public divide(frequency: Frequency): Frequency {
        return new Frequency(this.value / frequency.BaseValue)
    }

    /**
     * Modulo the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    public modulo(frequency: Frequency): Frequency {
        return new Frequency(this.value % frequency.BaseValue)
    }

    /**
     * Pow the given Frequency with the current Frequency.
     * @param frequency The other Frequency.
     * @returns A new Frequency instance with the results.
     */
    public pow(frequency: Frequency): Frequency {
        return new Frequency(this.value ** frequency.BaseValue)
    }
}
