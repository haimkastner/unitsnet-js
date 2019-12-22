export enum ApparentEnergyUnits {
    VoltampereHours,
    Kilovoltamperehours,
    Megavoltamperehours
}

export class ApparentEnergy {
    private value: number;

    public constructor(value: number, fromUnit: ApparentEnergyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltampereHours(): number {
        return this.convertFromBase(ApparentEnergyUnits.VoltampereHours);
    }

    public get Kilovoltamperehours(): number {
        return this.convertFromBase(ApparentEnergyUnits.Kilovoltamperehours);
    }

    public get Megavoltamperehours(): number {
        return this.convertFromBase(ApparentEnergyUnits.Megavoltamperehours);
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
                    return (this.value) * 1000;
                
                case ApparentEnergyUnits.Megavoltamperehours:
                    return (this.value) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ApparentEnergyUnits): number {

                switch (fromUnit) {
                    
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
}
