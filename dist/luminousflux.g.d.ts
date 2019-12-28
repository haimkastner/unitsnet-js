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
     * The default unit is Lumens
     */
    constructor(value: number, fromUnit?: LuminousFluxUnits);
    /**
     * The base value of LuminousFlux is Lumens.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
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
    /**
     * Check if the given LuminousFlux are equals to the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns True if the given LuminousFlux are equal to the current LuminousFlux.
     */
    equals(luminousFlux: LuminousFlux): boolean;
    /**
     * Compare the given LuminousFlux against the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns 0 if they are equal, -1 if the current LuminousFlux is less then other, 1 if the current LuminousFlux is greater then other.
     */
    compareTo(luminousFlux: LuminousFlux): number;
    /**
     * Add the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    add(luminousFlux: LuminousFlux): LuminousFlux;
    /**
     * Subtract the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    subtract(luminousFlux: LuminousFlux): LuminousFlux;
    /**
     * Multiply the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    multiply(luminousFlux: LuminousFlux): LuminousFlux;
    /**
     * Divide the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    divide(luminousFlux: LuminousFlux): LuminousFlux;
    /**
     * Modulo the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    modulo(luminousFlux: LuminousFlux): LuminousFlux;
    /**
     * Pow the given LuminousFlux with the current LuminousFlux.
     * @param luminousFlux The other LuminousFlux.
     * @returns A new LuminousFlux instance with the results.
     */
    pow(luminousFlux: LuminousFlux): LuminousFlux;
}
//# sourceMappingURL=luminousflux.g.d.ts.map