export enum ElectricPotentialAcUnits {
    VoltsAc,
    Microvoltsac,
    Kilovoltsac,
    Megavoltsac
}

export class ElectricPotentialAc {
    private value: number;
    private voltsacLazy: number | null = null;
    private microvoltsacLazy: number | null = null;
    private kilovoltsacLazy: number | null = null;
    private megavoltsacLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricPotentialAcUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsAc(): number {
        if(this.voltsacLazy !== null){
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }

    public get Microvoltsac(): number {
        if(this.microvoltsacLazy !== null){
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.Microvoltsac);
    }

    public get Kilovoltsac(): number {
        if(this.kilovoltsacLazy !== null){
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.Kilovoltsac);
    }

    public get Megavoltsac(): number {
        if(this.megavoltsacLazy !== null){
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.Megavoltsac);
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

    private convertToBase(value: number, fromUnit: ElectricPotentialAcUnits): number {
        switch (fromUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return value;
            case ElectricPotentialAcUnits.Microvoltsac:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.Kilovoltsac:
                return (value) * 1000;
            case ElectricPotentialAcUnits.Megavoltsac:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
