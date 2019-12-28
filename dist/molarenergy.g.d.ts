/** MolarEnergyUnits enumeration */
export declare enum MolarEnergyUnits {
    /** */
    JoulesPerMole = 0,
    /** */
    KilojoulesPerMole = 1,
    /** */
    MegajoulesPerMole = 2
}
/** Molar energy is the amount of energy stored in 1 mole of a substance. */
export declare class MolarEnergy {
    private value;
    private joulespermoleLazy;
    private kilojoulespermoleLazy;
    private megajoulespermoleLazy;
    /**
     * Create a new MolarEnergy.
     * @param value The value.
     * @param fromUnit The ‘MolarEnergy’ unit to create from.
     * The default unit is JoulesPerMole
     */
    constructor(value: number, fromUnit?: MolarEnergyUnits);
    /**
     * The base value of MolarEnergy is JoulesPerMole.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get JoulesPerMole(): number;
    /** */
    get KilojoulesPerMole(): number;
    /** */
    get MegajoulesPerMole(): number;
    /**
     * Create a new MolarEnergy instance from a JoulesPerMole
     *
     * @param value The unit as JoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    static FromJoulesPerMole(value: number): MolarEnergy;
    /**
     * Create a new MolarEnergy instance from a KilojoulesPerMole
     *
     * @param value The unit as KilojoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    static FromKilojoulesPerMole(value: number): MolarEnergy;
    /**
     * Create a new MolarEnergy instance from a MegajoulesPerMole
     *
     * @param value The unit as MegajoulesPerMole to create a new MolarEnergy from.
     * @returns The new MolarEnergy instance.
     */
    static FromMegajoulesPerMole(value: number): MolarEnergy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MolarEnergy to string.
     * Note! the default format for MolarEnergy is JoulesPerMole.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarEnergy.
     * @returns The string format of the MolarEnergy.
     */
    toString(toUnit?: MolarEnergyUnits): string;
    /**
     * Check if the given MolarEnergy are equals to the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns True if the given MolarEnergy are equal to the current MolarEnergy.
     */
    equals(molarEnergy: MolarEnergy): boolean;
    /**
     * Compare the given MolarEnergy against the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns 0 if they are equal, -1 if the current MolarEnergy is less then other, 1 if the current MolarEnergy is greater then other.
     */
    compareTo(molarEnergy: MolarEnergy): number;
    /**
     * Add the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    add(molarEnergy: MolarEnergy): MolarEnergy;
    /**
     * Subtract the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    subtract(molarEnergy: MolarEnergy): MolarEnergy;
    /**
     * Multiply the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    multiply(molarEnergy: MolarEnergy): MolarEnergy;
    /**
     * Divide the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    divide(molarEnergy: MolarEnergy): MolarEnergy;
    /**
     * Modulo the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    modulo(molarEnergy: MolarEnergy): MolarEnergy;
    /**
     * Pow the given MolarEnergy with the current MolarEnergy.
     * @param molarEnergy The other MolarEnergy.
     * @returns A new MolarEnergy instance with the results.
     */
    pow(molarEnergy: MolarEnergy): MolarEnergy;
}
//# sourceMappingURL=molarenergy.g.d.ts.map