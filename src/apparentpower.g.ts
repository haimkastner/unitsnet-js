export enum ApparentPowerUnits {
    Voltamperes,
    Kilovoltamperes,
    Megavoltamperes,
    Gigavoltamperes
}

export class ApparentPower {
    private value: number;
    private voltamperesLazy: number | null = null;
    private kilovoltamperesLazy: number | null = null;
    private megavoltamperesLazy: number | null = null;
    private gigavoltamperesLazy: number | null = null;

    public constructor(value: number, fromUnit: ApparentPowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Voltamperes(): number {
        if(this.voltamperesLazy !== null){
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }

    public get Kilovoltamperes(): number {
        if(this.kilovoltamperesLazy !== null){
            return this.kilovoltamperesLazy;
        }
        return this.kilovoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Kilovoltamperes);
    }

    public get Megavoltamperes(): number {
        if(this.megavoltamperesLazy !== null){
            return this.megavoltamperesLazy;
        }
        return this.megavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Megavoltamperes);
    }

    public get Gigavoltamperes(): number {
        if(this.gigavoltamperesLazy !== null){
            return this.gigavoltamperesLazy;
        }
        return this.gigavoltamperesLazy = this.convertFromBase(ApparentPowerUnits.Gigavoltamperes);
    }

    public static FromVoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Voltamperes);
    }

    public static FromKilovoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Kilovoltamperes);
    }

    public static FromMegavoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Megavoltamperes);
    }

    public static FromGigavoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Gigavoltamperes);
    }

    private convertFromBase(toUnit: ApparentPowerUnits): number {
        switch (toUnit) {
                
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (this.value) / 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (this.value) / 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
                return (this.value) / 1000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: ApparentPowerUnits): number {
        switch (fromUnit) {
                
            case ApparentPowerUnits.Voltamperes:
                return value;
            case ApparentPowerUnits.Kilovoltamperes:
                return (value) * 1000;
            case ApparentPowerUnits.Megavoltamperes:
                return (value) * 1000000;
            case ApparentPowerUnits.Gigavoltamperes:
                return (value) * 1000000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: ApparentPowerUnits = ApparentPowerUnits.Voltamperes): string {

        switch (toUnit) {
            
            case ApparentPowerUnits.Voltamperes:
                return this.Voltamperes + ` VA`;
            case ApparentPowerUnits.Kilovoltamperes:
                return this.Kilovoltamperes + ` VA`;
            case ApparentPowerUnits.Megavoltamperes:
                return this.Megavoltamperes + ` VA`;
            case ApparentPowerUnits.Gigavoltamperes:
                return this.Gigavoltamperes + ` VA`;
        default:
            break;
        }
        return this.value.toString();
    }
}
