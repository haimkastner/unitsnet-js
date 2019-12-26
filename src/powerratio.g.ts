export enum PowerRatioUnits {
    DecibelWatts,
    DecibelMilliwatts
}

export class PowerRatio {
    private value: number;
    private decibelwattsLazy: number | null = null;
    private decibelmilliwattsLazy: number | null = null;

    public constructor(value: number, fromUnit: PowerRatioUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecibelWatts(): number {
        if(this.decibelwattsLazy !== null){
            return this.decibelwattsLazy;
        }
        return this.decibelwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelWatts);
    }

    public get DecibelMilliwatts(): number {
        if(this.decibelmilliwattsLazy !== null){
            return this.decibelmilliwattsLazy;
        }
        return this.decibelmilliwattsLazy = this.convertFromBase(PowerRatioUnits.DecibelMilliwatts);
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

    public toString(toUnit: PowerRatioUnits = PowerRatioUnits.DecibelWatts): string {

        switch (toUnit) {
            
            case PowerRatioUnits.DecibelWatts:
                return this.DecibelWatts + ` dBW`;
            case PowerRatioUnits.DecibelMilliwatts:
                return this.DecibelMilliwatts + ` dBmW`;
        default:
            break;
        }
        return this.value.toString();
    }
}
