export declare enum TemperatureChangeRateUnits {
    DegreesCelsiusPerSecond = 0,
    DegreesCelsiusPerMinute = 1,
    Nanodegreescelsiuspersecond = 2,
    Microdegreescelsiuspersecond = 3,
    Centidegreescelsiuspersecond = 4,
    Decidegreescelsiuspersecond = 5,
    Decadegreescelsiuspersecond = 6,
    Hectodegreescelsiuspersecond = 7,
    Kilodegreescelsiuspersecond = 8
}
export declare class TemperatureChangeRate {
    private value;
    constructor(value: number, fromUnit: TemperatureChangeRateUnits);
    get DegreesCelsiusPerSecond(): number;
    get DegreesCelsiusPerMinute(): number;
    get Nanodegreescelsiuspersecond(): number;
    get Microdegreescelsiuspersecond(): number;
    get Centidegreescelsiuspersecond(): number;
    get Decidegreescelsiuspersecond(): number;
    get Decadegreescelsiuspersecond(): number;
    get Hectodegreescelsiuspersecond(): number;
    get Kilodegreescelsiuspersecond(): number;
    static FromDegreesCelsiusPerSecond(value: number): TemperatureChangeRate;
    static FromDegreesCelsiusPerMinute(value: number): TemperatureChangeRate;
    static FromNanodegreescelsiuspersecond(value: number): TemperatureChangeRate;
    static FromMicrodegreescelsiuspersecond(value: number): TemperatureChangeRate;
    static FromCentidegreescelsiuspersecond(value: number): TemperatureChangeRate;
    static FromDecidegreescelsiuspersecond(value: number): TemperatureChangeRate;
    static FromDecadegreescelsiuspersecond(value: number): TemperatureChangeRate;
    static FromHectodegreescelsiuspersecond(value: number): TemperatureChangeRate;
    static FromKilodegreescelsiuspersecond(value: number): TemperatureChangeRate;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=temperaturechangerate.g.d.ts.map