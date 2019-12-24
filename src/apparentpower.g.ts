export enum ApparentPowerUnits {
    Voltamperes,
    Kilovoltamperes,
    Megavoltamperes,
    Gigavoltamperes
}

export class ApparentPower {
    private value: number;

    public constructor(value: number, fromUnit: ApparentPowerUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Voltamperes(): number {
        return this.convertFromBase(ApparentPowerUnits.Voltamperes);
    }

    public get Kilovoltamperes(): number {
        return this.convertFromBase(ApparentPowerUnits.Kilovoltamperes);
    }

    public get Megavoltamperes(): number {
        return this.convertFromBase(ApparentPowerUnits.Megavoltamperes);
    }

    public get Gigavoltamperes(): number {
        return this.convertFromBase(ApparentPowerUnits.Gigavoltamperes);
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
                    return (this.value) * 1000;
                
                case ApparentPowerUnits.Megavoltamperes:
                    return (this.value) * 1000000;
                
                case ApparentPowerUnits.Gigavoltamperes:
                    return (this.value) * 1000000000;
                
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
                    return (value) / 1000;
                
                case ApparentPowerUnits.Megavoltamperes:
                    return (value) / 1000000;
                
                case ApparentPowerUnits.Gigavoltamperes:
                    return (value) / 1000000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
