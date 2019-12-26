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
     */
    constructor(value: number, fromUnit: MolarEntropyUnits);
    /**
     * The base value of MolarEntropy is JoulePerMoleKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=molarentropy.g.d.ts.map