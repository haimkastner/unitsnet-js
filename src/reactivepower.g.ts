export enum ReactivePowerUnits {
    VoltamperesReactive,
    Kilovoltamperesreactive,
    Megavoltamperesreactive,
    Gigavoltamperesreactive
}

export class ReactivePower {
    private value: number;
    private voltamperesreactiveLazy: number | null = null;
    private kilovoltamperesreactiveLazy: number | null = null;
    private megavoltamperesreactiveLazy: number | null = null;
    private gigavoltamperesreactiveLazy: number | null = null;

    public constructor(value: number, fromUnit: ReactivePowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltamperesReactive(): number {
        if(this.voltamperesreactiveLazy !== null){
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }

    public get Kilovoltamperesreactive(): number {
        if(this.kilovoltamperesreactiveLazy !== null){
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.Kilovoltamperesreactive);
    }

    public get Megavoltamperesreactive(): number {
        if(this.megavoltamperesreactiveLazy !== null){
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.Megavoltamperesreactive);
    }

    public get Gigavoltamperesreactive(): number {
        if(this.gigavoltamperesreactiveLazy !== null){
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.Gigavoltamperesreactive);
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
