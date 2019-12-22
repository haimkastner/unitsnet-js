export enum ElectricPotentialAcUnits {
    VoltsAc,
    Microvoltsac,
    Kilovoltsac,
    Megavoltsac
}

export class ElectricPotentialAc {
    private value: number;

    public constructor(value: number, fromUnit: ElectricPotentialAcUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsAc(): number {
        return this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }

    public get Microvoltsac(): number {
        return this.convertFromBase(ElectricPotentialAcUnits.Microvoltsac);
    }

    public get Kilovoltsac(): number {
        return this.convertFromBase(ElectricPotentialAcUnits.Kilovoltsac);
    }

    public get Megavoltsac(): number {
        return this.convertFromBase(ElectricPotentialAcUnits.Megavoltsac);
    }

    public static FromVoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }

    public static FromMicrovoltsac(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.Microvoltsac);
    }

    public static FromKilovoltsac(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.Kilovoltsac);
    }

    public static FromMegavoltsac(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.Megavoltsac);
    }

    private convertFromBase(toUnit: ElectricPotentialAcUnits): number {

            switch (toUnit) {
                
                case ElectricPotentialAcUnits.VoltsAc:
                    return this.value;
                
                case ElectricPotentialAcUnits.Microvoltsac:
                    return (this.value) * 0.000001;
                
                case ElectricPotentialAcUnits.Kilovoltsac:
                    return (this.value) * 1000;
                
                case ElectricPotentialAcUnits.Megavoltsac:
                    return (this.value) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialAcUnits): number {

                switch (fromUnit) {
                    
                case ElectricPotentialAcUnits.VoltsAc:
                    return this.value;
                
                case ElectricPotentialAcUnits.Microvoltsac:
                    return (this.value) / 0.000001;
                
                case ElectricPotentialAcUnits.Kilovoltsac:
                    return (this.value) / 1000;
                
                case ElectricPotentialAcUnits.Megavoltsac:
                    return (this.value) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
