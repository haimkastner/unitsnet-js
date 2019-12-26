export enum IlluminanceUnits {
    Lux,
    Kilolux,
    Megalux
}

export class Illuminance {
    private value: number;
    private luxLazy: number | null = null;
    private kiloluxLazy: number | null = null;
    private megaluxLazy: number | null = null;

    public constructor(value: number, fromUnit: IlluminanceUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Lux(): number {
        if(this.luxLazy !== null){
            return this.luxLazy;
        }
        return this.luxLazy = this.convertFromBase(IlluminanceUnits.Lux);
    }

    public get Kilolux(): number {
        if(this.kiloluxLazy !== null){
            return this.kiloluxLazy;
        }
        return this.kiloluxLazy = this.convertFromBase(IlluminanceUnits.Kilolux);
    }

    public get Megalux(): number {
        if(this.megaluxLazy !== null){
            return this.megaluxLazy;
        }
        return this.megaluxLazy = this.convertFromBase(IlluminanceUnits.Megalux);
    }

    public static FromLux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Lux);
    }

    public static FromKilolux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Kilolux);
    }

    public static FromMegalux(value: number): Illuminance {
        return new Illuminance(value, IlluminanceUnits.Megalux);
    }

    private convertFromBase(toUnit: IlluminanceUnits): number {
        switch (toUnit) {
                
            case IlluminanceUnits.Lux:
                return this.value;
            case IlluminanceUnits.Kilolux:
                return (this.value) / 1000;
            case IlluminanceUnits.Megalux:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: IlluminanceUnits): number {
        switch (fromUnit) {
                
            case IlluminanceUnits.Lux:
                return value;
            case IlluminanceUnits.Kilolux:
                return (value) * 1000;
            case IlluminanceUnits.Megalux:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
}
