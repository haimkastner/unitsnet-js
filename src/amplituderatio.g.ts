export enum AmplitudeRatioUnits {
    DecibelVolts,
    DecibelMicrovolts,
    DecibelMillivolts,
    DecibelsUnloaded
}

export class AmplitudeRatio {
    private value: number;
    private decibelvoltsLazy: number | null = null;
    private decibelmicrovoltsLazy: number | null = null;
    private decibelmillivoltsLazy: number | null = null;
    private decibelsunloadedLazy: number | null = null;

    public constructor(value: number, fromUnit: AmplitudeRatioUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecibelVolts(): number {
        if(this.decibelvoltsLazy !== null){
            return this.decibelvoltsLazy;
        }
        return this.decibelvoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelVolts);
    }

    public get DecibelMicrovolts(): number {
        if(this.decibelmicrovoltsLazy !== null){
            return this.decibelmicrovoltsLazy;
        }
        return this.decibelmicrovoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMicrovolts);
    }

    public get DecibelMillivolts(): number {
        if(this.decibelmillivoltsLazy !== null){
            return this.decibelmillivoltsLazy;
        }
        return this.decibelmillivoltsLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelMillivolts);
    }

    public get DecibelsUnloaded(): number {
        if(this.decibelsunloadedLazy !== null){
            return this.decibelsunloadedLazy;
        }
        return this.decibelsunloadedLazy = this.convertFromBase(AmplitudeRatioUnits.DecibelsUnloaded);
    }

    public static FromDecibelVolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelVolts);
    }

    public static FromDecibelMicrovolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMicrovolts);
    }

    public static FromDecibelMillivolts(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelMillivolts);
    }

    public static FromDecibelsUnloaded(value: number): AmplitudeRatio {
        return new AmplitudeRatio(value, AmplitudeRatioUnits.DecibelsUnloaded);
    }

    private convertFromBase(toUnit: AmplitudeRatioUnits): number {
        switch (toUnit) {
                
            case AmplitudeRatioUnits.DecibelVolts:
                return this.value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return this.value + 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return this.value + 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return this.value + 2.218487499;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: AmplitudeRatioUnits): number {
        switch (fromUnit) {
                
            case AmplitudeRatioUnits.DecibelVolts:
                return value;
            case AmplitudeRatioUnits.DecibelMicrovolts:
                return value - 120;
            case AmplitudeRatioUnits.DecibelMillivolts:
                return value - 60;
            case AmplitudeRatioUnits.DecibelsUnloaded:
                return value - 2.218487499;
            default:
                break;
        }
        return NaN;
    }
}
