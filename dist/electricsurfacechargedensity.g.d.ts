export declare enum ElectricSurfaceChargeDensityUnits {
    CoulombsPerSquareMeter = 0,
    CoulombsPerSquareCentimeter = 1,
    CoulombsPerSquareInch = 2
}
export declare class ElectricSurfaceChargeDensity {
    private value;
    constructor(value: number, fromUnit: ElectricSurfaceChargeDensityUnits);
    get CoulombsPerSquareMeter(): number;
    get CoulombsPerSquareCentimeter(): number;
    get CoulombsPerSquareInch(): number;
    static FromCoulombsPerSquareMeter(value: number): ElectricSurfaceChargeDensity;
    static FromCoulombsPerSquareCentimeter(value: number): ElectricSurfaceChargeDensity;
    static FromCoulombsPerSquareInch(value: number): ElectricSurfaceChargeDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricsurfacechargedensity.g.d.ts.map