export enum ApparentEnergyUnits {
    VoltampereHours,
    KilovoltampereHours,
    MegavoltampereHours
}

export class ApparentEnergy {
    private value: number;
    private voltamperehoursLazy: number | null = null;
    private kilovoltamperehoursLazy: number | null = null;
    private megavoltamperehoursLazy: number | null = null;

    public constructor(value: number, fromUnit: ApparentEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltampereHours(): number {
        if(this.voltamperehoursLazy !== null){
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }

    public get KilovoltampereHours(): number {
        if(this.kilovoltamperehoursLazy !== null){
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHours);
    }

    public get MegavoltampereHours(): number {
        if(this.megavoltamperehoursLazy !== null){
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHours);
    }

    public static FromVoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }

    public static FromKilovoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHours);
    }

    public static FromMegavoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHours);
    }

    private convertFromBase(toUnit: ApparentEnergyUnits): number {
        switch (toUnit) {
                
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ApparentEnergyUnits): number {
        switch (fromUnit) {
                
            case ApparentEnergyUnits.VoltampereHours:
                return value;
            case ApparentEnergyUnits.KilovoltampereHours:
                return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ApparentEnergyUnits = ApparentEnergyUnits.VoltampereHours): string {

        switch (toUnit) {
            
            case ApparentEnergyUnits.VoltampereHours:
                return this.VoltampereHours + ` VAh`;
            case ApparentEnergyUnits.KilovoltampereHours:
                return this.KilovoltampereHours + ` VAh`;
            case ApparentEnergyUnits.MegavoltampereHours:
                return this.MegavoltampereHours + ` VAh`;
        default:
            break;
        }
        return this.value.toString();
    }
}
