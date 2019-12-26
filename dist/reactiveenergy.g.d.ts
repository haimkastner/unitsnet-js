/** ReactiveEnergyUnits enumeration */
export declare enum ReactiveEnergyUnits {
    /** */
    VoltampereReactiveHours = 0,
    /** */
    KilovoltampereReactiveHours = 1,
    /** */
    MegavoltampereReactiveHours = 2
}
/** The Volt-ampere reactive hour (expressed as varh) is the reactive power of one Volt-ampere reactive produced in one hour. */
export declare class ReactiveEnergy {
    private value;
    private voltamperereactivehoursLazy;
    private kilovoltamperereactivehoursLazy;
    private megavoltamperereactivehoursLazy;
    /**
     * Create a new ReactiveEnergy.
     * @param value The value.
     * @param fromUnit The ‘ReactiveEnergy’ unit to create from.
     */
    constructor(value: number, fromUnit: ReactiveEnergyUnits);
    /**
     * The base value of ReactiveEnergy is VoltampereReactiveHour.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltampereReactiveHours(): number;
    /** */
    get KilovoltampereReactiveHours(): number;
    /** */
    get MegavoltampereReactiveHours(): number;
    /**
     * Create a new ReactiveEnergy instance from a VoltampereReactiveHours
     *
     * @param value The unit as VoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    static FromVoltampereReactiveHours(value: number): ReactiveEnergy;
    /**
     * Create a new ReactiveEnergy instance from a KilovoltampereReactiveHours
     *
     * @param value The unit as KilovoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    static FromKilovoltampereReactiveHours(value: number): ReactiveEnergy;
    /**
     * Create a new ReactiveEnergy instance from a MegavoltampereReactiveHours
     *
     * @param value The unit as MegavoltampereReactiveHours to create a new ReactiveEnergy from.
     * @returns The new ReactiveEnergy instance.
     */
    static FromMegavoltampereReactiveHours(value: number): ReactiveEnergy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ReactiveEnergy to string.
     * Note! the default format for ReactiveEnergy is VoltampereReactiveHours.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReactiveEnergy.
     * @returns The string format of the ReactiveEnergy.
     */
    toString(toUnit?: ReactiveEnergyUnits): string;
}
//# sourceMappingURL=reactiveenergy.g.d.ts.map