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
     * The default unit is VoltamperesReactive
     */
    public constructor(value: number, fromUnit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReactivePower is VoltamperesReactive.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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

    /**
     * Convert ReactivePower to a specific unit value.
     * @param toUnit The specific unit to convert to
     * @returns The value of the specific unit provided.
     */
    public convert(toUnit: ReactivePowerUnits): number {
        switch (toUnit) {
            case ReactivePowerUnits.VoltamperesReactive: return this.VoltamperesReactive;
            case ReactivePowerUnits.KilovoltamperesReactive: return this.KilovoltamperesReactive;
            case ReactivePowerUnits.MegavoltamperesReactive: return this.MegavoltamperesReactive;
            case ReactivePowerUnits.GigavoltamperesReactive: return this.GigavoltamperesReactive;

            default:
                break;
        }
        return NaN;
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
     * To specify the unit format set the 'unit' parameter.
     * @param unit The unit to format the ReactivePower.
     * @returns The string format of the ReactivePower.
     */
    public toString(unit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive): string {

        switch (unit) {
            
            case ReactivePowerUnits.VoltamperesReactive:
                return this.VoltamperesReactive + ` var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return this.KilovoltamperesReactive + ` kvar`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return this.MegavoltamperesReactive + ` Mvar`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return this.GigavoltamperesReactive + ` Gvar`;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Get ReactivePower unit abbreviation.
     * Note! the default abbreviation for ReactivePower is VoltamperesReactive.
     * To specify the unit abbreviation set the 'unitAbbreviation' parameter.
     * @param unitAbbreviation The unit abbreviation of the ReactivePower.
     * @returns The abbreviation string of ReactivePower.
     */
    public getUnitAbbreviation(unitAbbreviation: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive): string {

        switch (unitAbbreviation) {
            
            case ReactivePowerUnits.VoltamperesReactive:
                return `var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return `kvar`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return `Mvar`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return `Gvar`;
        default:
            break;
        }
        return '';
    }

    /**
     * Check if the given ReactivePower are equals to the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns True if the given ReactivePower are equal to the current ReactivePower.
     */
    public equals(reactivePower: ReactivePower): boolean {
        return this.value === reactivePower.BaseValue;
    }

    /**
     * Compare the given ReactivePower against the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns 0 if they are equal, -1 if the current ReactivePower is less then other, 1 if the current ReactivePower is greater then other.
     */
    public compareTo(reactivePower: ReactivePower): number {

        if (this.value > reactivePower.BaseValue)
            return 1;
        if (this.value < reactivePower.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public add(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(this.value + reactivePower.BaseValue)
    }

    /**
     * Subtract the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public subtract(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(this.value - reactivePower.BaseValue)
    }

    /**
     * Multiply the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public multiply(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(this.value * reactivePower.BaseValue)
    }

    /**
     * Divide the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public divide(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(this.value / reactivePower.BaseValue)
    }

    /**
     * Modulo the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public modulo(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(this.value % reactivePower.BaseValue)
    }

    /**
     * Pow the given ReactivePower with the current ReactivePower.
     * @param reactivePower The other ReactivePower.
     * @returns A new ReactivePower instance with the results.
     */
    public pow(reactivePower: ReactivePower): ReactivePower {
        return new ReactivePower(this.value ** reactivePower.BaseValue)
    }
}
