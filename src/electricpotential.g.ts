export enum ElectricPotentialUnits {
    Volts,
    Microvolts,
    Kilovolts,
    Megavolts
}

export class ElectricPotential {
    private value: number;

    public constructor(value: number, fromUnit: ElectricPotentialUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Volts(): number {
        return this.convertFromBase(ElectricPotentialUnits.Volts);
    }

    public get Microvolts(): number {
        return this.convertFromBase(ElectricPotentialUnits.Microvolts);
    }

    public get Kilovolts(): number {
        return this.convertFromBase(ElectricPotentialUnits.Kilovolts);
    }

    public get Megavolts(): number {
        return this.convertFromBase(ElectricPotentialUnits.Megavolts);
    }

    public static FromVolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Volts);
    }

    public static FromMicrovolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Microvolts);
    }

    public static FromKilovolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Kilovolts);
    }

    public static FromMegavolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Megavolts);
    }

    private convertFromBase(toUnit: ElectricPotentialUnits): number {

                switch (toUnit) {
                    
                case ElectricPotentialUnits.Volts:
                    return this.value;
                
                case ElectricPotentialUnits.Microvolts:
                    return (this.value) * 0.000001;
                
                case ElectricPotentialUnits.Kilovolts:
                    return (this.value) * 1000;
                
                case ElectricPotentialUnits.Megavolts:
                    return (this.value) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialUnits): number {

                switch (fromUnit) {
                    
                case ElectricPotentialUnits.Volts:
                    return value;
                
                case ElectricPotentialUnits.Microvolts:
                    return (value) / 0.000001;
                
                case ElectricPotentialUnits.Kilovolts:
                    return (value) / 1000;
                
                case ElectricPotentialUnits.Megavolts:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
