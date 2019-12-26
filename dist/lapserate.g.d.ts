export declare enum LapseRateUnits {
    DegreesCelciusPerKilometer = 0
}
export declare class LapseRate {
    private value;
    private degreescelciusperkilometerLazy;
    constructor(value: number, fromUnit: LapseRateUnits);
    get DegreesCelciusPerKilometer(): number;
    static FromDegreesCelciusPerKilometer(value: number): LapseRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: LapseRateUnits): string;
}
//# sourceMappingURL=lapserate.g.d.ts.map