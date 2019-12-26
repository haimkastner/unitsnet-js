export enum ElectricPotentialDcUnits {
    VoltsDc,
    MicrovoltDc,
    KilovoltDc,
    MegavoltDc
}

export class ElectricPotentialDc {
    private value: number;
    private voltsdcLazy: number | null = null;
    private microvoltdcLazy: number | null = null;
    private kilovoltdcLazy: number | null = null;
    private megavoltdcLazy: number | null = null;

    public constructor(value: number, fromUnit: ElectricPotentialDcUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltsDc(): number {
        if(this.voltsdcLazy !== null){
            return this.voltsdcLazy;
        }
        return this.voltsdcLazy = this.convertFromBase(ElectricPotentialDcUnits.VoltsDc);
    }

    public get MicrovoltDc(): number {
        if(this.microvoltdcLazy !== null){
            return this.microvoltdcLazy;
        }
        return this.microvoltdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MicrovoltDc);
    }

    public get KilovoltDc(): number {
        if(this.kilovoltdcLazy !== null){
            return this.kilovoltdcLazy;
        }
        return this.kilovoltdcLazy = this.convertFromBase(ElectricPotentialDcUnits.KilovoltDc);
    }

    public get MegavoltDc(): number {
        if(this.megavoltdcLazy !== null){
            return this.megavoltdcLazy;
        }
        return this.megavoltdcLazy = this.convertFromBase(ElectricPotentialDcUnits.MegavoltDc);
    }

    public static FromVoltsDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.VoltsDc);
    }

    public static FromMicrovoltDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MicrovoltDc);
    }

    public static FromKilovoltDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.KilovoltDc);
    }

    public static FromMegavoltDc(value: number): ElectricPotentialDc {
        return new ElectricPotentialDc(value, ElectricPotentialDcUnits.MegavoltDc);
    }

    private convertFromBase(toUnit: ElectricPotentialDcUnits): number {
        switch (toUnit) {
                
            case ElectricPotentialDcUnits.VoltsDc:
                return this.value;
            case ElectricPotentialDcUnits.MicrovoltDc:
                return (this.value) / 0.000001;
            case ElectricPotentialDcUnits.KilovoltDc:
                return (this.value) / 1000;
            case ElectricPotentialDcUnits.MegavoltDc:
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
            case ElectricPotentialDcUnits.MicrovoltDc:
                return (value) * 0.000001;
            case ElectricPotentialDcUnits.KilovoltDc:
                return (value) * 1000;
            case ElectricPotentialDcUnits.MegavoltDc:
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
            case ElectricPotentialDcUnits.MicrovoltDc:
                return this.MicrovoltDc + ` Vdc`;
            case ElectricPotentialDcUnits.KilovoltDc:
                return this.KilovoltDc + ` Vdc`;
            case ElectricPotentialDcUnits.MegavoltDc:
                return this.MegavoltDc + ` Vdc`;
        default:
            break;
        }
        return this.value.toString();
    }
}
