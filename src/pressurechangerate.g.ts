export enum PressureChangeRateUnits {
    PascalsPerSecond,
    PascalsPerMinute,
    AtmospheresPerSecond,
    KilopascalPerSecond,
    MegapascalPerSecond,
    KilopascalPerMinute,
    MegapascalPerMinute
}

export class PressureChangeRate {
    private value: number;
    private pascalspersecondLazy: number | null = null;
    private pascalsperminuteLazy: number | null = null;
    private atmospherespersecondLazy: number | null = null;
    private kilopascalpersecondLazy: number | null = null;
    private megapascalpersecondLazy: number | null = null;
    private kilopascalperminuteLazy: number | null = null;
    private megapascalperminuteLazy: number | null = null;

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

    public get KilopascalPerSecond(): number {
        if(this.kilopascalpersecondLazy !== null){
            return this.kilopascalpersecondLazy;
        }
        return this.kilopascalpersecondLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalPerSecond);
    }

    public get MegapascalPerSecond(): number {
        if(this.megapascalpersecondLazy !== null){
            return this.megapascalpersecondLazy;
        }
        return this.megapascalpersecondLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalPerSecond);
    }

    public get KilopascalPerMinute(): number {
        if(this.kilopascalperminuteLazy !== null){
            return this.kilopascalperminuteLazy;
        }
        return this.kilopascalperminuteLazy = this.convertFromBase(PressureChangeRateUnits.KilopascalPerMinute);
    }

    public get MegapascalPerMinute(): number {
        if(this.megapascalperminuteLazy !== null){
            return this.megapascalperminuteLazy;
        }
        return this.megapascalperminuteLazy = this.convertFromBase(PressureChangeRateUnits.MegapascalPerMinute);
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

    public static FromKilopascalPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalPerSecond);
    }

    public static FromMegapascalPerSecond(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalPerSecond);
    }

    public static FromKilopascalPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.KilopascalPerMinute);
    }

    public static FromMegapascalPerMinute(value: number): PressureChangeRate {
        return new PressureChangeRate(value, PressureChangeRateUnits.MegapascalPerMinute);
    }

    private convertFromBase(toUnit: PressureChangeRateUnits): number {
        switch (toUnit) {
                
            case PressureChangeRateUnits.PascalsPerSecond:
                return this.value;
            case PressureChangeRateUnits.PascalsPerMinute:
                return this.value*60;
            case PressureChangeRateUnits.AtmospheresPerSecond:
                return this.value / (1.01325*1e5);
            case PressureChangeRateUnits.KilopascalPerSecond:
                return (this.value) / 1000;
            case PressureChangeRateUnits.MegapascalPerSecond:
                return (this.value) / 1000000;
            case PressureChangeRateUnits.KilopascalPerMinute:
                return (this.value*60) / 1000;
            case PressureChangeRateUnits.MegapascalPerMinute:
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
            case PressureChangeRateUnits.KilopascalPerSecond:
                return (value) * 1000;
            case PressureChangeRateUnits.MegapascalPerSecond:
                return (value) * 1000000;
            case PressureChangeRateUnits.KilopascalPerMinute:
                return (value/60) * 1000;
            case PressureChangeRateUnits.MegapascalPerMinute:
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
            case PressureChangeRateUnits.KilopascalPerSecond:
                return this.KilopascalPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.MegapascalPerSecond:
                return this.MegapascalPerSecond + ` Pa/s`;
            case PressureChangeRateUnits.KilopascalPerMinute:
                return this.KilopascalPerMinute + ` Pa/min`;
            case PressureChangeRateUnits.MegapascalPerMinute:
                return this.MegapascalPerMinute + ` Pa/min`;
        default:
            break;
        }
        return this.value.toString();
    }
}
