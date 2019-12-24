export enum RatioUnits {
    DecimalFractions,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion
}

export class Ratio {
    private value: number;

    public constructor(value: number, fromUnit: RatioUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecimalFractions(): number {
        return this.convertFromBase(RatioUnits.DecimalFractions);
    }

    public get Percent(): number {
        return this.convertFromBase(RatioUnits.Percent);
    }

    public get PartsPerThousand(): number {
        return this.convertFromBase(RatioUnits.PartsPerThousand);
    }

    public get PartsPerMillion(): number {
        return this.convertFromBase(RatioUnits.PartsPerMillion);
    }

    public get PartsPerBillion(): number {
        return this.convertFromBase(RatioUnits.PartsPerBillion);
    }

    public get PartsPerTrillion(): number {
        return this.convertFromBase(RatioUnits.PartsPerTrillion);
    }

    public static FromDecimalFractions(value: number): Ratio {
        return new Ratio(value, RatioUnits.DecimalFractions);
    }

    public static FromPercent(value: number): Ratio {
        return new Ratio(value, RatioUnits.Percent);
    }

    public static FromPartsPerThousand(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerThousand);
    }

    public static FromPartsPerMillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerMillion);
    }

    public static FromPartsPerBillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerBillion);
    }

    public static FromPartsPerTrillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerTrillion);
    }

    private convertFromBase(toUnit: RatioUnits): number {

            switch (toUnit) {
                
                case RatioUnits.DecimalFractions:
                    return this.value;
                
                case RatioUnits.Percent:
                    return this.value*1e2;
                
                case RatioUnits.PartsPerThousand:
                    return this.value*1e3;
                
                case RatioUnits.PartsPerMillion:
                    return this.value*1e6;
                
                case RatioUnits.PartsPerBillion:
                    return this.value*1e9;
                
                case RatioUnits.PartsPerTrillion:
                    return this.value*1e12;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: RatioUnits): number {

                switch (fromUnit) {
                    
                case RatioUnits.DecimalFractions:
                    return value;
                
                case RatioUnits.Percent:
                    return value/1e2;
                
                case RatioUnits.PartsPerThousand:
                    return value/1e3;
                
                case RatioUnits.PartsPerMillion:
                    return value/1e6;
                
                case RatioUnits.PartsPerBillion:
                    return value/1e9;
                
                case RatioUnits.PartsPerTrillion:
                    return value/1e12;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
