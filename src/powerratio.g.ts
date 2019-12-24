export enum PowerRatioUnits {
    DecibelWatts,
    DecibelMilliwatts
}

export class PowerRatio {
    private value: number;

    public constructor(value: number, fromUnit: PowerRatioUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecibelWatts(): number {
        return this.convertFromBase(PowerRatioUnits.DecibelWatts);
    }

    public get DecibelMilliwatts(): number {
        return this.convertFromBase(PowerRatioUnits.DecibelMilliwatts);
    }

    public static FromDecibelWatts(value: number): PowerRatio {
        return new PowerRatio(value, PowerRatioUnits.DecibelWatts);
    }

    public static FromDecibelMilliwatts(value: number): PowerRatio {
        return new PowerRatio(value, PowerRatioUnits.DecibelMilliwatts);
    }

    private convertFromBase(toUnit: PowerRatioUnits): number {

            switch (toUnit) {
                
                case PowerRatioUnits.DecibelWatts:
                    return this.value;
                
                case PowerRatioUnits.DecibelMilliwatts:
                    return this.value + 30;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: PowerRatioUnits): number {

                switch (fromUnit) {
                    
                case PowerRatioUnits.DecibelWatts:
                    return value;
                
                case PowerRatioUnits.DecibelMilliwatts:
                    return value - 30;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
