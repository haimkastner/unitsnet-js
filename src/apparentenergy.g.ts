export enum ApparentEnergyUnits {
    VoltampereHours,
    Kilovoltamperehours,
    Megavoltamperehours
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

    public get Kilovoltamperehours(): number {
        if(this.kilovoltamperehoursLazy !== null){
            return this.kilovoltamperehoursLazy;
        }
        return this.kilovoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.Kilovoltamperehours);
    }

    public get Megavoltamperehours(): number {
        if(this.megavoltamperehoursLazy !== null){
            return this.megavoltamperehoursLazy;
        }
        return this.megavoltamperehoursLazy = this.convertFromBase(ApparentEnergyUnits.Megavoltamperehours);
    }

    public static FromVoltampereHours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.VoltampereHours);
    }

    public static FromKilovoltamperehours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.Kilovoltamperehours);
    }

    public static FromMegavoltamperehours(value: number): ApparentEnergy {
        return new ApparentEnergy(value, ApparentEnergyUnits.Megavoltamperehours);
    }

    private convertFromBase(toUnit: ApparentEnergyUnits): number {
        switch (toUnit) {
                
            case ApparentEnergyUnits.VoltampereHours:
                return this.value;
            case ApparentEnergyUnits.Kilovoltamperehours:
                return (this.value) / 1000;
            case ApparentEnergyUnits.Megavoltamperehours:
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
            case ApparentEnergyUnits.Kilovoltamperehours:
                return (value) * 1000;
            case ApparentEnergyUnits.Megavoltamperehours:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
