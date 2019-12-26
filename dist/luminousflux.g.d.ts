/** LuminousFluxUnits enumeration */
export declare enum LuminousFluxUnits {
    /** */
    Lumens = 0
}
/** In photometry, luminous flux or luminous power is the measure of the perceived power of light. */
export declare class LuminousFlux {
    private value;
    private lumensLazy;
    /**
     * Create a new LuminousFlux.
     * @param value The value.
     * @param fromUnit The ‘LuminousFlux’ unit to create from.
     */
    constructor(value: number, fromUnit: LuminousFluxUnits);
    /**
     * The base value of LuminousFlux is Lumen.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get Lumens(): number;
    /**
     * Create a new LuminousFlux instance from a Lumens
     *
     * @param value The unit as Lumens to create a new LuminousFlux from.
     * @returns The new LuminousFlux instance.
     */
    static FromLumens(value: number): LuminousFlux;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the LuminousFlux to string.
     * Note! the default format for LuminousFlux is Lumens.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LuminousFlux.
     * @returns The string format of the LuminousFlux.
     */
    toString(toUnit?: LuminousFluxUnits): string;
}
//# sourceMappingURL=luminousflux.g.d.ts.map