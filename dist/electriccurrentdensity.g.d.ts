export declare enum ElectricCurrentDensityUnits {
    AmperesPerSquareMeter = 0,
    AmperesPerSquareInch = 1,
    AmperesPerSquareFoot = 2
}
export declare class ElectricCurrentDensity {
    private value;
    private amperespersquaremeterLazy;
    private amperespersquareinchLazy;
    private amperespersquarefootLazy;
    constructor(value: number, fromUnit: ElectricCurrentDensityUnits);
    get AmperesPerSquareMeter(): number;
    get AmperesPerSquareInch(): number;
    get AmperesPerSquareFoot(): number;
    static FromAmperesPerSquareMeter(value: number): ElectricCurrentDensity;
    static FromAmperesPerSquareInch(value: number): ElectricCurrentDensity;
    static FromAmperesPerSquareFoot(value: number): ElectricCurrentDensity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ElectricCurrentDensityUnits): string;
}
//# sourceMappingURL=electriccurrentdensity.g.d.ts.map