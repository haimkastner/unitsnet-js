export enum BrakeSpecificFuelConsumptionUnits {
    GramsPerKiloWattHour,
    KilogramsPerJoule,
    PoundsPerMechanicalHorsepowerHour
}

export class BrakeSpecificFuelConsumption {
    private value: number;
    private gramsperkilowatthourLazy: number | null = null;
    private kilogramsperjouleLazy: number | null = null;
    private poundspermechanicalhorsepowerhourLazy: number | null = null;

    public constructor(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerKiloWattHour(): number {
        if(this.gramsperkilowatthourLazy !== null){
            return this.gramsperkilowatthourLazy;
        }
        return this.gramsperkilowatthourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    public get KilogramsPerJoule(): number {
        if(this.kilogramsperjouleLazy !== null){
            return this.kilogramsperjouleLazy;
        }
        return this.kilogramsperjouleLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

    public get PoundsPerMechanicalHorsepowerHour(): number {
        if(this.poundspermechanicalhorsepowerhourLazy !== null){
            return this.poundspermechanicalhorsepowerhourLazy;
        }
        return this.poundspermechanicalhorsepowerhourLazy = this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
    }

    public static FromGramsPerKiloWattHour(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    public static FromKilogramsPerJoule(value: number): BrakeSpecificFuelConsumption {
        return new BrakeSpecificFuelConsumption(value, BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

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
