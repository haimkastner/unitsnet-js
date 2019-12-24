export enum ReactivePowerUnits {
    VoltamperesReactive,
    Kilovoltamperesreactive,
    Megavoltamperesreactive,
    Gigavoltamperesreactive
}

export class ReactivePower {
    private value: number;

    public constructor(value: number, fromUnit: ReactivePowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltamperesReactive(): number {
        return this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }

    public get Kilovoltamperesreactive(): number {
        return this.convertFromBase(ReactivePowerUnits.Kilovoltamperesreactive);
    }

    public get Megavoltamperesreactive(): number {
        return this.convertFromBase(ReactivePowerUnits.Megavoltamperesreactive);
    }

    public get Gigavoltamperesreactive(): number {
        return this.convertFromBase(ReactivePowerUnits.Gigavoltamperesreactive);
    }

    public static FromVoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }

    public static FromKilovoltamperesreactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.Kilovoltamperesreactive);
    }

    public static FromMegavoltamperesreactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.Megavoltamperesreactive);
    }

    public static FromGigavoltamperesreactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.Gigavoltamperesreactive);
    }

    private convertFromBase(toUnit: ReactivePowerUnits): number {

                switch (toUnit) {
                    
                case ReactivePowerUnits.VoltamperesReactive:
                    return this.value;
                
                case ReactivePowerUnits.Kilovoltamperesreactive:
                    return (this.value) / 1000;
                
                case ReactivePowerUnits.Megavoltamperesreactive:
                    return (this.value) / 1000000;
                
                case ReactivePowerUnits.Gigavoltamperesreactive:
                    return (this.value) / 1000000000;
                
                    default:
                        break;
                }
                return NaN;
            
    }

    private convertToBase(value: number, fromUnit: ReactivePowerUnits): number {

                switch (fromUnit) {
                    
                case ReactivePowerUnits.VoltamperesReactive:
                    return value;
                
                case ReactivePowerUnits.Kilovoltamperesreactive:
                    return (value) * 1000;
                
                case ReactivePowerUnits.Megavoltamperesreactive:
                    return (value) * 1000000;
                
                case ReactivePowerUnits.Gigavoltamperesreactive:
                    return (value) * 1000000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
