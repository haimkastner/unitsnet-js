export declare enum ElectricCurrentDensityUnits {
    AmperesPerSquareMeter = 0,
    AmperesPerSquareInch = 1,
    AmperesPerSquareFoot = 2
}
export declare class ElectricCurrentDensity {
    private value;
    constructor(value: number, fromUnit: ElectricCurrentDensityUnits);
    get AmperesPerSquareMeter(): number;
    get AmperesPerSquareInch(): number;
    get AmperesPerSquareFoot(): number;
    static FromAmperesPerSquareMeter(value: number): ElectricCurrentDensity;
    static FromAmperesPerSquareInch(value: number): ElectricCurrentDensity;
    static FromAmperesPerSquareFoot(value: number): ElectricCurrentDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electriccurrentdensity.g.d.ts.map