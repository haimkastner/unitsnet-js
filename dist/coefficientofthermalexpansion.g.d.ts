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
     */
    constructor(value: number, fromUnit: CoefficientOfThermalExpansionUnits);
    /**
     * The base value of CoefficientOfThermalExpansion is InverseKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=coefficientofthermalexpansion.g.d.ts.map