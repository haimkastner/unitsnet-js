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
     */
    constructor(value: number, fromUnit: IrradiationUnits);
    /**
     * The base value of Irradiation is JoulePerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
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
}
//# sourceMappingURL=irradiation.g.d.ts.map