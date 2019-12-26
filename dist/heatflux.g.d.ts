export declare enum HeatFluxUnits {
    WattsPerSquareMeter = 0,
    WattsPerSquareInch = 1,
    WattsPerSquareFoot = 2,
    BtusPerSecondSquareInch = 3,
    BtusPerSecondSquareFoot = 4,
    BtusPerMinuteSquareFoot = 5,
    BtusPerHourSquareFoot = 6,
    CaloriesPerSecondSquareCentimeter = 7,
    KilocaloriesPerHourSquareMeter = 8,
    PoundsForcePerFootSecond = 9,
    PoundsPerSecondCubed = 10,
    Nanowattspersquaremeter = 11,
    Microwattspersquaremeter = 12,
    Centiwattspersquaremeter = 13,
    Deciwattspersquaremeter = 14,
    Kilowattspersquaremeter = 15,
    Kilocaloriespersecondsquarecentimeter = 16
}
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
    constructor(value: number, fromUnit: HeatFluxUnits);
    get WattsPerSquareMeter(): number;
    get WattsPerSquareInch(): number;
    get WattsPerSquareFoot(): number;
    get BtusPerSecondSquareInch(): number;
    get BtusPerSecondSquareFoot(): number;
    get BtusPerMinuteSquareFoot(): number;
    get BtusPerHourSquareFoot(): number;
    get CaloriesPerSecondSquareCentimeter(): number;
    get KilocaloriesPerHourSquareMeter(): number;
    get PoundsForcePerFootSecond(): number;
    get PoundsPerSecondCubed(): number;
    get Nanowattspersquaremeter(): number;
    get Microwattspersquaremeter(): number;
    get Centiwattspersquaremeter(): number;
    get Deciwattspersquaremeter(): number;
    get Kilowattspersquaremeter(): number;
    get Kilocaloriespersecondsquarecentimeter(): number;
    static FromWattsPerSquareMeter(value: number): HeatFlux;
    static FromWattsPerSquareInch(value: number): HeatFlux;
    static FromWattsPerSquareFoot(value: number): HeatFlux;
    static FromBtusPerSecondSquareInch(value: number): HeatFlux;
    static FromBtusPerSecondSquareFoot(value: number): HeatFlux;
    static FromBtusPerMinuteSquareFoot(value: number): HeatFlux;
    static FromBtusPerHourSquareFoot(value: number): HeatFlux;
    static FromCaloriesPerSecondSquareCentimeter(value: number): HeatFlux;
    static FromKilocaloriesPerHourSquareMeter(value: number): HeatFlux;
    static FromPoundsForcePerFootSecond(value: number): HeatFlux;
    static FromPoundsPerSecondCubed(value: number): HeatFlux;
    static FromNanowattspersquaremeter(value: number): HeatFlux;
    static FromMicrowattspersquaremeter(value: number): HeatFlux;
    static FromCentiwattspersquaremeter(value: number): HeatFlux;
    static FromDeciwattspersquaremeter(value: number): HeatFlux;
    static FromKilowattspersquaremeter(value: number): HeatFlux;
    static FromKilocaloriespersecondsquarecentimeter(value: number): HeatFlux;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=heatflux.g.d.ts.map