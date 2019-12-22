export declare enum LapseRateUnits {
    DegreesCelciusPerKilometer = 0
}
export declare class LapseRate {
    private value;
    constructor(value: number, fromUnit: LapseRateUnits);
    get DegreesCelciusPerKilometer(): number;
    static FromDegreesCelciusPerKilometer(value: number): LapseRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=lapserate.g.d.ts.map