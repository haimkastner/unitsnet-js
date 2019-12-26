export declare enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond = 0,
    DegreesCelsiusPerMinute = 1,
    NanodegreeCelsiusPerSecond = 2,
    MicrodegreeCelsiusPerSecond = 3,
    CentidegreeCelsiusPerSecond = 4,
    DecidegreeCelsiusPerSecond = 5,
    DecadegreeCelsiusPerSecond = 6,
    HectodegreeCelsiusPerSecond = 7,
    KilodegreeCelsiusPerSecond = 8
}
export declare class TemperatureChangeRate {
    private value;
    private degreescelsiuspersecondLazy;
    private degreescelsiusperminuteLazy;
    private nanodegreecelsiuspersecondLazy;
    private microdegreecelsiuspersecondLazy;
    private centidegreecelsiuspersecondLazy;
    private decidegreecelsiuspersecondLazy;
    private decadegreecelsiuspersecondLazy;
    private hectodegreecelsiuspersecondLazy;
    private kilodegreecelsiuspersecondLazy;
    constructor(value: number, fromUnit: TemperatureChangeRateUnits);
    get DegreesCelsiusPerSecond(): number;
    get DegreesCelsiusPerMinute(): number;
    get NanodegreeCelsiusPerSecond(): number;
    get MicrodegreeCelsiusPerSecond(): number;
    get CentidegreeCelsiusPerSecond(): number;
    get DecidegreeCelsiusPerSecond(): number;
    get DecadegreeCelsiusPerSecond(): number;
    get HectodegreeCelsiusPerSecond(): number;
    get KilodegreeCelsiusPerSecond(): number;
    static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate;
    static FromNanodegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromMicrodegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromCentidegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDecidegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDecadegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromHectodegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromKilodegreeCelsiusPerSecond(value: number): TemperatureChangeRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TemperatureChangeRateUnits): string;
}
//# sourceMappingURL=temperaturechangerate.g.d.ts.map