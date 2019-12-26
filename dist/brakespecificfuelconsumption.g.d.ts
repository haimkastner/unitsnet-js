/** BrakeSpecificFuelConsumptionUnits enumeration */
export declare enum BrakeSpecificFuelConsumptionUnits {
    /** */
    GramsPerKiloWattHour = 0,
    /** */
    KilogramsPerJoule = 1,
    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    PoundsPerMechanicalHorsepowerHour = 2
}
/** Brake specific fuel consumption (BSFC) is a measure of the fuel efficiency of any prime mover that burns fuel and produces rotational, or shaft, power. It is typically used for comparing the efficiency of internal combustion engines with a shaft output. */
export declare class BrakeSpecificFuelConsumption {
    private value;
    private gramsperkilowatthourLazy;
    private kilogramsperjouleLazy;
    private poundspermechanicalhorsepowerhourLazy;
    /**
     * Create a new BrakeSpecificFuelConsumption.
     * @param value The value.
     * @param fromUnit The ‘BrakeSpecificFuelConsumption’ unit to create from.
     */
    constructor(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits);
    /**
     * The base value of BrakeSpecificFuelConsumption is KilogramPerJoule.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get GramsPerKiloWattHour(): number;
    /** */
    get KilogramsPerJoule(): number;
    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    get PoundsPerMechanicalHorsepowerHour(): number;
    /**
     * Create a new BrakeSpecificFuelConsumption instance from a GramsPerKiloWattHour
     *
     * @param value The unit as GramsPerKiloWattHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    static FromGramsPerKiloWattHour(value: number): BrakeSpecificFuelConsumption;
    /**
     * Create a new BrakeSpecificFuelConsumption instance from a KilogramsPerJoule
     *
     * @param value The unit as KilogramsPerJoule to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    static FromKilogramsPerJoule(value: number): BrakeSpecificFuelConsumption;
    /**
     * Create a new BrakeSpecificFuelConsumption instance from a PoundsPerMechanicalHorsepowerHour
     * The pound per horse power hour uses mechanical horse power and the imperial pound
     * @param value The unit as PoundsPerMechanicalHorsepowerHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    static FromPoundsPerMechanicalHorsepowerHour(value: number): BrakeSpecificFuelConsumption;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the BrakeSpecificFuelConsumption to string.
     * Note! the default format for BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the BrakeSpecificFuelConsumption.
     * @returns The string format of the BrakeSpecificFuelConsumption.
     */
    toString(toUnit?: BrakeSpecificFuelConsumptionUnits): string;
}
//# sourceMappingURL=brakespecificfuelconsumption.g.d.ts.map