export enum ElectricPotentialDcUnits {
    VoltsDc,
    Microvoltsdc,
    Kilovoltsdc,
    Megavoltsdc
}

export class ElectricPotentialDc {
    private value: number;

    public constructor(value: number, fromUnit: ElectricPotentialDcUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsDc(): number {
        return this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }

    public get Microvoltsdc(): number {
        return this.convertFromBase(ElectricPotentialDcUnits.Microvoltsdc);
    }

    public get Kilovoltsdc(): number {
        return this.convertFromBase(ElectricPotentialDcUnits.Kilovoltsdc);
    }

    public get Megavoltsdc(): number {
        return this.convertFromBase(ElectricPotentialDcUnits.Megavoltsdc);
    }

    public static FromVoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }

    public static FromMicrovoltsdc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.Microvoltsdc);
    }

    public static FromKilovoltsdc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.Kilovoltsdc);
    }

    public static FromMegavoltsdc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.Megavoltsdc);
    }

    private convertFromBase(toUnit: ElectricPotentialDcUnits): number {

                switch (toUnit) {
                    
                case ElectricPotentialDcUnits.VoltsDc:
                    return this.value;
                
                case ElectricPotentialDcUnits.Microvoltsdc:
                    return (this.value) * 0.000001;
                
                case ElectricPotentialDcUnits.Kilovoltsdc:
                    return (this.value) * 1000;
                
                case ElectricPotentialDcUnits.Megavoltsdc:
                    return (this.value) * 1000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialDcUnits): number {

                switch (fromUnit) {
                    
                case ElectricPotentialDcUnits.VoltsDc:
                    return value;
                
                case ElectricPotentialDcUnits.Microvoltsdc:
                    return (value) / 0.000001;
                
                case ElectricPotentialDcUnits.Kilovoltsdc:
                    return (value) / 1000;
                
                case ElectricPotentialDcUnits.Megavoltsdc:
                    return (value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
