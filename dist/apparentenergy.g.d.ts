/** ApparentEnergyUnits enumeration */
export declare enum ApparentEnergyUnits {
    /** */
    VoltampereHours = 0,
    /** */
    KilovoltampereHours = 1,
    /** */
    MegavoltampereHours = 2
}
/** A unit for expressing the integral of apparent power over time, equal to the product of 1 volt-ampere and 1 hour, or to 3600 joules. */
export declare class ApparentEnergy {
    private value;
    private voltamperehoursLazy;
    private kilovoltamperehoursLazy;
    private megavoltamperehoursLazy;
    /**
     * Create a new ApparentEnergy.
     * @param value The value.
     * @param fromUnit The ‘ApparentEnergy’ unit to create from.
     */
    constructor(value: number, fromUnit: ApparentEnergyUnits);
    /**
     * The base value of ApparentEnergy is VoltampereHour.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get VoltampereHours(): number;
    /** */
    get KilovoltampereHours(): number;
    /** */
    get MegavoltampereHours(): number;
    /**
     * Create a new ApparentEnergy instance from a VoltampereHours
     *
     * @param value The unit as VoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    static FromVoltampereHours(value: number): ApparentEnergy;
    /**
     * Create a new ApparentEnergy instance from a KilovoltampereHours
     *
     * @param value The unit as KilovoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    static FromKilovoltampereHours(value: number): ApparentEnergy;
    /**
     * Create a new ApparentEnergy instance from a MegavoltampereHours
     *
     * @param value The unit as MegavoltampereHours to create a new ApparentEnergy from.
     * @returns The new ApparentEnergy instance.
     */
    static FromMegavoltampereHours(value: number): ApparentEnergy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ApparentEnergy to string.
     * Note! the default format for ApparentEnergy is VoltampereHours.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ApparentEnergy.
     * @returns The string format of the ApparentEnergy.
     */
    toString(toUnit?: ApparentEnergyUnits): string;
}
//# sourceMappingURL=apparentenergy.g.d.ts.map