/** FrequencyUnits enumeration */
export enum FrequencyUnits {
    /** */
    Hertz,
    /** */
    RadiansPerSecond,
    /** */
    CyclesPerMinute,
    /** */
    CyclesPerHour,
    /** */
    BeatsPerMinute,
    /** */
    Kilohertz,
    /** */
    Megahertz,
    /** */
    Gigahertz,
    /** */
    Terahertz
}

/** The number of occurrences of a repeating event per unit time. */
export class Frequency {
    private value: number;
    private hertzLazy: number | null = null;
    private radianspersecondLazy: number | null = null;
    private cyclesperminuteLazy: number | null = null;
    private cyclesperhourLazy: number | null = null;
    private beatsperminuteLazy: number | null = null;
    private kilohertzLazy: number | null = null;
    private megahertzLazy: number | null = null;
    private gigahertzLazy: number | null = null;
    private terahertzLazy: number | null = null;

    /**
     * Create a new Frequency.
     * @param value The value.
     * @param fromUnit The ‘Frequency’ unit to create from.
     */
    public constructor(value: number, fromUnit: FrequencyUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Frequency is Hertz.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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

    private convertFromBase(toUnit: FrequencyUnits): number {
        switch (toUnit) {
                
            case FrequencyUnits.Hertz:
                return this.value;
            case FrequencyUnits.RadiansPerSecond:
                return this.value*6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return this.value*60;
            case FrequencyUnits.CyclesPerHour:
                return this.value*3600;
            case FrequencyUnits.BeatsPerMinute:
                return this.value*60;
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
                return value/6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return value/60;
            case FrequencyUnits.CyclesPerHour:
                return value/3600;
            case FrequencyUnits.BeatsPerMinute:
                return value/60;
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
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Frequency.
     * @returns The string format of the Frequency.
     */
    public toString(toUnit: FrequencyUnits = FrequencyUnits.Hertz): string {

        switch (toUnit) {
            
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
            case FrequencyUnits.Kilohertz:
                return this.Kilohertz + ` Hz`;
            case FrequencyUnits.Megahertz:
                return this.Megahertz + ` Hz`;
            case FrequencyUnits.Gigahertz:
                return this.Gigahertz + ` Hz`;
            case FrequencyUnits.Terahertz:
                return this.Terahertz + ` Hz`;
        default:
            break;
        }
        return this.value.toString();
    }
}
