/** MagnetizationUnits enumeration */
export declare enum MagnetizationUnits {
    /** */
    AmperesPerMeter = 0
}
/** In classical electromagnetism, magnetization is the vector field that expresses the density of permanent or induced magnetic dipole moments in a magnetic material. */
export declare class Magnetization {
    private value;
    private amperespermeterLazy;
    /**
     * Create a new Magnetization.
     * @param value The value.
     * @param fromUnit The ‘Magnetization’ unit to create from.
     * The default unit is AmperesPerMeter
     */
    constructor(value: number, fromUnit?: MagnetizationUnits);
    /**
     * The base value of Magnetization is AmperesPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get AmperesPerMeter(): number;
    /**
     * Create a new Magnetization instance from a AmperesPerMeter
     *
     * @param value The unit as AmperesPerMeter to create a new Magnetization from.
     * @returns The new Magnetization instance.
     */
    static FromAmperesPerMeter(value: number): Magnetization;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Magnetization to string.
     * Note! the default format for Magnetization is AmperesPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Magnetization.
     * @returns The string format of the Magnetization.
     */
    toString(toUnit?: MagnetizationUnits): string;
    /**
     * Check if the given Magnetization are equals to the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns True if the given Magnetization are equal to the current Magnetization.
     */
    equals(magnetization: Magnetization): boolean;
    /**
     * Compare the given Magnetization against the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns 0 if they are equal, -1 if the current Magnetization is less then other, 1 if the current Magnetization is greater then other.
     */
    compareTo(magnetization: Magnetization): number;
    /**
     * Add the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    add(magnetization: Magnetization): Magnetization;
    /**
     * Subtract the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    subtract(magnetization: Magnetization): Magnetization;
    /**
     * Multiply the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    multiply(magnetization: Magnetization): Magnetization;
    /**
     * Divide the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    divide(magnetization: Magnetization): Magnetization;
    /**
     * Modulo the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    modulo(magnetization: Magnetization): Magnetization;
    /**
     * Pow the given Magnetization with the current Magnetization.
     * @param magnetization The other Magnetization.
     * @returns A new Magnetization instance with the results.
     */
    pow(magnetization: Magnetization): Magnetization;
}
//# sourceMappingURL=magnetization.g.d.ts.map