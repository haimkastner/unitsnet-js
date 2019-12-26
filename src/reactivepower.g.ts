/** ReactivePowerUnits enumeration */
export enum ReactivePowerUnits {
    /** */
    VoltamperesReactive,
    /** */
    KilovoltamperesReactive,
    /** */
    MegavoltamperesReactive,
    /** */
    GigavoltamperesReactive
}

/** Volt-ampere reactive (var) is a unit by which reactive power is expressed in an AC electric power system. Reactive power exists in an AC circuit when the current and voltage are not in phase. */
export class ReactivePower {
    private value: number;
    private voltamperesreactiveLazy: number | null = null;
    private kilovoltamperesreactiveLazy: number | null = null;
    private megavoltamperesreactiveLazy: number | null = null;
    private gigavoltamperesreactiveLazy: number | null = null;

    /**
     * Create a new ReactivePower.
     * @param value The value.
     * @param fromUnit The ‘ReactivePower’ unit to create from.
     */
    public constructor(value: number, fromUnit: ReactivePowerUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReactivePower is VoltampereReactive.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltamperesReactive(): number {
        if(this.voltamperesreactiveLazy !== null){
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }

    /** */
    public get KilovoltamperesReactive(): number {
        if(this.kilovoltamperesreactiveLazy !== null){
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltamperesReactive);
    }

    /** */
    public get MegavoltamperesReactive(): number {
        if(this.megavoltamperesreactiveLazy !== null){
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltamperesReactive);
    }

    /** */
    public get GigavoltamperesReactive(): number {
        if(this.gigavoltamperesreactiveLazy !== null){
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a VoltamperesReactive
     *
     * @param value The unit as VoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromVoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a KilovoltamperesReactive
     *
     * @param value The unit as KilovoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromKilovoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a MegavoltamperesReactive
     *
     * @param value The unit as MegavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromMegavoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltamperesReactive);
    }

    /**
     * Create a new ReactivePower instance from a GigavoltamperesReactive
     *
     * @param value The unit as GigavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    public static FromGigavoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltamperesReactive);
    }

    private convertFromBase(toUnit: ReactivePowerUnits): number {
        switch (toUnit) {
                
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ReactivePowerUnits): number {
        switch (fromUnit) {
                
            case ReactivePowerUnits.VoltamperesReactive:
                return value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (value) * 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (value) * 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ReactivePower to string.
     * Note! the default format for ReactivePower is VoltamperesReactive.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReactivePower.
     * @returns The string format of the ReactivePower.
     */
    public toString(toUnit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive): string {

        switch (toUnit) {
            
            case ReactivePowerUnits.VoltamperesReactive:
                return this.VoltamperesReactive + ` var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return this.KilovoltamperesReactive + ` var`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return this.MegavoltamperesReactive + ` var`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return this.GigavoltamperesReactive + ` var`;
        default:
            break;
        }
        return this.value.toString();
    }
}
