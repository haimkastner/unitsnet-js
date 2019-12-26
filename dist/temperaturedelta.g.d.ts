export declare enum TemperatureDeltaUnits {
    Kelvins = 0,
    DegreesCelsius = 1,
    DegreesDelisle = 2,
    DegreesFahrenheit = 3,
    DegreesNewton = 4,
    DegreesRankine = 5,
    DegreesReaumur = 6,
    DegreesRoemer = 7
}
export declare class TemperatureDelta {
    private value;
    private kelvinsLazy;
    private degreescelsiusLazy;
    private degreesdelisleLazy;
    private degreesfahrenheitLazy;
    private degreesnewtonLazy;
    private degreesrankineLazy;
    private degreesreaumurLazy;
    private degreesroemerLazy;
    constructor(value: number, fromUnit: TemperatureDeltaUnits);
    get Kelvins(): number;
    get DegreesCelsius(): number;
    get DegreesDelisle(): number;
    get DegreesFahrenheit(): number;
    get DegreesNewton(): number;
    get DegreesRankine(): number;
    get DegreesReaumur(): number;
    get DegreesRoemer(): number;
    static FromKelvins(value: number): TemperatureDelta;
    static FromDegreesCelsius(value: number): TemperatureDelta;
    static FromDegreesDelisle(value: number): TemperatureDelta;
    static FromDegreesFahrenheit(value: number): TemperatureDelta;
    static FromDegreesNewton(value: number): TemperatureDelta;
    static FromDegreesRankine(value: number): TemperatureDelta;
    static FromDegreesReaumur(value: number): TemperatureDelta;
    static FromDegreesRoemer(value: number): TemperatureDelta;
    private convertFromBase;
    private convertToBase;
}
//# sourceMappingURL=temperaturedelta.g.d.ts.map