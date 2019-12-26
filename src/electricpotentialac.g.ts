export enum ElectricPotentialAcUnits {
    VoltsAc,
    MicrovoltAc,
    KilovoltAc,
    MegavoltAc
}

export class ElectricPotentialAc {
    private value: number;
    private voltsacLazy: number | null = null;
    private microvoltacLazy: number | null = null;
    private kilovoltacLazy: number | null = null;
    private megavoltacLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricPotentialAcUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsAc(): number {
        if(this.voltsacLazy !== null){
            return this.voltsacLazy;
        }
        return this.voltsacLazy = this.convertFromBase(ElectricPotentialAcUnits.VoltsAc);
    }

    public get MicrovoltAc(): number {
        if(this.microvoltacLazy !== null){
            return this.microvoltacLazy;
        }
        return this.microvoltacLazy = this.convertFromBase(ElectricPotentialAcUnits.MicrovoltAc);
    }

    public get KilovoltAc(): number {
        if(this.kilovoltacLazy !== null){
            return this.kilovoltacLazy;
        }
        return this.kilovoltacLazy = this.convertFromBase(ElectricPotentialAcUnits.KilovoltAc);
    }

    public get MegavoltAc(): number {
        if(this.megavoltacLazy !== null){
            return this.megavoltacLazy;
        }
        return this.megavoltacLazy = this.convertFromBase(ElectricPotentialAcUnits.MegavoltAc);
    }

    public static FromVoltsAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.VoltsAc);
    }

    public static FromMicrovoltAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MicrovoltAc);
    }

    public static FromKilovoltAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.KilovoltAc);
    }

    public static FromMegavoltAc(value: number): ElectricPotentialAc {
        return new ElectricPotentialAc(value, ElectricPotentialAcUnits.MegavoltAc);
    }

    private convertFromBase(toUnit: ElectricPotentialAcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialAcUnits.VoltsAc:
                return this.value;
            case ElectricPotentialAcUnits.MicrovoltAc:
                return (this.value) / 0.000001;
            case ElectricPotentialAcUnits.KilovoltAc:
                return (this.value) / 1000;
            case ElectricPotentialAcUnits.MegavoltAc:
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
            case ElectricPotentialAcUnits.MicrovoltAc:
                return (value) * 0.000001;
            case ElectricPotentialAcUnits.KilovoltAc:
                return (value) * 1000;
            case ElectricPotentialAcUnits.MegavoltAc:
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
            case ElectricPotentialAcUnits.MicrovoltAc:
                return this.MicrovoltAc + ` Vac`;
            case ElectricPotentialAcUnits.KilovoltAc:
                return this.KilovoltAc + ` Vac`;
            case ElectricPotentialAcUnits.MegavoltAc:
                return this.MegavoltAc + ` Vac`;
        default:
            break;
        }
        return this.value.toString();
    }
}
