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
     * The default unit is VoltampereHours
     */
    constructor(value: number, fromUnit?: ApparentEnergyUnits);
    /**
     * The base value of ApparentEnergy is VoltampereHours.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given ApparentEnergy are equals to the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns True if the given ApparentEnergy are equal to the current ApparentEnergy.
     */
    equals(apparentEnergy: ApparentEnergy): boolean;
    /**
     * Compare the given ApparentEnergy against the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns 0 if they are equal, -1 if the current ApparentEnergy is less then other, 1 if the current ApparentEnergy is greater then other.
     */
    compareTo(apparentEnergy: ApparentEnergy): number;
    /**
     * Add the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    add(apparentEnergy: ApparentEnergy): ApparentEnergy;
    /**
     * Subtract the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    subtract(apparentEnergy: ApparentEnergy): ApparentEnergy;
    /**
     * Multiply the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    multiply(apparentEnergy: ApparentEnergy): ApparentEnergy;
    /**
     * Divide the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    divide(apparentEnergy: ApparentEnergy): ApparentEnergy;
    /**
     * Modulo the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    modulo(apparentEnergy: ApparentEnergy): ApparentEnergy;
    /**
     * Pow the given ApparentEnergy with the current ApparentEnergy.
     * @param apparentEnergy The other ApparentEnergy.
     * @returns A new ApparentEnergy instance with the results.
     */
    pow(apparentEnergy: ApparentEnergy): ApparentEnergy;
}
//# sourceMappingURL=apparentenergy.g.d.ts.map