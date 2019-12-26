export declare enum ElectricChargeDensityUnits {
    CoulombsPerCubicMeter = 0
}
export declare class ElectricChargeDensity {
    private value;
    private coulombspercubicmeterLazy;
    constructor(value: number, fromUnit: ElectricChargeDensityUnits);
    get CoulombsPerCubicMeter(): number;
    static FromCoulombsPerCubicMeter(value: number): ElectricChargeDensity;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=electricchargedensity.g.d.ts.map