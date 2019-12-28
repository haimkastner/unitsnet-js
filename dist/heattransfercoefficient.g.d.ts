/** HeatTransferCoefficientUnits enumeration */
export declare enum HeatTransferCoefficientUnits {
    /** */
    WattsPerSquareMeterKelvin = 0,
    /** */
    WattsPerSquareMeterCelsius = 1,
    /** */
    BtusPerSquareFootDegreeFahrenheit = 2
}
/** The heat transfer coefficient or film coefficient, or film effectiveness, in thermodynamics and in mechanics is the proportionality constant between the heat flux and the thermodynamic driving force for the flow of heat (i.e., the temperature difference, ΔT) */
export declare class HeatTransferCoefficient {
    private value;
    private wattspersquaremeterkelvinLazy;
    private wattspersquaremetercelsiusLazy;
    private btuspersquarefootdegreefahrenheitLazy;
    /**
     * Create a new HeatTransferCoefficient.
     * @param value The value.
     * @param fromUnit The ‘HeatTransferCoefficient’ unit to create from.
     * The default unit is WattsPerSquareMeterKelvin
     */
    constructor(value: number, fromUnit?: HeatTransferCoefficientUnits);
    /**
     * The base value of HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get WattsPerSquareMeterKelvin(): number;
    /** */
    get WattsPerSquareMeterCelsius(): number;
    /** */
    get BtusPerSquareFootDegreeFahrenheit(): number;
    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterKelvin
     *
     * @param value The unit as WattsPerSquareMeterKelvin to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    static FromWattsPerSquareMeterKelvin(value: number): HeatTransferCoefficient;
    /**
     * Create a new HeatTransferCoefficient instance from a WattsPerSquareMeterCelsius
     *
     * @param value The unit as WattsPerSquareMeterCelsius to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    static FromWattsPerSquareMeterCelsius(value: number): HeatTransferCoefficient;
    /**
     * Create a new HeatTransferCoefficient instance from a BtusPerSquareFootDegreeFahrenheit
     *
     * @param value The unit as BtusPerSquareFootDegreeFahrenheit to create a new HeatTransferCoefficient from.
     * @returns The new HeatTransferCoefficient instance.
     */
    static FromBtusPerSquareFootDegreeFahrenheit(value: number): HeatTransferCoefficient;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the HeatTransferCoefficient to string.
     * Note! the default format for HeatTransferCoefficient is WattsPerSquareMeterKelvin.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the HeatTransferCoefficient.
     * @returns The string format of the HeatTransferCoefficient.
     */
    toString(toUnit?: HeatTransferCoefficientUnits): string;
    /**
     * Check if the given HeatTransferCoefficient are equals to the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns True if the given HeatTransferCoefficient are equal to the current HeatTransferCoefficient.
     */
    equals(heatTransferCoefficient: HeatTransferCoefficient): boolean;
    /**
     * Compare the given HeatTransferCoefficient against the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns 0 if they are equal, -1 if the current HeatTransferCoefficient is less then other, 1 if the current HeatTransferCoefficient is greater then other.
     */
    compareTo(heatTransferCoefficient: HeatTransferCoefficient): number;
    /**
     * Add the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    add(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient;
    /**
     * Subtract the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    subtract(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient;
    /**
     * Multiply the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    multiply(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient;
    /**
     * Divide the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    divide(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient;
    /**
     * Modulo the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    modulo(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient;
    /**
     * Pow the given HeatTransferCoefficient with the current HeatTransferCoefficient.
     * @param heatTransferCoefficient The other HeatTransferCoefficient.
     * @returns A new HeatTransferCoefficient instance with the results.
     */
    pow(heatTransferCoefficient: HeatTransferCoefficient): HeatTransferCoefficient;
}
//# sourceMappingURL=heattransfercoefficient.g.d.ts.map