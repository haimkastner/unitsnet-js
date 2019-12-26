export declare enum ThermalResistanceUnits {
    SquareMeterKelvinsPerKilowatt = 0,
    SquareMeterDegreesCelsiusPerWatt = 1,
    SquareCentimeterKelvinsPerWatt = 2,
    SquareCentimeterHourDegreesCelsiusPerKilocalorie = 3,
    HourSquareFeetDegreesFahrenheitPerBtu = 4
}
export declare class ThermalResistance {
    private value;
    private squaremeterkelvinsperkilowattLazy;
    private squaremeterdegreescelsiusperwattLazy;
    private squarecentimeterkelvinsperwattLazy;
    private squarecentimeterhourdegreescelsiusperkilocalorieLazy;
    private hoursquarefeetdegreesfahrenheitperbtuLazy;
    constructor(value: number, fromUnit: ThermalResistanceUnits);
    get SquareMeterKelvinsPerKilowatt(): number;
    get SquareMeterDegreesCelsiusPerWatt(): number;
    get SquareCentimeterKelvinsPerWatt(): number;
    get SquareCentimeterHourDegreesCelsiusPerKilocalorie(): number;
    get HourSquareFeetDegreesFahrenheitPerBtu(): number;
    static FromSquareMeterKelvinsPerKilowatt(value: number): ThermalResistance;
    static FromSquareMeterDegreesCelsiusPerWatt(value: number): ThermalResistance;
    static FromSquareCentimeterKelvinsPerWatt(value: number): ThermalResistance;
    static FromSquareCentimeterHourDegreesCelsiusPerKilocalorie(value: number): ThermalResistance;
    static FromHourSquareFeetDegreesFahrenheitPerBtu(value: number): ThermalResistance;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: ThermalResistanceUnits): string;
}
//# sourceMappingURL=thermalresistance.g.d.ts.map