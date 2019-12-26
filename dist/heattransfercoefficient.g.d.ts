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
     */
    constructor(value: number, fromUnit: HeatTransferCoefficientUnits);
    /**
     * The base value of HeatTransferCoefficient is WattPerSquareMeterKelvin.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=heattransfercoefficient.g.d.ts.map