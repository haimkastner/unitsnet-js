export enum PressureChangeRateUnits {
    PascalsPerSecond,
    PascalsPerMinute,
    AtmospheresPerSecond,
    Kilopascalspersecond,
    Megapascalspersecond,
    Kilopascalsperminute,
    Megapascalsperminute
}

export class PressureChangeRate {
    private value: number;

    public constructor(value: number, fromUnit: PressureChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get PascalsPerSecond(): number {
        return this.convertFromBase(PressureChangeRateUnits.PascalsPerSecond);
    }

    public get PascalsPerMinute(): number {
        return this.convertFromBase(PressureChangeRateUnits.PascalsPerMinute);
    }

    public get AtmospheresPerSecond(): number {
        return this.convertFromBase(PressureChangeRateUnits.AtmospheresPerSecond);
    }

    public get Kilopascalspersecond(): number {
        return this.convertFromBase(PressureChangeRateUnits.Kilopascalspersecond);
    }

    public get Megapascalspersecond(): number {
        return this.convertFromBase(PressureChangeRateUnits.Megapascalspersecond);
    }

    public get Kilopascalsperminute(): number {
        return this.convertFromBase(PressureChangeRateUnits.Kilopascalsperminute);
    }

    public get Megapascalsperminute(): number {
        return this.convertFromBase(PressureChangeRateUnits.Megapascalsperminute);
    }

    public static FromPascalsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerSecond);
    }

    public static FromPascalsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.PascalsPerMinute);
    }

    public static FromAtmospheresPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.AtmospheresPerSecond);
    }

    public static FromKilopascalspersecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.Kilopascalspersecond);
    }

    public static FromMegapascalspersecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.Megapascalspersecond);
    }

    public static FromKilopascalsperminute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.Kilopascalsperminute);
    }

    public static FromMegapascalsperminute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.Megapascalsperminute);
    }

    private convertFromBase(toUnit: PressureChangeRateUnits): number {

            switch (toUnit) {
                
                case PressureChangeRateUnits.PascalsPerSecond:
                    return this.value;
                
                case PressureChangeRateUnits.PascalsPerMinute:
                    return this.value*60;
                
                case PressureChangeRateUnits.AtmospheresPerSecond:
                    return this.value / (1.01325*1e5);
                
                case PressureChangeRateUnits.Kilopascalspersecond:
                    return (this.value) * 1000;
                
                case PressureChangeRateUnits.Megapascalspersecond:
                    return (this.value) * 1000000;
                
                case PressureChangeRateUnits.Kilopascalsperminute:
                    return (this.value/60) * 1000;
                
                case PressureChangeRateUnits.Megapascalsperminute:
                    return (this.value/60) * 1000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: PressureChangeRateUnits): number {

                switch (fromUnit) {
                    
                case PressureChangeRateUnits.PascalsPerSecond:
                    return value;
                
                case PressureChangeRateUnits.PascalsPerMinute:
                    return value/60;
                
                case PressureChangeRateUnits.AtmospheresPerSecond:
                    return value * 1.01325*1e5;
                
                case PressureChangeRateUnits.Kilopascalspersecond:
                    return (value) / 1000;
                
                case PressureChangeRateUnits.Megapascalspersecond:
                    return (value) / 1000000;
                
                case PressureChangeRateUnits.Kilopascalsperminute:
                    return (value*60) / 1000;
                
                case PressureChangeRateUnits.Megapascalsperminute:
                    return (value*60) / 1000000;
                
                    default:
                        break;
                }
                return NaN;
                
    }
}
