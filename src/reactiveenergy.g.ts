/** ReactiveEnergyUnits enumeration */
export enum ReactiveEnergyUnits {
    /** */
    VoltampereReactiveHours,
    /** */
    KilovoltampereReactiveHours,
    /** */
    MegavoltampereReactiveHours
}

/** The Volt-ampere reactive hour (expressed as varh) is the reactive power of one Volt-ampere reactive produced in one hour. */
export class ReactiveEnergy {
    private value: number;
    private voltamperereactivehoursLazy: number | null = null;
    private kilovoltamperereactivehoursLazy: number | null = null;
    private megavoltamperereactivehoursLazy: number | null = null;

    /**
     * Create a new ReactiveEnergy.
     * @param value The value.
     * @param fromUnit The ‘ReactiveEnergy’ unit to create from.
     * The default unit is VoltampereReactiveHours
     */
    public constructor(value: number, fromUnit: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReactiveEnergy is VoltampereReactiveHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get VoltampereReactiveHours(): number {
        if(this.voltamperereactivehoursLazy !== null){
            return this.voltamperereactivehoursLazy;
        }
        return this.voltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    /** */
    public get KilovoltampereReactiveHours(): number {
        if(this.kilovoltamperereactivehoursLazy !== null){
            return this.kilovoltamperereactivehoursLazy;
        }
        return this.kilovoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    /** */
    public get MegavoltampereReactiveHours(): number {
        if(this.megavoltamperereactivehoursLazy !== null){
            return this.megavoltamperereactivehoursLazy;
        }
        return this.megavoltamperereactivehoursLazy = this.convertFromBase(ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    /**
     * Create a new ReactiveEnergy instance from a VoltampereReactiveHours
     *
     * @param value The unit as VoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    public static FromVoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.VoltampereReactiveHours);
    }

    /**
     * Create a new ReactiveEnergy instance from a KilovoltampereReactiveHours
     *
     * @param value The unit as KilovoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    public static FromKilovoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.KilovoltampereReactiveHours);
    }

    /**
     * Create a new ReactiveEnergy instance from a MegavoltampereReactiveHours
     *
     * @param value The unit as MegavoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    public static FromMegavoltampereReactiveHours(value: number): ReactiveEnergy {
        return new ReactiveEnergy(value, ReactiveEnergyUnits.MegavoltampereReactiveHours);
    }

    private convertFromBase(toUnit: ReactiveEnergyUnits): number {
        switch (toUnit) {
                
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return (this.value) / 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ReactiveEnergyUnits): number {
        switch (fromUnit) {
                
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return value;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return (value) * 1000;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the ReactiveEnergy to string.
     * Note! the default format for ReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReactiveEnergy.
     * @returns The string format of the ReactiveEnergy.
     */
    public toString(toUnit: ReactiveEnergyUnits = ReactiveEnergyUnits.VoltampereReactiveHours): string {

        switch (toUnit) {
            
            case ReactiveEnergyUnits.VoltampereReactiveHours:
                return this.VoltampereReactiveHours + ` varh`;
            case ReactiveEnergyUnits.KilovoltampereReactiveHours:
                return this.KilovoltampereReactiveHours + ` `;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return this.MegavoltampereReactiveHours + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given ReactiveEnergy are equals to the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns True if the given ReactiveEnergy are equal to the current ReactiveEnergy.
     */
    public equals(reactiveEnergy: ReactiveEnergy): boolean {
        return this.value === reactiveEnergy.BaseValue;
    }

    /**
     * Compare the given ReactiveEnergy against the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns 0 if they are equal, -1 if the current ReactiveEnergy is less then other, 1 if the current ReactiveEnergy is greater then other.
     */
    public compareTo(reactiveEnergy: ReactiveEnergy): number {

        if (this.value > reactiveEnergy.BaseValue)
            return 1;
        if (this.value < reactiveEnergy.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public add(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(this.value + reactiveEnergy.BaseValue)
    }

    /**
     * Subtract the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public subtract(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(this.value - reactiveEnergy.BaseValue)
    }

    /**
     * Multiply the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public multiply(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(this.value * reactiveEnergy.BaseValue)
    }

    /**
     * Divide the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public divide(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(this.value / reactiveEnergy.BaseValue)
    }

    /**
     * Modulo the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public modulo(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(this.value % reactiveEnergy.BaseValue)
    }

    /**
     * Pow the given ReactiveEnergy with the current ReactiveEnergy.
     * @param reactiveEnergy The other ReactiveEnergy.
     * @returns A new ReactiveEnergy instance with the results.
     */
    public pow(reactiveEnergy: ReactiveEnergy): ReactiveEnergy {
        return new ReactiveEnergy(this.value ** reactiveEnergy.BaseValue)
    }
}
