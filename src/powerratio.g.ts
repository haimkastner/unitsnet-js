/** PowerRatioUnits enumeration */
export enum PowerRatioUnits {
    /** */
    DecibelWatts,
    /** */
    DecibelMilliwatts
}

/** The strength of a signal expressed in decibels (dB) relative to one watt. */
export class PowerRatio {
    private value: number;
    private decibelwattsLazy: number | null = null;
    private decibelmilliwattsLazy: number | null = null;

    /**
     * Create a new PowerRatio.
     * @param value The value.
     * @param fromUnit The ‘PowerRatio’ unit to create from.
     */
    public constructor(value: number, fromUnit: PowerRatioUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of PowerRatio is DecibelWatt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DecibelWatts(): number {
        if(this.decibelwattsLazy !== null){
            return this.decibelwattsLazy;
        }
        return this.decibelwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelWatts);
    }

    /** */
    public get DecibelMilliwatts(): number {
        if(this.decibelmilliwattsLazy !== null){
            return this.decibelmilliwattsLazy;
        }
        return this.decibelmilliwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelMilliwatts);
    }

    /**
     * Create a new PowerRatio instance from a DecibelWatts
     *
     * @param value The unit as DecibelWatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    public static FromDecibelWatts(value: number): PowerRatio {
        return new PowerRatio(value, PowerRatioUnits.DecibelWatts);
    }

    /**
     * Create a new PowerRatio instance from a DecibelMilliwatts
     *
     * @param value The unit as DecibelMilliwatts to create a new PowerRatio from.
     * @returns The new PowerRatio instance.
     */
    public static FromDecibelMilliwatts(value: number): PowerRatio {
        return new PowerRatio(value, PowerRatioUnits.DecibelMilliwatts);
    }

    private convertFromBase(toUnit: PowerRatioUnits): number {
        switch (toUnit) {
                
            case PowerRatioUnits.DecibelWatts:
                return this.value;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.value + 30;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: PowerRatioUnits): number {
        switch (fromUnit) {
                
            case PowerRatioUnits.DecibelWatts:
                return value;
            case PowerRatioUnits.DecibelMilliwatts:
                return value - 30;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the PowerRatio to string.
     * Note! the default format for PowerRatio is DecibelWatts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the PowerRatio.
     * @returns The string format of the PowerRatio.
     */
    public toString(toUnit: PowerRatioUnits = PowerRatioUnits.DecibelWatts): string {

        switch (toUnit) {
            
            case PowerRatioUnits.DecibelWatts:
                return this.DecibelWatts + ` dBW`;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.DecibelMilliwatts + ` dBmW`;
        default:
            break;
        }
        return this.value.toString();
    }
}
