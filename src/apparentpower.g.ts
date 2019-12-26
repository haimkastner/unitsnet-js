export enum ApparentPowerUnits {
    Voltamperes,
    Kilovoltampere,
    Megavoltampere,
    Gigavoltampere
}

export class ApparentPower {
    private value: number;
    private voltamperesLazy: number | null = null;
    private kilovoltampereLazy: number | null = null;
    private megavoltampereLazy: number | null = null;
    private gigavoltampereLazy: number | null = null;

    public constructor(value: number, fromUnit: ApparentPowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Voltamperes(): number {
        if(this.voltamperesLazy !== null){
            return this.voltamperesLazy;
        }
        return this.voltamperesLazy = this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }

    public get Kilovoltampere(): number {
        if(this.kilovoltampereLazy !== null){
            return this.kilovoltampereLazy;
        }
        return this.kilovoltampereLazy = this.convertFromBase(ApparentPowerUnits.Kilovoltampere);
    }

    public get Megavoltampere(): number {
        if(this.megavoltampereLazy !== null){
            return this.megavoltampereLazy;
        }
        return this.megavoltampereLazy = this.convertFromBase(ApparentPowerUnits.Megavoltampere);
    }

    public get Gigavoltampere(): number {
        if(this.gigavoltampereLazy !== null){
            return this.gigavoltampereLazy;
        }
        return this.gigavoltampereLazy = this.convertFromBase(ApparentPowerUnits.Gigavoltampere);
    }

    public static FromVoltamperes(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Voltamperes);
    }

    public static FromKilovoltampere(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Kilovoltampere);
    }

    public static FromMegavoltampere(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Megavoltampere);
    }

    public static FromGigavoltampere(value: number): ApparentPower {
        return new ApparentPower(value, ApparentPowerUnits.Gigavoltampere);
    }

    private convertFromBase(toUnit: ApparentPowerUnits): number {
        switch (toUnit) {
                
            case ApparentPowerUnits.Voltamperes:
                return this.value;
            case ApparentPowerUnits.Kilovoltampere:
                return (this.value) / 1000;
            case ApparentPowerUnits.Megavoltampere:
                return (this.value) / 1000000;
            case ApparentPowerUnits.Gigavoltampere:
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
            case ApparentPowerUnits.Kilovoltampere:
                return (value) * 1000;
            case ApparentPowerUnits.Megavoltampere:
                return (value) * 1000000;
            case ApparentPowerUnits.Gigavoltampere:
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
            case ApparentPowerUnits.Kilovoltampere:
                return this.Kilovoltampere + ` VA`;
            case ApparentPowerUnits.Megavoltampere:
                return this.Megavoltampere + ` VA`;
            case ApparentPowerUnits.Gigavoltampere:
                return this.Gigavoltampere + ` VA`;
        default:
            break;
        }
        return this.value.toString();
    }
}
