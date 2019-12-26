export enum ElectricPotentialUnits {
    Volts,
    Microvolt,
    Kilovolt,
    Megavolt
}

export class ElectricPotential {
    private value: number;
    private voltsLazy: number | null = null;
    private microvoltLazy: number | null = null;
    private kilovoltLazy: number | null = null;
    private megavoltLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricPotentialUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Volts(): number {
        if(this.voltsLazy !== null){
            return this.voltsLazy;
        }
        return this.voltsLazy = this.convertFromBase(ElectricPotentialUnits.Volts);
    }

    public get Microvolt(): number {
        if(this.microvoltLazy !== null){
            return this.microvoltLazy;
        }
        return this.microvoltLazy = this.convertFromBase(ElectricPotentialUnits.Microvolt);
    }

    public get Kilovolt(): number {
        if(this.kilovoltLazy !== null){
            return this.kilovoltLazy;
        }
        return this.kilovoltLazy = this.convertFromBase(ElectricPotentialUnits.Kilovolt);
    }

    public get Megavolt(): number {
        if(this.megavoltLazy !== null){
            return this.megavoltLazy;
        }
        return this.megavoltLazy = this.convertFromBase(ElectricPotentialUnits.Megavolt);
    }

    public static FromVolts(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Volts);
    }

    public static FromMicrovolt(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Microvolt);
    }

    public static FromKilovolt(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Kilovolt);
    }

    public static FromMegavolt(value: number): ElectricPotential {
        return new ElectricPotential(value, ElectricPotentialUnits.Megavolt);
    }

    private convertFromBase(toUnit: ElectricPotentialUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialUnits.Volts:
                return this.value;
            case ElectricPotentialUnits.Microvolt:
                return (this.value) / 0.000001;
            case ElectricPotentialUnits.Kilovolt:
                return (this.value) / 1000;
            case ElectricPotentialUnits.Megavolt:
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
            case ElectricPotentialUnits.Microvolt:
                return (value) * 0.000001;
            case ElectricPotentialUnits.Kilovolt:
                return (value) * 1000;
            case ElectricPotentialUnits.Megavolt:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricPotentialUnits = ElectricPotentialUnits.Volts): string {

        switch (toUnit) {
            
            case ElectricPotentialUnits.Volts:
                return this.Volts + ` V`;
            case ElectricPotentialUnits.Microvolt:
                return this.Microvolt + ` V`;
            case ElectricPotentialUnits.Kilovolt:
                return this.Kilovolt + ` V`;
            case ElectricPotentialUnits.Megavolt:
                return this.Megavolt + ` V`;
        default:
            break;
        }
        return this.value.toString();
    }
}
