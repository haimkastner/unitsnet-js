export declare enum BrakeSpecificFuelConsumptionUnits {
    GramsPerKiloWattHour = 0,
    KilogramsPerJoule = 1,
    PoundsPerMechanicalHorsepowerHour = 2
}
export declare class BrakeSpecificFuelConsumption {
    private value;
    private gramsperkilowatthourLazy;
    private kilogramsperjouleLazy;
    private poundspermechanicalhorsepowerhourLazy;
    constructor(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits);
    get GramsPerKiloWattHour(): number;
    get KilogramsPerJoule(): number;
    get PoundsPerMechanicalHorsepowerHour(): number;
    static FromGramsPerKiloWattHour(value: number): BrakeSpecificFuelConsumption;
    static FromKilogramsPerJoule(value: number): BrakeSpecificFuelConsumption;
    static FromPoundsPerMechanicalHorsepowerHour(value: number): BrakeSpecificFuelConsumption;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: BrakeSpecificFuelConsumptionUnits): string;
}
//# sourceMappingURL=brakespecificfuelconsumption.g.d.ts.map