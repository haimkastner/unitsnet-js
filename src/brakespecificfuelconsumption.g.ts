/** BrakeSpecificFuelConsumptionUnits enumeration */
export enum BrakeSpecificFuelConsumptionUnits {
    /** */
    GramsPerKiloWattHour,
    /** */
    KilogramsPerJoule,
    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    PoundsPerMechanicalHorsepowerHour
}

/** Brake specific fuel consumption (BSFC) is a measure of the fuel efficiency of any prime mover that burns fuel and produces rotational, or shaft, power. It is typically used for comparing the efficiency of internal combustion engines with a shaft output. */
export class BrakeSpecificFuelConsumption {
    private value: number;
    private gramsperkilowatthourLazy: number | null = null;
    private kilogramsperjouleLazy: number | null = null;
    private poundspermechanicalhorsepowerhourLazy: number | null = null;

    /**
     * Create a new BrakeSpecificFuelConsumption.
     * @param value The value.
     * @param fromUnit The ‘BrakeSpecificFuelConsumption’ unit to create from.
     */
    public constructor(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of BrakeSpecificFuelConsumption is KilogramPerJoule.
     * This accessor used when need any value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get GramsPerKiloWattHour(): number {
        if(this.gramsperkilowatthourLazy !== null){
            return this.gramsperkilowatthourLazy;
        }
        return this.gramsperkilowatthourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    /** */
    public get KilogramsPerJoule(): number {
        if(this.kilogramsperjouleLazy !== null){
            return this.kilogramsperjouleLazy;
        }
        return this.kilogramsperjouleLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

    /** The pound per horse power hour uses mechanical horse power and the imperial pound */
    public get PoundsPerMechanicalHorsepowerHour(): number {
        if(this.poundspermechanicalhorsepowerhourLazy !== null){
            return this.poundspermechanicalhorsepowerhourLazy;
        }
        return this.poundspermechanicalhorsepowerhourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }

    /**
     * Create a new BrakeSpecificFuelConsumption instance from a GramsPerKiloWattHour
     *
     * @param value The unit as GramsPerKiloWattHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    public static FromGramsPerKiloWattHour(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    /**
     * Create a new BrakeSpecificFuelConsumption instance from a KilogramsPerJoule
     *
     * @param value The unit as KilogramsPerJoule to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    public static FromKilogramsPerJoule(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

    /**
     * Create a new BrakeSpecificFuelConsumption instance from a PoundsPerMechanicalHorsepowerHour
     * The pound per horse power hour uses mechanical horse power and the imperial pound
     * @param value The unit as PoundsPerMechanicalHorsepowerHour to create a new BrakeSpecificFuelConsumption from.
     * @returns The new BrakeSpecificFuelConsumption instance.
     */
    public static FromPoundsPerMechanicalHorsepowerHour(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }

    private convertFromBase(toUnit: BrakeSpecificFuelConsumptionUnits): number {
        switch (toUnit) {
                
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return this.value*3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return this.value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return this.value/1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits): number {
        switch (fromUnit) {
                
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return value/3.6e9;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return value;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return value*1.689659410672e-7;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the BrakeSpecificFuelConsumption to string.
     * Note! the default format for BrakeSpecificFuelConsumption is KilogramsPerJoule.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the BrakeSpecificFuelConsumption.
     * @returns The string format of the BrakeSpecificFuelConsumption.
     */
    public toString(toUnit: BrakeSpecificFuelConsumptionUnits = BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule): string {

        switch (toUnit) {
            
            case BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour:
                return this.GramsPerKiloWattHour + ` g/kWh`;
            case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                return this.KilogramsPerJoule + ` kg/J`;
            case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                return this.PoundsPerMechanicalHorsepowerHour + ` lb/hph`;
        default:
            break;
        }
        return this.value.toString();
    }
}
