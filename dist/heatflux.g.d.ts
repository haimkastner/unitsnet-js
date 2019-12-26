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
    NanowattsPerSquareMeter = 11,
    MicrowattsPerSquareMeter = 12,
    CentiwattsPerSquareMeter = 13,
    DeciwattsPerSquareMeter = 14,
    KilowattsPerSquareMeter = 15,
    KilocaloriesPerSecondSquareCentimeter = 16
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
    get NanowattsPerSquareMeter(): number;
    get MicrowattsPerSquareMeter(): number;
    get CentiwattsPerSquareMeter(): number;
    get DeciwattsPerSquareMeter(): number;
    get KilowattsPerSquareMeter(): number;
    get KilocaloriesPerSecondSquareCentimeter(): number;
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
    static FromNanowattsPerSquareMeter(value: number): HeatFlux;
    static FromMicrowattsPerSquareMeter(value: number): HeatFlux;
    static FromCentiwattsPerSquareMeter(value: number): HeatFlux;
    static FromDeciwattsPerSquareMeter(value: number): HeatFlux;
    static FromKilowattsPerSquareMeter(value: number): HeatFlux;
    static FromKilocaloriesPerSecondSquareCentimeter(value: number): HeatFlux;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: HeatFluxUnits): string;
}
//# sourceMappingURL=heatflux.g.d.ts.map