export enum ReactivePowerUnits {
    VoltamperesReactive,
    KilovoltamperesReactive,
    MegavoltamperesReactive,
    GigavoltamperesReactive
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

    public get KilovoltamperesReactive(): number {
        if(this.kilovoltamperesreactiveLazy !== null){
            return this.kilovoltamperesreactiveLazy;
        }
        return this.kilovoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltamperesReactive);
    }

    public get MegavoltamperesReactive(): number {
        if(this.megavoltamperesreactiveLazy !== null){
            return this.megavoltamperesreactiveLazy;
        }
        return this.megavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltamperesReactive);
    }

    public get GigavoltamperesReactive(): number {
        if(this.gigavoltamperesreactiveLazy !== null){
            return this.gigavoltamperesreactiveLazy;
        }
        return this.gigavoltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltamperesReactive);
    }

    public static FromVoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }

    public static FromKilovoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltamperesReactive);
    }

    public static FromMegavoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltamperesReactive);
    }

    public static FromGigavoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltamperesReactive);
    }

    private convertFromBase(toUnit: ReactivePowerUnits): number {
        switch (toUnit) {
                
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
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
            case ReactivePowerUnits.KilovoltamperesReactive:
                return (value) * 1000;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return (value) * 1000000;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ReactivePowerUnits = ReactivePowerUnits.VoltamperesReactive): string {

        switch (toUnit) {
            
            case ReactivePowerUnits.VoltamperesReactive:
                return this.VoltamperesReactive + ` var`;
            case ReactivePowerUnits.KilovoltamperesReactive:
                return this.KilovoltamperesReactive + ` var`;
            case ReactivePowerUnits.MegavoltamperesReactive:
                return this.MegavoltamperesReactive + ` var`;
            case ReactivePowerUnits.GigavoltamperesReactive:
                return this.GigavoltamperesReactive + ` var`;
        default:
            break;
        }
        return this.value.toString();
    }
}
