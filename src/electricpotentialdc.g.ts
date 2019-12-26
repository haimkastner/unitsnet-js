export enum ElectricPotentialDcUnits {
    VoltsDc,
    MicrovoltsDc,
    KilovoltsDc,
    MegavoltsDc
}

export class ElectricPotentialDc {
    private value: number;
    private voltsdcLazy: number | null = null;
    private microvoltsdcLazy: number | null = null;
    private kilovoltsdcLazy: number | null = null;
    private megavoltsdcLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricPotentialDcUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsDc(): number {
        if(this.voltsdcLazy !== null){
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }

    public get MicrovoltsDc(): number {
        if(this.microvoltsdcLazy !== null){
            return this.microvoltsdcLazy;
        }
        return this.microvoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltsDc);
    }

    public get KilovoltsDc(): number {
        if(this.kilovoltsdcLazy !== null){
            return this.kilovoltsdcLazy;
        }
        return this.kilovoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltsDc);
    }

    public get MegavoltsDc(): number {
        if(this.megavoltsdcLazy !== null){
            return this.megavoltsdcLazy;
        }
        return this.megavoltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltsDc);
    }

    public static FromVoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }

    public static FromMicrovoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltsDc);
    }

    public static FromKilovoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltsDc);
    }

    public static FromMegavoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltsDc);
    }

    private convertFromBase(toUnit: ElectricPotentialDcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ElectricPotentialDcUnits): number {
        switch (fromUnit) {
                
            case ElectricPotentialDcUnits.VoltsDc:
                return value;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return (value) * 0.000001;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ElectricPotentialDcUnits = ElectricPotentialDcUnits.VoltsDc): string {

        switch (toUnit) {
            
            case ElectricPotentialDcUnits.VoltsDc:
                return this.VoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.MicrovoltsDc:
                return this.MicrovoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.KilovoltsDc:
                return this.KilovoltsDc + ` Vdc`;
            case ElectricPotentialDcUnits.MegavoltsDc:
                return this.MegavoltsDc + ` Vdc`;
        default:
            break;
        }
        return this.value.toString();
    }
}
