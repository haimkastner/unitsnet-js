export declare enum DynamicViscosityUnits {
    NewtonSecondsPerMeterSquared = 0,
    PascalSeconds = 1,
    Poise = 2,
    Reyns = 3,
    PoundsForceSecondPerSquareInch = 4,
    PoundsForceSecondPerSquareFoot = 5,
    Micropascalseconds = 6,
    Centipoise = 7
}
export declare class DynamicViscosity {
    private value;
    private newtonsecondspermetersquaredLazy;
    private pascalsecondsLazy;
    private poiseLazy;
    private reynsLazy;
    private poundsforcesecondpersquareinchLazy;
    private poundsforcesecondpersquarefootLazy;
    private micropascalsecondsLazy;
    private centipoiseLazy;
    constructor(value: number, fromUnit: DynamicViscosityUnits);
    get NewtonSecondsPerMeterSquared(): number;
    get PascalSeconds(): number;
    get Poise(): number;
    get Reyns(): number;
    get PoundsForceSecondPerSquareInch(): number;
    get PoundsForceSecondPerSquareFoot(): number;
    get Micropascalseconds(): number;
    get Centipoise(): number;
    static FromNewtonSecondsPerMeterSquared(value: number): DynamicViscosity;
    static FromPascalSeconds(value: number): DynamicViscosity;
    static FromPoise(value: number): DynamicViscosity;
    static FromReyns(value: number): DynamicViscosity;
    static FromPoundsForceSecondPerSquareInch(value: number): DynamicViscosity;
    static FromPoundsForceSecondPerSquareFoot(value: number): DynamicViscosity;
    static FromMicropascalseconds(value: number): DynamicViscosity;
    static FromCentipoise(value: number): DynamicViscosity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=dynamicviscosity.g.d.ts.map