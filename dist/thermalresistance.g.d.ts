/** ThermalResistanceUnits enumeration */
export declare enum ThermalResistanceUnits {
    /** */
    SquareMeterKelvinsPerKilowatt = 0,
    /** */
    SquareMeterDegreesCelsiusPerWatt = 1,
    /** */
    SquareCentimeterKelvinsPerWatt = 2,
    /** */
    SquareCentimeterHourDegreesCelsiusPerKilocalorie = 3,
    /** */
    HourSquareFeetDegreesFahrenheitPerBtu = 4
}
/** Heat Transfer Coefficient or Thermal conductivity - indicates a materials ability to conduct heat. */
export declare class ThermalResistance {
    private value;
    private squaremeterkelvinsperkilowattLazy;
    private squaremeterdegreescelsiusperwattLazy;
    private squarecentimeterkelvinsperwattLazy;
    private squarecentimeterhourdegreescelsiusperkilocalorieLazy;
    private hoursquarefeetdegreesfahrenheitperbtuLazy;
    /**
     * Create a new ThermalResistance.
     * @param value The value.
     * @param fromUnit The ‘ThermalResistance’ unit to create from.
     * The default unit is SquareMeterKelvinsPerKilowatt
     */
    constructor(value: number, fromUnit?: ThermalResistanceUnits);
    /**
     * The base value of ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get SquareMeterKelvinsPerKilowatt(): number;
    /** */
    get SquareMeterDegreesCelsiusPerWatt(): number;
    /** */
    get SquareCentimeterKelvinsPerWatt(): number;
    /** */
    get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number;
    /** */
    get HourSquareFeetDegreesFahrenheitPerBtu(): number;
    /**
     * Create a new ThermalResistance instance from a SquareMeterKelvinsPerKilowatt
     *
     * @param value The unit as SquareMeterKelvinsPerKilowatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    static FromSquareMeterKelvinsPerKilowatt(value: number): ThermalResistance;
    /**
     * Create a new ThermalResistance instance from a SquareMeterDegreesCelsiusPerWatt
     *
     * @param value The unit as SquareMeterDegreesCelsiusPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    static FromSquareMeterDegreesCelsiusPerWatt(value: number): ThermalResistance;
    /**
     * Create a new ThermalResistance instance from a SquareCentimeterKelvinsPerWatt
     *
     * @param value The unit as SquareCentimeterKelvinsPerWatt to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    static FromSquareCentimeterKelvinsPerWatt(value: number): ThermalResistance;
    /**
     * Create a new ThermalResistance instance from a SquareCentimeterHourDegreesCelsiusPerKilocalorie
     *
     * @param value The unit as SquareCentimeterHourDegreesCelsiusPerKilocalorie to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value: number): ThermalResistance;
    /**
     * Create a new ThermalResistance instance from a HourSquareFeetDegreesFahrenheitPerBtu
     *
     * @param value The unit as HourSquareFeetDegreesFahrenheitPerBtu to create a new ThermalResistance from.
     * @returns The new ThermalResistance instance.
     */
    static FromHourSquareFeetDegreesFahrenheitPerBtu(value: number): ThermalResistance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the ThermalResistance to string.
     * Note! the default format for ThermalResistance is SquareMeterKelvinsPerKilowatt.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the ThermalResistance.
     * @returns The string format of the ThermalResistance.
     */
    toString(toUnit?: ThermalResistanceUnits): string;
    /**
     * Check if the given ThermalResistance are equals to the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns True if the given ThermalResistance are equal to the current ThermalResistance.
     */
    equals(thermalResistance: ThermalResistance): boolean;
    /**
     * Compare the given ThermalResistance against the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns 0 if they are equal, -1 if the current ThermalResistance is less then other, 1 if the current ThermalResistance is greater then other.
     */
    compareTo(thermalResistance: ThermalResistance): number;
    /**
     * Add the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    add(thermalResistance: ThermalResistance): ThermalResistance;
    /**
     * Subtract the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    subtract(thermalResistance: ThermalResistance): ThermalResistance;
    /**
     * Multiply the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    multiply(thermalResistance: ThermalResistance): ThermalResistance;
    /**
     * Divide the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    divide(thermalResistance: ThermalResistance): ThermalResistance;
    /**
     * Modulo the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    modulo(thermalResistance: ThermalResistance): ThermalResistance;
    /**
     * Pow the given ThermalResistance with the current ThermalResistance.
     * @param thermalResistance The other ThermalResistance.
     * @returns A new ThermalResistance instance with the results.
     */
    pow(thermalResistance: ThermalResistance): ThermalResistance;
}
//# sourceMappingURL=thermalresistance.g.d.ts.map