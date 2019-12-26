export enum RatioChangeRateUnits {
    PercentsPerSecond,
    DecimalFractionsPerSecond
}

export class RatioChangeRate {
    private value: number;
    private percentspersecondLazy: number | null = null;
    private decimalfractionspersecondLazy: number | null = null;

    public constructor(value: number, fromUnit: RatioChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get PercentsPerSecond(): number {
        if(this.percentspersecondLazy !== null){
            return this.percentspersecondLazy;
        }
        return this.percentspersecondLazy = this.convertFromBase(RatioChangeRateUnits.PercentsPerSecond);
    }

    public get DecimalFractionsPerSecond(): number {
        if(this.decimalfractionspersecondLazy !== null){
            return this.decimalfractionspersecondLazy;
        }
        return this.decimalfractionspersecondLazy = this.convertFromBase(RatioChangeRateUnits.DecimalFractionsPerSecond);
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
                return this.value/1e2;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RatioChangeRateUnits): number {
        switch (fromUnit) {
                
            case RatioChangeRateUnits.PercentsPerSecond:
                return value;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return value*1e2;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: RatioChangeRateUnits = RatioChangeRateUnits.DecimalFractionsPerSecond): string {

        switch (toUnit) {
            
            case RatioChangeRateUnits.PercentsPerSecond:
                return this.PercentsPerSecond + ` %/s`;
            case RatioChangeRateUnits.DecimalFractionsPerSecond:
                return this.DecimalFractionsPerSecond + ` /s`;
        default:
            break;
        }
        return this.value.toString();
    }
}
