export enum ElectricPotentialAcUnits {
    VoltsAc,
    MicrovoltsAc,
    KilovoltsAc,
    MegavoltsAc
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

    public get MicrovoltsAc(): number {
        if(this.microvoltsacLazy !== null){
            return this.microvoltsacLazy;
        }
        return this.microvoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltsAc);
    }

    public get KilovoltsAc(): number {
        if(this.kilovoltsacLazy !== null){
            return this.kilovoltsacLazy;
        }
        return this.kilovoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltsAc);
    }

    public get MegavoltsAc(): number {
        if(this.megavoltsacLazy !== null){
            return this.megavoltsacLazy;
        }
        return this.megavoltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltsAc);
    }

    public static FromVoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }

    public static FromMicrovoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltsAc);
    }

    public static FromKilovoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltsAc);
    }

    public static FromMegavoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltsAc);
    }

    private convertFromBase(toUnit: ElectricPotentialAcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
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
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricPotentialAcUnits = ElectricPotentialAcUnits.VoltsAc): string {

        switch (toUnit) {
            
            case ElectricPotentialAcUnits.VoltsAc:
                return this.VoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MicrovoltsAc:
                return this.MicrovoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.KilovoltsAc:
                return this.KilovoltsAc + ` Vac`;
            case ElectricPotentialAcUnits.MegavoltsAc:
                return this.MegavoltsAc + ` Vac`;
        default:
            break;
        }
        return this.value.toString();
    }
}
