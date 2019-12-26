export enum ApparentEnergyUnits {
    VoltampereHours,
    KilovoltampereHour,
    MegavoltampereHour
}

export class ApparentEnergy {
    private value: number;
    private voltamperehoursLazy: number | null = null;
    private kilovoltamperehourLazy: number | null = null;
    private megavoltamperehourLazy: number | null = null;

    public constructor(value: number, fromUnit: ApparentEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltampereHours(): number {
        if(this.voltamperehoursLazy !== null){
            return this.voltamperehoursLazy;
        }
        return this.voltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }

    public get KilovoltampereHour(): number {
        if(this.kilovoltamperehourLazy !== null){
            return this.kilovoltamperehourLazy;
        }
        return this.kilovoltamperehourLazy = this.convertFromBase(ApparentEnergyUnits.KilovoltampereHour);
    }

    public get MegavoltampereHour(): number {
        if(this.megavoltamperehourLazy !== null){
            return this.megavoltamperehourLazy;
        }
        return this.megavoltamperehourLazy = this.convertFromBase(ApparentEnergyUnits.MegavoltampereHour);
    }

    public static FromVoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }

    public static FromKilovoltampereHour(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.KilovoltampereHour);
    }

    public static FromMegavoltampereHour(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.MegavoltampereHour);
    }

    private convertFromBase(toUnit: ApparentEnergyUnits): number {
        switch (toUnit) {
                
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.KilovoltampereHour:
                return (this.value) / 1000;
            case ApparentEnergyUnits.MegavoltampereHour:
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
            case ApparentEnergyUnits.KilovoltampereHour:
                return (value) * 1000;
            case ApparentEnergyUnits.MegavoltampereHour:
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
            case ApparentEnergyUnits.KilovoltampereHour:
                return this.KilovoltampereHour + ` VAh`;
            case ApparentEnergyUnits.MegavoltampereHour:
                return this.MegavoltampereHour + ` VAh`;
        default:
            break;
        }
        return this.value.toString();
    }
}
