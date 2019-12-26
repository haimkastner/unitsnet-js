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
     */
    constructor(value: number, fromUnit: LuminousIntensityUnits);
    /**
     * The base value of LuminousIntensity is Candela.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=luminousintensity.g.d.ts.map