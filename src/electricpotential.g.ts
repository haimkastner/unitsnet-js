export enum ElectricPotentialUnits {
    Volts,
    Microvolts,
    Kilovolts,
    Megavolts
}

export class ElectricPotential {
    private value: number;
    private voltsLazy: number | null = null;
    private microvoltsLazy: number | null = null;
    private kilovoltsLazy: number | null = null;
    private megavoltsLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricPotentialUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Volts(): number {
        if(this.voltsLazy !== null){
            return this.voltsLazy;
        }
        return this.voltsLazy = this.convertFromBase(ElectricPotentialUnits.Volts);
    }

    public get Microvolts(): number {
        if(this.microvoltsLazy !== null){
            return this.microvoltsLazy;
        }
        return this.microvoltsLazy = this.convertFromBase(ElectricPotentialUnits.Microvolts);
    }

    public get Kilovolts(): number {
        if(this.kilovoltsLazy !== null){
            return this.kilovoltsLazy;
        }
        return this.kilovoltsLazy = this.convertFromBase(ElectricPotentialUnits.Kilovolts);
    }

    public get Megavolts(): number {
        if(this.megavoltsLazy !== null){
            return this.megavoltsLazy;
        }
        return this.megavoltsLazy = this.convertFromBase(ElectricPotentialUnits.Megavolts);
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
                return (this.value) / 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (this.value) / 1000;
            case ElectricPotentialUnits.Megavolts:
                return (this.value) / 1000000;
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
                return (value) * 0.000001;
            case ElectricPotentialUnits.Kilovolts:
                return (value) * 1000;
            case ElectricPotentialUnits.Megavolts:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
