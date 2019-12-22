export enum RatioChangeRateUnits {
    PercentsPerSecond,
    DecimalFractionsPerSecond
}

export class RatioChangeRate {
    private value: number;

    public constructor(value: number, fromUnit: RatioChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get PercentsPerSecond(): number {
        return this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }

    public get DecimalFractionsPerSecond(): number {
        return this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    public static FromPercentsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.PercentsPerSecond);
    }

    public static FromDecimalFractionsPerSecond(value: number): RatioChangeRate {
        return new RatioChangeRate(value, RatioChangeRateUnits.DecimalFractionsPerSecond);
    }

    private convertFromBase(toUnit: RatioChangeRateUnits): number {

            switch (toUnit) {
                
                case RatioChangeRateUnits.PercentsPerSecond:
                    return this.value;
                
                case RatioChangeRateUnits.DecimalFractionsPerSecond:
                    return this.value*1e2;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: RatioChangeRateUnits): number {

                switch (fromUnit) {
                    
                case RatioChangeRateUnits.PercentsPerSecond:
                    return this.value;
                
                case RatioChangeRateUnits.DecimalFractionsPerSecond:
                    return this.value/1e2;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
