export enum BrakeSpecificFuelConsumptionUnits {
    GramsPerKiloWattHour,
    KilogramsPerJoule,
    PoundsPerMechanicalHorsepowerHour
}

export class BrakeSpecificFuelConsumption {
    private value: number;

    public constructor(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get GramsPerKiloWattHour(): number {
        return this.convertFromBase(BrakeSpecificFuelConsumptionUnits.GramsPerKiloWattHour);
    }

    public get KilogramsPerJoule(): number {
        return this.convertFromBase(BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule);
    }

    public get PoundsPerMechanicalHorsepowerHour(): number {
        return this.convertFromBase(BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour);
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
                    return this.value/3.6e9;
                
                case BrakeSpecificFuelConsumptionUnits.KilogramsPerJoule:
                    return this.value;
                
                case BrakeSpecificFuelConsumptionUnits.PoundsPerMechanicalHorsepowerHour:
                    return this.value*1.689659410672e-7;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: BrakeSpecificFuelConsumptionUnits): number {

                switch (fromUnit) {
                    
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
}
