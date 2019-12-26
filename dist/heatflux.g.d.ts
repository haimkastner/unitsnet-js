/** HeatFluxUnits enumeration */
export declare enum HeatFluxUnits {
    /** */
    WattsPerSquareMeter = 0,
    /** */
    WattsPerSquareInch = 1,
    /** */
    WattsPerSquareFoot = 2,
    /** */
    BtusPerSecondSquareInch = 3,
    /** */
    BtusPerSecondSquareFoot = 4,
    /** */
    BtusPerMinuteSquareFoot = 5,
    /** */
    BtusPerHourSquareFoot = 6,
    /** */
    CaloriesPerSecondSquareCentimeter = 7,
    /** */
    KilocaloriesPerHourSquareMeter = 8,
    /** */
    PoundsForcePerFootSecond = 9,
    /** */
    PoundsPerSecondCubed = 10,
    /** */
    NanowattsPerSquareMeter = 11,
    /** */
    MicrowattsPerSquareMeter = 12,
    /** */
    CentiwattsPerSquareMeter = 13,
    /** */
    DeciwattsPerSquareMeter = 14,
    /** */
    KilowattsPerSquareMeter = 15,
    /** */
    KilocaloriesPerSecondSquareCentimeter = 16
}
/** Heat flux is the flow of energy per unit of area per unit of time */
export declare class HeatFlux {
    private value;
    private wattspersquaremeterLazy;
    private wattspersquareinchLazy;
    private wattspersquarefootLazy;
    private btuspersecondsquareinchLazy;
    private btuspersecondsquarefootLazy;
    private btusperminutesquarefootLazy;
    private btusperhoursquarefootLazy;
    private caloriespersecondsquarecentimeterLazy;
    private kilocaloriesperhoursquaremeterLazy;
    private poundsforceperfootsecondLazy;
    private poundspersecondcubedLazy;
    private nanowattspersquaremeterLazy;
    private microwattspersquaremeterLazy;
    private centiwattspersquaremeterLazy;
    private deciwattspersquaremeterLazy;
    private kilowattspersquaremeterLazy;
    private kilocaloriespersecondsquarecentimeterLazy;
    /**
     * Create a new HeatFlux.
     * @param value The value.
     * @param fromUnit The ‘HeatFlux’ unit to create from.
     */
    constructor(value: number, fromUnit: HeatFluxUnits);
    /**
     * The base value of HeatFlux is WattPerSquareMeter.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get WattsPerSquareMeter(): number;
    /** */
    get WattsPerSquareInch(): number;
    /** */
    get WattsPerSquareFoot(): number;
    /** */
    get BtusPerSecondSquareInch(): number;
    /** */
    get BtusPerSecondSquareFoot(): number;
    /** */
    get BtusPerMinuteSquareFoot(): number;
    /** */
    get BtusPerHourSquareFoot(): number;
    /** */
    get CaloriesPerSecondSquareCentimeter(): number;
    /** */
    get KilocaloriesPerHourSquareMeter(): number;
    /** */
    get PoundsForcePerFootSecond(): number;
    /** */
    get PoundsPerSecondCubed(): number;
    /** */
    get NanowattsPerSquareMeter(): number;
    /** */
    get MicrowattsPerSquareMeter(): number;
    /** */
    get CentiwattsPerSquareMeter(): number;
    /** */
    get DeciwattsPerSquareMeter(): number;
    /** */
    get KilowattsPerSquareMeter(): number;
    /** */
    get KilocaloriesPerSecondSquareCentimeter(): number;
    /**
     * Create a new HeatFlux instance from a WattsPerSquareMeter
     *
     * @param value The unit as WattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromWattsPerSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a WattsPerSquareInch
     *
     * @param value The unit as WattsPerSquareInch to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromWattsPerSquareInch(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a WattsPerSquareFoot
     *
     * @param value The unit as WattsPerSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromWattsPerSquareFoot(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a BtusPerSecondSquareInch
     *
     * @param value The unit as BtusPerSecondSquareInch to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerSecondSquareInch(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a BtusPerSecondSquareFoot
     *
     * @param value The unit as BtusPerSecondSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerSecondSquareFoot(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a BtusPerMinuteSquareFoot
     *
     * @param value The unit as BtusPerMinuteSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerMinuteSquareFoot(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a BtusPerHourSquareFoot
     *
     * @param value The unit as BtusPerHourSquareFoot to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromBtusPerHourSquareFoot(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a CaloriesPerSecondSquareCentimeter
     *
     * @param value The unit as CaloriesPerSecondSquareCentimeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromCaloriesPerSecondSquareCentimeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a KilocaloriesPerHourSquareMeter
     *
     * @param value The unit as KilocaloriesPerHourSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromKilocaloriesPerHourSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a PoundsForcePerFootSecond
     *
     * @param value The unit as PoundsForcePerFootSecond to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromPoundsForcePerFootSecond(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a PoundsPerSecondCubed
     *
     * @param value The unit as PoundsPerSecondCubed to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromPoundsPerSecondCubed(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a NanowattsPerSquareMeter
     *
     * @param value The unit as NanowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromNanowattsPerSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a MicrowattsPerSquareMeter
     *
     * @param value The unit as MicrowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromMicrowattsPerSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a CentiwattsPerSquareMeter
     *
     * @param value The unit as CentiwattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromCentiwattsPerSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a DeciwattsPerSquareMeter
     *
     * @param value The unit as DeciwattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromDeciwattsPerSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a KilowattsPerSquareMeter
     *
     * @param value The unit as KilowattsPerSquareMeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromKilowattsPerSquareMeter(value: number): HeatFlux;
    /**
     * Create a new HeatFlux instance from a KilocaloriesPerSecondSquareCentimeter
     *
     * @param value The unit as KilocaloriesPerSecondSquareCentimeter to create a new HeatFlux from.
     * @returns The new HeatFlux instance.
     */
    static FromKilocaloriesPerSecondSquareCentimeter(value: number): HeatFlux;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the HeatFlux to string.
     * Note! the default format for HeatFlux is WattsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the HeatFlux.
     * @returns The string format of the HeatFlux.
     */
    toString(toUnit?: HeatFluxUnits): string;
}
//# sourceMappingURL=heatflux.g.d.ts.map