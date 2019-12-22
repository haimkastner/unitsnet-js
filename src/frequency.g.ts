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

    public constructor(value: number, fromUnit: FrequencyUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get Hertz(): number {
        return this.convertFromBase(FrequencyUnits.Hertz);
    }

    public get RadiansPerSecond(): number {
        return this.convertFromBase(FrequencyUnits.RadiansPerSecond);
    }

    public get CyclesPerMinute(): number {
        return this.convertFromBase(FrequencyUnits.CyclesPerMinute);
    }

    public get CyclesPerHour(): number {
        return this.convertFromBase(FrequencyUnits.CyclesPerHour);
    }

    public get BeatsPerMinute(): number {
        return this.convertFromBase(FrequencyUnits.BeatsPerMinute);
    }

    public get Kilohertz(): number {
        return this.convertFromBase(FrequencyUnits.Kilohertz);
    }

    public get Megahertz(): number {
        return this.convertFromBase(FrequencyUnits.Megahertz);
    }

    public get Gigahertz(): number {
        return this.convertFromBase(FrequencyUnits.Gigahertz);
    }

    public get Terahertz(): number {
        return this.convertFromBase(FrequencyUnits.Terahertz);
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
                    return this.value/6.2831853072;
                
                case FrequencyUnits.CyclesPerMinute:
                    return this.value/60;
                
                case FrequencyUnits.CyclesPerHour:
                    return this.value/3600;
                
                case FrequencyUnits.BeatsPerMinute:
                    return this.value/60;
                
                case FrequencyUnits.Kilohertz:
                    return (this.value) * 1000;
                
                case FrequencyUnits.Megahertz:
                    return (this.value) * 1000000;
                
                case FrequencyUnits.Gigahertz:
                    return (this.value) * 1000000000;
                
                case FrequencyUnits.Terahertz:
                    return (this.value) * 1000000000000;
                
                default:
                    break;
            }
            return NaN;
            
    }

    private convertToBase(value: number, fromUnit: FrequencyUnits): number {

                switch (fromUnit) {
                    
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
}
