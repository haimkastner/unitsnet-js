/** CoefficientOfThermalExpansionUnits enumeration */
export declare enum CoefficientOfThermalExpansionUnits {
    /** */
    InverseKelvin = 0,
    /** */
    InverseDegreeCelsius = 1,
    /** */
    InverseDegreeFahrenheit = 2
}
/** A unit that represents a fractional change in size in response to a change in temperature. */
export declare class CoefficientOfThermalExpansion {
    private value;
    private inversekelvinLazy;
    private inversedegreecelsiusLazy;
    private inversedegreefahrenheitLazy;
    /**
     * Create a new CoefficientOfThermalExpansion.
     * @param value The value.
     * @param fromUnit The ‘CoefficientOfThermalExpansion’ unit to create from.
     * The default unit is InverseKelvin
     */
    constructor(value: number, fromUnit?: CoefficientOfThermalExpansionUnits);
    /**
     * The base value of CoefficientOfThermalExpansion is InverseKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get InverseKelvin(): number;
    /** */
    get InverseDegreeCelsius(): number;
    /** */
    get InverseDegreeFahrenheit(): number;
    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseKelvin
     *
     * @param value The unit as InverseKelvin to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    static FromInverseKelvin(value: number): CoefficientOfThermalExpansion;
    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseDegreeCelsius
     *
     * @param value The unit as InverseDegreeCelsius to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    static FromInverseDegreeCelsius(value: number): CoefficientOfThermalExpansion;
    /**
     * Create a new CoefficientOfThermalExpansion instance from a InverseDegreeFahrenheit
     *
     * @param value The unit as InverseDegreeFahrenheit to create a new CoefficientOfThermalExpansion from.
     * @returns The new CoefficientOfThermalExpansion instance.
     */
    static FromInverseDegreeFahrenheit(value: number): CoefficientOfThermalExpansion;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the CoefficientOfThermalExpansion to string.
     * Note! the default format for CoefficientOfThermalExpansion is InverseKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the CoefficientOfThermalExpansion.
     * @returns The string format of the CoefficientOfThermalExpansion.
     */
    toString(toUnit?: CoefficientOfThermalExpansionUnits): string;
    /**
     * Check if the given CoefficientOfThermalExpansion are equals to the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns True if the given CoefficientOfThermalExpansion are equal to the current CoefficientOfThermalExpansion.
     */
    equals(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): boolean;
    /**
     * Compare the given CoefficientOfThermalExpansion against the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns 0 if they are equal, -1 if the current CoefficientOfThermalExpansion is less then other, 1 if the current CoefficientOfThermalExpansion is greater then other.
     */
    compareTo(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): number;
    /**
     * Add the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    add(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion;
    /**
     * Subtract the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    subtract(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion;
    /**
     * Multiply the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    multiply(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion;
    /**
     * Divide the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    divide(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion;
    /**
     * Modulo the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    modulo(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion;
    /**
     * Pow the given CoefficientOfThermalExpansion with the current CoefficientOfThermalExpansion.
     * @param coefficientOfThermalExpansion The other CoefficientOfThermalExpansion.
     * @returns A new CoefficientOfThermalExpansion instance with the results.
     */
    pow(coefficientOfThermalExpansion: CoefficientOfThermalExpansion): CoefficientOfThermalExpansion;
}
//# sourceMappingURL=coefficientofthermalexpansion.g.d.ts.map