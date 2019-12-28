/** IrradiationUnits enumeration */
export declare enum IrradiationUnits {
    /** */
    JoulesPerSquareMeter = 0,
    /** */
    JoulesPerSquareCentimeter = 1,
    /** */
    JoulesPerSquareMillimeter = 2,
    /** */
    WattHoursPerSquareMeter = 3,
    /** */
    KilojoulesPerSquareMeter = 4,
    /** */
    KilowattHoursPerSquareMeter = 5
}
/** Irradiation is the process by which an object is exposed to radiation. The exposure can originate from various sources, including natural sources. */
export declare class Irradiation {
    private value;
    private joulespersquaremeterLazy;
    private joulespersquarecentimeterLazy;
    private joulespersquaremillimeterLazy;
    private watthourspersquaremeterLazy;
    private kilojoulespersquaremeterLazy;
    private kilowatthourspersquaremeterLazy;
    /**
     * Create a new Irradiation.
     * @param value The value.
     * @param fromUnit The ‘Irradiation’ unit to create from.
     * The default unit is JoulesPerSquareMeter
     */
    constructor(value: number, fromUnit?: IrradiationUnits);
    /**
     * The base value of Irradiation is JoulesPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get JoulesPerSquareMeter(): number;
    /** */
    get JoulesPerSquareCentimeter(): number;
    /** */
    get JoulesPerSquareMillimeter(): number;
    /** */
    get WattHoursPerSquareMeter(): number;
    /** */
    get KilojoulesPerSquareMeter(): number;
    /** */
    get KilowattHoursPerSquareMeter(): number;
    /**
     * Create a new Irradiation instance from a JoulesPerSquareMeter
     *
     * @param value The unit as JoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromJoulesPerSquareMeter(value: number): Irradiation;
    /**
     * Create a new Irradiation instance from a JoulesPerSquareCentimeter
     *
     * @param value The unit as JoulesPerSquareCentimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromJoulesPerSquareCentimeter(value: number): Irradiation;
    /**
     * Create a new Irradiation instance from a JoulesPerSquareMillimeter
     *
     * @param value The unit as JoulesPerSquareMillimeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromJoulesPerSquareMillimeter(value: number): Irradiation;
    /**
     * Create a new Irradiation instance from a WattHoursPerSquareMeter
     *
     * @param value The unit as WattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromWattHoursPerSquareMeter(value: number): Irradiation;
    /**
     * Create a new Irradiation instance from a KilojoulesPerSquareMeter
     *
     * @param value The unit as KilojoulesPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromKilojoulesPerSquareMeter(value: number): Irradiation;
    /**
     * Create a new Irradiation instance from a KilowattHoursPerSquareMeter
     *
     * @param value The unit as KilowattHoursPerSquareMeter to create a new Irradiation from.
     * @returns The new Irradiation instance.
     */
    static FromKilowattHoursPerSquareMeter(value: number): Irradiation;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Irradiation to string.
     * Note! the default format for Irradiation is JoulesPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Irradiation.
     * @returns The string format of the Irradiation.
     */
    toString(toUnit?: IrradiationUnits): string;
    /**
     * Check if the given Irradiation are equals to the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns True if the given Irradiation are equal to the current Irradiation.
     */
    equals(irradiation: Irradiation): boolean;
    /**
     * Compare the given Irradiation against the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns 0 if they are equal, -1 if the current Irradiation is less then other, 1 if the current Irradiation is greater then other.
     */
    compareTo(irradiation: Irradiation): number;
    /**
     * Add the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    add(irradiation: Irradiation): Irradiation;
    /**
     * Subtract the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    subtract(irradiation: Irradiation): Irradiation;
    /**
     * Multiply the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    multiply(irradiation: Irradiation): Irradiation;
    /**
     * Divide the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    divide(irradiation: Irradiation): Irradiation;
    /**
     * Modulo the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    modulo(irradiation: Irradiation): Irradiation;
    /**
     * Pow the given Irradiation with the current Irradiation.
     * @param irradiation The other Irradiation.
     * @returns A new Irradiation instance with the results.
     */
    pow(irradiation: Irradiation): Irradiation;
}
//# sourceMappingURL=irradiation.g.d.ts.map