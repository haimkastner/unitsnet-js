export enum ReactivePowerUnits {
    VoltamperesReactive,
    KilovoltampereReactive,
    MegavoltampereReactive,
    GigavoltampereReactive
}

export class ReactivePower {
    private value: number;
    private voltamperesreactiveLazy: number | null = null;
    private kilovoltamperereactiveLazy: number | null = null;
    private megavoltamperereactiveLazy: number | null = null;
    private gigavoltamperereactiveLazy: number | null = null;

    public constructor(value: number, fromUnit: ReactivePowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get VoltamperesReactive(): number {
        if(this.voltamperesreactiveLazy !== null){
            return this.voltamperesreactiveLazy;
        }
        return this.voltamperesreactiveLazy = this.convertFromBase(ReactivePowerUnits.VoltamperesReactive);
    }

    public get KilovoltampereReactive(): number {
        if(this.kilovoltamperereactiveLazy !== null){
            return this.kilovoltamperereactiveLazy;
        }
        return this.kilovoltamperereactiveLazy = this.convertFromBase(ReactivePowerUnits.KilovoltampereReactive);
    }

    public get MegavoltampereReactive(): number {
        if(this.megavoltamperereactiveLazy !== null){
            return this.megavoltamperereactiveLazy;
        }
        return this.megavoltamperereactiveLazy = this.convertFromBase(ReactivePowerUnits.MegavoltampereReactive);
    }

    public get GigavoltampereReactive(): number {
        if(this.gigavoltamperereactiveLazy !== null){
            return this.gigavoltamperereactiveLazy;
        }
        return this.gigavoltamperereactiveLazy = this.convertFromBase(ReactivePowerUnits.GigavoltampereReactive);
    }

    public static FromVoltamperesReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.VoltamperesReactive);
    }

    public static FromKilovoltampereReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.KilovoltampereReactive);
    }

    public static FromMegavoltampereReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.MegavoltampereReactive);
    }

    public static FromGigavoltampereReactive(value: number): ReactivePower {
        return new ReactivePower(value, ReactivePowerUnits.GigavoltampereReactive);
    }

    private convertFromBase(toUnit: ReactivePowerUnits): number {
        switch (toUnit) {
                
            case ReactivePowerUnits.VoltamperesReactive:
                return this.value;
            case ReactivePowerUnits.KilovoltampereReactive:
                return (this.value) / 1000;
            case ReactivePowerUnits.MegavoltampereReactive:
                return (this.value) / 1000000;
            case ReactivePowerUnits.GigavoltampereReactive:
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
            case ReactivePowerUnits.KilovoltampereReactive:
                return (value) * 1000;
            case ReactivePowerUnits.MegavoltampereReactive:
                return (value) * 1000000;
            case ReactivePowerUnits.GigavoltampereReactive:
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
            case ReactivePowerUnits.KilovoltampereReactive:
                return this.KilovoltampereReactive + ` var`;
            case ReactivePowerUnits.MegavoltampereReactive:
                return this.MegavoltampereReactive + ` var`;
            case ReactivePowerUnits.GigavoltampereReactive:
                return this.GigavoltampereReactive + ` var`;
        default:
            break;
        }
        return this.value.toString();
    }
}
