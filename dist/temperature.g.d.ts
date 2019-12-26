export declare enum TemperatureUnits {
    Kelvins = 0,
    DegreesCelsius = 1,
    DegreesDelisle = 2,
    DegreesFahrenheit = 3,
    DegreesNewton = 4,
    DegreesRankine = 5,
    DegreesReaumur = 6,
    DegreesRoemer = 7,
    SolarTemperatures = 8
}
export declare class Temperature {
    private value;
    private kelvinsLazy;
    private degreescelsiusLazy;
    private degreesdelisleLazy;
    private degreesfahrenheitLazy;
    private degreesnewtonLazy;
    private degreesrankineLazy;
    private degreesreaumurLazy;
    private degreesroemerLazy;
    private solartemperaturesLazy;
    constructor(value: number, fromUnit: TemperatureUnits);
    get Kelvins(): number;
    get DegreesCelsius(): number;
    get DegreesDelisle(): number;
    get DegreesFahrenheit(): number;
    get DegreesNewton(): number;
    get DegreesRankine(): number;
    get DegreesReaumur(): number;
    get DegreesRoemer(): number;
    get SolarTemperatures(): number;
    static FromKelvins(value: number): Temperature;
    static FromDegreesCelsius(value: number): Temperature;
    static FromDegreesDelisle(value: number): Temperature;
    static FromDegreesFahrenheit(value: number): Temperature;
    static FromDegreesNewton(value: number): Temperature;
    static FromDegreesRankine(value: number): Temperature;
    static FromDegreesReaumur(value: number): Temperature;
    static FromDegreesRoemer(value: number): Temperature;
    static FromSolarTemperatures(value: number): Temperature;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: TemperatureUnits): string;
}
//# sourceMappingURL=temperature.g.d.ts.map