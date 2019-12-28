/** LuminousIntensityUnits enumeration */
export declare enum LuminousIntensityUnits {
    /** */
    Candela = 0
}
/** In photometry, luminous intensity is a measure of the wavelength-weighted power emitted by a light source in a particular direction per unit solid angle, based on the luminosity function, a standardized model of the sensitivity of the human eye. */
export declare class LuminousIntensity {
    private value;
    private candelaLazy;
    /**
     * Create a new LuminousIntensity.
     * @param value The value.
     * @param fromUnit The ‘LuminousIntensity’ unit to create from.
     * The default unit is Candela
     */
    constructor(value: number, fromUnit?: LuminousIntensityUnits);
    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Candela(): number;
    /**
     * Create a new LuminousIntensity instance from a Candela
     *
     * @param value The unit as Candela to create a new LuminousIntensity from.
     * @returns The new LuminousIntensity instance.
     */
    static FromCandela(value: number): LuminousIntensity;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the LuminousIntensity to string.
     * Note! the default format for LuminousIntensity is Candela.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LuminousIntensity.
     * @returns The string format of the LuminousIntensity.
     */
    toString(toUnit?: LuminousIntensityUnits): string;
    /**
     * Check if the given LuminousIntensity are equals to the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns True if the given LuminousIntensity are equal to the current LuminousIntensity.
     */
    equals(luminousIntensity: LuminousIntensity): boolean;
    /**
     * Compare the given LuminousIntensity against the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns 0 if they are equal, -1 if the current LuminousIntensity is less then other, 1 if the current LuminousIntensity is greater then other.
     */
    compareTo(luminousIntensity: LuminousIntensity): number;
    /**
     * Add the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    add(luminousIntensity: LuminousIntensity): LuminousIntensity;
    /**
     * Subtract the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    subtract(luminousIntensity: LuminousIntensity): LuminousIntensity;
    /**
     * Multiply the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    multiply(luminousIntensity: LuminousIntensity): LuminousIntensity;
    /**
     * Divide the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    divide(luminousIntensity: LuminousIntensity): LuminousIntensity;
    /**
     * Modulo the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    modulo(luminousIntensity: LuminousIntensity): LuminousIntensity;
    /**
     * Pow the given LuminousIntensity with the current LuminousIntensity.
     * @param luminousIntensity The other LuminousIntensity.
     * @returns A new LuminousIntensity instance with the results.
     */
    pow(luminousIntensity: LuminousIntensity): LuminousIntensity;
}
//# sourceMappingURL=luminousintensity.g.d.ts.map