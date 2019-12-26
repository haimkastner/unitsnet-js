/** ForceChangeRateUnits enumeration */
export enum ForceChangeRateUnits {
    /** */
    NewtonsPerMinute,
    /** */
    NewtonsPerSecond,
    /** */
    DecanewtonsPerMinute,
    /** */
    KilonewtonsPerMinute,
    /** */
    NanonewtonsPerSecond,
    /** */
    MicronewtonsPerSecond,
    /** */
    CentinewtonsPerSecond,
    /** */
    DecinewtonsPerSecond,
    /** */
    DecanewtonsPerSecond,
    /** */
    KilonewtonsPerSecond
}

/** Force change rate is the ratio of the force change to the time during which the change occurred (value of force changes per unit time). */
export class ForceChangeRate {
    private value: number;
    private newtonsperminuteLazy: number | null = null;
    private newtonspersecondLazy: number | null = null;
    private decanewtonsperminuteLazy: number | null = null;
    private kilonewtonsperminuteLazy: number | null = null;
    private nanonewtonspersecondLazy: number | null = null;
    private micronewtonspersecondLazy: number | null = null;
    private centinewtonspersecondLazy: number | null = null;
    private decinewtonspersecondLazy: number | null = null;
    private decanewtonspersecondLazy: number | null = null;
    private kilonewtonspersecondLazy: number | null = null;

    /**
     * Create a new ForceChangeRate.
     * @param value The value.
     * @param fromUnit The ‘ForceChangeRate’ unit to create from.
     */
    public constructor(value: number, fromUnit: ForceChangeRateUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ForceChangeRate is NewtonPerSecond.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get NewtonsPerMinute(): number {
        if(this.newtonsperminuteLazy !== null){
            return this.newtonsperminuteLazy;
        }
        return this.newtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerMinute);
    }

    /** */
    public get NewtonsPerSecond(): number {
        if(this.newtonspersecondLazy !== null){
            return this.newtonspersecondLazy;
        }
        return this.newtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NewtonsPerSecond);
    }

    /** */
    public get DecanewtonsPerMinute(): number {
        if(this.decanewtonsperminuteLazy !== null){
            return this.decanewtonsperminuteLazy;
        }
        return this.decanewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonsPerMinute);
    }

    /** */
    public get KilonewtonsPerMinute(): number {
        if(this.kilonewtonsperminuteLazy !== null){
            return this.kilonewtonsperminuteLazy;
        }
        return this.kilonewtonsperminuteLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonsPerMinute);
    }

    /** */
    public get NanonewtonsPerSecond(): number {
        if(this.nanonewtonspersecondLazy !== null){
            return this.nanonewtonspersecondLazy;
        }
        return this.nanonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.NanonewtonsPerSecond);
    }

    /** */
    public get MicronewtonsPerSecond(): number {
        if(this.micronewtonspersecondLazy !== null){
            return this.micronewtonspersecondLazy;
        }
        return this.micronewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.MicronewtonsPerSecond);
    }

    /** */
    public get CentinewtonsPerSecond(): number {
        if(this.centinewtonspersecondLazy !== null){
            return this.centinewtonspersecondLazy;
        }
        return this.centinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.CentinewtonsPerSecond);
    }

    /** */
    public get DecinewtonsPerSecond(): number {
        if(this.decinewtonspersecondLazy !== null){
            return this.decinewtonspersecondLazy;
        }
        return this.decinewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecinewtonsPerSecond);
    }

    /** */
    public get DecanewtonsPerSecond(): number {
        if(this.decanewtonspersecondLazy !== null){
            return this.decanewtonspersecondLazy;
        }
        return this.decanewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.DecanewtonsPerSecond);
    }

    /** */
    public get KilonewtonsPerSecond(): number {
        if(this.kilonewtonspersecondLazy !== null){
            return this.kilonewtonspersecondLazy;
        }
        return this.kilonewtonspersecondLazy = this.convertFromBase(ForceChangeRateUnits.KilonewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a NewtonsPerMinute
     *
     * @param value The unit as NewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromNewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a NewtonsPerSecond
     *
     * @param value The unit as NewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromNewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerMinute
     *
     * @param value The unit as DecanewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromDecanewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonsPerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerMinute
     *
     * @param value The unit as KilonewtonsPerMinute to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromKilonewtonsPerMinute(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonsPerMinute);
    }

    /**
     * Create a new ForceChangeRate instance from a NanonewtonsPerSecond
     *
     * @param value The unit as NanonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromNanonewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.NanonewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a MicronewtonsPerSecond
     *
     * @param value The unit as MicronewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromMicronewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.MicronewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a CentinewtonsPerSecond
     *
     * @param value The unit as CentinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromCentinewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.CentinewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a DecinewtonsPerSecond
     *
     * @param value The unit as DecinewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromDecinewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecinewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a DecanewtonsPerSecond
     *
     * @param value The unit as DecanewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromDecanewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.DecanewtonsPerSecond);
    }

    /**
     * Create a new ForceChangeRate instance from a KilonewtonsPerSecond
     *
     * @param value The unit as KilonewtonsPerSecond to create a new ForceChangeRate from.
     * @returns The new ForceChangeRate instance.
     */
    public static FromKilonewtonsPerSecond(value: number): ForceChangeRate {
        return new ForceChangeRate(value, ForceChangeRateUnits.KilonewtonsPerSecond);
    }

    private convertFromBase(toUnit: ForceChangeRateUnits): number {
        switch (toUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.value*60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.value;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return (this.value*60) / 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return (this.value*60) / 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return (this.value) / 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return (this.value) / 0.000001;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return (this.value) / 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return (this.value) / 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return (this.value) / 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return (this.value) / 1000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ForceChangeRateUnits): number {
        switch (fromUnit) {
                
            case ForceChangeRateUnits.NewtonsPerMinute:
                return value/60;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return value;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return (value/60) * 10;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return (value/60) * 1000;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return (value) * 1e-9;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return (value) * 0.000001;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return (value) * 0.01;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return (value) * 0.1;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return (value) * 10;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return (value) * 1000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ForceChangeRate to string.
     * Note! the default format for ForceChangeRate is NewtonsPerSecond.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ForceChangeRate.
     * @returns The string format of the ForceChangeRate.
     */
    public toString(toUnit: ForceChangeRateUnits = ForceChangeRateUnits.NewtonsPerSecond): string {

        switch (toUnit) {
            
            case ForceChangeRateUnits.NewtonsPerMinute:
                return this.NewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.NewtonsPerSecond:
                return this.NewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonsPerMinute:
                return this.DecanewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.KilonewtonsPerMinute:
                return this.KilonewtonsPerMinute + ` N/min`;
            case ForceChangeRateUnits.NanonewtonsPerSecond:
                return this.NanonewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.MicronewtonsPerSecond:
                return this.MicronewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.CentinewtonsPerSecond:
                return this.CentinewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecinewtonsPerSecond:
                return this.DecinewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.DecanewtonsPerSecond:
                return this.DecanewtonsPerSecond + ` N/s`;
            case ForceChangeRateUnits.KilonewtonsPerSecond:
                return this.KilonewtonsPerSecond + ` N/s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
