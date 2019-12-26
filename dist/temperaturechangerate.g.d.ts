export declare enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond = 0,
    DegreesCelsiusPerMinute = 1,
    NanodegreesCelsiusPerSecond = 2,
    MicrodegreesCelsiusPerSecond = 3,
    CentidegreesCelsiusPerSecond = 4,
    DecidegreesCelsiusPerSecond = 5,
    DecadegreesCelsiusPerSecond = 6,
    HectodegreesCelsiusPerSecond = 7,
    KilodegreesCelsiusPerSecond = 8
}
export declare class TemperatureChangeRate {
    private value;
    private degreescelsiuspersecondLazy;
    private degreescelsiusperminuteLazy;
    private nanodegreescelsiuspersecondLazy;
    private microdegreescelsiuspersecondLazy;
    private centidegreescelsiuspersecondLazy;
    private decidegreescelsiuspersecondLazy;
    private decadegreescelsiuspersecondLazy;
    private hectodegreescelsiuspersecondLazy;
    private kilodegreescelsiuspersecondLazy;
    constructor(value: number, fromUnit: TemperatureChangeRateUnits);
    get DegreesCelsiusPerSecond(): number;
    get DegreesCelsiusPerMinute(): number;
    get NanodegreesCelsiusPerSecond(): number;
    get MicrodegreesCelsiusPerSecond(): number;
    get CentidegreesCelsiusPerSecond(): number;
    get DecidegreesCelsiusPerSecond(): number;
    get DecadegreesCelsiusPerSecond(): number;
    get HectodegreesCelsiusPerSecond(): number;
    get KilodegreesCelsiusPerSecond(): number;
    static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate;
    static FromNanodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromMicrodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromCentidegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDecidegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDecadegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromHectodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromKilodegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TemperatureChangeRateUnits): string;
}
//# sourceMappingURL=temperaturechangerate.g.d.ts.map