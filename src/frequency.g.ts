export enum FrequencyUnits {
    Hertz,
    RadiansPerSecond,
    CyclesPerMinute,
    CyclesPerHour,
    BeatsPerMinute,
    Kilohertz,
    Megahertz,
    Gigahertz,
    Terahertz
}

export class Frequency {
    private value: number;
    private hertzLazy: number | null = null;
    private radianspersecondLazy: number | null = null;
    private cyclesperminuteLazy: number | null = null;
    private cyclesperhourLazy: number | null = null;
    private beatsperminuteLazy: number | null = null;
    private kilohertzLazy: number | null = null;
    private megahertzLazy: number | null = null;
    private gigahertzLazy: number | null = null;
    private terahertzLazy: number | null = null;

    public constructor(value: number, fromUnit: FrequencyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Hertz(): number {
        if(this.hertzLazy !== null){
            return this.hertzLazy;
        }
        return this.hertzLazy = this.convertFromBase(FrequencyUnits.Hertz);
    }

    public get RadiansPerSecond(): number {
        if(this.radianspersecondLazy !== null){
            return this.radianspersecondLazy;
        }
        return this.radianspersecondLazy = this.convertFromBase(FrequencyUnits.RadiansPerSecond);
    }

    public get CyclesPerMinute(): number {
        if(this.cyclesperminuteLazy !== null){
            return this.cyclesperminuteLazy;
        }
        return this.cyclesperminuteLazy = this.convertFromBase(FrequencyUnits.CyclesPerMinute);
    }

    public get CyclesPerHour(): number {
        if(this.cyclesperhourLazy !== null){
            return this.cyclesperhourLazy;
        }
        return this.cyclesperhourLazy = this.convertFromBase(FrequencyUnits.CyclesPerHour);
    }

    public get BeatsPerMinute(): number {
        if(this.beatsperminuteLazy !== null){
            return this.beatsperminuteLazy;
        }
        return this.beatsperminuteLazy = this.convertFromBase(FrequencyUnits.BeatsPerMinute);
    }

    public get Kilohertz(): number {
        if(this.kilohertzLazy !== null){
            return this.kilohertzLazy;
        }
        return this.kilohertzLazy = this.convertFromBase(FrequencyUnits.Kilohertz);
    }

    public get Megahertz(): number {
        if(this.megahertzLazy !== null){
            return this.megahertzLazy;
        }
        return this.megahertzLazy = this.convertFromBase(FrequencyUnits.Megahertz);
    }

    public get Gigahertz(): number {
        if(this.gigahertzLazy !== null){
            return this.gigahertzLazy;
        }
        return this.gigahertzLazy = this.convertFromBase(FrequencyUnits.Gigahertz);
    }

    public get Terahertz(): number {
        if(this.terahertzLazy !== null){
            return this.terahertzLazy;
        }
        return this.terahertzLazy = this.convertFromBase(FrequencyUnits.Terahertz);
    }

    public static FromHertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Hertz);
    }

    public static FromRadiansPerSecond(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.RadiansPerSecond);
    }

    public static FromCyclesPerMinute(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.CyclesPerMinute);
    }

    public static FromCyclesPerHour(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.CyclesPerHour);
    }

    public static FromBeatsPerMinute(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.BeatsPerMinute);
    }

    public static FromKilohertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Kilohertz);
    }

    public static FromMegahertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Megahertz);
    }

    public static FromGigahertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Gigahertz);
    }

    public static FromTerahertz(value: number): Frequency {
        return new Frequency(value, FrequencyUnits.Terahertz);
    }

    private convertFromBase(toUnit: FrequencyUnits): number {
        switch (toUnit) {
                
            case FrequencyUnits.Hertz:
                return this.value;
            case FrequencyUnits.RadiansPerSecond:
                return this.value*6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return this.value*60;
            case FrequencyUnits.CyclesPerHour:
                return this.value*3600;
            case FrequencyUnits.BeatsPerMinute:
                return this.value*60;
            case FrequencyUnits.Kilohertz:
                return (this.value) / 1000;
            case FrequencyUnits.Megahertz:
                return (this.value) / 1000000;
            case FrequencyUnits.Gigahertz:
                return (this.value) / 1000000000;
            case FrequencyUnits.Terahertz:
                return (this.value) / 1000000000000;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: FrequencyUnits): number {
        switch (fromUnit) {
                
            case FrequencyUnits.Hertz:
                return value;
            case FrequencyUnits.RadiansPerSecond:
                return value/6.2831853072;
            case FrequencyUnits.CyclesPerMinute:
                return value/60;
            case FrequencyUnits.CyclesPerHour:
                return value/3600;
            case FrequencyUnits.BeatsPerMinute:
                return value/60;
            case FrequencyUnits.Kilohertz:
                return (value) * 1000;
            case FrequencyUnits.Megahertz:
                return (value) * 1000000;
            case FrequencyUnits.Gigahertz:
                return (value) * 1000000000;
            case FrequencyUnits.Terahertz:
                return (value) * 1000000000000;
            default:
                break;
        }
        return NaN;
    }
}
