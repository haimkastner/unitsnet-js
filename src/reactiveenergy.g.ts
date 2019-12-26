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
     */
    public constructor(value: number, fromUnit: ReactiveEnergyUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of ReactiveEnergy is VoltampereReactiveHour.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
                return this.KilovoltampereReactiveHours + ` varh`;
            case ReactiveEnergyUnits.MegavoltampereReactiveHours:
                return this.MegavoltampereReactiveHours + ` varh`;
        default:
            break;
        }
        return this.value.toString();
    }
}
