/** TemperatureChangeRateUnits enumeration */
export enum TemperatureChangeRateUnits {
    /** */
    DegreesCelsiusPerSecond,
    /** */
    DegreesCelsiusPerMinute,
    /** */
    NanodegreesCelsiusPerSecond,
    /** */
    MicrodegreesCelsiusPerSecond,
    /** */
    CentidegreesCelsiusPerSecond,
    /** */
    DecidegreesCelsiusPerSecond,
    /** */
    DecadegreesCelsiusPerSecond,
    /** */
    HectodegreesCelsiusPerSecond,
    /** */
    KilodegreesCelsiusPerSecond
}

/** Temperature change rate is the ratio of the temperature change to the time during which the change occurred (value of temperature changes per unit time). */
export class TemperatureChangeRate {
    private value: number;
    private degreescelsiuspersecondLazy: number | null = null;
    private degreescelsiusperminuteLazy: number | null = null;
    private nanodegreescelsiuspersecondLazy: number | null = null;
    private microdegreescelsiuspersecondLazy: number | null = null;
    private centidegreescelsiuspersecondLazy: number | null = null;
    private decidegreescelsiuspersecondLazy: number | null = null;
    private decadegreescelsiuspersecondLazy: number | null = null;
    private hectodegreescelsiuspersecondLazy: number | null = null;
    private kilodegreescelsiuspersecondLazy: number | null = null;

