/** RatioChangeRateUnits enumeration */
export enum RatioChangeRateUnits {
    /** */
    PercentsPerSecond,
    /** */
    DecimalFractionsPerSecond
}

/** The change in ratio per unit of time. */
export class RatioChangeRate {
    private value: number;
    private percentspersecondLazy: number | null = null;
    private decimalfractionspersecondLazy: number | null = null;

    /**
     * Create a new RatioChangeRate.
     * @param value The value.
     * @param fromUnit The ‘RatioChangeRate’ unit to create from.
     */
    public constructor(value: number, fromUnit: RatioChangeRateUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of RatioChangeRate is DecimalFractionPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get PercentsPerSecond(): number {
        if(this.percentspersecondLazy !== null){
            return this.percentspersecondLazy;
        }
        return this.percentspersecondLazy = this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }

    /** */
    public get DecimalFractionsPerSecond(): number {
        if(this.decimalfractionspersecondLazy !== null){
            return this.decimalfractionspersecondLazy;
        }
        return this.decimalfractionspersecondLazy = this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    /**
     * Create a new RatioChangeRate instance from a PercentsPerSecond
     *
     * @param value The unit as PercentsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    public static FromPercentsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.PercentsPerSecond);
    }

    /**
     * Create a new RatioChangeRate instance from a DecimalFractionsPerSecond
     *
     * @param value The unit as DecimalFractionsPerSecond to create a new RatioChangeRate from.
     * @returns The new RatioChangeRate instance.
     */
    public static FromDecimalFractionsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    private convertFromBase(toUnit: RatioChangeRateUnits): number {
        switch (toUnit) {
                
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.value/1e2;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RatioChangeRateUnits): number {
        switch (fromUnit) {
                
            case RatioChangeRateUnits.PercentsPerSecond:
                return value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return value*1e2;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the RatioChangeRate to string.
     * Note! the default format for RatioChangeRate is DecimalFractionsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the RatioChangeRate.
     * @returns The string format of the RatioChangeRate.
     */
    public toString(toUnit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond): string {

        switch (toUnit) {
            
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.PercentsPerSecond + ` %/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.DecimalFractionsPerSecond + ` /s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
