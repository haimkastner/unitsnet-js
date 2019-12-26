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
    NanowattPerSquareMeter = 11,
    MicrowattPerSquareMeter = 12,
    CentiwattPerSquareMeter = 13,
    DeciwattPerSquareMeter = 14,
    KilowattPerSquareMeter = 15,
    KilocaloriePerSecondSquareCentimeter = 16
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
    private nanowattpersquaremeterLazy;
    private microwattpersquaremeterLazy;
    private centiwattpersquaremeterLazy;
    private deciwattpersquaremeterLazy;
    private kilowattpersquaremeterLazy;
    private kilocaloriepersecondsquarecentimeterLazy;
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
    get NanowattPerSquareMeter(): number;
    get MicrowattPerSquareMeter(): number;
    get CentiwattPerSquareMeter(): number;
    get DeciwattPerSquareMeter(): number;
    get KilowattPerSquareMeter(): number;
    get KilocaloriePerSecondSquareCentimeter(): number;
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
    static FromNanowattPerSquareMeter(value: number): HeatFlux;
    static FromMicrowattPerSquareMeter(value: number): HeatFlux;
    static FromCentiwattPerSquareMeter(value: number): HeatFlux;
    static FromDeciwattPerSquareMeter(value: number): HeatFlux;
    static FromKilowattPerSquareMeter(value: number): HeatFlux;
    static FromKilocaloriePerSecondSquareCentimeter(value: number): HeatFlux;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: HeatFluxUnits): string;
}
//# sourceMappingURL=heatflux.g.d.ts.map