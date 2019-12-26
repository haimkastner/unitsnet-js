export enum PressureChangeRateUnits {
    PascalsPerSecond,
    PascalsPerMinute,
    AtmospheresPerSecond,
    KilopascalsPerSecond,
    MegapascalsPerSecond,
    KilopascalsPerMinute,
    MegapascalsPerMinute
}

export class PressureChangeRate {
    private value: number;
    private pascalspersecondLazy: number | null = null;
    private pascalsperminuteLazy: number | null = null;
    private atmospherespersecondLazy: number | null = null;
    private kilopascalspersecondLazy: number | null = null;
    private megapascalspersecondLazy: number | null = null;
    private kilopascalsperminuteLazy: number | null = null;
    private megapascalsperminuteLazy: number | null = null;

    public constructor(value: number, fromUnit: PressureChangeRateUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get PascalsPerSecond(): number {
        if(this.pascalspersecondLazy !== null){
            return this.pascalspersecondLazy;
        }
        return this.pascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerSecond);
    }

    public get PascalsPerMinute(): number {
        if(this.pascalsperminuteLazy !== null){
            return this.pascalsperminuteLazy;
        }
        return this.pascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.PascalsPerMinute);
    }

    public get AtmospheresPerSecond(): number {
        if(this.atmospherespersecondLazy !== null){
            return this.atmospherespersecondLazy;
        }
        return this.atmospherespersecondLazy = this.convertFromBase(PressureChangeRateUnits.AtmospheresPerSecond);
    }

    public get KilopascalsPerSecond(): number {
        if(this.kilopascalspersecondLazy !== null){
            return this.kilopascalspersecondLazy;
        }
        return this.kilopascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerSecond);
    }

    public get MegapascalsPerSecond(): number {
        if(this.megapascalspersecondLazy !== null){
            return this.megapascalspersecondLazy;
        }
        return this.megapascalspersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerSecond);
    }

    public get KilopascalsPerMinute(): number {
        if(this.kilopascalsperminuteLazy !== null){
            return this.kilopascalsperminuteLazy;
        }
        return this.kilopascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalsPerMinute);
    }

    public get MegapascalsPerMinute(): number {
        if(this.megapascalsperminuteLazy !== null){
            return this.megapascalsperminuteLazy;
        }
        return this.megapascalsperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalsPerMinute);
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

    public static FromKilopascalsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerSecond);
    }

    public static FromMegapascalsPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerSecond);
    }

    public static FromKilopascalsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalsPerMinute);
    }

    public static FromMegapascalsPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalsPerMinute);
    }

    private convertFromBase(toUnit: PressureChangeRateUnits): number {
        switch (toUnit) {
                
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value*60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325*1e5);
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (this.value*60) / 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return (this.value*60) / 1000000;
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
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return (value) * 1000;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return (value/60) * 1000;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return (value/60) * 1000000;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: PressureChangeRateUnits = PressureChangeRateUnits.PascalsPerSecond): string {

        switch (toUnit) {
            
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.PascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.PascalsPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.AtmospheresPerSecond + ` atm/s`;
            case PressureChangeRateUnits.KilopascalsPerSecond:
                return this.KilopascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.MegapascalsPerSecond:
                return this.MegapascalsPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.KilopascalsPerMinute:
                return this.KilopascalsPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.MegapascalsPerMinute:
                return this.MegapascalsPerMinute + ` Pa/min`;
        default:
            break;
        }
        return this.value.toString();
    }
}
