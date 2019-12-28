/** MolarEntropyUnits enumeration */
export declare enum MolarEntropyUnits {
    /** */
    JoulesPerMoleKelvin = 0,
    /** */
    KilojoulesPerMoleKelvin = 1,
    /** */
    MegajoulesPerMoleKelvin = 2
}
/** Molar entropy is amount of energy required to increase temperature of 1 mole substance by 1 Kelvin. */
export declare class MolarEntropy {
    private value;
    private joulespermolekelvinLazy;
    private kilojoulespermolekelvinLazy;
    private megajoulespermolekelvinLazy;
    /**
     * Create a new MolarEntropy.
     * @param value The value.
     * @param fromUnit The ‘MolarEntropy’ unit to create from.
     * The default unit is JoulesPerMoleKelvin
     */
    constructor(value: number, fromUnit?: MolarEntropyUnits);
    /**
     * The base value of MolarEntropy is JoulesPerMoleKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get JoulesPerMoleKelvin(): number;
    /** */
    get KilojoulesPerMoleKelvin(): number;
    /** */
    get MegajoulesPerMoleKelvin(): number;
    /**
     * Create a new MolarEntropy instance from a JoulesPerMoleKelvin
     *
     * @param value The unit as JoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    static FromJoulesPerMoleKelvin(value: number): MolarEntropy;
    /**
     * Create a new MolarEntropy instance from a KilojoulesPerMoleKelvin
     *
     * @param value The unit as KilojoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    static FromKilojoulesPerMoleKelvin(value: number): MolarEntropy;
    /**
     * Create a new MolarEntropy instance from a MegajoulesPerMoleKelvin
     *
     * @param value The unit as MegajoulesPerMoleKelvin to create a new MolarEntropy from.
     * @returns The new MolarEntropy instance.
     */
    static FromMegajoulesPerMoleKelvin(value: number): MolarEntropy;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the MolarEntropy to string.
     * Note! the default format for MolarEntropy is JoulesPerMoleKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the MolarEntropy.
     * @returns The string format of the MolarEntropy.
     */
    toString(toUnit?: MolarEntropyUnits): string;
    /**
     * Check if the given MolarEntropy are equals to the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns True if the given MolarEntropy are equal to the current MolarEntropy.
     */
    equals(molarEntropy: MolarEntropy): boolean;
    /**
     * Compare the given MolarEntropy against the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns 0 if they are equal, -1 if the current MolarEntropy is less then other, 1 if the current MolarEntropy is greater then other.
     */
    compareTo(molarEntropy: MolarEntropy): number;
    /**
     * Add the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    add(molarEntropy: MolarEntropy): MolarEntropy;
    /**
     * Subtract the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    subtract(molarEntropy: MolarEntropy): MolarEntropy;
    /**
     * Multiply the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    multiply(molarEntropy: MolarEntropy): MolarEntropy;
    /**
     * Divide the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    divide(molarEntropy: MolarEntropy): MolarEntropy;
    /**
     * Modulo the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    modulo(molarEntropy: MolarEntropy): MolarEntropy;
    /**
     * Pow the given MolarEntropy with the current MolarEntropy.
     * @param molarEntropy The other MolarEntropy.
     * @returns A new MolarEntropy instance with the results.
     */
    pow(molarEntropy: MolarEntropy): MolarEntropy;
}
//# sourceMappingURL=molarentropy.g.d.ts.map