    /**
     * Create a new TemperatureChangeRate.
     * @param value The value.
     * @param fromUnit The ‘TemperatureChangeRate’ unit to create from.
     * The default unit is DegreesCelsiusPerSecond
     */
    public constructor(value: number, fromUnit: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of TemperatureChangeRate is DegreesCelsiusPerSecond.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DegreesCelsiusPerSecond(): number {
        if(this.degreescelsiuspersecondLazy !== null){
            return this.degreescelsiuspersecondLazy;
        }
        return this.degreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    /** */
    public get DegreesCelsiusPerMinute(): number {
        if(this.degreescelsiusperminuteLazy !== null){
            return this.degreescelsiusperminuteLazy;
        }
        return this.degreescelsiusperminuteLazy = this.convertFromBase(TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    /** */
    public get NanodegreesCelsiusPerSecond(): number {
        if(this.nanodegreescelsiuspersecondLazy !== null){
            return this.nanodegreescelsiuspersecondLazy;
        }
        return this.nanodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }

    /** */
    public get MicrodegreesCelsiusPerSecond(): number {
        if(this.microdegreescelsiuspersecondLazy !== null){
            return this.microdegreescelsiuspersecondLazy;
        }
        return this.microdegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }

    /** */
    public get CentidegreesCelsiusPerSecond(): number {
        if(this.centidegreescelsiuspersecondLazy !== null){
            return this.centidegreescelsiuspersecondLazy;
        }
        return this.centidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }

    /** */
    public get DecidegreesCelsiusPerSecond(): number {
        if(this.decidegreescelsiuspersecondLazy !== null){
            return this.decidegreescelsiuspersecondLazy;
        }
        return this.decidegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }

    /** */
    public get DecadegreesCelsiusPerSecond(): number {
        if(this.decadegreescelsiuspersecondLazy !== null){
            return this.decadegreescelsiuspersecondLazy;
        }
        return this.decadegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }

    /** */
    public get HectodegreesCelsiusPerSecond(): number {
        if(this.hectodegreescelsiuspersecondLazy !== null){
            return this.hectodegreescelsiuspersecondLazy;
        }
        return this.hectodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }

    /** */
    public get KilodegreesCelsiusPerSecond(): number {
        if(this.kilodegreescelsiuspersecondLazy !== null){
            return this.kilodegreescelsiuspersecondLazy;
        }
        return this.kilodegreescelsiuspersecondLazy = this.convertFromBase(TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerSecond
     *
     * @param value The unit as DegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DegreesCelsiusPerMinute
     *
     * @param value The unit as DegreesCelsiusPerMinute to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DegreesCelsiusPerMinute);
    }

    /**
     * Create a new TemperatureChangeRate instance from a NanodegreesCelsiusPerSecond
     *
     * @param value The unit as NanodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromNanodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a MicrodegreesCelsiusPerSecond
     *
     * @param value The unit as MicrodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromMicrodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a CentidegreesCelsiusPerSecond
     *
     * @param value The unit as CentidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromCentidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DecidegreesCelsiusPerSecond
     *
     * @param value The unit as DecidegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDecidegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a DecadegreesCelsiusPerSecond
     *
     * @param value The unit as DecadegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromDecadegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a HectodegreesCelsiusPerSecond
     *
     * @param value The unit as HectodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromHectodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond);
    }

    /**
     * Create a new TemperatureChangeRate instance from a KilodegreesCelsiusPerSecond
     *
     * @param value The unit as KilodegreesCelsiusPerSecond to create a new TemperatureChangeRate from.
     * @returns The new TemperatureChangeRate instance.
     */
    public static FromKilodegreesCelsiusPerSecond(value: number): TemperatureChangeRate {
        return new TemperatureChangeRate(value, TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond);
    }

    private convertFromBase(toUnit: TemperatureChangeRateUnits): number {
        switch (toUnit) {
                
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.value*60;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return (this.value) / 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return (this.value) / 0.000001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return (this.value) / 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return (this.value) / 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return (this.value) / 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return (this.value) / 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: TemperatureChangeRateUnits): number {
        switch (fromUnit) {
                
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return value;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return value/60;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return (value) * 1e-9;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return (value) * 0.000001;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return (value) * 0.01;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return (value) * 0.1;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return (value) * 10;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return (value) * 100;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the TemperatureChangeRate to string.
     * Note! the default format for TemperatureChangeRate is DegreesCelsiusPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the TemperatureChangeRate.
     * @returns The string format of the TemperatureChangeRate.
     */
    public toString(toUnit: TemperatureChangeRateUnits = TemperatureChangeRateUnits.DegreesCelsiusPerSecond): string {

        switch (toUnit) {
            
            case TemperatureChangeRateUnits.DegreesCelsiusPerSecond:
                return this.DegreesCelsiusPerSecond + ` °C/s`;
            case TemperatureChangeRateUnits.DegreesCelsiusPerMinute:
                return this.DegreesCelsiusPerMinute + ` °C/min`;
            case TemperatureChangeRateUnits.NanodegreesCelsiusPerSecond:
                return this.NanodegreesCelsiusPerSecond + ` `;
            case TemperatureChangeRateUnits.MicrodegreesCelsiusPerSecond:
                return this.MicrodegreesCelsiusPerSecond + ` `;
            case TemperatureChangeRateUnits.CentidegreesCelsiusPerSecond:
                return this.CentidegreesCelsiusPerSecond + ` `;
            case TemperatureChangeRateUnits.DecidegreesCelsiusPerSecond:
                return this.DecidegreesCelsiusPerSecond + ` `;
            case TemperatureChangeRateUnits.DecadegreesCelsiusPerSecond:
                return this.DecadegreesCelsiusPerSecond + ` `;
            case TemperatureChangeRateUnits.HectodegreesCelsiusPerSecond:
                return this.HectodegreesCelsiusPerSecond + ` `;
            case TemperatureChangeRateUnits.KilodegreesCelsiusPerSecond:
                return this.KilodegreesCelsiusPerSecond + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given TemperatureChangeRate are equals to the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns True if the given TemperatureChangeRate are equal to the current TemperatureChangeRate.
     */
    public equals(temperatureChangeRate: TemperatureChangeRate): boolean {
        return this.value === temperatureChangeRate.BaseValue;
    }

    /**
     * Compare the given TemperatureChangeRate against the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns 0 if they are equal, -1 if the current TemperatureChangeRate is less then other, 1 if the current TemperatureChangeRate is greater then other.
     */
    public compareTo(temperatureChangeRate: TemperatureChangeRate): number {

        if (this.value > temperatureChangeRate.BaseValue)
            return 1;
        if (this.value < temperatureChangeRate.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public add(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(this.value + temperatureChangeRate.BaseValue)
    }

    /**
     * Subtract the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public subtract(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(this.value - temperatureChangeRate.BaseValue)
    }

    /**
     * Multiply the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public multiply(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(this.value * temperatureChangeRate.BaseValue)
    }

    /**
     * Divide the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public divide(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(this.value / temperatureChangeRate.BaseValue)
    }

    /**
     * Modulo the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public modulo(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(this.value % temperatureChangeRate.BaseValue)
    }

    /**
     * Pow the given TemperatureChangeRate with the current TemperatureChangeRate.
     * @param temperatureChangeRate The other TemperatureChangeRate.
     * @returns A new TemperatureChangeRate instance with the results.
     */
    public pow(temperatureChangeRate: TemperatureChangeRate): TemperatureChangeRate {
        return new TemperatureChangeRate(this.value ** temperatureChangeRate.BaseValue)
    }
}
