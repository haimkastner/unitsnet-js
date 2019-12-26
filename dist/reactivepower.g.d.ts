/** ReactivePowerUnits enumeration */
export declare enum ReactivePowerUnits {
    /** */
    VoltamperesReactive = 0,
    /** */
    KilovoltamperesReactive = 1,
    /** */
    MegavoltamperesReactive = 2,
    /** */
    GigavoltamperesReactive = 3
}
/** Volt-ampere reactive (var) is a unit by which reactive power is expressed in an AC electric power system. Reactive power exists in an AC circuit when the current and voltage are not in phase. */
export declare class ReactivePower {
    private value;
    private voltamperesreactiveLazy;
    private kilovoltamperesreactiveLazy;
    private megavoltamperesreactiveLazy;
    private gigavoltamperesreactiveLazy;
    /**
     * Create a new ReactivePower.
     * @param value The value.
     * @param fromUnit The ‘ReactivePower’ unit to create from.
     */
    constructor(value: number, fromUnit: ReactivePowerUnits);
    /**
     * The base value of ReactivePower is VoltampereReactive.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltamperesReactive(): number;
    /** */
    get KilovoltamperesReactive(): number;
    /** */
    get MegavoltamperesReactive(): number;
    /** */
    get GigavoltamperesReactive(): number;
    /**
     * Create a new ReactivePower instance from a VoltamperesReactive
     *
     * @param value The unit as VoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromVoltamperesReactive(value: number): ReactivePower;
    /**
     * Create a new ReactivePower instance from a KilovoltamperesReactive
     *
     * @param value The unit as KilovoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromKilovoltamperesReactive(value: number): ReactivePower;
    /**
     * Create a new ReactivePower instance from a MegavoltamperesReactive
     *
     * @param value The unit as MegavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromMegavoltamperesReactive(value: number): ReactivePower;
    /**
     * Create a new ReactivePower instance from a GigavoltamperesReactive
     *
     * @param value The unit as GigavoltamperesReactive to create a new ReactivePower from.
     * @returns The new ReactivePower instance.
     */
    static FromGigavoltamperesReactive(value: number): ReactivePower;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ReactivePower to string.
     * Note! the default format for ReactivePower is VoltamperesReactive.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ReactivePower.
     * @returns The string format of the ReactivePower.
     */
    toString(toUnit?: ReactivePowerUnits): string;
}
//# sourceMappingURL=reactivepower.g.d.ts.map