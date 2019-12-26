/** AmplitudeRatioUnits enumeration */
export enum AmplitudeRatioUnits {
    /** */
    DecibelVolts,
    /** */
    DecibelMicrovolts,
    /** */
    DecibelMillivolts,
    /** */
    DecibelsUnloaded
}

/** The strength of a signal expressed in decibels (dB) relative to one volt RMS. */
export class AmplitudeRatio {
    private value: number;
    private decibelvoltsLazy: number | null = null;
    private decibelmicrovoltsLazy: number | null = null;
    private decibelmillivoltsLazy: number | null = null;
    private decibelsunloadedLazy: number | null = null;

    /**
     * Create a new AmplitudeRatio.
     * @param value The value.
     * @param fromUnit The ‘AmplitudeRatio’ unit to create from.
     */
    public constructor(value: number, fromUnit: AmplitudeRatioUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of AmplitudeRatio is DecibelVolt.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get DecibelVolts(): number {
        if(this.decibelvoltsLazy !== null){
            return this.decibelvoltsLazy;
        }
        return this.decibelvoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelVolts);
    }

    /** */
    public get DecibelMicrovolts(): number {
        if(this.decibelmicrovoltsLazy !== null){
            return this.decibelmicrovoltsLazy;
        }
        return this.decibelmicrovoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMicrovolts);
    }

    /** */
    public get DecibelMillivolts(): number {
        if(this.decibelmillivoltsLazy !== null){
            return this.decibelmillivoltsLazy;
        }
        return this.decibelmillivoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMillivolts);
    }

    /** */
    public get DecibelsUnloaded(): number {
        if(this.decibelsunloadedLazy !== null){
            return this.decibelsunloadedLazy;
        }
        return this.decibelsunloadedLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelsUnloaded);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelVolts
     *
     * @param value The unit as DecibelVolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelVolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelVolts);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelMicrovolts
     *
     * @param value The unit as DecibelMicrovolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelMicrovolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMicrovolts);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelMillivolts
     *
     * @param value The unit as DecibelMillivolts to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelMillivolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMillivolts);
    }

    /**
     * Create a new AmplitudeRatio instance from a DecibelsUnloaded
     *
     * @param value The unit as DecibelsUnloaded to create a new AmplitudeRatio from.
     * @returns The new AmplitudeRatio instance.
     */
    public static FromDecibelsUnloaded(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelsUnloaded);
    }

    private convertFromBase(toUnit: AmplitudeRatioUnits): number {
        switch (toUnit) {
                
            case AmplitudeRatioUnits.DecibelVolts:
                return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.value + 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.value + 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.value + 2.218487499;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AmplitudeRatioUnits): number {
        switch (fromUnit) {
                
            case AmplitudeRatioUnits.DecibelVolts:
                return value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return value - 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return value - 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return value - 2.218487499;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the AmplitudeRatio to string.
     * Note! the default format for AmplitudeRatio is DecibelVolts.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the AmplitudeRatio.
     * @returns The string format of the AmplitudeRatio.
     */
    public toString(toUnit: AmplitudeRatioUnits = AmplitudeRatioUnits.DecibelVolts): string {

        switch (toUnit) {
            
            case AmplitudeRatioUnits.DecibelVolts:
                return this.DecibelVolts + ` dBV`;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.DecibelMicrovolts + ` dBµV`;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.DecibelMillivolts + ` dBmV`;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.DecibelsUnloaded + ` dBu`;
        default:
            break;
        }
        return this.value.toString();
    }
}
